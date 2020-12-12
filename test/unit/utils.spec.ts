import { expect } from 'chai';
import path from 'path';

import { parseNumberList } from '../../src/utils';

describe('Utilities', () => {
  it('should convert text of number on new lines into an array of numbers', () => {
    const filePath = path.resolve('./test/unit/fixtures/numList.txt');
    const res = parseNumberList(filePath);
    expect(res.length).to.eql(3);
  });
});
