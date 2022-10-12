import JSONAPIAdapter from '@ember-data/adapter/json-api'

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api'

  buildURL(...args: Parameters<JSONAPIAdapter['buildURL']>) {
    return `${super.buildURL(...args)}.json`
  }
}

declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'application-adapter': ApplicationAdapter
  }
}
