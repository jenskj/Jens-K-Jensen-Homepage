

/* 
const remainder = timelineArray.filter(function(entry) {

	const periodsReg = /\s{1,10}\d{1,}\s.+/i;
	const periods = periodsReg.test(entry)

	const livingAuthorsReg = /^\d{1,}\s\(\-\)/i;
	const livingAuthors = livingAuthorsReg.test(entry)

	const deadAuthorsReg = /^\d{1,}\*?\s?\D?\D?\/?\d?\d?\d?\d?\*?\s\D?\D?\s?\(\-\d{1,}.+/i;
	const deadAuthors = deadAuthorsReg.test(entry)

	const titlesReg = /^\(?\d{1,}\*?\-?\d?\d?\d?\d?\)?\s\D?\D?\*?\s?\-\s/i;
	const titles = titlesReg.test(entry)
//timelineArray.splice(timelineArray.indexOf(entry), 1);

	if (periods === true) {
		return timelineArray.splice(timelineArray.indexOf(entry), 1)
	} else if (livingAuthors === true) {
		return timelineArray.splice(timelineArray.indexOf(entry), 1)
	} else if (deadAuthors === true) {
		return timelineArray.splice(timelineArray.indexOf(entry), 1)
	} else if (titles === true) {
		return timelineArray.splice(timelineArray.indexOf(entry), 1)
	} else {
		
	}
}) */


/* const remainder = [];
function compare(arr1, arr2) {
	arr1.forEach((e1) => arr2.forEach((e2) => {
		if(e1 !== e2) {
			remainder.push(e1)
		}
	}
	))
}
compare(timelineArray, newArray)
console.log(remainder) */

/* console.clear
for (let i = 0; i < timelineArray.length; i++) {
  for (let j = 0; j < newArray.length; j++) {
    if (timelineArray[i] !== newArray[j]) {
		console.log(timelineArray[i])
	}
	
  }
};
 */


//const filteredArrays = titlesArray + deadAuthorsArray + livingAuthorsArray + periodsArray;
/* var remainder = timelineArray.filter((item) => {
	return !newArray.has(item);
  })
  var remainItems = new Set(timelineArray)
  console.log(remainItems) */



/* for (var entry = 0; entry < timelineArray.length; entry++) {
	if (timelineArray !== titlesArray || deadAuthorsArray || livingAuthorsArray || periodsArray) {
		console.log(timelineArray);
	}
}
 */

/* const filteredArrays = titlesArray + deadAuthorsArray + livingAuthorsArray + periodsArray;

const remain = function compare(timelineArray, filteredArrays) {
	const remainder = [];
	timelineArray.forEach((e1) => filteredArrays.forEach((e2) => {
		if(e1 !== e2) {
			remainder.push(e1)
		}
	}
	))
	return remainder;
}

console.log(remain) */


/* const remainder = timelineArray.filter(function(entry) {
	if (entry !== titlesArray || deadAuthorsArray || livingAuthorsArray || periodsArray) {
		return entry;
	}
})
console.log(remainder)  */

/* timelineArray.forEach(entry => {
	console.groupCollapsed('Entries');
	console.log(titlesArray);
	console.log(deadAuthorsArray);
	console.log(livingAuthorsArray);
	console.log(periodsArray)
	console.groupEnd('Entries');
  }); */



// 1955 - Lolita (Vladimir Nabokov)
//console.table(timelineArray)
//console.table(titlesArray)

//timelineArray.splice(timelineArray.indexOf(entry), 1);


/* while((result = periodsReg.exec(periodsArray)) !== null) {
    yearArray.push(result)
}

yearArray = yearArray.reduce(function(a, b){
	return a.concat(b);
}, []);

for(var i = 0; i < yearArray.length; i++) {
    yearArray.splice(i+1,1);
}
console.log(yearArray) */

/* function splitLive(myArray, slicePoint) {
 let index = 0;
 let arrayLength = myArray.length;
 let tempArray = [];

 for (index = 0; index < arrayLength; index += slicePoint) {
	 if (myArray[index] === startYear) {
		 return slicePoint = myArray[index];
	 }
	 mySlice = myArray.slice(index, index+slicePoint);
	 tempArray.push(mySlice);

	 return tempArray;
 }
 let result = splitLive(periodsArray, 1);
 console.log(result)
} */
/* 
//splitting array into groups of three
function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
// Split in group of 3 items
var result = chunkArray(periodsArray, 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);
 */

/* bornArray.forEach(function(arr, i) {
	return arr[i].split(yearStart);
})
console.log(bornArray) */

/* for (let i = 0; i < bornArray.length; i++) {
	function splitYear(bornArray) {
		bornArray[i].split(yearStart);
		return bornArray
	}
		
}
console.log(splitYear(bornArray)) */

//console.table(splitYear(bornArray))
//console.log(periodsArray[1].split(yearStart))
//console.log(periodsArray);


	/* for(var i = 0; i < newArr.length; i++) {
		newArr.splice(i+1,1);
	}
	 */

	 /* yearArray = yearArray.reduce(function(a, b){
	return a.concat(b);
}, []); */
//let newYear = yearArray.flat(1)

/* let isOpen = false;
function historyBlockShow () {
	if (isOpen === false) {
	getClassHistoryBlock[i].style.width = '600px';
	getClassTitle[i].style.width = '600px';
	getClassTimeline[i].style.display = 'block';
	isOpen = true;
	console.log(getClassHistoryBlock[i])
	} else {
		getClassHistoryBlock[i].style.width = '';
	getClassTitle[i].style.width = '';
	getClassTimeline[i].style.display = '';
	isOpen = false;
	console.log(getClassHistoryBlock[i])
	}
}

getClassHistoryBlock[i].addEventListener('click', historyBlockShow); */