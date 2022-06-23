export interface IEnfermedad {
  _id: string;
  nombre: string;
  cultivo: string;
  etapas: number[];
  formula?: string;
  tempMin?: number;
  tempMax?: number;
  rocioMin?: number;
  rocioMax?: number;
  latenciaMin?: number;
  latenciaMax?: number;
}
