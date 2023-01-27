import { RepositoryContract } from './db/repositories/Contract';

export function InjectModel(model: any) {
  /*  if (!(model.prototype instanceof BaseModel)) {
      throw new DbRepositoryException(
        `Instance of ${BaseModel.name} expected, ${typeof model} passed!`,
      );
    }*/

  return function (target: RepositoryContract, key: string | symbol) {
    Object.assign(target, {
      [key]: model,
    });
  };
}
