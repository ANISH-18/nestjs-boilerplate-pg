import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateVendorDto {
    @IsNotEmpty({ message: 'Required' })
    name: string;

    @IsNotEmpty({ message: 'Required' })
    address: string;

    @IsNotEmpty({ message: 'Required' })
    gstNumber: string;

    @IsNotEmpty({ message: 'Required' })
    pan: string;

    @IsOptional()
    technicalContact: string;

    @IsOptional()
    accountContact: string;
}