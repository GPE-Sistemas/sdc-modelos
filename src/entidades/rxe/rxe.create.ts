import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface ICreateRxe {
  idUsuario: string;
  idEStablecimiento: string;
  rol: UsuarioRol;
}
