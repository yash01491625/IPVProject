import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

function binAspectRatio(n: number) {
  if (n < 0.75) return "Low";
  if (n < 1.25) return "Medium";
  return "High";
}

function binEdgeCount(n: number) {
  if (n < 18281) return "Low";
  if (n < 48681) return "Medium";
  return "High";
}

function binBrightness(n: number) {
  if (n < 80.12) return "Low";
  if (n < 124.2) return "Medium";
  return "High";
}

function binLargestArea(n: number) {
  if (n < 53808) return "Low";
  if (n < 287353) return "Medium";
  return "High";
}

function binSymmetry(n: number) {
  if (n < 110.86) return "Low";
  if (n < 139.29) return "Medium";
  return "High";
}

export async function POST(request: NextRequest) {
  const { edgeCount, aspectRatio, brightness, largestArea, symmetry } =
    await request.json();

  //i am quantizing the values here
  const qEdge = binEdgeCount(edgeCount);
  const qAspect = binAspectRatio(aspectRatio);
  const qBright = binBrightness(brightness);
  const qArea = binLargestArea(largestArea);
  const qSym = binSymmetry(symmetry);

  //here i am fetching meta data from the database
  const meta = await prisma.nBMetadata.findFirst();
  if (!meta)
    return NextResponse.json({ error: "Metadata not found" }, { status: 500 });
  const pHuman = meta.probHuman;
  const pNot = meta.probNotHuman;

  // counts for likelihoods with Laplace smoothing (k=1, V=3 bins)
  const [countHumTotal, countNotTotal] = await Promise.all([
    prisma.trainingData.count({ where: { label: "Human" } }),
    prisma.trainingData.count({ where: { label: "Not Human" } }),
  ]);

  async function condProb(
    feature: string,
    bin: string,
    classs: string,
    total: number
  ) {
    const c = await prisma.trainingData.count({
      where: { label: classs, [feature]: bin },
    });
    return (c + 1) / (total + 3);
  }

  const [pEC_H, pAR_H, pBR_H, pLA_H, pSY_H] = await Promise.all([
    condProb("edgeCount", qEdge, "Human", countHumTotal),
    condProb("aspectRatio", qAspect, "Human", countHumTotal),
    condProb("brightness", qBright, "Human", countHumTotal),
    condProb("largestArea", qArea, "Human", countHumTotal),
    condProb("symmetry", qSym, "Human", countHumTotal),
  ]);
  const [pEC_N, pAR_N, pBR_N, pLA_N, pSY_N] = await Promise.all([
    condProb("edgeCount", qEdge, "Not Human", countNotTotal),
    condProb("aspectRatio", qAspect, "Not Human", countNotTotal),
    condProb("brightness", qBright, "Not Human", countNotTotal),
    condProb("largestArea", qArea, "Not Human", countNotTotal),
    condProb("symmetry", qSym, "Not Human", countNotTotal),
  ]);

  const scoreH = pHuman * pEC_H * pAR_H * pBR_H * pLA_H * pSY_H;
  const scoreN = pNot * pEC_N * pAR_N * pBR_N * pLA_N * pSY_N;
  const classification = scoreH > scoreN ? "Human" : "Not Human";

  return NextResponse.json({
    class: classification,
    scoreH: scoreH,
    scoreN: scoreN,
  });
}
