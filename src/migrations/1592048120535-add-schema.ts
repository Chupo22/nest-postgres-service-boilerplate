import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFooTable1592048120535 implements MigrationInterface {
  name = 'addFooTable1592048120535';

  public async up(queryRunner: QueryRunner): Promise<any> {
    // TODO: Replace schema name!
    await queryRunner.query(`create schema "foo_schema"`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // TODO: Replace schema name!
    await queryRunner.query(`drop schema "foo_schema"`, undefined);
  }
}
