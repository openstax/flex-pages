'use client';
import { ActionContext } from '@openstax/flex-page-renderer/ActionContext.js';
import { RouteContext } from '@openstax/flex-page-renderer/RouteContext.js';
import type { LinkFields } from '@openstax/flex-page-renderer/components/Link.config.js';
import { DropdownMenu, DropdownMenuItem } from '@openstax/ui-components';
import React from 'react';

// The "Get the book" dropdown. Each item is a dynamic link target resolved
// against the host app's contexts: `route`/`action` items fire the registered
// handler (the CMS-side dialogs live here), url items render as plain links.
export function BookMenu({buttonText, items}: {buttonText: string; items: LinkFields[]}) {
  const routes = React.useContext(RouteContext);
  const actions = React.useContext(ActionContext);

  return <DropdownMenu text={buttonText} variant='light'>
    {items.map((item, i) => {
      const {type, value, params} = item.target;
      if (type === 'route') {
        const route = routes[value];
        return <DropdownMenuItem key={i} onAction={() => route?.handler(params)}>{item.text}</DropdownMenuItem>;
      }
      if (type === 'action') {
        return <DropdownMenuItem key={i} onAction={() => actions[value]?.handler?.(params)}>{item.text}</DropdownMenuItem>;
      }
      return <DropdownMenuItem key={i} href={value}>{item.text}</DropdownMenuItem>;
    })}
  </DropdownMenu>;
}
