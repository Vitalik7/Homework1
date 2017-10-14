var arr = [3,-5,1,7,4];
var sum = 0;
var min = arr[0];
var max = arr[0];
var i;
var total = arr.reduce(function(a, b) {
  return a + b;
}, 0);
console.log('sum = ' + total);

arr.forEach(function (element, index) {
	if (element < min) {
		min = element;
		min = index;
	}
});
console.log('min = ' + min);

arr.forEach(function (element, index) {
  if (element > max) {
    max = element;
    max = index;
	}
});
console.log('max = ' + max);
arr.splice(i, 1, min);
arr.splice(i, 1, max);
console.log(arr);