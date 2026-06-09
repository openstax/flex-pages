import type { BlockProcessingDefinitions, ContentBlockConfig } from '../ContentBlockContext.js';
import type { ImageFields } from '../components/Image.config.js';
import type { LinkFields } from '../components/Link.config.js';
type LinkTarget = LinkFields['target'];
export type LinkMapper = (target: LinkTarget) => LinkTarget | Promise<LinkTarget>;
export type ImageMapper = (image: ImageFields) => ImageFields | Promise<ImageFields>;
export type BlockMapper = (block: ContentBlockConfig) => ContentBlockConfig | Promise<ContentBlockConfig>;
export interface PageNodeMappers {
    linkMapper?: LinkMapper;
    imageMapper?: ImageMapper;
    blockMapper?: BlockMapper;
}
export type ParseHtml = (html: string) => Document;
export declare function mapPageNodes<D extends BlockProcessingDefinitions<any>>(nodes: ContentBlockConfig[], blocks: D, mappers: PageNodeMappers, parseHtml?: ParseHtml | undefined): Promise<ContentBlockConfig[]>;
export {};
