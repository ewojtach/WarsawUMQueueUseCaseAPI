import Group from '../domain/model/Group'
import Rx from 'rx'
const Client = require('node-rest-client').Client;


class GroupDataAdapter {

  constructor() {

  }

  getGroupByOfficeIdAndGroupNames(officeId, groupNames) {

    let client = new Client();
    let urlUM = 'https://api.um.warszawa.pl/api/action/wsstore_get/?id=';
    let apiKey = '&apikey=7120fd06-ee83-445a-9dd4-63f1c0201493';
    let urlUMApi = urlUM + officeId + apiKey;
    let publisher = new Rx.Subject();

    client.get(urlUMApi, (data, response, error) => {

        if (data.result === undefined || data.result.grupy === undefined){
          console.error("Unable to call UM API: "+data.result)
          data.result = {}
          data.result.grupy = [];
        }
        let group = data.result.grupy.filter(group => groupNames.includes(group.nazwaGrupy)).map(data => this._toGroup(data))[0];

        publisher.onNext(group);
        publisher.onCompleted();

    });
    return publisher;
  }

  //model mapping
  _toGroup(caseGroup) {
    let group = new Group();

    group.id = caseGroup._id;
    group.name = caseGroup.name;
    group.status = caseGroup.status;
    group.servingTime = caseGroup.czasObslugi;
    group.seqNo = caseGroup.lp;
    group.groupId = caseGroup.idGrupy;
    group.servingPoints = caseGroup.liczbaCzynnychStan;
    group.groupName = caseGroup.nazwaGrupy;
    group.groupLetter = caseGroup.literaGrupy;
    group.currentQueue = caseGroup.liczbaKlwKolejce;
    group.currentNumber = caseGroup.aktualnyNumer;

    return group;
  }
}

const groupDataAdapter = new GroupDataAdapter();

module.exports = groupDataAdapter;
