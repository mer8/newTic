
// /*function navCells()
// */ 
































// var cellArray = [["","",""],["","",""],["","",""]];
	


// // var turn =1;

// // function playBox()
// // {

// // //*****Switches whether its an X or and O*****
// // if(event.target.innerHTML == "")  {

// // 		switch(turn) {
// // 		case 1:
// // 		event.target.innerHTML = "<img src='cat2pic.gif' />";
// // 		event.target.value = 1;
// // 		break;
// // 		case 2:
// // 		event.target.innerHTML = "<img src='typingcat.gif' />";
// // 		event.target.value = -1;
// // 		break;
// // 		case 3:
// // 		event.target.innerHTML = "<img src='cat2pic.gif' />";
// // 		event.target.value = 1;
// // 		break;
// // 		case 4:
// // 		event.target.innerHTML = "<img src='typingcat.gif' />";
// // 		event.target.value = -1;
// // 		break;
// // 		case 5:
// // 		event.target.innerHTML = "<img src='cat2pic.gif' />";
// // 		event.target.value = 1;
// // 		break;
// // 		case 6:
// // 		event.target.innerHTML = "<img src='typingcat.gif' />";
// // 		event.target.value = -1;
// // 		break;
// // 		case 7:
// // 		event.target.innerHTML = "<img src='cat2pic.gif' />";
// // 		event.target.value = 1;
// // 		break;
// // 		case 8:
// // 		event.target.innerHTML = "<img src='typingcat.gif' />";
// // 		event.target.value = -1;
// // 		break;
// // 		case 9:
// // 		event.target.innerHTML = "<img src='cat2pic.gif' />";
// // 		event.target.value = 1;
// // 		break;
// // 		} 
// // 		turn = turn+1;

// // 	} 
















// // for(r=0;r<=2;++r)
// // {	
// // 	for(c=0;c<=2;++c)
// // {
// // 		cellArray[r][c] =
// // 			document.getElementById("box"+(r+1)+"_"+(c+1)).innerHTML;
// //  		}

// //  	}


// //  	for(c=0;c<=2;++c)


// {
// // **This is for row and column wins**

//  	if (cellArray[0][c] == cellArray[1][c] && 
//  		cellArray[1][c] == cellArray[2][c] && 
//  		cellArray[0][c] != "")
//  		{
//  			alert(cellArray[0][c] +" won in column" + c);
//  		location.reload();
//  		}


//  	if (cellArray[c][0] == cellArray[c][1] && 
//  		cellArray[c][1] == cellArray[c][2] && 
//  		cellArray[c][0] != "")
//  		{
//  			alert(cellArray[c][0] +" won in row" + c);
//  		location.reload();
//  		}


//  }

//  // **This is for diagonal wins**

//   	if (cellArray[0][0] == cellArray[1][1] &&
//  		cellArray[1][1] == cellArray[2][2] &&
//  		cellArray[2][2] != "")
//  		{
//  			alert(cellArray[2][2] +" won in diag" + c);
//  		location.reload();
//  		}

//  	if (cellArray[0][2] == cellArray[1][1] &&
//  		cellArray[1][1] == cellArray[2][0] &&
//  		cellArray[2][0] != "")
//  		{
//  			alert(cellArray[2][0] +" won in diag" + c);
//  		location.reload();
//  		}



// }













