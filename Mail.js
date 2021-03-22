"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
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
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (direccion) {
            this._direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    /* Mostrar E-mail */
    Mail.prototype.mostrarMail = function () {
        console.log("| E-mail: " + this._direccion + "   Tipo: " + this._tipo);
    };
    return Mail;
}());
exports.Mail = Mail;
