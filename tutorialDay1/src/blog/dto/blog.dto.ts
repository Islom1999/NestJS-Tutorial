import { IsString, IsNotEmpty } from 'class-validator';
// Validator use

export class BlogDto {
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    expert:string;

    @IsNotEmpty()
    @IsString()
    description:string;
}
