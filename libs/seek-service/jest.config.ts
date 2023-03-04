/* eslint-disable */
export default {
  displayName: 'seek-service',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/seek-service',
  snapshotResolver: '<rootDir>/src/__tests__/snapshotResolver.ts',
};
