import { Module, Logger } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { FooService } from '@services';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Foo } from '@entities';
import { FooRepository } from '@repositories';
import { bootstrapDbConfig } from '@config';

const entities = [Foo];
const repositories = [FooRepository];

@Module({
  imports: [
    TypeOrmModule.forRoot(bootstrapDbConfig),
    TypeOrmModule.forFeature([...entities, ...repositories]),
  ],
  controllers: [AppController],
  providers: [FooService, Logger],
})
export class AppModule {}
