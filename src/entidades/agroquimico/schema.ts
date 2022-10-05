import { IEmpresa } from "../empresa";

export interface IAgroquimico {
  _id?: string;
  nombre: string;
  idEmpresa?: string;
  segmento?: string;
  subsegmentos?: string[];
  //
  empresa?: IEmpresa;
}
