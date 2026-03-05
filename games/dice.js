function rollDice(){

let bet = Number(document.getElementById("diceBet").value)
if(!removeTokens(bet)) return

let roll = Math.floor(Math.random()*6)+1

if(roll >=4){
let winnings = bet * 2
addTokens(winnings)
alert("Dice rolled "+roll+"! You won "+winnings)
}else{
alert("Dice rolled "+roll+"! You lost")
}

}