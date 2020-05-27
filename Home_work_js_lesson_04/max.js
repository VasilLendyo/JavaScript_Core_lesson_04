function alert(array) {
	console.log(array);
	console.log('----------------');
}

var arrayOfStudent = [];
var student1 = {
	yearOfStuding : 2,
	facultyName : 'Biology'
};
var student2 = {
	yearOfStuding : 3,
	facultyName : 'Arts'
};
var student3 = {
	yearOfStuding : 1,
	facultyName : 'Law'
};
var student4 = {
	yearOfStuding : 2,
	facultyName : 'Music'
};
var student5 = {
	yearOfStuding : 5,
	facultyName : 'Philosophy'
};
var student6 = {
	yearOfStuding : 3,
	facultyName : 'Economics'
};
var student7 = {
	yearOfStuding : 1,
	facultyName : 'Commerce'
};
var student8 = {
	yearOfStuding : 6,
	facultyName : 'Law'
};
var student9 = {
	yearOfStuding : 1,
	facultyName : 'Engineering'
};
var student10 = {
	yearOfStuding : 4,
	facultyName : 'Information technology'
};

arrayOfStudent.push(student1, student2, student3, student4, student5, student6,
		student7, student8, student9, student10);
alert(arrayOfStudent);

function getFacultyName(obj) {
	return obj.facultyName;
}

var facultyNames = arrayOfStudent.map(getFacultyName);
alert(facultyNames);

function sumStudentYearOfStuding(sumOfYearOfStuding, currentObj) {
	return sumOfYearOfStuding + currentObj.yearOfStuding;
}

var yearOfStudingSum = arrayOfStudent.reduce(sumStudentYearOfStuding, 0);
alert(yearOfStudingSum);