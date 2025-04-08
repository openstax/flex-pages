export declare function findByType<Union extends {
    type: string;
}, T extends string>(entries: Union[] | undefined, type: T): Extract<Union, {
    type: T;
}> | undefined;
export declare function scrollTo(el: Element, offset?: number): void;
