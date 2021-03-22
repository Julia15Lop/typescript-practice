export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _cod_postal: number;
  private _poblacion: string;
  private _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, cod_postal: number, poblacion: string, provincia: string) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._cod_postal = cod_postal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  /* Getters */
  public get calle(): string {
    return this._calle;
  }

  public get numero(): number {
    return this._numero;
  }

  /* Setters */
  public set calle(calle: string) {
    this._calle = calle;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public set piso(piso: number) {
    this._piso = piso;
  }

  public set letra(letra: string) {
    this._letra = letra; 
  }

  public set cod_postal(cod_postal: number) {
    this._cod_postal = cod_postal;
  }

  public set poblacion(poblacion: string) {
    this._poblacion = poblacion; 
  }

  public set provincia(provincia: string) {
    this._provincia = provincia;
  }

  /* Mostrar dirección */
  public mostrarDireccion(): void {
    console.log("| Calle: " + this._calle + "  Número: " + this._numero + "  Piso: " + this._piso + "  Letra: " + this._letra);
    console.log("| Población: " + this._poblacion + " Provincia: " + this._provincia);
    console.log("| C.Postal: " + this._cod_postal);
    console.log("|");
  }
}