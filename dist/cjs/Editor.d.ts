import React from 'react';
import type * as UI from '@openstax/ui-components';
import { BlockComponents, ActionConfig, RouteConfig } from '@openstax/flex-page-renderer/ContentBlockRoot';
export declare const FlexBlockEditor: ({ name, label, blocks, actions, routes, fields, type, Forms }: {
    name: string;
    label?: string | undefined;
    type?: string | undefined;
    blocks: BlockComponents<any>;
    actions?: ActionConfig | undefined;
    routes?: RouteConfig | undefined;
    fields?: Record<string, React.ComponentType<any>> | undefined;
    categories?: string[] | undefined;
    Forms?: typeof UI.Forms.Controlled | undefined;
}) => JSX.Element;
