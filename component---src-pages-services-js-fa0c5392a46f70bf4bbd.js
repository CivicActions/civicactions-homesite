(self.webpackChunkcivic_actions_homesite=self.webpackChunkcivic_actions_homesite||[]).push([[88],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,o,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(!l(e[o],i[o]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!l(o.value[1],i.get(o.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(e[o]!==i[o])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(o=c;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,s[o]))return!1;if(t&&e instanceof Element)return!1;for(o=c;0!=o--;)if(("_owner"!==s[o]&&"__v"!==s[o]&&"__o"!==s[o]||!e.$$typeof)&&!l(e[s[o]],i[s[o]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,s=[];function u(){o=e(s.map((function(e){return e.props}))),m.canUseDOM?t(o):n&&(o=n(o))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},4692:function(e,t,n){"use strict";var r=n(7294),a=n(8355);t.Z=function(e){var t=e.boldText,n=e.regularText,l=(0,r.useState)(!1),i=l[0],c=l[1];return i?r.createElement("div",null):r.createElement("div",{className:"banner body-small"},r.createElement("div",{className:"inner"},r.createElement("p",{className:"banner-text"},r.createElement("strong",null,t)," ",r.createElement("span",null,n)),r.createElement("div",{onKeyDown:function(){},tabIndex:0,role:"button",className:"close-icon",onClick:function(){return c(!0)}},r.createElement("img",{src:a.Z,alt:"Close"}))))}},4845:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5444),l=n(8346),i=n.p+"static/twitter-footer-icon-b132fb7d364998e458566ca7df25f8fc.svg",c=n.p+"static/facebook-footer-icon-39ada6e6991aae48cdcf9d30945c35b7.svg",o=n.p+"static/linkedin-footer-icon-935d037f4b84f45df27336bd868b9bf2.svg",s=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"inner"},r.createElement("div",{className:"grid-item-1"},r.createElement(a.rU,{to:"/"},r.createElement("img",{src:l.Z,alt:"Civic Actions Logo"})),r.createElement("div",{className:"social-icons"},r.createElement("img",{src:i,alt:"Civic Actions Twitter"}),r.createElement("img",{src:c,alt:"Civic Actions Facebook"}),r.createElement("img",{src:o,alt:"Civic Actions LinkedIn"}))),r.createElement("div",{className:"grid-item-2"},r.createElement("div",{className:"body-small"},"We're a mid-size professional services firm providing design, technology, consulting, and training services to government."),r.createElement("div",{className:"body-small"},"Check out our open positions or ",r.createElement("br",null),"learn about contracting with us."),r.createElement("div",{className:"body-small"},"Our team is fully distributed, but our mailing address is:3527 Mt. Diablo Blvd., Unit 269Lafayette, CA 94549")),r.createElement("div",{className:"grid-item-3"},r.createElement("nav",null,r.createElement("div",{className:"column"},r.createElement(a.rU,{to:""},"COMPANY"),r.createElement(a.rU,{className:"body-small",to:""},"About"),r.createElement(a.rU,{className:"body-small",to:""},"Team"),r.createElement(a.rU,{className:"body-small",to:""},"Press")),r.createElement(a.rU,{to:"/services"},"SERVICES"),r.createElement("div",{className:"column"},r.createElement(a.rU,{to:""},"OUR WORK"),r.createElement(a.rU,{className:"body-small",to:""},"Case studies"),r.createElement(a.rU,{className:"body-small",to:""},"Approach")),r.createElement(a.rU,{to:""},"INSIGHTS"),r.createElement(a.rU,{to:"/careers"},"CAREERS"),r.createElement(a.rU,{to:""},"CONTACT"))),r.createElement("div",{className:"grid-item-4"},r.createElement("div",{className:"body-small"},"Get in touch via phone or email:",r.createElement("br",null),"510-408-7510",r.createElement("br",null),"contact@civicactions.com"),r.createElement("div",{className:"bottom-links"},r.createElement("div",{className:"body-small"}," © 2010 — 2021"),r.createElement("div",{className:"body-small"}," Accessibility"),r.createElement("div",{className:"body-small"},"Privacy — Terms")))))}},9340:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.title,n=e.subtitle,a=e.primaryButtonText,l=e.secondaryButtonText;return r.createElement("section",{className:"primary-page-cta"},r.createElement("div",{className:"inner"},r.createElement("div",{className:"column"},r.createElement("h3",null,t),r.createElement("h5",null,n)),r.createElement("div",{className:"row"},r.createElement("div",{className:"primary-button"},a),r.createElement("div",{className:"secondary-button"},l))))}},4396:function(e,t,n){"use strict";var r=n(7294),a=n(5444),l=n(8355);t.Z=function(e){var t=e.hidden,n=e.close,i=(0,r.useRef)([]),c=function(e){var t=i.current[e].className;i.current[e].className=t.includes("collapsed")?"page-bundle":"page-bundle collapsed"};return r.createElement("div",null,!1===t?r.createElement("div",{className:"background"},r.createElement("div",{className:"sidebar"},r.createElement("div",{className:"close","aria-label":"Close Sidebar",role:"button",onKeyDown:function(){},tabIndex:0,onClick:n},r.createElement("img",{src:l.Z,alt:"Close Icon"})),r.createElement("ul",{className:"pages"},r.createElement("li",{className:"page-bundle",ref:function(e){return i.current[0]=e}},r.createElement("span",{role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return c(0)},className:"heading"},"Company"),r.createElement("ul",null,r.createElement("li",null,"About"),r.createElement("li",null,"Team"),r.createElement("li",null,"Press"))),r.createElement("li",{className:"page-bundle"},r.createElement(a.rU,{to:"/services"},r.createElement("span",null,"Services"))),r.createElement("li",{className:"page-bundle",ref:function(e){return i.current[1]=e}},r.createElement("span",{role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return c(1)},className:"heading"},"Our work"),r.createElement("ul",null,r.createElement("li",null,"Case studies"),r.createElement("li",null,"Approach"))),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Insight")),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Careers")),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Contact"))))):r.createElement("div",null))}},8547:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ae}});var r,a,l,i,c=n(7294),o=n(4692),s=n(5444),u=n.p+"static/CA-white-e8d26f610893dfd9387a448d81952c5d.svg",m=n(9235),d=function(e){var t=e.onMenuClick,n=e.mobileMenuHiddenBool?"mobile-menu-closed":"mobile-menu-open";return c.createElement("header",{className:"header red-header "+n},c.createElement("div",{className:"red-header--header"},c.createElement("div",{className:"inner"},c.createElement(s.rU,{to:"/",className:"logo"},c.createElement("img",{src:u,alt:"Civic Actions Logo"})),c.createElement("div",{className:"header-nav"},c.createElement(s.rU,{to:""},"company"),c.createElement(s.rU,{to:"/services"},"services"),c.createElement(s.rU,{to:""},"our work"),c.createElement(s.rU,{to:""},"insights"),c.createElement(s.rU,{to:""},"careers"),c.createElement("div",{className:"primary-button"},"contact us")),c.createElement("div",{className:"header-nav-mobile",onClick:t,role:"button",tabIndex:0,onKeyDown:function(){}},c.createElement("img",{src:m.Z,alt:""})))))},f=n(4845),p=n(4396),E=n(5697),h=n.n(E),y=n(4839),b=n.n(y),v=n(2993),g=n.n(v),w=n(6494),T=n.n(w),N="bodyAttributes",C="htmlAttributes",I="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(A).map((function(e){return A[e]})),"charset"),O="cssText",M="href",k="http-equiv",x="innerHTML",P="itemprop",D="name",j="property",U="rel",R="src",H="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",B="defer",G="encodeSpecialCharacters",K="onChangeClientState",z="titleTemplate",W=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),F=[A.NOSCRIPT,A.SCRIPT,A.STYLE],Y="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=le(e,A.TITLE),n=le(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=le(e,Z);return t||r||void 0},te=function(e){return le(e,K)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},ae=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),i=0;i<l.length;i++){var c=l[i],o=c.toLowerCase();-1===t.indexOf(o)||n===U&&"canonical"===e[n].toLowerCase()||o===U&&"stylesheet"===e[o].toLowerCase()||(n=o),-1===t.indexOf(c)||c!==x&&c!==O&&c!==P||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var c=l[i],o=T()({},r[c],a[c]);r[c]=o}return e}),[]).reverse()},le=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ie(e)}),0)}),ce=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},me=null,de=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;Ee(A.BODY,r),Ee(A.HTML,a),pe(m,d);var f={baseTag:he(A.BASE,n),linkTags:he(A.LINK,l),metaTags:he(A.META,i),noscriptTags:he(A.NOSCRIPT,c),scriptTags:he(A.SCRIPT,s),styleTags:he(A.STYLE,u)},p={},E={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(E[e]=f[e].oldTags)})),t&&t(),o(e,p,E)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),Ee(A.TITLE,t)},Ee=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),a=r?r.split(","):[],l=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var o=i[c],s=t[o]||"";n.getAttribute(o)!==s&&n.setAttribute(o,s),-1===a.indexOf(o)&&a.push(o);var u=l.indexOf(o);-1!==u&&l.splice(u,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(Y):n.getAttribute(Y)!==i.join(",")&&n.setAttribute(Y,i.join(","))}},he=function(e,t){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,a=be(n,r),[c.createElement(A.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ye(n),l=fe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+$(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case N:case C:return{toComponent:function(){return be(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===x||n===O){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===O)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+$(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:ve(A.BASE,t,r),bodyAttributes:ve(N,n,r),htmlAttributes:ve(C,a,r),link:ve(A.LINK,l,r),meta:ve(A.META,i,r),noscript:ve(A.NOSCRIPT,c,r),script:ve(A.SCRIPT,o,r),style:ve(A.STYLE,s,r),title:ve(A.TITLE,{title:m,titleAttributes:d},r)}},we=b()((function(e){return{baseTag:re([M,H],e),bodyAttributes:ne(N,e),defer:le(e,B),encode:le(e,G),htmlAttributes:ne(C,e),linkTags:ae(A.LINK,[U,M],e),metaTags:ae(A.META,[D,S,k,j,P],e),noscriptTags:ae(A.NOSCRIPT,[x],e),onChangeClientState:te(e),scriptTags:ae(A.SCRIPT,[R,x],e),styleTags:ae(A.STYLE,[O],e),title:ee(e),titleAttributes:ne(I,e)}}),(function(e){me&&se(me),e.defer?me=oe((function(){de(e,(function(){me=null}))})):(de(e),me=null)}),ge)((function(){return null})),Te=(a=we,i=l=function(e){function t(){return Q(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TITLE:return q({},a,((t={})[r.type]=i,t.titleAttributes=q({},l),t));case A.BODY:return q({},a,{bodyAttributes:q({},l)});case A.HTML:return q({},a,{htmlAttributes:q({},l)})}return q({},a,((n={})[r.type]=q({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[W[n]||n]=e[n],t}),t)}(J(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),l.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Te.renderStatic=Te.rewind;var Ne=function(e){var t=e.children,n=(0,c.useState)(!0),r=n[0],a=n[1];return c.createElement("div",{style:{position:"relative"}},c.createElement(Te,{htmlAttributes:{lang:"en"}}),c.createElement("div",null,c.createElement(o.Z,{boldText:"We’re hiring! ",regularText:"View open positions here"}),c.createElement("img",{className:"red-rectangle",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI0NjIiIHZpZXdCb3g9IjAgMCAxNDQwIDQ2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxNDQwVjIxMi43ODdMMCA0NjJWMFoiIGZpbGw9IiNEODM5MzMiLz4KPC9zdmc+Cg==",alt:"background red color"}),c.createElement(d,{onMenuClick:function(){return a(!1)},mobileMenuHiddenBool:r}),c.createElement("main",null,c.createElement("div",null,t)),c.createElement(f.Z,null)),c.createElement(p.Z,{hidden:r,close:function(){return a(!0)}}))},Ce=n(9340),Ie=n.p+"static/services-hero-1aeeaf8e512f5abe794a87095cc0ed25.svg",Ae=function(e){e.data;var t=(0,c.useRef)([]),n=(0,c.useRef)([]),r=function(e){n.current.forEach((function(e){return e.className="body"})),t.current[e].scrollIntoView(),n.current[e].className="body in-view"};return c.createElement(Ne,null,c.createElement(Te,null,c.createElement("title",{"data-react-helmet":"true"},"Services")),c.createElement("section",{className:"services--hero-section"},c.createElement("div",{className:"inner"},c.createElement("div",null,c.createElement("h2",null,"Government services that build public trust"),c.createElement("p",{className:"body"},"At its core, digital transformation is about improving the customer experience of government. We use thoughtful design and open source technologies to help you deliver modern public services that put people first.")),c.createElement("img",{src:Ie,alt:""}))),c.createElement("section",{className:"services--content-section"},c.createElement("div",{className:"inner"},c.createElement("div",{className:"scrollpsy"},c.createElement("div",{className:"body",ref:function(e){return n.current[0]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(0)}},"Web & CMS"),c.createElement("div",{className:"body",ref:function(e){return n.current[1]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(1)}},"IT & service modernization"),c.createElement("div",{className:"body",ref:function(e){return n.current[2]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(2)}},"Security & compliance"),c.createElement("div",{className:"body",ref:function(e){return n.current[3]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(3)}},"Product & design"),c.createElement("div",{className:"body",ref:function(e){return n.current[4]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(4)}},"Data services"),c.createElement("div",{className:"body",ref:function(e){return n.current[5]=e},role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return r(5)}},"Workforce development")),c.createElement("div",{className:"content"},c.createElement("div",{ref:function(e){return t.current[0]=e}},c.createElement("h3",{className:"title"},"Accessible and secure government websites at scale"),c.createElement("div",{className:"body description"},"Government websites have complex information and diverse user groups, but they can be made surprisingly usable and maintainable. We can help you plan a content strategy that merges business goals with user needs (and makes life easier for your staff!) then build a flexible and secure content management system that will grow with you into the future."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"US Department of Veterans Affairs"),c.createElement(s.rU,null,c.createElement("h5",null,"Modern CMS to support veterans")),c.createElement("div",{className:"body"},"Centers for Medicare and Medicaid Services"),c.createElement(s.rU,null,c.createElement("h5",null,"Human-centered health care online")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,c.createElement(s.rU,null,"Research and discovery")),c.createElement("li",null,c.createElement(s.rU,null,"CMS development and migration")),c.createElement("li",null,c.createElement(s.rU,null,"User experience and visual design")),c.createElement("li",null,"Custom front end development"),c.createElement("li",null,"Content design and strategy"),c.createElement("li",null,c.createElement(s.rU,null,"Maintenance and support")),c.createElement("li",null,c.createElement(s.rU,null,"Accessibility consulting and training")),c.createElement("li",null,"Cloud infrastructure"),c.createElement("li",null,"Product management"),c.createElement("li",null,"Agile delivery management")),c.createElement("div",{className:"primary-button"},"IMPROVE YOUR WEBSITE"))),c.createElement("div",{ref:function(e){return t.current[1]=e}},c.createElement("h3",{className:"title"},"Modernization of legacy government systems and services"),c.createElement("div",{className:"body description"},"Outdated systems and paper-based processes make it hard for agency staff to efficiently meet the needs of people who depend on you for critical government services. We help you transform your legacy applications and improve your workflows using human-centered design, automation, and scalable, secure infrastructure."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"California Child Welfare Digital Services"),c.createElement(s.rU,null,c.createElement("h5",null,"DevOps support for child welfare services")),c.createElement("div",{className:"body"},"New York Metropolitan Transit Authority"),c.createElement(s.rU,null,c.createElement("h5",null,"Connecting Drupal to the Internet of Things")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,"Research and discovery"),c.createElement("li",null,"Service design"),c.createElement("li",null,"Cloud adoption and migration"),c.createElement("li",null,"DevSecOps"),c.createElement("li",null,"Site Reliability Engineering (SRE)"),c.createElement("li",null,"Custom front end development"),c.createElement("li",null,"Infrastructure and platform modernization"),c.createElement("li",null,"Accessibility consulting and training"),c.createElement("li",null,"API design and development"),c.createElement("li",null,"Technology strategy consulting")),c.createElement("div",{className:"primary-button"},"WORK SMARTER"))),c.createElement("div",{ref:function(e){return t.current[2]=e}},c.createElement("h3",{className:"title"},"Human-centered problem solving and strategy"),c.createElement("div",{className:"body description"},"No matter what the challenge is, technology is only one part of the solution. Before building anything new, we work with you to define problems and desired outcomes, understand the customer and stakeholder ecosystem, decide on an approach that serves business goals and user needs, and make plans for facilitating adoption and measuring success."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"Centers for Medicare and Medicaid Services"),c.createElement(s.rU,null,c.createElement("h5",null,"Persona-driven strategy for Medicare benefits")),c.createElement("div",{className:"body"},"National Science Foundation"),c.createElement(s.rU,null,c.createElement("h5",null,"Improved user experience to support science research")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,"Research and discovery"),c.createElement("li",null,"Product management"),c.createElement("li",null,"Service design"),c.createElement("li",null,"Accessibility consulting and training"),c.createElement("li",null,"User experience and visual design"),c.createElement("li",null,"Content design and strategy"),c.createElement("li",null,"Business and impact analysis"),c.createElement("li",null,"Agile and Human Centered Design training"),c.createElement("li",null,"Change management consulting")),c.createElement("div",{className:"primary-button"},"DESIGN A BETTER FUTURE"))),c.createElement("div",{ref:function(e){return t.current[3]=e}},c.createElement("h3",{className:"title"},"Modern security practices for continuous compliance and reliability"),c.createElement("div",{className:"body description"},"People want to know their government will keep sensitive information safe—but traditional compliance regulations are cumbersome and don’t provide an accurate measure of security. We help you “shift left” with automated processes that keep development and operations teams in sync, with security and compliance woven in from the start, for faster deployment of secure and stable code."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"Defense Security Cooperation Agency"),c.createElement(s.rU,null,c.createElement("h5",null,"Continuous compliance for international collaboration")),c.createElement("div",{className:"body"},"Centers for Medicare and Medicaid Services"),c.createElement(s.rU,null,c.createElement("h5",null,"Rapid ATO for federal health care websites")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,"DevSecOps"),c.createElement("li",null,"Continuous integration / deployment (CI / CD)"),c.createElement("li",null,"Site Reliability Engineering (SRE)"),c.createElement("li",null,"Continuous / automated compliance"),c.createElement("li",null,"Infrastructure as code (IaC)"),c.createElement("li",null,"Rapid / automated Authority to Operate (ATO)"),c.createElement("li",null,"Security consulting and training"),c.createElement("li",null,"Free and open source software (FOSS) security")),c.createElement("div",{className:"primary-button"},"RE-THINK SECURITY"))),c.createElement("div",{ref:function(e){return t.current[4]=e}},c.createElement("h3",{className:"title"},"Open data sharing to drive evidence-based decisions"),c.createElement("div",{className:"body description"},"Government can serve people best when public data is open, discoverable, and usable. We can help you create a data strategy and comply with open data mandates using open source tools to aggregate, catalog, and standardize your data. Then it’s ready to use, by your staff or the public, to make informed decisions, track metrics, and power useful apps."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"City of Louisville"),c.createElement(s.rU,null,c.createElement("h5",null,"Supporting local government transparency")),c.createElement("div",{className:"body"},"Georgia Governor's Office of Student Achievement"),c.createElement(s.rU,null,c.createElement("h5",null,"Tracking school performance in Georgia")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,"Data program strategy"),c.createElement("li",null,"Open data compliance"),c.createElement("li",null,"Research of data users and their needs"),c.createElement("li",null,"Data cataloging and maintenance"),c.createElement("li",null,"Data platform migration / modernization"),c.createElement("li",null,"Custom search and analysis applications"),c.createElement("li",null,"Data visualizations and dashboards"),c.createElement("li",null,"Helpdesk support for your data platform"),c.createElement("li",null,"Data science and analysis")),c.createElement("div",{className:"primary-button"},"BE DATA-DRIVEN"))),c.createElement("div",{ref:function(e){return t.current[5]=e}},c.createElement("h3",{className:"title"},"Modern skills for an adaptable government workforce"),c.createElement("div",{className:"body description"},"Lasting transformation in government happens from the inside out. Organizational change is hard, but not impossible. We offer consulting and training to help your teams build skills in modern ways of working so your agency can increase resilience, save taxpayer dollars, and serve the public better in the digital age."),c.createElement("h4",null,"How we’ve helped others"),c.createElement("div",{className:"body"},"Federal Acquisitions Institute"),c.createElement(s.rU,null,c.createElement("h5",null,"Digital services education for federal procurement officers")),c.createElement("div",{className:"body"},"California Government Operations Agency"),c.createElement(s.rU,null,c.createElement("h5",null,"Helping state employees adopt open source technologies")),c.createElement("div",{className:"body"},"Various clients"),c.createElement(s.rU,null,c.createElement("h5",null,"Telework training for agencies post-COVID")),c.createElement("div",{className:"cta"},c.createElement("h4",null," How we can help you"),c.createElement("ul",null,c.createElement("li",null,"DITAP program certification"),c.createElement("li",null,"Telework consulting and training"),c.createElement("li",null,"Agile and Human Centered Design coaching"),c.createElement("li",null,"Team culture and performance coaching"),c.createElement("li",null,"Technology strategy consulting"),c.createElement("li",null,"Free and open source software (FOSS) education"),c.createElement("li",null,"Change management consulting")),c.createElement("div",{className:"primary-button"},"UPSKILL YOUR TEAM")))))),c.createElement("section",{className:"services--ellipses-section"},c.createElement("div",{className:"inner"},c.createElement("h2",null,"Open Standards. Inclusive Practices. Better Outcomes."),c.createElement("div",{className:"body-large"},"No matter what problem we’re solving, our core practices and communities power our work and align with current standards for government digital services."),c.createElement("div",{className:"ellipses"},c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"customer experience")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"accessibility")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"drupal")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"u.s. web design standards")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"agile")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"open source")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"human centered design")),c.createElement("span",{className:"ellipse"},c.createElement("h6",null,"distributed teams"))))),c.createElement(Ce.Z,{title:"Start building public trust.",subtitle:"Let’s create better government services.",primaryButtonText:"HIRE US",secondaryButtonText:"CONTRACTING INFO"}))}},8346:function(e,t,n){"use strict";t.Z=n.p+"static/ca-extended-logo-997e4b38802a3d9df0b2c636bf1c1bd9.svg"},8355:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDJMMiAxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0yIDJMMTQgMTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8L3N2Zz4K"},9235:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9IiMxQjFCMUIiLz4KPHJlY3QgeT0iNyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9IiMxQjFCMUIiLz4KPHJlY3QgeT0iMTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIiBmaWxsPSIjMUIxQjFCIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-services-js-fa0c5392a46f70bf4bbd.js.map