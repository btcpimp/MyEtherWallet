const package = require('./package.json');
const packageJson = require('package-json');
const SAFE_TIME = 1000 * 1 * 60 * 60 * 24 * 7; //7days
// babel-jest 24.0.0 is breaking all the tests [2-1-19]
// 'web3', 'web3-core-helpers', 'web3-core-method', 'web3-utils' 1.0.0-beta.41 introduced breaking changes [2-4-19]
//@xkeshi/vue-qrcode no longer maintained, forked out to mew
//multicoin-address-validator not enough downloads
// waiting for vee-validate 3.0 to be more stable (https://github.com/baianat/vee-validate/issues/2248)
// Matching exceptions with package.json
// Lock @vue packages due to complications on updating
// @vue/test-utils - breaking tests beginning at 5.2.5-hotfix-2 (with version 1.0.0-beta.30)
const EXCEPTIONS = [
  '@myetherwallet/mewconnect-web-client',
  'canvas',
  'ethereum-ens',
  'babel-jest',
  'multicoin-address-validator',
  'web3-core-requestmanager',
  '@vue/eslint-config-prettier',
  'vee-validate',
  '@xkeshi/vue-qrcode',
  "@vue/cli-plugin-babel",
  "@vue/cli-plugin-eslint",
  "@vue/cli-plugin-pwa",
  "@vue/cli-plugin-unit-jest",
  "@vue/cli-service",
  '@vue/test-utils',
  'web3',
  'web3-core-helpers',
  'web3-core-method',
  'web3-utils'
];
const CUSTOM_DIST = {
  ['babel-core']: 'bridge'
};
const ALL_PACKAGES = Object.assign(
  package.dependencies,
  package.devDependencies
);
const names = Object.keys(ALL_PACKAGES);
let updatesFound = false;
const looper = () => {
  if (!names.length) {
    if (updatesFound) process.exit(1);
    else process.exit(0);
  }
  const _name = names.shift();
  if (EXCEPTIONS.includes(_name)) return looper();
  if (ALL_PACKAGES[_name].includes('^') || ALL_PACKAGES[_name].includes('~')) {
    console.error(
      'Invalid character ~ or ^ found on package.json version string, only fixed versions are allowed'
    );
    process.exit(1);
  }
  packageJson(_name, {
    fullMetadata: true,
    allVersions: true
  })
    .then(info => {
      const latestVersion = info['dist-tags'][CUSTOM_DIST[_name] || 'latest'];
      const latestVersionTime = info['time'][latestVersion];
      if (
        ALL_PACKAGES[_name] !== latestVersion &&
        new Date(latestVersionTime).getTime() < new Date().getTime() - SAFE_TIME
      ) {
        console.error(
          'new update found',
          _name,
          ALL_PACKAGES[_name],
          latestVersion,
          latestVersionTime
        );
        updatesFound = true;
      }
    })
    .then(looper);
};
looper();
