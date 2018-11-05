const env = process.env.NODE_ENV;
// eslint-disable-next-line import/no-dynamic-require, global-require
const config = name => require(`./${env}`).default[name];

export default config;
