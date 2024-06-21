import { MigrationInterface, QueryRunner } from 'typeorm';
import { ProblemUser } from '../src/users/problem_user.entity';
import { UserSexes } from '../src/users/interfaces';

export class ProblemUsers1718919286226 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let i = 100000;
    while (i--) {
      queryRunner.manager.insert(ProblemUser, {
        first_name: 'aa',
        last_name: 'bb',
        age: 2,
        sex: UserSexes.male,
        problems: Math.random() > 0.5,
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(ProblemUser, {});
  }
}
