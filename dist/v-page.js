!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vPage",[],t):"object"==typeof exports?exports.vPage=t():e.vPage=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";var n=a(4),i=a(5);a.n(i);t.a={name:"v-page",props:{totalRow:{type:Number,default:0},pageSizeMenu:{type:[Boolean,Array],default:function(){return[10,20,50,100]}},language:{type:String,default:"cn"},align:{type:String,default:"right"},disabled:{type:Boolean,default:!1},border:{type:Boolean,default:!0},info:{type:Boolean,default:!0},pageNumber:{type:Boolean,default:!0},first:{type:Boolean,default:!0},last:{type:Boolean,default:!0}},data:function(){return{pageSize:!1===this.pageSizeMenu?10:this.pageSizeMenu[0],totalPage:0,currentPage:0,pageNumberSize:5,i18n:n.a[this.language]||n.a.cn}},computed:{pageNumbers:function(){var e=1,t=void 0,a=[],n=Math.floor(this.pageNumberSize/2);this.totalPage<this.pageNumberSize?t=this.totalPage:this.currentPage<=n?t=this.pageNumberSize:this.currentPage>=this.totalPage-n?(e=this.totalPage-this.pageNumberSize+1,t=this.totalPage):(e=this.currentPage-n,t=e+this.pageNumberSize-1);for(var i=e;i<=t;i++)a.push(i);return a},pageInfo:function(){return this.i18n.pageInfo.replace("#pageNumber#",this.currentPage).replace("#totalPage#",this.totalPage).replace("#totalRow#",this.totalRow)},classes:function(){return{"v-pagination--no-border":!this.border,"v-pagination--right":"right"===this.align,"v-pagination--center":"center"===this.align}}},watch:{totalRow:function(){this.calcTotalPage()}},methods:{goPage:function(e){if("number"==typeof e){var t=1;e>t&&(t=e),e>this.totalPage&&this.totalPage>0&&(t=this.totalPage),t!==this.currentPage&&(this.currentPage=t,this.change(),this.calcTotalPage())}},reload:function(){this.change()},change:function(){this.$emit("page-change",{pageNumber:this.currentPage,pageSize:Number(this.pageSize)})},calcTotalPage:function(){this.totalPage=Math.ceil(this.totalRow/this.pageSize)},position:function(e){if("string"==typeof e)switch(e){case"first":return 1;case"previous":return this.currentPage-1;case"next":return this.currentPage+1;case"last":return this.totalPage}else if("number"==typeof e)return e},switchPage:function(e){this.disabled||this.goPage(this.position(e))},switchLength:function(){this.goPage(1)}},mounted:function(){this.goPage(1)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);a.d(t,"vPage",function(){return n.a});var i={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).length&&(t.language&&(n.a.props.language.default=t.language),t.align&&(n.a.props.align.default=t.align),"boolean"==typeof t.info&&(n.a.props.info.default=t.info),"boolean"==typeof t.border&&(n.a.props.border.default=t.border),"boolean"==typeof t.pageNumber&&(n.a.props.pageNumber.default=t.pageNumber),"boolean"==typeof t.first&&(n.a.props.first.default=t.first),"boolean"==typeof t.last&&(n.a.props.last.default=t.last),void 0!==t.pageSizeMenu&&(n.a.props.pageSizeMenu.default=t.pageSizeMenu)),e.component(n.a.name,n.a)}};t.default=i},function(e,t,a){"use strict";var n=a(0),i=a(10),o=a(3),r=o(n.a,i.a,!1,null,null,null);t.a=r.exports},function(e,t){e.exports=function(e,t,a,n,i,o){var r,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(r=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i);var p;if(o?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=p):n&&(p=n),p){var d=u.functional,c=d?u.render:u.beforeCreate;d?(u._injectStyles=p,u.render=function(e,t){return p.call(t),c(e,t)}):u.beforeCreate=c?[].concat(c,p):[p]}return{esModule:r,exports:s,options:u}}},function(e,t,a){"use strict";var n={cn:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页"},en:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# （total #totalRow# records）",first:"First",previous:"«",next:"»",last:"Last"},jp:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ"}};t.a=n},function(e,t,a){var n=a(6);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(8)("2dbe92cf",n,!0,{})},function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"div.v-pagination{margin:0;display:block}div.v-pagination.v-pagination--right{text-align:right}div.v-pagination.v-pagination--center{text-align:center}div.v-pagination>ul{display:inline-block;list-style:none;margin:0;padding:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05)}div.v-pagination>ul>li{text-align:center;margin:0;display:inline}div.v-pagination>ul>li>a{margin:0 0 0 -1px;position:relative;border:1px solid #dee2e6;padding:6px 12px;line-height:1.4;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#fff;font-size:14px;display:inline-block;float:left;text-decoration:none;color:#333;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.v-pagination>ul>li>a:hover{z-index:2;-webkit-box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);box-shadow:0 0 8px rgba(0,0,0,.2)}div.v-pagination>ul>li.disabled>a,div.v-pagination>ul>li.v-pagination__info>a,div.v-pagination>ul>li.v-pagination__list>a{color:#999;cursor:default}div.v-pagination>ul>li.disabled>a:hover,div.v-pagination>ul>li.v-pagination__info>a:hover,div.v-pagination>ul>li.v-pagination__list>a:hover{color:#999;background-color:#fff;box-shadow:none}div.v-pagination>ul>li.active>a,div.v-pagination>ul>li.active>span{cursor:default;color:#999;background-color:#eee}div.v-pagination>ul>li.active>a:hover,div.v-pagination>ul>li.active>span:hover{box-shadow:none}div.v-pagination>ul>li:first-child>a,div.v-pagination>ul>li:first-child>span{border-left-width:1px;border-bottom-left-radius:2px;border-top-left-radius:2px;-webkit-border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;-moz-border-radius-bottomleft:2px;-moz-border-radius-topleft:2px}div.v-pagination>ul>li:last-child>a,div.v-pagination>ul>li:last-child>span{border-top-right-radius:2px;border-bottom-right-radius:2px;-webkit-border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-topright:2px}div.v-pagination>ul>li.v-pagination__list select{margin-left:5px;width:auto!important;font-size:12px;padding:0;display:inline-block;border:1px solid #ccc;color:#333;outline:0}div.v-pagination>ul>li.v-pagination__list select:hover{-webkit-box-shadow:0 0 3px rgba(0,0,0,.2);-moz-box-shadow:0 0 3px rgba(0,0,0,.2);box-shadow:0 0 3px rgba(0,0,0,.2)}div.v-pagination>ul>li.v-pagination__list select[disabled]{color:#999}div.v-pagination.v-pagination--no-border>ul{box-shadow:none}div.v-pagination.v-pagination--no-border>ul>li:not(.active):not(.disabled):not(.v-pagination__info):not(.v-pagination__list) a:hover{box-shadow:none;z-index:auto;background-color:#ddd}div.v-pagination.v-pagination--no-border>ul>li.active a{background-color:#f5f5f5;color:#aaa}div.v-pagination.v-pagination--no-border>ul>li>a{border:0}div.v-pagination.v-pagination--no-border>ul>li>a:hover{z-index:auto}",""])},function(e,t){function a(e,t){var a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var o=n(i);return[a].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&n[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),t.push(r))}},t}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=p[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(o(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var r=[],i=0;i<a.parts.length;i++)r.push(o(a.parts[i]));p[a.id]={id:a.id,refs:1,parts:r}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,a,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(f)return v;n.parentNode.removeChild(n)}if(m){var o=g++;n=c||(c=i()),t=r.bind(null,n,o,!1),a=r.bind(null,n,o,!0)}else n=i(),t=s.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function r(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function s(e,t){var a=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(b,t.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=a(9),p={},d=l&&(document.head||document.getElementsByTagName("head")[0]),c=null,g=0,f=!1,v=function(){},h=null,b="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,i){f=a,h=i||{};var o=u(e,t);return n(o),function(t){for(var a=[],i=0;i<o.length;i++){var r=o[i],s=p[r.id];s.refs--,a.push(s)}t?(o=u(e,t),n(o)):o=[];for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var x=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],s=o[1],l=o[2],u=o[3],p={id:e+":"+i,css:s,media:l,sourceMap:u};n[r]?n[r].parts.push(p):a.push(n[r]={id:r,parts:[p]})}return a}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-pagination",class:e.classes},[a("ul",[e.pageSizeMenu?a("li",{staticClass:"v-pagination__list"},[a("a",[e._v(e._s(e.i18n.pageLength)+"\n                "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageSize,expression:"pageSize"}],attrs:{disabled:e.disabled},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.pageSize=t.target.multiple?a:a[0]},e.switchLength]}},e._l(e.pageSizeMenu,function(t,n){return a("option",{key:n},[e._v(e._s(t))])}),0)])]):e._e(),e._v(" "),e.info?a("li",{staticClass:"v-pagination__info"},[a("a",{domProps:{textContent:e._s(e.pageInfo)}})]):e._e(),e._v(" "),e.first?a("li",{class:{disabled:1===e.currentPage||e.disabled}},[a("a",{attrs:{href:"javascript:void(0);"},domProps:{textContent:e._s(e.i18n.first)},on:{click:function(t){return e.switchPage("first")}}})]):e._e(),e._v(" "),a("li",{class:{disabled:1===e.currentPage||e.disabled}},[a("a",{attrs:{href:"javascript:void(0);"},domProps:{textContent:e._s(e.i18n.previous)},on:{click:function(t){return e.switchPage("previous")}}})]),e._v(" "),e.pageNumber?e._l(e.pageNumbers,function(t,n){return a("li",{key:n,class:{active:t===e.currentPage,disabled:e.disabled&&t!==e.currentPage}},[a("a",{attrs:{href:"javascript:void(0);"},domProps:{textContent:e._s(t)},on:{click:function(a){return e.switchPage(t)}}})])}):e._e(),e._v(" "),a("li",{class:{disabled:e.currentPage===e.totalPage||e.disabled}},[a("a",{attrs:{href:"javascript:void(0);"},domProps:{textContent:e._s(e.i18n.next)},on:{click:function(t){return e.switchPage("next")}}})]),e._v(" "),e.last?a("li",{class:{disabled:e.currentPage===e.totalPage||e.disabled}},[a("a",{attrs:{href:"javascript:void(0);"},domProps:{textContent:e._s(e.i18n.last)},on:{click:function(t){return e.switchPage("last")}}})]):e._e()],2)])},i=[],o={render:n,staticRenderFns:i};t.a=o}])});
//# sourceMappingURL=v-page.js.map