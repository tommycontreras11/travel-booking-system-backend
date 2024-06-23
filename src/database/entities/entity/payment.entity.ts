import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { ReservationEntity } from "./reservation.entity";

export enum PaymentMethodEnum {
    CREDIT_CARD = "CREDIT_CARD",
    PAYPAL = "PAYPAL"
}

export type PaymentMethodType = `${PaymentMethodEnum}`

@Entity({ name: 'payments' })
export class PaymentEntity extends BaseEntity {
    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;
  
    @Column()
    payment_method: string;
  
    @Column()
    payment_date: Date;
  
    @Column()
    status: string;

    @Column()
    reservationId: string;

    @ManyToOne(() => ReservationEntity, (reservation) => reservation.payments)
    @JoinColumn({ name: 'reservationId', referencedColumnName: 'id' })
    reservation: ReservationEntity;
}