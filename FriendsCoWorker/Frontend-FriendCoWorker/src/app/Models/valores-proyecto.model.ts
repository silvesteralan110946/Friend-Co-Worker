export interface ValoresProyectoInterface{
  Id_proyecto: number;
  Funcionalidad: number;
  Documentacion: number;
  Diseño: number;
  Retroalimentacion: number;
  Tiempo_de_entrega: number;
  Legajo_valora: number;
}

export class ValoresProyectoInterface implements ValoresProyectoInterface {
  constructor(public Id_proyecto: number, public Funcionalidad: number, public Documentacion: number, public Diseño: number,
    public Retroalimentacion: number, public Tiempo_de_entrega: number, public Legajo_valora: number) {}
}
