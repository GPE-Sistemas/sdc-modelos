import { ICronotrigoEtapa } from "./schema";

export interface ICreateCronotrigo {
  idDepartamento: string;
  ciclo: string;
  fechaSiembra: string;
  etapas: ICronotrigoEtapa;
}
