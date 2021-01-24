let temp = 55

// Logical And operator - True if both sides are True. False otherwise
// Logical And operator looks like this: &&

  let isGuestOneVegan = true
  let isGuestTwoVegan = false

  if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("We will only give our best vegan dishes.")
  } else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Would you like some vegan dishes?")
  } else {
    console.log("Tell us what you would like.")
  }

let isSchoolOn = true
let isSchoolDone = false

if (isSchoolOn || isSchoolDone) {
  console.log("School is either done or it's still on.")
} else if (isSchoolOn && isSchoolDone) {
  console.log("This means school is going to open again soon.")
} else {
  console.log("there is a holiday.")
}

console.log("This is such a cool syntax theme.")
console.log("I feel faster when I type on this Atom Nightly editor.")
