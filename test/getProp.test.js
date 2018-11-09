import { getProp } from '../index';

describe('test get property from non-object or null', () => {
  it('get property from undefined', () => {
    expect(getProp(undefined, 'a.b.c')).toBeUndefined();
  });
  
  it('get property from null', () => {
    expect(getProp(null, 'b.d')).toBeNull();
  });

  it('get property from NaN', () => {
    expect(getProp(NaN, 'a')).toBeNaN()
  });

  it('get property from undefined with default value', () => {
    expect(getProp(undefined, 'a.c', 'c')).toEqual('c');
  });

  it('get property from null with default value', () => {
    expect(getProp(null, 'meetings.list', [])).toEqual([]);
  });
})

describe('test get property', () => {
  let testObj = {a: 1, b: {}, c: [] };
  beforeEach(() => {
    testObj = {a: 1, b: { d: { q: 3 }}, c: [] };
  })

  it('get property existed correctly', () => {
    expect(getProp(testObj, 'a')).toEqual(1);
    expect(getProp(testObj, 'c')).toEqual([]);
    expect(getProp(testObj, 'b.d.q')).toEqual(3);
    expect(getProp(getProp(testObj, 'b.d'))).toEqual({ q: 3 });
  })

  it('get undefined property', () => {
    expect(getProp(testObj, 'b.c')).toBeUndefined();
    expect(getProp(testObj, 'a.e.q')).toBeUndefined();
    expect(getProp(testObj, 'c.f')).toBeUndefined();
  });
  
  it('return the default value when propery not exist', () => {
    expect(getProp(testObj, 'b.c', 1)).toEqual(1);
  });

  it('return undefined from the first value in empty array without crash', () => {
    expect(getProp(testObj.c, 0)).toBeUndefined()
  });

  it('return default value from the element in empty array', () => {
    expect(getProp(testObj.c, 2, '2')).toEqual('2');
  })

  it('get elment out of the range of array without crash', () => {
    expect(getProp([1, 2, 3], 10)).toBeUndefined();
  })
});