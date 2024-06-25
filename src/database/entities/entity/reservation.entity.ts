import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { UserEntity } from "./user.entity";
import { PaymentEntity } from "./payment.entity";
import { ActivityEntity } from "./activity.entity";
import { HotelEntity } from "./hotel.entity";
import { FlightEntity } from "./flight.entity";

export enum ReservationStatusEnum {
    CONFIRMED = "CONFIRMED",
    PENDING = "PENDING",
    CANCELLED = "CANCELLED"
}

export type ReservationType = `${ReservationStatusEnum}`

@Entity({ name: 'reservations' })
export class ReservationEntity extends BaseEntity {
    @Column()
    reservation_date: Date;
  
    @Column({ type: 'enum', enum: ReservationStatusEnum })
    status: ReservationType;
  
    @Column('decimal', { precision: 10, scale: 2 })
    total_price: number;

    @Column({ nullable: true })
    activityId: number;

    @Column({ nullable: true })
    hotelId: number;

    @Column({ nullable: true })
    flightId: number;

    @Column()
    userId: number;

    @ManyToOne(() => ActivityEntity, (activity) => activity.reservations)
    @JoinColumn({ name: 'activityId', referencedColumnName: 'id' })
    activity: ActivityEntity;

    @ManyToOne(() => HotelEntity, (hotel) => hotel.reservations)
    @JoinColumn({ name: 'hotelId', referencedColumnName: 'id' })
    hotel: HotelEntity;

    @ManyToOne(() => FlightEntity, (flight) => flight.reservations)
    @JoinColumn({ name: 'flightId', referencedColumnName: 'id' })
    flight: FlightEntity;

    @ManyToOne(() => UserEntity, (user) => user.reservations)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: UserEntity;

    @OneToMany(() => PaymentEntity, (payment) => payment.reservation)
    payments: PaymentEntity;
}