import {Expose} from 'class-transformer'
import { IsNotEmpty } from 'class-validator';

export class PhotoReq {
    @Expose()
    id?: number;

    @Expose()
    @IsNotEmpty()
    name: string;

    @Expose()
    @IsNotEmpty()
    description: string;

    @Expose()
    @IsNotEmpty()
    filename: string;

    @Expose()
    veiws?: number;

    @Expose()
    isPublished?: boolean;
}