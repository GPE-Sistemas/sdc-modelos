import { ICoordenadas } from "../../compartidos";

export interface IUpdateSiembra {
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idDepartamento?: string;
  idSemilla?: string;
  fechaSiembra?: string;
  fechaFinal?: string;
  coordenadas?: ICoordenadas;
}
