import { CustomerEntity } from "@database/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class CustomerRepository extends Repository<CustomerEntity> {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>
    ) {
        super(customerRepository.target, customerRepository.manager, customerRepository.queryRunner);
    }

   
}