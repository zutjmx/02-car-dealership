import { IsString, MinLength } from "class-validator";

export class CreateMarcaDto {
    @IsString()
    @MinLength(3)
    nombre: string;
}
