export type TEnfermedad =
  | "Fusarium de la Espiga"
  | "Mancha Amarilla"
  | "Mancha de la Hoja"
  | "Roya de la Hoja";

export interface IResistencia {
  multiplicador: number;
  enfermedad: TEnfermedad;
}
