import { DoublePipe } from './double.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe output is numbers double', () => {
    const pipe = new DoublePipe();
    const number = 4;
    const result = pipe.transform(number);
    expect(result).toEqual(number * 2);
  })
});
