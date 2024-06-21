import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { UserSexes } from './interfaces';

@Entity()
export class ProblemUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  sex: UserSexes;

  @Column()
  problems: boolean;
}
