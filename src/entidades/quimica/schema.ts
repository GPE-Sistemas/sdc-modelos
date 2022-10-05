import { IEmpresa } from "../empresa";

export interface IQuimica {
  _id: string;
  nombre: string;
  logo: string;
  fechaCreacion: string;
  idEmpresas?: string[];
  //
  empresas?: IEmpresa[];
}
