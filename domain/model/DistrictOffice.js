class DistrictOffice {

  constructor (districtOfficeData) {
    if (districtOfficeData != undefined){
      this.id = districtOfficeData.id;
      this.name = districtOfficeData.name;
      this.contactInfo = districtOfficeData.contactInfo;
      this.groups = districtOfficeData.groups;
    }
  }
}

module.exports = DistrictOffice;
