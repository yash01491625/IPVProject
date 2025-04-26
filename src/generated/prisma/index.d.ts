
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TrainingData
 * 
 */
export type TrainingData = $Result.DefaultSelection<Prisma.$TrainingDataPayload>
/**
 * Model NBMetadata
 * 
 */
export type NBMetadata = $Result.DefaultSelection<Prisma.$NBMetadataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TrainingData
 * const trainingData = await prisma.trainingData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TrainingData
   * const trainingData = await prisma.trainingData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trainingData`: Exposes CRUD operations for the **TrainingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingData
    * const trainingData = await prisma.trainingData.findMany()
    * ```
    */
  get trainingData(): Prisma.TrainingDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nBMetadata`: Exposes CRUD operations for the **NBMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NBMetadata
    * const nBMetadata = await prisma.nBMetadata.findMany()
    * ```
    */
  get nBMetadata(): Prisma.NBMetadataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TrainingData: 'TrainingData',
    NBMetadata: 'NBMetadata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trainingData" | "nBMetadata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TrainingData: {
        payload: Prisma.$TrainingDataPayload<ExtArgs>
        fields: Prisma.TrainingDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          findFirst: {
            args: Prisma.TrainingDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          findMany: {
            args: Prisma.TrainingDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>[]
          }
          create: {
            args: Prisma.TrainingDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          createMany: {
            args: Prisma.TrainingDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>[]
          }
          delete: {
            args: Prisma.TrainingDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          update: {
            args: Prisma.TrainingDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          deleteMany: {
            args: Prisma.TrainingDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>[]
          }
          upsert: {
            args: Prisma.TrainingDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingDataPayload>
          }
          aggregate: {
            args: Prisma.TrainingDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingData>
          }
          groupBy: {
            args: Prisma.TrainingDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingDataCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingDataCountAggregateOutputType> | number
          }
        }
      }
      NBMetadata: {
        payload: Prisma.$NBMetadataPayload<ExtArgs>
        fields: Prisma.NBMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NBMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NBMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          findFirst: {
            args: Prisma.NBMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NBMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          findMany: {
            args: Prisma.NBMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>[]
          }
          create: {
            args: Prisma.NBMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          createMany: {
            args: Prisma.NBMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NBMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>[]
          }
          delete: {
            args: Prisma.NBMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          update: {
            args: Prisma.NBMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          deleteMany: {
            args: Prisma.NBMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NBMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NBMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>[]
          }
          upsert: {
            args: Prisma.NBMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NBMetadataPayload>
          }
          aggregate: {
            args: Prisma.NBMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNBMetadata>
          }
          groupBy: {
            args: Prisma.NBMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<NBMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.NBMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<NBMetadataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    trainingData?: TrainingDataOmit
    nBMetadata?: NBMetadataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TrainingData
   */

  export type AggregateTrainingData = {
    _count: TrainingDataCountAggregateOutputType | null
    _avg: TrainingDataAvgAggregateOutputType | null
    _sum: TrainingDataSumAggregateOutputType | null
    _min: TrainingDataMinAggregateOutputType | null
    _max: TrainingDataMaxAggregateOutputType | null
  }

  export type TrainingDataAvgAggregateOutputType = {
    id: number | null
  }

  export type TrainingDataSumAggregateOutputType = {
    id: number | null
  }

  export type TrainingDataMinAggregateOutputType = {
    id: number | null
    edgeCount: string | null
    aspectRatio: string | null
    brightness: string | null
    largestArea: string | null
    symmetry: string | null
    label: string | null
    createdAt: Date | null
  }

  export type TrainingDataMaxAggregateOutputType = {
    id: number | null
    edgeCount: string | null
    aspectRatio: string | null
    brightness: string | null
    largestArea: string | null
    symmetry: string | null
    label: string | null
    createdAt: Date | null
  }

  export type TrainingDataCountAggregateOutputType = {
    id: number
    edgeCount: number
    aspectRatio: number
    brightness: number
    largestArea: number
    symmetry: number
    label: number
    createdAt: number
    _all: number
  }


  export type TrainingDataAvgAggregateInputType = {
    id?: true
  }

  export type TrainingDataSumAggregateInputType = {
    id?: true
  }

  export type TrainingDataMinAggregateInputType = {
    id?: true
    edgeCount?: true
    aspectRatio?: true
    brightness?: true
    largestArea?: true
    symmetry?: true
    label?: true
    createdAt?: true
  }

  export type TrainingDataMaxAggregateInputType = {
    id?: true
    edgeCount?: true
    aspectRatio?: true
    brightness?: true
    largestArea?: true
    symmetry?: true
    label?: true
    createdAt?: true
  }

  export type TrainingDataCountAggregateInputType = {
    id?: true
    edgeCount?: true
    aspectRatio?: true
    brightness?: true
    largestArea?: true
    symmetry?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type TrainingDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingData to aggregate.
     */
    where?: TrainingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingData to fetch.
     */
    orderBy?: TrainingDataOrderByWithRelationInput | TrainingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingData
    **/
    _count?: true | TrainingDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingDataMaxAggregateInputType
  }

  export type GetTrainingDataAggregateType<T extends TrainingDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingData[P]>
      : GetScalarType<T[P], AggregateTrainingData[P]>
  }




  export type TrainingDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingDataWhereInput
    orderBy?: TrainingDataOrderByWithAggregationInput | TrainingDataOrderByWithAggregationInput[]
    by: TrainingDataScalarFieldEnum[] | TrainingDataScalarFieldEnum
    having?: TrainingDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingDataCountAggregateInputType | true
    _avg?: TrainingDataAvgAggregateInputType
    _sum?: TrainingDataSumAggregateInputType
    _min?: TrainingDataMinAggregateInputType
    _max?: TrainingDataMaxAggregateInputType
  }

  export type TrainingDataGroupByOutputType = {
    id: number
    edgeCount: string
    aspectRatio: string
    brightness: string
    largestArea: string
    symmetry: string
    label: string
    createdAt: Date
    _count: TrainingDataCountAggregateOutputType | null
    _avg: TrainingDataAvgAggregateOutputType | null
    _sum: TrainingDataSumAggregateOutputType | null
    _min: TrainingDataMinAggregateOutputType | null
    _max: TrainingDataMaxAggregateOutputType | null
  }

  type GetTrainingDataGroupByPayload<T extends TrainingDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingDataGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingDataGroupByOutputType[P]>
        }
      >
    >


  export type TrainingDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edgeCount?: boolean
    aspectRatio?: boolean
    brightness?: boolean
    largestArea?: boolean
    symmetry?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trainingData"]>

  export type TrainingDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edgeCount?: boolean
    aspectRatio?: boolean
    brightness?: boolean
    largestArea?: boolean
    symmetry?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trainingData"]>

  export type TrainingDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edgeCount?: boolean
    aspectRatio?: boolean
    brightness?: boolean
    largestArea?: boolean
    symmetry?: boolean
    label?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trainingData"]>

  export type TrainingDataSelectScalar = {
    id?: boolean
    edgeCount?: boolean
    aspectRatio?: boolean
    brightness?: boolean
    largestArea?: boolean
    symmetry?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type TrainingDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "edgeCount" | "aspectRatio" | "brightness" | "largestArea" | "symmetry" | "label" | "createdAt", ExtArgs["result"]["trainingData"]>

  export type $TrainingDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      edgeCount: string
      aspectRatio: string
      brightness: string
      largestArea: string
      symmetry: string
      label: string
      createdAt: Date
    }, ExtArgs["result"]["trainingData"]>
    composites: {}
  }

  type TrainingDataGetPayload<S extends boolean | null | undefined | TrainingDataDefaultArgs> = $Result.GetResult<Prisma.$TrainingDataPayload, S>

  type TrainingDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingDataCountAggregateInputType | true
    }

  export interface TrainingDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingData'], meta: { name: 'TrainingData' } }
    /**
     * Find zero or one TrainingData that matches the filter.
     * @param {TrainingDataFindUniqueArgs} args - Arguments to find a TrainingData
     * @example
     * // Get one TrainingData
     * const trainingData = await prisma.trainingData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingDataFindUniqueArgs>(args: SelectSubset<T, TrainingDataFindUniqueArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingDataFindUniqueOrThrowArgs} args - Arguments to find a TrainingData
     * @example
     * // Get one TrainingData
     * const trainingData = await prisma.trainingData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataFindFirstArgs} args - Arguments to find a TrainingData
     * @example
     * // Get one TrainingData
     * const trainingData = await prisma.trainingData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingDataFindFirstArgs>(args?: SelectSubset<T, TrainingDataFindFirstArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataFindFirstOrThrowArgs} args - Arguments to find a TrainingData
     * @example
     * // Get one TrainingData
     * const trainingData = await prisma.trainingData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingData
     * const trainingData = await prisma.trainingData.findMany()
     * 
     * // Get first 10 TrainingData
     * const trainingData = await prisma.trainingData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingDataWithIdOnly = await prisma.trainingData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingDataFindManyArgs>(args?: SelectSubset<T, TrainingDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingData.
     * @param {TrainingDataCreateArgs} args - Arguments to create a TrainingData.
     * @example
     * // Create one TrainingData
     * const TrainingData = await prisma.trainingData.create({
     *   data: {
     *     // ... data to create a TrainingData
     *   }
     * })
     * 
     */
    create<T extends TrainingDataCreateArgs>(args: SelectSubset<T, TrainingDataCreateArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingData.
     * @param {TrainingDataCreateManyArgs} args - Arguments to create many TrainingData.
     * @example
     * // Create many TrainingData
     * const trainingData = await prisma.trainingData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingDataCreateManyArgs>(args?: SelectSubset<T, TrainingDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingData and returns the data saved in the database.
     * @param {TrainingDataCreateManyAndReturnArgs} args - Arguments to create many TrainingData.
     * @example
     * // Create many TrainingData
     * const trainingData = await prisma.trainingData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingData and only return the `id`
     * const trainingDataWithIdOnly = await prisma.trainingData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingDataCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingData.
     * @param {TrainingDataDeleteArgs} args - Arguments to delete one TrainingData.
     * @example
     * // Delete one TrainingData
     * const TrainingData = await prisma.trainingData.delete({
     *   where: {
     *     // ... filter to delete one TrainingData
     *   }
     * })
     * 
     */
    delete<T extends TrainingDataDeleteArgs>(args: SelectSubset<T, TrainingDataDeleteArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingData.
     * @param {TrainingDataUpdateArgs} args - Arguments to update one TrainingData.
     * @example
     * // Update one TrainingData
     * const trainingData = await prisma.trainingData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingDataUpdateArgs>(args: SelectSubset<T, TrainingDataUpdateArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingData.
     * @param {TrainingDataDeleteManyArgs} args - Arguments to filter TrainingData to delete.
     * @example
     * // Delete a few TrainingData
     * const { count } = await prisma.trainingData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingDataDeleteManyArgs>(args?: SelectSubset<T, TrainingDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingData
     * const trainingData = await prisma.trainingData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingDataUpdateManyArgs>(args: SelectSubset<T, TrainingDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingData and returns the data updated in the database.
     * @param {TrainingDataUpdateManyAndReturnArgs} args - Arguments to update many TrainingData.
     * @example
     * // Update many TrainingData
     * const trainingData = await prisma.trainingData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingData and only return the `id`
     * const trainingDataWithIdOnly = await prisma.trainingData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingDataUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingData.
     * @param {TrainingDataUpsertArgs} args - Arguments to update or create a TrainingData.
     * @example
     * // Update or create a TrainingData
     * const trainingData = await prisma.trainingData.upsert({
     *   create: {
     *     // ... data to create a TrainingData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingData we want to update
     *   }
     * })
     */
    upsert<T extends TrainingDataUpsertArgs>(args: SelectSubset<T, TrainingDataUpsertArgs<ExtArgs>>): Prisma__TrainingDataClient<$Result.GetResult<Prisma.$TrainingDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataCountArgs} args - Arguments to filter TrainingData to count.
     * @example
     * // Count the number of TrainingData
     * const count = await prisma.trainingData.count({
     *   where: {
     *     // ... the filter for the TrainingData we want to count
     *   }
     * })
    **/
    count<T extends TrainingDataCountArgs>(
      args?: Subset<T, TrainingDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingDataAggregateArgs>(args: Subset<T, TrainingDataAggregateArgs>): Prisma.PrismaPromise<GetTrainingDataAggregateType<T>>

    /**
     * Group by TrainingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingDataGroupByArgs['orderBy'] }
        : { orderBy?: TrainingDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingData model
   */
  readonly fields: TrainingDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingData model
   */
  interface TrainingDataFieldRefs {
    readonly id: FieldRef<"TrainingData", 'Int'>
    readonly edgeCount: FieldRef<"TrainingData", 'String'>
    readonly aspectRatio: FieldRef<"TrainingData", 'String'>
    readonly brightness: FieldRef<"TrainingData", 'String'>
    readonly largestArea: FieldRef<"TrainingData", 'String'>
    readonly symmetry: FieldRef<"TrainingData", 'String'>
    readonly label: FieldRef<"TrainingData", 'String'>
    readonly createdAt: FieldRef<"TrainingData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingData findUnique
   */
  export type TrainingDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter, which TrainingData to fetch.
     */
    where: TrainingDataWhereUniqueInput
  }

  /**
   * TrainingData findUniqueOrThrow
   */
  export type TrainingDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter, which TrainingData to fetch.
     */
    where: TrainingDataWhereUniqueInput
  }

  /**
   * TrainingData findFirst
   */
  export type TrainingDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter, which TrainingData to fetch.
     */
    where?: TrainingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingData to fetch.
     */
    orderBy?: TrainingDataOrderByWithRelationInput | TrainingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingData.
     */
    cursor?: TrainingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingData.
     */
    distinct?: TrainingDataScalarFieldEnum | TrainingDataScalarFieldEnum[]
  }

  /**
   * TrainingData findFirstOrThrow
   */
  export type TrainingDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter, which TrainingData to fetch.
     */
    where?: TrainingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingData to fetch.
     */
    orderBy?: TrainingDataOrderByWithRelationInput | TrainingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingData.
     */
    cursor?: TrainingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingData.
     */
    distinct?: TrainingDataScalarFieldEnum | TrainingDataScalarFieldEnum[]
  }

  /**
   * TrainingData findMany
   */
  export type TrainingDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter, which TrainingData to fetch.
     */
    where?: TrainingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingData to fetch.
     */
    orderBy?: TrainingDataOrderByWithRelationInput | TrainingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingData.
     */
    cursor?: TrainingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingData.
     */
    skip?: number
    distinct?: TrainingDataScalarFieldEnum | TrainingDataScalarFieldEnum[]
  }

  /**
   * TrainingData create
   */
  export type TrainingDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * The data needed to create a TrainingData.
     */
    data: XOR<TrainingDataCreateInput, TrainingDataUncheckedCreateInput>
  }

  /**
   * TrainingData createMany
   */
  export type TrainingDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingData.
     */
    data: TrainingDataCreateManyInput | TrainingDataCreateManyInput[]
  }

  /**
   * TrainingData createManyAndReturn
   */
  export type TrainingDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingData.
     */
    data: TrainingDataCreateManyInput | TrainingDataCreateManyInput[]
  }

  /**
   * TrainingData update
   */
  export type TrainingDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * The data needed to update a TrainingData.
     */
    data: XOR<TrainingDataUpdateInput, TrainingDataUncheckedUpdateInput>
    /**
     * Choose, which TrainingData to update.
     */
    where: TrainingDataWhereUniqueInput
  }

  /**
   * TrainingData updateMany
   */
  export type TrainingDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingData.
     */
    data: XOR<TrainingDataUpdateManyMutationInput, TrainingDataUncheckedUpdateManyInput>
    /**
     * Filter which TrainingData to update
     */
    where?: TrainingDataWhereInput
    /**
     * Limit how many TrainingData to update.
     */
    limit?: number
  }

  /**
   * TrainingData updateManyAndReturn
   */
  export type TrainingDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * The data used to update TrainingData.
     */
    data: XOR<TrainingDataUpdateManyMutationInput, TrainingDataUncheckedUpdateManyInput>
    /**
     * Filter which TrainingData to update
     */
    where?: TrainingDataWhereInput
    /**
     * Limit how many TrainingData to update.
     */
    limit?: number
  }

  /**
   * TrainingData upsert
   */
  export type TrainingDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * The filter to search for the TrainingData to update in case it exists.
     */
    where: TrainingDataWhereUniqueInput
    /**
     * In case the TrainingData found by the `where` argument doesn't exist, create a new TrainingData with this data.
     */
    create: XOR<TrainingDataCreateInput, TrainingDataUncheckedCreateInput>
    /**
     * In case the TrainingData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingDataUpdateInput, TrainingDataUncheckedUpdateInput>
  }

  /**
   * TrainingData delete
   */
  export type TrainingDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
    /**
     * Filter which TrainingData to delete.
     */
    where: TrainingDataWhereUniqueInput
  }

  /**
   * TrainingData deleteMany
   */
  export type TrainingDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingData to delete
     */
    where?: TrainingDataWhereInput
    /**
     * Limit how many TrainingData to delete.
     */
    limit?: number
  }

  /**
   * TrainingData without action
   */
  export type TrainingDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingData
     */
    select?: TrainingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingData
     */
    omit?: TrainingDataOmit<ExtArgs> | null
  }


  /**
   * Model NBMetadata
   */

  export type AggregateNBMetadata = {
    _count: NBMetadataCountAggregateOutputType | null
    _avg: NBMetadataAvgAggregateOutputType | null
    _sum: NBMetadataSumAggregateOutputType | null
    _min: NBMetadataMinAggregateOutputType | null
    _max: NBMetadataMaxAggregateOutputType | null
  }

  export type NBMetadataAvgAggregateOutputType = {
    id: number | null
    probHuman: number | null
    probNotHuman: number | null
  }

  export type NBMetadataSumAggregateOutputType = {
    id: number | null
    probHuman: number | null
    probNotHuman: number | null
  }

  export type NBMetadataMinAggregateOutputType = {
    id: number | null
    probHuman: number | null
    probNotHuman: number | null
  }

  export type NBMetadataMaxAggregateOutputType = {
    id: number | null
    probHuman: number | null
    probNotHuman: number | null
  }

  export type NBMetadataCountAggregateOutputType = {
    id: number
    probHuman: number
    probNotHuman: number
    _all: number
  }


  export type NBMetadataAvgAggregateInputType = {
    id?: true
    probHuman?: true
    probNotHuman?: true
  }

  export type NBMetadataSumAggregateInputType = {
    id?: true
    probHuman?: true
    probNotHuman?: true
  }

  export type NBMetadataMinAggregateInputType = {
    id?: true
    probHuman?: true
    probNotHuman?: true
  }

  export type NBMetadataMaxAggregateInputType = {
    id?: true
    probHuman?: true
    probNotHuman?: true
  }

  export type NBMetadataCountAggregateInputType = {
    id?: true
    probHuman?: true
    probNotHuman?: true
    _all?: true
  }

  export type NBMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NBMetadata to aggregate.
     */
    where?: NBMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NBMetadata to fetch.
     */
    orderBy?: NBMetadataOrderByWithRelationInput | NBMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NBMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NBMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NBMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NBMetadata
    **/
    _count?: true | NBMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NBMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NBMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NBMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NBMetadataMaxAggregateInputType
  }

  export type GetNBMetadataAggregateType<T extends NBMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateNBMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNBMetadata[P]>
      : GetScalarType<T[P], AggregateNBMetadata[P]>
  }




  export type NBMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NBMetadataWhereInput
    orderBy?: NBMetadataOrderByWithAggregationInput | NBMetadataOrderByWithAggregationInput[]
    by: NBMetadataScalarFieldEnum[] | NBMetadataScalarFieldEnum
    having?: NBMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NBMetadataCountAggregateInputType | true
    _avg?: NBMetadataAvgAggregateInputType
    _sum?: NBMetadataSumAggregateInputType
    _min?: NBMetadataMinAggregateInputType
    _max?: NBMetadataMaxAggregateInputType
  }

  export type NBMetadataGroupByOutputType = {
    id: number
    probHuman: number
    probNotHuman: number
    _count: NBMetadataCountAggregateOutputType | null
    _avg: NBMetadataAvgAggregateOutputType | null
    _sum: NBMetadataSumAggregateOutputType | null
    _min: NBMetadataMinAggregateOutputType | null
    _max: NBMetadataMaxAggregateOutputType | null
  }

  type GetNBMetadataGroupByPayload<T extends NBMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NBMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NBMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NBMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], NBMetadataGroupByOutputType[P]>
        }
      >
    >


  export type NBMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    probHuman?: boolean
    probNotHuman?: boolean
  }, ExtArgs["result"]["nBMetadata"]>

  export type NBMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    probHuman?: boolean
    probNotHuman?: boolean
  }, ExtArgs["result"]["nBMetadata"]>

  export type NBMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    probHuman?: boolean
    probNotHuman?: boolean
  }, ExtArgs["result"]["nBMetadata"]>

  export type NBMetadataSelectScalar = {
    id?: boolean
    probHuman?: boolean
    probNotHuman?: boolean
  }

  export type NBMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "probHuman" | "probNotHuman", ExtArgs["result"]["nBMetadata"]>

  export type $NBMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NBMetadata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      probHuman: number
      probNotHuman: number
    }, ExtArgs["result"]["nBMetadata"]>
    composites: {}
  }

  type NBMetadataGetPayload<S extends boolean | null | undefined | NBMetadataDefaultArgs> = $Result.GetResult<Prisma.$NBMetadataPayload, S>

  type NBMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NBMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NBMetadataCountAggregateInputType | true
    }

  export interface NBMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NBMetadata'], meta: { name: 'NBMetadata' } }
    /**
     * Find zero or one NBMetadata that matches the filter.
     * @param {NBMetadataFindUniqueArgs} args - Arguments to find a NBMetadata
     * @example
     * // Get one NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NBMetadataFindUniqueArgs>(args: SelectSubset<T, NBMetadataFindUniqueArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NBMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NBMetadataFindUniqueOrThrowArgs} args - Arguments to find a NBMetadata
     * @example
     * // Get one NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NBMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, NBMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NBMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataFindFirstArgs} args - Arguments to find a NBMetadata
     * @example
     * // Get one NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NBMetadataFindFirstArgs>(args?: SelectSubset<T, NBMetadataFindFirstArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NBMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataFindFirstOrThrowArgs} args - Arguments to find a NBMetadata
     * @example
     * // Get one NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NBMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, NBMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NBMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findMany()
     * 
     * // Get first 10 NBMetadata
     * const nBMetadata = await prisma.nBMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nBMetadataWithIdOnly = await prisma.nBMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NBMetadataFindManyArgs>(args?: SelectSubset<T, NBMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NBMetadata.
     * @param {NBMetadataCreateArgs} args - Arguments to create a NBMetadata.
     * @example
     * // Create one NBMetadata
     * const NBMetadata = await prisma.nBMetadata.create({
     *   data: {
     *     // ... data to create a NBMetadata
     *   }
     * })
     * 
     */
    create<T extends NBMetadataCreateArgs>(args: SelectSubset<T, NBMetadataCreateArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NBMetadata.
     * @param {NBMetadataCreateManyArgs} args - Arguments to create many NBMetadata.
     * @example
     * // Create many NBMetadata
     * const nBMetadata = await prisma.nBMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NBMetadataCreateManyArgs>(args?: SelectSubset<T, NBMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NBMetadata and returns the data saved in the database.
     * @param {NBMetadataCreateManyAndReturnArgs} args - Arguments to create many NBMetadata.
     * @example
     * // Create many NBMetadata
     * const nBMetadata = await prisma.nBMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NBMetadata and only return the `id`
     * const nBMetadataWithIdOnly = await prisma.nBMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NBMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, NBMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NBMetadata.
     * @param {NBMetadataDeleteArgs} args - Arguments to delete one NBMetadata.
     * @example
     * // Delete one NBMetadata
     * const NBMetadata = await prisma.nBMetadata.delete({
     *   where: {
     *     // ... filter to delete one NBMetadata
     *   }
     * })
     * 
     */
    delete<T extends NBMetadataDeleteArgs>(args: SelectSubset<T, NBMetadataDeleteArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NBMetadata.
     * @param {NBMetadataUpdateArgs} args - Arguments to update one NBMetadata.
     * @example
     * // Update one NBMetadata
     * const nBMetadata = await prisma.nBMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NBMetadataUpdateArgs>(args: SelectSubset<T, NBMetadataUpdateArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NBMetadata.
     * @param {NBMetadataDeleteManyArgs} args - Arguments to filter NBMetadata to delete.
     * @example
     * // Delete a few NBMetadata
     * const { count } = await prisma.nBMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NBMetadataDeleteManyArgs>(args?: SelectSubset<T, NBMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NBMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NBMetadata
     * const nBMetadata = await prisma.nBMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NBMetadataUpdateManyArgs>(args: SelectSubset<T, NBMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NBMetadata and returns the data updated in the database.
     * @param {NBMetadataUpdateManyAndReturnArgs} args - Arguments to update many NBMetadata.
     * @example
     * // Update many NBMetadata
     * const nBMetadata = await prisma.nBMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NBMetadata and only return the `id`
     * const nBMetadataWithIdOnly = await prisma.nBMetadata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NBMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, NBMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NBMetadata.
     * @param {NBMetadataUpsertArgs} args - Arguments to update or create a NBMetadata.
     * @example
     * // Update or create a NBMetadata
     * const nBMetadata = await prisma.nBMetadata.upsert({
     *   create: {
     *     // ... data to create a NBMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NBMetadata we want to update
     *   }
     * })
     */
    upsert<T extends NBMetadataUpsertArgs>(args: SelectSubset<T, NBMetadataUpsertArgs<ExtArgs>>): Prisma__NBMetadataClient<$Result.GetResult<Prisma.$NBMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NBMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataCountArgs} args - Arguments to filter NBMetadata to count.
     * @example
     * // Count the number of NBMetadata
     * const count = await prisma.nBMetadata.count({
     *   where: {
     *     // ... the filter for the NBMetadata we want to count
     *   }
     * })
    **/
    count<T extends NBMetadataCountArgs>(
      args?: Subset<T, NBMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NBMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NBMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NBMetadataAggregateArgs>(args: Subset<T, NBMetadataAggregateArgs>): Prisma.PrismaPromise<GetNBMetadataAggregateType<T>>

    /**
     * Group by NBMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NBMetadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NBMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NBMetadataGroupByArgs['orderBy'] }
        : { orderBy?: NBMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NBMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNBMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NBMetadata model
   */
  readonly fields: NBMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NBMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NBMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NBMetadata model
   */
  interface NBMetadataFieldRefs {
    readonly id: FieldRef<"NBMetadata", 'Int'>
    readonly probHuman: FieldRef<"NBMetadata", 'Float'>
    readonly probNotHuman: FieldRef<"NBMetadata", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * NBMetadata findUnique
   */
  export type NBMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter, which NBMetadata to fetch.
     */
    where: NBMetadataWhereUniqueInput
  }

  /**
   * NBMetadata findUniqueOrThrow
   */
  export type NBMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter, which NBMetadata to fetch.
     */
    where: NBMetadataWhereUniqueInput
  }

  /**
   * NBMetadata findFirst
   */
  export type NBMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter, which NBMetadata to fetch.
     */
    where?: NBMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NBMetadata to fetch.
     */
    orderBy?: NBMetadataOrderByWithRelationInput | NBMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NBMetadata.
     */
    cursor?: NBMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NBMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NBMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NBMetadata.
     */
    distinct?: NBMetadataScalarFieldEnum | NBMetadataScalarFieldEnum[]
  }

  /**
   * NBMetadata findFirstOrThrow
   */
  export type NBMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter, which NBMetadata to fetch.
     */
    where?: NBMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NBMetadata to fetch.
     */
    orderBy?: NBMetadataOrderByWithRelationInput | NBMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NBMetadata.
     */
    cursor?: NBMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NBMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NBMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NBMetadata.
     */
    distinct?: NBMetadataScalarFieldEnum | NBMetadataScalarFieldEnum[]
  }

  /**
   * NBMetadata findMany
   */
  export type NBMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter, which NBMetadata to fetch.
     */
    where?: NBMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NBMetadata to fetch.
     */
    orderBy?: NBMetadataOrderByWithRelationInput | NBMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NBMetadata.
     */
    cursor?: NBMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NBMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NBMetadata.
     */
    skip?: number
    distinct?: NBMetadataScalarFieldEnum | NBMetadataScalarFieldEnum[]
  }

  /**
   * NBMetadata create
   */
  export type NBMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * The data needed to create a NBMetadata.
     */
    data: XOR<NBMetadataCreateInput, NBMetadataUncheckedCreateInput>
  }

  /**
   * NBMetadata createMany
   */
  export type NBMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NBMetadata.
     */
    data: NBMetadataCreateManyInput | NBMetadataCreateManyInput[]
  }

  /**
   * NBMetadata createManyAndReturn
   */
  export type NBMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many NBMetadata.
     */
    data: NBMetadataCreateManyInput | NBMetadataCreateManyInput[]
  }

  /**
   * NBMetadata update
   */
  export type NBMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * The data needed to update a NBMetadata.
     */
    data: XOR<NBMetadataUpdateInput, NBMetadataUncheckedUpdateInput>
    /**
     * Choose, which NBMetadata to update.
     */
    where: NBMetadataWhereUniqueInput
  }

  /**
   * NBMetadata updateMany
   */
  export type NBMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NBMetadata.
     */
    data: XOR<NBMetadataUpdateManyMutationInput, NBMetadataUncheckedUpdateManyInput>
    /**
     * Filter which NBMetadata to update
     */
    where?: NBMetadataWhereInput
    /**
     * Limit how many NBMetadata to update.
     */
    limit?: number
  }

  /**
   * NBMetadata updateManyAndReturn
   */
  export type NBMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * The data used to update NBMetadata.
     */
    data: XOR<NBMetadataUpdateManyMutationInput, NBMetadataUncheckedUpdateManyInput>
    /**
     * Filter which NBMetadata to update
     */
    where?: NBMetadataWhereInput
    /**
     * Limit how many NBMetadata to update.
     */
    limit?: number
  }

  /**
   * NBMetadata upsert
   */
  export type NBMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * The filter to search for the NBMetadata to update in case it exists.
     */
    where: NBMetadataWhereUniqueInput
    /**
     * In case the NBMetadata found by the `where` argument doesn't exist, create a new NBMetadata with this data.
     */
    create: XOR<NBMetadataCreateInput, NBMetadataUncheckedCreateInput>
    /**
     * In case the NBMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NBMetadataUpdateInput, NBMetadataUncheckedUpdateInput>
  }

  /**
   * NBMetadata delete
   */
  export type NBMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
    /**
     * Filter which NBMetadata to delete.
     */
    where: NBMetadataWhereUniqueInput
  }

  /**
   * NBMetadata deleteMany
   */
  export type NBMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NBMetadata to delete
     */
    where?: NBMetadataWhereInput
    /**
     * Limit how many NBMetadata to delete.
     */
    limit?: number
  }

  /**
   * NBMetadata without action
   */
  export type NBMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NBMetadata
     */
    select?: NBMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NBMetadata
     */
    omit?: NBMetadataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrainingDataScalarFieldEnum: {
    id: 'id',
    edgeCount: 'edgeCount',
    aspectRatio: 'aspectRatio',
    brightness: 'brightness',
    largestArea: 'largestArea',
    symmetry: 'symmetry',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type TrainingDataScalarFieldEnum = (typeof TrainingDataScalarFieldEnum)[keyof typeof TrainingDataScalarFieldEnum]


  export const NBMetadataScalarFieldEnum: {
    id: 'id',
    probHuman: 'probHuman',
    probNotHuman: 'probNotHuman'
  };

  export type NBMetadataScalarFieldEnum = (typeof NBMetadataScalarFieldEnum)[keyof typeof NBMetadataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TrainingDataWhereInput = {
    AND?: TrainingDataWhereInput | TrainingDataWhereInput[]
    OR?: TrainingDataWhereInput[]
    NOT?: TrainingDataWhereInput | TrainingDataWhereInput[]
    id?: IntFilter<"TrainingData"> | number
    edgeCount?: StringFilter<"TrainingData"> | string
    aspectRatio?: StringFilter<"TrainingData"> | string
    brightness?: StringFilter<"TrainingData"> | string
    largestArea?: StringFilter<"TrainingData"> | string
    symmetry?: StringFilter<"TrainingData"> | string
    label?: StringFilter<"TrainingData"> | string
    createdAt?: DateTimeFilter<"TrainingData"> | Date | string
  }

  export type TrainingDataOrderByWithRelationInput = {
    id?: SortOrder
    edgeCount?: SortOrder
    aspectRatio?: SortOrder
    brightness?: SortOrder
    largestArea?: SortOrder
    symmetry?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrainingDataWhereInput | TrainingDataWhereInput[]
    OR?: TrainingDataWhereInput[]
    NOT?: TrainingDataWhereInput | TrainingDataWhereInput[]
    edgeCount?: StringFilter<"TrainingData"> | string
    aspectRatio?: StringFilter<"TrainingData"> | string
    brightness?: StringFilter<"TrainingData"> | string
    largestArea?: StringFilter<"TrainingData"> | string
    symmetry?: StringFilter<"TrainingData"> | string
    label?: StringFilter<"TrainingData"> | string
    createdAt?: DateTimeFilter<"TrainingData"> | Date | string
  }, "id">

  export type TrainingDataOrderByWithAggregationInput = {
    id?: SortOrder
    edgeCount?: SortOrder
    aspectRatio?: SortOrder
    brightness?: SortOrder
    largestArea?: SortOrder
    symmetry?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    _count?: TrainingDataCountOrderByAggregateInput
    _avg?: TrainingDataAvgOrderByAggregateInput
    _max?: TrainingDataMaxOrderByAggregateInput
    _min?: TrainingDataMinOrderByAggregateInput
    _sum?: TrainingDataSumOrderByAggregateInput
  }

  export type TrainingDataScalarWhereWithAggregatesInput = {
    AND?: TrainingDataScalarWhereWithAggregatesInput | TrainingDataScalarWhereWithAggregatesInput[]
    OR?: TrainingDataScalarWhereWithAggregatesInput[]
    NOT?: TrainingDataScalarWhereWithAggregatesInput | TrainingDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainingData"> | number
    edgeCount?: StringWithAggregatesFilter<"TrainingData"> | string
    aspectRatio?: StringWithAggregatesFilter<"TrainingData"> | string
    brightness?: StringWithAggregatesFilter<"TrainingData"> | string
    largestArea?: StringWithAggregatesFilter<"TrainingData"> | string
    symmetry?: StringWithAggregatesFilter<"TrainingData"> | string
    label?: StringWithAggregatesFilter<"TrainingData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrainingData"> | Date | string
  }

  export type NBMetadataWhereInput = {
    AND?: NBMetadataWhereInput | NBMetadataWhereInput[]
    OR?: NBMetadataWhereInput[]
    NOT?: NBMetadataWhereInput | NBMetadataWhereInput[]
    id?: IntFilter<"NBMetadata"> | number
    probHuman?: FloatFilter<"NBMetadata"> | number
    probNotHuman?: FloatFilter<"NBMetadata"> | number
  }

  export type NBMetadataOrderByWithRelationInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type NBMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NBMetadataWhereInput | NBMetadataWhereInput[]
    OR?: NBMetadataWhereInput[]
    NOT?: NBMetadataWhereInput | NBMetadataWhereInput[]
    probHuman?: FloatFilter<"NBMetadata"> | number
    probNotHuman?: FloatFilter<"NBMetadata"> | number
  }, "id">

  export type NBMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
    _count?: NBMetadataCountOrderByAggregateInput
    _avg?: NBMetadataAvgOrderByAggregateInput
    _max?: NBMetadataMaxOrderByAggregateInput
    _min?: NBMetadataMinOrderByAggregateInput
    _sum?: NBMetadataSumOrderByAggregateInput
  }

  export type NBMetadataScalarWhereWithAggregatesInput = {
    AND?: NBMetadataScalarWhereWithAggregatesInput | NBMetadataScalarWhereWithAggregatesInput[]
    OR?: NBMetadataScalarWhereWithAggregatesInput[]
    NOT?: NBMetadataScalarWhereWithAggregatesInput | NBMetadataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NBMetadata"> | number
    probHuman?: FloatWithAggregatesFilter<"NBMetadata"> | number
    probNotHuman?: FloatWithAggregatesFilter<"NBMetadata"> | number
  }

  export type TrainingDataCreateInput = {
    edgeCount: string
    aspectRatio: string
    brightness: string
    largestArea: string
    symmetry: string
    label: string
    createdAt?: Date | string
  }

  export type TrainingDataUncheckedCreateInput = {
    id?: number
    edgeCount: string
    aspectRatio: string
    brightness: string
    largestArea: string
    symmetry: string
    label: string
    createdAt?: Date | string
  }

  export type TrainingDataUpdateInput = {
    edgeCount?: StringFieldUpdateOperationsInput | string
    aspectRatio?: StringFieldUpdateOperationsInput | string
    brightness?: StringFieldUpdateOperationsInput | string
    largestArea?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    edgeCount?: StringFieldUpdateOperationsInput | string
    aspectRatio?: StringFieldUpdateOperationsInput | string
    brightness?: StringFieldUpdateOperationsInput | string
    largestArea?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingDataCreateManyInput = {
    id?: number
    edgeCount: string
    aspectRatio: string
    brightness: string
    largestArea: string
    symmetry: string
    label: string
    createdAt?: Date | string
  }

  export type TrainingDataUpdateManyMutationInput = {
    edgeCount?: StringFieldUpdateOperationsInput | string
    aspectRatio?: StringFieldUpdateOperationsInput | string
    brightness?: StringFieldUpdateOperationsInput | string
    largestArea?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    edgeCount?: StringFieldUpdateOperationsInput | string
    aspectRatio?: StringFieldUpdateOperationsInput | string
    brightness?: StringFieldUpdateOperationsInput | string
    largestArea?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NBMetadataCreateInput = {
    probHuman: number
    probNotHuman: number
  }

  export type NBMetadataUncheckedCreateInput = {
    id?: number
    probHuman: number
    probNotHuman: number
  }

  export type NBMetadataUpdateInput = {
    probHuman?: FloatFieldUpdateOperationsInput | number
    probNotHuman?: FloatFieldUpdateOperationsInput | number
  }

  export type NBMetadataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    probHuman?: FloatFieldUpdateOperationsInput | number
    probNotHuman?: FloatFieldUpdateOperationsInput | number
  }

  export type NBMetadataCreateManyInput = {
    id?: number
    probHuman: number
    probNotHuman: number
  }

  export type NBMetadataUpdateManyMutationInput = {
    probHuman?: FloatFieldUpdateOperationsInput | number
    probNotHuman?: FloatFieldUpdateOperationsInput | number
  }

  export type NBMetadataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    probHuman?: FloatFieldUpdateOperationsInput | number
    probNotHuman?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrainingDataCountOrderByAggregateInput = {
    id?: SortOrder
    edgeCount?: SortOrder
    aspectRatio?: SortOrder
    brightness?: SortOrder
    largestArea?: SortOrder
    symmetry?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrainingDataMaxOrderByAggregateInput = {
    id?: SortOrder
    edgeCount?: SortOrder
    aspectRatio?: SortOrder
    brightness?: SortOrder
    largestArea?: SortOrder
    symmetry?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingDataMinOrderByAggregateInput = {
    id?: SortOrder
    edgeCount?: SortOrder
    aspectRatio?: SortOrder
    brightness?: SortOrder
    largestArea?: SortOrder
    symmetry?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type TrainingDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NBMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type NBMetadataAvgOrderByAggregateInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type NBMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type NBMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type NBMetadataSumOrderByAggregateInput = {
    id?: SortOrder
    probHuman?: SortOrder
    probNotHuman?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}