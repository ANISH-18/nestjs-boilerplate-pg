import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';


@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Post()
    create(@Body() createUserDto: CreateEmployeeDto) {
        return this.employeeService.create(createUserDto);
    }

    // @Get()
    // findAll(@Query('page', ParseIntPipe) page: number = 1,
    // @Query('limit', ParseIntPipe) limit: number = 20) {
    //     return this.employeeService.findAll();
    // }

    @Get()
    findAll() {
        return this.employeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employeeService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateEmployeeDto) {
        return this.employeeService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.employeeService.remove(id);
    }
}
