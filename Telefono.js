"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        /* Getters */
        get: function () {
            return this._tipo;
        },
        /* Setters */
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    /* Mostrar Teléfono */
    Telefono.prototype.mostrarTelefono = function () {
        console.log("| Número: " + this._numero + "  Tipo: " + this._tipo);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
