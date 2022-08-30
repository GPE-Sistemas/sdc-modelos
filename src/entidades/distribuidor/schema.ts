import { IQuimica } from "../quimica";

export interface IDistribuidor {
  _id: string;
  idQuimica?: string;
  nombre: string;
  logo: string;
  fechaCreacion: string;
  // Populate
  quimica?: IQuimica;
}
