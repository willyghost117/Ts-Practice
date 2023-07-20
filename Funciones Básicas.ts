function addNumbers(a: any, b: any):number {
  return a + b;
}

let result: number = addNumbers(1, 2);

const addNumbersArrow = (a: number, b: number):string => {
  return `${a + b}`; // conversion a number a string
};

function multiply(fistNumber: number, secondNumber:number, base:number){
  return firstNumber*base; 
}

let result2: string = addNumbersArrow(1, 2);

console.table({ result, result2 });