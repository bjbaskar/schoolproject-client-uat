(this["webpackJsonpsivanandha-vidyashram-seithur"]=this["webpackJsonpsivanandha-vidyashram-seithur"]||[]).push([[17],{1392:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(16),c=n(195),d=n(876),o=n(873),i=n(8),l=n(31),m=n(10),u=n(827),g=n(174),b=n(830),f=n(832),p=n(826),x=n(757),I=n(812),$=n(192),E=n(11),N=n(134),y=n.n(N),j=n(70),S=n(21),O=n(861),k=function(t){var e=t.initialValue,n=t.rowId,s=t.examName,c=t.classId,d=t.studentId,o=t.maxMarks,i=t.index,l=Object(E.b)(),f=Object(a.useState)(!1),p=Object(m.a)(f,2),x=p[0],I=p[1],N=r.a.useState(e),y=Object(m.a)(N,2),j=y[0],k=y[1],v=Object($.c)(O.c.editMarkRegister,{onCompleted:function(t){t.editMarkRegister&&"Updated successfully"===t.editMarkRegister.Messages&&(l(S.j({message:"Student Marks have been updated successfully",variant:"success"})),I(!1))}}),M=Object(m.a)(v,2),_=M[0],h=M[1].loading;r.a.useEffect((function(){k(e)}),[e]);return r.a.createElement(a.Fragment,null,r.a.createElement(u.a,{id:"edit_".concat(i),tabIndex:i,label:"Enter Marks",variant:"outlined",value:j<0?0:j,onChange:function(t){k(t.target.value),e!==t.target.value&&I(!0)},onBlur:function(){x&&_({variables:{id:n,marksObtained:Number(j),maxMarks:Number(o),examName:s,classId:c,studentId:d}})},InputLabelProps:{style:{color:"#000000"}},style:{width:100,backgroundColor:"#FFFFFF"},type:"number",onInput:function(t){t.target.value=function(t){if(t.target.value){var e=Math.max(0,parseInt(t.target.value));if(e<=100)return e}}(t)},min:0}),h?r.a.createElement(a.Fragment,null,r.a.createElement(g.a,{className:"text-13 my-8",color:"textSecondary"},"Saving..."),r.a.createElement(b.a,{color:"secondary"})):"")},v={currentPage:1,total:0,pageSize:20,sorted:"",isAsc:"ASC",examName:"",classId:"",subject:"",classSecName:"",subjectName:""};var M=function(){var t=Object(E.b)(),e=Object(a.useState)(v),n=Object(m.a)(e,2),s=n[0],c=n[1],d=Object(a.useState)({open:!1,data:""}),o=Object(m.a)(d,2),u=o[0],g=o[1],b=Object(a.useState)([]),N=Object(m.a)(b,2),S=N[0],M=N[1],_=Object($.b)(O.c.verifyMarkReg,{onCompleted:function(){R&&!1===R.isFound&&0===R.count?U(!0,""):B()}}),h=Object(m.a)(_,2),C=h[0],w=h[1],A=w.loading,D=(w.error,w.data),T=(D=void 0===D?{}:D).verifyMarkRegister,R=void 0===T?{}:T,G=Object($.b)(O.c.getMarkEntry,{onCompleted:function(t){y.a.isEmpty(t.getMarkEntry)?M([]):M(t.getMarkEntry)}}),F=Object(m.a)(G,2),L=F[0],P=F[1],Y=P.loading,H=(P.error,P.data),q=((H=void 0===H?{}:H).getMarkEntry,Object($.c)(O.c.createMarkRegister,{onCompleted:function(t){y.a.isEmpty(t.createMarkRegister)?M([]):M(t.createMarkRegister)}})),W=Object(m.a)(q,2),X=W[0],z=W[1],B=(z.loading,z.error,function(){L({variables:{examName:s.examName,classId:s.classId,subjectId:s.subject,acadyear:""}})}),V=function(t,e){"class_section"===e&&(e="classId");var n=Object(l.a)({},e,t.value);if(c((function(t){return Object.assign(Object(i.a)(Object(i.a)({},t),n))})),"classId"===e){var a={classSecName:t.label};c((function(t){return Object.assign(Object(i.a)(Object(i.a)({},t),a))}))}if("subject"===e){var r={subjectName:t.label};c((function(t){return Object.assign(Object(i.a)(Object(i.a)({},t),r))}))}M([])},J=function(){U(!1),s.examName&&s.classId&&s.subject&&X({variables:{examName:s.examName,classId:s.classId,subjectId:s.subject,acadyear:""}})},U=function(t,e){t?g({open:t,data:e}):g({open:!1})};return A||Y?r.a.createElement(j.s,null):r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement("div",{className:"flex md:flex-row sm:flex-col xs:flex-col mt-8 z-999"},r.a.createElement(j.f,{formName:s,filterName:"EXAM_TYPE",fieldName:"examName",label:"Exam Name",cssClass:"w-1/4 my-8 mr-8 ml-32",onDDChange:function(t,e){var n,a=(n={},Object(l.a)(n,e,t.label),Object(l.a)(n,"currentPage",1),n);c((function(t){return Object.assign(Object(i.a)(Object(i.a)({},t),a))})),M([])}}),r.a.createElement(j.c,{formName:s.classId,onDDChange:V,label:"Search by Class & Section",showAll:!1,cssClass:"w-1/4 my-8 mr-8 ml-32"}),r.a.createElement(j.y,{formName:s.subject,classId:s.classId,onDDChange:V,cssClass:"w-1/4 my-8 ml-32"})),r.a.createElement("div",{className:"flex md:flex-row sm:flex-col xs:flex-col mt-8 z-99 justify-center"},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){s.examName.length&&s.classId.length&&s.subject.length&&C({variables:{examName:s.examName,classId:s.classId,subjectId:s.subject}})},className:"w-1/6 my-8 mr-12 ml-32 pr-12 normal-case",style:{height:56}},"Get Mark Entry"),r.a.createElement(p.a,{title:"Add Student to Mark Entry","aria-label":"add"},r.a.createElement(x.a,{"aria-label":"add",color:"default",className:"",onClick:function(e){e.stopPropagation(),t(O.a.openEditDialog({classId:s.classId,classSecName:s.classSecName,examName:s.examName,subjectId:s.subject,subjectName:s.subjectName},"edit"))}},r.a.createElement(I.a,null,"personadd"),r.a.createElement(I.a,null,"add")))),r.a.createElement(j.o,{cssClass:"-striped -highlight border-0 min-w-xl ",data:S,hasExport:!0,columns:[{id:"rownum",Header:"#",className:"w-4",Cell:function(t){return t.row.index+1}},{id:"controls",Header:"",sortable:!1,className:"w-4",Cell:function(e){return r.a.createElement(p.a,{title:"Add Comments"},r.a.createElement(x.a,{tabIndex:-1,onClick:function(n){n.stopPropagation(),t(O.a.openEditDialog(e.row.original,"edit"))}},r.a.createElement(I.a,null,"message")))}},{id:"name",Header:"Name",accessor:function(t){return t.firstName+" "+t.lastName},style:{whiteSpace:"unset"}},{id:"marksObtained",Header:"Marks Obtained",accessor:"marksObtained",getProps:function(){return{style:{justifyContent:"center"}}},Cell:function(t){return r.a.createElement(k,{initialValue:t.row.original.marksObtained,rowId:t.row.original.id,examName:t.row.original.examName,classId:t.row.original.classId,studentId:t.row.original.studentId,maxMarks:t.row.original.maxMarks,index:t.row.index})}},{id:"max",Header:"Max",accessor:"maxMarks",getProps:function(){return{style:{justifyContent:"center"}}}},{id:"subject",Header:"Subject",accessor:"subjectName",Cell:function(t){return r.a.createElement("div",{className:"inline p-4 rounded truncate",style:{backgroundColor:t.row.original.subjectColor,minWidth:"42px"}},t.row.original.subjectName)}}],exportMode:"DATA"}),r.a.createElement("div",{className:"flex pb-32"}),r.a.createElement(j.e,{open:u.open,title:"Do you want to create a new mark register",onConfirm:function(){return J()},onCancel:function(){return U(!1)},buttonText:"Create Mark Register"},r.a.createElement("div",null,"There is no mark register found for this search criteria."),r.a.createElement("div",null,"Do you want to create a new mark register?")))},_=n(829),h=n(823),C=n(833),w=n(834),A=n(835),D=n(101),T=n(79),R=n.n(T),G={classId:"",examName:"",subjectId:"",studentId:""};var F=function(t){var e=Object(E.b)(),n=Object(E.c)((function(t){return t.marks.dialog})),s=Object(a.useState)(""),c=Object(m.a)(s,2),d=c[0],o=c[1],l=Object(D.b)(G),u=l.form,b=l.setForm,p=l.setInForm,x=Object(a.useRef)(null),I=Object($.c)(O.c.addStudentToRegister,{onCompleted:function(t){T()}}),N=Object(m.a)(I,2),y=N[0],S=N[1],k=S.loading,v=S.error,M=Object(a.useCallback)((function(){b(Object(i.a)({},n.data))}),[n.data,n.type,b]);Object(a.useEffect)((function(){return n.props.open&&M(),function(){b(G)}}),[n.props.open,M,b]);var T=function(){"edit"===n.type?e(O.a.closeEditDialog()):e(O.a.closeNewDialog())};return r.a.createElement(_.a,Object.assign({},n.props,{onClose:T,fullWidth:!0,maxWidth:"sm"}),r.a.createElement(h.a,{position:"static",elevation:1},r.a.createElement(C.a,{className:"flex w-full"},r.a.createElement(g.a,{variant:"subtitle1",color:"inherit"},"Add Student to Mark Register"))),r.a.createElement(w.a,{classes:{root:"px-16 sm:px-24"}},r.a.createElement(a.Fragment,null,r.a.createElement(R.a,{ref:x,onValidSubmit:function(t){u&&u.studentId&&u.examName&&u.classId&&u.subjectId?y({variables:{studentId:u.studentId,examName:u.examName,classId:u.classId,subjectId:u.subjectId}}):o("Please select Class / Subject / ExamName and Student")}},r.a.createElement("div",{className:"mt-16 flex flex-col w-full justify-center"},r.a.createElement(j.x,{classId:u.classId,optionName:"studentId",label:"Select Student",cssClass:"my-8 mr-8 w-full",onDDChange:function(t,e){"studentId"===e&&p("studentId",t.value)}}),r.a.createElement("table",{className:"simple"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Class Name"),r.a.createElement("td",null,u.classSecName)),r.a.createElement("tr",null,r.a.createElement("th",null,"Subject Name"),r.a.createElement("td",null,u.subjectName)),r.a.createElement("tr",null,r.a.createElement("th",null,"Exam Name"),r.a.createElement("td",null,u.examName)))))),d&&r.a.createElement(g.a,{color:"secondary",className:"pt-32"},d),k&&r.a.createElement(j.s,{message:"Saving data..."}),v&&r.a.createElement(g.a,{color:"secondary",className:"pt-32"},"Error : Please try again! ",r.a.createElement("br",null),v.message," ",r.a.createElement("br",null)))),r.a.createElement(A.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){e(O.a.closeOnlyDialog())}},"Close"),"edit"===n.type&&r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){x.current.submit()}},"Add Student")))};e.default=Object(c.a)("marks",d.a)((function(){var t=Object(a.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.m,{classes:{contentWrapper:"p-0 h-full",content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-72 sm:min-h-72"},header:r.a.createElement(o.a,{pageLayout:t,headerName:"Mark Entry",buttonDisplay:"Mark Register",icon:"book",markreg:!0}),content:r.a.createElement(M,null),ref:t,innerScroll:!0}),r.a.createElement(F,null))}))},861:function(t,e,n){"use strict";var a={};n.r(a),n.d(a,"SET_SEARCH_TEXT",(function(){return d})),n.d(a,"OPEN_NEW_DIALOG",(function(){return o})),n.d(a,"CLOSE_NEW_DIALOG",(function(){return i})),n.d(a,"OPEN_EDIT_DIALOG",(function(){return l})),n.d(a,"CLOSE_EDIT_DIALOG",(function(){return m})),n.d(a,"CLOSE_ONLY_DIALOG",(function(){return u})),n.d(a,"setSearchText",(function(){return g})),n.d(a,"openNewDialog",(function(){return b})),n.d(a,"closeNewDialog",(function(){return f})),n.d(a,"openEditDialog",(function(){return p})),n.d(a,"closeEditDialog",(function(){return x})),n.d(a,"closeOnlyDialog",(function(){return I}));var r={};n.r(r),n.d(r,"getAllExamMaster",(function(){return h})),n.d(r,"addExamMaster",(function(){return C})),n.d(r,"editExamMaster",(function(){return w})),n.d(r,"delExamMaster",(function(){return A})),n.d(r,"getAllExamGrade",(function(){return D})),n.d(r,"addMarkGrade",(function(){return T})),n.d(r,"editMarkGrade",(function(){return R})),n.d(r,"delMarkGrade",(function(){return G}));var s={};n.r(s),n.d(s,"verifyMarkReg",(function(){return z})),n.d(s,"createMarkRegister",(function(){return B})),n.d(s,"getMarkEntry",(function(){return V})),n.d(s,"editMarkRegister",(function(){return J})),n.d(s,"getClassMarkRegister",(function(){return U})),n.d(s,"getStudentMarks",(function(){return K})),n.d(s,"getAllExamGrade",(function(){return Q})),n.d(s,"addStudentToRegister",(function(){return Z}));var c={};n.r(c),n.d(c,"getStudentsForPromotion",(function(){return rt})),n.d(c,"doPromotion",(function(){return st})),n.d(c,"getNextAcadYear",(function(){return ct})),n.d(c,"getPromotionHistory",(function(){return dt}));var d="[EXAM_MASTER] SET SEARCH TEXT",o="[EXAM_MASTER] OPEN NEW DIALOG",i="[EXAM_MASTER] CLOSE NEW DIALOG",l="[EXAM_MASTER] OPEN EDIT DIALOG",m="[EXAM_MASTER] CLOSE EDIT DIALOG",u="[EXAM_MASTER] CLOSE ONLY DIALOG";function g(t){return{type:d,searchText:t.target.value}}function b(){return{type:o}}function f(){return{type:i}}function p(t,e){return{type:l,data:t,mode:e}}function x(){return{type:m}}function I(){return{type:u}}var $=n(13),E=n(12),N=n.n(E);function y(){var t=Object($.a)(["\n\tmutation delMarkGrade($id: String!) {\n\t\tdelMarkGrade(id: $id) {\n\t\t\tMessages\n\t\t}\n\t}\n"]);return y=function(){return t},t}function j(){var t=Object($.a)(["\n\tmutation editMarkGrade(\n\t\t$id: String!\n\t\t$name: String\n\t\t$description: String\n\t\t$color: String\n\t\t$grade_point: Int\n\t\t$min: Int\n\t\t$max: Int\n\t\t$orderby: Int\n\t\t$acd_year_id: String\n\t\t$notes: String\n\t) {\n\t\teditMarkGrade(\n\t\t\tid: $id\n\t\t\tinput: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tcolor: $color\n\t\t\t\tgrade_point: $grade_point\n\t\t\t\tmin: $min\n\t\t\t\tmax: $max\n\t\t\t\torderby: $orderby\n\t\t\t\tacd_year_id: $acd_year_id\n\t\t\t\tnotes: $notes\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"]);return j=function(){return t},t}function S(){var t=Object($.a)(["\n\tmutation addMarkGrade(\n\t\t$name: String\n\t\t$description: String\n\t\t$color: String\n\t\t$grade_point: Int\n\t\t$min: Int\n\t\t$max: Int\n\t\t$orderby: Int\n\t\t$acd_year_id: String\n\t\t$notes: String\n\t) {\n\t\taddMarkGrade(\n\t\t\tinput: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tcolor: $color\n\t\t\t\tgrade_point: $grade_point\n\t\t\t\tmin: $min\n\t\t\t\tmax: $max\n\t\t\t\torderby: $orderby\n\t\t\t\tacd_year_id: $acd_year_id\n\t\t\t\tnotes: $notes\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"]);return S=function(){return t},t}function O(){var t=Object($.a)(["\n\tquery {\n\t\tgetAllExamGrade {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tcolor\n\t\t\tgrade_point\n\t\t\tmin\n\t\t\tmax\n\t\t\torderby\n\t\t\tnotes\n\t\t\tcreatedby\n\t\t\tcreatedon\n\t\t\tupdatedby\n\t\t\tupdatedon\n\t\t}\n\t}\n"]);return O=function(){return t},t}function k(){var t=Object($.a)(["\n\tmutation delExamMaster($id: String!) {\n\t\tdelExamMaster(id: $id) {\n\t\t\tMessages\n\t\t}\n\t}\n"]);return k=function(){return t},t}function v(){var t=Object($.a)(["\n\tmutation editExamMaster(\n\t\t$id: String!\n\t\t$name: String\n\t\t$class: String\n\t\t$subjects: String\n\t\t$min_marks: Int\n\t\t$max_marks: Int\n\t\t$orderby: Int\n\t\t$notes: String\n\t\t$is_final_exam: Boolean\n\t) {\n\t\teditExamMaster(\n\t\t\tid: $id\n\t\t\tinput: {\n\t\t\t\tname: $name\n\t\t\t\tclass: $class\n\t\t\t\tsubjects: $subjects\n\t\t\t\tmin_marks: $min_marks\n\t\t\t\tmax_marks: $max_marks\n\t\t\t\torderby: $orderby\n\t\t\t\tnotes: $notes\n\t\t\t\tis_final_exam: $is_final_exam\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"]);return v=function(){return t},t}function M(){var t=Object($.a)(["\n\tmutation addExamMaster(\n\t\t$name: String\n\t\t$class: String\n\t\t$subjects: String\n\t\t$min_marks: Int\n\t\t$max_marks: Int\n\t\t$orderby: Int\n\t\t$notes: String\n\t\t$is_final_exam: Boolean\n\t) {\n\t\taddExamMaster(\n\t\t\tinput: {\n\t\t\t\tname: $name\n\t\t\t\tclass: $class\n\t\t\t\tsubjects: $subjects\n\t\t\t\tmin_marks: $min_marks\n\t\t\t\tmax_marks: $max_marks\n\t\t\t\torderby: $orderby\n\t\t\t\tnotes: $notes\n\t\t\t\tis_final_exam: $is_final_exam\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"]);return M=function(){return t},t}function _(){var t=Object($.a)(["\n\tquery getAllExamMaster(\n\t\t$pageNo: Int\n\t\t$pageSize: Int\n\t\t$examName: String\n\t\t$classId: String\n\t) {\n\t\tgetAllExamMaster(\n\t\t\tpageNo: $pageNo\n\t\t\tpageSize: $pageSize\n\t\t\texamName: $examName\n\t\t\tclassId: $classId\n\t\t) {\n\t\t\trows {\n\t\t\t\tid\n\t\t\t\texamName\n\t\t\t\tminMarks\n\t\t\t\tmaxMarks\n\t\t\t\torderby\n\t\t\t\tnotes\n\t\t\t\tis_final_exam\n\t\t\t\tclassId\n\t\t\t\tclassName\n\t\t\t\tclassSection\n\t\t\t\tsubjectId\n\t\t\t\tsubjectName\n\t\t\t\tsubjectSubcode\n\t\t\t\tsubjectColor\n\t\t\t\tcreatedby\n\t\t\t\tcreatedon\n\t\t\t\tupdatedby\n\t\t\t\tupdatedon\n\t\t\t}\n\t\t\tcount\n\t\t}\n\t}\n"]);return _=function(){return t},t}var h=N()(_()),C=N()(M()),w=N()(v()),A=N()(k()),D=N()(O()),T=N()(S()),R=N()(j()),G=N()(y());function F(){var t=Object($.a)(["\n\tmutation addStudentToRegister(\n\t\t$studentId: String\n\t\t$examName: String\n\t\t$classId: String\n\t\t$subjectId: String\n\t) {\n\t\taddStudentToRegister(\n\t\t\tstudentId: $studentId\n\t\t\tinput: {\n\t\t\t\texamName: $examName\n\t\t\t\tclassId: $classId\n\t\t\t\tsubjectId: $subjectId\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\texamName\n\t\t\tclassId\n\t\t\tclassName\n\t\t\tclassSection\n\t\t\tsubjectId\n\t\t\tsubjectName\n\t\t\tstudentId\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tmarksObtained\n\t\t\tmaxMarks\n\t\t\tacad_year\n\t\t\tnotes\n\t\t\tcreatedby\n\t\t\tcreatedon\n\t\t\tupdatedby\n\t\t\tupdatedon\n\t\t}\n\t}\n"]);return F=function(){return t},t}function L(){var t=Object($.a)(["\n\tquery {\n\t\tgetAllExamGrade {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tcolor\n\t\t\tgrade_point\n\t\t\tmin\n\t\t\tmax\n\t\t\torderby\n\t\t\tnotes\n\t\t\tcreatedby\n\t\t\tcreatedon\n\t\t\tupdatedby\n\t\t\tupdatedon\n\t\t}\n\t}\n"]);return L=function(){return t},t}function P(){var t=Object($.a)(["\n\tquery getStudentMarks(\n\t\t$examName: String\n\t\t$classId: String\n\t\t$studentId: String\n\t\t$acadyear: String\n\t) {\n\t\tgetStudentMarks(\n\t\t\texamName: $examName\n\t\t\tclassId: $classId\n\t\t\tstudentId: $studentId\n\t\t\tacadyear: $acadyear\n\t\t) {\n\t\t\texamName\n\t\t\tprofile {\n\t\t\t\tstudentId\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tgender\n\t\t\t\texamName\n\t\t\t\tclassName\n\t\t\t\tclassSection\n\t\t\t\tmaxMarks\n\t\t\t\ttotalMarksObtained\n\t\t\t\ttotalMaxMarks\n\t\t\t\ttotalGrade\n\t\t\t\ttotalGradeColor\n\t\t\t\ttotalPercentage\n\t\t\t\tnotes\n\t\t\t}\n\t\t\tmarks {\n\t\t\t\tsubjectName\n\t\t\t\tsubjectColor\n\t\t\t\tmarksObtained\n\t\t\t\tperc\n\t\t\t\tgradeName\n\t\t\t\tgradePoint\n\t\t\t\tgradeColor\n\t\t\t}\n\t\t}\n\t}\n"]);return P=function(){return t},t}function Y(){var t=Object($.a)(["\n\tquery getClassMarkRegister(\n\t\t$examName: String\n\t\t$classId: String\n\t\t$acadyear: String\n\t) {\n\t\tgetClassMarkRegister(\n\t\t\texamName: $examName\n\t\t\tclassId: $classId\n\t\t\tacadyear: $acadyear\n\t\t) {\n\t\t\tstudentId\n\t\t\tprofile {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tgender\n\t\t\t\texamName\n\t\t\t\tclassName\n\t\t\t\tclassSection\n\t\t\t\tmaxMarks\n\t\t\t\ttotalMarksObtained\n\t\t\t\ttotalMaxMarks\n\t\t\t\ttotalGrade\n\t\t\t\ttotalGradeColor\n\t\t\t\ttotalPercentage\n\t\t\t\tnotes\n\t\t\t}\n\t\t\tmarks {\n\t\t\t\tsubjectName\n\t\t\t\tsubjectColor\n\t\t\t\tmarksObtained\n\t\t\t\tmaxMarks\n\t\t\t\tperc\n\t\t\t\tgradeName\n\t\t\t\tgradePoint\n\t\t\t\tgradeColor\n\t\t\t}\n\t\t}\n\t}\n"]);return Y=function(){return t},t}function H(){var t=Object($.a)(["\n\tmutation editMarkRegister(\n\t\t$id: String\n\t\t$marksObtained: Int\n\t\t$maxMarks: Int\n\t\t$examName: String\n\t\t$classId: String\n\t\t$studentId: String\n\t) {\n\t\teditMarkRegister(\n\t\t\tid: $id\n\t\t\tmarksObtained: $marksObtained\n\t\t\tmaxMarks: $maxMarks\n\t\t\texamName: $examName\n\t\t\tclassId: $classId\n\t\t\tstudentId: $studentId\n\t\t) {\n\t\t\tMessages\n\t\t}\n\t}\n"]);return H=function(){return t},t}function q(){var t=Object($.a)(["\n\tquery getMarkEntry(\n\t\t$examName: String\n\t\t$classId: String\n\t\t$subjectId: String\n\t\t$acadyear: String\n\t) {\n\t\tgetMarkEntry(\n\t\t\tinput: {\n\t\t\t\texamName: $examName\n\t\t\t\tclassId: $classId\n\t\t\t\tsubjectId: $subjectId\n\t\t\t}\n\t\t\tacadyear: $acadyear\n\t\t) {\n\t\t\tid\n\t\t\texamName\n\t\t\tclassId\n\t\t\tclassName\n\t\t\tclassSection\n\t\t\tsubjectId\n\t\t\tsubjectName\n\t\t\tstudentId\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tmarksObtained\n\t\t\tmaxMarks\n\t\t\tacad_year\n\t\t\tnotes\n\t\t\tcreatedby\n\t\t\tcreatedon\n\t\t\tupdatedby\n\t\t\tupdatedon\n\t\t}\n\t}\n"]);return q=function(){return t},t}function W(){var t=Object($.a)(["\n\tmutation createMarkRegister(\n\t\t$examName: String\n\t\t$classId: String\n\t\t$subjectId: String\n\t\t$acadyear: String\n\t) {\n\t\tcreateMarkRegister(\n\t\t\tinput: {\n\t\t\t\texamName: $examName\n\t\t\t\tclassId: $classId\n\t\t\t\tsubjectId: $subjectId\n\t\t\t}\n\t\t\tacadyear: $acadyear\n\t\t) {\n\t\t\tid\n\t\t\texamName\n\t\t\tclassId\n\t\t\tclassName\n\t\t\tclassSection\n\t\t\tsubjectId\n\t\t\tsubjectName\n\t\t\tstudentId\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tmarksObtained\n\t\t\tmaxMarks\n\t\t\tacad_year\n\t\t\tnotes\n\t\t\tcreatedby\n\t\t\tcreatedon\n\t\t\tupdatedby\n\t\t\tupdatedon\n\t\t}\n\t}\n"]);return W=function(){return t},t}function X(){var t=Object($.a)(["\n\tquery verifyMarkRegister(\n\t\t$examName: String\n\t\t$classId: String\n\t\t$subjectId: String\n\t) {\n\t\tverifyMarkRegister(\n\t\t\tinput: {\n\t\t\t\texamName: $examName\n\t\t\t\tclassId: $classId\n\t\t\t\tsubjectId: $subjectId\n\t\t\t}\n\t\t) {\n\t\t\tisFound\n\t\t\tcount\n\t\t}\n\t}\n"]);return X=function(){return t},t}var z=N()(X()),B=N()(W()),V=N()(q()),J=N()(H()),U=N()(Y()),K=N()(P()),Q=N()(L()),Z=N()(F());function tt(){var t=Object($.a)(["\n\tquery getPromotionHistory($classId: String, $acadyear: String) {\n\t\tgetPromotionHistory(classId: $classId, acadyear: $acadyear) {\n\t\t\tclassFrom\n\t\t\tclassTo\n\t\t\tacadFrom\n\t\t\tacadTo\n\n\t\t\tgetexamname\n\t\t\tispromotetonewclass\n\t\t\tnoofstudentspromoted\n\n\t\t\tupdateacdyear\n\t\t\tnoofupdateacdyear\n\n\t\t\tdetainedstudents\n\t\t\tnoofdetained\n\n\t\t\taddmarkstoarchieved\n\t\t\tnoofaddmarksarchieved\n\n\t\t\thasdeletedmarkregister\n\t\t\tnoofdelmarkregister\n\n\t\t\thasdeletedmarkregistersum\n\t\t\tnoofdelmarkregistersum\n\n\t\t\thasattendancearchieved\n\t\t\tnoofattendancearchieved\n\n\t\t\thasdeletedattendance\n\t\t\tnoofattendancedeleted\n\n\t\t\thasupdatepromotionstatus\n\t\t}\n\t}\n"]);return tt=function(){return t},t}function et(){var t=Object($.a)(["\n\tquery {\n\t\tgetNextAcadYear {\n\t\t\tid\n\t\t\tfromdate\n\t\t\ttodate\n\t\t\tdisplayname\n\t\t\tis_current\n\t\t\tis_next\n\t\t\tprefixyear\n\t\t}\n\t}\n"]);return et=function(){return t},t}function nt(){var t=Object($.a)(["\n\tmutation doPromotion(\n\t\t$classIdFrom: String\n\t\t$classIdTo: String\n\t\t$acadYearFrom: String\n\t\t$acadYearTo: String\n\t\t$studentId: [String]\n\t\t$detainedStudentIds: [String]\n\t\t$isFinalYear: Boolean\n\t\t$promoteReason: String\n\t) {\n\t\tdoPromotion(\n\t\t\tinput: {\n\t\t\t\tclassIdFrom: $classIdFrom\n\t\t\t\tclassIdTo: $classIdTo\n\t\t\t\tacadYearFrom: $acadYearFrom\n\t\t\t\tacadYearTo: $acadYearTo\n\t\t\t\tstudentId: $studentId\n\t\t\t\tdetainedStudentIds: $detainedStudentIds\n\t\t\t\tisFinalYear: $isFinalYear\n\t\t\t\tpromoteReason: $promoteReason\n\t\t\t}\n\t\t) {\n\t\t\tclassFrom\n\t\t\tclassTo\n\t\t\tacadFrom\n\t\t\tacadTo\n\n\t\t\tgetexamname\n\t\t\tispromotetonewclass\n\t\t\tnoofstudentspromoted\n\n\t\t\tupdateacdyear\n\t\t\tnoofupdateacdyear\n\n\t\t\tdetainedstudents\n\t\t\tnoofdetained\n\n\t\t\taddmarkstoarchieved\n\t\t\tnoofaddmarksarchieved\n\n\t\t\thasdeletedmarkregister\n\t\t\tnoofdelmarkregister\n\n\t\t\thasdeletedmarkregistersum\n\t\t\tnoofdelmarkregistersum\n\n\t\t\thasattendancearchieved\n\t\t\tnoofattendancearchieved\n\n\t\t\thasdeletedattendance\n\t\t\tnoofattendancedeleted\n\n\t\t\thasupdatepromotionstatus\n\t\t}\n\t}\n"]);return nt=function(){return t},t}function at(){var t=Object($.a)(["\n\tquery getStudentsForPromotion(\n\t\t$examName: [String]\n\t\t$classId: String\n\t\t$acadyear: String\n\t) {\n\t\tgetStudentsForPromotion(\n\t\t\texamName: $examName\n\t\t\tclassId: $classId\n\t\t\tacadyear: $acadyear\n\t\t) {\n\t\t\tpromotionData {\n\t\t\t\tstudentId\n\t\t\t\tstudentName\n\t\t\t\tgender\n\t\t\t\tclassNameSection\n\t\t\t\ttotalPercentage\n\t\t\t\ttotalGrade\n\t\t\t\ttotalGradeColor\n\t\t\t\tacadYear\n\t\t\t}\n\t\t\tstatus\n\t\t}\n\t}\n"]);return at=function(){return t},t}var rt=N()(at()),st=N()(nt()),ct=N()(et()),dt=N()(tt());n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c}))},873:function(t,e,n){"use strict";var a=n(0),r=n.n(a),s=n(812),c=n(174),d=n(832),o=n(16),i=n(11),l=n(861),m=n(87);e.a=function(t){var e=Object(i.b)(),n=Object(m.g)();return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between px-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(o.a,{animation:"transition.expandIn",delay:300},r.a.createElement(s.a,{className:"text-32 mr-12"},t.icon)),r.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(c.a,{variant:"h6",className:"hidden sm:flex"},t.headerName))),r.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(d.a,{onClick:function(){t.markentry?n.push("/exam/markentry"):t.markreg?n.push("/exam/markregister"):e(l.a.openNewDialog())},variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex normal-case"},t.buttonDisplay?t.buttonDisplay:"Add New"),r.a.createElement("span",{className:"flex sm:hidden normal-case"},"New"))))}},876:function(t,e,n){"use strict";var a=n(8),r=n(861),s={data:[],searchText:"",dialog:{type:"edit",props:{open:!1},data:null,mode:null}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.a.SET_SEARCH_TEXT:return Object(a.a)(Object(a.a)({},t),{},{searchText:e.searchText});case r.a.OPEN_NEW_DIALOG:return Object(a.a)(Object(a.a)({},t),{},{dialog:{type:"new",props:{open:!0},data:e.data,mode:e.mode}});case r.a.CLOSE_NEW_DIALOG:return Object(a.a)(Object(a.a)({},t),{},{dialog:{type:"new",props:{open:!1},data:null}});case r.a.OPEN_EDIT_DIALOG:return Object(a.a)(Object(a.a)({},t),{},{dialog:{type:e.mode,props:{open:!0},data:e.data,mode:e.mode}});case r.a.CLOSE_EDIT_DIALOG:return Object(a.a)(Object(a.a)({},t),{},{dialog:{type:e.mode,props:{open:!1},data:null}});case r.a.CLOSE_ONLY_DIALOG:return Object(a.a)(Object(a.a)({},t),{},{dialog:{type:"close",props:{open:!1},data:null}});default:return t}}}}]);