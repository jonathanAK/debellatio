(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(16),c=a.n(i),l=(a(66),a(3));a(71);!function(e){e[e.Join=0]="Join",e[e.CreateGame=1]="CreateGame",e[e.WaitingForPlayers=2]="WaitingForPlayers",e[e.PLayPage=3]="PLayPage",e[e.Summary=4]="Summary"}(n||(n={}));var m,s=a(12),u=a(11);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}!function(e){e[e.GameMaster=0]="GameMaster",e[e.CommandPhase=1]="CommandPhase",e[e.WaitingForOtherPlayers=2]="WaitingForOtherPlayers"}(m||(m={}));var d=function(e){return{type:"[DEBELLATION] VIEW_SET",payload:e}},y={activeView:n.Join,gamePhase:m.GameMaster},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[DEBELLATION] VIEW_SET":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{activeView:t.payload})}return e},g=a(57),f=a.n(g),E=a(26);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var O=function(e){return{type:"[DEBELLATION] GAME_CODE_SET",payload:e}},P=function(e){return{type:"[DEBELLATION] PLAYERS_SET",payload:e}},S={gameCode:"",players:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[DEBELLATION] GAME_CODE_SET":return h({},e,{gameCode:Object(E.a)(t.payload)});case"[DEBELLATION] PLAYERS_SET":return h({},e,{players:Object(E.a)(t.payload)})}return e};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=function(e){return{type:"[DEBELLATIO] GAME_BOARD_UPDATE",payload:e}},L=function(e){return{type:"[DEBELLATIO] PLAYER_ID_UPDATE",payload:e}},I={countryID:-1,season:0,armies:[],territories:[],settings:{},stage:"waiting",timeLeft:0,winner:0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[DEBELLATIO] PLAYER_ID_UPDATE":return w({},e,{countryID:t.payload});case"[DEBELLATIO] GAME_BOARD_UPDATE":return w({},e,{},t.payload);case"[DEBELLATIO] RESET_TIME":return w({},e,{timeLeft:60*e.settings.seasonLength-5});case"[DEBELLATIO] SET_SPROUT_TIME":return w({},e,{timeLeft:115});case"[DEBELLATIO] TIME_TIK":return w({},e,{timeLeft:e.timeLeft-1})}return e};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var G=function(e){return[{event:"gameCreated",fn:function(t){e(d(n.WaitingForPlayers)),e(O(t))}},{event:"gameJoined",fn:function(){e(d(n.WaitingForPlayers))}},{event:"playerJoined",fn:function(t){e(P(t))}},{event:"playerId",fn:function(t){e(L(t))}},{event:"gameStarted",fn:function(t){e(j(_({},t,{stage:"main"}))),e(d(n.PLayPage)),setInterval(function(){return e({type:"[DEBELLATIO] TIME_TIK"})},1e3)}},{event:"commandReceived",fn:function(){e(j({stage:"waiting"}))}},{event:"newSeason",fn:function(t){e(j(t)),e({type:"[DEBELLATIO] RESET_TIME"}),e(j({stage:"main"}))}},{event:"sproutPhase",fn:function(t){e(j(t)),e({type:"[DEBELLATIO] SET_SPROUT_TIME"}),e(j({stage:"sprout"}))}},{event:"gameOver",fn:function(t){e(j({winner:t})),e(d(n.Summary))}},{event:"rejoinGame",fn:function(t){e(j(_({},t,{stage:"main"}))),e(d(n.PLayPage)),setInterval(function(){return e({type:"[DEBELLATIO] TIME_TIK"})},1e3),e(j({stage:"waiting"}))}}]},N=function(e){return{type:"DEBELATIO_SEND_WEBSOCKET_MESSAGE",payload:{msgType:e,msgVal:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}}},B=[function(e){var t=e.dispatch,a=f()("http://localhost:4000");return a.on("gameStarted",function(e){localStorage.setItem("socketId",a.id),localStorage.setItem("gameId",e.settings.roomId)}),a.on("rejoinGame",function(e){localStorage.setItem("socketId",a.id)}),G(t).forEach(function(e){a.on(e.event,e.fn)}),function(e){return function(t){return"DEBELATIO_SEND_WEBSOCKET_MESSAGE"===t.type&&a.emit(t.payload.msgType,t.payload.msgVal),e(t)}}}],A=(a(101),Object(l.b)(null,function(e){return{goToCreateGame:function(){e(d(n.CreateGame))},joinGame:function(t){e(N("joinGame",t))}}})(function(e){var t=e.goToCreateGame,a=e.joinGame,n=Object(r.useState)(""),i=Object(s.a)(n,2),c=i[0],l=i[1],m=Object(r.useState)(""),u=Object(s.a)(m,2),p=u[0],d=u[1];return o.a.createElement("main",{id:"joinView"},o.a.createElement("h1",null,"Debellatio"),o.a.createElement("form",null,o.a.createElement("input",{className:"JoinPage_login-input",placeholder:"Name",value:c,onChange:function(e){return l(e.target.value)}}),o.a.createElement("input",{className:"JoinPage_login-input",placeholder:"Game PIN",value:p,onChange:function(e){return d(e.target.value)}})),o.a.createElement("button",{className:"JoinPage_startButton",onClick:function(){a({name:c,id:p})}},"Join Now"),o.a.createElement("button",{className:"JoinPage_startButton",onClick:t},"Create New game"))})),M=a(129),R=a(130),W=(a(102),a(128));function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F,Y=Object(W.a)({buttonRoot:{color:"#3a3d2a",width:70,height:35,padding:0},sliderRoot:{color:"#3a3d2a",height:8},switchBase:{padding:0,"&$checked":{color:"white",colorSecondary:"white"},"&$checked + $track":{backgroundColor:"#263000",opacity:.8}},checked:{left:17},track:{},thumb:{width:35,height:35},sliderThumb:{marginTop:-11,marginLeft:-11,width:35,height:35,border:"1px solid black"},valueLabel:{left:0},rail:{color:"#668000",opacity:1,height:13,borderRadius:4},mark:{marginTop:4,height:5}}),V=Object(l.b)(null,function(e){return{goToJoinGame:function(){e(d(n.Join))},createGame:function(t){e(N("newGame",t))}}})(function(e){var t,a=e.goToJoinGame,n=e.createGame,r=o.a.useState({name:"",longYear:!1,maxPlayers:7,seasonLength:6,firstSeason:12,gmMode:!1}),i=Object(s.a)(r,2),c=i[0],l=i[1],m=Y(),p=function(e){return function(t){l(x({},c,Object(u.a)({},e,t.target.checked)))}},d=function(e){return function(t,a){l(x({},c,Object(u.a)({},e,a)))}};return o.a.createElement("main",{id:"newGameView"},o.a.createElement("h1",null,"Debellatio"),o.a.createElement("input",{className:"CrateGamePage_input",placeholder:"Name",value:c.name,onChange:(t="name",function(e){l(x({},c,Object(u.a)({},t,e.target.value)))})}),o.a.createElement("div",{className:"CreateGame_settingForm"},o.a.createElement("div",{className:"CreateGame_sliders"},o.a.createElement("h3",null,"Maximum Number Of players"),o.a.createElement(R.a,{min:2,max:7,step:1,marks:!0,valueLabelDisplay:"auto",value:c.maxPlayers,onChange:d("maxPlayers"),classes:{root:m.sliderRoot,rail:m.rail,thumb:m.sliderThumb,mark:m.mark,valueLabel:m.valueLabel}}),o.a.createElement("h3",null,"Season Length (Minutes)"),o.a.createElement(R.a,{min:1,max:30,step:1,marks:!0,valueLabelDisplay:"auto",value:c.seasonLength,onChange:d("seasonLength"),classes:{root:m.sliderRoot,rail:m.rail,thumb:m.sliderThumb,mark:m.mark,valueLabel:m.valueLabel}}),o.a.createElement("h3",null,"First Season Length (Minutes)"),o.a.createElement(R.a,{min:1,max:30,step:1,marks:!0,valueLabelDisplay:"auto",value:c.firstSeason,onChange:d("firstSeason"),classes:{root:m.sliderRoot,rail:m.rail,thumb:m.sliderThumb,mark:m.mark,valueLabel:m.valueLabel}})),o.a.createElement("div",{className:"CreateGame_spectatorButton"},o.a.createElement("h3",null,"Spectator Mode"),o.a.createElement(M.a,{checked:c.gmMode,onChange:p("gmMode"),classes:{root:m.buttonRoot,switchBase:m.switchBase,thumb:m.thumb,checked:m.checked,track:m.track}})),o.a.createElement("div",{className:"CreateGame_seasonsButton"},o.a.createElement("h3",{className:"CreateGame_seasonsTitle"},"Seasons Per Year"),o.a.createElement("h3",null,"2"),o.a.createElement(M.a,{checked:c.longYear,onChange:p("longYear"),disableRipple:!0,classes:{root:m.buttonRoot,switchBase:m.switchBase,thumb:m.thumb,checked:m.checked,track:m.track}}),o.a.createElement("h3",null,"4"))),o.a.createElement("button",{className:"CrateGamePage_button",onClick:function(){n({name:c.name,longYear:c.longYear,seasonLength:c.seasonLength,firstSeason:c.firstSeason,maxPlayers:c.maxPlayers,GM:c.gmMode})}},"Create New Game"),o.a.createElement("button",{className:"CrateGamePage_button",onClick:a},"Join a Game"))}),K=(a(103),Object(l.b)(function(e){return{joinCode:e.misc.gameCode,players:e.misc.players}},function(e){return{startGame:function(t){e(N("startGame",{gameId:t}))}}})(function(e){var t=e.joinCode,a=e.players,n=e.startGame;return o.a.createElement("main",{id:"waitingView"},o.a.createElement("h1",null,"Waiting for Players"),o.a.createElement("h1",{id:"pinCodeDisplay"},t),""!==t&&o.a.createElement("button",{className:"Waiting_startButton",onClick:function(){n(t)}},"Start Game"),o.a.createElement("div",{className:"Waiting_playersBox"},a.map(function(e){return o.a.createElement("h2",{key:e.id,className:"Waiting_player"},e.name)})))})),U=(a(104),{armies:[{name:"Kurt Cobain",balance:-2},{name:"Amy Winehouse",balance:2},{name:"Jimi Hendrix",balance:2}],settings:{seasonsPerYear:2,seasonLength:6,firstSeason:12},territories:[{id:0,name:"0",capital:"City",type:0,borders:[1,6],troop:0,army:1},{id:1,name:"1",capital:null,type:0,borders:[0,7,2],troop:null,army:2},{id:2,name:"2",capital:"City",type:0,borders:[1,8,3],troop:0,army:2},{id:3,name:"3",capital:null,type:0,borders:[2,9,4],troop:null,army:2},{id:4,name:"4",capital:"City",type:0,borders:[3,10],troop:0,army:3},{id:5,name:"5",capital:"City",type:0,borders:[6,13],troop:null,army:1},{id:6,name:"6",capital:null,type:0,borders:[0,5,14,7],troop:null,army:1},{id:7,name:"7",capital:"City",type:0,borders:[1,6,15,8],troop:0,army:2},{id:8,name:"8",capital:null,type:0,borders:[2,7,16,9],troop:null,army:2},{id:9,name:"9",capital:null,type:1,borders:[3,8,17,10],troop:null,army:2},{id:10,name:"10",capital:null,type:1,borders:[4,9,18,11],troop:null,army:3},{id:11,name:"11",capital:"City",type:1,borders:[10,18,19],troop:1,army:3},{id:12,name:"12",capital:"Port",country:"B",type:1,borders:[21,22,13],troop:1,army:1},{id:13,name:"13",capital:null,country:"B",type:1,borders:[5,12,22,14],troop:0,army:1},{id:14,name:"14",capital:"Port",type:1,borders:[6,13,22,23,15],troop:null,army:1},{id:15,name:"15",capital:null,type:0,borders:[7,14,24,16],troop:null,army:2},{id:16,name:"16",capital:"City",type:0,borders:[8,15,25,17],troop:0,army:2},{id:17,name:"17",capital:null,type:1,borders:[9,16,26,18],troop:null,army:2},{id:18,name:"18",capital:null,type:2,borders:[11,10,9,17,26,27,28,19],troop:null,army:-1},{id:19,name:"19",capital:null,type:1,borders:[11,18,28,20],troop:null,army:3},{id:20,name:"20",capital:"City",type:0,borders:[19,22],troop:0,army:3},{id:21,name:"21",capital:null,type:1,borders:[12,30,22],troop:null,army:1},{id:22,name:"22",capital:null,type:2,borders:[14,13,12,21,30,31,32,23],troop:null,army:-1},{id:23,name:"23",capital:null,type:1,borders:[14,22,32,24],troop:null,army:1},{id:24,name:"24",capital:"City",type:1,borders:[15,23,32,33,25],troop:1,army:2},{id:25,name:"25",capital:"City",type:0,borders:[16,24,34,26],troop:0,army:2},{id:26,name:"26",capital:null,type:1,borders:[17,25,35,27],troop:null,army:2},{id:27,name:"27",capital:"City",type:1,borders:[18,26,36,28],troop:1,army:3},{id:28,name:"28",capital:"City",type:1,borders:[19,27,37,29],troop:1,army:3},{id:29,name:"29",capital:null,type:0,borders:[20,28,38],troop:null,army:3},{id:30,name:"30",capital:"Port",type:1,borders:[22,21,31],troop:1,army:1},{id:31,name:"31",capital:null,type:1,borders:[22,30,39,32],troop:null,army:1},{id:32,name:"32",capital:null,type:2,borders:[24,23,22,31,39,40,41,33],troop:null,army:-1},{id:33,name:"33",capital:null,type:1,borders:[24,32,41,34],troop:null,army:2},{id:34,name:"34",capital:null,type:1,borders:[25,33,41,42,35],troop:null,army:2},{id:35,name:"35",capital:"City",type:0,borders:[26,34,43,36],troop:0,army:2},{id:36,name:"36",capital:null,type:0,borders:[27,35,44,37],troop:null,army:3},{id:37,name:"37",capital:null,type:0,borders:[28,36,45,38],troop:null,army:3},{id:38,name:"38",capital:"City",type:0,borders:[29,37],troop:0,army:3},{id:39,name:"39",capital:"Port",type:1,borders:[32,32,40],troop:null,army:1},{id:40,name:"40",capital:null,type:1,borders:[32,39,46,41],troop:null,army:1},{id:41,name:"41",capital:null,type:2,borders:[34,33,32,40,46,47,48,42],troop:null,army:-1},{id:42,name:"42",capital:"City",type:1,borders:[34,41,48,43],troop:1,army:2},{id:43,name:"43",capital:null,type:0,borders:[35,42,49,44],troop:null,army:2},{id:44,name:"44",capital:null,type:0,borders:[36,43,50,45],troop:null,army:3},{id:45,name:"45",capital:"City",type:0,borders:[37,44],troop:0,army:3},{id:46,name:"46",capital:"City",type:1,borders:[41,40,47],troop:1,army:1},{id:47,name:"47",capital:null,type:1,borders:[41,46,48],troop:null,army:2},{id:48,name:"48",capital:"City",type:1,borders:[42,41,47,49],troop:1,army:2},{id:49,name:"49",capital:null,type:0,borders:[43,48,50],troop:null,army:2},{id:50,name:"50",capital:"City",type:0,borders:[44,49],troop:0,army:3}]}),$=[{name:"Kurt Cobain",id:"95jve84fs"},{name:"Amy Winehouse",id:"dfgdfgdv"},{name:"Jim Morrison",id:"123a4t5"},{name:"Jimi Hendrix",id:"7096hg34wrf"},{name:"Janis Joplin",id:"bbtrdxv"},{name:"Brian Jones",id:"btyu#VW$"},{name:"Ron McKernan",id:"vm30x62mg"}];Object(l.b)(null,function(e){return{goToCreateGame:function(){e(d(n.CreateGame))},goToPlayPage:function(){e(d(n.PLayPage)),e(L(1)),e(j(U)),e(j({stage:"main"})),setInterval(function(){return e({type:"[DEBELLATIO] TIME_TIK"})},1e3),e({type:"[DEBELLATIO] RESET_TIME"})},goToWaiting:function(){e(P($)),e(d(n.WaitingForPlayers)),e(O("ABCD"))},goToSpectator:function(){e(d(n.PLayPage)),e(L(-1)),e(j(U)),e(j({stage:"main"})),setInterval(function(){return e({type:"[DEBELLATIO] TIME_TIK"})},1e3),e({type:"[DEBELLATIO] RESET_TIME"})},goToWinner:function(){e(L(1)),e(j(U)),e(j({stage:"main"})),e(j({winner:2})),e(d(n.Summary))},goToSprout:function(){e(d(n.PLayPage)),e(L(1)),e(j(U)),e({type:"[DEBELLATIO] SET_SPROUT_TIME"}),e(j({stage:"sprout"}))}}})(function(e){var t=e.goToCreateGame,a=e.goToWaiting,n=e.goToPlayPage,i=e.goToSpectator,c=e.goToWinner,l=e.goToSprout,m=Object(r.useState)(!1),u=Object(s.a)(m,2),p=u[0],d=u[1];return p?o.a.createElement("div",null):o.a.createElement("div",{id:"QaBar"},o.a.createElement("button",{onClick:function(){return d(!0)}},"X"),o.a.createElement("button",{onClick:t},"Go to Create Game"),o.a.createElement("button",{onClick:n},"Go to play page"),o.a.createElement("button",{onClick:i},"Spectator Mode"),o.a.createElement("button",{onClick:c},"Winner Page "),o.a.createElement("button",{onClick:a},"Waiting Page "),o.a.createElement("button",{onClick:l},"Sprout Page "))}),a(105);!function(e){e[e.Land=0]="Land",e[e.Coast=1]="Coast",e[e.Sea=2]="Sea"}(F||(F={}));a(106);var H,z=function(e){var t=e.name,a=e.id,n=e.army,r=e.capital,i=e.troop,c=e.type,l=a<26?"a"+(a+10).toString(36):"b"+(a-16).toString(36),m="singleTerritoryBox "+(c===F.Sea?"armySea":["armyNon","armyA","armyB","armyC","armyD","armyE","armyF","armyG"][n])+(r?" "+{City:"SingleTerritory_capital-city",Port:"SingleTerritory_capital-port"}[r]:""),s=null!==i?["tank","ship"][i]:null;return o.a.createElement("div",{className:m,style:{gridArea:l}},o.a.createElement("div",{className:"singleTerritoryBox_name"},t),o.a.createElement("div",{className:"singleTerritoryBox_troop"},s&&o.a.createElement("img",{src:"img/".concat(s,".png"),alt:""})))},Q=Object(l.b)(function(e){return{territories:e.board.territories}})(function(e){var t=e.territories;return o.a.createElement("div",{className:"GameMap"},t.map(function(e){return o.a.createElement(z,{key:e.id,name:e.name,id:e.id,army:e.army,capital:e.capital,troop:e.troop,type:e.type})}))});!function(e){e[e.tank=0]="tank",e[e.ship=1]="ship"}(H||(H={}));a(107);var X=Object(l.b)(function(e){return{territories:e.board.territories}})(function(e){var t=e.troopId,a=e.commandList,n=e.territories,i=Object(r.useState)("defend"),c=Object(s.a)(i,2),l=c[0],m=c[1],u=Object(r.useState)(t.toString()),p=Object(s.a)(u,2),d=p[0],y=p[1],b=Object(r.useState)(""),g=Object(s.a)(b,2),f=g[0],E=g[1];return a[t]={order:l,target:d,auxUnit:f},o.a.createElement("div",{className:"CommandSheetRow"},o.a.createElement("img",{className:"CommandSheetRow_image",src:"".concat("","/img/").concat(n[t].troop===H.tank?"tank":"ship",".png"),alt:"Tank"}),o.a.createElement("div",{className:"CommandSheetRow_troopName"},t),o.a.createElement("select",{value:l,onChange:function(e){return m(e.target.value)}},o.a.createElement("option",{value:"defend"},"Defend"),o.a.createElement("option",{value:"attack"},"Attack"),o.a.createElement("option",{value:"assist"},"Assist"),n[t].troop===H.ship&&n[t].type===F.Sea&&o.a.createElement("option",{value:"convoy"},"Convoy"),n[t].troop!==H.ship&&n[t].type===F.Coast&&o.a.createElement("option",{value:"getConvoyed"},"Get Convoyed")),o.a.createElement("select",{value:d,onChange:function(e){return y(e.target.value)}},o.a.createElement("option",{value:t},n[t].name),n[t].borders.map(function(e){return(n[t].troop===H.tank&&n[e].type!==F.Sea!==("getConvoyed"===l)||n[t].troop===H.ship&&n[e].type!==F.Land)&&o.a.createElement("option",{key:"".concat(t,"_").concat(e,"_").concat(Math.random()),value:e},e)})),("assist"===l||"convoy"===l)&&o.a.createElement("select",{value:f,onChange:function(e){return E(e.target.value)}},o.a.createElement("option",{value:""}),("assist"===l?n[parseInt(d)]:n[t]).borders.map(function(e){return o.a.createElement("option",{key:"".concat(n[t]).concat(e),value:e},e)})))}),q=(a(108),Object(l.b)(function(e){return{territories:e.board.territories}})(function(e){var t=e.troopId,a=e.commandList,n=e.territories,i=e.allowedActions,c=e.sprout,l=void 0!==c&&c?"sprout":"destroy",m=Object(r.useState)(!1),u=Object(s.a)(m,2),p=u[0],d=u[1];return o.a.createElement("div",{className:"SproutTroopRow"},o.a.createElement("img",{className:"SproutTroopRow_image",src:"".concat("","/img/").concat(n[t].type===F.Land?"tank":"ship",".png"),alt:"Tank"}),n[t].name,o.a.createElement("div",{className:"SproutTroopRow_Switch"},o.a.createElement(M.a,{checked:p,onChange:function(e){e.target.checked&&a.commandCount<i?(d(!0),a.commandCount++,a.commands[t]=l):e.target.checked||(d(!1),a.commandCount--,delete a.commands[t])}})))})),Z=(a(109),Object(l.b)(function(e){return{stage:e.board.stage,territories:e.board.territories,army:e.board.countryID,season:e.board.season,armyBalance:e.board.armies[e.board.countryID-1].balance}},function(e){return{submitCommands:function(t){e(N("dispatchOrders",t))},submitSprout:function(t){e(N("sproutOrders",t))},waitForPlayers:function(){e(j({stage:"waiting"}))}}})(function(e){var t=e.territories,a=e.army,n=e.stage,r=e.submitCommands,i=e.submitSprout,c=e.waitForPlayers,l=e.season,m=e.armyBalance,s={commands:{},season:l,commandCount:0},u=function(){r(s)},p=function(){i(s)},d=function(){switch(n){case"waiting":return o.a.createElement("div",{className:"CommandSheet"},o.a.createElement("h3",null,"Waiting for other players"));case"main":return o.a.createElement("div",{className:"CommandSheet"},o.a.createElement("div",{className:"CommandSheet_commandList"},t.map(function(e,t){return e.army===a&&null!==e.troop&&o.a.createElement(X,{key:t,troopId:t,commandList:s.commands})})),o.a.createElement("button",{className:"CommandSheet_submit",onClick:u},"Send Orders"));case"sprout":0===m&&c();var e=m>0,r=Math.abs(m);return o.a.createElement("div",{className:"CommandSheet"},o.a.createElement("h2",null,e?"Build New ".concat(r," Troop").concat(r>1?"s":""):"Disband ".concat(r," Unit").concat(r>1?"s":"")),o.a.createElement("div",{className:"CommandSheet_sproutList"},e?t.map(function(e,t){return e.army===a&&null===e.troop&&null!==e.capital&&o.a.createElement(q,{key:t,troopId:t,commandList:s,allowedActions:r,sprout:!0})}):t.map(function(e,t){return e.army===a&&null!==e.troop&&o.a.createElement(q,{key:t,troopId:t,commandList:s,allowedActions:r})})),o.a.createElement("button",{className:"CommandSheet_submit",onClick:p},"Send Orders"))}}();return o.a.createElement("div",null,d)})),ee=(a(110),Object(l.b)(function(e){return{playerName:-1===e.board.countryID?"":e.board.armies[e.board.countryID-1].name,playerId:e.board.countryID,timeLeft:e.board.timeLeft,season:e.board.season,seasonsPerYear:e.board.settings.seasonsPerYear,isGm:-1===e.board.countryID}})(function(e){var t=e.playerName,a=e.playerId,n=e.timeLeft,r=e.season,i=e.seasonsPerYear,c=e.isGm;return o.a.createElement("div",{className:"TopBar player".concat(a)},o.a.createElement("div",null,o.a.createElement("div",null,"season: \xa0"),o.a.createElement("div",null,function(e,t){var a=1900+Math.floor(e/t);return"".concat((2===t?["Fall","Spring"]:["Fall","Winter","Spring","Summer"])[e%t],"  ").concat(a)}(r,i))),o.a.createElement("div",null,!c&&o.a.createElement("div",null,"commander: \xa0"),!c&&o.a.createElement("div",null,t)),o.a.createElement("div",null,o.a.createElement("div",null,"time Left: \xa0"),o.a.createElement("div",null,function(e){if(e<0)return"00:00";var t=e%60;return Math.floor(e/60).toString().padStart(2,"0")+" : "+t.toString().padStart(2,"0")}(n))))})),te=(a(111),Object(l.b)(function(e){return{isGm:-1===e.board.countryID}})(function(e){var t=e.isGm;return o.a.createElement("main",{id:"playPage"},o.a.createElement(ee,null),o.a.createElement(Q,null),!t&&o.a.createElement(Z,null))})),ae=(a(112),Object(l.b)(function(e){return{winner:e.board.armies[e.board.winner-1].name}},function(e){return{goToJoinGame:function(){e(d(n.Join))}}})(function(e){var t=e.winner,a=e.goToJoinGame;return localStorage.removeItem("socketId"),o.a.createElement("main",{id:"summaryPage"},o.a.createElement("h1",null,"The Winner"),o.a.createElement("h2",{className:"capitalize"},t.toLowerCase()),o.a.createElement("button",{className:"CrateGamePage_button",onClick:a},"New Game"))})),ne=Object(l.b)(function(e){return{activeView:e.views.activeView,gameId:e.board.settings.gameId}},function(e){return{rejoin:function(t){e(N("rejoin",t))},gameOver:function(t){e(N("gameOver",t))}}})(function(e){var t=e.activeView,a=e.gameId,r=e.rejoin,i=e.gameOver,c=function(){switch(t){case n.Join:return localStorage.getItem("socketId")&&r({socketId:localStorage.getItem("socketId"),gameId:localStorage.getItem("gameId")}),o.a.createElement(A,null);case n.CreateGame:return o.a.createElement(V,null);case n.WaitingForPlayers:return o.a.createElement(K,null);case n.PLayPage:return o.a.createElement(te,null);case n.Summary:return i(a),o.a.createElement(ae,null)}}();return o.a.createElement(o.a.Fragment,null,!1,c)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(19),oe=a(58);var ie=function(){var e=re.applyMiddleware.apply(void 0,Object(E.a)(B)),t=Object(oe.composeWithDevTools)(e),a=Object(re.combineReducers)({views:b,misc:C,board:k});return Object(re.createStore)(a,{},t)}();c.a.render(o.a.createElement(l.a,{store:ie},o.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(113)},66:function(e,t,a){},71:function(e,t,a){},98:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.68c09b6f.chunk.js.map