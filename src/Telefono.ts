export class Telefono {

  private _tipo: string;
  private _numero: number;
  
  constructor(tipo: string, numero: number) {
    this._tipo = tipo;
    this._numero = numero;
  }
  
  /* Getters */
  public get tipo(): string {
    return this._tipo;
  }

  public get numero(): number {
    return this._numero;
  }

  /* Setters */
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  /* Mostrar Teléfono */
  public mostrarTelefono(): void{
    console.log("| Número: " + this._numero + "  Tipo: " + this._tipo);
  }

}