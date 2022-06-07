let freshDeck = [];   //I'll want this to update with each new shuffle of the deck... I might not need this.
let activeDeck = [];    //I'll want this to track the cards left in the deck/the cards that have been used so we don't get duplicates? Maybe not needed it looks like (use push/pop???)
let playerTotal = 0;    //I'll want this update on the fly as cards are dealt/when the player hits  (use reduce on player's array???)
let dealerTotal = 0;    //I want this to update on the fly as the dealer gets cards (use reduce on dealers array????)
let playerArray = [];   //I want this to track the players hand "behind the scenes"
let dealerArray = [];   //I wan tthis to track the dealer's hand "behind the scenes"

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

//An array with my a deck of cards (in order) in it. I'm not sure if this is the way or not yet but I'm starting with this to get going.

// const cardValue = 0; //I want to give all the cards in the deck a numueral value to track the math of the game. Also probably not needed....




//shuffles the deck using the Fisher-Yates shuffle https://en.wikipedia.org/wiki/Fisher-Yates_shuffle //

const shuffle = function shuffleDeck(){
    for(let i = 0; i < 52; i++){
        let newCardIndex = Math.floor(Math.random() * 52);
        let randomCard = masterDeck[i];
        masterDeck[i] = masterDeck[newCardIndex];
        masterDeck[newCardIndex] = randomCard;
    }
}

const dealerTurn = function(){
    //Activates the dealers turn. Draws cards unti the dealer busts or exceeds 16 (stay at anything above 16) 
    //Also include autowinning condition if dealt blackjack.
    //If player busted then dealer shouldn't get any more cards, the player should just lose the round
};

const winCondition = function(){
    //I want this to run and determine the round winner after dealerTurn runs
};

const deal = function(){
    //This function should begin a new round by wiping the cards/counts from the previous round and dealing a new set of cards to the player and dealer
};

document.getElementById("deal").addEventListener("click", dealCards)

function dealCards(){
        if (playerTotal < "1"){
        faceDown = masterDeck.pop();
        dealerTotal += faceDown.value;
        playerCard = masterDeck.pop()
        playerTotal += playerCard.value;
        
        nextDealerCard = masterDeck.pop();
        dealerTotal += nextDealerCard.value;
        
        playerCard = masterDeck.pop()
        playerTotal += playerCard.value;
        console.log('player total: ' + playerTotal)
        console.log('dealer total: ' + dealerTotal)
        }
}                    

//This is for my hit button
document.getElementById("hit").addEventListener("click", hit)

function hit(){
    if (playerTotal < 21){
    playerCard = masterDeck.pop()
    playerTotal += playerCard.value;
    }   
    console.log('Player total: '+ playerTotal)
}


//Here is for my stay button
document.getElementById("stay").addEventListener("click", stay)

function stay(){
    if (playerTotal < 22){
    while (dealerTotal < 17){
        let nextDealerCard = masterDeck.pop();
        dealerTotal += nextDealerCard.value;
    }}
    console.log('Player total: ' + playerTotal)
    console.log('Dealer total: ' + dealerTotal)
}


//logged out part of the function does not work for some reason....


console.log('Dealer total: ' + dealerTotal)
console.log('Player total: ' + playerTotal)
console.log(masterDeck)


//working notes: need to prevent player from hitting after clicking stay - maybe remove button?
//need to then add win conditions after stay and the dealer plays out.
//need an announcment for who wins after the dealer plays their turn.
//need to boot up next round after player stays and winner is declared. could be with a button or something automated
//need to run the shuffle function at somepoint. when the game is loaded or upon clicking a "new game" button.


//longer term: need to set up my UI/CSS
//need to have cards visually displayed. Right now everything is run in the background.