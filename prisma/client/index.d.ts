
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Prompts
 * 
 */
export type Prompts = $Result.DefaultSelection<Prisma.$PromptsPayload>
/**
 * Model WorldInfos
 * 
 */
export type WorldInfos = $Result.DefaultSelection<Prisma.$WorldInfosPayload>
/**
 * Model AetherPrompts
 * 
 */
export type AetherPrompts = $Result.DefaultSelection<Prisma.$AetherPromptsPayload>
/**
 * Model AetherWorldInfos
 * 
 */
export type AetherWorldInfos = $Result.DefaultSelection<Prisma.$AetherWorldInfosPayload>
/**
 * Model PromptSearch
 * 
 */
export type PromptSearch = $Result.DefaultSelection<Prisma.$PromptSearchPayload>
/**
 * Model WorldInfoSearch
 * 
 */
export type WorldInfoSearch = $Result.DefaultSelection<Prisma.$WorldInfoSearchPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model TagsPromptsMap
 * 
 */
export type TagsPromptsMap = $Result.DefaultSelection<Prisma.$TagsPromptsMapPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prompts
 * const prompts = await prisma.prompts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Prompts
   * const prompts = await prisma.prompts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.prompts`: Exposes CRUD operations for the **Prompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompts.findMany()
    * ```
    */
  get prompts(): Prisma.PromptsDelegate<ExtArgs>;

  /**
   * `prisma.worldInfos`: Exposes CRUD operations for the **WorldInfos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldInfos
    * const worldInfos = await prisma.worldInfos.findMany()
    * ```
    */
  get worldInfos(): Prisma.WorldInfosDelegate<ExtArgs>;

  /**
   * `prisma.aetherPrompts`: Exposes CRUD operations for the **AetherPrompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AetherPrompts
    * const aetherPrompts = await prisma.aetherPrompts.findMany()
    * ```
    */
  get aetherPrompts(): Prisma.AetherPromptsDelegate<ExtArgs>;

  /**
   * `prisma.aetherWorldInfos`: Exposes CRUD operations for the **AetherWorldInfos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AetherWorldInfos
    * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany()
    * ```
    */
  get aetherWorldInfos(): Prisma.AetherWorldInfosDelegate<ExtArgs>;

  /**
   * `prisma.promptSearch`: Exposes CRUD operations for the **PromptSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptSearches
    * const promptSearches = await prisma.promptSearch.findMany()
    * ```
    */
  get promptSearch(): Prisma.PromptSearchDelegate<ExtArgs>;

  /**
   * `prisma.worldInfoSearch`: Exposes CRUD operations for the **WorldInfoSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldInfoSearches
    * const worldInfoSearches = await prisma.worldInfoSearch.findMany()
    * ```
    */
  get worldInfoSearch(): Prisma.WorldInfoSearchDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs>;

  /**
   * `prisma.tagsPromptsMap`: Exposes CRUD operations for the **TagsPromptsMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsPromptsMaps
    * const tagsPromptsMaps = await prisma.tagsPromptsMap.findMany()
    * ```
    */
  get tagsPromptsMap(): Prisma.TagsPromptsMapDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Prompts: 'Prompts',
    WorldInfos: 'WorldInfos',
    AetherPrompts: 'AetherPrompts',
    AetherWorldInfos: 'AetherWorldInfos',
    PromptSearch: 'PromptSearch',
    WorldInfoSearch: 'WorldInfoSearch',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Tags: 'Tags',
    TagsPromptsMap: 'TagsPromptsMap'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'prompts' | 'worldInfos' | 'aetherPrompts' | 'aetherWorldInfos' | 'promptSearch' | 'worldInfoSearch' | 'account' | 'session' | 'user' | 'verificationToken' | 'tags' | 'tagsPromptsMap'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Prompts: {
        payload: Prisma.$PromptsPayload<ExtArgs>
        fields: Prisma.PromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findFirst: {
            args: Prisma.PromptsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findMany: {
            args: Prisma.PromptsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>[]
          }
          create: {
            args: Prisma.PromptsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          delete: {
            args: Prisma.PromptsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          update: {
            args: Prisma.PromptsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          deleteMany: {
            args: Prisma.PromptsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromptsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromptsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          aggregate: {
            args: Prisma.PromptsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrompts>
          }
          groupBy: {
            args: Prisma.PromptsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptsCountArgs<ExtArgs>,
            result: $Utils.Optional<PromptsCountAggregateOutputType> | number
          }
        }
      }
      WorldInfos: {
        payload: Prisma.$WorldInfosPayload<ExtArgs>
        fields: Prisma.WorldInfosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldInfosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldInfosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          findFirst: {
            args: Prisma.WorldInfosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldInfosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          findMany: {
            args: Prisma.WorldInfosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>[]
          }
          create: {
            args: Prisma.WorldInfosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          delete: {
            args: Prisma.WorldInfosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          update: {
            args: Prisma.WorldInfosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          deleteMany: {
            args: Prisma.WorldInfosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldInfosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldInfosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          aggregate: {
            args: Prisma.WorldInfosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorldInfos>
          }
          groupBy: {
            args: Prisma.WorldInfosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfosGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldInfosCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfosCountAggregateOutputType> | number
          }
        }
      }
      AetherPrompts: {
        payload: Prisma.$AetherPromptsPayload<ExtArgs>
        fields: Prisma.AetherPromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AetherPromptsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AetherPromptsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          findFirst: {
            args: Prisma.AetherPromptsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AetherPromptsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          findMany: {
            args: Prisma.AetherPromptsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>[]
          }
          create: {
            args: Prisma.AetherPromptsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          delete: {
            args: Prisma.AetherPromptsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          update: {
            args: Prisma.AetherPromptsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          deleteMany: {
            args: Prisma.AetherPromptsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AetherPromptsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AetherPromptsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          aggregate: {
            args: Prisma.AetherPromptsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAetherPrompts>
          }
          groupBy: {
            args: Prisma.AetherPromptsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AetherPromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AetherPromptsCountArgs<ExtArgs>,
            result: $Utils.Optional<AetherPromptsCountAggregateOutputType> | number
          }
        }
      }
      AetherWorldInfos: {
        payload: Prisma.$AetherWorldInfosPayload<ExtArgs>
        fields: Prisma.AetherWorldInfosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AetherWorldInfosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          findFirst: {
            args: Prisma.AetherWorldInfosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          findMany: {
            args: Prisma.AetherWorldInfosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>[]
          }
          create: {
            args: Prisma.AetherWorldInfosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          delete: {
            args: Prisma.AetherWorldInfosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          update: {
            args: Prisma.AetherWorldInfosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          deleteMany: {
            args: Prisma.AetherWorldInfosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AetherWorldInfosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AetherWorldInfosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          aggregate: {
            args: Prisma.AetherWorldInfosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAetherWorldInfos>
          }
          groupBy: {
            args: Prisma.AetherWorldInfosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AetherWorldInfosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AetherWorldInfosCountArgs<ExtArgs>,
            result: $Utils.Optional<AetherWorldInfosCountAggregateOutputType> | number
          }
        }
      }
      PromptSearch: {
        payload: Prisma.$PromptSearchPayload<ExtArgs>
        fields: Prisma.PromptSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptSearchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptSearchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          findFirst: {
            args: Prisma.PromptSearchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptSearchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          findMany: {
            args: Prisma.PromptSearchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>[]
          }
          create: {
            args: Prisma.PromptSearchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          delete: {
            args: Prisma.PromptSearchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          update: {
            args: Prisma.PromptSearchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          deleteMany: {
            args: Prisma.PromptSearchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromptSearchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromptSearchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptSearchPayload>
          }
          aggregate: {
            args: Prisma.PromptSearchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePromptSearch>
          }
          groupBy: {
            args: Prisma.PromptSearchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromptSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptSearchCountArgs<ExtArgs>,
            result: $Utils.Optional<PromptSearchCountAggregateOutputType> | number
          }
        }
      }
      WorldInfoSearch: {
        payload: Prisma.$WorldInfoSearchPayload<ExtArgs>
        fields: Prisma.WorldInfoSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldInfoSearchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldInfoSearchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          findFirst: {
            args: Prisma.WorldInfoSearchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldInfoSearchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          findMany: {
            args: Prisma.WorldInfoSearchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>[]
          }
          create: {
            args: Prisma.WorldInfoSearchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          delete: {
            args: Prisma.WorldInfoSearchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          update: {
            args: Prisma.WorldInfoSearchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          deleteMany: {
            args: Prisma.WorldInfoSearchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldInfoSearchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldInfoSearchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfoSearchPayload>
          }
          aggregate: {
            args: Prisma.WorldInfoSearchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorldInfoSearch>
          }
          groupBy: {
            args: Prisma.WorldInfoSearchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfoSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldInfoSearchCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfoSearchCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      TagsPromptsMap: {
        payload: Prisma.$TagsPromptsMapPayload<ExtArgs>
        fields: Prisma.TagsPromptsMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsPromptsMapFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsPromptsMapFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          findFirst: {
            args: Prisma.TagsPromptsMapFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsPromptsMapFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          findMany: {
            args: Prisma.TagsPromptsMapFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>[]
          }
          create: {
            args: Prisma.TagsPromptsMapCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          delete: {
            args: Prisma.TagsPromptsMapDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          update: {
            args: Prisma.TagsPromptsMapUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          deleteMany: {
            args: Prisma.TagsPromptsMapDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsPromptsMapUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsPromptsMapUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPromptsMapPayload>
          }
          aggregate: {
            args: Prisma.TagsPromptsMapAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTagsPromptsMap>
          }
          groupBy: {
            args: Prisma.TagsPromptsMapGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsPromptsMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsPromptsMapCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsPromptsMapCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type PromptsCountOutputType
   */

  export type PromptsCountOutputType = {
    tagsFull: number
    worldInfos: number
  }

  export type PromptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tagsFull?: boolean | PromptsCountOutputTypeCountTagsFullArgs
    worldInfos?: boolean | PromptsCountOutputTypeCountWorldInfosArgs
  }

  // Custom InputTypes

  /**
   * PromptsCountOutputType without action
   */
  export type PromptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptsCountOutputType
     */
    select?: PromptsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PromptsCountOutputType without action
   */
  export type PromptsCountOutputTypeCountTagsFullArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsPromptsMapWhereInput
  }


  /**
   * PromptsCountOutputType without action
   */
  export type PromptsCountOutputTypeCountWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldInfosWhereInput
  }



  /**
   * Count Type AetherPromptsCountOutputType
   */

  export type AetherPromptsCountOutputType = {
    worldInfos: number
  }

  export type AetherPromptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | AetherPromptsCountOutputTypeCountWorldInfosArgs
  }

  // Custom InputTypes

  /**
   * AetherPromptsCountOutputType without action
   */
  export type AetherPromptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPromptsCountOutputType
     */
    select?: AetherPromptsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AetherPromptsCountOutputType without action
   */
  export type AetherPromptsCountOutputTypeCountWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherWorldInfosWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    tagPrompts: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tagPrompts?: boolean | TagsCountOutputTypeCountTagPromptsArgs
  }

  // Custom InputTypes

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountTagPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsPromptsMapWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Prompts
   */

  export type AggregatePrompts = {
    _count: PromptsCountAggregateOutputType | null
    _avg: PromptsAvgAggregateOutputType | null
    _sum: PromptsSumAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  export type PromptsAvgAggregateOutputType = {
    aetherId: number | null
    nsfw: number | null
  }

  export type PromptsSumAggregateOutputType = {
    aetherId: number | null
    nsfw: number | null
  }

  export type PromptsMinAggregateOutputType = {
    id: string | null
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
    deleted: boolean | null
  }

  export type PromptsMaxAggregateOutputType = {
    id: string | null
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
    deleted: boolean | null
  }

  export type PromptsCountAggregateOutputType = {
    id: number
    aetherId: number
    authorsNote: number
    description: number
    memory: number
    nsfw: number
    parentId: number
    promptContent: number
    publishDate: number
    quests: number
    tags: number
    title: number
    scriptZip: number
    novelAiScenario: number
    holoAiScenario: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    deleted: number
    _all: number
  }


  export type PromptsAvgAggregateInputType = {
    aetherId?: true
    nsfw?: true
  }

  export type PromptsSumAggregateInputType = {
    aetherId?: true
    nsfw?: true
  }

  export type PromptsMinAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    deleted?: true
  }

  export type PromptsMaxAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    deleted?: true
  }

  export type PromptsCountAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    deleted?: true
    _all?: true
  }

  export type PromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to aggregate.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptsMaxAggregateInputType
  }

  export type GetPromptsAggregateType<T extends PromptsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompts[P]>
      : GetScalarType<T[P], AggregatePrompts[P]>
  }




  export type PromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptsWhereInput
    orderBy?: PromptsOrderByWithAggregationInput | PromptsOrderByWithAggregationInput[]
    by: PromptsScalarFieldEnum[] | PromptsScalarFieldEnum
    having?: PromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptsCountAggregateInputType | true
    _avg?: PromptsAvgAggregateInputType
    _sum?: PromptsSumAggregateInputType
    _min?: PromptsMinAggregateInputType
    _max?: PromptsMaxAggregateInputType
  }

  export type PromptsGroupByOutputType = {
    id: string
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number
    parentId: string | null
    promptContent: string
    publishDate: string | null
    quests: string | null
    tags: string
    title: string
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    deleted: boolean
    _count: PromptsCountAggregateOutputType | null
    _avg: PromptsAvgAggregateOutputType | null
    _sum: PromptsSumAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  type GetPromptsGroupByPayload<T extends PromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptsGroupByOutputType[P]>
            : GetScalarType<T[P], PromptsGroupByOutputType[P]>
        }
      >
    >


  export type PromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aetherId?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    deleted?: boolean
    tagsFull?: boolean | Prompts$tagsFullArgs<ExtArgs>
    worldInfos?: boolean | Prompts$worldInfosArgs<ExtArgs>
    _count?: boolean | PromptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompts"]>

  export type PromptsSelectScalar = {
    id?: boolean
    aetherId?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    deleted?: boolean
  }

  export type PromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tagsFull?: boolean | Prompts$tagsFullArgs<ExtArgs>
    worldInfos?: boolean | Prompts$worldInfosArgs<ExtArgs>
    _count?: boolean | PromptsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompts"
    objects: {
      tagsFull: Prisma.$TagsPromptsMapPayload<ExtArgs>[]
      worldInfos: Prisma.$WorldInfosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aetherId: number | null
      authorsNote: string | null
      description: string | null
      memory: string | null
      nsfw: number
      parentId: string | null
      promptContent: string
      publishDate: string | null
      quests: string | null
      tags: string
      title: string
      scriptZip: Buffer | null
      novelAiScenario: string | null
      holoAiScenario: string | null
      correlationId: string
      dateCreated: string
      dateEdited: string | null
      deleted: boolean
    }, ExtArgs["result"]["prompts"]>
    composites: {}
  }


  type PromptsGetPayload<S extends boolean | null | undefined | PromptsDefaultArgs> = $Result.GetResult<Prisma.$PromptsPayload, S>

  type PromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PromptsCountAggregateInputType | true
    }

  export interface PromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompts'], meta: { name: 'Prompts' } }
    /**
     * Find zero or one Prompts that matches the filter.
     * @param {PromptsFindUniqueArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromptsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsFindUniqueArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromptsFindUniqueOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromptsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromptsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindFirstArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromptsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompts.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptsWithIdOnly = await prisma.prompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromptsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prompts.
     * @param {PromptsCreateArgs} args - Arguments to create a Prompts.
     * @example
     * // Create one Prompts
     * const Prompts = await prisma.prompts.create({
     *   data: {
     *     // ... data to create a Prompts
     *   }
     * })
     * 
    **/
    create<T extends PromptsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsCreateArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Prompts.
     * @param {PromptsDeleteArgs} args - Arguments to delete one Prompts.
     * @example
     * // Delete one Prompts
     * const Prompts = await prisma.prompts.delete({
     *   where: {
     *     // ... filter to delete one Prompts
     *   }
     * })
     * 
    **/
    delete<T extends PromptsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsDeleteArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prompts.
     * @param {PromptsUpdateArgs} args - Arguments to update one Prompts.
     * @example
     * // Update one Prompts
     * const prompts = await prisma.prompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromptsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpdateArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prompts.
     * @param {PromptsDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromptsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompts = await prisma.prompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromptsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prompts.
     * @param {PromptsUpsertArgs} args - Arguments to update or create a Prompts.
     * @example
     * // Update or create a Prompts
     * const prompts = await prisma.prompts.upsert({
     *   create: {
     *     // ... data to create a Prompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompts we want to update
     *   }
     * })
    **/
    upsert<T extends PromptsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpsertArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompts.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptsCountArgs>(
      args?: Subset<T, PromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptsAggregateArgs>(args: Subset<T, PromptsAggregateArgs>): Prisma.PrismaPromise<GetPromptsAggregateType<T>>

    /**
     * Group by Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsGroupByArgs} args - Group by arguments.
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
      T extends PromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptsGroupByArgs['orderBy'] }
        : { orderBy?: PromptsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompts model
   */
  readonly fields: PromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tagsFull<T extends Prompts$tagsFullArgs<ExtArgs> = {}>(args?: Subset<T, Prompts$tagsFullArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findMany'> | Null>;

    worldInfos<T extends Prompts$worldInfosArgs<ExtArgs> = {}>(args?: Subset<T, Prompts$worldInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prompts model
   */ 
  interface PromptsFieldRefs {
    readonly id: FieldRef<"Prompts", 'String'>
    readonly aetherId: FieldRef<"Prompts", 'Int'>
    readonly authorsNote: FieldRef<"Prompts", 'String'>
    readonly description: FieldRef<"Prompts", 'String'>
    readonly memory: FieldRef<"Prompts", 'String'>
    readonly nsfw: FieldRef<"Prompts", 'Int'>
    readonly parentId: FieldRef<"Prompts", 'String'>
    readonly promptContent: FieldRef<"Prompts", 'String'>
    readonly publishDate: FieldRef<"Prompts", 'String'>
    readonly quests: FieldRef<"Prompts", 'String'>
    readonly tags: FieldRef<"Prompts", 'String'>
    readonly title: FieldRef<"Prompts", 'String'>
    readonly scriptZip: FieldRef<"Prompts", 'Bytes'>
    readonly novelAiScenario: FieldRef<"Prompts", 'String'>
    readonly holoAiScenario: FieldRef<"Prompts", 'String'>
    readonly correlationId: FieldRef<"Prompts", 'String'>
    readonly dateCreated: FieldRef<"Prompts", 'String'>
    readonly dateEdited: FieldRef<"Prompts", 'String'>
    readonly deleted: FieldRef<"Prompts", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Prompts findUnique
   */
  export type PromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts findUniqueOrThrow
   */
  export type PromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts findFirst
   */
  export type PromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts findFirstOrThrow
   */
  export type PromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts findMany
   */
  export type PromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts create
   */
  export type PromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompts.
     */
    data: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
  }


  /**
   * Prompts update
   */
  export type PromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompts.
     */
    data: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
    /**
     * Choose, which Prompts to update.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts updateMany
   */
  export type PromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptsUpdateManyMutationInput, PromptsUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptsWhereInput
  }


  /**
   * Prompts upsert
   */
  export type PromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompts to update in case it exists.
     */
    where: PromptsWhereUniqueInput
    /**
     * In case the Prompts found by the `where` argument doesn't exist, create a new Prompts with this data.
     */
    create: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
    /**
     * In case the Prompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
  }


  /**
   * Prompts delete
   */
  export type PromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter which Prompts to delete.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts deleteMany
   */
  export type PromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptsWhereInput
  }


  /**
   * Prompts.tagsFull
   */
  export type Prompts$tagsFullArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    where?: TagsPromptsMapWhereInput
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    cursor?: TagsPromptsMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsPromptsMapScalarFieldEnum | TagsPromptsMapScalarFieldEnum[]
  }


  /**
   * Prompts.worldInfos
   */
  export type Prompts$worldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    where?: WorldInfosWhereInput
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    cursor?: WorldInfosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * Prompts without action
   */
  export type PromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
  }



  /**
   * Model WorldInfos
   */

  export type AggregateWorldInfos = {
    _count: WorldInfosCountAggregateOutputType | null
    _avg: WorldInfosAvgAggregateOutputType | null
    _sum: WorldInfosSumAggregateOutputType | null
    _min: WorldInfosMinAggregateOutputType | null
    _max: WorldInfosMaxAggregateOutputType | null
  }

  export type WorldInfosAvgAggregateOutputType = {
    aetherId: number | null
  }

  export type WorldInfosSumAggregateOutputType = {
    aetherId: number | null
  }

  export type WorldInfosMinAggregateOutputType = {
    id: string | null
    aetherId: number | null
    entry: string | null
    keys: string | null
    promptId: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type WorldInfosMaxAggregateOutputType = {
    id: string | null
    aetherId: number | null
    entry: string | null
    keys: string | null
    promptId: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type WorldInfosCountAggregateOutputType = {
    id: number
    aetherId: number
    entry: number
    keys: number
    promptId: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type WorldInfosAvgAggregateInputType = {
    aetherId?: true
  }

  export type WorldInfosSumAggregateInputType = {
    aetherId?: true
  }

  export type WorldInfosMinAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type WorldInfosMaxAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type WorldInfosCountAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type WorldInfosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfos to aggregate.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldInfos
    **/
    _count?: true | WorldInfosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldInfosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldInfosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldInfosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldInfosMaxAggregateInputType
  }

  export type GetWorldInfosAggregateType<T extends WorldInfosAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldInfos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldInfos[P]>
      : GetScalarType<T[P], AggregateWorldInfos[P]>
  }




  export type WorldInfosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldInfosWhereInput
    orderBy?: WorldInfosOrderByWithAggregationInput | WorldInfosOrderByWithAggregationInput[]
    by: WorldInfosScalarFieldEnum[] | WorldInfosScalarFieldEnum
    having?: WorldInfosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldInfosCountAggregateInputType | true
    _avg?: WorldInfosAvgAggregateInputType
    _sum?: WorldInfosSumAggregateInputType
    _min?: WorldInfosMinAggregateInputType
    _max?: WorldInfosMaxAggregateInputType
  }

  export type WorldInfosGroupByOutputType = {
    id: string
    aetherId: number | null
    entry: string
    keys: string
    promptId: string
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: WorldInfosCountAggregateOutputType | null
    _avg: WorldInfosAvgAggregateOutputType | null
    _sum: WorldInfosSumAggregateOutputType | null
    _min: WorldInfosMinAggregateOutputType | null
    _max: WorldInfosMaxAggregateOutputType | null
  }

  type GetWorldInfosGroupByPayload<T extends WorldInfosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldInfosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldInfosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldInfosGroupByOutputType[P]>
            : GetScalarType<T[P], WorldInfosGroupByOutputType[P]>
        }
      >
    >


  export type WorldInfosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aetherId?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    prompts?: boolean | PromptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldInfos"]>

  export type WorldInfosSelectScalar = {
    id?: boolean
    aetherId?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type WorldInfosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | PromptsDefaultArgs<ExtArgs>
  }


  export type $WorldInfosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldInfos"
    objects: {
      prompts: Prisma.$PromptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aetherId: number | null
      entry: string
      keys: string
      promptId: string
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["worldInfos"]>
    composites: {}
  }


  type WorldInfosGetPayload<S extends boolean | null | undefined | WorldInfosDefaultArgs> = $Result.GetResult<Prisma.$WorldInfosPayload, S>

  type WorldInfosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldInfosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldInfosCountAggregateInputType | true
    }

  export interface WorldInfosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldInfos'], meta: { name: 'WorldInfos' } }
    /**
     * Find zero or one WorldInfos that matches the filter.
     * @param {WorldInfosFindUniqueArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldInfosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorldInfos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldInfosFindUniqueOrThrowArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldInfosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindFirstArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldInfosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindFirstArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorldInfos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindFirstOrThrowArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldInfosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldInfos
     * const worldInfos = await prisma.worldInfos.findMany()
     * 
     * // Get first 10 WorldInfos
     * const worldInfos = await prisma.worldInfos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldInfosWithIdOnly = await prisma.worldInfos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldInfosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorldInfos.
     * @param {WorldInfosCreateArgs} args - Arguments to create a WorldInfos.
     * @example
     * // Create one WorldInfos
     * const WorldInfos = await prisma.worldInfos.create({
     *   data: {
     *     // ... data to create a WorldInfos
     *   }
     * })
     * 
    **/
    create<T extends WorldInfosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosCreateArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a WorldInfos.
     * @param {WorldInfosDeleteArgs} args - Arguments to delete one WorldInfos.
     * @example
     * // Delete one WorldInfos
     * const WorldInfos = await prisma.worldInfos.delete({
     *   where: {
     *     // ... filter to delete one WorldInfos
     *   }
     * })
     * 
    **/
    delete<T extends WorldInfosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosDeleteArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorldInfos.
     * @param {WorldInfosUpdateArgs} args - Arguments to update one WorldInfos.
     * @example
     * // Update one WorldInfos
     * const worldInfos = await prisma.worldInfos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldInfosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpdateArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorldInfos.
     * @param {WorldInfosDeleteManyArgs} args - Arguments to filter WorldInfos to delete.
     * @example
     * // Delete a few WorldInfos
     * const { count } = await prisma.worldInfos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldInfosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldInfos
     * const worldInfos = await prisma.worldInfos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldInfosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldInfos.
     * @param {WorldInfosUpsertArgs} args - Arguments to update or create a WorldInfos.
     * @example
     * // Update or create a WorldInfos
     * const worldInfos = await prisma.worldInfos.upsert({
     *   create: {
     *     // ... data to create a WorldInfos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldInfos we want to update
     *   }
     * })
    **/
    upsert<T extends WorldInfosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpsertArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosCountArgs} args - Arguments to filter WorldInfos to count.
     * @example
     * // Count the number of WorldInfos
     * const count = await prisma.worldInfos.count({
     *   where: {
     *     // ... the filter for the WorldInfos we want to count
     *   }
     * })
    **/
    count<T extends WorldInfosCountArgs>(
      args?: Subset<T, WorldInfosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldInfosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorldInfosAggregateArgs>(args: Subset<T, WorldInfosAggregateArgs>): Prisma.PrismaPromise<GetWorldInfosAggregateType<T>>

    /**
     * Group by WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosGroupByArgs} args - Group by arguments.
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
      T extends WorldInfosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldInfosGroupByArgs['orderBy'] }
        : { orderBy?: WorldInfosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorldInfosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldInfosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldInfos model
   */
  readonly fields: WorldInfosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldInfos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldInfosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prompts<T extends PromptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptsDefaultArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorldInfos model
   */ 
  interface WorldInfosFieldRefs {
    readonly id: FieldRef<"WorldInfos", 'String'>
    readonly aetherId: FieldRef<"WorldInfos", 'Int'>
    readonly entry: FieldRef<"WorldInfos", 'String'>
    readonly keys: FieldRef<"WorldInfos", 'String'>
    readonly promptId: FieldRef<"WorldInfos", 'String'>
    readonly correlationId: FieldRef<"WorldInfos", 'String'>
    readonly dateCreated: FieldRef<"WorldInfos", 'String'>
    readonly dateEdited: FieldRef<"WorldInfos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WorldInfos findUnique
   */
  export type WorldInfosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos findUniqueOrThrow
   */
  export type WorldInfosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos findFirst
   */
  export type WorldInfosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfos.
     */
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos findFirstOrThrow
   */
  export type WorldInfosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfos.
     */
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos findMany
   */
  export type WorldInfosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos create
   */
  export type WorldInfosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldInfos.
     */
    data: XOR<WorldInfosCreateInput, WorldInfosUncheckedCreateInput>
  }


  /**
   * WorldInfos update
   */
  export type WorldInfosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldInfos.
     */
    data: XOR<WorldInfosUpdateInput, WorldInfosUncheckedUpdateInput>
    /**
     * Choose, which WorldInfos to update.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos updateMany
   */
  export type WorldInfosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldInfos.
     */
    data: XOR<WorldInfosUpdateManyMutationInput, WorldInfosUncheckedUpdateManyInput>
    /**
     * Filter which WorldInfos to update
     */
    where?: WorldInfosWhereInput
  }


  /**
   * WorldInfos upsert
   */
  export type WorldInfosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldInfos to update in case it exists.
     */
    where: WorldInfosWhereUniqueInput
    /**
     * In case the WorldInfos found by the `where` argument doesn't exist, create a new WorldInfos with this data.
     */
    create: XOR<WorldInfosCreateInput, WorldInfosUncheckedCreateInput>
    /**
     * In case the WorldInfos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldInfosUpdateInput, WorldInfosUncheckedUpdateInput>
  }


  /**
   * WorldInfos delete
   */
  export type WorldInfosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter which WorldInfos to delete.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos deleteMany
   */
  export type WorldInfosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfos to delete
     */
    where?: WorldInfosWhereInput
  }


  /**
   * WorldInfos without action
   */
  export type WorldInfosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
  }



  /**
   * Model AetherPrompts
   */

  export type AggregateAetherPrompts = {
    _count: AetherPromptsCountAggregateOutputType | null
    _avg: AetherPromptsAvgAggregateOutputType | null
    _sum: AetherPromptsSumAggregateOutputType | null
    _min: AetherPromptsMinAggregateOutputType | null
    _max: AetherPromptsMaxAggregateOutputType | null
  }

  export type AetherPromptsAvgAggregateOutputType = {
    id: number | null
    nsfw: number | null
  }

  export type AetherPromptsSumAggregateOutputType = {
    id: number | null
    nsfw: number | null
  }

  export type AetherPromptsMinAggregateOutputType = {
    id: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherPromptsMaxAggregateOutputType = {
    id: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherPromptsCountAggregateOutputType = {
    id: number
    authorsNote: number
    description: number
    memory: number
    nsfw: number
    parentId: number
    promptContent: number
    publishDate: number
    quests: number
    tags: number
    title: number
    scriptZip: number
    novelAiScenario: number
    holoAiScenario: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type AetherPromptsAvgAggregateInputType = {
    id?: true
    nsfw?: true
  }

  export type AetherPromptsSumAggregateInputType = {
    id?: true
    nsfw?: true
  }

  export type AetherPromptsMinAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherPromptsMaxAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherPromptsCountAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type AetherPromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherPrompts to aggregate.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AetherPrompts
    **/
    _count?: true | AetherPromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AetherPromptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AetherPromptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AetherPromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AetherPromptsMaxAggregateInputType
  }

  export type GetAetherPromptsAggregateType<T extends AetherPromptsAggregateArgs> = {
        [P in keyof T & keyof AggregateAetherPrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAetherPrompts[P]>
      : GetScalarType<T[P], AggregateAetherPrompts[P]>
  }




  export type AetherPromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherPromptsWhereInput
    orderBy?: AetherPromptsOrderByWithAggregationInput | AetherPromptsOrderByWithAggregationInput[]
    by: AetherPromptsScalarFieldEnum[] | AetherPromptsScalarFieldEnum
    having?: AetherPromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AetherPromptsCountAggregateInputType | true
    _avg?: AetherPromptsAvgAggregateInputType
    _sum?: AetherPromptsSumAggregateInputType
    _min?: AetherPromptsMinAggregateInputType
    _max?: AetherPromptsMaxAggregateInputType
  }

  export type AetherPromptsGroupByOutputType = {
    id: number
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number
    parentId: string | null
    promptContent: string
    publishDate: string | null
    quests: string | null
    tags: string
    title: string
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: AetherPromptsCountAggregateOutputType | null
    _avg: AetherPromptsAvgAggregateOutputType | null
    _sum: AetherPromptsSumAggregateOutputType | null
    _min: AetherPromptsMinAggregateOutputType | null
    _max: AetherPromptsMaxAggregateOutputType | null
  }

  type GetAetherPromptsGroupByPayload<T extends AetherPromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AetherPromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AetherPromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AetherPromptsGroupByOutputType[P]>
            : GetScalarType<T[P], AetherPromptsGroupByOutputType[P]>
        }
      >
    >


  export type AetherPromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    worldInfos?: boolean | AetherPrompts$worldInfosArgs<ExtArgs>
    _count?: boolean | AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aetherPrompts"]>

  export type AetherPromptsSelectScalar = {
    id?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type AetherPromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | AetherPrompts$worldInfosArgs<ExtArgs>
    _count?: boolean | AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AetherPromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AetherPrompts"
    objects: {
      worldInfos: Prisma.$AetherWorldInfosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorsNote: string | null
      description: string | null
      memory: string | null
      nsfw: number
      parentId: string | null
      promptContent: string
      publishDate: string | null
      quests: string | null
      tags: string
      title: string
      scriptZip: Buffer | null
      novelAiScenario: string | null
      holoAiScenario: string | null
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["aetherPrompts"]>
    composites: {}
  }


  type AetherPromptsGetPayload<S extends boolean | null | undefined | AetherPromptsDefaultArgs> = $Result.GetResult<Prisma.$AetherPromptsPayload, S>

  type AetherPromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AetherPromptsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AetherPromptsCountAggregateInputType | true
    }

  export interface AetherPromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AetherPrompts'], meta: { name: 'AetherPrompts' } }
    /**
     * Find zero or one AetherPrompts that matches the filter.
     * @param {AetherPromptsFindUniqueArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AetherPromptsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsFindUniqueArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AetherPrompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AetherPromptsFindUniqueOrThrowArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AetherPromptsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AetherPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindFirstArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AetherPromptsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindFirstArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AetherPrompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindFirstOrThrowArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AetherPromptsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AetherPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findMany()
     * 
     * // Get first 10 AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aetherPromptsWithIdOnly = await prisma.aetherPrompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AetherPromptsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AetherPrompts.
     * @param {AetherPromptsCreateArgs} args - Arguments to create a AetherPrompts.
     * @example
     * // Create one AetherPrompts
     * const AetherPrompts = await prisma.aetherPrompts.create({
     *   data: {
     *     // ... data to create a AetherPrompts
     *   }
     * })
     * 
    **/
    create<T extends AetherPromptsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsCreateArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AetherPrompts.
     * @param {AetherPromptsDeleteArgs} args - Arguments to delete one AetherPrompts.
     * @example
     * // Delete one AetherPrompts
     * const AetherPrompts = await prisma.aetherPrompts.delete({
     *   where: {
     *     // ... filter to delete one AetherPrompts
     *   }
     * })
     * 
    **/
    delete<T extends AetherPromptsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsDeleteArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AetherPrompts.
     * @param {AetherPromptsUpdateArgs} args - Arguments to update one AetherPrompts.
     * @example
     * // Update one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AetherPromptsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpdateArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AetherPrompts.
     * @param {AetherPromptsDeleteManyArgs} args - Arguments to filter AetherPrompts to delete.
     * @example
     * // Delete a few AetherPrompts
     * const { count } = await prisma.aetherPrompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AetherPromptsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AetherPromptsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AetherPrompts.
     * @param {AetherPromptsUpsertArgs} args - Arguments to update or create a AetherPrompts.
     * @example
     * // Update or create a AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.upsert({
     *   create: {
     *     // ... data to create a AetherPrompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AetherPrompts we want to update
     *   }
     * })
    **/
    upsert<T extends AetherPromptsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpsertArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsCountArgs} args - Arguments to filter AetherPrompts to count.
     * @example
     * // Count the number of AetherPrompts
     * const count = await prisma.aetherPrompts.count({
     *   where: {
     *     // ... the filter for the AetherPrompts we want to count
     *   }
     * })
    **/
    count<T extends AetherPromptsCountArgs>(
      args?: Subset<T, AetherPromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AetherPromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AetherPromptsAggregateArgs>(args: Subset<T, AetherPromptsAggregateArgs>): Prisma.PrismaPromise<GetAetherPromptsAggregateType<T>>

    /**
     * Group by AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsGroupByArgs} args - Group by arguments.
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
      T extends AetherPromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AetherPromptsGroupByArgs['orderBy'] }
        : { orderBy?: AetherPromptsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AetherPromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAetherPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AetherPrompts model
   */
  readonly fields: AetherPromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AetherPrompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AetherPromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    worldInfos<T extends AetherPrompts$worldInfosArgs<ExtArgs> = {}>(args?: Subset<T, AetherPrompts$worldInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AetherPrompts model
   */ 
  interface AetherPromptsFieldRefs {
    readonly id: FieldRef<"AetherPrompts", 'Int'>
    readonly authorsNote: FieldRef<"AetherPrompts", 'String'>
    readonly description: FieldRef<"AetherPrompts", 'String'>
    readonly memory: FieldRef<"AetherPrompts", 'String'>
    readonly nsfw: FieldRef<"AetherPrompts", 'Int'>
    readonly parentId: FieldRef<"AetherPrompts", 'String'>
    readonly promptContent: FieldRef<"AetherPrompts", 'String'>
    readonly publishDate: FieldRef<"AetherPrompts", 'String'>
    readonly quests: FieldRef<"AetherPrompts", 'String'>
    readonly tags: FieldRef<"AetherPrompts", 'String'>
    readonly title: FieldRef<"AetherPrompts", 'String'>
    readonly scriptZip: FieldRef<"AetherPrompts", 'Bytes'>
    readonly novelAiScenario: FieldRef<"AetherPrompts", 'String'>
    readonly holoAiScenario: FieldRef<"AetherPrompts", 'String'>
    readonly correlationId: FieldRef<"AetherPrompts", 'String'>
    readonly dateCreated: FieldRef<"AetherPrompts", 'String'>
    readonly dateEdited: FieldRef<"AetherPrompts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AetherPrompts findUnique
   */
  export type AetherPromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts findUniqueOrThrow
   */
  export type AetherPromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts findFirst
   */
  export type AetherPromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherPrompts.
     */
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts findFirstOrThrow
   */
  export type AetherPromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherPrompts.
     */
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts findMany
   */
  export type AetherPromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts create
   */
  export type AetherPromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a AetherPrompts.
     */
    data: XOR<AetherPromptsCreateInput, AetherPromptsUncheckedCreateInput>
  }


  /**
   * AetherPrompts update
   */
  export type AetherPromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a AetherPrompts.
     */
    data: XOR<AetherPromptsUpdateInput, AetherPromptsUncheckedUpdateInput>
    /**
     * Choose, which AetherPrompts to update.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts updateMany
   */
  export type AetherPromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AetherPrompts.
     */
    data: XOR<AetherPromptsUpdateManyMutationInput, AetherPromptsUncheckedUpdateManyInput>
    /**
     * Filter which AetherPrompts to update
     */
    where?: AetherPromptsWhereInput
  }


  /**
   * AetherPrompts upsert
   */
  export type AetherPromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the AetherPrompts to update in case it exists.
     */
    where: AetherPromptsWhereUniqueInput
    /**
     * In case the AetherPrompts found by the `where` argument doesn't exist, create a new AetherPrompts with this data.
     */
    create: XOR<AetherPromptsCreateInput, AetherPromptsUncheckedCreateInput>
    /**
     * In case the AetherPrompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AetherPromptsUpdateInput, AetherPromptsUncheckedUpdateInput>
  }


  /**
   * AetherPrompts delete
   */
  export type AetherPromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter which AetherPrompts to delete.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts deleteMany
   */
  export type AetherPromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherPrompts to delete
     */
    where?: AetherPromptsWhereInput
  }


  /**
   * AetherPrompts.worldInfos
   */
  export type AetherPrompts$worldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    where?: AetherWorldInfosWhereInput
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    cursor?: AetherWorldInfosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherPrompts without action
   */
  export type AetherPromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
  }



  /**
   * Model AetherWorldInfos
   */

  export type AggregateAetherWorldInfos = {
    _count: AetherWorldInfosCountAggregateOutputType | null
    _avg: AetherWorldInfosAvgAggregateOutputType | null
    _sum: AetherWorldInfosSumAggregateOutputType | null
    _min: AetherWorldInfosMinAggregateOutputType | null
    _max: AetherWorldInfosMaxAggregateOutputType | null
  }

  export type AetherWorldInfosAvgAggregateOutputType = {
    id: number | null
    promptId: number | null
  }

  export type AetherWorldInfosSumAggregateOutputType = {
    id: number | null
    promptId: number | null
  }

  export type AetherWorldInfosMinAggregateOutputType = {
    id: number | null
    entry: string | null
    keys: string | null
    promptId: number | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherWorldInfosMaxAggregateOutputType = {
    id: number | null
    entry: string | null
    keys: string | null
    promptId: number | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherWorldInfosCountAggregateOutputType = {
    id: number
    entry: number
    keys: number
    promptId: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type AetherWorldInfosAvgAggregateInputType = {
    id?: true
    promptId?: true
  }

  export type AetherWorldInfosSumAggregateInputType = {
    id?: true
    promptId?: true
  }

  export type AetherWorldInfosMinAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherWorldInfosMaxAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherWorldInfosCountAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type AetherWorldInfosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherWorldInfos to aggregate.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AetherWorldInfos
    **/
    _count?: true | AetherWorldInfosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AetherWorldInfosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AetherWorldInfosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AetherWorldInfosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AetherWorldInfosMaxAggregateInputType
  }

  export type GetAetherWorldInfosAggregateType<T extends AetherWorldInfosAggregateArgs> = {
        [P in keyof T & keyof AggregateAetherWorldInfos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAetherWorldInfos[P]>
      : GetScalarType<T[P], AggregateAetherWorldInfos[P]>
  }




  export type AetherWorldInfosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherWorldInfosWhereInput
    orderBy?: AetherWorldInfosOrderByWithAggregationInput | AetherWorldInfosOrderByWithAggregationInput[]
    by: AetherWorldInfosScalarFieldEnum[] | AetherWorldInfosScalarFieldEnum
    having?: AetherWorldInfosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AetherWorldInfosCountAggregateInputType | true
    _avg?: AetherWorldInfosAvgAggregateInputType
    _sum?: AetherWorldInfosSumAggregateInputType
    _min?: AetherWorldInfosMinAggregateInputType
    _max?: AetherWorldInfosMaxAggregateInputType
  }

  export type AetherWorldInfosGroupByOutputType = {
    id: number
    entry: string
    keys: string
    promptId: number
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: AetherWorldInfosCountAggregateOutputType | null
    _avg: AetherWorldInfosAvgAggregateOutputType | null
    _sum: AetherWorldInfosSumAggregateOutputType | null
    _min: AetherWorldInfosMinAggregateOutputType | null
    _max: AetherWorldInfosMaxAggregateOutputType | null
  }

  type GetAetherWorldInfosGroupByPayload<T extends AetherWorldInfosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AetherWorldInfosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AetherWorldInfosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AetherWorldInfosGroupByOutputType[P]>
            : GetScalarType<T[P], AetherWorldInfosGroupByOutputType[P]>
        }
      >
    >


  export type AetherWorldInfosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    prompts?: boolean | AetherPromptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aetherWorldInfos"]>

  export type AetherWorldInfosSelectScalar = {
    id?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type AetherWorldInfosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | AetherPromptsDefaultArgs<ExtArgs>
  }


  export type $AetherWorldInfosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AetherWorldInfos"
    objects: {
      prompts: Prisma.$AetherPromptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entry: string
      keys: string
      promptId: number
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["aetherWorldInfos"]>
    composites: {}
  }


  type AetherWorldInfosGetPayload<S extends boolean | null | undefined | AetherWorldInfosDefaultArgs> = $Result.GetResult<Prisma.$AetherWorldInfosPayload, S>

  type AetherWorldInfosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AetherWorldInfosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AetherWorldInfosCountAggregateInputType | true
    }

  export interface AetherWorldInfosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AetherWorldInfos'], meta: { name: 'AetherWorldInfos' } }
    /**
     * Find zero or one AetherWorldInfos that matches the filter.
     * @param {AetherWorldInfosFindUniqueArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AetherWorldInfosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosFindUniqueArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AetherWorldInfos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AetherWorldInfosFindUniqueOrThrowArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AetherWorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindFirstArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AetherWorldInfosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindFirstArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AetherWorldInfos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindFirstOrThrowArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AetherWorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany()
     * 
     * // Get first 10 AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aetherWorldInfosWithIdOnly = await prisma.aetherWorldInfos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AetherWorldInfosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AetherWorldInfos.
     * @param {AetherWorldInfosCreateArgs} args - Arguments to create a AetherWorldInfos.
     * @example
     * // Create one AetherWorldInfos
     * const AetherWorldInfos = await prisma.aetherWorldInfos.create({
     *   data: {
     *     // ... data to create a AetherWorldInfos
     *   }
     * })
     * 
    **/
    create<T extends AetherWorldInfosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosCreateArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AetherWorldInfos.
     * @param {AetherWorldInfosDeleteArgs} args - Arguments to delete one AetherWorldInfos.
     * @example
     * // Delete one AetherWorldInfos
     * const AetherWorldInfos = await prisma.aetherWorldInfos.delete({
     *   where: {
     *     // ... filter to delete one AetherWorldInfos
     *   }
     * })
     * 
    **/
    delete<T extends AetherWorldInfosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosDeleteArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AetherWorldInfos.
     * @param {AetherWorldInfosUpdateArgs} args - Arguments to update one AetherWorldInfos.
     * @example
     * // Update one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AetherWorldInfosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpdateArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AetherWorldInfos.
     * @param {AetherWorldInfosDeleteManyArgs} args - Arguments to filter AetherWorldInfos to delete.
     * @example
     * // Delete a few AetherWorldInfos
     * const { count } = await prisma.aetherWorldInfos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AetherWorldInfosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AetherWorldInfosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AetherWorldInfos.
     * @param {AetherWorldInfosUpsertArgs} args - Arguments to update or create a AetherWorldInfos.
     * @example
     * // Update or create a AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.upsert({
     *   create: {
     *     // ... data to create a AetherWorldInfos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AetherWorldInfos we want to update
     *   }
     * })
    **/
    upsert<T extends AetherWorldInfosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpsertArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosCountArgs} args - Arguments to filter AetherWorldInfos to count.
     * @example
     * // Count the number of AetherWorldInfos
     * const count = await prisma.aetherWorldInfos.count({
     *   where: {
     *     // ... the filter for the AetherWorldInfos we want to count
     *   }
     * })
    **/
    count<T extends AetherWorldInfosCountArgs>(
      args?: Subset<T, AetherWorldInfosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AetherWorldInfosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AetherWorldInfosAggregateArgs>(args: Subset<T, AetherWorldInfosAggregateArgs>): Prisma.PrismaPromise<GetAetherWorldInfosAggregateType<T>>

    /**
     * Group by AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosGroupByArgs} args - Group by arguments.
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
      T extends AetherWorldInfosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AetherWorldInfosGroupByArgs['orderBy'] }
        : { orderBy?: AetherWorldInfosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AetherWorldInfosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAetherWorldInfosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AetherWorldInfos model
   */
  readonly fields: AetherWorldInfosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AetherWorldInfos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AetherWorldInfosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prompts<T extends AetherPromptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AetherPromptsDefaultArgs<ExtArgs>>): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AetherWorldInfos model
   */ 
  interface AetherWorldInfosFieldRefs {
    readonly id: FieldRef<"AetherWorldInfos", 'Int'>
    readonly entry: FieldRef<"AetherWorldInfos", 'String'>
    readonly keys: FieldRef<"AetherWorldInfos", 'String'>
    readonly promptId: FieldRef<"AetherWorldInfos", 'Int'>
    readonly correlationId: FieldRef<"AetherWorldInfos", 'String'>
    readonly dateCreated: FieldRef<"AetherWorldInfos", 'String'>
    readonly dateEdited: FieldRef<"AetherWorldInfos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AetherWorldInfos findUnique
   */
  export type AetherWorldInfosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos findUniqueOrThrow
   */
  export type AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos findFirst
   */
  export type AetherWorldInfosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherWorldInfos.
     */
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos findFirstOrThrow
   */
  export type AetherWorldInfosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherWorldInfos.
     */
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos findMany
   */
  export type AetherWorldInfosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos create
   */
  export type AetherWorldInfosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to create a AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosCreateInput, AetherWorldInfosUncheckedCreateInput>
  }


  /**
   * AetherWorldInfos update
   */
  export type AetherWorldInfosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to update a AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosUpdateInput, AetherWorldInfosUncheckedUpdateInput>
    /**
     * Choose, which AetherWorldInfos to update.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos updateMany
   */
  export type AetherWorldInfosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosUpdateManyMutationInput, AetherWorldInfosUncheckedUpdateManyInput>
    /**
     * Filter which AetherWorldInfos to update
     */
    where?: AetherWorldInfosWhereInput
  }


  /**
   * AetherWorldInfos upsert
   */
  export type AetherWorldInfosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The filter to search for the AetherWorldInfos to update in case it exists.
     */
    where: AetherWorldInfosWhereUniqueInput
    /**
     * In case the AetherWorldInfos found by the `where` argument doesn't exist, create a new AetherWorldInfos with this data.
     */
    create: XOR<AetherWorldInfosCreateInput, AetherWorldInfosUncheckedCreateInput>
    /**
     * In case the AetherWorldInfos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AetherWorldInfosUpdateInput, AetherWorldInfosUncheckedUpdateInput>
  }


  /**
   * AetherWorldInfos delete
   */
  export type AetherWorldInfosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter which AetherWorldInfos to delete.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos deleteMany
   */
  export type AetherWorldInfosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherWorldInfos to delete
     */
    where?: AetherWorldInfosWhereInput
  }


  /**
   * AetherWorldInfos without action
   */
  export type AetherWorldInfosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
  }



  /**
   * Model PromptSearch
   */

  export type AggregatePromptSearch = {
    _count: PromptSearchCountAggregateOutputType | null
    _avg: PromptSearchAvgAggregateOutputType | null
    _sum: PromptSearchSumAggregateOutputType | null
    _min: PromptSearchMinAggregateOutputType | null
    _max: PromptSearchMaxAggregateOutputType | null
  }

  export type PromptSearchAvgAggregateOutputType = {
    id: number | null
  }

  export type PromptSearchSumAggregateOutputType = {
    id: number | null
  }

  export type PromptSearchMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type PromptSearchMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type PromptSearchCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type PromptSearchAvgAggregateInputType = {
    id?: true
  }

  export type PromptSearchSumAggregateInputType = {
    id?: true
  }

  export type PromptSearchMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type PromptSearchMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type PromptSearchCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type PromptSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptSearch to aggregate.
     */
    where?: PromptSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptSearches to fetch.
     */
    orderBy?: PromptSearchOrderByWithRelationInput | PromptSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptSearches
    **/
    _count?: true | PromptSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptSearchMaxAggregateInputType
  }

  export type GetPromptSearchAggregateType<T extends PromptSearchAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptSearch[P]>
      : GetScalarType<T[P], AggregatePromptSearch[P]>
  }




  export type PromptSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptSearchWhereInput
    orderBy?: PromptSearchOrderByWithAggregationInput | PromptSearchOrderByWithAggregationInput[]
    by: PromptSearchScalarFieldEnum[] | PromptSearchScalarFieldEnum
    having?: PromptSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptSearchCountAggregateInputType | true
    _avg?: PromptSearchAvgAggregateInputType
    _sum?: PromptSearchSumAggregateInputType
    _min?: PromptSearchMinAggregateInputType
    _max?: PromptSearchMaxAggregateInputType
  }

  export type PromptSearchGroupByOutputType = {
    id: number
    text: string
    _count: PromptSearchCountAggregateOutputType | null
    _avg: PromptSearchAvgAggregateOutputType | null
    _sum: PromptSearchSumAggregateOutputType | null
    _min: PromptSearchMinAggregateOutputType | null
    _max: PromptSearchMaxAggregateOutputType | null
  }

  type GetPromptSearchGroupByPayload<T extends PromptSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptSearchGroupByOutputType[P]>
            : GetScalarType<T[P], PromptSearchGroupByOutputType[P]>
        }
      >
    >


  export type PromptSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["promptSearch"]>

  export type PromptSearchSelectScalar = {
    id?: boolean
    text?: boolean
  }


  export type $PromptSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
    }, ExtArgs["result"]["promptSearch"]>
    composites: {}
  }


  type PromptSearchGetPayload<S extends boolean | null | undefined | PromptSearchDefaultArgs> = $Result.GetResult<Prisma.$PromptSearchPayload, S>

  type PromptSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptSearchFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PromptSearchCountAggregateInputType | true
    }

  export interface PromptSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptSearch'], meta: { name: 'PromptSearch' } }
    /**
     * Find zero or one PromptSearch that matches the filter.
     * @param {PromptSearchFindUniqueArgs} args - Arguments to find a PromptSearch
     * @example
     * // Get one PromptSearch
     * const promptSearch = await prisma.promptSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromptSearchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchFindUniqueArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PromptSearch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromptSearchFindUniqueOrThrowArgs} args - Arguments to find a PromptSearch
     * @example
     * // Get one PromptSearch
     * const promptSearch = await prisma.promptSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromptSearchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptSearchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PromptSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchFindFirstArgs} args - Arguments to find a PromptSearch
     * @example
     * // Get one PromptSearch
     * const promptSearch = await prisma.promptSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromptSearchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptSearchFindFirstArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PromptSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchFindFirstOrThrowArgs} args - Arguments to find a PromptSearch
     * @example
     * // Get one PromptSearch
     * const promptSearch = await prisma.promptSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromptSearchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptSearchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PromptSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptSearches
     * const promptSearches = await prisma.promptSearch.findMany()
     * 
     * // Get first 10 PromptSearches
     * const promptSearches = await prisma.promptSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptSearchWithIdOnly = await prisma.promptSearch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromptSearchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptSearchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PromptSearch.
     * @param {PromptSearchCreateArgs} args - Arguments to create a PromptSearch.
     * @example
     * // Create one PromptSearch
     * const PromptSearch = await prisma.promptSearch.create({
     *   data: {
     *     // ... data to create a PromptSearch
     *   }
     * })
     * 
    **/
    create<T extends PromptSearchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchCreateArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a PromptSearch.
     * @param {PromptSearchDeleteArgs} args - Arguments to delete one PromptSearch.
     * @example
     * // Delete one PromptSearch
     * const PromptSearch = await prisma.promptSearch.delete({
     *   where: {
     *     // ... filter to delete one PromptSearch
     *   }
     * })
     * 
    **/
    delete<T extends PromptSearchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchDeleteArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PromptSearch.
     * @param {PromptSearchUpdateArgs} args - Arguments to update one PromptSearch.
     * @example
     * // Update one PromptSearch
     * const promptSearch = await prisma.promptSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromptSearchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchUpdateArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PromptSearches.
     * @param {PromptSearchDeleteManyArgs} args - Arguments to filter PromptSearches to delete.
     * @example
     * // Delete a few PromptSearches
     * const { count } = await prisma.promptSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromptSearchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptSearchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptSearches
     * const promptSearch = await prisma.promptSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromptSearchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromptSearch.
     * @param {PromptSearchUpsertArgs} args - Arguments to update or create a PromptSearch.
     * @example
     * // Update or create a PromptSearch
     * const promptSearch = await prisma.promptSearch.upsert({
     *   create: {
     *     // ... data to create a PromptSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptSearch we want to update
     *   }
     * })
    **/
    upsert<T extends PromptSearchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromptSearchUpsertArgs<ExtArgs>>
    ): Prisma__PromptSearchClient<$Result.GetResult<Prisma.$PromptSearchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PromptSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchCountArgs} args - Arguments to filter PromptSearches to count.
     * @example
     * // Count the number of PromptSearches
     * const count = await prisma.promptSearch.count({
     *   where: {
     *     // ... the filter for the PromptSearches we want to count
     *   }
     * })
    **/
    count<T extends PromptSearchCountArgs>(
      args?: Subset<T, PromptSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptSearchAggregateArgs>(args: Subset<T, PromptSearchAggregateArgs>): Prisma.PrismaPromise<GetPromptSearchAggregateType<T>>

    /**
     * Group by PromptSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptSearchGroupByArgs} args - Group by arguments.
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
      T extends PromptSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptSearchGroupByArgs['orderBy'] }
        : { orderBy?: PromptSearchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptSearch model
   */
  readonly fields: PromptSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PromptSearch model
   */ 
  interface PromptSearchFieldRefs {
    readonly id: FieldRef<"PromptSearch", 'Int'>
    readonly text: FieldRef<"PromptSearch", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PromptSearch findUnique
   */
  export type PromptSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter, which PromptSearch to fetch.
     */
    where: PromptSearchWhereUniqueInput
  }


  /**
   * PromptSearch findUniqueOrThrow
   */
  export type PromptSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter, which PromptSearch to fetch.
     */
    where: PromptSearchWhereUniqueInput
  }


  /**
   * PromptSearch findFirst
   */
  export type PromptSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter, which PromptSearch to fetch.
     */
    where?: PromptSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptSearches to fetch.
     */
    orderBy?: PromptSearchOrderByWithRelationInput | PromptSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptSearches.
     */
    cursor?: PromptSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptSearches.
     */
    distinct?: PromptSearchScalarFieldEnum | PromptSearchScalarFieldEnum[]
  }


  /**
   * PromptSearch findFirstOrThrow
   */
  export type PromptSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter, which PromptSearch to fetch.
     */
    where?: PromptSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptSearches to fetch.
     */
    orderBy?: PromptSearchOrderByWithRelationInput | PromptSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptSearches.
     */
    cursor?: PromptSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptSearches.
     */
    distinct?: PromptSearchScalarFieldEnum | PromptSearchScalarFieldEnum[]
  }


  /**
   * PromptSearch findMany
   */
  export type PromptSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter, which PromptSearches to fetch.
     */
    where?: PromptSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptSearches to fetch.
     */
    orderBy?: PromptSearchOrderByWithRelationInput | PromptSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptSearches.
     */
    cursor?: PromptSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptSearches.
     */
    skip?: number
    distinct?: PromptSearchScalarFieldEnum | PromptSearchScalarFieldEnum[]
  }


  /**
   * PromptSearch create
   */
  export type PromptSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * The data needed to create a PromptSearch.
     */
    data: XOR<PromptSearchCreateInput, PromptSearchUncheckedCreateInput>
  }


  /**
   * PromptSearch update
   */
  export type PromptSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * The data needed to update a PromptSearch.
     */
    data: XOR<PromptSearchUpdateInput, PromptSearchUncheckedUpdateInput>
    /**
     * Choose, which PromptSearch to update.
     */
    where: PromptSearchWhereUniqueInput
  }


  /**
   * PromptSearch updateMany
   */
  export type PromptSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptSearches.
     */
    data: XOR<PromptSearchUpdateManyMutationInput, PromptSearchUncheckedUpdateManyInput>
    /**
     * Filter which PromptSearches to update
     */
    where?: PromptSearchWhereInput
  }


  /**
   * PromptSearch upsert
   */
  export type PromptSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * The filter to search for the PromptSearch to update in case it exists.
     */
    where: PromptSearchWhereUniqueInput
    /**
     * In case the PromptSearch found by the `where` argument doesn't exist, create a new PromptSearch with this data.
     */
    create: XOR<PromptSearchCreateInput, PromptSearchUncheckedCreateInput>
    /**
     * In case the PromptSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptSearchUpdateInput, PromptSearchUncheckedUpdateInput>
  }


  /**
   * PromptSearch delete
   */
  export type PromptSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
    /**
     * Filter which PromptSearch to delete.
     */
    where: PromptSearchWhereUniqueInput
  }


  /**
   * PromptSearch deleteMany
   */
  export type PromptSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptSearches to delete
     */
    where?: PromptSearchWhereInput
  }


  /**
   * PromptSearch without action
   */
  export type PromptSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptSearch
     */
    select?: PromptSearchSelect<ExtArgs> | null
  }



  /**
   * Model WorldInfoSearch
   */

  export type AggregateWorldInfoSearch = {
    _count: WorldInfoSearchCountAggregateOutputType | null
    _avg: WorldInfoSearchAvgAggregateOutputType | null
    _sum: WorldInfoSearchSumAggregateOutputType | null
    _min: WorldInfoSearchMinAggregateOutputType | null
    _max: WorldInfoSearchMaxAggregateOutputType | null
  }

  export type WorldInfoSearchAvgAggregateOutputType = {
    id: number | null
  }

  export type WorldInfoSearchSumAggregateOutputType = {
    id: number | null
  }

  export type WorldInfoSearchMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type WorldInfoSearchMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type WorldInfoSearchCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type WorldInfoSearchAvgAggregateInputType = {
    id?: true
  }

  export type WorldInfoSearchSumAggregateInputType = {
    id?: true
  }

  export type WorldInfoSearchMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type WorldInfoSearchMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type WorldInfoSearchCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type WorldInfoSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfoSearch to aggregate.
     */
    where?: WorldInfoSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfoSearches to fetch.
     */
    orderBy?: WorldInfoSearchOrderByWithRelationInput | WorldInfoSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldInfoSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfoSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfoSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldInfoSearches
    **/
    _count?: true | WorldInfoSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldInfoSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldInfoSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldInfoSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldInfoSearchMaxAggregateInputType
  }

  export type GetWorldInfoSearchAggregateType<T extends WorldInfoSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldInfoSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldInfoSearch[P]>
      : GetScalarType<T[P], AggregateWorldInfoSearch[P]>
  }




  export type WorldInfoSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldInfoSearchWhereInput
    orderBy?: WorldInfoSearchOrderByWithAggregationInput | WorldInfoSearchOrderByWithAggregationInput[]
    by: WorldInfoSearchScalarFieldEnum[] | WorldInfoSearchScalarFieldEnum
    having?: WorldInfoSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldInfoSearchCountAggregateInputType | true
    _avg?: WorldInfoSearchAvgAggregateInputType
    _sum?: WorldInfoSearchSumAggregateInputType
    _min?: WorldInfoSearchMinAggregateInputType
    _max?: WorldInfoSearchMaxAggregateInputType
  }

  export type WorldInfoSearchGroupByOutputType = {
    id: number
    text: string
    _count: WorldInfoSearchCountAggregateOutputType | null
    _avg: WorldInfoSearchAvgAggregateOutputType | null
    _sum: WorldInfoSearchSumAggregateOutputType | null
    _min: WorldInfoSearchMinAggregateOutputType | null
    _max: WorldInfoSearchMaxAggregateOutputType | null
  }

  type GetWorldInfoSearchGroupByPayload<T extends WorldInfoSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldInfoSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldInfoSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldInfoSearchGroupByOutputType[P]>
            : GetScalarType<T[P], WorldInfoSearchGroupByOutputType[P]>
        }
      >
    >


  export type WorldInfoSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["worldInfoSearch"]>

  export type WorldInfoSearchSelectScalar = {
    id?: boolean
    text?: boolean
  }


  export type $WorldInfoSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldInfoSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
    }, ExtArgs["result"]["worldInfoSearch"]>
    composites: {}
  }


  type WorldInfoSearchGetPayload<S extends boolean | null | undefined | WorldInfoSearchDefaultArgs> = $Result.GetResult<Prisma.$WorldInfoSearchPayload, S>

  type WorldInfoSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldInfoSearchFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldInfoSearchCountAggregateInputType | true
    }

  export interface WorldInfoSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldInfoSearch'], meta: { name: 'WorldInfoSearch' } }
    /**
     * Find zero or one WorldInfoSearch that matches the filter.
     * @param {WorldInfoSearchFindUniqueArgs} args - Arguments to find a WorldInfoSearch
     * @example
     * // Get one WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldInfoSearchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorldInfoSearch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldInfoSearchFindUniqueOrThrowArgs} args - Arguments to find a WorldInfoSearch
     * @example
     * // Get one WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldInfoSearchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfoSearchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorldInfoSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchFindFirstArgs} args - Arguments to find a WorldInfoSearch
     * @example
     * // Get one WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldInfoSearchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfoSearchFindFirstArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorldInfoSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchFindFirstOrThrowArgs} args - Arguments to find a WorldInfoSearch
     * @example
     * // Get one WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldInfoSearchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfoSearchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorldInfoSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldInfoSearches
     * const worldInfoSearches = await prisma.worldInfoSearch.findMany()
     * 
     * // Get first 10 WorldInfoSearches
     * const worldInfoSearches = await prisma.worldInfoSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldInfoSearchWithIdOnly = await prisma.worldInfoSearch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldInfoSearchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfoSearchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorldInfoSearch.
     * @param {WorldInfoSearchCreateArgs} args - Arguments to create a WorldInfoSearch.
     * @example
     * // Create one WorldInfoSearch
     * const WorldInfoSearch = await prisma.worldInfoSearch.create({
     *   data: {
     *     // ... data to create a WorldInfoSearch
     *   }
     * })
     * 
    **/
    create<T extends WorldInfoSearchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchCreateArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a WorldInfoSearch.
     * @param {WorldInfoSearchDeleteArgs} args - Arguments to delete one WorldInfoSearch.
     * @example
     * // Delete one WorldInfoSearch
     * const WorldInfoSearch = await prisma.worldInfoSearch.delete({
     *   where: {
     *     // ... filter to delete one WorldInfoSearch
     *   }
     * })
     * 
    **/
    delete<T extends WorldInfoSearchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchDeleteArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorldInfoSearch.
     * @param {WorldInfoSearchUpdateArgs} args - Arguments to update one WorldInfoSearch.
     * @example
     * // Update one WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldInfoSearchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchUpdateArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorldInfoSearches.
     * @param {WorldInfoSearchDeleteManyArgs} args - Arguments to filter WorldInfoSearches to delete.
     * @example
     * // Delete a few WorldInfoSearches
     * const { count } = await prisma.worldInfoSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldInfoSearchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfoSearchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldInfoSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldInfoSearches
     * const worldInfoSearch = await prisma.worldInfoSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldInfoSearchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldInfoSearch.
     * @param {WorldInfoSearchUpsertArgs} args - Arguments to update or create a WorldInfoSearch.
     * @example
     * // Update or create a WorldInfoSearch
     * const worldInfoSearch = await prisma.worldInfoSearch.upsert({
     *   create: {
     *     // ... data to create a WorldInfoSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldInfoSearch we want to update
     *   }
     * })
    **/
    upsert<T extends WorldInfoSearchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfoSearchUpsertArgs<ExtArgs>>
    ): Prisma__WorldInfoSearchClient<$Result.GetResult<Prisma.$WorldInfoSearchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorldInfoSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchCountArgs} args - Arguments to filter WorldInfoSearches to count.
     * @example
     * // Count the number of WorldInfoSearches
     * const count = await prisma.worldInfoSearch.count({
     *   where: {
     *     // ... the filter for the WorldInfoSearches we want to count
     *   }
     * })
    **/
    count<T extends WorldInfoSearchCountArgs>(
      args?: Subset<T, WorldInfoSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldInfoSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldInfoSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorldInfoSearchAggregateArgs>(args: Subset<T, WorldInfoSearchAggregateArgs>): Prisma.PrismaPromise<GetWorldInfoSearchAggregateType<T>>

    /**
     * Group by WorldInfoSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfoSearchGroupByArgs} args - Group by arguments.
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
      T extends WorldInfoSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldInfoSearchGroupByArgs['orderBy'] }
        : { orderBy?: WorldInfoSearchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorldInfoSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldInfoSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldInfoSearch model
   */
  readonly fields: WorldInfoSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldInfoSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldInfoSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorldInfoSearch model
   */ 
  interface WorldInfoSearchFieldRefs {
    readonly id: FieldRef<"WorldInfoSearch", 'Int'>
    readonly text: FieldRef<"WorldInfoSearch", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WorldInfoSearch findUnique
   */
  export type WorldInfoSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter, which WorldInfoSearch to fetch.
     */
    where: WorldInfoSearchWhereUniqueInput
  }


  /**
   * WorldInfoSearch findUniqueOrThrow
   */
  export type WorldInfoSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter, which WorldInfoSearch to fetch.
     */
    where: WorldInfoSearchWhereUniqueInput
  }


  /**
   * WorldInfoSearch findFirst
   */
  export type WorldInfoSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter, which WorldInfoSearch to fetch.
     */
    where?: WorldInfoSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfoSearches to fetch.
     */
    orderBy?: WorldInfoSearchOrderByWithRelationInput | WorldInfoSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfoSearches.
     */
    cursor?: WorldInfoSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfoSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfoSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfoSearches.
     */
    distinct?: WorldInfoSearchScalarFieldEnum | WorldInfoSearchScalarFieldEnum[]
  }


  /**
   * WorldInfoSearch findFirstOrThrow
   */
  export type WorldInfoSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter, which WorldInfoSearch to fetch.
     */
    where?: WorldInfoSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfoSearches to fetch.
     */
    orderBy?: WorldInfoSearchOrderByWithRelationInput | WorldInfoSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfoSearches.
     */
    cursor?: WorldInfoSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfoSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfoSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfoSearches.
     */
    distinct?: WorldInfoSearchScalarFieldEnum | WorldInfoSearchScalarFieldEnum[]
  }


  /**
   * WorldInfoSearch findMany
   */
  export type WorldInfoSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter, which WorldInfoSearches to fetch.
     */
    where?: WorldInfoSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfoSearches to fetch.
     */
    orderBy?: WorldInfoSearchOrderByWithRelationInput | WorldInfoSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldInfoSearches.
     */
    cursor?: WorldInfoSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfoSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfoSearches.
     */
    skip?: number
    distinct?: WorldInfoSearchScalarFieldEnum | WorldInfoSearchScalarFieldEnum[]
  }


  /**
   * WorldInfoSearch create
   */
  export type WorldInfoSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * The data needed to create a WorldInfoSearch.
     */
    data: XOR<WorldInfoSearchCreateInput, WorldInfoSearchUncheckedCreateInput>
  }


  /**
   * WorldInfoSearch update
   */
  export type WorldInfoSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * The data needed to update a WorldInfoSearch.
     */
    data: XOR<WorldInfoSearchUpdateInput, WorldInfoSearchUncheckedUpdateInput>
    /**
     * Choose, which WorldInfoSearch to update.
     */
    where: WorldInfoSearchWhereUniqueInput
  }


  /**
   * WorldInfoSearch updateMany
   */
  export type WorldInfoSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldInfoSearches.
     */
    data: XOR<WorldInfoSearchUpdateManyMutationInput, WorldInfoSearchUncheckedUpdateManyInput>
    /**
     * Filter which WorldInfoSearches to update
     */
    where?: WorldInfoSearchWhereInput
  }


  /**
   * WorldInfoSearch upsert
   */
  export type WorldInfoSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * The filter to search for the WorldInfoSearch to update in case it exists.
     */
    where: WorldInfoSearchWhereUniqueInput
    /**
     * In case the WorldInfoSearch found by the `where` argument doesn't exist, create a new WorldInfoSearch with this data.
     */
    create: XOR<WorldInfoSearchCreateInput, WorldInfoSearchUncheckedCreateInput>
    /**
     * In case the WorldInfoSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldInfoSearchUpdateInput, WorldInfoSearchUncheckedUpdateInput>
  }


  /**
   * WorldInfoSearch delete
   */
  export type WorldInfoSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
    /**
     * Filter which WorldInfoSearch to delete.
     */
    where: WorldInfoSearchWhereUniqueInput
  }


  /**
   * WorldInfoSearch deleteMany
   */
  export type WorldInfoSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfoSearches to delete
     */
    where?: WorldInfoSearchWhereInput
  }


  /**
   * WorldInfoSearch without action
   */
  export type WorldInfoSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfoSearch
     */
    select?: WorldInfoSearchSelect<ExtArgs> | null
  }



  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    dateCreated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    dateCreated: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    dateCreated: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    dateCreated?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    dateCreated?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    dateCreated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    dateCreated: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    dateCreated?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    dateCreated?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      dateCreated: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly dateCreated: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tagPrompts?: boolean | Tags$tagPromptsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tagPrompts?: boolean | Tags$tagPromptsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      tagPrompts: Prisma.$TagsPromptsMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends TagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsCreateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends TagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends TagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
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
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tagPrompts<T extends Tags$tagPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Tags$tagPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tags model
   */ 
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'String'>
    readonly name: FieldRef<"Tags", 'String'>
    readonly description: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }


  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
  }


  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }


  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
  }


  /**
   * Tags.tagPrompts
   */
  export type Tags$tagPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    where?: TagsPromptsMapWhereInput
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    cursor?: TagsPromptsMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsPromptsMapScalarFieldEnum | TagsPromptsMapScalarFieldEnum[]
  }


  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
  }



  /**
   * Model TagsPromptsMap
   */

  export type AggregateTagsPromptsMap = {
    _count: TagsPromptsMapCountAggregateOutputType | null
    _min: TagsPromptsMapMinAggregateOutputType | null
    _max: TagsPromptsMapMaxAggregateOutputType | null
  }

  export type TagsPromptsMapMinAggregateOutputType = {
    tagId: string | null
    promptID: string | null
  }

  export type TagsPromptsMapMaxAggregateOutputType = {
    tagId: string | null
    promptID: string | null
  }

  export type TagsPromptsMapCountAggregateOutputType = {
    tagId: number
    promptID: number
    _all: number
  }


  export type TagsPromptsMapMinAggregateInputType = {
    tagId?: true
    promptID?: true
  }

  export type TagsPromptsMapMaxAggregateInputType = {
    tagId?: true
    promptID?: true
  }

  export type TagsPromptsMapCountAggregateInputType = {
    tagId?: true
    promptID?: true
    _all?: true
  }

  export type TagsPromptsMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsPromptsMap to aggregate.
     */
    where?: TagsPromptsMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsPromptsMaps to fetch.
     */
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsPromptsMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsPromptsMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsPromptsMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsPromptsMaps
    **/
    _count?: true | TagsPromptsMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsPromptsMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsPromptsMapMaxAggregateInputType
  }

  export type GetTagsPromptsMapAggregateType<T extends TagsPromptsMapAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsPromptsMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsPromptsMap[P]>
      : GetScalarType<T[P], AggregateTagsPromptsMap[P]>
  }




  export type TagsPromptsMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsPromptsMapWhereInput
    orderBy?: TagsPromptsMapOrderByWithAggregationInput | TagsPromptsMapOrderByWithAggregationInput[]
    by: TagsPromptsMapScalarFieldEnum[] | TagsPromptsMapScalarFieldEnum
    having?: TagsPromptsMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsPromptsMapCountAggregateInputType | true
    _min?: TagsPromptsMapMinAggregateInputType
    _max?: TagsPromptsMapMaxAggregateInputType
  }

  export type TagsPromptsMapGroupByOutputType = {
    tagId: string
    promptID: string
    _count: TagsPromptsMapCountAggregateOutputType | null
    _min: TagsPromptsMapMinAggregateOutputType | null
    _max: TagsPromptsMapMaxAggregateOutputType | null
  }

  type GetTagsPromptsMapGroupByPayload<T extends TagsPromptsMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsPromptsMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsPromptsMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsPromptsMapGroupByOutputType[P]>
            : GetScalarType<T[P], TagsPromptsMapGroupByOutputType[P]>
        }
      >
    >


  export type TagsPromptsMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagId?: boolean
    promptID?: boolean
    tag?: boolean | TagsDefaultArgs<ExtArgs>
    prompt?: boolean | PromptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsPromptsMap"]>

  export type TagsPromptsMapSelectScalar = {
    tagId?: boolean
    promptID?: boolean
  }

  export type TagsPromptsMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagsDefaultArgs<ExtArgs>
    prompt?: boolean | PromptsDefaultArgs<ExtArgs>
  }


  export type $TagsPromptsMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsPromptsMap"
    objects: {
      tag: Prisma.$TagsPayload<ExtArgs>
      prompt: Prisma.$PromptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tagId: string
      promptID: string
    }, ExtArgs["result"]["tagsPromptsMap"]>
    composites: {}
  }


  type TagsPromptsMapGetPayload<S extends boolean | null | undefined | TagsPromptsMapDefaultArgs> = $Result.GetResult<Prisma.$TagsPromptsMapPayload, S>

  type TagsPromptsMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsPromptsMapFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TagsPromptsMapCountAggregateInputType | true
    }

  export interface TagsPromptsMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsPromptsMap'], meta: { name: 'TagsPromptsMap' } }
    /**
     * Find zero or one TagsPromptsMap that matches the filter.
     * @param {TagsPromptsMapFindUniqueArgs} args - Arguments to find a TagsPromptsMap
     * @example
     * // Get one TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsPromptsMapFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TagsPromptsMap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsPromptsMapFindUniqueOrThrowArgs} args - Arguments to find a TagsPromptsMap
     * @example
     * // Get one TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsPromptsMapFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsPromptsMapFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TagsPromptsMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapFindFirstArgs} args - Arguments to find a TagsPromptsMap
     * @example
     * // Get one TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsPromptsMapFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsPromptsMapFindFirstArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TagsPromptsMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapFindFirstOrThrowArgs} args - Arguments to find a TagsPromptsMap
     * @example
     * // Get one TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsPromptsMapFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsPromptsMapFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TagsPromptsMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsPromptsMaps
     * const tagsPromptsMaps = await prisma.tagsPromptsMap.findMany()
     * 
     * // Get first 10 TagsPromptsMaps
     * const tagsPromptsMaps = await prisma.tagsPromptsMap.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const tagsPromptsMapWithTagIdOnly = await prisma.tagsPromptsMap.findMany({ select: { tagId: true } })
     * 
    **/
    findMany<T extends TagsPromptsMapFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsPromptsMapFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TagsPromptsMap.
     * @param {TagsPromptsMapCreateArgs} args - Arguments to create a TagsPromptsMap.
     * @example
     * // Create one TagsPromptsMap
     * const TagsPromptsMap = await prisma.tagsPromptsMap.create({
     *   data: {
     *     // ... data to create a TagsPromptsMap
     *   }
     * })
     * 
    **/
    create<T extends TagsPromptsMapCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapCreateArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a TagsPromptsMap.
     * @param {TagsPromptsMapDeleteArgs} args - Arguments to delete one TagsPromptsMap.
     * @example
     * // Delete one TagsPromptsMap
     * const TagsPromptsMap = await prisma.tagsPromptsMap.delete({
     *   where: {
     *     // ... filter to delete one TagsPromptsMap
     *   }
     * })
     * 
    **/
    delete<T extends TagsPromptsMapDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapDeleteArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TagsPromptsMap.
     * @param {TagsPromptsMapUpdateArgs} args - Arguments to update one TagsPromptsMap.
     * @example
     * // Update one TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsPromptsMapUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapUpdateArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TagsPromptsMaps.
     * @param {TagsPromptsMapDeleteManyArgs} args - Arguments to filter TagsPromptsMaps to delete.
     * @example
     * // Delete a few TagsPromptsMaps
     * const { count } = await prisma.tagsPromptsMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsPromptsMapDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsPromptsMapDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsPromptsMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsPromptsMaps
     * const tagsPromptsMap = await prisma.tagsPromptsMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsPromptsMapUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsPromptsMap.
     * @param {TagsPromptsMapUpsertArgs} args - Arguments to update or create a TagsPromptsMap.
     * @example
     * // Update or create a TagsPromptsMap
     * const tagsPromptsMap = await prisma.tagsPromptsMap.upsert({
     *   create: {
     *     // ... data to create a TagsPromptsMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsPromptsMap we want to update
     *   }
     * })
    **/
    upsert<T extends TagsPromptsMapUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsPromptsMapUpsertArgs<ExtArgs>>
    ): Prisma__TagsPromptsMapClient<$Result.GetResult<Prisma.$TagsPromptsMapPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TagsPromptsMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapCountArgs} args - Arguments to filter TagsPromptsMaps to count.
     * @example
     * // Count the number of TagsPromptsMaps
     * const count = await prisma.tagsPromptsMap.count({
     *   where: {
     *     // ... the filter for the TagsPromptsMaps we want to count
     *   }
     * })
    **/
    count<T extends TagsPromptsMapCountArgs>(
      args?: Subset<T, TagsPromptsMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsPromptsMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsPromptsMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsPromptsMapAggregateArgs>(args: Subset<T, TagsPromptsMapAggregateArgs>): Prisma.PrismaPromise<GetTagsPromptsMapAggregateType<T>>

    /**
     * Group by TagsPromptsMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsPromptsMapGroupByArgs} args - Group by arguments.
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
      T extends TagsPromptsMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsPromptsMapGroupByArgs['orderBy'] }
        : { orderBy?: TagsPromptsMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagsPromptsMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsPromptsMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsPromptsMap model
   */
  readonly fields: TagsPromptsMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsPromptsMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsPromptsMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tag<T extends TagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagsDefaultArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    prompt<T extends PromptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptsDefaultArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TagsPromptsMap model
   */ 
  interface TagsPromptsMapFieldRefs {
    readonly tagId: FieldRef<"TagsPromptsMap", 'String'>
    readonly promptID: FieldRef<"TagsPromptsMap", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TagsPromptsMap findUnique
   */
  export type TagsPromptsMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter, which TagsPromptsMap to fetch.
     */
    where: TagsPromptsMapWhereUniqueInput
  }


  /**
   * TagsPromptsMap findUniqueOrThrow
   */
  export type TagsPromptsMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter, which TagsPromptsMap to fetch.
     */
    where: TagsPromptsMapWhereUniqueInput
  }


  /**
   * TagsPromptsMap findFirst
   */
  export type TagsPromptsMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter, which TagsPromptsMap to fetch.
     */
    where?: TagsPromptsMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsPromptsMaps to fetch.
     */
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsPromptsMaps.
     */
    cursor?: TagsPromptsMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsPromptsMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsPromptsMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsPromptsMaps.
     */
    distinct?: TagsPromptsMapScalarFieldEnum | TagsPromptsMapScalarFieldEnum[]
  }


  /**
   * TagsPromptsMap findFirstOrThrow
   */
  export type TagsPromptsMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter, which TagsPromptsMap to fetch.
     */
    where?: TagsPromptsMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsPromptsMaps to fetch.
     */
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsPromptsMaps.
     */
    cursor?: TagsPromptsMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsPromptsMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsPromptsMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsPromptsMaps.
     */
    distinct?: TagsPromptsMapScalarFieldEnum | TagsPromptsMapScalarFieldEnum[]
  }


  /**
   * TagsPromptsMap findMany
   */
  export type TagsPromptsMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter, which TagsPromptsMaps to fetch.
     */
    where?: TagsPromptsMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsPromptsMaps to fetch.
     */
    orderBy?: TagsPromptsMapOrderByWithRelationInput | TagsPromptsMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsPromptsMaps.
     */
    cursor?: TagsPromptsMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsPromptsMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsPromptsMaps.
     */
    skip?: number
    distinct?: TagsPromptsMapScalarFieldEnum | TagsPromptsMapScalarFieldEnum[]
  }


  /**
   * TagsPromptsMap create
   */
  export type TagsPromptsMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsPromptsMap.
     */
    data: XOR<TagsPromptsMapCreateInput, TagsPromptsMapUncheckedCreateInput>
  }


  /**
   * TagsPromptsMap update
   */
  export type TagsPromptsMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsPromptsMap.
     */
    data: XOR<TagsPromptsMapUpdateInput, TagsPromptsMapUncheckedUpdateInput>
    /**
     * Choose, which TagsPromptsMap to update.
     */
    where: TagsPromptsMapWhereUniqueInput
  }


  /**
   * TagsPromptsMap updateMany
   */
  export type TagsPromptsMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsPromptsMaps.
     */
    data: XOR<TagsPromptsMapUpdateManyMutationInput, TagsPromptsMapUncheckedUpdateManyInput>
    /**
     * Filter which TagsPromptsMaps to update
     */
    where?: TagsPromptsMapWhereInput
  }


  /**
   * TagsPromptsMap upsert
   */
  export type TagsPromptsMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsPromptsMap to update in case it exists.
     */
    where: TagsPromptsMapWhereUniqueInput
    /**
     * In case the TagsPromptsMap found by the `where` argument doesn't exist, create a new TagsPromptsMap with this data.
     */
    create: XOR<TagsPromptsMapCreateInput, TagsPromptsMapUncheckedCreateInput>
    /**
     * In case the TagsPromptsMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsPromptsMapUpdateInput, TagsPromptsMapUncheckedUpdateInput>
  }


  /**
   * TagsPromptsMap delete
   */
  export type TagsPromptsMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
    /**
     * Filter which TagsPromptsMap to delete.
     */
    where: TagsPromptsMapWhereUniqueInput
  }


  /**
   * TagsPromptsMap deleteMany
   */
  export type TagsPromptsMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsPromptsMaps to delete
     */
    where?: TagsPromptsMapWhereInput
  }


  /**
   * TagsPromptsMap without action
   */
  export type TagsPromptsMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsPromptsMap
     */
    select?: TagsPromptsMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsPromptsMapInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PromptsScalarFieldEnum: {
    id: 'id',
    aetherId: 'aetherId',
    authorsNote: 'authorsNote',
    description: 'description',
    memory: 'memory',
    nsfw: 'nsfw',
    parentId: 'parentId',
    promptContent: 'promptContent',
    publishDate: 'publishDate',
    quests: 'quests',
    tags: 'tags',
    title: 'title',
    scriptZip: 'scriptZip',
    novelAiScenario: 'novelAiScenario',
    holoAiScenario: 'holoAiScenario',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited',
    deleted: 'deleted'
  };

  export type PromptsScalarFieldEnum = (typeof PromptsScalarFieldEnum)[keyof typeof PromptsScalarFieldEnum]


  export const WorldInfosScalarFieldEnum: {
    id: 'id',
    aetherId: 'aetherId',
    entry: 'entry',
    keys: 'keys',
    promptId: 'promptId',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type WorldInfosScalarFieldEnum = (typeof WorldInfosScalarFieldEnum)[keyof typeof WorldInfosScalarFieldEnum]


  export const AetherPromptsScalarFieldEnum: {
    id: 'id',
    authorsNote: 'authorsNote',
    description: 'description',
    memory: 'memory',
    nsfw: 'nsfw',
    parentId: 'parentId',
    promptContent: 'promptContent',
    publishDate: 'publishDate',
    quests: 'quests',
    tags: 'tags',
    title: 'title',
    scriptZip: 'scriptZip',
    novelAiScenario: 'novelAiScenario',
    holoAiScenario: 'holoAiScenario',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type AetherPromptsScalarFieldEnum = (typeof AetherPromptsScalarFieldEnum)[keyof typeof AetherPromptsScalarFieldEnum]


  export const AetherWorldInfosScalarFieldEnum: {
    id: 'id',
    entry: 'entry',
    keys: 'keys',
    promptId: 'promptId',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type AetherWorldInfosScalarFieldEnum = (typeof AetherWorldInfosScalarFieldEnum)[keyof typeof AetherWorldInfosScalarFieldEnum]


  export const PromptSearchScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type PromptSearchScalarFieldEnum = (typeof PromptSearchScalarFieldEnum)[keyof typeof PromptSearchScalarFieldEnum]


  export const WorldInfoSearchScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type WorldInfoSearchScalarFieldEnum = (typeof WorldInfoSearchScalarFieldEnum)[keyof typeof WorldInfoSearchScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    dateCreated: 'dateCreated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const TagsPromptsMapScalarFieldEnum: {
    tagId: 'tagId',
    promptID: 'promptID'
  };

  export type TagsPromptsMapScalarFieldEnum = (typeof TagsPromptsMapScalarFieldEnum)[keyof typeof TagsPromptsMapScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PromptsWhereInput = {
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    id?: StringFilter<"Prompts"> | string
    aetherId?: IntNullableFilter<"Prompts"> | number | null
    authorsNote?: StringNullableFilter<"Prompts"> | string | null
    description?: StringNullableFilter<"Prompts"> | string | null
    memory?: StringNullableFilter<"Prompts"> | string | null
    nsfw?: IntFilter<"Prompts"> | number
    parentId?: StringNullableFilter<"Prompts"> | string | null
    promptContent?: StringFilter<"Prompts"> | string
    publishDate?: StringNullableFilter<"Prompts"> | string | null
    quests?: StringNullableFilter<"Prompts"> | string | null
    tags?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    scriptZip?: BytesNullableFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableFilter<"Prompts"> | string | null
    correlationId?: StringFilter<"Prompts"> | string
    dateCreated?: StringFilter<"Prompts"> | string
    dateEdited?: StringNullableFilter<"Prompts"> | string | null
    deleted?: BoolFilter<"Prompts"> | boolean
    tagsFull?: TagsPromptsMapListRelationFilter
    worldInfos?: WorldInfosListRelationFilter
  }

  export type PromptsOrderByWithRelationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    deleted?: SortOrder
    tagsFull?: TagsPromptsMapOrderByRelationAggregateInput
    worldInfos?: WorldInfosOrderByRelationAggregateInput
  }

  export type PromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    aetherId?: IntNullableFilter<"Prompts"> | number | null
    authorsNote?: StringNullableFilter<"Prompts"> | string | null
    description?: StringNullableFilter<"Prompts"> | string | null
    memory?: StringNullableFilter<"Prompts"> | string | null
    nsfw?: IntFilter<"Prompts"> | number
    parentId?: StringNullableFilter<"Prompts"> | string | null
    promptContent?: StringFilter<"Prompts"> | string
    publishDate?: StringNullableFilter<"Prompts"> | string | null
    quests?: StringNullableFilter<"Prompts"> | string | null
    tags?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    scriptZip?: BytesNullableFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableFilter<"Prompts"> | string | null
    correlationId?: StringFilter<"Prompts"> | string
    dateCreated?: StringFilter<"Prompts"> | string
    dateEdited?: StringNullableFilter<"Prompts"> | string | null
    deleted?: BoolFilter<"Prompts"> | boolean
    tagsFull?: TagsPromptsMapListRelationFilter
    worldInfos?: WorldInfosListRelationFilter
  }, "id">

  export type PromptsOrderByWithAggregationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: PromptsCountOrderByAggregateInput
    _avg?: PromptsAvgOrderByAggregateInput
    _max?: PromptsMaxOrderByAggregateInput
    _min?: PromptsMinOrderByAggregateInput
    _sum?: PromptsSumOrderByAggregateInput
  }

  export type PromptsScalarWhereWithAggregatesInput = {
    AND?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    OR?: PromptsScalarWhereWithAggregatesInput[]
    NOT?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompts"> | string
    aetherId?: IntNullableWithAggregatesFilter<"Prompts"> | number | null
    authorsNote?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    description?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    memory?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    nsfw?: IntWithAggregatesFilter<"Prompts"> | number
    parentId?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    promptContent?: StringWithAggregatesFilter<"Prompts"> | string
    publishDate?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    quests?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    tags?: StringWithAggregatesFilter<"Prompts"> | string
    title?: StringWithAggregatesFilter<"Prompts"> | string
    scriptZip?: BytesNullableWithAggregatesFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    correlationId?: StringWithAggregatesFilter<"Prompts"> | string
    dateCreated?: StringWithAggregatesFilter<"Prompts"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    deleted?: BoolWithAggregatesFilter<"Prompts"> | boolean
  }

  export type WorldInfosWhereInput = {
    AND?: WorldInfosWhereInput | WorldInfosWhereInput[]
    OR?: WorldInfosWhereInput[]
    NOT?: WorldInfosWhereInput | WorldInfosWhereInput[]
    id?: StringFilter<"WorldInfos"> | string
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
    prompts?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }

  export type WorldInfosOrderByWithRelationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    prompts?: PromptsOrderByWithRelationInput
  }

  export type WorldInfosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldInfosWhereInput | WorldInfosWhereInput[]
    OR?: WorldInfosWhereInput[]
    NOT?: WorldInfosWhereInput | WorldInfosWhereInput[]
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
    prompts?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }, "id">

  export type WorldInfosOrderByWithAggregationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: WorldInfosCountOrderByAggregateInput
    _avg?: WorldInfosAvgOrderByAggregateInput
    _max?: WorldInfosMaxOrderByAggregateInput
    _min?: WorldInfosMinOrderByAggregateInput
    _sum?: WorldInfosSumOrderByAggregateInput
  }

  export type WorldInfosScalarWhereWithAggregatesInput = {
    AND?: WorldInfosScalarWhereWithAggregatesInput | WorldInfosScalarWhereWithAggregatesInput[]
    OR?: WorldInfosScalarWhereWithAggregatesInput[]
    NOT?: WorldInfosScalarWhereWithAggregatesInput | WorldInfosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldInfos"> | string
    aetherId?: IntNullableWithAggregatesFilter<"WorldInfos"> | number | null
    entry?: StringWithAggregatesFilter<"WorldInfos"> | string
    keys?: StringWithAggregatesFilter<"WorldInfos"> | string
    promptId?: StringWithAggregatesFilter<"WorldInfos"> | string
    correlationId?: StringWithAggregatesFilter<"WorldInfos"> | string
    dateCreated?: StringWithAggregatesFilter<"WorldInfos"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"WorldInfos"> | string | null
  }

  export type AetherPromptsWhereInput = {
    AND?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    OR?: AetherPromptsWhereInput[]
    NOT?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    id?: IntFilter<"AetherPrompts"> | number
    authorsNote?: StringNullableFilter<"AetherPrompts"> | string | null
    description?: StringNullableFilter<"AetherPrompts"> | string | null
    memory?: StringNullableFilter<"AetherPrompts"> | string | null
    nsfw?: IntFilter<"AetherPrompts"> | number
    parentId?: StringNullableFilter<"AetherPrompts"> | string | null
    promptContent?: StringFilter<"AetherPrompts"> | string
    publishDate?: StringNullableFilter<"AetherPrompts"> | string | null
    quests?: StringNullableFilter<"AetherPrompts"> | string | null
    tags?: StringFilter<"AetherPrompts"> | string
    title?: StringFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    correlationId?: StringFilter<"AetherPrompts"> | string
    dateCreated?: StringFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableFilter<"AetherPrompts"> | string | null
    worldInfos?: AetherWorldInfosListRelationFilter
  }

  export type AetherPromptsOrderByWithRelationInput = {
    id?: SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    worldInfos?: AetherWorldInfosOrderByRelationAggregateInput
  }

  export type AetherPromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    OR?: AetherPromptsWhereInput[]
    NOT?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    authorsNote?: StringNullableFilter<"AetherPrompts"> | string | null
    description?: StringNullableFilter<"AetherPrompts"> | string | null
    memory?: StringNullableFilter<"AetherPrompts"> | string | null
    nsfw?: IntFilter<"AetherPrompts"> | number
    parentId?: StringNullableFilter<"AetherPrompts"> | string | null
    promptContent?: StringFilter<"AetherPrompts"> | string
    publishDate?: StringNullableFilter<"AetherPrompts"> | string | null
    quests?: StringNullableFilter<"AetherPrompts"> | string | null
    tags?: StringFilter<"AetherPrompts"> | string
    title?: StringFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    correlationId?: StringFilter<"AetherPrompts"> | string
    dateCreated?: StringFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableFilter<"AetherPrompts"> | string | null
    worldInfos?: AetherWorldInfosListRelationFilter
  }, "id">

  export type AetherPromptsOrderByWithAggregationInput = {
    id?: SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: AetherPromptsCountOrderByAggregateInput
    _avg?: AetherPromptsAvgOrderByAggregateInput
    _max?: AetherPromptsMaxOrderByAggregateInput
    _min?: AetherPromptsMinOrderByAggregateInput
    _sum?: AetherPromptsSumOrderByAggregateInput
  }

  export type AetherPromptsScalarWhereWithAggregatesInput = {
    AND?: AetherPromptsScalarWhereWithAggregatesInput | AetherPromptsScalarWhereWithAggregatesInput[]
    OR?: AetherPromptsScalarWhereWithAggregatesInput[]
    NOT?: AetherPromptsScalarWhereWithAggregatesInput | AetherPromptsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AetherPrompts"> | number
    authorsNote?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    description?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    memory?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    nsfw?: IntWithAggregatesFilter<"AetherPrompts"> | number
    parentId?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    promptContent?: StringWithAggregatesFilter<"AetherPrompts"> | string
    publishDate?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    quests?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    tags?: StringWithAggregatesFilter<"AetherPrompts"> | string
    title?: StringWithAggregatesFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableWithAggregatesFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    correlationId?: StringWithAggregatesFilter<"AetherPrompts"> | string
    dateCreated?: StringWithAggregatesFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
  }

  export type AetherWorldInfosWhereInput = {
    AND?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    OR?: AetherWorldInfosWhereInput[]
    NOT?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    id?: IntFilter<"AetherWorldInfos"> | number
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
    prompts?: XOR<AetherPromptsRelationFilter, AetherPromptsWhereInput>
  }

  export type AetherWorldInfosOrderByWithRelationInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    prompts?: AetherPromptsOrderByWithRelationInput
  }

  export type AetherWorldInfosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    OR?: AetherWorldInfosWhereInput[]
    NOT?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
    prompts?: XOR<AetherPromptsRelationFilter, AetherPromptsWhereInput>
  }, "id">

  export type AetherWorldInfosOrderByWithAggregationInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: AetherWorldInfosCountOrderByAggregateInput
    _avg?: AetherWorldInfosAvgOrderByAggregateInput
    _max?: AetherWorldInfosMaxOrderByAggregateInput
    _min?: AetherWorldInfosMinOrderByAggregateInput
    _sum?: AetherWorldInfosSumOrderByAggregateInput
  }

  export type AetherWorldInfosScalarWhereWithAggregatesInput = {
    AND?: AetherWorldInfosScalarWhereWithAggregatesInput | AetherWorldInfosScalarWhereWithAggregatesInput[]
    OR?: AetherWorldInfosScalarWhereWithAggregatesInput[]
    NOT?: AetherWorldInfosScalarWhereWithAggregatesInput | AetherWorldInfosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AetherWorldInfos"> | number
    entry?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    keys?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    promptId?: IntWithAggregatesFilter<"AetherWorldInfos"> | number
    correlationId?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    dateCreated?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"AetherWorldInfos"> | string | null
  }

  export type PromptSearchWhereInput = {
    AND?: PromptSearchWhereInput | PromptSearchWhereInput[]
    OR?: PromptSearchWhereInput[]
    NOT?: PromptSearchWhereInput | PromptSearchWhereInput[]
    id?: IntFilter<"PromptSearch"> | number
    text?: StringFilter<"PromptSearch"> | string
  }

  export type PromptSearchOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type PromptSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PromptSearchWhereInput | PromptSearchWhereInput[]
    OR?: PromptSearchWhereInput[]
    NOT?: PromptSearchWhereInput | PromptSearchWhereInput[]
    text?: StringFilter<"PromptSearch"> | string
  }, "id">

  export type PromptSearchOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: PromptSearchCountOrderByAggregateInput
    _avg?: PromptSearchAvgOrderByAggregateInput
    _max?: PromptSearchMaxOrderByAggregateInput
    _min?: PromptSearchMinOrderByAggregateInput
    _sum?: PromptSearchSumOrderByAggregateInput
  }

  export type PromptSearchScalarWhereWithAggregatesInput = {
    AND?: PromptSearchScalarWhereWithAggregatesInput | PromptSearchScalarWhereWithAggregatesInput[]
    OR?: PromptSearchScalarWhereWithAggregatesInput[]
    NOT?: PromptSearchScalarWhereWithAggregatesInput | PromptSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromptSearch"> | number
    text?: StringWithAggregatesFilter<"PromptSearch"> | string
  }

  export type WorldInfoSearchWhereInput = {
    AND?: WorldInfoSearchWhereInput | WorldInfoSearchWhereInput[]
    OR?: WorldInfoSearchWhereInput[]
    NOT?: WorldInfoSearchWhereInput | WorldInfoSearchWhereInput[]
    id?: IntFilter<"WorldInfoSearch"> | number
    text?: StringFilter<"WorldInfoSearch"> | string
  }

  export type WorldInfoSearchOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WorldInfoSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorldInfoSearchWhereInput | WorldInfoSearchWhereInput[]
    OR?: WorldInfoSearchWhereInput[]
    NOT?: WorldInfoSearchWhereInput | WorldInfoSearchWhereInput[]
    text?: StringFilter<"WorldInfoSearch"> | string
  }, "id">

  export type WorldInfoSearchOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: WorldInfoSearchCountOrderByAggregateInput
    _avg?: WorldInfoSearchAvgOrderByAggregateInput
    _max?: WorldInfoSearchMaxOrderByAggregateInput
    _min?: WorldInfoSearchMinOrderByAggregateInput
    _sum?: WorldInfoSearchSumOrderByAggregateInput
  }

  export type WorldInfoSearchScalarWhereWithAggregatesInput = {
    AND?: WorldInfoSearchScalarWhereWithAggregatesInput | WorldInfoSearchScalarWhereWithAggregatesInput[]
    OR?: WorldInfoSearchScalarWhereWithAggregatesInput[]
    NOT?: WorldInfoSearchScalarWhereWithAggregatesInput | WorldInfoSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorldInfoSearch"> | number
    text?: StringWithAggregatesFilter<"WorldInfoSearch"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: StringFilter<"Tags"> | string
    name?: StringFilter<"Tags"> | string
    description?: StringNullableFilter<"Tags"> | string | null
    tagPrompts?: TagsPromptsMapListRelationFilter
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tagPrompts?: TagsPromptsMapOrderByRelationAggregateInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    description?: StringNullableFilter<"Tags"> | string | null
    tagPrompts?: TagsPromptsMapListRelationFilter
  }, "id" | "name">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TagsCountOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tags"> | string
    name?: StringWithAggregatesFilter<"Tags"> | string
    description?: StringNullableWithAggregatesFilter<"Tags"> | string | null
  }

  export type TagsPromptsMapWhereInput = {
    AND?: TagsPromptsMapWhereInput | TagsPromptsMapWhereInput[]
    OR?: TagsPromptsMapWhereInput[]
    NOT?: TagsPromptsMapWhereInput | TagsPromptsMapWhereInput[]
    tagId?: StringFilter<"TagsPromptsMap"> | string
    promptID?: StringFilter<"TagsPromptsMap"> | string
    tag?: XOR<TagsRelationFilter, TagsWhereInput>
    prompt?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }

  export type TagsPromptsMapOrderByWithRelationInput = {
    tagId?: SortOrder
    promptID?: SortOrder
    tag?: TagsOrderByWithRelationInput
    prompt?: PromptsOrderByWithRelationInput
  }

  export type TagsPromptsMapWhereUniqueInput = Prisma.AtLeast<{
    tagId_promptID?: TagsPromptsMapTagIdPromptIDCompoundUniqueInput
    AND?: TagsPromptsMapWhereInput | TagsPromptsMapWhereInput[]
    OR?: TagsPromptsMapWhereInput[]
    NOT?: TagsPromptsMapWhereInput | TagsPromptsMapWhereInput[]
    tagId?: StringFilter<"TagsPromptsMap"> | string
    promptID?: StringFilter<"TagsPromptsMap"> | string
    tag?: XOR<TagsRelationFilter, TagsWhereInput>
    prompt?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }, "tagId_promptID">

  export type TagsPromptsMapOrderByWithAggregationInput = {
    tagId?: SortOrder
    promptID?: SortOrder
    _count?: TagsPromptsMapCountOrderByAggregateInput
    _max?: TagsPromptsMapMaxOrderByAggregateInput
    _min?: TagsPromptsMapMinOrderByAggregateInput
  }

  export type TagsPromptsMapScalarWhereWithAggregatesInput = {
    AND?: TagsPromptsMapScalarWhereWithAggregatesInput | TagsPromptsMapScalarWhereWithAggregatesInput[]
    OR?: TagsPromptsMapScalarWhereWithAggregatesInput[]
    NOT?: TagsPromptsMapScalarWhereWithAggregatesInput | TagsPromptsMapScalarWhereWithAggregatesInput[]
    tagId?: StringWithAggregatesFilter<"TagsPromptsMap"> | string
    promptID?: StringWithAggregatesFilter<"TagsPromptsMap"> | string
  }

  export type PromptsCreateInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    tagsFull?: TagsPromptsMapCreateNestedManyWithoutPromptInput
    worldInfos?: WorldInfosCreateNestedManyWithoutPromptsInput
  }

  export type PromptsUncheckedCreateInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    tagsFull?: TagsPromptsMapUncheckedCreateNestedManyWithoutPromptInput
    worldInfos?: WorldInfosUncheckedCreateNestedManyWithoutPromptsInput
  }

  export type PromptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tagsFull?: TagsPromptsMapUpdateManyWithoutPromptNestedInput
    worldInfos?: WorldInfosUpdateManyWithoutPromptsNestedInput
  }

  export type PromptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tagsFull?: TagsPromptsMapUncheckedUpdateManyWithoutPromptNestedInput
    worldInfos?: WorldInfosUncheckedUpdateManyWithoutPromptsNestedInput
  }

  export type PromptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorldInfosCreateInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    prompts: PromptsCreateNestedOneWithoutWorldInfosInput
  }

  export type WorldInfosUncheckedCreateInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    promptId: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    prompts?: PromptsUpdateOneRequiredWithoutWorldInfosNestedInput
  }

  export type WorldInfosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsCreateInput = {
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: AetherWorldInfosCreateNestedManyWithoutPromptsInput
  }

  export type AetherPromptsUncheckedCreateInput = {
    id?: number
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: AetherWorldInfosUncheckedCreateNestedManyWithoutPromptsInput
  }

  export type AetherPromptsUpdateInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: AetherWorldInfosUpdateManyWithoutPromptsNestedInput
  }

  export type AetherPromptsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: AetherWorldInfosUncheckedUpdateManyWithoutPromptsNestedInput
  }

  export type AetherPromptsUpdateManyMutationInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosCreateInput = {
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    prompts: AetherPromptsCreateNestedOneWithoutWorldInfosInput
  }

  export type AetherWorldInfosUncheckedCreateInput = {
    id?: number
    entry: string
    keys: string
    promptId: number
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosUpdateInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    prompts?: AetherPromptsUpdateOneRequiredWithoutWorldInfosNestedInput
  }

  export type AetherWorldInfosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUpdateManyMutationInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptSearchCreateInput = {
    text: string
  }

  export type PromptSearchUncheckedCreateInput = {
    id?: number
    text: string
  }

  export type PromptSearchUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PromptSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PromptSearchUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PromptSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WorldInfoSearchCreateInput = {
    text: string
  }

  export type WorldInfoSearchUncheckedCreateInput = {
    id?: number
    text: string
  }

  export type WorldInfoSearchUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WorldInfoSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WorldInfoSearchUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type WorldInfoSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsCreateInput = {
    id?: string
    name: string
    description?: string | null
    tagPrompts?: TagsPromptsMapCreateNestedManyWithoutTagInput
  }

  export type TagsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    tagPrompts?: TagsPromptsMapUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagPrompts?: TagsPromptsMapUpdateManyWithoutTagNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagPrompts?: TagsPromptsMapUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagsPromptsMapCreateInput = {
    tag: TagsCreateNestedOneWithoutTagPromptsInput
    prompt: PromptsCreateNestedOneWithoutTagsFullInput
  }

  export type TagsPromptsMapUncheckedCreateInput = {
    tagId: string
    promptID: string
  }

  export type TagsPromptsMapUpdateInput = {
    tag?: TagsUpdateOneRequiredWithoutTagPromptsNestedInput
    prompt?: PromptsUpdateOneRequiredWithoutTagsFullNestedInput
  }

  export type TagsPromptsMapUncheckedUpdateInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    promptID?: StringFieldUpdateOperationsInput | string
  }

  export type TagsPromptsMapUpdateManyMutationInput = {

  }

  export type TagsPromptsMapUncheckedUpdateManyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    promptID?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TagsPromptsMapListRelationFilter = {
    every?: TagsPromptsMapWhereInput
    some?: TagsPromptsMapWhereInput
    none?: TagsPromptsMapWhereInput
  }

  export type WorldInfosListRelationFilter = {
    every?: WorldInfosWhereInput
    some?: WorldInfosWhereInput
    none?: WorldInfosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagsPromptsMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldInfosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptsCountOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
    deleted?: SortOrder
  }

  export type PromptsAvgOrderByAggregateInput = {
    aetherId?: SortOrder
    nsfw?: SortOrder
  }

  export type PromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
    deleted?: SortOrder
  }

  export type PromptsMinOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
    deleted?: SortOrder
  }

  export type PromptsSumOrderByAggregateInput = {
    aetherId?: SortOrder
    nsfw?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PromptsRelationFilter = {
    is?: PromptsWhereInput
    isNot?: PromptsWhereInput
  }

  export type WorldInfosCountOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosAvgOrderByAggregateInput = {
    aetherId?: SortOrder
  }

  export type WorldInfosMaxOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosMinOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosSumOrderByAggregateInput = {
    aetherId?: SortOrder
  }

  export type AetherWorldInfosListRelationFilter = {
    every?: AetherWorldInfosWhereInput
    some?: AetherWorldInfosWhereInput
    none?: AetherWorldInfosWhereInput
  }

  export type AetherWorldInfosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AetherPromptsCountOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsAvgOrderByAggregateInput = {
    id?: SortOrder
    nsfw?: SortOrder
  }

  export type AetherPromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsMinOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsSumOrderByAggregateInput = {
    id?: SortOrder
    nsfw?: SortOrder
  }

  export type AetherPromptsRelationFilter = {
    is?: AetherPromptsWhereInput
    isNot?: AetherPromptsWhereInput
  }

  export type AetherWorldInfosCountOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosAvgOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
  }

  export type AetherWorldInfosMaxOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosMinOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosSumOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
  }

  export type PromptSearchCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type PromptSearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromptSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type PromptSearchMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type PromptSearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorldInfoSearchCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WorldInfoSearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorldInfoSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WorldInfoSearchMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type WorldInfoSearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    dateCreated?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    dateCreated?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    dateCreated?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TagsRelationFilter = {
    is?: TagsWhereInput
    isNot?: TagsWhereInput
  }

  export type TagsPromptsMapTagIdPromptIDCompoundUniqueInput = {
    tagId: string
    promptID: string
  }

  export type TagsPromptsMapCountOrderByAggregateInput = {
    tagId?: SortOrder
    promptID?: SortOrder
  }

  export type TagsPromptsMapMaxOrderByAggregateInput = {
    tagId?: SortOrder
    promptID?: SortOrder
  }

  export type TagsPromptsMapMinOrderByAggregateInput = {
    tagId?: SortOrder
    promptID?: SortOrder
  }

  export type TagsPromptsMapCreateNestedManyWithoutPromptInput = {
    create?: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput> | TagsPromptsMapCreateWithoutPromptInput[] | TagsPromptsMapUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutPromptInput | TagsPromptsMapCreateOrConnectWithoutPromptInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
  }

  export type WorldInfosCreateNestedManyWithoutPromptsInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
  }

  export type TagsPromptsMapUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput> | TagsPromptsMapCreateWithoutPromptInput[] | TagsPromptsMapUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutPromptInput | TagsPromptsMapCreateOrConnectWithoutPromptInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
  }

  export type WorldInfosUncheckedCreateNestedManyWithoutPromptsInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TagsPromptsMapUpdateManyWithoutPromptNestedInput = {
    create?: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput> | TagsPromptsMapCreateWithoutPromptInput[] | TagsPromptsMapUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutPromptInput | TagsPromptsMapCreateOrConnectWithoutPromptInput[]
    upsert?: TagsPromptsMapUpsertWithWhereUniqueWithoutPromptInput | TagsPromptsMapUpsertWithWhereUniqueWithoutPromptInput[]
    set?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    disconnect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    delete?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    update?: TagsPromptsMapUpdateWithWhereUniqueWithoutPromptInput | TagsPromptsMapUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: TagsPromptsMapUpdateManyWithWhereWithoutPromptInput | TagsPromptsMapUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
  }

  export type WorldInfosUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: WorldInfosUpsertWithWhereUniqueWithoutPromptsInput | WorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    disconnect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    delete?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    update?: WorldInfosUpdateWithWhereUniqueWithoutPromptsInput | WorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: WorldInfosUpdateManyWithWhereWithoutPromptsInput | WorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
  }

  export type TagsPromptsMapUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput> | TagsPromptsMapCreateWithoutPromptInput[] | TagsPromptsMapUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutPromptInput | TagsPromptsMapCreateOrConnectWithoutPromptInput[]
    upsert?: TagsPromptsMapUpsertWithWhereUniqueWithoutPromptInput | TagsPromptsMapUpsertWithWhereUniqueWithoutPromptInput[]
    set?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    disconnect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    delete?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    update?: TagsPromptsMapUpdateWithWhereUniqueWithoutPromptInput | TagsPromptsMapUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: TagsPromptsMapUpdateManyWithWhereWithoutPromptInput | TagsPromptsMapUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
  }

  export type WorldInfosUncheckedUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: WorldInfosUpsertWithWhereUniqueWithoutPromptsInput | WorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    disconnect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    delete?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    update?: WorldInfosUpdateWithWhereUniqueWithoutPromptsInput | WorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: WorldInfosUpdateManyWithWhereWithoutPromptsInput | WorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
  }

  export type PromptsCreateNestedOneWithoutWorldInfosInput = {
    create?: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutWorldInfosInput
    connect?: PromptsWhereUniqueInput
  }

  export type PromptsUpdateOneRequiredWithoutWorldInfosNestedInput = {
    create?: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutWorldInfosInput
    upsert?: PromptsUpsertWithoutWorldInfosInput
    connect?: PromptsWhereUniqueInput
    update?: XOR<XOR<PromptsUpdateToOneWithWhereWithoutWorldInfosInput, PromptsUpdateWithoutWorldInfosInput>, PromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type AetherWorldInfosCreateNestedManyWithoutPromptsInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
  }

  export type AetherWorldInfosUncheckedCreateNestedManyWithoutPromptsInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
  }

  export type AetherWorldInfosUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    disconnect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    delete?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    update?: AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput | AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
  }

  export type AetherWorldInfosUncheckedUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    disconnect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    delete?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    update?: AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput | AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
  }

  export type AetherPromptsCreateNestedOneWithoutWorldInfosInput = {
    create?: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: AetherPromptsCreateOrConnectWithoutWorldInfosInput
    connect?: AetherPromptsWhereUniqueInput
  }

  export type AetherPromptsUpdateOneRequiredWithoutWorldInfosNestedInput = {
    create?: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: AetherPromptsCreateOrConnectWithoutWorldInfosInput
    upsert?: AetherPromptsUpsertWithoutWorldInfosInput
    connect?: AetherPromptsWhereUniqueInput
    update?: XOR<XOR<AetherPromptsUpdateToOneWithWhereWithoutWorldInfosInput, AetherPromptsUpdateWithoutWorldInfosInput>, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TagsPromptsMapCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput> | TagsPromptsMapCreateWithoutTagInput[] | TagsPromptsMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutTagInput | TagsPromptsMapCreateOrConnectWithoutTagInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
  }

  export type TagsPromptsMapUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput> | TagsPromptsMapCreateWithoutTagInput[] | TagsPromptsMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutTagInput | TagsPromptsMapCreateOrConnectWithoutTagInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
  }

  export type TagsPromptsMapUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput> | TagsPromptsMapCreateWithoutTagInput[] | TagsPromptsMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutTagInput | TagsPromptsMapCreateOrConnectWithoutTagInput[]
    upsert?: TagsPromptsMapUpsertWithWhereUniqueWithoutTagInput | TagsPromptsMapUpsertWithWhereUniqueWithoutTagInput[]
    set?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    disconnect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    delete?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    update?: TagsPromptsMapUpdateWithWhereUniqueWithoutTagInput | TagsPromptsMapUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsPromptsMapUpdateManyWithWhereWithoutTagInput | TagsPromptsMapUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
  }

  export type TagsPromptsMapUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput> | TagsPromptsMapCreateWithoutTagInput[] | TagsPromptsMapUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsPromptsMapCreateOrConnectWithoutTagInput | TagsPromptsMapCreateOrConnectWithoutTagInput[]
    upsert?: TagsPromptsMapUpsertWithWhereUniqueWithoutTagInput | TagsPromptsMapUpsertWithWhereUniqueWithoutTagInput[]
    set?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    disconnect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    delete?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    connect?: TagsPromptsMapWhereUniqueInput | TagsPromptsMapWhereUniqueInput[]
    update?: TagsPromptsMapUpdateWithWhereUniqueWithoutTagInput | TagsPromptsMapUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsPromptsMapUpdateManyWithWhereWithoutTagInput | TagsPromptsMapUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
  }

  export type TagsCreateNestedOneWithoutTagPromptsInput = {
    create?: XOR<TagsCreateWithoutTagPromptsInput, TagsUncheckedCreateWithoutTagPromptsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutTagPromptsInput
    connect?: TagsWhereUniqueInput
  }

  export type PromptsCreateNestedOneWithoutTagsFullInput = {
    create?: XOR<PromptsCreateWithoutTagsFullInput, PromptsUncheckedCreateWithoutTagsFullInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutTagsFullInput
    connect?: PromptsWhereUniqueInput
  }

  export type TagsUpdateOneRequiredWithoutTagPromptsNestedInput = {
    create?: XOR<TagsCreateWithoutTagPromptsInput, TagsUncheckedCreateWithoutTagPromptsInput>
    connectOrCreate?: TagsCreateOrConnectWithoutTagPromptsInput
    upsert?: TagsUpsertWithoutTagPromptsInput
    connect?: TagsWhereUniqueInput
    update?: XOR<XOR<TagsUpdateToOneWithWhereWithoutTagPromptsInput, TagsUpdateWithoutTagPromptsInput>, TagsUncheckedUpdateWithoutTagPromptsInput>
  }

  export type PromptsUpdateOneRequiredWithoutTagsFullNestedInput = {
    create?: XOR<PromptsCreateWithoutTagsFullInput, PromptsUncheckedCreateWithoutTagsFullInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutTagsFullInput
    upsert?: PromptsUpsertWithoutTagsFullInput
    connect?: PromptsWhereUniqueInput
    update?: XOR<XOR<PromptsUpdateToOneWithWhereWithoutTagsFullInput, PromptsUpdateWithoutTagsFullInput>, PromptsUncheckedUpdateWithoutTagsFullInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagsPromptsMapCreateWithoutPromptInput = {
    tag: TagsCreateNestedOneWithoutTagPromptsInput
  }

  export type TagsPromptsMapUncheckedCreateWithoutPromptInput = {
    tagId: string
  }

  export type TagsPromptsMapCreateOrConnectWithoutPromptInput = {
    where: TagsPromptsMapWhereUniqueInput
    create: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput>
  }

  export type WorldInfosCreateWithoutPromptsInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosUncheckedCreateWithoutPromptsInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosCreateOrConnectWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    create: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type TagsPromptsMapUpsertWithWhereUniqueWithoutPromptInput = {
    where: TagsPromptsMapWhereUniqueInput
    update: XOR<TagsPromptsMapUpdateWithoutPromptInput, TagsPromptsMapUncheckedUpdateWithoutPromptInput>
    create: XOR<TagsPromptsMapCreateWithoutPromptInput, TagsPromptsMapUncheckedCreateWithoutPromptInput>
  }

  export type TagsPromptsMapUpdateWithWhereUniqueWithoutPromptInput = {
    where: TagsPromptsMapWhereUniqueInput
    data: XOR<TagsPromptsMapUpdateWithoutPromptInput, TagsPromptsMapUncheckedUpdateWithoutPromptInput>
  }

  export type TagsPromptsMapUpdateManyWithWhereWithoutPromptInput = {
    where: TagsPromptsMapScalarWhereInput
    data: XOR<TagsPromptsMapUpdateManyMutationInput, TagsPromptsMapUncheckedUpdateManyWithoutPromptInput>
  }

  export type TagsPromptsMapScalarWhereInput = {
    AND?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
    OR?: TagsPromptsMapScalarWhereInput[]
    NOT?: TagsPromptsMapScalarWhereInput | TagsPromptsMapScalarWhereInput[]
    tagId?: StringFilter<"TagsPromptsMap"> | string
    promptID?: StringFilter<"TagsPromptsMap"> | string
  }

  export type WorldInfosUpsertWithWhereUniqueWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    update: XOR<WorldInfosUpdateWithoutPromptsInput, WorldInfosUncheckedUpdateWithoutPromptsInput>
    create: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type WorldInfosUpdateWithWhereUniqueWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    data: XOR<WorldInfosUpdateWithoutPromptsInput, WorldInfosUncheckedUpdateWithoutPromptsInput>
  }

  export type WorldInfosUpdateManyWithWhereWithoutPromptsInput = {
    where: WorldInfosScalarWhereInput
    data: XOR<WorldInfosUpdateManyMutationInput, WorldInfosUncheckedUpdateManyWithoutPromptsInput>
  }

  export type WorldInfosScalarWhereInput = {
    AND?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
    OR?: WorldInfosScalarWhereInput[]
    NOT?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
    id?: StringFilter<"WorldInfos"> | string
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
  }

  export type PromptsCreateWithoutWorldInfosInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    tagsFull?: TagsPromptsMapCreateNestedManyWithoutPromptInput
  }

  export type PromptsUncheckedCreateWithoutWorldInfosInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    tagsFull?: TagsPromptsMapUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptsCreateOrConnectWithoutWorldInfosInput = {
    where: PromptsWhereUniqueInput
    create: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
  }

  export type PromptsUpsertWithoutWorldInfosInput = {
    update: XOR<PromptsUpdateWithoutWorldInfosInput, PromptsUncheckedUpdateWithoutWorldInfosInput>
    create: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    where?: PromptsWhereInput
  }

  export type PromptsUpdateToOneWithWhereWithoutWorldInfosInput = {
    where?: PromptsWhereInput
    data: XOR<PromptsUpdateWithoutWorldInfosInput, PromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type PromptsUpdateWithoutWorldInfosInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tagsFull?: TagsPromptsMapUpdateManyWithoutPromptNestedInput
  }

  export type PromptsUncheckedUpdateWithoutWorldInfosInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tagsFull?: TagsPromptsMapUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type AetherWorldInfosCreateWithoutPromptsInput = {
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosUncheckedCreateWithoutPromptsInput = {
    id?: number
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosCreateOrConnectWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    create: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    update: XOR<AetherWorldInfosUpdateWithoutPromptsInput, AetherWorldInfosUncheckedUpdateWithoutPromptsInput>
    create: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    data: XOR<AetherWorldInfosUpdateWithoutPromptsInput, AetherWorldInfosUncheckedUpdateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput = {
    where: AetherWorldInfosScalarWhereInput
    data: XOR<AetherWorldInfosUpdateManyMutationInput, AetherWorldInfosUncheckedUpdateManyWithoutPromptsInput>
  }

  export type AetherWorldInfosScalarWhereInput = {
    AND?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
    OR?: AetherWorldInfosScalarWhereInput[]
    NOT?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
    id?: IntFilter<"AetherWorldInfos"> | number
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
  }

  export type AetherPromptsCreateWithoutWorldInfosInput = {
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherPromptsUncheckedCreateWithoutWorldInfosInput = {
    id?: number
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherPromptsCreateOrConnectWithoutWorldInfosInput = {
    where: AetherPromptsWhereUniqueInput
    create: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
  }

  export type AetherPromptsUpsertWithoutWorldInfosInput = {
    update: XOR<AetherPromptsUpdateWithoutWorldInfosInput, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
    create: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    where?: AetherPromptsWhereInput
  }

  export type AetherPromptsUpdateToOneWithWhereWithoutWorldInfosInput = {
    where?: AetherPromptsWhereInput
    data: XOR<AetherPromptsUpdateWithoutWorldInfosInput, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type AetherPromptsUpdateWithoutWorldInfosInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsUncheckedUpdateWithoutWorldInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    dateCreated?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TagsPromptsMapCreateWithoutTagInput = {
    prompt: PromptsCreateNestedOneWithoutTagsFullInput
  }

  export type TagsPromptsMapUncheckedCreateWithoutTagInput = {
    promptID: string
  }

  export type TagsPromptsMapCreateOrConnectWithoutTagInput = {
    where: TagsPromptsMapWhereUniqueInput
    create: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput>
  }

  export type TagsPromptsMapUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsPromptsMapWhereUniqueInput
    update: XOR<TagsPromptsMapUpdateWithoutTagInput, TagsPromptsMapUncheckedUpdateWithoutTagInput>
    create: XOR<TagsPromptsMapCreateWithoutTagInput, TagsPromptsMapUncheckedCreateWithoutTagInput>
  }

  export type TagsPromptsMapUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsPromptsMapWhereUniqueInput
    data: XOR<TagsPromptsMapUpdateWithoutTagInput, TagsPromptsMapUncheckedUpdateWithoutTagInput>
  }

  export type TagsPromptsMapUpdateManyWithWhereWithoutTagInput = {
    where: TagsPromptsMapScalarWhereInput
    data: XOR<TagsPromptsMapUpdateManyMutationInput, TagsPromptsMapUncheckedUpdateManyWithoutTagInput>
  }

  export type TagsCreateWithoutTagPromptsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type TagsUncheckedCreateWithoutTagPromptsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type TagsCreateOrConnectWithoutTagPromptsInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutTagPromptsInput, TagsUncheckedCreateWithoutTagPromptsInput>
  }

  export type PromptsCreateWithoutTagsFullInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    worldInfos?: WorldInfosCreateNestedManyWithoutPromptsInput
  }

  export type PromptsUncheckedCreateWithoutTagsFullInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    deleted?: boolean
    worldInfos?: WorldInfosUncheckedCreateNestedManyWithoutPromptsInput
  }

  export type PromptsCreateOrConnectWithoutTagsFullInput = {
    where: PromptsWhereUniqueInput
    create: XOR<PromptsCreateWithoutTagsFullInput, PromptsUncheckedCreateWithoutTagsFullInput>
  }

  export type TagsUpsertWithoutTagPromptsInput = {
    update: XOR<TagsUpdateWithoutTagPromptsInput, TagsUncheckedUpdateWithoutTagPromptsInput>
    create: XOR<TagsCreateWithoutTagPromptsInput, TagsUncheckedCreateWithoutTagPromptsInput>
    where?: TagsWhereInput
  }

  export type TagsUpdateToOneWithWhereWithoutTagPromptsInput = {
    where?: TagsWhereInput
    data: XOR<TagsUpdateWithoutTagPromptsInput, TagsUncheckedUpdateWithoutTagPromptsInput>
  }

  export type TagsUpdateWithoutTagPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagsUncheckedUpdateWithoutTagPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptsUpsertWithoutTagsFullInput = {
    update: XOR<PromptsUpdateWithoutTagsFullInput, PromptsUncheckedUpdateWithoutTagsFullInput>
    create: XOR<PromptsCreateWithoutTagsFullInput, PromptsUncheckedCreateWithoutTagsFullInput>
    where?: PromptsWhereInput
  }

  export type PromptsUpdateToOneWithWhereWithoutTagsFullInput = {
    where?: PromptsWhereInput
    data: XOR<PromptsUpdateWithoutTagsFullInput, PromptsUncheckedUpdateWithoutTagsFullInput>
  }

  export type PromptsUpdateWithoutTagsFullInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    worldInfos?: WorldInfosUpdateManyWithoutPromptsNestedInput
  }

  export type PromptsUncheckedUpdateWithoutTagsFullInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    worldInfos?: WorldInfosUncheckedUpdateManyWithoutPromptsNestedInput
  }

  export type TagsPromptsMapUpdateWithoutPromptInput = {
    tag?: TagsUpdateOneRequiredWithoutTagPromptsNestedInput
  }

  export type TagsPromptsMapUncheckedUpdateWithoutPromptInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsPromptsMapUncheckedUpdateManyWithoutPromptInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldInfosUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateManyWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUpdateWithoutPromptsInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateWithoutPromptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateManyWithoutPromptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsPromptsMapUpdateWithoutTagInput = {
    prompt?: PromptsUpdateOneRequiredWithoutTagsFullNestedInput
  }

  export type TagsPromptsMapUncheckedUpdateWithoutTagInput = {
    promptID?: StringFieldUpdateOperationsInput | string
  }

  export type TagsPromptsMapUncheckedUpdateManyWithoutTagInput = {
    promptID?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PromptsCountOutputTypeDefaultArgs instead
     */
    export type PromptsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherPromptsCountOutputTypeDefaultArgs instead
     */
    export type AetherPromptsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsCountOutputTypeDefaultArgs instead
     */
    export type TagsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptsDefaultArgs instead
     */
    export type PromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldInfosDefaultArgs instead
     */
    export type WorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldInfosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherPromptsDefaultArgs instead
     */
    export type AetherPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherPromptsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherWorldInfosDefaultArgs instead
     */
    export type AetherWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherWorldInfosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptSearchDefaultArgs instead
     */
    export type PromptSearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptSearchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldInfoSearchDefaultArgs instead
     */
    export type WorldInfoSearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldInfoSearchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsDefaultArgs instead
     */
    export type TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsPromptsMapDefaultArgs instead
     */
    export type TagsPromptsMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsPromptsMapDefaultArgs<ExtArgs>

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