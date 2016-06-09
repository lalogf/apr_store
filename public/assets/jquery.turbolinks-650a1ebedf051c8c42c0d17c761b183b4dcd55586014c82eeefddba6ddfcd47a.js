/*
jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
jQuery plugin for drop-in fix binded events problem caused by Turbolinks

The MIT License
Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */
(function(){var e,t;e=window.jQuery||("function"==typeof require?require("jquery"):void 0),t=e(document),e.turbo={version:"2.1.0",isReady:!1,use:function(e,i){return t.off(".turbo").on(""+e+".turbo",this.onLoad).on(""+i+".turbo",this.onFetch)},addCallback:function(i){return e.turbo.isReady&&i(e),t.on("turbo:ready",function(){return i(e)})},onLoad:function(){return e.turbo.isReady=!0,t.trigger("turbo:ready")},onFetch:function(){return e.turbo.isReady=!1},register:function(){return e(this.onLoad),e.fn.ready=this.addCallback}},e.turbo.register(),e.turbo.use("page:load","page:fetch")}).call(this);