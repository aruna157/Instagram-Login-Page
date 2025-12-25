
const username = "Aruna"
const password = "aruna555!.."

document.getElementById("btn").addEventListener("click", () => {
    let input = document.getElementById("input1").value
    let pass = document.getElementById("input2").value
    if (username == input && pass == password) {
        window.location.href="alert.html"
    }
    else {
        document.getElementById("errormsg").innerHTML = "Sorry, your password was incorrect. Please double-check your password."
    }
})

const pwd = document.getElementById("input2")
const loginbtn = document.getElementById("btn")

pwd.addEventListener("input", () => {
    if (pwd.value.length >= 8) {
        loginbtn.style.backgroundColor = "rgba(29, 29, 234, 1)"
    }
    else {
        loginbtn.style.backgroundColor = "rgb(143, 143, 251)"
    }
})


