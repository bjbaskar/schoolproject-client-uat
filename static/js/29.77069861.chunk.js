(this["webpackJsonpsivanandha-webapp"]=this["webpackJsonpsivanandha-webapp"]||[]).push([[29],{1392:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(10),i=a(32),o=a(0),l=a.n(o),c=a(1035),d=a(1011),s=a(1017),m=a(16),b=a(8),p=a(1381),u=(a(1258),a(1259),a(1260)),D=a.n(u),f=a(64),v=a.n(f),E=a(3),h=a(218),y=a(75),g=a(158);function O(e){return{type:"[CALENDAR] OPEN NEW EVENT DIALOG",data:e}}var x=a(22),w=a(44),j={entities:[],eventDialog:{type:"new",props:{open:!1},data:null}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CALENDAR] OPEN NEW EVENT DIALOG":return Object(n.a)({},e,{eventDialog:{type:"new",props:{open:!0},data:Object(n.a)({},t.data)}});case"[CALENDAR] CLOSE NEW EVENT DIALOG":return Object(n.a)({},e,{eventDialog:{type:"new",props:{open:!1},data:null}});case"[CALENDAR] OPEN EDIT EVENT DIALOG":return Object(n.a)({},e,{eventDialog:{type:"edit",props:{open:!0},data:Object(n.a)({},t.data,{start:new Date(t.data.start),end:new Date(t.data.end)})}});case"[CALENDAR] CLOSE EDIT EVENT DIALOG":return Object(n.a)({},e,{eventDialog:{type:"edit",props:{open:!1},data:null}});case"[CALENDAR] CLOSE ONLY DIALOG":return Object(n.a)({},e,{eventDialog:{type:"close",props:{open:!1},data:null}});default:return e}},C=Object(w.d)({events:N}),k=a(383),A=a(1033),L=a(1027),T=a(1037),I=a(157),S=a(1038),Y=a(1031),M=a(1024),R=a(1025),V=a(1039),z=a(963),W=a(1036),G=a(82),B=a.n(G),P=a(1389),_=a(109),F={id:"",title:"",description:"",eventstype:"",start:v()(new Date),end:v()(new Date).add(1,"days"),allDay:!0};var H=function(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e.calendar.events.eventDialog})),i=Object(o.useRef)(null),c=Object(_.b)(F),s=c.form,m=c.handleChange,p=c.setForm,u=c.setInForm,D=s.start,f=s.end,E=k.c;"new"===a.type?E=k.a:"edit"===a.type&&(E=k.c);var y=k.b,g=Object(h.c)(E,{onCompleted:function(e){e.data;t(x.j({message:"Updated Successfully",variant:"success"})),C()}}),O=Object(r.a)(g,1)[0],w=Object(h.c)(y,{onCompleted:function(e){e.data;t(x.j({message:"Deleted Successfully",variant:"info"})),C()}}),j=Object(r.a)(w,1)[0],N=Object(o.useCallback)((function(){"edit"===a.type&&a.data&&p(Object(n.a)({},a.data)),"new"===a.type&&p(Object(n.a)({},F,{},a.data))}),[a.data,a.type,p]);Object(o.useEffect)((function(){return a.props.open&&N(),function(){p(F)}}),[a.props.open,N,p]);var C=function(){"edit"===a.type?t({type:"[CALENDAR] CLOSE EDIT EVENT DIALOG"}):t({type:"[CALENDAR] CLOSE NEW EVENT DIALOG"})},G=function(){t({type:"[CALENDAR] CLOSE ONLY DIALOG"})};function H(){return s.title.length>0}return l.a.createElement(A.a,Object.assign({},a.props,{onClose:C,fullWidth:!0,maxWidth:"sm",component:"form"}),l.a.createElement(L.a,{position:"static"},l.a.createElement(T.a,{className:"flex w-full"},l.a.createElement(I.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New Event":"Edit Event"))),l.a.createElement(S.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"}},l.a.createElement(B.a,{ref:i,onValidSubmit:function(e){"new"===a.type?O({variables:{title:s.title,description:s.description,eventstype:s.eventstype,start:s.start,end:s.end,todate:s.todate,allDay:s.allDay}}):"edit"===a.type&&O({variables:{id:s.id,title:s.title,description:s.description,eventstype:s.eventstype,start:s.start,end:s.end,allDay:s.allDay}})}},l.a.createElement(Y.a,{id:"title",label:"Title",className:"mt-8 mb-16",InputLabelProps:{shrink:!0},name:"title",value:s.title,onChange:m,variant:"outlined",autoFocus:!0,required:!0,fullWidth:!0}),l.a.createElement(M.a,{className:"mt-8 mb-16",label:"All Day",control:l.a.createElement(R.a,{checked:s.allDay,id:"allDay",name:"allDay",onChange:m})}),l.a.createElement(P.a,{label:"Start",inputVariant:"outlined",value:D,onChange:function(e){return u("start",v()(e).format("DD-MMM-YYYY"))},className:"mt-8 mb-16 w-full",maxDate:f,format:"DD-MMM-YYYY"}),l.a.createElement(P.a,{label:"End",inputVariant:"outlined",value:f,onChange:function(e){return u("end",v()(e).format("DD-MMM-YYYY"))},className:"mt-8 mb-16 w-full",minDate:D,format:"DD-MMM-YYYY"}),l.a.createElement(Y.a,{className:"mt-8 mb-16",id:"desc",label:"Description",type:"text",name:"description",value:s.description||"",onChange:m,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}))),l.a.createElement(V.a,{className:"justify-between pl-8 sm:pl-16"},"new"!==a.type?l.a.createElement(o.Fragment,null,l.a.createElement(z.a,{onClick:function(){j({variables:{id:s.id}})}},l.a.createElement(d.a,null,"delete")),l.a.createElement("div",null,l.a.createElement(W.a,{variant:"contained",className:"mr-16",onClick:G},"Cancel"),l.a.createElement(W.a,{variant:"contained",color:"primary",onClick:function(){i.current.submit()},disabled:!H()}," ","Save"))):l.a.createElement(o.Fragment,null,l.a.createElement("div",{className:"flex flex-row w-full justify-between"},l.a.createElement(W.a,{variant:"contained",className:"mr-16",onClick:G},"Cancel"),l.a.createElement(W.a,{variant:"contained",color:"primary",onClick:function(){i.current.submit()},disabled:!H()},"Add")))))},U=a(42),J=a(43),q=a(59),X=a(60),K=a(1030),Q=a(9),Z=a(1015),$=a(259),ee=a(1272),te=a.n(ee),ae=a(1090),ne=a(254),re={month:{title:"Month",icon:"view_module"},week:{title:"Week",icon:"view_week"},work_week:{title:"Work week",icon:"view_array"},day:{title:"Day",icon:"view_day"},agenda:{title:"Agenda",icon:"view_agenda"}},ie=function(e){Object(X.a)(a,e);var t=Object(q.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(J.a)(a,[{key:"viewButtons",value:function(){var e=this,t=this.props.views,a=this.props.view;if(t.length>1)return t.map((function(t){return l.a.createElement(K.a,{title:re[t].title,key:t},l.a.createElement("div",null,l.a.createElement(m.a,{animation:"transition.expandIn",delay:500},l.a.createElement(z.a,{"aria-label":t,onClick:function(){return e.props.onView(t)},disabled:a===t},l.a.createElement(d.a,null,re[t].icon)))))}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.mainThemeDark,n=e.label,r=e.date;return l.a.createElement(Z.a,{theme:a},l.a.createElement("div",{className:Object(E.default)(t.root,"flex relative",v()(r).format("MMM"))},l.a.createElement("div",{className:"flex flex-1 flex-col p-12 justify-between z-10 container"},l.a.createElement("div",{className:"flex flex-col items-center justify-between sm:flex-row"},l.a.createElement("div",{className:"flex items-center my-16 sm:mb-0"},l.a.createElement(m.a,{animation:"transition.expandIn",delay:300},l.a.createElement(d.a,{className:"text-32 mx-12"},"today")),l.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(I.a,{variant:"h6"},"School Calendar & Events"))),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(K.a,{title:"Today"},l.a.createElement("div",null,l.a.createElement(m.a,{animation:"transition.expandIn",delay:500},l.a.createElement(z.a,{"aria-label":"today",onClick:this.navigate.bind(null,ae.navigate.TODAY)},l.a.createElement(d.a,null,"today"))))),this.viewButtons())),l.a.createElement(m.a,{delay:500},l.a.createElement("div",{className:"flex items-center justify-center"},l.a.createElement(K.a,{title:"Previous"},l.a.createElement(z.a,{"aria-label":"Previous",onClick:this.navigate.bind(null,ae.navigate.PREVIOUS)},l.a.createElement(d.a,null,"chevron_left"))),l.a.createElement(I.a,{variant:"h6"},n),l.a.createElement(K.a,{title:"Next"},l.a.createElement(z.a,{"aria-label":"Next",onClick:this.navigate.bind(null,ae.navigate.NEXT)},l.a.createElement(d.a,null,"chevron_right"))))))))}}]),a}(te.a);var oe=Object(ne.a)((function(e){return{mainThemeDark:e.fuse.settings.mainThemeDark}}))(Object(Q.a)((function(e){return{root:{color:e.palette.primary.contrastText,"&:before":{content:"''",position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1,background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+Object($.darken)(e.palette.primary.dark,.5)+" 100%)",color:e.palette.primary.contrastText}}}}),{withTheme:!0})(ie)),le=Object(p.c)(v.a),ce=D()(p.a),de=Object.keys(p.b).map((function(e){return p.b[e]})),se=Object(s.a)((function(e){var t;return{root:{"& .rbc-header":{padding:"12px 6px",fontWeight:600,fontSize:14},"& .rbc-label":{padding:"8px 6px"},"& .rbc-today":{backgroundColor:"transparent"},"& .rbc-header.rbc-today, & .rbc-month-view .rbc-day-bg.rbc-today":{borderBottom:"2px solid "+e.palette.secondary.main+"!important"},"& .rbc-month-view, & .rbc-time-view, & .rbc-agenda-view":(t={padding:24},Object(i.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(i.a)(t,"border","0px solid #DDDDDD"),t),"& .rbc-agenda-view table":{border:"1px solid #DDDDDD","& thead > tr > th":{borderBottom:"0px solid #DDDDDD"},"& tbody > tr > td":{padding:"12px 6px","& + td":{borderLeft:"1px solid #DDDDDD"}}},"& .rbc-time-view":{"& .rbc-time-header":{border:"1px solid #DDDDDD"},"& .rbc-time-content":{flex:"0 1 auto",border:"1px solid #DDDDDD"}},"& .rbc-month-view":{"& > .rbc-row":{border:"1px solid #DDDDDD"},"& .rbc-month-row":{border:"1px solid #DDDDDD",borderWidth:"0 1px 1px 1px!important",minHeight:128},"& .rbc-header + .rbc-header":{borderLeft:"1px solid #DDDDDD"},"& .rbc-header":{borderBottom:"0px solid #DDDDDD"},"& .rbc-day-bg + .rbc-day-bg":{borderLeft:"1px solid #DDDDDD"}},"& .rbc-day-slot .rbc-time-slot":{borderTop:"1px solid #DDDDDD",opacity:.5},"& .rbc-time-header > .rbc-row > * + *":{borderLeft:"1px solid #DDDDDD"},"& .rbc-time-content > * + * > *":{borderLeft:"1px solid #DDDDDD"},"& .rbc-day-bg + .rbc-day-bg":{borderLeft:"1px solid #DDDDDD"},"& .rbc-time-header > .rbc-row:first-child":{borderBottom:"1px solid #DDDDDD"},"& .rbc-timeslot-group":{minHeight:64,borderBottom:"1px solid #DDDDDD"},"& .rbc-date-cell":{padding:8,fontSize:16,fontWeight:400,opacity:.5,"& > a":{color:"inherit"}},"& .rbc-event":{borderRadius:4,padding:"4px 8px",backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText,boxShadow:e.shadows[0],transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,position:"relative","&:hover":{boxShadow:e.shadows[2]}},"& .rbc-row-segment":{padding:"0 4px 4px 4px"},"& .rbc-off-range-bg":{backgroundColor:"light"===e.palette.type?"rgba(0,0,0,0.03)":"rgba(0,0,0,0.16)"},"& .rbc-show-more":{color:e.palette.secondary.main,background:"transparent"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event":{position:"static"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:first-child":{left:0,top:0,bottom:0,height:"auto"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:last-child":{right:0,top:0,bottom:0,height:"auto"}},addButton:{position:"absolute",right:12,top:90,zIndex:99}}}));t.default=Object(g.a)("calendar",C)((function(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e.calendar.events.eventDialog})),i=se(e),s=Object(o.useRef)(null),u=Object(h.d)(k.d),D=u.loading,f=u.error,g=u.data,w=u.refetch,j=Object(h.c)(k.c,{onCompleted:function(e){e.data;t(x.j({message:"Calendar Updated Successfully",variant:"success"})),w()}}),N=Object(r.a)(j,1)[0];if(Object(o.useEffect)((function(){a.props.open||"close"===a.type||w()}),[a.props.open,a.type,w]),f)return l.a.createElement("h1",null,"Error...");if(D||!g)return l.a.createElement(y.j,null);var C=function(e){return e&&e.map((function(e){var t=v()(e.start).toDate(),a=v()(e.end).toDate();return Object.assign(e,{start:t,end:a})})),e}(g.getCalendars);return l.a.createElement("div",{className:Object(E.default)(i.root,"flex flex-col flex-auto relative")},l.a.createElement("div",{ref:s}),l.a.createElement(ce,{className:"flex flex-1 container",selectable:!0,localizer:le,events:C,onEventDrop:function(e){var t=e.event,a=e.start,r=e.end;N({variables:Object(n.a)({},t,{start:a,end:r})})},resizable:!0,onEventResize:function(e){var t=e.event,a=e.start,r=e.end;delete t.type,N({variables:Object(n.a)({},t,{start:a,end:r})})},defaultView:p.b.MONTH,defaultDate:new Date,startAccessor:"start",endAccessor:"end",views:de,step:60,components:{toolbar:function(e){return l.a.createElement(oe,e)}},onSelectEvent:function(e){t(function(e){return{type:"[CALENDAR] OPEN EDIT EVENT DIALOG",data:e}}(e))},onSelectSlot:function(e){return t(O({start:e.start,end:e.end}))}}),l.a.createElement(m.a,{animation:"transition.expandIn",delay:500},l.a.createElement(c.a,{color:"secondary","aria-label":"add",className:i.addButton,onClick:function(){return t(O({start:new Date,end:new Date}))}},l.a.createElement(d.a,null,"add"))),l.a.createElement(H,null))}))}}]);