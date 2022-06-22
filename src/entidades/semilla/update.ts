import { IResistencia } from "./resistencia";

export interface IUpdateSemilla {
  semillero?: string;
  cultivo?: string;
  variedad?: string;
  ciclo?: string;
  resistencia?: IResistencia[];
}
