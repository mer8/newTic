'use strict';

angular.module('newTicApp')
  .controller('TicTacCtrl', ['$scope', 'angularFire', function ($scope, angularFire) { //1


  	$scope.games = [];
	$scope.room= {};
  	$scope.winmessage = "";


  	var games = new Firebase("https://my-maintic-mer8.firebaseio.com/games");
    angularFire(games, $scope, "games").then(function () { //2

      var room = new Firebase("https://my-maintic-mer8.firebaseio.com/room");
      angularFire(room, $scope, "room").then(function () { //3.1


      	if ($scope.room.gameId == undefined) { 
      		console.log("I'm player 1");
      		$scope.player = "p1";

          var newGame = {
            board: [[{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}]],
            turn: 'p1',
            waiting: true,
            win: false,
            turnCount: 0
          };

          $scope.gameId = $scope.games.push(newGame) - 1;

          $scope.room.gameId = $scope.gameId;          
          console.log("Player 1's game is: " + $scope.gameId);
      } else {
      	 console.log("I'm player 2");
      	 $scope.player = "p2";
      	 $scope.gameId = $scope.room.gameId;
      	 $scope.room = {};
      	 console.log("Player 2's game is: " + $scope.gameId);

      }











	$scope.room = 
	{
	repeatTicBoard: [[{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}]],
	  playerTurn: 1,
	  hasWon: false,
	};



  






  
		 $scope.findImg = function(cell) 
		  { 
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








	$scope.clickSquare = function(cell) { //3
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
	






	} //3

 }); //3.1

}); //2

}]); //1


