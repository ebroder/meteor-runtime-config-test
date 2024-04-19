import { WebApp } from 'meteor/webapp';

WebApp.addRuntimeConfigHook(({ encodedCurrentConfig }) => {
  const config = WebApp.decodeRuntimeConfig(encodedCurrentConfig);

  config.testVariable = "TEST";
  return WebApp.encodeRuntimeConfig(config);
});
