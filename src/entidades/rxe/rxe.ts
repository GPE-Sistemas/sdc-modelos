import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IRxe {
  _id: string;
  idUsuario: string;
  idEstablecimiento: string;
  rol: UsuarioRol;
}
