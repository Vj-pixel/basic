//Lexical scope (Static Scope)
// Global scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block; cannot be used outside of where it is

// In a scope you can access variables defined in that scope. or in any parent/ancestor scope.

//Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
  console.log(varOne)
  let varTwo = 'varTwo'
  //Vartwo is in an if condition, so then it can't be used outside the if statement
  console.log(varTwo)

  if (true) {
    let varFour = 'varFour'
  }
}

if (true) {
  let varThree = 'varThree'

}
