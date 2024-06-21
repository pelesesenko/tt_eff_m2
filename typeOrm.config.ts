import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { ProblemUser } from './src/users/problem_user.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('POSTGRES_HOST'),
  port: configService.getOrThrow('POSTGRES_PORT'),
  database: configService.getOrThrow('POSTGRES_DB'),
  username: configService.getOrThrow('POSTGRES_USER'),
  password: configService.getOrThrow('POSTGRES_PASS'),
  logging: configService.getOrThrow('POSTGRES_LOGGING'),
  synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
  subscribers: [],
  migrations: ['migrations/**'],
  entities: [ProblemUser],
});
