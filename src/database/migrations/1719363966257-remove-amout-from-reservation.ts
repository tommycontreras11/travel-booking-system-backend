import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveAmoutFromReservation1719363966257 implements MigrationInterface {
    name = 'RemoveAmoutFromReservation1719363966257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` DROP COLUMN \`amount\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` ADD \`amount\` decimal NOT NULL`);
    }

}
