import fs from 'fs';

export const parseNumberList = (path: string): number[] => {
  let numArr: number[] = [];

  const input = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  numArr = input.split('\n').map(i => Number(i));

  return numArr;
}