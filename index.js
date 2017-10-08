var arrayNumbers = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,undefined,NaN];
var min;
var max;
var sum = null;
var num;
var i;

	for (i = 0; i < arrayNumbers.length; i++){
	     if(!isNaN(arrayNumbers[i])) {
        sum += arrayNumbers[i]
    	}
	}
	console.log('SUM = ' + sum);

	i = arrayNumbers.length, min = arrayNumbers[0], num = arrayNumbers
	while (i--){
		if (arrayNumbers[i] < min) {
			min = arrayNumbers[i];
			num = i;
		}
	}
	console.log('MIN = ' + min);

	for (i = 0; i < arrayNumbers.length; i++) { 
     if(!isNaN(arrayNumbers[i])) {
            if(arrayNumbers[i] > max) {
                max = arrayNumbers[i]
            }
			else if (i == 0) {
 				max = arrayNumbers[i]
 			}
 		}
 	}
    console.log('MAX = ' + max)

