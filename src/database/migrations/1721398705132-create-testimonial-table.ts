import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTestimonialTable1721398705132 implements MigrationInterface {
    name = 'CreateTestimonialTable1721398705132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`testimonials\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`comment\` varchar(255) NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`testimonials\` ADD CONSTRAINT \`FK_e4e5bb62ec2874c440b6cc3362f\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`testimonials\` DROP FOREIGN KEY \`FK_e4e5bb62ec2874c440b6cc3362f\``);
        await queryRunner.query(`DROP TABLE \`testimonials\``);
    }

}
