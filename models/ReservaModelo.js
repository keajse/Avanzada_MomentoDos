//Se trae de mongoose el modelo y el schema de datos.

const {model, Schema}=require('mongoose');


//Se crea el esqueleto de datos que va a tener cada documento (bolsa) de la colección.
const ReservaEsquema = Schema({
    nombre:{
        type: 'string',
        required: true
    },
    apellido:{
        type: 'string',
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    numPersonas:{
        type: Number,
        required: true
    },
    fechaInicio:{
        type: 'string',
        required: true
    },
    fechaFinal:{
        type: 'string',
        required: true
    },
    tipoPaquete:{
        type: 'string',
        required: true
    }
});

module.exports = model('Reserva', ReservaEsquema);