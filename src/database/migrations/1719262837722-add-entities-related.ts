import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntitiesRelated1719262837722 implements MigrationInterface {
    name = 'AddEntitiesRelated1719262837722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hotels\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, \`stars\` int NOT NULL, \`pricePerNight\` decimal NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`countries\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`value\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`airports\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`value\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activities\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`description\` text NOT NULL, \`available_slots\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`arrival\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`arrival_time\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`departure\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`departure_time\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`type\` enum ('FLIGHT', 'ACTIVITY', 'HOTEL') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`location\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`departure\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`arrival\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`departure_time\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`arrival_time\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`from\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`to\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`departureDateTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`arrivalDateTime\` datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`arrivalDateTime\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`departureDateTime\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`to\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`from\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`arrival_time\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`departure_time\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`arrival\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`departure\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`type\` enum ('FLIGHT', 'ACTIVITY', 'HOTEL') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`location\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`departure_time\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`departure\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`arrival_time\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`reservables\` ADD \`arrival\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`activities\``);
        await queryRunner.query(`DROP TABLE \`airports\``);
        await queryRunner.query(`DROP TABLE \`countries\``);
        await queryRunner.query(`DROP TABLE \`hotels\``);
    }

}
