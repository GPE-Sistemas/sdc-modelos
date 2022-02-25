import { ILocation } from "../../compartidos/location";

export interface ICreateLote {
  name: string;
  location: ILocation;
  createdAt: Date;
  upDatedAt: Date;
  deletedAt: Date;
  deleted: boolean;
  active: boolean;
  idEstablecimiento: string;
}
