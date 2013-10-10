

function TicTacCtrl($scope, angularFire){


$scope.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}]];

  $scope.winmessage = "";

	var database = new Firebase("https://my-maintic-mer8.firebaseio.com/repeatTicBoard");
	var promise = angularFire(database, $scope, "repeatTicBoard");

promise.then( function() {
	$scope.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}]];
});

var playerTurn = 1;

  angularFire(database, $scope, "repeatTicBoard");
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




		if(playerTurn % 2 == 1) 
			cell.value = "X";
		else 
			cell.value = "O";

++playerTurn;

var hasWon = false;

 	for(c=0;c<=2;++c)


{
// **This is for row and column wins**

 	if ($scope.repeatTicBoard[0][c].value == $scope.repeatTicBoard[1][c].value && 
 		$scope.repeatTicBoard[1][c].value == $scope.repeatTicBoard[2][c].value && 
 		$scope.repeatTicBoard[0][c].value != "")
 		{
 			$scope.winmessage = ($scope.repeatTicBoard[0][c].value +" won in column " + c);
 		reset();
 		hasWon = true;
 		}


 	if ($scope.repeatTicBoard[c][0].value == $scope.repeatTicBoard[c][1].value && 
 		$scope.repeatTicBoard[c][1].value == $scope.repeatTicBoard[c][2].value && 
 		$scope.repeatTicBoard[c][0].value != "")
 		{
 			$scope.winmessage = ($scope.repeatTicBoard[c][0].value +" won in row " + c);
 		reset();
 		hasWon = true;
 		}


 }

 // **This is for diagonal wins**

  	if ($scope.repeatTicBoard[0][0].value == $scope.repeatTicBoard[1][1].value &&
 		$scope.repeatTicBoard[1][1].value == $scope.repeatTicBoard[2][2].value &&
 		$scope.repeatTicBoard[2][2].value != "")
 		{
 			$scope.winmessage = ($scope.repeatTicBoard[2][2].value +" won in diag " + c);
 		reset();
 		hasWon = true;
 		}

 	if ($scope.repeatTicBoard[0][2].value == $scope.repeatTicBoard[1][1].value &&
 		$scope.repeatTicBoard[1][1].value == $scope.repeatTicBoard[2][0].value &&
 		$scope.repeatTicBoard[2][0].value != "")
 		{
 			$scope.winmessage = ($scope.repeatTicBoard[2][0].value +" won in diag " + c);
 		reset();
 		hasWon = true;
 		}

		
	if(playerTurn==10){
		$scope.winmessage = ("No winners!");
		reset();
		hasWon = true;
		}
		

	function reset() {
			$scope.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}],
	  [{value:''}, {value:''}, {value:''}]];
		};
	

	}




};





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















