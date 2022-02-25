import { ILocation } from "../../compartidos/location";

export interface IUpdateLote {
  name?: string;
  location?: ILocation;
  createdAt?: Date;
  upDatedAt?: Date;
  deletedAt?: Date;
  deleted?: boolean;
  active?: boolean;
  idEstablecimiento?: string;
}
