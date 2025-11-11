type user = {name: string, age: number, isAdmin: boolean};
type userKeys = keyof user; // 'name' | 'age' | 'isAdmin'

validKey='user'; // validKey can only be 'name', 'age', or 'isAdmin'
let validKey: userKeys;
validKey = 'name'; // valid
//validKey = 'email'; // Error: Type '"email"' is not assignable to type 'userKeys'
function getUserProperty(user: user, key: userKeys) {
    return user[key];
}
