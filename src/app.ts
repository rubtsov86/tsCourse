//tasr 5

{
  function getPromise(): Promise<Array<string | number>> {
    return new Promise(resolve => {
      resolve(['Text', 50]);
    });
  }

  getPromise().then(data => {
    console.log(data);
  });
}

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

class Component<T> {
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

//task 4

// {
//   class Key {
//     private signature: number;

//     constructor() {
//       this.signature = Math.random();
//     }

//     getSignature(): number {
//       return this.signature;
//     }
//   }

//   class Person {
//     private key: Key;

//     constructor(k: Key) {
//       this.key = k;
//     }

//     getKey(): Key {
//       return this.key;
//     }
//   }

//   abstract class House {
//     protected door = false;
//     protected tenants: Person[] = [];
//     constructor(protected key: Key) {}

//     comeIn(person: Person): void {
//       if (this.door) {
//         this.tenants.push(person);
//       } else {
//         throw new Error('Door is close');
//       }
//     }

//     abstract openDoor(k: Key): boolean;
//   }

//   class MyHouse extends House {
//     openDoor(key: Key) {
//       if (key.getSignature() !== this.key.getSignature()) {
//         throw new Error('Key to another door');
//       }
//       return (this.door = true);
//     }
//   }

//   const key = new Key();

//   const house = new MyHouse(key);
//   const person = new Person(key);

//   house.openDoor(person.getKey());

//   house.comeIn(person);
// }

// task1

// const button = document.querySelector('button')!;
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener('click', function () {
//   console.log(add(+input1.value, +input2.value));
// });

// {
// task2
//   let age: number;
//   age = 50;

//   let name: string;
//   name = 'Max';

//   let toggle: boolean;
//   toggle = true;

//   let empty: null;
//   empty = null;

//   let notInitialize: undefined;
//   notInitialize = undefined;

//   let callback: (a: number) => number;
//   callback = a => {
//     return 100 + a;
//   };

//   let anything: any;
//   anything = -20;
//   anything = 'Text';
//   anything = {};

//   let some: unknown;
//   some = 'Text';
//   let str: string;
//   if (typeof some === 'string') {
//     str = some;
//   }

//   let person: [string, number];
//   person = ['Max', 21];

//   enum Load {
//     LOADING,
//     READY,
//   }

//   const page = {
//     load: Load.LOADING,
//   };

//   if (page.load === Load.LOADING) {
//     console.log('Страница загружается');
//   }
//   if (page.load === Load.READY) {
//     console.log('Страница загружена');
//   }

//   let union: number | string;

//   let literal: 'enable' | 'disable';

//   function showMessage(message: string): void {
//     console.log(message);
//   }

//   function calc(num1: number, num2: number): number {
//     return num1 + num2;
//   }

//   function customError(): never {
//     throw new Error('Error');
//   }

//   type DatabasePage = {
//     title: string;
//     likes: number;
//     accounts: string[];
//     status: 'open' | 'close';
//     details?: {
//       createAt: string;
//       updateAt: string;
//     };
//   };

//   const page1: DatabasePage = {
//     title: 'The awesome page',
//     likes: 100,
//     accounts: ['Max', 'Anton', 'Nikita'],
//     status: 'open',
//     details: {
//       createAt: '2021-01-01',
//       updateAt: '2021-05-01',
//     },
//   };

//   const page2: DatabasePage = {
//     title: 'Python or Js',
//     likes: 5,
//     accounts: ['Alex'],
//     status: 'close',
//   };
// }
