import path from 'path';

import { reportRepair } from './src/day1';
import { parseNumberList } from './src/utils';

const numsArr = parseNumberList(path.resolve('./src/day1/inputPart1.txt'));
const res = reportRepair({ numsArr, targetSum: 2020, targetOperands: 3 });
console.log(res);
