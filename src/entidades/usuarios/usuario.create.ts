import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface ICreateUsuario {
  username: string;
  passowrd?: string;
  email: string;
  firstName: string;
  lastName: string;
  rol?: UsuarioRol;
  //
  hash?: string;
  salt?: string;
  updatedAt?: string;
  deactivatedAt?: string;
}
