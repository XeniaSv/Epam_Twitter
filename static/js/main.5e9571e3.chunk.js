(this.webpackJsonpEpam_Twitter=this.webpackJsonpEpam_Twitter||[]).push([[0],{123:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(38),c=a(42),s=a(40),i=a(0),o=a.n(i),u=a(34),l=a(21),d=(a(123),a(44)),p=a(72),j=a.n(p),h=a(182),m=a(196),b=a(109),f=a(179),x=a(181),O=a(81),g=a(100),v=a.n(g),w=a(4),y=Object(b.a)({palette:{primary:{light:"#757ce8",main:j.a[400],dark:"#002884",contrastText:"#fff"}}}),N=Object(f.a)((function(e){return{typography:{padding:e.spacing(3),fontFamily:["Open Sans","serif"].join(",")}}}));var k=function(){var e=N(),t=o.a.useState(null),a=Object(d.a)(t,2),n=a[0],r=a[1],c=Boolean(n),s=c?"simple-popover":void 0;return Object(w.jsxs)(x.a,{theme:y,children:[Object(w.jsx)(h.a,{id:"info-button",color:"primary",onClick:function(e){r(e.currentTarget)},children:Object(w.jsx)(v.a,{})}),Object(w.jsx)(m.a,{id:s,open:c,anchorEl:n,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(w.jsx)(O.a,{className:e.typography,children:"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0442\u0432\u0438\u0442\u044b \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0442\u043e\u0447\u043d\u044b\u0439 \u041d\u0438\u043a \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u041d\u0430\u0439\u0442\u0438"})})]})},I=a(12),S=a.n(I),T=a(20),L=a(28);a(50);function C(){return M.apply(this,arguments)}function M(){return(M=Object(T.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L.a.firestore(),e.next=3,t.collection("users").get();case 3:return a=e.sent,e.abrupt("return",a.docs.map((function(e){return{id:e.id}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=a(185),D=Object(b.a)({palette:{primary:{light:"#757ce8",main:j.a[400],dark:"#002884",contrastText:"#fff"}}}),E=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handlerOnClick=function(){var t=document.querySelector(".search-text-field").querySelector("input").value.trim(),a=e.state.users;0!==t.length&&a.some((function(e){return e.id===t}))?(window.open("".concat("/Epam_Twitter","#").concat(u.pathSearch,"?searchValue=").concat(t),"_self"),window.location.reload()):0!==t.length&&alert("\u0414\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438.")},e.state={users:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(w.jsx)(x.a,{theme:D,children:Object(w.jsx)(F.a,{className:"search-button",variant:"contained",color:"primary",onClick:this.handlerOnClick,children:"\u041d\u0430\u0439\u0442\u0438"})})}}]),a}(o.a.Component),P=a(65),Y=a(194),B=a(195),R=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).keyPress=function(e){var t=e.target.value.trim(),a=r.state.users;13===e.keyCode&&0!==t.length&&a.some((function(e){return e.id===t}))?(window.open("".concat("/Epam_Twitter","#").concat(u.pathSearch,"?searchValue=").concat(t),"_self"),window.location.reload()):13===e.keyCode&&0!==t.length&&alert("\u0414\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438.")},r.state={users:[]},r.className=e.className,r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.users;return Object(w.jsx)(B.a,{className:this.className,disableClearable:!0,autoComplete:!0,freeSolo:!0,options:t.map((function(e){return e.id})),renderInput:function(t){return Object(w.jsx)(Y.a,Object(P.a)(Object(P.a)({},t),{},{label:"\u041f\u043e\u0438\u0441\u043a",onKeyDown:e.keyPress,InputProps:Object(P.a)(Object(P.a)({},t.InputProps),{},{type:"search"})}))}})}}]),a}(o.a.Component);R.defaultProps={className:""};var J=R,_=a.p+"static/media/twitter.69921557.svg";function q(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("header",{children:Object(w.jsx)(k,{className:"info-button"})}),Object(w.jsxs)("main",{className:"first-page-main",children:[Object(w.jsxs)("div",{className:"h1-and-icon",children:[Object(w.jsx)("h1",{children:"Mini Twitter"}),Object(w.jsx)("img",{alt:"Twitter icon",className:"twitter",src:_})]}),Object(w.jsxs)("div",{className:"search-div",children:[Object(w.jsx)(J,{className:"search-text-field"}),Object(w.jsx)(E,{})]})]})]})}a(99);var z=a(43),A=Object(f.a)((function(e){return{root:{flexGrow:1,position:"fixed",right:e.spacing(0),left:e.spacing(0),backgroundColor:"#42a5f5"},menuButton:{marginRight:e.spacing(2),color:"#fff"},title:Object(z.a)({flexGrow:1,color:"#fff",display:"none",marginLeft:e.spacing(23)},e.breakpoints.up("sm"),{display:"block"}),search:Object(z.a)({color:"#fff",position:"relative",marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:Object(z.a)({padding:e.spacing(1,1,1,0),color:"#fff",paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"},e.breakpoints.up("sm"),{width:"25ch"})}})),H=a(186),K=a(187),Q=a(102),V=a.n(Q),G=a(103),W=a.n(G);function U(){var e=A();return Object(w.jsx)(H.a,{color:"#42a5f5",className:e.root,children:Object(w.jsxs)(K.a,{children:[Object(w.jsx)(h.a,{edge:"start",className:e.menuButton,color:"inheru",href:"".concat("/Epam_Twitter","#").concat(u.pathHome),children:Object(w.jsx)(V.a,{})}),Object(w.jsx)(O.a,{className:e.title,variant:"h6",noWrap:!0,children:"Mini Twitter"}),Object(w.jsxs)("div",{className:e.search,children:[Object(w.jsx)("div",{className:e.searchIcon,children:Object(w.jsx)(W.a,{})}),Object(w.jsx)(J,{className:e.inputInput})]})]})})}var X=a(55),Z=a.n(X);function $(e,t,a){return ee.apply(this,arguments)}function ee(){return(ee=Object(T.a)(S.a.mark((function e(t,a,n){var r,c,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L.a.firestore(),e.next=3,r.collection("".concat(t,"Tweets")).doc(a).collection("Comments").doc(n).get();case 3:return c=e.sent,s=c.data(),i=Z()(1e3*s.Date.seconds).format("MMMM DD, YYYY"),e.abrupt("return",{date:i,image:s.Image,text:s.Text,name:s.Name});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=a(197),ae=a(188),ne=a(190),re=a(189),ce=a(80),se=Object(f.a)((function(){return{root:{maxWidth:700,marginTop:"30px",marginBottom:"30px",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:ce.a[500]},text:{textAlign:"left"},title:{float:"left"},subheader:{marginTop:"20px",width:"200px",textAlign:"left"}}}));function ie(e){var t=se(),a=Object(i.useState)({date:"Loading...",image:"",text:"Loading...",name:"Loading"}),n=Object(d.a)(a,2),r=n[0],c=n[1],s=e.userId,o=e.tweetId,u=e.commentId;return Object(i.useEffect)(Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,$(s,o,u);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[s,o,u]),Object(w.jsxs)(ae.a,{className:t.root,children:[Object(w.jsx)(re.a,{avatar:Object(w.jsx)(te.a,{className:t.avatar,src:r.image}),title:Object(w.jsx)("p",{className:t.title,children:r.name}),subheader:Object(w.jsx)("p",{className:t.subheader,children:r.date})}),Object(w.jsx)(ne.a,{children:Object(w.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",className:t.text,children:r.text})})]})}function oe(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(T.a)(S.a.mark((function e(t,a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L.a.firestore(),e.next=3,n.collection("".concat(t,"Tweets")).doc(a).collection("Comments").get();case 3:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return e.id})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return Math.abs(Number(e))>=1e9?"".concat(Math.abs(Number(e))/1e9,"B"):Math.abs(Number(e))>=1e6?"".concat(Math.abs(Number(e))/1e6,"M"):Math.abs(Number(e))>=1e3?"".concat(Math.abs(Number(e))/1e3,"K"):Math.abs(Number(e))}function de(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(T.a)(S.a.mark((function e(t,a){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L.a.firestore(),e.next=3,n.collection("".concat(t,"Tweets")).doc(a).get();case 3:return r=e.sent,c=r.data(),s=Z()(1e3*c.Date.seconds).format("hh:mm, MMMM DD, YYYY"),e.abrupt("return",{date:s,image:c.Image,likes:le(c.Likes),retweet:le(c.Retweet),text:c.Text});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}ie.defaultProps={userId:"",tweetId:"",commentId:""};var je=a(192),he=a(191),me=a(193),be=a(79),fe=a(106),xe=a.n(fe),Oe=a(107),ge=a.n(Oe),ve=a(104),we=a.n(ve),ye=a(105),Ne=a.n(ye),ke=a(6),Ie=Object(f.a)((function(e){return{root:{maxWidth:800,marginTop:"30px",marginBottom:"30px",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%"},expand:{color:be.a[600],transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:be.a[600]},like:{color:be.a[600],width:"30px",height:"30px"},reply:{color:be.a[600],width:"30px",height:"30px"},text:{fontSize:"16px",marginLeft:"5px",marginRight:"5px",color:be.a[600]}}}));function Se(e){var t=Ie(),a=Object(i.useState)(!1),n=Object(d.a)(a,2),r=n[0],c=n[1],s=Object(i.useState)({date:"Loading...",image:"",likes:"Loading...",retweet:"Loading...",text:"Loading..."}),o=Object(d.a)(s,2),u=o[0],l=o[1],p=Object(i.useState)([]),j=Object(d.a)(p,2),m=j[0],b=j[1],f=e.name,x=e.userId,g=e.avatar,v=e.docId;Object(i.useEffect)(Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,de(x,v);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=b,e.next=8,oe(x,v);case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)}))),[x,v]);return Object(w.jsxs)(ae.a,{className:t.root,children:[Object(w.jsx)(re.a,{avatar:Object(w.jsx)(te.a,{className:t.avatar,src:g}),title:"".concat(f," ").concat(x),subheader:u.date}),""!==u.image?Object(w.jsx)(he.a,{className:t.media,image:u.image,title:"Image"}):null,Object(w.jsx)(ne.a,{children:Object(w.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:u.text})}),Object(w.jsxs)(je.a,{disableSpacing:!0,className:"statistics",children:[Object(w.jsxs)("div",{className:"statistics-container",children:[Object(w.jsxs)("p",{className:t.text,children:[Object(w.jsx)("b",{children:u.likes}),"\xa0Likes"]}),Object(w.jsx)(we.a,{className:t.like})]}),Object(w.jsxs)("div",{className:"statistics-container",children:[Object(w.jsxs)("p",{className:t.text,children:[Object(w.jsx)("b",{children:u.retweet}),"\xa0Retweets"]}),Object(w.jsx)(Ne.a,{className:t.reply})]}),Object(w.jsxs)("div",{className:"statistics-container",children:[Object(w.jsxs)("p",{className:t.text,children:[Object(w.jsx)("b",{children:m.length}),"\xa0Comments"]}),Object(w.jsx)(h.a,{children:Object(w.jsx)(xe.a,{className:Object(ke.a)(t.expand,Object(z.a)({},t.expandOpen,r)),onClick:function(){c(!r)},children:Object(w.jsx)(ge.a,{})})})]})]}),Object(w.jsx)(me.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(w.jsx)(ne.a,{children:Object(w.jsx)(O.a,{paragraph:!0,children:m.map((function(e){return Object(w.jsx)(ie,{userId:x,tweetId:v,commentId:e})}))})})})]})}Se.defaultProps={name:"",userId:"",avatar:"",docId:""};var Te=Se;function Le(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(T.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.firestore(),e.next=3,a.collection("".concat(t,"Tweets")).get();case 3:return n=e.sent,e.abrupt("return",{TweetsId:n.docs.map((function(e){return e.id}))});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e){return 0===e.length?(document.querySelector("blockquote").style.display="none",null):e}function Fe(e){return De.apply(this,arguments)}function De(){return(De=Object(T.a)(S.a.mark((function e(t){var a,n,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.a.firestore(),e.next=3,a.collection("users").doc(t).get();case 3:return n=e.sent,r=n.data(),c=Z()(1e3*r.Joined.seconds).format("MMMM YYYY"),e.abrupt("return",{Name:r.Name,ID:t,Joined:c,Following:le(r.Following),Followers:le(r.Followers),Quote:Me(r.Quote),Image:r.Image});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=a.p+"static/media/calendar.ce421b1b.svg",Pe=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={Name:"Loading...",ID:"Loading...",Joined:"Loading...",Following:"Loading...",Followers:"Loading...",Quote:"Loading...",Image:"",TweetsId:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(window.location.href.replace(/#/g,"")),a=t.searchParams.get("searchValue"),e.t0=this,e.next=5,Fe(a);case 5:return e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),e.t2=this,e.next=10,Le(a);case 10:e.t3=e.sent,e.t2.setState.call(e.t2,e.t3);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.Name,a=e.ID,n=e.Joined,r=e.Following,c=e.Followers,s=e.Quote,i=e.Image,o=e.TweetsId;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(U,{}),Object(w.jsxs)("main",{className:"twittPage-main",children:[Object(w.jsx)(te.a,{alt:"Remy Sharp",src:i,id:"avatar"}),Object(w.jsx)("h1",{children:t}),Object(w.jsx)("h3",{children:a}),Object(w.jsx)("blockquote",{children:s}),Object(w.jsxs)("div",{className:"account-info",children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("img",{id:"cal-img",alt:"User",src:Ee}),Object(w.jsxs)("p",{children:["\xa0 Joined",n]})]}),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("b",{children:r}),Object(w.jsx)("p",{children:"\xa0 Following"})]}),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("b",{children:c}),Object(w.jsx)("p",{children:"\xa0 Followers"})]})]}),Object(w.jsx)("hr",{}),o.map((function(e){return Object(w.jsx)(Te,{name:t,userId:a,avatar:i,docId:e})}))]})]})}}]),a}(o.a.Component);window.onhashchange=function(){location.reload()};var Ye=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{history:history,exact:!0,path:u.pathHome,component:q}),Object(w.jsx)(l.b,{history:history,exact:!0,path:u.pathSearch,component:Pe}),Object(w.jsx)(l.a,{from:"/",to:u.pathHome})]})}}]),a}(o.a.Component),Be=(a(140),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,198)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))}),Re=a(108),Je=a(19),_e=a.n(Je),qe=a(86);L.a.initializeApp({apiKey:"AIzaSyCdxtxrAle5FDE33LpqKFSSfVn5Kysvfic",authDomain:"mini-twitter-ffd82.firebaseapp.com",projectId:"mini-twitter-ffd82",storageBucket:"mini-twitter-ffd82.appspot.com",messagingSenderId:"251752021580",appId:"1:251752021580:web:66f60b6d94b1cc8043bee9",measurementId:"G-HEPDS3ET9C"});var ze=Object(Re.a)();_e.a.render(Object(w.jsx)(qe.a,{history:ze,children:Object(w.jsx)(Ye,{})}),document.getElementById("root")),Be()},34:function(e,t){e.exports={pathHome:"/home",pathSearch:"/search"}},99:function(e,t,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.5e9571e3.chunk.js.map