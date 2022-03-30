
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model AnswerComment
 * 
 */
export type AnswerComment = {
  id: number
  answerId: number
  userId: string
  content: string
  createdAt: Date | string
  updatedAt: Date | string
  facebookId: string | null
}

/**
 * Model AnswerVoter
 * 
 */
export type AnswerVoter = {
  id: number
  userId: string
  answerId: number
  state: number
}

/**
 * Model Answer
 * 
 */
export type Answer = {
  id: number
  questionId: number
  userId: string
  content: string
  score: number
  deleted: boolean
  verify: boolean
  createdAt: Date | string
  updatedAt: Date | string
  facebookId: string | null
}

/**
 * Model QuestionComment
 * 
 */
export type QuestionComment = {
  id: number
  questionId: number
  userId: string
  content: string
  createdAt: Date | string
  updatedAt: Date | string
  facebookId: string | null
}

/**
 * Model QuestionVoter
 * 
 */
export type QuestionVoter = {
  id: number
  questionId: number
  userId: string
  state: number
}

/**
 * Model Question
 * 
 */
export type Question = {
  id: number
  userId: string
  title: string
  content: string
  score: number
  deleted: boolean
  createdAt: Date | string
  updatedAt: Date | string
  facebookId: string | null
}

/**
 * Model Tag
 * 
 */
export type Tag = {
  id: number
  name: string
}

/**
 * Model User
 * 
 */
export type User = {
  uid: string
  reputation: number
  description: string | null
  joiningDate: Date | string
  displayName: string
  photoURL: string | null
  phoneNumber: string | null
  email: string
}

/**
 * Model Document
 * 
 */
export type Document = {
  id: number
  title: string
  url: string
}

/**
 * Model TagsOnQuestions
 * 
 */
export type TagsOnQuestions = {
  questionId: number
  tagId: number
}

/**
 * Model TagsOnUsers
 * 
 */
export type TagsOnUsers = {
  tagId: number
  userId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AnswerComments
 * const answerComments = await prisma.answerComment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AnswerComments
   * const answerComments = await prisma.answerComment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.answerComment`: Exposes CRUD operations for the **AnswerComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerComments
    * const answerComments = await prisma.answerComment.findMany()
    * ```
    */
  get answerComment(): Prisma.AnswerCommentDelegate<GlobalReject>;

  /**
   * `prisma.answerVoter`: Exposes CRUD operations for the **AnswerVoter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerVoters
    * const answerVoters = await prisma.answerVoter.findMany()
    * ```
    */
  get answerVoter(): Prisma.AnswerVoterDelegate<GlobalReject>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<GlobalReject>;

  /**
   * `prisma.questionComment`: Exposes CRUD operations for the **QuestionComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionComments
    * const questionComments = await prisma.questionComment.findMany()
    * ```
    */
  get questionComment(): Prisma.QuestionCommentDelegate<GlobalReject>;

  /**
   * `prisma.questionVoter`: Exposes CRUD operations for the **QuestionVoter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionVoters
    * const questionVoters = await prisma.questionVoter.findMany()
    * ```
    */
  get questionVoter(): Prisma.QuestionVoterDelegate<GlobalReject>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<GlobalReject>;

  /**
   * `prisma.tagsOnQuestions`: Exposes CRUD operations for the **TagsOnQuestions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnQuestions
    * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany()
    * ```
    */
  get tagsOnQuestions(): Prisma.TagsOnQuestionsDelegate<GlobalReject>;

  /**
   * `prisma.tagsOnUsers`: Exposes CRUD operations for the **TagsOnUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnUsers
    * const tagsOnUsers = await prisma.tagsOnUsers.findMany()
    * ```
    */
  get tagsOnUsers(): Prisma.TagsOnUsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.10.0
   * Query Engine version: 73e60b76d394f8d37d8ebd1f8918c79029f0db86
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    AnswerComment: 'AnswerComment',
    AnswerVoter: 'AnswerVoter',
    Answer: 'Answer',
    QuestionComment: 'QuestionComment',
    QuestionVoter: 'QuestionVoter',
    Question: 'Question',
    Tag: 'Tag',
    User: 'User',
    Document: 'Document',
    TagsOnQuestions: 'TagsOnQuestions',
    TagsOnUsers: 'TagsOnUsers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnswerCountOutputType
   */


  export type AnswerCountOutputType = {
    AnswerComment: number
    AnswerVoter: number
  }

  export type AnswerCountOutputTypeSelect = {
    AnswerComment?: boolean
    AnswerVoter?: boolean
  }

  export type AnswerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AnswerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AnswerCountOutputType
    : S extends undefined
    ? never
    : S extends AnswerCountOutputTypeArgs
    ?'include' extends U
    ? AnswerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AnswerCountOutputType ? AnswerCountOutputType[P] : never
  } 
    : AnswerCountOutputType
  : AnswerCountOutputType




  // Custom InputTypes

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     * 
    **/
    select?: AnswerCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    Answer: number
    QuestionComment: number
    QuestionVoter: number
    TagsOnQuestions: number
  }

  export type QuestionCountOutputTypeSelect = {
    Answer?: boolean
    QuestionComment?: boolean
    QuestionVoter?: boolean
    TagsOnQuestions?: boolean
  }

  export type QuestionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QuestionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? QuestionCountOutputType
    : S extends undefined
    ? never
    : S extends QuestionCountOutputTypeArgs
    ?'include' extends U
    ? QuestionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof QuestionCountOutputType ? QuestionCountOutputType[P] : never
  } 
    : QuestionCountOutputType
  : QuestionCountOutputType




  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     * 
    **/
    select?: QuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    TagsOnQuestions: number
    TagsOnUsers: number
  }

  export type TagCountOutputTypeSelect = {
    TagsOnQuestions?: boolean
    TagsOnUsers?: boolean
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TagCountOutputType ? TagCountOutputType[P] : never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Answer: number
    AnswerComment: number
    AnswerVoter: number
    Question: number
    QuestionComment: number
    QuestionVoter: number
    InterestedTag: number
  }

  export type UserCountOutputTypeSelect = {
    Answer?: boolean
    AnswerComment?: boolean
    AnswerVoter?: boolean
    Question?: boolean
    QuestionComment?: boolean
    QuestionVoter?: boolean
    InterestedTag?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model AnswerComment
   */


  export type AggregateAnswerComment = {
    _count: AnswerCommentCountAggregateOutputType | null
    _avg: AnswerCommentAvgAggregateOutputType | null
    _sum: AnswerCommentSumAggregateOutputType | null
    _min: AnswerCommentMinAggregateOutputType | null
    _max: AnswerCommentMaxAggregateOutputType | null
  }

  export type AnswerCommentAvgAggregateOutputType = {
    id: number | null
    answerId: number | null
  }

  export type AnswerCommentSumAggregateOutputType = {
    id: number | null
    answerId: number | null
  }

  export type AnswerCommentMinAggregateOutputType = {
    id: number | null
    answerId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type AnswerCommentMaxAggregateOutputType = {
    id: number | null
    answerId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type AnswerCommentCountAggregateOutputType = {
    id: number
    answerId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    facebookId: number
    _all: number
  }


  export type AnswerCommentAvgAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type AnswerCommentSumAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type AnswerCommentMinAggregateInputType = {
    id?: true
    answerId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type AnswerCommentMaxAggregateInputType = {
    id?: true
    answerId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type AnswerCommentCountAggregateInputType = {
    id?: true
    answerId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
    _all?: true
  }

  export type AnswerCommentAggregateArgs = {
    /**
     * Filter which AnswerComment to aggregate.
     * 
    **/
    where?: AnswerCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerComments to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AnswerCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerComments
    **/
    _count?: true | AnswerCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerCommentMaxAggregateInputType
  }

  export type GetAnswerCommentAggregateType<T extends AnswerCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerComment[P]>
      : GetScalarType<T[P], AggregateAnswerComment[P]>
  }




  export type AnswerCommentGroupByArgs = {
    where?: AnswerCommentWhereInput
    orderBy?: Enumerable<AnswerCommentOrderByWithAggregationInput>
    by: Array<AnswerCommentScalarFieldEnum>
    having?: AnswerCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCommentCountAggregateInputType | true
    _avg?: AnswerCommentAvgAggregateInputType
    _sum?: AnswerCommentSumAggregateInputType
    _min?: AnswerCommentMinAggregateInputType
    _max?: AnswerCommentMaxAggregateInputType
  }


  export type AnswerCommentGroupByOutputType = {
    id: number
    answerId: number
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date
    facebookId: string | null
    _count: AnswerCommentCountAggregateOutputType | null
    _avg: AnswerCommentAvgAggregateOutputType | null
    _sum: AnswerCommentSumAggregateOutputType | null
    _min: AnswerCommentMinAggregateOutputType | null
    _max: AnswerCommentMaxAggregateOutputType | null
  }

  type GetAnswerCommentGroupByPayload<T extends AnswerCommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswerCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerCommentGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerCommentGroupByOutputType[P]>
        }
      >
    >


  export type AnswerCommentSelect = {
    id?: boolean
    answerId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facebookId?: boolean
    Answer?: boolean | AnswerArgs
    User?: boolean | UserArgs
  }

  export type AnswerCommentInclude = {
    Answer?: boolean | AnswerArgs
    User?: boolean | UserArgs
  }

  export type AnswerCommentGetPayload<
    S extends boolean | null | undefined | AnswerCommentArgs,
    U = keyof S
      > = S extends true
        ? AnswerComment
    : S extends undefined
    ? never
    : S extends AnswerCommentArgs | AnswerCommentFindManyArgs
    ?'include' extends U
    ? AnswerComment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Answer' ? AnswerGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Answer' ? AnswerGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof AnswerComment ? AnswerComment[P] : never
  } 
    : AnswerComment
  : AnswerComment


  type AnswerCommentCountArgs = Merge<
    Omit<AnswerCommentFindManyArgs, 'select' | 'include'> & {
      select?: AnswerCommentCountAggregateInputType | true
    }
  >

  export interface AnswerCommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AnswerComment that matches the filter.
     * @param {AnswerCommentFindUniqueArgs} args - Arguments to find a AnswerComment
     * @example
     * // Get one AnswerComment
     * const answerComment = await prisma.answerComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswerCommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswerCommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AnswerComment'> extends True ? CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>> : CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment | null >, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T> | null >>

    /**
     * Find the first AnswerComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentFindFirstArgs} args - Arguments to find a AnswerComment
     * @example
     * // Get one AnswerComment
     * const answerComment = await prisma.answerComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswerCommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswerCommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AnswerComment'> extends True ? CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>> : CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment | null >, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T> | null >>

    /**
     * Find zero or more AnswerComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerComments
     * const answerComments = await prisma.answerComment.findMany()
     * 
     * // Get first 10 AnswerComments
     * const answerComments = await prisma.answerComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerCommentWithIdOnly = await prisma.answerComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswerCommentFindManyArgs>(
      args?: SelectSubset<T, AnswerCommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AnswerComment>>, PrismaPromise<Array<AnswerCommentGetPayload<T>>>>

    /**
     * Create a AnswerComment.
     * @param {AnswerCommentCreateArgs} args - Arguments to create a AnswerComment.
     * @example
     * // Create one AnswerComment
     * const AnswerComment = await prisma.answerComment.create({
     *   data: {
     *     // ... data to create a AnswerComment
     *   }
     * })
     * 
    **/
    create<T extends AnswerCommentCreateArgs>(
      args: SelectSubset<T, AnswerCommentCreateArgs>
    ): CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>>

    /**
     * Create many AnswerComments.
     *     @param {AnswerCommentCreateManyArgs} args - Arguments to create many AnswerComments.
     *     @example
     *     // Create many AnswerComments
     *     const answerComment = await prisma.answerComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswerCommentCreateManyArgs>(
      args?: SelectSubset<T, AnswerCommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AnswerComment.
     * @param {AnswerCommentDeleteArgs} args - Arguments to delete one AnswerComment.
     * @example
     * // Delete one AnswerComment
     * const AnswerComment = await prisma.answerComment.delete({
     *   where: {
     *     // ... filter to delete one AnswerComment
     *   }
     * })
     * 
    **/
    delete<T extends AnswerCommentDeleteArgs>(
      args: SelectSubset<T, AnswerCommentDeleteArgs>
    ): CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>>

    /**
     * Update one AnswerComment.
     * @param {AnswerCommentUpdateArgs} args - Arguments to update one AnswerComment.
     * @example
     * // Update one AnswerComment
     * const answerComment = await prisma.answerComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswerCommentUpdateArgs>(
      args: SelectSubset<T, AnswerCommentUpdateArgs>
    ): CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>>

    /**
     * Delete zero or more AnswerComments.
     * @param {AnswerCommentDeleteManyArgs} args - Arguments to filter AnswerComments to delete.
     * @example
     * // Delete a few AnswerComments
     * const { count } = await prisma.answerComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswerCommentDeleteManyArgs>(
      args?: SelectSubset<T, AnswerCommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerComments
     * const answerComment = await prisma.answerComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswerCommentUpdateManyArgs>(
      args: SelectSubset<T, AnswerCommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AnswerComment.
     * @param {AnswerCommentUpsertArgs} args - Arguments to update or create a AnswerComment.
     * @example
     * // Update or create a AnswerComment
     * const answerComment = await prisma.answerComment.upsert({
     *   create: {
     *     // ... data to create a AnswerComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerComment we want to update
     *   }
     * })
    **/
    upsert<T extends AnswerCommentUpsertArgs>(
      args: SelectSubset<T, AnswerCommentUpsertArgs>
    ): CheckSelect<T, Prisma__AnswerCommentClient<AnswerComment>, Prisma__AnswerCommentClient<AnswerCommentGetPayload<T>>>

    /**
     * Count the number of AnswerComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentCountArgs} args - Arguments to filter AnswerComments to count.
     * @example
     * // Count the number of AnswerComments
     * const count = await prisma.answerComment.count({
     *   where: {
     *     // ... the filter for the AnswerComments we want to count
     *   }
     * })
    **/
    count<T extends AnswerCommentCountArgs>(
      args?: Subset<T, AnswerCommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerCommentAggregateArgs>(args: Subset<T, AnswerCommentAggregateArgs>): PrismaPromise<GetAnswerCommentAggregateType<T>>

    /**
     * Group by AnswerComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCommentGroupByArgs} args - Group by arguments.
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
      T extends AnswerCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerCommentGroupByArgs['orderBy'] }
        : { orderBy?: AnswerCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnswerCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerCommentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswerCommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Answer<T extends AnswerArgs = {}>(args?: Subset<T, AnswerArgs>): CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AnswerComment findUnique
   */
  export type AnswerCommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * Throw an Error if a AnswerComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AnswerComment to fetch.
     * 
    **/
    where: AnswerCommentWhereUniqueInput
  }


  /**
   * AnswerComment findFirst
   */
  export type AnswerCommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * Throw an Error if a AnswerComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AnswerComment to fetch.
     * 
    **/
    where?: AnswerCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerComments to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerComments.
     * 
    **/
    cursor?: AnswerCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerComments.
     * 
    **/
    distinct?: Enumerable<AnswerCommentScalarFieldEnum>
  }


  /**
   * AnswerComment findMany
   */
  export type AnswerCommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * Filter, which AnswerComments to fetch.
     * 
    **/
    where?: AnswerCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerComments to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerComments.
     * 
    **/
    cursor?: AnswerCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerComments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnswerCommentScalarFieldEnum>
  }


  /**
   * AnswerComment create
   */
  export type AnswerCommentCreateArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * The data needed to create a AnswerComment.
     * 
    **/
    data: XOR<AnswerCommentCreateInput, AnswerCommentUncheckedCreateInput>
  }


  /**
   * AnswerComment createMany
   */
  export type AnswerCommentCreateManyArgs = {
    /**
     * The data used to create many AnswerComments.
     * 
    **/
    data: Enumerable<AnswerCommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AnswerComment update
   */
  export type AnswerCommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * The data needed to update a AnswerComment.
     * 
    **/
    data: XOR<AnswerCommentUpdateInput, AnswerCommentUncheckedUpdateInput>
    /**
     * Choose, which AnswerComment to update.
     * 
    **/
    where: AnswerCommentWhereUniqueInput
  }


  /**
   * AnswerComment updateMany
   */
  export type AnswerCommentUpdateManyArgs = {
    /**
     * The data used to update AnswerComments.
     * 
    **/
    data: XOR<AnswerCommentUpdateManyMutationInput, AnswerCommentUncheckedUpdateManyInput>
    /**
     * Filter which AnswerComments to update
     * 
    **/
    where?: AnswerCommentWhereInput
  }


  /**
   * AnswerComment upsert
   */
  export type AnswerCommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * The filter to search for the AnswerComment to update in case it exists.
     * 
    **/
    where: AnswerCommentWhereUniqueInput
    /**
     * In case the AnswerComment found by the `where` argument doesn't exist, create a new AnswerComment with this data.
     * 
    **/
    create: XOR<AnswerCommentCreateInput, AnswerCommentUncheckedCreateInput>
    /**
     * In case the AnswerComment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AnswerCommentUpdateInput, AnswerCommentUncheckedUpdateInput>
  }


  /**
   * AnswerComment delete
   */
  export type AnswerCommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
    /**
     * Filter which AnswerComment to delete.
     * 
    **/
    where: AnswerCommentWhereUniqueInput
  }


  /**
   * AnswerComment deleteMany
   */
  export type AnswerCommentDeleteManyArgs = {
    /**
     * Filter which AnswerComments to delete
     * 
    **/
    where?: AnswerCommentWhereInput
  }


  /**
   * AnswerComment without action
   */
  export type AnswerCommentArgs = {
    /**
     * Select specific fields to fetch from the AnswerComment
     * 
    **/
    select?: AnswerCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerCommentInclude | null
  }



  /**
   * Model AnswerVoter
   */


  export type AggregateAnswerVoter = {
    _count: AnswerVoterCountAggregateOutputType | null
    _avg: AnswerVoterAvgAggregateOutputType | null
    _sum: AnswerVoterSumAggregateOutputType | null
    _min: AnswerVoterMinAggregateOutputType | null
    _max: AnswerVoterMaxAggregateOutputType | null
  }

  export type AnswerVoterAvgAggregateOutputType = {
    id: number | null
    answerId: number | null
    state: number | null
  }

  export type AnswerVoterSumAggregateOutputType = {
    id: number | null
    answerId: number | null
    state: number | null
  }

  export type AnswerVoterMinAggregateOutputType = {
    id: number | null
    userId: string | null
    answerId: number | null
    state: number | null
  }

  export type AnswerVoterMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    answerId: number | null
    state: number | null
  }

  export type AnswerVoterCountAggregateOutputType = {
    id: number
    userId: number
    answerId: number
    state: number
    _all: number
  }


  export type AnswerVoterAvgAggregateInputType = {
    id?: true
    answerId?: true
    state?: true
  }

  export type AnswerVoterSumAggregateInputType = {
    id?: true
    answerId?: true
    state?: true
  }

  export type AnswerVoterMinAggregateInputType = {
    id?: true
    userId?: true
    answerId?: true
    state?: true
  }

  export type AnswerVoterMaxAggregateInputType = {
    id?: true
    userId?: true
    answerId?: true
    state?: true
  }

  export type AnswerVoterCountAggregateInputType = {
    id?: true
    userId?: true
    answerId?: true
    state?: true
    _all?: true
  }

  export type AnswerVoterAggregateArgs = {
    /**
     * Filter which AnswerVoter to aggregate.
     * 
    **/
    where?: AnswerVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AnswerVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerVoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerVoters
    **/
    _count?: true | AnswerVoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerVoterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerVoterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerVoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerVoterMaxAggregateInputType
  }

  export type GetAnswerVoterAggregateType<T extends AnswerVoterAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerVoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerVoter[P]>
      : GetScalarType<T[P], AggregateAnswerVoter[P]>
  }




  export type AnswerVoterGroupByArgs = {
    where?: AnswerVoterWhereInput
    orderBy?: Enumerable<AnswerVoterOrderByWithAggregationInput>
    by: Array<AnswerVoterScalarFieldEnum>
    having?: AnswerVoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerVoterCountAggregateInputType | true
    _avg?: AnswerVoterAvgAggregateInputType
    _sum?: AnswerVoterSumAggregateInputType
    _min?: AnswerVoterMinAggregateInputType
    _max?: AnswerVoterMaxAggregateInputType
  }


  export type AnswerVoterGroupByOutputType = {
    id: number
    userId: string
    answerId: number
    state: number
    _count: AnswerVoterCountAggregateOutputType | null
    _avg: AnswerVoterAvgAggregateOutputType | null
    _sum: AnswerVoterSumAggregateOutputType | null
    _min: AnswerVoterMinAggregateOutputType | null
    _max: AnswerVoterMaxAggregateOutputType | null
  }

  type GetAnswerVoterGroupByPayload<T extends AnswerVoterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswerVoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerVoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerVoterGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerVoterGroupByOutputType[P]>
        }
      >
    >


  export type AnswerVoterSelect = {
    id?: boolean
    userId?: boolean
    answerId?: boolean
    state?: boolean
    Answer?: boolean | AnswerArgs
    User?: boolean | UserArgs
  }

  export type AnswerVoterInclude = {
    Answer?: boolean | AnswerArgs
    User?: boolean | UserArgs
  }

  export type AnswerVoterGetPayload<
    S extends boolean | null | undefined | AnswerVoterArgs,
    U = keyof S
      > = S extends true
        ? AnswerVoter
    : S extends undefined
    ? never
    : S extends AnswerVoterArgs | AnswerVoterFindManyArgs
    ?'include' extends U
    ? AnswerVoter  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Answer' ? AnswerGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Answer' ? AnswerGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof AnswerVoter ? AnswerVoter[P] : never
  } 
    : AnswerVoter
  : AnswerVoter


  type AnswerVoterCountArgs = Merge<
    Omit<AnswerVoterFindManyArgs, 'select' | 'include'> & {
      select?: AnswerVoterCountAggregateInputType | true
    }
  >

  export interface AnswerVoterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AnswerVoter that matches the filter.
     * @param {AnswerVoterFindUniqueArgs} args - Arguments to find a AnswerVoter
     * @example
     * // Get one AnswerVoter
     * const answerVoter = await prisma.answerVoter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswerVoterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswerVoterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AnswerVoter'> extends True ? CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>> : CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter | null >, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T> | null >>

    /**
     * Find the first AnswerVoter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterFindFirstArgs} args - Arguments to find a AnswerVoter
     * @example
     * // Get one AnswerVoter
     * const answerVoter = await prisma.answerVoter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswerVoterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswerVoterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AnswerVoter'> extends True ? CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>> : CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter | null >, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T> | null >>

    /**
     * Find zero or more AnswerVoters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerVoters
     * const answerVoters = await prisma.answerVoter.findMany()
     * 
     * // Get first 10 AnswerVoters
     * const answerVoters = await prisma.answerVoter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerVoterWithIdOnly = await prisma.answerVoter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswerVoterFindManyArgs>(
      args?: SelectSubset<T, AnswerVoterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AnswerVoter>>, PrismaPromise<Array<AnswerVoterGetPayload<T>>>>

    /**
     * Create a AnswerVoter.
     * @param {AnswerVoterCreateArgs} args - Arguments to create a AnswerVoter.
     * @example
     * // Create one AnswerVoter
     * const AnswerVoter = await prisma.answerVoter.create({
     *   data: {
     *     // ... data to create a AnswerVoter
     *   }
     * })
     * 
    **/
    create<T extends AnswerVoterCreateArgs>(
      args: SelectSubset<T, AnswerVoterCreateArgs>
    ): CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>>

    /**
     * Create many AnswerVoters.
     *     @param {AnswerVoterCreateManyArgs} args - Arguments to create many AnswerVoters.
     *     @example
     *     // Create many AnswerVoters
     *     const answerVoter = await prisma.answerVoter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswerVoterCreateManyArgs>(
      args?: SelectSubset<T, AnswerVoterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AnswerVoter.
     * @param {AnswerVoterDeleteArgs} args - Arguments to delete one AnswerVoter.
     * @example
     * // Delete one AnswerVoter
     * const AnswerVoter = await prisma.answerVoter.delete({
     *   where: {
     *     // ... filter to delete one AnswerVoter
     *   }
     * })
     * 
    **/
    delete<T extends AnswerVoterDeleteArgs>(
      args: SelectSubset<T, AnswerVoterDeleteArgs>
    ): CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>>

    /**
     * Update one AnswerVoter.
     * @param {AnswerVoterUpdateArgs} args - Arguments to update one AnswerVoter.
     * @example
     * // Update one AnswerVoter
     * const answerVoter = await prisma.answerVoter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswerVoterUpdateArgs>(
      args: SelectSubset<T, AnswerVoterUpdateArgs>
    ): CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>>

    /**
     * Delete zero or more AnswerVoters.
     * @param {AnswerVoterDeleteManyArgs} args - Arguments to filter AnswerVoters to delete.
     * @example
     * // Delete a few AnswerVoters
     * const { count } = await prisma.answerVoter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswerVoterDeleteManyArgs>(
      args?: SelectSubset<T, AnswerVoterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerVoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerVoters
     * const answerVoter = await prisma.answerVoter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswerVoterUpdateManyArgs>(
      args: SelectSubset<T, AnswerVoterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AnswerVoter.
     * @param {AnswerVoterUpsertArgs} args - Arguments to update or create a AnswerVoter.
     * @example
     * // Update or create a AnswerVoter
     * const answerVoter = await prisma.answerVoter.upsert({
     *   create: {
     *     // ... data to create a AnswerVoter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerVoter we want to update
     *   }
     * })
    **/
    upsert<T extends AnswerVoterUpsertArgs>(
      args: SelectSubset<T, AnswerVoterUpsertArgs>
    ): CheckSelect<T, Prisma__AnswerVoterClient<AnswerVoter>, Prisma__AnswerVoterClient<AnswerVoterGetPayload<T>>>

    /**
     * Count the number of AnswerVoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterCountArgs} args - Arguments to filter AnswerVoters to count.
     * @example
     * // Count the number of AnswerVoters
     * const count = await prisma.answerVoter.count({
     *   where: {
     *     // ... the filter for the AnswerVoters we want to count
     *   }
     * })
    **/
    count<T extends AnswerVoterCountArgs>(
      args?: Subset<T, AnswerVoterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerVoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerVoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerVoterAggregateArgs>(args: Subset<T, AnswerVoterAggregateArgs>): PrismaPromise<GetAnswerVoterAggregateType<T>>

    /**
     * Group by AnswerVoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerVoterGroupByArgs} args - Group by arguments.
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
      T extends AnswerVoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerVoterGroupByArgs['orderBy'] }
        : { orderBy?: AnswerVoterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnswerVoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerVoterGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerVoter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswerVoterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Answer<T extends AnswerArgs = {}>(args?: Subset<T, AnswerArgs>): CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AnswerVoter findUnique
   */
  export type AnswerVoterFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * Throw an Error if a AnswerVoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AnswerVoter to fetch.
     * 
    **/
    where: AnswerVoterWhereUniqueInput
  }


  /**
   * AnswerVoter findFirst
   */
  export type AnswerVoterFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * Throw an Error if a AnswerVoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AnswerVoter to fetch.
     * 
    **/
    where?: AnswerVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerVoters.
     * 
    **/
    cursor?: AnswerVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerVoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerVoters.
     * 
    **/
    distinct?: Enumerable<AnswerVoterScalarFieldEnum>
  }


  /**
   * AnswerVoter findMany
   */
  export type AnswerVoterFindManyArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * Filter, which AnswerVoters to fetch.
     * 
    **/
    where?: AnswerVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerVoters.
     * 
    **/
    cursor?: AnswerVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerVoters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnswerVoterScalarFieldEnum>
  }


  /**
   * AnswerVoter create
   */
  export type AnswerVoterCreateArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * The data needed to create a AnswerVoter.
     * 
    **/
    data: XOR<AnswerVoterCreateInput, AnswerVoterUncheckedCreateInput>
  }


  /**
   * AnswerVoter createMany
   */
  export type AnswerVoterCreateManyArgs = {
    /**
     * The data used to create many AnswerVoters.
     * 
    **/
    data: Enumerable<AnswerVoterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AnswerVoter update
   */
  export type AnswerVoterUpdateArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * The data needed to update a AnswerVoter.
     * 
    **/
    data: XOR<AnswerVoterUpdateInput, AnswerVoterUncheckedUpdateInput>
    /**
     * Choose, which AnswerVoter to update.
     * 
    **/
    where: AnswerVoterWhereUniqueInput
  }


  /**
   * AnswerVoter updateMany
   */
  export type AnswerVoterUpdateManyArgs = {
    /**
     * The data used to update AnswerVoters.
     * 
    **/
    data: XOR<AnswerVoterUpdateManyMutationInput, AnswerVoterUncheckedUpdateManyInput>
    /**
     * Filter which AnswerVoters to update
     * 
    **/
    where?: AnswerVoterWhereInput
  }


  /**
   * AnswerVoter upsert
   */
  export type AnswerVoterUpsertArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * The filter to search for the AnswerVoter to update in case it exists.
     * 
    **/
    where: AnswerVoterWhereUniqueInput
    /**
     * In case the AnswerVoter found by the `where` argument doesn't exist, create a new AnswerVoter with this data.
     * 
    **/
    create: XOR<AnswerVoterCreateInput, AnswerVoterUncheckedCreateInput>
    /**
     * In case the AnswerVoter was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AnswerVoterUpdateInput, AnswerVoterUncheckedUpdateInput>
  }


  /**
   * AnswerVoter delete
   */
  export type AnswerVoterDeleteArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
    /**
     * Filter which AnswerVoter to delete.
     * 
    **/
    where: AnswerVoterWhereUniqueInput
  }


  /**
   * AnswerVoter deleteMany
   */
  export type AnswerVoterDeleteManyArgs = {
    /**
     * Filter which AnswerVoters to delete
     * 
    **/
    where?: AnswerVoterWhereInput
  }


  /**
   * AnswerVoter without action
   */
  export type AnswerVoterArgs = {
    /**
     * Select specific fields to fetch from the AnswerVoter
     * 
    **/
    select?: AnswerVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerVoterInclude | null
  }



  /**
   * Model Answer
   */


  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    score: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    score: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    content: string | null
    score: number | null
    deleted: boolean | null
    verify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    content: string | null
    score: number | null
    deleted: boolean | null
    verify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    questionId: number
    userId: number
    content: number
    score: number
    deleted: number
    verify: number
    createdAt: number
    updatedAt: number
    facebookId: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
    score?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    questionId?: true
    score?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    score?: true
    deleted?: true
    verify?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    score?: true
    deleted?: true
    verify?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    score?: true
    deleted?: true
    verify?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
    _all?: true
  }

  export type AnswerAggregateArgs = {
    /**
     * Filter which Answer to aggregate.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs = {
    where?: AnswerWhereInput
    orderBy?: Enumerable<AnswerOrderByWithAggregationInput>
    by: Array<AnswerScalarFieldEnum>
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }


  export type AnswerGroupByOutputType = {
    id: number
    questionId: number
    userId: string
    content: string
    score: number
    deleted: boolean
    verify: boolean
    createdAt: Date
    updatedAt: Date
    facebookId: string | null
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect = {
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    score?: boolean
    deleted?: boolean
    verify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facebookId?: boolean
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
    AnswerComment?: boolean | AnswerCommentFindManyArgs
    AnswerVoter?: boolean | AnswerVoterFindManyArgs
    _count?: boolean | AnswerCountOutputTypeArgs
  }

  export type AnswerInclude = {
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
    AnswerComment?: boolean | AnswerCommentFindManyArgs
    AnswerVoter?: boolean | AnswerVoterFindManyArgs
    _count?: boolean | AnswerCountOutputTypeArgs
  }

  export type AnswerGetPayload<
    S extends boolean | null | undefined | AnswerArgs,
    U = keyof S
      > = S extends true
        ? Answer
    : S extends undefined
    ? never
    : S extends AnswerArgs | AnswerFindManyArgs
    ?'include' extends U
    ? Answer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'AnswerComment' ? Array < AnswerCommentGetPayload<S['include'][P]>>  :
        P extends 'AnswerVoter' ? Array < AnswerVoterGetPayload<S['include'][P]>>  :
        P extends '_count' ? AnswerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'AnswerComment' ? Array < AnswerCommentGetPayload<S['select'][P]>>  :
        P extends 'AnswerVoter' ? Array < AnswerVoterGetPayload<S['select'][P]>>  :
        P extends '_count' ? AnswerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Answer ? Answer[P] : never
  } 
    : Answer
  : Answer


  type AnswerCountArgs = Merge<
    Omit<AnswerFindManyArgs, 'select' | 'include'> & {
      select?: AnswerCountAggregateInputType | true
    }
  >

  export interface AnswerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Answer'> extends True ? CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>> : CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Answer'> extends True ? CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>> : CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswerFindManyArgs>(
      args?: SelectSubset<T, AnswerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
    **/
    create<T extends AnswerCreateArgs>(
      args: SelectSubset<T, AnswerCreateArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Create many Answers.
     *     @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     *     @example
     *     // Create many Answers
     *     const answer = await prisma.answer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswerCreateManyArgs>(
      args?: SelectSubset<T, AnswerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
    **/
    delete<T extends AnswerDeleteArgs>(
      args: SelectSubset<T, AnswerDeleteArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswerUpdateArgs>(
      args: SelectSubset<T, AnswerUpdateArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswerDeleteManyArgs>(
      args?: SelectSubset<T, AnswerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswerUpdateManyArgs>(
      args: SelectSubset<T, AnswerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
    **/
    upsert<T extends AnswerUpsertArgs>(
      args: SelectSubset<T, AnswerUpsertArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    AnswerComment<T extends AnswerCommentFindManyArgs = {}>(args?: Subset<T, AnswerCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AnswerComment>>, PrismaPromise<Array<AnswerCommentGetPayload<T>>>>;

    AnswerVoter<T extends AnswerVoterFindManyArgs = {}>(args?: Subset<T, AnswerVoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AnswerVoter>>, PrismaPromise<Array<AnswerVoterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Throw an Error if a Answer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Answer to fetch.
     * 
    **/
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Throw an Error if a Answer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Answer to fetch.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     * 
    **/
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter, which Answers to fetch.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Answer create
   */
  export type AnswerCreateArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The data needed to create a Answer.
     * 
    **/
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }


  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs = {
    /**
     * The data used to create many Answers.
     * 
    **/
    data: Enumerable<AnswerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Answer update
   */
  export type AnswerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The data needed to update a Answer.
     * 
    **/
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     * 
    **/
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs = {
    /**
     * The data used to update Answers.
     * 
    **/
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     * 
    **/
    where?: AnswerWhereInput
  }


  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The filter to search for the Answer to update in case it exists.
     * 
    **/
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     * 
    **/
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }


  /**
   * Answer delete
   */
  export type AnswerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter which Answer to delete.
     * 
    **/
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs = {
    /**
     * Filter which Answers to delete
     * 
    **/
    where?: AnswerWhereInput
  }


  /**
   * Answer without action
   */
  export type AnswerArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
  }



  /**
   * Model QuestionComment
   */


  export type AggregateQuestionComment = {
    _count: QuestionCommentCountAggregateOutputType | null
    _avg: QuestionCommentAvgAggregateOutputType | null
    _sum: QuestionCommentSumAggregateOutputType | null
    _min: QuestionCommentMinAggregateOutputType | null
    _max: QuestionCommentMaxAggregateOutputType | null
  }

  export type QuestionCommentAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type QuestionCommentSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type QuestionCommentMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type QuestionCommentMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type QuestionCommentCountAggregateOutputType = {
    id: number
    questionId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    facebookId: number
    _all: number
  }


  export type QuestionCommentAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type QuestionCommentSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type QuestionCommentMinAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type QuestionCommentMaxAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type QuestionCommentCountAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
    _all?: true
  }

  export type QuestionCommentAggregateArgs = {
    /**
     * Filter which QuestionComment to aggregate.
     * 
    **/
    where?: QuestionCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionComments to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionComments
    **/
    _count?: true | QuestionCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionCommentMaxAggregateInputType
  }

  export type GetQuestionCommentAggregateType<T extends QuestionCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionComment[P]>
      : GetScalarType<T[P], AggregateQuestionComment[P]>
  }




  export type QuestionCommentGroupByArgs = {
    where?: QuestionCommentWhereInput
    orderBy?: Enumerable<QuestionCommentOrderByWithAggregationInput>
    by: Array<QuestionCommentScalarFieldEnum>
    having?: QuestionCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCommentCountAggregateInputType | true
    _avg?: QuestionCommentAvgAggregateInputType
    _sum?: QuestionCommentSumAggregateInputType
    _min?: QuestionCommentMinAggregateInputType
    _max?: QuestionCommentMaxAggregateInputType
  }


  export type QuestionCommentGroupByOutputType = {
    id: number
    questionId: number
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date
    facebookId: string | null
    _count: QuestionCommentCountAggregateOutputType | null
    _avg: QuestionCommentAvgAggregateOutputType | null
    _sum: QuestionCommentSumAggregateOutputType | null
    _min: QuestionCommentMinAggregateOutputType | null
    _max: QuestionCommentMaxAggregateOutputType | null
  }

  type GetQuestionCommentGroupByPayload<T extends QuestionCommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionCommentGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionCommentGroupByOutputType[P]>
        }
      >
    >


  export type QuestionCommentSelect = {
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facebookId?: boolean
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
  }

  export type QuestionCommentInclude = {
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
  }

  export type QuestionCommentGetPayload<
    S extends boolean | null | undefined | QuestionCommentArgs,
    U = keyof S
      > = S extends true
        ? QuestionComment
    : S extends undefined
    ? never
    : S extends QuestionCommentArgs | QuestionCommentFindManyArgs
    ?'include' extends U
    ? QuestionComment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof QuestionComment ? QuestionComment[P] : never
  } 
    : QuestionComment
  : QuestionComment


  type QuestionCommentCountArgs = Merge<
    Omit<QuestionCommentFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCommentCountAggregateInputType | true
    }
  >

  export interface QuestionCommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one QuestionComment that matches the filter.
     * @param {QuestionCommentFindUniqueArgs} args - Arguments to find a QuestionComment
     * @example
     * // Get one QuestionComment
     * const questionComment = await prisma.questionComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionCommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionCommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuestionComment'> extends True ? CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>> : CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment | null >, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T> | null >>

    /**
     * Find the first QuestionComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentFindFirstArgs} args - Arguments to find a QuestionComment
     * @example
     * // Get one QuestionComment
     * const questionComment = await prisma.questionComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionCommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionCommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuestionComment'> extends True ? CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>> : CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment | null >, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T> | null >>

    /**
     * Find zero or more QuestionComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionComments
     * const questionComments = await prisma.questionComment.findMany()
     * 
     * // Get first 10 QuestionComments
     * const questionComments = await prisma.questionComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionCommentWithIdOnly = await prisma.questionComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionCommentFindManyArgs>(
      args?: SelectSubset<T, QuestionCommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<QuestionComment>>, PrismaPromise<Array<QuestionCommentGetPayload<T>>>>

    /**
     * Create a QuestionComment.
     * @param {QuestionCommentCreateArgs} args - Arguments to create a QuestionComment.
     * @example
     * // Create one QuestionComment
     * const QuestionComment = await prisma.questionComment.create({
     *   data: {
     *     // ... data to create a QuestionComment
     *   }
     * })
     * 
    **/
    create<T extends QuestionCommentCreateArgs>(
      args: SelectSubset<T, QuestionCommentCreateArgs>
    ): CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>>

    /**
     * Create many QuestionComments.
     *     @param {QuestionCommentCreateManyArgs} args - Arguments to create many QuestionComments.
     *     @example
     *     // Create many QuestionComments
     *     const questionComment = await prisma.questionComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCommentCreateManyArgs>(
      args?: SelectSubset<T, QuestionCommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionComment.
     * @param {QuestionCommentDeleteArgs} args - Arguments to delete one QuestionComment.
     * @example
     * // Delete one QuestionComment
     * const QuestionComment = await prisma.questionComment.delete({
     *   where: {
     *     // ... filter to delete one QuestionComment
     *   }
     * })
     * 
    **/
    delete<T extends QuestionCommentDeleteArgs>(
      args: SelectSubset<T, QuestionCommentDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>>

    /**
     * Update one QuestionComment.
     * @param {QuestionCommentUpdateArgs} args - Arguments to update one QuestionComment.
     * @example
     * // Update one QuestionComment
     * const questionComment = await prisma.questionComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionCommentUpdateArgs>(
      args: SelectSubset<T, QuestionCommentUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>>

    /**
     * Delete zero or more QuestionComments.
     * @param {QuestionCommentDeleteManyArgs} args - Arguments to filter QuestionComments to delete.
     * @example
     * // Delete a few QuestionComments
     * const { count } = await prisma.questionComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionCommentDeleteManyArgs>(
      args?: SelectSubset<T, QuestionCommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionComments
     * const questionComment = await prisma.questionComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionCommentUpdateManyArgs>(
      args: SelectSubset<T, QuestionCommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionComment.
     * @param {QuestionCommentUpsertArgs} args - Arguments to update or create a QuestionComment.
     * @example
     * // Update or create a QuestionComment
     * const questionComment = await prisma.questionComment.upsert({
     *   create: {
     *     // ... data to create a QuestionComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionComment we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionCommentUpsertArgs>(
      args: SelectSubset<T, QuestionCommentUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionCommentClient<QuestionComment>, Prisma__QuestionCommentClient<QuestionCommentGetPayload<T>>>

    /**
     * Count the number of QuestionComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentCountArgs} args - Arguments to filter QuestionComments to count.
     * @example
     * // Count the number of QuestionComments
     * const count = await prisma.questionComment.count({
     *   where: {
     *     // ... the filter for the QuestionComments we want to count
     *   }
     * })
    **/
    count<T extends QuestionCommentCountArgs>(
      args?: Subset<T, QuestionCommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionCommentAggregateArgs>(args: Subset<T, QuestionCommentAggregateArgs>): PrismaPromise<GetQuestionCommentAggregateType<T>>

    /**
     * Group by QuestionComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCommentGroupByArgs} args - Group by arguments.
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
      T extends QuestionCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionCommentGroupByArgs['orderBy'] }
        : { orderBy?: QuestionCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionCommentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionCommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * QuestionComment findUnique
   */
  export type QuestionCommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * Throw an Error if a QuestionComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuestionComment to fetch.
     * 
    **/
    where: QuestionCommentWhereUniqueInput
  }


  /**
   * QuestionComment findFirst
   */
  export type QuestionCommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * Throw an Error if a QuestionComment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuestionComment to fetch.
     * 
    **/
    where?: QuestionCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionComments to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionComments.
     * 
    **/
    cursor?: QuestionCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionComments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionComments.
     * 
    **/
    distinct?: Enumerable<QuestionCommentScalarFieldEnum>
  }


  /**
   * QuestionComment findMany
   */
  export type QuestionCommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * Filter, which QuestionComments to fetch.
     * 
    **/
    where?: QuestionCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionComments to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionCommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionComments.
     * 
    **/
    cursor?: QuestionCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionComments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionComments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionCommentScalarFieldEnum>
  }


  /**
   * QuestionComment create
   */
  export type QuestionCommentCreateArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * The data needed to create a QuestionComment.
     * 
    **/
    data: XOR<QuestionCommentCreateInput, QuestionCommentUncheckedCreateInput>
  }


  /**
   * QuestionComment createMany
   */
  export type QuestionCommentCreateManyArgs = {
    /**
     * The data used to create many QuestionComments.
     * 
    **/
    data: Enumerable<QuestionCommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuestionComment update
   */
  export type QuestionCommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * The data needed to update a QuestionComment.
     * 
    **/
    data: XOR<QuestionCommentUpdateInput, QuestionCommentUncheckedUpdateInput>
    /**
     * Choose, which QuestionComment to update.
     * 
    **/
    where: QuestionCommentWhereUniqueInput
  }


  /**
   * QuestionComment updateMany
   */
  export type QuestionCommentUpdateManyArgs = {
    /**
     * The data used to update QuestionComments.
     * 
    **/
    data: XOR<QuestionCommentUpdateManyMutationInput, QuestionCommentUncheckedUpdateManyInput>
    /**
     * Filter which QuestionComments to update
     * 
    **/
    where?: QuestionCommentWhereInput
  }


  /**
   * QuestionComment upsert
   */
  export type QuestionCommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * The filter to search for the QuestionComment to update in case it exists.
     * 
    **/
    where: QuestionCommentWhereUniqueInput
    /**
     * In case the QuestionComment found by the `where` argument doesn't exist, create a new QuestionComment with this data.
     * 
    **/
    create: XOR<QuestionCommentCreateInput, QuestionCommentUncheckedCreateInput>
    /**
     * In case the QuestionComment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionCommentUpdateInput, QuestionCommentUncheckedUpdateInput>
  }


  /**
   * QuestionComment delete
   */
  export type QuestionCommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
    /**
     * Filter which QuestionComment to delete.
     * 
    **/
    where: QuestionCommentWhereUniqueInput
  }


  /**
   * QuestionComment deleteMany
   */
  export type QuestionCommentDeleteManyArgs = {
    /**
     * Filter which QuestionComments to delete
     * 
    **/
    where?: QuestionCommentWhereInput
  }


  /**
   * QuestionComment without action
   */
  export type QuestionCommentArgs = {
    /**
     * Select specific fields to fetch from the QuestionComment
     * 
    **/
    select?: QuestionCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionCommentInclude | null
  }



  /**
   * Model QuestionVoter
   */


  export type AggregateQuestionVoter = {
    _count: QuestionVoterCountAggregateOutputType | null
    _avg: QuestionVoterAvgAggregateOutputType | null
    _sum: QuestionVoterSumAggregateOutputType | null
    _min: QuestionVoterMinAggregateOutputType | null
    _max: QuestionVoterMaxAggregateOutputType | null
  }

  export type QuestionVoterAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    state: number | null
  }

  export type QuestionVoterSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    state: number | null
  }

  export type QuestionVoterMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    state: number | null
  }

  export type QuestionVoterMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    userId: string | null
    state: number | null
  }

  export type QuestionVoterCountAggregateOutputType = {
    id: number
    questionId: number
    userId: number
    state: number
    _all: number
  }


  export type QuestionVoterAvgAggregateInputType = {
    id?: true
    questionId?: true
    state?: true
  }

  export type QuestionVoterSumAggregateInputType = {
    id?: true
    questionId?: true
    state?: true
  }

  export type QuestionVoterMinAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    state?: true
  }

  export type QuestionVoterMaxAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    state?: true
  }

  export type QuestionVoterCountAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    state?: true
    _all?: true
  }

  export type QuestionVoterAggregateArgs = {
    /**
     * Filter which QuestionVoter to aggregate.
     * 
    **/
    where?: QuestionVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionVoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionVoters
    **/
    _count?: true | QuestionVoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionVoterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionVoterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionVoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionVoterMaxAggregateInputType
  }

  export type GetQuestionVoterAggregateType<T extends QuestionVoterAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionVoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionVoter[P]>
      : GetScalarType<T[P], AggregateQuestionVoter[P]>
  }




  export type QuestionVoterGroupByArgs = {
    where?: QuestionVoterWhereInput
    orderBy?: Enumerable<QuestionVoterOrderByWithAggregationInput>
    by: Array<QuestionVoterScalarFieldEnum>
    having?: QuestionVoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionVoterCountAggregateInputType | true
    _avg?: QuestionVoterAvgAggregateInputType
    _sum?: QuestionVoterSumAggregateInputType
    _min?: QuestionVoterMinAggregateInputType
    _max?: QuestionVoterMaxAggregateInputType
  }


  export type QuestionVoterGroupByOutputType = {
    id: number
    questionId: number
    userId: string
    state: number
    _count: QuestionVoterCountAggregateOutputType | null
    _avg: QuestionVoterAvgAggregateOutputType | null
    _sum: QuestionVoterSumAggregateOutputType | null
    _min: QuestionVoterMinAggregateOutputType | null
    _max: QuestionVoterMaxAggregateOutputType | null
  }

  type GetQuestionVoterGroupByPayload<T extends QuestionVoterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionVoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionVoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionVoterGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionVoterGroupByOutputType[P]>
        }
      >
    >


  export type QuestionVoterSelect = {
    id?: boolean
    questionId?: boolean
    userId?: boolean
    state?: boolean
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
  }

  export type QuestionVoterInclude = {
    Question?: boolean | QuestionArgs
    User?: boolean | UserArgs
  }

  export type QuestionVoterGetPayload<
    S extends boolean | null | undefined | QuestionVoterArgs,
    U = keyof S
      > = S extends true
        ? QuestionVoter
    : S extends undefined
    ? never
    : S extends QuestionVoterArgs | QuestionVoterFindManyArgs
    ?'include' extends U
    ? QuestionVoter  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof QuestionVoter ? QuestionVoter[P] : never
  } 
    : QuestionVoter
  : QuestionVoter


  type QuestionVoterCountArgs = Merge<
    Omit<QuestionVoterFindManyArgs, 'select' | 'include'> & {
      select?: QuestionVoterCountAggregateInputType | true
    }
  >

  export interface QuestionVoterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one QuestionVoter that matches the filter.
     * @param {QuestionVoterFindUniqueArgs} args - Arguments to find a QuestionVoter
     * @example
     * // Get one QuestionVoter
     * const questionVoter = await prisma.questionVoter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionVoterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionVoterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuestionVoter'> extends True ? CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>> : CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter | null >, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T> | null >>

    /**
     * Find the first QuestionVoter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterFindFirstArgs} args - Arguments to find a QuestionVoter
     * @example
     * // Get one QuestionVoter
     * const questionVoter = await prisma.questionVoter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionVoterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionVoterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuestionVoter'> extends True ? CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>> : CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter | null >, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T> | null >>

    /**
     * Find zero or more QuestionVoters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionVoters
     * const questionVoters = await prisma.questionVoter.findMany()
     * 
     * // Get first 10 QuestionVoters
     * const questionVoters = await prisma.questionVoter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionVoterWithIdOnly = await prisma.questionVoter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionVoterFindManyArgs>(
      args?: SelectSubset<T, QuestionVoterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<QuestionVoter>>, PrismaPromise<Array<QuestionVoterGetPayload<T>>>>

    /**
     * Create a QuestionVoter.
     * @param {QuestionVoterCreateArgs} args - Arguments to create a QuestionVoter.
     * @example
     * // Create one QuestionVoter
     * const QuestionVoter = await prisma.questionVoter.create({
     *   data: {
     *     // ... data to create a QuestionVoter
     *   }
     * })
     * 
    **/
    create<T extends QuestionVoterCreateArgs>(
      args: SelectSubset<T, QuestionVoterCreateArgs>
    ): CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>>

    /**
     * Create many QuestionVoters.
     *     @param {QuestionVoterCreateManyArgs} args - Arguments to create many QuestionVoters.
     *     @example
     *     // Create many QuestionVoters
     *     const questionVoter = await prisma.questionVoter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionVoterCreateManyArgs>(
      args?: SelectSubset<T, QuestionVoterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionVoter.
     * @param {QuestionVoterDeleteArgs} args - Arguments to delete one QuestionVoter.
     * @example
     * // Delete one QuestionVoter
     * const QuestionVoter = await prisma.questionVoter.delete({
     *   where: {
     *     // ... filter to delete one QuestionVoter
     *   }
     * })
     * 
    **/
    delete<T extends QuestionVoterDeleteArgs>(
      args: SelectSubset<T, QuestionVoterDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>>

    /**
     * Update one QuestionVoter.
     * @param {QuestionVoterUpdateArgs} args - Arguments to update one QuestionVoter.
     * @example
     * // Update one QuestionVoter
     * const questionVoter = await prisma.questionVoter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionVoterUpdateArgs>(
      args: SelectSubset<T, QuestionVoterUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>>

    /**
     * Delete zero or more QuestionVoters.
     * @param {QuestionVoterDeleteManyArgs} args - Arguments to filter QuestionVoters to delete.
     * @example
     * // Delete a few QuestionVoters
     * const { count } = await prisma.questionVoter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionVoterDeleteManyArgs>(
      args?: SelectSubset<T, QuestionVoterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionVoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionVoters
     * const questionVoter = await prisma.questionVoter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionVoterUpdateManyArgs>(
      args: SelectSubset<T, QuestionVoterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionVoter.
     * @param {QuestionVoterUpsertArgs} args - Arguments to update or create a QuestionVoter.
     * @example
     * // Update or create a QuestionVoter
     * const questionVoter = await prisma.questionVoter.upsert({
     *   create: {
     *     // ... data to create a QuestionVoter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionVoter we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionVoterUpsertArgs>(
      args: SelectSubset<T, QuestionVoterUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionVoterClient<QuestionVoter>, Prisma__QuestionVoterClient<QuestionVoterGetPayload<T>>>

    /**
     * Count the number of QuestionVoters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterCountArgs} args - Arguments to filter QuestionVoters to count.
     * @example
     * // Count the number of QuestionVoters
     * const count = await prisma.questionVoter.count({
     *   where: {
     *     // ... the filter for the QuestionVoters we want to count
     *   }
     * })
    **/
    count<T extends QuestionVoterCountArgs>(
      args?: Subset<T, QuestionVoterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionVoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionVoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionVoterAggregateArgs>(args: Subset<T, QuestionVoterAggregateArgs>): PrismaPromise<GetQuestionVoterAggregateType<T>>

    /**
     * Group by QuestionVoter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionVoterGroupByArgs} args - Group by arguments.
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
      T extends QuestionVoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionVoterGroupByArgs['orderBy'] }
        : { orderBy?: QuestionVoterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionVoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionVoterGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionVoter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionVoterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * QuestionVoter findUnique
   */
  export type QuestionVoterFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * Throw an Error if a QuestionVoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuestionVoter to fetch.
     * 
    **/
    where: QuestionVoterWhereUniqueInput
  }


  /**
   * QuestionVoter findFirst
   */
  export type QuestionVoterFindFirstArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * Throw an Error if a QuestionVoter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which QuestionVoter to fetch.
     * 
    **/
    where?: QuestionVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionVoters.
     * 
    **/
    cursor?: QuestionVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionVoters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionVoters.
     * 
    **/
    distinct?: Enumerable<QuestionVoterScalarFieldEnum>
  }


  /**
   * QuestionVoter findMany
   */
  export type QuestionVoterFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * Filter, which QuestionVoters to fetch.
     * 
    **/
    where?: QuestionVoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionVoters to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionVoterOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionVoters.
     * 
    **/
    cursor?: QuestionVoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionVoters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionVoters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionVoterScalarFieldEnum>
  }


  /**
   * QuestionVoter create
   */
  export type QuestionVoterCreateArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * The data needed to create a QuestionVoter.
     * 
    **/
    data: XOR<QuestionVoterCreateInput, QuestionVoterUncheckedCreateInput>
  }


  /**
   * QuestionVoter createMany
   */
  export type QuestionVoterCreateManyArgs = {
    /**
     * The data used to create many QuestionVoters.
     * 
    **/
    data: Enumerable<QuestionVoterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuestionVoter update
   */
  export type QuestionVoterUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * The data needed to update a QuestionVoter.
     * 
    **/
    data: XOR<QuestionVoterUpdateInput, QuestionVoterUncheckedUpdateInput>
    /**
     * Choose, which QuestionVoter to update.
     * 
    **/
    where: QuestionVoterWhereUniqueInput
  }


  /**
   * QuestionVoter updateMany
   */
  export type QuestionVoterUpdateManyArgs = {
    /**
     * The data used to update QuestionVoters.
     * 
    **/
    data: XOR<QuestionVoterUpdateManyMutationInput, QuestionVoterUncheckedUpdateManyInput>
    /**
     * Filter which QuestionVoters to update
     * 
    **/
    where?: QuestionVoterWhereInput
  }


  /**
   * QuestionVoter upsert
   */
  export type QuestionVoterUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * The filter to search for the QuestionVoter to update in case it exists.
     * 
    **/
    where: QuestionVoterWhereUniqueInput
    /**
     * In case the QuestionVoter found by the `where` argument doesn't exist, create a new QuestionVoter with this data.
     * 
    **/
    create: XOR<QuestionVoterCreateInput, QuestionVoterUncheckedCreateInput>
    /**
     * In case the QuestionVoter was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionVoterUpdateInput, QuestionVoterUncheckedUpdateInput>
  }


  /**
   * QuestionVoter delete
   */
  export type QuestionVoterDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
    /**
     * Filter which QuestionVoter to delete.
     * 
    **/
    where: QuestionVoterWhereUniqueInput
  }


  /**
   * QuestionVoter deleteMany
   */
  export type QuestionVoterDeleteManyArgs = {
    /**
     * Filter which QuestionVoters to delete
     * 
    **/
    where?: QuestionVoterWhereInput
  }


  /**
   * QuestionVoter without action
   */
  export type QuestionVoterArgs = {
    /**
     * Select specific fields to fetch from the QuestionVoter
     * 
    **/
    select?: QuestionVoterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionVoterInclude | null
  }



  /**
   * Model Question
   */


  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    score: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    score: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    facebookId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    score: number
    deleted: number
    createdAt: number
    updatedAt: number
    facebookId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    score?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    score?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    score?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    facebookId?: true
    _all?: true
  }

  export type QuestionAggregateArgs = {
    /**
     * Filter which Question to aggregate.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs = {
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>
    by: Array<QuestionScalarFieldEnum>
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }


  export type QuestionGroupByOutputType = {
    id: number
    userId: string
    title: string
    content: string
    score: number
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    facebookId: string | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    score?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facebookId?: boolean
    User?: boolean | UserArgs
    Answer?: boolean | AnswerFindManyArgs
    QuestionComment?: boolean | QuestionCommentFindManyArgs
    QuestionVoter?: boolean | QuestionVoterFindManyArgs
    TagsOnQuestions?: boolean | TagsOnQuestionsFindManyArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionInclude = {
    User?: boolean | UserArgs
    Answer?: boolean | AnswerFindManyArgs
    QuestionComment?: boolean | QuestionCommentFindManyArgs
    QuestionVoter?: boolean | QuestionVoterFindManyArgs
    TagsOnQuestions?: boolean | TagsOnQuestionsFindManyArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<
    S extends boolean | null | undefined | QuestionArgs,
    U = keyof S
      > = S extends true
        ? Question
    : S extends undefined
    ? never
    : S extends QuestionArgs | QuestionFindManyArgs
    ?'include' extends U
    ? Question  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Answer' ? Array < AnswerGetPayload<S['include'][P]>>  :
        P extends 'QuestionComment' ? Array < QuestionCommentGetPayload<S['include'][P]>>  :
        P extends 'QuestionVoter' ? Array < QuestionVoterGetPayload<S['include'][P]>>  :
        P extends 'TagsOnQuestions' ? Array < TagsOnQuestionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Answer' ? Array < AnswerGetPayload<S['select'][P]>>  :
        P extends 'QuestionComment' ? Array < QuestionCommentGetPayload<S['select'][P]>>  :
        P extends 'QuestionVoter' ? Array < QuestionVoterGetPayload<S['select'][P]>>  :
        P extends 'TagsOnQuestions' ? Array < TagsOnQuestionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Question ? Question[P] : never
  } 
    : Question
  : Question


  type QuestionCountArgs = Merge<
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }
  >

  export interface QuestionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Question'> extends True ? CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>> : CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Question'> extends True ? CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>> : CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Question>>, PrismaPromise<Array<QuestionGetPayload<T>>>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs>(
      args?: SelectSubset<T, QuestionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Answer<T extends AnswerFindManyArgs = {}>(args?: Subset<T, AnswerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>;

    QuestionComment<T extends QuestionCommentFindManyArgs = {}>(args?: Subset<T, QuestionCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<QuestionComment>>, PrismaPromise<Array<QuestionCommentGetPayload<T>>>>;

    QuestionVoter<T extends QuestionVoterFindManyArgs = {}>(args?: Subset<T, QuestionVoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<QuestionVoter>>, PrismaPromise<Array<QuestionVoterGetPayload<T>>>>;

    TagsOnQuestions<T extends TagsOnQuestionsFindManyArgs = {}>(args?: Subset<T, TagsOnQuestionsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnQuestions>>, PrismaPromise<Array<TagsOnQuestionsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Throw an Error if a Question can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Question to fetch.
     * 
    **/
    where: QuestionWhereUniqueInput
  }


  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Throw an Error if a Question can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Question to fetch.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     * 
    **/
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The data needed to create a Question.
     * 
    **/
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs = {
    /**
     * The data used to create many Questions.
     * 
    **/
    data: Enumerable<QuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The data needed to update a Question.
     * 
    **/
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     * 
    **/
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs = {
    /**
     * The data used to update Questions.
     * 
    **/
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     * 
    **/
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The filter to search for the Question to update in case it exists.
     * 
    **/
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     * 
    **/
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter which Question to delete.
     * 
    **/
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     * 
    **/
    where?: QuestionWhereInput
  }


  /**
   * Question without action
   */
  export type QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByWithAggregationInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect = {
    id?: boolean
    name?: boolean
    TagsOnQuestions?: boolean | TagsOnQuestionsFindManyArgs
    TagsOnUsers?: boolean | TagsOnUsersFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagInclude = {
    TagsOnQuestions?: boolean | TagsOnQuestionsFindManyArgs
    TagsOnUsers?: boolean | TagsOnUsersFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'TagsOnQuestions' ? Array < TagsOnQuestionsGetPayload<S['include'][P]>>  :
        P extends 'TagsOnUsers' ? Array < TagsOnUsersGetPayload<S['include'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'TagsOnQuestions' ? Array < TagsOnQuestionsGetPayload<S['select'][P]>>  :
        P extends 'TagsOnUsers' ? Array < TagsOnUsersGetPayload<S['select'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tag ? Tag[P] : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    TagsOnQuestions<T extends TagsOnQuestionsFindManyArgs = {}>(args?: Subset<T, TagsOnQuestionsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnQuestions>>, PrismaPromise<Array<TagsOnQuestionsGetPayload<T>>>>;

    TagsOnUsers<T extends TagsOnUsersFindManyArgs = {}>(args?: Subset<T, TagsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnUsers>>, PrismaPromise<Array<TagsOnUsersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    /**
     * The data used to create many Tags.
     * 
    **/
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    /**
     * The data used to update Tags.
     * 
    **/
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    /**
     * Filter which Tags to delete
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reputation: number | null
  }

  export type UserSumAggregateOutputType = {
    reputation: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    reputation: number | null
    description: string | null
    joiningDate: Date | null
    displayName: string | null
    photoURL: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    reputation: number | null
    description: string | null
    joiningDate: Date | null
    displayName: string | null
    photoURL: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    reputation: number
    description: number
    joiningDate: number
    displayName: number
    photoURL: number
    phoneNumber: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reputation?: true
  }

  export type UserSumAggregateInputType = {
    reputation?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    reputation?: true
    description?: true
    joiningDate?: true
    displayName?: true
    photoURL?: true
    phoneNumber?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    reputation?: true
    description?: true
    joiningDate?: true
    displayName?: true
    photoURL?: true
    phoneNumber?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    reputation?: true
    description?: true
    joiningDate?: true
    displayName?: true
    photoURL?: true
    phoneNumber?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    uid: string
    reputation: number
    description: string | null
    joiningDate: Date
    displayName: string
    photoURL: string | null
    phoneNumber: string | null
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    uid?: boolean
    reputation?: boolean
    description?: boolean
    joiningDate?: boolean
    displayName?: boolean
    photoURL?: boolean
    phoneNumber?: boolean
    email?: boolean
    Answer?: boolean | AnswerFindManyArgs
    AnswerComment?: boolean | AnswerCommentFindManyArgs
    AnswerVoter?: boolean | AnswerVoterFindManyArgs
    Question?: boolean | QuestionFindManyArgs
    QuestionComment?: boolean | QuestionCommentFindManyArgs
    QuestionVoter?: boolean | QuestionVoterFindManyArgs
    InterestedTag?: boolean | TagsOnUsersFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Answer?: boolean | AnswerFindManyArgs
    AnswerComment?: boolean | AnswerCommentFindManyArgs
    AnswerVoter?: boolean | AnswerVoterFindManyArgs
    Question?: boolean | QuestionFindManyArgs
    QuestionComment?: boolean | QuestionCommentFindManyArgs
    QuestionVoter?: boolean | QuestionVoterFindManyArgs
    InterestedTag?: boolean | TagsOnUsersFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Answer' ? Array < AnswerGetPayload<S['include'][P]>>  :
        P extends 'AnswerComment' ? Array < AnswerCommentGetPayload<S['include'][P]>>  :
        P extends 'AnswerVoter' ? Array < AnswerVoterGetPayload<S['include'][P]>>  :
        P extends 'Question' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'QuestionComment' ? Array < QuestionCommentGetPayload<S['include'][P]>>  :
        P extends 'QuestionVoter' ? Array < QuestionVoterGetPayload<S['include'][P]>>  :
        P extends 'InterestedTag' ? Array < TagsOnUsersGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Answer' ? Array < AnswerGetPayload<S['select'][P]>>  :
        P extends 'AnswerComment' ? Array < AnswerCommentGetPayload<S['select'][P]>>  :
        P extends 'AnswerVoter' ? Array < AnswerVoterGetPayload<S['select'][P]>>  :
        P extends 'Question' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'QuestionComment' ? Array < QuestionCommentGetPayload<S['select'][P]>>  :
        P extends 'QuestionVoter' ? Array < QuestionVoterGetPayload<S['select'][P]>>  :
        P extends 'InterestedTag' ? Array < TagsOnUsersGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Answer<T extends AnswerFindManyArgs = {}>(args?: Subset<T, AnswerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>;

    AnswerComment<T extends AnswerCommentFindManyArgs = {}>(args?: Subset<T, AnswerCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AnswerComment>>, PrismaPromise<Array<AnswerCommentGetPayload<T>>>>;

    AnswerVoter<T extends AnswerVoterFindManyArgs = {}>(args?: Subset<T, AnswerVoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AnswerVoter>>, PrismaPromise<Array<AnswerVoterGetPayload<T>>>>;

    Question<T extends QuestionFindManyArgs = {}>(args?: Subset<T, QuestionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Question>>, PrismaPromise<Array<QuestionGetPayload<T>>>>;

    QuestionComment<T extends QuestionCommentFindManyArgs = {}>(args?: Subset<T, QuestionCommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<QuestionComment>>, PrismaPromise<Array<QuestionCommentGetPayload<T>>>>;

    QuestionVoter<T extends QuestionVoterFindManyArgs = {}>(args?: Subset<T, QuestionVoterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<QuestionVoter>>, PrismaPromise<Array<QuestionVoterGetPayload<T>>>>;

    InterestedTag<T extends TagsOnUsersFindManyArgs = {}>(args?: Subset<T, TagsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TagsOnUsers>>, PrismaPromise<Array<TagsOnUsersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Document
   */


  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    url: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    _all?: true
  }

  export type DocumentAggregateArgs = {
    /**
     * Filter which Document to aggregate.
     * 
    **/
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     * 
    **/
    orderBy?: Enumerable<DocumentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs = {
    where?: DocumentWhereInput
    orderBy?: Enumerable<DocumentOrderByWithAggregationInput>
    by: Array<DocumentScalarFieldEnum>
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }


  export type DocumentGroupByOutputType = {
    id: number
    title: string
    url: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect = {
    id?: boolean
    title?: boolean
    url?: boolean
  }

  export type DocumentGetPayload<
    S extends boolean | null | undefined | DocumentArgs,
    U = keyof S
      > = S extends true
        ? Document
    : S extends undefined
    ? never
    : S extends DocumentArgs | DocumentFindManyArgs
    ?'include' extends U
    ? Document 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Document ? Document[P] : never
  } 
    : Document
  : Document


  type DocumentCountArgs = Merge<
    Omit<DocumentFindManyArgs, 'select' | 'include'> & {
      select?: DocumentCountAggregateInputType | true
    }
  >

  export interface DocumentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DocumentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DocumentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Document'> extends True ? CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>> : CheckSelect<T, Prisma__DocumentClient<Document | null >, Prisma__DocumentClient<DocumentGetPayload<T> | null >>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DocumentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DocumentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Document'> extends True ? CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>> : CheckSelect<T, Prisma__DocumentClient<Document | null >, Prisma__DocumentClient<DocumentGetPayload<T> | null >>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DocumentFindManyArgs>(
      args?: SelectSubset<T, DocumentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Document>>, PrismaPromise<Array<DocumentGetPayload<T>>>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
    **/
    create<T extends DocumentCreateArgs>(
      args: SelectSubset<T, DocumentCreateArgs>
    ): CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>>

    /**
     * Create many Documents.
     *     @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     *     @example
     *     // Create many Documents
     *     const document = await prisma.document.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DocumentCreateManyArgs>(
      args?: SelectSubset<T, DocumentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
    **/
    delete<T extends DocumentDeleteArgs>(
      args: SelectSubset<T, DocumentDeleteArgs>
    ): CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DocumentUpdateArgs>(
      args: SelectSubset<T, DocumentUpdateArgs>
    ): CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DocumentDeleteManyArgs>(
      args?: SelectSubset<T, DocumentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DocumentUpdateManyArgs>(
      args: SelectSubset<T, DocumentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
    **/
    upsert<T extends DocumentUpsertArgs>(
      args: SelectSubset<T, DocumentUpsertArgs>
    ): CheckSelect<T, Prisma__DocumentClient<Document>, Prisma__DocumentClient<DocumentGetPayload<T>>>

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DocumentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * Throw an Error if a Document can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Document to fetch.
     * 
    **/
    where: DocumentWhereUniqueInput
  }


  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * Throw an Error if a Document can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Document to fetch.
     * 
    **/
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     * 
    **/
    orderBy?: Enumerable<DocumentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     * 
    **/
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     * 
    **/
    distinct?: Enumerable<DocumentScalarFieldEnum>
  }


  /**
   * Document findMany
   */
  export type DocumentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * Filter, which Documents to fetch.
     * 
    **/
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     * 
    **/
    orderBy?: Enumerable<DocumentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     * 
    **/
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DocumentScalarFieldEnum>
  }


  /**
   * Document create
   */
  export type DocumentCreateArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * The data needed to create a Document.
     * 
    **/
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }


  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs = {
    /**
     * The data used to create many Documents.
     * 
    **/
    data: Enumerable<DocumentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Document update
   */
  export type DocumentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * The data needed to update a Document.
     * 
    **/
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     * 
    **/
    where: DocumentWhereUniqueInput
  }


  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs = {
    /**
     * The data used to update Documents.
     * 
    **/
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     * 
    **/
    where?: DocumentWhereInput
  }


  /**
   * Document upsert
   */
  export type DocumentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * The filter to search for the Document to update in case it exists.
     * 
    **/
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     * 
    **/
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }


  /**
   * Document delete
   */
  export type DocumentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
    /**
     * Filter which Document to delete.
     * 
    **/
    where: DocumentWhereUniqueInput
  }


  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs = {
    /**
     * Filter which Documents to delete
     * 
    **/
    where?: DocumentWhereInput
  }


  /**
   * Document without action
   */
  export type DocumentArgs = {
    /**
     * Select specific fields to fetch from the Document
     * 
    **/
    select?: DocumentSelect | null
  }



  /**
   * Model TagsOnQuestions
   */


  export type AggregateTagsOnQuestions = {
    _count: TagsOnQuestionsCountAggregateOutputType | null
    _avg: TagsOnQuestionsAvgAggregateOutputType | null
    _sum: TagsOnQuestionsSumAggregateOutputType | null
    _min: TagsOnQuestionsMinAggregateOutputType | null
    _max: TagsOnQuestionsMaxAggregateOutputType | null
  }

  export type TagsOnQuestionsAvgAggregateOutputType = {
    questionId: number | null
    tagId: number | null
  }

  export type TagsOnQuestionsSumAggregateOutputType = {
    questionId: number | null
    tagId: number | null
  }

  export type TagsOnQuestionsMinAggregateOutputType = {
    questionId: number | null
    tagId: number | null
  }

  export type TagsOnQuestionsMaxAggregateOutputType = {
    questionId: number | null
    tagId: number | null
  }

  export type TagsOnQuestionsCountAggregateOutputType = {
    questionId: number
    tagId: number
    _all: number
  }


  export type TagsOnQuestionsAvgAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type TagsOnQuestionsSumAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type TagsOnQuestionsMinAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type TagsOnQuestionsMaxAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type TagsOnQuestionsCountAggregateInputType = {
    questionId?: true
    tagId?: true
    _all?: true
  }

  export type TagsOnQuestionsAggregateArgs = {
    /**
     * Filter which TagsOnQuestions to aggregate.
     * 
    **/
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnQuestionsOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnQuestions
    **/
    _count?: true | TagsOnQuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnQuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnQuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnQuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnQuestionsMaxAggregateInputType
  }

  export type GetTagsOnQuestionsAggregateType<T extends TagsOnQuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnQuestions[P]>
      : GetScalarType<T[P], AggregateTagsOnQuestions[P]>
  }




  export type TagsOnQuestionsGroupByArgs = {
    where?: TagsOnQuestionsWhereInput
    orderBy?: Enumerable<TagsOnQuestionsOrderByWithAggregationInput>
    by: Array<TagsOnQuestionsScalarFieldEnum>
    having?: TagsOnQuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnQuestionsCountAggregateInputType | true
    _avg?: TagsOnQuestionsAvgAggregateInputType
    _sum?: TagsOnQuestionsSumAggregateInputType
    _min?: TagsOnQuestionsMinAggregateInputType
    _max?: TagsOnQuestionsMaxAggregateInputType
  }


  export type TagsOnQuestionsGroupByOutputType = {
    questionId: number
    tagId: number
    _count: TagsOnQuestionsCountAggregateOutputType | null
    _avg: TagsOnQuestionsAvgAggregateOutputType | null
    _sum: TagsOnQuestionsSumAggregateOutputType | null
    _min: TagsOnQuestionsMinAggregateOutputType | null
    _max: TagsOnQuestionsMaxAggregateOutputType | null
  }

  type GetTagsOnQuestionsGroupByPayload<T extends TagsOnQuestionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagsOnQuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnQuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnQuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnQuestionsGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnQuestionsSelect = {
    questionId?: boolean
    tagId?: boolean
    Question?: boolean | QuestionArgs
    Tag?: boolean | TagArgs
  }

  export type TagsOnQuestionsInclude = {
    Question?: boolean | QuestionArgs
    Tag?: boolean | TagArgs
  }

  export type TagsOnQuestionsGetPayload<
    S extends boolean | null | undefined | TagsOnQuestionsArgs,
    U = keyof S
      > = S extends true
        ? TagsOnQuestions
    : S extends undefined
    ? never
    : S extends TagsOnQuestionsArgs | TagsOnQuestionsFindManyArgs
    ?'include' extends U
    ? TagsOnQuestions  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'Tag' ? TagGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'Tag' ? TagGetPayload<S['select'][P]> :  P extends keyof TagsOnQuestions ? TagsOnQuestions[P] : never
  } 
    : TagsOnQuestions
  : TagsOnQuestions


  type TagsOnQuestionsCountArgs = Merge<
    Omit<TagsOnQuestionsFindManyArgs, 'select' | 'include'> & {
      select?: TagsOnQuestionsCountAggregateInputType | true
    }
  >

  export interface TagsOnQuestionsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TagsOnQuestions that matches the filter.
     * @param {TagsOnQuestionsFindUniqueArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsOnQuestionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagsOnQuestionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TagsOnQuestions'> extends True ? CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions | null >, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T> | null >>

    /**
     * Find the first TagsOnQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsFindFirstArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsOnQuestionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagsOnQuestionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TagsOnQuestions'> extends True ? CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions | null >, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T> | null >>

    /**
     * Find zero or more TagsOnQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany()
     * 
     * // Get first 10 TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const tagsOnQuestionsWithQuestionIdOnly = await prisma.tagsOnQuestions.findMany({ select: { questionId: true } })
     * 
    **/
    findMany<T extends TagsOnQuestionsFindManyArgs>(
      args?: SelectSubset<T, TagsOnQuestionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TagsOnQuestions>>, PrismaPromise<Array<TagsOnQuestionsGetPayload<T>>>>

    /**
     * Create a TagsOnQuestions.
     * @param {TagsOnQuestionsCreateArgs} args - Arguments to create a TagsOnQuestions.
     * @example
     * // Create one TagsOnQuestions
     * const TagsOnQuestions = await prisma.tagsOnQuestions.create({
     *   data: {
     *     // ... data to create a TagsOnQuestions
     *   }
     * })
     * 
    **/
    create<T extends TagsOnQuestionsCreateArgs>(
      args: SelectSubset<T, TagsOnQuestionsCreateArgs>
    ): CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>>

    /**
     * Create many TagsOnQuestions.
     *     @param {TagsOnQuestionsCreateManyArgs} args - Arguments to create many TagsOnQuestions.
     *     @example
     *     // Create many TagsOnQuestions
     *     const tagsOnQuestions = await prisma.tagsOnQuestions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsOnQuestionsCreateManyArgs>(
      args?: SelectSubset<T, TagsOnQuestionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnQuestions.
     * @param {TagsOnQuestionsDeleteArgs} args - Arguments to delete one TagsOnQuestions.
     * @example
     * // Delete one TagsOnQuestions
     * const TagsOnQuestions = await prisma.tagsOnQuestions.delete({
     *   where: {
     *     // ... filter to delete one TagsOnQuestions
     *   }
     * })
     * 
    **/
    delete<T extends TagsOnQuestionsDeleteArgs>(
      args: SelectSubset<T, TagsOnQuestionsDeleteArgs>
    ): CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>>

    /**
     * Update one TagsOnQuestions.
     * @param {TagsOnQuestionsUpdateArgs} args - Arguments to update one TagsOnQuestions.
     * @example
     * // Update one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsOnQuestionsUpdateArgs>(
      args: SelectSubset<T, TagsOnQuestionsUpdateArgs>
    ): CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>>

    /**
     * Delete zero or more TagsOnQuestions.
     * @param {TagsOnQuestionsDeleteManyArgs} args - Arguments to filter TagsOnQuestions to delete.
     * @example
     * // Delete a few TagsOnQuestions
     * const { count } = await prisma.tagsOnQuestions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsOnQuestionsDeleteManyArgs>(
      args?: SelectSubset<T, TagsOnQuestionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsOnQuestionsUpdateManyArgs>(
      args: SelectSubset<T, TagsOnQuestionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnQuestions.
     * @param {TagsOnQuestionsUpsertArgs} args - Arguments to update or create a TagsOnQuestions.
     * @example
     * // Update or create a TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.upsert({
     *   create: {
     *     // ... data to create a TagsOnQuestions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnQuestions we want to update
     *   }
     * })
    **/
    upsert<T extends TagsOnQuestionsUpsertArgs>(
      args: SelectSubset<T, TagsOnQuestionsUpsertArgs>
    ): CheckSelect<T, Prisma__TagsOnQuestionsClient<TagsOnQuestions>, Prisma__TagsOnQuestionsClient<TagsOnQuestionsGetPayload<T>>>

    /**
     * Count the number of TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsCountArgs} args - Arguments to filter TagsOnQuestions to count.
     * @example
     * // Count the number of TagsOnQuestions
     * const count = await prisma.tagsOnQuestions.count({
     *   where: {
     *     // ... the filter for the TagsOnQuestions we want to count
     *   }
     * })
    **/
    count<T extends TagsOnQuestionsCountArgs>(
      args?: Subset<T, TagsOnQuestionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnQuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsOnQuestionsAggregateArgs>(args: Subset<T, TagsOnQuestionsAggregateArgs>): PrismaPromise<GetTagsOnQuestionsAggregateType<T>>

    /**
     * Group by TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsGroupByArgs} args - Group by arguments.
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
      T extends TagsOnQuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnQuestionsGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnQuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagsOnQuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnQuestionsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnQuestions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagsOnQuestionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>;

    Tag<T extends TagArgs = {}>(args?: Subset<T, TagArgs>): CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TagsOnQuestions findUnique
   */
  export type TagsOnQuestionsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * Throw an Error if a TagsOnQuestions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnQuestions to fetch.
     * 
    **/
    where: TagsOnQuestionsWhereUniqueInput
  }


  /**
   * TagsOnQuestions findFirst
   */
  export type TagsOnQuestionsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * Throw an Error if a TagsOnQuestions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnQuestions to fetch.
     * 
    **/
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnQuestionsOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnQuestions.
     * 
    **/
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnQuestions.
     * 
    **/
    distinct?: Enumerable<TagsOnQuestionsScalarFieldEnum>
  }


  /**
   * TagsOnQuestions findMany
   */
  export type TagsOnQuestionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     * 
    **/
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnQuestionsOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnQuestions.
     * 
    **/
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagsOnQuestionsScalarFieldEnum>
  }


  /**
   * TagsOnQuestions create
   */
  export type TagsOnQuestionsCreateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * The data needed to create a TagsOnQuestions.
     * 
    **/
    data: XOR<TagsOnQuestionsCreateInput, TagsOnQuestionsUncheckedCreateInput>
  }


  /**
   * TagsOnQuestions createMany
   */
  export type TagsOnQuestionsCreateManyArgs = {
    /**
     * The data used to create many TagsOnQuestions.
     * 
    **/
    data: Enumerable<TagsOnQuestionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TagsOnQuestions update
   */
  export type TagsOnQuestionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * The data needed to update a TagsOnQuestions.
     * 
    **/
    data: XOR<TagsOnQuestionsUpdateInput, TagsOnQuestionsUncheckedUpdateInput>
    /**
     * Choose, which TagsOnQuestions to update.
     * 
    **/
    where: TagsOnQuestionsWhereUniqueInput
  }


  /**
   * TagsOnQuestions updateMany
   */
  export type TagsOnQuestionsUpdateManyArgs = {
    /**
     * The data used to update TagsOnQuestions.
     * 
    **/
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnQuestions to update
     * 
    **/
    where?: TagsOnQuestionsWhereInput
  }


  /**
   * TagsOnQuestions upsert
   */
  export type TagsOnQuestionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * The filter to search for the TagsOnQuestions to update in case it exists.
     * 
    **/
    where: TagsOnQuestionsWhereUniqueInput
    /**
     * In case the TagsOnQuestions found by the `where` argument doesn't exist, create a new TagsOnQuestions with this data.
     * 
    **/
    create: XOR<TagsOnQuestionsCreateInput, TagsOnQuestionsUncheckedCreateInput>
    /**
     * In case the TagsOnQuestions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagsOnQuestionsUpdateInput, TagsOnQuestionsUncheckedUpdateInput>
  }


  /**
   * TagsOnQuestions delete
   */
  export type TagsOnQuestionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
    /**
     * Filter which TagsOnQuestions to delete.
     * 
    **/
    where: TagsOnQuestionsWhereUniqueInput
  }


  /**
   * TagsOnQuestions deleteMany
   */
  export type TagsOnQuestionsDeleteManyArgs = {
    /**
     * Filter which TagsOnQuestions to delete
     * 
    **/
    where?: TagsOnQuestionsWhereInput
  }


  /**
   * TagsOnQuestions without action
   */
  export type TagsOnQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     * 
    **/
    select?: TagsOnQuestionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnQuestionsInclude | null
  }



  /**
   * Model TagsOnUsers
   */


  export type AggregateTagsOnUsers = {
    _count: TagsOnUsersCountAggregateOutputType | null
    _avg: TagsOnUsersAvgAggregateOutputType | null
    _sum: TagsOnUsersSumAggregateOutputType | null
    _min: TagsOnUsersMinAggregateOutputType | null
    _max: TagsOnUsersMaxAggregateOutputType | null
  }

  export type TagsOnUsersAvgAggregateOutputType = {
    tagId: number | null
  }

  export type TagsOnUsersSumAggregateOutputType = {
    tagId: number | null
  }

  export type TagsOnUsersMinAggregateOutputType = {
    tagId: number | null
    userId: string | null
  }

  export type TagsOnUsersMaxAggregateOutputType = {
    tagId: number | null
    userId: string | null
  }

  export type TagsOnUsersCountAggregateOutputType = {
    tagId: number
    userId: number
    _all: number
  }


  export type TagsOnUsersAvgAggregateInputType = {
    tagId?: true
  }

  export type TagsOnUsersSumAggregateInputType = {
    tagId?: true
  }

  export type TagsOnUsersMinAggregateInputType = {
    tagId?: true
    userId?: true
  }

  export type TagsOnUsersMaxAggregateInputType = {
    tagId?: true
    userId?: true
  }

  export type TagsOnUsersCountAggregateInputType = {
    tagId?: true
    userId?: true
    _all?: true
  }

  export type TagsOnUsersAggregateArgs = {
    /**
     * Filter which TagsOnUsers to aggregate.
     * 
    **/
    where?: TagsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnUsersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnUsers
    **/
    _count?: true | TagsOnUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnUsersMaxAggregateInputType
  }

  export type GetTagsOnUsersAggregateType<T extends TagsOnUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnUsers[P]>
      : GetScalarType<T[P], AggregateTagsOnUsers[P]>
  }




  export type TagsOnUsersGroupByArgs = {
    where?: TagsOnUsersWhereInput
    orderBy?: Enumerable<TagsOnUsersOrderByWithAggregationInput>
    by: Array<TagsOnUsersScalarFieldEnum>
    having?: TagsOnUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnUsersCountAggregateInputType | true
    _avg?: TagsOnUsersAvgAggregateInputType
    _sum?: TagsOnUsersSumAggregateInputType
    _min?: TagsOnUsersMinAggregateInputType
    _max?: TagsOnUsersMaxAggregateInputType
  }


  export type TagsOnUsersGroupByOutputType = {
    tagId: number
    userId: string
    _count: TagsOnUsersCountAggregateOutputType | null
    _avg: TagsOnUsersAvgAggregateOutputType | null
    _sum: TagsOnUsersSumAggregateOutputType | null
    _min: TagsOnUsersMinAggregateOutputType | null
    _max: TagsOnUsersMaxAggregateOutputType | null
  }

  type GetTagsOnUsersGroupByPayload<T extends TagsOnUsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagsOnUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnUsersGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnUsersGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnUsersSelect = {
    tagId?: boolean
    userId?: boolean
    Tag?: boolean | TagArgs
    User?: boolean | UserArgs
  }

  export type TagsOnUsersInclude = {
    Tag?: boolean | TagArgs
    User?: boolean | UserArgs
  }

  export type TagsOnUsersGetPayload<
    S extends boolean | null | undefined | TagsOnUsersArgs,
    U = keyof S
      > = S extends true
        ? TagsOnUsers
    : S extends undefined
    ? never
    : S extends TagsOnUsersArgs | TagsOnUsersFindManyArgs
    ?'include' extends U
    ? TagsOnUsers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Tag' ? TagGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Tag' ? TagGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof TagsOnUsers ? TagsOnUsers[P] : never
  } 
    : TagsOnUsers
  : TagsOnUsers


  type TagsOnUsersCountArgs = Merge<
    Omit<TagsOnUsersFindManyArgs, 'select' | 'include'> & {
      select?: TagsOnUsersCountAggregateInputType | true
    }
  >

  export interface TagsOnUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TagsOnUsers that matches the filter.
     * @param {TagsOnUsersFindUniqueArgs} args - Arguments to find a TagsOnUsers
     * @example
     * // Get one TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsOnUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagsOnUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TagsOnUsers'> extends True ? CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers | null >, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T> | null >>

    /**
     * Find the first TagsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersFindFirstArgs} args - Arguments to find a TagsOnUsers
     * @example
     * // Get one TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsOnUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagsOnUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TagsOnUsers'> extends True ? CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers | null >, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T> | null >>

    /**
     * Find zero or more TagsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.findMany()
     * 
     * // Get first 10 TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const tagsOnUsersWithTagIdOnly = await prisma.tagsOnUsers.findMany({ select: { tagId: true } })
     * 
    **/
    findMany<T extends TagsOnUsersFindManyArgs>(
      args?: SelectSubset<T, TagsOnUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TagsOnUsers>>, PrismaPromise<Array<TagsOnUsersGetPayload<T>>>>

    /**
     * Create a TagsOnUsers.
     * @param {TagsOnUsersCreateArgs} args - Arguments to create a TagsOnUsers.
     * @example
     * // Create one TagsOnUsers
     * const TagsOnUsers = await prisma.tagsOnUsers.create({
     *   data: {
     *     // ... data to create a TagsOnUsers
     *   }
     * })
     * 
    **/
    create<T extends TagsOnUsersCreateArgs>(
      args: SelectSubset<T, TagsOnUsersCreateArgs>
    ): CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>>

    /**
     * Create many TagsOnUsers.
     *     @param {TagsOnUsersCreateManyArgs} args - Arguments to create many TagsOnUsers.
     *     @example
     *     // Create many TagsOnUsers
     *     const tagsOnUsers = await prisma.tagsOnUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsOnUsersCreateManyArgs>(
      args?: SelectSubset<T, TagsOnUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnUsers.
     * @param {TagsOnUsersDeleteArgs} args - Arguments to delete one TagsOnUsers.
     * @example
     * // Delete one TagsOnUsers
     * const TagsOnUsers = await prisma.tagsOnUsers.delete({
     *   where: {
     *     // ... filter to delete one TagsOnUsers
     *   }
     * })
     * 
    **/
    delete<T extends TagsOnUsersDeleteArgs>(
      args: SelectSubset<T, TagsOnUsersDeleteArgs>
    ): CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>>

    /**
     * Update one TagsOnUsers.
     * @param {TagsOnUsersUpdateArgs} args - Arguments to update one TagsOnUsers.
     * @example
     * // Update one TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsOnUsersUpdateArgs>(
      args: SelectSubset<T, TagsOnUsersUpdateArgs>
    ): CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>>

    /**
     * Delete zero or more TagsOnUsers.
     * @param {TagsOnUsersDeleteManyArgs} args - Arguments to filter TagsOnUsers to delete.
     * @example
     * // Delete a few TagsOnUsers
     * const { count } = await prisma.tagsOnUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsOnUsersDeleteManyArgs>(
      args?: SelectSubset<T, TagsOnUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsOnUsersUpdateManyArgs>(
      args: SelectSubset<T, TagsOnUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnUsers.
     * @param {TagsOnUsersUpsertArgs} args - Arguments to update or create a TagsOnUsers.
     * @example
     * // Update or create a TagsOnUsers
     * const tagsOnUsers = await prisma.tagsOnUsers.upsert({
     *   create: {
     *     // ... data to create a TagsOnUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnUsers we want to update
     *   }
     * })
    **/
    upsert<T extends TagsOnUsersUpsertArgs>(
      args: SelectSubset<T, TagsOnUsersUpsertArgs>
    ): CheckSelect<T, Prisma__TagsOnUsersClient<TagsOnUsers>, Prisma__TagsOnUsersClient<TagsOnUsersGetPayload<T>>>

    /**
     * Count the number of TagsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersCountArgs} args - Arguments to filter TagsOnUsers to count.
     * @example
     * // Count the number of TagsOnUsers
     * const count = await prisma.tagsOnUsers.count({
     *   where: {
     *     // ... the filter for the TagsOnUsers we want to count
     *   }
     * })
    **/
    count<T extends TagsOnUsersCountArgs>(
      args?: Subset<T, TagsOnUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsOnUsersAggregateArgs>(args: Subset<T, TagsOnUsersAggregateArgs>): PrismaPromise<GetTagsOnUsersAggregateType<T>>

    /**
     * Group by TagsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnUsersGroupByArgs} args - Group by arguments.
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
      T extends TagsOnUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnUsersGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagsOnUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagsOnUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Tag<T extends TagArgs = {}>(args?: Subset<T, TagArgs>): CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TagsOnUsers findUnique
   */
  export type TagsOnUsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * Throw an Error if a TagsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnUsers to fetch.
     * 
    **/
    where: TagsOnUsersWhereUniqueInput
  }


  /**
   * TagsOnUsers findFirst
   */
  export type TagsOnUsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * Throw an Error if a TagsOnUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TagsOnUsers to fetch.
     * 
    **/
    where?: TagsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnUsersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnUsers.
     * 
    **/
    cursor?: TagsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnUsers.
     * 
    **/
    distinct?: Enumerable<TagsOnUsersScalarFieldEnum>
  }


  /**
   * TagsOnUsers findMany
   */
  export type TagsOnUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * Filter, which TagsOnUsers to fetch.
     * 
    **/
    where?: TagsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<TagsOnUsersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnUsers.
     * 
    **/
    cursor?: TagsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagsOnUsersScalarFieldEnum>
  }


  /**
   * TagsOnUsers create
   */
  export type TagsOnUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * The data needed to create a TagsOnUsers.
     * 
    **/
    data: XOR<TagsOnUsersCreateInput, TagsOnUsersUncheckedCreateInput>
  }


  /**
   * TagsOnUsers createMany
   */
  export type TagsOnUsersCreateManyArgs = {
    /**
     * The data used to create many TagsOnUsers.
     * 
    **/
    data: Enumerable<TagsOnUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TagsOnUsers update
   */
  export type TagsOnUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * The data needed to update a TagsOnUsers.
     * 
    **/
    data: XOR<TagsOnUsersUpdateInput, TagsOnUsersUncheckedUpdateInput>
    /**
     * Choose, which TagsOnUsers to update.
     * 
    **/
    where: TagsOnUsersWhereUniqueInput
  }


  /**
   * TagsOnUsers updateMany
   */
  export type TagsOnUsersUpdateManyArgs = {
    /**
     * The data used to update TagsOnUsers.
     * 
    **/
    data: XOR<TagsOnUsersUpdateManyMutationInput, TagsOnUsersUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnUsers to update
     * 
    **/
    where?: TagsOnUsersWhereInput
  }


  /**
   * TagsOnUsers upsert
   */
  export type TagsOnUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * The filter to search for the TagsOnUsers to update in case it exists.
     * 
    **/
    where: TagsOnUsersWhereUniqueInput
    /**
     * In case the TagsOnUsers found by the `where` argument doesn't exist, create a new TagsOnUsers with this data.
     * 
    **/
    create: XOR<TagsOnUsersCreateInput, TagsOnUsersUncheckedCreateInput>
    /**
     * In case the TagsOnUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagsOnUsersUpdateInput, TagsOnUsersUncheckedUpdateInput>
  }


  /**
   * TagsOnUsers delete
   */
  export type TagsOnUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
    /**
     * Filter which TagsOnUsers to delete.
     * 
    **/
    where: TagsOnUsersWhereUniqueInput
  }


  /**
   * TagsOnUsers deleteMany
   */
  export type TagsOnUsersDeleteManyArgs = {
    /**
     * Filter which TagsOnUsers to delete
     * 
    **/
    where?: TagsOnUsersWhereInput
  }


  /**
   * TagsOnUsers without action
   */
  export type TagsOnUsersArgs = {
    /**
     * Select specific fields to fetch from the TagsOnUsers
     * 
    **/
    select?: TagsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagsOnUsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AnswerCommentScalarFieldEnum: {
    id: 'id',
    answerId: 'answerId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    facebookId: 'facebookId'
  };

  export type AnswerCommentScalarFieldEnum = (typeof AnswerCommentScalarFieldEnum)[keyof typeof AnswerCommentScalarFieldEnum]


  export const AnswerVoterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answerId: 'answerId',
    state: 'state'
  };

  export type AnswerVoterScalarFieldEnum = (typeof AnswerVoterScalarFieldEnum)[keyof typeof AnswerVoterScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    userId: 'userId',
    content: 'content',
    score: 'score',
    deleted: 'deleted',
    verify: 'verify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    facebookId: 'facebookId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionCommentScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    facebookId: 'facebookId'
  };

  export type QuestionCommentScalarFieldEnum = (typeof QuestionCommentScalarFieldEnum)[keyof typeof QuestionCommentScalarFieldEnum]


  export const QuestionVoterScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    userId: 'userId',
    state: 'state'
  };

  export type QuestionVoterScalarFieldEnum = (typeof QuestionVoterScalarFieldEnum)[keyof typeof QuestionVoterScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    score: 'score',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    facebookId: 'facebookId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    reputation: 'reputation',
    description: 'description',
    joiningDate: 'joiningDate',
    displayName: 'displayName',
    photoURL: 'photoURL',
    phoneNumber: 'phoneNumber',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const TagsOnQuestionsScalarFieldEnum: {
    questionId: 'questionId',
    tagId: 'tagId'
  };

  export type TagsOnQuestionsScalarFieldEnum = (typeof TagsOnQuestionsScalarFieldEnum)[keyof typeof TagsOnQuestionsScalarFieldEnum]


  export const TagsOnUsersScalarFieldEnum: {
    tagId: 'tagId',
    userId: 'userId'
  };

  export type TagsOnUsersScalarFieldEnum = (typeof TagsOnUsersScalarFieldEnum)[keyof typeof TagsOnUsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AnswerCommentOrderByRelevanceFieldEnum: {
    userId: 'userId',
    content: 'content',
    facebookId: 'facebookId'
  };

  export type AnswerCommentOrderByRelevanceFieldEnum = (typeof AnswerCommentOrderByRelevanceFieldEnum)[keyof typeof AnswerCommentOrderByRelevanceFieldEnum]


  export const AnswerVoterOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type AnswerVoterOrderByRelevanceFieldEnum = (typeof AnswerVoterOrderByRelevanceFieldEnum)[keyof typeof AnswerVoterOrderByRelevanceFieldEnum]


  export const AnswerOrderByRelevanceFieldEnum: {
    userId: 'userId',
    content: 'content',
    facebookId: 'facebookId'
  };

  export type AnswerOrderByRelevanceFieldEnum = (typeof AnswerOrderByRelevanceFieldEnum)[keyof typeof AnswerOrderByRelevanceFieldEnum]


  export const QuestionCommentOrderByRelevanceFieldEnum: {
    userId: 'userId',
    content: 'content',
    facebookId: 'facebookId'
  };

  export type QuestionCommentOrderByRelevanceFieldEnum = (typeof QuestionCommentOrderByRelevanceFieldEnum)[keyof typeof QuestionCommentOrderByRelevanceFieldEnum]


  export const QuestionVoterOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type QuestionVoterOrderByRelevanceFieldEnum = (typeof QuestionVoterOrderByRelevanceFieldEnum)[keyof typeof QuestionVoterOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    userId: 'userId',
    title: 'title',
    content: 'content',
    facebookId: 'facebookId'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    uid: 'uid',
    description: 'description',
    displayName: 'displayName',
    photoURL: 'photoURL',
    phoneNumber: 'phoneNumber',
    email: 'email'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DocumentOrderByRelevanceFieldEnum: {
    title: 'title',
    url: 'url'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const TagsOnUsersOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type TagsOnUsersOrderByRelevanceFieldEnum = (typeof TagsOnUsersOrderByRelevanceFieldEnum)[keyof typeof TagsOnUsersOrderByRelevanceFieldEnum]


  /**
   * Deep Input Types
   */


  export type AnswerCommentWhereInput = {
    AND?: Enumerable<AnswerCommentWhereInput>
    OR?: Enumerable<AnswerCommentWhereInput>
    NOT?: Enumerable<AnswerCommentWhereInput>
    id?: IntFilter | number
    answerId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
    Answer?: XOR<AnswerRelationFilter, AnswerWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnswerCommentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    answerId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    Answer?: AnswerOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: AnswerCommentOrderByRelevanceInput
  }

  export type AnswerCommentWhereUniqueInput = {
    id?: number
    facebookId?: string
  }

  export type AnswerCommentOrderByWithAggregationInput = {
    id?: SortOrder
    answerId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    _count?: AnswerCommentCountOrderByAggregateInput
    _avg?: AnswerCommentAvgOrderByAggregateInput
    _max?: AnswerCommentMaxOrderByAggregateInput
    _min?: AnswerCommentMinOrderByAggregateInput
    _sum?: AnswerCommentSumOrderByAggregateInput
  }

  export type AnswerCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswerCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswerCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswerCommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    answerId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    facebookId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AnswerVoterWhereInput = {
    AND?: Enumerable<AnswerVoterWhereInput>
    OR?: Enumerable<AnswerVoterWhereInput>
    NOT?: Enumerable<AnswerVoterWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    answerId?: IntFilter | number
    state?: IntFilter | number
    Answer?: XOR<AnswerRelationFilter, AnswerWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnswerVoterOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
    Answer?: AnswerOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: AnswerVoterOrderByRelevanceInput
  }

  export type AnswerVoterWhereUniqueInput = {
    id?: number
  }

  export type AnswerVoterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
    _count?: AnswerVoterCountOrderByAggregateInput
    _avg?: AnswerVoterAvgOrderByAggregateInput
    _max?: AnswerVoterMaxOrderByAggregateInput
    _min?: AnswerVoterMinOrderByAggregateInput
    _sum?: AnswerVoterSumOrderByAggregateInput
  }

  export type AnswerVoterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswerVoterScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswerVoterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswerVoterScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    answerId?: IntWithAggregatesFilter | number
    state?: IntWithAggregatesFilter | number
  }

  export type AnswerWhereInput = {
    AND?: Enumerable<AnswerWhereInput>
    OR?: Enumerable<AnswerWhereInput>
    NOT?: Enumerable<AnswerWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    score?: IntFilter | number
    deleted?: BoolFilter | boolean
    verify?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
    AnswerComment?: AnswerCommentListRelationFilter
    AnswerVoter?: AnswerVoterListRelationFilter
  }

  export type AnswerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    verify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    Question?: QuestionOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    AnswerComment?: AnswerCommentOrderByRelationAggregateInput
    AnswerVoter?: AnswerVoterOrderByRelationAggregateInput
    _relevance?: AnswerOrderByRelevanceInput
  }

  export type AnswerWhereUniqueInput = {
    id?: number
    facebookId?: string
  }

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    verify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    deleted?: BoolWithAggregatesFilter | boolean
    verify?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    facebookId?: StringNullableWithAggregatesFilter | string | null
  }

  export type QuestionCommentWhereInput = {
    AND?: Enumerable<QuestionCommentWhereInput>
    OR?: Enumerable<QuestionCommentWhereInput>
    NOT?: Enumerable<QuestionCommentWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type QuestionCommentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    Question?: QuestionOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: QuestionCommentOrderByRelevanceInput
  }

  export type QuestionCommentWhereUniqueInput = {
    id?: number
    facebookId?: string
  }

  export type QuestionCommentOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    _count?: QuestionCommentCountOrderByAggregateInput
    _avg?: QuestionCommentAvgOrderByAggregateInput
    _max?: QuestionCommentMaxOrderByAggregateInput
    _min?: QuestionCommentMinOrderByAggregateInput
    _sum?: QuestionCommentSumOrderByAggregateInput
  }

  export type QuestionCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionCommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    facebookId?: StringNullableWithAggregatesFilter | string | null
  }

  export type QuestionVoterWhereInput = {
    AND?: Enumerable<QuestionVoterWhereInput>
    OR?: Enumerable<QuestionVoterWhereInput>
    NOT?: Enumerable<QuestionVoterWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    state?: IntFilter | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type QuestionVoterOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    Question?: QuestionOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: QuestionVoterOrderByRelevanceInput
  }

  export type QuestionVoterWhereUniqueInput = {
    id?: number
  }

  export type QuestionVoterOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    _count?: QuestionVoterCountOrderByAggregateInput
    _avg?: QuestionVoterAvgOrderByAggregateInput
    _max?: QuestionVoterMaxOrderByAggregateInput
    _min?: QuestionVoterMinOrderByAggregateInput
    _sum?: QuestionVoterSumOrderByAggregateInput
  }

  export type QuestionVoterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionVoterScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionVoterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionVoterScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    state?: IntWithAggregatesFilter | number
  }

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    score?: IntFilter | number
    deleted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    Answer?: AnswerListRelationFilter
    QuestionComment?: QuestionCommentListRelationFilter
    QuestionVoter?: QuestionVoterListRelationFilter
    TagsOnQuestions?: TagsOnQuestionsListRelationFilter
  }

  export type QuestionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    Answer?: AnswerOrderByRelationAggregateInput
    QuestionComment?: QuestionCommentOrderByRelationAggregateInput
    QuestionVoter?: QuestionVoterOrderByRelationAggregateInput
    TagsOnQuestions?: TagsOnQuestionsOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = {
    id?: number
    facebookId?: string
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    deleted?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    facebookId?: StringNullableWithAggregatesFilter | string | null
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    TagsOnQuestions?: TagsOnQuestionsListRelationFilter
    TagsOnUsers?: TagsOnUsersListRelationFilter
  }

  export type TagOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    TagsOnQuestions?: TagsOnQuestionsOrderByRelationAggregateInput
    TagsOnUsers?: TagsOnUsersOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    uid?: StringFilter | string
    reputation?: IntFilter | number
    description?: StringNullableFilter | string | null
    joiningDate?: DateTimeFilter | Date | string
    displayName?: StringFilter | string
    photoURL?: StringNullableFilter | string | null
    phoneNumber?: StringNullableFilter | string | null
    email?: StringFilter | string
    Answer?: AnswerListRelationFilter
    AnswerComment?: AnswerCommentListRelationFilter
    AnswerVoter?: AnswerVoterListRelationFilter
    Question?: QuestionListRelationFilter
    QuestionComment?: QuestionCommentListRelationFilter
    QuestionVoter?: QuestionVoterListRelationFilter
    InterestedTag?: TagsOnUsersListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    uid?: SortOrder
    reputation?: SortOrder
    description?: SortOrder
    joiningDate?: SortOrder
    displayName?: SortOrder
    photoURL?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    Answer?: AnswerOrderByRelationAggregateInput
    AnswerComment?: AnswerCommentOrderByRelationAggregateInput
    AnswerVoter?: AnswerVoterOrderByRelationAggregateInput
    Question?: QuestionOrderByRelationAggregateInput
    QuestionComment?: QuestionCommentOrderByRelationAggregateInput
    QuestionVoter?: QuestionVoterOrderByRelationAggregateInput
    InterestedTag?: TagsOnUsersOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    uid?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    reputation?: SortOrder
    description?: SortOrder
    joiningDate?: SortOrder
    displayName?: SortOrder
    photoURL?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    uid?: StringWithAggregatesFilter | string
    reputation?: IntWithAggregatesFilter | number
    description?: StringNullableWithAggregatesFilter | string | null
    joiningDate?: DateTimeWithAggregatesFilter | Date | string
    displayName?: StringWithAggregatesFilter | string
    photoURL?: StringNullableWithAggregatesFilter | string | null
    phoneNumber?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
  }

  export type DocumentWhereInput = {
    AND?: Enumerable<DocumentWhereInput>
    OR?: Enumerable<DocumentWhereInput>
    NOT?: Enumerable<DocumentWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    url?: StringFilter | string
  }

  export type DocumentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = {
    id?: number
  }

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DocumentScalarWhereWithAggregatesInput>
    OR?: Enumerable<DocumentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DocumentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type TagsOnQuestionsWhereInput = {
    AND?: Enumerable<TagsOnQuestionsWhereInput>
    OR?: Enumerable<TagsOnQuestionsWhereInput>
    NOT?: Enumerable<TagsOnQuestionsWhereInput>
    questionId?: IntFilter | number
    tagId?: IntFilter | number
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type TagsOnQuestionsOrderByWithRelationAndSearchRelevanceInput = {
    questionId?: SortOrder
    tagId?: SortOrder
    Question?: QuestionOrderByWithRelationAndSearchRelevanceInput
    Tag?: TagOrderByWithRelationAndSearchRelevanceInput
  }

  export type TagsOnQuestionsWhereUniqueInput = {
    questionId_tagId?: TagsOnQuestionsQuestionIdTagIdCompoundUniqueInput
  }

  export type TagsOnQuestionsOrderByWithAggregationInput = {
    questionId?: SortOrder
    tagId?: SortOrder
    _count?: TagsOnQuestionsCountOrderByAggregateInput
    _avg?: TagsOnQuestionsAvgOrderByAggregateInput
    _max?: TagsOnQuestionsMaxOrderByAggregateInput
    _min?: TagsOnQuestionsMinOrderByAggregateInput
    _sum?: TagsOnQuestionsSumOrderByAggregateInput
  }

  export type TagsOnQuestionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagsOnQuestionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagsOnQuestionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagsOnQuestionsScalarWhereWithAggregatesInput>
    questionId?: IntWithAggregatesFilter | number
    tagId?: IntWithAggregatesFilter | number
  }

  export type TagsOnUsersWhereInput = {
    AND?: Enumerable<TagsOnUsersWhereInput>
    OR?: Enumerable<TagsOnUsersWhereInput>
    NOT?: Enumerable<TagsOnUsersWhereInput>
    tagId?: IntFilter | number
    userId?: StringFilter | string
    Tag?: XOR<TagRelationFilter, TagWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TagsOnUsersOrderByWithRelationAndSearchRelevanceInput = {
    tagId?: SortOrder
    userId?: SortOrder
    Tag?: TagOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: TagsOnUsersOrderByRelevanceInput
  }

  export type TagsOnUsersWhereUniqueInput = {
    tagId_userId?: TagsOnUsersTagIdUserIdCompoundUniqueInput
  }

  export type TagsOnUsersOrderByWithAggregationInput = {
    tagId?: SortOrder
    userId?: SortOrder
    _count?: TagsOnUsersCountOrderByAggregateInput
    _avg?: TagsOnUsersAvgOrderByAggregateInput
    _max?: TagsOnUsersMaxOrderByAggregateInput
    _min?: TagsOnUsersMinOrderByAggregateInput
    _sum?: TagsOnUsersSumOrderByAggregateInput
  }

  export type TagsOnUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagsOnUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagsOnUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagsOnUsersScalarWhereWithAggregatesInput>
    tagId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
  }

  export type AnswerCommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer: AnswerCreateNestedOneWithoutAnswerCommentInput
    User: UserCreateNestedOneWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedCreateInput = {
    id?: number
    answerId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerCommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUpdateOneRequiredWithoutAnswerCommentInput
    User?: UserUpdateOneRequiredWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCommentCreateManyInput = {
    id?: number
    answerId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerCommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerVoterCreateInput = {
    state?: number
    Answer: AnswerCreateNestedOneWithoutAnswerVoterInput
    User: UserCreateNestedOneWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedCreateInput = {
    id?: number
    userId: string
    answerId: number
    state?: number
  }

  export type AnswerVoterUpdateInput = {
    state?: IntFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateOneRequiredWithoutAnswerVoterInput
    User?: UserUpdateOneRequiredWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerVoterCreateManyInput = {
    id?: number
    userId: string
    answerId: number
    state?: number
  }

  export type AnswerVoterUpdateManyMutationInput = {
    state?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerVoterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateInput = {
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutAnswerInput
    User: UserCreateNestedOneWithoutAnswerInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutAnswerInput
    User?: UserUpdateOneRequiredWithoutAnswerInput
    AnswerComment?: AnswerCommentUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutAnswerInput
  }

  export type AnswerCreateManyInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutQuestionCommentInput
    User: UserCreateNestedOneWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedCreateInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutQuestionCommentInput
    User?: UserUpdateOneRequiredWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentCreateManyInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionVoterCreateInput = {
    state?: number
    Question: QuestionCreateNestedOneWithoutQuestionVoterInput
    User: UserCreateNestedOneWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedCreateInput = {
    id?: number
    questionId: number
    userId: string
    state?: number
  }

  export type QuestionVoterUpdateInput = {
    state?: IntFieldUpdateOperationsInput | number
    Question?: QuestionUpdateOneRequiredWithoutQuestionVoterInput
    User?: UserUpdateOneRequiredWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionVoterCreateManyInput = {
    id?: number
    questionId: number
    userId: string
    state?: number
  }

  export type QuestionVoterUpdateManyMutationInput = {
    state?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionVoterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionInput
    Answer?: AnswerUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    name: string
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutTagInput
    TagsOnUsers?: TagsOnUsersCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutTagInput
    TagsOnUsers?: TagsOnUsersUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutTagInput
    TagsOnUsers?: TagsOnUsersUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutTagInput
    TagsOnUsers?: TagsOnUsersUncheckedUpdateManyWithoutTagInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    title: string
    url: string
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    title: string
    url: string
  }

  export type DocumentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: number
    title: string
    url: string
  }

  export type DocumentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TagsOnQuestionsCreateInput = {
    Question: QuestionCreateNestedOneWithoutTagsOnQuestionsInput
    Tag: TagCreateNestedOneWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedCreateInput = {
    questionId: number
    tagId: number
  }

  export type TagsOnQuestionsUpdateInput = {
    Question?: QuestionUpdateOneRequiredWithoutTagsOnQuestionsInput
    Tag?: TagUpdateOneRequiredWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedUpdateInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnQuestionsCreateManyInput = {
    questionId: number
    tagId: number
  }

  export type TagsOnQuestionsUpdateManyMutationInput = {

  }

  export type TagsOnQuestionsUncheckedUpdateManyInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnUsersCreateInput = {
    Tag: TagCreateNestedOneWithoutTagsOnUsersInput
    User: UserCreateNestedOneWithoutInterestedTagInput
  }

  export type TagsOnUsersUncheckedCreateInput = {
    tagId: number
    userId: string
  }

  export type TagsOnUsersUpdateInput = {
    Tag?: TagUpdateOneRequiredWithoutTagsOnUsersInput
    User?: UserUpdateOneRequiredWithoutInterestedTagInput
  }

  export type TagsOnUsersUncheckedUpdateInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsOnUsersCreateManyInput = {
    tagId: number
    userId: string
  }

  export type TagsOnUsersUpdateManyMutationInput = {

  }

  export type TagsOnUsersUncheckedUpdateManyInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type AnswerRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnswerCommentOrderByRelevanceInput = {
    fields: Enumerable<AnswerCommentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AnswerCommentCountOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type AnswerCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerCommentMinOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerCommentSumOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AnswerVoterOrderByRelevanceInput = {
    fields: Enumerable<AnswerVoterOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AnswerVoterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
  }

  export type AnswerVoterAvgOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
  }

  export type AnswerVoterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
  }

  export type AnswerVoterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
  }

  export type AnswerVoterSumOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    state?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCommentListRelationFilter = {
    every?: AnswerCommentWhereInput
    some?: AnswerCommentWhereInput
    none?: AnswerCommentWhereInput
  }

  export type AnswerVoterListRelationFilter = {
    every?: AnswerVoterWhereInput
    some?: AnswerVoterWhereInput
    none?: AnswerVoterWhereInput
  }

  export type AnswerCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerVoterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelevanceInput = {
    fields: Enumerable<AnswerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    verify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    score?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    verify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    verify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type QuestionCommentOrderByRelevanceInput = {
    fields: Enumerable<QuestionCommentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type QuestionCommentCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionCommentMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionCommentSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionVoterOrderByRelevanceInput = {
    fields: Enumerable<QuestionVoterOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type QuestionVoterCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    state?: SortOrder
  }

  export type QuestionVoterAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    state?: SortOrder
  }

  export type QuestionVoterMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    state?: SortOrder
  }

  export type QuestionVoterMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    state?: SortOrder
  }

  export type QuestionVoterSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    state?: SortOrder
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type QuestionCommentListRelationFilter = {
    every?: QuestionCommentWhereInput
    some?: QuestionCommentWhereInput
    none?: QuestionCommentWhereInput
  }

  export type QuestionVoterListRelationFilter = {
    every?: QuestionVoterWhereInput
    some?: QuestionVoterWhereInput
    none?: QuestionVoterWhereInput
  }

  export type TagsOnQuestionsListRelationFilter = {
    every?: TagsOnQuestionsWhereInput
    some?: TagsOnQuestionsWhereInput
    none?: TagsOnQuestionsWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionVoterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOnQuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: Enumerable<QuestionOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    score?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facebookId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type TagsOnUsersListRelationFilter = {
    every?: TagsOnUsersWhereInput
    some?: TagsOnUsersWhereInput
    none?: TagsOnUsersWhereInput
  }

  export type TagsOnUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: Enumerable<TagOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    reputation?: SortOrder
    description?: SortOrder
    joiningDate?: SortOrder
    displayName?: SortOrder
    photoURL?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    reputation?: SortOrder
    description?: SortOrder
    joiningDate?: SortOrder
    displayName?: SortOrder
    photoURL?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    reputation?: SortOrder
    description?: SortOrder
    joiningDate?: SortOrder
    displayName?: SortOrder
    photoURL?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type DocumentOrderByRelevanceInput = {
    fields: Enumerable<DocumentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagsOnQuestionsQuestionIdTagIdCompoundUniqueInput = {
    questionId: number
    tagId: number
  }

  export type TagsOnQuestionsCountOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnQuestionsAvgOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnQuestionsMaxOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnQuestionsMinOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnQuestionsSumOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnUsersOrderByRelevanceInput = {
    fields: Enumerable<TagsOnUsersOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type TagsOnUsersTagIdUserIdCompoundUniqueInput = {
    tagId: number
    userId: string
  }

  export type TagsOnUsersCountOrderByAggregateInput = {
    tagId?: SortOrder
    userId?: SortOrder
  }

  export type TagsOnUsersAvgOrderByAggregateInput = {
    tagId?: SortOrder
  }

  export type TagsOnUsersMaxOrderByAggregateInput = {
    tagId?: SortOrder
    userId?: SortOrder
  }

  export type TagsOnUsersMinOrderByAggregateInput = {
    tagId?: SortOrder
    userId?: SortOrder
  }

  export type TagsOnUsersSumOrderByAggregateInput = {
    tagId?: SortOrder
  }

  export type AnswerCreateNestedOneWithoutAnswerCommentInput = {
    create?: XOR<AnswerCreateWithoutAnswerCommentInput, AnswerUncheckedCreateWithoutAnswerCommentInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerCommentInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswerCommentInput = {
    create?: XOR<UserCreateWithoutAnswerCommentInput, UserUncheckedCreateWithoutAnswerCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerCommentInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AnswerUpdateOneRequiredWithoutAnswerCommentInput = {
    create?: XOR<AnswerCreateWithoutAnswerCommentInput, AnswerUncheckedCreateWithoutAnswerCommentInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerCommentInput
    upsert?: AnswerUpsertWithoutAnswerCommentInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<AnswerUpdateWithoutAnswerCommentInput, AnswerUncheckedUpdateWithoutAnswerCommentInput>
  }

  export type UserUpdateOneRequiredWithoutAnswerCommentInput = {
    create?: XOR<UserCreateWithoutAnswerCommentInput, UserUncheckedCreateWithoutAnswerCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerCommentInput
    upsert?: UserUpsertWithoutAnswerCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAnswerCommentInput, UserUncheckedUpdateWithoutAnswerCommentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerCreateNestedOneWithoutAnswerVoterInput = {
    create?: XOR<AnswerCreateWithoutAnswerVoterInput, AnswerUncheckedCreateWithoutAnswerVoterInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerVoterInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswerVoterInput = {
    create?: XOR<UserCreateWithoutAnswerVoterInput, UserUncheckedCreateWithoutAnswerVoterInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerVoterInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerUpdateOneRequiredWithoutAnswerVoterInput = {
    create?: XOR<AnswerCreateWithoutAnswerVoterInput, AnswerUncheckedCreateWithoutAnswerVoterInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerVoterInput
    upsert?: AnswerUpsertWithoutAnswerVoterInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<AnswerUpdateWithoutAnswerVoterInput, AnswerUncheckedUpdateWithoutAnswerVoterInput>
  }

  export type UserUpdateOneRequiredWithoutAnswerVoterInput = {
    create?: XOR<UserCreateWithoutAnswerVoterInput, UserUncheckedCreateWithoutAnswerVoterInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerVoterInput
    upsert?: UserUpsertWithoutAnswerVoterInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAnswerVoterInput, UserUncheckedUpdateWithoutAnswerVoterInput>
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswerInput = {
    create?: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCommentCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutAnswerInput>, Enumerable<AnswerCommentUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerCommentCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
  }

  export type AnswerVoterCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutAnswerInput>, Enumerable<AnswerVoterUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerVoterCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
  }

  export type AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutAnswerInput>, Enumerable<AnswerCommentUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerCommentCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
  }

  export type AnswerVoterUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutAnswerInput>, Enumerable<AnswerVoterUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerVoterCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type UserUpdateOneRequiredWithoutAnswerInput = {
    create?: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerInput
    upsert?: UserUpsertWithoutAnswerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAnswerInput, UserUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerCommentUpdateManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutAnswerInput>, Enumerable<AnswerCommentUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerCommentCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerCommentWhereUniqueInput>
    disconnect?: Enumerable<AnswerCommentWhereUniqueInput>
    delete?: Enumerable<AnswerCommentWhereUniqueInput>
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
    update?: Enumerable<AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerCommentUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerCommentScalarWhereInput>
  }

  export type AnswerVoterUpdateManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutAnswerInput>, Enumerable<AnswerVoterUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerVoterUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerVoterCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerVoterWhereUniqueInput>
    disconnect?: Enumerable<AnswerVoterWhereUniqueInput>
    delete?: Enumerable<AnswerVoterWhereUniqueInput>
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
    update?: Enumerable<AnswerVoterUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerVoterUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerVoterScalarWhereInput>
  }

  export type AnswerCommentUncheckedUpdateManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutAnswerInput>, Enumerable<AnswerCommentUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerCommentCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerCommentWhereUniqueInput>
    disconnect?: Enumerable<AnswerCommentWhereUniqueInput>
    delete?: Enumerable<AnswerCommentWhereUniqueInput>
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
    update?: Enumerable<AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerCommentUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerCommentScalarWhereInput>
  }

  export type AnswerVoterUncheckedUpdateManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutAnswerInput>, Enumerable<AnswerVoterUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerVoterUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerVoterCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerVoterWhereUniqueInput>
    disconnect?: Enumerable<AnswerVoterWhereUniqueInput>
    delete?: Enumerable<AnswerVoterWhereUniqueInput>
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
    update?: Enumerable<AnswerVoterUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerVoterUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerVoterScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutQuestionCommentInput = {
    create?: XOR<QuestionCreateWithoutQuestionCommentInput, QuestionUncheckedCreateWithoutQuestionCommentInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionCommentInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionCommentInput = {
    create?: XOR<UserCreateWithoutQuestionCommentInput, UserUncheckedCreateWithoutQuestionCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionCommentInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestionCommentInput = {
    create?: XOR<QuestionCreateWithoutQuestionCommentInput, QuestionUncheckedCreateWithoutQuestionCommentInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionCommentInput
    upsert?: QuestionUpsertWithoutQuestionCommentInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutQuestionCommentInput, QuestionUncheckedUpdateWithoutQuestionCommentInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionCommentInput = {
    create?: XOR<UserCreateWithoutQuestionCommentInput, UserUncheckedCreateWithoutQuestionCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionCommentInput
    upsert?: UserUpsertWithoutQuestionCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutQuestionCommentInput, UserUncheckedUpdateWithoutQuestionCommentInput>
  }

  export type QuestionCreateNestedOneWithoutQuestionVoterInput = {
    create?: XOR<QuestionCreateWithoutQuestionVoterInput, QuestionUncheckedCreateWithoutQuestionVoterInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionVoterInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionVoterInput = {
    create?: XOR<UserCreateWithoutQuestionVoterInput, UserUncheckedCreateWithoutQuestionVoterInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionVoterInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestionVoterInput = {
    create?: XOR<QuestionCreateWithoutQuestionVoterInput, QuestionUncheckedCreateWithoutQuestionVoterInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionVoterInput
    upsert?: QuestionUpsertWithoutQuestionVoterInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutQuestionVoterInput, QuestionUncheckedUpdateWithoutQuestionVoterInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionVoterInput = {
    create?: XOR<UserCreateWithoutQuestionVoterInput, UserUncheckedCreateWithoutQuestionVoterInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionVoterInput
    upsert?: UserUpsertWithoutQuestionVoterInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutQuestionVoterInput, UserUncheckedUpdateWithoutQuestionVoterInput>
  }

  export type UserCreateNestedOneWithoutQuestionInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type QuestionCommentCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutQuestionInput>, Enumerable<QuestionCommentUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutQuestionInput>
    createMany?: QuestionCommentCreateManyQuestionInputEnvelope
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
  }

  export type QuestionVoterCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutQuestionInput>, Enumerable<QuestionVoterUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutQuestionInput>
    createMany?: QuestionVoterCreateManyQuestionInputEnvelope
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
  }

  export type TagsOnQuestionsCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutQuestionInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutQuestionInput>
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutQuestionInput>, Enumerable<QuestionCommentUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutQuestionInput>
    createMany?: QuestionCommentCreateManyQuestionInputEnvelope
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
  }

  export type QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutQuestionInput>, Enumerable<QuestionVoterUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutQuestionInput>
    createMany?: QuestionVoterCreateManyQuestionInputEnvelope
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
  }

  export type TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutQuestionInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutQuestionInput>
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    upsert?: UserUpsertWithoutQuestionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type QuestionCommentUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutQuestionInput>, Enumerable<QuestionCommentUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: QuestionCommentCreateManyQuestionInputEnvelope
    set?: Enumerable<QuestionCommentWhereUniqueInput>
    disconnect?: Enumerable<QuestionCommentWhereUniqueInput>
    delete?: Enumerable<QuestionCommentWhereUniqueInput>
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
    update?: Enumerable<QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<QuestionCommentUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<QuestionCommentScalarWhereInput>
  }

  export type QuestionVoterUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutQuestionInput>, Enumerable<QuestionVoterUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<QuestionVoterUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: QuestionVoterCreateManyQuestionInputEnvelope
    set?: Enumerable<QuestionVoterWhereUniqueInput>
    disconnect?: Enumerable<QuestionVoterWhereUniqueInput>
    delete?: Enumerable<QuestionVoterWhereUniqueInput>
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
    update?: Enumerable<QuestionVoterUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<QuestionVoterUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<QuestionVoterScalarWhereInput>
  }

  export type TagsOnQuestionsUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutQuestionInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    set?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    disconnect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    delete?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    update?: Enumerable<TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TagsOnQuestionsScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type QuestionCommentUncheckedUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutQuestionInput>, Enumerable<QuestionCommentUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: QuestionCommentCreateManyQuestionInputEnvelope
    set?: Enumerable<QuestionCommentWhereUniqueInput>
    disconnect?: Enumerable<QuestionCommentWhereUniqueInput>
    delete?: Enumerable<QuestionCommentWhereUniqueInput>
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
    update?: Enumerable<QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<QuestionCommentUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<QuestionCommentScalarWhereInput>
  }

  export type QuestionVoterUncheckedUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutQuestionInput>, Enumerable<QuestionVoterUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<QuestionVoterUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: QuestionVoterCreateManyQuestionInputEnvelope
    set?: Enumerable<QuestionVoterWhereUniqueInput>
    disconnect?: Enumerable<QuestionVoterWhereUniqueInput>
    delete?: Enumerable<QuestionVoterWhereUniqueInput>
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
    update?: Enumerable<QuestionVoterUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<QuestionVoterUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<QuestionVoterScalarWhereInput>
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutQuestionInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    set?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    disconnect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    delete?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    update?: Enumerable<TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TagsOnQuestionsScalarWhereInput>
  }

  export type TagsOnQuestionsCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutTagInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutTagInput>
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
  }

  export type TagsOnUsersCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutTagInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutTagInput>
    createMany?: TagsOnUsersCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
  }

  export type TagsOnQuestionsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutTagInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutTagInput>
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
  }

  export type TagsOnUsersUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutTagInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutTagInput>
    createMany?: TagsOnUsersCreateManyTagInputEnvelope
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
  }

  export type TagsOnQuestionsUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutTagInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    set?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    disconnect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    delete?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    update?: Enumerable<TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnQuestionsUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnQuestionsScalarWhereInput>
  }

  export type TagsOnUsersUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutTagInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnUsersUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnUsersCreateManyTagInputEnvelope
    set?: Enumerable<TagsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<TagsOnUsersWhereUniqueInput>
    delete?: Enumerable<TagsOnUsersWhereUniqueInput>
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
    update?: Enumerable<TagsOnUsersUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnUsersUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnUsersScalarWhereInput>
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnQuestionsCreateWithoutTagInput>, Enumerable<TagsOnQuestionsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnQuestionsCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    set?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    disconnect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    delete?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    connect?: Enumerable<TagsOnQuestionsWhereUniqueInput>
    update?: Enumerable<TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnQuestionsUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnQuestionsScalarWhereInput>
  }

  export type TagsOnUsersUncheckedUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutTagInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TagsOnUsersUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TagsOnUsersCreateManyTagInputEnvelope
    set?: Enumerable<TagsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<TagsOnUsersWhereUniqueInput>
    delete?: Enumerable<TagsOnUsersWhereUniqueInput>
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
    update?: Enumerable<TagsOnUsersUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TagsOnUsersUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TagsOnUsersScalarWhereInput>
  }

  export type AnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutUserInput>, Enumerable<AnswerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutUserInput>
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type AnswerCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutUserInput>, Enumerable<AnswerCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutUserInput>
    createMany?: AnswerCommentCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
  }

  export type AnswerVoterCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutUserInput>, Enumerable<AnswerVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutUserInput>
    createMany?: AnswerVoterCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutUserInput>, Enumerable<QuestionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutUserInput>
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutUserInput>, Enumerable<QuestionCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutUserInput>
    createMany?: QuestionCommentCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
  }

  export type QuestionVoterCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutUserInput>, Enumerable<QuestionVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutUserInput>
    createMany?: QuestionVoterCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
  }

  export type TagsOnUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutUserInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: TagsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutUserInput>, Enumerable<AnswerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutUserInput>
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type AnswerCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutUserInput>, Enumerable<AnswerCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutUserInput>
    createMany?: AnswerCommentCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
  }

  export type AnswerVoterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutUserInput>, Enumerable<AnswerVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutUserInput>
    createMany?: AnswerVoterCreateManyUserInputEnvelope
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutUserInput>, Enumerable<QuestionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutUserInput>
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutUserInput>, Enumerable<QuestionCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutUserInput>
    createMany?: QuestionCommentCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
  }

  export type QuestionVoterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutUserInput>, Enumerable<QuestionVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutUserInput>
    createMany?: QuestionVoterCreateManyUserInputEnvelope
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
  }

  export type TagsOnUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutUserInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: TagsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
  }

  export type AnswerUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutUserInput>, Enumerable<AnswerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerCommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutUserInput>, Enumerable<AnswerCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerCommentCreateManyUserInputEnvelope
    set?: Enumerable<AnswerCommentWhereUniqueInput>
    disconnect?: Enumerable<AnswerCommentWhereUniqueInput>
    delete?: Enumerable<AnswerCommentWhereUniqueInput>
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
    update?: Enumerable<AnswerCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerCommentScalarWhereInput>
  }

  export type AnswerVoterUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutUserInput>, Enumerable<AnswerVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerVoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerVoterCreateManyUserInputEnvelope
    set?: Enumerable<AnswerVoterWhereUniqueInput>
    disconnect?: Enumerable<AnswerVoterWhereUniqueInput>
    delete?: Enumerable<AnswerVoterWhereUniqueInput>
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
    update?: Enumerable<AnswerVoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerVoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerVoterScalarWhereInput>
  }

  export type QuestionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutUserInput>, Enumerable<QuestionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type QuestionCommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutUserInput>, Enumerable<QuestionCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionCommentCreateManyUserInputEnvelope
    set?: Enumerable<QuestionCommentWhereUniqueInput>
    disconnect?: Enumerable<QuestionCommentWhereUniqueInput>
    delete?: Enumerable<QuestionCommentWhereUniqueInput>
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
    update?: Enumerable<QuestionCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionCommentScalarWhereInput>
  }

  export type QuestionVoterUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutUserInput>, Enumerable<QuestionVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionVoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionVoterCreateManyUserInputEnvelope
    set?: Enumerable<QuestionVoterWhereUniqueInput>
    disconnect?: Enumerable<QuestionVoterWhereUniqueInput>
    delete?: Enumerable<QuestionVoterWhereUniqueInput>
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
    update?: Enumerable<QuestionVoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionVoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionVoterScalarWhereInput>
  }

  export type TagsOnUsersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutUserInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TagsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TagsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<TagsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<TagsOnUsersWhereUniqueInput>
    delete?: Enumerable<TagsOnUsersWhereUniqueInput>
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
    update?: Enumerable<TagsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TagsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TagsOnUsersScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutUserInput>, Enumerable<AnswerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerCommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerCommentCreateWithoutUserInput>, Enumerable<AnswerCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerCommentCreateManyUserInputEnvelope
    set?: Enumerable<AnswerCommentWhereUniqueInput>
    disconnect?: Enumerable<AnswerCommentWhereUniqueInput>
    delete?: Enumerable<AnswerCommentWhereUniqueInput>
    connect?: Enumerable<AnswerCommentWhereUniqueInput>
    update?: Enumerable<AnswerCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerCommentScalarWhereInput>
  }

  export type AnswerVoterUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AnswerVoterCreateWithoutUserInput>, Enumerable<AnswerVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AnswerVoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AnswerVoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AnswerVoterCreateManyUserInputEnvelope
    set?: Enumerable<AnswerVoterWhereUniqueInput>
    disconnect?: Enumerable<AnswerVoterWhereUniqueInput>
    delete?: Enumerable<AnswerVoterWhereUniqueInput>
    connect?: Enumerable<AnswerVoterWhereUniqueInput>
    update?: Enumerable<AnswerVoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AnswerVoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AnswerVoterScalarWhereInput>
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutUserInput>, Enumerable<QuestionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type QuestionCommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionCommentCreateWithoutUserInput>, Enumerable<QuestionCommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionCommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionCommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionCommentCreateManyUserInputEnvelope
    set?: Enumerable<QuestionCommentWhereUniqueInput>
    disconnect?: Enumerable<QuestionCommentWhereUniqueInput>
    delete?: Enumerable<QuestionCommentWhereUniqueInput>
    connect?: Enumerable<QuestionCommentWhereUniqueInput>
    update?: Enumerable<QuestionCommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionCommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionCommentScalarWhereInput>
  }

  export type QuestionVoterUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<QuestionVoterCreateWithoutUserInput>, Enumerable<QuestionVoterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<QuestionVoterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<QuestionVoterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: QuestionVoterCreateManyUserInputEnvelope
    set?: Enumerable<QuestionVoterWhereUniqueInput>
    disconnect?: Enumerable<QuestionVoterWhereUniqueInput>
    delete?: Enumerable<QuestionVoterWhereUniqueInput>
    connect?: Enumerable<QuestionVoterWhereUniqueInput>
    update?: Enumerable<QuestionVoterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<QuestionVoterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<QuestionVoterScalarWhereInput>
  }

  export type TagsOnUsersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TagsOnUsersCreateWithoutUserInput>, Enumerable<TagsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TagsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TagsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TagsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<TagsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<TagsOnUsersWhereUniqueInput>
    delete?: Enumerable<TagsOnUsersWhereUniqueInput>
    connect?: Enumerable<TagsOnUsersWhereUniqueInput>
    update?: Enumerable<TagsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TagsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TagsOnUsersScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutTagsOnQuestionsInput = {
    create?: XOR<QuestionCreateWithoutTagsOnQuestionsInput, QuestionUncheckedCreateWithoutTagsOnQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsOnQuestionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTagsOnQuestionsInput = {
    create?: XOR<TagCreateWithoutTagsOnQuestionsInput, TagUncheckedCreateWithoutTagsOnQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnQuestionsInput
    connect?: TagWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutTagsOnQuestionsInput = {
    create?: XOR<QuestionCreateWithoutTagsOnQuestionsInput, QuestionUncheckedCreateWithoutTagsOnQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsOnQuestionsInput
    upsert?: QuestionUpsertWithoutTagsOnQuestionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutTagsOnQuestionsInput, QuestionUncheckedUpdateWithoutTagsOnQuestionsInput>
  }

  export type TagUpdateOneRequiredWithoutTagsOnQuestionsInput = {
    create?: XOR<TagCreateWithoutTagsOnQuestionsInput, TagUncheckedCreateWithoutTagsOnQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnQuestionsInput
    upsert?: TagUpsertWithoutTagsOnQuestionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutTagsOnQuestionsInput, TagUncheckedUpdateWithoutTagsOnQuestionsInput>
  }

  export type TagCreateNestedOneWithoutTagsOnUsersInput = {
    create?: XOR<TagCreateWithoutTagsOnUsersInput, TagUncheckedCreateWithoutTagsOnUsersInput>
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnUsersInput
    connect?: TagWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInterestedTagInput = {
    create?: XOR<UserCreateWithoutInterestedTagInput, UserUncheckedCreateWithoutInterestedTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestedTagInput
    connect?: UserWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutTagsOnUsersInput = {
    create?: XOR<TagCreateWithoutTagsOnUsersInput, TagUncheckedCreateWithoutTagsOnUsersInput>
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnUsersInput
    upsert?: TagUpsertWithoutTagsOnUsersInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutTagsOnUsersInput, TagUncheckedUpdateWithoutTagsOnUsersInput>
  }

  export type UserUpdateOneRequiredWithoutInterestedTagInput = {
    create?: XOR<UserCreateWithoutInterestedTagInput, UserUncheckedCreateWithoutInterestedTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestedTagInput
    upsert?: UserUpsertWithoutInterestedTagInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInterestedTagInput, UserUncheckedUpdateWithoutInterestedTagInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type AnswerCreateWithoutAnswerCommentInput = {
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutAnswerInput
    User: UserCreateNestedOneWithoutAnswerInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAnswerCommentInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAnswerCommentInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnswerCommentInput, AnswerUncheckedCreateWithoutAnswerCommentInput>
  }

  export type UserCreateWithoutAnswerCommentInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswerCommentInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswerCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerCommentInput, UserUncheckedCreateWithoutAnswerCommentInput>
  }

  export type AnswerUpsertWithoutAnswerCommentInput = {
    update: XOR<AnswerUpdateWithoutAnswerCommentInput, AnswerUncheckedUpdateWithoutAnswerCommentInput>
    create: XOR<AnswerCreateWithoutAnswerCommentInput, AnswerUncheckedCreateWithoutAnswerCommentInput>
  }

  export type AnswerUpdateWithoutAnswerCommentInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutAnswerInput
    User?: UserUpdateOneRequiredWithoutAnswerInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateWithoutAnswerCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutAnswerInput
  }

  export type UserUpsertWithoutAnswerCommentInput = {
    update: XOR<UserUpdateWithoutAnswerCommentInput, UserUncheckedUpdateWithoutAnswerCommentInput>
    create: XOR<UserCreateWithoutAnswerCommentInput, UserUncheckedCreateWithoutAnswerCommentInput>
  }

  export type UserUpdateWithoutAnswerCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAnswerCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type AnswerCreateWithoutAnswerVoterInput = {
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutAnswerInput
    User: UserCreateNestedOneWithoutAnswerInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAnswerVoterInput = {
    id?: number
    questionId: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAnswerVoterInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnswerVoterInput, AnswerUncheckedCreateWithoutAnswerVoterInput>
  }

  export type UserCreateWithoutAnswerVoterInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswerVoterInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswerVoterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerVoterInput, UserUncheckedCreateWithoutAnswerVoterInput>
  }

  export type AnswerUpsertWithoutAnswerVoterInput = {
    update: XOR<AnswerUpdateWithoutAnswerVoterInput, AnswerUncheckedUpdateWithoutAnswerVoterInput>
    create: XOR<AnswerCreateWithoutAnswerVoterInput, AnswerUncheckedCreateWithoutAnswerVoterInput>
  }

  export type AnswerUpdateWithoutAnswerVoterInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutAnswerInput
    User?: UserUpdateOneRequiredWithoutAnswerInput
    AnswerComment?: AnswerCommentUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateWithoutAnswerVoterInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutAnswerInput
  }

  export type UserUpsertWithoutAnswerVoterInput = {
    update: XOR<UserUpdateWithoutAnswerVoterInput, UserUncheckedUpdateWithoutAnswerVoterInput>
    create: XOR<UserCreateWithoutAnswerVoterInput, UserUncheckedCreateWithoutAnswerVoterInput>
  }

  export type UserUpdateWithoutAnswerVoterInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAnswerVoterInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type QuestionCreateWithoutAnswerInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type UserCreateWithoutAnswerInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswerInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerCommentCreateWithoutAnswerInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedCreateWithoutAnswerInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerCommentCreateOrConnectWithoutAnswerInput = {
    where: AnswerCommentWhereUniqueInput
    create: XOR<AnswerCommentCreateWithoutAnswerInput, AnswerCommentUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerCommentCreateManyAnswerInputEnvelope = {
    data: Enumerable<AnswerCommentCreateManyAnswerInput>
    skipDuplicates?: boolean
  }

  export type AnswerVoterCreateWithoutAnswerInput = {
    state?: number
    User: UserCreateNestedOneWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedCreateWithoutAnswerInput = {
    id?: number
    userId: string
    state?: number
  }

  export type AnswerVoterCreateOrConnectWithoutAnswerInput = {
    where: AnswerVoterWhereUniqueInput
    create: XOR<AnswerVoterCreateWithoutAnswerInput, AnswerVoterUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerVoterCreateManyAnswerInputEnvelope = {
    data: Enumerable<AnswerVoterCreateManyAnswerInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionInput
    QuestionComment?: QuestionCommentUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput
  }

  export type UserUpsertWithoutAnswerInput = {
    update: XOR<UserUpdateWithoutAnswerInput, UserUncheckedUpdateWithoutAnswerInput>
    create: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
  }

  export type UserUpdateWithoutAnswerInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAnswerInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnswerCommentWhereUniqueInput
    update: XOR<AnswerCommentUpdateWithoutAnswerInput, AnswerCommentUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnswerCommentCreateWithoutAnswerInput, AnswerCommentUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnswerCommentWhereUniqueInput
    data: XOR<AnswerCommentUpdateWithoutAnswerInput, AnswerCommentUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerCommentUpdateManyWithWhereWithoutAnswerInput = {
    where: AnswerCommentScalarWhereInput
    data: XOR<AnswerCommentUpdateManyMutationInput, AnswerCommentUncheckedUpdateManyWithoutAnswerCommentInput>
  }

  export type AnswerCommentScalarWhereInput = {
    AND?: Enumerable<AnswerCommentScalarWhereInput>
    OR?: Enumerable<AnswerCommentScalarWhereInput>
    NOT?: Enumerable<AnswerCommentScalarWhereInput>
    id?: IntFilter | number
    answerId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
  }

  export type AnswerVoterUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnswerVoterWhereUniqueInput
    update: XOR<AnswerVoterUpdateWithoutAnswerInput, AnswerVoterUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnswerVoterCreateWithoutAnswerInput, AnswerVoterUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerVoterUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnswerVoterWhereUniqueInput
    data: XOR<AnswerVoterUpdateWithoutAnswerInput, AnswerVoterUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerVoterUpdateManyWithWhereWithoutAnswerInput = {
    where: AnswerVoterScalarWhereInput
    data: XOR<AnswerVoterUpdateManyMutationInput, AnswerVoterUncheckedUpdateManyWithoutAnswerVoterInput>
  }

  export type AnswerVoterScalarWhereInput = {
    AND?: Enumerable<AnswerVoterScalarWhereInput>
    OR?: Enumerable<AnswerVoterScalarWhereInput>
    NOT?: Enumerable<AnswerVoterScalarWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    answerId?: IntFilter | number
    state?: IntFilter | number
  }

  export type QuestionCreateWithoutQuestionCommentInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionCommentInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionCommentInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionCommentInput, QuestionUncheckedCreateWithoutQuestionCommentInput>
  }

  export type UserCreateWithoutQuestionCommentInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionCommentInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionCommentInput, UserUncheckedCreateWithoutQuestionCommentInput>
  }

  export type QuestionUpsertWithoutQuestionCommentInput = {
    update: XOR<QuestionUpdateWithoutQuestionCommentInput, QuestionUncheckedUpdateWithoutQuestionCommentInput>
    create: XOR<QuestionCreateWithoutQuestionCommentInput, QuestionUncheckedCreateWithoutQuestionCommentInput>
  }

  export type QuestionUpdateWithoutQuestionCommentInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionInput
    Answer?: AnswerUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput
  }

  export type UserUpsertWithoutQuestionCommentInput = {
    update: XOR<UserUpdateWithoutQuestionCommentInput, UserUncheckedUpdateWithoutQuestionCommentInput>
    create: XOR<UserCreateWithoutQuestionCommentInput, UserUncheckedCreateWithoutQuestionCommentInput>
  }

  export type UserUpdateWithoutQuestionCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutQuestionCommentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type QuestionCreateWithoutQuestionVoterInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionVoterInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionVoterInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionVoterInput, QuestionUncheckedCreateWithoutQuestionVoterInput>
  }

  export type UserCreateWithoutQuestionVoterInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionVoterInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionVoterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionVoterInput, UserUncheckedCreateWithoutQuestionVoterInput>
  }

  export type QuestionUpsertWithoutQuestionVoterInput = {
    update: XOR<QuestionUpdateWithoutQuestionVoterInput, QuestionUncheckedUpdateWithoutQuestionVoterInput>
    create: XOR<QuestionCreateWithoutQuestionVoterInput, QuestionUncheckedCreateWithoutQuestionVoterInput>
  }

  export type QuestionUpdateWithoutQuestionVoterInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionInput
    Answer?: AnswerUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionVoterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput
  }

  export type UserUpsertWithoutQuestionVoterInput = {
    update: XOR<UserUpdateWithoutQuestionVoterInput, UserUncheckedUpdateWithoutQuestionVoterInput>
    create: XOR<UserCreateWithoutQuestionVoterInput, UserUncheckedCreateWithoutQuestionVoterInput>
  }

  export type UserUpdateWithoutQuestionVoterInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutQuestionVoterInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutQuestionInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutAnswerInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: Enumerable<AnswerCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type QuestionCommentCreateWithoutQuestionInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedCreateWithoutQuestionInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentCreateOrConnectWithoutQuestionInput = {
    where: QuestionCommentWhereUniqueInput
    create: XOR<QuestionCommentCreateWithoutQuestionInput, QuestionCommentUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionCommentCreateManyQuestionInputEnvelope = {
    data: Enumerable<QuestionCommentCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type QuestionVoterCreateWithoutQuestionInput = {
    state?: number
    User: UserCreateNestedOneWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedCreateWithoutQuestionInput = {
    id?: number
    userId: string
    state?: number
  }

  export type QuestionVoterCreateOrConnectWithoutQuestionInput = {
    where: QuestionVoterWhereUniqueInput
    create: XOR<QuestionVoterCreateWithoutQuestionInput, QuestionVoterUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionVoterCreateManyQuestionInputEnvelope = {
    data: Enumerable<QuestionVoterCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type TagsOnQuestionsCreateWithoutQuestionInput = {
    Tag: TagCreateNestedOneWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedCreateWithoutQuestionInput = {
    tagId: number
  }

  export type TagsOnQuestionsCreateOrConnectWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    create: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput>
  }

  export type TagsOnQuestionsCreateManyQuestionInputEnvelope = {
    data: Enumerable<TagsOnQuestionsCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuestionInput = {
    update: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
  }

  export type UserUpdateWithoutQuestionInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutQuestionInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
    InterestedTag?: TagsOnUsersUncheckedUpdateManyWithoutUserInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: Enumerable<AnswerScalarWhereInput>
    OR?: Enumerable<AnswerScalarWhereInput>
    NOT?: Enumerable<AnswerScalarWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    score?: IntFilter | number
    deleted?: BoolFilter | boolean
    verify?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
  }

  export type QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionCommentWhereUniqueInput
    update: XOR<QuestionCommentUpdateWithoutQuestionInput, QuestionCommentUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionCommentCreateWithoutQuestionInput, QuestionCommentUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionCommentWhereUniqueInput
    data: XOR<QuestionCommentUpdateWithoutQuestionInput, QuestionCommentUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionCommentUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionCommentScalarWhereInput
    data: XOR<QuestionCommentUpdateManyMutationInput, QuestionCommentUncheckedUpdateManyWithoutQuestionCommentInput>
  }

  export type QuestionCommentScalarWhereInput = {
    AND?: Enumerable<QuestionCommentScalarWhereInput>
    OR?: Enumerable<QuestionCommentScalarWhereInput>
    NOT?: Enumerable<QuestionCommentScalarWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
  }

  export type QuestionVoterUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionVoterWhereUniqueInput
    update: XOR<QuestionVoterUpdateWithoutQuestionInput, QuestionVoterUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionVoterCreateWithoutQuestionInput, QuestionVoterUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionVoterUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionVoterWhereUniqueInput
    data: XOR<QuestionVoterUpdateWithoutQuestionInput, QuestionVoterUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionVoterUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionVoterScalarWhereInput
    data: XOR<QuestionVoterUpdateManyMutationInput, QuestionVoterUncheckedUpdateManyWithoutQuestionVoterInput>
  }

  export type QuestionVoterScalarWhereInput = {
    AND?: Enumerable<QuestionVoterScalarWhereInput>
    OR?: Enumerable<QuestionVoterScalarWhereInput>
    NOT?: Enumerable<QuestionVoterScalarWhereInput>
    id?: IntFilter | number
    questionId?: IntFilter | number
    userId?: StringFilter | string
    state?: IntFilter | number
  }

  export type TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    update: XOR<TagsOnQuestionsUpdateWithoutQuestionInput, TagsOnQuestionsUncheckedUpdateWithoutQuestionInput>
    create: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput>
  }

  export type TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    data: XOR<TagsOnQuestionsUpdateWithoutQuestionInput, TagsOnQuestionsUncheckedUpdateWithoutQuestionInput>
  }

  export type TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput = {
    where: TagsOnQuestionsScalarWhereInput
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyWithoutTagsOnQuestionsInput>
  }

  export type TagsOnQuestionsScalarWhereInput = {
    AND?: Enumerable<TagsOnQuestionsScalarWhereInput>
    OR?: Enumerable<TagsOnQuestionsScalarWhereInput>
    NOT?: Enumerable<TagsOnQuestionsScalarWhereInput>
    questionId?: IntFilter | number
    tagId?: IntFilter | number
  }

  export type TagsOnQuestionsCreateWithoutTagInput = {
    Question: QuestionCreateNestedOneWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedCreateWithoutTagInput = {
    questionId: number
  }

  export type TagsOnQuestionsCreateOrConnectWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    create: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput>
  }

  export type TagsOnQuestionsCreateManyTagInputEnvelope = {
    data: Enumerable<TagsOnQuestionsCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type TagsOnUsersCreateWithoutTagInput = {
    User: UserCreateNestedOneWithoutInterestedTagInput
  }

  export type TagsOnUsersUncheckedCreateWithoutTagInput = {
    userId: string
  }

  export type TagsOnUsersCreateOrConnectWithoutTagInput = {
    where: TagsOnUsersWhereUniqueInput
    create: XOR<TagsOnUsersCreateWithoutTagInput, TagsOnUsersUncheckedCreateWithoutTagInput>
  }

  export type TagsOnUsersCreateManyTagInputEnvelope = {
    data: Enumerable<TagsOnUsersCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    update: XOR<TagsOnQuestionsUpdateWithoutTagInput, TagsOnQuestionsUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput>
  }

  export type TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    data: XOR<TagsOnQuestionsUpdateWithoutTagInput, TagsOnQuestionsUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnQuestionsUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnQuestionsScalarWhereInput
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyWithoutTagsOnQuestionsInput>
  }

  export type TagsOnUsersUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnUsersWhereUniqueInput
    update: XOR<TagsOnUsersUpdateWithoutTagInput, TagsOnUsersUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnUsersCreateWithoutTagInput, TagsOnUsersUncheckedCreateWithoutTagInput>
  }

  export type TagsOnUsersUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnUsersWhereUniqueInput
    data: XOR<TagsOnUsersUpdateWithoutTagInput, TagsOnUsersUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnUsersUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnUsersScalarWhereInput
    data: XOR<TagsOnUsersUpdateManyMutationInput, TagsOnUsersUncheckedUpdateManyWithoutTagsOnUsersInput>
  }

  export type TagsOnUsersScalarWhereInput = {
    AND?: Enumerable<TagsOnUsersScalarWhereInput>
    OR?: Enumerable<TagsOnUsersScalarWhereInput>
    NOT?: Enumerable<TagsOnUsersScalarWhereInput>
    tagId?: IntFilter | number
    userId?: StringFilter | string
  }

  export type AnswerCreateWithoutUserInput = {
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutAnswerInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutUserInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerCreateManyUserInputEnvelope = {
    data: Enumerable<AnswerCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AnswerCommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer: AnswerCreateNestedOneWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedCreateWithoutUserInput = {
    id?: number
    answerId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerCommentCreateOrConnectWithoutUserInput = {
    where: AnswerCommentWhereUniqueInput
    create: XOR<AnswerCommentCreateWithoutUserInput, AnswerCommentUncheckedCreateWithoutUserInput>
  }

  export type AnswerCommentCreateManyUserInputEnvelope = {
    data: Enumerable<AnswerCommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AnswerVoterCreateWithoutUserInput = {
    state?: number
    Answer: AnswerCreateNestedOneWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedCreateWithoutUserInput = {
    id?: number
    answerId: number
    state?: number
  }

  export type AnswerVoterCreateOrConnectWithoutUserInput = {
    where: AnswerVoterWhereUniqueInput
    create: XOR<AnswerVoterCreateWithoutUserInput, AnswerVoterUncheckedCreateWithoutUserInput>
  }

  export type AnswerVoterCreateManyUserInputEnvelope = {
    data: Enumerable<AnswerVoterCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutUserInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: Enumerable<QuestionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type QuestionCommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Question: QuestionCreateNestedOneWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentCreateOrConnectWithoutUserInput = {
    where: QuestionCommentWhereUniqueInput
    create: XOR<QuestionCommentCreateWithoutUserInput, QuestionCommentUncheckedCreateWithoutUserInput>
  }

  export type QuestionCommentCreateManyUserInputEnvelope = {
    data: Enumerable<QuestionCommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type QuestionVoterCreateWithoutUserInput = {
    state?: number
    Question: QuestionCreateNestedOneWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    state?: number
  }

  export type QuestionVoterCreateOrConnectWithoutUserInput = {
    where: QuestionVoterWhereUniqueInput
    create: XOR<QuestionVoterCreateWithoutUserInput, QuestionVoterUncheckedCreateWithoutUserInput>
  }

  export type QuestionVoterCreateManyUserInputEnvelope = {
    data: Enumerable<QuestionVoterCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TagsOnUsersCreateWithoutUserInput = {
    Tag: TagCreateNestedOneWithoutTagsOnUsersInput
  }

  export type TagsOnUsersUncheckedCreateWithoutUserInput = {
    tagId: number
  }

  export type TagsOnUsersCreateOrConnectWithoutUserInput = {
    where: TagsOnUsersWhereUniqueInput
    create: XOR<TagsOnUsersCreateWithoutUserInput, TagsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type TagsOnUsersCreateManyUserInputEnvelope = {
    data: Enumerable<TagsOnUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AnswerCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerCommentWhereUniqueInput
    update: XOR<AnswerCommentUpdateWithoutUserInput, AnswerCommentUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCommentCreateWithoutUserInput, AnswerCommentUncheckedCreateWithoutUserInput>
  }

  export type AnswerCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerCommentWhereUniqueInput
    data: XOR<AnswerCommentUpdateWithoutUserInput, AnswerCommentUncheckedUpdateWithoutUserInput>
  }

  export type AnswerCommentUpdateManyWithWhereWithoutUserInput = {
    where: AnswerCommentScalarWhereInput
    data: XOR<AnswerCommentUpdateManyMutationInput, AnswerCommentUncheckedUpdateManyWithoutAnswerCommentInput>
  }

  export type AnswerVoterUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerVoterWhereUniqueInput
    update: XOR<AnswerVoterUpdateWithoutUserInput, AnswerVoterUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerVoterCreateWithoutUserInput, AnswerVoterUncheckedCreateWithoutUserInput>
  }

  export type AnswerVoterUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerVoterWhereUniqueInput
    data: XOR<AnswerVoterUpdateWithoutUserInput, AnswerVoterUncheckedUpdateWithoutUserInput>
  }

  export type AnswerVoterUpdateManyWithWhereWithoutUserInput = {
    where: AnswerVoterScalarWhereInput
    data: XOR<AnswerVoterUpdateManyMutationInput, AnswerVoterUncheckedUpdateManyWithoutAnswerVoterInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: IntFilter | number
    userId?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    score?: IntFilter | number
    deleted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    facebookId?: StringNullableFilter | string | null
  }

  export type QuestionCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionCommentWhereUniqueInput
    update: XOR<QuestionCommentUpdateWithoutUserInput, QuestionCommentUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCommentCreateWithoutUserInput, QuestionCommentUncheckedCreateWithoutUserInput>
  }

  export type QuestionCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionCommentWhereUniqueInput
    data: XOR<QuestionCommentUpdateWithoutUserInput, QuestionCommentUncheckedUpdateWithoutUserInput>
  }

  export type QuestionCommentUpdateManyWithWhereWithoutUserInput = {
    where: QuestionCommentScalarWhereInput
    data: XOR<QuestionCommentUpdateManyMutationInput, QuestionCommentUncheckedUpdateManyWithoutQuestionCommentInput>
  }

  export type QuestionVoterUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionVoterWhereUniqueInput
    update: XOR<QuestionVoterUpdateWithoutUserInput, QuestionVoterUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionVoterCreateWithoutUserInput, QuestionVoterUncheckedCreateWithoutUserInput>
  }

  export type QuestionVoterUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionVoterWhereUniqueInput
    data: XOR<QuestionVoterUpdateWithoutUserInput, QuestionVoterUncheckedUpdateWithoutUserInput>
  }

  export type QuestionVoterUpdateManyWithWhereWithoutUserInput = {
    where: QuestionVoterScalarWhereInput
    data: XOR<QuestionVoterUpdateManyMutationInput, QuestionVoterUncheckedUpdateManyWithoutQuestionVoterInput>
  }

  export type TagsOnUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: TagsOnUsersWhereUniqueInput
    update: XOR<TagsOnUsersUpdateWithoutUserInput, TagsOnUsersUncheckedUpdateWithoutUserInput>
    create: XOR<TagsOnUsersCreateWithoutUserInput, TagsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type TagsOnUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: TagsOnUsersWhereUniqueInput
    data: XOR<TagsOnUsersUpdateWithoutUserInput, TagsOnUsersUncheckedUpdateWithoutUserInput>
  }

  export type TagsOnUsersUpdateManyWithWhereWithoutUserInput = {
    where: TagsOnUsersScalarWhereInput
    data: XOR<TagsOnUsersUpdateManyMutationInput, TagsOnUsersUncheckedUpdateManyWithoutInterestedTagInput>
  }

  export type QuestionCreateWithoutTagsOnQuestionsInput = {
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    User: UserCreateNestedOneWithoutQuestionInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTagsOnQuestionsInput = {
    id?: number
    userId: string
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTagsOnQuestionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTagsOnQuestionsInput, QuestionUncheckedCreateWithoutTagsOnQuestionsInput>
  }

  export type TagCreateWithoutTagsOnQuestionsInput = {
    name: string
    TagsOnUsers?: TagsOnUsersCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutTagsOnQuestionsInput = {
    id?: number
    name: string
    TagsOnUsers?: TagsOnUsersUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutTagsOnQuestionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTagsOnQuestionsInput, TagUncheckedCreateWithoutTagsOnQuestionsInput>
  }

  export type QuestionUpsertWithoutTagsOnQuestionsInput = {
    update: XOR<QuestionUpdateWithoutTagsOnQuestionsInput, QuestionUncheckedUpdateWithoutTagsOnQuestionsInput>
    create: XOR<QuestionCreateWithoutTagsOnQuestionsInput, QuestionUncheckedCreateWithoutTagsOnQuestionsInput>
  }

  export type QuestionUpdateWithoutTagsOnQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionInput
    Answer?: AnswerUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateWithoutTagsOnQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutQuestionInput
  }

  export type TagUpsertWithoutTagsOnQuestionsInput = {
    update: XOR<TagUpdateWithoutTagsOnQuestionsInput, TagUncheckedUpdateWithoutTagsOnQuestionsInput>
    create: XOR<TagCreateWithoutTagsOnQuestionsInput, TagUncheckedCreateWithoutTagsOnQuestionsInput>
  }

  export type TagUpdateWithoutTagsOnQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    TagsOnUsers?: TagsOnUsersUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateWithoutTagsOnQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    TagsOnUsers?: TagsOnUsersUncheckedUpdateManyWithoutTagInput
  }

  export type TagCreateWithoutTagsOnUsersInput = {
    name: string
    TagsOnQuestions?: TagsOnQuestionsCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutTagsOnUsersInput = {
    id?: number
    name: string
    TagsOnQuestions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutTagsOnUsersInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTagsOnUsersInput, TagUncheckedCreateWithoutTagsOnUsersInput>
  }

  export type UserCreateWithoutInterestedTagInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestedTagInput = {
    uid: string
    reputation?: number
    description?: string | null
    joiningDate?: Date | string
    displayName: string
    photoURL?: string | null
    phoneNumber?: string | null
    email: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedCreateNestedManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedCreateNestedManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestedTagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestedTagInput, UserUncheckedCreateWithoutInterestedTagInput>
  }

  export type TagUpsertWithoutTagsOnUsersInput = {
    update: XOR<TagUpdateWithoutTagsOnUsersInput, TagUncheckedUpdateWithoutTagsOnUsersInput>
    create: XOR<TagCreateWithoutTagsOnUsersInput, TagUncheckedCreateWithoutTagsOnUsersInput>
  }

  export type TagUpdateWithoutTagsOnUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateWithoutTagsOnUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutTagInput
  }

  export type UserUpsertWithoutInterestedTagInput = {
    update: XOR<UserUpdateWithoutInterestedTagInput, UserUncheckedUpdateWithoutInterestedTagInput>
    create: XOR<UserCreateWithoutInterestedTagInput, UserUncheckedCreateWithoutInterestedTagInput>
  }

  export type UserUpdateWithoutInterestedTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutUserInput
    Question?: QuestionUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutInterestedTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    photoURL?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutUserInput
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutUserInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutUserInput
    Question?: QuestionUncheckedUpdateManyWithoutUserInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutUserInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutUserInput
  }

  export type AnswerCommentCreateManyAnswerInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerVoterCreateManyAnswerInput = {
    id?: number
    userId: string
    state?: number
  }

  export type AnswerCommentUpdateWithoutAnswerInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCommentUncheckedUpdateManyWithoutAnswerCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerVoterUpdateWithoutAnswerInput = {
    state?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerVoterUncheckedUpdateManyWithoutAnswerVoterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    userId: string
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentCreateManyQuestionInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionVoterCreateManyQuestionInput = {
    id?: number
    userId: string
    state?: number
  }

  export type TagsOnQuestionsCreateManyQuestionInput = {
    tagId: number
  }

  export type AnswerUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAnswerInput
    AnswerComment?: AnswerCommentUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentUncheckedUpdateManyWithoutQuestionCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionVoterUpdateWithoutQuestionInput = {
    state?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionVoterUncheckedUpdateManyWithoutQuestionVoterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnQuestionsUpdateWithoutQuestionInput = {
    Tag?: TagUpdateOneRequiredWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedUpdateWithoutQuestionInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutTagsOnQuestionsInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnQuestionsCreateManyTagInput = {
    questionId: number
  }

  export type TagsOnUsersCreateManyTagInput = {
    userId: string
  }

  export type TagsOnQuestionsUpdateWithoutTagInput = {
    Question?: QuestionUpdateOneRequiredWithoutTagsOnQuestionsInput
  }

  export type TagsOnQuestionsUncheckedUpdateWithoutTagInput = {
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnUsersUpdateWithoutTagInput = {
    User?: UserUpdateOneRequiredWithoutInterestedTagInput
  }

  export type TagsOnUsersUncheckedUpdateWithoutTagInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagsOnUsersUncheckedUpdateManyWithoutTagsOnUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyUserInput = {
    id?: number
    questionId: number
    content: string
    score?: number
    deleted?: boolean
    verify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerCommentCreateManyUserInput = {
    id?: number
    answerId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type AnswerVoterCreateManyUserInput = {
    id?: number
    answerId: number
    state?: number
  }

  export type QuestionCreateManyUserInput = {
    id?: number
    title: string
    content: string
    score?: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionCommentCreateManyUserInput = {
    id?: number
    questionId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facebookId?: string | null
  }

  export type QuestionVoterCreateManyUserInput = {
    id?: number
    questionId: number
    state?: number
  }

  export type TagsOnUsersCreateManyUserInput = {
    tagId: number
  }

  export type AnswerUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutAnswerInput
    AnswerComment?: AnswerCommentUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUpdateManyWithoutAnswerInput
  }

  export type AnswerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    verify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    AnswerComment?: AnswerCommentUncheckedUpdateManyWithoutAnswerInput
    AnswerVoter?: AnswerVoterUncheckedUpdateManyWithoutAnswerInput
  }

  export type AnswerCommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUpdateOneRequiredWithoutAnswerCommentInput
  }

  export type AnswerCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerVoterUpdateWithoutUserInput = {
    state?: IntFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateOneRequiredWithoutAnswerVoterInput
  }

  export type AnswerVoterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionInput
    QuestionComment?: QuestionCommentUncheckedUpdateManyWithoutQuestionInput
    QuestionVoter?: QuestionVoterUncheckedUpdateManyWithoutQuestionInput
    TagsOnQuestions?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    Question?: QuestionUpdateOneRequiredWithoutQuestionCommentInput
  }

  export type QuestionCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionVoterUpdateWithoutUserInput = {
    state?: IntFieldUpdateOperationsInput | number
    Question?: QuestionUpdateOneRequiredWithoutQuestionVoterInput
  }

  export type QuestionVoterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnUsersUpdateWithoutUserInput = {
    Tag?: TagUpdateOneRequiredWithoutTagsOnUsersInput
  }

  export type TagsOnUsersUncheckedUpdateWithoutUserInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnUsersUncheckedUpdateManyWithoutInterestedTagInput = {
    tagId?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.DMMF.Document;
}