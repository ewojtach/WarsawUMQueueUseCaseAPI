import officesList from '../misc/Offices.js'
import geoService from './GeoService.js'
import DistrictOffice from '../domain/model/DistrictOffice'
import ContactInfo from '../domain/model/ContactInfo'
import Location from '../domain/model/Location'
import Rx from 'rx'

class DistrictOfficeAdapter {

  constructor() {
  }

  getOfficesById(officeId) {
    let filteredList;

    if (officeId === undefined || officeId === '') {
      console.error("unspecified office identifier");
      return [];
    }
    filteredList = officesList.filter(office => office.extId == officeId);

    const offices = [];

    filteredList.forEach(office => {
      offices.push(this._toDistrictOffice(office));
    });
    return Rx.Observable.just(offices);
  }

  getOfficesByDistance(userLocation, maxDistance) {
    let filteredList = officesList;

    const offices = [];
    filteredList.map(office => this._toDistrictOffice(office))
                .filter(office => geoService.calculateDistanceBetween(office.contactInfo.location, userLocation) < maxDistance)
                .forEach(office => offices.push(office));
    return Rx.Observable.just(offices);
  }

  getAllOffices() {
    let filteredList = officesList;

    const offices = [];

    filteredList.forEach(office => {
      offices.push(this._toDistrictOffice(office));
    });
    return Rx.Observable.just(offices);
  }

  // model mapping
  _toDistrictOffice (office) {
    let districtOffice = new DistrictOffice();
    let districtOfficeContactInfo = new ContactInfo();
    let districtOfficeLocation = new Location();

    districtOffice.id = office.extId;
    districtOffice.name = office.name;

    districtOfficeContactInfo.phone = office.phone;
    districtOfficeContactInfo.address = office.address;
    districtOfficeContactInfo.email = office.email;

    districtOfficeLocation.latitude = office.latitude;
    districtOfficeLocation.longitude = office.longitude;

    districtOfficeContactInfo.location = districtOfficeLocation;
    districtOffice.contactInfo = districtOfficeContactInfo;

    return districtOffice;
  }
}

const districtOfficeAdapter = new DistrictOfficeAdapter();

module.exports = districtOfficeAdapter;
