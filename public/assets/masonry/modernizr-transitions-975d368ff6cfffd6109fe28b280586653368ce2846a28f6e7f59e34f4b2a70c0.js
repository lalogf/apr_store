window.Modernizr=function(t,e,i){function n(){}function o(t,e){var i=t.charAt(0).toUpperCase()+t.substr(1),n=(t+" "+v.join(i+" ")+i).split(" ");return!!r(n,e)}function r(t,e){for(var n in t)if(m[t[n]]!==i&&(!e||e(t[n],g)))return!0}function s(t,e){return typeof t===e}function a(t){m.cssText=t}var c,h,l="1.7",u={},d=!0,f=e.documentElement,p=(e.head||e.getElementsByTagName("head")[0],"modernizr"),g=e.createElement(p),m=g.style,y=e.createElement("input"),v=(Object.prototype.toString," -webkit- -moz- -o- -ms- -khtml- ".split(" "),"Webkit Moz O ms Khtml".split(" ")),b={},_=[],C=(function(){function t(t,o){o=o||e.createElement(n[t]||"div");var r=(t="on"+t)in o;return r||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),r=s(o[t],"function"),s(o[t],i)||(o[t]=i),o.removeAttribute(t))),o=null,r}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),{}.hasOwnProperty);h=s(C,i)||s(C.call,i)?function(t,e){return e in t&&s(t.constructor.prototype[e],i)}:function(t,e){return C.call(t,e)},b.csstransitions=function(){return o("transitionProperty")};for(var A in b)h(b,A)&&(c=A.toLowerCase(),u[c]=b[A](),_.push((u[c]?"":"no-")+c));return u.input||n(),u.crosswindowmessaging=u.postmessage,u.historymanagement=u.history,u.addTest=function(t,e){return t=t.toLowerCase(),u[t]?void 0:(e=!!e(),f.className+=" "+(e?"":"no-")+t,u[t]=e,u)},a(""),g=y=null,u._enableHTML5=d,u._version=l,f.className=f.className.replace(/\bno-js\b/,"")+" js "+_.join(" "),u}(this,this.document);