import DistrictOfficeAdapter from '../../infrastructure/DistrictOfficeAdapter.js'

class ListOfficesByDistanceUC {

  constructor() {
  }

  getOfficesListByDistance(location, maxDistance, callback) {
    DistrictOfficeAdapter.getOfficesByDistance(location, maxDistance).subscribe(result => callback(result));
  }
}

const listOfficesByDistanceUC = new ListOfficesByDistanceUC();

module.exports = listOfficesByDistanceUC;
