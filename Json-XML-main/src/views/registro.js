import firebase from 'firebase/app';
import 'firebase/firestore';

// Primero instalmos firebase para el framework vue.js
// npm install firebase vuefire 
// autenticamos con firebase
{
// Registro de usuario 
    "usuarios" [ {
       "id" : "01",
       "nombre" : "angel",
       "apellido" : "pacheco",
       "correo" : "angelpacheo2001@gmail.com",
       "contraseña" : "12345678"
    }, {
       "id" : "02",
       "nombre" : "gabriel",
       "apellido" : "macias",
       "correo" : "gabrielmacias@gmail.com",
       "contraseña" : "12349864"
    } , {
       "id" : "03",
       "nombre" : "null",
       "apellido" : "null",
       "correo" : "null",
       "contraseña" : "null"
    }, {
       "id" : "04",
       "nombre" : "null",
       "apellido" : "null",
       "correo" : "null",
       "contraseña" : "null"
    }, {
        "id" : "05",
       "nombre" : "null",
       "apellido" : "null",
       "correo" : "null",
       "contraseña" : "null"
    }]
   }

   // Una vez levantado nuestro servidor podemos ingresar nuevos usuarios o mostrar los ya registrados