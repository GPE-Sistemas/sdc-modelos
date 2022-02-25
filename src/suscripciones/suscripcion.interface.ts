export interface ISuscripcion {
    idLicencia: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    expiry: date;
    idPago: string;
}