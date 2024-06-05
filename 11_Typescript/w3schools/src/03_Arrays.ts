const names: string[] = [];
names.push("Dylan");    // no error
//names.push(3); Error: arguent of type 'number' is not assignable to parameter of type 'string'.


const names2: readonly string[] = ["Dylan"];
//names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
//names2.remove("Joe"); // Error

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

