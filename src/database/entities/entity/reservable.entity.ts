import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

export enum ReservableTypeEnum {
    FLIGHT = "FLIGHT",
    ACTIVITY = "ACTIVITY",
    HOTEL = "HOTEL"
}

export type ReservableType = `${ReservableTypeEnum}`

@Entity({ name: 'reservables' })
export class ReservableEntity extends BaseEntity {
    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column({ enum: ReservableTypeEnum, type: 'enum' })
    type: ReservableType;
  
    @Column()
    location: string;

    @Column()
    departure: string;

    @Column()
    arrival: string;

    @Column()
    departure_time: Date;
  
    @Column()
    arrival_time: Date;

    @Column()
    available_slots: number;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @OneToMany(() => ReservationEntity, (reservation) => reservation.reservable)
    reservations: ReservationEntity;
}