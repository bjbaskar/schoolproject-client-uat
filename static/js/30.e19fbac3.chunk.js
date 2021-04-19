(this["webpackJsonpsivanandha-vidyashram-seithur"]=this["webpackJsonpsivanandha-vidyashram-seithur"]||[]).push([[30],{1377:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(16),r=a(812),c=a(174);var i=function(){return l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(s.a,{animation:"transition.expandIn",delay:300},l.a.createElement(r.a,{className:"text-32 mr-12"},"supervised_user_circle")),l.a.createElement(s.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(c.a,{variant:"h6",className:"hidden sm:flex"},"Attendance Register"))))},o=a(8),d=a(10),u=a(838),m=a(839),f=a(840),b=a(852),g=a(844),p=a(837),h=a(841),y=a(832),E=a(809),v=a(1369),x=(a(32),a(18)),j=a(11),w=a(192),S=a(70),O=a(21),N=a(989),$=a(173),_=a(26),C=a.n(_);var A=l.a.memo((function(e){var t=e.total,a=e.label,n=e.color,s=e.boys,r=e.girls;return l.a.createElement("div",{className:"flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/4 p-12"},l.a.createElement($.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"text-center pt-12 pb-28"},l.a.createElement(c.a,{className:C()(n,"text-40 leading-none")},t),l.a.createElement(c.a,{className:"text-16",color:"textSecondary"},a)),l.a.createElement("div",{className:"flex flex-row items-center justify-between px-16 h-52 border-t-1"},l.a.createElement(c.a,{className:"text-15 flex w-full",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},"Boys"),":",l.a.createElement("b",{className:"pl-8"},s)),l.a.createElement(c.a,{className:"text-15 flex w-full justify-end",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},"Girls"),":",l.a.createElement("b",{className:"pl-8"},r)))))})),T=a(833),k=a(20),D=Object(E.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(k.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),B=function(e){var t=D();return l.a.createElement(T.a,{className:C()(t.root,t.highlight,"mx-32")},l.a.createElement(c.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},"Attendance has been submitted already for the selected date.\n\t\t\t\t\tYou can edit this attendance.\n\t\t\t\t\t"),l.a.createElement(y.a,{onClick:e.onEditShowMsg,className:"whitespace-no-wrap normal-case ml-24 w-200",variant:"contained",color:"secondary"},"Edit Attendance"))},I={classId:"",dateToday:new Date,textId:""},M={t_boys:0,t_girls:0,pr_boys:0,pr_girls:0,ab_boys:0,ab_girls:0};function P(e){e.classes;var t=e.onSelectAllClick,a=e.numSelected,n=e.rowCount;return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(f.a,{className:"pl-32"},"#"),l.a.createElement(f.a,{key:"studentid",align:"center",padding:"default"},"Name of the Student"),l.a.createElement(f.a,{className:"flex flex-row justify-center"},l.a.createElement(b.a,{indeterminate:a>0&&a<n,checked:n>0&&a===n,onChange:t,inputProps:{"aria-label":"selectall"}}),l.a.createElement(c.a,{className:"flex w-full self-center",component:"span"},"Select All"))))}var R=Object(E.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:550,width:"100%"}}}));var Y=function(e){var t=Object(j.b)(),a=R(),r=Object(n.useState)(!1),i=Object(d.a)(r,2),u=i[0],E=i[1],$=Object(n.useState)(I),_=Object(d.a)($,2),C=_[0],T=_[1],k=Object(n.useState)([]),D=Object(d.a)(k,2),Y=D[0],F=D[1],L=Object(n.useState)([]),J=Object(d.a)(L,2),U=J[0],W=J[1],q=Object(n.useState)(M),z=Object(d.a)(q,2),G=z[0],V=z[1],H=Object(n.useState)(!0),K=Object(d.a)(H,2),Q=K[0],X=K[1],Z=Object(w.b)(N.c),ee=Object(d.a)(Z,2),te=ee[0],ae=ee[1],ne=ae.loading,le=ae.error,se=ae.data,re=(se=void 0===se?{}:se).getStudAttByClass,ce=void 0===re?{students:[],isNew:!0}:re,ie=Object(w.c)(N.a,{onCompleted:function(e){e&&e.addStudAttendance&&t(O.j({message:"Attendance has been submitted successfully",variant:"success"}))}}),oe=Object(d.a)(ie,2),de=oe[0],ue=(oe[1].loading,Object(w.c)(N.b,{onCompleted:function(e){e&&e.editStudAttendance&&t(O.j({message:"Attendance has been updated successfully",variant:"success"}))}})),me=Object(d.a)(ue,2),fe=me[0];me[1].loading,Object(n.useEffect)((function(){if(ce.students&&ce.students.length){var e=x.a.groupBy(ce.students,"gender"),t=e.male&&e.male.length,a=e.female&&e.female.length;V({t_boys:t||0,t_girls:a||0});var n=ce.students.filter((function(e){return"present"===e.selected})).map((function(e){return e.id}));F(n),ge(n),X(ce.isnew),ce.isnew?E(!0):E(!1)}}),[ce]);var be=function(e,a){e?a?te({variables:{classId:e,currDate:a}}):t(O.j({message:"Please select date and refresh",variant:"error"})):t(O.j({message:"Please select Class & Section !",variant:"error"}))},ge=function(e){if(he){var t=[];he.map((function(a){x.a.forEach(e,(function(e){a.id===e&&t.push(a)}))}));var a=x.a.groupBy(t,"gender"),n=a.male&&a.male.length||0,l=a.female&&a.female.length||0,s=[];x.a.forEach(e,(function(e){s.push({id:e})}));var r=x.a.differenceBy(he,s,"id"),c=x.a.groupBy(r,"gender"),i={pr_boys:n,pr_girls:l,ab_boys:c.male&&c.male.length||0,ab_girls:c.female&&c.female.length||0};V((function(e){return Object.assign(Object(o.a)(Object(o.a)({},e),i))})),ye(e)}},pe=function(){F([]),W([]),X(!0)};if(le)return l.a.createElement("h1",null,"Error...");if(ne||!ce&&!ce.students)return l.a.createElement(S.s,null);var he=ce.students,ye=function(e){var t,a,n=he.map((function(e){return e.id})),l=(t=n,a=e,x.a.difference(t,a));W(l)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement("div",{className:"flex justify-start md:flex-row md:justify-start sm:justify-between sm:flex-col xs:justify-between xs:flex-col mt-16"},l.a.createElement(S.c,{formName:C.classId,onDDChange:function(e){T((function(t){return Object.assign(Object(o.a)(Object(o.a)({},t),{},{classId:e.value}))})),be(e.value,C.dateToday)},label:"Search by Class & Section",showAll:!1,cssClass:"w-1/4 my-8 mr-8 ml-32 h-56",autoFocus:!0}),l.a.createElement(v.a,{label:"Today's Date",inputVariant:"outlined",value:C.dateToday,onChange:function(e){return function(e){T((function(t){return Object.assign(Object(o.a)(Object(o.a)({},t),{},{dateToday:e}))})),be(C.classId,e)}(e)},className:"w-1/4 my-8 mr-8 ml-32",format:"DD-MMM-YYYY"})),!Q&&l.a.createElement(B,{onEditShowMsg:function(){E(!0)},numSelected:Y}),l.a.createElement("div",{className:"flex flex-row w-full"},l.a.createElement(A,{total:he.length,label:"TOTAL STUDENTS",color:"text-black",boys:G.t_boys,girls:G.t_girls}),l.a.createElement(A,{total:Y.length,label:"PRESENT",color:"text-blue",boys:G.pr_boys,girls:G.pr_girls}),l.a.createElement(A,{total:U.length,label:"ABSENT",color:"text-red",boys:G.ab_boys,girls:G.ab_girls})),l.a.createElement(s.n,{className:"flex-grow overflow-x-auto"},l.a.createElement(g.a,null,l.a.createElement(p.a,{className:a.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},he.length>0&&l.a.createElement(P,{classes:a,numSelected:Y.length,onSelectAllClick:function(e){if(e.target.checked){var t=he.map((function(e){return e.id}));return F(t),ye(t),void function(e){var t=he.map((function(e){return e})),a=x.a.groupBy(t,"gender"),n={pr_boys:a.male&&a.male.length||0,pr_girls:a.female&&a.female.length||0,ab_boys:0,ab_girls:0};V((function(e){return Object.assign(Object(o.a)(Object(o.a)({},e),n))}))}()}F([]),function(){var e={pr_boys:0,pr_girls:0,ab_boys:0,ab_girls:0};V((function(t){return Object.assign(Object(o.a)(Object(o.a)({},t),e))}))}()},rowCount:he.length}),l.a.createElement(h.a,null,he.map((function(e,t){var a,n=(a=e.id,-1!==Y.indexOf(a)),s="att-".concat(t);return l.a.createElement(m.a,{key:e.id,hover:!0,onClick:function(t){return function(e,t){var a=Y.indexOf(t),n=[];-1===a?n=n.concat(Y,t):0===a?n=n.concat(Y.slice(1)):a===Y.length-1?n=n.concat(Y.slice(0,-1)):a>0&&(n=n.concat(Y.slice(0,a),Y.slice(a+1))),F(n),ye(n),ge(n)}(0,e.id)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n},l.a.createElement(f.a,{className:"pl-32 w-52"},t+1),l.a.createElement(f.a,{component:"th",scope:"row",id:s,padding:"default",className:"text-16",style:{color:"male"===e.gender?"#1976D2":"#C2185B",width:"30%"}},e.firstname+" "+e.lastname),l.a.createElement(f.a,{component:"td",className:"flex flex-row justify-center"},l.a.createElement(b.a,{checked:n,inputProps:{"aria-labelledby":s}}),l.a.createElement(c.a,{className:"text-15 flex w-full self-center",color:n?"primary":"secondary",component:"span",style:{cursor:"grab"}},n?"Present":"Absent")))})),0===he.length&&l.a.createElement(m.a,null,l.a.createElement(f.a,{colSpan:"3",className:"text-red-900"},"No Records Found, Please select Class / Section!")))))),l.a.createElement("div",{className:"flex flex-row my-32 self-center"},l.a.createElement(y.a,{onClick:function(){T(I),pe()},className:"whitespace-no-wrap normal-case ml-24 w-200",variant:"contained"},"Cancel"),l.a.createElement(y.a,{onClick:function(){var e=he.length===Y.length;Q?de({variables:{attdate:C.dateToday,classid:C.classId,studentid:U,session:"Morning",allpresent:e,notes:""}}):fe({variables:{attdate:C.dateToday,classid:C.classId,studentid:U,session:"Morning",allpresent:e,notes:""}})},className:"whitespace-no-wrap normal-case ml-24 w-200",variant:"contained",color:"primary",disabled:!u},Q?"Submit Attendance":"Update Attendance"))))};t.default=function(e){var t=Object(n.useRef)(null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-72 sm:min-h-72"},header:l.a.createElement(i,{pageLayout:t}),content:l.a.createElement(Y,e),ref:t,innerScroll:!0}))}},989:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u}));var n=a(13),l=a(12),s=a.n(l);function r(){var e=Object(n.a)(["\n\tquery getStudAttByClass($classId: String, $currDate: DateTimeType) {\n\t\tgetStudAttByClass(classId: $classId, currDate: $currDate) {\n\t\t\tstudents {\n\t\t\t\tid\n\t\t\t\tfirstname\n\t\t\t\tlastname\n\t\t\t\tgender\n\t\t\t\tselected\n\t\t\t}\n\t\t\tisnew\n\t\t}\n\t}\n"]);return r=function(){return e},e}function c(){var e=Object(n.a)(["\n\tmutation editStudAttendance(\n\t\t$attdate: DateTimeType\n\t\t$classid: String\n\t\t$studentid: [String]\n\t\t$session: String\n\t\t$allpresent: Boolean\n\t\t$notes: String\n\t) {\n\t\teditStudAttendance(\n\t\t\tinput: {\n\t\t\t\tattdate: $attdate\n\t\t\t\tclassid: $classid\n\t\t\t\tstudentid: $studentid\n\t\t\t\tsession: $session\n\t\t\t\tallpresent: $allpresent\n\t\t\t\tnotes: $notes\n\t\t\t}\n\t\t) {\n\t\t\tMessages\n\t\t}\n\t}\n"]);return c=function(){return e},e}function i(){var e=Object(n.a)(["\n\tmutation addStudAttendance(\n\t\t$attdate: DateTimeType\n\t\t$classid: String\n\t\t$studentid: [String]\n\t\t$session: String\n\t\t$allpresent: Boolean\n\t\t$notes: String\n\t) {\n\t\taddStudAttendance(\n\t\t\tinput: {\n\t\t\t\tattdate: $attdate\n\t\t\t\tclassid: $classid\n\t\t\t\tstudentid: $studentid\n\t\t\t\tsession: $session\n\t\t\t\tallpresent: $allpresent\n\t\t\t\tnotes: $notes\n\t\t\t}\n\t\t) {\n\t\t\tMessages\n\t\t}\n\t}\n"]);return i=function(){return e},e}var o=s()(i()),d=s()(c()),u=s()(r())}}]);