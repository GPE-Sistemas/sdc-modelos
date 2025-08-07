import { ICoordenadas } from "../compartidos";

export type FuenteClima =
  | "OpenWeather"
  | "FieldClimate"
  | "MeteoSource"
  | "Omixom"
  | "Horatech"
  | "Dispositivo";
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
  probabilidadLluvia?: number;
  lluvia?: IValores;
  radiacionSolar?: IValores;
  humedadSuelo?: { [nivel: number]: IValores };
  temperaturaSuelo?: { [nivel: number]: IValores };
  panelSolar?: IValores;
  bateria?: IValores;
  rafagaViento?: IValores;
  nivelDeAgua?: IValores; // Freatímetro
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

// ========================================
// INTERFACES PARA SISTEMA DE TILES CLIMÁTICOS
// ========================================

/**
 * Variables climáticas disponibles para tiles de Meteosource
 */
export type WeatherVariable =
  | "temperature"
  | "precipitation"
  | "clouds"
  | "wind_speed"
  | "humidity"
  | "pressure"
  | "visibility"
  | "gust"
  | "wind_direction"
  | "uv_index"
  | "dew_point"
  | "sunshine"
  | "global_radiation"
  | "diffuse_radiation"
  | "cape"
  | "lifted_index";

/**
 * Metadatos de una variable climática para tiles
 */
export interface WeatherVariableMetadata {
  name: string;
  unit: string;
  description: string;
  colorScale?: string;
}

/**
 * Información de un tile climático individual
 */
export interface TileInfo {
  x: number;
  y: number;
  z: number;
  variable: WeatherVariable;
  datetime: string;
  url: string;
  cached?: boolean;
}

/**
 * Solicitud para obtener tiles climáticos en un viewport
 */
export interface TileViewportRequest {
  /** Variable climática a visualizar */
  variable: WeatherVariable;
  /** Momento temporal (now para datos actuales) */
  datetime: string;
  /** Nivel de zoom del mapa */
  zoom: number;
  /** Límites del viewport del mapa */
  viewport: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
}

/**
 * Respuesta con tiles climáticos para un viewport
 */
export interface TileResponse {
  /** Variable climática solicitada */
  variable: WeatherVariable;
  /** Momento temporal solicitado */
  datetime: string;
  /** Nivel de zoom */
  zoom: number;
  /** Lista de tiles disponibles en el viewport del usuario */
  tiles: TileInfo[];
  /** Metadatos de la variable climática */
  metadata: WeatherVariableMetadata;
  /** Si los datos vienen de caché */
  fromCache?: boolean;
  /** Timestamp de cuando se generó la respuesta */
  generatedAt: string;
}

/**
 * Metadatos completos de todas las variables climáticas disponibles
 */
export const WEATHER_VARIABLES_METADATA: Record<
  WeatherVariable,
  WeatherVariableMetadata
> = {
  temperature: {
    name: "Temperatura",
    unit: "°C",
    description: "Temperatura del aire a 2 metros de altura",
    colorScale: "temperature",
  },
  precipitation: {
    name: "Precipitación",
    unit: "mm",
    description: "Precipitación acumulada",
    colorScale: "precipitation",
  },
  clouds: {
    name: "Nubosidad",
    unit: "%",
    description: "Cobertura de nubes total",
    colorScale: "clouds",
  },
  wind_speed: {
    name: "Velocidad del viento",
    unit: "m/s",
    description: "Velocidad del viento a 10 metros de altura",
    colorScale: "wind",
  },
  humidity: {
    name: "Humedad relativa",
    unit: "%",
    description: "Humedad relativa del aire",
    colorScale: "humidity",
  },
  pressure: {
    name: "Presión atmosférica",
    unit: "hPa",
    description: "Presión atmosférica a nivel del mar",
    colorScale: "pressure",
  },
  visibility: {
    name: "Visibilidad",
    unit: "km",
    description: "Visibilidad horizontal",
    colorScale: "visibility",
  },
  gust: {
    name: "Ráfagas de viento",
    unit: "m/s",
    description: "Velocidad máxima de ráfagas de viento",
    colorScale: "wind",
  },
  wind_direction: {
    name: "Dirección del viento",
    unit: "°",
    description: "Dirección del viento en grados (0° = Norte)",
    colorScale: "wind_direction",
  },
  uv_index: {
    name: "Índice UV",
    unit: "",
    description: "Índice de radiación ultravioleta",
    colorScale: "uv",
  },
  dew_point: {
    name: "Punto de rocío",
    unit: "°C",
    description: "Temperatura del punto de rocío",
    colorScale: "temperature",
  },
  sunshine: {
    name: "Duración del sol",
    unit: "min",
    description: "Duración de la luz solar directa",
    colorScale: "sunshine",
  },
  global_radiation: {
    name: "Radiación global",
    unit: "W/m²",
    description: "Radiación solar global",
    colorScale: "radiation",
  },
  diffuse_radiation: {
    name: "Radiación difusa",
    unit: "W/m²",
    description: "Radiación solar difusa",
    colorScale: "radiation",
  },
  cape: {
    name: "CAPE",
    unit: "J/kg",
    description: "Energía potencial convectiva disponible",
    colorScale: "cape",
  },
  lifted_index: {
    name: "Índice de elevación",
    unit: "°C",
    description: "Índice de estabilidad atmosférica",
    colorScale: "stability",
  },
};
