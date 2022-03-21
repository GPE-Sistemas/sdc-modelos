import { UsuarioRol } from '../../compartidos/usuarioRoles';

export interface IRolPorEstablecimiento {
  _id: string;
  idUsuario: string;
  idEStablecimiento: string;
  rol: UsuarioRol;
}
