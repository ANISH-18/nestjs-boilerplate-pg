import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post()
    create(@Body() createUserDto: CreateCustomerDto) {
        return this.customerService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.customerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customerService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateCustomerDto) {
        return this.customerService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.customerService.remove(id);
    }
}
