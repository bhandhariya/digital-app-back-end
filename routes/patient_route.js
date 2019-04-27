var express = require('express');
var router = express.Router();
var PatientController=require('../controller/patient_controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',PatientController.createNewPatient);

router.get('/getall',PatientController.getall);

router.post('/getpatByID',PatientController.getpatByID);

router.post('/addPersonal',PatientController.addPersonal);

router.post('/addFamilyData',PatientController.addFamilyData)

router.post('/addGuardian',PatientController.addGuardian);

router.post('/addchild',PatientController.addChildren);

module.exports = router;
