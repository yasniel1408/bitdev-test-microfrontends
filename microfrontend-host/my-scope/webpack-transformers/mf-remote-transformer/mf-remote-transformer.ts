import type {
  WebpackConfigMutator,
  WebpackConfigTransformContext,
} from '@teambit/webpack';
import { container } from 'webpack';

const { ModuleFederationPlugin } = container;

const DEV_PUBLIC_PATH = 'http://localhost:60000/';

export const moduleFederationRemoteTransformer = (
  configMutator: WebpackConfigMutator,
  _context: WebpackConfigTransformContext,
  appEntry: string,
  remoteConfig: {
    name: string;
    filename: string;
    exposePath: string;
    productionPublicPath: string;
    sharedPackages?: Record<
      string,
      { singleton: boolean; requiredVersion: string; eager: boolean }
    >;
  }
): WebpackConfigMutator => {
  configMutator.addPlugin(
    new ModuleFederationPlugin({
      name: remoteConfig.name,
      filename: remoteConfig.filename,
      exposes: {
        [remoteConfig.exposePath]: appEntry,
      },
      shared: {
        ...remoteConfig?.sharedPackages,
        react: { singleton: true, requiredVersion: '^18.2.0', eager: true },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
      },
    })
  );

  const mode = configMutator.raw.mode || 'production';
  configMutator.raw.output = configMutator.raw.output || {};
  configMutator.raw.output.publicPath =
    mode === 'development'
      ? DEV_PUBLIC_PATH
      : remoteConfig.productionPublicPath;

  return configMutator;
};
