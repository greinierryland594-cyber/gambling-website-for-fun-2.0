let tokens = 1000

function updateBalance(){
document.getElementById("tokens").innerText = tokens
}

function addTokens(amount){
tokens += amount
updateBalance()
}

function removeTokens(amount){
if(tokens >= amount){
tokens -= amount
updateBalance()
return true
}
alert("Not enough tokens")
return false
}

document.addEventListener("keydown",function(e){
if(e.ctrlKey && e.key === "f"){
document.getElementById("adminPanel").style.display="block"
}
})

function closeAdmin(){
document.getElementById("adminPanel").style.display="none"
}

function adminGive(){
let amount = Number(document.getElementById("giveAmount").value)
tokens += amount
updateBalance()
}

updateBalance()