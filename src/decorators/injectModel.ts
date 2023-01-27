import { Inject } from '@nestjs/common';

export const InjectModel = (model: any) => Inject(model);
