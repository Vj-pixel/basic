let materialTheme = false
let otherTheme = false

if (otherTheme && materialTheme) {
    console.log("Hey, your Atom theme looks good.")
} else if (otherTheme || materialTheme) {
    console.log("Your Atom editor could look better.")
} else {
    console.log("Eh, it looks so normal...")
}
