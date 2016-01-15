/*
 * throttledresize: special jQuery event that happens at a reduced rate compared to "resize"
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
!function(t){var e,i,n,o=t.event,r={_:0},s=0;e=o.special.throttledresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(a,c){var h=this,l=arguments;i=!0,n||(setInterval(function(){s++,(s>e.threshold&&i||c)&&(a.type="throttledresize",o.dispatch.apply(h,l),i=!1,s=0),s>9&&(t(r).stop(),n=!1,s=0)},30),n=!0)},threshold:0}}(jQuery);