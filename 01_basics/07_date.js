// let myDate =new Date()
// console.log(myDate.toSting());
// console.log(myDate.toDateSting());
// console.log(myDate.toLocaleSting());
// console.log(myDate.toSting());

// let myCreatedDate = new Date(2024, 0, 28)
// let myCreatedDate = new Date(2024, 0, 28, 5 , 3)
// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleSting('default', {
    weekday: "long"
})