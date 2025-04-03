import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  &.collapsed > *:not(legend) {
    display: none;
  }

  > legend, > legend button {
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  > legend button {
    background: none;
    border: none;
  }
`;

export const CollapsibleFieldset = ({children, ...props}: React.PropsWithChildren<{legend: string}>) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return <Fieldset className={cn({collapsed})}>
    <legend>
      <button type="button"
        onClick={() => setCollapsed(previous => !previous)}
      >{collapsed ? unFoldIcon : foldIcon}</button>
      {props.legend}
    </legend>
    {children}
  </Fieldset>
};

const foldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z"/></svg>;

const unFoldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/></svg>;
