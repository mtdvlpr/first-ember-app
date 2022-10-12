import JSONAPISerializer from '@ember-data/serializer/json-api'

export default class ApplicationSerializer extends JSONAPISerializer {}

declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application-serializer': ApplicationSerializer
  }
}
