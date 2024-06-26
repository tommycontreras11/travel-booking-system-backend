import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovePropertiesFromPayment1719363573819 implements MigrationInterface {
    name = 'RemovePropertiesFromPayment1719363573819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`paymentDate\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`paymentDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`status\` varchar(255) NOT NULL`);
    }

}
