import { EmployeeEntity } from "@database/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class EmployeeRepository extends Repository<EmployeeEntity> {
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeeRepository: Repository<EmployeeEntity>
    ) {
        super(employeeRepository.target, employeeRepository.manager, employeeRepository.queryRunner);
    }
}