var targetNumber = 19;
var wins = 0;
var losses = 0
var totalScore = 0;
var buttons = [];
    

// The player will be shown a random number at the start of the game.
var randomNumber = (Math.round(Math.random() * 101) + 19);
console.log(randomNumber)
$(".targetScore").html(randomNumber);

// Your game will hide this amount until the player clicks a crystal.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// When they do click one, update the player's score counter.
function populate_btns (arr) {
for (i = 1; i <= 4; i++) {
    var btn = Math.ceil(Math.random() * 12);
    arr.push(btn );
    var newBtn = $("<button>").attr("class", "crystalBtn");
    var newImg = $("<img>").attr("src", "img" + i + ".jpg");
    newBtn.attr("id", "btn" + "i");
    newBtn.append(newImg);
    $("#btnArea").append(newBtn);
    }
};
populate_btns(buttons);
$("#btnArea").on ("click", ".crystalBtn", function() {})
console.log("clicked")


function reset (){
   var buttons = [];
   var targetNumber;
};


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.


// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.




// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


