import { Exclude } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('employee')
export class EmployeeEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar', name: 'profile_pic', nullable: false
    })
    profile_pic: string;
    
    @Column({
        type: 'boolean', name: 'status', nullable: false
    })
    status: string;

    @Column({
        type: 'varchar', name: 'department_id', nullable: false
    })
    department_id: string;


    @Column({
        type: 'varchar', name: 'employee_role_id', nullable: false
    })
    employee_role_id: string;

    @Column({
        type: 'varchar', name: 'gender', nullable: false
    })
    gender: string;
    
    @Column({
        type: 'varchar', name: 'first_name', nullable: false
    })
    first_name: string;

    @Column({
        type: 'varchar', name: 'last_name', nullable: false
    })
    last_name: string;
    @Column({
        type: 'date', name: 'dob', nullable: false
    })
    dob: string;

    @Column({
        type: 'varchar', name: 'email_id', nullable: false
    })
    email_id: string;

    @Column({
        type: 'varchar', name: 'phone_number', nullable: false
    })
    phone_number: string;

    @Column({
        type: 'varchar', name: 'alternate_phone_number', nullable: false
    })
    alternate_phone_number: string;

    @Column({
        type: 'varchar', name: 'experience_years', nullable: false
    })
    experience_years: string;

    @Column({
        type: 'varchar', name: 'experience_months', nullable: false
    })
    experience_months: string;

    @Column({
        type: 'date', name: 'date_of_joining', nullable: false
    })
    date_of_joining: string;

    @Column({
        type: 'text', name: 'address', nullable: false
    })
    address: string;

    @Column({
        type: 'text', name: 'job_description', nullable: false
    })
    job_description: string;

    @Column({
        type: 'jsonb', name: 'important_document', nullable: false
    })
    important_document: string;

    @Column({
        type: 'jsonb', name: 'educational_details', nullable: false
    })
    educational_details: string;

    @Column({
        type: 'jsonb', name: 'training_certificate_details', nullable: false
    })
    training_certificate_details: string;   
    
    

    /*
    * Create and Update Date Columns
    */
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    public updatedAt!: Date;
}