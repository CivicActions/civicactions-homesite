(self.webpackChunkcivic_actions_homesite=self.webpackChunkcivic_actions_homesite||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return be}});var r,i,a,o,c=n(5697),l=n.n(c),s=n(4839),u=n.n(s),f=n(2993),d=n.n(f),m=n(7294),p=n(6494),b=n.n(p),y="bodyAttributes",h="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",w="href",C="http-equiv",A="innerHTML",I="itemprop",S="name",k="property",O="rel",N="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",x="defer",_="encodeSpecialCharacters",L="onChangeClientState",U="titleTemplate",Z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,v.TITLE),n=X(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,M);return t||r||void 0},W=function(e){return X(e,L)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],l=c.toLowerCase();-1===t.indexOf(l)||n===O&&"canonical"===e[n].toLowerCase()||l===O&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==I||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],l=b()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,i),ce(f,d);var m={baseTag:se(v.BASE,n),linkTags:se(v.LINK,a),metaTags:se(v.META,o),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},p={},b={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(b[e]=m[e].oldTags)})),t&&t(),l(e,p,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==o.join(",")&&n.setAttribute(H,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,i=fe(n,r),[m.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ue(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case h:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),m.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(h,i,r),link:de(v.LINK,a,r),meta:de(v.META,o,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,s,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},pe=u()((function(e){return{baseTag:J([w,j],e),bodyAttributes:Q(y,e),defer:X(e,x),encode:X(e,_),htmlAttributes:Q(h,e),linkTags:V(v.LINK,[O,w],e),metaTags:V(v.META,[S,E,C,k,I],e),noscriptTags:V(v.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:V(v.SCRIPT,[N,A],e),styleTags:V(v.STYLE,[T],e),title:K(e),titleAttributes:Q(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),be=(i=pe,o=a=function(e){function t(){return B(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case v.TITLE:return q({},i,((t={})[r.type]=o,t.titleAttributes=q({},a),t));case v.BODY:return q({},i,{bodyAttributes:q({},a)});case v.HTML:return q({},i,{htmlAttributes:q({},a)})}return q({},i,((n={})[r.type]=q({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(G(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(m.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind,t.Z=be},4839:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},3958:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(5444),a=function(e){var t=e.link,n=e.icon,i=e.alt;return r.createElement("a",{href:t,rel:"nofollow",className:"social-icon__item"},r.createElement("img",{src:n,alt:i}))},o=n(5490),c=function(){var e=o.DU.map((function(e,t){var n=e.link,i=e.alt,o=e.icon;return r.createElement(a,{key:t,alt:i,icon:o,link:n})}));return r.createElement("div",{className:"social-icon"},e)},l=n(8346),s=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"inner grid-container"},r.createElement("div",{className:"grid-container__item footer__branding "},r.createElement(i.rU,{to:"/"},r.createElement("img",{src:l.Z,alt:"Civic Actions Logo"}))),r.createElement("div",{className:"grid-container__item footer__social "},r.createElement(c,null)),r.createElement("div",{className:"grid-container__item footer__about-text"},r.createElement("div",null,r.createElement("p",null,"We're a mid-size professional services firm providing design, technology, consulting, and training services to government."),r.createElement("p",null,"We're always hiring!"),r.createElement(i.rU,{to:"/careers"},"Check out our open positions")," or ",r.createElement("br",null),r.createElement(i.rU,{to:"/contracting"},"learn about contracting with us."),r.createElement("p",null,"Our team is fully distributed, but our mailing address is:",r.createElement("br",null),"3527 Mt. Diablo Blvd., Unit 269",r.createElement("br",null),"Lafayette, CA 94549"))),r.createElement("div",{className:"grid-container__item footer__contact"},r.createElement("div",{className:"footer__about-text"},"Get in touch via phone or email:",r.createElement("br",null),"510-408-7510",r.createElement("br",null),"contact@civicactions.com")),r.createElement("div",{className:"grid-container__item footer__menu--wrapper"},r.createElement("nav",{"aria-labelledby":"Civicactions Footer menu",className:"footer__menu"},r.createElement("ul",{className:"footer__menu--list"},r.createElement("li",{className:"child-menu--wrapper top-link"},r.createElement(i.rU,{className:"parent-link",to:""},"Company"),r.createElement("ul",null,r.createElement("li",null,r.createElement(i.rU,{to:""},"About")),r.createElement("li",null,r.createElement(i.rU,{to:""},"Team")),r.createElement("li",null,r.createElement(i.rU,{to:""},"Press")))),r.createElement("li",{className:"top-link"},r.createElement(i.rU,{className:"parent-link",to:"/services"},"Services")),r.createElement("li",{className:"child-menu--wrapper top-link"},r.createElement(i.rU,{className:"parent-link",to:""},"Our work"),r.createElement("ul",null,r.createElement("li",null,r.createElement(i.rU,{to:""},"Case Studies")),r.createElement("li",null,r.createElement(i.rU,{to:""},"Approach")))),r.createElement("li",{className:"top-link"},r.createElement(i.rU,{className:"parent-link",to:"/"},"Insights")),r.createElement("li",{className:"top-link"},r.createElement(i.rU,{className:"parent-link",to:"/careers"},"Careers")),r.createElement("li",{className:"top-link"},r.createElement(i.rU,{className:"parent-link",to:"/contact"},"Contact"))))),r.createElement("div",{className:"grid-container__item footer__bottom-links"},r.createElement("p",null,r.createElement(i.rU,{to:"/accessibility"},"Accessibility")),r.createElement("p",null,r.createElement(i.rU,{to:"/privacy"},"Privacy —- Terms")),r.createElement("p",null,"© 2010 —- 2021"))))}},4396:function(e,t,n){"use strict";var r=n(7294),i=n(5444),a=n(8355);t.Z=function(e){var t=e.hidden,n=e.close,o=(0,r.useRef)([]),c=function(e){var t=o.current[e].className;o.current[e].className=t.includes("collapsed")?"page-bundle":"page-bundle collapsed"};return r.createElement("div",null,!1===t?r.createElement("div",{className:"background"},r.createElement("div",{className:"sidebar"},r.createElement("div",{className:"close","aria-label":"Close Sidebar",role:"button",onKeyDown:function(){},tabIndex:0,onClick:n},r.createElement("img",{src:a.Z,alt:"Close Icon"})),r.createElement("ul",{className:"pages"},r.createElement("li",{className:"page-bundle",ref:function(e){return o.current[0]=e}},r.createElement("span",{role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return c(0)},className:"heading"},"Company"),r.createElement("ul",null,r.createElement("li",null,"About"),r.createElement("li",null,"Team"),r.createElement("li",null,"Press"))),r.createElement("li",{className:"page-bundle"},r.createElement(i.rU,{to:"/services"},r.createElement("span",null,"Services"))),r.createElement("li",{className:"page-bundle",ref:function(e){return o.current[1]=e}},r.createElement("span",{role:"button",onKeyDown:function(){},tabIndex:0,onClick:function(){return c(1)},className:"heading"},"Our work"),r.createElement("ul",null,r.createElement("li",null,"Case studies"),r.createElement("li",null,"Approach"))),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Insight")),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Careers")),r.createElement("li",{className:"page-bundle"},r.createElement("span",null,"Contact"))))):r.createElement("div",null))}},9609:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(7294),i=function(e){var t=e.id,n=e.children,i=void 0===n?"Skip to content":n,a=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["id","children"]);return r.createElement("a",Object.assign({},a,{href:"#"+t,className:"skip-nav-link"}),i)}},5490:function(e,t,n){"use strict";n.d(t,{ub:function(){return o},DU:function(){return c}});var r=n.p+"static/twitter-footer-icon-b132fb7d364998e458566ca7df25f8fc.svg",i=n.p+"static/facebook-footer-icon-39ada6e6991aae48cdcf9d30945c35b7.svg",a=n.p+"static/linkedin-footer-icon-935d037f4b84f45df27336bd868b9bf2.svg",o=[{title:"Accessible and secure government websites at scale",desc:"Government websites have complex information and diverse user groups, but they can be made surprisingly navigable and maintainable using Drupal, an open source content management framework that helps you deliver the right information to the right people — and makes life easier for your staff. We can help you plan a content strategy that merges business goals with user needs and sets you up for long-term success.",subSections:[{title:"How we’ve helped others",desc:"Cras ut gravida quam. Aenean at velit malesuada, dictum est ut, consectetur lacus. Suspendisse potenti. Quisque sed nisi dui. Fusce eleifend tempus dictum. Nunc in efficitur odio. Suspendisse nec purus quis massa accumsan laoreet sit amet eget ante. Integer non accumsan nunc, sed imperdiet erat. Sed congue ex sed sem malesuada, sed porttitor lectus consectetur."},{title:"How we can help you",desc:"Cras ut gravida quam. Aenean at velit malesuada, dictum est ut, consectetur lacus. Suspendisse potenti. Quisque sed nisi dui. Fusce eleifend tempus dictum. Nunc in efficitur odio. Suspendisse nec purus quis massa accumsan laoreet sit amet eget ante. Integer non accumsan nunc, sed imperdiet erat. Sed congue ex sed sem malesuada, sed porttitor lectus consectetur."}]},{title:"Modernization of legacy government systems and services"}],c=[{link:"/",alt:"Follow us on Facebook",icon:i},{link:"/",alt:"Follow us on Twitter",icon:r},{link:"/",alt:"Follow us on LinkedIn",icon:a}]},8346:function(e,t,n){"use strict";t.Z=n.p+"static/ca-extended-logo-997e4b38802a3d9df0b2c636bf1c1bd9.svg"},8355:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDJMMiAxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0yIDJMMTQgMTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8L3N2Zz4K"},9235:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9IiMxQjFCMUIiLz4KPHJlY3QgeT0iNyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9IiMxQjFCMUIiLz4KPHJlY3QgeT0iMTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIiBmaWxsPSIjMUIxQjFCIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=commons-f896e149b996d73784b1.js.map