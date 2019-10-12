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
let gameactive = true;
let wins = 0;
let losses = 0;

// Buttons
let crystalbutton1 = $("#red");
let crystalbutton2 = $("#yellow");
let crystalbutton3 = $("#blue");
let crystalbutton4 = $("#green");
let resetbutton = $("#pymparticles")

// For debuggin
console.log("Red: " + crystal1);
console.log("Yellow: " + crystal2);
console.log("Blue: " + crystal3);
console.log("Green: " + crystal4);

// Setting up counters
$("#winnumber").html(goalnumber);
$("#score").text(totalscore);
$("#winsnum").text("Wins: " + wins)
$("#lossesnum").text("Losses: " + losses)

// Win/loss functions
function win () {
    if (totalscore === goalnumber) {
    $("#winorlose").text("You Win!!")

    wins++
    $("#winsnum").text("Wins: " + wins)

    newgame() 
    }
    
};

function lose() {
    if (totalscore > goalnumber) {
    gameactive = false;
    $("#winorlose").text("You Lose...");

    losses++;
    $("#lossesnum").text("Losses: " + losses);
    $("#otherdiv").html("<p>Use the pym particles to go back in time and try again.</p>");
    $("#otherdiv").html("<img id=pymparticles src=images/pym.png alt=pymparticles>") ;
    $("#pymparticles").click(resetbutton)
    }
};



// Newgame function
    function newgame() {
    goalnumber = randomnumbers (19, 120);
    crystal1= randomnumbers(1,12);
    crystal2 = randomnumbers (1,12);
    crystal3 = randomnumbers (1,12);
    crystal4 = randomnumbers (1,12);
    totalscore = 0;

    $("#winnumber").html(goalnumber);
    $("#score").text(totalscore);
    };


// Button click functions
    

    crystalbutton1.click(function(){
        if (gameactive===true) {
            
        
        totalscore = crystal1 + totalscore;

        $("#score").text(totalscore)

        win()
        lose()}
    });
    

    crystalbutton2.click(function(){
        totalscore = crystal2 + totalscore;

        $("#score").text(totalscore)

        win()
        lose()
    });

    crystalbutton3.click(function(){
        totalscore = crystal3 + totalscore;

        $("#score").text(totalscore)

        win()
        lose()
    });

    crystalbutton4.click(function(){
        totalscore = crystal4 + totalscore;
        
        $("#score").text(totalscore)

        win()
        lose()

    });









    // why does this not work?
    // crystalbutton4.click(function(){
    //  $("#score").text(crystal1 + totalscore)
    //  });


    // SCRAPPED IDEA
    // for (let i = 1; i === 1; i++) {
    //     $("#otherdiv").prepend("<p>Use the pym particles to go back in time and try again.</p>")
    //     $("#otherdiv").prepend("<img id=pymparticles src=images/pym.png alt=pymparticles>")  
    //             pymparticles.click(function resetb () {
    //                 goalnumber = randomnumbers (19, 120);
    //                 crystal1= randomnumbers(1,12);
    //                 crystal2 = randomnumbers (1,12);
    //                 crystal3 = randomnumbers (1,12);
    //                 crystal4 = randomnumbers (1,12);
    //                 totalscore = 0

    //                 $("#winnumber").html(goalnumber);
    //                 $("#score").text(totalscore);


    //             })
    // //   }
    
});


