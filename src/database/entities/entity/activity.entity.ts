import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

@Entity({ name: 'activities' })
export class ActivityEntity extends BaseEntity {
    @Column()
    name: string;
  
    @Column()
    location: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
  
    @Column('text')
    description: string;
  
    @Column()
    available_slots: number;  

    @OneToMany(() => ReservationEntity, (reservation) => reservation.activity)
    reservations: ReservationEntity;
}