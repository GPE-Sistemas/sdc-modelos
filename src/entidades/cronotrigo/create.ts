import { ICronotrigoEtapa } from "./schema";

export interface ICreateCronotrigo {
  idDepartamento: string;
  ciclo: string;
  diaSiembra: number;
  mesSiembra: number;
  etapas: ICronotrigoEtapa;
}
