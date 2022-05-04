import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface ICreateRxe {
  idUsuario: string;
  idEstablecimiento: string;
  rol: UsuarioRol;
}
