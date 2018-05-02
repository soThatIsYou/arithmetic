//快速排序采用分而治之的思想

const quickSort = function quickSort(arr) {


  const left = [];

  const right = [];

  const pivotIndex = arr.length / 2;

  const pivotValue = arr.splice(pivotIndex, 1)[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};

const array = [4, 5, 1, 2, 6, 8];

console.log(quickSort(array));
