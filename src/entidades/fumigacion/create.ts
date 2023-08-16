export interface ICreateFumigacion {
  // Tenant
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  // Datos Autogenerados
  fechaCreacion?: string;
  // Info de Fumigación
  fechaFumigacion?: string;
  idSiembra?: string;
  idAgroquimico?: string;
  duracion?: number; // 15 días
}
