import { PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import { Any, Errors, identity } from 'io-ts';
import { failure } from 'io-ts/lib/PathReporter';
import { fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

const validate = fold<Errors, unknown, unknown>((left) => {
  throw new HttpException(
    {
      message: 'Validation failed',
      detail: failure(left),
      statusCode: HttpStatus.BAD_REQUEST,
    },
    HttpStatus.BAD_REQUEST,
  );
}, identity);

export class IoValidationPipe implements PipeTransform<unknown> {
  constructor(private readonly schema: Any) {}

  public transform(value: unknown): unknown {
    return pipe(this.schema.decode(value), validate);
  }
}
