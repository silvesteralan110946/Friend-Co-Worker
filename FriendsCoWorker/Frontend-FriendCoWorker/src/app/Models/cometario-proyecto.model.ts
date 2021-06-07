export interface ComentarioProyectoInterface{
  Legajo: number;
  Comentario: string;
  Id_proyecto: number;
}

export class ComentarioProyectoInterface implements ComentarioProyectoInterface {
  constructor(public Legajo: number, public Comentario: string,public Id_proyecto: number) {}
}
