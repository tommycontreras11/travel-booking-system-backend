import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

@Entity({ name: 'flights' })
export class FlightEntity extends BaseEntity {
    @Column()
    from: string;
  
    @Column()
    to: string;
  
    @Column()
    departureDateTime: Date;
  
    @Column()
    arrivalDateTime: Date;
  
    @Column('decimal')
    price: number;

    @Column()
    available_slots: number;

    @OneToMany(() => ReservationEntity, (reservation) => reservation.flight)
    reservations: ReservationEntity;
}