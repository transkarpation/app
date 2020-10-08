import {Expose} from 'class-transformer'
import { IsNotEmpty, isEmail, IsEmail } from 'class-validator';

export class UserReq {
    @Expose()
    id?: number;

    @Expose()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Expose()
    @IsNotEmpty()
    passowrd: string;
}