import emberData__store from '@ember-data/store'
import Route from '@ember/routing/route'
import { service } from '@ember/service'

export default class IndexRoute extends Route {
  @service
  declare store: emberData__store

  async model() {
    return this.store.findAll('rental')
  }
}

type Resolved<P> = P extends Promise<infer T> ? T : P
export type IndexRouteModel = Resolved<ReturnType<IndexRoute['model']>>
