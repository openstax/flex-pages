import React from 'react';
import "./FlexPage.css";

export const FlexPage = ({children}: React.PropsWithChildren<{}>) => {
  return <div className="flex-page page">{children}</div>
};
