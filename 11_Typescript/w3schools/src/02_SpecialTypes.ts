let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number' 

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

let w: unknown = 1;
w = "string"; // no error
w= {
    runANonExistentMethod:() => {
        console.log("I think threfore I am");
    }
} as {runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below whe we do't know the type?
// w.runANonExistentMethod(); // Error: Object is of a type 'unknown'
if(typeof w ==='object' && w != null) {
    (w as {runANonExistentMethod: Function}).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
let y: undefined = undefined;
let z: null = null;
 