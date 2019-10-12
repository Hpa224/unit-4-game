
$(document).ready(function() {

// Random number generator
function randomnumbers (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
    };

// Variables and counters
let goalnumber = randomnumbers (19, 120);
let crystal1= randomnumbers(1,12);
let crystal2 = randomnumbers (1,12);
let crystal3 = randomnumbers (1,12);
let crystal4 = randomnumbers (1,12);
let totalscore = 0; 
let wins = 0;
let losses = 0;
let gamestatus = true;


// Buttons
let crystalbutton1 = $("#red");
let crystalbutton2 = $("#yellow");
let crystalbutton3 = $("#blue");
let crystalbutton4 = $("#green");

// For debuggin
// console.log("Red: " + crystal1);
// console.log("Yellow: " + crystal2);
// console.log("Blue: " + crystal3);
// console.log("Green: " + crystal4);

// Setting up counters
$("#winnumber").html(goalnumber);
$("#score").text(totalscore);
$("#winsnum").text("Wins: " + wins);
$("#lossesnum").text("Losses: " + losses);

// Win/loss functions
function win () {
    if (totalscore === goalnumber) {
    gamestatus = false;
    $("#winorlose").text("You Win!!");

    wins++;
    $("#winsnum").text("Wins: " + wins);
    $("#otherdiv").html("<p>Use the pym particles to go back in time and go again.</p>");
    $("#otherdiv").append("<img id=pymparticles src=images/pym.png alt=pymparticles>") ;
    $("#pymparticles").click(resetf);
    };
};

function lose() {
    if (totalscore > goalnumber) {
    gamestatus = false;
    $("#winorlose").html("You Lose...");

    losses++;
    $("#lossesnum").html("Losses: " + losses);
    $("#otherdiv").html("<p>Use the pym particles to go back in time and try again.</p>");
    $("#otherdiv").append("<img id=pymparticles src=images/pym.png alt=pymparticles>") ;
    $("#pymparticles").click(resetf);
    };
};

// Newgame function
function resetf() {
    goalnumber = randomnumbers (19, 120);
    crystal1= randomnumbers(1,12);
    crystal2 = randomnumbers (1,12);
    crystal3 = randomnumbers (1,12);
    crystal4 = randomnumbers (1,12);
    totalscore = 0;
    gamestatus = true;

    $("#otherdiv").html("");
    $("#otherdiv").html("") ;
    $("#winnumber").html(goalnumber);
    $("#score").text(totalscore);
    $("#winorlose").html("");
    };


// Button click functions

crystalbutton1.click(function(){
    if (gamestatus===true) {
        totalscore = crystal1 + totalscore;

        $("#score").text(totalscore);

        win();
        lose();
        };
    });

crystalbutton2.click(function(){
    if (gamestatus===true) {
        totalscore = crystal2 + totalscore;

        $("#score").text(totalscore);

        win();
        lose();
        };
    });

crystalbutton3.click(function(){
    if (gamestatus===true) {
        totalscore = crystal3 + totalscore;

        $("#score").text(totalscore);

        win();
        lose();
        };
    });

crystalbutton4.click(function(){
    if (gamestatus===true) {
        totalscore = crystal4 + totalscore;

        $("#score").text(totalscore);

        win();
        lose();
        };
    });


});



