(this["webpackJsonpsivanandha-webapp"]=this["webpackJsonpsivanandha-webapp"]||[]).push([[16],{1054:function(e,a,t){"use strict";var n=t(11),r=t(77),l={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case r.l.SET_SEARCH_TEXT:return Object(n.a)({},e,{searchText:a.searchText});case r.l.OPEN_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case r.l.OPEN_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}}},1056:function(e,a,t){"use strict";var n=t(44),r=t(11),l=t(77),o={data:[],dialog:{type:"edit",props:{open:!1},data:null,mode:null}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.h.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case l.h.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},i={data:[],searchText:"",ayearDialog:{type:"edit",props:{open:!1},data:null,mode:null}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.n.SET_AYEAR_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.n.OPEN_NEW_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case l.n.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:"new",props:{open:!1},data:null}});case l.n.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case l.n.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{ayearDialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},s={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.g.SET_EDU_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.g.OPEN_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case l.g.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case l.g.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case l.g.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}},p={data:[],searchText:"",subjDialog:{type:"edit",props:{open:!1},data:null,mode:null}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.j.GET_SUBJECTS:return Object(r.a)({},e,{data:a.payload});case l.j.SET_SUBJECTS_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.j.OPEN_NEW_DIALOG:return Object(r.a)({},e,{subjDialog:{type:"new",props:{open:!0},data:null}});case l.j.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{subjDialog:{type:"new",props:{open:!1},data:null}});case l.j.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{subjDialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case l.j.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{subjDialog:{type:a.mode,props:{open:!1},data:null}});case l.j.SET_SUBJECTS_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});default:return e}},E={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.b.SET_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.b.OPEN_DIALOG:return Object(r.a)({},e,{dialog:{props:{open:!0},data:a.data,mode:a.mode}});case l.b.CLOSE_DIALOG:return Object(r.a)({},e,{dialog:{props:{open:!1},data:null,mode:a.mode}});case l.b.SET_CLASS_SEC_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});case l.b.SET_SUBJECT_IDS:return Object(r.a)({},e,{subjectIds:a.subjectIds});default:return e}},f=t(1054),O={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.d.SET_DCONFIG_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.d.OPEN_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case l.d.CLOSE_NEW_DIALOG:return Object(r.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case l.d.OPEN_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case l.d.CLOSE_EDIT_DIALOG:return Object(r.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});case l.d.CLOSE_ONLY_DIALOG:return Object(r.a)({},e,{dialog:{type:"close",props:{open:!1},data:null}});default:return e}},h={data:[],searchText:"",usertypeValue:"student",todoDialog:{type:"edit",props:{open:!1},data:null,mode:null}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.a.SET_SEARCH_TEXT:return Object(r.a)({},e,{searchText:a.searchText});case l.a.SET_USERLIST_USER_TYPE:return Object(r.a)({},e,{usertypeValue:a.usertypeValue});case l.a.OPEN_EDIT_RESET_DIALOG:return Object(r.a)({},e,{todoDialog:{type:"edit",props:{open:!0},data:a.data,mode:a.mode}});case l.a.CLOSE_EDIT_RESET_DIALOG:return Object(r.a)({},e,{todoDialog:{type:"edit",props:{open:!1},data:null}});case l.a.SET_USERLIST_PAGINATION:return Object(r.a)({},e,{current:a.current,pageSize:a.pageSize});default:return e}},_=Object(n.d)({schoolProfileReducer:c,ayearReducer:d,edusysReducer:u,subjectReducer:m,classReducer:g,txtReducer:f.a,dconfigReducer:b,users:y});a.a=_},1400:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t(158),c=t(1030),i=t(963),d=t(1011),s=t(8),u=t(221),p=t(218),m=t(75),E=t(77);var g=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.dconfig.dconfigReducer.searchText})),t=Object(s.c)((function(e){return e.dconfig.dconfigReducer.dialog})),o=Object(p.d)(E.e.getAllDataconfigs),g=o.loading,f=o.error,O=o.data,b=o.refetch;if(Object(n.useEffect)((function(){t.props.open||b()}),[t.props.open,b]),f)return r.a.createElement("h1",null,"Error...");if(g||!O)return r.a.createElement(m.j,null);var h=function(e,a){return 0===a.length?e:l.v.filterArrayByString(e,a)}(O.getAllDataconfigs,a.trim());return r.a.createElement(u.b,{className:"-striped -highlight border-0 min-w-xl ",data:h,showPagination:!0,defaultSorted:[{id:"name",asc:!0}],columns:[{Header:"Config Name",accessor:"name",getProps:function(){return{style:{paddingLeft:"32px"}}}},{id:"value",Header:"Value",accessor:"value"},{Header:"",sortable:!1,Cell:function(a){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.a,{title:"Add Config"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(E.d.openNewDialog(a.original,"add"))}},r.a.createElement(d.a,null,"add"))),r.a.createElement(c.a,{title:"Edit Config"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(E.d.openEditDialog(a.original,"edit"))}},r.a.createElement(d.a,null,"edit"))),r.a.createElement(c.a,{title:"Delete / Inactivate"},r.a.createElement(i.a,{onClick:function(t){t.stopPropagation(),e(E.d.openEditDialog(a.original,"delete"))}},r.a.createElement(d.a,null,"delete"))))}}]})},f=t(157),O=t(194),b=t(962),h=t(1015);var y=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.dconfig.dconfigReducer.searchText})),t=Object(s.c)((function(e){return e.fuse.settings.mainTheme}));return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},r.a.createElement("div",{className:"flex flex-shrink items-center "},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-12"},"perm_data_setting")),r.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(f.a,{variant:"h6",className:"hidden sm:flex"},"Data Configuration")))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12 flex-col"},r.a.createElement(h.a,{theme:t},r.a.createElement(l.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement(O.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(b.a,{placeholder:"Search Configuration",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(a){return e(E.d.setDConfigSearchText(a))}}))))))},_=t(11),j=t(10),v=t(1033),T=t(1027),D=t(1037),S=t(1038),x=t(1010),C=t(1039),I=t(1036),N=t(82),L=t.n(N),A=t(109),w={id:"",name:"",value:""};var G=function(){var e,a,t=Object(s.b)(),o=Object(n.useRef)(null),c=Object(s.c)((function(e){return e.dconfig.dconfigReducer.dialog})),i=Object(A.b)(w),u=i.form,g=i.setForm,O=Object(n.useState)(!1),b=Object(j.a)(O,2),h=b[0],y=b[1];"new"===c.type?(e=E.e.addDataConfig,a=""):"edit"===c.type?(e=E.e.editDataConfig,a=u.value):(e=E.e.delDataConfig,a=u.value);var N=Object(p.c)(e,{onCompleted:function(e){e.data;U()}}),G=Object(j.a)(N,2),P=G[0],R=G[1],W=R.loading,k=R.error,H=Object(n.useCallback)((function(){g(Object(_.a)({},c.data))}),[c.data,g]);Object(n.useEffect)((function(){c.props.open&&H()}),[c.props.open,H]);var U=function(){"edit"===c.type?t(E.d.closeEditDialog()):t(E.d.closeNewDialog())};return r.a.createElement(v.a,Object.assign({},c.props,{onClose:U,fullWidth:!0,maxWidth:"sm"}),r.a.createElement(T.a,{position:"static",elevation:1},r.a.createElement(D.a,{className:"flex w-full"},r.a.createElement(f.a,{variant:"subtitle1",color:"inherit"},"new"===c.type?"New Config":"edit"===c.type?"Edit Config":"Delete Config"))),r.a.createElement(S.a,{classes:{root:"p-0"}},r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{onValid:function(){y(!0)},onInvalid:function(){y(!1)},ref:o,onValidSubmit:function(e){"new"===c.type?P({variables:{name:e.name,value:e.value}}):"edit"===c.type?P({variables:{id:u.id,name:e.name,value:e.value}}):"delete"===c.type&&P({variables:{id:u.id}})}},r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-col items-center justify-center"},r.a.createElement(l.y,{className:"pr-8 mb-8",type:"text",name:"name",label:"Config Name",value:u.name,validations:{maxLength:20},validationErrors:{maxLength:"You can not type in more than 20 characters"},InputProps:{endAdornment:r.a.createElement(x.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"event_note"))},variant:"filled",readonly:!0,disabled:!0,required:!0}),r.a.createElement(l.y,{className:"pr-8 mb-8",type:"text",name:"value",label:"Config Value",value:a,validations:{maxLength:30},validationErrors:{maxLength:"You can not type in more than 30 characters"},InputProps:{endAdornment:r.a.createElement(x.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"wc"))},variant:"outlined",required:!0}))),W&&r.a.createElement(m.j,{message:"Saving data..."}),k&&r.a.createElement(f.a,{className:"pt-32"},"Error : Please try again! ",r.a.createElement("br",null),k.message," ",r.a.createElement("br",null)))),"new"===c.type&&r.a.createElement(C.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){U()}},"Close"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){o.current.submit()},disabled:!h},"Add Config")),"edit"===c.type&&r.a.createElement(C.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){U()}},"Close"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){o.current.submit()},disabled:!h},"Save")),"delete"===c.type&&r.a.createElement(C.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){U()}},"Close"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){o.current.submit()}},"Delete")))},P=t(1056);a.default=Object(o.a)("dconfig",P.a)((function(){var e=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72"},header:r.a.createElement(y,{pageLayout:e}),content:r.a.createElement(g,null),onRef:e,innerScroll:!0}),r.a.createElement(G,null))}))}}]);