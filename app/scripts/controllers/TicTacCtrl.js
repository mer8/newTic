'use strict';

angular.module('newTicApp')
  .controller('TicTacCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

// function TicTacCtrl($scope, angularFire){


// $scope.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
//   [{value:''}, {value:''}, {value:''}],
//   [{value:''}, {value:''}, {value:''}]];

  $scope.winmessage = "";

	var database = new Firebase("https://my-maintic-mer8.firebaseio.com/room/");
	// BINDING TO FIREBASE
	//$scope.games = [];
	//$scope.queue = {};



	$scope.room={};

//var games = new Firebase("https://my-maintic-mer8.firebaseio.com/games");
//angularFire(games, $scope, "games").then(function () {  


//var queue = new Firebase("https://my-maintic-mer8.firebaseio.com/queue");
//angularFire(queue, $scope, "games").then(function () {    blah blah all that stuff like before.... end paren at end ***move down***


	var promise = angularFire(database, $scope, "room");

promise.then( function() {
// ***pick up here*** 
//if ($scope.room.gameId == undefined) {
	//console.log("I'm player 1");
	//$scope.player = "p1";
	//var newGame = {
		//board: ["","",""],
		//turn: 'p1',
		//win: false'
		//turnCount:0
//};

//$scope.gameID = $scope.games.push(newGame) - 1;
//$scope.queue.gameId = $scope.gameId;
//console.log("Player 1's game is: " + $scope.gameId);

//CREATE GAME



//} else {
		//console.log("I'm player 2");
		//$scope.player = "p2";

//$scope.gameId = $scope.queue.gameId;

		

//READ GAME ID FROM QUEUE

//$scope.queue = {};
//console.log
//}
//});

	$scope.room={
	repeatTicBoard: [[{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}]],
	  playerTurn: 1,
	  hasWon: false,
};



  // angularFire(database, $scope, "repeatTicBoard");
//you need to add "games" into where "repeatTicBoard" and then {an object, which is your game*}

  $scope.findImg = function(cell) { 
		
		switch(cell.value)
		{
			case "X":
			return "../../images/cat2pic.gif";
			case "O":
			return "../../images/typingcat.gif";
			case "":
			return "../../images/1x1.png";
		}
	};

	$scope.clickSquare = function(cell) {
		if(cell.value != "")
			return;




		if($scope.room.playerTurn % 2 == 1) 
			cell.value = "X";
		else 
			cell.value = "O";

++$scope.room.playerTurn;

var hasWon = false;

 	for(var c=0;c<=2;++c) {
// **This is for row and column wins**

 	if ($scope.room.repeatTicBoard[0][c].value == $scope.room.repeatTicBoard[1][c].value && 
 		$scope.room.repeatTicBoard[1][c].value == $scope.room.repeatTicBoard[2][c].value && 
 		$scope.room.repeatTicBoard[0][c].value != "")
 		{
 			$scope.winmessage = ($scope.room.repeatTicBoard[0][c].value +" won in column " + c);
 		reset();
 		$scope.room.hasWon = true;
 		}


 	if ($scope.room.repeatTicBoard[c][0].value == $scope.room.repeatTicBoard[c][1].value && 
 		$scope.room.repeatTicBoard[c][1].value == $scope.room.repeatTicBoard[c][2].value && 
 		$scope.room.repeatTicBoard[c][0].value != "")
 		{
 			$scope.winmessage = ($scope.room.repeatTicBoard[c][0].value +" won in row " + c);
 		reset();
 		$scope.room.hasWon = true;
 		}


 }

 // **This is for diagonal wins**

  	if ($scope.room.repeatTicBoard[0][0].value == $scope.room.repeatTicBoard[1][1].value &&
 		$scope.room.repeatTicBoard[1][1].value == $scope.room.repeatTicBoard[2][2].value &&
 		$scope.room.repeatTicBoard[2][2].value != "")
 		{
 			$scope.winmessage = ($scope.room.repeatTicBoard[2][2].value +" won in diag " + c);
 		reset();
 		$scope.room.hasWon = true;
 		}

 	if ($scope.room.repeatTicBoard[0][2].value == $scope.room.repeatTicBoard[1][1].value &&
 		$scope.room.repeatTicBoard[1][1].value == $scope.room.repeatTicBoard[2][0].value &&
 		$scope.room.repeatTicBoard[2][0].value != "")
 		{
 			$scope.winmessage = ($scope.room.repeatTicBoard[2][0].value +" won in diag " + c);
 		reset();
 		$scope.room.hasWon = true;
 		}

		
	if($scope.room.playerTurn==10){
		$scope.winmessage = ("No winners!");
		reset();
		$scope.room.hasWon = true;
		}
		

	function reset() {
		$scope.room.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
			[{value:''}, {value:''}, {value:''}],
			[{value:''}, {value:''}, {value:''}]];

	  	$scope.room.playerTurn = 1;
	  	var hasWon = false;
		};
	






	}



});

}]);





// if(this.repeatTicBoard[0][0] == "<img src='../../images/cat2pic.gif' />" &&
// 	this.repeatTicBoard[0][1]



	 
// for(c=0;c<=2;++c) {


// // **This is for row and column wins**

//  	if (repeatTicBoard.value[0][c] == this.repeatTicBoard[1][c] && 
//  		this.repeatTicBoard[1][c] == this.repeatTicBoard[2][c] && 
//  		this.repeatTicBoard[0][c] != "")
//  		{
//  			alert(this.repeatTicBoard[0][c] +" won in column " + c);
//  		location.reload();
//  		}


//  	if (this.repeatTicBoard[c][0] == this.repeatTicBoard[c][1] && 
//  		this.repeatTicBoard[c][1] == this.repeatTicBoard[c][2] && 
//  		this.repeatTicBoard[c][0] != "")
//  		{
//  			alert(this.repeatTicBoard[c][0] +" won in row " + c);
//  		location.reload();
//  		}


//  }

//  // **This is for diagonal wins**

//   	if (this.repeatTicBoard[0][0] == this.repeatTicBoard[1][1] &&
//  		this.repeatTicBoard[1][1] == this.repeatTicBoard[2][2] &&
//  		this.repeatTicBoard[2][2] != "")
//  		{
//  			alert(this.repeatTicBoard[2][2] +" won in diag " + c);
//  		location.reload();
//  		}

//  	if (this.repeatTicBoard[0][2] == this.repeatTicBoard[1][1] &&
//  		this.repeatTicBoard[1][1] == this.repeatTicBoard[2][0] &&
//  		this.repeatTicBoard[2][0] != "")
//  		{
//  			alert(this.repeatTicBoard[2][0] +" won in diag " + c);
//  		location.reload();
//  		}















