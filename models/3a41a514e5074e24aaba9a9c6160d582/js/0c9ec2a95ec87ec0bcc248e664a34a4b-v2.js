"use strict";(self.webpackChunksketchfab=self.webpackChunksketchfab||[]).push([[1872],{pDOP:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n("sQwH");n("3Z9q");const a=function(e){var t=e.collection;return(0,r.Z)("span",{className:"collection-name"},void 0,(0,r.Z)("a",{className:"label",onClick:function(e){return e.stopPropagation()},href:t.collectionUrl,title:t.name},void 0,(0,r.Z)("data",{itemProp:"name"},void 0,t.name)))}},y7HB:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n("zoaa"),a=n("sQwH"),c=n("D4hk"),i=n("3Z9q"),o=n("1nxQ"),s=n("X40V"),l=n("F3G7"),u=n("N+9a"),d=function(e){var t=e.to,n=e.params,r=e.onClick,o=e.children,l={className:(0,s.AK)("other","skfb-link"),children:o};return t?i.createElement(u.Z,(0,c.Z)({},l,{to:t,params:n})):r?i.createElement("button",(0,c.Z)({},l,{onClick:r})):(0,a.Z)("span",{className:"others"},void 0,o)};const f=function(e){var t=e.totalCount,n=e.names,c=e.othersHref,s=e.othersHrefParams,u=e.onOtherClick,f=e.maxDisplay,h=void 0===f?3:f,v=(0,l.Z)(n,h),m=(0,r.Z)(v),Z=m[0],p=m.slice(1),k=Math.max(0,t-h);return(0,a.Z)(i.Fragment,{},void 0,Z,p.length?p.map((function(e,t){return(0,a.Z)(i.Fragment,{},t,p.length-1===t&&0===k?" and ":", ",e)})):null,k?(0,a.Z)(i.Fragment,{},void 0," and ",(0,a.Z)(d,{to:c,params:s,onClick:u},void 0,"".concat(k," other").concat((0,o.pluralize)(k)))):null)}},rv44:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n("D4hk"),a=n("3MRe"),c=n("qD8I"),i=n("CUcO"),o=n("8N4v"),s=n("Zfzx"),l=n("FUT3"),u=n("hayj"),d=n("xKIK"),f=n("3Z9q"),h=n("Idx6"),v=n.n(h),m=n("g/7r"),Z=n("p5Lb"),p=n("sQwH"),k=["identifier","color","size","percentage","onClick"];const g=function(e){var t=e.identifier,n=void 0===t?"skfb":t,c=e.color,i=void 0===c?"":c,o=e.size,s=void 0===o?30:o,l=e.percentage,u=void 0===l?1:l,d=e.onClick,h=void 0===d?m.EI:d,v=(0,a.Z)(e,k);return f.createElement("svg",(0,r.Z)({className:"c-star-rating__star",width:s,height:s,viewBox:"0 0 20 20",onClick:h},v),(0,p.Z)("defs",{},void 0,(0,p.Z)("path",{d:"M19.96 7.86c0-.296-.223-.48-.67-.552l-6.023-.875-2.7-5.458c-.15-.328-.346-.492-.586-.492s-.435.164-.587.492l-2.7 5.458-6.02.875C.222 7.38 0 7.564 0 7.86c0 .168.1.36.3.576l4.367 4.247-1.032 5.998c-.016.113-.024.193-.024.24 0 .168.043.31.127.426.084.117.21.174.378.174.144 0 .304-.047.48-.143l5.386-2.832 5.387 2.832c.168.096.328.143.48.143.16 0 .282-.057.366-.174.083-.115.125-.258.125-.425 0-.103-.004-.183-.012-.24l-1.03-5.997 4.353-4.247c.207-.208.31-.4.31-.576z",id:"a-".concat(n)})),(0,p.Z)("mask",{id:"b-".concat(n),fill:"#fff"},void 0,(0,p.Z)("use",{xlinkHref:"#a-".concat(n)})),(0,p.Z)("rect",{className:"c-star-rating__background-rect",width:"20",height:"20",stroke:i,fill:i,mask:"url(#b-".concat(n,")")}),(0,p.Z)("rect",{className:"c-star-rating__fill-rect",width:20*u,height:"20",fill:i,mask:"url(#b-".concat(n,")")}))};var b=["value","color","onChange","identifier"];function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var y=function(e){(0,s.Z)(n,e);var t=C(n);function n(){var e;(0,c.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,d.Z)((0,o.Z)(e),"container",f.createRef()),e}return(0,i.Z)(n,[{key:"starSize",get:function(){switch(this.props.size){case"small":return 10;case"medium":default:return 16;case"large":return 20}}},{key:"hasClickEvent",get:function(){return this.props.onChange!==m.EI}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,c=t.color,i=t.onChange,o=t.identifier,s=(0,a.Z)(t,b),l=v()(s,["isTouched","hasChanged","hasError","error","onBlur","size","children"]);return f.createElement("div",{ref:this.container,className:"c-star-rating ".concat(this.hasClickEvent?"--interactive":"")},[1,2,3,4,5].map((function(t,a){return f.createElement(g,(0,r.Z)({key:a,percentage:(0,Z.vX)(0,1,(n||0)-a),color:c,onClick:function(){return i(t)},identifier:o},l,{size:e.starSize}))})))}}]),n}(f.Component);(0,d.Z)(y,"defaultProps",{size:"medium",onChange:m.EI});const w=y},AFjX:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n("sQwH"),a=n("D4hk"),c=n("3MRe"),i=n("3Z9q"),o=n("X40V"),s=["title","isDisabled","render"];function l(e){var t=e.tabs,n=e.selectedTabIndex,l=void 0===n?0:n,u=e.onSelectTab,d=e.className,f=void 0===d?"":d,h=e.headerProps;return(0,r.Z)("section",{className:(0,o.AK)("c-tabs",f)},void 0,i.createElement("header",(0,a.Z)({className:"c-tabs__header",role:"tablist"},h),t.map((function(e,t){var n=e.title,r=e.isDisabled,d=(e.render,(0,c.Z)(e,s));return i.createElement("div",(0,a.Z)({role:"tab",tabIndex:0,"aria-selected":t===l,key:t,className:(0,o.AK)("c-tabs__tab",{"--active":t===l},{"--disabled":Boolean(r)}),onClick:function(){return!r&&u(t)}},d),n)}))),(0,r.Z)("main",{className:"c-tabs__main"},void 0,t[l].render()))}},"/7yb":(e,t,n)=>{n.d(t,{Z:()=>c});var r=n("3Z9q"),a=n("HPk7");const c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keypress";r.useEffect((function(){var r=(0,a.Z)((function(n){e===n.key&&t(n)}),1e3);return window.addEventListener(n,r),function(){window.removeEventListener(n,r)}}),[e,n,t])}}}]);