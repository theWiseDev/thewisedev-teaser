import { FieldValidation } from "@/validation/protocols/field-validation";
import { InvalidFieldError } from "@/validation/errors/invalid-field-error";

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}
  validate(value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
