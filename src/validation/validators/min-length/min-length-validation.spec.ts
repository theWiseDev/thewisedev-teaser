import faker from 'faker';
import {MinLengthValidation} from './min-length-validation';
import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

const makeSut = (fieldLabel: string, minLength: number): MinLengthValidation => new MinLengthValidation(fieldLabel, minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const fieldLabel = faker.database.column()
    const sut = makeSut(fieldLabel, 5)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError(fieldLabel))
  })

  test('Should return falsy if value is valid', () => {
    const fieldLabel = faker.database.column()
    const sut = makeSut(fieldLabel, 5)
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
