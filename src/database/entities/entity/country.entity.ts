import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { AirportEntity } from "./airport.entity";

@Entity({ name: 'countries' })
export class CountryEntity extends BaseEntity {
    @Column()
    value: string;

    @OneToMany(() => AirportEntity, (airport) => airport.country)
    airports: AirportEntity;
}