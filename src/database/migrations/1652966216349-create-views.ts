import {MigrationInterface, QueryRunner} from "typeorm";

export class createViews1652966216349 implements MigrationInterface {
    name = 'createViews1652966216349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE VIEW "objects"."brands_view" AS SELECT * FROM objects.brands`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["objects","VIEW","brands_view","SELECT * FROM objects.brands"]);
        await queryRunner.query(`CREATE VIEW "objects"."cars_view" AS SELECT * FROM objects.cars`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["objects","VIEW","cars_view","SELECT * FROM objects.cars"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","cars_view","objects"]);
        await queryRunner.query(`DROP VIEW "objects"."cars_view"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","brands_view","objects"]);
        await queryRunner.query(`DROP VIEW "objects"."brands_view"`);
    }

}
