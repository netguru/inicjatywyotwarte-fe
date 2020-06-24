import React from 'react';
import ReactGA from 'react-ga';
import { trackingId } from 'constants/constants';

ReactGA.initialize(trackingId, { testMode: true });

export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = props => {
    React.useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
}
