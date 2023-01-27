import { CustomQueryBuilder } from '../QueryBuilder';
import { RepositoryContract } from './Contract';
import { Model } from 'objection';

export class DatabaseRepository implements RepositoryContract {
  model: any;

  /**
   * Get all rows
   */

  async fetchAll(
    inputs?: Record<string, any>,
  ): Promise<[] | Record<string, any>[]> {
    return await this.query();
  }
  async findById(id: number): Promise<Record<string, any> | null> {
    const query = this.query();
    const [model] = await query
      .select('*')
      .from(this.model.tableName)
      .where('id', id);
    return model;
  }
  async create(
    inputs: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return await this.query().insertAndFetch(inputs);
  }

  async count(params) {
    const query = this.query();
    return await query.onlyCount();
  }

  query(arg?: any): CustomQueryBuilder<any, any> {
    return this.model.query(arg);
  }
}
