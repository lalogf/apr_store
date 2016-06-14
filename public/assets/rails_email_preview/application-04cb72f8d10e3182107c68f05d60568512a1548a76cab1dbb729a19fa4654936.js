(function(){var e,t,o,i,n,r,s,a,c,l,h,d,u,p,f,g,m,y,v,_,b,E,A,C,S,O,T,F,x,I,w,R,L,N,k,D,P,B,M,H,G,j,W,U,Y,K,X,V,z,q,$,Q,J,Z,ee,te,oe=[].indexOf||function(e){for(var t=0,o=this.length;o>t;t++)if(t in this&&this[t]===e)return t;return-1},ie=function(e,t){function o(){this.constructor=e}for(var i in t)ne.call(t,i)&&(e[i]=t[i]);return o.prototype=t.prototype,e.prototype=new o,e.__super__=t.prototype,e},ne={}.hasOwnProperty,re=[].slice,se=function(e,t){return function(){return e.apply(t,arguments)}};N={},u=10,Q=!1,M=null,v=null,R=null,j=null,te=null,i={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},C=function(e){var t;return e=new o(e),X(),d(),null!=M&&M.start(),Q&&(t=J(e.absolute))?(S(t),O(e,null,!1)):O(e,q)},J=function(e){var t;return t=N[e],t&&!t.transitionCacheDisabled?t:void 0},b=function(e){return null==e&&(e=!0),Q=e},_=function(e){return null==e&&(e=!0),l?e?null!=M?M:M=new r("html"):(null!=M&&M.uninstall(),M=null):void 0},O=function(e,t,o){return null==o&&(o=!0),Z(i.FETCH,{url:e.absolute}),null!=te&&te.abort(),te=new XMLHttpRequest,te.open("GET",e.withoutHashForIE10compatibility(),!0),te.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),te.setRequestHeader("X-XHR-Referer",j),te.onload=function(){var o;return Z(i.RECEIVE,{url:e.absolute}),(o=B())?(W(e),U(),p.apply(null,A(o)),L(),"function"==typeof t&&t(),Z(i.LOAD)):document.location.href=y()||e.absolute},M&&o&&(te.onprogress=function(){return function(e){var t;return t=e.lengthComputable?e.loaded/e.total*100:M.value+(100-M.value)/10,M.advanceTo(t)}}(this)),te.onloadend=function(){return te=null},te.onerror=function(){return document.location.href=e.absolute},te.send()},S=function(e){return null!=te&&te.abort(),p(e.title,e.body),H(e),Z(i.RESTORE)},d=function(){var e;return e=new o(v.url),N[e.absolute]={url:e.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},g(u)},D=function(e){return null==e&&(e=u),/^[\d]+$/.test(e)?u=parseInt(e):void 0},g=function(e){var t,o,n,r,s,a;for(s=Object.keys(N),t=s.map(function(e){return N[e].cachedAt}).sort(function(e,t){return t-e}),a=[],o=0,r=s.length;r>o;o++)n=s[o],N[n].cachedAt<=t[e]&&(Z(i.EXPIRE,N[n]),a.push(delete N[n]));return a},p=function(t,o,n,r){return Z(i.BEFORE_UNLOAD),document.title=t,document.documentElement.replaceChild(o,document.body),null!=n&&e.update(n),$(),r&&E(),v=window.history.state,null!=M&&M.done(),Z(i.CHANGE),Z(i.UPDATE)},E=function(){var e,t,o,i,n,r,s,a,c,l,h,d;for(d=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),o=0,n=d.length;n>o;o++)if(h=d[o],""===(c=h.type)||"text/javascript"===c){for(t=document.createElement("script"),l=h.attributes,i=0,r=l.length;r>i;i++)e=l[i],t.setAttribute(e.name,e.value);h.hasAttribute("async")||(t.async=!1),t.appendChild(document.createTextNode(h.innerHTML)),a=h.parentNode,s=h.nextSibling,a.removeChild(h),a.insertBefore(t,s)}},V=function(e){return e.innerHTML=e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),e},$=function(){var e,t;return e=(t=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length-1],e&&document.activeElement!==e?e.focus():void 0},W=function(e){return(e=new o(e)).absolute!==j?window.history.pushState({turbolinks:!0,url:e.absolute},"",e.absolute):void 0},U=function(){var e,t;return(e=te.getResponseHeader("X-XHR-Redirected-To"))?(e=new o(e),t=e.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",e.href+t)):void 0},y=function(){var e;return null!=(e=te.getResponseHeader("Location"))&&new o(e).crossOrigin()?e:void 0},X=function(){return j=document.location.href},K=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},Y=function(){return v=window.history.state},L=function(){var e;return navigator.userAgent.match(/Firefox/)&&!(e=new o).hasNoHash()?(window.history.replaceState(v,"",e.withoutHash()),document.location.hash=e.hash):void 0},H=function(e){return window.scrollTo(e.positionX,e.positionY)},q=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},f=function(e){var t,o,i;if(null==e||"object"!=typeof e)return e;t=new e.constructor;for(o in e)i=e[o],t[o]=f(i);return t},P=function(e){var t,o;return o=(null!=(t=document.cookie.match(new RegExp(e+"=(\\w+)")))?t[1].toUpperCase():void 0)||"",document.cookie=e+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",o},Z=function(e,t){var o;return"undefined"!=typeof Prototype&&Event.fire(document,e,t,!0),o=document.createEvent("Events"),t&&(o.data=t),o.initEvent(e,!0,!0),document.dispatchEvent(o)},k=function(e){return!Z(i.BEFORE_CHANGE,{url:e})},B=function(){var e,t,o,i,n,r;return t=function(){var e;return 400<=(e=te.status)&&600>e},r=function(){var e;return null!=(e=te.getResponseHeader("Content-Type"))&&e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},i=function(e){var t,o,i,n,r;for(n=e.querySelector("head").childNodes,r=[],t=0,o=n.length;o>t;t++)i=n[t],null!=("function"==typeof i.getAttribute?i.getAttribute("data-turbolinks-track"):void 0)&&r.push(i.getAttribute("src")||i.getAttribute("href"));return r},e=function(e){var t;return R||(R=i(document)),t=i(e),t.length!==R.length||n(t,R).length!==R.length},n=function(e,t){var o,i,n,r,s;for(e.length>t.length&&(n=[t,e],e=n[0],t=n[1]),r=[],o=0,i=e.length;i>o;o++)s=e[o],oe.call(t,s)>=0&&r.push(s);return r},!t()&&r()&&(o=m(te.responseText),o&&!e(o))?o:void 0},A=function(t){var o;return o=t.querySelector("title"),[null!=o?o.textContent:void 0,V(t.querySelector("body")),e.get(t).token,"runScripts"]},e={get:function(e){var t;return null==e&&(e=document),{node:t=e.querySelector('meta[name="csrf-token"]'),token:null!=t&&"function"==typeof t.getAttribute?t.getAttribute("content"):void 0}},update:function(e){var t;return t=this.get(),null!=t.token&&null!=e&&t.token!==e?t.node.setAttribute("content",e):void 0}},m=function(e){var t;return t=document.documentElement.cloneNode(),t.innerHTML=e,t.head=t.querySelector("head"),t.body=t.querySelector("body"),t},o=function(){function e(t){return this.original=null!=t?t:document.location.href,this.original.constructor===e?this.original:void this._parse()}return e.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},e.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},e.prototype.hasNoHash=function(){return 0===this.hash.length},e.prototype.crossOrigin=function(){return this.origin!==(new e).origin},e.prototype._parse=function(){var e;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,e=this.link,this.href=e.href,this.protocol=e.protocol,this.host=e.host,this.hostname=e.hostname,this.port=e.port,this.pathname=e.pathname,this.search=e.search,this.hash=e.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},e}(),n=function(e){function t(e){return this.link=e,this.link.constructor===t?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void t.__super__.constructor.apply(this,arguments))}return ie(t,e),t.HTML_EXTENSIONS=["html"],t.allowExtensions=function(){var e,o,i,n;for(o=1<=arguments.length?re.call(arguments,0):[],i=0,n=o.length;n>i;i++)e=o[i],t.HTML_EXTENSIONS.push(e);return t.HTML_EXTENSIONS},t.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},t.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new o).withoutHash()},t.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+t.HTML_EXTENSIONS.join("|")+")?$","g"))},t.prototype._optOut=function(){var e,t;for(t=this.originalElement;!e&&t!==document;)e=null!=t.getAttribute("data-no-turbolink"),t=t.parentNode;return e},t.prototype._target=function(){return 0!==this.link.target.length},t}(o),t=function(){function e(e){this.event=e,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(k(this.link.absolute)||ee(this.link.href),this.event.preventDefault()))}return e.installHandlerLast=function(t){return t.defaultPrevented?void 0:(document.removeEventListener("click",e.handle,!1),document.addEventListener("click",e.handle,!1))},e.handle=function(t){return new e(t)},e.prototype._extractLink=function(){var e;for(e=this.event.target;e.parentNode&&"A"!==e.nodeName;)e=e.parentNode;return"A"===e.nodeName&&0!==e.href.length?this.link=new n(e):void 0},e.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},e.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},e}(),r=function(){function e(e){this.elementSelector=e,this._trickle=se(this._trickle,this),this.value=0,this.content="",this.speed=300,this.opacity=.99,this.install()}var t;return t="turbolinks-progress-bar",e.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(t),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},e.prototype.uninstall=function(){return this.element.classList.remove(t),document.head.removeChild(this.styleElement)},e.prototype.start=function(){return this.advanceTo(5)},e.prototype.advanceTo=function(e){var t;if(e>(t=this.value)&&100>=t){if(this.value=e,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},e.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._reset()):void 0},e.prototype._reset=function(){var e;return e=this.opacity,setTimeout(function(e){return function(){return e.opacity=0,e._updateStyle()}}(this),this.speed/2),setTimeout(function(t){return function(){return t.value=0,t.opacity=e,t._withSpeed(0,function(){return t._updateStyle(!0)})}}(this),this.speed)},e.prototype._startTrickle=function(){return this.trickling?void 0:(this.trickling=!0,setTimeout(this._trickle,this.speed))},e.prototype._stopTrickle=function(){return delete this.trickling},e.prototype._trickle=function(){return this.trickling?(this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)):void 0},e.prototype._withSpeed=function(e,t){var o,i;return o=this.speed,this.speed=e,i=t(),this.speed=o,i},e.prototype._updateStyle=function(e){return null==e&&(e=!1),e&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},e.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},e.prototype._createCSSRule=function(){return this.elementSelector+"."+t+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},e}(),h=function(e){return setTimeout(e,500)},x=function(){return document.addEventListener("DOMContentLoaded",function(){return Z(i.CHANGE),Z(i.UPDATE)},!0)},w=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(e,t){return jQuery.trim(t.responseText)?Z(i.UPDATE):void 0}):void 0},I=function(e){var t,i;return(null!=(i=e.state)?i.turbolinks:void 0)?(t=N[new o(e.state.url).absolute])?(d(),S(t)):ee(e.target.location.href):void 0},F=function(){return K(),Y(),document.addEventListener("click",t.installHandlerLast,!0),window.addEventListener("hashchange",function(){return K(),Y()},!1),h(function(){return window.addEventListener("popstate",I,!1)})},T=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),c=window.history&&window.history.pushState&&window.history.replaceState&&T,s=!navigator.userAgent.match(/CriOS\//),z="GET"===(G=P("request_method"))||""===G,l=c&&s&&z,a=document.addEventListener&&document.createEvent,a&&(x(),w()),l?(ee=C,F()):ee=function(e){return document.location.href=e},this.Turbolinks={visit:ee,pagesCached:D,enableTransitionCache:b,enableProgressBar:_,allowLinkExtensions:n.allowExtensions,supported:l,EVENTS:f(i)}}).call(this),function(){}.call(this);