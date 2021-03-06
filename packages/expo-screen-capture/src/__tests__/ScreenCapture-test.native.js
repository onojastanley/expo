import ExpoScreenCapture from '../ExpoScreenCapture';
import * as ScreenCapture from '../ScreenCapture';

describe('ScreenCapture methods are defined', () => {
  it('preventScreenCapture is defined', async () => {
    expect(ScreenCapture.preventScreenCaptureAsync).toBeDefined();
  });

  it('allowScreenCapture is defined', async () => {
    expect(ScreenCapture.allowScreenCaptureAsync).toBeDefined();
  });

  it('usePreventScreenCapture hook is defined', async () => {
    expect(ScreenCapture.usePreventScreenCapture).toBeDefined();
  });
});

describe('Test key functionality', () => {
  afterEach(async () => {
    await cleanUpTags();
  });

  it('Will not call the native method if default key already active', async () => {
    await ScreenCapture.preventScreenCaptureAsync();
    await ScreenCapture.preventScreenCaptureAsync();

    await ScreenCapture.allowScreenCaptureAsync();

    expect(ExpoScreenCapture.preventScreenCapture).toHaveBeenCalledTimes(1);
    expect(ExpoScreenCapture.allowScreenCapture).toHaveBeenCalledTimes(1);
  });

  it('Passing a different key to allowScreenCaptureAsync does not re-enable screen capture', async () => {
    await ScreenCapture.preventScreenCaptureAsync('foo');
    await ScreenCapture.allowScreenCaptureAsync('bar');

    expect(ExpoScreenCapture.preventScreenCapture).toHaveBeenCalledTimes(1);
    expect(ExpoScreenCapture.allowScreenCapture).toHaveBeenCalledTimes(0);
  });

  it('Passing a key that is already active does not call the preventScreenCapture native method', async () => {
    await ScreenCapture.preventScreenCaptureAsync('foo');
    await ScreenCapture.preventScreenCaptureAsync('foo');

    expect(ExpoScreenCapture.preventScreenCapture).toHaveBeenCalledTimes(1);
  });

  it('enabling two keys but only removing one results in the allowScreenCapture native method not being called', async () => {
    await ScreenCapture.preventScreenCaptureAsync('foo');
    await ScreenCapture.preventScreenCaptureAsync('bar');

    await ScreenCapture.allowScreenCaptureAsync('bar');
    expect(ExpoScreenCapture.allowScreenCapture).toHaveBeenCalledTimes(0);
  });
});

async function cleanUpTags() {
  // Otherwise, these tags would persist between tests
  await ScreenCapture.allowScreenCaptureAsync();
  await ScreenCapture.allowScreenCaptureAsync('foo');
  await ScreenCapture.allowScreenCaptureAsync('bar');
}
