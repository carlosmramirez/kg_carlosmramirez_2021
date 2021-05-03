const array = process.argv.slice(2);
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
  if (!nums.length) {
    process.stdout.write('Please enter numbers separated by a space!\n');
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    printStringFromInt(nums[i]);
    
    if (i !== nums.length - 1 ) {
      process.stdout.write(',');
    } else {
      process.stdout.write('\n');
    }
  }
}

const printStringFromInt = (numString) => {
  for (let j = 0; j < numString.length; j++) {
    let stringToPrint = numberStrings[parseInt(numString[j])];
    process.stdout.write(stringToPrint);
  }
}

printStringArrFromIntArr(array);