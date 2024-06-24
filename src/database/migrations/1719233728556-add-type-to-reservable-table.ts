import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeToReservableTable1719233728556 implements MigrationInterface {
    name = 'AddTypeToReservableTable1719233728556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`type\` enum ('FLIGHT', 'ACTIVITY', 'HOTEL') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`type\``);
    }

}
