import { v4 as uuid } from 'uuid';

import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        marca: 'Audi',
        modelo: 'A1'
    },
    {
        id: uuid(),
        marca: 'BMW',
        modelo: 'Serie 1'
    },
    {
        id: uuid(),
        marca: 'VW',
        modelo: 'Vento'
    },
    {
        id: uuid(),
        marca: 'Honda',
        modelo: 'CVR 4'
    },
    {
        id: uuid(),
        marca: 'Volvo',
        modelo: 'Volvo XC90 Recharge'
    },
    {
        id: uuid(),
        marca: 'Saab',
        modelo: 'Linear C 2008 Sport'
    },
    {
        id: uuid(),
        marca: 'Mitsubishi',
        modelo: 'Outlander'
    },
    {
        id: uuid(),
        marca: 'Subaru',
        modelo: 'Outback'
    },
] 
