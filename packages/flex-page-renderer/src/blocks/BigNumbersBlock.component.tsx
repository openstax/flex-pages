import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './BigNumbersBlock.css';

export interface BigNumbersBlockConfig {
  id: string;
  type: 'big_numbers';
  value: {
    content: ContentBlockConfig[];
  };
}

// A container that lays out its Big Number children in a wrapping row (an
// impact-stats band). Children are resolved upstream and passed as `content`,
// matching how Well/Section render their nested blocks; the row layout lives
// in BigNumbersBlock.scss.
export function BigNumbersBlock({content}: {data: BigNumbersBlockConfig; content?: React.ReactNode}) {
  return <div className="content-block-big-numbers">{content}</div>;
}
