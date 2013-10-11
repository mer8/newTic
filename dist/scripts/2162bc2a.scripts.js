"use strict";angular.module("newTicApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"TicTacCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newTicApp").controller("TicTacCtrl",["$scope","angularFire",function(a,b){a.games=[],a.room={},a.winmessage="";var c=new Firebase("https://my-maintic-mer8.firebaseio.com/games");b(c,a,"games").then(function(){var c=new Firebase("https://my-maintic-mer8.firebaseio.com/room");b(c,a,"room").then(function(){if(void 0==a.room.gameId){console.log("I'm player 1"),a.player="p1";var b={board:[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],turn:"p1",waiting:!0,hasWon:!1,playerTurn:1};a.gameId=a.games.push(b)-1,a.room.gameId=a.gameId,console.log("Player 1's game is: "+a.gameId)}else console.log("I'm player 2"),a.player="p2",a.gameId=a.room.gameId,a.room={},console.log("Player 2's game is: "+a.gameId);a.clickSquare=function(b){function c(){a.games[a.gameId].board=[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],a.games[a.gameId].playerTurn=1}if(""==b.value){b.value=1==a.games[a.gameId].playerTurn%2?"X":"O",++a.games[a.gameId].playerTurn;for(var d=0;2>=d;++d)a.games[a.gameId].board[0][d].value==a.games[a.gameId].board[1][d].value&&a.games[a.gameId].board[1][d].value==a.games[a.gameId].board[2][d].value&&""!=a.games[a.gameId].board[0][d].value&&(a.winmessage=a.games[a.gameId].board[0][d].value+" won in column "+d,c(),a.games[a.gameId].hasWon=!0),a.games[a.gameId].board[d][0].value==a.games[a.gameId].board[d][1].value&&a.games[a.gameId].board[d][1].value==a.games[a.gameId].board[d][2].value&&""!=a.games[a.gameId].board[d][0].value&&(a.winmessage=a.games[a.gameId].board[d][0].value+" won in row "+d,c(),a.games[a.gameId].hasWon=!0);a.games[a.gameId].board[0][0].value==a.games[a.gameId].board[1][1].value&&a.games[a.gameId].board[1][1].value==a.games[a.gameId].board[2][2].value&&""!=a.games[a.gameId].board[2][2].value&&(a.winmessage=a.games[a.gameId].board[2][2].value+" won in diag "+d,c(),a.games[a.gameId].hasWon=!0),a.games[a.gameId].board[0][2].value==a.games[a.gameId].board[1][1].value&&a.games[a.gameId].board[1][1].value==a.games[a.gameId].board[2][0].value&&""!=a.games[a.gameId].board[2][0].value&&(a.winmessage=a.games[a.gameId].board[2][0].value+" won in diag "+d,c(),a.games[a.gameId].hasWon=!0),10==a.room.playerTurn&&(a.winmessage="No winners!",c(),a.games[a.gameId].hasWon=!0)}},a.playMove=function(b){a.games[a.gameId].waiting||a.player!=a.games[a.gameId].turn||(b.value="p1"==a.player?"X":"O",a.games[a.gameId].turn="p1"==a.games[a.gameId].turn?"p2":"p1")}})})}]);