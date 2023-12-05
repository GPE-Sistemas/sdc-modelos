import { IDepartamento } from "../departamento";

export type Cultivo = "Soja" | "Trigo" | "Maiz";

export interface IEtapasTrigo {
  R0_R1?: number;
  R1_R2?: number;
  R2_R3?: number;
  R3_R4?: number;
  R4_R5?: number;
  R5_R6?: number;
  R6_R7?: number;
}

export interface IEtapasSoja {
  siembra_emergencia?: number;
  emergencia_R1?: number;
  R1_R3?: number;
  R3_R5?: number;
  R5_R7?: number;
}

export interface IEtapasMaiz {
  [key: string]: number;
}

export interface ICrono {
  _id?: string;
  cultivo?: Cultivo;
  idDepartamento?: string;
  ciclo?: string;
  diaSiembra?: number;
  mesSiembra?: number;
  etapas?: IEtapasSoja | IEtapasTrigo;
  // Populate
  departamento?: IDepartamento;
}
