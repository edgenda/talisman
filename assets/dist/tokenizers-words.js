webpackJsonp([4],{0:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=u(2),r=n(a),f=u(20),d=u(59),l=n(d),o=u(397),i=n(o),c=u(398),s=n(c);(0,f.render)(r["default"].createElement(l["default"],{tokenizer:i["default"]}),document.getElementById("naive-mount")),(0,f.render)(r["default"].createElement(l["default"],{tokenizer:s["default"]}),document.getElementById("treebank-mount"))},58:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.value,u=void 0===t?"":t,n=e.placeholder,a=void 0===n?null:n,r=e.status,d=void 0===r?"default":r,l=e.onChange,o=void 0===l?Function.prototype:l,i="bar-textarea";return"error"===d?i+=" error":"success"===d&&(i+=" success"),f["default"].createElement("div",null,f["default"].createElement("textarea",{placeholder:a,onChange:o,value:u,className:d}),f["default"].createElement("span",{className:i}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=u(2),f=n(r)},59:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(2),r=n(a),f=u(18),d=u(15),l=n(d),o=u(58),i=n(o),c=(0,f.compose)((0,f.withState)("input","setInput","")),s=c(function(e){var t=e.tokenizer,u=e.input,n=e.setInput,a=e.textarea,f=void 0!==a&&a,d=e.flow,o=void 0===d||d,c=f?i["default"]:l["default"],s=u?t(u):[];return r["default"].createElement("div",{style:{width:"55%"}},r["default"].createElement("div",null,r["default"].createElement(c,{placeholder:"Enter raw text here...",value:u,onChange:function(e){return n(e.target.value)}}),r["default"].createElement("p",{style:{width:"100%"}},s.map(function(e){return o?r["default"].createElement("span",{className:"token",style:{"float":"left"}},e):r["default"].createElement("div",{className:"token"},e)}))),r["default"].createElement("div",{style:{clear:"both"}}))});t["default"]=s},273:function(e,t,u){"use strict";function n(e,t,u){return e=a(e),t=u?void 0:t,void 0===t&&(t=V.test(e)?T:r),e.match(t)||[]}var a=u(36),r=/[a-zA-Z0-9]+/g,f="\\ud800-\\udfff",d="\\u0300-\\u036f\\ufe20-\\ufe23",l="\\u20d0-\\u20f0",o="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",c="\\xac\\xb1\\xd7\\xf7",s="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",g="\\u2000-\\u206f",b=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",v="A-Z\\xc0-\\xd6\\xd8-\\xde",m="\\ufe0e\\ufe0f",$=c+s+g+b,x="['’]",p="["+$+"]",E="["+d+l+"]",h="\\d+",_="["+o+"]",y="["+i+"]",w="[^"+f+$+h+o+i+v+"]",z="\\ud83c[\\udffb-\\udfff]",M="(?:"+E+"|"+z+")",j="[^"+f+"]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="["+v+"]",N="\\u200d",I="(?:"+y+"|"+w+")",L="(?:"+Z+"|"+w+")",O="(?:"+x+"(?:d|ll|m|re|s|t|ve))?",P="(?:"+x+"(?:D|LL|M|RE|S|T|VE))?",S=M+"?",C="["+m+"]?",R="(?:"+N+"(?:"+[j,k,A].join("|")+")"+C+S+")*",B=C+S+R,D="(?:"+[_,k,A].join("|")+")"+B,T=RegExp([Z+"?"+y+"+"+O+"(?="+[p,Z,"$"].join("|")+")",L+"+"+P+"(?="+[p,Z+I,"$"].join("|")+")",Z+"?"+I+"+"+O,Z+"+"+P,h,D].join("|"),"g"),V=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=n},397:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(273),r=n(a);t["default"]=r["default"]},398:function(e,t){"use strict";function u(e,t,u){for(var n=0,a=e.length;n<a;n++)u=u.replace(e[n],t);return u}function n(e,t){for(var u=0,n=e.length;u<n;u++)t=t.replace(e[u][0],e[u][1]);return t}function a(e){e=n(l,e),e=n(o,e),e=n(i,e),e=" "+e+" ",e=n(c,e),e=u(r," $1 $2 ",e),e=u(f," $1 $2 ",e),e=u(d," $1 $2 $3 ",e);var t=e.split(/\s+/).map(function(e){return e.trim()}).filter(function(e){return e});return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=[/\b(can)(not)\b/gi,/\b(d)('ye)\b/gi,/\b(gim)(me)\b/gi,/\b(gon)(na)\b/gi,/\b(got)(ta)\b/gi,/\b(lem)(me)\b/gi,/\b(mor)('n)\b/gi,/\b(wan)(na) "/gi],f=[/ ('t)(is)\b/gi,/ ('t)(was)\b/gi],d=[/\b(whad)(dd)(ya)\b/gi,/\b(wha)(t)(cha)\b/gi],l=[[/^"/g,"``"],[/(``)/g," $1 "],[/([ (\[{<])"/g,"$1 `` "]],o=[[/([:,])([^\d])/g," $1 $2"],[/([:,]$)/g," $1 "],[/\.\.\./g," ... "],[/([;@#$%&])/g," $1 "],[/([^\.])(\.)([\]\)}>"']*)\s*$/g,"$1 $2$3 "],[/([?!])/g," $1 "],[/([^'])' /g,"$1 ' "]],i=[[/([\]\[\(\)\{\}\<\>])/g," $1 "],[/--/g," -- "]],c=[[/"/g," '' "],[/(\S)('')/g,"$1 $2 "],[/([^' ])('[sS]|'[mM]|'[dD]|') /g,"$1 $2 "],[/([^' ])('ll|'LL|'re|'RE|'ve|'VE|n't|N'T) /g,"$1 $2 "]]}});