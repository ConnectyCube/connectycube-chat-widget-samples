export type Timestamp = number;
export type ISODateString = string;
export type DateOrTimestamp = ISODateString | Timestamp | null | undefined;
export type SearchOperator = 'lt' | 'lte' | 'gt' | 'gte' | 'ne' | 'in' | 'nin' | 'all' | 'or' | 'ctn' | 'start_with';
export type SearchCondition<T> = T | {
    [key in SearchOperator]?: T | T[];
} | {
    [key: string]: SearchCondition<T>;
};
export type SearchableProps<T> = {
    [K in keyof T]?: SearchCondition<T[K]>;
};
export type EmptyResponse = void | null | undefined | '' | ' ' | 'empty body';
export type ForceParams = {
    force?: number | string;
} | undefined;
//# sourceMappingURL=common.d.ts.map