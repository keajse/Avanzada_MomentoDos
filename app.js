//Importo el modelo del servidor.

const ServidorModelo= require('./models/ServidorModelo.js');

//Se trae el paquete de enviroment
require('dotenv').config()

//Instanciar clase (sacar fotocopia de la clase servidor modelo)

let servidor = new ServidorModelo();

//Levantar el servidor.
servidor.levantarServidor();