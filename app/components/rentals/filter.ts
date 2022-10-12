import Component from '@glimmer/component'
import RentalModel from 'super-rentals/models/rental'

interface FilterArgs {
  rentals: RentalModel[]
  query: string
}

function searchRental(rental: RentalModel, query: string) {
  const valuesToSearch = [
    rental.title,
    rental.owner,
    rental.type,
    rental.city,
    rental.category,
    rental.description,
  ]

  for (const value of valuesToSearch) {
    if (typeof value !== 'string') continue
    if (value.toLowerCase().includes(query.toLowerCase())) {
      return true
    }
  }
  return false
}

export default class RentalsFilterComponent extends Component<FilterArgs> {
  get results() {
    const { rentals, query } = this.args

    if (query) {
      return rentals.filter((rental) => searchRental(rental, query))
    } else {
      return rentals
    }
  }
}
