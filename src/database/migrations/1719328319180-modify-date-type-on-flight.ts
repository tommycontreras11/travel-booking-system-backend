import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyDateTypeOnFlight1719328319180 implements MigrationInterface {
    name = 'ModifyDateTypeOnFlight1719328319180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`flights\` DROP COLUMN \`departureDateTime\``);
        await queryRunner.query(`ALTER TABLE \`flights\` ADD \`departureDateTime\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`flights\` DROP COLUMN \`arrivalDateTime\``);
        await queryRunner.query(`ALTER TABLE \`flights\` ADD \`arrivalDateTime\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`flights\` DROP COLUMN \`arrivalDateTime\``);
        await queryRunner.query(`ALTER TABLE \`flights\` ADD \`arrivalDateTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`flights\` DROP COLUMN \`departureDateTime\``);
        await queryRunner.query(`ALTER TABLE \`flights\` ADD \`departureDateTime\` datetime NOT NULL`);
    }

}
