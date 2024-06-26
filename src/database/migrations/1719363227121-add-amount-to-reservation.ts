import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAmountToReservation1719363227121 implements MigrationInterface {
    name = 'AddAmountToReservation1719363227121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` ADD \`amount\` decimal(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` DROP COLUMN \`amount\``);
    }

}
