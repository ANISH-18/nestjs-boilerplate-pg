import { VendorEntity } from "@database/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class VendorRepository extends Repository<VendorEntity> {
    constructor(
        @InjectRepository(VendorEntity)
        private vendorRepository: Repository<VendorEntity>
    ) {
        super(vendorRepository.target, vendorRepository.manager, vendorRepository.queryRunner);
    }

   
}