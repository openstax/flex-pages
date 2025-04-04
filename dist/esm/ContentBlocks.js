import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { BlockContext } from './ContentBlockContext';
export function ContentBlocks({ data }) {
    return _jsx(_Fragment, { children: data.map((block) => _jsx(ContentBlock, { data: block }, block.id)) });
}
// eslint-disable-next-line complexity
export function ContentBlock({ data }) {
    const Block = React.useContext(BlockContext)[data.type];
    if (!Block)
        return _jsx("pre", { children: JSON.stringify(data, null, 2) });
    return _jsx(Block, { data: data });
}
