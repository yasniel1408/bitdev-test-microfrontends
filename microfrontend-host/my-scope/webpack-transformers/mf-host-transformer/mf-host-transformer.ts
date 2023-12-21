import type { WebpackConfigTransformer } from '@teambit/webpack';
import { container } from 'webpack';

const { ModuleFederationPlugin } = container;

/* get a webpack config and return a mutated one */
export const moduleFederationHostTransformer: WebpackConfigTransformer = (
  config
) => {
  config.addPlugin(
    /* add the module federation plugin to the webpack bundle */
    new ModuleFederationPlugin({
      /* the remote apps to be loaded by this host app */
      remotes: {
        /* the name to be used for this remote app */
        mars_weather:
          /* the-remote-app-name@the-remote-app-url */
          'mars_weather@https://mf-remote.netlify.app/remoteEntry.js',
      },
      /**
       * a list of peer dependencies (to load by this host app, and not by any other remote app).
       * */
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        'react-dom/client': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
      },
    })
  );
  return config;
};
