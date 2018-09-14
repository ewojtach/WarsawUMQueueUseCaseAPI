class Group {

  constructor (groupData) {
    if (groupData != undefined) {
      this.id = groupData.id;
      this.name = groupData.name;
      this.status = groupData.status;
      this.servingTime = groupData.servingTime;
      this.seqNo = groupData.seqNo;
      this.groupId = groupData.groupId;
      this.servingPoints = groupData.servingPoints;
      this.groupName = groupData.groupName;
      this.groupLetter = groupData.groupLetter;
      this.currentQueue = groupData.currentQueue
      this.currentNumber = groupData.currentNumber;
    }  
  }
}

module.exports = Group;
