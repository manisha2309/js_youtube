const accountId = 144553
let accountEmail = "manu@gmail.com"
var accountPassword = "12345" 
accountCity = "Jaipur"

// accountId = 2 //not allowed
accountEmail = "mani@gmail.com"
accountPassword = "21323"
accountCity = "Bengaluru"    //possible but not safe
let  accountState;   //this is undefined

console.log(accountId);

/*prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])