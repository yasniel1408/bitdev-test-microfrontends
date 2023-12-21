/* eslint import/no-unresolved: [2, { ignore: ['mars_weather/MarsWeatherComponent'] }] */
import React from 'react';

// @ts-ignore-next-line @bit-ignore
const RemoteApp = React.lazy(() => import('mars_weather/MarsWeatherComponent'));

const App = () => {
  return (
    <div>
      <h1>Host App</h1>
      <React.Suspense fallback={<h4>Loading remote app...</h4>}>
        <RemoteApp />
      </React.Suspense>
    </div>
  );
};

export default App;
