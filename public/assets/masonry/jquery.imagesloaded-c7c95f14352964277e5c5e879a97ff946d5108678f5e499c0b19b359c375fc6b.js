/*!
 * jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
!function(t,e){"use strict";var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(n){function o(){var e=t(u),i=t(d);a&&(d.length?a.reject(h,e,i):a.resolve(h)),t.isFunction(n)&&n.call(s,h,e,i)}function r(e,n){e.src!==i&&-1===t.inArray(e,l)&&(l.push(e),n?d.push(e):u.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),c&&a.notifyWith(t(e),[n,h,t(u),t(d)]),h.length===l.length&&(setTimeout(o),h.unbind(".imagesLoaded")))}var s=this,a=t.isFunction(t.Deferred)?t.Deferred():0,c=t.isFunction(a.notify),h=s.find("img").add(s.filter("img")),l=[],u=[],d=[];return h.length?h.bind("load.imagesLoaded error.imagesLoaded",function(t){r(t.target,"error"===t.type)}).each(function(n,o){var s=o.src,a=t.data(o,"imagesLoaded");return a&&a.src===s?void r(o,a.isBroken):o.complete&&o.naturalWidth!==e?void r(o,0===o.naturalWidth||0===o.naturalHeight):void((o.readyState||o.complete)&&(o.src=i,o.src=s))}):o(),a?a.promise(s):s}}(jQuery);