import { IEnfermedad } from "../enfermedad";

export interface IResistencia {
  idEnfermedad: string;
  multiplicador: number;
  // Populate
  enfermedad?: IEnfermedad;
}
