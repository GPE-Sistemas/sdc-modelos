export interface IEnfermedad {
  _id: string;
  nombre: string;
  cultivo: string;
  etapas: number[];
  formula?: string;
}
