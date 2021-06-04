export interface EmpleadoXProyectoInterface {
  Legajo: number;
  Id_proyecto: number;
}

export class EmpleadoXProyecto implements EmpleadoXProyectoInterface {
  constructor(public Legajo: number, public Id_proyecto: number) {}
}
