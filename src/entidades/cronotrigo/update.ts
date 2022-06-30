import { ICronotrigoEtapa } from "./schema";

export interface IUpdateCronotrigo {
  idDepartamento?: string;
  ciclo?: string;
  diaSiembra?: number;
  mesSiembra?: number;
  etapas?: ICronotrigoEtapa;
}
