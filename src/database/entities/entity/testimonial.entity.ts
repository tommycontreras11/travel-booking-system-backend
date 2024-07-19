import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'testimonials' })
export class TestimonialEntity extends BaseEntity { 
    @Column()
    comment: string;

    @Column()
    userId: number;

    @ManyToOne(() => UserEntity, user => user.testimonials)
    @JoinColumn({ name: "userId", referencedColumnName: 'id' })
    user: UserEntity;
}