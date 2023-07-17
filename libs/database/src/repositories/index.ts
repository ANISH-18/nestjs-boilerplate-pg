import { UserRepository } from "./user.repository";
import { VendorRepository } from "./vendor.repository";
import { EmployeeRepository } from "./employee.repository";
import { CustomerRepository } from "./customer.repository";

export const repositories = [
    UserRepository,
    VendorRepository,
    EmployeeRepository,
    CustomerRepository
];

export * from './user.repository';
export * from './vendor.repository';
export * from './employee.repository';
export * from './customer.repository';