import { array, partial, string } from 'io-ts';
import { UUID } from 'io-ts-types/lib/UUID';

export const GetFooListRequestDTO = partial(
  {
    id: UUID,
    ids: array(UUID),
    bar: string,
  },
  'FooListRequestDTO',
);

export type TGetFooListRequestDTO = typeof GetFooListRequestDTO._A;
