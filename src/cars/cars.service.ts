import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            marca: 'Audi',
            modelo: 'A1'
        },
        {
            id:2,
            marca: 'BMW',
            modelo: 'Serie 1'
        },
        {
            id:3,
            marca: 'VW',
            modelo: 'Vento'
        },
        {
            id:4,
            marca: 'Honda',
            modelo: 'CVR 4'
        },
        {
            id:5,
            marca: 'Volvo',
            modelo: 'Volvo XC90 Recharge'
        },
        {
            id:6,
            marca: 'Saab',
            modelo: 'Linear C 2008 Sport'
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        
        const auto = this.cars.find(car => car.id == id);
        
        if (!auto) {
            console.log(':: CarsService.findOneById == <<Auto No Encontrado>> ::');
            throw new NotFoundException(`:: El auto con id '${id}' no se encuentra en la BD ::`);
        }
        
        console.log(':: CarsService.findOneById == Auto encontrado ::');

        return auto;
    }

}
