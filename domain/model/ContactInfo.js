class ContactInfo {

  constructor (contactInfoData) {
    if (contactInfoData != undefined) {
      this.phone = contactInfoData.phone;
      this.address = contactInfoData.address;
      this.location = contactInfoData.location;
      this.email = contactInfoData.email;
    }    
  }
}

module.exports = ContactInfo;
