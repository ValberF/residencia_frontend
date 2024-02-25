export interface IAvioes {
    Alcance: String
    Autonomia: String
    Engine: String
    Model: String
    Name: String
    NumberOfPassengers: Number
    Teto?: String
}

export interface IBarcos {
    Alcance: String
    Autonomia: String
    Engine: String
    Model: String
    Name: String
    NumberOfPassengers: Number
}

export interface ICarros {
    Alcance: String
    Autonomia: String
    Engine: String
    Model: String
    Name: String
    NumberOfPassengers: Number
}

export interface IVeiculos {
    Avioes: IAvioes[]
    Barcos: IBarcos[]
    Carros: ICarros[]
}