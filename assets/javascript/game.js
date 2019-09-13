var targetNumber = 19;
var wins = 0;
var losses = 0
var totalScore = 0;
var buttons = [];


var randomNumber = (Math.round(Math.random() * 101) + 19);
console.log(randomNumber)
$(".targetScore").html(randomNumber);


function populate_btns(arr) {
    for (i = 1; i <= 4; i++) {
        var btn = Math.ceil(Math.random() * 12);
        arr.push(btn);
        console.log(btn);
        var newBtn = $("<button>").attr("class", "crystalBtn");
        newImg = $("<img>").attr("src", "./assets/images/img" + i + ".jpg");
        newBtn.attr("id", "btn" + "i");
        newBtn.append(newImg);
        $("#btnArea").append(newBtn);
    }
};


populate_btns(buttons);
$("#btnArea").on("click", ".crystalBtn", function () { })


.on("click", function addScore() {
    

}

$(".targetScore").html(randomNumber);
$(".totalScore").html(addScore);

$(".crystal-image").on("click", function() {






if (totalScore === targetNumber) {
    wins++;
} else if (totalScore > targetNumber) {
    losses++;
};


function reset() {
    var buttons = [];
    var targetNumber;
    var totalScore = 0;
};


