import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFooTable1592049144225 implements MigrationInterface {
  name = 'addFooTable1592049144225';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "foo_schema"."foo"
                             (
                                 "id"  uuid NOT NULL DEFAULT uuid_generate_v4(),
                                 "bar" text NOT NULL,
                                 CONSTRAINT "PK_af9d173dd2824d89c6050769c81" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "foo_schema"."foo"`);
  }
}
