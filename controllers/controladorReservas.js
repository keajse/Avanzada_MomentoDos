//Importar de express las variables request y response

const { request, response }=require('express');

//Importar modelo de datos del API
const ReservaModelo = require('../models/ReservaModelo.js')



// Se crean funciones para cada uno de los servicios que prestará el api, menú del restaurante.
async function getReservas(req=request, res=response){

    let getAllData = await ReservaModelo.find()
    res.json({
        estado: true,
        mensaje: getAllData
    });
}

async function addReservas(req=request, res=response){
    let dataReserva=req.body;

    let reserva=new ReservaModelo(dataReserva);
    await reserva.save();
    
    res.json({
        estado:true,
        mensaje:'Reserva realizada con éxito',
        datos:reserva
    });
}




async function updateReservas(req=request, res=response){

    let id=req.params.id;
    let dataReserva = req.body;

    await ReservaModelo.findByIdAndUpdate(id,dataReserva);

    res.json({
        estado: true,
        mensaje: "Reserva actualizada con éxito"
    });
}

async function deleteReservas(req=request, res=response){

    let id= req.params.id;

    await ReservaModelo.findByIdAndDelete(id);

    res.json({
        estado: true,
        mensaje: "Reserva eliminada con éxito"
    });
}

async function getDataReserva (req=request, res=response){

    let id= req.params.id;

    let getDataReserva = await ReservaModelo.findById(id)
    res.json({
        estado: true,
        mensaje: getDataReserva
    });
}


//Para exportar archivos. Se colocan las llaves porque son más de una.

module.exports = {
    getReservas, 
    addReservas, 
    updateReservas, 
    deleteReservas,
    getDataReserva

}