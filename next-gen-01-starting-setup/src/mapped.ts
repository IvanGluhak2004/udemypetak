type Operations = {
    readonly add : (a: number, b: number) => number;
    readonly subtract : (a: number, b: number) => number;

}

let mathOps: Operations = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b
};

type Results <T>= {
    -readonly [key in keyof T ]?:number;

}
let results: Results<Operations> = {
    add: mathOps.add(10, 5),
    subtract: mathOps.subtract(10, 5)
}; n