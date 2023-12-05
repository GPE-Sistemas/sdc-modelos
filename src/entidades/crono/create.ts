import { Cultivo, IEtapasMaiz, IEtapasSoja, IEtapasTrigo } from "./schema";

export interface ICreateCrono {
  cultivo: Cultivo;
  idDepartamento: string;
  ciclo: string;
  diaSiembra: number;
  mesSiembra: number;
  etapas: IEtapasSoja | IEtapasTrigo | IEtapasMaiz;
}
