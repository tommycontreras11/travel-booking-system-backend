import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";
import { TestimonialEntity } from "./testimonial.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    phone: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => ReservationEntity, (reservation) => reservation.userId)
    reservations: ReservationEntity;

    @OneToMany(() => TestimonialEntity, testimonial => testimonial.user)
    testimonials: TestimonialEntity[];
}