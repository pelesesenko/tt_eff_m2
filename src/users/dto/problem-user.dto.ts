import { IsBoolean, IsPositive, IsString, Length } from 'class-validator';
import { UserSexes } from '../interfaces';

export class ProblemUserDto {
  @IsString({ message: 'Must be string' })
  @Length(2, 50, { message: 'Must have length between 2 and 50' })
  first_name: string;

  @IsString({ message: 'Must be string' })
  @Length(2, 50, { message: 'Must have length between 2 and 50' })
  last_name: string;

  @IsPositive({ message: 'Must be positive number' })
  age: number;

  @IsBoolean({ message: 'Must be true or false' })
  sex: UserSexes;
}
