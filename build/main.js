"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail_1 = require("./Mail");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Persona_1 = require("./Persona");
console.log('|           Iniciando Agenda        |');
console.log(" ");
/* Create mails */
var mail1 = new Mail_1.Mail("Gmail", "mail1@gmail.com");
var mail2 = new Mail_1.Mail("Gmail", "mail2@gmail.com");
var mail3 = new Mail_1.Mail("Hotmail", "mail3@hotmail.com");
/* Create Phones */
var phone1 = new Telefono_1.Telefono("Fijo", 925416020);
var phone2 = new Telefono_1.Telefono("Fijo", 914245424);
var phone3 = new Telefono_1.Telefono("Fijo", 923423453);
var mobile1 = new Telefono_1.Telefono("Movil", 634466776);
var mobile2 = new Telefono_1.Telefono("Movil", 614234532);
var mobile3 = new Telefono_1.Telefono("Movil", 665747578);
/* Create Addresses */
var dir1 = new Direccion_1.Direccion("Murillo", 1, 1, "A", 45120, "Menasalbas", "Toledo");
var dir2 = new Direccion_1.Direccion("Carretas", 2, 3, "F", 47123, "Madrid", "Madrid");
var dir3 = new Direccion_1.Direccion("Irene Villa", 52, 3, "D", 20002, "Cuenca", "Cuenca");
var dir4 = new Direccion_1.Direccion("Murray Mountains", 73, 1, "B", 29051, "San Sebastián", "País Vasco");
var dir5 = new Direccion_1.Direccion("Titus Loop", 80, 12, "C", 8867, "Omaha", "Omaha");
/* Creación de tres personas */
var date1 = new Date("1965-03-12");
var direcciones1 = [dir1];
var mails1 = [mail1];
var telefonos1 = [phone1, mobile1];
var per1 = new Persona_1.Persona("Pepe", "Rodriguez Pérez", 56, "045678545C", date1, "verde", "hombre", direcciones1, mails1, telefonos1, ["Entregar trabajo.", "Ir al supermercado"]);
var date2 = new Date("1995-10-21");
var direcciones2 = [dir2, dir3];
var mails2 = [mail2];
var telefonos2 = [phone2, mobile2];
var per2 = new Persona_1.Persona("Ana", "Bueno Bernal", 25, "098458545J", date2, "morado", "mujer", direcciones2, mails2, telefonos2, ["Comprar manzanas"]);
var date3 = new Date("1997-07-21");
var direcciones3 = [dir4, dir5];
var mails3 = [mail3];
var telefonos3 = [phone3, mobile3];
var per3 = new Persona_1.Persona("Natalia", "Arrese Puente", 23, "078458541H", date3, "azul", "mujer", direcciones3, mails3, telefonos3, ["Entregar práctica final"]);
var personas = [];
personas = [per1, per2, per3];
console.log("|          MOSTRANDO PERSONAS CREADAS      |");
console.log(" ");
for (var i = 0; i < personas.length; i++) {
    console.log("| ** PERSONA  " + i + " ** |");
    personas[i].mostrarInfo();
    console.log(" ");
}
/* Buscar persona por DNI y actualizar atributos */
console.log("|      ACTUALIZANDO DATOS PERSONA...      |");
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    if (persona.dni == "045678545C") {
        // Actualizar dirección
        persona.direcciones[0].calle = "Sim Ville";
        persona.direcciones[0].numero = 34;
        persona.direcciones[0].piso = 1;
        persona.direcciones[0].letra = "C";
        // Actualizar Mail
        persona.mails[0].direccion = "nuevo.email@gmail.com";
        persona.mails[0].tipo = "Gmail";
        // Actualizar Teléfono 
        persona.telefonos[0].numero = 925406021;
        persona.mostrarInfo();
    }
}
//# sourceMappingURL=main.js.map