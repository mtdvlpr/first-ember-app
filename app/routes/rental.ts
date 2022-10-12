import emberData__store from '@ember-data/store'
import Route from '@ember/routing/route'
import { service } from '@ember/service'

export default class RentalRoute extends Route {
  @service
  declare store: emberData__store

  async model(params: { rental_id: string }) {
    return this.store.findRecord('rental', params.rental_id)
  }
}

type Resolved<P> = P extends Promise<infer T> ? T : P
export type RentalRouteModel = Resolved<ReturnType<RentalRoute['model']>>
