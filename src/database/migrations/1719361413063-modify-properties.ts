import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyProperties1719361413063 implements MigrationInterface {
    name = 'ModifyProperties1719361413063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`activities\` CHANGE \`available_slots\` \`availableSlot\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`available_slots\` \`availableSlot\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`flights\` CHANGE \`available_slots\` \`availableSlot\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservations\` CHANGE \`reservation_date\` \`reservationDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`payment_method\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`payment_date\``);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`paymentMethod\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`paymentDate\` datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`paymentDate\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`paymentMethod\``);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`payment_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`payment_method\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservations\` CHANGE \`reservationDate\` \`reservation_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`flights\` CHANGE \`availableSlot\` \`available_slots\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`availableSlot\` \`available_slots\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`activities\` CHANGE \`availableSlot\` \`available_slots\` int NOT NULL`);
    }

}
