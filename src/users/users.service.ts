import { Injectable } from '@nestjs/common';
import { ProblemUser } from './problem_user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(ProblemUser)
    private repository: Repository<ProblemUser>,
  ) {}

  async solveProblems() {
    const result = await this.repository.update(
      { problems: true },
      { problems: false },
    );
    return { solved: result.affected };
  }
  async createProblems() {
    const divider = Math.round(Math.random() * 10) + 5;
    const wall = Math.random() * divider;
    const result = await this.repository.query(
      `UPDATE problem_user SET problems = true WHERE (id % ${divider}) < ${wall} RETURNING *`,
    );
    return { created: result[1] };
  }
}
