import {Expose} from 'class-transformer'

export class PhotoReq {
    @Expose()
    id?: number;

    @Expose()
    name: string;

    @Expose()
    description: string;

    @Expose()
    filename: string;

    @Expose()
    veiws: number;

    @Expose()
    isPublished: boolean;
}