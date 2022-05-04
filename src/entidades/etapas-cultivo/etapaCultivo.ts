import { EtapaDeCultivo } from './etapas';

export interface IEtapaCultivo {
  idSiembra: string;
  idLote: string;
  idEstablecimiento: string;
  fecha: string;
  etapa: EtapaDeCultivo;
}
