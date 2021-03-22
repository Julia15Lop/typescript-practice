"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, color, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumpleaños;
        this._color = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "dni", {
        /* Getters */
        get: function () {
            return this._dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        enumerable: false,
        configurable: true
    });
    /* Print class attributes */
    Persona.prototype.mostrarInfo = function () {
        console.log("| Nombre: " + this._nombre + "   Apellidos: " + this._apellidos);
        console.log("| Edad: " + this._edad + "    DNI: " + this._dni + "     F.Nacimiento: " + this._cumple);
        console.log("| Sexo: " + this._sexo + "  Color: " + this._color);
        console.log("| --Direcciones-- ");
        // Mostrar direcciones
        for (var i = 0; i < this._direcciones.length; i++) {
            console.log("| Dir " + (i + 1));
            console.log("| " + this.direcciones[i].mostrarDireccion());
        }
        // Mostrar mails
        console.log("| --Mails-- ");
        for (var i = 0; i < this._mails.length; i++) {
            console.log("| " + this.mails[i].mostrarMail());
        }
        // Mostrar Telefonos
        console.log("| --Teléfonos-- ");
        for (var i = 0; i < this._telefonos.length; i++) {
            console.log("| " + this.telefonos[i].mostrarTelefono());
        }
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map