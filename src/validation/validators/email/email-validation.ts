import { InvalidFieldError } from "@/validation/errors/invalid-field-error";
import { FieldValidation } from '@/validation/protocols/field-validation';

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) { }
  validate(value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
