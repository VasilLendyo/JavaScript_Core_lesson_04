function alert(array) {
	console.log(array);
	console.log('----------------');
}

var array = [ 13, -32, 9, -56, 34, 45, -3, 39, -47, -90, 23, 14, 99, 123, -22,
		33, 87, -12, 15, 64 ];
alert(array);

// 1:
array.sort(function(a, b) {
	return a - b;
})

alert(array);

array.sort(function(a, b) {
	return b - a;
})

alert(array);

// 2:
function positive(a) {
	return a >= 0;
}

function negative(b) {
	return b < 0;
}

var arrayPositive = array.filter(positive);
var arrayNegative = array.filter(negative);
alert(arrayPositive);
alert(arrayNegative);
