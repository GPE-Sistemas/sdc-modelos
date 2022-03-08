import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IUsuario {
  username: string;
  hash: string;
  salt: string;
  email: string;
  firstName: string;
  lastName: string;
  rol: UsuarioRol;
  createdAt: Date;
  updatedAt: Date;
  deactivatedAt: Date;
  active: boolean;
}
