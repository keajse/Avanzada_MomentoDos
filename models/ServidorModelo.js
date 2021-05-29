//Se trae el paquete express
const express = require('express')

//Se trae cors (paquete que habilita accesos a mi api)
const cors = require ('cors');

//Traer las rutas.
const rutas= require('../routes/rutasReservacion.js');

//Se trae la conexión DB. 
const { conectarBD } = require('../database/conexion.js');

class ServidorModelo {

    constructor() {
        //Atributo (variables) global para configurar el servidor.
        //This porque estoy dentro de una clase.
        this.app = express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();
    }

    //Métodos (Que acciones hace mi servidor) 


    //Despertar servidor.
    levantarServidor() {
        //Levantamiento del servidor (conexión.)
        this.app.listen(process.env.PORT, function () {
            console.log(`Estoy conectado al puerto ${process.env.PORT}`)
        });
    }


    //Llamar rutas del API

    llamarRutasAPI(){
        this.app.use('/', rutas);
    }

    //Despertar base de datos.
    despertarBaseDatos(){
        conectarBD();
    }

    crearMiddlewares(){

        this.app.use(cors()); //Acceso
        this.app.use(express.json()); //JSON
        this.app.use(express.urlencoded({extended:true}));
    }


}

module.exports = ServidorModelo;