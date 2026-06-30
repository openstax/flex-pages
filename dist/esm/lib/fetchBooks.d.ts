export interface BookData {
    id: string;
    title: string;
    slug: string;
    coverUrl: string;
}
export type FetchBooks = (ids: string[]) => Promise<Record<string, BookData>>;
export declare const fetchBooks: FetchBooks;
