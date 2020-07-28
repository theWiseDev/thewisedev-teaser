import faker from 'faker';
import { EmailValidation } from './email-validation'
import { InvalidFieldError } from "@/validation/errors/invalid-field-error";


describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError('email'))
  })
})
