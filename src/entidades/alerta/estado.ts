import { IUsuario } from '../usuario';

export type EstadoAlerta = 'Nueva' | 'Tratada' | 'Postergada' | 'Finalizada';
export const ESTADOS_ALERTA = ['Nueva', 'Tratada', 'Postergada', 'Finalizada'];

export interface IEstadoAlerta {
  fecha?: string;
  idUsuario?: string;
  estado?: EstadoAlerta;
  comentario?: string;
  // Virtual
  usuario?: IUsuario;
}
