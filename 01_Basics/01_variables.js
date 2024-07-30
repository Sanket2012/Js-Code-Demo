const accountId = 121212
let accountEmail = "sanket@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2
accountEmail = "S@s.com"
accountPassword = "12121212"
accountCity = "Kolhapur"

console.log(accountId);

/*
    Prefer not to use Var
    because of issue in block and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])