import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAvailableSlotsToHotel1719326526116 implements MigrationInterface {
    name = 'AddAvailableSlotsToHotel1719326526116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD \`available_slots\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`available_slots\``);
    }

}
