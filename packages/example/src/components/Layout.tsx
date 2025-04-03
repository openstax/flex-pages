import React from 'react';
import * as UI from '@openstax/ui-components';

export const Layout = ({children}: React.PropsWithChildren<{}>) => {
  return <UI.BodyPortalSlotsContext.Provider value={['nav', 'root']}>
    {children}
  </UI.BodyPortalSlotsContext.Provider>;
};
