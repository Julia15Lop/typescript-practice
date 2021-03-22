import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumple: Date;
  private _color: string;
  private _sexo: string;

  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: string[];

  constructor(nombre: string, apellidos: string, edad: number, dni: string,
    cumpleaños: Date, color: string, sexo: string, direcciones: Direccion[], mails: Mail[],
    telefonos: Telefono[], notas: string[]) {
    
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

  /* Getters */
  public get dni(): string {
    return this._dni;
  }

  public get direcciones(): Direccion[] {
    return this._direcciones;
  }

  public get mails(): Mail[] {
    return this._mails;
  }

  public get telefonos(): Telefono[] {
    return this._telefonos;
  }

  /* Print class attributes */
  public mostrarInfo() {
    console.log("| Nombre: " + this._nombre + "   Apellidos: " + this._apellidos );
    console.log("| Edad: " + this._edad + "    DNI: " + this._dni + "     F.Nacimiento: " + this._cumple );
    console.log("| Sexo: " + this._sexo + "  Color: " + this._color );
    console.log("| --Direcciones-- ");
    // Mostrar direcciones
    for (let i = 0; i < this._direcciones.length; i++) {
      console.log("| Dir " + (i+1));
      console.log ("| " + this.direcciones[i].mostrarDireccion());
    }
    // Mostrar mails
    console.log("| --Mails-- ");
    for (let i = 0; i < this._mails.length; i++) {
      
      console.log("| " + this.mails[i].mostrarMail());
    }

    // Mostrar Telefonos
    console.log("| --Teléfonos-- ");
    for (let i = 0; i < this._telefonos.length; i++) {
      console.log("| " + this.telefonos[i].mostrarTelefono());
    }
  }

}