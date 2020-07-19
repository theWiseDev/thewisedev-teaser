module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootrDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
