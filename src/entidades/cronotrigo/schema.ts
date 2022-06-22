import { IDepartamento } from "../departamento";

export interface ICronotrigoEtapa {
  R0_R1: number;
  R1_R2: number;
  R2_R3: number;
  R3_R4: number;
  R4_R5: number;
  R5_R6: number;
  R6_R7: number;
}

export interface ICronotrigo {
  _id: string;
  idDepartamento: string;
  ciclo: string;
  fechaSiembra: string;
  etapas: ICronotrigoEtapa;
  // Populate
  departamento?: IDepartamento;
}
