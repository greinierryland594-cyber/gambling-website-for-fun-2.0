function coinFlip(){

let bet = Number(document.getElementById("coinBet").value)
if(!removeTokens(bet)) return

let win = Math.random() > 0.5

if(win){
let winnings = bet * 2
addTokens(winnings)
alert("Heads! You won "+winnings)
}else{
alert("Tails! You lost.")
}

}