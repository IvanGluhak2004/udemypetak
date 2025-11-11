type StringArray = string[];
type elementtype <T extends any[]> = T[number]; // elementtype is string

type Example = ElementType<StringArray>; // Example is string

type getElementType <T>=T extends any[] ? T[number] : never;
type Example2 = getElementType<StringArray>; // Example2 is string
let text = ['hello', 'world'];

type Example3= getElementType<typeof text>;