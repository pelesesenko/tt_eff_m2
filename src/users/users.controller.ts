import { Controller, Put } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('/')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Put('solve')
  solveProblems() {
    return this.usersService.solveProblems();
  }
  @Put('create')
  createProblems() {
    return this.usersService.createProblems();
  }
}
