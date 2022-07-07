import { Model } from 'sequelize-typescript';
export declare class Users extends Model<Users> {
    id: String;
    username: string;
    firstname: String;
    lastname: String;
    email: String;
    mobile: String;
    user: Users;
}
