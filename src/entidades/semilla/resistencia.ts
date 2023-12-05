export type TEnfermedad =
  // Trigo
  | "Fusarium de la Espiga"
  | "Mancha Amarilla"
  | "Mancha de la Hoja"
  | "Roya de la Hoja"
  // Soja
  | "Fin de Ciclo"
  // Maiz
  | "Roya del Maiz";

export interface IResistencia {
  multiplicador?: number;
  enfermedad?: TEnfermedad;
}
