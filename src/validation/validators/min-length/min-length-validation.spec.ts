import {MinLengthValidation} from './min-length-validation';
import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError('field'))
  })

  test('Should return falsy if value is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
