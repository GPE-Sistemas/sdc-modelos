import { ILocation } from '../../compartidos/location';

export interface IUpdateEstablecimiento {
  name?: string;
  location?: ILocation[];
  updatedAt?: string;
  active?: boolean;
}
