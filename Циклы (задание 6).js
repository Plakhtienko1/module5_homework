function lostnums(arr) {
  let arr1 = arr.map(e=>typeof e);
  return [...new Set(arr1)].length === 1;
}

function lostnums1(arr) {
  return arr.every((e,i,a) => typeof e === typeof a[0]);  
}

console.log(lostnums([5,1,4,'5']));
console.log(lostnums1([5,1,4,5]));