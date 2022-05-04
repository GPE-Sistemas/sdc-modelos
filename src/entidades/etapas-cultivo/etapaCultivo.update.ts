import { EtapaDeCultivo } from './etapas';

export interface IUpdateEtapaCultivo {
  idSiembra?: string;
  idLote?: string;
  idEstablecimiento?: string;
  fecha?: string;
  etapa?: EtapaDeCultivo;
}
