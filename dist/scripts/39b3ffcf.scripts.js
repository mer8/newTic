"use strict";angular.module("newTicApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"TicTacCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newTicApp").controller("TicTacCtrl",["$scope","angularFire",function(a,b){a.games=[],a.room={},a.winmessage="";var c=new Firebase("https://my-maintic-mer8.firebaseio.com/games");b(c,a,"games").then(function(){var c=new Firebase("https://my-maintic-mer8.firebaseio.com/room");b(c,a,"room").then(function(){if(void 0==a.room.gameId){console.log("I'm player 1"),a.player="p1";var b={board:[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],turn:"p1",waiting:!0,hasWon:!1,playerTurn:1};a.gameId=a.games.push(b)-1,a.room.gameId=a.gameId,console.log("Player 1's game is: "+a.gameId)}else console.log("I'm player 2"),a.player="p2",a.gameId=a.room.gameId,a.room={},console.log("Player 2's game is: "+a.gameId);a.room={repeatTicBoard:[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],playerTurn:1,hasWon:!1},a.findImg=function(a){switch(a.value){case"X":return"../../images/cat2pic.gif";case"O":return"../../images/typingcat.gif";case"":return"../../images/1x1.png"}},a.clickSquare=function(b){function c(){a.room.repeatTicBoard=[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],a.room.playerTurn=1}if(""==b.value){b.value=1==a.room.playerTurn%2?"X":"O",++a.room.playerTurn;for(var d=0;2>=d;++d)a.room.repeatTicBoard[0][d].value==a.room.repeatTicBoard[1][d].value&&a.room.repeatTicBoard[1][d].value==a.room.repeatTicBoard[2][d].value&&""!=a.room.repeatTicBoard[0][d].value&&(a.winmessage=a.room.repeatTicBoard[0][d].value+" won in column "+d,c(),a.room.hasWon=!0),a.room.repeatTicBoard[d][0].value==a.room.repeatTicBoard[d][1].value&&a.room.repeatTicBoard[d][1].value==a.room.repeatTicBoard[d][2].value&&""!=a.room.repeatTicBoard[d][0].value&&(a.winmessage=a.room.repeatTicBoard[d][0].value+" won in row "+d,c(),a.room.hasWon=!0);a.room.repeatTicBoard[0][0].value==a.room.repeatTicBoard[1][1].value&&a.room.repeatTicBoard[1][1].value==a.room.repeatTicBoard[2][2].value&&""!=a.room.repeatTicBoard[2][2].value&&(a.winmessage=a.room.repeatTicBoard[2][2].value+" won in diag "+d,c(),a.room.hasWon=!0),a.room.repeatTicBoard[0][2].value==a.room.repeatTicBoard[1][1].value&&a.room.repeatTicBoard[1][1].value==a.room.repeatTicBoard[2][0].value&&""!=a.room.repeatTicBoard[2][0].value&&(a.winmessage=a.room.repeatTicBoard[2][0].value+" won in diag "+d,c(),a.room.hasWon=!0),10==a.room.playerTurn&&(a.winmessage="No winners!",c(),a.room.hasWon=!0)}},a.playMove=function(b){a.games[a.gameId].waiting||a.player!=a.games[a.gameId].turn||(b.value="p1"==a.player?"X":"O",a.games[a.gameId].turn="p1"==a.games[a.gameId].turn?"p2":"p1")}})})}]);