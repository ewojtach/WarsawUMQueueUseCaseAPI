import DistrictOfficeAdapter from '../../infrastructure/DistrictOfficeAdapter.js'

class FindAllOfficesUC {

  constructor() {
  }

  getOfficesList(req, callback) {
    DistrictOfficeAdapter.getAllOffices(callback);
  }
}

const findAllOfficesUC = new FindAllOfficesUC();

module.exports = findAllOfficesUC;
