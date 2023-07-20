// desestructuracion

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const song = 'New Song';

// desestructuracion

const { song: anotherSong, songDuration: duration, details } = audioPlayer; // se agrega details para poder accder a sus propiedades
// accediendo a author que pertenece al objeto details

const { author } = details;

console.log('Song:', anotherSong);
console.log('Duration', duration);
console.log('Author:', author);

// Destructuracion de arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks: string = dbz[3] || 'No hay personaje';
// Tradicional
console.log('Personaje 3:', dbz[3] || 'No hay personaje');
console.log('Personaje 3:', trunks);

// Mejor lectura
const prueba: string[] = ['Pikachu', 'Chalmander'];
const [, , pj3 = 'Not foundsss']: string[] = prueba;

console.log('Personaje 3:', pj3);

// Function-destructuring.ts

interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 500.0,
};

const tablet: Product = {
  description: 'Samsung s3',
  price: 900.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//function taxCalculation(option: TaxCalculationOptions): [number, number] { //se pasa un objeto
//function taxCalculation({tax,products}: TaxCalculationOptions): [number, number] {
// indicamos en [number,number ] que solo se utilizaran dos variables

function taxCalculation(options: TaxCalculationOptions): [number, number] {
  //number:number es la forma de retorno
  const { tax, products } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total = total + price;
    console.log('dentro de la funcion tax', { total });
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
  products: shoppingCart, // se indica que productos sea shoppingCart(propiedad que apunta a una variable)
  tax: tax, // se indica que tax sea igual a tax pero se omite en sintaxis y solo se escribe tax
});
const [product, product1] = result;

console.log('Total', product);
console.log('Total', product1);
console.log({ result });