import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService) { }

    @Post()
    create(@Body() createUserDto: CreateVendorDto) {
        return this.vendorService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.vendorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vendorService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateVendorDto) {
        return this.vendorService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.vendorService.remove(id);
    }
}
