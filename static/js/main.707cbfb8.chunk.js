(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(260)},174:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),s=a(66),c=a(67),i=a(70),u=a(68),m=a(71),h=a(21),d=a(22),p=a(15),y=(a(174),["g","r","y","b"]),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={start:0,points:0,pattern:"",click:0,compTurn:0,score:[{name:"Kev",score:15},{name:"Bil",score:10},{name:"Sal",score:3},{name:"Mik",score:2},{name:"Haw",score:1}]},e.startGame=e.startGame.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){if(this.state.start&&!this.state.compTurn){var t=this.state.pattern.length;e===this.state.pattern[this.state.click]?(console.log("pass"),this.state.click===t-1?(console.log("new level"),this.setState({click:0,points:this.state.points+1}),this.buildPattern()):this.setState({click:this.state.click+1})):this.endGame()}else console.log("Press Start!")}},{key:"startGame",value:function(){document.getElementById("container").style.animation="none",this.setState({start:1}),this.buildPattern()}},{key:"buildPattern",value:function(){var e=this.state.pattern;e+={1:"g",2:"r",3:"y",4:"b"}[Math.floor(4*Math.random())+1],this.setState({pattern:e}),this.animate(e)}},{key:"animate",value:function(e){var t=this;console.log(e);for(var a=function(a){window.setTimeout(function(){var n=document.getElementById(e[a]);window.getComputedStyle(n).getPropertyValue("background-color");n.style.backgroundColor="black",setTimeout(function(){t.clearColor()},300)},1e3*a)},n=0;n<e.length;n++)a(n)}},{key:"clearColor",value:function(){for(var e=["limegreen","red","yellow","blue"],t=document.getElementById("container").children,a=0;a<4;a++)t[a].style.backgroundColor=e[a]}},{key:"endGame",value:function(){console.log("lose");for(var e=[],t=0,a=0;a<this.state.score.length;a++)if(this.state.points>=this.state.score[a].score&&!t){var n=window.prompt("New High Score - Enter your initials!");n=0===n.length?"P1":n.slice(0,3),e.push({name:n,score:this.state.points}),t=1}else e.push(this.state.score[a]);this.setState({points:0,click:0,start:0,pattern:"",score:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"txt"},"Match the colors & test your memory!"),this.state.start?r.a.createElement("div",null,"\xa0\xa0\xa0\xa0Points:\xa0",this.state.points):r.a.createElement("div",{id:"start"},r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:this.startGame},"Press to Start!")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"container"},y.map(function(t){return r.a.createElement("div",{className:"content",id:t,key:t,onClick:function(){e.handleClick(t)}})})),r.a.createElement("div",{id:"bottom"},r.a.createElement(d.b,{id:"scores"},r.a.createElement(d.d,null,"High Scores"),r.a.createElement(d.c,null,r.a.createElement("table",{id:"scores"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,this.state.score.map(function(e,t){return r.a.createElement("tr",{key:t+1},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.score))})))))))}}]),t}(n.Component),g=Object(p.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})(E);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[169,2,1]]]);
//# sourceMappingURL=main.707cbfb8.chunk.js.map