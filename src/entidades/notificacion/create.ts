export interface ICreateNotificacion {
  tenant?: {
    idQuimica?: string;
    idDistribuidor?: string;
    idProductor?: string;
    idEstablecimiento?: string;
    idUsuario?: string;
  };
  titulo?: string;
  mensaje?: string;
  data?: { [key: string]: string };
}
