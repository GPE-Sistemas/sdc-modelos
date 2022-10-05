import { IAgroquimico } from "../agroquimico";
import { ISiembra } from "../siembra";

export interface IFumigacion {
  _id: string;
  fecha: string;
  idSiembra: string;
  idAgroquimico?: string;
  duracion?: number;

  // Populate
  siembra?: ISiembra;
  agroquimico?: IAgroquimico;
}
