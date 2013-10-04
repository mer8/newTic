function TicTacCtrl($scope){
	
$scope.repeatTicBoard = [['','',''],['','',''],['','','']];


var playerTurn = 1;

$scope.clickSquare = function(row,column) {
		
		if(playerTurn % 2 == 1) 
		// {
			event.target.innerHTML = "<img src='../../images/cat2pic.gif' />";
		// 	$scope.repeatTicBoard[row][column] = "Purple Cat"
		// }
		else 
		// {
			event.target.innerHTML = "<img src='../../images/typingcat.gif' />";
		// 	$scope.repeatTicBoard[row][column] = "White Cat"
		// }
		++playerTurn;



	 
for(c=0;c<=2;++c) {


// **This is for row and column wins**

 	if (this.repeatTicBoard[0][c] == this.repeatTicBoard[1][c] && 
 		this.repeatTicBoard[1][c] == this.repeatTicBoard[2][c] && 
 		this.repeatTicBoard[0][c] != "")
 		{
 			alert(this.repeatTicBoard[0][c] +" won in column " + c);
 		location.reload();
 		}


 	if (this.repeatTicBoard[c][0] == this.repeatTicBoard[c][1] && 
 		this.repeatTicBoard[c][1] == this.repeatTicBoard[c][2] && 
 		this.repeatTicBoard[c][0] != "")
 		{
 			alert(this.repeatTicBoard[c][0] +" won in row " + c);
 		location.reload();
 		}


 }

 // **This is for diagonal wins**

  	if (this.repeatTicBoard[0][0] == this.repeatTicBoard[1][1] &&
 		this.repeatTicBoard[1][1] == this.repeatTicBoard[2][2] &&
 		this.repeatTicBoard[2][2] != "")
 		{
 			alert(this.repeatTicBoard[2][2] +" won in diag " + c);
 		location.reload();
 		}

 	if (this.repeatTicBoard[0][2] == this.repeatTicBoard[1][1] &&
 		this.repeatTicBoard[1][1] == this.repeatTicBoard[2][0] &&
 		this.repeatTicBoard[2][0] != "")
 		{
 			alert(this.repeatTicBoard[2][0] +" won in diag " + c);
 		location.reload();
 		}






};



}




