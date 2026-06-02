import type { ConfigMetadata, ContentBlockConfig } from '../ContentBlockContext';
import type { LinkFields } from '../components/Link.fields';
type LinkTarget = LinkFields['target'];
export type LinkMapper = (target: LinkTarget) => LinkTarget | Promise<LinkTarget>;
export interface PageNodeMappers {
    linkMapper?: LinkMapper;
}
export type BlockRegistry = Record<string, {
    fields: ConfigMetadata<string>;
}>;
export declare function mapPageNodes(nodes: ContentBlockConfig[], blocks: BlockRegistry, mappers: PageNodeMappers): Promise<ContentBlockConfig[]>;
export {};
