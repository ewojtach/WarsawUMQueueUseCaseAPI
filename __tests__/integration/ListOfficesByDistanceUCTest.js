import ListOfficesByDistanceUC from '../../domain/uc/ListOfficesByDistanceUC.js';

describe('Offices list in 5 km range from PKiN', () => {
  it('contains district office in Ochota', (done) => {
    //given:
    let location  = { latitude: 52.231112, longitude: 21.006600 }

    //when:
    ListOfficesByDistanceUC.getOfficesListByDistance(location, 5).subscribe(result => {
      expect(result.filter(office => office.name.includes('Ochota')).length).toBeGreaterThan(0);
      done();
    });
  });
});
