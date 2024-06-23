import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { UserEntity } from "./user.entity";
import { ReservableEntity } from "./reservable.entity";
import { PaymentEntity } from "./payment.entity";

export enum ReservationStatusEnum {
    CONFIRMED = "CONFIRMED",
    PENDING = "PENDING",
    CANCELLED = "CANCELLED"
}

export type ReservationType = `${ReservationStatusEnum}`

@Entity({ name: 'reservations' })
export class ReservationEntity extends BaseEntity {
    @Column()
    reservation_date: Date;
  
    @Column({ type: 'enum', enum: ReservationStatusEnum })
    status: ReservationType;
  
    @Column('decimal', { precision: 10, scale: 2 })
    total_price: number;

    @Column({ nullable: true })
    reservableId: number;

    @Column()
    userId: number;

    @ManyToOne(() => ReservableEntity, (reservable) => reservable.reservations)
    @JoinColumn({ name: 'reservableId', referencedColumnName: 'id' })
    reservable: ReservableEntity;

    @ManyToOne(() => UserEntity, (user) => user.reservations)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: UserEntity;

    @OneToMany(() => PaymentEntity, (payment) => payment.reservation)
    payments: PaymentEntity;
}