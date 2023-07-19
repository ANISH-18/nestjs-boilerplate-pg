import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty({ message: 'Profile Pic is Required' })
    profile_pic: string;

    @IsNotEmpty({ message: 'Status is Required' })
    status: string;

    @IsNotEmpty({ message: 'department_id is Required' })
    department_id: string;

    @IsNotEmpty({ message: 'employee_role_id is Required' })
    employee_role_id: string;

    @IsNotEmpty({ message: 'gender is Required' })
    gender: string;

    @IsNotEmpty({ message: 'first_name is Required' })
    first_name: string;


    @IsNotEmpty({ message: 'last_name is Required' })
    last_name: string;


    @IsOptional({ message: 'dob is Required' })
    dob: string;

    @IsNotEmpty({ message: 'email_id is Required' })
    email_id: string;

    @IsNotEmpty({ message: 'phone_number is Required' })
    phone_number: string;

    @IsNotEmpty({ message: 'alternate_phone_number is Required' })
    alternate_phone_number: string;

    @IsOptional({ message: 'experienence_years is Required' })
    experienence_years: string;

    @IsOptional({ message: 'experienence_months is Required' })
    experienence_months: string;

    @IsOptional({ message: 'date_of_joining is Required' })
    date_of_joining: string;

    @IsNotEmpty({ message: 'address is Required' })
    address: string;




    @IsOptional()
    important_document: string;

    @IsOptional()
    educational_details: string;

    @IsOptional()
    training_certificate_details: string;
}