import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Foo } from '@entities';
import { FooRepository } from '@repositories';
import { In } from '@libs';
import { FindConditions } from 'typeorm/find-options/FindConditions';

type TFindArgs = {
  id?: string;
  ids?: string[];
  bar?: string;
};

@Injectable()
export class FooService {
  @InjectRepository(FooRepository)
  repo!: FooRepository;

  async find(args: TFindArgs): Promise<Foo[]> {
    const { id, ids, bar } = args;
    const where: FindConditions<Foo> = {};

    if (id) {
      where.id = id;
    } else if (ids && ids.length) {
      where.id = In(ids);
    }

    if (bar) {
      where.bar = bar;
    }

    return this.repo.find(where);
  }
}
