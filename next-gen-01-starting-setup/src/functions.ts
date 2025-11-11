function getLenght(val: string | any[]){
    if(typeof val === 'string'){
        const numberOfWords=val.split(' ').length;
        return `${numberOfWords} words`;

    } 
    return val.length;
}
const numOfWords = getLenght('Hello world from TypeScript') as string; // "4 words" 
numOfWords.length;
const numItems = getLenght([1,2,3,4,5]); // 5
function getLenght(val: string): string;
function getLenght(val: any[]): number;
function getLenght(val: string | any[]): string | number ;
