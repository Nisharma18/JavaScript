// Immediately Invoked Function Expressions (IIFE)


(function lassi(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nisha')