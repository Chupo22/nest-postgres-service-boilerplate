import { Entity, Column } from 'typeorm';

@Entity()
export class Foo {
  @Column({
    type: 'uuid',
    generated: 'uuid',
    primary: true,
  })
  id!: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  bar!: string;
}
