import { Module, Global } from '@nestjs/common';
import { knex } from 'knex';
import { databaseProviders } from './db.provider';
import { BaseModel } from './db/BaseModel';
import { BaseValidator } from './validator/basevalidator';

@Global()
@Module({
  imports: [],
  providers: [...databaseProviders, BaseValidator],
  exports: [...databaseProviders, BaseValidator],
})
export class CoreModule {}
