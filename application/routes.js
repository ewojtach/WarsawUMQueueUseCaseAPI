import RegisterLostIdCardUC from '../domain/uc/RegisterLostIdCardUC.js';
import ListOfficesByDistanceUC from '../domain/uc/ListOfficesByDistanceUC.js';
import FindAllOfficesUC from '../domain/uc/FindAllOfficesUC.js';

exports.assignRoutes = function (app) {
  app.get('/RegisterLostIdCardUC', (req, res) => RegisterLostIdCardUC.registerLostIdCard(req, result => res.status(200).send(result)));
  app.get('/FindClosestDistrictOfficesUC', (req, res) => ListOfficesByDistanceUC.getOfficesListByDistance(req, result => res.status(200).send(result)));
  app.get('/FindAllDistrictOfficesUC', (req, res) => FindAllOfficesUC.getOfficesList(req, result => res.status(200).send(result)));
}
