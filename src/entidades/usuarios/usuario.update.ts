import { UsuarioRol } from "../../compartidos/usuarioRoles";

export interface IUpdateUsuario {
  username?: string;
  hash?: string;
  salt?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  rol?: UsuarioRol;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  deleted?: boolean;
  active?: boolean;
}
