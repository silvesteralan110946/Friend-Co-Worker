export interface ComentarioEmpleadoInterface{
  Legajo: number;
  Legajo_a_comentar: number;
  Comentario: string;
}

export class ComentarioEmpleadoInterface implements ComentarioEmpleadoInterface {
  constructor(public Legajo: number, public Legajo_a_comentar: number,public Comentario: string) {}
}
