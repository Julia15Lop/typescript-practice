import { Mail } from './Mail';
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Persona } from "./Persona";

console.log('|           Iniciando Agenda        |');
console.log(" ");

/* Create mails */
let mail1: Mail = new Mail("Gmail", "mail1@gmail.com");
let mail2: Mail = new Mail("Gmail", "mail2@gmail.com");
let mail3: Mail = new Mail("Hotmail", "mail3@hotmail.com");

/* Create Phones */
let phone1: Telefono = new Telefono("Fijo", 925416020);
let phone2: Telefono = new Telefono("Fijo", 914245424);
let phone3: Telefono = new Telefono("Fijo", 923423453);
let mobile1: Telefono = new Telefono("Movil", 634466776);
let mobile2: Telefono = new Telefono("Movil", 614234532);
let mobile3: Telefono = new Telefono("Movil", 665747578);

/* Create Addresses */
let dir1: Direccion = new Direccion("Murillo", 1, 1, "A", 45120, "Menasalbas", "Toledo");
let dir2: Direccion = new Direccion("Carretas", 2, 3, "F", 47123, "Madrid", "Madrid");
let dir3: Direccion = new Direccion("Irene Villa", 52, 3, "D", 20002, "Cuenca", "Cuenca");
let dir4: Direccion = new Direccion("Murray Mountains", 73, 1, "B", 29051, "San Sebastián", "País Vasco");
let dir5: Direccion = new Direccion("Titus Loop", 80, 12, "C", 8867, "Omaha", "Omaha");


/* Creación de tres personas */
let date1: Date = new Date("1965-03-12");
var direcciones1: Direccion[] = [dir1];
let per1: Persona = new Persona("Pepe", "Rodriguez Pérez", 56, "045678545C", date1, "verde", "hombre", direcciones1,
  [mail1], [phone1, mobile1], ["Entregar trabajo.", "Ir al supermercado"]);
            
let date2: Date = new Date("1995-10-21");
var direcciones2: Direccion[] = [dir2, dir3];
let per2: Persona = new Persona("Ana", "Bueno Bernal", 25, "098458545J", date2, "morado", "mujer", direcciones2,
  [mail2], [phone2, mobile2], ["Comprar manzanas"]);

let date3: Date = new Date("1997-07-21");
var direcciones3: Direccion[] = [dir4, dir5];
let per3: Persona = new Persona("Natalia", "Arrese Puente", 23, "078458541H", date3, "azul", "mujer", direcciones3,
  [mail3], [phone3, mobile3], ["Entregar práctica final"]);

let personas: Persona[] = [];
personas = [per1, per2, per3];
    
console.log("|          MOSTRANDO PERSONAS CREADAS      |");
console.log(" ");

for (let i = 0; i < personas.length; i++) {
  console.log("| ** PERSONA  " + i + " ** |");
  personas[i].mostrarInfo();
  console.log(" ");
}


/* Buscar persona por DNI y actualizar atributos */
console.log("|      ACTUALIZANDO DATOS PERSONA...      |");
for (let i = 0; i < personas.length; i++) {
  let persona: Persona = personas[i];

  if (persona.dni == "045678545C") {

    // Actualizar dirección
    persona.direcciones[0].calle = "Sim Ville";
    persona.direcciones[0].numero = 34;
    persona.direcciones[0].piso = 1;
    persona.direcciones[0].letra = "C";
    
    // Actualizar Mail
    persona.mails[0].direccion = "nuevo.email@gmail.com"
    persona.mails[0].tipo = "Gmail";

    // Actualizar Teléfono 
    persona.telefonos[0].numero = 925406021;

    persona.mostrarInfo();
  }
}