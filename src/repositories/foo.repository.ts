import { Foo } from '@entities';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Foo)
export class FooRepository extends Repository<Foo> {}
