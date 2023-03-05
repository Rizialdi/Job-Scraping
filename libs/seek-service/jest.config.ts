/* eslint-disable */
export default {
  displayName: 'seek-service',
  preset: '../../jest.preset.ts',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/seek-service',
  snapshotResolver: '<rootDir>/src/__tests__/snapshotResolver.ts',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupMockDate.ts'],
};
