var arrayNumbers = [3,0,-5,1,'qwerty','2ad',5342,-653,'ewfr',true,78,42,-12,2,-3,4,undefined,NaN];
var min;
var max;
var sum = null;
var i;

	for (i = 0; i < arrayNumbers.length; i++) {
	  if( !isNaN(arrayNumbers[i]) ) {
        sum += arrayNumbers[i]
      }
    }
    console.log('SUM = ' + sum);

	i = arrayNumbers.length;
	min = arrayNumbers[0];
	while (min < i) {
	  if (arrayNumbers[i] < min ) {
	    min = arrayNumbers[i]
	  }
	  i--;
	}
	console.log('MIN = ' + min);

	for (i = 0; i < arrayNumbers.length; i++) { 
      if( arrayNumbers[i] > max || typeof max === 'undefined') {
        max = arrayNumbers[i]
 	  }
 	}
    console.log('MAX = ' + max)

