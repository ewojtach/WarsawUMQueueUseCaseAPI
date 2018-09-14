import geolib from 'geolib'

class GeoService {

  constructor() {
  }

  calculateDistanceBetween(locationA, locationB) {

    let distance = geolib.getDistance(locationA, locationB);
    return distance / 1000; //unit is km
  }
}

const geoService = new GeoService();

module.exports = geoService;
