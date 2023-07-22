// Clase Person
export class Person {
  // public name: string; // propiedad publica
  // private address: string; // propiedad privada

  // Constructor
  constructor(
    public firstName: string,
    private lastName: string = 'No last name',
    private address: string = 'No address'
  ) {
    //this.name = 'Fernando';
    //this.address = 'New York';
  }
}

/*export class Hero extends Person {
  constructor (
    public alterEgo:string,
    public age: number,
    public realName: string,
  ){
    super(realName,'New York') 
  }
}*/

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //super(realName,'New York')
  }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony); //Instancia, referencia

console.log(ironman);

//Generics
/*
function whatsMyType (argument:any):any{// No utilizar any
  return argument;
}*/

function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(45);
let amIarray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber);
console.log(amIarray);

// Decoradores
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  };
}
//@classDecorator
class SuperClass {
  public myProperty: string = '123ABC';
  print() {
    console.log('holaa');
  }
}
console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);

11; // Optional Chaining

interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Williams',
};

const passenger2: Passenger = {
  name: 'Gerardo',
  children: ['Natalia', 'Elizabeth'],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children??length; // con el doble ?? estamos aplicando luego el operador ?? establecerá el valor predeterminado 0 para howManyChildren
  // Encadenamiento opcional, Primero con children? estamos preguntando si existe, con length, contamos el numero de elementos en el arrelo y con || 0 estamos diciendo que si no viene nada(undefine) que mande 0, esto es para anticipar que no se este declarando ningun arreglo en la propiedad children del objeto passenger1.

  //const howManyChildren = passenger.children!.length; //el signo ! en donde esta ubicado en esta linea se llama no null a session operator y evalua si 
  console.log('Nombre:',passenger.name, 'Hijos:', howManyChildren);
};

printChildren(passenger1);