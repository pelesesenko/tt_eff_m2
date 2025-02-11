import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemUser } from './problem_user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
