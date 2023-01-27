import { BaseModel } from 'src/core/db/BaseModel';
import { CustomerModel } from 'src/customers/models/customers.model';
//import { CustomerModel } from '../../customers/models/customers.model';

export class OrderModel extends BaseModel {
  static tableName: string = 'orders';

  static get relationMappings() {
    // console.log('Inside order model');
    return {
      customer: {
        relation: BaseModel.BelongsToOneRelation,
        // modelClass: CustomerModel,
        modelClass: 'customers.model',
        join: {
          from: 'orders.customer_id',
          to: 'customers.id',
        },
      },
    };
  }
}
