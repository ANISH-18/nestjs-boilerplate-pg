import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateCustomerTable1689594340941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table "customer" (
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                name varchar,
                profile_photo varchar,
                status boolean,
                customer_id varchar,
                address text,
                gst_number varchar(25),               
                technical_contact jsonb,
                account_contact jsonb,
                created_at TIMESTAMP NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
                primary key(id)
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table "customer";
        `);
    }

}
