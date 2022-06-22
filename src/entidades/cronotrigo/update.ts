import { ICronotrigoEtapa } from "./schema";

export interface IUpdateCronotrigo {
  idDepartamento?: string;
  ciclo?: string;
  fechaSiembra?: string;
  etapas?: ICronotrigoEtapa;
}
