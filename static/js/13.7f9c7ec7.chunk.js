(this["webpackJsonpsivanandha-webapp"]=this["webpackJsonpsivanandha-webapp"]||[]).push([[13],{1054:function(e,a,t){"use strict";var n=t(11),r=t(81),c={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case r.l.SET_SEARCH_TEXT:return Object(n.a)({},e,{searchText:a.searchText});case r.l.OPEN_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case r.l.OPEN_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}}},1056:function(e,a,t){"use strict";var n=t(44),r=t(11),c=t(81),l={data:[],dialog:{type:"edit",props:{open:!1},data:null,mode:null}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.h.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case c.h.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},i={data:[],searchText:"",ayearDialog:{type:"edit",props:{open:!1},data:null,mode:null}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.n.SET_AYEAR_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.n.OPEN_NEW_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case c.n.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:"new",props:{open:!1},data:null}});case c.n.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case c.n.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},d={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.g.SET_EDU_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.g.OPEN_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case c.g.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case c.g.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case c.g.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},m={data:[],searchText:"",subjDialog:{type:"edit",props:{open:!1},data:null,mode:null}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.j.GET_SUBJECTS:return Object(r.a)({},e,{data:a.payload});case c.j.SET_SUBJECTS_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.j.OPEN_NEW_DIALOG:return Object(r.a)({},e,{subjDialog:{type:"new",props:{open:!0},data:null}});case c.j.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{subjDialog:{type:"new",props:{open:!1},data:null}});case c.j.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{subjDialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case c.j.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{subjDialog:{type:a.mode,props:{open:!1},data:null}});case c.j.SET_SUBJECTS_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});default:return e}},f={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.b.SET_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.b.OPEN_DIALOG:return Object(r.a)({},e,{dialog:{props:{open:!0},data:a.data,mode:a.mode}});case c.b.CLOSE_DIALOG:return Object(r.a)({},e,{dialog:{props:{open:!1},data:null,mode:a.mode}});case c.b.SET_CLASS_SEC_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});case c.b.SET_SUBJECT_IDS:return Object(r.a)({},e,{subjectIds:a.subjectIds});default:return e}},g=t(1054),E={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.d.SET_DCONFIG_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.d.OPEN_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case c.d.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case c.d.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case c.d.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});case c.d.CLOSE_ONLY_DIALOG:return Object(r.a)({},e,{dialog:{type:"close",props:{open:!1},data:null}});default:return e}},v={data:[],searchText:"",usertypeValue:"student",todoDialog:{type:"edit",props:{open:!1},data:null,mode:null}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.a.SET_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case c.a.SET_USERLIST_USER_TYPE:return Object(r.a)({},e,{usertypeValue:a.usertypeValue});case c.a.OPEN_EDIT_RESET_DIALOG:return Object(r.a)({},e,{todoDialog:{type:"edit",props:{open:!0},data:a.data,mode:a.mode}});case c.a.CLOSE_EDIT_RESET_DIALOG:return Object(r.a)({},e,{todoDialog:{type:"edit",props:{open:!1},data:null}});case c.a.SET_USERLIST_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});default:return e}},y=Object(n.d)({schoolProfileReducer:s,ayearReducer:o,edusysReducer:u,subjectReducer:p,classReducer:b,txtReducer:g.a,dconfigReducer:h,users:O});a.a=y},1385:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t(158),s=t(1030),i=t(963),o=t(1011),d=t(8),u=t(21),m=t.n(u),p=t(221),f=t(64),b=t.n(f),g=t(217),E=t(75),h=t(81);var v=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.cls.classReducer.searchText})),t=Object(d.c)((function(e){return e.cls.classReducer.dialog})),l=Object(g.d)(h.c.getAllClass),u=l.loading,f=l.error,v=l.data,O=l.refetch;if(Object(n.useEffect)((function(){t.props.open||O()}),[t.props.open,O]),f)return r.a.createElement("h1",null,"Error...");if(u||!v)return r.a.createElement(E.i,null);var y=function(e,a){return 0===a.length?e:c.v.filterArrayByString(e,a)}(v.getAllClass,a.trim());return r.a.createElement(p.b,{className:"-striped -highlight border-0 min-w-xl ",data:y,showPagination:!0,defaultSorted:[{id:"name",asc:!0}],columns:[{Header:"Class Name",accessor:"name",getProps:function(){return{style:{paddingLeft:"32px"}}}},{id:"section",Header:"Class Section",accessor:"section",Cell:function(e){return r.a.createElement("div",{className:m()("inline p-4 rounded truncate"),style:{backgroundColor:e.original.color,minWidth:"42px"}},e.original.section)}},{Header:"Education Structure",accessor:"edusystem",style:{whiteSpace:"unset"},Cell:function(e){return e.original.edusystem?e.original.edusystem.name+" - "+e.original.edusystem.levels:""}},{Header:"Academic Year",accessor:"academicyear",Cell:function(e){return e.original.academicyear?e.original.academicyear.displayname:""}},{id:"updatedby",Header:"Last Updated by",accessor:function(e){return e.updatedby?e.updatedby:e.createdby},Cell:function(e){return r.a.createElement("div",null,e.original.updatedby?e.original.updatedby:e.original.createdby)}},{id:"updatedon",Header:"Last Updated on",accessor:function(e){return e.updatedon?e.updatedon:e.createdon},Cell:function(e){return r.a.createElement("div",{className:"pl-8"},e.original.updatedon?b()(e.original.updatedon).format("MMM Do YYYY, h:mm a"):b()(e.original.createdon).format("MMM Do YYYY, h:mm a"))}},{Header:"",sortable:!1,Cell:function(a){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.a,{title:"Edit Class"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(h.b.openDialog(a.original,"edit"))}},r.a.createElement(o.a,null,"edit"))),r.a.createElement(s.a,{title:"Assign Teacher to Class"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(h.b.openDialog(a.original,"staff-assign"))}},r.a.createElement(o.a,null,"supervised_user_circle"))),r.a.createElement(s.a,{title:"Delete / Inactivate"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(h.b.openDialog(a.original,"delete"))}},r.a.createElement(o.a,null,"delete"))))}}]})},O=t(157),y=t(194),j=t(962),x=t(1036),S=t(1015);var C=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.cls.classReducer.searchText})),t=Object(d.c)((function(e){return e.fuse.settings.mainTheme}));return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},r.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.a,{animation:"transition.expandIn",delay:300},r.a.createElement(o.a,{className:"text-32 mr-12"},"featured_play_list")),r.a.createElement(c.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(O.a,{variant:"h6",className:"hidden sm:flex"},"Class & Section")))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},r.a.createElement(S.a,{theme:t},r.a.createElement(c.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(y.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},r.a.createElement(o.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(j.a,{placeholder:"Search class name",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(a){return e(h.b.setClassSearchText(a))}}))))),r.a.createElement(c.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(x.a,{onClick:function(){return e(h.b.openDialog(null,"new"))},variant:"contained",className:"normal-case"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New Class"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},N=t(1033),w=t(1027),_=t(1037),T=t(11),D=t(10),I=t(1038),A=t(1010),L=t(1039),P=t(82),k=t.n(P),G=t(109),R=t(32),W=t(1017),Y=t(1026),H=t(2),z=t(5),F=(t(1),t(3)),U=t(9),M=r.a.forwardRef((function(e,a){var t=e.action,n=e.avatar,c=e.classes,l=e.className,s=e.component,i=void 0===s?"div":s,o=e.disableTypography,d=void 0!==o&&o,u=e.subheader,m=e.subheaderTypographyProps,p=e.title,f=e.titleTypographyProps,b=Object(z.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),g=p;null==g||g.type===O.a||d||(g=r.a.createElement(O.a,Object(H.a)({variant:n?"body2":"h5",className:c.title,component:"span",display:"block"},f),g));var E=u;return null==E||E.type===O.a||d||(E=r.a.createElement(O.a,Object(H.a)({variant:n?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},m),E)),r.a.createElement(i,Object(H.a)({className:Object(F.default)(c.root,l),ref:a},b),n&&r.a.createElement("div",{className:c.avatar},n),r.a.createElement("div",{className:c.content},g,E),t&&r.a.createElement("div",{className:c.action},t))})),B=Object(U.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(M),X=t(1046),J=t(1023),q=t(1013),V=t(965),$=t(1029),K=t(1018),Q=t(1040),Z=[0,1,2,3,4,5,6,7,8,9,10],ee=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function ae(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var te=r.a.forwardRef((function(e,a){var t=e.alignContent,n=void 0===t?"stretch":t,c=e.alignItems,l=void 0===c?"stretch":c,s=e.classes,i=e.className,o=e.component,d=void 0===o?"div":o,u=e.container,m=void 0!==u&&u,p=e.direction,f=void 0===p?"row":p,b=e.item,g=void 0!==b&&b,E=e.justify,h=void 0===E?"flex-start":E,v=e.lg,O=void 0!==v&&v,y=e.md,j=void 0!==y&&y,x=e.sm,S=void 0!==x&&x,C=e.spacing,N=void 0===C?0:C,w=e.wrap,_=void 0===w?"wrap":w,T=e.xl,D=void 0!==T&&T,I=e.xs,A=void 0!==I&&I,L=e.zeroMinWidth,P=void 0!==L&&L,k=Object(z.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(F.default)(s.root,i,m&&[s.container,0!==N&&s["spacing-xs-".concat(String(N))]],g&&s.item,P&&s.zeroMinWidth,"row"!==f&&s["direction-xs-".concat(String(f))],"wrap"!==_&&s["wrap-xs-".concat(String(_))],"stretch"!==l&&s["align-items-xs-".concat(String(l))],"stretch"!==n&&s["align-content-xs-".concat(String(n))],"flex-start"!==h&&s["justify-xs-".concat(String(h))],!1!==A&&s["grid-xs-".concat(String(A))],!1!==S&&s["grid-sm-".concat(String(S))],!1!==j&&s["grid-md-".concat(String(j))],!1!==O&&s["grid-lg-".concat(String(O))],!1!==D&&s["grid-xl-".concat(String(D))]);return r.a.createElement(d,Object(H.a)({className:G,ref:a},k))})),ne=Object(U.a)((function(e){return Object(H.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return Z.forEach((function(n){var r=e.spacing(n);0!==r&&(t["spacing-".concat(a,"-").concat(n)]={margin:"-".concat(ae(r,2)),width:"calc(100% + ".concat(ae(r),")"),"& > $item":{padding:ae(r,2)}})})),t}(e,"xs"),{},e.breakpoints.keys.reduce((function(a,t){return function(e,a,t){var n={};ee.forEach((function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(H.a)(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a}),{}))}),{name:"MuiGrid"})(te),re=t(16),ce=Object(W.a)((function(e){return{root:{margin:"auto"},cardHeader:{padding:e.spacing(1,2)},list:{width:200,height:230,backgroundColor:e.palette.background.paper,overflow:"auto"},button:{margin:e.spacing(.5,0)}}}));function le(e,a){return e.filter((function(e){return-1===a.indexOf(e)}))}function se(e,a){return e.filter((function(e){return-1!==a.map((function(e){return e.id})).indexOf(e.id)}))}var ie=function(e){var a=Object(d.b)(),t=ce(),c=r.a.useState([]),l=Object(D.a)(c,2),s=l[0],i=l[1],o=r.a.useState([]),u=Object(D.a)(o,2),p=u[0],f=u[1],b=r.a.useState([]),v=Object(D.a)(b,2),y=v[0],j=v[1],S=e.mode,C=e.rightData,N=Object(g.b)(h.k.querySubjects),w=Object(D.a)(N,2),_=w[0],T=w[1],I=T.loading,A=T.error,L=T.data;Object(n.useEffect)((function(){_()}),[_]),Object(n.useEffect)((function(){!function(){var e,a,t=[];if(L&&L.getSubjects&&(t=L.getSubjects),"new"===S)f(t),j([]);else{var n=(e=t,a=C,re.a.differenceBy(e,a,"id"));f(n),C&&j(C)}}()}),[S,C,L]),Object(n.useEffect)((function(){var e=y.map((function(e){return e.id}));a(h.b.setSubjectIds(e))}),[y,j,a]);var P=se(s,p),k=se(s,y),G=function(e){return function(){var a=s.indexOf(e),t=Object(R.a)(s);-1===a?t.push(e):t.splice(a,1),i(t)}},W=function(e){return se(s,e).length},H=function(e){return function(){var a,t;W(e)===e.length?i(le(s,e)):i((a=s,t=e,[].concat(Object(R.a)(a),Object(R.a)(le(t,a)))))}},z=function(e,a){return r.a.createElement(Y.a,null,r.a.createElement(B,{className:t.cardHeader,avatar:r.a.createElement(X.a,{onClick:H(a),checked:W(a)===a.length&&0!==a.length,indeterminate:W(a)!==a.length&&0!==W(a),disabled:0===a.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(W(a),"/").concat(a.length," selected")}),r.a.createElement(J.a,null),r.a.createElement(q.a,{className:m()(t.list,"w-full"),dense:!0,component:"div",role:"list"},a&&a.map((function(a,t){var n="transfer-list-all-item-".concat(a.name,"-label");return r.a.createElement(V.a,{key:t,id:e,role:"listitem",button:!0,onClick:G(a)},r.a.createElement($.a,null,r.a.createElement(X.a,{checked:-1!==s.indexOf(a),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})),r.a.createElement(K.a,{id:n,primary:a.name?a.name:""}),r.a.createElement(Q.a,null,r.a.createElement(O.a,{component:"span",className:m()("inline p-4 rounded truncate ml-8"),style:{backgroundColor:a.color,minWidth:"42px"}},a.subcode?a.subcode:"")))})),r.a.createElement(V.a,null)))};return A?r.a.createElement("h1",null,"Error..."):I||!L?r.a.createElement(E.i,null):r.a.createElement(ne,{container:!0,spacing:2,justify:"center",alignItems:"center",className:m()(t.root,"ml-8 mb-8")},r.a.createElement(ne,{item:!0,className:"w-1/3"},z("Available",p)),r.a.createElement(ne,{item:!0},r.a.createElement(ne,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(x.a,{variant:"outlined",size:"small",className:t.button,onClick:function(){j(y.concat(P)),f(le(p,P)),i(le(s,P))},disabled:0===P.length,"aria-label":"move selected right"},">"),r.a.createElement(x.a,{variant:"outlined",size:"small",className:t.button,onClick:function(){f(p.concat(k)),j(le(y,k)),i(le(s,k))},disabled:0===k.length,"aria-label":"move selected left"},"<"))),r.a.createElement(ne,{item:!0,className:"w-1/3"},z("Assigned",y)))},oe={id:"",name:"",subcode:"",color:""},de={id:"",name:"",section:"",orderby:1,isactive:!0,classteacher:[oe],subjects:[oe],edusystem:"",academicyear:""};var ue=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.cls.classReducer.dialog})),t=Object(d.c)((function(e){return e.cls.classReducer.subjectIds})),l=Object(n.useState)([]),s=Object(D.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)([]),p=Object(D.a)(m,2),f=p[0],b=p[1],v=Object(n.useState)(!1),y=Object(D.a)(v,2),j=y[0],S=y[1],C=Object(n.useState)([]),N=Object(D.a)(C,2),w=N[0],_=N[1],P=Object(n.useRef)(null),R=Object(G.b)(de),W=R.form,Y=R.setForm,H=R.setInForm,z=h.c.editClassSection;z="new"===a.mode?h.c.addClassSection:"edit"===a.mode?h.c.editClassSection:h.c.delClassSection;var F=Object(g.b)(h.f.getEduSystems),U=Object(D.a)(F,2),M=U[0],B=U[1],X=Object(g.b)(h.o.getAcadYears),J=Object(D.a)(X,2),q=J[0],V=J[1],$=Object(g.c)(z,{onCompleted:function(e){e.data;le()}}),K=Object(D.a)($,2),Q=K[0],Z=K[1],ee=Z.loading,ae=Z.error,te=Object(n.useCallback)((function(){if(("edit"===a.mode||"delete"===a.mode)&&a.data){Y(Object(T.a)({},a.data));var e=(a.data?a.data.classteachersub:[]).map((function(e){return e.subject}));_(e)}"new"===a.mode&&Y(Object(T.a)({},de))}),[a.data,a.mode,Y]);Object(n.useEffect)((function(){return a.props.open&&(te(),M(),q()),function(){Y(de)}}),[a.props.open,te,M,q,Y]),Object(n.useEffect)((function(){var e=B.data&&B.data.getEduSystems,a=e&&e.map((function(e){return{value:e.id,label:e.name+" - "+e.levels}}));u(a)}),[B]),Object(n.useEffect)((function(){var e=V.data&&V.data.getAcadYears,a=e&&e.map((function(e){return{value:e.id,label:e.displayname}}));return b(a),function(){}}),[V]);var ne=function(e,a){H(a,e.value)},re=function(e,a){if(e&&a)return e.find((function(e){return e.value===a}))},ce=function(e){return e.id?e.id:e.length?e:null},le=function(){"new"===a.mode?e(h.b.closeDialog("new")):"edit"===a.mode?e(h.b.closeDialog("edit")):"delete"===a.mode&&e(h.b.closeDialog("delete"))},se=function(e,a,t){var n=e.target.value;n=c.v.setUpperCaps(n,t),H(a,n)};return r.a.createElement(n.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{onValid:function(){S(!0)},onInvalid:function(){S(!1)},ref:P,onValidSubmit:function(e){"new"===a.mode?Q({variables:{name:e.name,section:e.section,orderby:W.orderby,isactive:W.isactive,subjectIds:t,edusystem:W.edusystem,academicyear:W.academicyear}}):"edit"===a.mode?Q({variables:{id:W.id,name:e.name,section:e.section,orderby:W.orderby,isactive:W.isactive,subjectIds:t,edusystem:ce(W.edusystem),academicyear:ce(W.academicyear)}}):"delete"===a.mode&&Q({variables:{id:W.id}})}},r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-row items-center justify-center"},r.a.createElement(c.c,{name:"edusys",className:"mb-8 w-full",value:re(i,W.edusystem?W.edusystem.id:void 0),options:i,placeholder:"Select Education Structure *",textFieldProps:{label:"Education Structure",InputLabelProps:{shrink:!0},variant:"outlined"},onChange:function(e){return ne(e,"edusystem")},required:!0}),r.a.createElement(c.c,{name:"acadyr",className:"mb-8 w-full ml-8",value:re(f,W.academicyear?W.academicyear.id:void 0),options:f,placeholder:"Select Academic Year *",textFieldProps:{label:"Academic Year",InputLabelProps:{shrink:!0},variant:"outlined"},onChange:function(e){return ne(e,"academicyear")},required:!0})),r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-row items-center justify-center"},r.a.createElement(c.y,{className:"mb-8 w-1/2",type:"text",name:"name",label:"Class Name",value:W.name,validations:{maxLength:50},validationErrors:{maxLength:"You can not type in more than 50 characters"},InputProps:{endAdornment:r.a.createElement(A.a,{position:"end"},r.a.createElement(o.a,{className:"text-20",color:"action"},"event_note"))},onChange:function(e){return se(e,"name","UP")},variant:"outlined",required:!0}),r.a.createElement(c.y,{className:"mb-8 ml-8 w-1/2",type:"text",name:"section",label:"Class Section",value:W.section,validations:{maxLength:8},validationErrors:{maxLength:"You can not type in more than 8 characters"},InputProps:{endAdornment:r.a.createElement(A.a,{position:"end"},r.a.createElement(o.a,{className:"text-20",color:"action"},"wc"))},onChange:function(e){return se(e,"section","UP")},variant:"outlined",required:!0})),r.a.createElement(ie,{rightData:w,mode:a.mode})),ee&&r.a.createElement(E.i,{message:"Saving data..."}),ae&&r.a.createElement(O.a,{className:"pt-32"},"Error : Please try again! ",r.a.createElement("br",null),ae.message," ",r.a.createElement("br",null)))),r.a.createElement(L.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:function(){le()}},"Close"),"new"===a.mode&&r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:function(){P.current.submit()},disabled:!j},"Add Class & Section"),"edit"===a.mode&&r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:function(){P.current.submit()},disabled:!j},"Save"),"delete"===a.mode&&r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:function(){P.current.submit()}},"Delete")))},me=t(960),pe=t(974),fe=t(1014),be=t(379),ge=t.n(be),Ee=t(378),he=t(22),ve=Object(W.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,width:"100%"},selectEmpty:{marginTop:e.spacing(2)}}})),Oe={name:"",section:"",edusystem:{name:"",levels:""},academicyear:{displayname:""},classteacher:"",asstclassteacher:"",subject_teacher:[Object(T.a)({},{subjectId:"",staffId:""})]},ye=function(e){var a=e.options,t=e.label,c=e.value,l=e.onDDChange,s=ve(),i=Object(n.useState)(c),o=Object(D.a)(i,2),d=o[0],u=o[1];return r.a.createElement(me.a,{className:s.formControl},r.a.createElement(pe.a,{labelId:t,id:"".concat(t,"-select"),value:d,label:t,onChange:function(e){return function(e){u(e.target.value),l(e)}(e)}},a&&a.map((function(e){return r.a.createElement(fe.a,{key:e.value,value:e.value},e.label)}))))};var je=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.cls.classReducer.dialog})),t=Object(n.useState)([]),c=Object(D.a)(t,2),l=c[0],s=c[1],i=Object(n.useState)([]),o=Object(D.a)(i,2),u=o[0],m=o[1],p=Object(G.b)(Oe),f=p.form,b=p.setForm,v=p.setInForm,O=Object(n.useState)([]),y=Object(D.a)(O,2),j=y[0],S=y[1],C=Object(g.b)(Ee.f,{variables:{isactive:!0}}),N=Object(D.a)(C,2),w=N[0],_=N[1],A=Object(g.c)(h.c.addStaffToClass,{onCompleted:function(e){e.data;Y()}}),P=Object(D.a)(A,2),k=P[0],W=P[1],Y=function(){"staff-assign"===a.mode&&e(h.b.closeDialog("staff-assign"))},H=Object(n.useCallback)((function(){if("staff-assign"===a.mode&&a.data){b(Object(T.a)({newState:Oe},a.data));var e=a.data?a.data.classteachersub:[];s(e)}}),[a.data,a.mode,b]);Object(n.useEffect)((function(){return a.props.open&&(H(),w()),function(){b(Oe)}}),[a.props.open,H,w,b]),Object(n.useEffect)((function(){if(_.data&&_.data.getAllStaff){var e=_.data.getAllStaff,a=e&&e.map((function(e){return{value:e.id,label:e.firstname+" "+e.lastname}}));m(a)}}),[_]);var z=function(e,a){v(a,e.value)};return _.loading?r.a.createElement(E.i,null):W.loading?r.a.createElement(E.i,{message:"Saving data..."}):r.a.createElement(n.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("table",{className:"simple w-full"},r.a.createElement("tbody",{className:"w-full"},r.a.createElement("tr",null,r.a.createElement("td",null,"Class"),r.a.createElement("td",{className:"font-bold text-red"},"".concat(f.name," - ").concat(f.section," section")),r.a.createElement("td",{className:"text-right"},"Education Structure"),r.a.createElement("td",{className:"font-bold"},f.edusystem&&f.edusystem.name,"-"," ",f.edusystem&&f.edusystem.levels),r.a.createElement("td",{className:"text-right"},"Academic Year"),r.a.createElement("td",{className:"font-bold"},f.academicyear&&f.academicyear.displayname)))),r.a.createElement("div",{className:"flex flex-row w-full mt-16 "},r.a.createElement(E.k,{itemName:f.classteacher,optionName:"classteacher",label:"Assign Class Teacher",cssClass:"w-1/2",onDDChange:z}),r.a.createElement(E.k,{itemName:f.asstclassteacher,optionName:"asstclassteacher",label:"Assign Assistant Class Teacher",cssClass:"ml-8 w-1/2",onDDChange:z})),r.a.createElement(q.a,{className:"w-3/4"},l.map((function(e,a){var t=e.subject?e.subject.id:"",c=e.subject?e.subject.name:"",l=e.staff?e.staff.id:"";return r.a.createElement(n.Fragment,{key:a},r.a.createElement(V.a,null,r.a.createElement(K.a,{className:"w-1/2 flex-grow-0",primary:c}),r.a.createElement(Q.a,{className:"w-1/2"},r.a.createElement(ye,{value:l,options:u,onDDChange:function(e){return function(e,a){e.preventDefault();var t={subjectId:a,staffId:e.target.value};if(0===j.length)S([t]);else if(j){var n=ge.a.findIndex(j,{subjectId:a}),r=Object(R.a)(j);n>=0?r[n]=t:r.push(t),S(r)}}(e,t)}}))),r.a.createElement(J.a,{variant:"inset",component:"li"}))}))))),r.a.createElement(L.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:function(){Y()}},"Close"),"staff-assign"===a.mode&&r.a.createElement(x.a,{className:"normal-case",variant:"contained",color:"primary",onClick:function(){if(!function(){var a=!0,t="";return f.classteacher||(t="Select Class teacher",a=!1),a||e(he.j({message:t,variant:"warn"})),a}())return!1;var a,t;a=f.classteacher&&f.classteacher.id?f.classteacher.id:f.classteacher,t=f.asstclassteacher&&f.asstclassteacher.id?f.asstclassteacher.id:f.asstclassteacher,k({variables:{id:f.id,classteacher:a,asstclassteacher:t,subj_staff:j}})}},"Assign Staff")))};var xe=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.cls.classReducer.dialog}));return r.a.createElement(N.a,Object.assign({},a.props,{onClose:function(){"new"===a.mode?e(h.b.closeDialog("new")):"edit"===a.mode?e(h.b.closeDialog("edit")):"delete"===a.mode?e(h.b.closeDialog("delete")):"staff-assign"===a.mode&&e(h.b.closeDialog("staff-assign"))},fullWidth:!0,maxWidth:"md"}),r.a.createElement(w.a,{position:"static",elevation:1},r.a.createElement(_.a,{className:"flex w-full"},r.a.createElement(O.a,{variant:"subtitle1",color:"inherit"},"new"===a.mode&&"New Class","edit"===a.mode&&"Edit / Assign Subjects to Class","delete"===a.mode&&"Delete Class","staff-assign"===a.mode&&"Assign Teacher to Class & Subjects"))),"staff-assign"!==a.mode?r.a.createElement(ue,null):r.a.createElement(je,null))},Se=t(1056);a.default=Object(l.a)("cls",Se.a)((function(){var e=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-72 sm:min-h-72"},header:r.a.createElement(C,{pageLayout:e}),content:r.a.createElement(v,null),ref:e,innerScroll:!0}),r.a.createElement(xe,null))}))}}]);