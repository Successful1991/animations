/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

//     Vibrate API
//     Copyright (C) 2014-2016 Ilias Ismanalijev

//     This program is free software; you can redistribute it and/or
//     modify it under the terms of the GNU General Public License
//     as published by the Free Software Foundation; either version 2
//     of the License, or (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     'along with this program; if not, write to the Free Software
//     Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

(function(){"use strict";var $;$=jQuery,$.fn.vibrate=function(options){var canVibrate,debug;if(debug=function(){},null!=options)if(null!=options.debug&&options.debug===!0&&(debug=function(msg){return console.log("Vibration : "+msg)}),"string"==typeof options)switch(options){case"short":options={duration:20},debug("Duration = 20");break;case"medium":case"default":options={duration:50},debug("Duration = 50");break;case"long":options={duration:100},debug("Duration = 100")}else"number"==typeof options&&(isNaN(options)||(options={duration:options}),debug("Duration = "+options));else options={};return canVibrate="vibrate"in navigator||"mozVibrate"in navigator,debug("Can Vibrate = "+canVibrate),canVibrate===!1?this:canVibrate===!0?$(this).each(function(){var $this,triggerStop;return $this=$(this),$this.defaults={trigger:"click",duration:50,vibrateClass:"vibrate",debug:!1},"object"==typeof options&&($this.defaults=$.extend($this.defaults,options)),triggerStop=null,"mousedown"===$this.defaults.trigger&&(triggerStop="mouseup",debug("StopEvent = mouseup")),"touchstart"===$this.defaults.trigger&&(triggerStop="touchend",debug("StopEvent = touchend")),$this.hasClass("vibrate")||$this.addClass($this.defaults.vibrateClass),debug("Class = "+$this.defaults.vibrateClass),$this.bind($this.defaults.trigger,function(){return debug("Vibrate "+$this.defaults.duration+"ms"),"vibrate"in navigator?navigator.vibrate($this.defaults.pattern||$this.defaults.duration):"mozVibrate"in navigator?navigator.mozVibrate($this.defaults.pattern||$this.defaults.duration):void 0}),null!=triggerStop?$this.bind(triggerStop,function(){return debug("Vibrate Stop"),"vibrate"in navigator?navigator.vibrate(0):"mozVibrate"in navigator?navigator.mozVibrate(0):void 0}):void 0}):void 0}}).call(this);
//# sourceMappingURL=jquery.vibrate.min.map
/**
 * @license
 * Video.js 5.19.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function (a) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = a(); else if ("function" == typeof define && define.amd) define([], a); else { var b; b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.videojs = a() } }(function () {
  var a; return function b(a, c, d) { function e(g, h) { if (!c[g]) { if (!a[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} }; a[g][0].call(k.exports, function (b) { var c = a[g][1][b]; return e(c ? c : b) }, k, k.exports, b, a, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]); return e }({
    1: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(2), i = d(h), j = a(5), k = d(j), l = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-big-play-button" }, b.prototype.handleClick = function (a) { this.player_.play(); var b = this.player_.getChild("controlBar"), c = b && b.getChild("playToggle"); if (!c) return void this.player_.focus(); this.setTimeout(function () { c.focus() }, 1) }, b }(i["default"]); l.prototype.controlText_ = "Play Video", k["default"].registerComponent("BigPlayButton", l), c["default"] = l }, { 2: 2, 5: 5 }], 2: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(3), i = d(h), j = a(5), k = d(j), l = a(86), m = d(l), n = a(88), o = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "button", b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; b = (0, n.assign)({ className: this.buildCSSClass() }, b), "button" !== a && (m["default"].warn("Creating a Button with an HTML element of " + a + " is deprecated; use ClickableComponent instead."), b = (0, n.assign)({ tabIndex: 0 }, b), c = (0, n.assign)({ role: "button" }, c)), c = (0, n.assign)({ type: "button", "aria-live": "polite" }, c); var d = k["default"].prototype.createEl.call(this, a, b, c); return this.createControlTextEl(d), d }, b.prototype.addChild = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = this.constructor.name; return m["default"].warn("Adding an actionable (user controllable) child to a Button (" + c + ") is not supported; use a ClickableComponent instead."), k["default"].prototype.addChild.call(this, a, b) }, b.prototype.enable = function () { a.prototype.enable.call(this), this.el_.removeAttribute("disabled") }, b.prototype.disable = function () { a.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled") }, b.prototype.handleKeyPress = function (b) { 32 !== b.which && 13 !== b.which && a.prototype.handleKeyPress.call(this, b) }, b }(i["default"]); k["default"].registerComponent("Button", o), c["default"] = o }, { 3: 3, 5: 5, 86: 86, 88: 88 }], 3: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(82), n = d(m), o = a(83), p = d(o), q = a(86), r = e(q), s = a(94), t = e(s), u = a(88), v = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.emitTapEvents(), e.enable(), e } return h(b, a), b.prototype.createEl = function () { var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div", c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; c = (0, u.assign)({ className: this.buildCSSClass(), tabIndex: 0 }, c), "button" === b && r["default"].error("Creating a ClickableComponent with an HTML element of " + b + " is not supported; use a Button instead."), d = (0, u.assign)({ role: "button", "aria-live": "polite" }, d), this.tabIndex_ = c.tabIndex; var e = a.prototype.createEl.call(this, b, c, d); return this.createControlTextEl(e), e }, b.prototype.createControlTextEl = function (a) { return this.controlTextEl_ = l.createEl("span", { className: "vjs-control-text" }), a && a.appendChild(this.controlTextEl_), this.controlText(this.controlText_, a), this.controlTextEl_ }, b.prototype.controlText = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el(); if (!a) return this.controlText_ || "Need Text"; var c = this.localize(a); return this.controlText_ = a, this.controlTextEl_.innerHTML = c, this.nonIconControl || b.setAttribute("title", c), this }, b.prototype.buildCSSClass = function () { return "vjs-control vjs-button " + a.prototype.buildCSSClass.call(this) }, b.prototype.enable = function () { return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this }, b.prototype.disable = function () { return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("tap", this.handleClick), this.off("click", this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this }, b.prototype.handleClick = function (a) { }, b.prototype.handleFocus = function (a) { n.on(t["default"], "keydown", p.bind(this, this.handleKeyPress)) }, b.prototype.handleKeyPress = function (b) { 32 === b.which || 13 === b.which ? (b.preventDefault(), this.handleClick(b)) : a.prototype.handleKeyPress && a.prototype.handleKeyPress.call(this, b) }, b.prototype.handleBlur = function (a) { n.off(t["default"], "keydown", p.bind(this, this.handleKeyPress)) }, b }(j["default"]); j["default"].registerComponent("ClickableComponent", v), c["default"] = v }, { 5: 5, 81: 81, 82: 82, 83: 83, 86: 86, 88: 88, 94: 94 }], 4: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(2), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return g.controlText(d && d.controlText || g.localize("Close")), g } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-close-button " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleClick = function (a) { this.trigger({ type: "close", bubbles: !1 }) }, b }(i["default"]); k["default"].registerComponent("CloseButton", l), c["default"] = l }, { 2: 2, 5: 5 }], 5: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } c.__esModule = !0; var g = a(95), h = e(g), i = a(81), j = d(i), k = a(83), l = d(k), m = a(85), n = d(m), o = a(82), p = d(o), q = a(86), r = e(q), s = a(91), t = e(s), u = a(87), v = e(u), w = function () { function a(b, c, d) { if (f(this, a), !b && this.play ? this.player_ = b = this : this.player_ = b, this.options_ = (0, v["default"])({}, this.options_), c = this.options_ = (0, v["default"])(this.options_, c), this.id_ = c.id || c.el && c.el.id, !this.id_) { var e = b && b.id && b.id() || "no_player"; this.id_ = e + "_component_" + n.newGUID() } this.name_ = c.name || null, c.el ? this.el_ = c.el : c.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, c.initChildren !== !1 && this.initChildren(), this.ready(d), c.reportTouchActivity !== !1 && this.enableTouchActivity() } return a.prototype.dispose = function () { if (this.trigger({ type: "dispose", bubbles: !1 }), this.children_) for (var a = this.children_.length - 1; a >= 0; a--)this.children_[a].dispose && this.children_[a].dispose(); this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), j.removeElData(this.el_), this.el_ = null }, a.prototype.player = function () { return this.player_ }, a.prototype.options = function (a) { return r["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), a ? (this.options_ = (0, v["default"])(this.options_, a), this.options_) : this.options_ }, a.prototype.el = function () { return this.el_ }, a.prototype.createEl = function (a, b, c) { return j.createEl(a, b, c) }, a.prototype.localize = function (a) { var b = this.player_.language && this.player_.language(), c = this.player_.languages && this.player_.languages(); if (!b || !c) return a; var d = c[b]; if (d && d[a]) return d[a]; var e = b.split("-")[0], f = c[e]; return f && f[a] ? f[a] : a }, a.prototype.contentEl = function () { return this.contentEl_ || this.el_ }, a.prototype.id = function () { return this.id_ }, a.prototype.name = function () { return this.name_ }, a.prototype.children = function () { return this.children_ }, a.prototype.getChildById = function (a) { return this.childIndex_[a] }, a.prototype.getChild = function (a) { if (a) return a = (0, t["default"])(a), this.childNameIndex_[a] }, a.prototype.addChild = function (b) { var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length, e = void 0, f = void 0; if ("string" == typeof b) { f = (0, t["default"])(b), c || (c = {}), c === !0 && (r["default"].warn("Initializing a child component with `true` is deprecated.Children should be defined in an array when possible, but if necessary use an object instead of `true`."), c = {}); var g = c.componentClass || f; c.name = f; var h = a.getComponent(g); if (!h) throw new Error("Component " + g + " does not exist"); if ("function" != typeof h) return null; e = new h(this.player_ || this, c) } else e = b; if (this.children_.splice(d, 0, e), "function" == typeof e.id && (this.childIndex_[e.id()] = e), f = f || e.name && (0, t["default"])(e.name()), f && (this.childNameIndex_[f] = e), "function" == typeof e.el && e.el()) { var i = this.contentEl().children, j = i[d] || null; this.contentEl().insertBefore(e.el(), j) } return e }, a.prototype.removeChild = function (a) { if ("string" == typeof a && (a = this.getChild(a)), a && this.children_) { for (var b = !1, c = this.children_.length - 1; c >= 0; c--)if (this.children_[c] === a) { b = !0, this.children_.splice(c, 1); break } if (b) { this.childIndex_[a.id()] = null, this.childNameIndex_[a.name()] = null; var d = a.el(); d && d.parentNode === this.contentEl() && this.contentEl().removeChild(a.el()) } } }, a.prototype.initChildren = function () { var b = this, c = this.options_.children; if (c) { var d = this.options_, e = function (a) { var c = a.name, e = a.opts; if (void 0 !== d[c] && (e = d[c]), e !== !1) { e === !0 && (e = {}), e.playerOptions = b.options_.playerOptions; var f = b.addChild(c, e); f && (b[c] = f) } }, f = void 0, g = a.getComponent("Tech"); f = Array.isArray(c) ? c : Object.keys(c), f.concat(Object.keys(this.options_).filter(function (a) { return !f.some(function (b) { return "string" == typeof b ? a === b : a === b.name }) })).map(function (a) { var d = void 0, e = void 0; return "string" == typeof a ? (d = a, e = c[d] || b.options_[d] || {}) : (d = a.name, e = a), { name: d, opts: e } }).filter(function (b) { var c = a.getComponent(b.opts.componentClass || (0, t["default"])(b.name)); return c && !g.isTech(c) }).forEach(e) } }, a.prototype.buildCSSClass = function () { return "" }, a.prototype.on = function (a, b, c) { var d = this; if ("string" == typeof a || Array.isArray(a)) p.on(this.el_, a, l.bind(this, b)); else { var e = a, f = b, g = l.bind(this, c), h = function () { return d.off(e, f, g) }; h.guid = g.guid, this.on("dispose", h); var i = function () { return d.off("dispose", h) }; i.guid = g.guid, a.nodeName ? (p.on(e, f, g), p.on(e, "dispose", i)) : "function" == typeof a.on && (e.on(f, g), e.on("dispose", i)) } return this }, a.prototype.off = function (a, b, c) { if (!a || "string" == typeof a || Array.isArray(a)) p.off(this.el_, a, b); else { var d = a, e = b, f = l.bind(this, c); this.off("dispose", f), a.nodeName ? (p.off(d, e, f), p.off(d, "dispose", f)) : (d.off(e, f), d.off("dispose", f)) } return this }, a.prototype.one = function (a, b, c) { var d = this, e = arguments; if ("string" == typeof a || Array.isArray(a)) p.one(this.el_, a, l.bind(this, b)); else { var f = a, g = b, h = l.bind(this, c), i = function j() { d.off(f, g, j), h.apply(null, e) }; i.guid = h.guid, this.on(f, g, i) } return this }, a.prototype.trigger = function (a, b) { return p.trigger(this.el_, a, b), this }, a.prototype.ready = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return a && (this.isReady_ ? b ? a.call(this) : this.setTimeout(a, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(a))), this }, a.prototype.triggerReady = function () { this.isReady_ = !0, this.setTimeout(function () { var a = this.readyQueue_; this.readyQueue_ = [], a && a.length > 0 && a.forEach(function (a) { a.call(this) }, this), this.trigger("ready") }, 1) }, a.prototype.$ = function (a, b) { return j.$(a, b || this.contentEl()) }, a.prototype.$$ = function (a, b) { return j.$$(a, b || this.contentEl()) }, a.prototype.hasClass = function (a) { return j.hasElClass(this.el_, a) }, a.prototype.addClass = function (a) { return j.addElClass(this.el_, a), this }, a.prototype.removeClass = function (a) { return j.removeElClass(this.el_, a), this }, a.prototype.toggleClass = function (a, b) { return j.toggleElClass(this.el_, a, b), this }, a.prototype.show = function () { return this.removeClass("vjs-hidden"), this }, a.prototype.hide = function () { return this.addClass("vjs-hidden"), this }, a.prototype.lockShowing = function () { return this.addClass("vjs-lock-showing"), this }, a.prototype.unlockShowing = function () { return this.removeClass("vjs-lock-showing"), this }, a.prototype.getAttribute = function (a) { return j.getAttribute(this.el_, a) }, a.prototype.setAttribute = function (a, b) { return j.setAttribute(this.el_, a, b), this }, a.prototype.removeAttribute = function (a) { return j.removeAttribute(this.el_, a), this }, a.prototype.width = function (a, b) { return this.dimension("width", a, b) }, a.prototype.height = function (a, b) { return this.dimension("height", a, b) }, a.prototype.dimensions = function (a, b) { return this.width(a, !0).height(b) }, a.prototype.dimension = function (a, b, c) { if (void 0 !== b) return null !== b && b === b || (b = 0), ("" + b).indexOf("%") !== -1 || ("" + b).indexOf("px") !== -1 ? this.el_.style[a] = b : this.el_.style[a] = "auto" === b ? "" : b + "px", c || this.trigger("resize"), this; if (!this.el_) return 0; var d = this.el_.style[a], e = d.indexOf("px"); return e !== -1 ? parseInt(d.slice(0, e), 10) : parseInt(this.el_["offset" + (0, t["default"])(a)], 10) }, a.prototype.currentDimension = function (a) { var b = 0; if ("width" !== a && "height" !== a) throw new Error("currentDimension only accepts width or height value"); if ("function" == typeof h["default"].getComputedStyle) { var c = h["default"].getComputedStyle(this.el_); b = c.getPropertyValue(a) || c[a] } if (b = parseFloat(b), 0 === b) { var d = "offset" + (0, t["default"])(a); b = this.el_[d] } return b }, a.prototype.currentDimensions = function () { return { width: this.currentDimension("width"), height: this.currentDimension("height") } }, a.prototype.currentWidth = function () { return this.currentDimension("width") }, a.prototype.currentHeight = function () { return this.currentDimension("height") }, a.prototype.focus = function () { this.el_.focus() }, a.prototype.blur = function () { this.el_.blur() }, a.prototype.emitTapEvents = function () { var a = 0, b = null, c = void 0; this.on("touchstart", function (d) { 1 === d.touches.length && (b = { pageX: d.touches[0].pageX, pageY: d.touches[0].pageY }, a = (new Date).getTime(), c = !0) }), this.on("touchmove", function (a) { if (a.touches.length > 1) c = !1; else if (b) { var d = a.touches[0].pageX - b.pageX, e = a.touches[0].pageY - b.pageY, f = Math.sqrt(d * d + e * e); f > 10 && (c = !1) } }); var d = function () { c = !1 }; this.on("touchleave", d), this.on("touchcancel", d), this.on("touchend", function (d) { if (b = null, c === !0) { (new Date).getTime() - a < 200 && (d.preventDefault(), this.trigger("tap")) } }) }, a.prototype.enableTouchActivity = function () { if (this.player() && this.player().reportUserActivity) { var a = l.bind(this.player(), this.player().reportUserActivity), b = void 0; this.on("touchstart", function () { a(), this.clearInterval(b), b = this.setInterval(a, 250) }); var c = function (c) { a(), this.clearInterval(b) }; this.on("touchmove", a), this.on("touchend", c), this.on("touchcancel", c) } }, a.prototype.setTimeout = function (a, b) { a = l.bind(this, a); var c = h["default"].setTimeout(a, b), d = function () { this.clearTimeout(c) }; return d.guid = "vjs-timeout-" + c, this.on("dispose", d), c }, a.prototype.clearTimeout = function (a) { h["default"].clearTimeout(a); var b = function () { }; return b.guid = "vjs-timeout-" + a, this.off("dispose", b), a }, a.prototype.setInterval = function (a, b) { a = l.bind(this, a); var c = h["default"].setInterval(a, b), d = function () { this.clearInterval(c) }; return d.guid = "vjs-interval-" + c, this.on("dispose", d), c }, a.prototype.clearInterval = function (a) { h["default"].clearInterval(a); var b = function () { }; return b.guid = "vjs-interval-" + a, this.off("dispose", b), a }, a.registerComponent = function (b, c) { if (b) { if (b = (0, t["default"])(b), a.components_ || (a.components_ = {}), "Player" === b && a.components_[b]) { var d = a.components_[b]; if (d.players && Object.keys(d.players).length > 0 && Object.keys(d.players).map(function (a) { return d.players[a] }).every(Boolean)) throw new Error("Can not register Player component after player has been created") } return a.components_[b] = c, c } }, a.getComponent = function (b) { if (b) return b = (0, t["default"])(b), a.components_ && a.components_[b] ? a.components_[b] : h["default"] && h["default"].videojs && h["default"].videojs[b] ? (r["default"].warn("The " + b + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), h["default"].videojs[b]) : void 0 }, a.extend = function (b) { b = b || {}, r["default"].warn("Component.extend({}) has been deprecated,  use videojs.extend(Component, {}) instead"); var c = b.init || b.init || this.prototype.init || this.prototype.init || function () { }, d = function () { c.apply(this, arguments) }; d.prototype = Object.create(this.prototype), d.prototype.constructor = d, d.extend = a.extend; for (var e in b) b.hasOwnProperty(e) && (d.prototype[e] = b[e]); return d }, a }(); w.registerComponent("Component", w), c["default"] = w }, { 81: 81, 82: 82, 83: 83, 85: 85, 86: 86, 87: 87, 91: 91, 95: 95 }], 6: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(36), i = d(h), j = a(5), k = d(j), l = a(7), m = d(l), n = function (a) { function b(c) { var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; e(this, b), d.tracks = c.audioTracks && c.audioTracks(); var g = f(this, a.call(this, c, d)); return g.el_.setAttribute("aria-label", "Audio Menu"), g } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-audio-button " + a.prototype.buildCSSClass.call(this) }, b.prototype.createItems = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.hideThreshold_ = 1; var b = this.player_.audioTracks && this.player_.audioTracks(); if (!b) return a; for (var c = 0; c < b.length; c++) { var d = b[c]; a.push(new m["default"](this.player_, { track: d, selectable: !0 })) } return a }, b }(i["default"]); n.prototype.controlText_ = "Audio Track", k["default"].registerComponent("AudioTrackButton", n), c["default"] = n }, { 36: 36, 5: 5, 7: 7 }], 7: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(48), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = function (a) { function b(c, d) { f(this, b); var e = d.track, h = c.audioTracks(); d.label = e.label || e.language || "Unknown", d.selected = e.enabled; var i = g(this, a.call(this, c, d)); if (i.track = e, h) { var j = n.bind(i, i.handleTracksChange); h.addEventListener("change", j), i.on("dispose", function () { h.removeEventListener("change", j) }) } return i } return h(b, a), b.prototype.handleClick = function (b) { var c = this.player_.audioTracks(); if (a.prototype.handleClick.call(this, b), c) for (var d = 0; d < c.length; d++) { var e = c[d]; e.enabled = e === this.track } }, b.prototype.handleTracksChange = function (a) { this.selected(this.track.enabled) }, b }(j["default"]); l["default"].registerComponent("AudioTrackMenuItem", o), c["default"] = o }, { 48: 48, 5: 5, 83: 83 }], 8: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h); a(12), a(32), a(33), a(35), a(34), a(10), a(18), a(9), a(38), a(40), a(11), a(25), a(27), a(29), a(24), a(6), a(13), a(21); var j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-control-bar", dir: "ltr" }, { role: "group" }) }, b }(i["default"]); j.prototype.options_ = { children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "audioTrackButton", "fullscreenToggle"] }, i["default"].registerComponent("ControlBar", j), c["default"] = j }, { 10: 10, 11: 11, 12: 12, 13: 13, 18: 18, 21: 21, 24: 24, 25: 25, 27: 27, 29: 29, 32: 32, 33: 33, 34: 34, 35: 35, 38: 38, 40: 40, 5: 5, 6: 6, 9: 9 }], 9: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(2), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return g.on(c, "fullscreenchange", g.handleFullscreenChange), g } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-fullscreen-control " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleFullscreenChange = function (a) { this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen") }, b.prototype.handleClick = function (a) { this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen() }, b }(i["default"]); l.prototype.controlText_ = "Fullscreen", k["default"].registerComponent("FullscreenToggle", l), c["default"] = l }, { 2: 2, 5: 5 }], 10: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.updateShowing(), e.on(e.player(), "durationchange", e.updateShowing), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, "div", { className: "vjs-live-control vjs-control" }); return this.contentEl_ = l.createEl("div", { className: "vjs-live-display", innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE") }, { "aria-live": "off" }), b.appendChild(this.contentEl_), b }, b.prototype.updateShowing = function (a) { this.player().duration() === 1 / 0 ? this.show() : this.hide() }, b }(j["default"]); j["default"].registerComponent("LiveDisplay", m), c["default"] = m }, { 5: 5, 81: 81 }], 11: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(2), j = e(i), k = a(5), l = e(k), m = a(81), n = d(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "volumechange", e.update), c.tech_ && c.tech_.featuresVolumeControl === !1 && e.addClass("vjs-hidden"), e.on(c, "loadstart", function () { this.update(), c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden") }), e } return h(b, a), b.prototype.buildCSSClass = function () { return "vjs-mute-control " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleClick = function (a) { this.player_.muted(!this.player_.muted()) }, b.prototype.update = function (a) { var b = this.player_.volume(), c = 3; 0 === b || this.player_.muted() ? c = 0 : b < .33 ? c = 1 : b < .67 && (c = 2); var d = this.player_.muted() ? "Unmute" : "Mute"; this.controlText() !== d && this.controlText(d); for (var e = 0; e < 4; e++)n.removeElClass(this.el_, "vjs-vol-" + e); n.addElClass(this.el_, "vjs-vol-" + c) }, b }(j["default"]); o.prototype.controlText_ = "Mute", l["default"].registerComponent("MuteToggle", o), c["default"] = o }, { 2: 2, 5: 5, 81: 81 }], 12: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(2), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return g.on(c, "play", g.handlePlay), g.on(c, "pause", g.handlePause), g } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-play-control " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleClick = function (a) { this.player_.paused() ? this.player_.play() : this.player_.pause() }, b.prototype.handlePlay = function (a) { this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause") }, b.prototype.handlePause = function (a) { this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play") }, b }(i["default"]); l.prototype.controlText_ = "Play", k["default"].registerComponent("PlayToggle", l), c["default"] = l }, { 2: 2, 5: 5 }], 13: [function (a, b, c) {
      "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(47), j = e(i), k = a(49), l = e(k), m = a(14), n = e(m), o = a(5), p = e(o), q = a(81), r = d(q), s = function (a) {
        function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.updateVisibility(), e.updateLabel(), e.on(c, "loadstart", e.updateVisibility), e.on(c, "ratechange", e.updateLabel), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this); return this.labelEl_ = r.createEl("div", { className: "vjs-playback-rate-value", innerHTML: 1 }), b.appendChild(this.labelEl_), b }, b.prototype.buildCSSClass = function () { return "vjs-playback-rate " + a.prototype.buildCSSClass.call(this) }, b.prototype.createMenu = function () {
          var a = new l["default"](this.player()), b = this.playbackRates()
          ; if (b) for (var c = b.length - 1; c >= 0; c--)a.addChild(new n["default"](this.player(), { rate: b[c] + "x" })); return a
        }, b.prototype.updateARIAAttributes = function () { this.el().setAttribute("aria-valuenow", this.player().playbackRate()) }, b.prototype.handleClick = function (a) { for (var b = this.player().playbackRate(), c = this.playbackRates(), d = c[0], e = 0; e < c.length; e++)if (c[e] > b) { d = c[e]; break } this.player().playbackRate(d) }, b.prototype.playbackRates = function () { return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates }, b.prototype.playbackRateSupported = function () { return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0 }, b.prototype.updateVisibility = function (a) { this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden") }, b.prototype.updateLabel = function (a) { this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x") }, b
      }(j["default"]); s.prototype.controlText_ = "Playback Rate", p["default"].registerComponent("PlaybackRateMenuButton", s), c["default"] = s
    }, { 14: 14, 47: 47, 49: 49, 5: 5, 81: 81 }], 14: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(48), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b); var g = d.rate, h = parseFloat(g, 10); d.label = g, d.selected = 1 === h, d.selectable = !0; var i = f(this, a.call(this, c, d)); return i.label = g, i.rate = h, i.on(c, "ratechange", i.update), i } return g(b, a), b.prototype.handleClick = function (b) { a.prototype.handleClick.call(this), this.player().playbackRate(this.rate) }, b.prototype.update = function (a) { this.selected(this.player().playbackRate() === this.rate) }, b }(i["default"]); l.prototype.contentElType = "button", k["default"].registerComponent("PlaybackRateMenuItem", l), c["default"] = l }, { 48: 48, 5: 5 }], 15: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.partEls_ = [], e.on(c, "progress", e.update), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-load-progress", innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>" }) }, b.prototype.update = function (a) { var b = this.player_.buffered(), c = this.player_.duration(), d = this.player_.bufferedEnd(), e = this.partEls_, f = function (a, b) { var c = a / b || 0; return 100 * (c >= 1 ? 1 : c) + "%" }; this.el_.style.width = f(d, c); for (var g = 0; g < b.length; g++) { var h = b.start(g), i = b.end(g), j = e[g]; j || (j = this.el_.appendChild(l.createEl()), e[g] = j), j.style.left = f(h, d), j.style.width = f(i - h, d) } for (var k = e.length; k > b.length; k--)this.el_.removeChild(e[k - 1]); e.length = b.length }, b }(j["default"]); j["default"].registerComponent("LoadProgressBar", m), c["default"] = m }, { 5: 5, 81: 81 }], 16: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(83), n = d(m), o = a(84), p = e(o), q = a(80), r = e(q), s = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && (e.tooltip = l.createEl("div", { className: "vjs-time-tooltip" }), e.el().appendChild(e.tooltip), e.addClass("vjs-keep-tooltips-inside")), e.update(0, 0), c.on("ready", function () { e.on(c.controlBar.progressControl.el(), "mousemove", n.throttle(n.bind(e, e.handleMouseMove), 25)) }), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" }) }, b.prototype.handleMouseMove = function (a) { var b = this.player_.duration(), c = this.calculateDistance(a) * b, d = a.pageX - l.findElPosition(this.el().parentNode).left; this.update(c, d) }, b.prototype.update = function (a, b) { var c = (0, p["default"])(a, this.player_.duration()); if (this.el().style.left = b + "px", this.el().setAttribute("data-current-time", c), this.keepTooltipsInside) { var d = this.clampPosition_(b), e = b - d + 1, f = parseFloat((0, r["default"])(this.tooltip, "width")), g = f / 2; this.tooltip.innerHTML = c, this.tooltip.style.right = "-" + (g - e) + "px" } }, b.prototype.calculateDistance = function (a) { return l.getPointerPosition(this.el().parentNode, a).x }, b.prototype.clampPosition_ = function (a) { if (!this.keepTooltipsInside) return a; var b = parseFloat((0, r["default"])(this.player().el(), "width")), c = parseFloat((0, r["default"])(this.tooltip, "width")), d = c / 2, e = a; return a < d ? e = Math.ceil(d) : a > b - d && (e = Math.floor(b - d)), e }, b }(j["default"]); j["default"].registerComponent("MouseTimeDisplay", s), c["default"] = s }, { 5: 5, 80: 80, 81: 81, 83: 83, 84: 84 }], 17: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(83), l = d(k), m = a(84), n = e(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.updateDataAttr(), e.on(c, "timeupdate", e.updateDataAttr), c.ready(l.bind(e, e.updateDataAttr)), d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && e.addClass("vjs-keep-tooltips-inside"), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-play-progress vjs-slider-bar", innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>" }) }, b.prototype.updateDataAttr = function (a) { var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(); this.el_.setAttribute("data-current-time", (0, n["default"])(b, this.player_.duration())) }, b }(j["default"]); j["default"].registerComponent("PlayProgressBar", o), c["default"] = o }, { 5: 5, 83: 83, 84: 84 }], 18: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h); a(19), a(16); var j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-progress-control vjs-control" }) }, b }(i["default"]); j.prototype.options_ = { children: ["seekBar"] }, i["default"].registerComponent("ProgressControl", j), c["default"] = j }, { 16: 16, 19: 19, 5: 5 }], 19: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(57), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = a(84), p = e(o), q = a(80), r = e(q); a(15), a(17), a(20); var s = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "timeupdate", e.updateProgress), e.on(c, "ended", e.updateProgress), c.ready(n.bind(e, e.updateProgress)), d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && (e.tooltipProgressBar = e.addChild("TooltipProgressBar")), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-progress-holder" }, { "aria-label": "progress bar" }) }, b.prototype.updateProgress = function (a) { if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) { this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width; var b = parseFloat((0, r["default"])(this.player().el(), "width")), c = parseFloat((0, r["default"])(this.tooltipProgressBar.tooltip, "width")), d = this.tooltipProgressBar.el().style; d.maxWidth = Math.floor(b - c / 2) + "px", d.minWidth = Math.ceil(c / 2) + "px", d.right = "-" + c / 2 + "px" } }, b.prototype.updateAriaAttributes = function (a) { var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(); a.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), a.setAttribute("aria-valuetext", (0, p["default"])(b, this.player_.duration())) }, b.prototype.getPercent = function () { var a = this.player_.currentTime() / this.player_.duration(); return a >= 1 ? 1 : a }, b.prototype.handleMouseDown = function (b) { this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), a.prototype.handleMouseDown.call(this, b) }, b.prototype.handleMouseMove = function (a) { var b = this.calculateDistance(a) * this.player_.duration(); b === this.player_.duration() && (b -= .1), this.player_.currentTime(b) }, b.prototype.handleMouseUp = function (b) { a.prototype.handleMouseUp.call(this, b), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play() }, b.prototype.stepForward = function () { this.player_.currentTime(this.player_.currentTime() + 5) }, b.prototype.stepBack = function () { this.player_.currentTime(this.player_.currentTime() - 5) }, b }(j["default"]); s.prototype.options_ = { children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"], barName: "playProgressBar" }, s.prototype.playerEvent = "timeupdate", l["default"].registerComponent("SeekBar", s), c["default"] = s }, { 15: 15, 17: 17, 20: 20, 5: 5, 57: 57, 80: 80, 83: 83, 84: 84 }], 20: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(83), l = d(k), m = a(84), n = e(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.updateDataAttr(), e.on(c, "timeupdate", e.updateDataAttr), c.ready(l.bind(e, e.updateDataAttr)), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, "div", { className: "vjs-tooltip-progress-bar vjs-slider-bar", innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>" }); return this.tooltip = b.querySelector(".vjs-time-tooltip"), b }, b.prototype.updateDataAttr = function (a) { var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), c = (0, n["default"])(b, this.player_.duration()); this.el_.setAttribute("data-current-time", c), this.tooltip.innerHTML = c }, b }(j["default"]); j["default"].registerComponent("TooltipProgressBar", o), c["default"] = o }, { 5: 5, 83: 83, 84: 84 }], 21: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(22), i = d(h), j = a(5), k = d(j), l = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-custom-control-spacer " + a.prototype.buildCSSClass.call(this) }, b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, { className: this.buildCSSClass() }); return b.innerHTML = "&nbsp;", b }, b }(i["default"]); k["default"].registerComponent("CustomControlSpacer", l), c["default"] = l }, { 22: 22, 5: 5 }], 22: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-spacer " + a.prototype.buildCSSClass.call(this) }, b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: this.buildCSSClass() }) }, b }(i["default"]); i["default"].registerComponent("Spacer", j), c["default"] = j }, { 5: 5 }], 23: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(31), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b), d.track = { player: c, kind: d.kind, label: d.kind + " settings", selectable: !1, "default": !1, mode: "disabled" }, d.selectable = !1; var g = f(this, a.call(this, c, d)); return g.addClass("vjs-texttrack-settings"), g.controlText(", opens " + d.kind + " settings dialog"), g } return g(b, a), b.prototype.handleClick = function (a) { this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus() }, b }(i["default"]); k["default"].registerComponent("CaptionSettingsMenuItem", l), c["default"] = l }, { 31: 31, 5: 5 }], 24: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(30), i = d(h), j = a(5), k = d(j), l = a(23), m = d(l), n = function (a) { function b(c, d, g) { e(this, b); var h = f(this, a.call(this, c, d, g)); return h.el_.setAttribute("aria-label", "Captions Menu"), h } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-captions-button " + a.prototype.buildCSSClass.call(this) }, b.prototype.createItems = function () { var b = []; return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (b.push(new m["default"](this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), a.prototype.createItems.call(this, b) }, b }(i["default"]); n.prototype.kind_ = "captions", n.prototype.controlText_ = "Captions", k["default"].registerComponent("CaptionsButton", n), c["default"] = n }, { 23: 23, 30: 30, 5: 5 }], 25: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(30), i = d(h), j = a(5), k = d(j), l = a(26), m = d(l), n = a(91), o = d(n), p = function (a) { function b(c, d, g) { e(this, b); var h = f(this, a.call(this, c, d, g)); return h.el_.setAttribute("aria-label", "Chapters Menu"), h } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-chapters-button " + a.prototype.buildCSSClass.call(this) }, b.prototype.update = function (b) { this.track_ && (!b || "addtrack" !== b.type && "removetrack" !== b.type) || this.setTrack(this.findChaptersTrack()), a.prototype.update.call(this) }, b.prototype.setTrack = function (a) { if (this.track_ !== a) { if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) { var b = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); b && b.removeEventListener("load", this.updateHandler_), this.track_ = null } if (this.track_ = a, this.track_) { this.track_.mode = "hidden"; var c = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); c && c.addEventListener("load", this.updateHandler_) } } }, b.prototype.findChaptersTrack = function () { for (var a = this.player_.textTracks() || [], b = a.length - 1; b >= 0; b--) { var c = a[b]; if (c.kind === this.kind_) return c } }, b.prototype.getMenuCaption = function () { return this.track_ && this.track_.label ? this.track_.label : this.localize((0, o["default"])(this.kind_)) }, b.prototype.createMenu = function () { return this.options_.title = this.getMenuCaption(), a.prototype.createMenu.call(this) }, b.prototype.createItems = function () { var a = []; if (!this.track_) return a; var b = this.track_.cues; if (!b) return a; for (var c = 0, d = b.length; c < d; c++) { var e = b[c], f = new m["default"](this.player_, { track: this.track_, cue: e }); a.push(f) } return a }, b }(i["default"]); p.prototype.kind_ = "chapters", p.prototype.controlText_ = "Chapters", k["default"].registerComponent("ChaptersButton", p), c["default"] = p }, { 26: 26, 30: 30, 5: 5, 91: 91 }], 26: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(48), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = function (a) { function b(c, d) { f(this, b); var e = d.track, h = d.cue, i = c.currentTime(); d.selectable = !0, d.label = h.text, d.selected = h.startTime <= i && i < h.endTime; var j = g(this, a.call(this, c, d)); return j.track = e, j.cue = h, e.addEventListener("cuechange", n.bind(j, j.update)), j } return h(b, a), b.prototype.handleClick = function (b) { a.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime) }, b.prototype.update = function (a) { var b = this.cue, c = this.player_.currentTime(); this.selected(b.startTime <= c && c < b.endTime) }, b }(j["default"]); l["default"].registerComponent("ChaptersTrackMenuItem", o), c["default"] = o }, { 48: 48, 5: 5, 83: 83 }], 27: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(30), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = function (a) { function b(c, d, e) { f(this, b); var h = g(this, a.call(this, c, d, e)); h.el_.setAttribute("aria-label", "Descriptions Menu"); var i = c.textTracks(); if (i) { var j = n.bind(h, h.handleTracksChange); i.addEventListener("change", j), h.on("dispose", function () { i.removeEventListener("change", j) }) } return h } return h(b, a), b.prototype.handleTracksChange = function (a) { for (var b = this.player().textTracks(), c = !1, d = 0, e = b.length; d < e; d++) { var f = b[d]; if (f.kind !== this.kind_ && "showing" === f.mode) { c = !0; break } } c ? this.disable() : this.enable() }, b.prototype.buildCSSClass = function () { return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this) }, b }(j["default"]); o.prototype.kind_ = "descriptions", o.prototype.controlText_ = "Descriptions", l["default"].registerComponent("DescriptionsButton", o), c["default"] = o }, { 30: 30, 5: 5, 83: 83 }], 28: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(31), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d) { e(this, b), d.track = { player: c, kind: d.kind, label: d.kind + " off", "default": !1, mode: "disabled" }, d.selectable = !0; var g = f(this, a.call(this, c, d)); return g.selected(!0), g } return g(b, a), b.prototype.handleTracksChange = function (a) { for (var b = this.player().textTracks(), c = !0, d = 0, e = b.length; d < e; d++) { var f = b[d]; if (f.kind === this.track.kind && "showing" === f.mode) { c = !1; break } } this.selected(c) }, b }(i["default"]); k["default"].registerComponent("OffTextTrackMenuItem", l), c["default"] = l }, { 31: 31, 5: 5 }], 29: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(30), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c, d, g) { e(this, b); var h = f(this, a.call(this, c, d, g)); return h.el_.setAttribute("aria-label", "Subtitles Menu"), h } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-subtitles-button " + a.prototype.buildCSSClass.call(this) }, b }(i["default"]); l.prototype.kind_ = "subtitles", l.prototype.controlText_ = "Subtitles", k["default"].registerComponent("SubtitlesButton", l), c["default"] = l }, { 30: 30, 5: 5 }], 30: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(36), i = d(h), j = a(5), k = d(j), l = a(31), m = d(l), n = a(28), o = d(n), p = function (a) { function b(c) { var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e(this, b), d.tracks = c.textTracks(), f(this, a.call(this, c, d)) } return g(b, a), b.prototype.createItems = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; a.push(new o["default"](this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1; var b = this.player_.textTracks(); if (!b) return a; for (var c = 0; c < b.length; c++) { var d = b[c]; d.kind === this.kind_ && a.push(new m["default"](this.player_, { track: d, selectable: !0 })) } return a }, b }(i["default"]); k["default"].registerComponent("TextTrackButton", p), c["default"] = p }, { 28: 28, 31: 31, 36: 36, 5: 5 }], 31: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, j = a(48), k = e(j), l = a(5), m = e(l), n = a(83), o = d(n), p = a(95), q = e(p), r = a(94), s = e(r), t = function (a) { function b(c, d) { f(this, b); var e = d.track, h = c.textTracks(); d.label = e.label || e.language || "Unknown", d.selected = e["default"] || "showing" === e.mode; var j = g(this, a.call(this, c, d)); if (j.track = e, h) { var k = o.bind(j, j.handleTracksChange); c.on(["loadstart", "texttrackchange"], k), h.addEventListener("change", k), j.on("dispose", function () { h.removeEventListener("change", k) }) } if (h && void 0 === h.onchange) { var l = void 0; j.on(["tap", "click"], function () { if ("object" !== i(q["default"].Event)) try { l = new q["default"].Event("change") } catch (a) { } l || (l = s["default"].createEvent("Event"), l.initEvent("change", !0, !0)), h.dispatchEvent(l) }) } return j } return h(b, a), b.prototype.handleClick = function (b) { var c = this.track.kind, d = this.player_.textTracks(); if (a.prototype.handleClick.call(this, b), d) for (var e = 0; e < d.length; e++) { var f = d[e]; f.kind === c && (f === this.track ? f.mode = "showing" : f.mode = "disabled") } }, b.prototype.handleTracksChange = function (a) { this.selected("showing" === this.track.mode) }, b }(k["default"]); m["default"].registerComponent("TextTrackMenuItem", t), c["default"] = t }, { 48: 48, 5: 5, 83: 83, 94: 94, 95: 95 }], 32: [function (a, b, c) {
      "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
      } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(84), n = e(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "timeupdate", e.updateContent), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, "div", { className: "vjs-current-time vjs-time-control vjs-control" }); return this.contentEl_ = l.createEl("div", { className: "vjs-current-time-display", innerHTML: '<span class="vjs-control-text">Current Time </span>0:00' }, { "aria-live": "off" }), b.appendChild(this.contentEl_), b }, b.prototype.updateContent = function (a) { var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), c = this.localize("Current Time"), d = (0, n["default"])(b, this.player_.duration()); d !== this.formattedTime_ && (this.formattedTime_ = d, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + c + "</span> " + d) }, b }(j["default"]); j["default"].registerComponent("CurrentTimeDisplay", o), c["default"] = o
    }, { 5: 5, 81: 81, 84: 84 }], 33: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(84), n = e(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "durationchange", e.updateContent), e.on(c, "timeupdate", e.updateContent), e.on(c, "loadedmetadata", e.updateContent), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, "div", { className: "vjs-duration vjs-time-control vjs-control" }); return this.contentEl_ = l.createEl("div", { className: "vjs-duration-display", innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00" }, { "aria-live": "off" }), b.appendChild(this.contentEl_), b }, b.prototype.updateContent = function (a) { var b = this.player_.duration(); if (b && this.duration_ !== b) { this.duration_ = b; var c = this.localize("Duration Time"), d = (0, n["default"])(b); this.contentEl_.innerHTML = '<span class="vjs-control-text">' + c + "</span> " + d } }, b }(j["default"]); j["default"].registerComponent("DurationDisplay", o), c["default"] = o }, { 5: 5, 81: 81, 84: 84 }], 34: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(84), n = e(m), o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "timeupdate", e.updateContent), e.on(c, "durationchange", e.updateContent), e } return h(b, a), b.prototype.createEl = function () { var b = a.prototype.createEl.call(this, "div", { className: "vjs-remaining-time vjs-time-control vjs-control" }); return this.contentEl_ = l.createEl("div", { className: "vjs-remaining-time-display", innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00" }, { "aria-live": "off" }), b.appendChild(this.contentEl_), b }, b.prototype.updateContent = function (a) { if (this.player_.duration()) { var b = this.localize("Remaining Time"), c = (0, n["default"])(this.player_.remainingTime()); c !== this.formattedTime_ && (this.formattedTime_ = c, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + b + "</span> -" + c) } }, b }(j["default"]); j["default"].registerComponent("RemainingTimeDisplay", o), c["default"] = o }, { 5: 5, 81: 81, 84: 84 }], 35: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-time-control vjs-time-divider", innerHTML: "<div><span>/</span></div>" }) }, b }(i["default"]); i["default"].registerComponent("TimeDivider", j), c["default"] = j }, { 5: 5 }], 36: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(47), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = function (a) { function b(c, d) { f(this, b); var e = d.tracks, h = g(this, a.call(this, c, d)); if (h.items.length <= 1 && h.hide(), !e) return g(h); var i = n.bind(h, h.update); return e.addEventListener("removetrack", i), e.addEventListener("addtrack", i), h.player_.on("dispose", function () { e.removeEventListener("removetrack", i), e.removeEventListener("addtrack", i) }), h } return h(b, a), b }(j["default"]); l["default"].registerComponent("TrackButton", o), c["default"] = o }, { 47: 47, 5: 5, 83: 83 }], 37: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(57), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m); a(39); var o = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.on(c, "volumechange", e.updateARIAAttributes), c.ready(n.bind(e, e.updateARIAAttributes)), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": "volume level" }) }, b.prototype.handleMouseMove = function (a) { this.checkMuted(), this.player_.volume(this.calculateDistance(a)) }, b.prototype.checkMuted = function () { this.player_.muted() && this.player_.muted(!1) }, b.prototype.getPercent = function () { return this.player_.muted() ? 0 : this.player_.volume() }, b.prototype.stepForward = function () { this.checkMuted(), this.player_.volume(this.player_.volume() + .1) }, b.prototype.stepBack = function () { this.checkMuted(), this.player_.volume(this.player_.volume() - .1) }, b.prototype.updateARIAAttributes = function (a) { var b = (100 * this.player_.volume()).toFixed(2); this.el_.setAttribute("aria-valuenow", b), this.el_.setAttribute("aria-valuetext", b + "%") }, b }(j["default"]); o.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }, o.prototype.playerEvent = "volumechange", l["default"].registerComponent("VolumeBar", o), c["default"] = o }, { 39: 39, 5: 5, 57: 57, 83: 83 }], 38: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h); a(37); var j = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return c.tech_ && c.tech_.featuresVolumeControl === !1 && g.addClass("vjs-hidden"), g.on(c, "loadstart", function () { c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden") }), g } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-volume-control vjs-control" }) }, b }(i["default"]); j.prototype.options_ = { children: ["volumeBar"] }, i["default"].registerComponent("VolumeControl", j), c["default"] = j }, { 37: 37, 5: 5 }], 39: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>' }) }, b }(i["default"]); i["default"].registerComponent("VolumeLevel", j), c["default"] = j }, { 5: 5 }], 40: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(83), j = e(i), k = a(5), l = d(k), m = a(54), n = d(m), o = a(53), p = d(o), q = a(11), r = d(q), s = a(37), t = d(s), u = function (a) { function b(c) { function d() { c.tech_ && c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden") } var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; f(this, b), void 0 === e.inline && (e.inline = !0), void 0 === e.vertical && (e.inline ? e.vertical = !1 : e.vertical = !0), e.volumeBar = e.volumeBar || {}, e.volumeBar.vertical = !!e.vertical; var h = g(this, a.call(this, c, e)); return h.on(c, "volumechange", h.volumeUpdate), h.on(c, "loadstart", h.volumeUpdate), d.call(h), h.on(c, "loadstart", d), h.on(h.volumeBar, ["slideractive", "focus"], function () { this.addClass("vjs-slider-active") }), h.on(h.volumeBar, ["sliderinactive", "blur"], function () { this.removeClass("vjs-slider-active") }), h.on(h.volumeBar, ["focus"], function () { this.addClass("vjs-lock-showing") }), h.on(h.volumeBar, ["blur"], function () { this.removeClass("vjs-lock-showing") }), h } return h(b, a), b.prototype.buildCSSClass = function () { var b = ""; return b = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + a.prototype.buildCSSClass.call(this) + " " + b }, b.prototype.createPopup = function () { var a = new n["default"](this.player_, { contentElType: "div" }), b = new t["default"](this.player_, this.options_.volumeBar); return a.addChild(b), this.menuContent = a, this.volumeBar = b, this.attachVolumeBarEvents(), a }, b.prototype.handleClick = function (b) { r["default"].prototype.handleClick.call(this), a.prototype.handleClick.call(this) }, b.prototype.attachVolumeBarEvents = function () { this.menuContent.on(["mousedown", "touchdown"], j.bind(this, this.handleMouseDown)) }, b.prototype.handleMouseDown = function (a) { this.on(["mousemove", "touchmove"], j.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp) }, b.prototype.handleMouseUp = function (a) { this.off(["mousemove", "touchmove"], j.bind(this.volumeBar, this.volumeBar.handleMouseMove)) }, b }(p["default"]); u.prototype.volumeUpdate = r["default"].prototype.update, u.prototype.controlText_ = "Mute", l["default"].registerComponent("VolumeMenuButton", u), c["default"] = u }, { 11: 11, 37: 37, 5: 5, 53: 53, 54: 54, 83: 83 }], 41: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = a(50), k = d(j), l = a(87), m = d(l), n = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return g.on(c, "error", g.open), g } return g(b, a), b.prototype.buildCSSClass = function () { return "vjs-error-display " + a.prototype.buildCSSClass.call(this) }, b.prototype.content = function () { var a = this.player().error(); return a ? this.localize(a.message) : "" }, b }(k["default"]); n.prototype.options_ = (0, m["default"])(k["default"].prototype.options_, { pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0 }), i["default"].registerComponent("ErrorDisplay", n), c["default"] = n }, { 5: 5, 50: 50, 87: 87 }], 42: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } c.__esModule = !0; var e = a(82), f = d(e), g = function () { }; g.prototype.allowedEvents_ = {}, g.prototype.on = function (a, b) { var c = this.addEventListener; this.addEventListener = function () { }, f.on(this, a, b), this.addEventListener = c }, g.prototype.addEventListener = g.prototype.on, g.prototype.off = function (a, b) { f.off(this, a, b) }, g.prototype.removeEventListener = g.prototype.off, g.prototype.one = function (a, b) { var c = this.addEventListener; this.addEventListener = function () { }, f.one(this, a, b), this.addEventListener = c }, g.prototype.trigger = function (a) { var b = a.type || a; "string" == typeof a && (a = { type: b }), a = f.fixEvent(a), this.allowedEvents_[b] && this["on" + b] && this["on" + b](a), f.trigger(this, a) }, g.prototype.dispatchEvent = g.prototype.trigger, c["default"] = g }, { 82: 82 }], 43: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0; var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, f = a(86), g = d(f), h = a(88), i = function (a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : e(b))); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (a.super_ = b) }, j = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = function () { a.apply(this, arguments) }, d = {}; (0, h.isObject)(b) ? ("function" == typeof b.init && (g["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), b.constructor = b.init), b.constructor !== Object.prototype.constructor && (c = b.constructor), d = b) : "function" == typeof b && (c = b), i(c, a); for (var e in d) d.hasOwnProperty(e) && (c.prototype[e] = d[e]); return c }; c["default"] = j }, { 86: 86, 88: 88 }], 44: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0; for (var e = a(94), f = d(e), g = {}, h = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = h[0], j = void 0, k = 0; k < h.length; k++)if (h[k][1] in f["default"]) { j = h[k]; break } if (j) for (var l = 0; l < j.length; l++)g[i[l]] = j[l]; c["default"] = g }, { 94: 94 }], 45: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = function (a) { function b() { return e(this, b), f(this, a.apply(this, arguments)) } return g(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-loading-spinner", dir: "ltr" }) }, b }(i["default"]); i["default"].registerComponent("LoadingSpinner", j), c["default"] = j }, { 5: 5 }], 46: [function (a, b, c) { "use strict"; function d(a) { if (a instanceof d) return a; "number" == typeof a ? this.code = a : "string" == typeof a ? this.message = a : (0, e.isObject)(a) && ("number" == typeof a.code && (this.code = a.code), (0, e.assign)(this, a)), this.message || (this.message = d.defaultMessages[this.code] || "") } c.__esModule = !0; var e = a(88); d.prototype.code = 0, d.prototype.message = "", d.prototype.status = null, d.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], d.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it." }; for (var f = 0; f < d.errorTypes.length; f++)d[d.errorTypes[f]] = f, d.prototype[d.errorTypes[f]] = f; c["default"] = d }, { 88: 88 }], 47: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(3), j = e(i), k = a(5), l = e(k), m = a(49), n = e(m), o = a(81), p = d(o), q = a(83), r = d(q), s = a(91), t = e(s), u = function (a) { function b(c) { var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; f(this, b); var e = g(this, a.call(this, c, d)); return e.update(), e.enabled_ = !0, e.el_.setAttribute("aria-haspopup", "true"), e.el_.setAttribute("role", "menuitem"), e.on("keydown", e.handleSubmenuKeyPress), e } return h(b, a), b.prototype.update = function () { var a = this.createMenu(); this.menu && this.removeChild(this.menu), this.menu = a, this.addChild(a), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show() }, b.prototype.createMenu = function () { var a = new n["default"](this.player_); if (this.hideThreshold_ = 0, this.options_.title) { var b = p.createEl("li", { className: "vjs-menu-title", innerHTML: (0, t["default"])(this.options_.title), tabIndex: -1 }); this.hideThreshold_ += 1, a.children_.unshift(b), p.insertElFirst(b, a.contentEl()) } if (this.items = this.createItems(), this.items) for (var c = 0; c < this.items.length; c++)a.addItem(this.items[c]); return a }, b.prototype.createItems = function () { }, b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: this.buildCSSClass() }) }, b.prototype.buildCSSClass = function () { var b = "vjs-menu-button"; return b += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + b + " " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleClick = function (a) { this.one(this.menu.contentEl(), "mouseleave", r.bind(this, function (a) { this.unpressButton(), this.el_.blur() })), this.buttonPressed_ ? this.unpressButton() : this.pressButton() }, b.prototype.handleKeyPress = function (b) { 27 === b.which || 9 === b.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== b.which && b.preventDefault()) : 38 === b.which || 40 === b.which ? this.buttonPressed_ || (this.pressButton(), b.preventDefault()) : a.prototype.handleKeyPress.call(this, b) }, b.prototype.handleSubmenuKeyPress = function (a) { 27 !== a.which && 9 !== a.which || (this.buttonPressed_ && this.unpressButton(), 9 !== a.which && a.preventDefault()) }, b.prototype.pressButton = function () { this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus()) }, b.prototype.unpressButton = function () { this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus()) }, b.prototype.disable = function () { return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, a.prototype.disable.call(this) }, b.prototype.enable = function () { return this.enabled_ = !0, a.prototype.enable.call(this) }, b }(j["default"]); l["default"].registerComponent("MenuButton", u), c["default"] = u }, { 3: 3, 49: 49, 5: 5, 81: 81, 83: 83, 91: 91 }], 48: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(3), i = d(h), j = a(5), k = d(j), l = a(88), m = function (a) { function b(c, d) { e(this, b); var g = f(this, a.call(this, c, d)); return g.selectable = d.selectable, g.selected(d.selected), g.selectable ? g.el_.setAttribute("role", "menuitemcheckbox") : g.el_.setAttribute("role", "menuitem"), g } return g(b, a), b.prototype.createEl = function (b, c, d) { return this.nonIconControl = !0, a.prototype.createEl.call(this, "li", (0, l.assign)({ className: "vjs-menu-item", innerHTML: this.localize(this.options_.label), tabIndex: -1 }, c), d) }, b.prototype.handleClick = function (a) { this.selected(!0) }, b.prototype.selected = function (a) { this.selectable && (a ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" "))) }, b }(i["default"]); k["default"].registerComponent("MenuItem", m), c["default"] = m }, { 3: 3, 5: 5, 88: 88 }], 49: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(83), n = d(m), o = a(82), p = d(o), q = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.focusedChild_ = -1, e.on("keydown", e.handleKeyPress), e } return h(b, a), b.prototype.addItem = function (a) { this.addChild(a), a.on("click", n.bind(this, function (a) { this.unlockShowing() })) }, b.prototype.createEl = function () { var b = this.options_.contentElType || "ul"; this.contentEl_ = l.createEl(b, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu"); var c = a.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" }); return c.setAttribute("role", "presentation"), c.appendChild(this.contentEl_), p.on(c, "click", function (a) { a.preventDefault(), a.stopImmediatePropagation() }), c }, b.prototype.handleKeyPress = function (a) { 37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepForward()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepBack()) }, b.prototype.stepForward = function () { var a = 0; void 0 !== this.focusedChild_ && (a = this.focusedChild_ + 1), this.focus(a) }, b.prototype.stepBack = function () { var a = 0; void 0 !== this.focusedChild_ && (a = this.focusedChild_ - 1), this.focus(a) }, b.prototype.focus = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, b = this.children().slice(); b.length && b[0].className && /vjs-menu-title/.test(b[0].className) && b.shift(), b.length > 0 && (a < 0 ? a = 0 : a >= b.length && (a = b.length - 1), this.focusedChild_ = a, b[a].el_.focus()) }, b }(j["default"]); j["default"].registerComponent("Menu", q), c["default"] = q }, { 5: 5, 81: 81, 82: 82, 83: 83 }], 50: [function (a, b, c) {
      "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(81), j = e(i), k = a(83), l = e(k), m = a(5), n = d(m), o = function (a) {
        function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.opened_ = e.hasBeenOpened_ = e.hasBeenFilled_ = !1, e.closeable(!e.options_.uncloseable), e.content(e.options_.content), e.contentEl_ = j.createEl("div", { className: "vjs-modal-dialog-content" }, { role: "document" }), e.descEl_ = j.createEl("p", { className: "vjs-modal-dialog-description vjs-offscreen", id: e.el().getAttribute("aria-describedby") }), j.textContent(e.descEl_, e.description()), e.el_.appendChild(e.descEl_), e.el_.appendChild(e.contentEl_), e } return h(b, a), b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": this.id() + "_description", "aria-hidden": "true", "aria-label": this.label(), role: "dialog" }) }, b.prototype.buildCSSClass = function () { return "vjs-modal-dialog vjs-hidden " + a.prototype.buildCSSClass.call(this) }, b.prototype.handleKeyPress = function (a) { 27 === a.which && this.closeable() && this.close() }, b.prototype.label = function () { return this.options_.label || this.localize("Modal Window") }, b.prototype.description = function () { var a = this.options_.description || this.localize("This is a modal window."); return this.closeable() && (a += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), a }, b.prototype.open = function () { if (!this.opened_) { var a = this.player(); this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !a.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && a.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", l.bind(this, this.handleKeyPress)), a.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0 } return this }, b.prototype.opened = function (a) { return "boolean" == typeof a && this[a ? "open" : "close"](), this.opened_ }, b.prototype.close = function () { if (this.opened_) { var a = this.player(); this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && a.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", l.bind(this, this.handleKeyPress)), a.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose() } return this }, b.prototype.closeable = function c(a) { if ("boolean" == typeof a) { var c = this.closeable_ = !!a, b = this.getChild("closeButton"); if (c && !b) { var d = this.contentEl_; this.contentEl_ = this.el_, b = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = d, this.on(b, "close", this.close) } !c && b && (this.off(b, "close", this.close), this.removeChild(b), b.dispose()) } return this.closeable_ }, b.prototype.fill = function () { return this.fillWith(this.content()) }, b.prototype.fillWith = function (a) {
          var b = this.contentEl(), c = b.parentNode, d = b.nextSibling; return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, c.removeChild(b), this.empty(), j.insertContent(b, a), this.trigger("modalfill"), d ? c.insertBefore(b, d) : c.appendChild(b), this
        }, b.prototype.empty = function () { return this.trigger("beforemodalempty"), j.emptyEl(this.contentEl()), this.trigger("modalempty"), this }, b.prototype.content = function (a) { return void 0 !== a && (this.content_ = a), this.content_ }, b
      }(n["default"]); o.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }, n["default"].registerComponent("ModalDialog", o), c["default"] = o
    }, { 5: 5, 81: 81, 83: 83 }], 51: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(94), l = e(k), m = a(95), n = e(m), o = a(82), p = d(o), q = a(81), r = d(q), s = a(83), t = d(s), u = a(85), v = d(u), w = a(78), x = d(w), y = a(86), z = e(y), A = a(91), B = e(A), C = a(90), D = a(79), E = a(89), F = d(E), G = a(44), H = e(G), I = a(46), J = e(I), K = a(97), L = e(K), M = a(88), N = a(87), O = e(N), P = a(69), Q = e(P), R = a(50), S = e(R), T = a(62), U = e(T), V = a(63), W = e(V), X = a(76), Y = e(X); a(61), a(59), a(55), a(68), a(45), a(1), a(4), a(8), a(41), a(71), a(60); var Z = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "volumechange", "texttrackchange"], $ = function (a) { function b(c, d, e) { if (f(this, b), c.id = c.id || "vjs_video_" + v.newGUID(), d = (0, M.assign)(b.getTagSettings(c), d), d.initChildren = !1, d.createEl = !1, d.reportTouchActivity = !1, !d.language) if ("function" == typeof c.closest) { var h = c.closest("[lang]"); h && (d.language = h.getAttribute("lang")) } else for (var i = c; i && 1 === i.nodeType;) { if (r.getElAttributes(i).hasOwnProperty("lang")) { d.language = i.getAttribute("lang"); break } i = i.parentNode } var j = g(this, a.call(this, null, d, e)); if (!j.options_ || !j.options_.techOrder || !j.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"); if (j.tag = c, j.tagAttributes = c && r.getElAttributes(c), j.language(j.options_.language), d.languages) { var k = {}; Object.getOwnPropertyNames(d.languages).forEach(function (a) { k[a.toLowerCase()] = d.languages[a] }), j.languages_ = k } else j.languages_ = b.prototype.options_.languages; j.cache_ = {}, j.poster_ = d.poster || "", j.controls_ = !!d.controls, c.controls = !1, j.scrubbing_ = !1, j.el_ = j.createEl(); var l = (0, O["default"])(j.options_); if (d.plugins) { var m = d.plugins; Object.getOwnPropertyNames(m).forEach(function (a) { "function" == typeof this[a] ? this[a](m[a]) : z["default"].error("Unable to find plugin:", a) }, j) } return j.options_.playerOptions = l, j.initChildren(), j.isAudio("audio" === c.nodeName.toLowerCase()), j.controls() ? j.addClass("vjs-controls-enabled") : j.addClass("vjs-controls-disabled"), j.el_.setAttribute("role", "region"), j.isAudio() ? j.el_.setAttribute("aria-label", "audio player") : j.el_.setAttribute("aria-label", "video player"), j.isAudio() && j.addClass("vjs-audio"), j.flexNotSupported_() && j.addClass("vjs-no-flex"), x.IS_IOS || j.addClass("vjs-workinghover"), b.players[j.id_] = j, j.userActive(!0), j.reportUserActivity(), j.listenForUserActivity_(), j.on("fullscreenchange", j.handleFullscreenChange_), j.on("stageclick", j.handleStageClick_), j } return h(b, a), b.prototype.dispose = function () { this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), b.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), a.prototype.dispose.call(this) }, b.prototype.createEl = function () { var b = this.tag, c = void 0, d = this.playerElIngest_ = b.parentNode && b.parentNode.hasAttribute && b.parentNode.hasAttribute("data-vjs-player"); c = this.el_ = d ? b.parentNode : a.prototype.createEl.call(this, "div"), b.setAttribute("tabindex", "-1"), b.removeAttribute("width"), b.removeAttribute("height"); var e = r.getElAttributes(b); if (Object.getOwnPropertyNames(e).forEach(function (a) { "class" === a ? c.className += " " + e[a] : c.setAttribute(a, e[a]) }), b.playerId = b.id, b.id += "_html5_api", b.className = "vjs-tech", b.player = c.player = this, this.addClass("vjs-paused"), n["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) { this.styleEl_ = F.createStyleElement("vjs-styles-dimensions"); var f = r.$(".vjs-styles-defaults"), g = r.$("head"); g.insertBefore(this.styleEl_, f ? f.nextSibling : g.firstChild) } this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio); for (var h = b.getElementsByTagName("a"), i = 0; i < h.length; i++) { var j = h.item(i); r.addElClass(j, "vjs-hidden"), j.setAttribute("hidden", "hidden") } return b.initNetworkState_ = b.networkState, b.parentNode && !d && b.parentNode.insertBefore(c, b), r.insertElFirst(b, c), this.children_.unshift(b), this.el_ = c, c }, b.prototype.width = function (a) { return this.dimension("width", a) }, b.prototype.height = function (a) { return this.dimension("height", a) }, b.prototype.dimension = function (a, b) { var c = a + "_"; if (void 0 === b) return this[c] || 0; if ("" === b) this[c] = void 0; else { var d = parseFloat(b); if (isNaN(d)) return z["default"].error('Improper value "' + b + '" supplied for for ' + a), this; this[c] = d } return this.updateStyleEl_(), this }, b.prototype.fluid = function (a) { if (void 0 === a) return !!this.fluid_; this.fluid_ = !!a, a ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_() }, b.prototype.aspectRatio = function (a) { if (void 0 === a) return this.aspectRatio_; if (!/^\d+\:\d+$/.test(a)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9."); this.aspectRatio_ = a, this.fluid(!0), this.updateStyleEl_() }, b.prototype.updateStyleEl_ = function () { if (n["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) { var a = "number" == typeof this.width_ ? this.width_ : this.options_.width, b = "number" == typeof this.height_ ? this.height_ : this.options_.height, c = this.tech_ && this.tech_.el(); return void (c && (a >= 0 && (c.width = a), b >= 0 && (c.height = b))) } var d = void 0, e = void 0, f = void 0, g = void 0; f = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9"; var h = f.split(":"), i = h[1] / h[0]; d = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / i : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : d * i, g = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(g), F.setTextContent(this.styleEl_, "\n      ." + g + " {\n        width: " + d + "px;\n        height: " + e + "px;\n      }\n\n      ." + g + ".vjs-fluid {\n        padding-top: " + 100 * i + "%;\n      }\n    ") }, b.prototype.loadTech_ = function (a, b) { var c = this; this.tech_ && this.unloadTech_(), "Html5" !== a && this.tag && (U["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = a, this.isReady_ = !1; var d = (0, M.assign)({ source: b, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: this.id() + "_" + a + "_api", videoTracks: this.videoTracks_, textTracks: this.textTracks_, audioTracks: this.audioTracks_, autoplay: this.options_.autoplay, preload: this.options_.preload, loop: this.options_.loop, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || !1, "vtt.js": this.options_["vtt.js"] }, this.options_[a.toLowerCase()]); this.tag && (d.tag = this.tag), b && (this.currentType_ = b.type, b.src === this.cache_.src && this.cache_.currentTime > 0 && (d.startTime = this.cache_.currentTime), this.cache_.sources = null, this.cache_.source = b, this.cache_.src = b.src); var e = U["default"].getTech(a); e || (e = j["default"].getComponent(a)), this.tech_ = new e(d), this.tech_.ready(t.bind(this, this.handleTechReady_), !0), Q["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Z.forEach(function (a) { c.on(c.tech_, a, c["handleTech" + (0, B["default"])(a) + "_"]) }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === a && this.tag || r.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null) }, b.prototype.unloadTech_ = function () { this.videoTracks_ = this.videoTracks(), this.textTracks_ = this.textTracks(), this.audioTracks_ = this.audioTracks(), this.textTracksJson_ = Q["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1 }, b.prototype.tech = function (a) { if (a && a.IWillNotUseThisInPlugins) return this.tech_; var b = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    "; throw n["default"].alert(b), new Error(b) }, b.prototype.addTechControlsListeners_ = function () { this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_) }, b.prototype.removeTechControlsListeners_ = function () { this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_) }, b.prototype.handleTechReady_ = function () { if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) { try { delete this.tag.poster } catch (a) { (0, z["default"])("deleting tag.poster throws in some browsers", a) } this.play() } }, b.prototype.handleTechLoadStart_ = function () { this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")) }, b.prototype.hasStarted = function (a) { return void 0 !== a ? (this.hasStarted_ !== a && (this.hasStarted_ = a, a ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_ }, b.prototype.handleTechPlay_ = function () { this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play") }, b.prototype.handleTechWaiting_ = function () { var a = this; this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () { return a.removeClass("vjs-waiting") }) }, b.prototype.handleTechCanPlay_ = function () { this.removeClass("vjs-waiting"), this.trigger("canplay") }, b.prototype.handleTechCanPlayThrough_ = function () { this.removeClass("vjs-waiting"), this.trigger("canplaythrough") }, b.prototype.handleTechPlaying_ = function () { this.removeClass("vjs-waiting"), this.trigger("playing") }, b.prototype.handleTechSeeking_ = function () { this.addClass("vjs-seeking"), this.trigger("seeking") }, b.prototype.handleTechSeeked_ = function () { this.removeClass("vjs-seeking"), this.trigger("seeked") }, b.prototype.handleTechFirstPlay_ = function () { this.options_.starttime && (z["default"].warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay") }, b.prototype.handleTechPause_ = function () { this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause") }, b.prototype.handleTechEnded_ = function () { this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended") }, b.prototype.handleTechDurationChange_ = function () { this.duration(this.techGet_("duration")) }, b.prototype.handleTechClick_ = function (a) { 0 === a.button && this.controls() && (this.paused() ? this.play() : this.pause()) }, b.prototype.handleTechTap_ = function () { this.userActive(!this.userActive()) }, b.prototype.handleTechTouchStart_ = function () { this.userWasActive = this.userActive() }, b.prototype.handleTechTouchMove_ = function () { this.userWasActive && this.reportUserActivity() }, b.prototype.handleTechTouchEnd_ = function (a) { a.preventDefault() }, b.prototype.handleFullscreenChange_ = function () { this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen") }, b.prototype.handleStageClick_ = function () { this.reportUserActivity() }, b.prototype.handleTechFullscreenChange_ = function (a, b) { b && this.isFullscreen(b.isFullscreen), this.trigger("fullscreenchange") }, b.prototype.handleTechError_ = function () { var a = this.tech_.error(); this.error(a) }, b.prototype.handleTechTextData_ = function () { var a = null; arguments.length > 1 && (a = arguments[1]), this.trigger("textdata", a) }, b.prototype.getCache = function () { return this.cache_ }, b.prototype.techCall_ = function (a, b) { if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function () { this[a](b) }, !0); else try { this.tech_ && this.tech_[a](b) } catch (c) { throw (0, z["default"])(c), c } }, b.prototype.techGet_ = function (a) { if (this.tech_ && this.tech_.isReady_) try { return this.tech_[a]() } catch (b) { throw void 0 === this.tech_[a] ? (0, z["default"])("Video.js: " + a + " method not defined for " + this.techName_ + " playback technology.", b) : "TypeError" === b.name ? ((0, z["default"])("Video.js: " + a + " unavailable on " + this.techName_ + " playback technology element.", b), this.tech_.isReady_ = !1) : (0, z["default"])(b), b } }, b.prototype.play = function () { return this.src() || this.currentSrc() ? this.techCall_("play") : this.tech_.one("loadstart", function () { this.play() }), this }, b.prototype.pause = function () { return this.techCall_("pause"), this }, b.prototype.paused = function () { return this.techGet_("paused") !== !1 }, b.prototype.scrubbing = function (a) { return void 0 !== a ? (this.scrubbing_ = !!a, a ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_ }, b.prototype.currentTime = function (a) { return void 0 !== a ? (this.techCall_("setCurrentTime", a), this) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime) }, b.prototype.duration = function (a) { return void 0 === a ? this.cache_.duration || 0 : (a = parseFloat(a) || 0, a < 0 && (a = 1 / 0), a !== this.cache_.duration && (this.cache_.duration = a, a === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this) }, b.prototype.remainingTime = function () { return this.duration() - this.currentTime() }, b.prototype.buffered = function c() { var c = this.techGet_("buffered"); return c && c.length || (c = (0, C.createTimeRange)(0, 0)), c }, b.prototype.bufferedPercent = function () { return (0, D.bufferedPercent)(this.buffered(), this.duration()) }, b.prototype.bufferedEnd = function () { var a = this.buffered(), b = this.duration(), c = a.end(a.length - 1); return c > b && (c = b), c }, b.prototype.volume = function (a) { var b = void 0; return void 0 !== a ? (b = Math.max(0, Math.min(1, parseFloat(a))), this.cache_.volume = b, this.techCall_("setVolume", b), this) : (b = parseFloat(this.techGet_("volume")), isNaN(b) ? 1 : b) }, b.prototype.muted = function (a) { return void 0 !== a ? (this.techCall_("setMuted", a), this) : this.techGet_("muted") || !1 }, b.prototype.supportsFullScreen = function () { return this.techGet_("supportsFullScreen") || !1 }, b.prototype.isFullscreen = function (a) { return void 0 !== a ? (this.isFullscreen_ = !!a, this) : !!this.isFullscreen_ }, b.prototype.requestFullscreen = function () { var a = H["default"]; return this.isFullscreen(!0), a.requestFullscreen ? (p.on(l["default"], a.fullscreenchange, t.bind(this, function b(c) { this.isFullscreen(l["default"][a.fullscreenElement]), this.isFullscreen() === !1 && p.off(l["default"], a.fullscreenchange, b), this.trigger("fullscreenchange") })), this.el_[a.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this }, b.prototype.exitFullscreen = function () { var a = H["default"]; return this.isFullscreen(!1), a.requestFullscreen ? l["default"][a.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this }, b.prototype.enterFullWindow = function () { this.isFullWindow = !0, this.docOrigOverflow = l["default"].documentElement.style.overflow, p.on(l["default"], "keydown", t.bind(this, this.fullWindowOnEscKey)), l["default"].documentElement.style.overflow = "hidden", r.addElClass(l["default"].body, "vjs-full-window"), this.trigger("enterFullWindow") }, b.prototype.fullWindowOnEscKey = function (a) { 27 === a.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow()) }, b.prototype.exitFullWindow = function () { this.isFullWindow = !1, p.off(l["default"], "keydown", this.fullWindowOnEscKey), l["default"].documentElement.style.overflow = this.docOrigOverflow, r.removeElClass(l["default"].body, "vjs-full-window"), this.trigger("exitFullWindow") }, b.prototype.canPlayType = function (a) { for (var b = void 0, c = 0, d = this.options_.techOrder; c < d.length; c++) { var e = (0, B["default"])(d[c]), f = U["default"].getTech(e); if (f || (f = j["default"].getComponent(e)), f) { if (f.isSupported() && (b = f.canPlayType(a))) return b } else z["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.') } return "" }, b.prototype.selectSource = function (a) { var b = this, c = this.options_.techOrder.map(B["default"]).map(function (a) { return [a, U["default"].getTech(a) || j["default"].getComponent(a)] }).filter(function (a) { var b = a[0], c = a[1]; return c ? c.isSupported() : (z["default"].error('The "' + b + '" tech is undefined. Skipped browser support check for that tech.'), !1) }), d = function (a, b, c) { var d = void 0; return a.some(function (a) { return b.some(function (b) { if (d = c(a, b)) return !0 }) }), d }, e = void 0, f = function (a) { return function (b, c) { return a(c, b) } }, g = function (a, c) { var d = a[0]; if (a[1].canPlaySource(c, b.options_[d.toLowerCase()])) return { source: c, tech: d } }; return e = this.options_.sourceOrder ? d(a, c, f(g)) : d(c, a, g), e || !1 }, b.prototype.src = function (a) { if (void 0 === a) return this.techGet_("src"); var b = U["default"].getTech(this.techName_); return b || (b = j["default"].getComponent(this.techName_)), Array.isArray(a) ? this.sourceList_(a) : "string" == typeof a ? this.src({ src: a }) : a instanceof Object && (a.type && !b.canPlaySource(a, this.options_[this.techName_.toLowerCase()]) ? this.sourceList_([a]) : (this.cache_.sources = null, this.cache_.source = a, this.cache_.src = a.src, this.currentType_ = a.type || "", this.ready(function () { b.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", a) : this.techCall_("src", a.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play() }, !0))), this }, b.prototype.sourceList_ = function (a) { var b = this.selectSource(a); b ? (b.tech === this.techName_ ? this.src(b.source) : this.loadTech_(b.tech, b.source), this.cache_.sources = a) : (this.setTimeout(function () { this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) }) }, 0), this.triggerReady()) }, b.prototype.load = function () { return this.techCall_("load"), this }, b.prototype.reset = function () { return this.loadTech_((0, B["default"])(this.options_.techOrder[0]), null), this.techCall_("reset"), this }, b.prototype.currentSources = function () { var a = this.currentSource(), b = []; return 0 !== Object.keys(a).length && b.push(a), this.cache_.sources || b }, b.prototype.currentSource = function () { var a = {}, b = this.currentSrc(); return b && (a.src = b), this.cache_.source || a }, b.prototype.currentSrc = function () { return this.techGet_("currentSrc") || this.cache_.src || "" }, b.prototype.currentType = function () { return this.currentType_ || "" }, b.prototype.preload = function (a) { return void 0 !== a ? (this.techCall_("setPreload", a), this.options_.preload = a, this) : this.techGet_("preload") }, b.prototype.autoplay = function (a) { return void 0 !== a ? (this.techCall_("setAutoplay", a), this.options_.autoplay = a, this) : this.techGet_("autoplay", a) }, b.prototype.loop = function (a) { return void 0 !== a ? (this.techCall_("setLoop", a), this.options_.loop = a, this) : this.techGet_("loop") }, b.prototype.poster = function (a) { return void 0 === a ? this.poster_ : (a || (a = ""), this.poster_ = a, this.techCall_("setPoster", a), this.trigger("posterchange"), this) }, b.prototype.handleTechPosterChange_ = function () { !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange")) }, b.prototype.controls = function (a) { return void 0 !== a ? (a = !!a, this.controls_ !== a && (this.controls_ = a, this.usingNativeControls() && this.techCall_("setControls", a), a ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_ }, b.prototype.usingNativeControls = function (a) { return void 0 !== a ? (a = !!a, this.usingNativeControls_ !== a && (this.usingNativeControls_ = a, a ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_ }, b.prototype.error = function (a) { return void 0 === a ? this.error_ || null : null === a ? (this.error_ = a, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close(), this) : (this.error_ = new J["default"](a), this.addClass("vjs-error"), z["default"].error("(CODE:" + this.error_.code + " " + J["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this) }, b.prototype.reportUserActivity = function (a) { this.userActivity_ = !0 }, b.prototype.userActive = function (a) { return void 0 !== a ? (a = !!a, a !== this.userActive_ && (this.userActive_ = a, a ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function (a) { a.stopPropagation(), a.preventDefault() }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_ }, b.prototype.listenForUserActivity_ = function () { var a = void 0, b = void 0, c = void 0, d = t.bind(this, this.reportUserActivity), e = function (a) { a.screenX === b && a.screenY === c || (b = a.screenX, c = a.screenY, d()) }, f = function () { d(), this.clearInterval(a), a = this.setInterval(d, 250) }, g = function (b) { d(), this.clearInterval(a) }; this.on("mousedown", f), this.on("mousemove", e), this.on("mouseup", g), this.on("keydown", d), this.on("keyup", d); var h = void 0; this.setInterval(function () { if (this.userActivity_) { this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(h); var a = this.options_.inactivityTimeout; a > 0 && (h = this.setTimeout(function () { this.userActivity_ || this.userActive(!1) }, a)) } }, 250) }, b.prototype.playbackRate = function (a) { return void 0 !== a ? (this.techCall_("setPlaybackRate", a), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1 }, b.prototype.isAudio = function (a) { return void 0 !== a ? (this.isAudio_ = !!a, this) : !!this.isAudio_ }, b.prototype.videoTracks = function () { return this.tech_ ? this.tech_.videoTracks() : (this.videoTracks_ = this.videoTracks_ || new Y["default"], this.videoTracks_) }, b.prototype.audioTracks = function () { return this.tech_ ? this.tech_.audioTracks() : (this.audioTracks_ = this.audioTracks_ || new W["default"], this.audioTracks_) }, b.prototype.textTracks = function () { if (this.tech_) return this.tech_.textTracks() }, b.prototype.remoteTextTracks = function () { if (this.tech_) return this.tech_.remoteTextTracks() }, b.prototype.remoteTextTrackEls = function () { if (this.tech_) return this.tech_.remoteTextTrackEls() }, b.prototype.addTextTrack = function (a, b, c) { if (this.tech_) return this.tech_.addTextTrack(a, b, c) }, b.prototype.addRemoteTextTrack = function (a, b) { if (this.tech_) return this.tech_.addRemoteTextTrack(a, b) }, b.prototype.removeRemoteTextTrack = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, b = a.track, c = void 0 === b ? arguments[0] : b; if (this.tech_) return this.tech_.removeRemoteTextTrack(c) }, b.prototype.videoWidth = function () { return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0 }, b.prototype.videoHeight = function () { return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0 }, b.prototype.language = function (a) { return void 0 === a ? this.language_ : (this.language_ = String(a).toLowerCase(), this) }, b.prototype.languages = function () { return (0, O["default"])(b.prototype.options_.languages, this.languages_) }, b.prototype.toJSON = function () { var a = (0, O["default"])(this.options_), b = a.tracks; a.tracks = []; for (var c = 0; c < b.length; c++) { var d = b[c]; d = (0, O["default"])(d), d.player = void 0, a.tracks[c] = d } return a }, b.prototype.createModal = function (a, b) { var c = this; b = b || {}, b.content = a || ""; var d = new S["default"](this, b); return this.addChild(d), d.on("dispose", function () { c.removeChild(d) }), d.open() }, b.getTagSettings = function (a) { var b = { sources: [], tracks: [] }, c = r.getElAttributes(a), d = c["data-setup"]; if (r.hasElClass(a, "vjs-fluid") && (c.fluid = !0), null !== d) { var e = (0, L["default"])(d || "{}"), f = e[0], g = e[1]; f && z["default"].error(f), (0, M.assign)(c, g) } if ((0, M.assign)(b, c), a.hasChildNodes()) for (var h = a.childNodes, i = 0, j = h.length; i < j; i++) { var k = h[i], l = k.nodeName.toLowerCase(); "source" === l ? b.sources.push(r.getElAttributes(k)) : "track" === l && b.tracks.push(r.getElAttributes(k)) } return b }, b.prototype.flexNotSupported_ = function () { var a = l["default"].createElement("i"); return !("flexBasis" in a.style || "webkitFlexBasis" in a.style || "mozFlexBasis" in a.style || "msFlexBasis" in a.style || "msFlexOrder" in a.style) }, b }(j["default"]); $.players = {}; var _ = n["default"].navigator; $.prototype.options_ = { techOrder: ["html5", "flash"], html5: {}, flash: {}, defaultVolume: 0, inactivityTimeout: 2e3, playbackRates: [], children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"], language: _ && (_.languages && _.languages[0] || _.userLanguage || _.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media." }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (a) { $.prototype[a] = function () { return this.techGet_(a) } }), Z.forEach(function (a) { $.prototype["handleTech" + (0, B["default"])(a) + "_"] = function () { return this.trigger(a) } }), j["default"].registerComponent("Player", $), c["default"] = $ }, { 1: 1, 4: 4, 41: 41, 44: 44, 45: 45, 46: 46, 5: 5, 50: 50, 55: 55, 59: 59, 60: 60, 61: 61, 62: 62, 63: 63, 68: 68, 69: 69, 71: 71, 76: 76, 78: 78, 79: 79, 8: 8, 81: 81, 82: 82, 83: 83, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 91: 91, 94: 94, 95: 95, 97: 97 }], 52: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0; var e = a(51), f = d(e), g = function (a, b) { f["default"].prototype[a] = b }; c["default"] = g }, { 51: 51 }], 53: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(3), i = d(h), j = a(5), k = d(j), l = function (a) { function b(c) { var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; e(this, b); var g = f(this, a.call(this, c, d)); return g.update(), g } return g(b, a), b.prototype.update = function () { var a = this.createPopup(); this.popup && this.removeChild(this.popup), this.popup = a, this.addChild(a), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show() }, b.prototype.createPopup = function () { }, b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: this.buildCSSClass() }) }, b.prototype.buildCSSClass = function () { var b = "vjs-menu-button"; return b += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + b + " " + a.prototype.buildCSSClass.call(this) }, b }(i["default"]); k["default"].registerComponent("PopupButton", l), c["default"] = l }, { 3: 3, 5: 5 }], 54: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(83), n = d(m), o = a(82), p = d(o), q = function (a) { function b() { return f(this, b), g(this, a.apply(this, arguments)) } return h(b, a), b.prototype.addItem = function (a) { this.addChild(a), a.on("click", n.bind(this, function () { this.unlockShowing() })) }, b.prototype.createEl = function () { var b = this.options_.contentElType || "ul"; this.contentEl_ = l.createEl(b, { className: "vjs-menu-content" }); var c = a.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" }); return c.appendChild(this.contentEl_), p.on(c, "click", function (a) { a.preventDefault(), a.stopImmediatePropagation() }), c }, b }(j["default"]); j["default"].registerComponent("Popup", q), c["default"] = q }, { 5: 5, 81: 81, 82: 82, 83: 83 }], 55: [function (a, b, c) {
      "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(3), j = e(i), k = a(5), l = e(k), m = a(83), n = d(m), o = a(81), p = d(o), q = a(78), r = d(q), s = function (a) {
        function b(c, d) {
          f(this, b); var e = g(this, a.call(this, c, d))
            ; return e.update(), c.on("posterchange", n.bind(e, e.update)), e
        } return h(b, a), b.prototype.dispose = function () { this.player().off("posterchange", this.update), a.prototype.dispose.call(this) }, b.prototype.createEl = function () { var a = p.createEl("div", { className: "vjs-poster", tabIndex: -1 }); return r.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = p.createEl("img"), a.appendChild(this.fallbackImg_)), a }, b.prototype.update = function (a) { var b = this.player().poster(); this.setSrc(b), b ? this.show() : this.hide() }, b.prototype.setSrc = function (a) { if (this.fallbackImg_) this.fallbackImg_.src = a; else { var b = ""; a && (b = 'url("' + a + '")'), this.el_.style.backgroundImage = b } }, b.prototype.handleClick = function (a) { this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause()) }, b
      }(j["default"]); l["default"].registerComponent("PosterImage", s), c["default"] = s
    }, { 3: 3, 5: 5, 78: 78, 81: 81, 83: 83 }], 56: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { b && (p = b), n["default"].setTimeout(q, a) } c.__esModule = !0, c.hasLoaded = c.autoSetupTimeout = c.autoSetup = void 0; var g = a(81), h = e(g), i = a(82), j = e(i), k = a(94), l = d(k), m = a(95), n = d(m), o = !1, p = void 0, q = function () { if (h.isReal()) { var a = l["default"].getElementsByTagName("video"), b = l["default"].getElementsByTagName("audio"), c = []; if (a && a.length > 0) for (var d = 0, e = a.length; d < e; d++)c.push(a[d]); if (b && b.length > 0) for (var g = 0, i = b.length; g < i; g++)c.push(b[g]); if (c && c.length > 0) for (var j = 0, k = c.length; j < k; j++) { var m = c[j]; if (!m || !m.getAttribute) { f(1); break } if (void 0 === m.player) { var n = m.getAttribute("data-setup"); null !== n && p(m) } } else o || f(1) } }; h.isReal() && "complete" === l["default"].readyState ? o = !0 : j.one(n["default"], "load", function () { o = !0 }); var r = function () { return o }; c.autoSetup = q, c.autoSetupTimeout = f, c.hasLoaded = r }, { 81: 81, 82: 82, 94: 94, 95: 95 }], 57: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(5), j = e(i), k = a(81), l = d(k), m = a(88), n = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.bar = e.getChild(e.options_.barName), e.vertical(!!e.options_.vertical), e.on("mousedown", e.handleMouseDown), e.on("touchstart", e.handleMouseDown), e.on("focus", e.handleFocus), e.on("blur", e.handleBlur), e.on("click", e.handleClick), e.on(c, "controlsvisible", e.update), e.on(c, e.playerEvent, e.update), e } return h(b, a), b.prototype.createEl = function (b) { var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return c.className = c.className + " vjs-slider", c = (0, m.assign)({ tabIndex: 0 }, c), d = (0, m.assign)({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, d), a.prototype.createEl.call(this, b, c, d) }, b.prototype.handleMouseDown = function (a) { var b = this.bar.el_.ownerDocument; a.preventDefault(), l.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(b, "mousemove", this.handleMouseMove), this.on(b, "mouseup", this.handleMouseUp), this.on(b, "touchmove", this.handleMouseMove), this.on(b, "touchend", this.handleMouseUp), this.handleMouseMove(a) }, b.prototype.handleMouseMove = function (a) { }, b.prototype.handleMouseUp = function () { var a = this.bar.el_.ownerDocument; l.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(a, "mousemove", this.handleMouseMove), this.off(a, "mouseup", this.handleMouseUp), this.off(a, "touchmove", this.handleMouseMove), this.off(a, "touchend", this.handleMouseUp), this.update() }, b.prototype.update = function () { if (this.el_) { var a = this.getPercent(), b = this.bar; if (b) { ("number" != typeof a || a !== a || a < 0 || a === 1 / 0) && (a = 0); var c = (100 * a).toFixed(2) + "%"; this.vertical() ? b.el().style.height = c : b.el().style.width = c } } }, b.prototype.calculateDistance = function (a) { var b = l.getPointerPosition(this.el_, a); return this.vertical() ? b.y : b.x }, b.prototype.handleFocus = function () { this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress) }, b.prototype.handleKeyPress = function (a) { 37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepBack()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepForward()) }, b.prototype.handleBlur = function () { this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress) }, b.prototype.handleClick = function (a) { a.stopImmediatePropagation(), a.preventDefault() }, b.prototype.vertical = function (a) { return void 0 === a ? this.vertical_ || !1 : (this.vertical_ = !!a, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this) }, b }(j["default"]); j["default"].registerComponent("Slider", n), c["default"] = n }, { 5: 5, 81: 81, 88: 88 }], 58: [function (a, b, c) { "use strict"; function d(a) { return a.streamingFormats = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" }, a.streamFromParts = function (a, b) { return a + "&" + b }, a.streamToParts = function (a) { var b = { connection: "", stream: "" }; if (!a) return b; var c = a.search(/&(?!\w+=)/), d = void 0; return c !== -1 ? d = c + 1 : (c = d = a.lastIndexOf("/") + 1, 0 === c && (c = d = a.length)), b.connection = a.substring(0, c), b.stream = a.substring(d, a.length), b }, a.isStreamingType = function (b) { return b in a.streamingFormats }, a.RTMP_RE = /^rtmp[set]?:\/\//i, a.isStreamingSrc = function (b) { return a.RTMP_RE.test(b) }, a.rtmpSourceHandler = {}, a.rtmpSourceHandler.canPlayType = function (b) { return a.isStreamingType(b) ? "maybe" : "" }, a.rtmpSourceHandler.canHandleSource = function (b, c) { var d = a.rtmpSourceHandler.canPlayType(b.type); return d ? d : a.isStreamingSrc(b.src) ? "maybe" : "" }, a.rtmpSourceHandler.handleSource = function (b, c, d) { var e = a.streamToParts(b.src); c.setRtmpConnection(e.connection), c.setRtmpStream(e.stream) }, a.registerSourceHandler(a.rtmpSourceHandler), a } c.__esModule = !0, c["default"] = d }, {}], 59: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } function i(a) { A["set" + (a.charAt(0).toUpperCase() + a.slice(1))] = function (b) { return this.el_.vjs_setProperty(a, b) } } function j(a) { A[a] = function () { return this.el_.vjs_getProperty(a) } } c.__esModule = !0; for (var k = a(62), l = e(k), m = a(81), n = d(m), o = a(92), p = d(o), q = a(90), r = a(58), s = e(r), t = a(5), u = e(t), v = a(95), w = e(v), x = a(88), y = w["default"].navigator, z = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return c.source && e.ready(function () { this.setSource(c.source) }, !0), c.startTime && e.ready(function () { this.load(), this.play(), this.currentTime(c.startTime) }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = b.onReady, w["default"].videojs.Flash.onEvent = b.onEvent, w["default"].videojs.Flash.onError = b.onError, e.on("seeked", function () { this.lastSeekTarget_ = void 0 }), e } return h(b, a), b.prototype.createEl = function () { var a = this.options_; if (!a.swf) { a.swf = "//vjs.zencdn.net/swf/5.3.0/video-js.swf" } var c = a.techId, d = (0, x.assign)({ readyFunction: "videojs.Flash.onReady", eventProxyFunction: "videojs.Flash.onEvent", errorEventProxyFunction: "videojs.Flash.onError", autoplay: a.autoplay, preload: a.preload, loop: a.loop, muted: a.muted }, a.flashVars), e = (0, x.assign)({ wmode: "opaque", bgcolor: "#000000" }, a.params), f = (0, x.assign)({ id: c, name: c, "class": "vjs-tech" }, a.attributes); return this.el_ = b.embed(a.swf, d, e, f), this.el_.tech = this, this.el_ }, b.prototype.play = function () { this.ended() && this.setCurrentTime(0), this.el_.vjs_play() }, b.prototype.pause = function () { this.el_.vjs_pause() }, b.prototype.src = function (a) { return void 0 === a ? this.currentSrc() : this.setSrc(a) }, b.prototype.setSrc = function (a) { var b = this; a = p.getAbsoluteURL(a), this.el_.vjs_src(a), this.autoplay() && this.setTimeout(function () { return b.play() }, 0) }, b.prototype.seeking = function () { return void 0 !== this.lastSeekTarget_ }, b.prototype.setCurrentTime = function (b) { var c = this.seekable(); c.length && (b = b > c.start(0) ? b : c.start(0), b = b < c.end(c.length - 1) ? b : c.end(c.length - 1), this.lastSeekTarget_ = b, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", b), a.prototype.setCurrentTime.call(this)) }, b.prototype.currentTime = function () { return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime") }, b.prototype.currentSrc = function () { return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc") }, b.prototype.duration = function c() { if (0 === this.readyState()) return NaN; var c = this.el_.vjs_getProperty("duration"); return c >= 0 ? c : 1 / 0 }, b.prototype.load = function () { this.el_.vjs_load() }, b.prototype.poster = function () { this.el_.vjs_getProperty("poster") }, b.prototype.setPoster = function () { }, b.prototype.seekable = function () { var a = this.duration(); return 0 === a ? (0, q.createTimeRange)() : (0, q.createTimeRange)(0, a) }, b.prototype.buffered = function () { var a = this.el_.vjs_getProperty("buffered"); return 0 === a.length ? (0, q.createTimeRange)() : (0, q.createTimeRange)(a[0][0], a[0][1]) }, b.prototype.supportsFullScreen = function () { return !1 }, b.prototype.enterFullScreen = function () { return !1 }, b }(l["default"]), A = z.prototype, B = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), C = "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","), D = 0; D < B.length; D++)j(B[D]), i(B[D]); for (var E = 0; E < C.length; E++)j(C[E]); z.isSupported = function () { return z.version()[0] >= 10 }, l["default"].withSourceHandlers(z), z.nativeSourceHandler = {}, z.nativeSourceHandler.canPlayType = function (a) { return a in z.formats ? "maybe" : "" }, z.nativeSourceHandler.canHandleSource = function (a, b) { function c(a) { var b = p.getFileExtension(a); return b ? "video/" + b : "" } var d = void 0; return d = a.type ? a.type.replace(/;.*/, "").toLowerCase() : c(a.src), z.nativeSourceHandler.canPlayType(d) }, z.nativeSourceHandler.handleSource = function (a, b, c) { b.setSrc(a.src) }, z.nativeSourceHandler.dispose = function () { }, z.registerSourceHandler(z.nativeSourceHandler), z.formats = { "video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4" }, z.onReady = function (a) { var b = n.getEl(a), c = b && b.tech; c && c.el() && z.checkReady(c) }, z.checkReady = function (a) { a.el() && (a.el().vjs_getProperty ? a.triggerReady() : this.setTimeout(function () { z.checkReady(a) }, 50)) }, z.onEvent = function (a, b) { var c = n.getEl(a).tech, d = Array.prototype.slice.call(arguments, 2); c.setTimeout(function () { c.trigger(b, d) }, 1) }, z.onError = function (a, b) { var c = n.getEl(a).tech; if ("srcnotfound" === b) return c.error(4); c.error("FLASH: " + b) }, z.version = function () { var a = "0,0,0"; try { a = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1] } catch (b) { try { y.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (y.plugins["Shockwave Flash 2.0"] || y.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]) } catch (c) { } } return a.split(",") }, z.embed = function (a, b, c, d) { var e = z.getEmbedCode(a, b, c, d); return n.createEl("div", { innerHTML: e }).childNodes[0] }, z.getEmbedCode = function (a, b, c, d) { var e = "", f = "", g = ""; return b && Object.getOwnPropertyNames(b).forEach(function (a) { e += a + "=" + b[a] + "&amp;" }), c = (0, x.assign)({ movie: a, flashvars: e, allowScriptAccess: "always", allowNetworking: "all" }, c), Object.getOwnPropertyNames(c).forEach(function (a) { f += '<param name="' + a + '" value="' + c[a] + '" />' }), d = (0, x.assign)({ data: a, width: "100%", height: "100%" }, d), Object.getOwnPropertyNames(d).forEach(function (a) { g += a + '="' + d[a] + '" ' }), '<object type="application/x-shockwave-flash" ' + g + ">" + f + "</object>" }, (0, s["default"])(z), u["default"].registerComponent("Flash", z), l["default"].registerTech("Flash", z), c["default"] = z }, { 5: 5, 58: 58, 62: 62, 81: 81, 88: 88, 90: 90, 92: 92, 95: 95 }], 60: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { return a.raw = b, a } function g(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function h(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function i(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var j = f(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]), k = a(62), l = e(k), m = a(5), n = e(m), o = a(81), p = d(o), q = a(92), r = d(q), s = a(83), t = d(s), u = a(86), v = e(u), w = a(98), x = e(w), y = a(78), z = d(y), A = a(94), B = e(A), C = a(95), D = e(C), E = a(88), F = a(87), G = e(F), H = a(91), I = e(H), J = function (a) { function b(c, d) { g(this, b); var e = h(this, a.call(this, c, d)), f = c.source, i = !1; if (f && (e.el_.currentSrc !== f.src || c.tag && 3 === c.tag.initNetworkState_) ? e.setSource(f) : e.handleLateInit_(e.el_), e.el_.hasChildNodes()) { for (var k = e.el_.childNodes, l = k.length, m = []; l--;) { var n = k[l]; "track" === n.nodeName.toLowerCase() && (e.featuresNativeTextTracks ? (e.remoteTextTrackEls().addTrackElement_(n), e.remoteTextTracks().addTrack_(n.track), i || e.el_.hasAttribute("crossorigin") || !r.isCrossOrigin(n.src) || (i = !0)) : m.push(n)) } for (var o = 0; o < m.length; o++)e.el_.removeChild(m[o]) } return ["audio", "video"].forEach(function (a) { var b = e.el()[a + "Tracks"], c = e[a + "Tracks"](), d = (0, I["default"])(a); e["featuresNative" + d + "Tracks"] && b && b.addEventListener && (e["handle" + d + "TrackChange_"] = function (a) { c.trigger({ type: "change", target: c, currentTarget: c, srcElement: c }) }, e["handle" + d + "TrackAdd_"] = function (a) { return c.addTrack(a.track) }, e["handle" + d + "TrackRemove_"] = function (a) { return c.removeTrack(a.track) }, b.addEventListener("change", e["handle" + d + "TrackChange_"]), b.addEventListener("addtrack", e["handle" + d + "TrackAdd_"]), b.addEventListener("removetrack", e["handle" + d + "TrackRemove_"]), e["removeOld" + d + "Tracks_"] = function (a) { return e.removeOldTracks_(c, b) }, e.on("loadstart", e["removeOld" + d + "Tracks_"])) }), e.featuresNativeTextTracks && (i && v["default"].warn((0, x["default"])(j)), e.handleTextTrackChange_ = t.bind(e, e.handleTextTrackChange), e.handleTextTrackAdd_ = t.bind(e, e.handleTextTrackAdd), e.handleTextTrackRemove_ = t.bind(e, e.handleTextTrackRemove), e.proxyNativeTextTracks_()), (z.TOUCH_ENABLED || z.IS_IPHONE || z.IS_NATIVE_ANDROID) && c.nativeControlsForTouch === !0 && e.setControls(!0), e.proxyWebkitFullscreen_(), e.triggerReady(), e } return i(b, a), b.prototype.dispose = function () { var c = this;["audio", "video", "text"].forEach(function (a) { var b = (0, I["default"])(a), d = c.el_[a + "Tracks"]; d && d.removeEventListener && (d.removeEventListener("change", c["handle" + b + "TrackChange_"]), d.removeEventListener("addtrack", c["handle" + b + "TrackAdd_"]), d.removeEventListener("removetrack", c["handle" + b + "TrackRemove_"])), d && c.off("loadstart", c["removeOld" + b + "Tracks_"]) }), b.disposeMediaElement(this.el_), a.prototype.dispose.call(this) }, b.prototype.createEl = function () { var a = this.options_.tag; if (!a || !this.options_.playerElIngest && !this.movingMediaElementInDOM) { if (a) { var c = a.cloneNode(!0); a.parentNode && a.parentNode.insertBefore(c, a), b.disposeMediaElement(a), a = c } else { a = B["default"].createElement("video"); var d = this.options_.tag && p.getElAttributes(this.options_.tag), e = (0, G["default"])({}, d); z.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete e.controls, p.setElAttributes(a, (0, E.assign)(e, { id: this.options_.techId, "class": "vjs-tech" })) } a.playerId = this.options_.playerId } for (var f = ["autoplay", "preload", "loop", "muted"], g = f.length - 1; g >= 0; g--) { var h = f[g], i = {}; "undefined" != typeof this.options_[h] && (i[h] = this.options_[h]), p.setElAttributes(a, i) } return a }, b.prototype.handleLateInit_ = function (a) { if (0 !== a.networkState && 3 !== a.networkState) { if (0 === a.readyState) { var b = !1, c = function () { b = !0 }; this.on("loadstart", c); var d = function () { b || this.trigger("loadstart") }; return this.on("loadedmetadata", d), void this.ready(function () { this.off("loadstart", c), this.off("loadedmetadata", d), b || this.trigger("loadstart") }) } var e = ["loadstart"]; e.push("loadedmetadata"), a.readyState >= 2 && e.push("loadeddata"), a.readyState >= 3 && e.push("canplay"), a.readyState >= 4 && e.push("canplaythrough"), this.ready(function () { e.forEach(function (a) { this.trigger(a) }, this) }) } }, b.prototype.proxyNativeTextTracks_ = function () { var a = this.el().textTracks; if (a) { for (var b = 0; b < a.length; b++)this.textTracks().addTrack_(a[b]); a.addEventListener && (a.addEventListener("change", this.handleTextTrackChange_), a.addEventListener("addtrack", this.handleTextTrackAdd_), a.addEventListener("removetrack", this.handleTextTrackRemove_)), this.on("loadstart", this.removeOldTextTracks_) } }, b.prototype.handleTextTrackChange = function (a) { var b = this.textTracks(); this.textTracks().trigger({ type: "change", target: b, currentTarget: b, srcElement: b }) }, b.prototype.handleTextTrackAdd = function (a) { this.textTracks().addTrack_(a.track) }, b.prototype.handleTextTrackRemove = function (a) { this.textTracks().removeTrack_(a.track) }, b.prototype.removeOldTracks_ = function (a, b) { var c = []; if (b) { for (var d = 0; d < a.length; d++) { for (var e = a[d], f = !1, g = 0; g < b.length; g++)if (b[g] === e) { f = !0; break } f || c.push(e) } for (var h = 0; h < c.length; h++) { var i = c[h]; a.removeTrack_(i) } } }, b.prototype.removeOldTextTracks_ = function (a) { var b = this.textTracks(), c = this.el().textTracks; this.removeOldTracks_(b, c) }, b.prototype.play = function () { var a = this.el_.play(); void 0 !== a && "function" == typeof a.then && a.then(null, function (a) { }) }, b.prototype.setCurrentTime = function (a) { try { this.el_.currentTime = a } catch (b) { (0, v["default"])(b, "Video is not ready. (Video.js)") } }, b.prototype.duration = function () { var a = this; if (this.el_.duration === 1 / 0 && z.IS_ANDROID && z.IS_CHROME && 0 === this.el_.currentTime) { var b = function c() { a.el_.currentTime > 0 && (a.el_.duration === 1 / 0 && a.trigger("durationchange"), a.off("timeupdate", c)) }; return this.on("timeupdate", b), NaN } return this.el_.duration || NaN }, b.prototype.width = function () { return this.el_.offsetWidth }, b.prototype.height = function () { return this.el_.offsetHeight }, b.prototype.proxyWebkitFullscreen_ = function () { var a = this; if ("webkitDisplayingFullscreen" in this.el_) { var b = function () { this.trigger("fullscreenchange", { isFullscreen: !1 }) }, c = function () { this.one("webkitendfullscreen", b), this.trigger("fullscreenchange", { isFullscreen: !0 }) }; this.on("webkitbeginfullscreen", c), this.on("dispose", function () { a.off("webkitbeginfullscreen", c), a.off("webkitendfullscreen", b) }) } }, b.prototype.supportsFullScreen = function () { if ("function" == typeof this.el_.webkitEnterFullScreen) { var a = D["default"].navigator && D["default"].navigator.userAgent || ""; if (/Android/.test(a) || !/Chrome|Mac OS X 10.5/.test(a)) return !0 } return !1 }, b.prototype.enterFullScreen = function () { var a = this.el_; a.paused && a.networkState <= a.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () { a.pause(), a.webkitEnterFullScreen() }, 0)) : a.webkitEnterFullScreen() }, b.prototype.exitFullScreen = function () { this.el_.webkitExitFullScreen() }, b.prototype.src = function (a) { if (void 0 === a) return this.el_.src; this.setSrc(a) }, b.prototype.reset = function () { b.resetMediaElement(this.el_) }, b.prototype.currentSrc = function () { return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc }, b.prototype.setControls = function (a) { this.el_.controls = !!a }, b.prototype.addTextTrack = function (b, c, d) { return this.featuresNativeTextTracks ? this.el_.addTextTrack(b, c, d) : a.prototype.addTextTrack.call(this, b, c, d) }, b.prototype.createRemoteTextTrack = function (b) { if (!this.featuresNativeTextTracks) return a.prototype.createRemoteTextTrack.call(this, b); var c = B["default"].createElement("track"); return b.kind && (c.kind = b.kind), b.label && (c.label = b.label), (b.language || b.srclang) && (c.srclang = b.language || b.srclang), b["default"] && (c["default"] = b["default"]), b.id && (c.id = b.id), b.src && (c.src = b.src), c }, b.prototype.addRemoteTextTrack = function (b, c) { var d = a.prototype.addRemoteTextTrack.call(this, b, c); return this.featuresNativeTextTracks && this.el().appendChild(d), d }, b.prototype.removeRemoteTextTrack = function (b) { if (a.prototype.removeRemoteTextTrack.call(this, b), this.featuresNativeTextTracks) for (var c = this.$$("track"), d = c.length; d--;)b !== c[d] && b !== c[d].track || this.el().removeChild(c[d]) }, b }(l["default"]); if (p.isReal()) { J.TEST_VID = B["default"].createElement("video"); var K = B["default"].createElement("track"); K.kind = "captions", K.srclang = "en", K.label = "English", J.TEST_VID.appendChild(K) } J.isSupported = function () { try { J.TEST_VID.volume = .5 } catch (a) { return !1 } return !(!J.TEST_VID || !J.TEST_VID.canPlayType) }, J.canControlVolume = function () { try { var a = J.TEST_VID.volume; return J.TEST_VID.volume = a / 2 + .1, a !== J.TEST_VID.volume } catch (b) { return !1 } }, J.canControlPlaybackRate = function () { if (z.IS_ANDROID && z.IS_CHROME) return !1; try { var a = J.TEST_VID.playbackRate; return J.TEST_VID.playbackRate = a / 2 + .1, a !== J.TEST_VID.playbackRate } catch (b) { return !1 } }, J.supportsNativeTextTracks = function () { return z.IS_ANY_SAFARI }, J.supportsNativeVideoTracks = function () { return !(!J.TEST_VID || !J.TEST_VID.videoTracks) }, J.supportsNativeAudioTracks = function () { return !(!J.TEST_VID || !J.TEST_VID.audioTracks) }, J.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], J.prototype.featuresVolumeControl = J.canControlVolume(), J.prototype.featuresPlaybackRate = J.canControlPlaybackRate(), J.prototype.movingMediaElementInDOM = !z.IS_IOS, J.prototype.featuresFullscreenResize = !0, J.prototype.featuresProgressEvents = !0, J.prototype.featuresTimeupdateEvents = !0, J.prototype.featuresNativeTextTracks = J.supportsNativeTextTracks(), J.prototype.featuresNativeVideoTracks = J.supportsNativeVideoTracks(), J.prototype.featuresNativeAudioTracks = J.supportsNativeAudioTracks(); var L = J.TEST_VID && J.TEST_VID.constructor.prototype.canPlayType, M = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, N = /^video\/mp4/i; J.patchCanPlayType = function () { z.ANDROID_VERSION >= 4 && !z.IS_FIREFOX ? J.TEST_VID.constructor.prototype.canPlayType = function (a) { return a && M.test(a) ? "maybe" : L.call(this, a) } : z.IS_OLD_ANDROID && (J.TEST_VID.constructor.prototype.canPlayType = function (a) { return a && N.test(a) ? "maybe" : L.call(this, a) }) }, J.unpatchCanPlayType = function () { var a = J.TEST_VID.constructor.prototype.canPlayType; return J.TEST_VID.constructor.prototype.canPlayType = L, a }, J.patchCanPlayType(), J.disposeMediaElement = function (a) { if (a) { for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();)a.removeChild(a.firstChild); a.removeAttribute("src"), "function" == typeof a.load && function () { try { a.load() } catch (b) { } }() } }, J.resetMediaElement = function (a) { if (a) { for (var b = a.querySelectorAll("source"), c = b.length; c--;)a.removeChild(b[c]); a.removeAttribute("src"), "function" == typeof a.load && function () { try { a.load() } catch (b) { } }() } }, ["paused", "currentTime", "buffered", "volume", "muted", "poster", "preload", "autoplay", "controls", "loop", "error", "seeking", "seekable", "ended", "defaultMuted", "playbackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (a) { J.prototype[a] = function () { return this.el_[a] } }), ["volume", "muted", "src", "poster", "preload", "autoplay", "loop", "playbackRate"].forEach(function (a) { J.prototype["set" + (0, I["default"])(a)] = function (b) { this.el_[a] = b } }), ["pause", "load"].forEach(function (a) { J.prototype[a] = function () { return this.el_[a]() } }), l["default"].withSourceHandlers(J), J.nativeSourceHandler = {}, J.nativeSourceHandler.canPlayType = function (a) { try { return J.TEST_VID.canPlayType(a) } catch (b) { return "" } }, J.nativeSourceHandler.canHandleSource = function (a, b) { if (a.type) return J.nativeSourceHandler.canPlayType(a.type); if (a.src) { var c = r.getFileExtension(a.src); return J.nativeSourceHandler.canPlayType("video/" + c) } return "" }, J.nativeSourceHandler.handleSource = function (a, b, c) { b.setSrc(a.src) }, J.nativeSourceHandler.dispose = function () { }, J.registerSourceHandler(J.nativeSourceHandler), n["default"].registerComponent("Html5", J), l["default"].registerTech("Html5", J), c["default"] = J }, { 5: 5, 62: 62, 78: 78, 81: 81, 83: 83, 86: 86, 87: 87, 88: 88, 91: 91, 92: 92, 94: 94, 95: 95, 98: 98 }], 61: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function f(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function g(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var h = a(5), i = d(h), j = a(62), k = d(j), l = a(91), m = d(l), n = function (a) { function b(c, d, g) { e(this, b); var h = f(this, a.call(this, c, d, g)); if (d.playerOptions.sources && 0 !== d.playerOptions.sources.length) c.src(d.playerOptions.sources); else for (var j = 0, l = d.playerOptions.techOrder; j < l.length; j++) { var n = (0, m["default"])(l[j]), o = k["default"].getTech(n); if (n || (o = i["default"].getComponent(n)), o && o.isSupported()) { c.loadTech_(n); break } } return h } return g(b, a), b }(i["default"]); i["default"].registerComponent("MediaLoader", n), c["default"] = n }, { 5: 5, 62: 62, 91: 91 }], 62: [function (a, b, c) {
      "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } function i(a, b, c, d) { var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, f = a.textTracks(); e.kind = b, c && (e.label = c), d && (e.language = d), e.tech = a; var g = new s["default"](e); return f.addTrack_(g), g } c.__esModule = !0; var j = a(5), k = e(j), l = a(66), m = e(l), n = a(65), o = e(n), p = a(87), q = e(p), r = a(72), s = e(r), t = a(70), u = e(t), v = a(76), w = e(v), x = a(63), y = e(x), z = a(83), A = d(z), B = a(86), C = e(B), D = a(90), E = a(79), F = a(46), G = e(F), H = a(95), I = e(H), J = a(94), K = e(J), L = a(88), M = function (b) {
        function c() { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () { }; f(this, c), a.reportTouchActivity = !1; var e = g(this, b.call(this, null, a, d)); return e.hasStarted_ = !1, e.on("playing", function () { this.hasStarted_ = !0 }), e.on("loadstart", function () { this.hasStarted_ = !1 }), e.textTracks_ = a.textTracks, e.videoTracks_ = a.videoTracks, e.audioTracks_ = a.audioTracks, e.featuresProgressEvents || e.manualProgressOn(), e.featuresTimeupdateEvents || e.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (b) { a["native" + b + "Tracks"] === !1 && (e["featuresNative" + b + "Tracks"] = !1) }), a.nativeCaptions === !1 && (e.featuresNativeTextTracks = !1), e.featuresNativeTextTracks || e.emulateTextTracks(), e.autoRemoteTextTracks_ = new u["default"], e.initTextTrackListeners(), e.initTrackListeners(), a.nativeControlsForTouch || e.emitTapEvents(), e.constructor && (e.name_ = e.constructor.name || "Unknown Tech"), e } return h(c, b), c.prototype.manualProgressOn = function () { this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress) }, c.prototype.manualProgressOff = function () { this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange) }, c.prototype.trackProgress = function (a) { this.stopTrackingProgress(), this.progressInterval = this.setInterval(A.bind(this, function () { var a = this.bufferedPercent(); this.bufferedPercent_ !== a && this.trigger("progress"), this.bufferedPercent_ = a, 1 === a && this.stopTrackingProgress() }), 500) }, c.prototype.onDurationChange = function (a) { this.duration_ = this.duration() }, c.prototype.buffered = function () { return (0, D.createTimeRange)(0, 0) }, c.prototype.bufferedPercent = function () { return (0, E.bufferedPercent)(this.buffered(), this.duration_) }, c.prototype.stopTrackingProgress = function () { this.clearInterval(this.progressInterval) }, c.prototype.manualTimeUpdatesOn = function () { this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime) }, c.prototype.manualTimeUpdatesOff = function () { this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime) }, c.prototype.trackCurrentTime = function () { this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () { this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, 250) }, c.prototype.stopTrackingCurrentTime = function () { this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, c.prototype.dispose = function () { this.clearTracks(["audio", "video", "text"]), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), b.prototype.dispose.call(this) }, c.prototype.clearTracks = function (a) { var b = this; a = [].concat(a), a.forEach(function (a) { for (var c = b[a + "Tracks"]() || [], d = c.length; d--;) { var e = c[d]; "text" === a && b.removeRemoteTextTrack(e), c.removeTrack_(e) } }) }, c.prototype.cleanupAutoTextTracks = function () { for (var a = this.autoRemoteTextTracks_ || [], b = a.length; b--;) { var c = a[b]; this.removeRemoteTextTrack(c) } }, c.prototype.reset = function () { }, c.prototype.error = function (a) { return void 0 !== a && (this.error_ = new G["default"](a), this.trigger("error")), this.error_ }, c.prototype.played = function () { return this.hasStarted_ ? (0, D.createTimeRange)(0, 0) : (0, D.createTimeRange)() }, c.prototype.setCurrentTime = function () { this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, c.prototype.initTextTrackListeners = function () { var a = A.bind(this, function () { this.trigger("texttrackchange") }), b = this.textTracks(); b && (b.addEventListener("removetrack", a), b.addEventListener("addtrack", a), this.on("dispose", A.bind(this, function () { b.removeEventListener("removetrack", a), b.removeEventListener("addtrack", a) }))) }, c.prototype.initTrackListeners = function () {
          var a = this;["video", "audio"].forEach(function (b) {
            var c = function () { a.trigger(b + "trackchange") }, d = a[b + "Tracks"](); d.addEventListener("removetrack", c),
              d.addEventListener("addtrack", c), a.on("dispose", function () { d.removeEventListener("removetrack", c), d.removeEventListener("addtrack", c) })
          })
        }, c.prototype.addWebVttScript_ = function () { var b = this; if (!I["default"].WebVTT) if (K["default"].body.contains(this.el())) { var c = a(105); if (!this.options_["vtt.js"] && (0, L.isPlain)(c) && Object.keys(c).length > 0) return void this.trigger("vttjsloaded"); var d = K["default"].createElement("script"); d.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.3/vtt.min.js", d.onload = function () { b.trigger("vttjsloaded") }, d.onerror = function () { b.trigger("vttjserror") }, this.on("dispose", function () { d.onload = null, d.onerror = null }), I["default"].WebVTT = !0, this.el().parentNode.appendChild(d) } else this.ready(this.addWebVttScript_) }, c.prototype.emulateTextTracks = function () { var a = this, b = this.textTracks(); if (b) { var c = this.remoteTextTracks(), d = function (a) { return b.addTrack_(a.track) }, e = function (a) { return b.removeTrack_(a.track) }; c.on("addtrack", d), c.on("removetrack", e), this.addWebVttScript_(); var f = function () { return a.trigger("texttrackchange") }, g = function () { f(); for (var a = 0; a < b.length; a++) { var c = b[a]; c.removeEventListener("cuechange", f), "showing" === c.mode && c.addEventListener("cuechange", f) } }; g(), b.addEventListener("change", g), b.addEventListener("addtrack", g), b.addEventListener("removetrack", g), this.on("dispose", function () { c.off("addtrack", d), c.off("removetrack", e), b.removeEventListener("change", g), b.removeEventListener("addtrack", g), b.removeEventListener("removetrack", g); for (var a = 0; a < b.length; a++) { b[a].removeEventListener("cuechange", f) } }) } }, c.prototype.videoTracks = function () { return this.videoTracks_ = this.videoTracks_ || new w["default"], this.videoTracks_ }, c.prototype.audioTracks = function () { return this.audioTracks_ = this.audioTracks_ || new y["default"], this.audioTracks_ }, c.prototype.textTracks = function () { return this.textTracks_ = this.textTracks_ || new u["default"], this.textTracks_ }, c.prototype.remoteTextTracks = function () { return this.remoteTextTracks_ = this.remoteTextTracks_ || new u["default"], this.remoteTextTracks_ }, c.prototype.remoteTextTrackEls = function () { return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new o["default"], this.remoteTextTrackEls_ }, c.prototype.addTextTrack = function (a, b, c) { if (!a) throw new Error("TextTrack kind is required but was not provided"); return i(this, a, b, c) }, c.prototype.createRemoteTextTrack = function (a) { var b = (0, q["default"])(a, { tech: this }); return new m["default"](b) }, c.prototype.addRemoteTextTrack = function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, b = arguments[1], c = this.createRemoteTextTrack(a); return b !== !0 && b !== !1 && (C["default"].warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), b = !0), this.remoteTextTrackEls().addTrackElement_(c), this.remoteTextTracks().addTrack_(c.track), b !== !0 && this.autoRemoteTextTracks_.addTrack_(c.track), c }, c.prototype.removeRemoteTextTrack = function (a) { var b = this.remoteTextTrackEls().getTrackElementByTrack_(a); this.remoteTextTrackEls().removeTrackElement_(b), this.remoteTextTracks().removeTrack_(a), this.autoRemoteTextTracks_.removeTrack_(a) }, c.prototype.setPoster = function () { }, c.prototype.canPlayType = function () { return "" }, c.isTech = function (a) { return a.prototype instanceof c || a instanceof c || a === c }, c.registerTech = function (a, b) { if (c.techs_ || (c.techs_ = {}), !c.isTech(b)) throw new Error("Tech " + a + " must be a Tech"); return c.techs_[a] = b, b }, c.getTech = function (a) { return c.techs_ && c.techs_[a] ? c.techs_[a] : I["default"] && I["default"].videojs && I["default"].videojs[a] ? (C["default"].warn("The " + a + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), I["default"].videojs[a]) : void 0 }, c
      }(k["default"]); M.prototype.textTracks_, M.prototype.audioTracks_, M.prototype.videoTracks_, M.prototype.featuresVolumeControl = !0, M.prototype.featuresFullscreenResize = !1, M.prototype.featuresPlaybackRate = !1, M.prototype.featuresProgressEvents = !1, M.prototype.featuresTimeupdateEvents = !1, M.prototype.featuresNativeTextTracks = !1, M.withSourceHandlers = function (a) { a.registerSourceHandler = function (b, c) { var d = a.sourceHandlers; d || (d = a.sourceHandlers = []), void 0 === c && (c = d.length), d.splice(c, 0, b) }, a.canPlayType = function (b) { for (var c = a.sourceHandlers || [], d = void 0, e = 0; e < c.length; e++)if (d = c[e].canPlayType(b)) return d; return "" }, a.selectSourceHandler = function (b, c) { for (var d = a.sourceHandlers || [], e = 0; e < d.length; e++)if (d[e].canHandleSource(b, c)) return d[e]; return null }, a.canPlaySource = function (b, c) { var d = a.selectSourceHandler(b, c); return d ? d.canHandleSource(b, c) : "" }, ["seekable", "duration"].forEach(function (a) { var b = this[a]; "function" == typeof b && (this[a] = function () { return this.sourceHandler_ && this.sourceHandler_[a] ? this.sourceHandler_[a].apply(this.sourceHandler_, arguments) : b.apply(this, arguments) }) }, a.prototype), a.prototype.setSource = function (b) { var c = a.selectSourceHandler(b, this.options_); return c || (a.nativeSourceHandler ? c = a.nativeSourceHandler : C["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), c !== a.nativeSourceHandler && (this.currentSource_ = b, this.off(this.el_, "loadstart", a.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", a.prototype.successiveLoadStartListener_), this.one(this.el_, "loadstart", a.prototype.firstLoadStartListener_)), this.sourceHandler_ = c.handleSource(b, this, this.options_), this.on("dispose", this.disposeSourceHandler), this }, a.prototype.firstLoadStartListener_ = function () { this.one(this.el_, "loadstart", a.prototype.successiveLoadStartListener_) }, a.prototype.successiveLoadStartListener_ = function () { this.disposeSourceHandler(), this.one(this.el_, "loadstart", a.prototype.successiveLoadStartListener_) }, a.prototype.disposeSourceHandler = function () { this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.off(this.el_, "loadstart", a.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", a.prototype.successiveLoadStartListener_), this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null) } }, k["default"].registerComponent("Tech", M), k["default"].registerComponent("MediaTechController", M), M.registerTech("Tech", M), c["default"] = M
    }, { 105: 105, 46: 46, 5: 5, 63: 63, 65: 65, 66: 66, 70: 70, 72: 72, 76: 76, 79: 79, 83: 83, 86: 86, 87: 87, 88: 88, 90: 90, 94: 94, 95: 95 }], 63: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(74), j = e(i), k = a(78), l = d(k), m = a(94), n = e(m), o = function (a, b) { for (var c = 0; c < a.length; c++)b.id !== a[c].id && (a[c].enabled = !1) }, p = function (a) { function b() { var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; f(this, b); for (var h = void 0, i = e.length - 1; i >= 0; i--)if (e[i].enabled) { o(e, e[i]); break } if (l.IS_IE8) { h = n["default"].createElement("custom"); for (var k in j["default"].prototype) "constructor" !== k && (h[k] = j["default"].prototype[k]); for (var m in b.prototype) "constructor" !== m && (h[m] = b.prototype[m]) } return h = c = g(this, a.call(this, e, h)), h.changing_ = !1, d = h, g(c, d) } return h(b, a), b.prototype.addTrack_ = function (b) { var c = this; b.enabled && o(this, b), a.prototype.addTrack_.call(this, b), b.addEventListener && b.addEventListener("enabledchange", function () { c.changing_ || (c.changing_ = !0, o(c, b), c.changing_ = !1, c.trigger("change")) }) }, b.prototype.addTrack = function (a) { this.addTrack_(a) }, b.prototype.removeTrack = function (b) { a.prototype.removeTrack_.call(this, b) }, b }(j["default"]); c["default"] = p }, { 74: 74, 78: 78, 94: 94 }], 64: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(73), j = a(75), k = e(j), l = a(87), m = e(l), n = a(78), o = d(n), p = function (a) { function b() { var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; f(this, b); var h = (0, m["default"])(e, { kind: i.AudioTrackKind[e.kind] || "" }), j = c = g(this, a.call(this, h)), k = !1; if (o.IS_IE8) for (var l in b.prototype) "constructor" !== l && (j[l] = b.prototype[l]); return Object.defineProperty(j, "enabled", { get: function () { return k }, set: function (a) { "boolean" == typeof a && a !== k && (k = a, this.trigger("enabledchange")) } }), h.enabled && (j.enabled = h.enabled), j.loaded_ = !0, d = j, g(c, d) } return h(b, a), b }(k["default"]); c["default"] = p }, { 73: 73, 75: 75, 78: 78, 87: 87 }], 65: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } c.__esModule = !0; var g = a(78), h = e(g), i = a(94), j = d(i), k = function () { function a() { var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; f(this, a); var c = this; if (h.IS_IE8) { c = j["default"].createElement("custom"); for (var d in a.prototype) "constructor" !== d && (c[d] = a.prototype[d]) } c.trackElements_ = [], Object.defineProperty(c, "length", { get: function () { return this.trackElements_.length } }); for (var e = 0, g = b.length; e < g; e++)c.addTrackElement_(b[e]); if (h.IS_IE8) return c } return a.prototype.addTrackElement_ = function (a) { var b = this.trackElements_.length; "" + b in this || Object.defineProperty(this, b, { get: function () { return this.trackElements_[b] } }), this.trackElements_.indexOf(a) === -1 && this.trackElements_.push(a) }, a.prototype.getTrackElementByTrack_ = function (a) { for (var b = void 0, c = 0, d = this.trackElements_.length; c < d; c++)if (a === this.trackElements_[c].track) { b = this.trackElements_[c]; break } return b }, a.prototype.removeTrackElement_ = function (a) { for (var b = 0, c = this.trackElements_.length; b < c; b++)if (a === this.trackElements_[b]) { this.trackElements_.splice(b, 1); break } }, a }(); c["default"] = k }, { 78: 78, 94: 94 }], 66: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(78), j = e(i), k = a(94), l = d(k), m = a(42), n = d(m), o = a(72), p = d(o), q = function (a) { function b() { var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; f(this, b); var d = g(this, a.call(this)), e = void 0, h = d; if (j.IS_IE8) { h = l["default"].createElement("custom"); for (var i in b.prototype) "constructor" !== i && (h[i] = b.prototype[i]) } var k = new p["default"](c); if (h.kind = k.kind, h.src = k.src, h.srclang = k.language, h.label = k.label, h["default"] = k["default"], Object.defineProperty(h, "readyState", { get: function () { return e } }), Object.defineProperty(h, "track", { get: function () { return k } }), e = 0, k.addEventListener("loadeddata", function () { e = 2, h.trigger({ type: "load", target: h }) }), j.IS_IE8) { var m; return m = h, g(d, m) } return d } return h(b, a), b }(n["default"]); q.prototype.allowedEvents_ = { load: "load" }, q.NONE = 0, q.LOADING = 1, q.LOADED = 2, q.ERROR = 3, c["default"] = q }, { 42: 42, 72: 72, 78: 78, 94: 94 }], 67: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } c.__esModule = !0; var g = a(78), h = e(g), i = a(94), j = d(i), k = function () { function a(b) { f(this, a); var c = this; if (h.IS_IE8) { c = j["default"].createElement("custom"); for (var d in a.prototype) "constructor" !== d && (c[d] = a.prototype[d]) } if (a.prototype.setCues_.call(c, b), Object.defineProperty(c, "length", { get: function () { return this.length_ } }), h.IS_IE8) return c } return a.prototype.setCues_ = function (a) { var b = this.length || 0, c = 0, d = a.length; this.cues_ = a, this.length_ = a.length; var e = function (a) { "" + a in this || Object.defineProperty(this, "" + a, { get: function () { return this.cues_[a] } }) }; if (b < d) for (c = b; c < d; c++)e.call(this, c) }, a.prototype.getCueById = function (a) { for (var b = null, c = 0, d = this.length; c < d; c++) { var e = this[c]; if (e.id === a) { b = e; break } } return b }, a }(); c["default"] = k }, { 78: 78, 94: 94 }], 68: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } function i(a, b) { return "rgba(" + parseInt(a[1] + a[1], 16) + "," + parseInt(a[2] + a[2], 16) + "," + parseInt(a[3] + a[3], 16) + "," + b + ")" } function j(a, b, c) { try { a.style[b] = c } catch (d) { return } } c.__esModule = !0; var k = a(5), l = e(k), m = a(83), n = d(m), o = a(95), p = e(o), q = { monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace', monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif' }, r = function (a) { function b(c, d, e) { f(this, b); var h = g(this, a.call(this, c, d, e)); return c.on("loadstart", n.bind(h, h.toggleDisplay)), c.on("texttrackchange", n.bind(h, h.updateDisplay)), c.ready(n.bind(h, function () { if (c.tech_ && c.tech_.featuresNativeTextTracks) return void this.hide(); c.on("fullscreenchange", n.bind(this, this.updateDisplay)); for (var a = this.options_.playerOptions.tracks || [], b = 0; b < a.length; b++)this.player_.addRemoteTextTrack(a[b], !0); var d = { captions: 1, subtitles: 1 }, e = this.player_.textTracks(), f = void 0, g = void 0; if (e) { for (var h = 0; h < e.length; h++) { var i = e[h]; i["default"] && ("descriptions" !== i.kind || f ? i.kind in d && !g && (g = i) : f = i) } g ? g.mode = "showing" : f && (f.mode = "showing") } })), h } return h(b, a), b.prototype.toggleDisplay = function () { this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show() }, b.prototype.createEl = function () { return a.prototype.createEl.call(this, "div", { className: "vjs-text-track-display" }, { "aria-live": "off", "aria-atomic": "true" }) }, b.prototype.clearDisplay = function () { "function" == typeof p["default"].WebVTT && p["default"].WebVTT.processCues(p["default"], [], this.el_) }, b.prototype.updateDisplay = function () { var a = this.player_.textTracks(); if (this.clearDisplay(), a) { for (var b = null, c = null, d = a.length; d--;) { var e = a[d]; "showing" === e.mode && ("descriptions" === e.kind ? b = e : c = e) } c ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(c)) : b && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(b)) } }, b.prototype.updateForTrack = function (a) { if ("function" == typeof p["default"].WebVTT && a.activeCues) { for (var b = this.player_.textTrackSettings.getValues(), c = [], d = 0; d < a.activeCues.length; d++)c.push(a.activeCues[d]); p["default"].WebVTT.processCues(p["default"], c, this.el_); for (var e = c.length; e--;) { var f = c[e]; if (f) { var g = f.displayState; if (b.color && (g.firstChild.style.color = b.color), b.textOpacity && j(g.firstChild, "color", i(b.color || "#fff", b.textOpacity)), b.backgroundColor && (g.firstChild.style.backgroundColor = b.backgroundColor), b.backgroundOpacity && j(g.firstChild, "backgroundColor", i(b.backgroundColor || "#000", b.backgroundOpacity)), b.windowColor && (b.windowOpacity ? j(g, "backgroundColor", i(b.windowColor, b.windowOpacity)) : g.style.backgroundColor = b.windowColor), b.edgeStyle && ("dropshadow" === b.edgeStyle ? g.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === b.edgeStyle ? g.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === b.edgeStyle ? g.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === b.edgeStyle && (g.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), b.fontPercent && 1 !== b.fontPercent) { var h = p["default"].parseFloat(g.style.fontSize); g.style.fontSize = h * b.fontPercent + "px", g.style.height = "auto", g.style.top = "auto", g.style.bottom = "2px" } b.fontFamily && "default" !== b.fontFamily && ("small-caps" === b.fontFamily ? g.firstChild.style.fontVariant = "small-caps" : g.firstChild.style.fontFamily = q[b.fontFamily]) } } } }, b }(l["default"]); l["default"].registerComponent("TextTrackDisplay", r), c["default"] = r }, { 5: 5, 83: 83, 95: 95 }], 69: [function (a, b, c) { "use strict"; c.__esModule = !0; var d = function (a) { return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (b, c, d) { return a[c] && (b[c] = a[c]), b }, { cues: a.cues && Array.prototype.map.call(a.cues, function (a) { return { startTime: a.startTime, endTime: a.endTime, text: a.text, id: a.id } }) }) }, e = function (a) { var b = a.$$("track"), c = Array.prototype.map.call(b, function (a) { return a.track }); return Array.prototype.map.call(b, function (a) { var b = d(a.track); return a.src && (b.src = a.src), b }).concat(Array.prototype.filter.call(a.textTracks(), function (a) { return c.indexOf(a) === -1 }).map(d)) }, f = function (a, b) { return a.forEach(function (a) { var c = b.addRemoteTextTrack(a).track; !a.src && a.cues && a.cues.forEach(function (a) { return c.addCue(a) }) }), b.textTracks() }; c["default"] = { textTracksToJson: e, jsonToTextTracks: f, trackToJson_: d } }, {}], 70: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(74), j = e(i), k = a(83), l = d(k), m = a(78), n = d(m), o = a(94), p = e(o), q = function (a) { function b() { var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; f(this, b); var h = void 0; if (n.IS_IE8) { h = p["default"].createElement("custom"); for (var i in j["default"].prototype) "constructor" !== i && (h[i] = j["default"].prototype[i]); for (var k in b.prototype) "constructor" !== k && (h[k] = b.prototype[k]) } return h = c = g(this, a.call(this, e, h)), d = h, g(c, d) } return h(b, a), b.prototype.addTrack_ = function (b) { a.prototype.addTrack_.call(this, b), b.addEventListener("modechange", l.bind(this, function () { this.trigger("change") })) }, b }(j["default"]); c["default"] = q }, { 74: 74, 78: 78, 83: 83, 94: 94 }], 71: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } function i(a, b) { if (b && (a = b(a)), a && "none" !== a) return a } function j(a, b) { return i(a.options[a.options.selectedIndex].value, b) } function k(a, b, c) { if (b) for (var d = 0; d < a.options.length; d++)if (i(a.options[d].value, c) === b) { a.selectedIndex = d; break } } c.__esModule = !0; var l = a(95), m = e(l), n = a(5), o = e(n), p = a(81), q = a(83), r = d(q), s = a(88), t = d(s), u = a(86), v = e(u), w = ["#000", "Black"], x = ["#00F", "Blue"], y = ["#0FF", "Cyan"], z = ["#0F0", "Green"], A = ["#F0F", "Magenta"], B = ["#F00", "Red"], C = ["#FFF", "White"], D = ["#FF0", "Yellow"], E = ["1", "Opaque"], F = ["0.5", "Semi-Transparent"], G = ["0", "Transparent"], H = { backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [w, C, B, z, x, D, A, y] }, backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Transparency", options: [E, F, G] }, color: { selector: ".vjs-fg-color > select", id: "captions-foreground-color-%s", label: "Color", options: [C, w, B, z, x, D, A, y] }, edgeStyle: { selector: ".vjs-edge-style > select", id: "%s", label: "Text Edge Style", options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]] }, fontFamily: { selector: ".vjs-font-family > select", id: "captions-font-family-%s", label: "Font Family", options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]] }, fontPercent: { selector: ".vjs-font-percent > select", id: "captions-font-size-%s", label: "Font Size", options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], "default": 2, parser: function (a) { return "1.00" === a ? null : Number(a) } }, textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Transparency", options: [E, F] }, windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color" }, windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Transparency", options: [G, F, E] } }; H.windowColor.options = H.backgroundColor.options; var I = function (a) { function b(c, d) { f(this, b); var e = g(this, a.call(this, c, d)); return e.setDefaults(), e.hide(), e.updateDisplay = r.bind(e, e.updateDisplay), void 0 === d.persistTextTrackSettings && (e.options_.persistTextTrackSettings = e.options_.playerOptions.persistTextTrackSettings), e.on(e.$(".vjs-done-button"), "click", function () { e.saveSettings(), e.hide() }), e.on(e.$(".vjs-default-button"), "click", function () { e.setDefaults(), e.updateDisplay() }), t.each(H, function (a) { e.on(e.$(a.selector), "change", e.updateDisplay) }), e.options_.persistTextTrackSettings && e.restoreSettings(), e } return h(b, a), b.prototype.createElSelect_ = function (a) { var b = this, c = H[a], d = c.id.replace("%s", this.id_); return [(0, p.createEl)("label", { className: "vjs-label", textContent: c.label }, { "for": d }), (0, p.createEl)("select", { id: d }, void 0, c.options.map(function (a) { return (0, p.createEl)("option", { textContent: b.localize(a[1]), value: a[0] }) }))] }, b.prototype.createElFgColor_ = function () { var a = (0, p.createEl)("legend", { textContent: this.localize("Text") }), b = this.createElSelect_("color"), c = (0, p.createEl)("span", { className: "vjs-text-opacity vjs-opacity" }, void 0, this.createElSelect_("textOpacity")); return (0, p.createEl)("fieldset", { className: "vjs-fg-color vjs-tracksetting" }, void 0, [a].concat(b, c)) }, b.prototype.createElBgColor_ = function () { var a = (0, p.createEl)("legend", { textContent: this.localize("Background") }), b = this.createElSelect_("backgroundColor"), c = (0, p.createEl)("span", { className: "vjs-bg-opacity vjs-opacity" }, void 0, this.createElSelect_("backgroundOpacity")); return (0, p.createEl)("fieldset", { className: "vjs-bg-color vjs-tracksetting" }, void 0, [a].concat(b, c)) }, b.prototype.createElWinColor_ = function () { var a = (0, p.createEl)("legend", { textContent: this.localize("Window") }), b = this.createElSelect_("windowColor"), c = (0, p.createEl)("span", { className: "vjs-window-opacity vjs-opacity" }, void 0, this.createElSelect_("windowOpacity")); return (0, p.createEl)("fieldset", { className: "vjs-window-color vjs-tracksetting" }, void 0, [a].concat(b, c)) }, b.prototype.createElColors_ = function () { return (0, p.createEl)("div", { className: "vjs-tracksettings-colors" }, void 0, [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()]) }, b.prototype.createElFont_ = function () { var a = (0, p.createEl)("div", { className: "vjs-font-percent vjs-tracksetting" }, void 0, this.createElSelect_("fontPercent")), b = (0, p.createEl)("div", { className: "vjs-edge-style vjs-tracksetting" }, void 0, this.createElSelect_("edgeStyle")), c = (0, p.createEl)("div", { className: "vjs-font-family vjs-tracksetting" }, void 0, this.createElSelect_("fontFamily")); return (0, p.createEl)("div", { className: "vjs-tracksettings-font" }, void 0, [a, b, c]) }, b.prototype.createElControls_ = function () { var a = (0, p.createEl)("button", { className: "vjs-default-button", textContent: this.localize("Defaults") }), b = (0, p.createEl)("button", { className: "vjs-done-button", textContent: "Done" }); return (0, p.createEl)("div", { className: "vjs-tracksettings-controls" }, void 0, [a, b]) }, b.prototype.createEl = function () { var a = (0, p.createEl)("div", { className: "vjs-tracksettings" }, void 0, [this.createElColors_(), this.createElFont_(), this.createElControls_()]), b = (0, p.createEl)("div", { className: "vjs-control-text", id: "TTsettingsDialogLabel-" + this.id_, textContent: "Caption Settings Dialog" }, { "aria-level": "1", role: "heading" }), c = (0, p.createEl)("div", { className: "vjs-control-text", id: "TTsettingsDialogDescription-" + this.id_, textContent: "Beginning of dialog window. Escape will cancel and close the window." }), d = (0, p.createEl)("div", void 0, { role: "document" }, [b, c, a]); return (0, p.createEl)("div", { className: "vjs-caption-settings vjs-modal-overlay", tabIndex: -1 }, { role: "dialog", "aria-labelledby": b.id, "aria-describedby": c.id }, d) }, b.prototype.getValues = function () { var a = this; return t.reduce(H, function (b, c, d) { var e = j(a.$(c.selector), c.parser); return void 0 !== e && (b[d] = e), b }, {}) }, b.prototype.setValues = function (a) { var b = this; t.each(H, function (c, d) { k(b.$(c.selector), a[d], c.parser) }) }, b.prototype.setDefaults = function () { var a = this; t.each(H, function (b) { var c = b.hasOwnProperty("default") ? b["default"] : 0; a.$(b.selector).selectedIndex = c }) }, b.prototype.restoreSettings = function () { var a = void 0; try { a = JSON.parse(m["default"].localStorage.getItem("vjs-text-track-settings")) } catch (b) { v["default"].warn(b) } a && this.setValues(a) }, b.prototype.saveSettings = function () { if (this.options_.persistTextTrackSettings) { var a = this.getValues(); try { Object.keys(a).length ? m["default"].localStorage.setItem("vjs-text-track-settings", JSON.stringify(a)) : m["default"].localStorage.removeItem("vjs-text-track-settings") } catch (b) { v["default"].warn(b) } } }, b.prototype.updateDisplay = function () { var a = this.player_.getChild("textTrackDisplay"); a && a.updateDisplay() }, b }(o["default"]); o["default"].registerComponent("TextTrackSettings", I), c["default"] = I }, { 5: 5, 81: 81, 83: 83, 86: 86, 88: 88, 95: 95 }], 72: [function (a, b, c) {
      "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(67), j = e(i), k = a(83), l = d(k), m = a(73), n = a(86), o = e(n), p = a(95), q = e(p), r = a(75), s = e(r), t = a(92), u = a(99), v = e(u), w = a(87), x = e(w), y = a(78), z = d(y), A = function (a, b) { var c = new q["default"].WebVTT.Parser(q["default"], q["default"].vttjs, q["default"].WebVTT.StringDecoder()), d = []; c.oncue = function (a) { b.addCue(a) }, c.onparsingerror = function (a) { d.push(a) }, c.onflush = function () { b.trigger({ type: "loadeddata", target: b }) }, c.parse(a), d.length > 0 && (q["default"].console && q["default"].console.groupCollapsed && q["default"].console.groupCollapsed("Text Track parsing errors for " + b.src), d.forEach(function (a) { return o["default"].error(a) }), q["default"].console && q["default"].console.groupEnd && q["default"].console.groupEnd()), c.flush() }, B = function (a, b) { var c = { uri: a }, d = (0, t.isCrossOrigin)(a); d && (c.cors = d), (0, v["default"])(c, l.bind(this, function (a, c, d) { if (a) return o["default"].error(a, c); if (b.loaded_ = !0, "function" != typeof q["default"].WebVTT) { if (b.tech_) { var e = function () { return A(d, b) }; b.tech_.on("vttjsloaded", e), b.tech_.on("vttjserror", function () { o["default"].error("vttjs failed to load, stopping trying to process " + b.src), b.tech_.off("vttjsloaded", e) }) } } else A(d, b) })) }, C = function (a) {
        function b() {
          var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (f(this, b), !e.tech) throw new Error("A tech was not provided."); var h = (0, x["default"])(e, { kind: m.TextTrackKind[e.kind] || "subtitles", language: e.language || e.srclang || "" }), i = m.TextTrackMode[h.mode] || "disabled", k = h["default"]; "metadata" !== h.kind && "chapters" !== h.kind || (i = "hidden"); var n = c = g(this, a.call(this, h)); if (n.tech_ = h.tech, z.IS_IE8) for (var o in b.prototype) "constructor" !== o && (n[o] = b.prototype[o]); n.cues_ = [], n.activeCues_ = []; var p = new j["default"](n.cues_), q = new j["default"](n.activeCues_), r = !1, s = l.bind(n, function () { this.activeCues, r && (this.trigger("cuechange"), r = !1) }); return "disabled" !== i && n.tech_.ready(function () { n.tech_.on("timeupdate", s) }, !0), Object.defineProperty(n, "default", { get: function () { return k }, set: function () { } }), Object.defineProperty(n, "mode", { get: function () { return i }, set: function (a) { var b = this; m.TextTrackMode[a] && (i = a, "showing" === i && this.tech_.ready(function () { b.tech_.on("timeupdate", s) }, !0), this.trigger("modechange")) } }), Object.defineProperty(n, "cues", { get: function () { return this.loaded_ ? p : null }, set: function () { } }), Object.defineProperty(n, "activeCues", {
            get: function () {
              if (!this.loaded_) return null; if (0 === this.cues.length) return q; for (var a = this.tech_.currentTime(), b = [], c = 0, d = this.cues.length; c < d; c++) {
                var e = this.cues[c]; e.startTime <= a && e.endTime >= a ? b.push(e) : e.startTime === e.endTime && e.startTime <= a && e.startTime + .5 >= a && b.push(e)
              } if (r = !1, b.length !== this.activeCues_.length) r = !0; else for (var f = 0; f < b.length; f++)this.activeCues_.indexOf(b[f]) === -1 && (r = !0); return this.activeCues_ = b, q.setCues_(this.activeCues_), q
            }, set: function () { }
          }), h.src ? (n.src = h.src, B(h.src, n)) : n.loaded_ = !0, d = n, g(c, d)
        } return h(b, a), b.prototype.addCue = function (a) { var b = a; if (q["default"].vttjs && !(a instanceof q["default"].vttjs.VTTCue)) { b = new q["default"].vttjs.VTTCue(a.startTime, a.endTime, a.text); for (var c in a) c in b || (b[c] = a[c]); b.id = a.id, b.originalCue_ = a } var d = this.tech_.textTracks(); if (d) for (var e = 0; e < d.length; e++)d[e] !== this && d[e].removeCue(b); this.cues_.push(b), this.cues.setCues_(this.cues_) }, b.prototype.removeCue = function (a) { for (var b = this.cues_.length; b--;) { var c = this.cues_[b]; if (c === a || c.originalCue_ && c.originalCue_ === a) { this.cues_.splice(b, 1), this.cues.setCues_(this.cues_); break } } }, b
      }(s["default"]); C.prototype.allowedEvents_ = { cuechange: "cuechange" }, c["default"] = C
    }, { 67: 67, 73: 73, 75: 75, 78: 78, 83: 83, 86: 86, 87: 87, 92: 92, 95: 95, 99: 99 }], 73: [function (a, b, c) { "use strict"; c.__esModule = !0; c.VideoTrackKind = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" }, c.AudioTrackKind = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" }, c.TextTrackKind = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" }, c.TextTrackMode = { disabled: "disabled", hidden: "hidden", showing: "showing" } }, {}], 74: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(42), j = e(i), k = a(78), l = d(k), m = a(94), n = e(m), o = function (a) { function b() { var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; f(this, b); var h = g(this, a.call(this)); if (!e && (e = h, l.IS_IE8)) { e = n["default"].createElement("custom"); for (var i in b.prototype) "constructor" !== i && (e[i] = b.prototype[i]) } e.tracks_ = [], Object.defineProperty(e, "length", { get: function () { return this.tracks_.length } }); for (var j = 0; j < d.length; j++)e.addTrack_(d[j]); return c = e, g(h, c) } return h(b, a), b.prototype.addTrack_ = function (a) { var b = this.tracks_.length; "" + b in this || Object.defineProperty(this, b, { get: function () { return this.tracks_[b] } }), this.tracks_.indexOf(a) === -1 && (this.tracks_.push(a), this.trigger({ track: a, type: "addtrack" })) }, b.prototype.removeTrack_ = function (a) { for (var b = void 0, c = 0, d = this.length; c < d; c++)if (this[c] === a) { b = this[c], b.off && b.off(), this.tracks_.splice(c, 1); break } b && this.trigger({ track: b, type: "removetrack" }) }, b.prototype.getTrackById = function (a) { for (var b = null, c = 0, d = this.length; c < d; c++) { var e = this[c]; if (e.id === a) { b = e; break } } return b }, b }(j["default"]); o.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack" }; for (var p in o.prototype.allowedEvents_) o.prototype["on" + p] = null; c["default"] = o }, { 42: 42, 78: 78, 94: 94 }], 75: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(78), j = e(i), k = a(94), l = d(k), m = a(85), n = e(m), o = a(42), p = d(o), q = function (a) { function b() { var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; f(this, b); var e = g(this, a.call(this)), h = e; if (j.IS_IE8) { h = l["default"].createElement("custom"); for (var i in b.prototype) "constructor" !== i && (h[i] = b.prototype[i]) } var k = { id: d.id || "vjs_track_" + n.newGUID(), kind: d.kind || "", label: d.label || "", language: d.language || "" }, m = function (a) { Object.defineProperty(h, a, { get: function () { return k[a] }, set: function () { } }) }; for (var o in k) m(o); return c = h, g(e, c) } return h(b, a), b }(p["default"]); c["default"] = q }, { 42: 42, 78: 78, 85: 85, 94: 94 }], 76: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(74), j = e(i), k = a(78), l = d(k), m = a(94), n = e(m), o = function (a, b) { for (var c = 0; c < a.length; c++)b.id !== a[c].id && (a[c].selected = !1) }, p = function (a) { function b() { var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; f(this, b); for (var h = void 0, i = e.length - 1; i >= 0; i--)if (e[i].selected) { o(e, e[i]); break } if (l.IS_IE8) { h = n["default"].createElement("custom"); for (var k in j["default"].prototype) "constructor" !== k && (h[k] = j["default"].prototype[k]); for (var m in b.prototype) "constructor" !== m && (h[m] = b.prototype[m]) } return h = c = g(this, a.call(this, e, h)), h.changing_ = !1, Object.defineProperty(h, "selectedIndex", { get: function () { for (var a = 0; a < this.length; a++)if (this[a].selected) return a; return -1 }, set: function () { } }), d = h, g(c, d) } return h(b, a), b.prototype.addTrack_ = function (b) { var c = this; b.selected && o(this, b), a.prototype.addTrack_.call(this, b), b.addEventListener && b.addEventListener("selectedchange", function () { c.changing_ || (c.changing_ = !0, o(c, b), c.changing_ = !1, c.trigger("change")) }) }, b.prototype.addTrack = function (a) { this.addTrack_(a) }, b.prototype.removeTrack = function (b) { a.prototype.removeTrack_.call(this, b) }, b }(j["default"]); c["default"] = p }, { 74: 74, 78: 78, 94: 94 }], 77: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function g(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b } function h(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) } c.__esModule = !0; var i = a(73), j = a(75), k = e(j), l = a(87), m = e(l), n = a(78), o = d(n), p = function (a) { function b() { var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; f(this, b); var h = (0, m["default"])(e, { kind: i.VideoTrackKind[e.kind] || "" }), j = c = g(this, a.call(this, h)), k = !1; if (o.IS_IE8) for (var l in b.prototype) "constructor" !== l && (j[l] = b.prototype[l]); return Object.defineProperty(j, "selected", { get: function () { return k }, set: function (a) { "boolean" == typeof a && a !== k && (k = a, this.trigger("selectedchange")) } }), h.selected && (j.selected = h.selected), d = j, g(c, d) } return h(b, a), b }(k["default"]); c["default"] = p }, { 73: 73, 75: 75, 78: 78, 87: 87 }], 78: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } c.__esModule = !0, c.BACKGROUND_SIZE_SUPPORTED = c.TOUCH_ENABLED = c.IS_ANY_SAFARI = c.IS_SAFARI = c.IE_VERSION = c.IS_IE8 = c.IS_CHROME = c.IS_EDGE = c.IS_FIREFOX = c.IS_NATIVE_ANDROID = c.IS_OLD_ANDROID = c.ANDROID_VERSION = c.IS_ANDROID = c.IOS_VERSION = c.IS_IOS = c.IS_IPOD = c.IS_IPHONE = c.IS_IPAD = void 0; var f = a(81), g = e(f), h = a(95), i = d(h), j = i["default"].navigator && i["default"].navigator.userAgent || "", k = /AppleWebKit\/([\d.]+)/i.exec(j), l = k ? parseFloat(k.pop()) : null, m = c.IS_IPAD = /iPad/i.test(j), n = c.IS_IPHONE = /iPhone/i.test(j) && !m, o = c.IS_IPOD = /iPod/i.test(j), p = c.IS_IOS = n || m || o, q = (c.IOS_VERSION = function () { var a = j.match(/OS (\d+)_/i); return a && a[1] ? a[1] : null }(), c.IS_ANDROID = /Android/i.test(j)), r = c.ANDROID_VERSION = function () { var a = j.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if (!a) return null; var b = a[1] && parseFloat(a[1]), c = a[2] && parseFloat(a[2]); return b && c ? parseFloat(a[1] + "." + a[2]) : b ? b : null }(), s = (c.IS_OLD_ANDROID = q && /webkit/i.test(j) && r < 2.3, c.IS_NATIVE_ANDROID = q && r < 5 && l < 537, c.IS_FIREFOX = /Firefox/i.test(j), c.IS_EDGE = /Edge/i.test(j)), t = c.IS_CHROME = !s && /Chrome/i.test(j), u = (c.IS_IE8 = /MSIE\s8\.0/.test(j), c.IE_VERSION = function () { var a = /MSIE\s(\d+)\.\d/.exec(j), b = a && parseFloat(a[1]); return !b && /Trident\/7.0/i.test(j) && /rv:11.0/.test(j) && (b = 11), b }(), c.IS_SAFARI = /Safari/i.test(j) && !t && !q && !s); c.IS_ANY_SAFARI = u || p, c.TOUCH_ENABLED = g.isReal() && ("ontouchstart" in i["default"] || i["default"].DocumentTouch && i["default"].document instanceof i["default"].DocumentTouch), c.BACKGROUND_SIZE_SUPPORTED = g.isReal() && "backgroundSize" in i["default"].document.createElement("video").style }, { 81: 81, 95: 95 }], 79: [function (a, b, c) { "use strict"; function d(a, b) { var c = 0, d = void 0, f = void 0; if (!b) return 0; a && a.length || (a = (0, e.createTimeRange)(0, 0)); for (var g = 0; g < a.length; g++)d = a.start(g), f = a.end(g), f > b && (f = b), c += f - d; return c / b } c.__esModule = !0, c.bufferedPercent = d; var e = a(90) }, { 90: 90 }], 80: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b) { if (!a || !b) return ""; if ("function" == typeof g["default"].getComputedStyle) { var c = g["default"].getComputedStyle(a); return c ? c[b] : "" } return a.currentStyle[b] || "" } c.__esModule = !0, c["default"] = e; var f = a(95), g = d(f) }, { 95: 95 }], 81: [function (a, b, c) { "use strict"; function d(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function e(a) { return a && a.__esModule ? a : { "default": a } } function f(a, b) { return a.raw = b, a } function g(a) { return "string" == typeof a && /\S/.test(a) } function h(a) { if (/\s/.test(a)) throw new Error("class has illegal whitespace characters") } function i(a) { return new RegExp("(^|\\s)" + a + "($|\\s)") } function j() { return N["default"] === P["default"].document && "undefined" != typeof N["default"].createElement } function k(a) { return (0, W.isObject)(a) && 1 === a.nodeType } function l(a) { return function (b, c) { if (!g(b)) return N["default"][a](null); g(c) && (c = N["default"].querySelector(c)); var d = k(c) ? c : N["default"]; return d[a] && d[a](b) } } function m(a) { return 0 === a.indexOf("#") && (a = a.slice(1)), N["default"].getElementById(a) } function n() { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div", b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = arguments[3], e = N["default"].createElement(a); return Object.getOwnPropertyNames(b).forEach(function (a) { var c = b[a]; a.indexOf("aria-") !== -1 || "role" === a || "type" === a ? (T["default"].warn((0, V["default"])(L, a, c)), e.setAttribute(a, c)) : "textContent" === a ? o(e, c) : e[a] = c }), Object.getOwnPropertyNames(c).forEach(function (a) { e.setAttribute(a, c[a]) }), d && J(e, d), e } function o(a, b) { return "undefined" == typeof a.textContent ? a.innerText = b : a.textContent = b, a } function p(a, b) { b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a) } function q(a) { var b = a[Y]; return b || (b = a[Y] = R.newGUID()), X[b] || (X[b] = {}), X[b] } function r(a) { var b = a[Y]; return !!b && !!Object.getOwnPropertyNames(X[b]).length } function s(a) { var b = a[Y]; if (b) { delete X[b]; try { delete a[Y] } catch (c) { a.removeAttribute ? a.removeAttribute(Y) : a[Y] = null } } } function t(a, b) { return h(b), a.classList ? a.classList.contains(b) : i(b).test(a.className) } function u(a, b) { return a.classList ? a.classList.add(b) : t(a, b) || (a.className = (a.className + " " + b).trim()), a } function v(a, b) { return a.classList ? a.classList.remove(b) : (h(b), a.className = a.className.split(/\s+/).filter(function (a) { return a !== b }).join(" ")), a } function w(a, b, c) { var d = t(a, b); if ("function" == typeof c && (c = c(a, b)), "boolean" != typeof c && (c = !d), c !== d) return c ? u(a, b) : v(a, b), a } function x(a, b) { Object.getOwnPropertyNames(b).forEach(function (c) { var d = b[c]; null === d || void 0 === d || d === !1 ? a.removeAttribute(c) : a.setAttribute(c, d === !0 ? "" : d) }) } function y(a) { var b = {}; if (a && a.attributes && a.attributes.length > 0) for (var c = a.attributes, d = c.length - 1; d >= 0; d--) { var e = c[d].name, f = c[d].value; "boolean" != typeof a[e] && ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",") === -1 || (f = null !== f), b[e] = f } return b } function z(a, b) { return a.getAttribute(b) } function A(a, b, c) { a.setAttribute(b, c) } function B(a, b) { a.removeAttribute(b) } function C() { N["default"].body.focus(), N["default"].onselectstart = function () { return !1 } } function D() { N["default"].onselectstart = function () { return !0 } } function E(a) { var b = void 0; if (a.getBoundingClientRect && a.parentNode && (b = a.getBoundingClientRect()), !b) return { left: 0, top: 0 }; var c = N["default"].documentElement, d = N["default"].body, e = c.clientLeft || d.clientLeft || 0, f = P["default"].pageXOffset || d.scrollLeft, g = b.left + f - e, h = c.clientTop || d.clientTop || 0, i = P["default"].pageYOffset || d.scrollTop, j = b.top + i - h; return { left: Math.round(g), top: Math.round(j) } } function F(a, b) { var c = {}, d = E(a), e = a.offsetWidth, f = a.offsetHeight, g = d.top, h = d.left, i = b.pageY, j = b.pageX; return b.changedTouches && (j = b.changedTouches[0].pageX, i = b.changedTouches[0].pageY), c.y = Math.max(0, Math.min(1, (g - i + f) / f)), c.x = Math.max(0, Math.min(1, (j - h) / e)), c } function G(a) { return (0, W.isObject)(a) && 3 === a.nodeType } function H(a) { for (; a.firstChild;)a.removeChild(a.firstChild); return a } function I(a) { return "function" == typeof a && (a = a()), (Array.isArray(a) ? a : [a]).map(function (a) { return "function" == typeof a && (a = a()), k(a) || G(a) ? a : "string" == typeof a && /\S/.test(a) ? N["default"].createTextNode(a) : void 0 }).filter(function (a) { return a }) } function J(a, b) { return I(b).forEach(function (b) { return a.appendChild(b) }), a } function K(a, b) { return J(H(a), b) } c.__esModule = !0, c.$$ = c.$ = void 0; var L = f(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]); c.isReal = j, c.isEl = k, c.getEl = m, c.createEl = n, c.textContent = o, c.insertElFirst = p, c.getElData = q, c.hasElData = r, c.removeElData = s, c.hasElClass = t, c.addElClass = u, c.removeElClass = v, c.toggleElClass = w, c.setElAttributes = x, c.getElAttributes = y, c.getAttribute = z, c.setAttribute = A, c.removeAttribute = B, c.blockTextSelection = C, c.unblockTextSelection = D, c.findElPosition = E, c.getPointerPosition = F, c.isTextNode = G, c.emptyEl = H, c.normalizeContent = I, c.appendContent = J, c.insertContent = K; var M = a(94), N = e(M), O = a(95), P = e(O), Q = a(85), R = d(Q), S = a(86), T = e(S), U = a(98), V = e(U), W = a(88), X = {}, Y = "vdata" + (new Date).getTime(); c.$ = l("querySelector"), c.$$ = l("querySelectorAll") }, { 85: 85, 86: 86, 88: 88, 94: 94, 95: 95, 98: 98 }], 82: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a, b) { var c = n.getElData(a); 0 === c.handlers[b].length && (delete c.handlers[b], a.removeEventListener ? a.removeEventListener(b, c.dispatcher, !1) : a.detachEvent && a.detachEvent("on" + b, c.dispatcher)), Object.getOwnPropertyNames(c.handlers).length <= 0 && (delete c.handlers, delete c.dispatcher, delete c.disabled), 0 === Object.getOwnPropertyNames(c).length && n.removeElData(a) } function g(a, b, c, d) { c.forEach(function (c) { a(b, c, d) }) } function h(a) { function b() { return !0 } function c() { return !1 } if (!a || !a.isPropagationStopped) { var d = a || t["default"].event; a = {}; for (var e in d) "layerX" !== e && "layerY" !== e && "keyLocation" !== e && "webkitMovementX" !== e && "webkitMovementY" !== e && ("returnValue" === e && d.preventDefault || (a[e] = d[e])); if (a.target || (a.target = a.srcElement || v["default"]), a.relatedTarget || (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), a.preventDefault = function () { d.preventDefault && d.preventDefault(), a.returnValue = !1, d.returnValue = !1, a.defaultPrevented = !0 }, a.defaultPrevented = !1, a.stopPropagation = function () { d.stopPropagation && d.stopPropagation(), a.cancelBubble = !0, d.cancelBubble = !0, a.isPropagationStopped = b }, a.isPropagationStopped = c, a.stopImmediatePropagation = function () { d.stopImmediatePropagation && d.stopImmediatePropagation(), a.isImmediatePropagationStopped = b, a.stopPropagation() }, a.isImmediatePropagationStopped = c, null !== a.clientX && void 0 !== a.clientX) { var f = v["default"].documentElement, g = v["default"].body; a.pageX = a.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = a.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0) } a.which = a.charCode || a.keyCode, null !== a.button && void 0 !== a.button && (a.button = 1 & a.button ? 0 : 4 & a.button ? 1 : 2 & a.button ? 2 : 0) } return a } function i(a, b, c) { if (Array.isArray(b)) return g(i, a, b, c); var d = n.getElData(a); d.handlers || (d.handlers = {}), d.handlers[b] || (d.handlers[b] = []), c.guid || (c.guid = p.newGUID()), d.handlers[b].push(c), d.dispatcher || (d.disabled = !1, d.dispatcher = function (b, c) { if (!d.disabled) { b = h(b); var e = d.handlers[b.type]; if (e) for (var f = e.slice(0), g = 0, i = f.length; g < i && !b.isImmediatePropagationStopped(); g++)try { f[g].call(a, b, c) } catch (j) { r["default"].error(j) } } }), 1 === d.handlers[b].length && (a.addEventListener ? a.addEventListener(b, d.dispatcher, !1) : a.attachEvent && a.attachEvent("on" + b, d.dispatcher)) } function j(a, b, c) { if (n.hasElData(a)) { var d = n.getElData(a); if (d.handlers) { if (Array.isArray(b)) return g(j, a, b, c); var e = function (b) { d.handlers[b] = [], f(a, b) }; if (b) { var h = d.handlers[b]; if (h) { if (!c) return void e(b); if (c.guid) for (var i = 0; i < h.length; i++)h[i].guid === c.guid && h.splice(i--, 1); f(a, b) } } else for (var k in d.handlers) e(k) } } } function k(a, b, c) { var d = n.hasElData(a) ? n.getElData(a) : {}, e = a.parentNode || a.ownerDocument; if ("string" == typeof b && (b = { type: b, target: a }), b = h(b), d.dispatcher && d.dispatcher.call(a, b, c), e && !b.isPropagationStopped() && b.bubbles === !0) k.call(null, e, b, c); else if (!e && !b.defaultPrevented) { var f = n.getElData(b.target); b.target[b.type] && (f.disabled = !0, "function" == typeof b.target[b.type] && b.target[b.type](), f.disabled = !1) } return !b.defaultPrevented } function l(a, b, c) { if (Array.isArray(b)) return g(l, a, b, c); var d = function e() { j(a, b, e), c.apply(this, arguments) }; d.guid = c.guid = c.guid || p.newGUID(), i(a, b, d) } c.__esModule = !0, c.fixEvent = h, c.on = i, c.off = j, c.trigger = k, c.one = l; var m = a(81), n = e(m), o = a(85), p = e(o), q = a(86), r = d(q), s = a(95), t = d(s), u = a(94), v = d(u) }, { 81: 81, 85: 85, 86: 86, 94: 94, 95: 95 }], 83: [function (a, b, c) { "use strict"; c.__esModule = !0, c.throttle = c.bind = void 0; var d = a(85); c.bind = function (a, b, c) { b.guid || (b.guid = (0, d.newGUID)()); var e = function () { return b.apply(a, arguments) }; return e.guid = c ? c + "_" + b.guid : b.guid, e }, c.throttle = function (a, b) { var c = Date.now(); return function () { var d = Date.now(); d - c >= b && (a.apply(void 0, arguments), c = d) } } }, { 85: 85 }], 84: [function (a, b, c) { "use strict"; function d(a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a; a = a < 0 ? 0 : a; var c = Math.floor(a % 60), d = Math.floor(a / 60 % 60), e = Math.floor(a / 3600), f = Math.floor(b / 60 % 60), g = Math.floor(b / 3600); return (isNaN(a) || a === 1 / 0) && (e = d = c = "-"), e = e > 0 || g > 0 ? e + ":" : "", d = ((e || f >= 10) && d < 10 ? "0" + d : d) + ":", c = c < 10 ? "0" + c : c, e + d + c } c.__esModule = !0, c["default"] = d }, {}], 85: [function (a, b, c) { "use strict"; function d() { return e++ } c.__esModule = !0, c.newGUID = d; var e = 1 }, {}], 86: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0, c.logByType = void 0; var e = a(95), f = d(e), g = a(78), h = a(88), i = void 0, j = c.logByType = function (a, b) { var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!g.IE_VERSION && g.IE_VERSION < 11; "log" !== a && b.unshift(a.toUpperCase() + ":"), i.history.push(b), b.unshift("VIDEOJS:"); var d = f["default"].console && f["default"].console[a]; d && (c && (b = b.map(function (a) { if ((0, h.isObject)(a) || Array.isArray(a)) try { return JSON.stringify(a) } catch (b) { return String(a) } return String(a) }).join(" ")), d.apply ? d[Array.isArray(b) ? "apply" : "call"](f["default"].console, b) : d(b)) }; i = function () { for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)b[c] = arguments[c]; j("log", b) }, i.history = [], i.error = function () { for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)b[c] = arguments[c]; return j("error", b) }, i.warn = function () { for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)b[c] = arguments[c]; return j("warn", b) }, c["default"] = i }, { 78: 78, 88: 88, 95: 95 }], 87: [function (a, b, c) { "use strict"; function d() { for (var a = {}, b = arguments.length, c = Array(b), f = 0; f < b; f++)c[f] = arguments[f]; return c.forEach(function (b) { b && (0, e.each)(b, function (b, c) { if (!(0, e.isPlain)(b)) return void (a[c] = b); (0, e.isPlain)(a[c]) || (a[c] = {}), a[c] = d(a[c], b) }) }), a } c.__esModule = !0, c["default"] = d; var e = a(88) }, { 88: 88 }], 88: [function (a, b, c) { "use strict"; function d(a, b) { k(a).forEach(function (c) { return b(a[c], c) }) } function e(a, b) { var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return k(a).reduce(function (c, d) { return b(c, a[d], d) }, c) } function f(a) { for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), e = 1; e < b; e++)c[e - 1] = arguments[e]; return Object.assign ? Object.assign.apply(Object, [a].concat(c)) : (c.forEach(function (b) { b && d(b, function (b, c) { a[c] = b }) }), a) } function g(a) { return !!a && "object" === (void 0 === a ? "undefined" : i(a)) } function h(a) { return g(a) && "[object Object]" === j.call(a) && a.constructor === Object } c.__esModule = !0; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }; c.each = d, c.reduce = e, c.assign = f, c.isObject = g, c.isPlain = h; var j = Object.prototype.toString, k = function (a) { return g(a) ? Object.keys(a) : [] } }, {}], 89: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0, c.setTextContent = c.createStyleElement = void 0; var e = a(94), f = d(e); c.createStyleElement = function (a) { var b = f["default"].createElement("style"); return b.className = a, b }, c.setTextContent = function (a, b) { a.styleSheet ? a.styleSheet.cssText = b : a.textContent = b } }, { 94: 94 }], 90: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } function e(a, b, c) { if (b < 0 || b > c) throw new Error("Failed to execute '" + a + "' on 'TimeRanges': The index provided (" + b + ") is greater than or equal to the maximum bound (" + c + ").") } function f(a, b, c, d) { return void 0 === d && (j["default"].warn("DEPRECATED: Function '" + a + "' on 'TimeRanges' called without an index argument."), d = 0), e(a, d, c.length - 1), c[d][b] } function g(a) { return void 0 === a || 0 === a.length ? { length: 0, start: function () { throw new Error("This TimeRanges object is empty") }, end: function () { throw new Error("This TimeRanges object is empty") } } : { length: a.length, start: f.bind(null, "start", 0, a), end: f.bind(null, "end", 1, a) } } function h(a, b) { return Array.isArray(a) ? g(a) : void 0 === a || void 0 === b ? g() : g([[a, b]]) } c.__esModule = !0, c.createTimeRange = void 0, c.createTimeRanges = h; var i = a(86), j = d(i); c.createTimeRange = h }, { 86: 86 }], 91: [function (a, b, c) { "use strict"; function d(a) { return "string" != typeof a ? a : a.charAt(0).toUpperCase() + a.slice(1) } c.__esModule = !0, c["default"] = d }, {}], 92: [function (a, b, c) { "use strict"; function d(a) { return a && a.__esModule ? a : { "default": a } } c.__esModule = !0, c.isCrossOrigin = c.getFileExtension = c.getAbsoluteURL = c.parseUrl = void 0; var e = a(94), f = d(e), g = a(95), h = d(g), i = c.parseUrl = function (a) { var b = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], c = f["default"].createElement("a"); c.href = a; var d = "" === c.host && "file:" !== c.protocol, e = void 0; d && (e = f["default"].createElement("div"), e.innerHTML = '<a href="' + a + '"></a>', c = e.firstChild, e.setAttribute("style", "display:none; position:absolute;"), f["default"].body.appendChild(e)); for (var g = {}, h = 0; h < b.length; h++)g[b[h]] = c[b[h]]; return "http:" === g.protocol && (g.host = g.host.replace(/:80$/, "")), "https:" === g.protocol && (g.host = g.host.replace(/:443$/, "")), d && f["default"].body.removeChild(e), g }; c.getAbsoluteURL = function (a) { if (!a.match(/^https?:\/\//)) { var b = f["default"].createElement("div"); b.innerHTML = '<a href="' + a + '">x</a>', a = b.firstChild.href } return a }, c.getFileExtension = function (a) { if ("string" == typeof a) { var b = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, c = b.exec(a); if (c) return c.pop().toLowerCase() } return "" }, c.isCrossOrigin = function (a) { var b = h["default"].location, c = i(a); return (":" === c.protocol ? b.protocol : c.protocol) + c.host !== b.protocol + b.host } }, { 94: 94, 95: 95 }], 93: [function (b, c, d) { "use strict"; function e(a) { if (a && a.__esModule) return a; var b = {}; if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]); return b["default"] = a, b } function f(a) { return a && a.__esModule ? a : { "default": a } } function g(a, b, c) { var d = void 0; if ("string" == typeof a) { if (0 === a.indexOf("#") && (a = a.slice(1)), g.getPlayers()[a]) return b && O["default"].warn('Player "' + a + '" is already initialised. Options will not be applied.'), c && g.getPlayers()[a].ready(c), g.getPlayers()[a]; d = Q.getEl(a) } else d = a; if (!d || !d.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)"); if (d.player || x["default"].players[d.playerId]) return d.player || x["default"].players[d.playerId]; b = b || {}, g.hooks("beforesetup").forEach(function (a) { var c = a(d, (0, B["default"])(b)); if (!(0, V.isObject)(c) || Array.isArray(c)) return void O["default"].error("please return an object in beforesetup hooks"); b = (0, B["default"])(b, c) }); var e = r["default"].getComponent("Player"), f = new e(d, b, c); return g.hooks("setup").forEach(function (a) { return a(f) }), f } d.__esModule = !0; var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, i = b(95), j = f(i), k = b(94), l = f(k), m = b(56), n = e(m), o = b(89), p = e(o), q = b(5), r = f(q), s = b(42), t = f(s), u = b(82), v = e(u), w = b(51), x = f(w), y = b(52), z = f(y), A = b(87), B = f(A), C = b(83), D = e(C), E = b(72), F = f(E), G = b(64), H = f(G), I = b(77), J = f(I), K = b(90), L = b(84), M = f(L), N = b(86), O = f(N), P = b(81), Q = e(P), R = b(78), S = e(R), T = b(92), U = e(T), V = b(88), W = b(80), X = f(W), Y = b(43), Z = f(Y), $ = b(99), _ = f($), aa = b(62), ba = f(aa); if ("undefined" == typeof HTMLVideoElement && Q.isReal() && (l["default"].createElement("video"), l["default"].createElement("audio"), l["default"].createElement("track")), g.hooks_ = {}, g.hooks = function (a, b) { return g.hooks_[a] = g.hooks_[a] || [], b && (g.hooks_[a] = g.hooks_[a].concat(b)), g.hooks_[a] }, g.hook = function (a, b) { g.hooks(a, b) }, g.removeHook = function (a, b) { var c = g.hooks(a).indexOf(b); return !(c <= -1) && (g.hooks_[a] = g.hooks_[a].slice(), g.hooks_[a].splice(c, 1), !0) }, j["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0 && Q.isReal()) { var ca = Q.$(".vjs-styles-defaults"); if (!ca) { ca = p.createStyleElement("vjs-styles-defaults"); var da = Q.$("head"); da && da.insertBefore(ca, da.firstChild), p.setTextContent(ca, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ") } } n.autoSetupTimeout(1, g), g.VERSION = "5.19.2", g.options = x["default"].prototype.options_, g.getPlayers = function () { return x["default"].players }, g.players = x["default"].players, g.getComponent = r["default"].getComponent, g.registerComponent = function (a, b) { ba["default"].isTech(b) && O["default"].warn("The " + a + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), r["default"].registerComponent.call(r["default"], a, b) }, g.getTech = ba["default"].getTech, g.registerTech = ba["default"].registerTech, g.browser = S, g.TOUCH_ENABLED = S.TOUCH_ENABLED, g.extend = Z["default"], g.mergeOptions = B["default"], g.bind = D.bind, g.plugin = z["default"], g.addLanguage = function (a, b) { var c; return a = ("" + a).toLowerCase(), g.options.languages = (0, B["default"])(g.options.languages, (c = {}, c[a] = b, c)), g.options.languages[a] }, g.log = O["default"], g.createTimeRange = g.createTimeRanges = K.createTimeRanges, g.formatTime = M["default"], g.parseUrl = U.parseUrl, g.isCrossOrigin = U.isCrossOrigin, g.EventTarget = t["default"], g.on = v.on, g.one = v.one, g.off = v.off, g.trigger = v.trigger, g.xhr = _["default"], g.TextTrack = F["default"], g.AudioTrack = H["default"], g.VideoTrack = J["default"], g.isEl = Q.isEl, g.isTextNode = Q.isTextNode, g.createEl = Q.createEl, g.hasClass = Q.hasElClass, g.addClass = Q.addElClass, g.removeClass = Q.removeElClass, g.toggleClass = Q.toggleElClass, g.setAttributes = Q.setElAttributes, g.getAttributes = Q.getElAttributes, g.emptyEl = Q.emptyEl, g.appendContent = Q.appendContent, g.insertContent = Q.insertContent, g.computedStyle = X["default"], "function" == typeof a && a.amd ? a("videojs", [], function () { return g }) : "object" === (void 0 === d ? "undefined" : h(d)) && "object" === (void 0 === c ? "undefined" : h(c)) && (c.exports = g), d["default"] = g }, { 42: 42, 43: 43, 5: 5, 51: 51, 52: 52, 56: 56, 62: 62, 64: 64, 72: 72, 77: 77, 78: 78, 80: 80, 81: 81, 82: 82, 83: 83, 84: 84, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 92: 92, 94: 94, 95: 95, 99: 99 }], 94: [function (a, b, c) { (function (c) { var d = void 0 !== c ? c : "undefined" != typeof window ? window : {}, e = a(96); if ("undefined" != typeof document) b.exports = document; else { var f = d["__GLOBAL_DOCUMENT_CACHE@4"]; f || (f = d["__GLOBAL_DOCUMENT_CACHE@4"] = e), b.exports = f } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { 96: 96 }], 95: [function (a, b, c) { (function (a) { "undefined" != typeof window ? b.exports = window : void 0 !== a ? b.exports = a : "undefined" != typeof self ? b.exports = self : b.exports = {} }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 96: [function (a, b, c) { }, {}], 97: [function (a, b, c) { function d(a, b) { var c, d = null; try { c = JSON.parse(a, b) } catch (e) { d = e } return [d, c] } b.exports = d }, {}], 98: [function (a, b, c) { function d(a) { return a.replace(/\n\r?\s*/g, "") } b.exports = function (a) { for (var b = "", c = 0; c < arguments.length; c++)b += d(a[c]) + (arguments[c + 1] || ""); return b } }, {}], 99: [function (a, b, c) {
      "use strict"; function d(a, b) { for (var c = 0; c < a.length; c++)b(a[c]) } function e(a) { for (var b in a) if (a.hasOwnProperty(b)) return !1; return !0 } function f(a, b, c) { var d = a; return l(b) ? (c = b, "string" == typeof a && (d = { uri: a })) : d = n(b, { uri: a }), d.callback = c, d } function g(a, b, c) { return b = f(a, b, c), h(b) } function h(a) {
        function b() { 4 === k.readyState && setTimeout(f, 0) } function c() { var a = void 0; if (a = k.response ? k.response : k.responseText || i(k), u) try { a = JSON.parse(a) } catch (b) { } return a } function d(a) { return clearTimeout(o), a instanceof Error || (a = new Error("" + (a || "Unknown XMLHttpRequest Error"))), a.statusCode = 0, j(a, v) } function f() { if (!n) { var b; clearTimeout(o), b = a.useXDR && void 0 === k.status ? 200 : 1223 === k.status ? 204 : k.status; var d = v, e = null; return 0 !== b ? (d = { body: c(), statusCode: b, method: q, headers: {}, url: p, rawRequest: k }, k.getAllResponseHeaders && (d.headers = m(k.getAllResponseHeaders()))) : e = new Error("Internal XMLHttpRequest Error"), j(e, d, d.body) } }
        if ("undefined" == typeof a.callback) throw new Error("callback argument missing"); var h = !1, j = function (b, c, d) { h || (h = !0, a.callback(b, c, d)) }, k = a.xhr || null; k || (k = a.cors || a.useXDR ? new g.XDomainRequest : new g.XMLHttpRequest); var l, n, o, p = k.url = a.uri || a.url, q = k.method = a.method || "GET", r = a.body || a.data, s = k.headers = a.headers || {}, t = !!a.sync, u = !1, v = { body: void 0, headers: {}, statusCode: 0, method: q, url: p, rawRequest: k }; if ("json" in a && a.json !== !1 && (u = !0, s.accept || s.Accept || (s.Accept = "application/json"), "GET" !== q && "HEAD" !== q && (s["content-type"] || s["Content-Type"] || (s["Content-Type"] = "application/json"), r = JSON.stringify(a.json === !0 ? r : a.json))), k.onreadystatechange = b, k.onload = f, k.onerror = d, k.onprogress = function () { }, k.onabort = function () { n = !0 }, k.ontimeout = d, k.open(q, p, !t, a.username, a.password), t || (k.withCredentials = !!a.withCredentials), !t && a.timeout > 0 && (o = setTimeout(function () { if (!n) { n = !0, k.abort("timeout"); var a = new Error("XMLHttpRequest timeout"); a.code = "ETIMEDOUT", d(a) } }, a.timeout)), k.setRequestHeader) for (l in s) s.hasOwnProperty(l) && k.setRequestHeader(l, s[l]); else if (a.headers && !e(a.headers)) throw new Error("Headers cannot be set on an XDomainRequest object"); return "responseType" in a && (k.responseType = a.responseType), "beforeSend" in a && "function" == typeof a.beforeSend && a.beforeSend(k), k.send(r || null), k
      } function i(a) { if ("document" === a.responseType) return a.responseXML; var b = a.responseXML && "parsererror" === a.responseXML.documentElement.nodeName; return "" !== a.responseType || b ? null : a.responseXML } function j() { } var k = a(95), l = a(100), m = a(103), n = a(104); b.exports = g, g.XMLHttpRequest = k.XMLHttpRequest || j, g.XDomainRequest = "withCredentials" in new g.XMLHttpRequest ? g.XMLHttpRequest : k.XDomainRequest, d(["get", "put", "post", "patch", "head", "delete"], function (a) { g["delete" === a ? "del" : a] = function (b, c, d) { return c = f(b, c, d), c.method = a.toUpperCase(), h(c) } })
    }, { 100: 100, 103: 103, 104: 104, 95: 95 }], 100: [function (a, b, c) { function d(a) { var b = e.call(a); return "[object Function]" === b || "function" == typeof a && "[object RegExp]" !== b || "undefined" != typeof window && (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt) } b.exports = d; var e = Object.prototype.toString }, {}], 101: [function (a, b, c) { function d(a, b, c) { if (!h(b)) throw new TypeError("iterator must be a function"); arguments.length < 3 && (c = this), "[object Array]" === i.call(a) ? e(a, b, c) : "string" == typeof a ? f(a, b, c) : g(a, b, c) } function e(a, b, c) { for (var d = 0, e = a.length; d < e; d++)j.call(a, d) && b.call(c, a[d], d, a) } function f(a, b, c) { for (var d = 0, e = a.length; d < e; d++)b.call(c, a.charAt(d), d, a) } function g(a, b, c) { for (var d in a) j.call(a, d) && b.call(c, a[d], d, a) } var h = a(100); b.exports = d; var i = Object.prototype.toString, j = Object.prototype.hasOwnProperty }, { 100: 100 }], 102: [function (a, b, c) { function d(a) { return a.replace(/^\s*|\s*$/g, "") } c = b.exports = d, c.left = function (a) { return a.replace(/^\s*/, "") }, c.right = function (a) { return a.replace(/\s*$/, "") } }, {}], 103: [function (a, b, c) { var d = a(102), e = a(101), f = function (a) { return "[object Array]" === Object.prototype.toString.call(a) }; b.exports = function (a) { if (!a) return {}; var b = {}; return e(d(a).split("\n"), function (a) { var c = a.indexOf(":"), e = d(a.slice(0, c)).toLowerCase(), g = d(a.slice(c + 1)); "undefined" == typeof b[e] ? b[e] = g : f(b[e]) ? b[e].push(g) : b[e] = [b[e], g] }), b } }, { 101: 101, 102: 102 }], 104: [function (a, b, c) { function d() { for (var a = {}, b = 0; b < arguments.length; b++) { var c = arguments[b]; for (var d in c) e.call(c, d) && (a[d] = c[d]) } return a } b.exports = d; var e = Object.prototype.hasOwnProperty }, {}], 105: [function (a, b, c) { var d = a(109), e = b.exports = { WebVTT: a(106).WebVTT, VTTCue: a(107).VTTCue, VTTRegion: a(108).VTTRegion }; d.vttjs = e, d.WebVTT = e.WebVTT; var f = e.VTTCue, g = e.VTTRegion, h = d.VTTCue, i = d.VTTRegion; e.shim = function () { d.VTTCue = f, d.VTTRegion = g }, e.restore = function () { d.VTTCue = h, d.VTTRegion = i }, d.VTTCue || e.shim() }, { 106: 106, 107: 107, 108: 108, 109: 109 }], 106: [function (a, b, c) { !function (a) { function b(a, b) { this.name = "ParsingError", this.code = a.code, this.message = b || a.message } function c(a) { function b(a, b, c, d) { return 3600 * (0 | a) + 60 * (0 | b) + (0 | c) + (0 | d) / 1e3 } var c = a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/); return c ? c[3] ? b(c[1], c[2], c[3].replace(":", ""), c[4]) : c[1] > 59 ? b(c[1], c[2], 0, c[4]) : b(0, c[1], c[2], c[4]) : null } function d() { this.values = p(null) } function e(a, b, c, d) { var e = d ? a.split(d) : [a]; for (var f in e) if ("string" == typeof e[f]) { var g = e[f].split(c); if (2 === g.length) { var h = g[0], i = g[1]; b(h, i) } } } function f(a, f, g) { function h() { var d = c(a); if (null === d) throw new b(b.Errors.BadTimeStamp, "Malformed timestamp: " + k); return a = a.replace(/^[^\sa-zA-Z-]+/, ""), d } function i(a, b) { var c = new d; e(a, function (a, b) { switch (a) { case "region": for (var d = g.length - 1; d >= 0; d--)if (g[d].id === b) { c.set(a, g[d].region); break } break; case "vertical": c.alt(a, b, ["rl", "lr"]); break; case "line": var e = b.split(","), f = e[0]; c.integer(a, f), c.percent(a, f) && c.set("snapToLines", !1), c.alt(a, f, ["auto"]), 2 === e.length && c.alt("lineAlign", e[1], ["start", "middle", "end"]); break; case "position": e = b.split(","), c.percent(a, e[0]), 2 === e.length && c.alt("positionAlign", e[1], ["start", "middle", "end"]); break; case "size": c.percent(a, b); break; case "align": c.alt(a, b, ["start", "middle", "end", "left", "right"]) } }, /:/, /\s/), b.region = c.get("region", null), b.vertical = c.get("vertical", ""), b.line = c.get("line", "auto"), b.lineAlign = c.get("lineAlign", "start"), b.snapToLines = c.get("snapToLines", !0), b.size = c.get("size", 100), b.align = c.get("align", "middle"), b.position = c.get("position", { start: 0, left: 0, middle: 50, end: 100, right: 100 }, b.align), b.positionAlign = c.get("positionAlign", { start: "start", left: "start", middle: "middle", end: "end", right: "end" }, b.align) } function j() { a = a.replace(/^\s+/, "") } var k = a; if (j(), f.startTime = h(), j(), "-->" !== a.substr(0, 3)) throw new b(b.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + k); a = a.substr(3), j(), f.endTime = h(), j(), i(a, f) } function g(a, b) { function d() { function a(a) { return b = b.substr(a.length), a } if (!b) return null; var c = b.match(/^([^<]*)(<[^>]+>?)?/); return a(c[1] ? c[1] : c[2]) } function e(a) { return q[a] } function f(a) { for (; o = a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a = a.replace(o[0], e); return a } function g(a, b) { return !t[b.localName] || t[b.localName] === a.localName } function h(b, c) { var d = r[b]; if (!d) return null; var e = a.document.createElement(d); e.localName = d; var f = s[b]; return f && c && (e[f] = c.trim()), e } for (var i, j = a.document.createElement("div"), k = j, l = []; null !== (i = d());)if ("<" !== i[0]) k.appendChild(a.document.createTextNode(f(i))); else { if ("/" === i[1]) { l.length && l[l.length - 1] === i.substr(2).replace(">", "") && (l.pop(), k = k.parentNode); continue } var m, n = c(i.substr(1, i.length - 2)); if (n) { m = a.document.createProcessingInstruction("timestamp", n), k.appendChild(m); continue } var o = i.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); if (!o) continue; if (m = h(o[1], o[3]), !m) continue; if (!g(k, m)) continue; o[2] && (m.className = o[2].substr(1).replace(".", " ")), l.push(o[1]), k.appendChild(m), k = m } return j } function h(a) { for (var b = 0; b < u.length; b++) { var c = u[b]; if (a >= c[0] && a <= c[1]) return !0 } return !1 } function i(a) { function b(a, b) { for (var c = b.childNodes.length - 1; c >= 0; c--)a.push(b.childNodes[c]) } function c(a) { if (!a || !a.length) return null; var d = a.pop(), e = d.textContent || d.innerText; if (e) { var f = e.match(/^.*(\n|\r)/); return f ? (a.length = 0, f[0]) : e } return "ruby" === d.tagName ? c(a) : d.childNodes ? (b(a, d), c(a)) : void 0 } var d, e = [], f = ""; if (!a || !a.childNodes) return "ltr"; for (b(e, a); f = c(e);)for (var g = 0; g < f.length; g++)if (d = f.charCodeAt(g), h(d)) return "rtl"; return "ltr" } function j(a) { if ("number" == typeof a.line && (a.snapToLines || a.line >= 0 && a.line <= 100)) return a.line; if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement) return -1; for (var b = a.track, c = b.textTrackList, d = 0, e = 0; e < c.length && c[e] !== b; e++)"showing" === c[e].mode && d++; return ++d * -1 } function k() { } function l(a, b, c) { var d = /MSIE\s8\.0/.test(navigator.userAgent), e = "rgba(255, 255, 255, 1)", f = "rgba(0, 0, 0, 0.8)"; d && (e = "rgb(255, 255, 255)", f = "rgb(0, 0, 0)"), k.call(this), this.cue = b, this.cueDiv = g(a, b.text); var h = { color: e, backgroundColor: f, position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline" }; d || (h.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl", h.unicodeBidi = "plaintext"), this.applyStyles(h, this.cueDiv), this.div = a.document.createElement("div"), h = { textAlign: "middle" === b.align ? "center" : b.align, font: c.font, whiteSpace: "pre-line", position: "absolute" }, d || (h.direction = i(this.cueDiv), h.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(h), this.div.appendChild(this.cueDiv); var j = 0; switch (b.positionAlign) { case "start": j = b.position; break; case "middle": j = b.position - b.size / 2; break; case "end": j = b.position - b.size }"" === b.vertical ? this.applyStyles({ left: this.formatStyle(j, "%"), width: this.formatStyle(b.size, "%") }) : this.applyStyles({ top: this.formatStyle(j, "%"), height: this.formatStyle(b.size, "%") }), this.move = function (a) { this.applyStyles({ top: this.formatStyle(a.top, "px"), bottom: this.formatStyle(a.bottom, "px"), left: this.formatStyle(a.left, "px"), right: this.formatStyle(a.right, "px"), height: this.formatStyle(a.height, "px"), width: this.formatStyle(a.width, "px") }) } } function m(a) { var b, c, d, e, f = /MSIE\s8\.0/.test(navigator.userAgent); if (a.div) { c = a.div.offsetHeight, d = a.div.offsetWidth, e = a.div.offsetTop; var g = (g = a.div.childNodes) && (g = g[0]) && g.getClientRects && g.getClientRects(); a = a.div.getBoundingClientRect(), b = g ? Math.max(g[0] && g[0].height || 0, a.height / g.length) : 0 } this.left = a.left, this.right = a.right, this.top = a.top || e, this.height = a.height || c, this.bottom = a.bottom || e + (a.height || c), this.width = a.width || d, this.lineHeight = void 0 !== b ? b : a.lineHeight, f && !this.lineHeight && (this.lineHeight = 13) } function n(a, b, c, d) { function e(a, b) { for (var e, f = new m(a), g = 1, h = 0; h < b.length; h++) { for (; a.overlapsOppositeAxis(c, b[h]) || a.within(c) && a.overlapsAny(d);)a.move(b[h]); if (a.within(c)) return a; var i = a.intersectPercentage(c); g > i && (e = new m(a), g = i), a = new m(f) } return e || f } var f = new m(b), g = b.cue, h = j(g), i = []; if (g.snapToLines) { var k; switch (g.vertical) { case "": i = ["+y", "-y"], k = "height"; break; case "rl": i = ["+x", "-x"], k = "width"; break; case "lr": i = ["-x", "+x"], k = "width" }var l = f.lineHeight, n = l * Math.round(h), o = c[k] + l, p = i[0]; Math.abs(n) > o && (n = n < 0 ? -1 : 1, n *= Math.ceil(o / l) * l), h < 0 && (n += "" === g.vertical ? c.height : c.width, i = i.reverse()), f.move(p, n) } else { var q = f.lineHeight / c.height * 100; switch (g.lineAlign) { case "middle": h -= q / 2; break; case "end": h -= q }switch (g.vertical) { case "": b.applyStyles({ top: b.formatStyle(h, "%") }); break; case "rl": b.applyStyles({ left: b.formatStyle(h, "%") }); break; case "lr": b.applyStyles({ right: b.formatStyle(h, "%") }) }i = ["+y", "-x", "+x", "-y"], f = new m(b) } var r = e(f, i); b.move(r.toCSSCompatValues(c)) } function o() { } var p = Object.create || function () { function a() { } return function (b) { if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter."); return a.prototype = b, new a } }(); b.prototype = p(Error.prototype), b.prototype.constructor = b, b.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, d.prototype = { set: function (a, b) { this.get(a) || "" === b || (this.values[a] = b) }, get: function (a, b, c) { return c ? this.has(a) ? this.values[a] : b[c] : this.has(a) ? this.values[a] : b }, has: function (a) { return a in this.values }, alt: function (a, b, c) { for (var d = 0; d < c.length; ++d)if (b === c[d]) { this.set(a, b); break } }, integer: function (a, b) { /^-?\d+$/.test(b) && this.set(a, parseInt(b, 10)) }, percent: function (a, b) { return !!(b.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (b = parseFloat(b), b >= 0 && b <= 100)) && (this.set(a, b), !0) } }; var q = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " " }, r = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, s = { v: "title", lang: "lang" }, t = { rt: "ruby" }, u = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]]; k.prototype.applyStyles = function (a, b) { b = b || this.div; for (var c in a) a.hasOwnProperty(c) && (b.style[c] = a[c]) }, k.prototype.formatStyle = function (a, b) { return 0 === a ? 0 : a + b }, l.prototype = p(k.prototype), l.prototype.constructor = l, m.prototype.move = function (a, b) { switch (b = void 0 !== b ? b : this.lineHeight, a) { case "+x": this.left += b, this.right += b; break; case "-x": this.left -= b, this.right -= b; break; case "+y": this.top += b, this.bottom += b; break; case "-y": this.top -= b, this.bottom -= b } }, m.prototype.overlaps = function (a) { return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top }, m.prototype.overlapsAny = function (a) { for (var b = 0; b < a.length; b++)if (this.overlaps(a[b])) return !0; return !1 }, m.prototype.within = function (a) { return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right }, m.prototype.overlapsOppositeAxis = function (a, b) { switch (b) { case "+x": return this.left < a.left; case "-x": return this.right > a.right; case "+y": return this.top < a.top; case "-y": return this.bottom > a.bottom } }, m.prototype.intersectPercentage = function (a) { return Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left)) * Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top)) / (this.height * this.width) }, m.prototype.toCSSCompatValues = function (a) { return { top: this.top - a.top, bottom: a.bottom - this.bottom, left: this.left - a.left, right: a.right - this.right, height: this.height, width: this.width } }, m.getSimpleBoxPosition = function (a) { var b = a.div ? a.div.offsetHeight : a.tagName ? a.offsetHeight : 0, c = a.div ? a.div.offsetWidth : a.tagName ? a.offsetWidth : 0, d = a.div ? a.div.offsetTop : a.tagName ? a.offsetTop : 0; return a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a, { left: a.left, right: a.right, top: a.top || d, height: a.height || b, bottom: a.bottom || d + (a.height || b), width: a.width || c } }, o.StringDecoder = function () { return { decode: function (a) { if (!a) return ""; if ("string" != typeof a) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(a)) } } }, o.convertCueToDOMTree = function (a, b) { return a && b ? g(a, b) : null }; o.processCues = function (a, b, c) { function d(a) { for (var b = 0; b < a.length; b++)if (a[b].hasBeenReset || !a[b].displayState) return !0; return !1 } if (!a || !b || !c) return null; for (; c.firstChild;)c.removeChild(c.firstChild); var e = a.document.createElement("div"); if (e.style.position = "absolute", e.style.left = "0", e.style.right = "0", e.style.top = "0", e.style.bottom = "0", e.style.margin = "1.5%", c.appendChild(e), d(b)) { var f = [], g = m.getSimpleBoxPosition(e), h = Math.round(.05 * g.height * 100) / 100, i = { font: h + "px sans-serif" }; !function () { for (var c, d, h = 0; h < b.length; h++)d = b[h], c = new l(a, d, i), e.appendChild(c.div), n(a, c, g, f), d.displayState = c.div, f.push(m.getSimpleBoxPosition(c)) }() } else for (var j = 0; j < b.length; j++)e.appendChild(b[j].displayState) }, o.Parser = function (a, b, c) { c || (c = b, b = {}), b || (b = {}), this.window = a, this.vttjs = b, this.state = "INITIAL", this.buffer = "", this.decoder = c || new TextDecoder("utf8"), this.regionList = [] }, o.Parser.prototype = { reportOrThrowError: function (a) { if (!(a instanceof b)) throw a; this.onparsingerror && this.onparsingerror(a) }, parse: function (a) { function g() { for (var a = k.buffer, b = 0; b < a.length && "\r" !== a[b] && "\n" !== a[b];)++b; var c = a.substr(0, b); return "\r" === a[b] && ++b, "\n" === a[b] && ++b, k.buffer = a.substr(b), c } function h(a) { var b = new d; if (e(a, function (a, c) { switch (a) { case "id": b.set(a, c); break; case "width": b.percent(a, c); break; case "lines": b.integer(a, c); break; case "regionanchor": case "viewportanchor": var e = c.split(","); if (2 !== e.length) break; var f = new d; if (f.percent("x", e[0]), f.percent("y", e[1]), !f.has("x") || !f.has("y")) break; b.set(a + "X", f.get("x")), b.set(a + "Y", f.get("y")); break; case "scroll": b.alt(a, c, ["up"]) } }, /=/, /\s/), b.has("id")) { var c = new (k.vttjs.VTTRegion || k.window.VTTRegion); c.width = b.get("width", 100), c.lines = b.get("lines", 3), c.regionAnchorX = b.get("regionanchorX", 0), c.regionAnchorY = b.get("regionanchorY", 100), c.viewportAnchorX = b.get("viewportanchorX", 0), c.viewportAnchorY = b.get("viewportanchorY", 100), c.scroll = b.get("scroll", ""), k.onregion && k.onregion(c), k.regionList.push({ id: b.get("id"), region: c }) } } function i(a) { var b = new d; e(a, function (a, d) { switch (a) { case "MPEGT": b.integer(a + "S", d); break; case "LOCA": b.set(a + "L", c(d)) } }, /[^\d]:/, /,/), k.ontimestampmap && k.ontimestampmap({ MPEGTS: b.get("MPEGTS"), LOCAL: b.get("LOCAL") }) } function j(a) { a.match(/X-TIMESTAMP-MAP/) ? e(a, function (a, b) { switch (a) { case "X-TIMESTAMP-MAP": i(b) } }, /=/) : e(a, function (a, b) { switch (a) { case "Region": h(b) } }, /:/) } var k = this; a && (k.buffer += k.decoder.decode(a, { stream: !0 })); try { var l; if ("INITIAL" === k.state) { if (!/\r\n|\n/.test(k.buffer)) return this; l = g(); var m = l.match(/^WEBVTT([ \t].*)?$/); if (!m || !m[0]) throw new b(b.Errors.BadSignature); k.state = "HEADER" } for (var n = !1; k.buffer;) { if (!/\r\n|\n/.test(k.buffer)) return this; switch (n ? n = !1 : l = g(), k.state) { case "HEADER": /:/.test(l) ? j(l) : l || (k.state = "ID"); continue; case "NOTE": l || (k.state = "ID"); continue; case "ID": if (/^NOTE($|[ \t])/.test(l)) { k.state = "NOTE"; break } if (!l) continue; if (k.cue = new (k.vttjs.VTTCue || k.window.VTTCue)(0, 0, ""), k.state = "CUE", l.indexOf("-->") === -1) { k.cue.id = l; continue } case "CUE": try { f(l, k.cue, k.regionList) } catch (o) { k.reportOrThrowError(o), k.cue = null, k.state = "BADCUE"; continue } k.state = "CUETEXT"; continue; case "CUETEXT": var p = l.indexOf("-->") !== -1; if (!l || p && (n = !0)) { k.oncue && k.oncue(k.cue), k.cue = null, k.state = "ID"; continue } k.cue.text && (k.cue.text += "\n"), k.cue.text += l; continue; case "BADCUE": l || (k.state = "ID"); continue } } } catch (o) { k.reportOrThrowError(o), "CUETEXT" === k.state && k.cue && k.oncue && k.oncue(k.cue), k.cue = null, k.state = "INITIAL" === k.state ? "BADWEBVTT" : "BADCUE" } return this }, flush: function () { var a = this; try { if (a.buffer += a.decoder.decode(), (a.cue || "HEADER" === a.state) && (a.buffer += "\n\n", a.parse()), "INITIAL" === a.state) throw new b(b.Errors.BadSignature) } catch (c) { a.reportOrThrowError(c) } return a.onflush && a.onflush(), this } }, a.WebVTT = o }(this, this.vttjs) }, {}], 107: [function (a, b, c) { !function (a, b) { function c(a) { return "string" == typeof a && (!!g[a.toLowerCase()] && a.toLowerCase()) } function d(a) { return "string" == typeof a && (!!h[a.toLowerCase()] && a.toLowerCase()) } function e(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; for (var d in c) a[d] = c[d] } return a } function f(a, b, f) { var g = this, h = /MSIE\s8\.0/.test(navigator.userAgent), i = {}; h ? g = document.createElement("custom") : i.enumerable = !0, g.hasBeenReset = !1; var j = "", k = !1, l = a, m = b, n = f, o = null, p = "", q = !0, r = "auto", s = "start", t = 50, u = "middle", v = 50, w = "middle"; if (Object.defineProperty(g, "id", e({}, i, { get: function () { return j }, set: function (a) { j = "" + a } })), Object.defineProperty(g, "pauseOnExit", e({}, i, { get: function () { return k }, set: function (a) { k = !!a } })), Object.defineProperty(g, "startTime", e({}, i, { get: function () { return l }, set: function (a) { if ("number" != typeof a) throw new TypeError("Start time must be set to a number."); l = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "endTime", e({}, i, { get: function () { return m }, set: function (a) { if ("number" != typeof a) throw new TypeError("End time must be set to a number."); m = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "text", e({}, i, { get: function () { return n }, set: function (a) { n = "" + a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "region", e({}, i, { get: function () { return o }, set: function (a) { o = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "vertical", e({}, i, { get: function () { return p }, set: function (a) { var b = c(a); if (b === !1) throw new SyntaxError("An invalid or illegal string was specified."); p = b, this.hasBeenReset = !0 } })), Object.defineProperty(g, "snapToLines", e({}, i, { get: function () { return q }, set: function (a) { q = !!a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "line", e({}, i, { get: function () { return r }, set: function (a) { if ("number" != typeof a && "auto" !== a) throw new SyntaxError("An invalid number or illegal string was specified."); r = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "lineAlign", e({}, i, { get: function () { return s }, set: function (a) { var b = d(a); if (!b) throw new SyntaxError("An invalid or illegal string was specified."); s = b, this.hasBeenReset = !0 } })), Object.defineProperty(g, "position", e({}, i, { get: function () { return t }, set: function (a) { if (a < 0 || a > 100) throw new Error("Position must be between 0 and 100."); t = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "positionAlign", e({}, i, { get: function () { return u }, set: function (a) { var b = d(a); if (!b) throw new SyntaxError("An invalid or illegal string was specified."); u = b, this.hasBeenReset = !0 } })), Object.defineProperty(g, "size", e({}, i, { get: function () { return v }, set: function (a) { if (a < 0 || a > 100) throw new Error("Size must be between 0 and 100."); v = a, this.hasBeenReset = !0 } })), Object.defineProperty(g, "align", e({}, i, { get: function () { return w }, set: function (a) { var b = d(a); if (!b) throw new SyntaxError("An invalid or illegal string was specified."); w = b, this.hasBeenReset = !0 } })), g.displayState = void 0, h) return g } var g = { "": !0, lr: !0, rl: !0 }, h = { start: !0, middle: !0, end: !0, left: !0, right: !0 }; f.prototype.getCueAsHTML = function () { return WebVTT.convertCueToDOMTree(window, this.text) }, a.VTTCue = a.VTTCue || f, b.VTTCue = f }(this, this.vttjs || {}) }, {}], 108: [function (a, b, c) { !function (a, b) { function c(a) { return "string" == typeof a && (!!f[a.toLowerCase()] && a.toLowerCase()) } function d(a) { return "number" == typeof a && a >= 0 && a <= 100 } function e() { var a = 100, b = 3, e = 0, f = 100, g = 0, h = 100, i = ""; Object.defineProperties(this, { width: { enumerable: !0, get: function () { return a }, set: function (b) { if (!d(b)) throw new Error("Width must be between 0 and 100."); a = b } }, lines: { enumerable: !0, get: function () { return b }, set: function (a) { if ("number" != typeof a) throw new TypeError("Lines must be set to a number."); b = a } }, regionAnchorY: { enumerable: !0, get: function () { return f }, set: function (a) { if (!d(a)) throw new Error("RegionAnchorX must be between 0 and 100."); f = a } }, regionAnchorX: { enumerable: !0, get: function () { return e }, set: function (a) { if (!d(a)) throw new Error("RegionAnchorY must be between 0 and 100."); e = a } }, viewportAnchorY: { enumerable: !0, get: function () { return h }, set: function (a) { if (!d(a)) throw new Error("ViewportAnchorY must be between 0 and 100."); h = a } }, viewportAnchorX: { enumerable: !0, get: function () { return g }, set: function (a) { if (!d(a)) throw new Error("ViewportAnchorX must be between 0 and 100."); g = a } }, scroll: { enumerable: !0, get: function () { return i }, set: function (a) { var b = c(a); if (b === !1) throw new SyntaxError("An invalid or illegal string was specified."); i = b } } }) } var f = { "": !0, up: !0 }; a.VTTRegion = a.VTTRegion || e, b.VTTRegion = e }(this, this.vttjs || {}) }, {}], 109: [function (a, b, c) { arguments[4][95][0].apply(c, arguments) }, { 95: 95 }]
  }, {}, [93])(93)
});
!function () { !function (a) { var b = a && a.videojs; if (b) { b.CDN_VERSION = "5.19.2"; var c = "https:" === a.location.protocol ? "https://" : "http://"; b.options.flash.swf = c + "vjs.zencdn.net/swf/5.3.0/video-js.swf" } }(window), function (a, b, c, d, e, f, g) { b && b.HELP_IMPROVE_VIDEOJS !== !1 && (e.random() > .01 || (f = b.location, g = b.videojs || {}, a.src = "//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-3&utmn=1&utmhn=" + d(f.hostname) + "&utmsr=" + b.screen.availWidth + "x" + b.screen.availHeight + "&utmul=" + (c.language || c.userLanguage || "").toLowerCase() + "&utmr=" + d(f.href) + "&utmp=" + d(f.hostname + f.pathname) + "&utmcc=__utma%3D1." + e.floor(1e10 * e.random()) + ".1.1.1.1%3B&utme=8(vjsv*cdnv)9(" + g.VERSION + "*" + g.CDN_VERSION + ")")) }(new Image, window, navigator, encodeURIComponent, Math) }();
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        concat = ArrayProto.concat,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach = ArrayProto.forEach,
        nativeMap = ArrayProto.map,
        nativeReduce = ArrayProto.reduce,
        nativeReduceRight = ArrayProto.reduceRight,
        nativeFilter = ArrayProto.filter,
        nativeEvery = ArrayProto.every,
        nativeSome = ArrayProto.some,
        nativeIndexOf = ArrayProto.indexOf,
        nativeLastIndexOf = ArrayProto.lastIndexOf,
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object via a string identifier,
    // for Closure Compiler "advanced" mode.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.5.2';

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
    };

    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };

    var reduceError = 'Reduce of empty array with no initial value';

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // The right-associative version of reduce, also known as `foldr`.
    // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length;
            if (!initial) {
                memo = obj[index];
                initial = true;
            } else {
                memo = iterator.call(context, memo, obj[index], index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function(obj, iterator, context) {
        return _.filter(obj, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    };

    // Determine whether all of the elements match a truth test.
    // Delegates to **ECMAScript 5**'s native `every` if available.
    // Aliased as `all`.
    _.every = _.all = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function(obj, key) {
        return _.map(obj, function(value) { return value[key]; });
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function(obj, attrs, first) {
        if (_.isEmpty(attrs)) return first ? void 0 : [];
        return _[first ? 'find' : 'filter'](obj, function(value) {
            for (var key in attrs) {
                if (attrs[key] !== value[key]) return false;
            }
            return true;
        });
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function(obj, attrs) {
        return _.where(obj, attrs, true);
    };

    // Return the maximum element or (element-based computation).
    // Can't optimize arrays of integers longer than 65,535 elements.
    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = { computed: -Infinity, value: -Infinity };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > result.computed && (result = { value: value, computed: computed });
        });
        return result.value;
    };

    // Return the minimum element (or element-based computation).
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = { computed: Infinity, value: Infinity };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = { value: value, computed: computed });
        });
        return result.value;
    };

    // Shuffle an array, using the modern version of the 
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
    _.shuffle = function(obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function(value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };

    // Sample **n** random values from an array.
    // If **n** is not specified, returns a single random element from the array.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function(obj, n, guard) {
        if (arguments.length < 2 || guard) {
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // An internal function to generate lookup iterators.
    var lookupIterator = function(value) {
        return _.isFunction(value) ? value : function(obj) { return obj[value]; };
    };

    // Sort the object's values by a criterion produced by an iterator.
    _.sortBy = function(obj, value, context) {
        var iterator = lookupIterator(value);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function(behavior) {
        return function(obj, value, context) {
            var result = {};
            var iterator = value == null ? _.identity : lookupIterator(value);
            each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function(result, key, value) {
        (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function(result, key, value) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function(result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    });

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function(array, obj, iterator, context) {
        iterator = iterator == null ? _.identity : lookupIterator(iterator);
        var value = iterator.call(context, obj);
        var low = 0,
            high = array.length;
        while (low < high) {
            var mid = (low + high) >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    };

    // Safely create a real, live array from anything iterable.
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function(obj) {
        if (obj == null) return 0;
        return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        return (n == null) || guard ? array[0] : slice.call(array, 0, n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N. The **guard** check allows it to work with
    // `_.map`.
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if ((n == null) || guard) {
            return array[array.length - 1];
        } else {
            return slice.call(array, Math.max(array.length - n, 0));
        }
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array. The **guard**
    // check allows it to work with `_.map`.
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, (n == null) || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function(input, shallow, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        each(input, function(value) {
            if (_.isArray(value) || _.isArguments(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function(array, isSorted, iterator, context) {
        if (_.isFunction(isSorted)) {
            context = iterator;
            iterator = isSorted;
            isSorted = false;
        }
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function(value, index) {
            if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) { return !_.contains(rest, value); });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function() {
        var length = _.max(_.pluck(arguments, "length").concat(0));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, '' + i);
        }
        return results;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
    // we need this function. Return the position of the first occurrence of an
    // item in an array, or -1 if the item is not included in the array.
    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0,
            length = array.length;
        if (isSorted) {
            if (typeof isSorted == 'number') {
                i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (; i < length; i++)
            if (array[i] === item) return i;
        return -1;
    };

    // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
            return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        }
        var i = (hasIndex ? from : array.length);
        while (i--)
            if (array[i] === item) return i;
        return -1;
    };

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(length);

        while (idx < length) {
            range[idx++] = start;
            start += step;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Reusable constructor function for prototype setting.
    var ctor = function() {};

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context.
    _.partial = function(func) {
        var args = slice.call(arguments, 1);
        return function() {
            return func.apply(this, args.concat(slice.call(arguments)));
        };
    };

    // Bind all of an object's methods to that object. Useful for ensuring that
    // all callbacks defined on an object belong to it.
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length === 0) throw new Error("bindAll must be passed function names");
        each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
        };
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() { return func.apply(null, args); }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : new Date;
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = new Date;
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function() {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = function(func) {
        var ran = false,
            memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function(func, wrapper) {
        return function() {
            var args = [func];
            push.apply(args, arguments);
            return wrapper.apply(this, args);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [funcs[i].apply(this, args)];
            }
            return args[0];
        };
    };

    // Returns a function that will only be executed after being called N times.
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Object Functions
    // ----------------

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key)) keys.push(key);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = new Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = new Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };

    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] === void 0) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, dates, and booleans are compared by value.
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return a == String(b);
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                // other numeric values.
                return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a == +b;
                // RegExps are compared by their source patterns and flags.
            case '[object RegExp]':
                return a.source == b.source &&
                    a.global == b.global &&
                    a.multiline == b.multiline &&
                    a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] == a) return bStack[length] == b;
        }
        // Objects with different constructors are not equivalent, but `Object`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
            return false;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        var size = 0,
            result = true;
        // Recursively compare objects and arrays.
        if (className == '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result = size == b.length;
            if (result) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            // Deep compare objects.
            for (var key in a) {
                if (_.has(a, key)) {
                    // Count the expected number of properties.
                    size++;
                    // Deep compare each member.
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            // Ensure that both objects contain the same number of properties.
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !(size--)) break;
                }
                result = !size;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return result;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj)
            if (_.has(obj, key)) return false;
        return true;
    };

    // Is a given value a DOM element?
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
        _['is' + name] = function(obj) {
            return toString.call(obj) == '[object ' + name + ']';
        };
    });

    // Define a fallback version of the method in browsers (ahem, IE), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, 'callee'));
        };
    }

    // Optimize `isFunction` if appropriate.
    if (typeof(/./) !== 'function') {
        _.isFunction = function(obj) {
            return typeof obj === 'function';
        };
    }

    // Is a given object a finite number?
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function(obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function(obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iterators.
    _.identity = function(value) {
        return value;
    };

    // Run a function **n** times.
    _.times = function(n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // List of HTML entities for escaping.
    var entityMap = {
        escape: {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);

    // Regexes containing the keys and values listed immediately above.
    var entityRegexes = {
        escape: new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
        unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
    };

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    _.each(['escape', 'unescape'], function(method) {
        _[method] = function(string) {
            if (string == null) return '';
            return ('' + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    });

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\t': 't',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    _.template = function(text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = new RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset)
                .replace(escaper, function(match) { return '\\' + escapes[match]; });

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            }
            if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            }
            if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            index = offset + match.length;
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source + "return __p;\n";

        try {
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };

        // Provide the compiled function source as a convenience for precompilation.
        template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function, which will delegate to the wrapper.
    _.chain = function(obj) {
        return _(obj).chain();
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    each(['concat', 'join', 'slice'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });

    _.extend(_.prototype, {

        // Start chaining a wrapped Underscore object.
        chain: function() {
            this._chain = true;
            return this;
        },

        // Extracts the result from a wrapped and chained object.
        value: function() {
            return this._wrapped;
        }

    });

}).call(this);
/* requestAnimationFrame Polyfill */
'use strict';

// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

(function() {
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] ||
            window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        ||
        !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

function assert(condition, message) {
    if (!!condition === false) {
        throw message || "Assertion failed";
    }
}

/* polyfill for classList */
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {
    (function(j) { if (!("HTMLElement" in j) && !("Element" in j)) { return } var a = "classList",
            f = "prototype",
            m = (j.HTMLElement || j.Element)[f],
            b = Object,
            k = String[f].trim || function() { return this.replace(/^\s+|\s+$/g, "") },
            c = Array[f].indexOf || function(q) { var p = 0,
                    o = this.length; for (; p < o; p++) { if (p in this && this[p] === q) { return p } } return -1 },
            n = function(o, p) { this.name = o;
                this.code = DOMException[o];
                this.message = p },
            g = function(p, o) { if (o === "") { throw new n("SYNTAX_ERR", "An invalid or illegal string was specified") } if (/\s/.test(o)) { throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character") } return c.call(p, o) },
            d = function(s) { var r = k.call(s.className),
                    q = r ? r.split(/\s+/) : [],
                    p = 0,
                    o = q.length; for (; p < o; p++) { this.push(q[p]) }
                this._updateClassName = function() { s.className = this.toString() } },
            e = d[f] = [],
            i = function() { return new d(this) };
        n[f] = Error[f];
        e.item = function(o) { return this[o] || null };
        e.contains = function(o) { o += ""; return g(this, o) !== -1 };
        e.add = function() { var s = arguments,
                r = 0,
                p = s.length,
                q, o = false;
            do { q = s[r] + ""; if (g(this, q) === -1) { this.push(q);
                    o = true } } while (++r < p); if (o) { this._updateClassName() } };
        e.remove = function() { var t = arguments,
                s = 0,
                p = t.length,
                r, o = false;
            do { r = t[s] + ""; var q = g(this, r); if (q !== -1) { this.splice(q, 1);
                    o = true } } while (++s < p); if (o) { this._updateClassName() } };
        e.toggle = function(p, q) { p += ""; var o = this.contains(p),
                r = o ? q !== true && "remove" : q !== false && "add"; if (r) { this[r](p) } return !o };
        e.toString = function() { return this.join(" ") }; if (b.defineProperty) { var l = { get: i, enumerable: true, configurable: true }; try { b.defineProperty(m, a, l) } catch (h) { if (h.number === -2146823252) { l.enumerable = false;
                    b.defineProperty(m, a, l) } } } else { if (b[f].__defineGetter__) { m.__defineGetter__(a, i) } } }(self)) };
(function() {

    /* 
     * requires: dataset, classlist, getElementsByClassName
     */

    window.CHARLIE = {};
    var CHARLIE = window.CHARLIE;


    /************************************************************************
     * Constants
     */
    var KEYFRAMES_RULE = window.CSSRule.KEYFRAMES_RULE ||
        window.CSSRule.WEBKIT_KEYFRAMES_RULE ||
        window.CSSRule.MOZ_KEYFRAMES_RULE ||
        window.CSSRule.O_KEYFRAMES_RULE ||
        window.CSSRule.MS_KEYFRAMES_RULE,

        PREFIXES = ["webkit", "moz", "o", "ms"];


    /************************************************************************
     * Helper Functions
     */
    var scrapeAnimationData = function() {

            /* Grab the data from the DOM. */
            var data = {};
            _.forEach(
                //loop through every element that should be animated
                document.getElementsByClassName("charlie"),

                //for each element, pull off the info from the dataset
                function(element) {

                    /*
                     * Creates an object of animation name: time, e.g.
                     * 
                     * { swoopy: [ 
                     *    { element: domElement,
                     *      time: 6522 },
                     *    { element: anotherElement,
                     *      time: 7834 }]
                     * }
                     */

                    //
                    var names = element.dataset.animations.split(/\s*,\s*/),
                        times = element.dataset.times.split(/\s*,\s*/),

                        // creates an array of arrays, each one called a 'tuple'
                        // basically ties the time to the 
                        // animation name, so it looks like:
                        //[["zippy", 1], ["fade", 2] ... ]
                        tuples = _.zip(names, times);

                    /*
                     * turn the tuples into an object, 
                     * which is just a little easier to work with.
                     * We end up with an object that looks like:
                     * {
                     *  fade: [ {element: domElement, time: "1.2s"}, ... ],
                     *  fling: [ {element: domelement, time: "2.4s"}, ... ]
                     * }
                     * So we can reuse an animation on different elements
                     * at different times.
                     */

                    _.forEach(tuples, function(tuple) {
                        var name = tuple[0],
                            time = tuple[1];
                        data[name] = data[name] || [];
                        data[name].push({
                            element: element,
                            time: time
                        })
                    });
                });
            return data;
        },


        /* 
           iterate through every stylesheet and create a list of rules
           that matches the passed in matcher function
        */
        findRules = function(matches) {
            var styleSheets = _.toArray(document.styleSheets),
                rules = [];

            _.forEach(styleSheets, function(sheet) {
                var cssRules = [];
                try {
                    cssRules = _.toArray(sheet.cssRules);
                } catch (e) {
                    //cross domain exception
                }
                _.forEach(cssRules, function(rule) {
                    if (matches(rule)) {
                        rules.push(rule);
                    }
                });
            });
            return rules;
        },

        roundTime = function(time) {
            //round a time to one tenth of a second
            //return time.toFixed(1);
            return Math.round(time * 10) / 10;
        },

        animationName = (function() {
            var name = "";
            return function(style) {
                if (name) {
                    return name;
                } else {
                    if (style.animationName) {
                        name = "animationName";
                    } else if (style.webkitAnimationName) {
                        name = "webkitAnimationName";
                    } else if (style.mozAnimationName) {
                        name = "mozAnimationName";
                    } else if (style.oAnimationName) {
                        name = "oAnimationName";
                    } else if (style.msAnimationName) {
                        name = "msAnimationName";
                    } else {
                        name = "";
                    }
                    return name;
                }
            }
        })(),

        prefixed = function(prop) {

            var props = _.map(PREFIXES, function(prefix) {
                return prefix + prop.substring(0, 1).toUpperCase() + prop.substring(1);
            });
            props.push(prop);
            return props;
        },

        animationDuration = (function() {

            var durationName = "",
                props = prefixed("animationDuration");

            return function(style) {
                if (!durationName) {
                    for (var i = 0; i < props.length; i++) {
                        var prop = props[i];
                        if (style[prop]) {
                            durationName = prop;
                            break;
                        }
                    }
                }
                return style[durationName];
            };
        })(),

        calculatedDuration = function(style) {
            /* NOTE: could support multiple iterations, but 
             * only the same duration for each iteration.
             * TODO: support iterations
             */
            var duration = animationDuration(style);
            duration = Number(duration.substring(0, duration.length - 1));

            return duration || 0;
        },

        onAnimationEnd = function(element, callback) {
            element.addEventListener("webkitAnimationEnd", callback, false);
            element.addEventListener("mozAnimationEnd", callback, false);
            element.addEventListener("msAnimationEnd", callback, false);
            element.addEventListener("oAnimationEnd", callback, false);
            element.addEventListener("animationend", callback, false);
        },

        setDelay = function(animation, seconds) {
            var delay = -(seconds - animation.startsAt),
                delay = delay < 0 ? delay : 0,
                milliseconds = Math.floor(delay * 1000) + "ms";

            animation.element.style.webkitAnimationDelay = milliseconds;
            animation.element.style.mozAnimationDelay = milliseconds;
            animation.element.style.oAnimationDelay = milliseconds;
            animation.element.style.msAnimationDelay = milliseconds;
            animation.element.style.animationDelay = milliseconds;
        };






    /************************************************************************
     * CSSAnimations
     * 
     * Basically a bucket for holding keyframes and stylesheet rules
     * for animations.
     */

    var CSSAnimations = function(keyframes, cssRules) {
        this.keyframes = keyframes;
        this.cssRules = cssRules;
    };

    CSSAnimations.create = function() {
        /* create keyframe lookup */
        var keyframeRules = findRules(function(rule) {
                return KEYFRAMES_RULE === rule.type;
            }),
            keyframes =
            _.object(
                _.map(
                    keyframeRules,
                    function(rule) { return [rule.name, rule]; }));

        /* create animation styles lookup */
        var animationStyleRules = findRules(function(rule) {
                return rule.style && rule.style[animationName(rule.style)];
            }),
            cssRules =
            _.object(
                _.map(
                    animationStyleRules,
                    function(style) { return [style.selectorText.substring(1), style]; }));

        return new CSSAnimations(keyframes, cssRules);
    };

    CSSAnimations.prototype = {
        keyframes: {},
        cssRules: {},
    };
    CHARLIE.CSSAnimations = CSSAnimations;


    /************************************************************************
     * Animation Controller 
     */

    var AnimationController = function(animations, bySeconds, timeModel, callbacks) {
        this.animations = animations || {};
        this.bySeconds = bySeconds || {};
        this.running = [];
        this.paused = [];
        this.timeModel = timeModel || {};
        this.callbacks = callbacks || {};
    };

    AnimationController.prototype = {

        animations: {},
        bySeconds: {},
        running: [],
        paused: [],
        timeModel: {},
        callbacks: {},

        startAnimations: function(time, videoTime) {

            // allow precision to one tenth of a second
            var seconds = roundTime(videoTime),
                me = this;

            //resume any paused animations
            me.resumeAnimations();

            /* start up any animations that should be running at this second.
             * Don't start any that are already running
             */
            if (me.bySeconds[seconds]) {
                var animations = me.bySeconds[seconds],
                    notRunning = _.filter(animations, function(animation) {
                        return !_.contains(me.running, animation);
                    });

                /* requestAnimationFrame happens more than 
                 *  every tenth of a second, so this code will run
                 *  multiple times for each animation starting time
                 */
                _.forEach(notRunning, function(animation) {
                    animation.start();
                    me.running.push(animation);
                });
            }
        },

        executeCallbacks: (function() {

            var currentTime = 0;

            return function(time, videoTime) {

                // allow precision to one tenth of a second
                var seconds = roundTime(videoTime),
                    me = this;

                if (seconds > currentTime || seconds < currentTime) {
                    currentTime = seconds;
                    var callbacks = me.callbacks[seconds] || [];
                    _.forEach(callbacks, function(cb) {
                        cb();
                    });
                }
            }
        })(),

        seek: (function() {

            var animationsToStart = function(me, seconds) {

                var toStart = [];

                for (var i = 0; i < me.timeModel.length; i++) {

                    var animation = me.timeModel[i];

                    //stop looking, nothing else is running
                    if (animation.startsAt > seconds) {
                        break;
                    }

                    if (animation.endsAt > seconds) {
                        toStart.push(animation);
                    }
                }
                return toStart;
            };

            /* seek function */
            return function(videoTime, playNow) {

                // 1. go through each to start
                //2. set the animation delay so it starts at the right place
                //3. start 'em up.

                var me = this,
                    seconds = roundTime(videoTime),
                    toStart = animationsToStart(me, seconds);

                // go through each animation to start
                _.forEach(toStart, function(animation) {

                    //set the delay to start the animation at the right place
                    setDelay(animation, seconds);

                    //start it up
                    animation.start();

                    /* if the move is playing right now, then let the animation
                     * keep playing, otherwise pause the animation to wait
                     * until the video resumes.
                     */

                    if (playNow) {
                        me.running.push(animation);

                    } else {
                        me.paused.push(animation);
                        animation.pause();
                    }
                });
            }
        })(),

        pauseAnimations: function() {

            var me = this,
                animation;

            while (animation = me.running.pop()) {
                animation.pause();
                //keep track of paused animations so we can resume them later ...
                me.paused.push(animation);
            }
        },

        clearAnimations: function() {

            var me = this,
                animation;

            /* Need to be playing in order 
             * to cause a reflow, otherwise 
             * the offset fix in the reset method
             * of the animation class has no effect.
             */
            me.resumeAnimations();

            while (animation = me.running.pop()) {
                animation.reset();
            }
            while (animation = me.paused.pop()) {
                animation.reset();
            }

        },

        resumeAnimations: function() {

            var me = this,
                animation;

            while (animation = me.paused.pop()) {
                animation.resume();
                me.running.push(animation);
            }
        },

        bind: (function() {

            var createAnimations = function(me, cssAnimations, startTimes, callbacks) {

                    _.forEach(_.keys(startTimes),
                        function(name) {

                            var keyframe = cssAnimations.keyframes[name],
                                cssRule = cssAnimations.cssRules[name];

                            _.forEach(startTimes[name], function(startTime) {
                                var animation = new Animation(
                                    name,
                                    cssRule,
                                    keyframe,
                                    startTime.element,
                                    startTime.time);

                                me.animations[name] = me.animations[name] || [];
                                me.bySeconds[animation.startsAt] =
                                    me.bySeconds[animation.startsAt] || [];

                                me.animations[name].push(animation);
                                me.bySeconds[animation.startsAt].push(animation);
                            });
                        });
                },

                createTimeModel = function(me, animations) {
                    me.timeModel = _.sortBy(animations, "endsAt");
                };

            /* The AnimationController bind method */
            return function(cssAnimations, startTimes) {

                var me = this;
                createAnimations(me, cssAnimations, startTimes);

                var animations = _.flatten(_.values(me.animations));
                createTimeModel(me, animations);

                me.callbacks = callbacks;
            }
        })() /* returns the bind method*/
    }
    CHARLIE.AnimationController = AnimationController;


    /************************************************************************
     * Animation
     */
    var Animation = function(name, cssRule, keyframe, element, startsAt) {

        assert(name, "You can't create an animation without a name");
        assert(cssRule, "No CSS rule defined for animation " + name);
        assert(keyframe, "No keyframe defined for animation " + name);
        assert(element, "No element found. Animations must be bound to a DOM element.");
        assert(startsAt, "No start time provided for the animation");

        this.name = name;
        this.element = element;
        this.cssRule = cssRule;
        this.keyframe = keyframe;
        this.startsAt = roundTime(Number(startsAt));
        this.duration = calculatedDuration(cssRule.style);
        this.endsAt = this.startsAt + this.duration;
    };

    Animation.prototype = {

        name: "",
        element: null,
        cssRule: null,
        keyframe: null,
        startsAt: -1,
        duration: -1,
        endsAt: -1,
        ios: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),

        start: function() {
            var me = this;
            this.animated = 'animated';
            //The name of the animation is the same as the class name by convention.
            me.element.classList.add(me.name);
            me.element.classList.add(me.animated);
            onAnimationEnd(me.element, function() {
                me.reset();
            });
        },

        reset: function() {
            this.element.classList.remove(this.name);
            this.element.classList.remove(this.animated);
            // cause a reflow, otherwise the animation isn't fully 
            // removed. (let's call this a browser bug).
            this.element.offsetWidth = this.element.offsetWidth;

            //reset any calculated animation delays.
            setDelay(this, 0);
        },

        pause: function() {
            this.element.style.webkitAnimationPlayState = "paused";
            this.element.style.mozAnimationPlayState = "paused";
            this.element.style.oAnimationPlayState = "paused";
            this.element.style.animationPlayState = "paused";
            if ( this.ios ) {
                if (video || document.querySelector('video')) {
                    var myCurrentTime = video.currentTime || document.querySelector('video').currentTime;
                    setDelay(this, myCurrentTime);
                }
                this.element.classList.add('js-pause-animation');
            }
        },

        resume: function() {
            this.element.style.webkitAnimationPlayState = "running";
            this.element.style.mozAnimationPlayState = "running";
            this.element.style.oAnimationPlayState = "running";
            this.element.style.animationPlayState = "running";
            if ( this.ios ) {
                this.element.classList.remove('js-pause-animation');
            }
        }

    }
    CHARLIE.Animation = Animation;


    /************************************************************************
     * BigLoop
     */
    var BigLoop = function(controller) {
        assert(controller, "Can't create a BigLoop without an AnimationController");
        this.controller = controller;
    };

    BigLoop.prototype = {

        controller: null,
        video: null,
        running: false,
        frameID: -1,

        bind: function(video) {
            //start and stop the loop when the video
            //starts and stops
            this.video = video;
            video.addEventListener("play", this.start.bind(this), false);
            video.addEventListener("ended", this.ended.bind(this), false);
            video.addEventListener("pause", this.stop.bind(this), false);
            video.addEventListener("seeked", this.seeked.bind(this), false);
        },

        ended: function() {
            this.controller.clearAnimations();
        },

        seeked: function() {
            this.controller.clearAnimations();
            this.controller.seek(this.video.currentTime, !this.video.paused);
        },

        tick: function(time) {
            if (this.running) {
                this.frameID = requestAnimationFrame(this.tick.bind(this));
                this.controller.startAnimations(time, this.video.currentTime);
                this.controller.executeCallbacks(time, this.video.currentTime);
            }
        },

        start: function() {
            this.running = true;
            this.tick();
        },

        stop: function() {
            if (this.frameID) {
                cancelAnimationFrame(this.frameID);
                this.frameID = -1;
            }
            this.running = false;
            this.controller.pauseAnimations();
        }
    }

    var callbacks = {};
    CHARLIE.setup = function(video) {
        var cssAnimations = CSSAnimations.create(),
            animationData = scrapeAnimationData(),
            controller = new AnimationController(),
            loop = new BigLoop(controller);
        controller.bind(cssAnimations, animationData, callbacks);
        loop.bind(video);
    }

    CHARLIE.addCallback = function(callback, time) {
        time = roundTime(time);
        var cbs = callbacks[time] || [];
        cbs.push(callback);
        callbacks[time] = cbs;
    }

})();
/**
 * setImmediate polyfill v1.0.1, supports IE9+
 * © 2014–2015 Dmitry Korobkin
 * Released under the MIT license
 * github.com/Octane/setImmediate
 */
window.setImmediate || function () {'use strict';

  var uid = 0;
  var storage = {};
  var firstCall = true;
  var slice = Array.prototype.slice;
  var message = 'setImmediatePolyfillMessage';

  function fastApply(args) {
    var func = args[0];
    switch (args.length) {
      case 1:
        return func();
      case 2:
        return func(args[1]);
      case 3:
        return func(args[1], args[2]);
    }
    return func.apply(window, slice.call(args, 1));
  }

  function callback(event) {
    var key = event.data;
    var data;
    if (typeof key == 'string' && key.indexOf(message) == 0) {
      data = storage[key];
      if (data) {
        delete storage[key];
        fastApply(data);
      }
    }
  }

  window.setImmediate = function setImmediate() {
    var id = uid++;
    var key = message + id;
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    storage[key] = args;
    if (firstCall) {
      firstCall = false;
      window.addEventListener('message', callback);
    }
    window.postMessage(key, '*');
    return id;
  };

  window.clearImmediate = function clearImmediate(id) {
    delete storage[message + id];
  };

}();

/**
 * Promise polyfill v1.0.10
 * requires setImmediate
 *
 * © 2014–2015 Dmitry Korobkin
 * Released under the MIT license
 * github.com/Octane/Promise
 */
(function (global) {'use strict';

  var STATUS = '[[PromiseStatus]]';
  var VALUE = '[[PromiseValue]]';
  var ON_FUlFILLED = '[[OnFulfilled]]';
  var ON_REJECTED = '[[OnRejected]]';
  var ORIGINAL_ERROR = '[[OriginalError]]';
  var PENDING = 'pending';
  var INTERNAL_PENDING = 'internal pending';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';
  var NOT_ARRAY = 'not an array.';
  var REQUIRES_NEW = 'constructor Promise requires "new".';
  var CHAINING_CYCLE = 'then() cannot return same Promise that it resolves.';

  var setImmediate = global.setImmediate || require('timers').setImmediate;
  var isArray = Array.isArray || function (anything) {
      return Object.prototype.toString.call(anything) == '[object Array]';
    };

  function InternalError(originalError) {
    this[ORIGINAL_ERROR] = originalError;
  }

  function isInternalError(anything) {
    return anything instanceof InternalError;
  }

  function isObject(anything) {
    //Object.create(null) instanceof Object → false
    return Object(anything) === anything;
  }

  function isCallable(anything) {
    return typeof anything == 'function';
  }

  function isPromise(anything) {
    return anything instanceof Promise;
  }

  function identity(value) {
    return value;
  }

  function thrower(reason) {
    throw reason;
  }

  function enqueue(promise, onFulfilled, onRejected) {
    if (!promise[ON_FUlFILLED]) {
      promise[ON_FUlFILLED] = [];
      promise[ON_REJECTED] = [];
    }
    promise[ON_FUlFILLED].push(onFulfilled);
    promise[ON_REJECTED].push(onRejected);
  }

  function clearAllQueues(promise) {
    delete promise[ON_FUlFILLED];
    delete promise[ON_REJECTED];
  }

  function callEach(queue) {
    var i;
    var length = queue.length;
    for (i = 0; i < length; i++) {
      queue[i]();
    }
  }

  function call(resolve, reject, value) {
    var anything = toPromise(value);
    if (isPromise(anything)) {
      anything.then(resolve, reject);
    } else if (isInternalError(anything)) {
      reject(anything[ORIGINAL_ERROR]);
    } else {
      resolve(value);
    }
  }

  function toPromise(anything) {
    var then;
    if (isPromise(anything)) {
      return anything;
    }
    if(isObject(anything)) {
      try {
        then = anything.then;
      } catch (error) {
        return new InternalError(error);
      }
      if (isCallable(then)) {
        return new Promise(function (resolve, reject) {
          setImmediate(function () {
            try {
              then.call(anything, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    }
    return null;
  }

  function resolvePromise(promise, resolver) {
    function resolve(value) {
      if (promise[STATUS] == PENDING) {
        fulfillPromise(promise, value);
      }
    }
    function reject(reason) {
      if (promise[STATUS] == PENDING) {
        rejectPromise(promise, reason);
      }
    }
    try {
      resolver(resolve, reject);
    } catch(error) {
      reject(error);
    }
  }

  function fulfillPromise(promise, value) {
    var queue;
    var anything = toPromise(value);
    if (isPromise(anything)) {
      promise[STATUS] = INTERNAL_PENDING;
      anything.then(
        function (value) {
          fulfillPromise(promise, value);
        },
        function (reason) {
          rejectPromise(promise, reason);
        }
      );
    } else if (isInternalError(anything)) {
      rejectPromise(promise, anything[ORIGINAL_ERROR]);
    } else {
      promise[STATUS] = FULFILLED;
      promise[VALUE] = value;
      queue = promise[ON_FUlFILLED];
      if (queue && queue.length) {
        clearAllQueues(promise);
        callEach(queue);
      }
    }
  }

  function rejectPromise(promise, reason) {
    var queue = promise[ON_REJECTED];
    promise[STATUS] = REJECTED;
    promise[VALUE] = reason;
    if (queue && queue.length) {
      clearAllQueues(promise);
      callEach(queue);
    }
  }

  function Promise(resolver) {
    var promise = this;
    if (!isPromise(promise)) {
      throw new TypeError(REQUIRES_NEW);
    }
    promise[STATUS] = PENDING;
    promise[VALUE] = undefined;
    resolvePromise(promise, resolver);
  }

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var promise = this;
    var nextPromise;
    onFulfilled = isCallable(onFulfilled) ? onFulfilled : identity;
    onRejected = isCallable(onRejected) ? onRejected : thrower;
    nextPromise = new Promise(function (resolve, reject) {
      function tryCall(func) {
        var value;
        try {
          value = func(promise[VALUE]);
        } catch (error) {
          reject(error);
          return;
        }
        if (value === nextPromise) {
          reject(new TypeError(CHAINING_CYCLE));
        } else {
          call(resolve, reject, value);
        }
      }
      function asyncOnFulfilled() {
        setImmediate(tryCall, onFulfilled);
      }
      function asyncOnRejected() {
        setImmediate(tryCall, onRejected);
      }
      switch (promise[STATUS]) {
        case FULFILLED:
          asyncOnFulfilled();
          break;
        case REJECTED:
          asyncOnRejected();
          break;
        default:
          enqueue(promise, asyncOnFulfilled, asyncOnRejected);
      }
    });
    return nextPromise;
  };

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(identity, onRejected);
  };

  Promise.resolve = function (value) {
    var anything = toPromise(value);
    if (isPromise(anything)) {
      return anything;
    }
    return new Promise(function (resolve, reject) {
      if (isInternalError(anything)) {
        reject(anything[ORIGINAL_ERROR]);
      } else {
        resolve(value);
      }
    });
  };

  Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
      reject(reason);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      var i;
      var length;
      if (isArray(values)) {
        length = values.length;
        for (i = 0; i < length; i++) {
          call(resolve, reject, values[i]);
        }
      } else {
        reject(new TypeError(NOT_ARRAY));
      }
    });
  };

  Promise.all = function (values) {
    return new Promise(function (resolve, reject) {
      var fulfilledCount = 0;
      var promiseCount = 0;
      var anything;
      var length;
      var value;
      var i;
      if (isArray(values)) {
        values = values.slice(0);
        length = values.length;
        for (i = 0; i < length; i++) {
          value = values[i];
          anything = toPromise(value);
          if (isPromise(anything)) {
            promiseCount++;
            anything.then(
              function (index) {
                return function (value) {
                  values[index] = value;
                  fulfilledCount++;
                  if (fulfilledCount == promiseCount) {
                    resolve(values);
                  }
                };
              }(i),
              reject
            );
          } else if (isInternalError(anything)) {
            reject(anything[ORIGINAL_ERROR]);
          } else {
            //[1, , 3] → [1, undefined, 3]
            values[i] = value;
          }
        }
        if (!promiseCount) {
          resolve(values);
        }
      } else {
        reject(new TypeError(NOT_ARRAY));
      }
    });
  };

  if (typeof module != 'undefined' && module.exports) {
    module.exports = global.Promise || Promise;
  } else if (!global.Promise) {
    global.Promise = Promise;
  }

}(this));
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function Pictor(config) {
  var videoElem = document.createElement('video');
  if (config) {
    this.config = config;
    videoElem.setAttribute('src', config.videoUrl);
    videoElem.setAttribute('class', 'video-js vjs-fluid');
    videoElem.setAttribute('webkit-playsinline', '');
    videoElem.setAttribute('playsinline', '');
    videoElem.setAttribute('id', 'js--video-player');
    if (config.startPoster) {
      videoElem.setAttribute('poster', config.startPoster);
    }
    window.FB_APP_ID = config.FB_APP_ID;
    video = videoElem;
  }

  this.video = videoElem;
}

Pictor.prototype.animationStart = (function (el) {
  var animations = {
    animation: 'animationstart',
    OAnimation: 'oAnimationStart',
    MozAnimation: 'mozAnimationStart',
    WebkitAnimation: 'webkitAnimationStart',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

Pictor.prototype.animationEnd = (function (el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };
  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
  animateFinish();
})(document.createElement('div'));

Pictor.prototype.fetchData = function (uri, callback) {
  var self = this;
  // console.log('fetch', uri)
  fetch(uri)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      self.data = myJson;
      callback();
    });
};


Pictor.prototype.init = function () {
  var self = this,
    config = self.config;
  // var video = self.video;
  if (!self.config.fbLogin) {
    this.fetchData('data.json', function callback() {

      new Promise(function (resolve, reject) {
        self._handleRules(config.rules);
        resolve('done');
      }).then(function () {
        // retargeting video element
        var v = document.getElementsByClassName('vjs-tech')[0];
        CHARLIE.setup(v);
        $(document).trigger('pictorInit');

        $('.charlie').on(self.animationStart, function (el) {
          var $number = $(this).find('.number');
          // console.log('animate start', $number)
          if ($number.hasClass('shuffle') && !$number.hasClass('shuffled')) {
            $number.addClass('shuffled')
            self.numberAnimation(parseFloat($number.text()), this);

          }
        });

      });
    });
  } else {
    if (!self.data) return;
    if (self.initialized) return;
    self.initialized = true;

    new Promise(function (resolve, reject) {
      self._handleRules(config.rules);
      resolve('done');
    }).then(function () {
      // retargeting video element
      var v = document.getElementsByClassName('vjs-tech')[0];
      CHARLIE.setup(v);
      $(document).trigger('pictorInit');

      $('.charlie').on(self.animationStart, function (el) {
        var $number = $(this).find('.number');
        // console.log('animate start', $number)
        if ($number.hasClass('shuffle') && !$number.hasClass('shuffled')) {
          $number.addClass('shuffled')
          self.numberAnimation(parseFloat($number.text()), this);
        }
      });
    });
  }

  $('#videoPlayerWrapper').append(self.video);
  self.myPlayer = videojs('js--video-player', {
    controls: true,
    autoplay: false,
    preload: true,
  });

  // create restart button
  $('#js--video-player').append('<button class="vjs-icon-replay vjs-replay-button"></button>');

  if (self.isiOS() || self.isAndroid()) {
    $('.vjs-fullscreen-control').hide();
  }

  $('.vjs-fluid').append(textAnimationBlock);
  textAnimationBlock.classList.add('is-ready');

  var currentTime = 0;
  self.myPlayer.el_.addEventListener('webkitfullscreenchange', function () {
    self.handleFullScreen.call(this, event);
  });

  self.controlbarAtBottom();
  self.iOSHotFix();

  //This example allows users to seek backwards but not forwards.
  //To disable all seeking replace the if statements from the next
  //two functions with myPlayer.currentTime(currentTime);
  var timeout
  self.myPlayer.on('waiting', function () {
    if (!shouldWait) return;
    if (self.myPlayer.currentTime() < 1) return;
    self.myPlayer.pause();
    if (timeout) return;
    timeout = setTimeout(function () {
      self.myPlayer.play();
      timeout = '';
    }, 5000)
  })


  self.myPlayer.on('seeking', function (event) {
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });

  self.myPlayer.on('seeked', function (event) {
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });
  self.myPlayer.on('ended', function () {
    $(".button").addClass("button-opacity");
    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    self.myPlayer.currentTime(0);
    self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.removeClass('video-paused');
    self.myPlayer.bigPlayButton.hide();
    $('.vjs-replay-button').removeClass('video-paused').show();

    if (self.config.endPoster) {
      self.myPlayer.poster(self.config.endPoster);
    }

  });
  self.myPlayer.on('play', function () {
    $(".button").removeClass('button-opacity');
    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
    if (self.myPlayer.bigPlayButton.hasClass('video-paused')) {
      self.myPlayer.bigPlayButton.removeClass('video-paused');
    }
    if ($('.vjs-replay-button').hasClass('video-paused')) {
      $('.vjs-replay-button').removeClass('video-paused');
    }
    $('.vjs-replay-button').hide();

    $('.shuffled').each(function () {
      $(this).removeClass('shuffled');
    })

  });

  self.myPlayer.on('timeupdate', function () {
    if (self.myPlayer.currentTime() > 0) {
      shouldWait = true;
    }
  });

  $('.vjs-replay-button').on('click', function () {
    shouldWait = false;
    self.myPlayer.currentTime(0);
    $(this).hide();
    self.myPlayer.play();
  });

  self.myPlayer.on('pause', function () {
    // console.log('video pause');
    self.myPlayer.bigPlayButton.addClass('video-paused');
    $('.vjs-replay-button').addClass('video-paused').show();
  });

};
var video,
  shouldWait = false,
  textAnimationBlock = document.getElementById('textAnimationBlock');

Pictor.prototype.handleFullScreen = function (event) {
  var self = this;
  // console.log('handleFullScreen', event);
  /* Fullscreen */
  lockScreenInLandscape();

  function requestFullscreenVideo() {
    if (videoPlayerWrapper.requestFullscreen) {
      videoPlayerWrapper.requestFullscreen();
    } else {
      video.webkitEnterFullscreen();
    }
  }

  if ('orientation' in screen) {
    screen.orientation.addEventListener('change', function () {
      // Let's automatically request fullscreen if user switches device in landscape mode.
      if (screen.orientation.type.startsWith('landscape')) {
        requestFullscreenVideo();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  }

  function lockScreenInLandscape() {
    if (!('orientation' in screen)) {
      return;
    }

    // Let's force landscape mode only if device is in portrait mode and can be held in one hand.
    if (
      matchMedia('(orientation: portrait) and (max-device-width: 768px)')
        .matches
    ) {
      screen.orientation.lock('landscape').then(function () {
        listenToDeviceOrientationChanges();
      });
    }
  }

  function listenToDeviceOrientationChanges() {
    if (!('DeviceOrientationEvent' in window)) {
      return;
    }

    var previousDeviceOrientation, currentDeviceOrientation;
    window.addEventListener(
      'deviceorientation',
      function onDeviceOrientationChange(event) {
        // event.beta represents a front to back motion of the device and
        // event.gamma a left to right motion.
        if (Math.abs(event.gamma) > 10 || Math.abs(event.beta) < 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          currentDeviceOrientation = 'landscape';
          return;
        }
        if (Math.abs(event.gamma) < 10 || Math.abs(event.beta) > 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          // When device is rotated back to portrait, let's unlock screen orientation.
          if (previousDeviceOrientation == 'landscape') {
            screen.orientation.unlock();
            window.removeEventListener(
              'deviceorientation',
              onDeviceOrientationChange
            );
          }
        }
      }
    );
  }
};


Pictor.prototype._handleRules = function (rules) {

  var self = this;
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    self._createElem(rule);
  }
}

Pictor.prototype._createElem = function (elem) {
  var element;
  var self = this;

  if (elem.tag) {
    element = document.createElement(elem.tag);
  } else {
    element = document.createElement('div');
  }

  var textContainer = document.getElementById('textAnimationBlock');

  if (elem.id) {
    element.setAttribute('id', elem.id);
  }

  if (elem.href) {
    element.setAttribute('href', elem.href);
  }

  if (elem.hrefTarget) {
    element.setAttribute('href', self.data[elem.hrefTarget]);
  }

  if (elem.newWindow) {
    element.setAttribute('target', '_blank');
  }

  if (elem.animations) {
    element.setAttribute('data-animations', elem.animations);
  }

  if (elem.times) {
    element.setAttribute('data-times', elem.times);
  }

  if (elem.class) {
    element.setAttribute('class', elem.class);
  }

  if (elem.width) {
    element.setAttribute('width', elem.width);
  }

  if (elem.height) {
    element.setAttribute('height', elem.height);
  }

  if (elem.text) {
    var text = document.createTextNode(elem.text);
    element.appendChild(text);
  }

  if (elem.target && !elem.split) {
    var text = document.createTextNode(self.data[elem.target]);
    element.appendChild(text);
  }


  if (elem.bgImg) {
    element.style.background = "url(" + self.data[elem.bgImg] + ") center no-repeat";
    element.style.backgroundSize = "contain";
  }

  if (elem.parent) {
    // append to parent
    $(elem.parent).append(element);
  } else {
    $('#textAnimationBlock').append(element);
  }
  if (elem.split) {
    self.splitUp(self.data[elem.target], '#' + elem.id, elem.split.separator, elem.split.time)
  }
}

Pictor.prototype.isiOS = function () {
  return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}

Pictor.prototype.isAndroid = function () {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("android") > -1;
}

Pictor.prototype.controlbarAtBottom = function () {
  var self = this;
  var height = $('.vjs-control-bar').height();
  $('.vjs-control-bar').css('bottom', '-' + height + 'px');

  window.addEventListener('resize', self.controlbarAtBottom);
  window.addEventListener('orientationchange', self.controlbarAtBottom);
}

Pictor.prototype.iOSHotFix = function () {
  var self = this;

  self.myPlayer.on('pause', function () {

    if (self.isiOS()) {
      $('.charlie').each(function () {
        if ($(this).hasClass('animated')) {
          $(this).css('-webkit-transform', $(this).css('-webkit-transform'));
        }
      })
    }
  })
}
'use strict'
Pictor.prototype.splitUp = function (word, id, separator, time) {
  console.log(id)
  var arr = word.split(separator);
  time = parseFloat(time)

  var i = 0;
  $.each(arr, function (index) {

    time += 0.1;
    i = 0;
    time = +time.toFixed(2);

    $(id).append(
      '<span class="charlie" data-animations="textAnimateLetter" data-times=" ' + time +
      '">' +
      (this == ' ' ? '&nbsp;' : this) +
      '</span>'
    );

    i++;
  });
};

Pictor.prototype.numberAnimation = function (amount, parent) {
  var options = {
    amount: amount,
    delay: 0,
    duration: 50,
  };
  var amount = options.amount;
  var time = amount / options.duration;
  var number = 0;
  var fixed = 0;
  if (amount.toString().split('.')[1]) {
    fixed = amount.toString().split('.')[1].length;
  }
  requestAnimationFrame(function interval() {
    number += time;
    parent.querySelector('.number').innerHTML =
      // Math.round(number * 100) / 100;
      number.toFixed(fixed);
    if (number >= amount) {
      document.querySelector('.number').innerHTML = amount;
      cancelAnimationFrame(interval);
    } else {
      requestAnimationFrame(interval);
    }
  });
};


var config = {
  // config here
  videoUrl: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
  textUrl: 'data.json',
  rules: [
    {
      tag: 'canvas',
      id: 'myChart',
      height: '200',
      width: '200'
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here

  var data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
  };
  var ctx = $("#myChart");

  var animated = false;
  var destroyed = false;
  var myDoughnutChart;

  pictor.myPlayer.on('timeupdate', function () {
    console.log(pictor.myPlayer.currentTime().toFixed(1));
    if (pictor.myPlayer.currentTime().toFixed(1) > 2 && pictor.myPlayer.currentTime().toFixed(1) < 2.5) {
      if (animated) return;
      myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
      });
      animated = true;
    }

    if (pictor.myPlayer.currentTime().toFixed(1) >= 2.5 && pictor.myPlayer.currentTime().toFixed(1) < 3) {
      if (destroyed) return;
      myDoughnutChart.destroy();
      destroyed = true;
    }

    if (pictor.myPlayer.currentTime() == 0) {
      animated = false;
      destroyed = false;
      myDoughnutChart.destroy();
    }
    
  });
});

