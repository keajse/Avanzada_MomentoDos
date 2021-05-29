//Traer el método router de express para personalizar las rutas.

const { Router }= require('express');

//Importar (traer) los controladores.

const { getReservas } = require('../controllers/controladorReservas.js');
const { addReservas } = require('../controllers/controladorReservas.js');
const { updateReservas } = require('../controllers/controladorReservas.js');
const { deleteReservas } = require('../controllers/controladorReservas.js');
const { getDataReserva } = require('../controllers/controladorReservas.js');

//Importar validaciones
const {validarPeticion}=require('../validations/validations.js');


//Importar el metodo check del express validations
const {check}=require('express-validator');

//Crear lista de validaciones
let validaciones=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('apellido',"este campo es obligatorio").not().isEmpty(),
    check('telefono',"este campo es obligatorio").not().isEmpty(),
    check('numPersonas',"este campo es obligatorio").not().isEmpty(),
    check('fechaInicio',"este campo es obligatorio").not().isEmpty(),
    check('fechaFinal',"este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"este campo es obligatorio").not().isEmpty(),
    
    validarPeticion
);

//Personalizar rutas

const rutas=Router();

//Listado de rutas.

rutas.get('/reserva/consulta', getReservas);
rutas.get('/reserva/consult/:id', getDataReserva);
rutas.post('/reserva/nueva', validaciones, addReservas);
rutas.put('/reserva/editar/:id', updateReservas);
rutas.delete('/reserva/eliminar/:id', deleteReservas);


//Enviar al modelo (exportar)
module.exports=rutas;