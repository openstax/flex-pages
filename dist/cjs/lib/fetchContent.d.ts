export interface ContentRef {
    id: string;
    type: string;
}
export interface ContentData {
    id: string;
    title: string;
    image?: string;
    excerpt?: string;
}
export type FetchContent = (refs: ContentRef[]) => Promise<Record<string, ContentData>>;
export declare const fetchContent: FetchContent;
