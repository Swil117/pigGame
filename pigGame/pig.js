
var scores, roundScore, gamePlaying, lastDice, winningScore;

function startGame() {
  init();
}

function rollDice() {
  if (gamePlaying) {

    var dice = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    var diceDOM = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice2");

    diceDOM.style.display = "block";
    diceDOM2.style.display = "block";

    diceDOM.src ="assets/dice-" + dice + ".svg";
    diceDOM2.src = "assets/dice-" + dice2 + ".svg";

    if (dice !== 1 && dice2 !== 1) {
      roundScore += dice + dice2;
      $(".active").find(".player-current-score").text(roundScore);
    } 
    else if (dice == 1 && dice2 == 1) {
      $(".active").find(".player-score").text(0);
      $('.player-current-score').html("0");
      nextPlayer();
    }
    else {
      $('.player-current-score').html("0");
      nextPlayer();
    }
    lastDice = dice;
  }
};

function holdScore() {
  if (gamePlaying) {
    // get the current active panel and find the child divs that match
    scores[$(".active").attr("id")] = ($(".active").attr("id") in scores) ? scores[$(".active").attr("id")] + roundScore : roundScore;
    $(".active").find(".player-score").text(scores[$(".active").attr("id")]);
    var winningScore = 100;
    $('.player-current-score').html("0");
    if (scores[$(".active").attr("id")] === winningScore) {
      $(".active").find(".player-name").text("Winner!");
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".dice2").style.display = "none";
      
      $(".active").addClass("winner");
      $(".active").removeClass("active");
      gamePlaying = false;
    } else {
      $('.player-current-score').html("0");
      nextPlayer();
    }
  }
};

function nextPlayer() {
	if ($(".active").next(".player").length !== 0 && $(".active").next(".player").hasClass("live")){
		$(".active").next(".player").toggleClass("active");
		$(".active").first().toggleClass("active");
	} else {
		$(".active").first().toggleClass("active");
		$(".player").first().toggleClass("active");
	}
	roundScore = 0;
};

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
 winningScore = 100;

  scores = {};
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice2").style.display = "none";

  $('#score-0').html("0");
  $('#score-1').html("0");
  $('#score-2').html("0");
  $('#score-3').html("0");
  $('#score-4').html("0");
  $('#score-5').html("0");

  $('#current-0').html("0");
  $('#current-1').html("0");
  $('#current-2').html("0");
  $('#current-3').html("0");
  $('#current-4').html("0");
  $('#current-5').html("0");

  $('#player-1').html("Player 1") ;
  $('#player-2').html("Player 2") ;
  $('#player-3').html("Player 3") ;
  $('#player-4').html("Player 4") ;
  $('#player-5').html("Player 5") ;
  $('#player-6').html("Player 6") ;


  document.querySelector("#player-1-panel").classList.remove("winner");
  document.querySelector("#player-2-panel").classList.remove("winner");

  document.querySelector("#player-2-panel").classList.remove("winner");
  document.querySelector("#player-3-panel").classList.remove("winner");
  document.querySelector("#player-4-panel").classList.remove("winner");
  document.querySelector("#player-5-panel").classList.remove("winner");

  document.querySelector("#player-1-panel").classList.remove("active");
  document.querySelector("#player-2-panel").classList.remove("active");
  
  document.querySelector("#player-3-panel").classList.remove("active");
  document.querySelector("#player-4-panel").classList.remove("active");
  document.querySelector("#player-5-panel").classList.remove("active");
  document.querySelector("#player-6-panel").classList.remove("active");

  document.querySelector("#player-1-panel").classList.add("active");

};

function setActive()
{ 
  if($('#activeBtnP3').live("click", function() {
    $('#player-3-panel').addClass("live");
    $('#activeBtnP3').toggle();
  }));
  if($('#activeBtnP4').live("click", function() {
    $('#player-4-panel').addClass("live");
    $('#activeBtnP4').toggle();
  }));
  if($('#activeBtnP5').live("click", function() {
    $('#player-5-panel').addClass("live");
    $('#activeBtnP5').toggle();
  }));
  if($('#activeBtnP6').live("click", function() {
    $('#player-6-panel').addClass("live");
    $('#activeBtnP6').toggle();
  }));
};
