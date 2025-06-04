export interface ILicenciaPorEntidad {
  _id?: string;
  idLicencia?: string; // ID de la licencia
  idEntidad?: string; // puede ser ID de Química, Distribuidor o Productor
  fechaCreacion?: string; // Fecha de creación de la licencia
  fechaExpiracion?: string; // Fecha de expiración de la licencia
  // Virtuals
  quimica?: string; // ID de la química asociada
  distribuidor?: string; // ID del distribuidor asociado
  productor?: string; // ID del productor asociado
  licencia?: string; // Nombre de la licencia
}

type OmitirCreate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "licencia";
export interface ICreateLicenciaPorEntidad
  extends Omit<Partial<ILicenciaPorEntidad>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "licencia";
export interface IUpdateLicenciaPorEntidad
  extends Omit<Partial<ILicenciaPorEntidad>, OmitirUpdate> {}
