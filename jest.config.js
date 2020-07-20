module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootrDir>/src/**/*.{ts,tsx}',
    '**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
