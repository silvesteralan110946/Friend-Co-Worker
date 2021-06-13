export interface ValoresEmpleadoInterface{
  Legajo: number;
  Comunicacion: number;
  Desempenio_individual: number;
  Trabajo_en_equipo: number;
  Puntualidad: number;
  Resolucion_de_problemas: number;
  Legajo_valora: number;
}

export class ValoresEmpleadoInterface implements ValoresEmpleadoInterface {
  constructor(public Legajo: number, public Comunicacion: number, public Desempenio_individual: number, public Trabajo_en_equipo: number,
    public Puntualidad: number, public Resolucion_de_problemas: number, public Legajo_valora: number) {}
}
