import React from 'react';
import * as UI from '@openstax/ui-components';
export const FormsContext = React.createContext(UI.Forms.Controlled);
export const useForms = () => React.useContext(FormsContext);
