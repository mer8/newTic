function TicTacCtrl($scope){
	
$scope.repeatTicBoard = [[{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}],
  [{value:''}, {value:''}, {value:''}]];


var playerTurn = 1;

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

		if(playerTurn % 2 == 1) 
			cell.value = "X";
		else 
			cell.value = "O";

		++playerTurn;


	};





// if(this.repeatTicBoard[0][0] == "<img src='../../images/cat2pic.gif' />" &&
// 	this.repeatTicBoard[0][1]



	 
// for(c=0;c<=2;++c) {


// // **This is for row and column wins**

//  	if (this.repeatTicBoard[0][c] == this.repeatTicBoard[1][c] && 
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










}




