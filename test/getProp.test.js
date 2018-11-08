import { getProp } from '../index';

describe('test get property', () => {
  let testObj = {a: 1, b: {}, c: [] };
  beforeEach(() => {
    testObj = {a: 1, b: {}, c: [] };
  })
  it('get property from undefined', () => {
    expect(getProp(undefined, 'a.b.c')).toBeUndefined();
  });
  
  it('get property from null', () => {
    expect(getProp(null, 'b.d')).toBeNull();
  });

  it('get property from NaN', () => {
    expect(getProp(NaN, 'a')).toBeNaN()
  });

  it('get property from null with default value', () => {
    expect(getProp(null, 'meetings.list', [])).toEqual([]);
  });

  it('get undefined property', () => {
    expect(getProp(testObj, 'b.c')).toBeUndefined();
  });
  
  it('return the default value when propery not exist', () => {
    expect(getProp(testObj, 'b.c', 1)).toBe(1);
  });

  it('return undefined from the first value in empty array', () => {
    expect(getProp(testObj.c, 0)).toBeUndefined()
  });
})