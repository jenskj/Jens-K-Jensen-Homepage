(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),l=n.n(i),o=(n(28),n(2)),c=n(3),s=n(6),d=n(4),h=n(5),m=(n(18),n(7)),u=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"languages"},r.a.createElement("i",{className:"devicon-html5-plain-wordmark"}),r.a.createElement("i",{className:"devicon-css3-plain-wordmark"}),r.a.createElement("i",{className:"devicon-javascript-plain"}),r.a.createElement("i",{className:"devicon-react-original-wordmark"}),r.a.createElement("i",{className:"devicon-jquery-plain-wordmark"}),r.a.createElement("i",{className:"devicon-git-plain-wordmark"}))}}]),t}(r.a.Component),p=function(){return r.a.createElement("div",{className:"myFace"},r.a.createElement("img",{src:"https://lh3.googleusercontent.com/PrWwnlpz0hhy-QhbX20u4-DN4kJ-65KhG7V1xCFPxe2XF0tZo5g2h48s1TflzlF8VcnpiIxSIjCFCCYzUKLnPUVDY1OzQ8gFSZeHk07k9wd7OlZvKqW_79aaPXLSXsek2XmFq7AnrqbcnJ701LaOGXBvQeFhrfBpjV-RID8frv8C-T862FYcxnXHphR-UNCjcllzeUARx2Nu49QMGSd3NMcyeD-DVn9cYNvxUEb-FdZGX7EUWYZX9GYLeenTyyBtEtiPvvezpvN2um7SadR-QeQjG5x_KHbwi3R7Rt_lt51lVCP9iIGCEkmnw6oumbR59luEwoGfAJfDx0RNov-u5lWy_Xi7Q2D6ieSwix4sHRILYIda5rPPUzK2b8vjMZDk72PdBTv8XnRfw_UCXbPb3zskMjkFxHR6fD5hesW61tbKol8Sqr9OdWcEzRjuv-wQh_vRexIZFZSNmxnjy1EsAyMB1DV3Ck_ygQESk7mwZ1WEExsIPVhg-5UsUf8WfzDc_IRFcywADtr2_WozGYb9r4qxYOfi0gG7MI2eVkqknqJh7K-bSZJClyDILyYyjNEAA4bs7tFMRJeGLAPJMFAKtetTHarrwp4w7Xr69rOGho1nWNdGkRW88zP5EZWKMPGI0U_6rdL9Ply-70_FveEgAZvZqFsE1IZ7BTO1ss0zHAgXrHSnUdIsqUM896LkPhvv9o8b5BsIlNWU1NGchg=w653-h869-no",alt:"JensPhoto"}))},g=(n(31),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={height:"calc(100vh - ".concat(this.props.getNavbarHeight,")")};return r.a.createElement("div",{id:"parallax",style:e},r.a.createElement(u,null),r.a.createElement(p,null),r.a.createElement("div",{className:"aboutMe"},r.a.createElement("p",null,"Hello, I'm Jens - a frontend developer from Aarhus, Denmark")))}}]),t}(a.Component)),f=(n(33),n(22)),b=function(e){var t=e.href,n=e.name;return r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(f.Link,{to:t,spy:!0,smooth:!0,duration:500,offset:-54},n)))},v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll);var e=document.querySelector("#navbar").offsetHeight+"px";this.props.handleNavbarHeight(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.querySelector("#navbar"),t=document.querySelector(".hiddenNav").offsetTop;window.scrollY>=t?(e.style.position="",e.classList.add("sticky")):(e.style.position="relative",e.style.bottom=0,e.classList.remove("sticky"))}},{key:"handleNavbarHeight",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{id:"navWrapper",style:{height:this.props.getNavbarHeight}},r.a.createElement("div",{className:"hiddenNav"}),r.a.createElement("div",{id:"navbar"},r.a.createElement("ul",null,r.a.createElement(b,{href:"parallax",name:"Home"}),r.a.createElement(b,{href:"projectsWrapperOuter",name:"Projects"}),r.a.createElement(b,{href:"skillsWrapper",name:"Skills"}),r.a.createElement(b,{href:"cvWrapper",name:"Curriculum Vitae"}),r.a.createElement(b,{href:"contactMe",name:"Contact Me"}))))}}]),t}(r.a.Component),y={height:"12vh",width:"100%",backgroundColor:"#dad878",display:"flex",justifyContent:"center",alignItems:"center",padding:"5vh 0 ",border:"2px solid",margin:"7vh 0"},E={color:"#111",fontFamily:"Open Sans Condensed, sans-serif",fontSize:"10vh",fontWeight:"700",textShadow:"5px 4px 2px rgb(161, 161, 161)",margin:"0 0 0",textAlign:"center",textTransform:"uppercase",position:"absolute"},j=function(e){var t=e.name;return r.a.createElement("div",{className:t.toLowerCase().replace(/\s/g,"")+"Wrapper",style:y},r.a.createElement("h2",{className:"header2",style:E},t))},w=(n(45),{a:"This timeline of literary history has a neat and visually pleasing UI. The most interesting part is, however, how the data is organized behind the scenes. The JavaScript uses RegExp, JQuery and various filter methods to extract the author entries from a set of raw data and organize them into their corresponding literary periods. In its current state, the timeline is a small prototype of what could be a much larger interactive learning platform.",b:"This sweet and simple app was made purely with the intention of entertaining my one-year-old daughter, Clara, as well as training her ear to differentiate between notes. Research shows that if you pair pitch with meaning early in a child's life, it is possible to help the child develop perfect pitch. To this end, Animal Sounds pairs each note to a picture of an animal, which pops up on the screen when a note button is pushed",c:"I am in the process of building the website, and the portfolio will be updated soon.",d:"Inspired by a Wes Bos tutorial, this panel gallery uses flexbox and simple transitions to achieve a highly responsive and and intuitive open/close UI.",e:'This app fetches American city and state names from an online .json file and allows users to search and see population sizes. One of the cool features of the searchbar is a typeahead function that updates the results whenever a "keyup" or "change" event i fired. It is built from plain JavaScript and makes use of Fetch API along with some RegExp.',f:"I am in the process of building the website, and the portfolio will be updated soon.",g:"I am in the process of building the website, and the portfolio will be updated soon."}),O=function(e){var t=e.projectTitle,n=e.tileText,a=e.gridLetter;return r.a.createElement("div",{className:"tileInfo"},r.a.createElement("h2",{className:"projectTitle"},t),r.a.createElement("p",{className:n?"tileText":"hidden"},function(){var e={};for(var t in w)t[0]===a&&(e[t]=w[t]);return Object.values(e)}()))},C=function(e){var t=e.gridExpand,n=e.gridLetter,a=e.projectTitle;return r.a.createElement("div",{onClick:t,className:n+" box"},r.a.createElement(O,{projectTitle:a}))},x={a:"LiteraryTimeline/index.html",b:"AnimalSounds/index.html",c:"",d:"FlexboxVisual/index.html",e:"TypeaheadSearchbar/index.html",f:"",g:""},k=function(e){var t=e.gridLetter;return r.a.createElement("div",{className:"viewDiv"},r.a.createElement("a",{href:function(){var e={};for(var n in x)n[0]===t&&(e[n]=x[n]);return Object.values(e)}(),target:"_blank",className:"viewProject"},"view project"))},S={top:"",left:"",width:"",height:""},T={top:"",left:"",width:"",height:""},N={width:"",height:""},A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).gridExpand=n.gridExpand.bind(Object(m.a)(Object(m.a)(n))),n.handleProjectViewToggle=n.handleProjectViewToggle.bind(Object(m.a)(Object(m.a)(n))),n.handleTileText=n.handleTileText.bind(Object(m.a)(Object(m.a)(n))),n.state={projectViewToggle:!1,svgToggle:!1,currentLetter:"a",currentTitle:"",tileTextToggle:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleTileText",value:function(){var e=this.state.tileTextToggle;this.setState({tileTextToggle:!e}),console.log(this.state.currentTitle)}},{key:"handleHover",value:function(){var e=this.state.svgToggle;this.setState({svgToggle:!e})}},{key:"handleProjectViewToggle",value:function(){var e=this.state.projectViewToggle;this.setState({projectViewToggle:!e})}},{key:"tileRetract",value:function(e){this.handleTileText();var t=document.querySelector(".tile"),n=document.querySelector("#projectsWrapper"),a=document.querySelector(".contentWrapper"),r=t.children[0],i=(r.children[0],r.children[1]);r.className="tileInfo infoRetract",document.documentElement.style.setProperty("--tile-top","".concat(S.top,"px")),document.documentElement.style.setProperty("--tile-left","".concat(S.left,"px")),document.documentElement.style.setProperty("--tile-width","".concat(S.width,"px")),document.documentElement.style.setProperty("--tile-height","".concat(S.height,"px")),t.className="".concat(this.state.currentLetter," tile retract"),"Coming Soon"!==this.state.currentTitle&&this.handleProjectViewToggle(),t.addEventListener("animationend",function e(l){setTimeout(function(){r.className="tileInfo",i.className="tileText hidden",a.style.display="none",n.style.display="block"},200);t.removeEventListener("animationend",e)})}},{key:"gridExpand",value:function(e){var t,n=this;1===e.target.classList[0].length?t=e.target:"tileInfo"===e.target.classList[0]?t=e.target.parentElement:"tileText"===e.target.classList[0]?t=e.target.parentElement.parentElement:"projectTitle"===e.target.classList[0]&&(t=e.target.parentElement.parentElement);var a=t.classList[0],r=document.querySelector(".grid"),i=t.children[0].children[0],l=document.querySelector(".tile"),o=document.querySelector(".tile .tileInfo"),c=o.children[1],s=document.querySelector(".contentWrapper");this.setState({currentLetter:a}),this.setState({currentTitle:i.textContent}),S.top=t.offsetTop,S.left=t.getBoundingClientRect().left,S.width=t.getBoundingClientRect().width,S.height=t.getBoundingClientRect().height,T.top=r.offsetTop,T.left=r.getBoundingClientRect().left,T.width=r.getBoundingClientRect().width,T.height=r.getBoundingClientRect().height,N.width=i.offsetWidth,N.height=i.offsetHeight,s.style.display="block",l.className="".concat(a," expand tile"),l.style.top=S.top+"px",l.style.left=S.left+"px",l.style.width=S.width+"px",l.style.height=S.height+"px",document.documentElement.style.setProperty("--grid-top","".concat(T.top,"px")),document.documentElement.style.setProperty("--grid-left","".concat(T.left,"px")),document.documentElement.style.setProperty("--grid-width","".concat(T.width,"px")),document.documentElement.style.setProperty("--grid-height","".concat(T.height,"px")),document.documentElement.style.setProperty("--tileDivTitle-width","".concat(N.width,"px")),document.documentElement.style.setProperty("--tileDivTitle-height","".concat(N.height,"px"));l.addEventListener("animationend",function e(){l.offsetWidth===Math.round(T.width)&&(o.className+=" infoExpand",setTimeout(function(){n.handleTileText(),c.className+=" fadeInOpacity","Coming Soon"!==n.state.currentTitle&&(n.handleProjectViewToggle(),document.querySelector(".viewDiv").className+=" fadeInOpacity")},400),l.removeEventListener("animationend",e))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"projectsWrapper"},r.a.createElement("div",{className:"grid unclicked"},r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"a",projectTitle:"Literary Timeline from Raw Data"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"b",projectTitle:"Animal Sounds"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"c",projectTitle:"Recipe App"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"d",projectTitle:"Flexbox visual"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"e",projectTitle:"Typeahead searchbar"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"f",projectTitle:"Coming Soon"}),r.a.createElement(C,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"g",projectTitle:"Coming Soon"}))),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{className:"tile",onClick:function(t){return t.target.offsetWidth===Math.round(T.width)?e.tileRetract():null}},r.a.createElement(O,{projectTitle:this.state.currentTitle,gridLetter:this.state.currentLetter,tileText:this.state.tileTextToggle}),this.state.projectViewToggle?r.a.createElement(k,{gridLetter:this.state.currentLetter}):null)))}}]),t}(a.Component),L=n(1),B={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:3,background:"#a0b2b8",left:"16px",zIndex:"-1"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}},I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.children,t=r.a.Children.map(e,function(e){return r.a.cloneElement(e)});return r.a.createElement("div",null,r.a.createElement("section",{style:Object(L.a)({},B.container)},r.a.createElement("div",null),t,r.a.createElement("div",{style:Object(L.a)({},B.containerBefore)})))}}]),t}(a.Component),W=n(8),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var a=e?Object(L.a)({},B.eventType,{color:e,borderColor:e}):B.eventType,r="right"===n?Object(L.a)({},B["eventType--right"]):Object(L.a)({},B["eventType--left"]);return Object(L.a)({},a,r,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?B.cardBody:B.message;return e?Object(L.a)({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?B.time:Object(L.a)({},B.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=Object(L.a)({},B.eventContainer,e);return this.showAsCard()?Object(L.a)({},B.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,a=e.collapsible,r="card"===t?Object(L.a)({},B.cardTitle,n):{};return a?Object(L.a)({},B.toggleEnabled,r):r}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?r.a.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,r.a.createElement("div",{style:B.messageAfter})):r.a.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"\u2026")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=(e.title,e.subtitle,e.iconStyle),a=e.bubbleStyle,i=(e.buttons,e.icon),l=e.iconColor,o=(e.titleStyle,e.subtitleStyle,e.orientation),c=e.collapsible,s=Object(W.a)(e,["createdAt","title","subtitle","iconStyle","bubbleStyle","buttons","icon","iconColor","titleStyle","subtitleStyle","orientation","collapsible"]),d="right"===o?Object(L.a)({},B["event--right"]):Object(L.a)({},B["event--left"]);"left"===o?Object(L.a)({},B["actionButtons--right"]):Object(L.a)({},B["actionButtons--left"]);return r.a.createElement("div",{style:Object(L.a)({},B.event,d)},r.a.createElement("div",{style:this.mergeNotificationStyle(l,a,o)},r.a.createElement("span",{style:Object(L.a)({},B.materialIcons,n)},i)),r.a.createElement("div",Object.assign({},s,{style:this.containerStyle()}),r.a.createElement("div",{style:B.eventContainerBefore}),r.a.createElement("div",{style:this.toggleStyle(),onClick:c&&this.toggleContent},t),this.props.children&&this.renderChildren()),r.a.createElement("div",{style:B.eventAfter}))}}]),t}(a.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement(P,{createdAt:"2012-2013",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"Exchange student at the University of Washington"),r.a.createElement(P,{createdAt:"2010-2015",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"MA in English and Philosophy at Aarhus University"),r.a.createElement(P,{createdAt:"2008",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"London Music School"),r.a.createElement(P,{createdAt:"2004-2007",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"Skanderborg Gymnasium"))}}]),t}(r.a.Component),R={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:3,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}},U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,a=e.children,i=e.lineColor,l=e.lineStyle,o=e.style,c=Object(W.a)(e,["orientation","children","lineColor","lineStyle","style"]),s=r.a.Children.map(a,function(e){return r.a.cloneElement(e,{orientation:n})}),d="right"===n?Object(L.a)({},R["containerBefore--right"]):Object(L.a)({},R["containerBefore--left"]),h=Object(L.a)({},d,l);return h=i?Object(L.a)({},h,{background:i}):h,r.a.createElement("div",null,r.a.createElement("section",Object.assign({style:Object(L.a)({},R.container,o)},c),r.a.createElement("div",{style:Object(L.a)({},R.containerBefore,h)}),s,r.a.createElement("div",{style:R.containerAfter})))}}]),t}(a.Component);U.defaultProps={style:{},lineStyle:{}};var z=U,D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var a=e?Object(L.a)({},R.eventType,{color:e,borderColor:e}):R.eventType,r="right"===n?Object(L.a)({},R["eventType--right"]):Object(L.a)({},R["eventType--left"]);return Object(L.a)({},a,r,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?R.cardBody:R.message;return e?Object(L.a)({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?R.time:Object(L.a)({},R.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=Object(L.a)({},R.eventContainer,e);return this.showAsCard()?Object(L.a)({},R.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,a=e.collapsible,r="card"===t?Object(L.a)({},R.cardTitle,n):{};return a?Object(L.a)({},R.toggleEnabled,r):r}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?r.a.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,r.a.createElement("div",{style:R.messageAfter})):r.a.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"\u2026")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,a=e.subtitle,i=e.iconStyle,l=e.bubbleStyle,o=e.buttons,c=e.icon,s=e.iconColor,d=e.titleStyle,h=e.subtitleStyle,m=e.orientation,u=e.collapsible,p=Object(W.a)(e,["createdAt","title","subtitle","iconStyle","bubbleStyle","buttons","icon","iconColor","titleStyle","subtitleStyle","orientation","collapsible"]),g="right"===m?Object(L.a)({},R["event--right"]):Object(L.a)({},R["event--left"]),f="left"===m?Object(L.a)({},R["actionButtons--right"]):Object(L.a)({},R["actionButtons--left"]);return r.a.createElement("div",{style:Object(L.a)({},R.event,g)},r.a.createElement("div",{style:this.mergeNotificationStyle(s,l,m)},r.a.createElement("span",{style:Object(L.a)({},R.materialIcons,i)},c)),r.a.createElement("div",Object.assign({},p,{style:this.containerStyle()}),r.a.createElement("div",{style:R.eventContainerBefore}),r.a.createElement("div",{style:this.toggleStyle(),onClick:u&&this.toggleContent},t&&r.a.createElement("div",{style:this.timeStyle()},t),r.a.createElement("div",{style:d},n),a&&r.a.createElement("div",{style:Object(L.a)({},R.subtitle,h)},a),r.a.createElement("div",{style:Object(L.a)({},R.actionButtons,f)},o)),this.props.children&&this.renderChildren()),r.a.createElement("div",{style:R.eventAfter}))}}]),t}(a.Component);D.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1};var V=D,q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"mergeNotificationStyle",value:function(e){return e?Object(L.a)({},R.eventType,{color:e,borderColor:e}):R.eventType}},{key:"iconStyle",value:function(e){return Object(L.a)({},R.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,a=e.icon,i=e.orientation,l=e.iconColor,o=e.style,c=Object(W.a)(e,["title","iconStyle","icon","orientation","iconColor","style"]),s="right"===i?Object(L.a)({},R["event--right"]):Object(L.a)({},R["event--left"]);return r.a.createElement("div",{style:Object(L.a)({},R.event,{marginBottom:50},o)},r.a.createElement("div",{style:this.mergeNotificationStyle(l)},r.a.createElement("span",{style:this.iconStyle(n)},a)),r.a.createElement("div",Object.assign({},c,{style:Object(L.a)({},R.blipStyle,s)}),r.a.createElement("div",null,t)),r.a.createElement("div",{style:R.eventAfter}))}}]),t}(a.Component);q.defaultProps={iconStyle:{},style:{}};var F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(V,{createdAt:"2018-2019",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Randers Statsskole \u2013 English"),r.a.createElement(V,{createdAt:"2017-2018",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Ikast-Brande Gymnasium \u2013 English and Theory of Knowledge"),r.a.createElement(V,{createdAt:"2016-2017",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Vestjysk Gymnasium Tarm \u2013 English"),r.a.createElement(V,{createdAt:"2015-2016",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Ikast-Brande Gymnasium \u2013 English"),r.a.createElement(V,{createdAt:"2014-2016",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Volunteer translator and editor at the publishing company Philosophia"),r.a.createElement(V,{createdAt:"2011",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Instructor in academic research at Aarhus University"),r.a.createElement(V,{createdAt:"2011",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Mentor for exchange students at Aarhus University"))}}]),t}(r.a.Component),M=(n(47),function(e){var t=e.percent,n=e.titleColor,a=e.icon,i=e.name,l=e.barColor;return r.a.createElement("div",{className:"skillbar","data-percent":t},r.a.createElement("div",{className:"skillbar-title",style:{background:n}},r.a.createElement("span",null,r.a.createElement("i",{className:a})," ",i)),r.a.createElement("div",{className:"skillbar-bar",style:{background:l}}),r.a.createElement("div",{className:"skill-bar-percent"},t))}),G=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={isInViewport:!1},n.handleSroll=n.handleSroll.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleSroll),window.addEventListener("scroll",this.handleSroll)}},{key:"handleSroll",value:function(e){var t=Array.from(document.querySelectorAll(".skillbar"));function n(e){var t=e.offsetTop,n=t+e.offsetHeight,a=window.scrollY,r=a+window.innerHeight;return t>=a&&n<=r}!function(){for(var e,a=0;a<t.length;a++)n(t[a])&&(e=t[a]);if(void 0!==e){var r=e.children[1],i=e.getAttribute("data-percent");r.style.width=i}}()}},{key:"render",value:function(){return r.a.createElement("div",{id:"skillsWrapper"},r.a.createElement(M,{percent:"90%",titleColor:"#d35400",icon:"devicon-html5-plain-wordmark",name:"HTML5",barColor:"#e67e22"}),r.a.createElement(M,{percent:"70%",titleColor:"#2980b9",icon:"devicon-css3-plain-wordmark",name:"CSS3",barColor:"#3498db"}),r.a.createElement(M,{percent:"60%",titleColor:"#90832f",icon:"devicon-javascript-plain",name:"JavaScript",barColor:"#f0db4f"}),r.a.createElement(M,{percent:"60%",titleColor:"#008199",icon:"devicon-react-original-wordmark",name:"React.js",barColor:"#00d8ff"}),r.a.createElement(M,{percent:"60%",titleColor:"#2c3e50",icon:"devicon-jquery-plain-wordmark",name:"JQuery",barColor:"#2c3e50"}),r.a.createElement(M,{percent:"30%",titleColor:"#782817",icon:"devicon-git-plain-wordmark",name:"Git",barColor:"#f1502f"}))}}]),t}(r.a.Component),J=(n(49),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"cont"},r.a.createElement("ul",{class:"contact"},r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-map-marker fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Location"),r.a.createElement("br",null),"Aarhus, Denmark")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-phone fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone"),r.a.createElement("br",null),"+45 40 95 71 91")),r.a.createElement("a",{href:"mailto:jens_kj@hotmail.com"},r.a.createElement("li",{style:{textAlign:"left",paddingRight:10}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-envelope fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"E-mail"),r.a.createElement("br",null),r.a.createElement("p",{style:{visibility:"hidden"}},"fake text")))),r.a.createElement("a",{href:"https://www.linkedin.com/in/jens-k-jensen/"},r.a.createElement("li",{style:{textAlign:"left",color:"#0077B5"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-linkedin fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"LinkedIn"),r.a.createElement("br",null),r.a.createElement("p",{style:{visibility:"hidden"}},"fake text"))))))}}]),t}(r.a.Component)),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={NavbarHeight:""},n.handleNavbarHeight=n.handleNavbarHeight.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleNavbarHeight",value:function(e){this.setState({NavbarHeight:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement(g,{getNavbarHeight:this.state.NavbarHeight}),r.a.createElement(v,{getNavbarHeight:this.state.NavbarHeight,handleNavbarHeight:this.handleNavbarHeight}),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"projectsWrapperOuter"},r.a.createElement(j,{name:"Projects"}),r.a.createElement(A,null)),r.a.createElement("div",{id:"skillsWrapper"},r.a.createElement(j,{name:"Skills"}),r.a.createElement(G,null)),r.a.createElement(j,{name:"CV"}),r.a.createElement("div",{id:"timelineWrapper"},r.a.createElement("div",{id:"educationTimeline"},r.a.createElement(H,null)),r.a.createElement("div",{id:"workTimeline"},r.a.createElement(F,null)),r.a.createElement("div",{id:"faderWrapper"},r.a.createElement("div",{className:"scrollFaderTop"}),r.a.createElement("div",{className:"scrollFaderBottom"}))),r.a.createElement("div",{id:"contactMe"},r.a.createElement(j,{name:"Contact Me"}),r.a.createElement(J,null))))}}]),t}(a.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null))}}]),t}(a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");_?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Y(t,e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.4bfd601d.chunk.js.map