import { EtapaDeCultivo } from './etapas';

export interface IUpdateEtapaCultivo {
  idSiembra?: string;
  idLote?: string;
  idEstablecimiento?: string;
  fecha?: Date;
  etapa?: EtapaDeCultivo;
}
