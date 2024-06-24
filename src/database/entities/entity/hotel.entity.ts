import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/base.entity";

@Entity({ name: 'hotels' })
export class HotelEntity extends BaseEntity {
    @Column()
    name: string;
  
    @Column()
    address: string;
  
    @Column()
    city: string;
  
    @Column()
    country: string;
  
    @Column()
    stars: number;
  
    @Column('decimal')
    pricePerNight: number;
}