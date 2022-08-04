/* import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaDto } from './create-marca.dto';

export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {} */

import { IsString, MinLength } from "class-validator";

export class UpdateMarcaDto {
    @IsString()
    @MinLength(3)
    nombre: string;
}
