import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

@Entity({ name: 'airports' })
export class AirportEntity extends BaseEntity {
    @Column()
    value: string;
}