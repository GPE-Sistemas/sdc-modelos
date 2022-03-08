import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface ICreateUsuario {
  // Datos enviados desde el frontend
  username: string;
  passowrd?: string;
  email: string;
  firstName: string;
  lastName: string;
  rol?: UsuarioRol;
  // Datos rellenados por la API
  hash?: string;
  salt?: string;
  updatedAt?: string;
  deactivatedAt?: string;
}
