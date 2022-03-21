import { ILocation } from '../../compartidos/location';

export interface IEstablecimiento {
  _id: string;
  name: string;
  location: ILocation[];
  createdAt: string;
  updatedAt: string;
  active: boolean;
}
