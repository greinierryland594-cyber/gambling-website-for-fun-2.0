function startRocket(){

let bet = Number(document.getElementById("rocketBet").value)
if(!removeTokens(bet)) return

let multiplier = (Math.random()*12 + 1).toFixed(2)
let winnings = bet * multiplier

addTokens(winnings)

alert("Rocket reached "+multiplier+"x! You won "+winnings)

}