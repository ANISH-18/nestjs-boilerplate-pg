import { EmployeeRepository } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
    constructor(
        private readonly employeeRepository: EmployeeRepository
    ){}

    async create(input: CreateEmployeeDto){
        const employee = await this.employeeRepository.create(input);
        await this.employeeRepository.save(employee);

        return {message:"Employee Created Successfully"};
    }

    async findAll() {
        const employeeData= await  this.employeeRepository.findAndCount();
        return {message:"Employee Created Successfully",data:employeeData};
    }

    async findOne(id: string) {
        const employeeData= await this.employeeRepository.findOneBy({ id });
        return {data:employeeData,
            message:"Employee Details Successfully"};
    }

    async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
        await this.employeeRepository.update({ id }, updateEmployeeDto);
        return {message:"Employee Updated Successfully"};
    }

    async remove(id: string) {
        await this.employeeRepository.delete(id);
        return {message:"Employee Deleted Successfully"};
    }
}
