import { ErrorBoundary } from "@openstax/ui-components";
import { createHashHistory, Location } from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import { getRequestResponder } from "./core";
import { serviceProviderMiddleware } from "./core/context/services";
import { composeResponseServiceMiddleware } from "./core/services";
import './index.css';

/*
 * the use of the service container pattern in an app that only
 * has one entry point is pretty academic. it might become relevant
 * if you had some external dependencies the FE accessed directly
 * that you wanted to use a fake driver for in dev (or something like that)
 */
const services = {
  history: createHashHistory(),
};

export type BrowserServices = typeof services;

const handler = getRequestResponder(services, composeResponseServiceMiddleware(
  serviceProviderMiddleware,
));

const Router = () => {
  const [location, setLocation] = React.useState<Location>(services.history.location);

  React.useEffect(() => {
    return services.history.listen((locationChange) => {
      setLocation(locationChange.location);
    });
  }, []);

  return <>{handler(location)}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      renderFallback
      // sentryDsn='https://examplePublicKey@o0.ingest.sentry.io/0'
    >
      <Router />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
