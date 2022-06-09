(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd72e866"],{"1d4d":function(e,t,n){"use strict";n("a9e3"),n("c96a"),n("d81d"),n("696f");var i=n("9d26"),r=n("a9ad"),a=n("2b0e"),o=a["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this;this.clearDelay();var i=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},i)}}}),s=n("af2b"),c=n("5607"),l=a["a"].extend({name:"rippleable",directives:{ripple:c["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),u=n("7560"),f=n("80d2"),d=n("58df");t["a"]=Object(d["a"])(r["a"],o,l,s["a"],u["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,i=e.light,r=e.medium,a=e.small,o=e.size,s=e.xLarge,c=e.xSmall;return{dark:t,large:n,light:i,medium:r,size:o,small:a,xLarge:s,xSmall:c}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(e){var t=this;return function(n){if(!t.readonly){var i=t.genHoverIndex(n,e);t.clearable&&t.internalValue===i?t.internalValue=0:t.internalValue=i}}},createProps:function(e){var t={index:e,value:this.internalValue,click:this.createClickFn(e),isFilled:Math.floor(this.internalValue)>e,isHovered:Math.floor(this.hoverIndex)>e};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-e)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-e)%1>0),t},genHoverIndex:function(e,t){var n=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(n=!n),t+(n?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var t=e.target&&e.target.getBoundingClientRect();if(t&&e.pageX-t.left<t.width/2)return!0}return!1},onMouseEnter:function(e,t){var n=this;this.runDelay("open",(function(){n.hoverIndex=n.genHoverIndex(e,t)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(e){var t=this,n=this.createProps(e);if(this.$scopedSlots.item)return this.$scopedSlots.item(n);var r={click:n.click};return this.hover&&(r.mouseenter=function(n){return t.onMouseEnter(n,e)},r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=function(n){return t.onMouseEnter(n,e)})),this.$createElement(i["a"],this.setTextColor(this.getColor(n),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,e+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(n)])}},render:function(e){var t=this,n=Object(f["e"])(Number(this.length)).map((function(e){return t.genItem(e)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},"40af":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container"},[n("h2",[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"card-content",attrs:{id:e.id}},[n("Flicking",{attrs:{plugins:e.plugins,options:{align:"prev",circular:!0}}},[e._l(e.movies,(function(t){return n("v-card",{key:t.id,staticClass:"card"},[n("v-card-title",[e._v(e._s(t.title))]),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{length:10,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"},model:{value:t.averageNote,callback:function(n){e.$set(t,"averageNote",n)},expression:"movie.averageNote"}}),n("div",{staticClass:"grey--text ms-4"},[e._v(" "+e._s(t.averageNote)+" ")])],1),n("div",{staticStyle:{"margin-top":"20px"}},[e._v(" "+e._s(t.genre)+" ")])],1),n("div",{staticStyle:{"text-align":"end","margin-right":"10px"}},[n("v-btn",{attrs:{text:"",color:"#E50914",tag:"router-link",to:"/dashboard/movies/"+t.id}},[e._v(" Assistir ")])],1)],1)})),n("div",{staticClass:"flicking-pagination",attrs:{slot:"viewport"},slot:"viewport"})],2)],1)])},r=[],a=n("1da1"),o=(n("96cf"),n("7519")),s={CLICK:"click",MOUSE_DOWN:"mousedown",TOUCH_START:"touchstart"},c={SELECTOR:".flicking-pagination",PREFIX:"flicking-pagination",BULLET_WRAPPER_SUFFIX:"bullets",BULLET_SUFFIX:"bullet",BULLET_ACTIVE_SUFFIX:"bullet-active",FRACTION_WRAPPER_SUFFIX:"fraction",FRACTION_CURRENT_SUFFIX:"fraction-current",FRACTION_TOTAL_SUFFIX:"fraction-total",SCROLL_UNINIT_SUFFIX:"uninitialized",SCROLL_WRAPPER_SUFFIX:"scroll",SCROLL_SLIDER_SUFFIX:"slider",SCROLL_PREV_SUFFIX:"bullet-prev",SCROLL_NEXT_SUFFIX:"bullet-next",TYPE:{BULLET:"bullet",FRACTION:"fraction",SCROLL:"scroll"}},l=function(e,t){if(e.classList)e.classList.add(t);else{var n=e.className.split(" ");n.indexOf(t)<0&&(e.className=e.className+" "+t)}},u=function(e,t){if(e.classList)e.classList.remove(t);else{var n=new RegExp("( |^)"+t+"( |$)","g");e.className.replace(n," ")}},f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},f(e,t)};function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function h(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||t)}var p=function(){function e(e){var t=e.flicking,n=e.pagination,i=e.wrapper;this._flicking=t,this._pagination=n,this._wrapper=i}return e}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childs=[],t}d(t,e);var n=t.prototype;return n.render=function(){var e=this._flicking,t=this._pagination,n=t.renderBullet,i=t.classPrefix+"-"+c.BULLET_WRAPPER_SUFFIX,r=t.classPrefix+"-"+c.BULLET_SUFFIX,a=t.classPrefix+"-"+c.BULLET_ACTIVE_SUFFIX,u=e.camera.anchorPoints,f=this._wrapper;l(f,i),f.innerHTML=u.map((function(e,t){return n(r,t)})).join("\n");var d=[].slice.call(f.children);d.forEach((function(t,n){var i=u[n];i.panel.index===e.index&&l(t,a),t.addEventListener(s.MOUSE_DOWN,(function(e){e.stopPropagation()})),t.addEventListener(s.TOUCH_START,(function(e){e.stopPropagation()})),t.addEventListener(s.CLICK,(function(){e.moveTo(i.panel.index).catch((function(e){if(!(e instanceof o["e"]))throw e}))}))})),this._childs=d},n.update=function(e){var t=this._flicking,n=this._pagination,i=this._childs,r=n.classPrefix+"-"+c.BULLET_ACTIVE_SUFFIX,a=t.camera.anchorPoints;if(!(a.length<=0)){i.forEach((function(e){u(e,r)}));var o=a[0].panel.index,s=i[e-o];l(s,r)}},t}(p),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}d(t,e);var n=t.prototype;return n.render=function(){var e=this._flicking,t=this._wrapper,n=this._pagination,i=n.classPrefix+"-"+c.FRACTION_WRAPPER_SUFFIX,r=n.classPrefix+"-"+c.FRACTION_CURRENT_SUFFIX,a=n.classPrefix+"-"+c.FRACTION_TOTAL_SUFFIX;l(t,i),t.innerHTML=n.renderFraction(r,a),this.update(e.index)},n.update=function(e){var t=this._flicking,n=this._wrapper,i=this._pagination,r=i.classPrefix+"-"+c.FRACTION_CURRENT_SUFFIX,a=i.classPrefix+"-"+c.FRACTION_TOTAL_SUFFIX,o=n.querySelector("."+r),s=n.querySelector("."+a),l=t.camera.anchorPoints,u=l.length>0?e-l[0].panel.index+1:0;o.innerHTML=i.fractionCurrentFormat(u),s.innerHTML=i.fractionTotalFormat(l.length)},t}(p),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._bullets=[],t._bulletSize=0,t._previousIndex=-1,t._sliderIndex=-1,t.moveTo=function(e){var n=t._pagination,i=t._wrapper.firstElementChild,r=t._bulletSize,a=r*n.bulletCount;i.style.transform="translate("+(a/2-(e+.5)*r)+"px)",t._sliderIndex=e},t}d(t,e);var n=t.prototype;return n.render=function(){var e=this._wrapper,t=this._flicking,n=this._pagination,i=n.renderBullet,r=t.camera.anchorPoints,a=n.classPrefix+"-"+c.SCROLL_WRAPPER_SUFFIX,f=n.classPrefix+"-"+c.BULLET_SUFFIX,d=n.classPrefix+"-"+c.SCROLL_SLIDER_SUFFIX,h=n.classPrefix+"-"+c.SCROLL_UNINIT_SUFFIX,p=document.createElement("div");l(p,d),l(e,h),l(e,a),e.appendChild(p),p.innerHTML=r.map((function(e,t){return i(f,t)})).join("\n");var v=[].slice.call(p.children);if(v.forEach((function(e,n){var i=r[n];e.addEventListener(s.MOUSE_DOWN,(function(e){e.stopPropagation()})),e.addEventListener(s.TOUCH_START,(function(e){e.stopPropagation()})),e.addEventListener(s.CLICK,(function(){t.moveTo(i.panel.index).catch((function(e){if(!(e instanceof o["e"]))throw e}))}))})),!(v.length<=0)){var g=getComputedStyle(v[0]),_=v[0].clientWidth+parseFloat(g.marginLeft)+parseFloat(g.marginRight);e.style.width=_*n.bulletCount+"px",this._bullets=v,this._bulletSize=_,this.update(this._flicking.index),window.requestAnimationFrame((function(){u(e,h)}))}},n.update=function(e){var t=this._pagination,n=this._flicking,i=this._bullets,r=this._previousIndex,a=n.camera.anchorPoints,s=a[0].panel.index,f=e-s;if(!(a.length<=0)){var d=t.classPrefix+"-"+c.BULLET_ACTIVE_SUFFIX,p=t.classPrefix+"-"+c.SCROLL_PREV_SUFFIX,v=t.classPrefix+"-"+c.SCROLL_NEXT_SUFFIX,g=function(e){return""+p+(e>1?e:"")},_=function(e){return""+v+(e>1?e:"")},b=new RegExp("^"+p),m=new RegExp("^"+v);i.forEach((function(e,t){for(var n=t-f,i=e.className.split(" "),r=0,a=i;r<a.length;r++){var o=a[r];(o===d||b.test(o)||m.test(o))&&u(e,o)}l(e,0===n?d:n>0?_(Math.abs(n)):g(Math.abs(n)))})),t.scrollOnChange(f,{total:i.length,prevIndex:r,sliderIndex:this._sliderIndex,direction:f>r?o["a"].NEXT:o["a"].PREV,bullets:h([],i),moveTo:this.moveTo}),this._previousIndex=f}},t}(p),b=function(){function e(e){var t=this,n=void 0===e?{}:e,i=n.parentEl,r=void 0===i?null:i,a=n.selector,o=void 0===a?c.SELECTOR:a,s=n.type,l=void 0===s?c.TYPE.BULLET:s,u=n.classPrefix,f=void 0===u?c.PREFIX:u,d=n.bulletCount,h=void 0===d?5:d,p=n.renderBullet,v=void 0===p?function(e){return'<span class="'+e+'"></span>'}:p,g=n.renderFraction,_=void 0===g?function(e,t){return'<span class="'+e+'"></span>/<span class="'+t+'"></span>'}:g,b=n.fractionCurrentFormat,m=void 0===b?function(e){return e.toString()}:b,y=n.fractionTotalFormat,C=void 0===y?function(e){return e.toString()}:y,E=n.scrollOnChange,x=void 0===E?function(e,t){return t.moveTo(e)}:E;this._flicking=null,this.update=function(){t._removeAllChilds(),t._renderer.render()},this._onIndexChange=function(e){t._renderer.update(e.index)},this._parentEl=r,this._selector=o,this._type=l,this._classPrefix=f,this._bulletCount=h,this._renderBullet=v,this._renderFraction=_,this._fractionCurrentFormat=m,this._fractionTotalFormat=C,this._scrollOnChange=x}var t=e.prototype;return Object.defineProperty(t,"parentEl",{get:function(){return this._parentEl},set:function(e){this._parentEl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"classPrefix",{get:function(){return this._classPrefix},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletCount",{get:function(){return this._bulletCount},set:function(e){this._bulletCount=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderBullet",{get:function(){return this._renderBullet},set:function(e){this._renderBullet=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderFraction",{get:function(){return this._renderFraction},set:function(e){this._renderFraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionCurrentFormat",{get:function(){return this._fractionCurrentFormat},set:function(e){this._fractionCurrentFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionTotalFormat",{get:function(){return this._fractionTotalFormat},set:function(e){this._fractionTotalFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scrollOnChange",{get:function(){return this._scrollOnChange},set:function(e){this._scrollOnChange=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletWrapperclassPrefixClass",{set:function(e){this._classPrefix=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e;var t=this._type,n=this._selector,i=this._parentEl?this._parentEl:e.element,r=i.querySelector(n);if(!r)throw new Error("[Flicking-Pagination] Couldn't find element with the given selector: "+n);this._wrapper=r,this._renderer=this._createRenderer(t),e.on(o["b"].WILL_CHANGE,this._onIndexChange),e.on(o["b"].WILL_RESTORE,this._onIndexChange),e.on(o["b"].PANEL_CHANGE,this.update),this.update()},t.destroy=function(){var e=this._flicking;e&&(e.off(o["b"].WILL_CHANGE,this._onIndexChange),e.off(o["b"].WILL_RESTORE,this._onIndexChange),e.off(o["b"].PANEL_CHANGE,this.update),this._removeAllChilds(),this._flicking=null)},t._createRenderer=function(e){var t={flicking:this._flicking,pagination:this,wrapper:this._wrapper};switch(e){case c.TYPE.BULLET:return new v(t);case c.TYPE.FRACTION:return new g(t);case c.TYPE.SCROLL:return new _(t);default:throw new Error('[Flicking-Pagination] type "'+e+'" is not supported.')}},t._removeAllChilds=function(){var e=this._wrapper;while(e.firstChild)e.removeChild(e.firstChild)},e}(),m=n("4347"),y={name:"Category",props:{title:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{plugins:[new b({type:"bullet"})],movies:[]}},created:function(){this.loadMovies(this.title)},methods:{loadMovies:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m["a"].getByCategory(e);case 2:t.movies=n.sent.data;case 3:case"end":return n.stop()}}),n)})))()}}},C=y,E=(n("eed8"),n("2877")),x=n("6544"),F=n.n(x),I=n("8336"),S=n("b0af"),L=n("99d9"),O=n("1d4d"),T=n("ade3"),P=n("5530"),R=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),w=n("d9f7"),U=n("80d2"),k=["sm","md","lg","xl"],N=["start","end","center"];function j(e,t){return k.reduce((function(n,i){return n[e+Object(U["r"])(i)]=t(),n}),{})}var A=function(e){return[].concat(N,["baseline","stretch"]).includes(e)},H=j("align",(function(){return{type:String,default:null,validator:A}})),B=function(e){return[].concat(N,["space-between","space-around"]).includes(e)},X=j("justify",(function(){return{type:String,default:null,validator:B}})),V=function(e){return[].concat(N,["space-between","space-around","stretch"]).includes(e)},M=j("alignContent",(function(){return{type:String,default:null,validator:V}})),W={align:Object.keys(H),justify:Object.keys(X),alignContent:Object.keys(M)},z={align:"align",justify:"justify",alignContent:"align-content"};function D(e,t,n){var i=z[e];if(null!=n){if(t){var r=t.replace(e,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var $=new Map,q=R["a"].extend({name:"v-row",functional:!0,props:Object(P["a"])(Object(P["a"])(Object(P["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A}},H),{},{justify:{type:String,default:null,validator:B}},X),{},{alignContent:{type:String,default:null,validator:V}},M),render:function(e,t){var n=t.props,i=t.data,r=t.children,a="";for(var o in n)a+=String(n[o]);var s=$.get(a);return s||function(){var e,t;for(t in s=[],W)W[t].forEach((function(e){var i=n[e],r=D(t,e,i);r&&s.push(r)}));s.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(T["a"])(e,"align-".concat(n.align),n.align),Object(T["a"])(e,"justify-".concat(n.justify),n.justify),Object(T["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),$.set(a,s)}(),e(n.tag,Object(w["a"])(i,{staticClass:"row",class:s}),r)}}),K=Object(E["a"])(C,i,r,!1,null,null,null);t["a"]=K.exports;F()(K,{VBtn:I["a"],VCard:S["a"],VCardText:L["a"],VCardTitle:L["b"],VRating:O["a"],VRow:q})},4347:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("d4ec"),r=n("bee2"),a=n("262e"),o=n("2caf"),s=(n("99af"),n("6a1a")),c=function(e){Object(a["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.call(this,"")}return Object(r["a"])(n,[{key:"getByCategory",value:function(e){return this.api.get("".concat(this.endpoint,"/categories/").concat(e))}}]),n}(s["a"]),l=new c},"4b85":function(e,t,n){},"4ec9":function(e,t,n){"use strict";var i=n("6d61"),r=n("6566");e.exports=i("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(e,t,n){"use strict";var i=n("9bf2").f,r=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),f=n("83ab"),d=n("f183").fastKey,h=n("69f3"),p=h.set,v=h.getterFor;e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,i){s(e,u,t),p(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=i&&c(i,e[l],{that:e,AS_ENTRIES:n})})),h=v(t),g=function(e,t,n){var i,r,a=h(e),o=_(e,t);return o?o.value=n:(a.last=o={index:r=d(t,!0),key:t,value:n,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=o),i&&(i.next=o),f?a.size++:e.size++,"F"!==r&&(a.index[r]=o)),e},_=function(e,t){var n,i=h(e),r=d(t);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==t)return n};return a(u.prototype,{clear:function(){var e=this,t=h(e),n=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;t.first=t.last=void 0,f?t.size=0:e.size=0},delete:function(e){var t=this,n=h(t),i=_(t,e);if(i){var r=i.next,a=i.previous;delete n.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==i&&(n.first=r),n.last==i&&(n.last=a),f?n.size--:t.size--}return!!i},forEach:function(e){var t,n=h(this),i=o(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!_(this,e)}}),a(u.prototype,n?{get:function(e){var t=_(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),f&&i(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(e,t,n){var i=t+" Iterator",r=v(t),a=v(i);l(e,t,(function(e,t){p(this,{type:i,target:e,state:r(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(t)}}},"696f":function(e,t,n){},"6a1a":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("d4ec"),r=n("bee2"),a=(n("99af"),n("1da1")),o=(n("96cf"),n("8a79"),n("d81d"),n("d3b7"),n("bc3a")),s=n.n(o),c=n("acb2"),l=s.a.create({baseURL:"http://localhost:3000/local",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":Object({NODE_ENV:"production",VUE_APP_ENDPOINT:"http://localhost:3000/local",VUE_APP_TOKEN_KEY:"",VUE_APP_UNDER_MAINTENANCE:"",VUE_APP_USER_KEY:"",BASE_URL:"/"}).VUE_APP_API_URL}});l.interceptors.request.use(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["/users","/authenticate","/authenticate/refresh-token"],i=function(e){return t.url.toLowerCase().endsWith(e)},r=n.map((function(e){return i(e)})).reduce((function(e,t){return e||t}),!1),r||(a=c["a"].get(),t.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var u=l,f=function(){function e(t){Object(i["a"])(this,e),this.endpoint=t,this.api=u}return Object(r["a"])(e,[{key:"get",value:function(){return this.api.get(this.endpoint)}},{key:"getById",value:function(e){return this.api.get("".concat(this.endpoint,"/").concat(e))}},{key:"update",value:function(e,t){return this.api.put("".concat(this.endpoint,"/").concat(e),t)}},{key:"delete",value:function(e){return this.api.delete("".concat(this.endpoint,"/").concat(e))}},{key:"create",value:function(e){return this.api.post(this.endpoint,e)}}]),e}()},"6d61":function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),l=n("19aa"),u=n("1626"),f=n("861d"),d=n("d039"),h=n("1c7e"),p=n("d44e"),v=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),_=-1!==e.indexOf("Weak"),b=g?"set":"add",m=r[e],y=m&&m.prototype,C=m,E={},x=function(e){var t=y[e];o(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(_&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return _&&!f(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(_&&!f(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})},F=a(e,!u(m)||!(_||y.forEach&&!d((function(){(new m).entries().next()}))));if(F)C=n.getConstructor(t,e,g,b),s.enable();else if(a(e,!0)){var I=new C,S=I[b](_?{}:-0,1)!=I,L=d((function(){I.has(1)})),O=h((function(e){new m(e)})),T=!_&&d((function(){var e=new m,t=5;while(t--)e[b](t,t);return!e.has(-0)}));O||(C=t((function(t,n){l(t,C,e);var i=v(new m,t,C);return void 0!=n&&c(n,i[b],{that:i,AS_ENTRIES:g}),i})),C.prototype=y,y.constructor=C),(L||T)&&(x("delete"),x("has"),g&&x("get")),(T||S)&&x(b),_&&y.clear&&delete y.clear}return E[e]=C,i({global:!0,forced:C!=m},E),p(C,e),_||n.setStrong(C,e,g),C}},"8a21":function(e,t,n){},"8a79":function(e,t,n){"use strict";var i=n("23e7"),r=n("06cf").f,a=n("50c4"),o=n("577e"),s=n("5a34"),c=n("1d80"),l=n("ab13"),u=n("c430"),f="".endsWith,d=Math.min,h=l("endsWith"),p=!u&&!h&&!!function(){var e=r(String.prototype,"endsWith");return e&&!e.writable}();i({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(e){var t=o(c(this));s(e);var n=arguments.length>1?arguments[1]:void 0,i=t.length,r=void 0===n?i:d(a(n),i),l=o(e);return f?f.call(t,l,r):t.slice(r-l.length,r)===l}})},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var i=n("b0af"),r=n("80d2"),a=Object(r["f"])("v-card__actions"),o=Object(r["f"])("v-card__subtitle"),s=Object(r["f"])("v-card__text"),c=Object(r["f"])("v-card__title");i["a"]},eed8:function(e,t,n){"use strict";n("8a21")}}]);
//# sourceMappingURL=chunk-bd72e866.d4c074c1.js.map