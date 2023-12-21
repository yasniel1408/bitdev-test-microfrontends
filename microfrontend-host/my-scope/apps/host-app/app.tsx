/* eslint import/no-unresolved: [2, { ignore: ['mars_weather/MarsWeatherComponent'] }] */
/* eslint import/no-unresolved: [2, { ignore: ['@bit/my-org-microfrontend.my-scope.landing-component'] }] */
import React from 'react';

// @ts-ignore-next-line @bit-ignore
const RemoteApp = React.lazy(() => import('mars_weather/MarsWeatherComponent'));
// @ts-ignore-next-line @bit-ignore
const RemoteApp2 = React.lazy(() => import('my-org-microfrontend.my-scope/landing-component'));

const App = () => {
  return (
    <div>
      <h1>Host App</h1>
      <React.Suspense fallback={<h4>Loading remote app...</h4>}>
        <RemoteApp />
        <RemoteApp2 />
      </React.Suspense>
    </div>
  );
};

export default App;
