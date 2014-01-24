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
            hasWon: false,
            playerTurn: 1
          };

          $scope.gameId = $scope.games.push(newGame) - 1;

          $scope.room.gameId = $scope.gameId;          
          console.log("Player 1's game is: " + $scope.gameId);
      } else {
      	 console.log("I'm player 2");
      	 $scope.player = "p2";
      	 $scope.gameId = $scope.room.gameId;
      	 $scope.room = {};
      	 $scope.games[$scope.gameId].waiting = false;
      	 console.log("Player 2's game is: " + $scope.gameId);

      }

      // $scope.$watch('hasWon', function() {
      // 	return hasWon = true;


      // };



	$scope.clickSquare = function(cell) { //3
		if(cell.value != "")
			return;




		if($scope.games[$scope.gameId].playerTurn % 2 == 1) 
			cell.value = "X";
		else 
			cell.value = "O";

++$scope.games[$scope.gameId].playerTurn;

var hasWon = false;

 	for(var c=0;c<=2;++c) {
// **This is for row and column wins**

 	if ($scope.games[$scope.gameId].board[0][c].value == $scope.games[$scope.gameId].board[1][c].value && 
 		$scope.games[$scope.gameId].board[1][c].value == $scope.games[$scope.gameId].board[2][c].value && 
 		$scope.games[$scope.gameId].board[0][c].value != "")
 		{
 			$scope.winmessage = ($scope.games[$scope.gameId].board[0][c].value +" won in column " + c);
 		reset();
 		$scope.games[$scope.gameId].hasWon = true;
 		}


 	if ($scope.games[$scope.gameId].board[c][0].value == $scope.games[$scope.gameId].board[c][1].value && 
 		$scope.games[$scope.gameId].board[c][1].value == $scope.games[$scope.gameId].board[c][2].value && 
 		$scope.games[$scope.gameId].board[c][0].value != "")
 		{
 			$scope.winmessage = ($scope.games[$scope.gameId].board[c][0].value +" won in row " + c);
 		reset();
 		$scope.games[$scope.gameId].hasWon = true;
 		}


 }

 // **This is for diagonal wins**

  	if ($scope.games[$scope.gameId].board[0][0].value == $scope.games[$scope.gameId].board[1][1].value &&
 		$scope.games[$scope.gameId].board[1][1].value == $scope.games[$scope.gameId].board[2][2].value &&
 		$scope.games[$scope.gameId].board[2][2].value != "")
 		{
 			$scope.winmessage = ($scope.games[$scope.gameId].board[2][2].value +" won in diag " + c);
 		reset();
 		$scope.games[$scope.gameId].hasWon = true;
 		}

 	if ($scope.games[$scope.gameId].board[0][2].value == $scope.games[$scope.gameId].board[1][1].value &&
 		$scope.games[$scope.gameId].board[1][1].value == $scope.games[$scope.gameId].board[2][0].value &&
 		$scope.games[$scope.gameId].board[2][0].value != "")
 		{
 			$scope.winmessage = ($scope.games[$scope.gameId].board[2][0].value +" won in diag " + c);
 		reset();
 		$scope.games[$scope.gameId].hasWon = true;
 		}

		
	if($scope.room.playerTurn==10){
		$scope.winmessage = ("No winners!");
		reset();
		$scope.games[$scope.gameId].hasWon = true;
		}
		

	function reset() {
		$scope.games[$scope.gameId].board = [[{value:''}, {value:''}, {value:''}],
			[{value:''}, {value:''}, {value:''}],
			[{value:''}, {value:''}, {value:''}]];

	  	$scope.games[$scope.gameId].playerTurn = 1;
	  	var hasWon = false;
		};


	} //3

// $scope.playMove = function (cell) {
//       if ((!$scope.games[$scope.gameId].waiting) && ($scope.player == $scope.games[$scope.gameId].turn)) {
//         // markCell(cell);
//         if ($scope.player == 'p1') {
//           cell.value = 'X';
//         } else {
//           cell.value = 'O';
//         }
//         // swapPlayers();
//         if ($scope.games[$scope.gameId].turn == 'p1') {
//           $scope.games[$scope.gameId].turn = 'p2';
//         } else {
//           $scope.games[$scope.gameId].turn = 'p1';
//         }
//       }
//     };



 }); //3.1

}); //2

}]); //1


