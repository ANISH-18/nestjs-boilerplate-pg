import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpUserDto{
    @IsNotEmpty({ message: 'First Name Is Required' })
    firstName: string;

    @IsNotEmpty({ message: 'Last Name Is Required' })
    lastName: string;

    @IsNotEmpty({message: 'Email Is Required'})
    @IsEmail({}, {message: 'EMail must be valid email address'})
    email: string;

    @IsNotEmpty({message: "Password is requried"})
    password: string;
}