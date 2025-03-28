import React from 'react';
import "./FlexPage.css";

export const FlexPage = ({children}: React.PropsWithChildren<{}>) => {
  return <main className="flex-page page">{children}</main>
};
