import { IDistribuidor } from "../distribuidor";
import { IQuimica } from "../quimica";

export interface IProductor {
  _id: string;
  idQuimica?: string;
  idDistribuidor?: string;
  nombre: string;
  logo: string;
  fechaCreacion: string;
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
}
