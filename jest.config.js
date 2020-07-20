module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootrDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}
