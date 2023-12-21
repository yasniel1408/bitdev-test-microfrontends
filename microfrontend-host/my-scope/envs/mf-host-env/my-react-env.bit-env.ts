import { ReactEnv } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';
import { AppTypeList } from '@teambit/application';
import { ReactAppType } from '@teambit/react.apps.react-app-types';
/**
 * this webpack transformer changes the output bundle to a module federation host app.
 * it is used here for the app’s component preview
 */
import { moduleFederationHostTransformer } from '@learnbit-react/module-federation.webpack-transformers.mf-host-transformer';

export class MyReactEnv extends ReactEnv {
  name = 'mf-host-env';

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      /* modify the component’s preview to simulate a module federation host app */
      transformers: [moduleFederationHostTransformer],
    });
  }

  apps(): EnvHandler<AppTypeList> {
    return AppTypeList.from([ReactAppType.from()]);
  }
}

export default new MyReactEnv();
