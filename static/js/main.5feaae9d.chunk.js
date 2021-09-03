(this["webpackJsonpcovid-info"]=this["webpackJsonpcovid-info"]||[]).push([[0],{117:function(e){e.exports=JSON.parse('{"confirmed":"Confirmed","recovered":"Recovered","deceased":"Deceased","refresh":"Refresh","please_wait":"Please wait...","country":"Country","new_confirmed":"New Confirmed","new_recovered":"New Recovered","new_deceased":"New Deceased","something_wrong":"OOPS! Something went wrong."}')},146:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var r,a,o,i,c,s=n(0),d=n.n(s),l=n(15),u=n.n(l),f=(n(146),n(7)),b=n(110),j=n(56),h=n(83),m=n(21),O=n(22),p=O.a.h1(r||(r=Object(m.a)(["\n  font-size: 22px;\n  font-weight: 600;\n"]))),g=O.a.h4(a||(a=Object(m.a)(["\n  font-size: 13px;\n  font-weight: 900;\n"]))),v=O.a.h5(o||(o=Object(m.a)(["\n  font-size: 12px;\n  font-weight: 600;\n"]))),w=O.a.div(i||(i=Object(m.a)(["\n  width: calc(25%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n  h4 {\n    opacity: 0.6;\n  }\n"])),(function(e){return e.recovered?"#28a745":e.confirmed?"#ff073a":"#6c757d"})),x=n(12),y=["title","newCases","totalCases"];function C(e){var t=e.title,n=e.newCases,r=e.totalCases,a=Object(h.a)(e,y);return Object(x.jsxs)(w,Object(j.a)(Object(j.a)({},a),{},{children:[Object(x.jsx)(v,{children:t}),Object(x.jsxs)(g,{children:["+ ",n.toLocaleString()]}),Object(x.jsx)(p,{children:r.toLocaleString()})]}))}var N=O.a.div(c||(c=Object(m.a)(["\n  margin: 50px;\n  display: flex;\n  justify-content: space-between;\n"])));function T(e){console.log("props",e);var t=Object(b.a)().t,n=null===e||void 0===e?void 0:e.details,r=n.NewConfirmed,a=n.NewDeaths,o=n.NewRecovered,i=n.TotalConfirmed,c=n.TotalDeaths,s=n.TotalRecovered;return Object(x.jsxs)(N,{children:[Object(x.jsx)(C,{title:t("confirmed"),confirmed:!0,newCases:r,totalCases:i}),Object(x.jsx)(C,{title:t("recovered"),recovered:!0,newCases:o,totalCases:s}),Object(x.jsx)(C,{title:t("deceased"),newCases:a,totalCases:c})]})}var D,S,R,E,k="summary",P=O.a.div(D||(D=Object(m.a)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    margin-bottom: 0;\n  }\n"]))),_=Object(O.b)(S||(S=Object(m.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),z=O.a.div(R||(R=Object(m.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n"])),_),F=O.a.div(E||(E=Object(m.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function I(){return Object(x.jsx)(F,{children:Object(x.jsx)(z,{})})}function L(e,t){var n=Object(s.useState)(null),r=Object(f.a)(n,2),a=r[0],o=r[1],i=Object(s.useState)(!1),c=Object(f.a)(i,2),d=c[0],l=c[1],u=Object(s.useState)(null),b=Object(f.a)(u,2),j=b[0],h=b[1];Object(s.useEffect)((function(){m()}),[e,t]);var m=function(){l(!0),function(e,t,n){var r="".concat("https://api.covid19api.com/").concat(e);return fetch(r,{method:t}).then((function(e){return e.json()})).then((function(e){return e}))}(k,"GET").then((function(e){o(e)})).catch((function(e){h(e)})).finally((function(){l(!1)}))};return[a,d,j,function(){m()}]}var G=n(162),J=n(52),B=n(105),M=n(84),V=Object(B.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"flex-end"},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:M.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),Z=["title","loading"];function q(e){var t=V(),n=e.title,r=e.loading,a=Object(h.a)(e,Z);return Object(x.jsx)("div",{className:t.root,children:Object(x.jsxs)("div",{className:t.wrapper,children:[Object(x.jsx)(J.a,Object(j.a)(Object(j.a)({variant:"contained",color:"primary",className:t.buttonClassname,disabled:r},a),{},{children:n})),r&&Object(x.jsx)(G.a,{size:24,className:t.buttonProgress})]})})}var A,H=n(113),K=O.a.div(A||(A=Object(m.a)(["\n  height: 500px;\n  margin: 50px;\n"]))),Q=[{field:"Country",headerName:"Country",width:150},{field:"NewConfirmed",headerName:"New Confirmed",type:"number",width:200},{field:"NewRecovered",headerName:"New Recovered",type:"number",width:200},{field:"NewDeaths",headerName:"New Deaths",type:"number",width:200},{field:"TotalConfirmed",headerName:"Total Confirmed",type:"number",width:200},{field:"TotalRecovered",headerName:"Total Recovered",type:"number",width:200},{field:"TotalDeaths",headerName:"Total Deaths",type:"number",width:200}];function U(e){var t=e.data;return Object(x.jsx)(K,{children:Object(x.jsx)(H.a,{getRowId:function(e){return e.ID},rows:t,columns:Q,perPageSize:7})})}var W=function(){var e=L(k,"GET"),t=Object(f.a)(e,4),n=t[0],r=t[1],a=t[2],o=(t[3],Object(b.a)().t);if(!n)return Object(x.jsx)(I,{});var i=n.Global,c=n.Countries;return console.log("error",a),Object(x.jsxs)(P,{children:[Object(x.jsx)(q,{title:o(r?"please_wait":"refresh"),loading:r,onClick:function(){throw new Error("dadfds")}}),Object(x.jsx)(T,{details:i}),Object(x.jsx)(U,{data:c})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))},Y=n(58),$=n(59),ee=n(68),te=n(67),ne=n(205),re=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(e){var r;return Object(Y.a)(this,n),(r=t.call(this,e)).state={hasError:!1},console.log("error boundary"),r}return Object($.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("error boundary 2"),function(e,t){console.log(e,t)}(e,t)}},{key:"render",value:function(){var e=this.props.t;return this.state.hasError?Object(x.jsx)("h1",{children:e("something_wrong")}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("error boundary 1"),{hasError:!0}}}]),n}(d.a.Component),ae=Object(ne.a)()(re),oe=n(90),ie=n(69),ce={en:{translation:n(117)}};oe.a.use(ie.e).init({resources:ce,lng:"en",interpolation:{escapeValue:!1}});oe.a;u.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(ae,{children:Object(x.jsx)(W,{})})}),document.getElementById("root")),X()}},[[158,1,2]]]);
//# sourceMappingURL=main.5feaae9d.chunk.js.map