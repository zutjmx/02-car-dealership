import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { MARCAS_SEED } from './data/marcas.seed';
import { CarsService } from '../cars/cars.service';
import { MarcasService } from '../marcas/marcas.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly marcasService: MarcasService
  ) {}
  
  poblarBD() {

    this.carsService.llenarAutosConSeedData(CARS_SEED);
    this.marcasService.llenarMarcasConSeedData(MARCAS_SEED);

    return ':: Se ejecutó el poblado de la BD ::';
  }

}
