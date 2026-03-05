function spinWheel(){

let bet = Number(document.getElementById("wheelBet").value)
if(!removeTokens(bet)) return

let multipliers=[1.5,2,3,5,10,25,50,100]

let result = multipliers[Math.floor(Math.random()*multipliers.length)]
let winnings = bet * result

addTokens(winnings)

alert("Wheel landed on "+result+"x! You won "+winnings)

}