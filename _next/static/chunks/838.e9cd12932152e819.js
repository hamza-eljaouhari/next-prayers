(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{1838:function(e){var t;t=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}:Reflect.construct).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var y=O(Array.prototype.forEach),b=O(Array.prototype.pop),T=O(Array.prototype.push),v=O(String.prototype.toLowerCase),N=O(String.prototype.toString),E=O(String.prototype.match),A=O(String.prototype.replace),_=O(String.prototype.indexOf),S=O(String.prototype.trim),w=O(RegExp.prototype.test),k=(a=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(a,t)});function O(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function x(e,t,n){n=null!==(r=n)&&void 0!==r?r:v,l&&l(e,null);for(var r,o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(c(t)||(t[o]=i),a=i)}e[a]=!0}return e}function C(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}function L(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return O(n.get);if("function"==typeof n.value)return O(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var R=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/\${[\w\W]*}/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),$=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),J=f(/^[a-z][.\w]*(-[.\w]+)+$/i),Q=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function t(){var n,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,i=function(e){return t(e)};if(i.version="2.5.5",i.removed=[],!a||!a.document||9!==a.document.nodeType)return i.isSupported=!1,i;var l=a.document,c=a.document,s=a.DocumentFragment,u=a.HTMLTemplateElement,f=a.Node,p=a.Element,d=a.NodeFilter,h=a.NamedNodeMap,g=void 0===h?a.NamedNodeMap||a.MozNamedAttrMap:h,O=a.HTMLFormElement,ee=a.DOMParser,et=a.trustedTypes,en=p.prototype,er=L(en,"cloneNode"),eo=L(en,"nextSibling"),ea=L(en,"childNodes"),ei=L(en,"parentNode");if("function"==typeof u){var el=c.createElement("template");el.content&&el.content.ownerDocument&&(c=el.content.ownerDocument)}var ec=Q(et,l),es=ec?ec.createHTML(""):"",eu=c,em=eu.implementation,ef=eu.createNodeIterator,ep=eu.createDocumentFragment,ed=eu.getElementsByTagName,eh=l.importNode,eg={};try{eg=C(c).documentMode?c.documentMode:{}}catch(e){}var ey={};i.isSupported="function"==typeof ei&&em&&void 0!==em.createHTMLDocument&&9!==eg;var eb=K,eT=null,ev=x({},[].concat(r(R),r(D),r(M),r(F),r(H))),eN=null,eE=x({},[].concat(r(z),r(P),r(j),r(B))),eA=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),e_=null,eS=null,ew=!0,ek=!0,eO=!1,ex=!0,eC=!1,eL=!0,eR=!1,eD=!1,eM=!1,eI=!1,eF=!1,eU=!1,eH=!0,ez=!1,eP=!0,ej=!1,eB={},eG=null,eW=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eq=null,eY=x({},["audio","video","img","source","image","track"]),e$=null,eK=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eV="http://www.w3.org/1998/Math/MathML",eX="http://www.w3.org/2000/svg",eZ="http://www.w3.org/1999/xhtml",eJ=eZ,eQ=!1,e0=null,e1=x({},[eV,eX,eZ],N),e2=["application/xhtml+xml","text/html"],e3=null,e8=c.createElement("form"),e9=function(e){return e instanceof RegExp||e instanceof Function},e5=function(t){e3&&e3===t||(t&&"object"===e(t)||(t={}),t=C(t),o="application/xhtml+xml"===(n=n=-1===e2.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE)?N:v,eT="ALLOWED_TAGS"in t?x({},t.ALLOWED_TAGS,o):ev,eN="ALLOWED_ATTR"in t?x({},t.ALLOWED_ATTR,o):eE,e0="ALLOWED_NAMESPACES"in t?x({},t.ALLOWED_NAMESPACES,N):e1,e$="ADD_URI_SAFE_ATTR"in t?x(C(eK),t.ADD_URI_SAFE_ATTR,o):eK,eq="ADD_DATA_URI_TAGS"in t?x(C(eY),t.ADD_DATA_URI_TAGS,o):eY,eG="FORBID_CONTENTS"in t?x({},t.FORBID_CONTENTS,o):eW,e_="FORBID_TAGS"in t?x({},t.FORBID_TAGS,o):{},eS="FORBID_ATTR"in t?x({},t.FORBID_ATTR,o):{},eB="USE_PROFILES"in t&&t.USE_PROFILES,ew=!1!==t.ALLOW_ARIA_ATTR,ek=!1!==t.ALLOW_DATA_ATTR,eO=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ex=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,eC=t.SAFE_FOR_TEMPLATES||!1,eL=!1!==t.SAFE_FOR_XML,eR=t.WHOLE_DOCUMENT||!1,eI=t.RETURN_DOM||!1,eF=t.RETURN_DOM_FRAGMENT||!1,eU=t.RETURN_TRUSTED_TYPE||!1,eM=t.FORCE_BODY||!1,eH=!1!==t.SANITIZE_DOM,ez=t.SANITIZE_NAMED_PROPS||!1,eP=!1!==t.KEEP_CONTENT,ej=t.IN_PLACE||!1,eb=t.ALLOWED_URI_REGEXP||eb,eJ=t.NAMESPACE||eZ,eA=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&e9(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eA.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&e9(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eA.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eA.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eC&&(ek=!1),eF&&(eI=!0),eB&&(eT=x({},r(H)),eN=[],!0===eB.html&&(x(eT,R),x(eN,z)),!0===eB.svg&&(x(eT,D),x(eN,P),x(eN,B)),!0===eB.svgFilters&&(x(eT,M),x(eN,P),x(eN,B)),!0===eB.mathMl&&(x(eT,F),x(eN,j),x(eN,B))),t.ADD_TAGS&&(eT===ev&&(eT=C(eT)),x(eT,t.ADD_TAGS,o)),t.ADD_ATTR&&(eN===eE&&(eN=C(eN)),x(eN,t.ADD_ATTR,o)),t.ADD_URI_SAFE_ATTR&&x(e$,t.ADD_URI_SAFE_ATTR,o),t.FORBID_CONTENTS&&(eG===eW&&(eG=C(eG)),x(eG,t.FORBID_CONTENTS,o)),eP&&(eT["#text"]=!0),eR&&x(eT,["html","head","body"]),eT.table&&(x(eT,["tbody"]),delete e_.tbody),m&&m(t),e3=t)},e6=x({},["mi","mo","mn","ms","mtext"]),e4=x({},["foreignobject","annotation-xml"]),e7=x({},["title","style","font","a","script"]),te=x({},D);x(te,M),x(te,I);var tt=x({},F);x(tt,U);var tn=function(e){var t=ei(e);t&&t.tagName||(t={namespaceURI:eJ,tagName:"template"});var r=v(e.tagName),o=v(t.tagName);return!!e0[e.namespaceURI]&&(e.namespaceURI===eX?t.namespaceURI===eZ?"svg"===r:t.namespaceURI===eV?"svg"===r&&("annotation-xml"===o||e6[o]):!!te[r]:e.namespaceURI===eV?t.namespaceURI===eZ?"math"===r:t.namespaceURI===eX?"math"===r&&e4[o]:!!tt[r]:e.namespaceURI===eZ?(t.namespaceURI!==eX||!!e4[o])&&(t.namespaceURI!==eV||!!e6[o])&&!tt[r]&&(e7[r]||!te[r]):"application/xhtml+xml"===n&&!!e0[e.namespaceURI])},tr=function(e){T(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=es}catch(t){e.remove()}}},to=function(e,t){try{T(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!eN[e]){if(eI||eF)try{tr(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},ta=function(e){if(eM)e="<remove></remove>"+e;else{var t,r,o=E(e,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===n&&eJ===eZ&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=ec?ec.createHTML(e):e;if(eJ===eZ)try{t=new ee().parseFromString(a,n)}catch(e){}if(!t||!t.documentElement){t=em.createDocument(eJ,"template",null);try{t.documentElement.innerHTML=eQ?es:a}catch(e){}}var i=t.body||t.documentElement;return(e&&r&&i.insertBefore(c.createTextNode(r),i.childNodes[0]||null),eJ===eZ)?ed.call(t,eR?"html":"body")[0]:eR?t.documentElement:i},ti=function(e){return ef.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},tl=function(e){return e instanceof O&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof g)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},tc=function(t){return"object"===e(f)?t instanceof f:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},ts=function(e,t,n){ey[e]&&y(ey[e],function(e){e.call(i,t,n,e3)})},tu=function(e){if(ts("beforeSanitizeElements",e,null),tl(e)||w(/[\u0080-\uFFFF]/,e.nodeName))return tr(e),!0;var t,n=o(e.nodeName);if(ts("uponSanitizeElement",e,{tagName:n,allowedTags:eT}),e.hasChildNodes()&&!tc(e.firstElementChild)&&(!tc(e.content)||!tc(e.content.firstElementChild))&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||"select"===n&&w(/<template/i,e.innerHTML)||7===e.nodeType||eL&&8===e.nodeType&&w(/<[/\w]/g,e.data))return tr(e),!0;if(!eT[n]||e_[n]){if(!e_[n]&&tf(n)&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,n)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(n)))return!1;if(eP&&!eG[n]){var r=ei(e)||e.parentNode,a=ea(e)||e.childNodes;if(a&&r)for(var l=a.length,c=l-1;c>=0;--c){var s=er(a[c],!0);s.__removalCount=(e.__removalCount||0)+1,r.insertBefore(s,eo(e))}}return tr(e),!0}return e instanceof p&&!tn(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&w(/<\/no(script|embed|frames)/i,e.innerHTML)?(tr(e),!0):(eC&&3===e.nodeType&&(t=A(t=e.textContent,G," "),t=A(t,W," "),t=A(t,q," "),e.textContent!==t&&(T(i.removed,{element:e.cloneNode()}),e.textContent=t)),ts("afterSanitizeElements",e,null),!1)},tm=function(e,t,n){if(eH&&("id"===t||"name"===t)&&(n in c||n in e8))return!1;if(ek&&!eS[t]&&w(Y,t));else if(ew&&w($,t));else if(!eN[t]||eS[t]){if(!(tf(e)&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,e)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(e))&&(eA.attributeNameCheck instanceof RegExp&&w(eA.attributeNameCheck,t)||eA.attributeNameCheck instanceof Function&&eA.attributeNameCheck(t))||"is"===t&&eA.allowCustomizedBuiltInElements&&(eA.tagNameCheck instanceof RegExp&&w(eA.tagNameCheck,n)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(n))))return!1}else if(e$[t]);else if(w(eb,A(n,X,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===_(n,"data:")&&eq[e]);else if(eO&&!w(V,A(n,X,"")));else if(n)return!1;return!0},tf=function(e){return"annotation-xml"!==e&&E(e,J)},tp=function(t){ts("beforeSanitizeAttributes",t,null);var n,r,a,l,c=t.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:eN};for(l=c.length;l--;){var u=(n=c[l]).name,m=n.namespaceURI;if(r="value"===u?n.value:S(n.value),a=o(u),s.attrName=a,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,ts("uponSanitizeAttribute",t,s),r=s.attrValue,!s.forceKeepAttr&&(to(u,t),s.keepAttr)){if(!ex&&w(/\/>/i,r)||eL&&w(/((--!?|])>)|<\/(style|title)/i,r)){to(u,t);continue}eC&&(r=A(r,G," "),r=A(r,W," "),r=A(r,q," "));var f=o(t.nodeName);if(tm(f,a,r)){if(ez&&("id"===a||"name"===a)&&(to(u,t),r="user-content-"+r),ec&&"object"===e(et)&&"function"==typeof et.getAttributeType){if(m);else switch(et.getAttributeType(f,a)){case"TrustedHTML":r=ec.createHTML(r);break;case"TrustedScriptURL":r=ec.createScriptURL(r)}}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),tl(t)?tr(t):b(i.removed)}catch(e){}}}}ts("afterSanitizeAttributes",t,null)}},td=function e(t){var n,r=ti(t);for(ts("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ts("uponSanitizeShadowNode",n,null),tu(n)||(n.content instanceof s&&e(n.content),tp(n));ts("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(t){var n,r,c,u,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((eQ=!t)&&(t="<!-->"),"string"!=typeof t&&!tc(t)){if("function"==typeof t.toString){if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}else throw k("toString is not a function")}if(!i.isSupported){if("object"===e(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof t)return a.toStaticHTML(t);if(tc(t))return a.toStaticHTML(t.outerHTML)}return t}if(eD||e5(p),i.removed=[],"string"==typeof t&&(ej=!1),ej){if(t.nodeName){var d=o(t.nodeName);if(!eT[d]||e_[d])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof f)1===(r=(n=ta("<!---->")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!eI&&!eC&&!eR&&-1===t.indexOf("<"))return ec&&eU?ec.createHTML(t):t;if(!(n=ta(t)))return eI?null:eU?es:""}n&&eM&&tr(n.firstChild);for(var h=ti(ej?t:n);c=h.nextNode();)3===c.nodeType&&c===u||tu(c)||(c.content instanceof s&&td(c.content),tp(c),u=c);if(u=null,ej)return t;if(eI){if(eF)for(m=ep.call(n.ownerDocument);n.firstChild;)m.appendChild(n.firstChild);else m=n;return(eN.shadowroot||eN.shadowrootmod)&&(m=eh.call(l,m,!0)),m}var g=eR?n.outerHTML:n.innerHTML;return eR&&eT["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&w(Z,n.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+g),eC&&(g=A(g,G," "),g=A(g,W," "),g=A(g,q," ")),ec&&eU?ec.createHTML(g):g},i.setConfig=function(e){e5(e),eD=!0},i.clearConfig=function(){e3=null,eD=!1},i.isValidAttribute=function(e,t,n){return e3||e5({}),tm(o(e),o(t),n)},i.addHook=function(e,t){"function"==typeof t&&(ey[e]=ey[e]||[],T(ey[e],t))},i.removeHook=function(e){if(ey[e])return b(ey[e])},i.removeHooks=function(e){ey[e]&&(ey[e]=[])},i.removeAllHooks=function(){ey={}},i}()},e.exports=t()}}]);