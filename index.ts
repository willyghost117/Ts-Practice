

console.log('Hola mundo');

const a: number = 10;

console.log(a);

let name1: string | number = 'Nombre'; // al declarar que name1 con string y number puede almacenar un dato tipo string o un dato tipo number
const isAlive: boolean= true;
name1 = 500;

console.log(name1);
console.log(isAlive);

const skills:string[] = ['bash','Counter','Healing'];

// Darle tipado al objeto
interface Character {
  name:string;
  hp:number;
  skills: string [];
  hometown?:string; // al ponerle el signo de interrogacion declaramos que puede estar idefinido y agregarle un valor a la variable posteriormente
}
const strider:Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash','Counter']
}

strider.hometown='Riverdell';

console.table(strider)

console.log(skills);