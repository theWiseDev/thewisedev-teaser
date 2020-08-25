import faker from 'faker';
import { EmailValidation } from './email-validation'
import { InvalidFieldError } from "@/validation/errors/invalid-field-error";

const fieldLabel = faker.database.column()
const makeSut = (): EmailValidation => new EmailValidation(fieldLabel)


describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const fieldValue = faker.random.word()
    const sut = makeSut()
    const error = sut.validate(fieldValue)
    expect(error).toEqual(new InvalidFieldError(fieldLabel))
  })
  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
  test('Should return falsy if email is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
