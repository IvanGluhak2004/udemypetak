function add(a: number , b:number):number {
  return a + b;
}
add(5, 10);

//function log(message:string):void {
//    console.log(message);}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logged = logAndThrow("An error occurred!");

function performJob (cb: (m: string) => void) {
    cb("Job finished");
}
//performJob(log);
type Employee = {
    name: string;
    age: number;
    greet: (message: string) => string;
};
 let employ : Employee = {
    name: "Ana",
    age: 28,
    greet() {
    console.log("Hello!");
    return this.name;
    }
};
//employ.greet();