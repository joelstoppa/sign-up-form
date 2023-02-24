let passwordField = document.getElementById("pass")
let confirmPasswordField = document.getElementById("confirm-pass")

passwordField.addEventListener("keyup", verifyPassword)
confirmPasswordField.addEventListener("keyup", verifyPassword)

function verifyPassword() {
    let password = document.getElementById("pass").value
    let confirmPassword = document.getElementById("confirm-pass").value
    let text = document.getElementById("passMatch")

    if (password !== confirmPassword) {
        text.innerText = "Passwords must match"
    }
    else {
        text.innerText = ""
    }
}