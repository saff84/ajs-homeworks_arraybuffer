import getBuffer from '../arraybuffer/getBuffer';
import ArrayBufferConverter from '../arraybuffer/ArrayBufferConverter';




test('class "ArrayBufferConverter" has "load" and "toString" methods', () => {
  
  const arrayBufferConverter = new ArrayBufferConverter();

  expect(arrayBufferConverter.load).toBeDefined();
  expect(arrayBufferConverter.toString).toBeDefined();

  arrayBufferConverter.load();

  expect(arrayBufferConverter.buffer).not.toBeDefined();

  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.buffer instanceof ArrayBuffer).toBeTruthy();

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(arrayBufferConverter.toString()).toBe(result);
});