const express = require('express');
const routes = express.Router();

const PacientController = require('./controllers/PacientController')
const ProfessionalController = require('./controllers/ProfessionalController')
const ConsultaController = require('./controllers/ConsultaController')
const SymptomsController = require('./controllers/SymptomsController')
const ExamRequestController = require('./controllers/ExamRequestController')
const DrugController = require('./controllers/DrugController')
const TreatmentController = require('./controllers/TreatmentController')
const VaccineController = require('./controllers/VaccineController')

routes.get('/pacient', PacientController.index);
routes.post('/pacient', PacientController.create);
routes.delete('/pacient/:id', PacientController.delete);
routes.put('/pacient/:id', PacientController.edit);

routes.get('/professional', ProfessionalController.index);
routes.post('/professional', ProfessionalController.create);
routes.delete('/professional/:id', ProfessionalController.delete);
routes.put('/professional/:id', ProfessionalController.edit);

routes.get('/consulta', ConsultaController.index);
routes.post('/consulta', ConsultaController.create);
routes.delete('/consulta/:id', ConsultaController.delete);
routes.put('/consulta/:id', ConsultaController.edit);

routes.get('/Symptoms/:id_consulta', SymptomsController.index);
routes.post('/Symptoms', SymptomsController.create);
routes.delete('/Symptoms/:id', SymptomsController.delete);
routes.put('/Symptoms/:id', SymptomsController.edit);

routes.get('/examRequest/:id_consulta', ExamRequestController.index);
routes.post('/examRequest', ExamRequestController.create);
routes.delete('/examRequest/:id', ExamRequestController.delete);
routes.put('/examRequest/:id', ExamRequestController.edit);

routes.get('/drug', DrugController.index);
routes.post('/drug', DrugController.create);
routes.delete('/drug/:id', DrugController.delete);
routes.put('/drug/:id', DrugController.edit);

routes.get('/treatment/:id_consulta', TreatmentController.index);
routes.post('/treatment', TreatmentController.create);
routes.delete('/treatment/:id', TreatmentController.delete);
routes.put('/treatment/:id', TreatmentController.edit);

routes.get('/vaccine', VaccineController.index);
routes.post('/vaccine', VaccineController.create);
routes.delete('/vaccine/:id', VaccineController.delete);
routes.put('/vaccine/:id', VaccineController.edit);

module.exports = routes;