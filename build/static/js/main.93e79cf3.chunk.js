(this.webpackJsonpbstorage=this.webpackJsonpbstorage||[]).push([[0],{122:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},229:function(e,t,n){},231:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(54),s=n.n(r),i=(n(199),n(27)),o=n(7),l=(n(200),n(66)),u=n(77),d=n.n(u),j=(n(201),n(155)),b=n.n(j),h=n(159),m=n.n(h),O=n(160),p=n.n(O),f=n(161),x=n.n(f),v=n(162),g=n.n(v),y=n(163),N=n.n(y),I=n(41),S=n(1),k=Object(I.b)((function(e){return{user:e.EventUser}}))(Object(i.f)((function(e){console.log(e);var t=e.id,n=e.display;return Object(S.jsxs)("div",{className:n?"shadow-lg dashhead":"dashhead displayhidden",children:[Object(S.jsx)("h1",{children:"GP Admin"}),1===t?Object(S.jsx)("div",{onClick:function(){return e.history.push("dashboard")},className:"menu-container-active",children:Object(S.jsxs)("p",{children:[Object(S.jsx)(b.a,{})," ",Object(S.jsx)("span",{className:"pl-1",children:"Home"})]})}):Object(S.jsx)("div",{className:"menu-container",onClick:function(){return e.history.push("dashboard")},children:Object(S.jsxs)("p",{children:[Object(S.jsx)(m.a,{})," ",Object(S.jsx)("span",{className:"pl-2",children:"Home"})]})}),2===t?Object(S.jsx)("div",{className:"menu-container-active",onClick:function(){return e.history.push("merchants")},children:Object(S.jsxs)("p",{children:[Object(S.jsx)(p.a,{})," ",Object(S.jsx)("span",{className:"pl-1",children:"Merchants"})]})}):Object(S.jsx)("div",{className:"menu-container",onClick:function(){return e.history.push("merchants")},children:Object(S.jsxs)("p",{children:[Object(S.jsx)(x.a,{})," ",Object(S.jsx)("span",{className:"pl-2",children:"Merchants"})]})}),3===t?Object(S.jsx)("div",{className:"menu-container-active",onClick:function(){return e.history.push("organization")},children:Object(S.jsxs)("p",{children:[Object(S.jsx)(g.a,{})," ",Object(S.jsx)("span",{className:"pl-1",children:"Organization"})]})}):Object(S.jsx)("div",{className:"menu-container",onClick:function(){return e.history.push("organization")},children:Object(S.jsxs)("p",{children:[Object(S.jsx)(N.a,{})," ",Object(S.jsx)("span",{className:"pl-2",children:"Organization"})]})})]})}))),E=n(46),w=n.n(E),C=(n(225),n(226),n(89)),P=n.n(C),T=n(48),M=n(19),U=n.n(M),R=function(e){return function(){var t=Object(T.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("".concat("https://cleverpe-staging.herokuapp.com","/api/user/single"),{headers:{token:e}}).then((function(e){n({type:"STORE_USERINFO",payload:e.data.result})})).catch((function(e){}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var z=Object(I.b)((function(e){return{user:e.EventUser}}),(function(e){return{getUserInfo:function(t){return e(R(t))}}}))((function(e){var t=c.a.useState(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState({}),i=Object(o.a)(s,2),u=(i[0],i[1],c.a.useState([])),j=Object(o.a)(u,2);return j[0],j[1],c.a.useEffect((function(){e.getUserInfo(e.user.user)}),[]),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2",children:Object(S.jsx)(k,{id:1,display:a})}),Object(S.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container",onClick:function(){return a&&r(!1)},children:[Object(S.jsx)("span",{className:"iconbutton display-mobile",children:Object(S.jsx)(l.a,{size:"large","aria-label":"Menu",onClick:function(){return r(!0)},children:Object(S.jsx)(d.a,{fontSize:"inherit"})})}),Object(S.jsx)("h1",{children:"Hi, Group Admin"}),e.user.userInfo&&Object(S.jsxs)("section",{children:[Object(S.jsxs)("p",{children:["Name: ",e.user.userInfo.name]}),Object(S.jsxs)("p",{children:["Email: ",e.user.userInfo.email]}),Object(S.jsxs)("p",{children:["GroupId: ",e.user.userInfo.groupId]}),Object(S.jsxs)("p",{children:["Mobile No: ",e.user.userInfo.mobileNo]}),Object(S.jsxs)("p",{children:["Role: ",e.user.userInfo.role]})]})]})]})})),G=n(21),_=(n(122),n(97)),B=n(74),W=n(298),A=n(50);var D=Object(I.b)(null,(function(e){return{setUser:function(t){return e({type:"SET_USER",payload:t})},getUserInfo:function(t){return e(R(t))}}}))((function(e){console.log("verify otp props",e);var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),i=Object(o.a)(s,2),l=i[0],u=i[1],d=c.a.useState(0),j=Object(o.a)(d,2),b=j[0],h=j[1];c.a.useEffect((function(){b>0&&setTimeout((function(){h(b-1)}),1e3)}),[b]);var m=function(t){w.a.post("".concat("https://cleverpe-staging.herokuapp.com","/api/auth/verifyOTP"),Object(G.a)(Object(G.a)({},e.location.state.data),{},{otp:t})).then((function(t){console.log(t),201===t.status?r(t.data.result):(e.setUser(t.data.result),e.getUserInfo(t.data.result),e.history.push("/dashboard"))})).catch((function(e){r("Something went wrong")}))};return Object(S.jsx)("div",{className:"body",children:Object(S.jsxs)("div",{className:"shadow-sm auth-container",children:[Object(S.jsx)("img",{src:"/cleverpeblack.png",alt:"cleverpe",className:"logo"}),Object(S.jsx)("h3",{children:"Be Clever Pe Later"}),Object(S.jsxs)("h6",{children:["OTP has been sent to ",e.location.state.data.mobileNo]}),"merchantprofile"===e.location.state.auth&&Object(S.jsx)("section",{children:Object(S.jsx)("p",{className:"mototext",children:"You're just one step away in becoming a CleverPe Merchant !!"})}),Object(S.jsx)("p",{style:{color:"#ccc"},children:e.location.state.data.otp}),Object(S.jsx)(_.a,{onChange:function(e){return t=e.target.value,u(parseInt(t)),void(6===parseInt(t).length&&m(t));var t},className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Enter OTP"}),Object(S.jsx)("div",{style:{textAlign:"right"},children:0!==b?Object(S.jsxs)(B.a,{disabled:!0,children:["Resend OTP (",b,")"]}):Object(S.jsx)(B.a,{onClick:function(){return h(59)},children:"Resend OTP"})}),a.length>0&&Object(S.jsx)(W.a,{className:"alert",severity:"error",children:a}),Object(S.jsxs)("p",{className:"grey subtitle my-3",children:["By continuing, you agree to CleverPe ",Object(S.jsx)(A.b,{to:"/termsandconditions",children:"Terms and Conditions"})," of Use and ",Object(S.jsx)(A.b,{to:"/privacypolicy",children:"Privacy Policy"}),"."]}),Object(S.jsx)(B.a,{onClick:function(){m(l)},className:"mt-2",fullWidth:!0,variant:"contained",children:"Verify OTP"}),Object(S.jsx)("p",{className:"grey subtitle mt-3",children:"\xa92022 Cleverpe Technologies Private Limited"})]})})})),L=n(105);var q=Object(I.b)((function(e){return{loading:e.loading}}))((function(e){var t=Object(L.a)(),n=t.handleSubmit,a=t.register,r=t.formState.errors,s=c.a.useState(""),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(S.jsx)("div",{className:"body",children:Object(S.jsxs)("div",{className:"shadow-sm auth-container",children:[Object(S.jsx)("img",{src:"/cleverpeblack.png",alt:"cleverpe",className:"logo"}),Object(S.jsx)("h3",{children:"Be Clever Pe Later"}),Object(S.jsx)("h6",{children:"SignIn buy entering the information below"}),Object(S.jsxs)("form",{onSubmit:n((function(t){parseInt(t.mobile)?(u(""),w.a.post("".concat("https://cleverpe-staging.herokuapp.com","/api/auth/signin"),{mobileNo:t.mobile}).then((function(t){"Error"===t.data.msg?u(t.data.result):e.location.state?e.history.push("/verifyotp",{auth:e.location.state.route,data:t.data}):e.history.push("/verifyotp",{auth:"myprofile",data:t.data})})).catch((function(e){u("Check your internet connection")}))):u("Enter valid mobile number")})),children:[Object(S.jsx)(_.a,Object(G.a)(Object(G.a)({error:!!r.mobile},a("mobile",{required:!0,valueAsNumber:!0})),{},{className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Mobile Number"})),l.length>0&&Object(S.jsx)(W.a,{className:"alert",severity:"error",children:l}),Object(S.jsx)(B.a,{type:"submit",className:"mt-4",fullWidth:!0,variant:"contained",children:"Signin"}),Object(S.jsxs)("p",{className:"grey subtitle my-3",children:["By continuing, you agree to CleverPe ",Object(S.jsx)(A.b,{to:"/termsandconditions",children:"Terms and Conditions"})," of Use and ",Object(S.jsx)(A.b,{to:"/privacypolicy",children:"Privacy Policy"}),"."]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:"mt-3",children:[Object(S.jsx)("p",{className:"newtext",children:"New to CleverPe? Dive in by creating an account"}),Object(S.jsx)(B.a,{fullWidth:!0,variant:"outlined",onClick:function(){return e.history.push("/signup",e.location.state)},children:"create an account"})]})]}),Object(S.jsx)("p",{className:"grey subtitle mt-3",children:"\xa92022 Cleverpe Technologies Private Limited"})]})})})),H=(n(229),n(101));var Y=[{field:"id",headerName:"ID",width:20},{field:"name",headerName:"Name",valueGetter:function(e){return e.row.name},width:150},{field:"email",headerName:"Email",valueGetter:function(e){return e.row.email},width:200},{field:"groupId",headerName:"GroupId",valueGetter:function(e){return e.row.groupId},width:150},{field:"mobileNo",headerName:"Mobile No",valueGetter:function(e){return e.row.mobileNo},width:150},{field:"merchantId",headerName:"Merchant Id",valueGetter:function(e){return e.row.merchantId},width:150},{field:"verified",headerName:"Verified",valueGetter:function(e){return e.row.verified.toString()},width:150},{field:"createdAt",headerName:"Created At",valueGetter:function(e){return P.a.parseZone(e.value).local().format("DD/MM/YY")},width:120}],F=Object(I.b)((function(e){return{user:e.EventUser}}))((function(e){var t=c.a.useState(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState([]),i=Object(o.a)(s,2),u=i[0],j=i[1];return c.a.useEffect((function(){console.log(e.user.userInfo.groupId),w.a.post("".concat("https://cleverpe-staging.herokuapp.com","/api/org/members"),{groupId:e.user.userInfo.groupId},{headers:{token:e.user.user}}).then((function(e){console.log(e);var t=e.data.result.map((function(e,t){return Object(G.a)(Object(G.a)({},e),{},{id:t+1})}));j(t)})).catch((function(e){console.log(e)}))}),[]),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2",children:Object(S.jsx)(k,{id:2,display:a})}),Object(S.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container",onClick:function(){return a&&r(!1)},children:[Object(S.jsx)("span",{className:"iconbutton display-mobile",children:Object(S.jsx)(l.a,{size:"large","aria-label":"Menu",onClick:function(){return r(!0)},children:Object(S.jsx)(d.a,{fontSize:"inherit"})})}),Object(S.jsx)("h1",{children:"Merchants Belonging to Your Group"}),Object(S.jsx)("div",{style:{height:"80vh",width:"100%"},children:Object(S.jsx)(H.a,{rows:u,columns:Y,autoPageSize:!0,checkboxSelection:!0,onRowClick:function(t,n){return e.history.push("/orderdetails",t.row)}})})]})]})}));var J=function(e){var t=Object(L.a)(),n=t.handleSubmit,a=t.register,r=(t.formState.errors,c.a.useState("")),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(S.jsx)("div",{className:"body",children:Object(S.jsxs)("div",{className:"shadow-sm auth-container",children:[Object(S.jsx)("img",{src:"/cleverpeblack.png",alt:"cleverpe",className:"logo"}),Object(S.jsx)("h3",{children:"Be Clever Pe Later"}),Object(S.jsx)("h6",{children:"SignIn by entering the information below"}),Object(S.jsxs)("form",{onSubmit:n((function(t){t.email=t.email.trim(),w.a.post("".concat("https://cleverpe-staging.herokuapp.com","/api/auth/signup"),Object(G.a)(Object(G.a)({},t),{},{type:2})).then((function(t){"Error"===t.data.msg?l(t.data.result):e.location.state?e.history.push("/verifyotp",{auth:e.location.state.route,data:t.data}):e.history.push("/verifyotp",{auth:"myprofile",data:t.data})})).catch((function(e){l("Something went wrong, check your internet connection and try again")}))})),children:[Object(S.jsx)(_.a,Object(G.a)(Object(G.a)({},a("name",{required:!0})),{},{className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Name"})),Object(S.jsx)(_.a,Object(G.a)(Object(G.a)({},a("email",{required:!0})),{},{className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Email"})),Object(S.jsx)(_.a,Object(G.a)(Object(G.a)({},a("mobileNo",{required:!0})),{},{className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Mobile Number"})),Object(S.jsx)(_.a,Object(G.a)(Object(G.a)({},a("postCode",{required:!0})),{},{className:"textfield",fullWidth:!0,variant:"outlined",id:"outlined-basic",label:"Pin Code"})),i.length>0&&Object(S.jsx)(W.a,{className:"alert",severity:"error",children:i}),Object(S.jsxs)("p",{className:"grey subtitle my-3",children:["By continuing, you agree to CleverPe ",Object(S.jsx)(A.b,{to:"/termsandconditions",children:"Terms and Conditions"})," of Use and ",Object(S.jsx)(A.b,{to:"/privacypolicy",children:"Privacy Policy"}),"."]}),Object(S.jsx)(B.a,{type:"submit",className:"mt-4",fullWidth:!0,variant:"contained",children:"SignUp"})]}),Object(S.jsx)("p",{className:"grey subtitle mt-3",children:"\xa92022 Cleverpe Technologies Private Limited"})]})})};n(231);var K=Object(I.b)((function(e){return{user:e.EventUser}}))((function(e){var t=c.a.useState(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=c.a.useState(null),i=Object(o.a)(s,2),u=i[0],j=i[1];return c.a.useEffect((function(){console.log(e.user.userInfo.groupId),w.a.post("".concat("https://cleverpe-staging.herokuapp.com","/api/org/single"),{organisationId:e.user.userInfo.organisation},{headers:{token:e.user.user}}).then((function(e){console.log(e),j(e.data.result)}))}),[]),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2",children:Object(S.jsx)(k,{id:3,display:a})}),Object(S.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container",onClick:function(){return a&&r(!1)},children:[Object(S.jsx)("span",{className:"iconbutton display-mobile",children:Object(S.jsx)(l.a,{size:"large","aria-label":"Menu",onClick:function(){return r(!0)},children:Object(S.jsx)(d.a,{fontSize:"inherit"})})}),Object(S.jsx)("h1",{children:"Organization"}),u&&Object(S.jsxs)("section",{children:[Object(S.jsxs)("p",{children:["Name: ",u.name]}),Object(S.jsxs)("p",{children:["Group ID: ",u.groupId]}),Object(S.jsxs)("p",{children:["Admin: ",u.admin]}),Object(S.jsxs)("p",{children:["Contact Email: ",u.contactEmail]}),Object(S.jsxs)("p",{children:["Contact No: ",u.contactNo]})]})]})]})}));var V=function(){return Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{exact:!0,path:"/",component:q}),Object(S.jsx)(i.a,{path:"/signup",component:J}),Object(S.jsx)(i.a,{path:"/dashboard",component:z}),Object(S.jsx)(i.a,{path:"/signin",component:q}),Object(S.jsx)(i.a,{path:"/verifyotp",component:D}),Object(S.jsx)(i.a,{path:"/merchants",component:F}),Object(S.jsx)(i.a,{path:"/organization",component:K})]})},Z=n(57),Q=n(168),X=n.n(Q),$={user:null,userInfo:null,orderId:"",merchant:{},emi:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(G.a)(Object(G.a)({},e),{},{user:t.payload});case"STORE_USERINFO":return Object(G.a)(Object(G.a)({},e),{},{userInfo:t.payload});case"DELETE_USER":return $;case"STORE_ORDER_ID":return Object(G.a)(Object(G.a)({},e),{},{orderId:t.payload});case"STORE_MERCHANT":return Object(G.a)(Object(G.a)({},e),{},{merchant:t.payload});case"STORE_EMI":return Object(G.a)(Object(G.a)({},e),{},{emi:t.payload});default:return e}},te=n(14),ne={messages:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_SOCKET":return{messages:t.payload};case"UPDATE_SOCKET":return{messages:[].concat(Object(te.a)(e.messages),[t.payload])};default:return e}},ce=n(93),re=n(169),se={key:"socket",storage:n.n(re).a,blacklist:["state"]},ie=Object(Z.b)({EventUser:ee,socket:Object(ce.a)(se,ae)}),oe=n(171),le=n(170),ue={key:"root",storage:n.n(le).a,blackList:["socket"]},de=Object(ce.a)(ue,ie),je=[X.a,oe.a],be=Object(Z.c)(de,Z.a.apply(void 0,je)),he=Object(ce.b)(be),me=n(173),Oe=n(299),pe=n(172),fe=Object(me.a)({palette:{primary:{main:"#000"},secondary:{main:"#fc0303"},tertiary:{main:"#b66dff"}},components:{MuiButton:{styleOverrides:{root:{"&:focus":{outline:"none"}}}},MuiIconButton:{styleOverrides:{root:{"&:focus":{outline:"none"}}}},MuiTab:{styleOverrides:{root:{"&:focus":{outline:"none"}}}},MuiPagination:{styleOverrides:{root:{"&:focus":{outline:"none"}}}},MuiPaginationItem:{styleOverrides:{root:{"&:focus":{outline:"none"}}}}}});s.a.render(Object(S.jsx)(I.a,{store:be,children:Object(S.jsx)(pe.a,{loading:null,persistor:he,children:Object(S.jsx)(A.a,{children:Object(S.jsx)(Oe.a,{theme:fe,children:Object(S.jsx)(V,{})})})})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.93e79cf3.chunk.js.map