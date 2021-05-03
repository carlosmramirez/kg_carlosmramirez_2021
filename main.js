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

for (let i = 0; i < array.length; i++) {
  let numToString = array[i].toString();
  for (let j = 0; j < numToString.length; j++) {
    let stringToPrint = numberStrings[parseInt(numToString[j])];
    process.stdout.write(stringToPrint);
  };
  
  if (i !== array.length - 1 ) {
    process.stdout.write(',');
  }
}
console.log();