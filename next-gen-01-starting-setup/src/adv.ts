type Storagea = {
    [key: string]: string | number | boolean;
}
let store: DataStore = {};

store.id = 5;
store.isOpen = false;

store.name = "My Store"; 
let roles = ['admin', 'user', 'guest']as const ;
roles.push('superadmin'); // Error: Cannot add to a 'readonly' array
const firstRole = roles[0]; // 'admin'

let someobj: Record<string, number> ;

const dataEntries: Record<string, number> = {
element1: 10,
element2: 20,
element3: 30
}
dataEntries.entry4;
