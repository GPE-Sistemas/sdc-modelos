import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IUpdateUsuario {
  password?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  rol?: UsuarioRol;
  active?: boolean;
  //
  hash?: string;
  salt?: string;
  updatedAt?: string;
  deactivatedAt?: string;
}
