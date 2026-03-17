export declare function resolveBackground(backgroundColor: string | undefined, gradientColor: string | undefined, gradientDirection: string | undefined): {
    isDark: boolean;
    background?: undefined;
    backgroundColor?: undefined;
} | {
    background: string;
    backgroundColor: string;
    isDark: boolean;
} | {
    backgroundColor: string;
    isDark: boolean;
    background?: undefined;
};
export declare function findByType<Union extends {
    type: string;
}, T extends string>(entries: Union[] | undefined, type: T): Extract<Union, {
    type: T;
}> | undefined;
export declare function scrollTo(el: Element, offset?: number): void;
