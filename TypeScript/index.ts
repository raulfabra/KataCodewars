// Primeros pasos
/* let name = 'Jhon Macarena';  name esta reservado en typeScript*/
let userName: string = "Jhon Makarfee";
const arr: string[] = ["Hello World", "byebye"];
const arr2: (string | number)[] = ["papa", "mama", 25252];
const arr3: any[] = ["hello", null, 1596, undefined, "narco"];

const obj: { [key: string]: number } = { a: 1, b: 75, c: 26 };
const obj2: { [key: string | number]: number } = { a: 1, 201: 5, c: 26 };

// No se puede porque typescript es tipado -> userName = 45;

console.log(`Hello ${userName}`);

// Segundo pasos
function greetPerson(userName: string): void {
  console.log(`Hello ${userName}`);
}

greetPerson("Raul Fabra");
// greetPerson(45); NO FUNCIONA

// TSC tambien nos protege de si una funcion no devuelve array como en el siguiente paso.
const a = greetPerson("Raul");
//a.filter()

// TERCER PASOS /* INTERFACES */
// muchas veces los errores de typescript esque esta esperando una estructura de objeto en concreto y no la recibe como esta implementada entonces podemos definir las interfaces
interface UserInterface {
  name: string;
  city: string | null;
  age: number;
}

function greetPerson2(userName: UserInterface): void {
  console.log(`Hello ${userName}`);
}
const user = { name: "Monty", city: "Madrid", age: 42 };

greetPerson2(user);

//si quiero una key del objeto sea opcional pongo una ?
//si quiero que un valor tenga opciones pongo el condionarl OR que en Typscript es con solo una BARRA. Puede ser de typado y de VALOR!!
interface CityInterface {
  name: "Madrid" | "Barcelona" | "Valencia";
  area: number;
  country?: "Spain";
}

function whatIsYourTown(city: CityInterface) {
  return city;
}

let city: CityInterface = { name: "Valencia", area: 1444 };
console.log(whatIsYourTown(city));

//Podemos definir nuestros propios tipados
type SpanishCity = "Madrid" | "Barcelona" | "Malaga";
type SliceStatus = "Idle" | "Reject" | "Error" | "Pending";

// CUARTO PASO /* genericos */

function makeArrayOfItem<T>(item: T): T[] {
  return [item];
}

const returnFunction = makeArrayOfItem<number>(42).filter((num) => num > 4);
console.log(returnFunction);

//interfaces con tipos genericos es algo mas complejo pero se USA
interface User<T> {
  name: string;
  specialData: T;
  moreSpecialData?: T[];
}

const john: User<string> = { name: "John", specialData: "hello world" };
const tom: User<number> = { name: "tom", specialData: 55 };
const ppp: User<number | string> = { name: "ppp", specialData: 18, moreSpecialData: ["cocinero", "fontanero", "electricista"] };
