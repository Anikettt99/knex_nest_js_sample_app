import { RepositoryContract } from 'src/core/db/repositories/Contract';

export interface CustomerContract extends RepositoryContract {
  totalOrdersAmountByCustomers(): Promise<Array<Record<string, any>> | []>;
  totalNumberOforders(): Promise<Array<Record<string, any>> | []>;
  orderData(id: number): Promise<Array<Record<string, any>> | []>;
}
