import {homeScreen} from './screen';
import {editorScreen} from './editor';
import * as docs from './docs';

export const exampleRoutes = () => [
  homeScreen,
  editorScreen,
  ...Object.values(docs),
];
