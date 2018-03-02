import {
  V_ENV_DEVELOPMENT,
  V_ENV_PRODUCTION,
} from './variable';

const env = process.env.NODE_ENV || V_ENV_DEVELOPMENT;

const env2 = process.env.BROWSER;

export default env;

export const isDev = env === V_ENV_DEVELOPMENT;

export const isProd = env === V_ENV_PRODUCTION;

export const isClient = env2;
