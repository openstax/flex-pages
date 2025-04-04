import React from 'react';
import * as UI from '@openstax/ui-components';

export const FormsContext = React.createContext<typeof UI.Forms.Controlled>(UI.Forms.Controlled);
export const useForms = () => React.useContext(FormsContext);
