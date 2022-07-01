import { IEnfermedad } from "../enfermedad";
import { ISiembra } from "../siembra";

export interface IVariablesRoyaDeLaHoja {
  GD?: number; // Grados Dia
  DHR?: number; // Dias sin lluvia (>= 0.2) y HR >= 70%
}

export interface IVariablesManchaAmarilla {
  DPrHRT?: number; // Dias con lluvia > 1mm y HR >= 80% y temp max <= 32°C y temp min >= 8°C
  DPr?: number; // Dias con lluvia > 2mm
}

export interface IVariablesManchaManchaDeLaHoja {
  DPr?: number; // Dias con lluvia > 10mm
  DHR?: number; // Dias con HR >= 80%
}

export interface IVariablesFusariumDeLaEspiga {
  PMoj?: number; // número de períodos de mojado de 2 días con registro de precipitación > 0,2 y HR>81% en el día 1 y una HR≥78% en el día 2.
  GDN?: number;
}

export interface IPrediccionEnfermedad {
  idEnfermedad: string;
  resultado: number;
  variables:
    | IVariablesRoyaDeLaHoja
    | IVariablesManchaAmarilla
    | IVariablesManchaManchaDeLaHoja
    | IVariablesFusariumDeLaEspiga;

  // Populate
  enfermedad?: IEnfermedad[];
}

export interface IPrediccionEstacion {
  idEstacion: string;
  distanciaMetros: number;
  precipitaciones: number;
  humedadRelativa: number;
  temperaturaMaxima: number;
  temperaturaMinima: number;
  temperaturaPromedio: number;
}

export interface IPrediccion {
  _id: string;
  fecha: string;
  idSiembra: string;
  enfermedades: IPrediccionEnfermedad[];
  estacion: IPrediccionEstacion;
  // Populate
  siembra?: ISiembra;
}
