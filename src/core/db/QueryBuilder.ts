import { Model, Page, QueryBuilder } from 'objection';

export class CustomQueryBuilder<M extends Model, R = M[]> extends QueryBuilder<
  M,
  R
> {
  ArrayQueryBuilderType!: CustomQueryBuilder<M, M[]>;
  SingleQueryBuilderType!: CustomQueryBuilder<M, M>;
  NumberQueryBuilderType!: CustomQueryBuilder<M, number>;
  PageQueryBuilderType!: CustomQueryBuilder<M, Page<M>>;

  async onlyCount() {
    const result = await this.count({ c: '*' });
    // [ Modelname { c: 6 } ]
    console.log(result);
    return result[0].c;
  }
}
