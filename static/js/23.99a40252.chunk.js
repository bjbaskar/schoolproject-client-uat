(this["webpackJsonpsivanandha-webapp"]=this["webpackJsonpsivanandha-webapp"]||[]).push([[23],{1054:function(e,a,t){"use strict";var n=t(11),r=t(77),l={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case r.l.SET_SEARCH_TEXT:return Object(n.a)({},e,{searchText:a.searchText});case r.l.OPEN_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_NEW_DIALOG:return Object(n.a)({},e,{dialog:{type:"new",props:{open:!1},data:null}});case r.l.OPEN_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!0},data:a.data,mode:a.mode}});case r.l.CLOSE_EDIT_DIALOG:return Object(n.a)({},e,{dialog:{type:a.mode,props:{open:!1},data:null}});default:return e}}},1399:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t(158),c=t(1054),i=t(1011),s=t(157),m=t(1036),d=t(8),u=t(77);var p=function(e){var a=Object(d.b)();return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{animation:"transition.expandIn",delay:300},r.a.createElement(i.a,{className:"text-32 mr-12"},"developer_board")),r.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(s.a,{variant:"h6",className:"hidden sm:flex"},"Text Books & Notes"))),r.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(m.a,{onClick:function(){a(u.l.openNewDialog())},variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex normal-case"},"Add New TextBook"),r.a.createElement("span",{className:"flex sm:hidden normal-case"},"New"))))},b=t(1030),E=t(963),f=t(221),v=t(218),h=t(75);var y=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.textbook.searchText})),t=Object(d.c)((function(e){return e.textbook.dialog})),o=Object(v.d)(u.m.getTextBooks),c=o.loading,s=o.error,m=o.data,p=o.refetch;if(Object(n.useEffect)((function(){t.props.open||p()}),[t.props.open,p]),s)return r.a.createElement("h1",null,"Error...");if(c||!m)return r.a.createElement(h.j,null);var y=function(e,a){return 0===a.length?e:l.v.filterArrayByString(e,a)}(m.getTextBooks,a.trim());return r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(f.b,{className:"-striped -highlight border-0 min-w-xl ",data:y,showPagination:!1,defaultSorted:[{id:"class_section",asc:!0}],columns:[{Header:function(){return r.a.createElement("span",{style:{whiteSpace:"pre-line !important",wordWrap:"break-word"}},"Education",r.a.createElement("br",null),"Structure")},accessor:"edusystem",style:{whiteSpace:"unset"},getProps:function(){return{style:{paddingLeft:"8px"}}}},{Header:"Class",accessor:"class_section",Cell:function(e){return e.original.class_section?e.original.class_section.name+" - "+e.original.class_section.section:""}},{Header:"Subject",accessor:"subject",Cell:function(e){return e.original.subject?e.original.subject.name:""}},{Header:"Bookname",accessor:"bookname"},{Header:"Publisher",accessor:"publisher"},{Header:"Author",accessor:"author"},{Header:"Price",accessor:"price"},{Header:"Type",accessor:"booktype"},{Header:"Acd-Year",accessor:"academicyear"},{Header:"",sortable:!1,Cell:function(a){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(b.a,{title:"Edit TextBooks"},r.a.createElement(E.a,{onClick:function(t){t.stopPropagation(),e(u.l.openEditDialog(a.original,"edit"))}},r.a.createElement(i.a,null,"edit"))),r.a.createElement(b.a,{title:"Delete / Inactivate"},r.a.createElement(E.a,{onClick:function(t){t.stopPropagation(),e(u.l.openEditDialog(a.original,"delete"))}},r.a.createElement(i.a,null,"delete"))))}}]}))},x=t(11),g=t(10),N=t(1033),k=t(1027),w=t(1037),j=t(1038),D=t(1010),O=t(1024),C=t(1046),_=t(1039),T=t(82),L=t.n(T),B=t(109),A={id:"",academicyear:"",edusystem:"",class_section:"",subject:"",bookname:"",publisher:"",author:"",price:"",isactive:!0,booktype:""};var S=function(e){var a=Object(d.b)(),t=Object(d.c)((function(e){return e.textbook.dialog})),o=Object(n.useState)(!1),c=Object(g.a)(o,2),p=c[0],b=c[1],E=Object(B.b)(A),f=E.form,y=E.setForm,T=E.setInForm,S=Object(n.useRef)(null),I=u.m.editTextBook;"new"===t.type?I=u.m.addTextBook:"edit"===t.type?I=u.m.editTextBook:"delete"===t.type&&(I=u.m.delTextBook);var P=Object(v.c)(I,{onCompleted:function(e){e.data;R()}}),H=Object(g.a)(P,2),W=H[0],Y=H[1],q=Y.loading,F=Y.error,G=Object(n.useCallback)((function(){"edit"!==t.type&&"delete"!==t.type||!t.data||y(Object(x.a)({},t.data)),"new"===t.type&&y(Object(x.a)({},A))}),[t.data,t.type,y]);Object(n.useEffect)((function(){return t.props.open&&G(),function(){y(A)}}),[t.props.open,G,y]);var R=function(){"edit"===t.type?a(u.l.closeEditDialog()):a(u.l.closeNewDialog())},J=function(e,a){T(a,e.value)},V=function(e,a){T(a,e.label)};return r.a.createElement(N.a,Object.assign({},t.props,{onClose:R,fullWidth:!0,maxWidth:"md"}),r.a.createElement(k.a,{position:"static",elevation:1},r.a.createElement(w.a,{className:"flex w-full"},r.a.createElement(s.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"New TextBook":"edit"===t.type?"Edit TextBook":"Delete TextBook"))),r.a.createElement(j.a,{classes:{root:"p-0"}},r.a.createElement("div",{className:"px-16 sm:px-24"},r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{onValid:function(){b(!0)},onInvalid:function(){b(!1)},ref:S,onValidSubmit:function(e){"new"===t.type?W({variables:{academicyear:l.v.getDD(f.academicyear),edusystem:l.v.getDD(f.edusystem),class_section:l.v.getDD(f.class_section),subject:l.v.getDD(f.subject),bookname:e.bookname,publisher:e.publisher,author:e.author,price:Number(e.price),isactive:e.isactive?e.isactive:f.isactive,booktype:f.booktype}}):"edit"===t.type?W({variables:{id:f.id,academicyear:l.v.getDD(f.academicyear),edusystem:l.v.getDD(f.edusystem),class_section:l.v.getDD(f.class_section),subject:l.v.getDD(f.subject),bookname:e.bookname,publisher:e.publisher,author:e.author,price:Number(e.price),isactive:f.isactive,booktype:f.booktype}}):"delete"===t.type&&W({variables:{id:f.id}})}},r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-row"},r.a.createElement(h.g,{formName:f,isSetLabel:!0,onDDChange:V,cssClass:"mb-16 w-1/2"}),r.a.createElement("span",{className:"ml-8"}),r.a.createElement(h.a,{formName:f,isSetLabel:!0,onDDChange:V,cssClass:"mb-16 w-1/2"})),r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-row"},r.a.createElement(h.c,{formName:f,onDDChange:J,label:"Class & section",showAll:!1,cssClass:"mb-16 w-1/2"}),r.a.createElement("span",{className:"ml-8"}),r.a.createElement(h.m,{formName:f,onDDChange:J,cssClass:"mb-16 w-1/2"})),r.a.createElement("div",{className:"px-8 sm:px-8 mt-16 flex flex-row"},r.a.createElement(h.f,{formName:f,filterName:"BOOK_TYPE",fieldName:"booktype",label:"Book Type",cssClass:"w-1/2",onDDChange:V}),r.a.createElement(l.y,{className:"pr-8 mb-8 ml-8 w-1/2",type:"text",name:"bookname",label:"Book Name",value:f.bookname,validations:{maxLength:50},validationErrors:{maxLength:"You can not type in more than 50 characters"},InputProps:{endAdornment:r.a.createElement(D.a,{position:"end"},r.a.createElement(i.a,{className:"text-20",color:"action"},"developer_board"))},variant:"outlined",required:!0})),r.a.createElement("div",{className:"px-8 sm:px-8 mt-8 flex flex-row"},r.a.createElement(l.y,{className:"pr-8 mb-8 mt-8",type:"text",name:"publisher",label:"Publisher",value:f.publisher,validations:{maxLength:50},validationErrors:{maxLength:"You can not type in more than 50 characters"},InputProps:{endAdornment:r.a.createElement(D.a,{position:"end"},r.a.createElement(i.a,{className:"text-20",color:"action"},"account_box"))},variant:"outlined",required:!0}),r.a.createElement(l.y,{className:"pr-8 mb-8 mt-8",type:"text",name:"author",label:"Author",value:f.author,validations:{maxLength:50},validationErrors:{maxLength:"You can not type in more than 50 characters"},InputProps:{endAdornment:r.a.createElement(D.a,{position:"end"},r.a.createElement(i.a,{className:"text-20",color:"action"},"account_circle"))},variant:"outlined",required:!0})),r.a.createElement("div",{className:"px-8 sm:px-8 mt-8 flex flex-row"},r.a.createElement(l.y,{className:"pr-8 mb-8 mt-8",type:"number",name:"price",label:"Price",value:f.price,InputProps:{endAdornment:r.a.createElement(D.a,{position:"end"},r.a.createElement(i.a,{className:"text-20",color:"action"},"attach_money"))},variant:"outlined",required:!0}),r.a.createElement(l.y,{className:"pr-8 mb-8 mt-8",type:"text",name:"notes",label:"Notes",value:f.notes,validations:{maxLength:50},validationErrors:{maxLength:"You can not type in more than 50 characters"},variant:"outlined"}),r.a.createElement(O.a,{control:r.a.createElement(C.a,{checked:f.isactive,onChange:function(e){T("isactive",e.target.checked)},value:f.isactive,color:"primary"}),label:"isActive"}))),q&&r.a.createElement(h.j,{message:"Saving data..."}),F&&r.a.createElement(s.a,{className:"pt-32"},"Error : Please try again! ",r.a.createElement("br",null),F.message," ",r.a.createElement("br",null))))),"new"===t.type&&r.a.createElement(_.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){R()}},"Close"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){S.current.submit()},disabled:!p},"Add TextBook")),"edit"===t.type&&r.a.createElement(_.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){R()}},"Close"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){S.current.submit()},disabled:!p},"Save")),"delete"===t.type&&r.a.createElement(_.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){R()}},"Close"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){S.current.submit()}},"Delete")))};a.default=Object(o.a)("textbook",c.a)((function(){var e=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-72 sm:min-h-72"},header:r.a.createElement(p,{pageLayout:e}),content:r.a.createElement(y,null),ref:e,innerScroll:!0}),r.a.createElement(S,null))}))}}]);