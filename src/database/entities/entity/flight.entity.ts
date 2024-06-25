import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

@Entity({ name: 'flights' })
export class FlightEntity extends BaseEntity {
    @Column()
    flightNumber: string;

    @Column()
    from: string;
  
    @Column()
    to: string;
  
    @Column({ type: 'date' })
    departureDateTime: Date;
  
    @Column({ type: 'date' })    
    arrivalDateTime: Date;
  
    @Column('decimal')
    price: number;

    @Column()
    available_slots: number;

    @OneToMany(() => ReservationEntity, (reservation) => reservation.flight)
    reservations: ReservationEntity[];
}