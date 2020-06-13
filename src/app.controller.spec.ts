import { Test } from '@nestjs/testing';
import { AppController } from '@app/app.controller';
import type { FooService as IFooService } from '@services';
import { Foo } from '@entities';
import { FooRepository } from '@repositories';

class FooService implements IFooService {
  repo!: FooRepository;

  async find(): Promise<Foo[]> {
    return [{ id: '', bar: 'bar value' }];
  }
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [FooService],
    }).compile();

    appController = app.get(AppController);
  });

  describe('root', () => {
    it('should return Foo entities', async () => {
      const items = await appController.getFooList();

      expect(items[0].bar).toBe('bar value');
    });
  });
});
