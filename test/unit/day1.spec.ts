import { expect } from 'chai';
import path from 'path';

import { reportRepair } from '../../src/day1';
import { parseNumberList } from '../../src/utils';

describe('Day 1 tests', () => {
  it('should solve my sample checking for beginning', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 1721, targetOperands: 1 });
    expect(res).to.eql(1721);
  });
  it('should solve my sample checking for middle', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 366, targetOperands: 1 });
    expect(res).to.eql(366);
  });
  it('should solve my sample checking for end', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 1456, targetOperands: 1 });
    expect(res).to.eql(1456);
  });
  it('should solve my sample checking for non-existent', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 1873, targetOperands: 1 });
    expect(res).to.eql(-99);
  });
  it('should solve part 1 sample', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 2020, targetOperands: 2 });
    expect(res).to.eql(514579);
  });
  it('should solve part 2 sample', () => {
    const numsArr = parseNumberList(path.resolve('./src/day1/inputSample.txt'));
    const res = reportRepair({ numsArr, targetSum: 2020, targetOperands: 3 });
    expect(res).to.eql(241861950);
  });
});
