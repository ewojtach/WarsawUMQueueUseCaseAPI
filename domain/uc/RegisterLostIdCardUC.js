import Location from '../model/Location'
import DistrictOfficeAdapter from '../../infrastructure/DistrictOfficeAdapter.js'
import GroupDataAdapter from '../../infrastructure/GroupDataAdapter.js'
import Rx from 'rx'

class RegisterLostIdCardUC {

  constructor() {
  }

  registerLostIdCard(req, callback) {

    let userLocation = new Location(req.query);
    let groupNames = ["EWIDENCJA LUDNOŚCI Dowody osobiste, meldunki, poświadczenia"];

    let subscription = DistrictOfficeAdapter.getOfficesByDistance(userLocation, 10)
                        .flatMap(officeList => Rx.Observable.from(officeList))
                        .flatMap(office => GroupDataAdapter.getGroupByOfficeIdAndGroupNames(office.id, groupNames))
                        .filter(element => element != null)
                        .reduce((acc, group) => { acc.push(group); return acc; }, new Array())
                        .subscribe(groups => callback(groups));
  }
}

const registerLostIdCardUC = new RegisterLostIdCardUC();

module.exports = registerLostIdCardUC;
