(this["webpackJsonpsivanandha-vidyashram-seithur"]=this["webpackJsonpsivanandha-vidyashram-seithur"]||[]).push([[21],{1263:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),i=(t(96),t(3),t(2)),o=t(9),c=r.forwardRef((function(e,a){var t=e.active,o=void 0!==t&&t,c=e.alternativeLabel,s=e.children,d=e.classes,m=e.className,u=e.completed,p=void 0!==u&&u,b=e.connector,f=e.disabled,v=void 0!==f&&f,E=e.expanded,h=void 0!==E&&E,y=e.index,x=e.last,O=e.orientation,j=Object(n.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),N=b?r.cloneElement(b,{orientation:O,alternativeLabel:c,index:y,active:o,completed:p,disabled:v}):null,g=r.createElement("div",Object(l.a)({className:Object(i.default)(d.root,d[O],m,c&&d.alternativeLabel,p&&d.completed),ref:a},j),N&&c&&0!==y?N:null,r.Children.map(s,(function(e){return r.isValidElement(e)?r.cloneElement(e,Object(l.a)({active:o,alternativeLabel:c,completed:p,disabled:v,expanded:h,last:x,icon:y+1,orientation:O},e.props)):null})));return N&&!c&&0!==y?r.createElement(r.Fragment,null,N,g):g}));a.a=Object(o.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(c)},1363:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),i=(t(3),t(2)),o=t(9),c=t(174),s=t(48),d=Object(s.a)(r.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=Object(s.a)(r.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),u=t(239),p=r.createElement("circle",{cx:"12",cy:"12",r:"12"}),b=r.forwardRef((function(e,a){var t=e.completed,l=void 0!==t&&t,n=e.icon,o=e.active,c=void 0!==o&&o,s=e.error,b=void 0!==s&&s,f=e.classes;if("number"===typeof n||"string"===typeof n){var v=Object(i.default)(f.root,c&&f.active,b&&f.error,l&&f.completed);return b?r.createElement(m,{className:v,ref:a}):l?r.createElement(d,{className:v,ref:a}):r.createElement(u.a,{className:v,ref:a},p,r.createElement("text",{className:f.text,x:"12",y:"16",textAnchor:"middle"},n))}return n})),f=Object(o.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(b),v=r.forwardRef((function(e,a){var t=e.active,o=void 0!==t&&t,s=e.alternativeLabel,d=void 0!==s&&s,m=e.children,u=e.classes,p=e.className,b=e.completed,v=void 0!==b&&b,E=e.disabled,h=void 0!==E&&E,y=e.error,x=void 0!==y&&y,O=(e.expanded,e.icon),j=(e.last,e.optional),N=e.orientation,g=void 0===N?"horizontal":N,S=e.StepIconComponent,L=e.StepIconProps,w=Object(n.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),C=S;return O&&!C&&(C=f),r.createElement("span",Object(l.a)({className:Object(i.default)(u.root,u[g],p,h&&u.disabled,d&&u.alternativeLabel,x&&u.error),ref:a},w),O||C?r.createElement("span",{className:Object(i.default)(u.iconContainer,d&&u.alternativeLabel)},r.createElement(C,Object(l.a)({completed:v,active:o,error:x,icon:O},L))):null,r.createElement("span",{className:u.labelContainer},m?r.createElement(c.a,{variant:"body2",component:"span",display:"block",className:Object(i.default)(u.label,d&&u.alternativeLabel,v&&u.completed,o&&u.active,x&&u.error)},m):null,j))}));v.muiName="StepLabel";a.a=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(v)},1364:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),i=(t(3),t(2)),o=t(9),c=t(173),s=r.forwardRef((function(e,a){var t=e.active,o=e.alternativeLabel,c=void 0!==o&&o,s=e.classes,d=e.className,m=e.completed,u=e.disabled,p=(e.index,e.orientation),b=void 0===p?"horizontal":p,f=Object(n.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return r.createElement("div",Object(l.a)({className:Object(i.default)(s.root,s[b],d,c&&s.alternativeLabel,t&&s.active,m&&s.completed,u&&s.disabled),ref:a},f),r.createElement("span",{className:Object(i.default)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[b])}))})),d=Object(o.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(s),m=r.createElement(d,null),u=r.forwardRef((function(e,a){var t=e.activeStep,o=void 0===t?0:t,s=e.alternativeLabel,d=void 0!==s&&s,u=e.children,p=e.classes,b=e.className,f=e.connector,v=void 0===f?m:f,E=e.nonLinear,h=void 0!==E&&E,y=e.orientation,x=void 0===y?"horizontal":y,O=Object(n.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),j=r.isValidElement(v)?r.cloneElement(v,{orientation:x}):null,N=r.Children.toArray(u),g=N.map((function(e,a){var t={index:a,active:!1,completed:!1,disabled:!1};return o===a?t.active=!0:!h&&o>a?t.completed=!0:!h&&o<a&&(t.disabled=!0),r.cloneElement(e,Object(l.a)({alternativeLabel:d,connector:j,last:a+1===N.length,orientation:x},t,e.props))}));return r.createElement(c.a,Object(l.a)({square:!0,elevation:0,className:Object(i.default)(p.root,p[x],b,d&&p.alternativeLabel),ref:a},O),g)}));a.a=Object(o.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(u)},1376:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(16),i=t(195),o=t(8),c=t(60),s={data:[],searchText:"",usertypeValue:"student",todoDialog:{type:"edit",props:{open:!1},data:null,mode:null}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.a.SET_SEARCH_TEXT:return Object(o.a)(Object(o.a)({},e),{},{searchText:a.searchText});case c.a.SET_USERLIST_USER_TYPE:return Object(o.a)(Object(o.a)({},e),{},{usertypeValue:a.usertypeValue});case c.a.OPEN_EDIT_RESET_DIALOG:return Object(o.a)(Object(o.a)({},e),{},{todoDialog:{type:"edit",props:{open:!0},data:a.data,mode:a.mode}});case c.a.CLOSE_EDIT_RESET_DIALOG:return Object(o.a)(Object(o.a)({},e),{},{todoDialog:{type:"edit",props:{open:!1},data:null}});case c.a.SET_USERLIST_PAGINATION:return Object(o.a)(Object(o.a)({},e),{},{current:a.current,pageSize:a.pageSize});default:return e}},m=t(812),u=t(174);var p=function(e){return n.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(r.a,{animation:"transition.expandIn",delay:300},n.a.createElement(m.a,{className:"text-32 mr-12"},"how_to_reg")),n.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(u.a,{variant:"h6",className:"hidden sm:flex"},"Create an Account"))))},b=t(10),f=t(822),v=t(847),E=t(1364),h=t(1263),y=t(1363),x=t(820),O=t(851),j=t(836),N=t(832),g=t(192),S=t(11),L=t(21),w=t(79),C=t.n(w),I=t(101),T=t(70),R=t(127),z=t(33),A=t(810),P=t(756),k=t(811),_=t(845),D=t(852),F=t(87);var U=function(e){var a=e.userId,t=e.userType,r=e.userName,i=e.displayName,o=Object(S.b)(),c=Object(F.g)(),s=Object(l.useState)([]),d=Object(b.a)(s,2),m=d[0],u=d[1],p=Object(g.b)(R.d),f=Object(b.a)(p,2),v=f[0],E=f[1],h=E.loading,y=(E.error,E.data),x=Object(g.c)(R.e,{onCompleted:function(e){e&&e.rolesAddToUser&&(o(L.j({message:"Roles added to user successfully.",variant:"success"})),c.push({pathname:"/users/list"}))}}),O=Object(b.a)(x,2),j=O[0],w=O[1];w.loading,w.error,Object(l.useEffect)((function(){v()}),[]);var C=function(e){return function(){var a=m.indexOf(e.id),t=Object(z.a)(m);-1===a?t.push(e.id):t.splice(a,1),u(t)}};return h&&!y?n.a.createElement(T.s,null):n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"table-responsive w-1/2"},n.a.createElement("table",{className:"simple"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"student"===t?"Student Name":"Staff Name"),n.a.createElement("td",{className:"font-bold text-red"},i)),n.a.createElement("tr",null,n.a.createElement("td",null,"User Name"),n.a.createElement("td",{className:"font-bold text-red"},r))))),n.a.createElement(A.a,{dense:!0},y&&y.roleList.map((function(e){return n.a.createElement(P.a,{key:e.id,button:!0,onClick:C(e)},n.a.createElement(k.a,{primary:e.rolename}),n.a.createElement(_.a,null,n.a.createElement(D.a,{checked:-1!==m.indexOf(e.id),tabIndex:-1,onChange:C(e)})))}))),n.a.createElement(N.a,{className:"whitespace-no-wrap normal-case ml-24",variant:"contained",color:"primary",onClick:function(){j({variables:{userId:a,roleIds:m}})}},"Assign Roles"))},$={canSubmit:!1,usertype:"student",students:"",staff:"",username:"",password:"",displayName:""};var q=function(e){var a=Object(S.b)(),t=Object(l.useRef)(null),i=Object(l.useState)(0),c=Object(b.a)(i,2),s=c[0],d=c[1],u=Object(l.useState)(!1),p=Object(b.a)(u,2),w=p[0],z=p[1],A=Object(I.b)($),P=A.form,k=A.setForm,_=A.setInForm,D=Object(l.useState)(null),F=Object(b.a)(D,2),q=F[0],V=F[1],M=Object(g.c)(R.b,{onCompleted:function(e){if(e&&e.registerUser){a(L.j({message:"User registered successfully. Please Assign roles",variant:"success"}));var t=e.registerUser.id;V(t),X()}}}),W=Object(b.a)(M,2),H=W[0],G=W[1],J=(G.loading,G.error,function(e,a){_(a,e.value),_("displayName",e.label)}),X=function(){d((function(e){return e+1}))};return n.a.createElement("div",{className:"flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0 w-full"},n.a.createElement(f.a,{className:"w-full mx-auto m-16 md:m-0"},n.a.createElement(v.a,{className:"flex flex-col items-center justify-center"},n.a.createElement(E.a,{alternativeLabel:!0,activeStep:s,className:"w-1/2 mb-24"},n.a.createElement(h.a,{key:"basicinfo"},n.a.createElement(y.a,null,"User Registration")),n.a.createElement(h.a,{key:"parents"},n.a.createElement(y.a,null,"Assign Roles"))),0===s&&n.a.createElement(C.a,{onValidSubmit:function(e){var a=null,t=null;"student"===e.usertype?a=P.students:"staff"===e.usertype&&(t=P.staff);var l={username:e.username,password:e.password,usertype:e.usertype,staff:t,students:a};k(Object(o.a)(Object(o.a)({},l),{},{displayName:P.displayName})),H({variables:l})},onValid:function(){z(!0)},onInvalid:function(){z(!1)},ref:t,className:"flex flex-col justify-center items-center w-full"},n.a.createElement(r.w,{className:"mb-16 items-start",row:!0,"aria-label":"usertype",name:"usertype",value:P.usertype,onChange:function(e){_("usertype",e.target.value)},required:!0},n.a.createElement(x.a,{value:"student",control:n.a.createElement(O.a,{color:"primary"}),label:"Student",labelPlacement:"end"}),n.a.createElement(x.a,{value:"staff",control:n.a.createElement(O.a,{color:"secondary"}),label:"Staff",labelPlacement:"end"})),"student"===P.usertype&&n.a.createElement(T.d,{label:"Select Student",cssClass:"mb-16",onDDChange:J}),"staff"===P.usertype&&n.a.createElement(T.w,{itemName:P.staff,optionName:"staff",label:"Select Class Teacher",cssClass:"w-1/2 mb-16",onDDChange:J}),n.a.createElement(r.x,{className:"mb-16 w-1/2",type:"text",name:"username",label:"User Name",validationErrors:{isEmail:"Please enter a valid user name"},InputProps:{endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(m.a,{className:"text-20",color:"action"}))},variant:"outlined",required:!0}),n.a.createElement(r.x,{className:"mb-16 w-1/2",type:"password",name:"password",label:"Password",validations:"equalsField:password-confirm",validationErrors:{equalsField:"Passwords do not match"},InputProps:{endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(m.a,{className:"text-20",color:"action"}))},variant:"outlined",required:!0}),n.a.createElement(r.x,{className:"mb-16 w-1/2",type:"password",name:"password-confirm",label:"Confirm Password",validations:"equalsField:password",validationErrors:{equalsField:"Passwords do not match"},InputProps:{endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(m.a,{className:"text-20",color:"action"}))},variant:"outlined",required:!0}),n.a.createElement(N.a,{variant:"contained",color:"primary",className:"mx-auto mt-16 normal-case","aria-label":"Register",disabled:!w,onClick:function(){t.current.submit()}},"Register")),1===s&&n.a.createElement("div",{className:"flex flex-col items-center w-full"},n.a.createElement(U,{userName:P.username,displayName:P.displayName,userType:P.usertype,userId:q})))))};a.default=Object(i.a)("users",d)((function(e){var a=Object(l.useRef)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-72 sm:min-h-72"},header:n.a.createElement(p,{pageLayout:a}),content:n.a.createElement(q,e),ref:a,innerScroll:!0}))}))}}]);