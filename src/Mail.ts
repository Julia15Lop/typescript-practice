export class Mail {
  private _tipo: string;
  private _direccion: string;

  constructor(tipo: string, direccion: string) {
    this._tipo = tipo;
    this._direccion = direccion;
  }

  /* Getters */
  public get tipo(): string {
    return this._tipo;
  }

  public get direccion(): string {
    return this._direccion;
  }

  /* Setters */
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public set direccion(direccion: string) {
    this._direccion = direccion;
  }

  /* Mostrar E-mail */
  public mostrarMail(): void {
    console.log("| E-mail: " + this._direccion + "   Tipo: " + this._tipo);
  }

}