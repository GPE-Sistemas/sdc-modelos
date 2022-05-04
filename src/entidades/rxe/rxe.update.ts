import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IUpdateRxe {
  idUsuario?: string;
  idEstablecimiento?: string;
  rol?: UsuarioRol;
}
