import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, ValidateByOptions, ValidatorOptions } from 'class-validator';

@Injectable()
export class BaseValidator {
  async fire(
    inputs,
    schemaMeta,
    options?: ValidatorOptions,
  ): Promise<Record<string, any>> {
    console.log(inputs);
    const schema = plainToInstance(schemaMeta, inputs);
    const errors = await validate(schema, options);
    console.log(schema);
    return inputs;
  }
}
