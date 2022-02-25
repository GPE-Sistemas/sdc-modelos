export interface IEstablecimiento {
    name: string;
    location: {
        poligono: {
            [
            {
                lat: number;
                lng: number;
            }
            ]
        }
    }
}

export interface Punto 