import { ICoordenadas } from "../compartidos";

export type FuenteClima = "OpenWeather" | "FieldClimate" | "MeteoSource";
export interface IValores {
  avg?: number;
  min?: number;
  max?: number;
  sum?: number;
  count?: number;
  last?: number;
  result?: number;
}

export interface IClimaEstacionMeteorologica {
  fuente?: FuenteClima;
  icon?: string;
  iconNum?: number;
  summary?: string;
  fecha?: string;
  diaNoche?: "Día" | "Noche";
  estacion?: string;
  ubicacion?: ICoordenadas;
  distancia?: number;
  temperatura?: IValores;
  humedad?: IValores;
  presion?: IValores;
  velocidadViento?: IValores;
  direccionViento?: IValores;
  intensidadLuminica?: IValores;
  lluvia?: IValores;
  radiacionSolar?: IValores;
  humedadSuelo?: { [nivel: number]: IValores };
  temperaturaSuelo?: { [nivel: number]: IValores };
  panelSolar?: IValores;
  bateria?: IValores;
  rafagaViento?: IValores;
  et0?: IValores;
}

export interface IPronosticoEstacionMeteorologica {
  fuente?: FuenteClima;
  fecha?: string;
  diaNoche?: "Día" | "Noche";
  estacion?: string;
  ubicacion?: ICoordenadas;
  distancia?: number;
  //
  temperatura?: IValores;
  humedad?: IValores;
  velocidadViento?: IValores;

  lluvia?: number;
  probabilidadLluvia?: number;
  direccionViento?: number;
  radiacionSolar?: number;
  et0?: number;
}

export interface IPronosticoMeteoSource {
  fuente?: FuenteClima; // MeteoSource
  fecha?: string;
  ubicacion?: ICoordenadas;
  //
  temperatura?: IValores;
  humedad?: IValores;
  velocidadViento?: IValores;

  lluvia?: number;
  probabilidadLluvia?: number;
  direccionViento?: number;
  radiacionSolar?: number;
  et0?: number;
}
