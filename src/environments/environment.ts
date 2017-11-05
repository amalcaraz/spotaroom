// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  maxItems: 30,
  settings: {
    jsonFileName: 'SpotARoom_{0}_{1}_{2}.json',
    marker: {
      host: 'https://staging.spotahome.com',
      base: '/api/public/listings/search',
      resource: '/markers/{0}'
    },
    homecard: {
      host: 'https://staging.spotahome.com',
      base: '/api/public/listings/search',
      resource: '/homecards_ids'
    }
  }
};
