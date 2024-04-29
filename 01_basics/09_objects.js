// singleton c
const mySym = Symbol("key1")
const jsUser = {
    name: "Nisha",
    'full name' : 'Nisha sharma',
    age: "18",
    [mySym ]: "myKey1",
    location : "jaipur",
    email : "nish@gmail.com"
}
jsUser.email = "nisha123@gmail.com"
Object.freeze(jsUser)
jsUser.email = "nishanjdnje@gmail.com"
// console.log(jsUser)
// console.log(jsUser['name', 'age','location'])
// console.log(jsUser['full name'])
// console.log(jsUser[mySym])

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting ());
console.log(jsUser.greetingTwo());




























































































































