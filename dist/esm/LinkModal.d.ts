import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import type * as UI from '@openstax/ui-components';
import type { LinkResult } from './linkEditing';
export declare const LinkModal: ({ Forms, initialText, initial, onConfirm, onRemove, onCancel }: {
    Forms: typeof UI.Forms.Controlled;
    initialText: string;
    initial: LinkTarget | null;
    onConfirm: (result: LinkResult) => void;
    onRemove: () => void;
    onCancel: () => void;
}) => import("react").JSX.Element;
