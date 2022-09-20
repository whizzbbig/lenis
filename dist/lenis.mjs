import t from"tiny-emitter";import e from"virtual-scroll";function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function s(t,e,o){return Math.max(t,Math.min(e,o))}var l=["duration","easing"],c=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var o=this,i=void 0===e?{}:e,n=i.duration,s=void 0===n?1:n,c=i.easing,a=void 0===c?function(t){return t}:c,h=function(t,e){if(null==t)return{};var o,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)e.indexOf(o=n[i])>=0||(r[o]=t[o]);return r}(i,l);this.target=t,this.fromKeys=r({},h),this.toKeys=r({},h),this.keys=Object.keys(r({},h)),this.keys.forEach(function(e){o.fromKeys[e]=t[e]}),this.duration=s,this.easing=a,this.currentTime=0,this.isRunning=!0},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+.001*t,this.duration);var o=this.easing(this.progress);this.keys.forEach(function(t){var i=e.fromKeys[t];e.target[t]=i+(e.toKeys[t]-i)*o}),1===o&&(this.isRunning=!1)}},i(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),a=/*#__PURE__*/function(t){var o,r;function l(o){var i,r,n,l,a=void 0===o?{}:o,h=a.duration,p=void 0===h?1.2:h,u=a.easing,d=void 0===u?function(t){return 1===t?1:1-Math.pow(2,-10*t)}:u,f=a.smooth,v=void 0===f||f,g=a.smoothTouch,w=void 0!==g&&g,m=a.touchMultiplier,y=void 0===m?2:m,b=a.direction,S=void 0===b?"vertical":b,N=a.wrapper,O=void 0===N?window:N,z=a.content,R=void 0===z?document.body:z;(l=t.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(t){var e=t[0];if(e){var o=e.contentRect;l.wrapperWidth=o.width,l.wrapperHeight=o.height}},l.onContentResize=function(t){var e=t[0];if(e){var o=e.contentRect;l.contentWidth=o.width,l.contentHeight=o.height}},l.onVirtualScroll=function(t){var e=t.deltaY,o=t.originalEvent;o.ctrlKey||(l.smooth=o.changedTouches?l.smoothTouch:l.options.smooth,l.stopped?o.preventDefault():l.smooth&&4!==o.buttons&&(l.smooth&&o.preventDefault(),l.targetScroll-=e,l.targetScroll=s(0,l.targetScroll,l.limit),l.scrollTo(l.targetScroll)))},l.onScroll=function(t){l.isScrolling&&l.smooth||(l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.notify())},void 0!==arguments[0].lerp&&console.warn("Lenis: lerp option is deprecated, you must use duration and easing options instead. See documentation https://github.com/studio-freight/lenis"),window.lenisVersion="0.2.5",l.options={duration:p,easing:d,smooth:v,smoothTouch:w,touchMultiplier:y,direction:S,wrapper:O,content:R},l.wrapperNode=O,l.contentNode=R,l.duration=p,l.easing=d,l.smooth=v,l.smoothTouch=w,l.touchMultiplier=y,l.direction=S,l.wrapperNode.addEventListener("scroll",l.onScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.animate=new c;var W=(null==(i=navigator)||null==(r=i.userAgentData)?void 0:r.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return l.virtualScroll=new e({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:W.includes("Win")?1:.4,useKeyboard:!1,touchMultiplier:l.touchMultiplier,useTouch:!0,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l}r=t,(o=l).prototype=Object.create(r.prototype),o.prototype.constructor=o,n(o,r);var a=l.prototype;return a.start=function(){this.stopped=!1},a.stop=function(){this.stopped=!0},a.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},a.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(e),Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.lastScroll=this.targetScroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},a.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},a.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},a.scrollTo=function(t,e){var o,i=void 0===e?{}:e,r=i.offset,n=void 0===r?0:r,s=i.immediate,l=void 0!==s&&s,c=i.duration,a=void 0===c?this.duration:c,h=i.easing,p=void 0===h?this.easing:h;if("number"==typeof t)o=t;else if("top"===t||"#top"===t)o=0;else if("bottom"===t)o=this.limit;else{var u;if("string"==typeof t)u=document.querySelector(t);else{if(null==t||!t.nodeType)return;u=t}if(!t)return;var d=0;if(this.wrapperNode!==window){var f=this.wrapperNode.getBoundingClientRect();d="horizontal"===this.direction?f.left:f.top}var v=u.getBoundingClientRect();o=("horizontal"===this.direction?v.left:v.top)+this.scroll-d}this.targetScroll=o+=n,!this.smooth||l?this.setScroll(this.targetScroll):this.animate.to(this,{duration:a,easing:p,scroll:this.targetScroll})},i(l,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),l}(t);export{a as default};
//# sourceMappingURL=lenis.mjs.map
