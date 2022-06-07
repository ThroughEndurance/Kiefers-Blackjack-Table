let freshDeck = [];   //I'll want this to update with each new shuffle of the deck... I might not need this.
let activeDeck = [];    //I'll want this to track the cards left in the deck/the cards that have been used so we don't get duplicates (use push/pop???)
let playerTotal = 0;    //I'll want this update on the fly as cards are dealt/when the player hits  (use reduce on player's array???)
let dealerTotal = 0;    //I want this to update on the fly as the dealer gets cards (use reduce on dealers array????)
let playerArray = [];   //I want this to track the players hand "behind the scenes"
let dealerArray = [];   //I wan tthis to track the dealer's hand "behind the scenes"

let deck = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'] //An array with my a deck of cards (in order) in it. I'm not sure if this is the way or not yet but I'm starting with this to get going.

const cardValue = 0; //I want to give all the cards in the deck a numueral value to track the math of the game.

const hit = function(){
    //something that allows me to get the next card from the deck.
};

const stay = function(){
    //something that ends the player's turn and initiates the dealers turn
};


//shuffles the deck using the Fisher-Yates shuffle https://en.wikipedia.org/wiki/Fisher-Yates_shuffle //

const shuffle = function shuffleDeck(){
    for(let i = 0; i < 51; i++){
        let newCardIndex = Math.floor(Math.random() * 51);
        let randomCard = deck[i];
        deck[i] = deck[newCardIndex];
        deck[newCardIndex] = randomCard;
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


console.log(deck)