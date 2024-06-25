import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1719280868181 implements MigrationInterface {
    name = 'InitMigration1719280868181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`airports\` ADD \`countryId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`airports\` ADD CONSTRAINT \`FK_9dcd7cb34bd6a0b6fbcbe2e1368\` FOREIGN KEY (\`countryId\`) REFERENCES \`countries\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`airports\` DROP FOREIGN KEY \`FK_9dcd7cb34bd6a0b6fbcbe2e1368\``);
        await queryRunner.query(`ALTER TABLE \`airports\` DROP COLUMN \`countryId\``);
    }

}
