export interface ISiembra {
  _id: string;
  nombre: string;
  idSemilla: string;
  idUsuario: string;
  idLote: string;
  idEstablecimiento: string;
  fechaDeSiembra: string;
  createdAt: string;
  fechaDeCierre?: string;
}
