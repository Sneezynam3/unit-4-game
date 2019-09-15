var wins = 0;
var losses = 0
var totalScore = 0;
var buttons = [];


// set button backgrounds to images

var randomNumber = (Math.round(Math.random() * 101) + 19);
console.log(randomNumber)
$(".targetScore").html(randomNumber);


function populate_btns(arr) {
    $("#btnArea").empty()
    for (i = 1; i <= 4; i++) {
        var btn = Math.ceil(Math.random() * 12);
        arr.push(btn);
        console.log(btn);
        var newBtn = $("<button>").attr("class", "crystalBtn");
        newImg = $("<img>").attr("src", "./assets/images/img" + i + ".jpg");
        newBtn.attr("id", "btn" + i);
        newBtn.append(newImg);
        $("#btnArea").append(newBtn);
    }
};

// populate_btns(buttons);
$("#btnArea").on("click", ".crystalBtn", function () {
    var userClick = $(this).attr("id")
    if (userClick === "btn1") {
        totalScore += buttons[0];
        roundCheck();
    } else if (userClick === "btn2") {
        totalScore += buttons [1];
        roundCheck();
    } else if (userClick === "btn3") {
        totalScore += buttons [2];
        roundCheck();
    } else if (userClick === "btn4") {
        totalScore += buttons [3]
        roundCheck();
    };
    console.log(totalScore);
    $(".totalScore").html(totalScore);
});

function roundCheck() {
    if (totalScore === randomNumber) {
        wins++;
        reset();
    } else if (totalScore > randomNumber) {
        losses++;
        reset();
    };
};
// $(".targetScore").html(randomNumber);
// $(".totalScore").html(addScore);



function reset() {
    buttons = [];
    randomNumber = (Math.round(Math.random() * 101) + 19);
    totalScore = 0;
    populate_btns(buttons);
    console.log(randomNumber);
    $("#Wins").text(wins)
    $("#Losses").text(losses)
    $(".targetScore").html(randomNumber);
    $(".totalScore").html(totalScore);
}
reset();

