const express = require('express');
const routes = express.Router();

const PacientController = require('./controllers/PacientController')
const ProfessionalController = require('./controllers/ProfessionalController')
const ConsultaController = require('./controllers/ConsultaController')

routes.get('/pacient', PacientController.index);
routes.post('/pacient', PacientController.create);
routes.delete('/pacient/:id', PacientController.delete);
routes.put('/pacient/:id', PacientController.edit);

routes.get('/professional', ProfessionalController.index);
routes.post('/professional', ProfessionalController.create);
routes.delete('/professional/:id', ProfessionalController.delete);
routes.put('/professional/:id', ProfessionalController.edit);


routes.get('/consulta/:id', ConsultaController.index);
routes.post('/consulta', ConsultaController.create);
routes.delete('/consulta/:id', ConsultaController.delete);
routes.put('/consulta/:id', ConsultaController.edit);


module.exports = routes;