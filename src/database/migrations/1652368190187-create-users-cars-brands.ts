import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsersCarsBrands1652368190187 implements MigrationInterface {
    name = 'createUsersCarsBrands1652368190187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "objects"."cars" ("id" SERIAL NOT NULL, "car_name" character varying NOT NULL, "weight" character varying NOT NULL, "color" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "brand_id" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "objects"."brands" ("id" SERIAL NOT NULL, "brand_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "objects"."cars" ADD CONSTRAINT "FK_68ce82c97c062f06685a52b3d60" FOREIGN KEY ("brand_id") REFERENCES "objects"."brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objects"."cars" DROP CONSTRAINT "FK_68ce82c97c062f06685a52b3d60"`);
        await queryRunner.query(`DROP TABLE "objects"."brands"`);
        await queryRunner.query(`DROP TABLE "objects"."cars"`);
    }

}
