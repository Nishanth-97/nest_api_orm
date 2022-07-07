import { IsNotEmpty, MinLength } from 'class-validator';

export class PostDto {

    id?:number;
    username?: String;
    firstname?: String;
    lastname?: String;
    email?: String;
    mobile?: String;
    


    // @IsNotEmpty()
    // @MinLength(4)
    // readonly title: string;

    // @IsNotEmpty()
    // readonly body: string;
}
