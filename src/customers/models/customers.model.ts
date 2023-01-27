import { Model } from 'objection';
import { BaseModel } from 'src/core/db/BaseModel';
import { OrderModel } from 'src/orders/models/orders.model';

export class CustomerModel extends BaseModel {
  /* static get tableName() {
    return 'customers';
  }*/

  static tableName = 'customers';

  id: number;
  first_name: string;
  last_name: string;
  email: string;

  static get relationMappings() {
    //console.log(this.modelPaths);
    return {
      orders: {
        relation: BaseModel.HasManyRelation,
        // modelClass: OrderModel,
        modelClass: 'orders.model',
        join: {
          from: 'customers.id',
          to: 'orders.customer_id',
        },
      },
    };
  }
}
