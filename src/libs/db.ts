import * as typeorm from 'typeorm';
import { FindOperator } from 'typeorm';

export function In<T>(arg: T[]) {
  return typeorm.In(arg) as FindOperator<T>;
}
