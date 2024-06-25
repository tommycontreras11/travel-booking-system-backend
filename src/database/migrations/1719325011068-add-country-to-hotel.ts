import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCountryToHotel1719325011068 implements MigrationInterface {
    name = 'AddCountryToHotel1719325011068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`country\` \`countryId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`countryId\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD \`countryId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD CONSTRAINT \`FK_08dfec00cb8e328442c2ea33b97\` FOREIGN KEY (\`countryId\`) REFERENCES \`countries\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP FOREIGN KEY \`FK_08dfec00cb8e328442c2ea33b97\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` DROP COLUMN \`countryId\``);
        await queryRunner.query(`ALTER TABLE \`hotels\` ADD \`countryId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`hotels\` CHANGE \`countryId\` \`country\` varchar(255) NOT NULL`);
    }

}
