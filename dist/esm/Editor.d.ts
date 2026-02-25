import type { BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
import type { ActionConfig, RouteConfig } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import type * as UI from '@openstax/ui-components';
import React from 'react';
export declare const FlexBlockEditor: ({ name, label, blocks, actions, routes, fields, type, Forms }: {
    name: string;
    label?: string;
    type?: string;
    blocks: BlockComponents<any>;
    actions?: ActionConfig;
    routes?: RouteConfig;
    fields?: Record<string, React.ComponentType<any>>;
    categories?: string[];
    Forms?: typeof UI.Forms.Controlled;
}) => import("react/jsx-runtime").JSX.Element;
