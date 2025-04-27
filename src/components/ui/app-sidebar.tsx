import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useFilterContext } from "@/app/providers/operationProvider";

export function AppSidebar() {
  const {
    setIsClassifier,
    setIsErosion,
    setIsDilation,
    setIsOpening,
    setIsClosing,
    setIsImageLoaded,
    setIsEdge,
    setIsSharpen,
    setIsSmooth,
    setIsBitPlane,
    setIsBitWise,
    setIsFilter,
    setIsThreshold,
  } = useFilterContext();

  return (
    <Sidebar>
      <SidebarContent className="pt-16 pl-5">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(true);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Image</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(true);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Erosion</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(true);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16m-8-8v16"
                    />
                  </svg>
                  <span>Dilation</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(true);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Opening</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(true);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Closing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(true);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Edge detect</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(true);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Classifier</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(true);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Sharpen</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(true);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Smoothing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(true);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Bit Plane Slicing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(true);
                    setIsThreshold(false);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>BitWise Operations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(true);
                    setIsFilter(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Threshold</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setIsErosion(false);
                    setIsDilation(false);
                    setIsOpening(false);
                    setIsClosing(false);
                    setIsImageLoaded(false);
                    setIsEdge(false);
                    setIsClassifier(false);
                    setIsSharpen(false);
                    setIsSmooth(false);
                    setIsBitPlane(false);
                    setIsBitWise(false);
                    setIsThreshold(false);
                    setIsFilter(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Filter</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
