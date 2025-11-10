// Code goes here!

//var su globalne varijable
//let su lokalne varijable
//const su konstantne varijable koje se ne mogu mijenjati
//const appName: string = "My Next Gen App";
//let age: number = 25;
//var isActive: boolean = true;

const add =(a:number,b:number)=>{

    return a + b;

}
console.log(add(5,10));

const button= document.querySelector('button');

if (button){
    button.addEventListener('click',()=>console.log('Button clicked!') );
}


//stao na videu 63