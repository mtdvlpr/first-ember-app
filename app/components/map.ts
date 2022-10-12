import Component from '@glimmer/component'
import ENV from 'super-rentals/config/environment'

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static'

interface MapArgs {
  lat: number
  lng: number
  width: number
  height: number
  zoom: number
  alt?: string
}

export default class MapComponent extends Component<MapArgs> {
  get src() {
    const { lng, lat, width, height, zoom } = this.args

    const coordinates = `${lng},${lat},${zoom}`
    const dimensions = `${width}x${height}`
    const accessToken = `access_token=${this.token}`

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN)
  }
}
