import type { ConfigMetadata, ContentBlockConfig } from '../ContentBlockContext';
import type { ImageFields } from '../components/Image.fields';
import type { LinkFields } from '../components/Link.fields';
type LinkTarget = LinkFields['target'];
export type LinkMapper = (target: LinkTarget) => LinkTarget | Promise<LinkTarget>;
export type ImageMapper = (image: ImageFields) => ImageFields | Promise<ImageFields>;
export interface PageNodeMappers {
    linkMapper?: LinkMapper;
    imageMapper?: ImageMapper;
}
export type ParseHtml = (html: string) => Document;
export type BlockRegistry = Record<string, {
    fields: ConfigMetadata<string>;
}>;
export declare function mapPageNodes(nodes: ContentBlockConfig[], blocks: BlockRegistry, mappers: PageNodeMappers, parseHtml?: ParseHtml | undefined): Promise<ContentBlockConfig[]>;
export {};
