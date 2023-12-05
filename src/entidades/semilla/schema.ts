import { Cultivo } from "../crono";
import { IResistencia } from "./resistencia";

export interface ISemilla {
  _id?: string;
  semillero?: string;
  cultivo?: Cultivo;
  variedad?: string;
  ciclo?: string;
  resistencia?: IResistencia[];
  campania?: string;
}
