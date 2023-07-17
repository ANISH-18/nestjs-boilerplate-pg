import { VendorRepository } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {
    constructor(
        private readonly vendorRepository: VendorRepository
    ){}

    async create(input: CreateVendorDto){
        const user = await this.vendorRepository.create(input);
        await this.vendorRepository.save(user);
        return {message:"Vendor Created Successfully"};
        
    }

    async findAll() {
        const vendorData= await this.vendorRepository.findAndCount();      
        return {message:"Vendor List Successfully",data:vendorData};
    }

    async findOne(id: string) {
        const vendorData= await this.vendorRepository.findOneBy({ id });
        return {data:vendorData,
            message:"Vendor Details Successfully"};
    }

    async update(id: string, updateVendorDto: UpdateVendorDto) {
        await this.vendorRepository.update({ id }, updateVendorDto);
        return {message:"Vendor Updated Successfully"};
    }

    async remove(id: string) {
        await this.vendorRepository.delete(id);
        return {message:"Vendor Deleted Successfully"};
       
    }
}
