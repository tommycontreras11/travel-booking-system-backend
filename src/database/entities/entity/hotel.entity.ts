import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";
import { CountryEntity } from "./country.entity";

@Entity({ name: 'hotels' })
export class HotelEntity extends BaseEntity {
    @Column()
    name: string;
  
    @Column()
    address: string;
  
    @Column()
    city: string;
  
    @Column()
    countryId: number;
  
    @Column()
    stars: number;
  
    @Column('decimal')
    pricePerNight: number;

    @Column()
    availableSlot: number;  

    @ManyToOne(() => CountryEntity, (country) => country.hotels)
    @JoinColumn({ name: 'countryId', referencedColumnName: 'id' })
    country: CountryEntity;

    @OneToMany(() => ReservationEntity, (reservation) => reservation.hotel)
    reservations: ReservationEntity[];
}