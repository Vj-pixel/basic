let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
  console.log("Please enter the username and password for this account.")
} else if (userRole === 'admin') {
  console.log("You have special access to our system!")
} else {
  console.log("Welcome!")
}

let blackPants = true
let blackPantsWithWhiteStripes = false
let newShoes = 'black'

if (blackPants && blackPantsWithWhiteStripes) {
  console.log("Your new shoes should match your pants.")
} else if (blackPants || blackPantsWithWhiteStripes) {
  console.log("Your pants still match with your shoes.")
} else if (newShoes === 'black') {
  console.log("Nice shoes!")
} else {
  console.log("Um... I think you should get different shoes and return these.")
}

let userRole = 'admin'

