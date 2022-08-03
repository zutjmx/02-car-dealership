import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
    
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {

    console.log({id});

    //! Para simular error del servidor ini
    //throw new Error(":: Error en el servidor de BD ::");
    //! Para simular error del servidor fin

    const auto = this.carsService.findOneById(id);
    console.log(auto);

    return auto;
  }

  @Post()
  //@UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    
    console.log(createCarDto);

    let nuevoAuto: Car = this.carsService.create(createCarDto);
    
    return nuevoAuto;

  }

  @Patch(':id')
  updateCar(
      @Param('id',ParseUUIDPipe) id: string,
      @Body() updateCarDto: UpdateCarDto
     ) {
    // console.log(id);
    // console.log(updateCarDto);
    return this.carsService.update(id, updateCarDto);

  }

  @Delete(':id')
  deleteCar(@Param('id',ParseUUIDPipe) id: string) {
    //console.log(id);
    
    this.carsService.delete(id);

    return;
    //return {mensaje: `:: Auto con id '${id}' borrado ::`}

  }

}
