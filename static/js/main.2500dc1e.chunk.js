(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(73)},34:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=a(75),i=(a(34),a(2)),u=a.n(i),l=a(5),h=a(7),m=a(12),p=a(18),f=a(13),d=a(19),w=a(77),v=a(74),b=a(9),y=(a(43),a(14)),E=a(10),k=a(27),O=a.n(k),g={privateKey:"f1b690b8e89d7f112c6f33f956693b2f91d93400",publicKey:"a4d95911b60999871aaed8a8c43823f6"},C=Date.now().toString(),N=O()("".concat(C).concat(g.privateKey).concat(g.publicKey)),q=function(){var e=Object(l.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((a=e.sent).status>=300)){e.next=7;break}throw new Error("Fetch has failed");case 7:return e.next=9,a.json();case 9:return n=e.sent,e.abrupt("return",n);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(u.a.mark(function e(){var t,a,n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=0;case 2:if(!(a<1500)){e.next=12;break}return n="https://gateway.marvel.com/v1/public/characters?limit=50&offset=".concat(a,"&ts=").concat(C,"&apikey=").concat(g.publicKey,"&hash=").concat(N),e.next=6,q(n);case 6:r=e.sent,c=r.data.results,t=Object(E.a)(t).concat(Object(E.a)(c)),a+=50,e.next=2;break;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json",e.next=3,q("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),S=function e(){var t=this;Object(h.a)(this,e),this.getCharacterData=Object(l.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAllCharacters();case 2:return a=e.sent,e.next=5,t.filterCharacters(a);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)})),this.filterCharacters=function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.filter(function(e){return""!==e.description}),e.abrupt("return",a);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.cleanCharacterCollection=Object(l.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCharacterData();case 2:return a=e.sent,n=a.map(function(e){return{name:e.name,id:e.id,description:e.description,siteURL:e.urls[0].url}}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),this.cleanAltCollection=Object(l.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filterAltStats();case 2:return a=e.sent,n=a.map(function(e){return{name:e.name,appearance:e.appearance,powerstats:e.powerstats,imageURL:e.images.sm,matchTally:0}}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),this.combineCharacterObjects=Object(l.a)(u.a.mark(function e(){var a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cleanCharacterCollection();case 2:return a=e.sent,e.next=5,t.cleanAltCollection();case 5:return n=e.sent,r=a.reduce(function(e,t){var a;return n.forEach(function(n){t.name===n.name&&(a=Object(y.a)({},t,n),e.push(a))}),e},[]),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)})),this.cleanAltStats=Object(l.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAlternateStats();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)})),this.filterAltStats=Object(l.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cleanAltStats();case 2:return a=e.sent,n=a.filter(function(e){return"Marvel Comics"===e.biography.publisher}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),this.fetchAllCharacters=j,this.fetchAlternateStats=x},A=a(76),I=(a(48),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"directions-title"},"Take the quiz to find your ",r.a.createElement("span",null,"Spirit Superhero"),"!"),r.a.createElement("div",{className:"directions-container"},r.a.createElement("p",{className:"directions"},"We all know that no one in real life looks like a Marvel Comics superhero, but we all feel like one inside. Answer the questions in our brief quiz to choose your Spirit Superhero!"),r.a.createElement(A.a,{to:"/marvel-match/quiz",className:"quiz-nav"},r.a.createElement("h3",null,"Match Me!"))))}),T=(a(52),function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("h1",{className:"marvel"},"MARVEL"),r.a.createElement("h2",{className:"match"},"MATCH")),r.a.createElement("img",{className:"gif",src:"../../assets/Images/comic-flip.gif",alt:""}),r.a.createElement("div",{className:"links-container"},r.a.createElement(A.a,{to:"/marvel-match/quiz-land",className:"landing-nav"},r.a.createElement("h3",{className:"link-text"},"Take the quiz!"))))}),R=(a(55),function(){return r.a.createElement("div",{className:"error-wrapper"},r.a.createElement("div",{className:"warning-container"},r.a.createElement("h1",null,"404: I AM GROOT!"),r.a.createElement("p",{className:"translation"},"Translation: Not quite sure where you were headed, friend, but this path leads to Knowhere and you'll never survive the trip!")),r.a.createElement(A.a,{to:"/marvel-match/quiz-land",className:"error-nav"},r.a.createElement("p",{className:"home-link"},"Back to Safety!")))}),M=a(15),z=(a(58),function(e){var t=e.text;return r.a.createElement("h2",{className:"question"},t)}),D=(a(61),function(e){var t=e.counter,a=e.total;return r.a.createElement("div",{className:"question-count"},r.a.createElement("h6",null,"Question ",r.a.createElement("span",null,t)," of ",r.a.createElement("span",null,a)))}),_=(a(64),function(e){var t=e.answerType,a=e.answerContent,n=e.answer,c=e.onAnswerSelected;return r.a.createElement("li",null,r.a.createElement("input",{type:"radio",className:"radio-button",name:"radio-group",checked:t===n,id:t,value:t,disabled:n,onChange:c}),r.a.createElement("label",{className:"radio-label",htmlFor:t},a))}),L=(a(67),function(e){var t=e.answer,a=e.answerOptions,n=e.question,c=e.questionId,s=e.questionTotal,o=e.onAnswerSelected;return r.a.createElement("div",{className:"quiz-container"},r.a.createElement(D,{counter:c,total:s}),r.a.createElement(z,{text:n}),r.a.createElement("ul",{className:"answer-options"},a.map(function(e){return r.a.createElement(_,{key:e.content,answerContent:e.content,answerType:e.type,answer:t,questionId:c,onAnswerSelected:o})})))}),B=[{question:"What color are your eyes?",answers:[{type:"blue",content:"Blue"},{type:"brown",content:"Brown"},{type:"green",content:"Green"},{type:"other",content:"Other"}]},{question:"What color is your hair?",answers:[{type:"blond",content:"Blonde"},{type:"black",content:"Black"},{type:"red",content:"Red"},{type:"auburn",content:"Brown"},{type:"alternate",content:"I don't even know anymore!"}]},{question:"How tall are you?",answers:[{type:"tall",content:"I'm pretty tall"},{type:"short",content:"I'm kinda short"},{type:"average",content:"I think I'm average"}]},{question:"With which race do you most identify?",answers:[{type:"human",content:"I'm human!"},{type:"alien",content:"I'm alien!"},{type:"mutant",content:"I'm a mutant!"},{type:"cyborg",content:"I'm a cyborg!"},{type:"spirit",content:"I've transcended physical form!"}]}],U=(a(70),function(e){var t=e.quizResult,a=e.characterMatch;return r.a.createElement("div",{className:"result"},r.a.createElement("h1",{className:"match-heading"},"You match with..."),r.a.createElement("h2",{className:"match-name"},t),r.a.createElement("img",{src:a.imageURL,alt:a.name}),r.a.createElement("p",{className:"char-description"},a.description),r.a.createElement("ul",{className:"bar-graph"},r.a.createElement("li",{className:"red"},"Intelligence: ",a.powerstats.intelligence),r.a.createElement("li",{className:"orange"},"Strength: ",a.powerstats.strength),r.a.createElement("li",{className:"yellow"},"Speed: ",a.powerstats.speed),r.a.createElement("li",{className:"green"},"Durability: ",a.powerstats.durability),r.a.createElement("li",{className:"blue"},"Power: ",a.powerstats.power),r.a.createElement("li",{className:"violet"},"Combat: ",a.powerstats.combat)))}),W=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleAnswerSelected=function(e){a.setUserAnswer(e.target.value),a.state.questionId<B.length?setTimeout(function(){return a.setNextQuestion()},400):setTimeout(function(){return a.setResults(a.getResults())},400)},a.handleCharacterMatch=function(){return a.props.characters.find(function(e){return e.name===a.state.result})},a.state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{blue:0,brown:0,green:0,other:0,blond:0,black:0,red:0,auburn:0,alternate:0,human:0,alien:0,spirit:0,mutant:0,cyborg:0},result:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({question:B[0].question,answerOptions:B[0].answers})}},{key:"setUserAnswer",value:function(e){this.setState({answersCount:Object(y.a)({},this.state.answersCount,Object(M.a)({},e,this.state.answersCount[e]+=1)),answer:e})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:B[e].question,answerOptions:B[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e);return this.props.characters.filter(function(a){return t.forEach(function(t){a.appearance.hairColor&&t===a.appearance.hairColor.toLowerCase()&&0!==e[t]?a.matchTally++:a.appearance.eyeColor&&t===a.appearance.eyeColor.toLowerCase()&&0!==e[t]?a.matchTally++:a.appearance.race&&t===a.appearance.race.toLowerCase()&&0!==e[t]&&a.matchTally++}),0!==a.matchTally})}},{key:"setResults",value:function(e){var t=Math.floor(Math.random()*Math.floor(e.length));e.length>=1?this.setState({result:e[t].name}):this.setState({result:"Undetermined"})}},{key:"renderQuizContainer",value:function(){var e=this.state,t=e.answer,a=e.answerOptions,n=e.questionId,c=e.question;return r.a.createElement("div",null,r.a.createElement("h1",null,"Take the Quiz and match a Marvel Character!"),r.a.createElement(L,{answer:t,answerOptions:a,questionId:n,question:c,questionTotal:B.length,onAnswerSelected:this.handleAnswerSelected}))}},{key:"renderResult",value:function(){var e=this.handleCharacterMatch();return r.a.createElement(U,{quizResult:this.state.result,characterMatch:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"quiz-wrapper",key:this.state.questionId},this.state.result?this.renderResult():this.renderQuizContainer())}}]),t}(n.Component),K=Object(b.b)(function(e){return{characters:e.characters}},null)(W),Q=new S,H=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.combineCharacterObjects();case 2:t=e.sent,this.props.addCharacters(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(w.a,null,r.a.createElement(v.a,{exact:!0,path:"/marvel-match/quiz-land",component:I}),r.a.createElement(v.a,{exact:!0,path:"/marvel-match/quiz",component:K}),r.a.createElement(v.a,{path:"/marvel-match/",exact:!0,component:T}),r.a.createElement(v.a,{component:R}))),r.a.createElement("footer",null,r.a.createElement("p",null,'"Data provided by Marvel. \xa9 2014 Marvel"')))}}]),t}(n.Component),X=Object(b.b)(function(e){return{characters:e.characters}},function(e){return{addCharacters:function(t){e({type:"ADD_CHARACTERS",characters:t})}}})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(8),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHARACTERS":return Object(E.a)(e).concat(Object(E.a)(t.characters));default:return e}},G=Object(V.b)({characters:F}),J=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),P=Object(V.c)(G,J),Y=r.a.createElement(b.a,{store:P},r.a.createElement(o.a,null,r.a.createElement(X,null)));s.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.2500dc1e.chunk.js.map