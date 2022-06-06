let newDeck = [];   //I'll want this to update with each new shuffle of the deck
let activeDeck = [];    //I'll want this to track the cards left in the deck/the cards that have been used so we don't get duplicates (use push/pop???)
let playerTotal = 0;    //I'll want this update on the fly as cards are dealt/when the player hits  (use reduce on player's array???)
let dealerTotal = 0;    //I want this to update on the fly as the dealer gets cards (use reduce on dealers array????)
let playerArray = [];   //I want this to track the players hand "behind the scenes"
let dealerArray = [];   //I wan tthis to track the dealer's hand "behind the scenes"

const cardValue = 0; //I want to give all the cards in the deck a numueral value to track the math of the game.





const hit = function(){
    //something that allows me to get the next card from the deck.
};


const stay = function(){
    //something that ends the player's turn and initiates the dealers turn
};


const shuffle = function(){
    //shuffles the deck at the beginning of the game and when the original deck runs out of cards
};

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


