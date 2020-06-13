import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFooRow1592049144226 implements MigrationInterface {
  name = 'addFooRow1592049144226';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO foo_schema.foo (bar) values ('bar text value')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
