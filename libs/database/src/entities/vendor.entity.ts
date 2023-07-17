import { Exclude } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('vendor')
export class VendorEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar', name: 'name', nullable: false
    })
    name: string;
    
    @Column({
        type: 'text', name: 'address', nullable: false
    })
    address: string;

    @Column({
        type: 'varchar', name: 'gst_number', nullable: false
    })
    gstNumber: string;

    @Column({
        type: 'varchar', name: 'pan', nullable: false
    })
    pan: string;

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