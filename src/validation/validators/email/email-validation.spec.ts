import faker from 'faker';
import { EmailValidation } from './email-validation'
import { InvalidFieldError } from "@/validation/errors/invalid-field-error";


describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const fieldLabel = faker.random.word()
    const sut = new EmailValidation(fieldLabel)
    const error = sut.validate(fieldLabel)
    expect(error).toEqual(new InvalidFieldError(fieldLabel))
  })
  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
