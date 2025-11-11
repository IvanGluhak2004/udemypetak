let names: Array<string> = ['Alice', 'Bob', 'Charlie'];
type DataStore <T>= {
    [key: string]: T;
};
let storea: DataStore<string | number | boolean> = {};
store.name = "My Store";
store.id = 1;
store.isOpen = true;


let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U): [T, U] {
    return [a,b];
}
const ids = merge<number,string>(1,'apple');
ids[0];

function mergeObj<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}
const personA = mergeObj({ name: 'John' }, { age: 30 });
personA.name;
personA.age;