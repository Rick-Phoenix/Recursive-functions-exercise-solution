function fibs(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr;
}

function fibRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibRec(n - 1);
  return arr.concat([arr[arr.length - 1] + arr[arr.length - 2]]);
}


function Sort(array) {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  return mergeSort(firstHalf, secondHalf);
}

function mergeSort(a, b) {
  let firstArray = Sort(a);
  let secondArray = Sort(b);

  let newArr = [];
  let i = 0;
  let j = 0;

  while (i <= firstArray.length && j <= secondArray.length) {
    if (i === firstArray.length) {
      newArr = newArr.concat(secondArray.slice(j));
      break;
    }
    if (j === secondArray.length) {
      newArr = newArr.concat(firstArray.slice(i));
      break;
    }
    if (firstArray[i] < secondArray[j]) {
      newArr.push(firstArray[i]);
      i++;
    } else {
      newArr.push(secondArray[j]);
      j++;
    }
  }

  return newArr
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(Sort(arr));