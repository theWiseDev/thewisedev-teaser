import faker from 'faker';
import { ValidationComposite } from "./validation-composite"
import { FieldValidationSpy } from "@/validation/test"

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return {sut, fieldValidationsSpy}

}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const { sut, fieldValidationsSpy} = makeSut()
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validate('any_field', faker.random.word())
    expect(error).toBe(errorMessage)
  })

  test('Should return falsy if all fields are valid', () => {
    const { sut } = makeSut()
    const error = sut.validate('any_field', faker.random.word())
    expect(error).toBeFalsy()
  })
})
