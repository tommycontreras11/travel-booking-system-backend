import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

@Entity({ name: 'countries' })
export class CountryEntity extends BaseEntity {
    @Column()
    value: string;
}