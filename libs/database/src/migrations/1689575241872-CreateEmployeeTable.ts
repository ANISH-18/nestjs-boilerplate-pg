import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateEmployeeTable1689575241872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query( `create table "employee" (
        id uuid DEFAULT uuid_generate_v4() NOT NULL,
        profile_pic text,
        status boolean,
        department_id varchar,
        employee_role_id varchar(10),
        gender varchar(1),
        first_name varchar,
        last_name varchar,
        dob date,
        email_id varchar,
        phone_number varchar(10),
        alternate_phone_number varchar(10),
        experienence_years varchar(2),
        experienence_months varchar(2),
        date_of_joining date,
        address text,
        job_description text,
        important_document jsonb,
        educational_details jsonb,
        training_certificate_details jsonb,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        primary key(id)         

    );`)
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table "employee";
        `);
    }


}
