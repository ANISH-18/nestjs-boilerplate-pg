import { UserEntity } from "./user.entity";
import { VendorEntity } from "./vendor.entity";
import { EmployeeEntity } from "./employee.entity";
import { CustomerEntity } from "./customer.entity";


export const entities = [
    UserEntity,
    VendorEntity,
    EmployeeEntity,
    CustomerEntity
];

export * from './user.entity';
export * from './vendor.entity';
export * from './employee.entity';
export * from './customer.entity';