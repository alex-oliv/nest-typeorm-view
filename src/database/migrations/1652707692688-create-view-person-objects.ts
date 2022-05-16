import {MigrationInterface, QueryRunner} from "typeorm";

export class createViewPersonObjects1652707692688 implements MigrationInterface {
    name = 'createViewPersonObjects1652707692688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE VIEW "person_object" AS 
    SELECT car.id as id, car.car_name as name, car.weight as weight, brand.brand_name as brand
    FROM objects.cars car
    LEFT JOIN objects.brands brand on car.brand_id = brand.id
  `);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","person_object","SELECT car.id as id, car.car_name as name, car.weight as weight, brand.brand_name as brand\n    FROM objects.cars car\n    LEFT JOIN objects.brands brand on car.brand_id = brand.id"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","person_object","public"]);
        await queryRunner.query(`DROP VIEW "person_object"`);
    }

}
