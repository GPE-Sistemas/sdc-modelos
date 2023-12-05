import { IResistencia } from "./resistencia";

export interface ICreateSemilla {
  semillero?: string;
  cultivo?: string;
  variedad?: string;
  ciclo?: string;
  campania?: string;
  resistencia?: IResistencia[];
}
