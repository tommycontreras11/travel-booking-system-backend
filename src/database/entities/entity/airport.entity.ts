import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { CountryEntity } from "./country.entity";

@Entity({ name: 'airports' })
export class AirportEntity extends BaseEntity {
    @Column()
    value: string;

    @Column()
    countryId: number;

    @ManyToOne(() => CountryEntity, (country) => country.airports)
    @JoinColumn({ name: 'countryId', referencedColumnName: 'id' })
    country: CountryEntity;
}