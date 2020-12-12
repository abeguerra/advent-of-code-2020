export const reportRepair = ({
  numsArr,
  targetSum,
  targetOperands,
}: {
  numsArr: number[],
  targetSum: number,
  targetOperands: number,
}): number => {
  for (let i = 0; i <= numsArr.length - targetOperands; i += 1) {
    if (targetOperands === 1) {
      if (numsArr[i] === targetSum) {
        return numsArr[i];
      }
      continue;
    }

    let permutation = [numsArr[i]];
    let j = i + 1;
    // while there's enough remaining slots to create permutations
    while (j + targetOperands - 1 <= numsArr.length) {
      let curIndex = j;
      while (permutation.length !== targetOperands) {
        permutation.push(numsArr[curIndex]);
        curIndex += 1;
      }
      const sum = permutation.reduce((sum, num) => { return sum + num; }, 0);
      if (sum === targetSum) {
        return permutation.reduce((product, num) => { return product * num; }, 1);
      }
      permutation = [numsArr[i]];
      j += 1;
    }
  }

  return -99;
};
