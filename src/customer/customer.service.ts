import { CustomerRepository } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository
    ){}

    async create(input: CreateCustomerDto){
        const user = await this.customerRepository.create(input);
        await this.customerRepository.save(user);
        return {message:"Customer Created Successfully"};
        
    }

    async findAll() {
        const customerData= await this.customerRepository.findAndCount();      
        return {message:"Customer List ",data:customerData};
    }

    async findOne(id: string) {
        const customerData= await this.customerRepository.findOneBy({ id });
        return {data:customerData,
            message:"Customer Details Successfully"};
    }

    async update(id: string, updateCustomerDto: UpdateCustomerDto) {
        await this.customerRepository.update({ id }, updateCustomerDto);
        return {message:"Vendor Updated Successfully"};
    }

    async remove(id: string) {
        await this.customerRepository.delete(id);
        return {message:"Vendor Deleted Successfully"};
       
    }
}

