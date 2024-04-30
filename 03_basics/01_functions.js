// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }

// sayMyName()
function addTwoNumber(num1, num2){
    // console.log(num1 + num2)
    // return result
    return num1 + num2
}
const result = addTwoNumber(2, 4)
// console.log('Result:', result)

function loginUser(userName){
 return `${userName} just logged in`
}
// console.log(loginUser('Nisha'))

function loginUser(userName){
    if(userName === undefined){
        console.log("please enter a username");
    }
    // return `${userName} just logged in`
   }
//    console.log(loginUser('Nisha'))


   
function loginUser(userName){
    if(!userName){
        console.log("please enter a username");
    }
    // return `${userName} just logged in`
   }
//    console.log(loginUser('Nisha'))


   function loginUserMessage(username = "Nisha"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nisha"))
// console.log(loginUserMessage("Nisha"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Kapil ko Russian pasand hai ",
    price: 6000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and unki price is ${anyobject.price}`);
}

handleObject(user)
// handleObject({
//     username: "Russian",
//     price: 8000
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));