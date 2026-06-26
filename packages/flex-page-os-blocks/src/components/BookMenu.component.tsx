'use client';
import { ActionContext } from '@openstax/flex-page-renderer/ActionContext';
import { RouteContext } from '@openstax/flex-page-renderer/RouteContext';
import type { LinkFields } from '@openstax/flex-page-renderer/components/Link.config';
import { DropdownMenu, DropdownMenuItem } from '@openstax/ui-components';
import React from 'react';

// The "Get the book" dropdown. Each item is a dynamic link target: action
// targets fire a registered handler (onAction); every other target is a real
// link and is rendered with href (route targets resolve to their url via the
// RouteContext renderer). react-aria renders href items as <a> and onAction
// items as <div>, both role=menuitem.
export function BookMenu({buttonText, items, disabled}: {buttonText?: string; items: LinkFields[]; disabled?: boolean}) {
  const routes = React.useContext(RouteContext);
  const actions = React.useContext(ActionContext);

  return <DropdownMenu text={buttonText} variant='light' width='100%' disabled={disabled}>
    {items.map((item, i) => {
      const {type, value, params} = item.target;
      if (type === 'action') {
        return <DropdownMenuItem key={i} onAction={() => actions[value]?.handler?.(params)}>{item.text}</DropdownMenuItem>;
      }
      const href = type === 'route' ? routes[value]?.render(params) : value;
      return <DropdownMenuItem key={i} href={href}>{item.text}</DropdownMenuItem>;
    })}
  </DropdownMenu>;
}
