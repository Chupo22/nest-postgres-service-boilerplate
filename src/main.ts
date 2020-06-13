import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { createConnection } from 'typeorm';
import { migrationsConfig, appConfig } from '@config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const connection = await createConnection(migrationsConfig);

  await connection.runMigrations();
  await connection.close();

  const app = await NestFactory.create(AppModule);

  const logger = app.get(Logger);
  const { host, port } = appConfig;

  await app.listen(port, host);

  logger.log(`Listening on ${host}:${port}`, 'NestApplication');
}

bootstrap();
