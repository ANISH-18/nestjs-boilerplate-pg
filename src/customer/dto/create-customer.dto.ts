import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty({ message: 'Required' })
    name: string;

    @IsNotEmpty({ message: 'Required' })
    profile_photo: string;

    @IsNotEmpty({ message: 'Required' })
    status: string;

    @IsNotEmpty({ message: 'Required' })
    address: string;

    @IsNotEmpty({ message: 'Required' })
    gstNumber: string;

    @IsOptional()
    technicalContact: string;

    @IsOptional()
    accountContact: string;
}