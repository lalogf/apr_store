/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
!function(t){var e,i,n=t.event;e=n.special.debouncedresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(t,o){var r=this,s=arguments,a=function(){t.type="debouncedresize",n.dispatch.apply(r,s)};i&&clearTimeout(i),o?a():i=setTimeout(a,e.threshold)},threshold:150}}(jQuery);