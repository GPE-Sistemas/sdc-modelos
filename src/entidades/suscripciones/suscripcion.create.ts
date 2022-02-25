export interface ICreateSuscripcion {
  idLicencia: string;
  idPago: string;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
  expiry?: Date;
}
