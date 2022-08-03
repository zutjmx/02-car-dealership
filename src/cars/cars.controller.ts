import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    
  //private cars = ['VW', 'Toyota', 'Honda', 'BMW', 'Hyundai', 'Saab', 'Volvo', 'Audi', 'Seat'].sort();

  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id',ParseIntPipe) id: number) {

    console.log({id});

    //! Simular error del servidor
    //throw new Error(":: Error en el servidor de BD ::");

    const auto = this.carsService.findOneById(id);
    console.log(auto);

    return auto;
  }

}
