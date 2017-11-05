export const environment = {
  production: true,
  maxItems: 30,
  settings: {
    jsonFileName: 'SpotARoom_{0}_{1}_{2}.json',
    marker: {
      host: 'https://staging.spotahome.com',
      base: 'api/public/listings/search/',
      resource: 'markers/{0}'
    },
    homecard: {
      host: 'https://staging.spotahome.com',
      base: 'api/public/listings/search/',
      resource: 'homecards_ids'
    }
  }
};
