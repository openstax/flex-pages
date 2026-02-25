import * as UI from '@openstax/ui-components';
import React from 'react';
export const FormsContext = React.createContext(UI.Forms.Controlled);
export const useForms = () => React.useContext(FormsContext);
