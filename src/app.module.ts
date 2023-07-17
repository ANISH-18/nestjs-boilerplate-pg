import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from '@mail';
import { HelpersModule } from '@helpers';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from '@database';
import { JwtAuthModule } from '@jwt_auth';
import { VendorController } from './vendor/vendor.controller';
import { VendorService } from './vendor/vendor.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MailModule,
    HelpersModule,
    JwtAuthModule,
  ],
  controllers: [AppController, AuthController, VendorController, EmployeeController, CustomerController],
  providers: [AuthService, VendorService, EmployeeService, CustomerService],
})
export class AppModule { }
