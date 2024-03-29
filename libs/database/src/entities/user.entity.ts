import { Exclude } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar', name: 'first_name', nullable: false
    })
    firstName: string;

    @Column({
        type: 'varchar', name: 'last_name', nullable: false
    })
    lastName: string;

    @Column({
        type: 'varchar', name: 'email', nullable: false, unique: true
    })
    email: string;

    @Column({
        type: 'varchar', name: 'password', nullable: false
    })
    password: string;

    @Column({
        type: 'text', name: 'refresh_token', nullable: true
    })
    refreshToken: string;

    @Column({
        type: 'text', name: 'reset_token', nullable: false
    })
    resetToken: string;

    @Column({
        type: 'boolean', name: 'is_verified', nullable: true
    })
    isVerified: boolean;

    @Column({ name: 'last_login_at', type: 'timestamp', nullable: true, default: null })
    public lastLoginAt: Date | null;

    /*
    * Create and Update Date Columns
    */
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    public updatedAt!: Date;
}