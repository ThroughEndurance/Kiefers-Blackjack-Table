let playerTotal = 0;    
let dealerTotal = 0;
let playAllowed = true;
let playerAces = 0;
let dealerAces = 0;
//This builds the deck.

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildDeck();

function buildDeck() {
    const deck = [];
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({
                card: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return deck;
}

// shuffles the deck using the Fisher-Yates shuffle https://en.wikipedia.org/wiki/Fisher-Yates_shuffle //

const shuffle = function shuffleDeck(){
    for(let i = 0; i < 52; i++){
        let newCardIndex = Math.floor(Math.random() * 52);
        let randomCard = masterDeck[i];
        masterDeck[i] = masterDeck[newCardIndex];
        masterDeck[newCardIndex] = randomCard;
    }
}

window.onload = shuffle()

//Deal button functions are below.

document.getElementById("deal").addEventListener("click", dealCards)

function dealCards(){
        
        if (playerTotal < "1"){

            let cardEl = document.createElement("img");
            playerCard = masterDeck.pop();
            playerTotal += playerCard.value;
            cardEl.src = "card-deck-css/images/" + playerCard.card + ".svg";
            document.getElementById("player").append(cardEl);
            if (playerCard.value === 11){
                playerAces += 1
            };

            let dealerCardEl = document.createElement("img");
            faceDown = masterDeck.pop();
            dealerTotal += faceDown.value;
            dealerCardEl.src = "card-deck-css/images/" + faceDown.card + ".svg";
            document.getElementById("dealer").append(dealerCardEl);
            if (faceDown.value === 11){
                dealerAces += 1
            };

            let cardElTwo = document.createElement("img");
            playerCardTwo = masterDeck.pop()
            playerTotal += playerCardTwo.value;
            cardElTwo.src = "card-deck-css/images/" + playerCardTwo.card + ".svg";
            document.getElementById("player").append(cardElTwo);
            if (playerCardTwo.value === 11){
                playerAces += 1
            };
            
            let dealerCardElTwo = document.createElement("img");
            dealerCardTwo = masterDeck.pop();
            dealerTotal += dealerCardTwo.value;
            dealerCardElTwo.src = "card-deck-css/images/" + dealerCardTwo.card + ".svg";
            document.getElementById("dealer").append(dealerCardElTwo);
            if (dealerCardTwo.value === 11){
                dealerAces += 1
            };

            document.getElementById("dealer-total").innerText = dealerTotal;
            document.getElementById("player-total").innerText = playerTotal;

            console.log('player aces: ' + playerAces)
            console.log('dealer aces: ' + dealerAces)
            console.log('player total: ' + playerTotal)
            console.log('dealer total: ' + dealerTotal)
        }
}                    

//Hit button functions. Need to add what happens player busts here: end round, player loses, only clickable options should be new round etc.

document.getElementById("hit").addEventListener("click", hit)

function hit(){
    if (!playAllowed){
        return;
    }
        if (playerTotal < 21){
            let playerHitCard = document.createElement("img");
            playerCardThree = masterDeck.pop();
            playerTotal += playerCardThree.value;
            playerHitCard.src = "card-deck-css/images/" + playerCardThree.card + ".svg";
            document.getElementById("player").append(playerHitCard)
            if (playerCardThree.value === 11){
                playerAces += 1;
            };
        } 
        if (playerTotal > 21 && playerAces > 0){
                playerTotal -= 10;
                playerAces -= 1
        };

        if (playerTotal > 20){
                stay()
        };
    document.getElementById("player-total").innerText = playerTotal;
    console.log('Player total: '+ playerTotal);
    console.log('player aces: ' + playerAces)
}

//Stay button functions. Also activates/runs the dealers turn and following win conditions.

document.getElementById("stay").addEventListener("click", stay)

function stay(){

    playAllowed = false;
    if (playerTotal < 22){
        while (dealerTotal < 17){
            let dealerCardLoop = document.createElement("img");
            let nextDealerCard = masterDeck.pop();
            dealerTotal += nextDealerCard.value;
            dealerCardLoop.src =  "card-deck-css/images/" + nextDealerCard.card + ".svg";
            document.getElementById("dealer").append(dealerCardLoop);
            if (nextDealerCard.value === 11){
                dealerAces += 1;
                console.log('dealer aces from loop: ' + dealerAces)
            }
            if (dealerTotal > 21 && dealerAces > 0){
                    dealerTotal -= 10;
                    dealerAces -= 1
            };
        }
    }

    document.getElementById("dealer-total").innerText = dealerTotal;
    let conclusion = ""
    
    if (playerTotal > 21){
        conclusion = "Player Busted!";
    }
    else if (dealerTotal > 21){
        conclusion = "Dealer Busted!";
    }
    else if (playerTotal == dealerTotal) {
        conclusion = "Push";
    }
    else if (playerTotal > dealerTotal) {
        conclusion = "Player Wins!";
    }
    else if (playerTotal < dealerTotal) {
        conclusion = "Player Loses!"
    }
    document.getElementById("winOrLose").innerText = conclusion;

//more console logs for testing...
    console.log('Player total: ' + playerTotal)
    console.log('Dealer total: ' + dealerTotal)
}

//Console logs for testing

console.log('Dealer total: ' + dealerTotal)
console.log('Player total: ' + playerTotal)
console.log(masterDeck)


//need to figure out Aces
//need to set up my UI/CSS

//display the player total and the dealer total live 
//need to boot up next round after player stays and winner is declared. could be with a button or something automated
//flip the hidden card at the right times
//DRY out the code. Made just a dealToPlayer and dealToDealer function to fire so I'm not repeating the .pops and total updates all over the place.