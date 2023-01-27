import { RepositoryContract } from 'src/core/db/repositories/Contract';

export interface OrderContract extends RepositoryContract {
  findCorrespondingCustomer(id: number): Promise<Record<string, any> | null>;
}
