import { Controller, Get, Query } from '@nestjs/common';
import { FooService } from '@services';
import { GetFooListRequestDTO, TGetFooListRequestDTO } from '@dto';
import { IoValidationPipe } from '@libs';

@Controller()
export class AppController {
  constructor(private readonly fooService: FooService) {}

  @Get('/get-foo-list')
  getFooList(
    @Query(new IoValidationPipe(GetFooListRequestDTO))
    request: TGetFooListRequestDTO,
  ) {
    return this.fooService.find(request);
  }
}
