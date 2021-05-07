"use strict";var Affix={init:function(t,e){var i=this;this.element=t,this.offset=e||0,this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition(),window.addEventListener("scroll",this.checkPosition.bind(this)),window.addEventListener("click",this.checkPositionWithEventLoop.bind(this)),window.matchMedia("(min-width: 992px)").addListener(function(t){t.matches&&(i.offset=NexT.utils.getAffixParam(),i.checkPosition())})},getState:function(t,e,i,n){var o=window.scrollY,s=window.innerHeight;if(null!=i&&"top"===this.affixed)return(document.querySelector(".content-wrap").offsetHeight<i||o<i)&&"top";if("bottom"===this.affixed)return null!=i?!(this.unpin<=this.element.getBoundingClientRect().top)&&"bottom":!(o+s<=t-n)&&"bottom";var f=null===this.affixed,l=f?o:this.element.getBoundingClientRect().top+o;return null!=i&&o<=i?"top":null!=n&&t-n<=l+(f?s:e)&&"bottom"},getPinnedOffset:function(){return this.pinnedOffset?this.pinnedOffset:(this.element.classList.remove("affix-top","affix-bottom"),this.element.classList.add("affix"),this.pinnedOffset=this.element.getBoundingClientRect().top)},checkPositionWithEventLoop:function(){setTimeout(this.checkPosition.bind(this),1)},checkPosition:function(){var t,e,i,n,o,s,f;"none"!==window.getComputedStyle(this.element).display&&(t=this.element.offsetHeight,i=(e=this.offset).top,n=e.bottom,o=document.body.scrollHeight,s=this.getState(o,t,i,n),this.affixed!==s&&(null!=this.unpin&&(this.element.style.top=""),f="affix"+(s?"-"+s:""),this.affixed=s,this.unpin="bottom"===s?this.getPinnedOffset():null,this.element.classList.remove("affix","affix-top","affix-bottom"),this.element.classList.add(f)),"bottom"===s&&(this.element.style.top=o-t-n+"px"))}};NexT.utils.getAffixParam=function(){var t=CONFIG.sidebar.offset||12,e=document.querySelector(".header-inner").offsetHeight,i=document.querySelector(".footer").offsetHeight;return document.querySelector(".sidebar").style.marginTop=e+t+"px",{top:e,bottom:i}},document.addEventListener("DOMContentLoaded",function(){Affix.init(document.querySelector(".sidebar-inner"),NexT.utils.getAffixParam())});