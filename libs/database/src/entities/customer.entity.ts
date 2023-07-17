import { Exclude } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customer')
export class CustomerEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar', name: 'name', nullable: false
    })
    name: string;

    @Column({
        type: 'varchar', name: 'profile_photo', nullable: false
    })
    profile_photo: string;

    @Column({
        type: 'varchar', name: 'status', nullable: false
    })
    status: string;
    
    @Column({
        type: 'text', name: 'address', nullable: false
    })
    address: string;

    @Column({
        type: 'varchar', name: 'gst_number', nullable: false
    })
    gstNumber: string;

    @Column({
        type: 'jsonb', name: 'technical_contact', nullable: false
    })
    technicalContact: string;

    @Column({
        type: 'jsonb', name: 'account_contact', nullable: false
    })
    accountContact: string;

    /*
    * Create and Update Date Columns
    */
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    public updatedAt!: Date;
}