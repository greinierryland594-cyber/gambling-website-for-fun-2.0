function startBlackjack(){

let bet = Number(document.getElementById("blackjackBet").value)
if(!removeTokens(bet)) return

let player = Math.floor(Math.random()*11)+11
let dealer = Math.floor(Math.random()*11)+11

if(player > 21){
alert("Bust! You lost")
return
}

if(dealer > 21 || player > dealer){
addTokens(bet*2)
alert("You won!")
}else if(player === dealer){
addTokens(bet)
alert("Push! Bet returned")
}else{
alert("Dealer wins")
}

}