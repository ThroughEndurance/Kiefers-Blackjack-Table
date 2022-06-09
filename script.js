//Setting some variables and begining of game values.

let playerTotal = 0;    
let dealerTotal = 0;
let playAllowed = false;
let playerAces = 0;
let dealerAces = 0;

//This builds the deck into an array titled masterDeck.

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

// shuffles the deck using the Fisher-Yates shuffle https://en.wikipedia.org/wiki/Fisher-Yates_shuffle upon loading the window //

const shuffle = function shuffleDeck(){
    for(let i = 0; i < 52; i++){
        let newCardIndex = Math.floor(Math.random() * 52);
        let randomCard = masterDeck[i];
        masterDeck[i] = masterDeck[newCardIndex];
        masterDeck[newCardIndex] = randomCard;
    }
}

window.onload = shuffle()

//Deal button functions are below. Each "group" of code deals a card using pop, and then renders the corresponding card to the page, while tracking the player/dealer totals and ace counts.
//In short, the deal button deals two cards to the player and dealer.

document.getElementById("deal").addEventListener("click", dealCards)

function dealCards(){
    playAllowed = true;
        
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
        }
}                    

//Hit button functions. The player get another card and the playerTotal and playerAces are updated. If player busts stay function runs.

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
}

//Stay button functions. Performs the dealers turn, drawing cards until the dealer busts or is over 16.
//Also includes win conditions that displays the game result after dealer completes his turn.

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
        conclusion = "Push...";
    }
    else if (playerTotal > dealerTotal) {
        conclusion = "Player Wins!";
    }
    else if (playerTotal < dealerTotal) {
        conclusion = "Player Loses!"
    }

    document.getElementById("winOrLose").innerText = conclusion;
}

