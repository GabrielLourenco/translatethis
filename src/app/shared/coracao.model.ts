export class Coracao {
  constructor(
    public cheio: boolean,
    public cheioClass: string = 'fa fa-heart fa-2x',
    public vazioClass: string = 'fa fa-heart-o fa-2x'
  ){}

  public exibeCoracao(): string {
    return (this.cheio ? this.cheioClass : this.vazioClass);
  }
}
