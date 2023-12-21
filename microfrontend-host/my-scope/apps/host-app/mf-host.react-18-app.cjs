const {
  moduleFederationHostTransformer,
} = require('@learnbit-react/module-federation.webpack-transformers.mf-host-transformer');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  productionSiteName: 'mf-host',
  stagingSiteName: 'mf-host-staging',
};

/** @type {import("@teambit/react.apps.react-app-types").ReactAppType} */
module.exports.default = {
  name: 'mf-host',
  entry: [require.resolve('./mf-host.app-root')],
  portRange: [3020, 3030],
  webpackTransformers: [moduleFederationHostTransformer],
  deploy: Netlify.deploy(netlifyOptions),
};
