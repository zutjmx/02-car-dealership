import { v4 as uuid } from 'uuid';

import { Marca } from "src/marcas/entities/marca.entity";

export const MARCAS_SEED: Marca[] = [
    {
        id: uuid(),
        nombre: 'ABARTH'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'ALFA ROMEO'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Alpine'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'ASTON MARTIN'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Audi'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Bentley'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Bmw'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Bugatti'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Citroën'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Cupra'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
      {
        id: uuid(),
        nombre: 'Dacia'.toUpperCase(),
        creadoEn: new Date().getTime()
      },
]