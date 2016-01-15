/*!
 * horizontal layout mode for Isotope
 * http://isotope.metafizzy.co
 */
!function(t){"use strict";function e(t){var e=t.create("horizontal",{verticalAlignment:0});return e.prototype._resetLayout=function(){this.x=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerHeight-t.size.outerHeight)*this.options.verticalAlignment,i=this.x;return this.x+=t.size.outerWidth,{x:i,y:e}},e.prototype._getContainerSize=function(){return{width:this.x}},e.prototype.needsResizeLayout=function(){return this.needsVerticalResizeLayout()},e}"function"==typeof define&&define.amd?define(["isotope/js/layout-mode"],e):e(t.Isotope.LayoutMode)}(window);