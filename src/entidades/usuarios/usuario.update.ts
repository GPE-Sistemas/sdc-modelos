import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IUpdateUsuario {
  _id: string;
  // Datos enviados desde el frontend
  password?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  rol?: UsuarioRol;
  active?: boolean;
  // Datos rellenados por la API
  hash?: string;
  salt?: string;
  updatedAt?: string;
  deactivatedAt?: string;
}
