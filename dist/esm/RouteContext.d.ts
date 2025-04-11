import React from 'react';
import { ConfigField } from '.';
export declare type RouteConfig = Record<string, {
    id: string;
    label: string;
    handler: (params?: Record<string, any>) => void;
    render: (params?: Record<string, any>) => string;
    fields?: ConfigField[];
}>;
export declare const RouteContext: React.Context<RouteConfig>;
