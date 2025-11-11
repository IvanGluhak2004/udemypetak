function logger<T extends new (...args: any[]) => {}>(target: T  , ctx: ClassDecoratorContext ){
    console.log('logger decorator ')
    console.log(ctx);
    console.log(target);

    return class extends target {
        age: number;
        constructor(...args: any[]){
            super(...args);
            console.log('Creating instance...');
            console.log(args);
            this.age = 30;
        }

    };
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext){
    console.log('autobind decorator');
    console.log(ctx);
    console.log(target);
    ctx.addInitializer(function(this: any){
        this[ctx.name]=this[ctx.name].bind(this);
    });
    return function(){
        console.log('autobind method');
        target.apply(this);
    }

}
function fieldLogger(target:undefined, ctx: ClassFieldDecoratorContext){
    console.log(target);
    console.log(ctx);
    return(initialValue: any)
    =>{
        console.log('fieldLogger decorator');
        return initialValue;
    };
     
}   
@logger
class Person{
    @fieldLogger
    name= 'Max';
    constructor(){
        this.greet = this.greet.bind(this);
    }

    age: number | undefined;
    @autobind
    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

    
}

const max = new Person();
console.log(max.age);
max.greet();
const greet= max.greet;
greet();
