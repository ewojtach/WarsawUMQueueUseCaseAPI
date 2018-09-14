class Location {

  constructor (locationData) {
    if (locationData != undefined) {
      this.latitude = locationData.latitude;
      this.longitude = locationData.longitude;
    }
  }
}

module.exports = Location;
