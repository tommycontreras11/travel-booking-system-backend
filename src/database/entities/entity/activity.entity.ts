import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/base.entity";

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
}