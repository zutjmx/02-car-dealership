import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {

  //! Datos en hard code.
  private marcas: Marca[] = [
    /* {
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
    }, */
  ];

  create(createMarcaDto: CreateMarcaDto) {
    /* const nuevaMarca: Marca = new Marca();
    nuevaMarca.id = uuid();
    nuevaMarca.nombre = createMarcaDto.nombre;
    nuevaMarca.creadoEn = new Date().getTime(); */

    //! Se usa como interface, con BD se debe de usar como instancia.
    const nuevaMarca: Marca = {
      id: uuid(),
      nombre: createMarcaDto.nombre.toUpperCase(),
      creadoEn: new Date().getTime()
    }

    this.marcas.push(nuevaMarca);

    return nuevaMarca;
  }

  findAll() {
    return this.marcas;
  }

  findOne(id: string) {
    const marca = this.marcas.find(marca => marca.id === id);
    if(!marca) {
      throw new NotFoundException(`:: No se encontró la marca con id '${id}' ::`);
      
    }
    return marca;
  }

  update(id: string, updateMarcaDto: UpdateMarcaDto) {
    let marcaParaActualizar = this.findOne(id);

    this.marcas = this.marcas.map(
      marca => {
          if(marca.id == id) {

            marcaParaActualizar.actualizadoEn = new Date().getTime();
            
            marcaParaActualizar = {
                  ...marcaParaActualizar,
                  ...updateMarcaDto,
                  id
            }
            
            return marcaParaActualizar;
          }
          return marca;
      }
    );

    return marcaParaActualizar;
  }

  remove(id: string) {
    let marca = this.findOne(id);
    this.marcas = this.marcas.filter(marca => marca.id !== id);
    return;
  }

  llenarMarcasConSeedData(marcas: Marca[]) {
    this.marcas = marcas;
  }

}
