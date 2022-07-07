declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare class UserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly gender: Gender;
}
export {};
