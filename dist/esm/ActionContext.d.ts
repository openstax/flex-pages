import React from 'react';
export declare type ActionConfig = Record<string, {
    id: string;
    label: string;
    handler?: () => void;
}>;
export declare const ActionContext: React.Context<ActionConfig>;
