import { Inject } from '@nestjs/common';
import { Model } from 'objection';
import { CustomQueryBuilder } from './QueryBuilder';
import { Knex } from 'knex';
import * as path from 'path';

export class BaseModel extends Model {
  readonly id: number;
  tableName: string;

  static QueryBuilder = CustomQueryBuilder;
  /* QueryBuilderType!: CustomQueryBuilder<this>;
  static modulePaths = [];
  static setModulePaths(modules: string[]) {
    this.modulePaths = modules;
  }

  static get modelPaths() {
    const root = path.join(__dirname, '../../../../');
    return BaseModel.modulePaths.map((m) => `${root}dist/src/${m}/models`);
  }*/

  static modulePaths = [];
  static setModulePaths(modules: string[]) {
    this.modulePaths = modules;
  }

  static get modelPaths() {
    const root = path.join(__dirname, '../../../../');
    return BaseModel.modulePaths.map((m) => `${root}dist/src/${m}/models`);
  }
}
