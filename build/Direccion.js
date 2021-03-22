"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, cod_postal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cod_postal = cod_postal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        /* Getters */
        get: function () {
            return this._calle;
        },
        /* Setters */
        set: function (calle) {
            this._calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        set: function (piso) {
            this._piso = piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        set: function (letra) {
            this._letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cod_postal", {
        set: function (cod_postal) {
            this._cod_postal = cod_postal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        set: function (poblacion) {
            this._poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        set: function (provincia) {
            this._provincia = provincia;
        },
        enumerable: false,
        configurable: true
    });
    /* Mostrar dirección */
    Direccion.prototype.mostrarDireccion = function () {
        console.log("| Calle: " + this._calle + "  Número: " + this._numero + "  Piso: " + this._piso + "  Letra: " + this._letra);
        console.log("| Población: " + this._poblacion + " Provincia: " + this._provincia);
        console.log("| C.Postal: " + this._cod_postal);
        console.log("|");
    };
    return Direccion;
}());
exports.Direccion = Direccion;
//# sourceMappingURL=Direccion.js.map