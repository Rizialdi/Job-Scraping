/**
 * Resolve the snapshot path from the test path.
 * @param testPath - Path of the test file being test3ed
 * @param snapshotExtension - The extension for snapshots (.snap usually)
 */
const resolveSnapshotPath = (testPath: string, snapshotExtension: string) => {
  const snapshotFilePath = testPath + snapshotExtension; //(i.e. some.test.js + '.snap')
  return snapshotFilePath;
};

/**
 * Resolve the test path from the snapshot path.
 * @param snapshotFilePath - The filename of the snapshot (i.e. some.test.js.snap)
 * @param snapshotExtension - The extension for snapshots (.snap)
 */
const resolveTestPath = (
  snapshotFilePath: string,
  snapshotExtension: string
) => {
  const testPath = snapshotFilePath
    .replace(snapshotExtension, '')
    .replace('__snapshots__/', ''); //Remove the .snap
  return testPath;
};

/* Used to validate resolveTestPath(resolveSnapshotPath( {this} )) */
const testPathForConsistencyCheck = 'some.test.js';

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,
  testPathForConsistencyCheck,
};
