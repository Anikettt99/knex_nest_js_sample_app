import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { databaseProviders } from './database.providers';

@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
