const array = [3, 25, 209];
const numberStrings = [
  'Zero',
  'One', 
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine'
];

const printStringArrFromIntArr = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let numToString = array[i].toString();
    for (let j = 0; j < numToString.length; j++) {
      let stringToPrint = numberStrings[parseInt(numToString[j])];
      process.stdout.write(stringToPrint);
    };
    
    if (i !== nums.length - 1 ) {
      process.stdout.write(',');
    }
  }
  console.log();
}

printStringArrFromIntArr(array);