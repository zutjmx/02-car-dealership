import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    //! Datos en hard code.
    private cars: Car[] = [
        /* {
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
        }, */
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        
        const auto = this.cars.find(car => car.id == id);
        
        if (!auto) {
            console.log(':: CarsService.findOneById == <<Auto No Encontrado>> ::');
            throw new NotFoundException(`:: El auto con id '${id}' no se encuentra en la BD ::`);
        }
        
        console.log(':: CarsService.findOneById == Auto encontrado ::');

        return auto;
    }

    create(createCarDto: CreateCarDto) {
        let nuevoAuto: Car = {
            id: uuid(),
            marca: createCarDto.marca,
            modelo: createCarDto.modelo
        };

        this.cars.push(nuevoAuto);

        return nuevoAuto;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let autoParaActualizar: Car = this.findOneById(id);
        
        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(":: El id del parámetro no corresponde al id del objeto que quiere actualizar ::");
        }

        this.cars = this.cars.map(
            car => {
                if(car.id == id) {
                    autoParaActualizar = {
                        ...autoParaActualizar,
                        ...updateCarDto,
                        id
                    }
                    return autoParaActualizar;
                }
                return car;
            }
        );

        return autoParaActualizar;
    }

    delete(id: string) {
        let autoParaActualizar: Car = this.findOneById(id);
        this.cars = this.cars.filter(
            (auto) => auto.id !== id
        );
        return;
    }

    llenarAutosConSeedData(cars: Car[]) {
        this.cars = cars;
    }

}
