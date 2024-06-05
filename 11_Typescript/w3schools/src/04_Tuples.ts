// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];


// define our tuple
let ourTuple3: [number, boolean, string];
// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');
console.log(ourTuple3);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');