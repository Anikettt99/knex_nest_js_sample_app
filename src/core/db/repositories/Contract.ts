import {} from 'knex';

export interface RepositoryContract {
  model: any;

  fetchAll(
    inputs?: Record<string, any>,
  ): Promise<Array<Record<string, any>> | []>;

  findById(id: number): Promise<Record<string, any> | null>;

  create(inputs: Record<string, any>): Promise<Record<string, any> | null>;

  count(params?: Record<string, any>): Promise<number>;

  /**
   * Returns new Query Builder Instance
   */
  query(arg?: any): any;
}
