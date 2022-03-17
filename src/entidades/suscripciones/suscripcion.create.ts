export interface ICreateSuscripcion {
  idUsuario: string;
  idLicencia: string;
  idPago: string;
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
  expiry?: string;
}
