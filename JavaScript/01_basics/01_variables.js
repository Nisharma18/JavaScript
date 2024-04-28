const accountId = 144553
let accountEmail = "Nisha@google.com"
var accountPassword = "12345"
accountCity = "Agra"

let accountState;

// accountId = 2 // not allowed

accountEmail = "nisha@kc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])