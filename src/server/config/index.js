// eslint-disable-next-line import/no-dynamic-require, global-require
const config = name => require(`./${'development'}`).default[name];

export default config;
