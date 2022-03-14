import { ICrearClientInput } from './client.dto';
import { IUsuario } from '../usuarios/usuario';

export interface ICrearTokenInput {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: ICrearClientInput;
  user: IUsuario;
}
