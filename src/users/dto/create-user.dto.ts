import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERNS","ENGINEER","ADMIN"], {
            message: "valid role required"
        })
    role: "INTERNS" | "ENGINEER" | "ADMIN";  
}