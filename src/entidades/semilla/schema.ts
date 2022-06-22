import { IResistencia } from "./resistencia";

export interface ISemilla {
  _id: string;
  semillero: string;
  cultivo: string;
  variedad: string;
  ciclo: string;
  resistencia: IResistencia[];
}
