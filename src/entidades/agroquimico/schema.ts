import { IEmpresa } from "../empresa";

export interface IAgroquimico {
  nombre: string;
  idEmpresa?: string;
  segmento?: string;
  subsegmentos?: string[];
  //
  empresa?: IEmpresa;
}
