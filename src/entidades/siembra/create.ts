import { ICoordenadas } from "../../compartidos";

export interface ICreateSiembra {
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote: string;
  idDepartamento?: string;
  idSemilla: string;
  idCrono?: string;
  fechaSiembra?: string;
  coordenadas?: ICoordenadas;
}
