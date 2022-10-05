import { IAgroquimico } from "../agroquimico";
import { IDistribuidor } from "../distribuidor";
import { IEstablecimiento } from "../establecimiento";
import { IProductor } from "../productor";
import { IQuimica } from "../quimica";
import { ISiembra } from "../siembra";

export interface IFumigacion {
  _id: string;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  fecha: string;
  idSiembra: string;
  idAgroquimico?: string;
  duracion?: number;

  // Populate
  siembra?: ISiembra;
  agroquimico?: IAgroquimico;
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
}
