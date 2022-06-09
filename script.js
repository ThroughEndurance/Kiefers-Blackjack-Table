let playerTotal = 0;    
let dealerTotal = 0;
let canHit = true;
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


            faceDown = masterDeck.pop();
            dealerTotal += faceDown.value;
        
            playerCard = masterDeck.pop()
            playerTotal += playerCard.value;

            nextDealerCard = masterDeck.pop();
            dealerTotal += nextDealerCard.value;

            console.log('player total: ' + playerTotal)
            console.log('dealer total: ' + dealerTotal)
        }
}                    

//Hit button functions. Need to add what happens player busts here: end round, player loses, only clickable options should be new round etc.

document.getElementById("hit").addEventListener("click", hit)

function hit(){
    if (!canHit){
        return;
    }
        if (playerTotal < 21){
            playerCard = masterDeck.pop();
            playerTotal += playerCard.value;
            
        } 
    console.log('Player total: '+ playerTotal);
}

//Stay button functions. Also activates/runs the dealers turn and following win conditions.

document.getElementById("stay").addEventListener("click", stay)

function stay(){

    canHit = false;
    if (playerTotal < 22){
        while (dealerTotal < 17){
        let nextDealerCard = masterDeck.pop();
        dealerTotal += nextDealerCard.value;
        }
}

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


//working notes: need to prevent player from hitting after clicking stay - maybe remove button? nothing seems to work move past this and come back later

//need to run the shuffle function at somepoint. when the game is loaded or upon clicking a "new game" button.


//longer term: need to set up my UI/CSS
//need to have cards visually displayed. Right now everything is run in the background.


//display the player total and the dealer total live 
//need to boot up next round after player stays and winner is declared. could be with a button or something automated
//flip the hidden card at the right times
//DRY out the code. Made just a dealToPlayer and dealToDealer function to fire so I'm not repeating the .pops and total updates all over the place.