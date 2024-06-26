import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTotalPriceFromReservation1719356707902 implements MigrationInterface {
    name = 'RemoveTotalPriceFromReservation1719356707902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` DROP COLUMN \`total_price\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservations\` ADD \`total_price\` decimal NOT NULL`);
    }

}
