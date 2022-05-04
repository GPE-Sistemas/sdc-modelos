import { EtapaDeCultivo } from './etapas';

export interface ICreateEtapaCultivo {
  idSiembra: string;
  idLote: string;
  idEstablecimiento: string;
  fecha: string;
  etapa: EtapaDeCultivo;
}
