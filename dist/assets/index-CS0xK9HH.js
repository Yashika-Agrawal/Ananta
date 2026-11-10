var bv=Object.defineProperty;var Cv=(s,e,t)=>e in s?bv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var bs=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pu={exports:{}},Ua={},Nu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Pv(){if(Bp)return pt;Bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function v(D,K,we){this.props=D,this.context=K,this.refs=R,this.updater=we||y}v.prototype.isReactComponent={},v.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function C(D,K,we){this.props=D,this.context=K,this.refs=R,this.updater=we||y}var F=C.prototype=new _;F.constructor=C,w(F,v.prototype),F.isPureReactComponent=!0;var N=Array.isArray,k=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function P(D,K,we){var Q,ge={},Se=null,Ue=null;if(K!=null)for(Q in K.ref!==void 0&&(Ue=K.ref),K.key!==void 0&&(Se=""+K.key),K)k.call(K,Q)&&!M.hasOwnProperty(Q)&&(ge[Q]=K[Q]);var ve=arguments.length-2;if(ve===1)ge.children=we;else if(1<ve){for(var Be=Array(ve),mt=0;mt<ve;mt++)Be[mt]=arguments[mt+2];ge.children=Be}if(D&&D.defaultProps)for(Q in ve=D.defaultProps,ve)ge[Q]===void 0&&(ge[Q]=ve[Q]);return{$$typeof:s,type:D,key:Se,ref:Ue,props:ge,_owner:I.current}}function J(D,K){return{$$typeof:s,type:D.type,key:K,ref:D.ref,props:D.props,_owner:D._owner}}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function $(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(we){return K[we]})}var ie=/\/+/g;function ue(D,K){return typeof D=="object"&&D!==null&&D.key!=null?$(""+D.key):K.toString(36)}function H(D,K,we,Q,ge){var Se=typeof D;(Se==="undefined"||Se==="boolean")&&(D=null);var Ue=!1;if(D===null)Ue=!0;else switch(Se){case"string":case"number":Ue=!0;break;case"object":switch(D.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=D,ge=ge(Ue),D=Q===""?"."+ue(Ue,0):Q,N(ge)?(we="",D!=null&&(we=D.replace(ie,"$&/")+"/"),H(ge,K,we,"",function(mt){return mt})):ge!=null&&(V(ge)&&(ge=J(ge,we+(!ge.key||Ue&&Ue.key===ge.key?"":(""+ge.key).replace(ie,"$&/")+"/")+D)),K.push(ge)),1;if(Ue=0,Q=Q===""?".":Q+":",N(D))for(var ve=0;ve<D.length;ve++){Se=D[ve];var Be=Q+ue(Se,ve);Ue+=H(Se,K,we,Be,ge)}else if(Be=g(D),typeof Be=="function")for(D=Be.call(D),ve=0;!(Se=D.next()).done;)Se=Se.value,Be=Q+ue(Se,ve++),Ue+=H(Se,K,we,Be,ge);else if(Se==="object")throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ue}function oe(D,K,we){if(D==null)return D;var Q=[],ge=0;return H(D,Q,"","",function(Se){return K.call(we,Se,ge++)}),Q}function re(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(we){(D._status===0||D._status===-1)&&(D._status=1,D._result=we)},function(we){(D._status===0||D._status===-1)&&(D._status=2,D._result=we)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var j={current:null},W={transition:null},B={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function X(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:oe,forEach:function(D,K,we){oe(D,function(){K.apply(this,arguments)},we)},count:function(D){var K=0;return oe(D,function(){K++}),K},toArray:function(D){return oe(D,function(K){return K})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},pt.Component=v,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=C,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,pt.act=X,pt.cloneElement=function(D,K,we){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Q=w({},D.props),ge=D.key,Se=D.ref,Ue=D._owner;if(K!=null){if(K.ref!==void 0&&(Se=K.ref,Ue=I.current),K.key!==void 0&&(ge=""+K.key),D.type&&D.type.defaultProps)var ve=D.type.defaultProps;for(Be in K)k.call(K,Be)&&!M.hasOwnProperty(Be)&&(Q[Be]=K[Be]===void 0&&ve!==void 0?ve[Be]:K[Be])}var Be=arguments.length-2;if(Be===1)Q.children=we;else if(1<Be){ve=Array(Be);for(var mt=0;mt<Be;mt++)ve[mt]=arguments[mt+2];Q.children=ve}return{$$typeof:s,type:D.type,key:ge,ref:Se,props:Q,_owner:Ue}},pt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},pt.createElement=P,pt.createFactory=function(D){var K=P.bind(null,D);return K.type=D,K},pt.createRef=function(){return{current:null}},pt.forwardRef=function(D){return{$$typeof:f,render:D}},pt.isValidElement=V,pt.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:re}},pt.memo=function(D,K){return{$$typeof:p,type:D,compare:K===void 0?null:K}},pt.startTransition=function(D){var K=W.transition;W.transition={};try{D()}finally{W.transition=K}},pt.unstable_act=X,pt.useCallback=function(D,K){return j.current.useCallback(D,K)},pt.useContext=function(D){return j.current.useContext(D)},pt.useDebugValue=function(){},pt.useDeferredValue=function(D){return j.current.useDeferredValue(D)},pt.useEffect=function(D,K){return j.current.useEffect(D,K)},pt.useId=function(){return j.current.useId()},pt.useImperativeHandle=function(D,K,we){return j.current.useImperativeHandle(D,K,we)},pt.useInsertionEffect=function(D,K){return j.current.useInsertionEffect(D,K)},pt.useLayoutEffect=function(D,K){return j.current.useLayoutEffect(D,K)},pt.useMemo=function(D,K){return j.current.useMemo(D,K)},pt.useReducer=function(D,K,we){return j.current.useReducer(D,K,we)},pt.useRef=function(D){return j.current.useRef(D)},pt.useState=function(D){return j.current.useState(D)},pt.useSyncExternalStore=function(D,K,we){return j.current.useSyncExternalStore(D,K,we)},pt.useTransition=function(){return j.current.useTransition()},pt.version="18.3.1",pt}var zp;function Zd(){return zp||(zp=1,Nu.exports=Pv()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Nv(){if(Gp)return Ua;Gp=1;var s=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var x,S={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:f,key:g,ref:y,props:S,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var Hp;function Lv(){return Hp||(Hp=1,Pu.exports=Nv()),Pu.exports}var b=Lv(),Mt=Zd();const Dv=qm(Mt);var cl={},Lu={exports:{}},Hn={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Iv(){return Vp||(Vp=1,(function(s){function e(W,B){var X=W.length;W.push(B);e:for(;0<X;){var D=X-1>>>1,K=W[D];if(0<o(K,B))W[D]=B,W[X]=K,X=D;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var B=W[0],X=W.pop();if(X!==B){W[0]=X;e:for(var D=0,K=W.length,we=K>>>1;D<we;){var Q=2*(D+1)-1,ge=W[Q],Se=Q+1,Ue=W[Se];if(0>o(ge,X))Se<K&&0>o(Ue,ge)?(W[D]=Ue,W[Se]=X,D=Se):(W[D]=ge,W[Q]=X,D=Q);else if(Se<K&&0>o(Ue,X))W[D]=Ue,W[Se]=X,D=Se;else break e}}return B}function o(W,B){var X=W.sortIndex-B.sortIndex;return X!==0?X:W.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],x=1,S=null,g=3,y=!1,w=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(W){for(var B=t(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=W)r(p),B.sortIndex=B.expirationTime,e(h,B);else break;B=t(p)}}function N(W){if(R=!1,F(W),!w)if(t(h)!==null)w=!0,re(k);else{var B=t(p);B!==null&&j(N,B.startTime-W)}}function k(W,B){w=!1,R&&(R=!1,_(P),P=-1),y=!0;var X=g;try{for(F(B),S=t(h);S!==null&&(!(S.expirationTime>B)||W&&!$());){var D=S.callback;if(typeof D=="function"){S.callback=null,g=S.priorityLevel;var K=D(S.expirationTime<=B);B=s.unstable_now(),typeof K=="function"?S.callback=K:S===t(h)&&r(h),F(B)}else r(h);S=t(h)}if(S!==null)var we=!0;else{var Q=t(p);Q!==null&&j(N,Q.startTime-B),we=!1}return we}finally{S=null,g=X,y=!1}}var I=!1,M=null,P=-1,J=5,V=-1;function $(){return!(s.unstable_now()-V<J)}function ie(){if(M!==null){var W=s.unstable_now();V=W;var B=!0;try{B=M(!0,W)}finally{B?ue():(I=!1,M=null)}}else I=!1}var ue;if(typeof C=="function")ue=function(){C(ie)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,oe=H.port2;H.port1.onmessage=ie,ue=function(){oe.postMessage(null)}}else ue=function(){v(ie,0)};function re(W){M=W,I||(I=!0,ue())}function j(W,B){P=v(function(){W(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,re(k))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(W){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var X=g;g=B;try{return W()}finally{g=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,B){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=g;g=W;try{return B()}finally{g=X}},s.unstable_scheduleCallback=function(W,B,X){var D=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?D+X:D):X=D,W){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=X+K,W={id:x++,callback:B,priorityLevel:W,startTime:X,expirationTime:K,sortIndex:-1},X>D?(W.sortIndex=X,e(p,W),t(h)===null&&W===t(p)&&(R?(_(P),P=-1):R=!0,j(N,X-D))):(W.sortIndex=K,e(h,W),w||y||(w=!0,re(k))),W},s.unstable_shouldYield=$,s.unstable_wrapCallback=function(W){var B=g;return function(){var X=g;g=B;try{return W.apply(this,arguments)}finally{g=X}}}})(Iu)),Iu}var Wp;function Uv(){return Wp||(Wp=1,Du.exports=Iv()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Fv(){if(Xp)return Hn;Xp=1;var s=Zd(),e=Uv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(n){return h.call(S,n)?!0:h.call(x,n)?!1:p.test(n)?S[n]=!0:(x[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),I=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),$=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),W=Symbol.iterator;function B(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,D;function K(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var we=!1;function Q(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var G=`
`+d[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=U);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function ge(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case I:return"Portal";case J:return"Profiler";case P:return"StrictMode";case ue:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qe(n){n._valueTracker||(n._valueTracker=mt(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function un(n,i){jt(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Fn(n,i.type,a):i.hasOwnProperty("defaultValue")&&Fn(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Fn(n,i,a){(i!=="number"||wt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var kt=Array.isArray;function nn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Sn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function Y(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Pn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,Yt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Je(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),nt[i]=nt[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||nt.hasOwnProperty(n)&&nt[n]?(""+i).trim():i+"px"}function te(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Me=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(n,i){if(i){if(Me[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var he=null,Ae=null,O=null;function pe(n){if(n=Sa(n)){if(typeof he!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wo(i),he(n.stateNode,n.type,i))}}function de(n){Ae?O?O.push(n):O=[n]:Ae=n}function Pe(){if(Ae){var n=Ae,i=O;if(O=Ae=null,pe(n),i)for(n=0;n<i.length;n++)pe(i[n])}}function Te(n,i){return n(i)}function Ce(){}var Ye=!1;function lt(n,i,a){if(Ye)return n(i,a);Ye=!0;try{return Te(n,i,a)}finally{Ye=!1,(Ae!==null||O!==null)&&(Ce(),Pe())}}function ye(n,i){var a=n.stateNode;if(a===null)return null;var c=wo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ze=!1;if(f)try{var st={};Object.defineProperty(st,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Ze=!1}function Oe(n,i,a,c,d,m,E,U,G){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(_e){this.onError(_e)}}var St=!1,Vt=null,Xn=!1,is=null,ea={onError:function(n){St=!0,Vt=n}};function ec(n,i,a,c,d,m,E,U,G){St=!1,Vt=null,Oe.apply(ea,arguments)}function ro(n,i,a,c,d,m,E,U,G){if(ec.apply(this,arguments),St){if(St){var ce=Vt;St=!1,Vt=null}else throw Error(t(198));Xn||(Xn=!0,is=ce)}}function wi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ti(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function rs(n){if(wi(n)!==n)throw Error(t(188))}function so(n){var i=n.alternate;if(!i){if(i=wi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return rs(d),n;if(m===c)return rs(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var E=!1,U=d.child;U;){if(U===a){E=!0,a=d,c=m;break}if(U===c){E=!0,c=d,a=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===a){E=!0,a=m,c=d;break}if(U===c){E=!0,c=m,a=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ta(n){return n=so(n),n!==null?Ir(n):null}function Ir(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ir(n);if(i!==null)return i;n=n.sibling}return null}var na=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,Ur=e.unstable_shouldYield,tc=e.unstable_requestPaint,Bt=e.unstable_now,ao=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,oo=e.unstable_UserBlockingPriority,ss=e.unstable_NormalPriority,lo=e.unstable_LowPriority,A=e.unstable_IdlePriority,z=null,se=null;function ee(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(z,n,void 0,(n.current.flags&128)===128)}catch{}}var Z=Math.clz32?Math.clz32:Le,Ie=Math.log,Ge=Math.LN2;function Le(n){return n>>>=0,n===0?32:31-(Ie(n)/Ge|0)|0}var Fe=64,Ve=4194304;function it(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ct(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var U=E&~d;U!==0?c=it(U):(m&=E,m!==0&&(c=it(m)))}else E=a&~d,E!==0?c=it(E):m!==0&&(c=it(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Z(i),d=1<<a,c|=n[a],i&=~d;return c}function We(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Z(m),U=1<<E,G=d[E];G===-1?((U&a)===0||(U&c)!==0)&&(d[E]=We(U,i)):G<=i&&(n.expiredLanes|=U),m&=~U}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ct(){var n=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),n}function Rt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Z(i),n[i]=a}function Xe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Z(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Z(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var $e=0;function Ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sn,ir,di,Ri,gt,Zt=!1,yn=[],Tt=null,Dt=null,dn=null,rr=new Map,sa=new Map,sr=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Sa(i),i!==null&&ir(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Zg(n,i,a,c,d){switch(i){case"focusin":return Tt=aa(Tt,n,i,a,c,d),!0;case"dragenter":return Dt=aa(Dt,n,i,a,c,d),!0;case"mouseover":return dn=aa(dn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return rr.set(m,aa(rr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,sa.set(m,aa(sa.get(m)||null,n,i,a,c,d)),!0}return!1}function Ef(n){var i=Fr(n.target);if(i!==null){var a=wi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ti(a),i!==null){n.blockedOn=i,gt(n.priority,function(){di(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function co(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ne=c,a.target.dispatchEvent(c),Ne=null}else return i=Sa(a),i!==null&&ir(i),n.blockedOn=a,!1;i.shift()}return!0}function wf(n,i,a){co(n)&&a.delete(i)}function Jg(){Zt=!1,Tt!==null&&co(Tt)&&(Tt=null),Dt!==null&&co(Dt)&&(Dt=null),dn!==null&&co(dn)&&(dn=null),rr.forEach(wf),sa.forEach(wf)}function oa(n,i){n.blockedOn===i&&(n.blockedOn=null,Zt||(Zt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function la(n){function i(d){return oa(d,n)}if(0<yn.length){oa(yn[0],n);for(var a=1;a<yn.length;a++){var c=yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&oa(Tt,n),Dt!==null&&oa(Dt,n),dn!==null&&oa(dn,n),rr.forEach(i),sa.forEach(i),a=0;a<sr.length;a++)c=sr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&sr.shift()}var as=N.ReactCurrentBatchConfig,uo=!0;function Qg(n,i,a,c){var d=$e,m=as.transition;as.transition=null;try{$e=1,nc(n,i,a,c)}finally{$e=d,as.transition=m}}function e0(n,i,a,c){var d=$e,m=as.transition;as.transition=null;try{$e=4,nc(n,i,a,c)}finally{$e=d,as.transition=m}}function nc(n,i,a,c){if(uo){var d=ic(n,i,a,c);if(d===null)Sc(n,i,c,fo,a),Mf(n,c);else if(Zg(d,n,i,a,c))c.stopPropagation();else if(Mf(n,c),i&4&&-1<Kg.indexOf(n)){for(;d!==null;){var m=Sa(d);if(m!==null&&sn(m),m=ic(n,i,a,c),m===null&&Sc(n,i,c,fo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Sc(n,i,c,null,a)}}var fo=null;function ic(n,i,a,c){if(fo=null,n=fe(c),n=Fr(n),n!==null)if(i=wi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ti(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return fo=n,null}function Tf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ao()){case ra:return 1;case oo:return 4;case ss:case lo:return 16;case A:return 536870912;default:return 16}default:return 16}}var ar=null,rc=null,ho=null;function Af(){if(ho)return ho;var n,i=rc,a=i.length,c,d="value"in ar?ar.value:ar.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===d[m-c];c++);return ho=d.slice(n,1<c?1-c:void 0)}function po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function mo(){return!0}function Rf(){return!1}function qn(n){function i(a,c,d,m,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?mo:Rf,this.isPropagationStopped=Rf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=qn(os),ca=X({},os,{view:0,detail:0}),t0=qn(ca),ac,oc,ua,go=X({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?(ac=n.screenX-ua.screenX,oc=n.screenY-ua.screenY):oc=ac=0,ua=n),ac)},movementY:function(n){return"movementY"in n?n.movementY:oc}}),bf=qn(go),n0=X({},go,{dataTransfer:0}),i0=qn(n0),r0=X({},ca,{relatedTarget:0}),lc=qn(r0),s0=X({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=qn(s0),o0=X({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l0=qn(o0),c0=X({},os,{data:0}),Cf=qn(c0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=f0[n])?!!i[n]:!1}function cc(){return h0}var p0=X({},ca,{key:function(n){if(n.key){var i=u0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?d0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(n){return n.type==="keypress"?po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m0=qn(p0),g0=X({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=qn(g0),v0=X({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),x0=qn(v0),_0=X({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=qn(_0),y0=X({},go,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=qn(y0),E0=[9,13,27,32],uc=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var w0=f&&"TextEvent"in window&&!da,Nf=f&&(!uc||da&&8<da&&11>=da),Lf=" ",Df=!1;function If(n,i){switch(n){case"keyup":return E0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function T0(n,i){switch(n){case"compositionend":return Uf(i);case"keypress":return i.which!==32?null:(Df=!0,Lf);case"textInput":return n=i.data,n===Lf&&Df?null:n;default:return null}}function A0(n,i){if(ls)return n==="compositionend"||!uc&&If(n,i)?(n=Af(),ho=rc=ar=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nf&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!R0[n.type]:i==="textarea"}function Of(n,i,a,c){de(c),i=yo(i,"onChange"),0<i.length&&(a=new sc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var fa=null,ha=null;function b0(n){th(n,0)}function vo(n){var i=hs(n);if(_t(i))return n}function C0(n,i){if(n==="change")return i}var kf=!1;if(f){var dc;if(f){var fc="oninput"in document;if(!fc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),fc=typeof Bf.oninput=="function"}dc=fc}else dc=!1;kf=dc&&(!document.documentMode||9<document.documentMode)}function zf(){fa&&(fa.detachEvent("onpropertychange",Gf),ha=fa=null)}function Gf(n){if(n.propertyName==="value"&&vo(ha)){var i=[];Of(i,ha,n,fe(n)),lt(b0,i)}}function P0(n,i,a){n==="focusin"?(zf(),fa=i,ha=a,fa.attachEvent("onpropertychange",Gf)):n==="focusout"&&zf()}function N0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vo(ha)}function L0(n,i){if(n==="click")return vo(i)}function D0(n,i){if(n==="input"||n==="change")return vo(i)}function I0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:I0;function pa(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!fi(n[d],i[d]))return!1}return!0}function Hf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vf(n,i){var a=Hf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hf(a)}}function Wf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var n=window,i=wt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=wt(n.document)}return i}function hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function U0(n){var i=Xf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&hc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Vf(a,m);var E=Vf(a,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var F0=f&&"documentMode"in document&&11>=document.documentMode,cs=null,pc=null,ma=null,mc=!1;function qf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||cs==null||cs!==wt(c)||(c=cs,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=yo(pc,"onSelect"),0<c.length&&(i=new sc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=cs)))}function xo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var us={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},gc={},jf={};f&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function _o(n){if(gc[n])return gc[n];if(!us[n])return n;var i=us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in jf)return gc[n]=i[a];return n}var Yf=_o("animationend"),$f=_o("animationiteration"),Kf=_o("animationstart"),Zf=_o("transitionend"),Jf=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){Jf.set(n,i),l(i,[n])}for(var vc=0;vc<Qf.length;vc++){var xc=Qf[vc],O0=xc.toLowerCase(),k0=xc[0].toUpperCase()+xc.slice(1);or(O0,"on"+k0)}or(Yf,"onAnimationEnd"),or($f,"onAnimationIteration"),or(Kf,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Zf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function eh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ro(c,i,void 0,n),n.currentTarget=null}function th(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],G=U.instance,ce=U.currentTarget;if(U=U.listener,G!==m&&d.isPropagationStopped())break e;eh(d,U,ce),m=G}else for(E=0;E<c.length;E++){if(U=c[E],G=U.instance,ce=U.currentTarget,U=U.listener,G!==m&&d.isPropagationStopped())break e;eh(d,U,ce),m=G}}}if(Xn)throw n=is,Xn=!1,is=null,n}function Ft(n,i){var a=i[Ac];a===void 0&&(a=i[Ac]=new Set);var c=n+"__bubble";a.has(c)||(nh(i,n,2,!1),a.add(c))}function _c(n,i,a){var c=0;i&&(c|=4),nh(a,n,c,i)}var So="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[So]){n[So]=!0,r.forEach(function(a){a!=="selectionchange"&&(B0.has(a)||_c(a,!1,n),_c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[So]||(i[So]=!0,_c("selectionchange",!1,i))}}function nh(n,i,a,c){switch(Tf(i)){case 1:var d=Qg;break;case 4:d=e0;break;default:d=nc}a=d.bind(null,i,a,n),d=void 0,!Ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Sc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Fr(U),E===null)return;if(G=E.tag,G===5||G===6){c=m=E;continue e}U=U.parentNode}}c=c.return}lt(function(){var ce=m,_e=fe(a),Ee=[];e:{var xe=Jf.get(n);if(xe!==void 0){var ze=sc,qe=n;switch(n){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":ze=m0;break;case"focusin":qe="focus",ze=lc;break;case"focusout":qe="blur",ze=lc;break;case"beforeblur":case"afterblur":ze=lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=i0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=x0;break;case Yf:case $f:case Kf:ze=a0;break;case Zf:ze=S0;break;case"scroll":ze=t0;break;case"wheel":ze=M0;break;case"copy":case"cut":case"paste":ze=l0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Pf}var je=(i&4)!==0,Jt=!je&&n==="scroll",ne=je?xe!==null?xe+"Capture":null:xe;je=[];for(var q=ce,ae;q!==null;){ae=q;var Re=ae.stateNode;if(ae.tag===5&&Re!==null&&(ae=Re,ne!==null&&(Re=ye(q,ne),Re!=null&&je.push(xa(q,Re,ae)))),Jt)break;q=q.return}0<je.length&&(xe=new ze(xe,qe,null,a,_e),Ee.push({event:xe,listeners:je}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",xe&&a!==Ne&&(qe=a.relatedTarget||a.fromElement)&&(Fr(qe)||qe[Gi]))break e;if((ze||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(qe=a.relatedTarget||a.toElement,ze=ce,qe=qe?Fr(qe):null,qe!==null&&(Jt=wi(qe),qe!==Jt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(ze=null,qe=ce),ze!==qe)){if(je=bf,Re="onMouseLeave",ne="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(je=Pf,Re="onPointerLeave",ne="onPointerEnter",q="pointer"),Jt=ze==null?xe:hs(ze),ae=qe==null?xe:hs(qe),xe=new je(Re,q+"leave",ze,a,_e),xe.target=Jt,xe.relatedTarget=ae,Re=null,Fr(_e)===ce&&(je=new je(ne,q+"enter",qe,a,_e),je.target=ae,je.relatedTarget=Jt,Re=je),Jt=Re,ze&&qe)t:{for(je=ze,ne=qe,q=0,ae=je;ae;ae=ds(ae))q++;for(ae=0,Re=ne;Re;Re=ds(Re))ae++;for(;0<q-ae;)je=ds(je),q--;for(;0<ae-q;)ne=ds(ne),ae--;for(;q--;){if(je===ne||ne!==null&&je===ne.alternate)break t;je=ds(je),ne=ds(ne)}je=null}else je=null;ze!==null&&ih(Ee,xe,ze,je,!1),qe!==null&&Jt!==null&&ih(Ee,Jt,qe,je,!0)}}e:{if(xe=ce?hs(ce):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var Ke=C0;else if(Ff(xe))if(kf)Ke=D0;else{Ke=N0;var et=P0}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=L0);if(Ke&&(Ke=Ke(n,ce))){Of(Ee,Ke,a,_e);break e}et&&et(n,xe,ce),n==="focusout"&&(et=xe._wrapperState)&&et.controlled&&xe.type==="number"&&Fn(xe,"number",xe.value)}switch(et=ce?hs(ce):window,n){case"focusin":(Ff(et)||et.contentEditable==="true")&&(cs=et,pc=ce,ma=null);break;case"focusout":ma=pc=cs=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,qf(Ee,a,_e);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":qf(Ee,a,_e)}var tt;if(uc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ls?If(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Nf&&a.locale!=="ko"&&(ls||at!=="onCompositionStart"?at==="onCompositionEnd"&&ls&&(tt=Af()):(ar=_e,rc="value"in ar?ar.value:ar.textContent,ls=!0)),et=yo(ce,at),0<et.length&&(at=new Cf(at,n,null,a,_e),Ee.push({event:at,listeners:et}),tt?at.data=tt:(tt=Uf(a),tt!==null&&(at.data=tt)))),(tt=w0?T0(n,a):A0(n,a))&&(ce=yo(ce,"onBeforeInput"),0<ce.length&&(_e=new Cf("onBeforeInput","beforeinput",null,a,_e),Ee.push({event:_e,listeners:ce}),_e.data=tt))}th(Ee,i)})}function xa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function yo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ye(n,a),m!=null&&c.unshift(xa(n,m,d)),m=ye(n,i),m!=null&&c.push(xa(n,m,d))),n=n.return}return c}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ih(n,i,a,c,d){for(var m=i._reactName,E=[];a!==null&&a!==c;){var U=a,G=U.alternate,ce=U.stateNode;if(G!==null&&G===c)break;U.tag===5&&ce!==null&&(U=ce,d?(G=ye(a,m),G!=null&&E.unshift(xa(a,G,U))):d||(G=ye(a,m),G!=null&&E.push(xa(a,G,U)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var z0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function rh(n){return(typeof n=="string"?n:""+n).replace(z0,`
`).replace(G0,"")}function Mo(n,i,a){if(i=rh(i),rh(n)!==i&&a)throw Error(t(425))}function Eo(){}var yc=null,Mc=null;function Ec(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(n){return sh.resolve(null).then(n).catch(W0)}:wc;function W0(n){setTimeout(function(){throw n})}function Tc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),la(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);la(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),bi="__reactFiber$"+fs,_a="__reactProps$"+fs,Gi="__reactContainer$"+fs,Ac="__reactEvents$"+fs,X0="__reactListeners$"+fs,q0="__reactHandles$"+fs;function Fr(n){var i=n[bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Gi]||a[bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ah(n);n!==null;){if(a=n[bi])return a;n=ah(n)}return i}n=a,a=n.parentNode}return null}function Sa(n){return n=n[bi]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wo(n){return n[_a]||null}var Rc=[],ps=-1;function cr(n){return{current:n}}function Ot(n){0>ps||(n.current=Rc[ps],Rc[ps]=null,ps--)}function Ut(n,i){ps++,Rc[ps]=n.current,n.current=i}var ur={},Mn=cr(ur),On=cr(!1),Or=ur;function ms(n,i){var a=n.type.contextTypes;if(!a)return ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function To(){Ot(On),Ot(Mn)}function oh(n,i,a){if(Mn.current!==ur)throw Error(t(168));Ut(Mn,i),Ut(On,a)}function lh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return X({},a,c)}function Ao(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Or=Mn.current,Ut(Mn,n),Ut(On,On.current),!0}function ch(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=lh(n,i,Or),c.__reactInternalMemoizedMergedChildContext=n,Ot(On),Ot(Mn),Ut(Mn,n)):Ot(On),Ut(On,a)}var Hi=null,Ro=!1,bc=!1;function uh(n){Hi===null?Hi=[n]:Hi.push(n)}function j0(n){Ro=!0,uh(n)}function dr(){if(!bc&&Hi!==null){bc=!0;var n=0,i=$e;try{var a=Hi;for($e=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Hi=null,Ro=!1}catch(d){throw Hi!==null&&(Hi=Hi.slice(n+1)),na(ra,dr),d}finally{$e=i,bc=!1}}return null}var gs=[],vs=0,bo=null,Co=0,ni=[],ii=0,kr=null,Vi=1,Wi="";function Br(n,i){gs[vs++]=Co,gs[vs++]=bo,bo=n,Co=i}function dh(n,i,a){ni[ii++]=Vi,ni[ii++]=Wi,ni[ii++]=kr,kr=n;var c=Vi;n=Wi;var d=32-Z(c)-1;c&=~(1<<d),a+=1;var m=32-Z(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Vi=1<<32-Z(i)+d|a<<d|c,Wi=m+n}else Vi=1<<m|a<<d|c,Wi=n}function Cc(n){n.return!==null&&(Br(n,1),dh(n,1,0))}function Pc(n){for(;n===bo;)bo=gs[--vs],gs[vs]=null,Co=gs[--vs],gs[vs]=null;for(;n===kr;)kr=ni[--ii],ni[ii]=null,Wi=ni[--ii],ni[ii]=null,Vi=ni[--ii],ni[ii]=null}var jn=null,Yn=null,Gt=!1,hi=null;function fh(n,i){var a=oi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,Yn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Vi,overflow:Wi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=oi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,Yn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Gt){var i=Yn;if(i){var a=i;if(!hh(n,i)){if(Nc(n))throw Error(t(418));i=lr(a.nextSibling);var c=jn;i&&hh(n,i)?fh(c,a):(n.flags=n.flags&-4097|2,Gt=!1,jn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,jn=n}}}function ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Po(n){if(n!==jn)return!1;if(!Gt)return ph(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ec(n.type,n.memoizedProps)),i&&(i=Yn)){if(Nc(n))throw mh(),Error(t(418));for(;i;)fh(n,i),i=lr(i.nextSibling)}if(ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Yn=lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Yn=null}}else Yn=jn?lr(n.stateNode.nextSibling):null;return!0}function mh(){for(var n=Yn;n;)n=lr(n.nextSibling)}function xs(){Yn=jn=null,Gt=!1}function Dc(n){hi===null?hi=[n]:hi.push(n)}var Y0=N.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function No(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gh(n){var i=n._init;return i(n._payload)}function vh(n){function i(ne,q){if(n){var ae=ne.deletions;ae===null?(ne.deletions=[q],ne.flags|=16):ae.push(q)}}function a(ne,q){if(!n)return null;for(;q!==null;)i(ne,q),q=q.sibling;return null}function c(ne,q){for(ne=new Map;q!==null;)q.key!==null?ne.set(q.key,q):ne.set(q.index,q),q=q.sibling;return ne}function d(ne,q){return ne=_r(ne,q),ne.index=0,ne.sibling=null,ne}function m(ne,q,ae){return ne.index=ae,n?(ae=ne.alternate,ae!==null?(ae=ae.index,ae<q?(ne.flags|=2,q):ae):(ne.flags|=2,q)):(ne.flags|=1048576,q)}function E(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function U(ne,q,ae,Re){return q===null||q.tag!==6?(q=wu(ae,ne.mode,Re),q.return=ne,q):(q=d(q,ae),q.return=ne,q)}function G(ne,q,ae,Re){var Ke=ae.type;return Ke===M?_e(ne,q,ae.props.children,Re,ae.key):q!==null&&(q.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&gh(Ke)===q.type)?(Re=d(q,ae.props),Re.ref=ya(ne,q,ae),Re.return=ne,Re):(Re=tl(ae.type,ae.key,ae.props,null,ne.mode,Re),Re.ref=ya(ne,q,ae),Re.return=ne,Re)}function ce(ne,q,ae,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=Tu(ae,ne.mode,Re),q.return=ne,q):(q=d(q,ae.children||[]),q.return=ne,q)}function _e(ne,q,ae,Re,Ke){return q===null||q.tag!==7?(q=jr(ae,ne.mode,Re,Ke),q.return=ne,q):(q=d(q,ae),q.return=ne,q)}function Ee(ne,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number")return q=wu(""+q,ne.mode,ae),q.return=ne,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return ae=tl(q.type,q.key,q.props,null,ne.mode,ae),ae.ref=ya(ne,null,q),ae.return=ne,ae;case I:return q=Tu(q,ne.mode,ae),q.return=ne,q;case re:var Re=q._init;return Ee(ne,Re(q._payload),ae)}if(kt(q)||B(q))return q=jr(q,ne.mode,ae,null),q.return=ne,q;No(ne,q)}return null}function xe(ne,q,ae,Re){var Ke=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Ke!==null?null:U(ne,q,""+ae,Re);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case k:return ae.key===Ke?G(ne,q,ae,Re):null;case I:return ae.key===Ke?ce(ne,q,ae,Re):null;case re:return Ke=ae._init,xe(ne,q,Ke(ae._payload),Re)}if(kt(ae)||B(ae))return Ke!==null?null:_e(ne,q,ae,Re,null);No(ne,ae)}return null}function ze(ne,q,ae,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ne=ne.get(ae)||null,U(q,ne,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case k:return ne=ne.get(Re.key===null?ae:Re.key)||null,G(q,ne,Re,Ke);case I:return ne=ne.get(Re.key===null?ae:Re.key)||null,ce(q,ne,Re,Ke);case re:var et=Re._init;return ze(ne,q,ae,et(Re._payload),Ke)}if(kt(Re)||B(Re))return ne=ne.get(ae)||null,_e(q,ne,Re,Ke,null);No(q,Re)}return null}function qe(ne,q,ae,Re){for(var Ke=null,et=null,tt=q,at=q=0,pn=null;tt!==null&&at<ae.length;at++){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var At=xe(ne,tt,ae[at],Re);if(At===null){tt===null&&(tt=pn);break}n&&tt&&At.alternate===null&&i(ne,tt),q=m(At,q,at),et===null?Ke=At:et.sibling=At,et=At,tt=pn}if(at===ae.length)return a(ne,tt),Gt&&Br(ne,at),Ke;if(tt===null){for(;at<ae.length;at++)tt=Ee(ne,ae[at],Re),tt!==null&&(q=m(tt,q,at),et===null?Ke=tt:et.sibling=tt,et=tt);return Gt&&Br(ne,at),Ke}for(tt=c(ne,tt);at<ae.length;at++)pn=ze(tt,ne,at,ae[at],Re),pn!==null&&(n&&pn.alternate!==null&&tt.delete(pn.key===null?at:pn.key),q=m(pn,q,at),et===null?Ke=pn:et.sibling=pn,et=pn);return n&&tt.forEach(function(Sr){return i(ne,Sr)}),Gt&&Br(ne,at),Ke}function je(ne,q,ae,Re){var Ke=B(ae);if(typeof Ke!="function")throw Error(t(150));if(ae=Ke.call(ae),ae==null)throw Error(t(151));for(var et=Ke=null,tt=q,at=q=0,pn=null,At=ae.next();tt!==null&&!At.done;at++,At=ae.next()){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var Sr=xe(ne,tt,At.value,Re);if(Sr===null){tt===null&&(tt=pn);break}n&&tt&&Sr.alternate===null&&i(ne,tt),q=m(Sr,q,at),et===null?Ke=Sr:et.sibling=Sr,et=Sr,tt=pn}if(At.done)return a(ne,tt),Gt&&Br(ne,at),Ke;if(tt===null){for(;!At.done;at++,At=ae.next())At=Ee(ne,At.value,Re),At!==null&&(q=m(At,q,at),et===null?Ke=At:et.sibling=At,et=At);return Gt&&Br(ne,at),Ke}for(tt=c(ne,tt);!At.done;at++,At=ae.next())At=ze(tt,ne,at,At.value,Re),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?at:At.key),q=m(At,q,at),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(Rv){return i(ne,Rv)}),Gt&&Br(ne,at),Ke}function Jt(ne,q,ae,Re){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case k:e:{for(var Ke=ae.key,et=q;et!==null;){if(et.key===Ke){if(Ke=ae.type,Ke===M){if(et.tag===7){a(ne,et.sibling),q=d(et,ae.props.children),q.return=ne,ne=q;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&gh(Ke)===et.type){a(ne,et.sibling),q=d(et,ae.props),q.ref=ya(ne,et,ae),q.return=ne,ne=q;break e}a(ne,et);break}else i(ne,et);et=et.sibling}ae.type===M?(q=jr(ae.props.children,ne.mode,Re,ae.key),q.return=ne,ne=q):(Re=tl(ae.type,ae.key,ae.props,null,ne.mode,Re),Re.ref=ya(ne,q,ae),Re.return=ne,ne=Re)}return E(ne);case I:e:{for(et=ae.key;q!==null;){if(q.key===et)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){a(ne,q.sibling),q=d(q,ae.children||[]),q.return=ne,ne=q;break e}else{a(ne,q);break}else i(ne,q);q=q.sibling}q=Tu(ae,ne.mode,Re),q.return=ne,ne=q}return E(ne);case re:return et=ae._init,Jt(ne,q,et(ae._payload),Re)}if(kt(ae))return qe(ne,q,ae,Re);if(B(ae))return je(ne,q,ae,Re);No(ne,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,q!==null&&q.tag===6?(a(ne,q.sibling),q=d(q,ae),q.return=ne,ne=q):(a(ne,q),q=wu(ae,ne.mode,Re),q.return=ne,ne=q),E(ne)):a(ne,q)}return Jt}var _s=vh(!0),xh=vh(!1),Lo=cr(null),Do=null,Ss=null,Ic=null;function Uc(){Ic=Ss=Do=null}function Fc(n){var i=Lo.current;Ot(Lo),n._currentValue=i}function Oc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ys(n,i){Do=n,Ic=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ri(n){var i=n._currentValue;if(Ic!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Do===null)throw Error(t(308));Ss=n,Do.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var zr=null;function kc(n){zr===null?zr=[n]:zr.push(n)}function _h(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,kc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Xi(n,c)}function Xi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fr=!1;function Bc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(n,a)}return d=c.interleaved,d===null?(i.next=i,kc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(n,a)}function Io(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}function yh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Uo(n,i,a,c){var d=n.updateQueue;fr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var G=U,ce=G.next;G.next=null,E===null?m=ce:E.next=ce,E=G;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ce:U.next=ce,_e.lastBaseUpdate=G))}if(m!==null){var Ee=d.baseState;E=0,_e=ce=G=null,U=m;do{var xe=U.lane,ze=U.eventTime;if((c&xe)===xe){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var qe=n,je=U;switch(xe=i,ze=a,je.tag){case 1:if(qe=je.payload,typeof qe=="function"){Ee=qe.call(ze,Ee,xe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=je.payload,xe=typeof qe=="function"?qe.call(ze,Ee,xe):qe,xe==null)break e;Ee=X({},Ee,xe);break e;case 2:fr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[U]:xe.push(U))}else ze={eventTime:ze,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ce=_e=ze,G=Ee):_e=_e.next=ze,E|=xe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(_e===null&&(G=Ee),d.baseState=G,d.firstBaseUpdate=ce,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Vr|=E,n.lanes=E,n.memoizedState=Ee}}function Mh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ma={},Ci=cr(Ma),Ea=cr(Ma),wa=cr(Ma);function Gr(n){if(n===Ma)throw Error(t(174));return n}function zc(n,i){switch(Ut(wa,i),Ut(Ea,n),Ut(Ci,Ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Nt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Nt(i,n)}Ot(Ci),Ut(Ci,i)}function Ms(){Ot(Ci),Ot(Ea),Ot(wa)}function Eh(n){Gr(wa.current);var i=Gr(Ci.current),a=Nt(i,n.type);i!==a&&(Ut(Ea,n),Ut(Ci,a))}function Gc(n){Ea.current===n&&(Ot(Ci),Ot(Ea))}var Wt=cr(0);function Fo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var n=0;n<Hc.length;n++)Hc[n]._workInProgressVersionPrimary=null;Hc.length=0}var Oo=N.ReactCurrentDispatcher,Wc=N.ReactCurrentBatchConfig,Hr=0,Xt=null,an=null,fn=null,ko=!1,Ta=!1,Aa=0,$0=0;function En(){throw Error(t(321))}function Xc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!fi(n[a],i[a]))return!1;return!0}function qc(n,i,a,c,d,m){if(Hr=m,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Oo.current=n===null||n.memoizedState===null?Q0:ev,n=a(c,d),Ta){m=0;do{if(Ta=!1,Aa=0,25<=m)throw Error(t(301));m+=1,fn=an=null,i.updateQueue=null,Oo.current=tv,n=a(c,d)}while(Ta)}if(Oo.current=Go,i=an!==null&&an.next!==null,Hr=0,fn=an=Xt=null,ko=!1,i)throw Error(t(300));return n}function jc(){var n=Aa!==0;return Aa=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Xt.memoizedState=fn=n:fn=fn.next=n,fn}function si(){if(an===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=fn===null?Xt.memoizedState:fn.next;if(i!==null)fn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?Xt.memoizedState=fn=n:fn=fn.next=n}return fn}function Ra(n,i){return typeof i=="function"?i(n):i}function Yc(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=an,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=E=null,G=null,ce=m;do{var _e=ce.lane;if((Hr&_e)===_e)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Ee={lane:_e,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(U=G=Ee,E=c):G=G.next=Ee,Xt.lanes|=_e,Vr|=_e}ce=ce.next}while(ce!==null&&ce!==m);G===null?E=c:G.next=U,fi(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Xt.lanes|=m,Vr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $c(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);fi(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function wh(){}function Th(n,i){var a=Xt,c=si(),d=i(),m=!fi(c.memoizedState,d);if(m&&(c.memoizedState=d,Bn=!0),c=c.queue,Kc(bh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,ba(9,Rh.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(t(349));(Hr&30)!==0||Ah(a,i,d)}return d}function Ah(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Rh(n,i,a,c){i.value=a,i.getSnapshot=c,Ch(i)&&Ph(n)}function bh(n,i,a){return a(function(){Ch(i)&&Ph(n)})}function Ch(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!fi(n,a)}catch{return!0}}function Ph(n){var i=Xi(n,1);i!==null&&vi(i,n,1,-1)}function Nh(n){var i=Pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},i.queue=n,n=n.dispatch=J0.bind(null,Xt,n),[i.memoizedState,n]}function ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Lh(){return si().memoizedState}function Bo(n,i,a,c){var d=Pi();Xt.flags|=n,d.memoizedState=ba(1|i,a,void 0,c===void 0?null:c)}function zo(n,i,a,c){var d=si();c=c===void 0?null:c;var m=void 0;if(an!==null){var E=an.memoizedState;if(m=E.destroy,c!==null&&Xc(c,E.deps)){d.memoizedState=ba(i,a,m,c);return}}Xt.flags|=n,d.memoizedState=ba(1|i,a,m,c)}function Dh(n,i){return Bo(8390656,8,n,i)}function Kc(n,i){return zo(2048,8,n,i)}function Ih(n,i){return zo(4,2,n,i)}function Uh(n,i){return zo(4,4,n,i)}function Fh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Oh(n,i,a){return a=a!=null?a.concat([n]):null,zo(4,4,Fh.bind(null,i,n),a)}function Zc(){}function kh(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Bh(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function zh(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(fi(a,i)||(a=Ct(),Xt.lanes|=a,Vr|=a,n.baseState=!0),i)}function K0(n,i){var a=$e;$e=a!==0&&4>a?a:4,n(!0);var c=Wc.transition;Wc.transition={};try{n(!1),i()}finally{$e=a,Wc.transition=c}}function Gh(){return si().memoizedState}function Z0(n,i,a){var c=vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Hh(n))Vh(i,a);else if(a=_h(n,i,a,c),a!==null){var d=Ln();vi(a,n,c,d),Wh(a,i,c)}}function J0(n,i,a){var c=vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hh(n))Vh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,a);if(d.hasEagerState=!0,d.eagerState=U,fi(U,E)){var G=i.interleaved;G===null?(d.next=d,kc(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}a=_h(n,i,d,c),a!==null&&(d=Ln(),vi(a,n,c,d),Wh(a,i,c))}}function Hh(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Vh(n,i){Ta=ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}var Go={readContext:ri,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Q0={readContext:ri,useCallback:function(n,i){return Pi().memoizedState=[n,i===void 0?null:i],n},useContext:ri,useEffect:Dh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Bo(4194308,4,Fh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Bo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Bo(4,2,n,i)},useMemo:function(n,i){var a=Pi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Pi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Z0.bind(null,Xt,n),[c.memoizedState,n]},useRef:function(n){var i=Pi();return n={current:n},i.memoizedState=n},useState:Nh,useDebugValue:Zc,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=Nh(!1),i=n[0];return n=K0.bind(null,n[1]),Pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Xt,d=Pi();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(Hr&30)!==0||Ah(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Dh(bh.bind(null,c,m,n),[n]),c.flags|=2048,ba(9,Rh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Pi(),i=hn.identifierPrefix;if(Gt){var a=Wi,c=Vi;a=(c&~(1<<32-Z(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ev={readContext:ri,useCallback:kh,useContext:ri,useEffect:Kc,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:Bh,useReducer:Yc,useRef:Lh,useState:function(){return Yc(Ra)},useDebugValue:Zc,useDeferredValue:function(n){var i=si();return zh(i,an.memoizedState,n)},useTransition:function(){var n=Yc(Ra)[0],i=si().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Gh,unstable_isNewReconciler:!1},tv={readContext:ri,useCallback:kh,useContext:ri,useEffect:Kc,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:Bh,useReducer:$c,useRef:Lh,useState:function(){return $c(Ra)},useDebugValue:Zc,useDeferredValue:function(n){var i=si();return an===null?i.memoizedState=n:zh(i,an.memoizedState,n)},useTransition:function(){var n=$c(Ra)[0],i=si().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Gh,unstable_isNewReconciler:!1};function pi(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Jc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ho={isMounted:function(n){return(n=n._reactInternals)?wi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=vr(n),m=qi(c,d);m.payload=i,a!=null&&(m.callback=a),i=hr(n,m,d),i!==null&&(vi(i,n,d,c),Io(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=vr(n),m=qi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=hr(n,m,d),i!==null&&(vi(i,n,d,c),Io(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=vr(n),d=qi(a,c);d.tag=2,i!=null&&(d.callback=i),i=hr(n,d,c),i!==null&&(vi(i,n,c,a),Io(i,n,c))}};function Xh(n,i,a,c,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!pa(a,c)||!pa(d,m):!0}function qh(n,i,a){var c=!1,d=ur,m=i.contextType;return typeof m=="object"&&m!==null?m=ri(m):(d=kn(i)?Or:Mn.current,c=i.contextTypes,m=(c=c!=null)?ms(n,d):ur),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function jh(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ho.enqueueReplaceState(i,i.state,null)}function Qc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Bc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ri(m):(m=kn(i)?Or:Mn.current,d.context=ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Jc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ho.enqueueReplaceState(d,d.state,null),Uo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var a="",c=i;do a+=ge(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function eu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function tu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function Yh(n,i,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){$o||($o=!0,gu=c),tu(n,i)},a}function $h(n,i,a){a=qi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){tu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){tu(n,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Kh(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=gv.bind(null,n,i,a),i.then(n,n))}function Zh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Jh(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=qi(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var iv=N.ReactCurrentOwner,Bn=!1;function Nn(n,i,a,c){i.child=n===null?xh(i,null,a,c):_s(i,n.child,a,c)}function Qh(n,i,a,c,d){a=a.render;var m=i.ref;return ys(i,d),c=qc(n,i,a,c,m,d),a=jc(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Gt&&a&&Cc(i),i.flags|=1,Nn(n,i,c,d),i.child)}function ep(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Eu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,tp(n,i,m,c,d)):(n=tl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(E,c)&&n.ref===i.ref)return ji(n,i,d)}return i.flags|=1,n=_r(m,c),n.ref=i.ref,n.return=i,i.child=n}function tp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(pa(m,c)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,ji(n,i,d)}return nu(n,i,a,c,d)}function np(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ts,$n),$n|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ts,$n),$n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ut(Ts,$n),$n|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ut(Ts,$n),$n|=c;return Nn(n,i,d,a),i.child}function ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nu(n,i,a,c,d){var m=kn(a)?Or:Mn.current;return m=ms(i,m),ys(i,d),a=qc(n,i,a,c,m,d),c=jc(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Gt&&c&&Cc(i),i.flags|=1,Nn(n,i,a,d),i.child)}function rp(n,i,a,c,d){if(kn(a)){var m=!0;Ao(i)}else m=!1;if(ys(i,d),i.stateNode===null)Wo(n,i),qh(i,a,c),Qc(i,a,c,d),c=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var G=E.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=ri(ce):(ce=kn(a)?Or:Mn.current,ce=ms(i,ce));var _e=a.getDerivedStateFromProps,Ee=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||G!==ce)&&jh(i,E,c,ce),fr=!1;var xe=i.memoizedState;E.state=xe,Uo(i,c,E,d),G=i.memoizedState,U!==c||xe!==G||On.current||fr?(typeof _e=="function"&&(Jc(i,a,_e,c),G=i.memoizedState),(U=fr||Xh(i,a,U,c,xe,G,ce))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),E.props=c,E.state=G,E.context=ce,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Sh(n,i),U=i.memoizedProps,ce=i.type===i.elementType?U:pi(i.type,U),E.props=ce,Ee=i.pendingProps,xe=E.context,G=a.contextType,typeof G=="object"&&G!==null?G=ri(G):(G=kn(a)?Or:Mn.current,G=ms(i,G));var ze=a.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Ee||xe!==G)&&jh(i,E,c,G),fr=!1,xe=i.memoizedState,E.state=xe,Uo(i,c,E,d);var qe=i.memoizedState;U!==Ee||xe!==qe||On.current||fr?(typeof ze=="function"&&(Jc(i,a,ze,c),qe=i.memoizedState),(ce=fr||Xh(i,a,ce,c,xe,qe,G)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,qe,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,qe,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=qe),E.props=c,E.state=qe,E.context=G,c=ce):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return iu(n,i,a,c,m,d)}function iu(n,i,a,c,d,m){ip(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&ch(i,a,!1),ji(n,i,m);c=i.stateNode,iv.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,m),i.child=_s(i,null,U,m)):Nn(n,i,U,m),i.memoizedState=c.state,d&&ch(i,a,!0),i.child}function sp(n){var i=n.stateNode;i.pendingContext?oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(n,i.context,!1),zc(n,i.containerInfo)}function ap(n,i,a,c,d){return xs(),Dc(d),i.flags|=256,Nn(n,i,a,c),i.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(n){return{baseLanes:n,cachePool:null,transitions:null}}function op(n,i,a){var c=i.pendingProps,d=Wt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Wt,d&1),n===null)return Lc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=nl(E,c,0,null),n=jr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=su(a),i.memoizedState=ru,n):au(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return rv(n,i,E,c,U,d,a);if(m){m=c.fallback,E=i.mode,d=n.child,U=d.sibling;var G={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=_r(d,G),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=_r(U,m):(m=jr(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?su(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=ru,c}return m=n.child,n=m.sibling,c=_r(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function au(n,i){return i=nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Vo(n,i,a,c){return c!==null&&Dc(c),_s(i,n.child,null,a),n=au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function rv(n,i,a,c,d,m,E){if(a)return i.flags&256?(i.flags&=-257,c=eu(Error(t(422))),Vo(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=nl({mode:"visible",children:c.children},d,0,null),m=jr(m,d,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=su(E),i.memoizedState=ru,m);if((i.mode&1)===0)return Vo(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=eu(m,c,void 0),Vo(n,i,E,c)}if(U=(E&n.childLanes)!==0,Bn||U){if(c=hn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Xi(n,d),vi(c,n,d,-1))}return Mu(),c=eu(Error(t(421))),Vo(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=vv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Yn=lr(d.nextSibling),jn=i,Gt=!0,hi=null,n!==null&&(ni[ii++]=Vi,ni[ii++]=Wi,ni[ii++]=kr,Vi=n.id,Wi=n.overflow,kr=i),i=au(i,c.children),i.flags|=4096,i)}function lp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Oc(n.return,i,a)}function ou(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function cp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Nn(n,i,c.children,a),c=Wt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lp(n,a,i);else if(n.tag===19)lp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Wt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Fo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ou(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Fo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ou(i,!0,a,null,m);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function sv(n,i,a){switch(i.tag){case 3:sp(i),xs();break;case 5:Eh(i);break;case 1:kn(i.type)&&Ao(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ut(Lo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?op(n,i,a):(Ut(Wt,Wt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);Ut(Wt,Wt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return cp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Wt,Wt.current),c)break;return null;case 22:case 23:return i.lanes=0,np(n,i,a)}return ji(n,i,a)}var up,lu,dp,fp;up=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lu=function(){},dp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Gr(Ci.current);var m=null;switch(a){case"input":d=dt(n,d),c=dt(n,c),m=[];break;case"select":d=X({},d,{value:void 0}),c=X({},c,{value:void 0}),m=[];break;case"textarea":d=Sn(n,d),c=Sn(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Eo)}me(a,c);var E;a=null;for(ce in d)if(!c.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var U=d[ce];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var G=c[ce];if(U=d!=null?d[ce]:void 0,c.hasOwnProperty(ce)&&G!==U&&(G!=null||U!=null))if(ce==="style")if(U){for(E in U)!U.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in G)G.hasOwnProperty(E)&&U[E]!==G[E]&&(a||(a={}),a[E]=G[E])}else a||(m||(m=[]),m.push(ce,a)),a=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(m=m||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Ft("scroll",n),m||U===G||(m=[])):(m=m||[]).push(ce,G))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function av(n,i,a){var c=i.pendingProps;switch(Pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return kn(i.type)&&To(),wn(i),null;case 3:return c=i.stateNode,Ms(),Ot(On),Ot(Mn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Po(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hi!==null&&(_u(hi),hi=null))),lu(n,i),wn(i),null;case 5:Gc(i);var d=Gr(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)dp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=Gr(Ci.current),Po(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[bi]=i,c[_a]=m,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(d=0;d<ga.length;d++)Ft(ga[d],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":Qt(c,m),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",c);break;case"textarea":Cn(c,m),Ft("invalid",c)}me(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ft("scroll",c)}switch(a){case"input":Qe(c),It(c,m,!0);break;case"textarea":Qe(c),Pn(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Eo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[bi]=i,n[_a]=c,up(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(a,c),a){case"dialog":Ft("cancel",n),Ft("close",n),d=c;break;case"iframe":case"object":case"embed":Ft("load",n),d=c;break;case"video":case"audio":for(d=0;d<ga.length;d++)Ft(ga[d],n);d=c;break;case"source":Ft("error",n),d=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=c;break;case"details":Ft("toggle",n),d=c;break;case"input":Qt(n,c),d=dt(n,c),Ft("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=X({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":Cn(n,c),d=Sn(n,c),Ft("invalid",n);break;default:d=c}me(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var G=U[m];m==="style"?te(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Yt(n,G)):m==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&Je(n,G):typeof G=="number"&&Je(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?G!=null&&m==="onScroll"&&Ft("scroll",n):G!=null&&F(n,m,G,E))}switch(a){case"input":Qe(n),It(n,c,!1);break;case"textarea":Qe(n),Pn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?nn(n,!!c.multiple,m,!1):c.defaultValue!=null&&nn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Eo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(wa.current),Gr(Ci.current),Po(i)){if(c=i.stateNode,a=i.memoizedProps,c[bi]=i,(m=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Mo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Mo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[bi]=i,i.stateNode=c}return wn(i),null;case 13:if(Ot(Wt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mh(),xs(),i.flags|=98560,m=!1;else if(m=Po(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[bi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else hi!==null&&(_u(hi),hi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?on===0&&(on=3):Mu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Ms(),lu(n,i),n===null&&va(i.stateNode.containerInfo),wn(i),null;case 10:return Fc(i.type._context),wn(i),null;case 17:return kn(i.type)&&To(),wn(i),null;case 19:if(Ot(Wt),m=i.memoizedState,m===null)return wn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Ca(m,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Fo(n),E!==null){for(i.flags|=128,Ca(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ut(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Bt()>As&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=Fo(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Gt)return wn(i),null}else 2*Bt()-m.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Bt(),i.sibling=null,a=Wt.current,Ut(Wt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($n&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ov(n,i){switch(Pc(i),i.tag){case 1:return kn(i.type)&&To(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),Ot(On),Ot(Mn),Vc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(Ot(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Wt),null;case 4:return Ms(),null;case 10:return Fc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Xo=!1,Tn=!1,lv=typeof WeakSet=="function"?WeakSet:Set,He=null;function ws(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Kt(n,i,c)}else a.current=null}function cu(n,i,a){try{a()}catch(c){Kt(n,i,c)}}var hp=!1;function cv(n,i){if(yc=uo,n=Xf(),hc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,U=-1,G=-1,ce=0,_e=0,Ee=n,xe=null;t:for(;;){for(var ze;Ee!==a||d!==0&&Ee.nodeType!==3||(U=E+d),Ee!==m||c!==0&&Ee.nodeType!==3||(G=E+c),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(ze=Ee.firstChild)!==null;)xe=Ee,Ee=ze;for(;;){if(Ee===n)break t;if(xe===a&&++ce===d&&(U=E),xe===m&&++_e===c&&(G=E),(ze=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=ze}a=U===-1||G===-1?null:{start:U,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:n,selectionRange:a},uo=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var je=qe.memoizedProps,Jt=qe.memoizedState,ne=i.stateNode,q=ne.getSnapshotBeforeUpdate(i.elementType===i.type?je:pi(i.type,je),Jt);ne.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Kt(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return qe=hp,hp=!1,qe}function Pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&cu(i,a,m)}d=d.next}while(d!==c)}}function qo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function uu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function pp(n){var i=n.alternate;i!==null&&(n.alternate=null,pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[bi],delete i[_a],delete i[Ac],delete i[X0],delete i[q0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mp(n){return n.tag===5||n.tag===3||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Eo));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,a),n=n.sibling;n!==null;)du(n,i,a),n=n.sibling}function fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fu(n,i,a),n=n.sibling;n!==null;)fu(n,i,a),n=n.sibling}var vn=null,mi=!1;function pr(n,i,a){for(a=a.child;a!==null;)vp(n,i,a),a=a.sibling}function vp(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(z,a)}catch{}switch(a.tag){case 5:Tn||ws(a,i);case 6:var c=vn,d=mi;vn=null,pr(n,i,a),vn=c,mi=d,vn!==null&&(mi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(mi?(n=vn,a=a.stateNode,n.nodeType===8?Tc(n.parentNode,a):n.nodeType===1&&Tc(n,a),la(n)):Tc(vn,a.stateNode));break;case 4:c=vn,d=mi,vn=a.stateNode.containerInfo,mi=!0,pr(n,i,a),vn=c,mi=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&cu(a,i,E),d=d.next}while(d!==c)}pr(n,i,a);break;case 1:if(!Tn&&(ws(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Kt(a,i,U)}pr(n,i,a);break;case 21:pr(n,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,pr(n,i,a),Tn=c):pr(n,i,a);break;default:pr(n,i,a)}}function xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lv),i.forEach(function(c){var d=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function gi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,mi=!1;break e;case 3:vn=U.stateNode.containerInfo,mi=!0;break e;case 4:vn=U.stateNode.containerInfo,mi=!0;break e}U=U.return}if(vn===null)throw Error(t(160));vp(m,E,d),vn=null,mi=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(ce){Kt(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_p(i,n),i=i.sibling}function _p(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(i,n),Ni(n),c&4){try{Pa(3,n,n.return),qo(3,n)}catch(je){Kt(n,n.return,je)}try{Pa(5,n,n.return)}catch(je){Kt(n,n.return,je)}}break;case 1:gi(i,n),Ni(n),c&512&&a!==null&&ws(a,a.return);break;case 5:if(gi(i,n),Ni(n),c&512&&a!==null&&ws(a,a.return),n.flags&32){var d=n.stateNode;try{Je(d,"")}catch(je){Kt(n,n.return,je)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,U=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&jt(d,m),be(U,E);var ce=be(U,m);for(E=0;E<G.length;E+=2){var _e=G[E],Ee=G[E+1];_e==="style"?te(d,Ee):_e==="dangerouslySetInnerHTML"?Yt(d,Ee):_e==="children"?Je(d,Ee):F(d,_e,Ee,ce)}switch(U){case"input":un(d,m);break;case"textarea":Y(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?nn(d,!!m.multiple,ze,!1):xe!==!!m.multiple&&(m.defaultValue!=null?nn(d,!!m.multiple,m.defaultValue,!0):nn(d,!!m.multiple,m.multiple?[]:"",!1))}d[_a]=m}catch(je){Kt(n,n.return,je)}}break;case 6:if(gi(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(je){Kt(n,n.return,je)}}break;case 3:if(gi(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(je){Kt(n,n.return,je)}break;case 4:gi(i,n),Ni(n);break;case 13:gi(i,n),Ni(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(mu=Bt())),c&4&&xp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(Tn=(ce=Tn)||_e,gi(i,n),Tn=ce):gi(i,n),Ni(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!_e&&(n.mode&1)!==0)for(He=n,_e=n.child;_e!==null;){for(Ee=He=_e;He!==null;){switch(xe=He,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:ws(xe,xe.return);var qe=xe.stateNode;if(typeof qe.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(je){Kt(c,a,je)}}break;case 5:ws(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Mp(Ee);continue}}ze!==null?(ze.return=xe,He=ze):Mp(Ee)}_e=_e.sibling}e:for(_e=null,Ee=n;;){if(Ee.tag===5){if(_e===null){_e=Ee;try{d=Ee.stateNode,ce?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Ee.stateNode,G=Ee.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=T("display",E))}catch(je){Kt(n,n.return,je)}}}else if(Ee.tag===6){if(_e===null)try{Ee.stateNode.nodeValue=ce?"":Ee.memoizedProps}catch(je){Kt(n,n.return,je)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;_e===Ee&&(_e=null),Ee=Ee.return}_e===Ee&&(_e=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:gi(i,n),Ni(n),c&4&&xp(n);break;case 21:break;default:gi(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(mp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Je(d,""),c.flags&=-33);var m=gp(n);fu(n,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=gp(n);du(n,U,E);break;default:throw Error(t(161))}}catch(G){Kt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function uv(n,i,a){He=n,Sp(n)}function Sp(n,i,a){for(var c=(n.mode&1)!==0;He!==null;){var d=He,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Xo;if(!E){var U=d.alternate,G=U!==null&&U.memoizedState!==null||Tn;U=Xo;var ce=Tn;if(Xo=E,(Tn=G)&&!ce)for(He=d;He!==null;)E=He,G=E.child,E.tag===22&&E.memoizedState!==null?Ep(d):G!==null?(G.return=E,He=G):Ep(d);for(;m!==null;)He=m,Sp(m),m=m.sibling;He=d,Xo=U,Tn=ce}yp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,He=m):yp(n)}}function yp(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||qo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:pi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Mh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Mh(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var _e=ce.memoizedState;if(_e!==null){var Ee=_e.dehydrated;Ee!==null&&la(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&uu(i)}catch(xe){Kt(i,i.return,xe)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Mp(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Ep(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{qo(4,i)}catch(G){Kt(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(G){Kt(i,d,G)}}var m=i.return;try{uu(i)}catch(G){Kt(i,m,G)}break;case 5:var E=i.return;try{uu(i)}catch(G){Kt(i,E,G)}}}catch(G){Kt(i,i.return,G)}if(i===n){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var dv=Math.ceil,jo=N.ReactCurrentDispatcher,hu=N.ReactCurrentOwner,ai=N.ReactCurrentBatchConfig,Et=0,hn=null,en=null,xn=0,$n=0,Ts=cr(0),on=0,Na=null,Vr=0,Yo=0,pu=0,La=null,zn=null,mu=0,As=1/0,Yi=null,$o=!1,gu=null,mr=null,Ko=!1,gr=null,Zo=0,Da=0,vu=null,Jo=-1,Qo=0;function Ln(){return(Et&6)!==0?Bt():Jo!==-1?Jo:Jo=Bt()}function vr(n){return(n.mode&1)===0?1:(Et&2)!==0&&xn!==0?xn&-xn:Y0.transition!==null?(Qo===0&&(Qo=Ct()),Qo):(n=$e,n!==0||(n=window.event,n=n===void 0?16:Tf(n.type)),n)}function vi(n,i,a,c){if(50<Da)throw Da=0,vu=null,Error(t(185));$t(n,a,c),((Et&2)===0||n!==hn)&&(n===hn&&((Et&2)===0&&(Yo|=a),on===4&&xr(n,xn)),Gn(n,c),a===1&&Et===0&&(i.mode&1)===0&&(As=Bt()+500,Ro&&dr()))}function Gn(n,i){var a=n.callbackNode;ht(n,i);var c=ct(n,n===hn?xn:0);if(c===0)a!==null&&ia(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ia(a),i===1)n.tag===0?j0(Tp.bind(null,n)):uh(Tp.bind(null,n)),V0(function(){(Et&6)===0&&dr()}),a=null;else{switch(Ai(c)){case 1:a=ra;break;case 4:a=oo;break;case 16:a=ss;break;case 536870912:a=A;break;default:a=ss}a=Dp(a,wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function wp(n,i){if(Jo=-1,Qo=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Rs()&&n.callbackNode!==a)return null;var c=ct(n,n===hn?xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=el(n,c);else{i=c;var d=Et;Et|=2;var m=Rp();(hn!==n||xn!==i)&&(Yi=null,As=Bt()+500,Xr(n,i));do try{pv();break}catch(U){Ap(n,U)}while(!0);Uc(),jo.current=m,Et=d,en!==null?i=0:(hn=null,xn=0,i=on)}if(i!==0){if(i===2&&(d=zt(n),d!==0&&(c=d,i=xu(n,d))),i===1)throw a=Na,Xr(n,0),xr(n,c),Gn(n,Bt()),a;if(i===6)xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!fv(d)&&(i=el(n,c),i===2&&(m=zt(n),m!==0&&(c=m,i=xu(n,m))),i===1))throw a=Na,Xr(n,0),xr(n,c),Gn(n,Bt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:qr(n,zn,Yi);break;case 3:if(xr(n,c),(c&130023424)===c&&(i=mu+500-Bt(),10<i)){if(ct(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=wc(qr.bind(null,n,zn,Yi),i);break}qr(n,zn,Yi);break;case 4:if(xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-Z(c);m=1<<E,E=i[E],E>d&&(d=E),c&=~m}if(c=d,c=Bt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dv(c/1960))-c,10<c){n.timeoutHandle=wc(qr.bind(null,n,zn,Yi),c);break}qr(n,zn,Yi);break;case 5:qr(n,zn,Yi);break;default:throw Error(t(329))}}}return Gn(n,Bt()),n.callbackNode===a?wp.bind(null,n):null}function xu(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=el(n,i),n!==2&&(i=zn,zn=a,i!==null&&_u(i)),n}function _u(n){zn===null?zn=n:zn.push.apply(zn,n)}function fv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!fi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~pu,i&=~Yo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Z(i),c=1<<a;n[a]=-1,i&=~c}}function Tp(n){if((Et&6)!==0)throw Error(t(327));Rs();var i=ct(n,0);if((i&1)===0)return Gn(n,Bt()),null;var a=el(n,i);if(n.tag!==0&&a===2){var c=zt(n);c!==0&&(i=c,a=xu(n,c))}if(a===1)throw a=Na,Xr(n,0),xr(n,i),Gn(n,Bt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qr(n,zn,Yi),Gn(n,Bt()),null}function Su(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(As=Bt()+500,Ro&&dr())}}function Wr(n){gr!==null&&gr.tag===0&&(Et&6)===0&&Rs();var i=Et;Et|=1;var a=ai.transition,c=$e;try{if(ai.transition=null,$e=1,n)return n()}finally{$e=c,ai.transition=a,Et=i,(Et&6)===0&&dr()}}function yu(){$n=Ts.current,Ot(Ts)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,H0(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Pc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&To();break;case 3:Ms(),Ot(On),Ot(Mn),Vc();break;case 5:Gc(c);break;case 4:Ms();break;case 13:Ot(Wt);break;case 19:Ot(Wt);break;case 10:Fc(c.type._context);break;case 22:case 23:yu()}a=a.return}if(hn=n,en=n=_r(n.current,null),xn=$n=i,on=0,Na=null,pu=Yo=Vr=0,zn=La=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}a.pending=c}zr=null}return n}function Ap(n,i){do{var a=en;try{if(Uc(),Oo.current=Go,ko){for(var c=Xt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ko=!1}if(Hr=0,fn=an=Xt=null,Ta=!1,Aa=0,hu.current=null,a===null||a.return===null){on=1,Na=i,en=null;break}e:{var m=n,E=a.return,U=a,G=i;if(i=xn,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,_e=U,Ee=_e.tag;if((_e.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=Zh(E);if(ze!==null){ze.flags&=-257,Jh(ze,E,U,m,i),ze.mode&1&&Kh(m,ce,i),i=ze,G=ce;var qe=i.updateQueue;if(qe===null){var je=new Set;je.add(G),i.updateQueue=je}else qe.add(G);break e}else{if((i&1)===0){Kh(m,ce,i),Mu();break e}G=Error(t(426))}}else if(Gt&&U.mode&1){var Jt=Zh(E);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Jh(Jt,E,U,m,i),Dc(Es(G,U));break e}}m=G=Es(G,U),on!==4&&(on=2),La===null?La=[m]:La.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=Yh(m,G,i);yh(m,ne);break e;case 1:U=G;var q=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(mr===null||!mr.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=$h(m,U,i);yh(m,Re);break e}}m=m.return}while(m!==null)}Cp(a)}catch(Ke){i=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function Rp(){var n=jo.current;return jo.current=Go,n===null?Go:n}function Mu(){(on===0||on===3||on===2)&&(on=4),hn===null||(Vr&268435455)===0&&(Yo&268435455)===0||xr(hn,xn)}function el(n,i){var a=Et;Et|=2;var c=Rp();(hn!==n||xn!==i)&&(Yi=null,Xr(n,i));do try{hv();break}catch(d){Ap(n,d)}while(!0);if(Uc(),Et=a,jo.current=c,en!==null)throw Error(t(261));return hn=null,xn=0,on}function hv(){for(;en!==null;)bp(en)}function pv(){for(;en!==null&&!Ur();)bp(en)}function bp(n){var i=Lp(n.alternate,n,$n);n.memoizedProps=n.pendingProps,i===null?Cp(n):en=i,hu.current=null}function Cp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=av(a,i,$n),a!==null){en=a;return}}else{if(a=ov(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);on===0&&(on=5)}function qr(n,i,a){var c=$e,d=ai.transition;try{ai.transition=null,$e=1,mv(n,i,a,c)}finally{ai.transition=d,$e=c}return null}function mv(n,i,a,c){do Rs();while(gr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Xe(n,m),n===hn&&(en=hn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ko||(Ko=!0,Dp(ss,function(){return Rs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ai.transition,ai.transition=null;var E=$e;$e=1;var U=Et;Et|=4,hu.current=null,cv(n,a),_p(a,n),U0(Mc),uo=!!yc,Mc=yc=null,n.current=a,uv(a),tc(),Et=U,$e=E,ai.transition=m}else n.current=a;if(Ko&&(Ko=!1,gr=n,Zo=d),m=n.pendingLanes,m===0&&(mr=null),ee(a.stateNode),Gn(n,Bt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($o)throw $o=!1,n=gu,gu=null,n;return(Zo&1)!==0&&n.tag!==0&&Rs(),m=n.pendingLanes,(m&1)!==0?n===vu?Da++:(Da=0,vu=n):Da=0,dr(),null}function Rs(){if(gr!==null){var n=Ai(Zo),i=ai.transition,a=$e;try{if(ai.transition=null,$e=16>n?16:n,gr===null)var c=!1;else{if(n=gr,gr=null,Zo=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,He=n.current;He!==null;){var m=He,E=m.child;if((He.flags&16)!==0){var U=m.deletions;if(U!==null){for(var G=0;G<U.length;G++){var ce=U[G];for(He=ce;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:Pa(8,_e,m)}var Ee=_e.child;if(Ee!==null)Ee.return=_e,He=Ee;else for(;He!==null;){_e=He;var xe=_e.sibling,ze=_e.return;if(pp(_e),_e===ce){He=null;break}if(xe!==null){xe.return=ze,He=xe;break}He=ze}}}var qe=m.alternate;if(qe!==null){var je=qe.child;if(je!==null){qe.child=null;do{var Jt=je.sibling;je.sibling=null,je=Jt}while(je!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,He=E;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Pa(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,He=ne;break e}He=m.return}}var q=n.current;for(He=q;He!==null;){E=He;var ae=E.child;if((E.subtreeFlags&2064)!==0&&ae!==null)ae.return=E,He=ae;else e:for(E=q;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:qo(9,U)}}catch(Ke){Kt(U,U.return,Ke)}if(U===E){He=null;break e}var Re=U.sibling;if(Re!==null){Re.return=U.return,He=Re;break e}He=U.return}}if(Et=d,dr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(z,n)}catch{}c=!0}return c}finally{$e=a,ai.transition=i}}return!1}function Pp(n,i,a){i=Es(a,i),i=Yh(n,i,1),n=hr(n,i,1),i=Ln(),n!==null&&($t(n,1,i),Gn(n,i))}function Kt(n,i,a){if(n.tag===3)Pp(n,n,a);else for(;i!==null;){if(i.tag===3){Pp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=Es(a,n),n=$h(i,n,1),i=hr(i,n,1),n=Ln(),i!==null&&($t(i,1,n),Gn(i,n));break}}i=i.return}}function gv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(xn&a)===a&&(on===4||on===3&&(xn&130023424)===xn&&500>Bt()-mu?Xr(n,0):pu|=a),Gn(n,i)}function Np(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var a=Ln();n=Xi(n,i),n!==null&&($t(n,i,a),Gn(n,a))}function vv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Np(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Np(n,a)}var Lp;Lp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||On.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,sv(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Gt&&(i.flags&1048576)!==0&&dh(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wo(n,i),n=i.pendingProps;var d=ms(i,Mn.current);ys(i,a),d=qc(null,i,c,n,d,a);var m=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,Ao(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bc(i),d.updater=Ho,i.stateNode=d,d._reactInternals=i,Qc(i,c,n,a),i=iu(null,i,c,!0,m,a)):(i.tag=0,Gt&&m&&Cc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Wo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Sv(c),n=pi(c,n),d){case 0:i=nu(null,i,c,n,a);break e;case 1:i=rp(null,i,c,n,a);break e;case 11:i=Qh(null,i,c,n,a);break e;case 14:i=ep(null,i,c,pi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:pi(c,d),nu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:pi(c,d),rp(n,i,c,d,a);case 3:e:{if(sp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Sh(n,i),Uo(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=ap(n,i,c,a,d);break e}else if(c!==d){d=Es(Error(t(424)),i),i=ap(n,i,c,a,d);break e}else for(Yn=lr(i.stateNode.containerInfo.firstChild),jn=i,Gt=!0,hi=null,a=xh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===d){i=ji(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return Eh(i),n===null&&Lc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Ec(c,d)?E=null:m!==null&&Ec(c,m)&&(i.flags|=32),ip(n,i),Nn(n,i,E,a),i.child;case 6:return n===null&&Lc(i),null;case 13:return op(n,i,a);case 4:return zc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=_s(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:pi(c,d),Qh(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ut(Lo,c._currentValue),c._currentValue=E,m!==null)if(fi(m.value,E)){if(m.children===d.children&&!On.current){i=ji(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var G=U.firstContext;G!==null;){if(G.context===c){if(m.tag===1){G=qi(-1,a&-a),G.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var _e=ce.pending;_e===null?G.next=G:(G.next=_e.next,_e.next=G),ce.pending=G}}m.lanes|=a,G=m.alternate,G!==null&&(G.lanes|=a),Oc(m.return,a,i),U.lanes|=a;break}G=G.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Oc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ys(i,a),d=ri(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=pi(c,i.pendingProps),d=pi(c.type,d),ep(n,i,c,d,a);case 15:return tp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:pi(c,d),Wo(n,i),i.tag=1,kn(c)?(n=!0,Ao(i)):n=!1,ys(i,a),qh(i,c,d),Qc(i,c,d,a),iu(null,i,c,!0,n,a);case 19:return cp(n,i,a);case 22:return np(n,i,a)}throw Error(t(156,i.tag))};function Dp(n,i){return na(n,i)}function _v(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,i,a,c){return new _v(n,i,a,c)}function Eu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sv(n){if(typeof n=="function")return Eu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===oe)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=oi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tl(n,i,a,c,d,m){var E=2;if(c=n,typeof n=="function")Eu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case M:return jr(a.children,d,m,i);case P:E=8,d|=8;break;case J:return n=oi(12,a,i,d|2),n.elementType=J,n.lanes=m,n;case ue:return n=oi(13,a,i,d),n.elementType=ue,n.lanes=m,n;case H:return n=oi(19,a,i,d),n.elementType=H,n.lanes=m,n;case j:return nl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:E=10;break e;case $:E=9;break e;case ie:E=11;break e;case oe:E=14;break e;case re:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=oi(E,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function jr(n,i,a,c){return n=oi(7,n,c,i),n.lanes=a,n}function nl(n,i,a,c){return n=oi(22,n,c,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function wu(n,i,a){return n=oi(6,n,null,i),n.lanes=a,n}function Tu(n,i,a){return i=oi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rt(0),this.expirationTimes=Rt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Au(n,i,a,c,d,m,E,U,G){return n=new yv(n,i,a,U,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=oi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(m),n}function Mv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Ip(n){if(!n)return ur;n=n._reactInternals;e:{if(wi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return lh(n,a,i)}return i}function Up(n,i,a,c,d,m,E,U,G){return n=Au(a,c,!0,n,d,m,E,U,G),n.context=Ip(null),a=n.current,c=Ln(),d=vr(a),m=qi(c,d),m.callback=i??null,hr(a,m,d),n.current.lanes=d,$t(n,d,c),Gn(n,c),n}function il(n,i,a,c){var d=i.current,m=Ln(),E=vr(d);return a=Ip(a),i.context===null?i.context=a:i.pendingContext=a,i=qi(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=hr(d,i,E),n!==null&&(vi(n,d,E,m),Io(n,d,E)),E}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ru(n,i){Fp(n,i),(n=n.alternate)&&Fp(n,i)}function Ev(){return null}var Op=typeof reportError=="function"?reportError:function(n){console.error(n)};function bu(n){this._internalRoot=n}sl.prototype.render=bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));il(n,i,null,null)},sl.prototype.unmount=bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){il(null,n,null,null)}),i[Gi]=null}};function sl(n){this._internalRoot=n}sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ri();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,n),a===0&&Ef(n)}};function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kp(){}function wv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ce=rl(E);m.call(ce)}}var E=Up(i,c,n,0,null,!1,!1,"",kp);return n._reactRootContainer=E,n[Gi]=E.current,va(n.nodeType===8?n.parentNode:n),Wr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ce=rl(G);U.call(ce)}}var G=Au(n,0,!1,null,null,!1,!1,"",kp);return n._reactRootContainer=G,n[Gi]=G.current,va(n.nodeType===8?n.parentNode:n),Wr(function(){il(i,G,a,c)}),G}function ol(n,i,a,c,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var G=rl(E);U.call(G)}}il(i,E,n,d)}else E=wv(a,i,n,d,c);return rl(E)}sn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=it(i.pendingLanes);a!==0&&(rn(i,a|1),Gn(i,Bt()),(Et&6)===0&&(As=Bt()+500,dr()))}break;case 13:Wr(function(){var c=Xi(n,1);if(c!==null){var d=Ln();vi(c,n,1,d)}}),Ru(n,1)}},ir=function(n){if(n.tag===13){var i=Xi(n,134217728);if(i!==null){var a=Ln();vi(i,n,134217728,a)}Ru(n,134217728)}},di=function(n){if(n.tag===13){var i=vr(n),a=Xi(n,i);if(a!==null){var c=Ln();vi(a,n,i,c)}Ru(n,i)}},Ri=function(){return $e},gt=function(n,i){var a=$e;try{return $e=n,i()}finally{$e=a}},he=function(n,i,a){switch(i){case"input":if(un(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=wo(c);if(!d)throw Error(t(90));_t(c),un(c,d)}}}break;case"textarea":Y(n,a);break;case"select":i=a.value,i!=null&&nn(n,!!a.multiple,i,!1)}},Te=Su,Ce=Wr;var Tv={usingClientEntryPoint:!1,Events:[Sa,hs,wo,de,Pe,Su]},Ia={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Av={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ta(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{z=ll.inject(Av),se=ll}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(t(200));return Mv(n,i,null,a)},Hn.createRoot=function(n,i){if(!Cu(n))throw Error(t(299));var a=!1,c="",d=Op;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Au(n,1,!1,null,null,a,!1,c,d),n[Gi]=i.current,va(n.nodeType===8?n.parentNode:n),new bu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ta(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Wr(n)},Hn.hydrate=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!Cu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",E=Op;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Up(i,null,n,1,a??null,d,!1,m,E),n[Gi]=i.current,va(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new sl(i)},Hn.render=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Su,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,a,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var qp;function Ov(){if(qp)return Lu.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=Fv(),Lu.exports}var jp;function kv(){if(jp)return cl;jp=1;var s=Ov();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var Bv=kv();const zv=qm(Bv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="187",Gv=0,Yp=1,Hv=2,Il=1,Vv=2,Ha=3,Qr=0,Wn=1,Qn=2,Hs=0,Wa=1,br=2,$p=3,Kp=4,Wv=5,Gs=100,Xv=101,qv=102,jv=103,Yv=104,$v=200,Kv=201,Zv=202,Jv=203,jm=204,Ym=205,Qv=206,ex=207,tx=208,nx=209,ix=210,rx=211,sx=212,ax=213,ox=214,ld=0,cd=1,ud=2,Ya=3,dd=4,fd=5,hd=6,pd=7,$m=0,lx=1,cx=2,tr=0,Km=1,Zm=2,Jm=3,Qm=4,eg=5,tg=6,ng=7,ig=300,Xs=301,$a=302,Uu=303,Fu=304,md=1e3,er=1001,gd=1002,_n=1003,ux=1004,ul=1005,Vn=1006,Ou=1007,Cr=1008,ei=1009,rg=1010,sg=1011,Ka=1012,Qd=1013,Bi=1014,Ui=1015,zi=1016,ef=1017,tf=1018,qs=1020,ag=35902,og=35899,lg=1021,cg=1022,Fi=1023,Nr=1026,Pr=1027,ug=1028,nf=1029,es=1030,rf=1031,sf=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,vd=35840,xd=35841,_d=35842,Sd=35843,yd=36196,Md=37492,Ed=37496,wd=37488,Td=37489,Gl=37490,Ad=37491,Rd=37808,bd=37809,Cd=37810,Pd=37811,Nd=37812,Ld=37813,Dd=37814,Id=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,Bd=37820,zd=37821,Gd=36492,Hd=36494,Vd=36495,Wd=36283,Xd=36284,Hl=36285,qd=36286,dx=3200,jd=0,fx=1,Rr="",ci="srgb",Vl="srgb-linear",Wl="linear",Pt="srgb",ku=7680,hx=519,px=512,mx=513,gx=514,dg=515,vx=516,xx=517,fg=518,hg=519,_x=35044,Zp="300 es",Mi=2e3,Za=2001;function Sx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yx(){const s=Xl("canvas");return s.style.display="block",s}const Jp={};function Qp(...s){const e="THREE."+s.shift();console.log(e,...s)}function pg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=pg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=pg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bl(...s){const e=s.join(" ");e in Jp||(Jp[e]=!0,rt(...s))}function Mx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Ex={[ld]:ld,[ud]:hd,[dd]:dd,[Ya]:fd,[cd]:cd,[hd]:ud,[pd]:pd,[fd]:Ya};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Xa=Math.PI/180,Ja=180/Math.PI;function $s(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function af(s,e){return(s%e+e)%e}function wx(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function Tx(s,e,t){return s!==e?(t-s)/(e-s):0}function qa(s,e,t){return(1-t)*s+t*e}function Ax(s,e,t,r){return qa(s,e,1-Math.exp(-t*r))}function Rx(s,e=1){return e-Math.abs(af(s,e*2)-e)}function bx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Cx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Px(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Nx(s,e){return s+Math.random()*(e-s)}function Lx(s){return s*(.5-Math.random())}function Dx(s){s!==void 0&&(em=s);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ix(s){return s*Xa}function Ux(s){return s*Ja}function Fx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ox(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kx(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+r)/2),x=u((e+r)/2),S=l((e-r)/2),g=u((e-r)/2),y=l((r-e)/2),w=u((r-e)/2);switch(o){case"XYX":s.set(f*x,h*S,h*g,f*p);break;case"YZY":s.set(h*g,f*x,h*S,f*p);break;case"ZXZ":s.set(h*S,h*g,f*x,f*p);break;case"XZX":s.set(f*x,h*w,h*y,f*p);break;case"YXY":s.set(h*y,f*x,h*w,f*p);break;case"ZYZ":s.set(h*w,h*y,f*x,f*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function of(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gg(s,e){if(e.constructor===Float32Array)return s;const t=of(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function vg(s,e){if(e.constructor===Float32Array)return s;const t=of(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Vs={DEG2RAD:Xa,RAD2DEG:Ja,generateUUID:$s,clamp:vt,euclideanModulo:af,mapLinear:wx,inverseLerp:Tx,lerp:qa,damp:Ax,pingpong:Rx,smoothstep:bx,smootherstep:Cx,randInt:Px,randFloat:Nx,randFloatSpread:Lx,seededRandom:Dx,degToRad:Ix,radToDeg:Ux,isPowerOfTwo:Fx,ceilPowerOfTwo:Ox,floorPowerOfTwo:mg,setQuaternionFromProperEuler:kx,normalize:vg,denormalize:gg},xf=class xf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xf.prototype.isVector2=!0;let xt=xf;class Ks{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],R=l[u+3];if(S!==R||h!==g||p!==y||x!==w){let v=h*g+p*y+x*w+S*R;v<0&&(g=-g,y=-y,w=-w,R=-R,v=-v);let _=1-f;if(v<.9995){const C=Math.acos(v),F=Math.sin(C);_=Math.sin(_*C)/F,f=Math.sin(f*C)/F,h=h*_+g*f,p=p*_+y*f,x=x*_+w*f,S=S*_+R*f}else{h=h*_+g*f,p=p*_+y*f,x=x*_+w*f,S=S*_+R*f;const C=1/Math.sqrt(h*h+p*p+x*x+S*S);h*=C,p*=C,x*=C,S*=C}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],x=r[o+3],S=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[t]=f*w+x*S+h*y-p*g,e[t+1]=h*w+x*g+p*S-f*y,e[t+2]=p*w+x*y+f*g-h*S,e[t+3]=x*w-f*S-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),x=f(o/2),S=f(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*x*S+p*y*w,this._y=p*y*S-g*x*w,this._z=p*x*w+g*y*S,this._w=p*x*S-g*y*w;break;case"YXZ":this._x=g*x*S+p*y*w,this._y=p*y*S-g*x*w,this._z=p*x*w-g*y*S,this._w=p*x*S+g*y*w;break;case"ZXY":this._x=g*x*S-p*y*w,this._y=p*y*S+g*x*w,this._z=p*x*w+g*y*S,this._w=p*x*S-g*y*w;break;case"ZYX":this._x=g*x*S-p*y*w,this._y=p*y*S+g*x*w,this._z=p*x*w-g*y*S,this._w=p*x*S+g*y*w;break;case"YZX":this._x=g*x*S+p*y*w,this._y=p*y*S+g*x*w,this._z=p*x*w-g*y*S,this._w=p*x*S-g*y*w;break;case"XZY":this._x=g*x*S-p*y*w,this._y=p*y*S-g*x*w,this._z=p*x*w+g*y*S,this._w=p*x*S+g*y*w;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],x=t[6],S=t[10],g=r+f+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(x-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+x)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,x=t._w;return this._x=r*x+u*f+o*p-l*h,this._y=o*x+u*h+l*f-r*p,this._z=l*x+u*p+r*h-o*f,this._w=u*x-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),x=Math.sin(p);h=Math.sin(h*p)/x,t=Math.sin(t*p)/x,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _f=class _f{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),x=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*x,this.y=r+h*x+f*p-l*S,this.z=o+h*S+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_f.prototype.isVector3=!0;let le=_f;const Bu=new le,tm=new Ks,Sf=class Sf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],x=r[4],S=r[7],g=r[2],y=r[5],w=r[8],R=o[0],v=o[3],_=o[6],C=o[1],F=o[4],N=o[7],k=o[2],I=o[5],M=o[8];return l[0]=u*R+f*C+h*k,l[3]=u*v+f*F+h*I,l[6]=u*_+f*N+h*M,l[1]=p*R+x*C+S*k,l[4]=p*v+x*F+S*I,l[7]=p*_+x*N+S*M,l[2]=g*R+y*C+w*k,l[5]=g*v+y*F+w*I,l[8]=g*_+y*N+w*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*f*p-r*l*x+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=x*u-f*p,g=f*h-x*l,y=p*l-u*h,w=t*S+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(o*p-x*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(x*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(r*h-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return Bl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zu.makeScale(e,t)),this}rotate(e){return Bl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return Bl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sf.prototype.isMatrix3=!0;let ot=Sf;const zu=new ot,nm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){const s={enabled:!0,workingColorSpace:Vl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Pt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?Wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vl]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const yt=Bx();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class zx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Xl("canvas")),Cs.width=e.width,Cs.height=e.height;const o=Cs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gx=0;class lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Gu(o[u].image)):l.push(Gu(o[u]))}else l=Gu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Hx=0;const Hu=new le;class bn extends ns{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=er,o=er,l=Vn,u=Cr,f=Fi,h=ei,p=bn.DEFAULT_ANISOTROPY,x=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=$s(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=ig;bn.DEFAULT_ANISOTROPY=1;const yf=class yf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],x=h[4],S=h[8],g=h[1],y=h[5],w=h[9],R=h[2],v=h[6],_=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(w+v)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,N=(y+1)/2,k=(_+1)/2,I=(x+g)/4,M=(S+R)/4,P=(w+v)/4;return F>N&&F>k?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=I/r,l=M/r):N>k?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=I/o,l=P/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=M/l,o=P/l),this.set(r,o,l,t),this}let C=Math.sqrt((v-w)*(v-w)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(C)<.001&&(C=1),this.x=(v-w)/C,this.y=(S-R)/C,this.z=(g-x)/C,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yf.prototype.isVector4=!0;let qt=yf;class Vx extends ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new bn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new lf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Vx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class xg extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wx extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const jl=class jl{constructor(e,t,r,o,l,u,f,h,p,x,S,g,y,w,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,x,S,g,y,w,R,v)}set(e,t,r,o,l,u,f,h,p,x,S,g,y,w,R,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=w,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,w=f*x,R=f*S;t[0]=h*x,t[4]=-h*S,t[8]=p,t[1]=y+w*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=w+y*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*x,y=h*S,w=p*x,R=p*S;t[0]=g+R*f,t[4]=w*f-y,t[8]=u*p,t[1]=u*S,t[5]=u*x,t[9]=-f,t[2]=y*f-w,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*x,y=h*S,w=p*x,R=p*S;t[0]=g-R*f,t[4]=-u*S,t[8]=w+y*f,t[1]=y+w*f,t[5]=u*x,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*x,y=u*S,w=f*x,R=f*S;t[0]=h*x,t[4]=w*p-y,t[8]=g*p+R,t[1]=h*S,t[5]=R*p+g,t[9]=y*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*x,t[4]=R-g*S,t[8]=w*S+y,t[1]=S,t[5]=u*x,t[9]=-f*x,t[2]=-p*x,t[6]=y*S+w,t[10]=g-R*S}else if(e.order==="XZY"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*x,t[4]=-S,t[8]=p*x,t[1]=g*S+R,t[5]=u*x,t[9]=y*S-w,t[2]=w*S-y,t[6]=f*x,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xx,e,qx)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),yr.crossVectors(r,Kn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),yr.crossVectors(r,Kn)),yr.normalize(),dl.crossVectors(Kn,yr),o[0]=yr.x,o[4]=dl.x,o[8]=Kn.x,o[1]=yr.y,o[5]=dl.y,o[9]=Kn.y,o[2]=yr.z,o[6]=dl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],x=r[1],S=r[5],g=r[9],y=r[13],w=r[2],R=r[6],v=r[10],_=r[14],C=r[3],F=r[7],N=r[11],k=r[15],I=o[0],M=o[4],P=o[8],J=o[12],V=o[1],$=o[5],ie=o[9],ue=o[13],H=o[2],oe=o[6],re=o[10],j=o[14],W=o[3],B=o[7],X=o[11],D=o[15];return l[0]=u*I+f*V+h*H+p*W,l[4]=u*M+f*$+h*oe+p*B,l[8]=u*P+f*ie+h*re+p*X,l[12]=u*J+f*ue+h*j+p*D,l[1]=x*I+S*V+g*H+y*W,l[5]=x*M+S*$+g*oe+y*B,l[9]=x*P+S*ie+g*re+y*X,l[13]=x*J+S*ue+g*j+y*D,l[2]=w*I+R*V+v*H+_*W,l[6]=w*M+R*$+v*oe+_*B,l[10]=w*P+R*ie+v*re+_*X,l[14]=w*J+R*ue+v*j+_*D,l[3]=C*I+F*V+N*H+k*W,l[7]=C*M+F*$+N*oe+k*B,l[11]=C*P+F*ie+N*re+k*X,l[15]=C*J+F*ue+N*j+k*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],x=e[2],S=e[6],g=e[10],y=e[14],w=e[3],R=e[7],v=e[11],_=e[15],C=h*y-p*g,F=f*y-p*S,N=f*g-h*S,k=u*y-p*x,I=u*g-h*x,M=u*S-f*x;return t*(R*C-v*F+_*N)-r*(w*C-v*k+_*I)+o*(w*F-R*k+_*M)-l*(w*N-R*I+v*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],x=e[10];return t*(u*x-f*p)-r*(l*x-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=e[9],g=e[10],y=e[11],w=e[12],R=e[13],v=e[14],_=e[15],C=t*f-r*u,F=t*h-o*u,N=t*p-l*u,k=r*h-o*f,I=r*p-l*f,M=o*p-l*h,P=x*R-S*w,J=x*v-g*w,V=x*_-y*w,$=S*v-g*R,ie=S*_-y*R,ue=g*_-y*v,H=C*ue-F*ie+N*$+k*V-I*J+M*P;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const oe=1/H;return e[0]=(f*ue-h*ie+p*$)*oe,e[1]=(o*ie-r*ue-l*$)*oe,e[2]=(R*M-v*I+_*k)*oe,e[3]=(g*I-S*M-y*k)*oe,e[4]=(h*V-u*ue-p*J)*oe,e[5]=(t*ue-o*V+l*J)*oe,e[6]=(v*N-w*M-_*F)*oe,e[7]=(x*M-g*N+y*F)*oe,e[8]=(u*ie-f*V+p*P)*oe,e[9]=(r*V-t*ie-l*P)*oe,e[10]=(w*I-R*N+_*C)*oe,e[11]=(S*N-x*I-y*C)*oe,e[12]=(f*J-u*$-h*P)*oe,e[13]=(t*$-r*J+o*P)*oe,e[14]=(R*F-w*k-v*C)*oe,e[15]=(x*k-S*F+g*C)*oe,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+r,x*h-o*u,0,p*h-o*f,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,x=u+u,S=f+f,g=l*p,y=l*x,w=l*S,R=u*x,v=u*S,_=f*S,C=h*p,F=h*x,N=h*S,k=r.x,I=r.y,M=r.z;return o[0]=(1-(R+_))*k,o[1]=(y+N)*k,o[2]=(w-F)*k,o[3]=0,o[4]=(y-N)*I,o[5]=(1-(g+_))*I,o[6]=(v+C)*I,o[7]=0,o[8]=(w+F)*M,o[9]=(v-C)*M,o[10]=(1-(g+R))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Ps.set(o[0],o[1],o[2]).length();const f=Ps.set(o[4],o[5],o[6]).length(),h=Ps.set(o[8],o[9],o[10]).length();l<0&&(u=-u),xi.copy(this);const p=1/u,x=1/f,S=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=x,xi.elements[5]*=x,xi.elements[6]*=x,xi.elements[8]*=S,xi.elements[9]*=S,xi.elements[10]*=S,t.setFromRotationMatrix(xi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Mi,h=!1){const p=this.elements,x=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let w,R;if(h)w=l/(u-l),R=u*l/(u-l);else if(f===Mi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===Za)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Mi,h=!1){const p=this.elements,x=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let w,R;if(h)w=1/(u-l),R=u/(u-l);else if(f===Mi)w=-2/(u-l),R=-(u+l)/(u-l);else if(f===Za)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};jl.prototype.isMatrix4=!0;let Ht=jl;const Ps=new le,xi=new Ht,Xx=new le(0,0,0),qx=new le(1,1,1),yr=new le,dl=new le,Kn=new le,rm=new Ht,sm=new Ks;class Lr{constructor(e=0,t=0,r=0,o=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],S=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jx=0;const am=new le,Ns=new Ks,$i=new Ht,fl=new le,Fa=new le,Yx=new le,$x=new Ks,om=new le(1,0,0),lm=new le(0,1,0),cm=new le(0,0,1),um={type:"added"},Kx={type:"removed"},Ls={type:"childadded",child:null},Vu={type:"childremoved",child:null};class In extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new le,t=new Lr,r=new Ks,o=new le(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fl.copy(e):fl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Fa,fl,this.up):$i.lookAt(fl,Fa,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix($i),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kx),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}In.DEFAULT_UP=new le(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jr extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),_=this._getHandJoint(p,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,w=.005;p.inputState.pinching&&g>y+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Xu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=af(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=ci){function r(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=Sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return yt.workingToColorSpace(Rn.copy(this),e),Math.round(vt(Rn.r*255,0,255))*65536+Math.round(vt(Rn.g*255,0,255))*256+Math.round(vt(Rn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,l=Rn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const x=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=x<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ci){yt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(hl);const r=qa(Mr.h,hl.h,t),o=qa(Mr.s,hl.s,t),l=qa(Mr.l,hl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ut;ut.NAMES=Sg;class Yl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new Yl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yg extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new le,Ki=new le,qu=new le,Zi=new le,Ds=new le,Is=new le,dm=new le,ju=new le,Yu=new le,$u=new le,Ku=new qt,Zu=new qt,Ju=new qt;class yi{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_i.subVectors(e,t),o.cross(_i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){_i.subVectors(o,t),Ki.subVectors(r,t),qu.subVectors(e,t);const u=_i.dot(_i),f=_i.dot(Ki),h=_i.dot(qu),p=Ki.dot(Ki),x=Ki.dot(qu),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(p*h-f*x)*g,w=(u*x-f*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(u,Zi.y),h.addScaledVector(f,Zi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,t),Zu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,t,r,o){return _i.subVectors(r,t),Ki.subVectors(e,t),_i.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Ds.subVectors(o,r),Is.subVectors(l,r),ju.subVectors(e,r);const h=Ds.dot(ju),p=Is.dot(ju);if(h<=0&&p<=0)return t.copy(r);Yu.subVectors(e,o);const x=Ds.dot(Yu),S=Is.dot(Yu);if(x>=0&&S<=x)return t.copy(o);const g=h*S-x*p;if(g<=0&&h>=0&&x<=0&&h-x>0)return u=h/(h-x),t.copy(r).addScaledVector(Ds,u);$u.subVectors(e,l);const y=Ds.dot($u),w=Is.dot($u);if(w>=0&&y<=w)return t.copy(l);const R=y*p-h*w;if(R<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(Is,f);const v=x*w-y*S;if(v<=0&&S-x>=0&&y-w>=0)return dm.subVectors(l,o),f=(S-x)/(S-x+(y-w)),t.copy(o).addScaledVector(dm,f);const _=1/(v+R+g);return u=R*_,f=g*_,t.copy(r).addScaledVector(Ds,u).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class to{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),ml.subVectors(this.max,Oa),Us.subVectors(e.a,Oa),Fs.subVectors(e.b,Oa),Os.subVectors(e.c,Oa),Er.subVectors(Fs,Us),wr.subVectors(Os,Fs),Yr.subVectors(Us,Os);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-Yr.z,Yr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,Yr.z,0,-Yr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-Yr.y,Yr.x,0];return!Qu(t,Us,Fs,Os,ml)||(t=[1,0,0,0,1,0,0,0,1],!Qu(t,Us,Fs,Os,ml))?!1:(gl.crossVectors(Er,wr),t=[gl.x,gl.y,gl.z],Qu(t,Us,Fs,Os,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new le,new le,new le,new le,new le,new le,new le,new le],Si=new le,pl=new to,Us=new le,Fs=new le,Os=new le,Er=new le,wr=new le,Yr=new le,Oa=new le,ml=new le,gl=new le,$r=new le;function Qu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){$r.fromArray(s,l);const f=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),x=r.dot($r);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const tn=new le,vl=new xt;let Jx=0;class Ei extends ns{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=_x,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=e!==void 0?of(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):gg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vg(e,this.array)}}class Mg extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Eg extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gn extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Qx=new to,ka=new le,ed=new le;class $l{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Qx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(ed)),this.expandByPoint(ka.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e_=0;const li=new Ht,td=new In,ks=new le,Zn=new to,Ba=new to,mn=new le;class ti extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sx(e)?Eg:Mg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ba.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Zn.min,Ba.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,Ba.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(Ba.min),Zn.expandByPoint(Ba.max))}Zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)mn.fromBufferAttribute(f,p),h&&(ks.fromBufferAttribute(e,p),mn.add(ks)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ei(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[],p=new Uint8Array(r.count);for(let J=0;J<r.count;J++)f[J]=new le,h[J]=new le;const x=new le,S=new le,g=new le,y=new xt,w=new xt,R=new xt,v=new le,_=new le;function C(J,V,$){p[J]=p[V]=p[$]=1,x.fromBufferAttribute(r,J),S.fromBufferAttribute(r,V),g.fromBufferAttribute(r,$),y.fromBufferAttribute(l,J),w.fromBufferAttribute(l,V),R.fromBufferAttribute(l,$),S.sub(x),g.sub(x),w.sub(y),R.sub(y);const ie=1/(w.x*R.y-R.x*w.y);isFinite(ie)&&(v.copy(S).multiplyScalar(R.y).addScaledVector(g,-w.y).multiplyScalar(ie),_.copy(g).multiplyScalar(w.x).addScaledVector(S,-R.x).multiplyScalar(ie),f[J].add(v),f[V].add(v),f[$].add(v),h[J].add(_),h[V].add(_),h[$].add(_))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let J=0,V=F.length;J<V;++J){const $=F[J],ie=$.start,ue=$.count;for(let H=ie,oe=ie+ue;H<oe;H+=3)C(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const N=new le,k=new le,I=new le,M=new le;function P(J){I.fromBufferAttribute(o,J),M.copy(I);const V=f[J];N.copy(V),N.sub(I.multiplyScalar(I.dot(V))).normalize(),k.crossVectors(M,V);const ie=k.dot(h[J])<0?-1:1;u.setXYZW(J,N.x,N.y,N.z,ie)}for(let J=0,V=r.count;J<V;++J)p[J]&&P(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new le,l=new le,u=new le,f=new le,h=new le,p=new le,x=new le,S=new le;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),f.add(x),h.add(x),p.add(x),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,S=f.normalized,g=new p.constructor(h.length*x);let y=0,w=0;for(let R=0,v=h.length;R<v;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*x;for(let _=0;_<x;_++)g[w++]=p[y++]}return new Ei(g,x,S)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,S=p.length;x<S;x++){const g=p[x],y=e(g,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let S=0,g=p.length;S<g;S++){const y=p[S];x.push(y.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],S=l[p];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new le,t_=new le,n_=new ot;class Ar{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=nd.subVectors(r,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(nd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||n_.getNormalMatrix(e),o=this.coplanarPoint(nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let i_=0;class Zs extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Wa,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jm,this.blendDst=Ym,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ku,this.stencilZFail=ku,this.stencilZPass=ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ar().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new le,id=new le,xl=new le,_l=new le;class wg{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){id.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(xl),f=_l.dot(this.direction),h=-_l.dot(xl),p=_l.lengthSq(),x=Math.abs(1-u*u);let S,g,y,w;if(x>0)if(S=u*h-f,g=u*f-h,w=l*x,S>=0)if(g>=-w)if(g<=w){const R=1/x;S*=R,g*=R,y=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g<=-w?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(id).addScaledVector(xl,g),y}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,x=f.z,S=e.x-u.x,g=e.y-u.y,y=e.z-u.z,w=t.x-u.x,R=t.y-u.y,v=t.z-u.z,_=r.x-u.x,C=r.y-u.y,F=r.z-u.z,N=Math.abs(h),k=Math.abs(p),I=Math.abs(x);let M,P,J,V,$,ie,ue,H,oe,re,j,W;if(N>=k&&N>=I?(J=h,ie=S,oe=w,W=_,h>=0?(M=p,P=x,V=g,$=y,ue=R,H=v,re=C,j=F):(M=x,P=p,V=y,$=g,ue=v,H=R,re=F,j=C)):k>=I?(J=p,ie=g,oe=R,W=C,p>=0?(M=x,P=h,V=y,$=S,ue=v,H=w,re=F,j=_):(M=h,P=x,V=S,$=y,ue=w,H=v,re=_,j=F)):(J=x,ie=y,oe=v,W=F,x>=0?(M=h,P=p,V=S,$=g,ue=w,H=R,re=_,j=C):(M=p,P=h,V=g,$=S,ue=R,H=w,re=C,j=_)),J===0)return null;const B=M/J,X=P/J,D=1/J,K=V-B*ie,we=$-X*ie,Q=ue-B*oe,ge=H-X*oe,Se=re-B*W,Ue=j-X*W,ve=Se*ge-Ue*Q,Be=K*Ue-we*Se,mt=Q*we-ge*K;if(o){if(ve<0||Be<0||mt<0)return null}else if((ve<0||Be<0||mt<0)&&(ve>0||Be>0||mt>0))return null;const Qe=ve+Be+mt;if(Qe===0)return null;const _t=D*(ve*ie+Be*oe+mt*W);return(Qe>0?_t<0:_t>0)?null:this.at(_t/Qe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ja extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fm=new Ht,Kr=new wg,Sl=new $l,hm=new le,yl=new le,Ml=new le,El=new le,rd=new le,wl=new le,pm=new le,Tl=new le;class ui extends In{constructor(e=new ti,t=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){wl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],S=l[h];x!==0&&(rd.fromBufferAttribute(S,e),u?wl.addScaledVector(rd,x):wl.addScaledVector(rd.sub(t),x))}t.add(wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Sl,hm)===null||Kr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],C=Math.max(v.start,y.start),F=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let N=C,k=F;N<k;N+=3){const I=f.getX(N),M=f.getX(N+1),P=f.getX(N+2);o=Al(this,_,e,r,p,x,S,I,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let v=w,_=R;v<_;v+=3){const C=f.getX(v),F=f.getX(v+1),N=f.getX(v+2);o=Al(this,u,e,r,p,x,S,C,F,N),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],C=Math.max(v.start,y.start),F=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let N=C,k=F;N<k;N+=3){const I=N,M=N+1,P=N+2;o=Al(this,_,e,r,p,x,S,I,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let v=w,_=R;v<_;v+=3){const C=v,F=v+1,N=v+2;o=Al(this,u,e,r,p,x,S,C,F,N),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function r_(s,e,t,r,o,l,u,f){let h;if(e.side===Wn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Qr,f),h===null)return null;Tl.copy(f),Tl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Tl);return p<t.near||p>t.far?null:{distance:p,point:Tl.clone(),object:s}}function Al(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,yl),s.getVertexPosition(h,Ml),s.getVertexPosition(p,El);const x=r_(s,e,t,r,yl,Ml,El,pm);if(x){const S=new le;yi.getBarycoord(pm,yl,Ml,El,S),o&&(x.uv=yi.getInterpolatedAttribute(o,f,h,p,S,new xt)),l&&(x.uv1=yi.getInterpolatedAttribute(l,f,h,p,S,new xt)),u&&(x.normal=yi.getInterpolatedAttribute(u,f,h,p,S,new le),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new le,materialIndex:0};yi.getNormal(yl,Ml,El,g.normal),x.face=g,x.barycoord=S}return x}class s_ extends bn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=_n,x=_n,S,g){super(null,u,f,h,p,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new $l,a_=new xt(.5,.5),Rl=new le;class Qa{constructor(e=new Ar,t=new Ar,r=new Ar,o=new Ar,l=new Ar,u=new Ar){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Mi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],x=l[4],S=l[5],g=l[6],y=l[7],w=l[8],R=l[9],v=l[10],_=l[11],C=l[12],F=l[13],N=l[14],k=l[15];if(o[0].setComponents(p-u,y-x,_-w,k-C).normalize(),o[1].setComponents(p+u,y+x,_+w,k+C).normalize(),o[2].setComponents(p+f,y+S,_+R,k+F).normalize(),o[3].setComponents(p-f,y-S,_-R,k-F).normalize(),r)o[4].setComponents(h,g,v,N).normalize(),o[5].setComponents(p-h,y-g,_-v,k-N).normalize();else if(o[4].setComponents(p-h,y-g,_-v,k-N).normalize(),t===Mi)o[5].setComponents(p+h,y+g,_+v,k+N).normalize();else if(t===Za)o[5].setComponents(h,g,v,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=a_.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Rl.x=o.normal.x>0?e.max.x:e.min.x,Rl.y=o.normal.y>0?e.max.y:e.min.y,Rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const mm=new Ht;class cf{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];mm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Qa),r[o].setFromProjectionMatrix(mm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Qa),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new cf().copy(this)}}class uf extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gm=new Ht,Yd=new wg,bl=new $l,Cl=new le;class Tg extends In{constructor(e=new ti,t=new uf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(o),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;gm.copy(o).invert(),Yd.copy(e.ray).applyMatrix4(gm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,S=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let w=g,R=y;w<R;w++){const v=p.getX(w);Cl.fromBufferAttribute(S,v),vm(Cl,v,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let w=g,R=y;w<R;w++)Cl.fromBufferAttribute(S,w),vm(Cl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function vm(s,e,t,r,o,l,u){const f=Yd.distanceSqToPoint(s);if(f<t){const h=new le;Yd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ag extends bn{constructor(e=[],t=Xs,r,o,l,u,f,h,p,x){super(e,t,r,o,l,u,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o_ extends bn{constructor(e,t,r,o,l,u,f,h,p){super(e,t,r,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends bn{constructor(e,t,r=Bi,o,l,u,f=_n,h=_n,p,x=Nr,S=1){if(x!==Nr&&x!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rg extends js{constructor(e,t=Bi,r=Xs,o,l,u=_n,f=_n,h,p=Nr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends ti{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],S=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(S,2));function w(R,v,_,C,F,N,k,I,M,P,J){const V=N/M,$=k/P,ie=N/2,ue=k/2,H=I/2,oe=M+1,re=P+1;let j=0,W=0;const B=new le;for(let X=0;X<re;X++){const D=X*$-ue;for(let K=0;K<oe;K++){const we=K*V-ie;B[R]=we*C,B[v]=D*F,B[_]=H,p.push(B.x,B.y,B.z),B[R]=0,B[v]=0,B[_]=I>0?1:-1,x.push(B.x,B.y,B.z),S.push(K/M),S.push(1-X/P),j+=1}}for(let X=0;X<P;X++)for(let D=0;D<M;D++){const K=g+D+oe*X,we=g+D+oe*(X+1),Q=g+(D+1)+oe*(X+1),ge=g+(D+1)+oe*X;h.push(K,we,ge),h.push(we,Q,ge),W+=6}f.addGroup(y,W,J),y+=W,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class df extends ti{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],f=[],h=[],p=new le,x=new xt;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let S=0,g=3;S<=t;S++,g+=3){const y=r+S/t*o;p.x=e*Math.cos(y),p.y=e*Math.sin(y),u.push(p.x,p.y,p.z),f.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,h.push(x.x,x.y)}for(let S=1;S<=t;S++)l.push(S,S+1,0);this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kl extends ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,x=h+1,S=e/f,g=t/h,y=[],w=[],R=[],v=[];for(let _=0;_<x;_++){const C=_*g-u;for(let F=0;F<p;F++){const N=F*S-l;w.push(N,-C,0),R.push(0,0,1),v.push(F/f),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let C=0;C<f;C++){const F=C+p*_,N=C+p*(_+1),k=C+1+p*(_+1),I=C+1+p*_;y.push(F,N,I),y.push(N,k,I)}this.setIndex(y),this.setAttribute("position",new gn(w,3)),this.setAttribute("normal",new gn(R,3)),this.setAttribute("uv",new gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class eo extends ti{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],p=[],x=[];let S=e;const g=(t-e)/o,y=new le,w=new xt;for(let R=0;R<=o;R++){for(let v=0;v<=r;v++){const _=l+v/r*u;y.x=S*Math.cos(_),y.y=S*Math.sin(_),h.push(y.x,y.y,y.z),p.push(0,0,1),w.x=(y.x/t+1)/2,w.y=(y.y/t+1)/2,x.push(w.x,w.y)}S+=g}for(let R=0;R<o;R++){const v=R*(r+1);for(let _=0;_<r;_++){const C=_+v,F=C,N=C+r+1,k=C+r+2,I=C+1;f.push(F,N,I),f.push(N,k,I)}}this.setIndex(f),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ff extends ti{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],x=[],S=[],g=new le,y=new le,w=new le;for(let R=0;R<=r;R++){const v=u+R/r*f;for(let _=0;_<=o;_++){const C=_/o*l;y.x=(e+t*Math.cos(v))*Math.cos(C),y.y=(e+t*Math.cos(v))*Math.sin(C),y.z=t*Math.sin(v),p.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),w.subVectors(y,g).normalize(),x.push(w.x,w.y,w.z),S.push(_/o),S.push(R/r)}}for(let R=1;R<=r;R++)for(let v=1;v<=o;v++){const _=(o+1)*R+v-1,C=(o+1)*(R-1)+v-1,F=(o+1)*(R-1)+v,N=(o+1)*R+v;h.push(_,C,N),h.push(C,F,N)}this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(xm(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(xm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const r=Ys(s[t]);for(const o in r)e[o]=r[o]}return e}function xm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function l_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const c_={clone:Ys,merge:Dn};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Ht().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class f_ extends ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h_ extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p_ extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m_ extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pg extends In{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sd=new Ht,_m=new le,Sm=new le;class g_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_m.setFromMatrixPosition(e.matrixWorld),t.position.copy(_m),Sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(sd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===Za||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pl=new le,Nl=new Ks,Li=new le;class Ng extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Nl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Nl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Pl,Nl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Nl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new le,ym=new xt,Mm=new xt;class Jn extends Ng{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,ym,Mm),t.subVectors(Mm,ym)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class v_ extends g_{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Em extends Pg{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new v_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class x_ extends Ng{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class __ extends Pg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bs=-90,zs=1;class $d extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(Bs,zs,e,t);o.layers=this.layers,this.add(o);const l=new Jn(Bs,zs,e,t);l.layers=this.layers,this.add(l);const u=new Jn(Bs,zs,e,t);u.layers=this.layers,this.add(u);const f=new Jn(Bs,zs,e,t);f.layers=this.layers,this.add(f);const h=new Jn(Bs,zs,e,t);h.layers=this.layers,this.add(h);const p=new Jn(Bs,zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Mi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Za)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(S,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class S_ extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Lg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wm(s,e,t,r){const o=y_(r);switch(t){case lg:return s*e;case ug:return s*e/o.components*o.byteLength;case nf:return s*e/o.components*o.byteLength;case es:return s*e*2/o.components*o.byteLength;case rf:return s*e*2/o.components*o.byteLength;case cg:return s*e*3/o.components*o.byteLength;case Fi:return s*e*4/o.components*o.byteLength;case sf:return s*e*4/o.components*o.byteLength;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case _d:return Math.max(s,8)*Math.max(e,8)/2;case yd:case Md:case wd:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:case Gl:case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gd:case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hl:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(s){switch(s){case ei:case rg:return{byteLength:1,components:1};case Ka:case sg:case zi:return{byteLength:2,components:1};case ef:case tf:return{byteLength:2,components:4};case Bi:case Qd:case Ui:return{byteLength:4,components:1};case ag:case og:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function M_(s){const e=new WeakMap;function t(f,h){const p=f.array,x=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,x),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const x=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,x);else{S.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<S.length;y++){const w=S[g],R=S[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,w=S.length;y<w;y++){const R=S[y];s.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,TS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,US=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:E_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:R_,alphatest_pars_fragment:b_,aomap_fragment:C_,aomap_pars_fragment:P_,batching_pars_vertex:N_,batching_vertex:L_,begin_vertex:D_,beginnormal_vertex:I_,bsdfs:U_,iridescence_fragment:F_,bumpmap_pars_fragment:O_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:G_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:W_,color_vertex:X_,common:q_,defaultnormal_vertex:j_,displacementmap_pars_vertex:Y_,displacementmap_vertex:$_,emissivemap_fragment:K_,emissivemap_pars_fragment:Z_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:eS,envmap_common_pars_fragment:tS,envmap_pars_fragment:nS,envmap_pars_vertex:iS,envmap_physical_pars_fragment:pS,envmap_vertex:rS,fog_vertex:sS,fog_pars_vertex:aS,fog_fragment:oS,fog_pars_fragment:lS,gradientmap_pars_fragment:cS,lightmap_pars_fragment:uS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:fS,lights_pars_begin:hS,lights_toon_fragment:mS,lights_toon_pars_fragment:gS,lights_phong_fragment:vS,lights_phong_pars_fragment:xS,lights_physical_fragment:_S,lights_physical_pars_fragment:SS,lights_fragment_begin:yS,lights_fragment_maps:MS,lights_fragment_end:ES,lightprobes_pars_fragment:wS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:RS,logdepthbuf_vertex:bS,map_fragment:CS,map_pars_fragment:PS,map_particle_fragment:NS,map_particle_pars_fragment:LS,metalnessmap_fragment:DS,metalnessmap_pars_fragment:IS,morphinstance_vertex:US,morphcolor_vertex:FS,morphnormal_vertex:OS,morphtarget_pars_vertex:kS,morphtarget_vertex:BS,normal_fragment_begin:zS,normal_fragment_maps:GS,normal_pars_fragment:HS,normal_pars_vertex:VS,normal_vertex:WS,normalmap_pars_fragment:XS,clearcoat_normal_fragment_begin:qS,clearcoat_normal_fragment_maps:jS,clearcoat_pars_fragment:YS,iridescence_pars_fragment:$S,opaque_fragment:KS,packing:ZS,premultiplied_alpha_fragment:JS,project_vertex:QS,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:dy,specularmap_fragment:fy,specularmap_pars_fragment:hy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:vy,uv_pars_fragment:xy,uv_pars_vertex:_y,uv_vertex:Sy,worldpos_vertex:yy,background_vert:My,background_frag:Ey,backgroundCube_vert:wy,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:Ry,depth_vert:by,depth_frag:Cy,distance_vert:Py,distance_frag:Ny,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Iy,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:ky,meshlambert_frag:By,meshmatcap_vert:zy,meshmatcap_frag:Gy,meshnormal_vert:Hy,meshnormal_frag:Vy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:jy,meshtoon_vert:Yy,meshtoon_frag:$y,points_vert:Ky,points_frag:Zy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},ke={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ii={basic:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Dn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Dn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Dn([ke.points,ke.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Dn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Dn([ke.common,ke.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Dn([ke.sprite,ke.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Dn([ke.common,ke.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Dn([ke.lights,ke.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ii.physical={uniforms:Dn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ll={r:0,b:0,g:0},nM=new Ht,Ig=new ot;Ig.set(-1,0,0,0,1,0,0,0,1);function iM(s,e,t,r,o,l){const u=new ut(0);let f=o===!0?0:1,h,p,x=null,S=0,g=null;function y(C){let F=C.isScene===!0?C.background:null;if(F&&F.isTexture){const N=C.backgroundBlurriness>0;F=e.get(F,N)}return F}function w(C){let F=!1;const N=y(C);N===null?v(u,f):N&&N.isColor&&(v(N,1),F=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(C,F){const N=y(F);N&&N.isCubeTexture?(p===void 0&&(p=new ui(new no(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Ys(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,I,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ig),p.material.toneMapped=yt.getTransfer(N.colorSpace)!==Pt,(x!==N||S!==N.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=N,S=N.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new ui(new Kl(2,2),new ts({name:"BackgroundMaterial",uniforms:Ys(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=yt.getTransfer(N.colorSpace)!==Pt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||S!==N.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=N,S=N.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,F){C.getRGB(Ll,Cg(s)),t.buffers.color.setClear(Ll.r,Ll.g,Ll.b,F,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,F=1){u.set(C),f=F,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,v(u,f)},render:w,addToRenderList:R,dispose:_}}function rM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f($,ie,ue,H,oe){let re=!1;const j=S($,H,ue,ie);l!==j&&(l=j,p(l.object)),re=y($,H,ue,oe),re&&w($,H,ue,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,N($,ie,ue,H),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function p($){return s.bindVertexArray($)}function x($){return s.deleteVertexArray($)}function S($,ie,ue,H){const oe=H.wireframe===!0;let re=r[ie.id];re===void 0&&(re={},r[ie.id]=re);const j=$.isInstancedMesh===!0?$.id:0;let W=re[j];W===void 0&&(W={},re[j]=W);let B=W[ue.id];B===void 0&&(B={},W[ue.id]=B);let X=B[oe];return X===void 0&&(X=g(h()),B[oe]=X),X}function g($){const ie=[],ue=[],H=[];for(let oe=0;oe<t;oe++)ie[oe]=0,ue[oe]=0,H[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:ue,attributeDivisors:H,object:$,attributes:{},index:null}}function y($,ie,ue,H){const oe=l.attributes,re=ie.attributes;let j=0;const W=ue.getAttributes();for(const B in W)if(W[B].location>=0){const D=oe[B];let K=re[B];if(K===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(K=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(K=$.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;j++}return l.attributesNum!==j||l.index!==H}function w($,ie,ue,H){const oe={},re=ie.attributes;let j=0;const W=ue.getAttributes();for(const B in W)if(W[B].location>=0){let D=re[B];D===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(D=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(D=$.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),oe[B]=K,j++}l.attributes=oe,l.attributesNum=j,l.index=H}function R(){const $=l.newAttributes;for(let ie=0,ue=$.length;ie<ue;ie++)$[ie]=0}function v($){_($,0)}function _($,ie){const ue=l.newAttributes,H=l.enabledAttributes,oe=l.attributeDivisors;ue[$]=1,H[$]===0&&(s.enableVertexAttribArray($),H[$]=1),oe[$]!==ie&&(s.vertexAttribDivisor($,ie),oe[$]=ie)}function C(){const $=l.newAttributes,ie=l.enabledAttributes;for(let ue=0,H=ie.length;ue<H;ue++)ie[ue]!==$[ue]&&(s.disableVertexAttribArray(ue),ie[ue]=0)}function F($,ie,ue,H,oe,re,j){j===!0?s.vertexAttribIPointer($,ie,ue,oe,re):s.vertexAttribPointer($,ie,ue,H,oe,re)}function N($,ie,ue,H){R();const oe=H.attributes,re=ue.getAttributes(),j=ie.defaultAttributeValues;for(const W in re){const B=re[W];if(B.location>=0){let X=oe[W];if(X===void 0&&(W==="instanceMatrix"&&$.instanceMatrix&&(X=$.instanceMatrix),W==="instanceColor"&&$.instanceColor&&(X=$.instanceColor)),X!==void 0){const D=X.normalized,K=X.itemSize,we=e.get(X);if(we===void 0)continue;const Q=we.buffer,ge=we.type,Se=we.bytesPerElement,Ue=ge===s.INT||ge===s.UNSIGNED_INT||X.gpuType===Qd;if(X.isInterleavedBufferAttribute){const ve=X.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,mt=X.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Qe=0;Qe<B.locationSize;Qe++)_(B.location+Qe,ve.meshPerAttribute);$.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<B.locationSize;Qe++)v(B.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Qe=0;Qe<B.locationSize;Qe++)F(B.location+Qe,K/B.locationSize,ge,D,Be*Se,(mt+K/B.locationSize*Qe)*Se,Ue)}else{if(X.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)_(B.location+ve,X.meshPerAttribute);$.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ve=0;ve<B.locationSize;ve++)v(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ve=0;ve<B.locationSize;ve++)F(B.location+ve,K/B.locationSize,ge,D,K*Se,K/B.locationSize*ve*Se,Ue)}}else if(j!==void 0){const D=j[W];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(B.location,D);break;case 3:s.vertexAttrib3fv(B.location,D);break;case 4:s.vertexAttrib4fv(B.location,D);break;default:s.vertexAttrib1fv(B.location,D)}}}}C()}function k(){J();for(const $ in r){const ie=r[$];for(const ue in ie){const H=ie[ue];for(const oe in H){const re=H[oe];for(const j in re)x(re[j].object),delete re[j];delete H[oe]}}delete r[$]}}function I($){if(r[$.id]===void 0)return;const ie=r[$.id];for(const ue in ie){const H=ie[ue];for(const oe in H){const re=H[oe];for(const j in re)x(re[j].object),delete re[j];delete H[oe]}}delete r[$.id]}function M($){for(const ie in r){const ue=r[ie];for(const H in ue){const oe=ue[H];if(oe[$.id]===void 0)continue;const re=oe[$.id];for(const j in re)x(re[j].object),delete re[j];delete oe[$.id]}}}function P($){for(const ie in r){const ue=r[ie],H=$.isInstancedMesh===!0?$.id:0,oe=ue[H];if(oe!==void 0){for(const re in oe){const j=oe[re];for(const W in j)x(j[W].object),delete j[W];delete oe[re]}delete ue[H],Object.keys(ue).length===0&&delete r[ie]}}}function J(){V(),u=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:J,resetDefaultState:V,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:R,enableAttribute:v,disableUnusedAttributes:C}}function sM(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,x){x!==0&&(s.drawArraysInstanced(r,h,p,x),t.update(p,r,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function aM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(M){return!(M!==Fi&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const P=M===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ei&&M!==Ui&&!P&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(rt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:C,maxVaryings:F,maxFragmentUniforms:N,maxSamples:k,samples:I}}function oM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ar,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=x(S,g,0)},this.setState=function(S,g,y){const w=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!v)l?x(null):p();else{const C=l?0:r,F=C*4;let N=_.clippingState||null;h.value=N,N=x(w,g,F,y);for(let k=0;k!==F;++k)N[k]=t[k];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,y,w){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=h.value,w!==!0||v===null){const _=y+R*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(v===null||v.length<_)&&(v=new Float32Array(_));for(let F=0,N=y;F!==R;++F,N+=4)u.copy(S[F]).applyMatrix4(C,f),u.normal.toArray(v,N),v[N+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}class hf extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ag(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new no(5,5,5),l=new ts({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Hs});l.uniforms.tEquirect.value=t;const u=new ui(o,l),f=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Vn),new $d(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Tm=256,lM=3,cM=20,Ug=256,Fg=16,uM=3,dM=new le,fM=new ut;class ql{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $d(1,10,null),this._boxMesh=new ui(new no(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=dM}=l,h=this._renderer;this._setSize(u);const p=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const S=h.autoClear,g=h.autoClearColor,y=h.autoClearDepth,w=h.autoClearStencil,R=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,R===null&&(e.background=h.getClearColor(fM));const v=new $d(r,o,x);return v.position.copy(f),v.update(h,e),h.autoClear=S,h.autoClearColor=g,h.autoClearDepth=y,h.autoClearStencil=w,e.background=R,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tm,mg(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===$a?this._setSize(e.image.length===0?Tm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Am(e,!1,!1),r=Math.log2(e)-lM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Am(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===$a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hM(),this._integrationMaterial=pM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Fg);for(let u=0;u<=r;u++){const f=ql.lodToRoughness(u,r);if(u>r-uM)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const h=f>0?Math.log2(t)+.5*Math.log2(6/(Ug*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=h,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=mM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Am(s,e,t){return new hf(s,{minFilter:Cr,generateMipmaps:e,type:zi,colorSpace:Vl,depthBuffer:t})}function io(s,e,t){return new ts({name:s,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:Wn,blending:Hs,depthTest:!1,depthWrite:!1})}function hM(){return io("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ug}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pM(){return io("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mM(){return io("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Rm(){return io("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bm(){return io("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Uu||y===Fu)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new hf(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const y=g.mapping,w=y===Uu||y===Fu,R=y===Xs||y===$a;if(w||R){let v=t.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new ql(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const C=g.image;return w&&C&&C.height>0||R&&C&&h(C)?(r===null&&(r=new ql(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function f(g,y){return y===Uu?g.mapping=Xs:y===Fu&&(g.mapping=$a),g}function h(g){let y=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&y++;return y===w}function p(g){const y=g.target;y.removeEventListener("dispose",p);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function vM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bl("WebGLRenderer: "+r+" extension not supported."),o}}}function xM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function f(w){h(w.target)}function h(w){w.index!==null&&e.remove(w.index);for(const v in w.attributes)e.remove(w.attributes[v]);w.removeEventListener("dispose",f),delete o[w.id],u.unregister(w);const R=l.get(w);R&&(e.remove(R),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,R){return o[R.id]!==void 0||(R.addEventListener("dispose",f),o[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function x(w){const R=w.attributes;for(const v in R)e.update(R[v],s.ARRAY_BUFFER)}function S(w){const R=w.index,v=w.attributes.position;let _=0;if(v===void 0)return;const C=R!==null?R.array.length:v.array.length/3-1,F=v.count>=65535?Eg:Mg,N=new F(Math.ceil(C/3)*6,1),k=N.array;if(R!==null){const M=R.array;_=R.version;for(let P=0,J=0;P<C;P+=3){const V=M[P+0],$=M[P+1],ie=M[P+2];k[J++]=V,k[J++]=$,k[J++]=$,k[J++]=ie,k[J++]=ie,k[J++]=V}}else{_=v.version;for(let M=0,P=0;M<C;M+=3){const J=M+0,V=M+1,$=M+2;k[P++]=J,k[P++]=V,k[P++]=V,k[P++]=$,k[P++]=$,k[P++]=J}}N.version=_;const I=l.get(w);I&&e.remove(I),l.set(w,N)}function g(w){const R=l.get(w);if(R){const v=w.index;v!==null&&R.version<v.version&&S(w)}else S(w);return l.get(w)}function y(){for(const w in o){const R=o[w].deref();R!==void 0&&h(R)}}return{get:p,update:x,getWireframeAttribute:g,dispose:y}}function _M(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),t.update(g,r,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let R=0;for(let v=0;v<y;v++)R+=g[v];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x}function SM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function yM(s,e,t){const r=new WeakMap,o=new qt;function l(u,f,h){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let V=function(){P.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var y=V;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let N=0;w===!0&&(N=1),R===!0&&(N=2),v===!0&&(N=3);let k=f.attributes.position.count*N,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const M=new Float32Array(k*I*4*S),P=new xg(M,k,I,S);P.type=Ui,P.needsUpdate=!0;const J=N*4;for(let $=0;$<S;$++){const ie=_[$],ue=C[$],H=F[$],oe=k*I*4*$;for(let re=0;re<ie.count;re++){const j=re*J;w===!0&&(o.fromBufferAttribute(ie,re),M[oe+j+0]=o.x,M[oe+j+1]=o.y,M[oe+j+2]=o.z,M[oe+j+3]=0),R===!0&&(o.fromBufferAttribute(ue,re),M[oe+j+4]=o.x,M[oe+j+5]=o.y,M[oe+j+6]=o.z,M[oe+j+7]=0),v===!0&&(o.fromBufferAttribute(H,re),M[oe+j+8]=o.x,M[oe+j+9]=o.y,M[oe+j+10]=o.z,M[oe+j+11]=H.itemSize===4?o.w:1)}}g={count:S,texture:P,size:new xt(k,I)},r.set(f,g),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let v=0;v<p.length;v++)w+=p[v];const R=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function MM(s,e,t,r,o){let l=new WeakMap;function u(p){const x=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==x&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function f(){l=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:f}}const EM={[Km]:"LINEAR_TONE_MAPPING",[Zm]:"REINHARD_TONE_MAPPING",[Jm]:"CINEON_TONE_MAPPING",[Qm]:"ACES_FILMIC_TONE_MAPPING",[tg]:"AGX_TONE_MAPPING",[ng]:"NEUTRAL_TONE_MAPPING",[eg]:"CUSTOM_TONE_MAPPING"};function wM(s,e,t,r,o,l){const u=new ki(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null,p=null;const x=new ti;x.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new gn([0,2,0,0,2,0],2));const S=new f_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ui(x,S),y=new x_(-1,1,1,-1,0,1);let w=null,R=null,v=!1,_,C=null,F=[],N=!1;this.setSize=function(k,I){u.setSize(k,I),f!==null&&f.setSize(k,I),h!==null&&h.setSize(k,I);for(let M=0;M<F.length;M++){const P=F[M];P.setSize&&P.setSize(k,I)}},this.setEffects=function(k){F=k,N=F.length>0&&F[0].isRenderPass===!0;const I=u.width,M=u.height;F.length>0&&f===null&&(f=new ki(I,M,{type:zi,depthBuffer:!1,stencilBuffer:!1}),h=new ki(I,M,{type:zi,depthBuffer:!1,stencilBuffer:!1}));const P=o===!0&&F.some(J=>J.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&p===null&&(p=new js(I,M),l===!0&&(p.format=Pr,p.type=qs)),u.dispose(),u.depthTexture=P?p:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let J=0;J<F.length;J++){const V=F[J];V.setSize&&V.setSize(I,M),P&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(p)}},this.begin=function(k,I){if(v||k.toneMapping===tr&&F.length===0)return!1;if(C=I,I!==null){const M=I.width,P=I.height;(u.width!==M||u.height!==P)&&this.setSize(M,P)}return N===!1&&k.setRenderTarget(u),_=k.toneMapping,k.toneMapping=tr,!0},this.hasRenderPass=function(){return N},this.end=function(k,I){k.toneMapping=_,v=!0;let M=u,P=f;for(let J=0;J<F.length;J++){const V=F[J];V.enabled!==!1&&(V.render(k,P,M,I),V.needsSwap!==!1&&(M=P,P=P===f?h:f))}if(w!==k.outputColorSpace||R!==k.toneMapping){w=k.outputColorSpace,R=k.toneMapping,S.defines={},yt.getTransfer(w)===Pt&&(S.defines.SRGB_TRANSFER="");const J=EM[R];J&&(S.defines[J]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=M.texture,k.setRenderTarget(C),k.render(g,y),C=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),x.dispose(),S.dispose()}}const Og=new bn,kg=new js(1,1),Bg=new Rg(1),zg=new xg,Gg=new Wx,Hg=new Ag,Cm=[],Pm=[],Nm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function Js(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Cm[o];if(l===void 0&&(l=new Float32Array(o),Cm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zl(s,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function CM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),cn(t,r)}}function PM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),cn(t,r)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),cn(t,r)}}function LM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function FM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function Jl(s){return s.version===0&&(s.compareFunction=hg,s.needsUpdate=!0),s}function zM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Jl(kg):l=Og,t.setTexture2D(e||l,o)}function GM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Gg,o)}function HM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Jl(Bg):l=Hg,t.setTextureCube(e||l,o)}function VM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||zg,o)}function WM(s){switch(s){case 5126:return TM;case 35664:return AM;case 35665:return RM;case 35666:return bM;case 35674:return CM;case 35675:return PM;case 35676:return NM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return IM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function XM(s,e){s.uniform1fv(this.addr,e)}function qM(s,e){const t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function jM(s,e){const t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function YM(s,e){const t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function $M(s,e){const t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function KM(s,e){const t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ZM(s,e){const t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function JM(s,e){s.uniform1iv(this.addr,e)}function QM(s,e){s.uniform2iv(this.addr,e)}function eE(s,e){s.uniform3iv(this.addr,e)}function tE(s,e){s.uniform4iv(this.addr,e)}function nE(s,e){s.uniform1uiv(this.addr,e)}function iE(s,e){s.uniform2uiv(this.addr,e)}function rE(s,e){s.uniform3uiv(this.addr,e)}function sE(s,e){s.uniform4uiv(this.addr,e)}function aE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);ln(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Jl(kg):u=Og;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function oE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);ln(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Gg,l[u])}function lE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);ln(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Jl(Bg):u=Hg;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||u,l[f])}function cE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);ln(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||zg,l[u])}function uE(s){switch(s){case 5126:return XM;case 35664:return qM;case 35665:return jM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}class dE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=WM(t.type)}}class fE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uE(t.type)}}class hE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function pE(s,e,t){const r=s.name,o=r.length;for(ad.lastIndex=0;;){const l=ad.exec(r),u=ad.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Im(t,p===void 0?new dE(f,s,e):new fE(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new hE(f),Im(t,S)),t=S}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);pE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Um(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const mE=37297;let gE=0;function vE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Fm=new ot;function xE(s){yt._getMatrix(Fm,yt.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+vE(s.getShaderSource(e),f)}else return l}function _E(s,e){const t=xE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const SE={[Km]:"Linear",[Zm]:"Reinhard",[Jm]:"Cineon",[Qm]:"ACESFilmic",[tg]:"AgX",[ng]:"Neutral",[eg]:"Custom"};function yE(s,e){const t=SE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new le;function ME(){yt.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function wE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function TE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Va(s){return s!==""}function km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(s){return s.replace(AE,RE)}function RE(s,e){const t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kd(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(s){return s.replace(bE,CE)}function CE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PE={[Il]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function NE(s){return PE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LE={[$a]:"ENVMAP_MODE_REFRACTION"};function DE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":LE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IE={[$m]:"ENVMAP_BLENDING_MULTIPLY",[lx]:"ENVMAP_BLENDING_MIX",[cx]:"ENVMAP_BLENDING_ADD"};function UE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":IE[s.combine]||"ENVMAP_BLENDING_NONE"}function FE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=NE(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=DE(t),S=UE(t),g=EE(t),y=wE(l),w=o.createProgram();let R,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Va).join(`
`),R.length>0&&(R+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Va).join(`
`),v.length>0&&(v+=`
`)):(R=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),v=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ft.tonemapping_pars_fragment:"",t.toneMapping!==tr?yE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,_E("linearToOutputTexel",t.outputColorSpace),ME(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),u=Kd(u),u=km(u,t),u=Bm(u,t),f=Kd(f),f=km(f,t),f=Bm(f,t),u=zm(u),f=zm(f),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,R=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,v=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=_+R+u,F=_+v+f,N=Um(o,o.VERTEX_SHADER,C),k=Um(o,o.FRAGMENT_SHADER,F);o.attachShader(w,N),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(V){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(w)||"",ie=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(k)||"",H=$.trim(),oe=ie.trim(),re=ue.trim();let j=!0,W=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,N,k);else{const B=Om(o,N,"vertex"),X=Om(o,k,"fragment");bt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+B+`
`+X)}else H!==""?rt("WebGLProgram: Program Info Log:",H):(oe===""||re==="")&&(W=!1);W&&(V.diagnostics={runnable:j,programLog:H,vertexShader:{log:oe,prefix:R},fragmentShader:{log:re,prefix:v}})}o.deleteShader(N),o.deleteShader(k),M=new zl(o,w),P=TE(o,w)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(w,mE)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=k,this}let OE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new BE(e),t.set(e,r)),r}}class BE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function zE(s){return s===es||s===Gl||s===Hl}function GE(s,e,t,r,o,l){const u=new _g,f=new kE,h=new Set,p=[],x=new Map,S=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return h.add(M),M===0?"uv":`uv${M}`}function w(M,P,J,V,$,ie){const ue=V.fog,H=$.geometry,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,j=e.get(M.envMap||oe,re),W=g[M.type];let B=r.precision;M.precision!==null&&(B=r.getMaxPrecision(M.precision),B!==M.precision&&rt("WebGLProgram.getParameters:",M.precision,"not supported, using",B,"instead."));const X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=X!==void 0?X.length:0;let K=0;H.morphAttributes.position!==void 0&&(K=1),H.morphAttributes.normal!==void 0&&(K=2),H.morphAttributes.color!==void 0&&(K=3);let we,Q,ge,Se;if(W){const Oe=Ii[W];we=Oe.vertexShader,Q=Oe.fragmentShader}else{we=M.vertexShader,Q=M.fragmentShader;const Oe=f.getVertexShaderStage(M),St=f.getFragmentShaderStage(M);f.update(M,Oe,St),ge=Oe.id,Se=St.id}const Ue=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Be=$.isInstancedMesh===!0,mt=$.isBatchedMesh===!0,Qe=!!M.map,_t=!!M.matcap,wt=!!j,dt=wt&&j.isPMREMTexture===!0,Qt=!!M.aoMap,jt=!!M.lightMap,un=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,Fn=!!M.displacementMap,kt=!!M.emissiveMap,nn=!!M.metalnessMap,Sn=!!M.roughnessMap,Cn=M.anisotropy>0,Y=M.clearcoat>0,Pn=M.diffuseRoughness>0,Lt=M.dispersion>0,Nt=M.retroreflectivity>0,De=M.iridescence>0,Yt=M.sheen>0,Je=M.transmission>0,nt=Cn&&!!M.anisotropyMap,L=Y&&!!M.clearcoatMap,T=Y&&!!M.clearcoatNormalMap,te=Y&&!!M.clearcoatRoughnessMap,Me=Pn&&!!M.diffuseRoughnessMap,me=De&&!!M.iridescenceMap,be=De&&!!M.iridescenceThicknessMap,Ne=Yt&&!!M.sheenColorMap,fe=Yt&&!!M.sheenRoughnessMap,he=!!M.specularMap,Ae=!!M.specularColorMap,O=!!M.specularIntensityMap,pe=Je&&!!M.transmissionMap,de=Je&&!!M.thicknessMap,Pe=!!M.gradientMap,Te=!!M.alphaMap,Ce=M.alphaTest>0,Ye=!!M.alphaHash,lt=!!M.extensions;let ye=tr;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ze=dt?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,st={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:Q,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:B,batching:mt,batchingColor:mt&&$._colorsTexture!==null,instancing:Be,instancingColor:Be&&$.instanceColor!==null,instancingMorph:Be&&$.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:_t,envMap:wt,envMapMode:wt&&j.mapping,envMapPMREM:dt,envMapMaxLod:dt?Ze.length-1:null,envMapSize:dt?Ze[0].width:null,aoMap:Qt,lightMap:jt,bumpMap:un,normalMap:It,displacementMap:Fn,emissiveMap:kt,normalMapObjectSpace:It&&M.normalMapType===fx,normalMapTangentSpace:It&&M.normalMapType===jd,packedNormalMap:It&&M.normalMapType===jd&&zE(M.normalMap.format),metalnessMap:nn,roughnessMap:Sn,anisotropy:Cn,anisotropyMap:nt,clearcoat:Y,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:te,diffuseRoughness:Pn,diffuseRoughnessMap:Me,dispersion:Lt,retroreflection:Nt,iridescence:De,iridescenceMap:me,iridescenceThicknessMap:be,sheen:Yt,sheenColorMap:Ne,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ae,specularIntensityMap:O,transmission:Je,transmissionMap:pe,thicknessMap:de,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===Wa&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ce,alphaHash:Ye,combine:M.combine,mapUv:Qe&&y(M.map.channel),aoMapUv:Qt&&y(M.aoMap.channel),lightMapUv:jt&&y(M.lightMap.channel),bumpMapUv:un&&y(M.bumpMap.channel),normalMapUv:It&&y(M.normalMap.channel),displacementMapUv:Fn&&y(M.displacementMap.channel),emissiveMapUv:kt&&y(M.emissiveMap.channel),metalnessMapUv:nn&&y(M.metalnessMap.channel),roughnessMapUv:Sn&&y(M.roughnessMap.channel),anisotropyMapUv:nt&&y(M.anisotropyMap.channel),clearcoatMapUv:L&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&y(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&y(M.diffuseRoughnessMap.channel),iridescenceMapUv:me&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(M.sheenRoughnessMap.channel),specularMapUv:he&&y(M.specularMap.channel),specularColorMapUv:Ae&&y(M.specularColorMap.channel),specularIntensityMapUv:O&&y(M.specularIntensityMap.channel),transmissionMapUv:pe&&y(M.transmissionMap.channel),thicknessMapUv:de&&y(M.thicknessMap.channel),alphaMapUv:Te&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||Cn),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(Qe||Te),fog:!!ue,useFog:M.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ve,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ie.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Pt,decodeVideoTextureEmissive:kt&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qn,flipSided:M.side===Wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&M.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=h.has(1),st.vertexUv2s=h.has(2),st.vertexUv3s=h.has(3),h.clear(),st}function R(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const J in M.defines)P.push(J),P.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(v(P,M),_(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function v(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function _(M,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function C(M){const P=g[M.type];let J;if(P){const V=Ii[P];J=c_.clone(V.uniforms)}else J=M.uniforms;return J}function F(M,P){let J=x.get(P);return J!==void 0?++J.usedTimes:(J=new FE(s,P,M,o),p.push(J),x.set(P,J)),J}function N(M){if(--M.usedTimes===0){const P=p.indexOf(M);p[P]=p[p.length-1],p.pop(),x.delete(M.cacheKey),M.destroy()}}function k(M){f.remove(M)}function I(){f.dispose()}return{getParameters:w,getProgramCacheKey:R,getUniforms:C,acquireProgram:F,releaseProgram:N,releaseShaderCache:k,programs:p,dispose:I}}function HE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function VE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,w,R,v,_){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:_},s[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=w,C.materialVariant=u(g),C.groupOrder=R,C.renderOrder=g.renderOrder,C.z=v,C.group=_),e++,C}function h(g,y,w,R,v,_,C){C.reversedDepth===!0&&(v=-v);const F=f(g,y,w,R,v,_);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):t.push(F)}function p(g,y,w,R,v,_){const C=f(g,y,w,R,v,_);w.transmission>0?r.unshift(C):w.transparent===!0?o.unshift(C):t.unshift(C)}function x(g,y){t.length>1&&t.sort(g||VE),r.length>1&&r.sort(y||Hm),o.length>1&&o.sort(y||Hm)}function S(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:x}}function WE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Vm,s.set(r,[u])):o>=l.length?(u=new Vm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function XE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new ut};break;case"SpotLight":t={position:new le,direction:new le,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=t,t}}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jE=0;function YE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $E(s){const e=new XE,t=qE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const o=new le,l=new Ht,u=new Ht;function f(p){let x=0,S=0,g=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let y=0,w=0,R=0,v=0,_=0,C=0,F=0,N=0,k=0,I=0,M=0,P=0,J=0,V=0;p.sort(YE);for(let ie=0,ue=p.length;ie<ue;ie++){const H=p[ie],oe=H.color,re=H.intensity,j=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===es?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=oe.r*re,S+=oe.g*re,g+=oe.b*re;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],re);V++}else if(H.isSunLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,D=t.get(H);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[w]=D,r.sunShadowMap[w]=W;const K=X.getViewportCount();for(let we=0;we<K;we++)r.sunShadowMatrix[R+we]=X.getMatrix(we),r.sunShadowCascade[R+we]=X._cascadeData[we];R+=K,w++}r.sun[y]=B,y++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,D=t.get(H);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=H.shadow.matrix,k++}r.directional[v]=B,v++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(oe).multiplyScalar(re),B.distance=j,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[C]=B;const X=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,X.updateMatrices(H),H.castShadow&&J++),r.spotLightMatrix[C]=X.matrix,H.castShadow){const D=t.get(H);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,r.spotShadow[C]=D,r.spotShadowMap[C]=W,M++}C++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(oe).multiplyScalar(re),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=B,F++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const X=H.shadow,D=t.get(H);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=W,r.pointShadowMatrix[_]=H.shadow.matrix,I++}r.point[_]=B,_++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(re),B.groundColor.copy(H.groundColor).multiplyScalar(re),r.hemi[N]=B,N++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const $=r.hash;($.sunLength!==y||$.directionalLength!==v||$.pointLength!==_||$.spotLength!==C||$.rectAreaLength!==F||$.hemiLength!==N||$.numSunShadows!==w||$.numDirectionalShadows!==k||$.numPointShadows!==I||$.numSpotShadows!==M||$.numSpotMaps!==P||$.numLightProbes!==V)&&(r.sun.length=y,r.directional.length=v,r.spot.length=C,r.rectArea.length=F,r.point.length=_,r.hemi.length=N,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.directionalShadowMatrix.length=k,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+P-J,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=V,$.sunLength=y,$.directionalLength=v,$.pointLength=_,$.spotLength=C,$.rectAreaLength=F,$.hemiLength=N,$.numSunShadows=w,$.numDirectionalShadows=k,$.numPointShadows=I,$.numSpotShadows=M,$.numSpotMaps=P,$.numLightProbes=V,r.version=jE++)}function h(p,x){let S=0,g=0,y=0,w=0,R=0,v=0;const _=x.matrixWorldInverse;for(let C=0,F=p.length;C<F;C++){const N=p[C];if(N.isSunLight){const k=r.sun[S];k.direction.setFromMatrixPosition(N.matrixWorld),k.direction.transformDirection(_),S++}else if(N.isDirectionalLight){const k=r.directional[g];k.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(_),g++}else if(N.isSpotLight){const k=r.spot[w];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(_),k.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(_),w++}else if(N.isRectAreaLight){const k=r.rectArea[R];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(_),u.identity(),l.copy(N.matrixWorld),l.premultiply(_),u.extractRotation(l),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),k.halfWidth.applyMatrix4(u),k.halfHeight.applyMatrix4(u),R++}else if(N.isPointLight){const k=r.point[y];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(_),y++}else if(N.isHemisphereLight){const k=r.hemi[v];k.direction.setFromMatrixPosition(N.matrixWorld),k.direction.transformDirection(_),v++}}}return{setup:f,setupView:h,state:r}}function Wm(s){const e=new $E(s),t=[],r=[],o=[];function l(S){x.camera=S,t.length=0,r.length=0,o.length=0}function u(S){S.isLightProbeGrid?o.push(S):t.push(S)}function f(S){r.push(S)}function h(){e.setup(t),o.sort((S,g)=>S.priority-g.priority||S.id-g.id)}function p(S){e.setupView(t,S)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function KE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Wm(s),e.set(o,[f])):l>=u.length?(f=new Wm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QE=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],ew=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Xm=new Ht,za=new le,od=new le;function tw(s,e,t){let r=new Qa;const o=new xt,l=new xt,u=new qt,f=new p_,h=new m_,p={},x=t.maxTextureSize,S={[Qr]:Wn,[Wn]:Qr,[Qn]:Qn},g=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:ZE,fragmentShader:JE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new ti;w.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ui(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let _=this.type;this.render=function(I,M,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===Vv&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Il);const J=s.getRenderTarget(),V=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Hs),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ue=_!==this.type;ue&&M.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(oe=>oe.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,oe=I.length;H<oe;H++){const re=I[H],j=re.shadow;if(j===void 0){rt("WebGLShadowMap:",re,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const W=j.getFrameExtents();o.multiply(W),l.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/W.x),o.x=l.x*W.x,j.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/W.y),o.y=l.y*W.y,j.mapSize.y=l.y));const B=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=B,j.map===null||ue===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ha){if(re.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ki(o.x,o.y,{format:es,type:zi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),j.map.texture.name=re.name+".shadowMap",j.map.depthTexture=new js(o.x,o.y,Ui),j.map.depthTexture.name=re.name+".shadowMapDepth",j.map.depthTexture.format=Nr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=_n,j.map.depthTexture.magFilter=_n}else re.isPointLight?(j.map=new hf(o.x),j.map.depthTexture=new Rg(o.x,Bi)):(j.map=new ki(o.x,o.y),j.map.depthTexture=new js(o.x,o.y,Bi)),j.map.depthTexture.name=re.name+".shadowMap",j.map.depthTexture.format=Nr,this.type===Il?(j.map.depthTexture.compareFunction=B?fg:dg,j.map.depthTexture.minFilter=Vn,j.map.depthTexture.magFilter=Vn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=_n,j.map.depthTexture.magFilter=_n);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==o.x||j.map.height!==o.y)&&j.map.setSize(o.x,o.y);const X=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();re.isPointLight!==!0&&j.updateMatrices(re,P);const D=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:P.layers;for(let K=0;K<X;K++){const we=j.getCamera(K);if(re.isPointLight){const Q=j.camera,ge=j.matrix,Se=re.distance||Q.far;Se!==Q.far&&(Q.far=Se,Q.updateProjectionMatrix()),za.setFromMatrixPosition(re.matrixWorld),Q.position.copy(za),od.copy(Q.position),od.add(QE[K]),Q.up.copy(ew[K]),Q.lookAt(od),Q.updateMatrixWorld(),ge.makeTranslation(-za.x,-za.y,-za.z),Xm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Xm,Q.coordinateSystem,Q.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,K),s.clear();else{K===0&&(s.setRenderTarget(j.map),s.clear());const Q=j.getViewport(K);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),ie.viewport(u)}r=j.getFrustum(K),N(M,P,we,re,D,this.type)}j.isPointLightShadow!==!0&&this.type===Ha&&C(j,P),j.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(J,V,$)};function C(I,M){const P=e.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null?I.mapPass=new ki(o.x,o.y,{format:es,type:zi}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(M,null,P,g,R,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value.set(I.map.width,I.map.height),y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(M,null,P,y,R,null)}function F(I,M,P,J){let V=null;const $=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)V=$;else if(V=P.isPointLight===!0?h:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const ie=V.uuid,ue=M.uuid;let H=p[ie];H===void 0&&(H={},p[ie]=H);let oe=H[ue];oe===void 0&&(oe=V.clone(),H[ue]=oe,M.addEventListener("dispose",k)),V=oe}if(V.visible=M.visible,V.wireframe=M.wireframe,J===Ha?V.side=M.shadowSide!==null?M.shadowSide:M.side:V.side=M.shadowSide!==null?M.shadowSide:S[M.side],V.alphaMap=M.alphaMap,V.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,V.map=M.map,V.clipShadows=M.clipShadows,V.clippingPlanes=M.clippingPlanes,V.clipIntersection=M.clipIntersection,V.displacementMap=M.displacementMap,V.displacementScale=M.displacementScale,V.displacementBias=M.displacementBias,V.wireframeLinewidth=M.wireframeLinewidth,V.linewidth=M.linewidth,P.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const ie=s.properties.get(V);ie.light=P}return V}function N(I,M,P,J,V,$){if(I.visible===!1)return;if(I.layers.test(V)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&$===Ha)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const H=e.update(I),oe=I.material;if(Array.isArray(oe)){const re=H.groups;for(let j=0,W=re.length;j<W;j++){const B=re[j],X=oe[B.materialIndex];if(X&&X.visible){const D=F(I,X,J,$);I.onBeforeShadow(s,I,M,P,H,D,B),s.renderBufferDirect(P,null,H,D,I,B),I.onAfterShadow(s,I,M,P,H,D,B)}}}else if(oe.visible){const re=F(I,oe,J,$);I.onBeforeShadow(s,I,M,P,H,re,null),s.renderBufferDirect(P,null,H,re,I,null),I.onAfterShadow(s,I,M,P,H,re,null)}}const ue=I.children;for(let H=0,oe=ue.length;H<oe;H++)N(ue[H],M,P,J,V,$)}function k(I){I.target.removeEventListener("dispose",k);for(const P in p){const J=p[P],V=I.target.uuid;V in J&&(J[V].dispose(),delete J[V])}}}function nw(s,e){function t(){let O=!1;const pe=new qt;let de=null;const Pe=new qt(0,0,0,0);return{setMask:function(Te){de!==Te&&!O&&(s.colorMask(Te,Te,Te,Te),de=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ce,Ye,lt,ye){ye===!0&&(Te*=lt,Ce*=lt,Ye*=lt),pe.set(Te,Ce,Ye,lt),Pe.equals(pe)===!1&&(s.clearColor(Te,Ce,Ye,lt),Pe.copy(pe))},reset:function(){O=!1,de=null,Pe.set(-1,0,0,0)}}}function r(){let O=!1,pe=!1,de=null,Pe=null,Te=null;return{setReversed:function(Ce){if(pe!==Ce){const Ye=e.get("EXT_clip_control");Ce?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),pe=Ce;const lt=Te;Te=null,this.setClear(lt)}},getReversed:function(){return pe},setTest:function(Ce){Ce?ve(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ce){de!==Ce&&!O&&(s.depthMask(Ce),de=Ce)},setFunc:function(Ce){if(pe&&(Ce=Ex[Ce]),Pe!==Ce){switch(Ce){case ld:s.depthFunc(s.NEVER);break;case cd:s.depthFunc(s.ALWAYS);break;case ud:s.depthFunc(s.LESS);break;case Ya:s.depthFunc(s.LEQUAL);break;case dd:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Te!==Ce&&(Te=Ce,pe&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){O=!1,de=null,Pe=null,Te=null,pe=!1}}}function o(){let O=!1,pe=null,de=null,Pe=null,Te=null,Ce=null,Ye=null,lt=null,ye=null;return{setTest:function(Ze){O||(Ze?ve(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!O&&(s.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,st,Oe){(de!==Ze||Pe!==st||Te!==Oe)&&(s.stencilFunc(Ze,st,Oe),de=Ze,Pe=st,Te=Oe)},setOp:function(Ze,st,Oe){(Ce!==Ze||Ye!==st||lt!==Oe)&&(s.stencilOp(Ze,st,Oe),Ce=Ze,Ye=st,lt=Oe)},setLocked:function(Ze){O=Ze},setClear:function(Ze){ye!==Ze&&(s.clearStencil(Ze),ye=Ze)},reset:function(){O=!1,pe=null,de=null,Pe=null,Te=null,Ce=null,Ye=null,lt=null,ye=null}}}const l=new t,u=new r,f=new o;let h={};const p=new WeakMap;let x={},S={},g={},y=new WeakMap,w=[],R=null,v=!1,_=null,C=null,F=null,N=null,k=null,I=null,M=null,P=new ut(0,0,0),J=0,V=!1,$=null,ie=null,ue=null,H=null,oe=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),j=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),j=W>=2);let X=null,D={};const K=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Q=new qt().fromArray(K),ge=new qt().fromArray(we);function Se(O,pe,de,Pe){const Te=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(O,Ce),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<de;Ye++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(pe+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ce}const Ue={};Ue[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Ya),un(!1),It(Yp),ve(s.CULL_FACE),Qt(Hs);function ve(O){x[O]!==!0&&(s.enable(O),x[O]=!0)}function Be(O){x[O]!==!1&&(s.disable(O),x[O]=!1)}function mt(O,pe){return g[O]!==pe?(s.bindFramebuffer(O,pe),g[O]=pe,O===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=pe),O===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function Qe(O,pe){let de=w,Pe=!1;if(O){de=y.get(pe),de===void 0&&(de=[],y.set(pe,de));const Te=O.textures;if(de.length!==Te.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,Ye=Te.length;Ce<Ye;Ce++)de[Ce]=s.COLOR_ATTACHMENT0+Ce;de.length=Te.length,Pe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(de)}function _t(O){return R!==O?(s.useProgram(O),R=O,!0):!1}const wt={[Gs]:s.FUNC_ADD,[Xv]:s.FUNC_SUBTRACT,[qv]:s.FUNC_REVERSE_SUBTRACT};wt[jv]=s.MIN,wt[Yv]=s.MAX;const dt={[$v]:s.ZERO,[Kv]:s.ONE,[Zv]:s.SRC_COLOR,[jm]:s.SRC_ALPHA,[ix]:s.SRC_ALPHA_SATURATE,[tx]:s.DST_COLOR,[Qv]:s.DST_ALPHA,[Jv]:s.ONE_MINUS_SRC_COLOR,[Ym]:s.ONE_MINUS_SRC_ALPHA,[nx]:s.ONE_MINUS_DST_COLOR,[ex]:s.ONE_MINUS_DST_ALPHA,[rx]:s.CONSTANT_COLOR,[sx]:s.ONE_MINUS_CONSTANT_COLOR,[ax]:s.CONSTANT_ALPHA,[ox]:s.ONE_MINUS_CONSTANT_ALPHA};function Qt(O,pe,de,Pe,Te,Ce,Ye,lt,ye,Ze){if(O===Hs){v===!0&&(Be(s.BLEND),v=!1);return}if(v===!1&&(ve(s.BLEND),v=!0),O!==Wv){if(O!==_||Ze!==V){if((C!==Gs||k!==Gs)&&(s.blendEquation(s.FUNC_ADD),C=Gs,k=Gs),Ze)switch(O){case Wa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFunc(s.ONE,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",O);break}else switch(O){case Wa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $p:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kp:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",O);break}F=null,N=null,I=null,M=null,P.set(0,0,0),J=0,_=O,V=Ze}return}Te=Te||pe,Ce=Ce||de,Ye=Ye||Pe,(pe!==C||Te!==k)&&(s.blendEquationSeparate(wt[pe],wt[Te]),C=pe,k=Te),(de!==F||Pe!==N||Ce!==I||Ye!==M)&&(s.blendFuncSeparate(dt[de],dt[Pe],dt[Ce],dt[Ye]),F=de,N=Pe,I=Ce,M=Ye),(lt.equals(P)===!1||ye!==J)&&(s.blendColor(lt.r,lt.g,lt.b,ye),P.copy(lt),J=ye),_=O,V=!1}function jt(O,pe){O.side===Qn?Be(s.CULL_FACE):ve(s.CULL_FACE);let de=O.side===Wn;pe&&(de=!de),un(de),O.blending===Wa&&O.transparent===!1?Qt(Hs):Qt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),l.setMask(O.colorWrite);const Pe=O.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function un(O){$!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),$=O)}function It(O){O!==Gv?(ve(s.CULL_FACE),O!==ie&&(O===Yp?s.cullFace(s.BACK):O===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),ie=O}function Fn(O){O!==ue&&(j&&s.lineWidth(O),ue=O)}function kt(O,pe,de){O?(ve(s.POLYGON_OFFSET_FILL),(H!==pe||oe!==de)&&(H=pe,oe=de,u.getReversed()&&(pe=-pe,de=-de),s.polygonOffset(pe,de))):Be(s.POLYGON_OFFSET_FILL)}function nn(O){O?ve(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Sn(O){O===void 0&&(O=s.TEXTURE0+re-1),X!==O&&(s.activeTexture(O),X=O)}function Cn(O,pe,de){de===void 0&&(X===null?de=s.TEXTURE0+re-1:de=X);let Pe=D[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},D[de]=Pe),(Pe.type!==O||Pe.texture!==pe)&&(X!==de&&(s.activeTexture(de),X=de),s.bindTexture(O,pe||Ue[O]),Pe.type=O,Pe.texture=pe)}function Y(){const O=D[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Pn(){try{s.compressedTexImage2D(...arguments)}catch(O){bt("WebGLState:",O)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(O){bt("WebGLState:",O)}}function Nt(){try{s.texSubImage2D(...arguments)}catch(O){bt("WebGLState:",O)}}function De(){try{s.texSubImage3D(...arguments)}catch(O){bt("WebGLState:",O)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(O){bt("WebGLState:",O)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(O){bt("WebGLState:",O)}}function nt(){try{s.texStorage2D(...arguments)}catch(O){bt("WebGLState:",O)}}function L(){try{s.texStorage3D(...arguments)}catch(O){bt("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){bt("WebGLState:",O)}}function te(){try{s.texImage3D(...arguments)}catch(O){bt("WebGLState:",O)}}function Me(O){return S[O]!==void 0?S[O]:s.getParameter(O)}function me(O,pe){S[O]!==pe&&(s.pixelStorei(O,pe),S[O]=pe)}function be(O){Q.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Q.copy(O))}function Ne(O){ge.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function fe(O,pe){let de=p.get(pe);de===void 0&&(de=new WeakMap,p.set(pe,de));let Pe=de.get(O);Pe===void 0&&(Pe=s.getUniformBlockIndex(pe,O.name),s.uniformBlockBinding(pe,Pe,Pe),de.set(O,Pe))}function he(O,pe,de){const Te=p.get(pe).get(O);h[Te]!==de&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,de),h[Te]=de)}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},X=null,D={},g={},h={},y=new WeakMap,w=[],R=null,v=!1,_=null,C=null,F=null,N=null,k=null,I=null,M=null,P=new ut(0,0,0),J=0,V=!1,$=null,ie=null,ue=null,H=null,oe=null,Q.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Be,bindFramebuffer:mt,drawBuffers:Qe,useProgram:_t,setBlending:Qt,setMaterial:jt,setFlipSided:un,setCullFace:It,setLineWidth:Fn,setPolygonOffset:kt,setScissorTest:nn,activeTexture:Sn,bindTexture:Cn,unbindTexture:Y,compressedTexImage2D:Pn,compressedTexImage3D:Lt,texImage2D:T,texImage3D:te,pixelStorei:me,getParameter:Me,updateUBOMapping:fe,uniformBlockBinding:he,texStorage2D:nt,texStorage3D:L,texSubImage2D:Nt,texSubImage3D:De,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Je,scissor:be,viewport:Ne,reset:Ae}}function iw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,x=new WeakMap,S=new Set;let g;const y=new WeakMap,w=new Set,R=new FinalizationRegistry(L=>w.delete(L));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return v?new OffscreenCanvas(L,T):Xl("canvas")}function C(L,T,te){let Me=1;const me=nt(L);if((me.width>te||me.height>te)&&(Me=te/Math.max(me.width,me.height)),Me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const be=Math.floor(Me*me.width),Ne=Math.floor(Me*me.height);g===void 0&&(g=_(be,Ne));const fe=T?_(be,Ne):g;return fe.width=be,fe.height=Ne,fe.getContext("2d").drawImage(L,0,0,be,Ne),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+be+"x"+Ne+")."),fe}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function F(L){return L.generateMipmaps}function N(L){s.generateMipmap(L)}function k(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,T,te,Me,me,be=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ne;Me&&(Ne=e.get("EXT_texture_norm16"),Ne||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8),te===s.UNSIGNED_SHORT&&Ne&&(fe=Ne.R16_EXT),te===s.SHORT&&Ne&&(fe=Ne.R16_SNORM_EXT)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8),te===s.UNSIGNED_SHORT&&Ne&&(fe=Ne.RG16_EXT),te===s.SHORT&&Ne&&(fe=Ne.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&(te===s.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGB16_EXT),te===s.SHORT&&Ne&&(fe=Ne.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),T===s.RGBA){const he=be?Wl:yt.getTransfer(me);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=he===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGBA16_EXT),te===s.SHORT&&Ne&&(fe=Ne.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(L,T){let te;return L?T===null||T===Bi||T===qs?te=s.DEPTH24_STENCIL8:T===Ui?te=s.DEPTH32F_STENCIL8:T===Ka&&(te=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===qs?te=s.DEPTH_COMPONENT24:T===Ui?te=s.DEPTH_COMPONENT32F:T===Ka&&(te=s.DEPTH_COMPONENT16),te}function P(L,T){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==_n&&L.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function J(L){const T=new WeakRef(L);r.get(L).__ref=T,w.add(T),R.register(L,T,T)}function V(L){const T=r.get(L).__ref;T!==void 0&&(w.delete(T),R.unregister(T))}function $(L){ue(L.target)}function ie(L){H(L.target)}function ue(L){L.removeEventListener("dispose",$),V(L),re(L),L.isVideoTexture&&x.delete(L),L.isHTMLTexture&&S.delete(L)}function H(L){L.removeEventListener("dispose",ie),V(L),W(L)}function oe(){for(const L of w){const T=L.deref();T!==void 0&&(T.isRenderTarget===!0?H(T):ue(T))}w.clear(),S.clear()}function re(L){const T=r.get(L);if(T.__webglInit===void 0)return;const te=L.source,Me=y.get(te);if(Me){const me=Me[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&j(L),Object.keys(Me).length===0&&y.delete(te)}r.remove(L)}function j(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const te=L.source,Me=y.get(te);delete Me[T.__cacheKey],u.memory.textures--}function W(L){const T=r.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();const te=L.depthTexture;if(te&&te.renderTarget===L&&ue(te),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let be=0;be<T.__webglFramebuffer[me].length;be++)s.deleteFramebuffer(T.__webglFramebuffer[me][be]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Me=L.textures;for(let me=0,be=Me.length;me<be;me++){const Ne=r.get(Me[me]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),u.memory.textures--),r.remove(Me[me])}r.remove(L)}let B=0;function X(){B=0}function D(){return B}function K(L){B=L}function we(){const L=B;return L>=o.maxTextures&&rt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),B+=1,L}function Q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ge(L,T){const te=r.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&te.__version!==L.version){const Me=L.image;if(Me===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(te,L,T);return}}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function Se(L,T){const te=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){jt(te,L,T);return}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function Ue(L,T){const te=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){jt(te,L,T);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function ve(L,T){const te=r.get(L);if(L.version>0&&te.__version!==L.version){un(te,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const Be={[md]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},mt={[_n]:s.NEAREST,[ux]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[Ou]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},Qe={[px]:s.NEVER,[hg]:s.ALWAYS,[mx]:s.LESS,[dg]:s.LEQUAL,[gx]:s.EQUAL,[fg]:s.GEQUAL,[vx]:s.GREATER,[xx]:s.NOTEQUAL};function _t(L,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===Ou||T.magFilter===ul||T.magFilter===Cr||T.minFilter===Vn||T.minFilter===Ou||T.minFilter===ul||T.minFilter===Cr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Be[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Be[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Be[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,mt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,mt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_n||T.minFilter!==ul&&T.minFilter!==Cr||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function wt(L,T){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",$),J(T));const Me=T.source;let me=y.get(Me);me===void 0&&(me={},y.set(Me,me));const be=Q(T);if(be!==L.__cacheKey){me[be]===void 0&&(me[be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),me[be].usedTimes++;const Ne=me[L.__cacheKey];Ne!==void 0&&(me[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&j(T)),L.__cacheKey=be,L.__webglTexture=me[be].texture}return te}function dt(L,T,te){return Math.floor(Math.floor(L/te)/T)}function Qt(L,T,te,Me){const be=L.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,te,Me,T.data);else{be.sort((O,pe)=>O.start-pe.start);let Ne=0;for(let O=1;O<be.length;O++){const pe=be[Ne],de=be[O],Pe=pe.start+pe.count,Te=dt(de.start,T.width,4),Ce=dt(pe.start,T.width,4);de.start<=Pe+1&&Te===Ce&&dt(de.start+de.count-1,T.width,4)===Te?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++Ne,be[Ne]=de)}be.length=Ne+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),he=t.getParameter(s.UNPACK_SKIP_PIXELS),Ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,pe=be.length;O<pe;O++){const de=be[O],Pe=Math.floor(de.start/4),Te=Math.ceil(de.count/4),Ce=Pe%T.width,Ye=Math.floor(Pe/T.width),lt=Te,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(s.TEXTURE_2D,0,Ce,Ye,lt,ye,te,Me,T.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function jt(L,T,te){let Me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Me=s.TEXTURE_3D);const me=wt(L,T),be=T.source;t.bindTexture(Me,L.__webglTexture,s.TEXTURE0+te);const Ne=r.get(be);if(be.version!==Ne.__version||me===!0){if(t.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ye=yt.getPrimaries(yt.workingColorSpace),Ze=T.colorSpace===Rr?null:yt.getPrimaries(T.colorSpace),st=T.colorSpace===Rr||ye===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let he=C(T.image,!1,o.maxTextureSize);he=Je(T,he);const Ae=l.convert(T.format,T.colorSpace),O=l.convert(T.type);let pe=I(T.internalFormat,Ae,O,T.normalized,T.colorSpace,T.isVideoTexture);_t(Me,T);let de;const Pe=T.mipmaps,Te=T.isVideoTexture!==!0,Ce=Ne.__version===void 0||me===!0,Ye=be.dataReady,lt=P(T,he);if(T.isDepthTexture)pe=M(T.format===Pr,T.type),Ce&&(Te?t.texStorage2D(s.TEXTURE_2D,1,pe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ae,O,null));else if(T.isDataTexture)if(Pe.length>0){Te&&Ce&&t.texStorage2D(s.TEXTURE_2D,lt,pe,Pe[0].width,Pe[0].height);for(let ye=0,Ze=Pe.length;ye<Ze;ye++)de=Pe[ye],Te?Ye&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,de.width,de.height,Ae,O,de.data):t.texImage2D(s.TEXTURE_2D,ye,pe,de.width,de.height,0,Ae,O,de.data);T.generateMipmaps=!1}else Te?(Ce&&t.texStorage2D(s.TEXTURE_2D,lt,pe,he.width,he.height),Ye&&Qt(T,he,Ae,O)):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ae,O,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,pe,Pe[0].width,Pe[0].height,he.depth);for(let ye=0,Ze=Pe.length;ye<Ze;ye++)if(de=Pe[ye],T.format!==Fi)if(Ae!==null)if(Te){if(Ye)if(T.layerUpdates.size>0){const st=wm(de.width,de.height,T.format,T.type);for(const Oe of T.layerUpdates){const St=de.data.subarray(Oe*st/de.data.BYTES_PER_ELEMENT,(Oe+1)*st/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Oe,de.width,de.height,1,Ae,St)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,de.width,de.height,he.depth,Ae,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,pe,de.width,de.height,he.depth,0,de.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,de.width,de.height,he.depth,Ae,O,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,pe,de.width,de.height,he.depth,0,Ae,O,de.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Te&&Ce&&t.texStorage2D(s.TEXTURE_2D,lt,pe,Pe[0].width,Pe[0].height);for(let ye=0,Ze=Pe.length;ye<Ze;ye++)de=Pe[ye],T.format!==Fi?Ae!==null?Te?Ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,de.width,de.height,Ae,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,pe,de.width,de.height,0,de.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ye&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,de.width,de.height,Ae,O,de.data):t.texImage2D(s.TEXTURE_2D,ye,pe,de.width,de.height,0,Ae,O,de.data)}else if(T.isDataArrayTexture)if(Te){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,pe,he.width,he.height,he.depth),Ye)if(T.layerUpdates.size>0){const ye=wm(he.width,he.height,T.format,T.type);for(const Ze of T.layerUpdates){const st=he.data.subarray(Ze*ye/he.data.BYTES_PER_ELEMENT,(Ze+1)*ye/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,he.width,he.height,1,Ae,O,st)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ae,O,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,he.width,he.height,he.depth,0,Ae,O,he.data);else if(T.isData3DTexture)Te?(Ce&&t.texStorage3D(s.TEXTURE_3D,lt,pe,he.width,he.height,he.depth),Ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ae,O,he.data)):t.texImage3D(s.TEXTURE_3D,0,pe,he.width,he.height,he.depth,0,Ae,O,he.data);else if(T.isFramebufferTexture){if(Ce)if(Te)t.texStorage2D(s.TEXTURE_2D,lt,pe,he.width,he.height);else{let ye=he.width,Ze=he.height;for(let st=0;st<lt;st++)t.texImage2D(s.TEXTURE_2D,st,pe,ye,Ze,0,Ae,O,null),ye>>=1,Ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),he.parentNode!==ye){ye.appendChild(he),S.add(T),ye.onpaint=Ze=>{const st=Ze.changedElements;for(const Oe of S)st.includes(Oe.image)&&(Oe.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const st=s.RGBA,Oe=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,st,Oe,St,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Te&&Ce){const ye=nt(Pe[0]);t.texStorage2D(s.TEXTURE_2D,lt,pe,ye.width,ye.height)}for(let ye=0,Ze=Pe.length;ye<Ze;ye++)de=Pe[ye],Te?Ye&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ae,O,de):t.texImage2D(s.TEXTURE_2D,ye,pe,Ae,O,de);T.generateMipmaps=!1}else if(Te){if(Ce){const ye=nt(he);t.texStorage2D(s.TEXTURE_2D,lt,pe,ye.width,ye.height)}Ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,O,he)}else t.texImage2D(s.TEXTURE_2D,0,pe,Ae,O,he);F(T)&&T.mipmapsAutoUpdate===!0&&N(Me),Ne.__version=be.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function un(L,T,te){if(T.image.length!==6)return;const Me=wt(L,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+te);const be=r.get(me);if(me.version!==be.__version||Me===!0){t.activeTexture(s.TEXTURE0+te);const Ne=yt.getPrimaries(yt.workingColorSpace),fe=T.colorSpace===Rr?null:yt.getPrimaries(T.colorSpace),he=T.colorSpace===Rr||Ne===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let Oe=0;Oe<6;Oe++)!Ae&&!O?pe[Oe]=C(T.image[Oe],!0,o.maxCubemapSize):pe[Oe]=O?T.image[Oe].image:T.image[Oe],pe[Oe]=Je(T,pe[Oe]);const de=pe[0],Pe=l.convert(T.format,T.colorSpace),Te=l.convert(T.type);let Ce=I(T.internalFormat,Pe,Te,T.normalized,T.colorSpace);const Ye=T.isVideoTexture!==!0,lt=be.__version===void 0||Me===!0,ye=me.dataReady;let Ze=P(T,de);_t(s.TEXTURE_CUBE_MAP,T);let st;if(T.isDepthTexture){if(Ce=M(T.format===Pr,T.type),lt)if(Ye)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ce,de.width,de.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,de.width,de.height,0,Pe,Te,null)}else if(Ae){Ye&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Ce,de.width,de.height);for(let Oe=0;Oe<6;Oe++){st=pe[Oe].mipmaps;for(let St=0;St<st.length;St++){const Vt=st[St];T.format!==Fi?Pe!==null?Ye?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,0,0,Vt.width,Vt.height,Pe,Vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,Ce,Vt.width,Vt.height,0,Vt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,0,0,Vt.width,Vt.height,Pe,Te,Vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,Ce,Vt.width,Vt.height,0,Pe,Te,Vt.data)}}}else{if(st=T.mipmaps,Ye&&lt){st.length>0&&Ze++;const Oe=nt(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(O){Ye?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,pe[Oe].width,pe[Oe].height,Pe,Te,pe[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,pe[Oe].width,pe[Oe].height,0,Pe,Te,pe[Oe].data);for(let St=0;St<st.length;St++){const Xn=st[St].image[Oe].image;Ye?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,0,0,Xn.width,Xn.height,Pe,Te,Xn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,Ce,Xn.width,Xn.height,0,Pe,Te,Xn.data)}}else{Ye?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Pe,Te,pe[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Pe,Te,pe[Oe]);for(let St=0;St<st.length;St++){const Vt=st[St];Ye?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,0,0,Pe,Te,Vt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,Ce,Pe,Te,Vt.image[Oe])}}}F(T)&&T.mipmapsAutoUpdate===!0&&N(s.TEXTURE_CUBE_MAP),be.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function It(L,T,te,Me,me,be){const Ne=l.convert(te.format,te.colorSpace),fe=l.convert(te.type),he=I(te.internalFormat,Ne,fe,te.normalized,te.colorSpace),Ae=r.get(T),O=r.get(te);if(O.__renderTarget=T,!Ae.__hasExternalTextures){const pe=Math.max(1,T.width>>be),de=Math.max(1,T.height>>be);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,be,he,pe,de,T.depth,0,Ne,fe,null):t.texImage2D(me,be,he,pe,de,0,Ne,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),De(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,me,O.__webglTexture,0,Nt(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,me,O.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fn(L,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const Me=T.depthTexture,me=Me&&Me.isDepthTexture?Me.type:null,be=M(T.stencilBuffer,me),Ne=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(T),be,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(T),be,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,be,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,L)}else{const Me=T.textures;for(let me=0;me<Me.length;me++){const be=Me[me],Ne=l.convert(be.format,be.colorSpace),fe=l.convert(be.type),he=I(be.internalFormat,Ne,fe,be.normalized,be.colorSpace);De(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(T),he,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(T),he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,T,te){const Me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);me.__renderTarget=T;const be=Me?T.depthTexture.image[0]:T.depthTexture.image;(!me.__webglTexture||be.width!==T.width||be.height!==T.height)&&(be.width=T.width,be.height=T.height,T.depthTexture.needsUpdate=!0),Me?ve(T.depthTexture,0):ge(T.depthTexture,0);const Ne=me.__webglTexture,fe=Nt(T),he=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,Ae=T.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Nr)De(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,he,Ne,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,he,Ne,0);else if(T.depthTexture.format===Pr)De(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,he,Ne,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,he,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(L){const T=r.get(L),te=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Me){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Me.removeEventListener("dispose",me)};Me.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=Me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(te)for(let Me=0;Me<6;Me++)kt(T.__webglFramebuffer[Me],L,Me);else L.texture.mipmaps.length>0?kt(T.__webglFramebuffer[0],L,0):kt(T.__webglFramebuffer,L,0);else if(te){T.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Me]),T.__webglDepthbuffer[Me]===void 0)T.__webglDepthbuffer[Me]=s.createRenderbuffer(),Fn(T.__webglDepthbuffer[Me],L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,be)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Fn(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,be)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Sn(L,T,te){const Me=r.get(L);T!==void 0&&It(Me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&nn(L)}function Cn(L){const T=L.texture,te=r.get(L),Me=r.get(T);L.addEventListener("dispose",ie),J(L);const me=L.textures,be=L.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=T.version,u.memory.textures++),be){te.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps.length>0){te.__webglFramebuffer[fe]=[];for(let he=0;he<T.mipmaps.length;he++)te.__webglFramebuffer[fe][he]=s.createFramebuffer()}else te.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(T.mipmaps.length>0){te.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)te.__webglFramebuffer[fe]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let fe=0,he=me.length;fe<he;fe++){const Ae=r.get(me[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&De(L)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let fe=0;fe<me.length;fe++){const he=me[fe];te.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[fe]);const Ae=l.convert(he.format,he.colorSpace),O=l.convert(he.type),pe=I(he.internalFormat,Ae,O,he.normalized,he.colorSpace,L.isXRRenderTarget===!0),de=Nt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,te.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Fn(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),_t(s.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)It(te.__webglFramebuffer[fe][he],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else It(te.__webglFramebuffer[fe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);F(T)?N(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ne){for(let fe=0,he=me.length;fe<he;fe++){const Ae=me[fe],O=r.get(Ae);let pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,O.__webglTexture),_t(pe,Ae),It(te.__webglFramebuffer,L,Ae,s.COLOR_ATTACHMENT0+fe,pe,0),F(Ae)&&N(pe)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Me.__webglTexture),_t(fe,T),T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)It(te.__webglFramebuffer[he],L,T,s.COLOR_ATTACHMENT0,fe,he);else It(te.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,fe,0);F(T)?N(fe):T.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&nn(L)}function Y(L){const T=L.textures;for(let te=0,Me=T.length;te<Me;te++){const me=T[te];if(F(me)&&me.mipmapsAutoUpdate===!0){const be=k(L),Ne=r.get(me).__webglTexture;t.bindTexture(be,Ne),N(be),t.unbindTexture()}}}const Pn=[];function Lt(L){if(L.samples>0){if(De(L)===!1){const T=L.textures,te=L.width,Me=L.height;let me=s.COLOR_BUFFER_BIT;const be=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(L),fe=T.length>1;if(fe)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const O=r.get(T[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,te,Me,0,0,te,Me,me,s.NEAREST),h===!0&&(Pn.length=0,Pn.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Pn.push(be),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const O=r.get(T[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,O,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Nt(L){return Math.min(o.maxSamples,L.samples)}function De(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(L){const T=u.render.frame;x.get(L)!==T&&(x.set(L,T),L.update())}function Je(L,T){const te=L.colorSpace,Me=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Vl&&te!==Rr&&(yt.getTransfer(te)===Pt?(Me!==Fi||me!==ei)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",te)),T}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=we,this.resetTextureUnits=X,this.getTextureUnits=D,this.setTextureUnits=K,this.setTexture2D=ge,this.setTexture2DArray=Se,this.setTexture3D=Ue,this.setTextureCube=ve,this.rebindTextures=Sn,this.setupRenderTarget=Cn,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=It,this.useMultisampledRTT=De,this.dispose=oe}function rw(s,e){function t(r,o=Rr){let l;const u=yt.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===ef)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ag)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===og)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===Ka)return s.UNSIGNED_SHORT;if(r===Qd)return s.INT;if(r===Bi)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===zi)return s.HALF_FLOAT;if(r===lg)return s.ALPHA;if(r===cg)return s.RGB;if(r===Fi)return s.RGBA;if(r===Nr)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===ug)return s.RED;if(r===nf)return s.RED_INTEGER;if(r===es)return s.RG;if(r===rf)return s.RG_INTEGER;if(r===sf)return s.RGBA_INTEGER;if(r===Ul||r===Fl||r===Ol||r===kl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===xd||r===_d||r===Sd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_d)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yd||r===Md||r===Ed||r===wd||r===Td||r===Gl||r===Ad)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===yd||r===Md)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ed)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===wd)return l.COMPRESSED_R11_EAC;if(r===Td)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Gl)return l.COMPRESSED_RG11_EAC;if(r===Ad)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rd||r===bd||r===Cd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Rd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Id)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ud)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gd||r===Hd||r===Vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Gd)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wd||r===Xd||r===Hl||r===qd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Wd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new bg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ts({vertexShader:sw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new Kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends ns{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,x=null,S=null,g=null,y=null,w=null;const R=typeof XRWebGLBinding<"u",v=new ow,_={},C=t.getContextAttributes();let F=null,N=null;const k=[],I=[],M=new xt;let P=null,J=null;const V=new Jn;V.viewport=new qt;const $=new Jn;$.viewport=new qt;const ie=[V,$],ue=new S_;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=k[Q];return ge===void 0&&(ge=new Wu,k[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=k[Q];return ge===void 0&&(ge=new Wu,k[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=k[Q];return ge===void 0&&(ge=new Wu,k[Q]=ge),ge.getHandSpace()};function re(Q){const ge=I.indexOf(Q.inputSource);if(ge===-1)return;const Se=k[ge];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,p||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",W);for(let Q=0;Q<k.length;Q++){const ge=I[Q];ge!==null&&(I[Q]=null,k[Q].disconnect(ge))}H=null,oe=null,v.reset();for(const Q in _)delete _[Q];if(e.setRenderTarget(F),y=null,g=null,S=null,o=null,N=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),J!==null){const Q=J.camera;Q.fov=J.fov,Q.zoom=J.zoom,Q.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",j),o.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ue=null,ve=null;C.depth&&(ve=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=C.stencil?Pr:Nr,Ue=C.stencil?qs:Bi);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(Be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ki(g.textureWidth,g.textureHeight,{format:Fi,type:ei,depthTexture:new js(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ki(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),we.setContext(o),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Q){for(let ge=0;ge<Q.removed.length;ge++){const Se=Q.removed[ge],Ue=I.indexOf(Se);Ue>=0&&(I[Ue]=null,k[Ue].disconnect(Se))}for(let ge=0;ge<Q.added.length;ge++){const Se=Q.added[ge];let Ue=I.indexOf(Se);if(Ue===-1){for(let Be=0;Be<k.length;Be++)if(Be>=I.length){I.push(Se),Ue=Be;break}else if(I[Be]===null){I[Be]=Se,Ue=Be;break}if(Ue===-1)break}const ve=k[Ue];ve&&ve.connect(Se)}}function B(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ge=Q.near,Se=Q.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),ue.near=$.near=V.near=ge,ue.far=$.far=V.far=Se,(H!==ue.near||oe!==ue.far)&&(o.updateRenderState({depthNear:ue.near,depthFar:ue.far}),H=ue.near,oe=ue.far),ue.layers.mask=Q.layers.mask|6,V.layers.mask=ue.layers.mask&-5,$.layers.mask=ue.layers.mask&-3;const Ue=Q.parent,ve=ue.cameras;B(ue,Ue);for(let Be=0;Be<ve.length;Be++)B(ve[Be],Ue);ue.projectionMatrix.copy(V.projectionMatrix),ue.projectionMatrixInverse.copy(V.projectionMatrixInverse),J===null&&Q.isPerspectiveCamera&&(J={camera:Q,fov:Q.fov,zoom:Q.zoom}),X(Q,ue,Ue)};function X(Q,ge,Se){Se===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ja*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return ue},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(Q){h=Q,g!==null&&(g.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(ue)},this.getCameraTexture=function(Q){return _[Q]};let D=null;function K(Q,ge){if(x=ge.getViewerPose(p||u),w=ge,x!==null){const Se=x.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ue=!1;Se.length!==ue.cameras.length&&(ue.cameras.length=0,Ue=!0);for(let Qe=0;Qe<Se.length;Qe++){const _t=Se[Qe];let wt=null;if(y!==null)wt=y.getViewport(_t);else{const Qt=S.getViewSubImage(g,_t);wt=Qt.viewport,Qe===0&&(e.setRenderTargetTextures(N,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(N))}let dt=ie[Qe];dt===void 0&&(dt=new Jn,dt.layers.enable(Qe),dt.viewport=new qt,ie[Qe]=dt),dt.matrix.fromArray(_t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(_t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(wt.x,wt.y,wt.width,wt.height),Qe===0&&(ue.matrix.copy(dt.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale)),Ue===!0&&ue.cameras.push(dt)}const ve=o.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const Qe=S.getDepthInformation(Se[0]);Qe&&Qe.isValid&&Qe.texture&&v.init(Qe,o.renderState)}if(ve&&ve.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let Qe=0;Qe<Se.length;Qe++){const _t=Se[Qe].camera;if(_t){let wt=_[_t];wt||(wt=new bg,_[_t]=wt);const dt=S.getCameraImage(_t);wt.sourceTexture=dt}}}}for(let Se=0;Se<k.length;Se++){const Ue=I[Se],ve=k[Se];Ue!==null&&ve!==void 0&&ve.update(Ue,ge,p||u)}D&&D(Q,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),w=null}const we=new Dg;we.setAnimationLoop(K),this.setAnimationLoop=function(Q){D=Q},this.dispose=function(){}}}const cw=new Ht,Vg=new ot;Vg.set(-1,0,0,0,1,0,0,0,1);function uw(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Cg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,C,F,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&y(v,_,N)):_.isMeshMatcapMaterial?(l(v,_),w(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),R(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?h(v,_,C,F):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Wn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Wn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const C=e.get(_),F=C.envMap,N=C.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Vg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,C,F){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*C,v.scale.value=F*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,C){v.ior.value=_.ior,_.diffuseRoughness>0&&(v.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const C=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function dw(s,e,t,r){let o={},l={};function u(C,F){const N=F.program;r.uniformBlockBinding(C,N,o[C.id])}function f(C,F){let N=o[C.id];N===void 0&&(w(C),N=h(C),o[C.id]=N,C.addEventListener("dispose",v));const k=F.program;r.updateUBOMapping(C,k);const I=e.render.frame;l[C.id]!==I&&(p(C),l[C.id]=I)}function h(C){const F=s.createBuffer(),N=C.__size,k=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,N,k),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(C){const F=o[C.id],N=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let I=0,M=N.length;I<M;I++){const P=N[I];if(Array.isArray(P))for(let J=0,V=P.length;J<V;J++)x(P[J],I,J,k);else x(P,I,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(C,F,N,k){if(g(C,F,N,k)===!0){const I=C.__offset,M=C.value;if(Array.isArray(M)){let P=0;for(let J=0;J<M.length;J++){const V=M[J],$=R(V,!0);S(V,C.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT}}else S(M,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,C.__data)}}function S(C,F,N){typeof C=="number"||typeof C=="boolean"?F[N]=C:C.isMatrix3?(F[N]=C.elements[0],F[N+1]=C.elements[1],F[N+2]=C.elements[2],F[N+3]=0,F[N+4]=C.elements[3],F[N+5]=C.elements[4],F[N+6]=C.elements[5],F[N+7]=0,F[N+8]=C.elements[6],F[N+9]=C.elements[7],F[N+10]=C.elements[8],F[N+11]=0):ArrayBuffer.isView(C)?F.set(C.subarray(0,F.length-N),N):C.toArray(F,N)}function g(C,F,N,k){const I=C.value,M=F+"_"+N;if(Array.isArray(I)){k[M]===void 0&&(k[M]=[]);const P=k[M];let J=!1;for(let V=0;V<I.length;V++)y(I[V],P,V)===!0&&(J=!0);return J}return y(I,k,M)}function y(C,F,N){if(F[N]===void 0)return typeof C=="number"||typeof C=="boolean"?F[N]=C:ArrayBuffer.isView(C)?F[N]=C.slice():F[N]=C.clone(),!0;{const k=F[N];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return F[N]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(k.equals(C)===!1)return k.copy(C),!0}}return!1}function w(C){const F=C.uniforms;let N=0;const k=16;for(let M=0,P=F.length;M<P;M++){const J=Array.isArray(F[M])?F[M]:[F[M]];for(let V=0,$=J.length;V<$;V++){const ie=J[V],ue=Array.isArray(ie.value)?ie.value:[ie.value],H=Array.isArray(F[M])||Array.isArray(ie.value);let oe=N;for(let j=0,W=ue.length;j<W;j++){const B=ue[j],X=R(B,H),D=N%k,K=D%X.boundary,we=D+K;N+=K,we!==0&&k-we<X.storage&&(N+=k-we),j===0&&(oe=N),N+=X.storage}const re=ie.type==="int"?Int32Array:ie.type==="uint"?Uint32Array:Float32Array;ie.__data=new re((N-oe)/Float32Array.BYTES_PER_ELEMENT),ie.__offset=oe}}const I=N%k;return I>0&&(N+=k-I),C.__size=N,C.__cache={},this}function R(C,F){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=16,N.storage=48):C.isMatrix4?(N.boundary=16,N.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),F===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function v(C){const F=C.target;F.removeEventListener("dispose",v),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);o={},l={}}return{bind:u,update:f,dispose:_}}const fw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function hw(){return Di===null&&(Di=new s_(fw,16,16,es,zi),Di.name="DFG_LUT",Di.minFilter=Vn,Di.magFilter=Vn,Di.wrapS=er,Di.wrapT=er,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class Wg{constructor(e={}){const{canvas:t=yx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ei}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=y,v=new Set([sf,rf,nf]),_=new Set([ei,Bi,Ka,qs,ef,tf]),C=new Uint32Array(4),F=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let k=null,I=null;const M=[],P=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let $=!1,ie=null,ue=null,H=null,oe=null;this._outputColorSpace=ci;let re=0,j=0,W=null,B=-1,X=null;const D=new qt,K=new qt;let we=null;const Q=new ut(0);let ge=0,Se=t.width,Ue=t.height,ve=1,Be=null,mt=null;const Qe=new qt(0,0,Se,Ue),_t=new qt(0,0,Se,Ue);let wt=!1;const dt=new Qa,Qt=new cf;let jt=!1,un=!1;const It=new Ht,Fn=new le,kt=new qt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Sn=!1;function Cn(){return W===null?ve:1}let Y=r;function Pn(A,z){return t.getContext(A,z)}let Lt,Nt,De,Yt,Je,nt,L,T,te,Me,me,be,Ne,fe,he,Ae,O,pe,de,Pe,Te,Ce,Ye;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),Y===null){const z="webgl2";if(Y=Pn(z,A),Y===null)throw Pn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(A){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),bt("WebGLRenderer: "+A.message),A}function lt(){Lt=new vM(Y),Lt.init(),Te=new rw(Y,Lt),Nt=new aM(Y,Lt,e,Te),De=new nw(Y,Lt),Nt.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),ue=Y.createFramebuffer(),H=Y.createFramebuffer(),oe=Y.createFramebuffer(),Yt=new SM(Y),Je=new HE,nt=new iw(Y,Lt,De,Je,Nt,Te,Yt),L=new gM(V),T=new M_(Y),Ce=new rM(Y,T),te=new xM(Y,T,Yt,Ce),Me=new MM(Y,te,T,Ce,Yt),pe=new yM(Y,Nt,nt),he=new oM(Je),me=new GE(V,L,Lt,Nt,Ce,he),be=new uw(V,Je),Ne=new WE,fe=new KE(Lt),O=new iM(V,L,De,Me,w,h),Ae=new tw(V,Me,Nt),Ye=new dw(Y,Yt,Nt,De),de=new sM(Y,Lt,Yt),Pe=new _M(Y,Lt,Yt),Yt.programs=me.programs,V.capabilities=Nt,V.extensions=Lt,V.properties=Je,V.renderLists=Ne,V.shadowMap=Ae,V.state=De,V.info=Yt}R!==ei&&(J=new wM(R,t.width,t.height,f,o,l));const ye=new lw(V,Y);this.xr=ye,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(Se,Ue,!1))},this.getSize=function(A){return A.set(Se,Ue)},this.setSize=function(A,z,se=!0){if(ye.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Ue=z,t.width=Math.floor(A*ve),t.height=Math.floor(z*ve),se===!0&&(t.style.width=A+"px",t.style.height=z+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Se*ve,Ue*ve).floor()},this.setDrawingBufferSize=function(A,z,se){Se=A,Ue=z,ve=se,t.width=Math.floor(A*se),t.height=Math.floor(z*se),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(R===ei){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,z,se,ee){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,z,se,ee),De.viewport(D.copy(Qe).multiplyScalar(Cn()).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,z,se,ee){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,z,se,ee),De.scissor(K.copy(_t).multiplyScalar(Cn()).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){De.setScissorTest(wt=A)},this.setOpaqueSort=function(A){Be=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,se=!0){let ee=0;if(A){let Z=!1;if(W!==null){const Ie=W.texture.format;Z=v.has(Ie)}if(Z){const Ie=W.texture.type,Ge=_.has(Ie),Le=O.getClearColor(),Fe=O.getClearAlpha(),Ve=Le.r,it=Le.g,ct=Le.b;Ge?(C[0]=Ve,C[1]=it,C[2]=ct,C[3]=Fe,Y.clearBufferuiv(Y.COLOR,0,C)):(F[0]=Ve,F[1]=it,F[2]=ct,F[3]=Fe,Y.clearBufferiv(Y.COLOR,0,F))}else ee|=Y.COLOR_BUFFER_BIT}z&&(ee|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ie=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),O.dispose(),Ne.dispose(),fe.dispose(),nt.dispose(),Je.dispose(),L.dispose(),Me.dispose(),te.dispose(),Ce.dispose(),Ye.dispose(),me.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ro),ye.removeEventListener("sessionend",wi),Ti.stop()};function Ze(A){A.preventDefault(),Qp("WebGLRenderer: Context Lost."),$=!0}function st(){Qp("WebGLRenderer: Context Restored."),$=!1;const A=Yt.autoReset,z=Ae.enabled,se=Ae.autoUpdate,ee=Ae.needsUpdate,Z=Ae.type;lt(),Yt.autoReset=A,Ae.enabled=z,Ae.autoUpdate=se,Ae.needsUpdate=ee,Ae.type=Z}function Oe(A){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const z=A.target;z.removeEventListener("dispose",St),Vt(z)}function Vt(A){Xn(A),Je.remove(A)}function Xn(A){const z=Je.get(A).programs;z!==void 0&&(z.forEach(function(se){me.releaseProgram(se)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,se,ee,Z,Ie){z===null&&(z=nn);const Ge=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Le=ra(A,z,se,ee,Z);De.setMaterial(ee,Ge);let Fe=se.index,Ve=1;if(ee.wireframe===!0){if(Fe=te.getWireframeAttribute(se),Fe===void 0)return;Ve=2}const it=se.drawRange,ct=se.attributes.position;let We=it.start*Ve,ht=(it.start+it.count)*Ve;Ie!==null&&(We=Math.max(We,Ie.start*Ve),ht=Math.min(ht,(Ie.start+Ie.count)*Ve)),Fe!==null?(We=Math.max(We,0),ht=Math.min(ht,Fe.count)):ct!=null&&(We=Math.max(We,0),ht=Math.min(ht,ct.count));const zt=ht-We;if(zt<0||zt===1/0)return;Ce.setup(Z,ee,Le,se,Fe);let Ct,Rt=de;if(Fe!==null&&(Ct=T.get(Fe),Rt=Pe,Rt.setIndex(Ct)),Z.isMesh)ee.wireframe===!0?(De.setLineWidth(ee.wireframeLinewidth*Cn()),Rt.setMode(Y.LINES)):Rt.setMode(Y.TRIANGLES);else if(Z.isLine){let $t=ee.linewidth;$t===void 0&&($t=1),De.setLineWidth($t*Cn()),Z.isLineSegments?Rt.setMode(Y.LINES):Z.isLineLoop?Rt.setMode(Y.LINE_LOOP):Rt.setMode(Y.LINE_STRIP)}else Z.isPoints?Rt.setMode(Y.POINTS):Z.isSprite&&Rt.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $t=Z._multiDrawStarts,Xe=Z._multiDrawCounts,rn=Z._multiDrawCount,$e=Fe?T.get(Fe).bytesPerElement:1,Ai=Je.get(ee).currentProgram.getUniforms();for(let sn=0;sn<rn;sn++)Ai.setValue(Y,"_gl_DrawID",sn),Rt.render($t[sn]/$e,Xe[sn])}else if(Z.isInstancedMesh)Rt.renderInstances(We,zt,Z.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xe=Math.min(se.instanceCount,$t);Rt.renderInstances(We,zt,Xe)}else Rt.render(We,zt)};function is(A,z,se,ee){ie!==null&&A.isNodeMaterial&&ie.setObject(ee,A),jt===!0&&he.setState(A,se,!1),A.transparent===!0&&A.side===Qn&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Ur(A,z,ee),A.side=Qr,A.needsUpdate=!0,Ur(A,z,ee),A.side=Qn):Ur(A,z,ee)}this.compile=function(A,z,se=null){se===null&&(se=A),ie!==null&&ie.renderStart(A,z,se),I=fe.get(se),I.init(z),P.push(I),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),A!==se&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights(),ie!==null&&ie.updateLights(I.state.lightsArray),un=this.localClippingEnabled,jt=he.init(this.clippingPlanes,un),jt===!0&&he.setGlobalState(this.clippingPlanes,z),ie!==null&&Ae.render(I.state.shadowsArray,se,z);const ee=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Le=Ie[Ge];is(Le,se,z,Z),ee.add(Le)}else is(Ie,se,z,Z),ee.add(Ie)}),I=P.pop(),ie!==null&&ie.renderEnd(),ee},this.compileAsync=function(A,z,se=null){const ee=this.compile(A,z,se);return new Promise(Z=>{function Ie(){if(ee.forEach(function(Ge){const Fe=Je.get(Ge).currentProgram;(Fe===void 0||Fe.isReady())&&ee.delete(Ge)}),ee.size===0){Z(A);return}setTimeout(Ie,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ea=null;function ec(A){ea&&ea(A)}function ro(){Ti.stop()}function wi(){Ti.start()}const Ti=new Dg;Ti.setAnimationLoop(ec),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){ea=A,ye.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},ye.addEventListener("sessionstart",ro),ye.addEventListener("sessionend",wi),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;ie!==null&&ie.renderStart(A,z);const se=ye.enabled===!0&&ye.isPresenting===!0,ee=J!==null&&(W===null||se)&&J.begin(V,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,z,W),I=fe.get(A,P.length),I.init(z),I.state.textureUnits=nt.getTextureUnits(),P.push(I),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Qt.setFromArrayCamera(z):dt.setFromProjectionMatrix(It,Mi,z.reversedDepth),un=this.localClippingEnabled,jt=he.init(this.clippingPlanes,un),k=Ne.get(A,M.length),k.init(),M.push(k),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){const Ge=V.xr.getDepthSensingMesh();Ge!==null&&rs(Ge,z,-1/0,V.sortObjects)}rs(A,z,0,V.sortObjects),k.finish(),ie!==null&&ie.updateLights(I.state.lightsArray),V.sortObjects===!0&&k.sort(Be,mt),Sn=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Sn&&O.addToRenderList(k,A),this.info.autoReset===!0&&this.info.reset(),jt===!0&&he.beginShadows();const Z=I.state.shadowsArray;if(Ae.render(Z,A,z),jt===!0&&he.endShadows(),(ee&&J.hasRenderPass())===!1){const Ge=k.opaque,Le=k.transmissive;if(I.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(Le.length>0)for(let Ve=0,it=Fe.length;Ve<it;Ve++){const ct=Fe[Ve];ta(Ge,Le,A,ct)}Sn&&O.render(A);for(let Ve=0,it=Fe.length;Ve<it;Ve++){const ct=Fe[Ve];so(k,A,ct,ct.viewport)}}else Le.length>0&&ta(Ge,Le,A,z),Sn&&O.render(A),so(k,A,z)}W!==null&&j===0&&(nt.updateMultisampleRenderTarget(W),nt.updateRenderTargetMipmap(W)),ee&&J.end(V),A.isScene===!0&&A.onAfterRender(V,A,z),Ce.resetDefaultState(),B=-1,X=null,P.pop(),P.length>0?(I=P[P.length-1],nt.setTextureUnits(I.state.textureUnits),jt===!0&&he.setGlobalState(V.clippingPlanes,I.state.camera)):I=null,M.pop(),M.length>0?k=M[M.length-1]:k=null,ie!==null&&ie.renderEnd()};function rs(A,z,se,ee){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){const Ge=z.isArrayCamera?Qt:dt;if(!A.frustumCulled||A.intersectsFrustum(Ge)){ee&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);const Le=Me.update(A),Fe=A.material;Fe.visible&&k.push(A,Le,Fe,se,kt.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){const Ge=z.isArrayCamera?Qt:dt;if(!A.frustumCulled||A.intersectsFrustum(Ge)){const Le=Me.update(A),Fe=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),kt.copy(Le.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Fe)){const Ve=Le.groups;for(let it=0,ct=Ve.length;it<ct;it++){const We=Ve[it],ht=Fe[We.materialIndex];ht&&ht.visible&&k.push(A,Le,ht,se,kt.z,We,z)}}else Fe.visible&&k.push(A,Le,Fe,se,kt.z,null,z)}}}const Ie=A.children;for(let Ge=0,Le=Ie.length;Ge<Le;Ge++)rs(Ie[Ge],z,se,ee)}function so(A,z,se,ee){const{opaque:Z,transmissive:Ie,transparent:Ge}=A;I.setupLightsView(se),jt===!0&&he.setGlobalState(V.clippingPlanes,se),ee&&De.viewport(D.copy(ee)),Z.length>0&&Ir(Z,z,se),Ie.length>0&&Ir(Ie,z,se),Ge.length>0&&Ir(Ge,z,se),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ta(A,z,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ee.id]===void 0){const We=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ee.id]=new ki(1,1,{generateMipmaps:!0,type:We?zi:ei,minFilter:Cr,samples:Math.max(4,Nt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ie=I.state.transmissionRenderTarget[ee.id],Ge=ee.viewport||D;Ie.setSize(Ge.z*V.transmissionResolutionScale,Ge.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),Fe=V.getActiveCubeFace(),Ve=V.getActiveMipmapLevel();V.setRenderTarget(Ie),V.getClearColor(Q),ge=V.getClearAlpha(),ge<1&&V.setClearColor(16777215,.5),V.clear(),Sn&&O.render(se);const it=V.toneMapping;V.toneMapping=tr;const ct=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),I.setupLightsView(ee),jt===!0&&he.setGlobalState(V.clippingPlanes,ee),Ir(A,se,ee),nt.updateMultisampleRenderTarget(Ie),nt.updateRenderTargetMipmap(Ie),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ht=0,zt=z.length;ht<zt;ht++){const Ct=z[ht],{object:Rt,geometry:$t,material:Xe,group:rn}=Ct;if(Xe.side===Qn&&Rt.layers.test(ee.layers)){const $e=Xe.side;Xe.side=Wn,Xe.needsUpdate=!0,na(Rt,se,ee,$t,Xe,rn),Xe.side=$e,Xe.needsUpdate=!0,We=!0}}We===!0&&(nt.updateMultisampleRenderTarget(Ie),nt.updateRenderTargetMipmap(Ie))}V.setRenderTarget(Le,Fe,Ve),V.setClearColor(Q,ge),ct!==void 0&&(ee.viewport=ct),V.toneMapping=it}function Ir(A,z,se){const ee=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Ie=A.length;Z<Ie;Z++){const Ge=A[Z],{object:Le,geometry:Fe,group:Ve}=Ge;let it=Ge.material;it.allowOverride===!0&&ee!==null&&(it=ee),Le.layers.test(se.layers)&&na(Le,z,se,Fe,it,Ve)}}function na(A,z,se,ee,Z,Ie){ie!==null&&Z.isNodeMaterial&&ie.setObject(A,Z),A.onBeforeRender(V,z,se,ee,Z,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(V,z,se,ee,A,Ie),Z.transparent===!0&&Z.side===Qn&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,V.renderBufferDirect(se,z,ee,Z,A,Ie),Z.side=Qr,Z.needsUpdate=!0,V.renderBufferDirect(se,z,ee,Z,A,Ie),Z.side=Qn):V.renderBufferDirect(se,z,ee,Z,A,Ie),A.onAfterRender(V,z,se,ee,Z,Ie)}function ia(A){let z=0;for(const se of A)se.texture!==null&&z++;return z}function Ur(A,z,se){z.isScene!==!0&&(z=nn);const ee=Je.get(A),Z=I.state.lights,Ie=I.state.shadowsArray,Ge=Z.state.version,Le=me.getParameters(A,Z.state,Ie,z,se,I.state.lightProbeGridArray),Fe=me.getProgramCacheKey(Le);let Ve=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,ee.fog=z.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=L.get(A.envMap||ee.environment,it),ee.envMapRotation=ee.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",St),Ve=new Map,ee.programs=Ve,ee.programVariants=new Map);let ct=Ve.get(Fe);if(ct!==void 0){if(ee.currentProgram===ct&&ee.lightsStateVersion===Ge)return ao(A,Le),ct}else Le.uniforms=me.getUniforms(A),ie!==null&&A.isNodeMaterial&&ie.build(A,se,Le),A.onBeforeCompile(Le,V),ct=me.acquireProgram(Le,Fe),Ve.set(Fe,ct),ee.uniforms=Le.uniforms;const We=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=he.uniform),ao(A,Le),ee.needsLights=ss(A),ee.lightsStateVersion=Ge,ee.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.sunLights.value=Z.state.sun,We.sunLightShadows.value=Z.state.sunShadow,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.sunShadowMatrix.value=Z.state.sunShadowMatrix,We.sunShadowCascade.value=Z.state.sunShadowCascade,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.numLightProbeGrids=ia(I.state.lightProbeGridArray),ee.currentProgram=ct,ee.uniformsList=null,ct}function tc(A,z,se,ee,Z){const Ie=Je.get(A),Ge=Ie.currentProgram.id+","+ee+","+Z;let Le=Ie.programVariants.get(Ge);return Le===void 0?(Le=Ur(A,z,se),Ie.programVariants.set(Ge,Le)):(Ie.currentProgram=Le,Ie.uniformsList=null,Ie.outputColorSpace=ee,Ie.toneMapping=Z),Le}function Bt(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ao(A,z){const se=Je.get(A);se.outputColorSpace=z.outputColorSpace,se.batching=z.batching,se.batchingColor=z.batchingColor,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.instancingMorph=z.instancingMorph,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function ra(A,z,se,ee,Z){z.isScene!==!0&&(z=nn),nt.resetTextureUnits();const Ie=z.fog,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?z.environment:null,Le=W===null?V.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:yt.workingColorSpace,Fe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ve=L.get(ee.envMap||Ge,Fe),it=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!se.morphAttributes.position,ht=!!se.morphAttributes.normal,zt=!!se.morphAttributes.color;let Ct=tr;ee.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ct=V.toneMapping);const Rt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=Rt!==void 0?Rt.length:0,Xe=Je.get(ee),rn=I.state.lights;if(jt===!0&&(un===!0||A!==X)){const Tt=A===X&&ee.id===B;he.setState(ee,A,Tt)}let $e=!1,Ai=!1;ee.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==rn.state.version||Z.isBatchedMesh&&Xe.batching===!1||!Z.isBatchedMesh&&Xe.batching===!0||Z.isBatchedMesh&&Xe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Xe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xe.instancingMorph===!1&&Z.morphTexture!==null||Xe.envMap!==Ve||ee.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==he.numPlanes||Xe.numIntersection!==he.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==ct||Xe.morphTargets!==We||Xe.morphNormals!==ht||Xe.morphColors!==zt||Xe.morphTargetsCount!==$t||Xe.numLightProbeGrids!==ia(I.state.lightProbeGridArray)?$e=!0:(Xe.outputColorSpace!==Le||Xe.toneMapping!==Ct)&&(Ai=!0):($e=!0,Xe.__version=ee.version);let sn=Xe.currentProgram;($e===!0||Ai===!0)&&(sn=Ai===!0?tc(ee,z,Z,Le,Ct):Ur(ee,z,Z),ie&&ee.isNodeMaterial&&ie.onUpdateProgram(ee,sn,Xe));let ir=!1,di=!1,Ri=!1;const gt=sn.getUniforms(),Zt=Xe.uniforms;if(De.useProgram(sn.program)&&(ir=!0,di=!0,Ri=!0),ee.id!==B&&(B=ee.id,di=!0),ir||X!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),gt.setValue(Y,"projectionMatrix",A.projectionMatrix),gt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Dt=gt.map.cameraPosition;Dt!==void 0&&Dt.setValue(Y,Fn.setFromMatrixPosition(A.matrixWorld)),Nt.logarithmicDepthBuffer&&gt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&gt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,di=!0,Ri=!0)}if(Xe.needsLights&&(rn.state.sunShadowMap.length>0&&gt.setValue(Y,"sunShadowMap",rn.state.sunShadowMap,nt),rn.state.directionalShadowMap.length>0&&gt.setValue(Y,"directionalShadowMap",rn.state.directionalShadowMap,nt),rn.state.spotShadowMap.length>0&&gt.setValue(Y,"spotShadowMap",rn.state.spotShadowMap,nt),rn.state.pointShadowMap.length>0&&gt.setValue(Y,"pointShadowMap",rn.state.pointShadowMap,nt)),Z.isSkinnedMesh){gt.setOptional(Y,Z,"bindMatrix"),gt.setOptional(Y,Z,"bindMatrixInverse");const Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),gt.setValue(Y,"boneTexture",Tt.boneTexture,nt))}Z.isBatchedMesh&&(gt.setOptional(Y,Z,"batchingTexture"),gt.setValue(Y,"batchingTexture",Z._matricesTexture,nt),gt.setOptional(Y,Z,"batchingIdTexture"),gt.setValue(Y,"batchingIdTexture",Z._indirectTexture,nt),gt.setOptional(Y,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(Y,"batchingColorTexture",Z._colorsTexture,nt));const yn=se.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&pe.update(Z,se,sn),(di||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,gt.setValue(Y,"receiveShadow",Z.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&z.environment!==null&&(Zt.envMapIntensity.value=z.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=hw()),di){if(gt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),Xe.needsLights&&oo(Zt,Ri),Ie&&ee.fog===!0&&be.refreshFogUniforms(Zt,Ie),be.refreshMaterialUniforms(Zt,ee,ve,Ue,I.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Tt=N;let Dt=0;for(const dn of I.state.lightProbeGridArray)dn.texture!==null&&(Tt.textures[Dt]=dn.texture,Tt.min[Dt]=dn.boundingBox.min,Tt.max[Dt]=dn.boundingBox.max,Tt.resolution[Dt]=dn.resolution,Dt++);for(const dn in Tt)Tt[dn].length=Dt;Zt.probesSH.value=Tt.textures,Zt.probesMin.value=Tt.min,Zt.probesMax.value=Tt.max,Zt.probesResolution.value=Tt.resolution}zl.upload(Y,Bt(Xe),Zt,nt)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(zl.upload(Y,Bt(Xe),Zt,nt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&gt.setValue(Y,"center",Z.center),gt.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(Y,"normalMatrix",Z.normalMatrix),gt.setValue(Y,"modelMatrix",Z.matrixWorld),ee.uniformsGroups!==void 0){const Tt=ee.uniformsGroups;for(let Dt=0,dn=Tt.length;Dt<dn;Dt++){const rr=Tt[Dt];Ye.update(rr,sn),Ye.bind(rr,sn)}}return sn}function oo(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ss(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,z,se){const ee=Je.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Je.get(A.texture).__webglTexture=z,Je.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const se=Je.get(A);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,se=0){W=A,re=z,j=se;let ee=null,Z=!1,Ie=!1;if(A){const Le=Je.get(A);if(Le.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(Y.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(A.viewport),K.copy(A.scissor),we=A.scissorTest,De.viewport(D),De.scissor(K),De.setScissorTest(we),B=-1;return}else if(Le.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(Le.__hasExternalTextures)nt.rebindTextures(A,Je.get(A.texture).__webglTexture,Je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(Le.__boundDepthTexture!==it){if(it!==null&&Je.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);const Ve=Je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?ee=Ve[z][se]:ee=Ve[z],Z=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?ee=Je.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?ee=Ve[se]:ee=Ve,D.copy(A.viewport),K.copy(A.scissor),we=A.scissorTest}else D.copy(Qe).multiplyScalar(ve).floor(),K.copy(_t).multiplyScalar(ve).floor(),we=wt;if(se!==0&&(ee=ue),De.bindFramebuffer(Y.FRAMEBUFFER,ee)&&De.drawBuffers(A,ee),De.viewport(D),De.scissor(K),De.setScissorTest(we),Z){const Le=Je.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,se)}else if(Ie){const Le=z;for(let Fe=0;Fe<A.textures.length;Fe++){const Ve=Je.get(A.textures[Fe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,se,Le)}}else if(A!==null&&se!==0){const Le=Je.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,se)}B=-1};function lo(A){const z=Je.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Nt.textureFormatReadable(A.format),z.__typeReadable=Nt.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,se,ee,Z,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Fe=Fe[Ge],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){De.bindFramebuffer(Y.FRAMEBUFFER,Fe);try{const Ve=A.textures[Le],it=Ve.format,ct=Ve.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le);const We=lo(Ve);if(We.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-ee&&se>=0&&se<=A.height-Z&&Y.readPixels(z,se,ee,Z,Te.convert(it),Te.convert(ct),Ie)}finally{const Ve=W!==null?Je.get(W).__webglFramebuffer:null;De.bindFramebuffer(Y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,z,se,ee,Z,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Fe=Fe[Ge],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(z>=0&&z<=A.width-ee&&se>=0&&se<=A.height-Z){De.bindFramebuffer(Y.FRAMEBUFFER,Fe);const Ve=A.textures[Le],it=Ve.format,ct=Ve.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le);const We=lo(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(z,se,ee,Z,Te.convert(it),Te.convert(ct),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const zt=W!==null?Je.get(W).__webglFramebuffer:null;De.bindFramebuffer(Y.FRAMEBUFFER,zt);const Ct=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Mx(Y,Ct,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ht),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ht),Y.deleteSync(Ct),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,se=0){const ee=Math.pow(2,-se),Z=Math.floor(A.image.width*ee),Ie=Math.floor(A.image.height*ee),Ge=z!==null?z.x:0,Le=z!==null?z.y:0;nt.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,Ge,Le,Z,Ie),De.unbindTexture()},this.copyTextureToTexture=function(A,z,se=null,ee=null,Z=0,Ie=0){let Ge,Le,Fe,Ve,it,ct,We,ht,zt;const Ct=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,it=se.min.y,ct=se.isBox3?se.min.z:0;else{const gt=Math.pow(2,-Z);Ge=Math.floor(Ct.width*gt),Le=Math.floor(Ct.height*gt),A.isDataArrayTexture?Fe=Ct.depth:A.isData3DTexture?Fe=Math.floor(Ct.depth*gt):Fe=1,Ve=0,it=0,ct=0}ee!==null?(We=ee.x,ht=ee.y,zt=ee.z):(We=0,ht=0,zt=0);const Rt=Te.convert(z.format),$t=Te.convert(z.type);let Xe;z.isData3DTexture?(nt.setTexture3D(z,0),Xe=Y.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(nt.setTexture2DArray(z,0),Xe=Y.TEXTURE_2D_ARRAY):(nt.setTexture2D(z,0),Xe=Y.TEXTURE_2D),De.activeTexture(Y.TEXTURE0),De.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,z.flipY),De.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),De.pixelStorei(Y.UNPACK_ALIGNMENT,z.unpackAlignment);const rn=De.getParameter(Y.UNPACK_ROW_LENGTH),$e=De.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ai=De.getParameter(Y.UNPACK_SKIP_PIXELS),sn=De.getParameter(Y.UNPACK_SKIP_ROWS),ir=De.getParameter(Y.UNPACK_SKIP_IMAGES);De.pixelStorei(Y.UNPACK_ROW_LENGTH,Ct.width),De.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ct.height),De.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ve),De.pixelStorei(Y.UNPACK_SKIP_ROWS,it),De.pixelStorei(Y.UNPACK_SKIP_IMAGES,ct);const di=A.isDataArrayTexture||A.isData3DTexture,Ri=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const gt=Je.get(A),Zt=Je.get(z),yn=Je.get(gt.__renderTarget),Tt=Je.get(Zt.__renderTarget);De.bindFramebuffer(Y.READ_FRAMEBUFFER,yn.__webglFramebuffer),De.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Dt=0;Dt<Fe;Dt++)di&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Je.get(A).__webglTexture,Z,ct+Dt),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Je.get(z).__webglTexture,Ie,zt+Dt)),Y.blitFramebuffer(Ve,it,Ve+Ge,it+Le,We,ht,We+Ge,ht+Le,Y.DEPTH_BUFFER_BIT,Y.NEAREST);De.bindFramebuffer(Y.READ_FRAMEBUFFER,null),De.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Je.has(A)){const gt=Je.get(A),Zt=Je.get(z);De.bindFramebuffer(Y.READ_FRAMEBUFFER,H),De.bindFramebuffer(Y.DRAW_FRAMEBUFFER,oe);for(let yn=0;yn<Fe;yn++)di?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,gt.__webglTexture,Z,ct+yn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,gt.__webglTexture,Z),Ri?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Zt.__webglTexture,Ie,zt+yn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Zt.__webglTexture,Ie),Z!==0?Y.blitFramebuffer(Ve,it,Ve+Ge,it+Le,We,ht,We+Ge,ht+Le,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ri?Y.copyTexSubImage3D(Xe,Ie,We,ht,zt+yn,Ve,it,Ge,Le):Y.copyTexSubImage2D(Xe,Ie,We,ht,Ve,it,Ge,Le);De.bindFramebuffer(Y.READ_FRAMEBUFFER,null),De.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Xe,Ie,We,ht,zt,Ge,Le,Fe,Rt,$t,Ct.data):z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Xe,Ie,We,ht,zt,Ge,Le,Fe,Rt,Ct.data):Y.texSubImage3D(Xe,Ie,We,ht,zt,Ge,Le,Fe,Rt,$t,Ct):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,We,ht,Ge,Le,Rt,$t,Ct.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,We,ht,Ct.width,Ct.height,Rt,Ct.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,We,ht,Ge,Le,Rt,$t,Ct);De.pixelStorei(Y.UNPACK_ROW_LENGTH,rn),De.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,$e),De.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ai),De.pixelStorei(Y.UNPACK_SKIP_ROWS,sn),De.pixelStorei(Y.UNPACK_SKIP_IMAGES,ir),Ie===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&Y.generateMipmap(Xe),De.unbindTexture()},this.initRenderTarget=function(A){Je.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){re=0,j=0,W=null,De.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const pw=({warpIntensity:s,className:e=""})=>{const t=Mt.useRef(null),r=Mt.useRef(s);return Mt.useEffect(()=>{r.current=s},[s]),Mt.useEffect(()=>{const o=t.current;if(!o)return;const l=new yg;l.fog=new Yl(197897,.0012);const u=new Jn(60,window.innerWidth/window.innerHeight,.1,2e3);u.position.z=800;const f=new Wg({antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.appendChild(f.domElement);const h=1e4,p=new ti,x=new Float32Array(h*3),S=new Float32Array(h*3),g=new Float32Array(h),y=new ut(13938487),w=new ut(16643032),R=new ut(2308445);for(let re=0;re<h;re++){const j=re*3,W=Vs.randFloat(30,900),B=Vs.randFloat(0,Math.PI*2);x[j]=Math.cos(B)*W,x[j+1]=Math.sin(B)*W,x[j+2]=Vs.randFloat(-1500,1e3),g[re]=x[j+2];const X=Math.random()>.6?w:Math.random()>.3?y:R;S[j]=X.r,S[j+1]=X.g,S[j+2]=X.b}p.setAttribute("position",new Ei(x,3)),p.setAttribute("color",new Ei(S,3));const v=document.createElement("canvas");v.width=32,v.height=32;const _=v.getContext("2d");if(_){const re=_.createRadialGradient(16,16,0,16,16,16);re.addColorStop(0,"rgba(255,255,255,1)"),re.addColorStop(.3,"rgba(245,230,179,0.8)"),re.addColorStop(1,"rgba(212,175,55,0)"),_.fillStyle=re,_.fillRect(0,0,32,32)}const C=new o_(v),F=new uf({size:3.2,map:C,vertexColors:!0,transparent:!0,opacity:.85,blending:br,depthWrite:!1}),N=new Tg(p,F);l.add(N);const k=new Jr,I=5;for(let re=0;re<I;re++){const j=new eo(180+re*60,181.5+re*60,64),W=new ja({color:13938487,side:Qn,transparent:!0,opacity:.12-re*.015,blending:br}),B=new ui(j,W);B.position.z=-200-re*150,k.add(B)}l.add(k);let M=0,P=0,J=0,V=0;const $=re=>{M=(re.clientX-window.innerWidth/2)*.3,P=(re.clientY-window.innerHeight/2)*.3};window.addEventListener("mousemove",$);const ie=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ie);let ue,H=new Lg;const oe=()=>{ue=requestAnimationFrame(oe),H.getDelta();const re=r.current;J+=(M-J)*.04,V+=(P-V)*.04,u.position.x=J*.3,u.position.y=-V*.3;const j=p.attributes.position.array,W=re>.05?15+re*180:.8;for(let B=0;B<h;B++){const X=B*3;j[X+2]+=W,j[X+2]>900&&(j[X+2]=-1200)}p.attributes.position.needsUpdate=!0,k.rotation.z+=.0015+re*.02,u.fov=60+re*35,u.updateProjectionMatrix(),f.render(l,u)};return oe(),()=>{window.removeEventListener("mousemove",$),window.removeEventListener("resize",ie),cancelAnimationFrame(ue),o&&f.domElement&&o.removeChild(f.domElement),p.dispose(),F.dispose(),f.dispose()}},[]),b.jsx("div",{ref:t,className:`fixed inset-0 pointer-events-none z-0 ${e}`,"aria-hidden":"true"})};class mw{constructor(){bs(this,"ctx",null);bs(this,"isMuted",!1);bs(this,"masterGain",null);bs(this,"ambientNoiseGain",null);bs(this,"ambientNoiseSource",null)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.5,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}unmute(){this.isMuted=!1,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(.6,this.ctx.currentTime,.1)}mute(){this.isMuted=!0,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1)}toggleMute(){return this.isMuted?this.unmute():this.mute(),!this.isMuted}startCosmicDrone(){if(this.ambientNoiseSource||(this.initContext(),!this.ctx||!this.masterGain))return;const e=this.ctx.sampleRate*3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0;for(let p=0;p<e;p++){const x=Math.random()*2-1;o=.99886*o+x*.0555179,l=.99332*l+x*.0750759,u=.969*u+x*.153852,r[p]=(o+l+u)*.035}const f=this.ctx.createBufferSource();f.buffer=t,f.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(280,this.ctx.currentTime),this.ambientNoiseGain=this.ctx.createGain(),this.ambientNoiseGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.ambientNoiseGain.gain.exponentialRampToValueAtTime(.2,this.ctx.currentTime+1.5),f.connect(h),h.connect(this.ambientNoiseGain),this.ambientNoiseGain.connect(this.masterGain),f.start(),this.ambientNoiseSource=f}updateBowTension(e){if(!this.ctx||!this.ambientNoiseGain)return;const t=this.ctx.currentTime,r=.15+e*.25;this.ambientNoiseGain.gain.setTargetAtTime(r,t,.08)}playBowRelease(){if(this.initContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=[196,293.66,392,493.88],r=[3.5,2.8,2.2,1.6];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sine",u.frequency.setValueAtTime(o,e),f.gain.setValueAtTime(.001,e),f.gain.linearRampToValueAtTime(.25/(l+1),e+.04),f.gain.exponentialRampToValueAtTime(1e-4,e+r[l]),u.connect(f),f.connect(this.masterGain),u.start(e),u.stop(e+r[l]+.1)})}speakNarration(e,t){if(this.isMuted||!("speechSynthesis"in window)){t&&setTimeout(t,3500);return}window.speechSynthesis.cancel();const r=new SpeechSynthesisUtterance(e);r.rate=.85,r.pitch=.95;const l=window.speechSynthesis.getVoices().find(u=>(u.name.includes("Natural")||u.name.includes("Daniel")||u.name.includes("Google UK English Male")||u.name.includes("Samantha")||u.name.includes("Arthur"))&&u.lang.startsWith("en"));l&&(r.voice=l),t&&(r.onend=t),window.speechSynthesis.speak(r)}stopNarration(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const Oi=new mw,gw=({onTensionChange:s,onAwaken:e,disabled:t=!1})=>{const[r,o]=Mt.useState(!1),[l,u]=Mt.useState(0),f=Mt.useRef(0),h=170,p=y=>{t||(o(!0),f.current=y.clientY,Oi.startCosmicDrone(),y.target.setPointerCapture(y.pointerId))},x=y=>{if(!r||t)return;const w=Math.max(0,y.clientY-f.current),R=Math.min(w,h);u(R);const v=R/h;s(v),Oi.updateBowTension(v)},S=Mt.useCallback(()=>{if(!r)return;o(!1),l/h>=.75?(Oi.playBowRelease(),s(1),e()):(u(0),s(0),Oi.updateBowTension(0))},[r,l,h,s,e]);Mt.useEffect(()=>{const y=()=>{r&&S()};return window.addEventListener("pointerup",y),()=>window.removeEventListener("pointerup",y)},[r,S]);const g=Math.round(l/h*100);return b.jsxs("div",{className:"relative select-none flex flex-col items-center",children:[b.jsxs("div",{className:"text-center mb-10 transition-opacity duration-300",children:[b.jsx("span",{className:"font-sans text-[11px] uppercase tracking-[0.35em] text-gold-deep block mb-1",children:g>10?`Tension of Time: ${g}%`:"The Primordial Chord"}),b.jsx("h2",{className:"text-xl sm:text-2xl font-cinzel text-sacred-gold font-bold tracking-wider",children:g>=75?"RELEASE TO AWAKEN":"PULL THE CHORD OF TIME"}),b.jsx("p",{className:"font-cormorant italic text-xs sm:text-sm text-parchment-muted mt-1",children:'"Draw down upon the golden filament to rupture the silent void."'})]}),b.jsxs("div",{className:"relative w-80 sm:w-96 h-48 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none",onPointerDown:p,onPointerMove:x,children:[b.jsxs("svg",{className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",viewBox:"0 0 380 180",children:[b.jsxs("defs",{children:[b.jsxs("linearGradient",{id:"goldString",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[b.jsx("stop",{offset:"0%",stopColor:"#8c6747",stopOpacity:"0.4"}),b.jsx("stop",{offset:"30%",stopColor:"#d4af37",stopOpacity:"0.9"}),b.jsx("stop",{offset:"50%",stopColor:"#fdf3d8",stopOpacity:"1"}),b.jsx("stop",{offset:"70%",stopColor:"#d4af37",stopOpacity:"0.9"}),b.jsx("stop",{offset:"100%",stopColor:"#8c6747",stopOpacity:"0.4"})]}),b.jsxs("filter",{id:"stringGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[b.jsx("feGaussianBlur",{stdDeviation:"4",result:"glow"}),b.jsx("feComposite",{in:"SourceGraphic",in2:"glow",operator:"over"})]})]}),b.jsx("circle",{cx:"20",cy:"50",r:"4",fill:"#d4af37"}),b.jsx("circle",{cx:"360",cy:"50",r:"4",fill:"#d4af37"}),b.jsx("path",{d:`M 20 50 Q 190 ${50+l*1.1} 360 50`,fill:"none",stroke:"url(#goldString)",strokeWidth:2.5+l/h*2,filter:"url(#stringGlow)"}),b.jsxs("g",{transform:`translate(190, ${50+l*1.1})`,children:[b.jsx("circle",{r:7+l/h*5,fill:"#fdf3d8",className:"animate-pulse"}),b.jsx("circle",{r:16+l/h*12,fill:"none",stroke:"#d4af37",strokeWidth:"1.5",strokeDasharray:"4 2",opacity:.7}),l<30&&b.jsx("g",{className:"animate-bounce",opacity:"0.6",children:b.jsx("path",{d:"M -6 18 L 0 26 L 6 18",fill:"none",stroke:"#d4af37",strokeWidth:"2"})})]})]}),b.jsx("div",{style:{transform:`translateY(${l}px)`},className:"absolute w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-75",children:b.jsx("div",{className:"w-12 h-12 rounded-full border border-gold-radiant/80 bg-cosmos-midnight/90 backdrop-blur-md flex items-center justify-center shadow-gold-glow",children:b.jsx("span",{className:"font-cinzel text-xs text-sacred-gold font-bold",children:"ॐ"})})})]}),b.jsxs("div",{className:"mt-4 flex items-center space-x-2 text-[11px] text-parchment-muted font-sans",children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-gold-antique"}),b.jsx("span",{children:"Click & drag downward, then release"})]})]})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=Mt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Mt.createElement("svg",{ref:h,...xw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Xg("lucide",o),...f},[...u.map(([p,x])=>Mt.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(s,e)=>{const t=Mt.forwardRef(({className:r,...o},l)=>Mt.createElement(_w,{ref:l,iconNode:e,className:Xg(`lucide-${vw(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],yw=Un("ArrowDown",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ew=Un("ArrowLeft",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pf=Un("ArrowRight",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Qs=Un("BookOpen",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mf=Un("Compass",Aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],bw=Un("ExternalLink",Rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],gf=Un("Library",Cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Nw=Un("Menu",Pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qg=Un("RotateCcw",Lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]],Iw=Un("Sparkle",Dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Dr=Un("Sparkles",Uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],vf=Un("Users",Fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],jg=Un("Volume2",Ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Yg=Un("VolumeX",kw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$g=Un("X",Bw),zw=({isOpen:s,onClose:e,title:t,devanagariTitle:r,sanskritVerse:o,sourceText:l,traditionalPurport:u,philosophicalContext:f})=>s?b.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-cosmos-void/60 backdrop-blur-sm animate-fade-in",children:b.jsxs("div",{className:"w-full max-w-xl h-full bg-cosmos-abyss/98 border-l border-gold-antique/30 shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gold-antique/20 mb-6",children:[b.jsxs("div",{className:"flex items-center space-x-2 text-gold-radiant text-xs font-sans tracking-widest uppercase",children:[b.jsx(Qs,{className:"w-4 h-4 text-gold-antique"}),b.jsx("span",{children:"Shruti-Drishti (Canonical Evidence)"})]}),b.jsx("button",{onClick:e,className:"p-1 text-parchment-muted hover:text-gold-radiant transition-colors","aria-label":"Close scriptural drawer",children:b.jsx($g,{className:"w-5 h-5"})})]}),b.jsx("span",{className:"text-[11px] font-sans tracking-[0.25em] text-gold-deep uppercase block mb-1",children:"Authentic Source Attribution"}),b.jsx("h2",{className:"text-2xl font-cinzel text-sacred-gold font-bold mb-1",children:t}),b.jsx("p",{className:"font-rozha text-gold-light text-base mb-6",children:r}),b.jsxs("div",{className:"rounded-sm bg-cosmos-surface border border-gold-antique/30 p-5 mb-6 shadow-gold-subtle",children:[b.jsx("span",{className:"text-[10px] font-mono tracking-wider text-gold-antique uppercase block mb-2",children:"Original Sanskrit Verses"}),b.jsx("blockquote",{className:"font-rozha text-lg sm:text-xl text-gold-radiant leading-relaxed whitespace-pre-line mb-3",children:o}),b.jsxs("div",{className:"pt-2 border-t border-cosmos-border/70 flex items-center justify-between text-xs text-parchment-muted",children:[b.jsx("span",{className:"font-medium text-gold-antique",children:l}),b.jsx("span",{className:"italic text-[11px]",children:"Parampara Canonical Text"})]})]}),b.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-parchment leading-relaxed mb-6",children:[b.jsx("h3",{className:"font-cinzel text-sm font-bold text-gold-light tracking-wide uppercase",children:"Traditional Purport & Translation"}),b.jsxs("p",{className:"font-cormorant italic text-base text-parchment-light",children:['"',u,'"']})]}),b.jsxs("div",{className:"space-y-2 text-xs text-parchment-dark leading-relaxed",children:[b.jsx("h3",{className:"font-cinzel text-xs font-bold text-gold-deep tracking-wider uppercase",children:"Cosmic Context & Dharma"}),b.jsx("p",{className:"bg-cosmos-midnight/60 p-3 rounded border border-cosmos-border",children:f})]})]}),b.jsxs("div",{className:"pt-6 border-t border-gold-antique/15 text-[11px] text-parchment-muted flex items-center justify-between",children:[b.jsx("span",{children:"Preserving canonical integrity"}),b.jsxs("span",{className:"text-gold-antique flex items-center gap-1 cursor-pointer hover:underline",children:[b.jsx("span",{children:"Indexed in Ananta"}),b.jsx(bw,{className:"w-3 h-3"})]})]})]})}):null,Gw=({onEnterUniverse:s})=>{const[e,t]=Mt.useState("void"),[r,o]=Mt.useState(0),[l,u]=Mt.useState(!1),[f,h]=Mt.useState(!1),[p,x]=Mt.useState(0),S=[{text:"Before creation, before time itself... there was neither light nor darkness, only infinite stillness.",subtext:"The primordial unmanifested realm — Rigveda 10.129"},{text:"From that silent depth, the first conscious vibration awoke. The cosmic breath breathed life into the universe.",subtext:"The awakening of cosmic creation — Chandogya Upanishad"},{text:"You have crossed the wheel of time. Welcome into the living universe of Ananta.",subtext:"Step into sacred sagas, timeless realms, and profound wisdom."}],g=_=>{e==="void"&&o(_*.3)},y=()=>{t("warping"),o(1),Oi.speakNarration(S[0].text),setTimeout(()=>{t("awakened"),o(.12)},2400)},w=()=>{const _=Oi.toggleMute();u(!_)},R=()=>{if(p<S.length-1){const _=p+1;x(_),Oi.speakNarration(S[_].text)}else s&&s()},v=()=>{Oi.stopNarration(),t("void"),o(0),x(0)};return b.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-cosmos-void text-parchment select-none",children:[b.jsx(pw,{warpIntensity:r}),b.jsxs("header",{className:"relative z-30 flex items-center justify-between p-6 sm:p-8",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("div",{className:"w-8 h-8 rounded-full border border-gold-antique/60 flex items-center justify-center bg-cosmos-midnight/80 backdrop-blur-md",children:b.jsx("span",{className:"font-cinzel text-gold-radiant text-xs font-semibold",children:"A"})}),b.jsx("span",{className:"font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-sacred-gold uppercase",children:"ANANTA"})]}),b.jsxs("div",{className:"flex items-center space-x-3",children:[e==="awakened"&&b.jsxs("button",{onClick:()=>h(!0),className:"px-3 py-1.5 rounded-sm border border-gold-antique/40 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all shadow-gold-subtle",children:[b.jsx(Qs,{className:"w-3.5 h-3.5 text-gold-antique"}),b.jsx("span",{className:"hidden sm:inline",children:"Scriptural Sources"})]}),b.jsx("button",{onClick:w,className:"p-2 rounded-full border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique transition-all",title:l?"Unmute audio":"Mute audio","aria-label":"Toggle ambient sound",children:l?b.jsx(Yg,{className:"w-4 h-4"}):b.jsx(jg,{className:"w-4 h-4 text-gold-radiant"})})]})]}),e==="void"&&b.jsxs("div",{className:"relative z-20 h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4",children:[b.jsxs("div",{className:"text-center max-w-xl mx-auto mb-6",children:[b.jsx("span",{className:"inline-block px-3 py-1 rounded-full border border-gold-antique/25 bg-cosmos-surface/80 text-[10px] font-sans tracking-[0.25em] text-gold-light uppercase mb-4",children:"Prologue • Beyond Time"}),b.jsx("h1",{className:"text-4xl sm:text-6xl font-cinzel font-black tracking-[0.22em] text-sacred-gold mb-3",children:"ANANTA"}),b.jsx("p",{className:"font-cormorant italic text-gold-deep text-lg sm:text-xl tracking-wider",children:'"Beyond creation. Beyond time. The infinite universe of wisdom."'})]}),b.jsx(gw,{onTensionChange:g,onAwaken:y})]}),e==="warping"&&b.jsxs("div",{className:"absolute inset-0 z-20 flex items-center justify-center pointer-events-none",children:[b.jsx("div",{className:"w-48 h-48 rounded-full bg-gold-radiant/20 blur-3xl animate-ping"}),b.jsx("span",{className:"font-cinzel text-lg sm:text-2xl text-sacred-gold tracking-[0.4em] uppercase animate-pulse",children:"Crossing Time..."})]}),e==="awakened"&&b.jsx("div",{className:"relative z-20 h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4 text-center max-w-3xl mx-auto",children:b.jsxs("div",{className:"p-8 sm:p-12 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/30 backdrop-blur-xl shadow-gold-glow animate-fade-in",children:[b.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs text-gold-deep font-sans tracking-[0.3em] uppercase mb-4",children:[b.jsx(Dr,{className:"w-3.5 h-3.5 text-gold-antique"}),b.jsxs("span",{children:["Cosmic Prologue • Part ",p+1," of ",S.length]})]}),b.jsxs("p",{className:"font-cinzel text-xl sm:text-3xl text-gold-radiant font-bold leading-relaxed mb-4",children:['"',S[p].text,'"']}),b.jsx("p",{className:"font-cormorant italic text-sm sm:text-base text-parchment-muted mb-8",children:S[p].subtext}),b.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[b.jsxs("button",{onClick:R,className:"w-full sm:w-auto px-7 py-3 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-gold-subtle transition-all flex items-center justify-center space-x-2",children:[b.jsx("span",{children:p<S.length-1?"Continue Journey":"Enter Sacred Sagas"}),b.jsx(pf,{className:"w-4 h-4 text-cosmos-void"})]}),b.jsxs("button",{onClick:v,className:"w-full sm:w-auto px-5 py-3 rounded-sm border border-cosmos-border text-parchment-muted hover:border-gold-antique/40 hover:text-parchment text-xs font-sans tracking-wide transition-all flex items-center justify-center space-x-1.5",children:[b.jsx(qg,{className:"w-3.5 h-3.5"}),b.jsx("span",{children:"Re-draw the Chord"})]})]})]})}),b.jsx(zw,{isOpen:f,onClose:()=>h(!1),title:"The Hymn of Creation",devanagariTitle:"Rigveda, Mandala 10, Hymn 129",sanskritVerse:"There was neither non-existence nor existence then; there was neither the realm of space, nor the sky beyond it. What was enclosed, and where, or in whose protection? Was there water, unfathomed and profound?",sourceText:"Rigveda Samhita 10.129.1",traditionalPurport:"Before creation, the universe rested in total silence and unmanifest potential. Supreme consciousness alone existed in quiet stillness before time and form began.",philosophicalContext:"In traditional Hindu cosmology, the universe moves in eternal cycles of creation (Srishti), preservation (Sthiti), and dissolution (Pralaya). This opening reflects that timeless origin."})]})},Hw=({activeGatewayIndex:s,transitioningTo:e})=>{const t=Mt.useRef(null),r=Mt.useRef(s),o=Mt.useRef(e);return Mt.useEffect(()=>{r.current=s},[s]),Mt.useEffect(()=>{o.current=e},[e]),Mt.useEffect(()=>{const l=t.current;if(!l)return;const u=new yg;u.fog=new Yl(263953,9e-4);const f=new Jn(55,window.innerWidth/window.innerHeight,.1,3e3);f.position.set(0,70,620);const h=new Wg({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(h.domElement);const p=6e3,x=new ti,S=new Float32Array(p*3),g=new Float32Array(p*3),y=new ut(13938487),w=new ut(3718648),R=new ut(16777215);for(let W=0;W<p;W++){const B=W*3,X=Vs.randFloat(150,1500),D=Vs.randFloat(0,Math.PI*2),K=Vs.randFloat(-Math.PI*.45,Math.PI*.45);S[B]=X*Math.cos(K)*Math.sin(D),S[B+1]=X*Math.sin(K),S[B+2]=X*Math.cos(K)*Math.cos(D);const we=Math.random()>.6?R:Math.random()>.3?y:w;g[B]=we.r,g[B+1]=we.g,g[B+2]=we.b}x.setAttribute("position",new Ei(S,3)),x.setAttribute("color",new Ei(g,3));const v=new uf({size:3.2,vertexColors:!0,transparent:!0,opacity:.85,blending:br,depthWrite:!1}),_=new Tg(x,v);u.add(_);const C=new Jr;[250,380,520].forEach((W,B)=>{const X=new eo(W,W+2.5,64),D=new ja({color:13938487,side:Qn,transparent:!0,opacity:.18-B*.04,blending:br}),K=new ui(X,D);K.rotation.x=Math.PI/2,K.position.y=-190,C.add(K)}),u.add(C);const F=[{color:16096779,emissive:14251782,aura:16708551},{color:959977,emissive:165063,aura:14742270},{color:11032055,emissive:9647082,aura:15984895},{color:16347926,emissive:15357964,aura:16772565},{color:1096065,emissive:366185,aura:13761253}],N=[],k=5,I=820;for(let W=0;W<k;W++){const B=new Jr,X=(W-2)/2*(I/2),D=-Math.abs(W-2)*55-40;B.position.set(X,15,D);const we=new ff(85,3.5,20,64),Q=new h_({color:F[W].color,emissive:F[W].emissive,emissiveIntensity:.8,roughness:.3,metalness:.8}),ge=new ui(we,Q);B.add(ge);const Se=new df(80,48),Ue=new ja({color:F[W].color,transparent:!0,opacity:.22,side:Qn,blending:br}),ve=new ui(Se,Ue);B.add(ve);const Be=new eo(65,72,32),mt=new ja({color:F[W].aura,side:Qn,transparent:!0,opacity:.35,blending:br}),Qe=new ui(Be,mt);B.add(Qe);const _t=new Em(F[W].color,1.2,300);_t.position.set(0,0,30),B.add(_t),u.add(B),N.push(B)}const M=new __(16777215,.4);u.add(M);const P=new Em(13938487,1.5,800);P.position.set(0,200,300),u.add(P);let J=0,V=0,$=0,ie=70;const ue=W=>{J=(W.clientX-window.innerWidth/2)*.35,V=(W.clientY-window.innerHeight/2)*.25};window.addEventListener("mousemove",ue);const H=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",H);let oe,re=new Lg;const j=()=>{oe=requestAnimationFrame(j);const W=re.getElapsedTime();$+=(J-$)*.05,ie+=(70-V-ie)*.05,o.current?(f.position.z+=(-150-f.position.z)*.08,f.fov=Math.min(105,f.fov+.6),f.updateProjectionMatrix()):(f.position.x=$*.5,f.position.y=ie,f.position.z=620,f.lookAt(0,20,0)),C.rotation.y=W*.02,N.forEach((B,X)=>{const D=r.current===X,K=D?1.3:1;B.scale.lerp(new le(K,K,K),.1),B.position.y=15+Math.sin(W*2+X*1.2)*8;const we=B.children[2];we&&(we.rotation.z=W*(X%2===0?1:-1)*.8);const Q=B.children[1];if(Q){const ge=Q.material;ge.opacity=D?.65:.2+Math.sin(W*3+X)*.08}}),_.rotation.y=W*.004,h.render(u,f)};return j(),()=>{window.removeEventListener("mousemove",ue),window.removeEventListener("resize",H),cancelAnimationFrame(oe),l&&h.domElement&&l.removeChild(h.domElement),x.dispose(),v.dispose(),h.dispose()}},[]),b.jsx("div",{ref:t,className:"fixed inset-0 pointer-events-none z-0","aria-hidden":"true"})},Vw=({onSelectGateway:s,onReturnToPrologue:e})=>{const[t,r]=Mt.useState(0),[o,l]=Mt.useState(null),[u,f]=Mt.useState(!1),h=[{id:"katha",title:"Katha",subtitle:"The Sacred Story Sanctuary",description:"Living chronicles of devotion, cosmic leelas, and spiritual transformations. Step into the unyielding resolve of Dhruva and the wanderings of Narada.",scriptureSources:"Srimad Bhagavatam • Vishnu Purana • Ramayana",colorName:"text-amber-400",icon:b.jsx(Qs,{className:"w-5 h-5 text-amber-400"})},{id:"brahmanda",title:"Brahmanda",subtitle:"Cosmic Realms & Time Cycles",description:"Journey across the 14 Lokas, from Satyaloka to the primordial ocean. Contemplate the four Yugas and the eternal cycles of cosmic creation.",scriptureSources:"14 Lokas • Chaturyugas • Cosmic Kalpas",colorName:"text-sky-400",icon:b.jsx(mf,{className:"w-5 h-5 text-sky-400"})},{id:"tattva",title:"Tattva",subtitle:"Philosophy & Transcendental Truth",description:"Explore foundational truths from the Upanishads and Bhagavad Gita: Atman, Brahman, Maya, and Karma, linked directly to living stories.",scriptureSources:"Upanishads • Bhagavad Gita • Vedanta",colorName:"text-purple-400",icon:b.jsx(Dr,{className:"w-5 h-5 text-purple-400"})},{id:"charitra",title:"Charitra",subtitle:"Sages, Deities & Devotees",description:"Trace divine lineages, spiritual genealogies, and timeless bonds between Avatars, Rishis, and Kings in an interconnected sacred web.",scriptureSources:"Devas • Sages • Kings • Devotees",colorName:"text-orange-400",icon:b.jsx(vf,{className:"w-5 h-5 text-orange-400"})},{id:"granth",title:"My Granth",subtitle:"Personal Knowledge Sanctuary",description:"Your personal digital notebook for scripture notes, reflections, bookmarks, and realizations as you journey through the texts.",scriptureSources:"Personal Journal • Bookmarks • Notes",colorName:"text-emerald-400",icon:b.jsx(gf,{className:"w-5 h-5 text-emerald-400"})}],p=g=>{Oi.playBowRelease(),l(g.id),setTimeout(()=>{s(g.id)},850)},x=()=>{const g=Oi.toggleMute();f(!g)},S=t!==null?h[t]:h[0];return b.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-cosmos-void text-parchment select-none",children:[b.jsx(Hw,{activeGatewayIndex:t,transitioningTo:o}),b.jsxs("header",{className:"relative z-30 flex items-center justify-between p-6 sm:p-8",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("div",{className:"w-8 h-8 rounded-full border border-gold-antique/60 flex items-center justify-center bg-cosmos-midnight/80 backdrop-blur-md shadow-gold-subtle",children:b.jsx("span",{className:"font-cinzel text-gold-radiant text-xs font-semibold",children:"A"})}),b.jsxs("div",{className:"flex flex-col",children:[b.jsx("span",{className:"font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-sacred-gold uppercase",children:"ANANTA"}),b.jsx("span",{className:"text-[9px] tracking-widest text-parchment-muted uppercase",children:"The Cosmic Gateway"})]})]}),b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsxs("button",{onClick:e,className:"px-3 py-1.5 rounded-sm border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-parchment-muted hover:text-gold-light hover:border-gold-antique text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all",children:[b.jsx(qg,{className:"w-3.5 h-3.5"}),b.jsx("span",{className:"hidden sm:inline",children:"Return to Prologue"})]}),b.jsx("button",{onClick:x,className:"p-2 rounded-full border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique transition-all",title:u?"Unmute sound":"Mute sound",children:u?b.jsx(Yg,{className:"w-4 h-4"}):b.jsx(jg,{className:"w-4 h-4 text-gold-radiant"})})]})]}),b.jsxs("div",{className:"relative z-20 text-center pt-1 pointer-events-none",children:[b.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-0.5 rounded-full border border-gold-antique/30 bg-cosmos-surface/80 text-[10px] font-sans tracking-[0.3em] text-gold-light uppercase",children:[b.jsx(Iw,{className:"w-3 h-3 text-gold-antique"}),b.jsx("span",{children:"The Five Cosmic Portals"})]}),b.jsx("h1",{className:"text-2xl sm:text-4xl font-cinzel font-black tracking-[0.2em] text-sacred-gold mt-1.5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]",children:"SELECT YOUR REALM"})]}),b.jsxs("div",{className:"absolute bottom-6 inset-x-4 sm:inset-x-8 z-30 max-w-5xl mx-auto flex flex-col items-center gap-3",children:[b.jsxs("div",{className:"w-full max-w-2xl px-6 py-4 rounded-md bg-cosmos-midnight/90 border border-gold-antique/30 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4",children:[b.jsxs("div",{className:"text-left flex-1",children:[b.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[b.jsx("span",{className:`text-sm font-cinzel font-bold tracking-wider ${S.colorName}`,children:S.title}),b.jsx("span",{className:"text-xs text-parchment-muted",children:"•"}),b.jsx("span",{className:"text-xs text-gold-deep font-sans",children:S.subtitle})]}),b.jsx("p",{className:"text-xs text-parchment-light leading-relaxed font-sans line-clamp-2",children:S.description})]}),b.jsxs("button",{onClick:()=>p(S),disabled:o!==null,className:"w-full sm:w-auto px-6 py-2.5 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-gold-subtle transition-all flex items-center justify-center space-x-2 shrink-0",children:[b.jsx("span",{children:o?"Entering...":`Enter ${S.title}`}),b.jsx(pf,{className:"w-3.5 h-3.5"})]})]}),b.jsx("div",{className:"flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1 max-w-full",children:h.map((g,y)=>{const w=t===y;return b.jsxs("button",{onClick:()=>r(y),onMouseEnter:()=>r(y),className:`group relative px-4 sm:px-5 py-2.5 rounded-sm border transition-all duration-300 flex items-center space-x-2 cursor-pointer backdrop-blur-md ${w?"bg-cosmos-surface border-gold-antique text-gold-radiant scale-105 shadow-[0_0_20px_rgba(212,175,55,0.35)]":"bg-cosmos-midnight/70 border-cosmos-border/70 text-parchment-muted hover:border-gold-antique/50 hover:text-parchment"}`,children:[b.jsx("span",{children:g.icon}),b.jsx("span",{className:"text-xs font-cinzel font-bold tracking-wider",children:g.title}),w&&b.jsx("span",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-radiant animate-ping"})]},g.id)})})]}),o&&b.jsx("div",{className:"absolute inset-0 z-40 bg-cosmos-void/80 backdrop-blur-md flex items-center justify-center animate-fade-in pointer-events-none",children:b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-24 h-24 rounded-full border border-gold-radiant/60 animate-ping mx-auto mb-4"}),b.jsxs("span",{className:"font-cinzel text-lg sm:text-2xl text-sacred-gold tracking-[0.35em] uppercase animate-pulse",children:["Entering ",o,"..."]})]})})]})},Ww=({density:s=160,speed:e=.2,className:t=""})=>{const r=Mt.useRef(null);return Mt.useEffect(()=>{const o=r.current;if(!o)return;const l=o.getContext("2d");if(!l)return;let u,f=o.width=window.innerWidth,h=o.height=window.innerHeight;const p=()=>{o&&(f=o.width=window.innerWidth,h=o.height=window.innerHeight)};window.addEventListener("resize",p);const x=Array.from({length:s},()=>{const y=Math.random()*.7+.15;return{x:Math.random()*f,y:Math.random()*h,size:Math.random()*1.8+.4,alpha:y,baseAlpha:y,twinkleSpeed:Math.random()*.02+.005,driftX:(Math.random()-.5)*e*.5,driftY:-Math.random()*e}});let S=0;const g=()=>{S+=1,l.clearRect(0,0,f,h);const y=l.createRadialGradient(f*.5,h*.35,50,f*.5,h*.35,Math.max(f,h)*.65);y.addColorStop(0,"rgba(23, 34, 59, 0.25)"),y.addColorStop(.5,"rgba(13, 19, 34, 0.15)"),y.addColorStop(1,"rgba(3, 5, 9, 0)"),l.fillStyle=y,l.fillRect(0,0,f,h);for(let w=0;w<x.length;w++){const R=x[w];R.alpha=R.baseAlpha+Math.sin(S*R.twinkleSpeed+w)*.25,R.alpha=Math.max(.05,Math.min(1,R.alpha)),R.x+=R.driftX,R.y+=R.driftY,R.x<0&&(R.x=f),R.x>f&&(R.x=0),R.y<0&&(R.y=h),R.y>h&&(R.y=0),l.fillStyle=`rgba(245, 230, 179, ${R.alpha})`,l.beginPath(),l.arc(R.x,R.y,R.size,0,Math.PI*2),l.fill(),R.size>1.4&&R.alpha>.5&&(l.fillStyle=`rgba(212, 175, 55, ${R.alpha*.15})`,l.beginPath(),l.arc(R.x,R.y,R.size*3.5,0,Math.PI*2),l.fill())}u=requestAnimationFrame(g)};return g(),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(u)}},[s,e]),b.jsx("canvas",{ref:r,className:`fixed inset-0 pointer-events-none z-0 ${t}`,"aria-hidden":"true"})},Xw=({activeSection:s,onNavigate:e,reducedMotion:t,onToggleReducedMotion:r})=>{const[o,l]=Mt.useState(!1),u=[{id:"home",label:"Pravesha",devanagari:"प्रवेश",icon:b.jsx(Dr,{className:"w-4 h-4"})},{id:"katha",label:"Katha",devanagari:"कथा",icon:b.jsx(Qs,{className:"w-4 h-4"})},{id:"brahmanda",label:"Brahmanda",devanagari:"ब्रह्माण्ड",icon:b.jsx(mf,{className:"w-4 h-4"})},{id:"tattva",label:"Tattva",devanagari:"तत्त्व",icon:b.jsx(Dr,{className:"w-4 h-4"})},{id:"charitra",label:"Charitra",devanagari:"चरित्र",icon:b.jsx(vf,{className:"w-4 h-4"})},{id:"granth",label:"My Granth",devanagari:"मम ग्रन्थः",icon:b.jsx(gf,{className:"w-4 h-4"})}],f=h=>{e(h),l(!1)};return b.jsxs("header",{className:"sticky top-0 z-50 w-full backdrop-blur-md bg-cosmos-void/80 border-b border-gold-antique/15 transition-all",children:[b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[b.jsxs("button",{onClick:()=>f("home"),className:"group flex items-center space-x-3 text-left focus:outline-none","aria-label":"Ananta Home",children:[b.jsx("div",{className:"w-10 h-10 rounded-full border border-gold-antique/40 flex items-center justify-center bg-cosmos-midnight group-hover:border-gold-antique group-hover:shadow-gold-subtle transition-all duration-300",children:b.jsx("span",{className:"font-cinzel text-gold-radiant text-base font-semibold",children:"अ"})}),b.jsxs("div",{className:"flex flex-col",children:[b.jsx("span",{className:"font-cinzel tracking-[0.25em] text-lg font-bold text-sacred-gold group-hover:brightness-110 transition-all",children:"ANANTA"}),b.jsx("span",{className:"text-[10px] tracking-widest text-parchment-muted font-sans uppercase",children:"The Living Wisdom"})]})]}),b.jsx("nav",{className:"hidden md:flex items-center space-x-1 lg:space-x-2",children:u.map(h=>{const p=s===h.id;return b.jsxs("button",{onClick:()=>f(h.id),className:`group relative px-3 py-2 rounded-sm text-xs lg:text-sm font-medium transition-all duration-200 flex flex-col items-center ${p?"text-gold-radiant bg-cosmos-surface/90 border border-gold-antique/30 shadow-gold-subtle":"text-parchment-dark hover:text-gold-light hover:bg-cosmos-midnight/40"}`,children:[b.jsxs("div",{className:"flex items-center space-x-1.5",children:[b.jsx("span",{className:`${p?"text-gold-antique":"text-parchment-muted group-hover:text-gold-antique"}`,children:h.icon}),b.jsx("span",{children:h.label})]}),b.jsx("span",{className:"text-[9px] tracking-widest text-gold-deep/70 font-sans mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:h.devanagari}),p&&b.jsx("span",{className:"absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-gold-antique to-transparent"})]},h.id)})}),b.jsx("div",{className:"hidden md:flex items-center space-x-3",children:b.jsx("button",{onClick:r,title:t?"Enable smooth animations":"Reduce animations for comfort",className:`px-2.5 py-1 text-xs border rounded-sm font-sans transition-all duration-200 ${t?"border-gold-antique bg-gold-antique/10 text-gold-radiant":"border-cosmos-border text-parchment-muted hover:border-gold-antique/40 hover:text-parchment"}`,children:t?"Motion: Calm":"Motion: Dynamic"})}),b.jsx("div",{className:"flex md:hidden items-center space-x-2",children:b.jsx("button",{onClick:()=>l(!o),className:"p-2 text-gold-light hover:text-gold-radiant focus:outline-none","aria-label":"Toggle Navigation Menu",children:o?b.jsx($g,{className:"w-6 h-6"}):b.jsx(Nw,{className:"w-6 h-6"})})})]}),o&&b.jsxs("div",{className:"md:hidden border-b border-gold-antique/20 bg-cosmos-abyss/98 backdrop-blur-xl px-4 py-6 space-y-3",children:[b.jsx("div",{className:"grid grid-cols-2 gap-2",children:u.map(h=>{const p=s===h.id;return b.jsxs("button",{onClick:()=>f(h.id),className:`flex items-center space-x-2 p-3 rounded border text-left transition-all ${p?"border-gold-antique bg-cosmos-surface text-gold-radiant":"border-cosmos-border/50 text-parchment-dark hover:border-gold-antique/30"}`,children:[b.jsx("span",{className:"text-gold-antique",children:h.icon}),b.jsxs("div",{children:[b.jsx("div",{className:"text-sm font-medium",children:h.label}),b.jsx("div",{className:"text-[10px] text-gold-deep",children:h.devanagari})]})]},h.id)})}),b.jsxs("div",{className:"pt-4 border-t border-cosmos-border flex justify-between items-center text-xs text-parchment-muted",children:[b.jsx("span",{children:"Accessibility"}),b.jsx("button",{onClick:r,className:"px-2 py-1 border border-cosmos-border rounded text-[11px] text-gold-light",children:t?"Motion: Calm":"Motion: Dynamic"})]})]})]})},Ql=({className:s="",variant:e="lotus",subtitle:t})=>b.jsxs("div",{className:`flex flex-col items-center justify-center my-8 ${s}`,children:[b.jsxs("div",{className:"flex items-center w-full max-w-md justify-center space-x-3",children:[b.jsx("div",{className:"h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-antique/30 to-gold-antique/80"}),b.jsx("div",{className:"flex items-center space-x-1.5 text-gold-antique px-2",children:e==="lotus"?b.jsxs("svg",{className:"w-5 h-5 text-gold-antique/90 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[b.jsx("path",{d:"M12 3c0 4.5-3 8-7 9 4.5 1 7 4.5 7 9 0-4.5 2.5-8 7-9-4-1-7-4.5-7-9z"}),b.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"})]}):b.jsx("div",{className:"w-2 h-2 rotate-45 border border-gold-antique/80 bg-cosmos-midnight"})}),b.jsx("div",{className:"h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-antique/30 to-gold-antique/80"})]}),t&&b.jsx("span",{className:"mt-2 text-xs uppercase tracking-[0.28em] text-gold-deep font-medium font-sans",children:t})]}),qw=()=>b.jsx("footer",{className:"relative z-10 border-t border-gold-antique/15 bg-cosmos-void/90 py-16 text-center text-sm",children:b.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[b.jsx(Ql,{variant:"lotus"}),b.jsx("p",{className:"font-rozha text-gold-radiant text-base md:text-lg mb-2",children:"ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥"}),b.jsxs("p",{className:"text-xs text-parchment-muted italic max-w-xl mx-auto mb-6",children:['"Lead me from the unreal to the real, lead me from darkness to light, lead me from mortality to immortality."',b.jsx("br",{}),b.jsx("span",{className:"not-italic text-[10px] text-gold-deep",children:"— Brihadaranyaka Upanishad 1.3.28"})]}),b.jsxs("div",{className:"bg-cosmos-midnight/60 border border-gold-antique/20 rounded-md p-4 mb-8 text-xs text-parchment-dark leading-relaxed",children:[b.jsx("span",{className:"text-gold-antique font-semibold block mb-1",children:"Authenticity & Tradition"}),"All narratives, characters, and philosophical treatises in Ananta are indexed faithfully from sacred scriptures including the ",b.jsx("em",{children:"Srimad Bhagavatam"}),", ",b.jsx("em",{children:"Vishnu Purana"}),", ",b.jsx("em",{children:"Valmiki Ramayana"}),", and the ",b.jsx("em",{children:"Upanishads"}),". Canonical shloka citations are preserved alongside genuine reflections."]}),b.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-xs text-parchment-muted mb-6",children:[b.jsx("span",{children:"ANANTA (अनन्त) — The Infinite Sanctuary"}),b.jsx("span",{children:"•"}),b.jsx("span",{children:"Crafted with Reverence"})]}),b.jsx("p",{className:"text-[11px] text-cosmos-border",children:"Preserving and contemplating timeless wisdom."})]})}),jw=({onEnter:s,onExploreStory:e})=>b.jsxs("section",{className:"relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-16",children:[b.jsxs("div",{className:"relative mb-8 group cursor-pointer",onClick:s,children:[b.jsx("div",{className:"absolute inset-0 rounded-full bg-gold-antique/10 blur-xl group-hover:bg-gold-antique/20 transition-all duration-700 animate-pulse-slow"}),b.jsx("div",{className:"relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-gold-antique/40 bg-cosmos-midnight/80 backdrop-blur-md flex items-center justify-center shadow-gold-glow group-hover:border-gold-antique transition-all duration-500",children:b.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold-antique/25 flex items-center justify-center",children:b.jsx("span",{className:"font-cinzel text-3xl sm:text-4xl text-sacred-gold font-bold select-none group-hover:scale-110 transition-transform duration-300",children:"अ"})})})]}),b.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[b.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-antique/25 bg-cosmos-surface/80 text-xs font-sans text-gold-light tracking-widest uppercase",children:[b.jsx(Dr,{className:"w-3.5 h-3.5 text-gold-antique"}),b.jsx("span",{children:"The Living Digital Universe of Hindu Wisdom"})]}),b.jsx("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-[0.18em] text-sacred-gold uppercase",children:"ANANTA"}),b.jsx("p",{className:"font-rozha text-gold-deep text-lg sm:text-xl tracking-wider",children:"अनन्तो वै पुरुषः । अनन्ता वै वेदाः ।"}),b.jsx("p",{className:"text-base sm:text-lg text-parchment-light max-w-2xl mx-auto font-cormorant italic leading-relaxed pt-2",children:'"Step into a timeless sanctuary where Puranic sagas, cosmic geography, and profound Vedic philosophies weave an interconnected living tapestry."'})]}),b.jsx(Ql,{variant:"lotus",className:"my-6"}),b.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 mt-2",children:[b.jsxs("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-sm tracking-widest uppercase shadow-gold-subtle hover:brightness-110 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center space-x-2",children:[b.jsx("span",{children:"Enter Katha Library"}),b.jsx(Qs,{className:"w-4 h-4 text-cosmos-void"})]}),b.jsxs("button",{onClick:()=>e("dhruva-maharaj"),className:"w-full sm:w-auto px-7 py-3.5 rounded-sm bg-cosmos-midnight/90 border border-gold-antique/30 text-gold-light hover:border-gold-antique hover:bg-cosmos-surface text-sm font-sans tracking-wide transition-all duration-300 flex items-center justify-center space-x-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-gold-antique animate-pulse"}),b.jsx("span",{children:"Interactive Showcase: Dhruva Maharaj"})]})]}),b.jsxs("button",{onClick:()=>{window.scrollTo({top:window.innerHeight*.8,behavior:"smooth"})},className:"mt-14 text-parchment-muted hover:text-gold-antique transition-colors flex flex-col items-center text-xs space-y-1.5","aria-label":"Scroll to exploration sections",children:[b.jsx("span",{className:"tracking-widest uppercase text-[10px] font-sans",children:"Scroll to Explore"}),b.jsx(yw,{className:"w-4 h-4 animate-bounce"})]})]}),Yw=({onNavigate:s})=>{const e=[{id:"katha",title:"Katha",devanagari:"कथा — The Story Sanctuary",tagline:"Living narratives from the Puranas & Itihasas",description:"Explore timeless chronicles of devotion, cosmic leelas, and spiritual transformations. From the unshakeable tapasya of Dhruva to the celestial wanderings of Narada Muni.",icon:b.jsx(Qs,{className:"w-6 h-6"}),scriptureCitations:"Bhagavatam • Vishnu Purana • Ramayana"},{id:"brahmanda",title:"Brahmanda",devanagari:"ब्रह्माण्ड — Cosmic Cartography",tagline:"The 14 Lokas, Yugas, and Cosmic Cycles",description:"Journey across the cosmic planes from Satyaloka to Patala. Understand Kalpas, Mahapralayas, and the timeless cycles of creation and dissolution.",icon:b.jsx(mf,{className:"w-6 h-6"}),scriptureCitations:"14 Lokas • Chaturyugas • Avatara Epochs"},{id:"tattva",title:"Tattva",devanagari:"तत्त्व — Philosophy & Truth",tagline:"Wisdom of the Upanishads & Bhagavad Gita",description:"Deconstruct eternal truths: Atman, Brahman, Maya, Karma, and Moksha. Clear, scripturally grounded definitions linked directly to living narratives.",icon:b.jsx(Dr,{className:"w-6 h-6"}),scriptureCitations:"Upanishads • Vedanta • Gita"},{id:"charitra",title:"Charitra",devanagari:"चरित्र — Sacred Lineages",tagline:"Deities, Rishis, Bhaktas & Kings",description:"Trace the lineages, spiritual genealogies, and profound relationships between avatars, sages, and devotees in an interactive web of sacred connection.",icon:b.jsx(vf,{className:"w-6 h-6"}),scriptureCitations:"Parampara • Sages • Kings • Avatars"},{id:"granth",title:"My Granth",devanagari:"मम ग्रन्थः — Personal Wisdom Archive",tagline:"Your living notebook of scriptural realizations",description:"A quiet, dedicated sanctuary to record verses, personal contemplations, reading progress, and spiritual insights as you journey through the texts.",icon:b.jsx(gf,{className:"w-6 h-6"}),scriptureCitations:"Personal Journal • Bookmarks • Reflections"}];return b.jsxs("section",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[b.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[b.jsx("span",{className:"text-xs font-sans tracking-[0.3em] uppercase text-gold-deep block mb-2",children:"Sanctuaries of Wisdom"}),b.jsx("h2",{className:"text-2xl sm:text-3xl font-cinzel text-sacred-gold font-bold tracking-wider mb-3",children:"Five Gateways to the Infinite"}),b.jsx("p",{className:"text-sm text-parchment-dark leading-relaxed",children:"Choose a realm to begin your exploration. Each gateway opens a deep, interconnected dimension of ancient knowledge."})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((t,r)=>b.jsxs("div",{onClick:()=>s(t.id),role:"button",tabIndex:0,onKeyDown:o=>o.key==="Enter"&&s(t.id),className:`group relative p-7 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/20 hover:border-gold-antique/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-subtle flex flex-col justify-between cursor-pointer ${r===4?"md:col-span-2 lg:col-span-1":""}`,children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between mb-4",children:[b.jsx("div",{className:"w-12 h-12 rounded-sm border border-gold-antique/30 bg-cosmos-surface flex items-center justify-center text-gold-radiant group-hover:border-gold-antique group-hover:scale-105 transition-all",children:t.icon}),b.jsx("span",{className:"text-xs font-rozha text-gold-antique/70",children:t.devanagari})]}),b.jsx("h3",{className:"text-xl font-cinzel font-bold text-parchment-light group-hover:text-gold-light transition-colors mb-1",children:t.title}),b.jsx("p",{className:"text-xs text-gold-deep font-sans font-medium mb-3",children:t.tagline}),b.jsx("p",{className:"text-xs text-parchment-dark leading-relaxed mb-6",children:t.description})]}),b.jsxs("div",{className:"pt-4 border-t border-cosmos-border/70 flex items-center justify-between text-xs",children:[b.jsx("span",{className:"text-[11px] text-parchment-muted font-sans",children:t.scriptureCitations}),b.jsxs("span",{className:"flex items-center space-x-1 text-gold-antique group-hover:text-gold-radiant group-hover:translate-x-1 transition-all",children:[b.jsx("span",{className:"font-sans font-medium text-[11px]",children:"Enter"}),b.jsx(pf,{className:"w-3.5 h-3.5"})]})]})]},t.id))})]})},$w=()=>b.jsx("section",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12",children:b.jsxs("div",{className:"relative rounded-sm bg-gradient-to-b from-cosmos-surface/90 to-cosmos-midnight/80 border border-gold-antique/25 p-8 sm:p-10 shadow-gold-subtle backdrop-blur-md overflow-hidden",children:[b.jsx("div",{className:"absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-antique/50"}),b.jsx("div",{className:"absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-antique/50"}),b.jsx("div",{className:"absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-antique/50"}),b.jsx("div",{className:"absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-antique/50"}),b.jsxs("div",{className:"text-center",children:[b.jsxs("div",{className:"inline-flex items-center gap-1.5 text-xs text-gold-deep font-sans tracking-[0.25em] uppercase mb-4",children:[b.jsx(Dr,{className:"w-3.5 h-3.5 text-gold-antique"}),b.jsx("span",{children:"Daily Shloka Contemplation"})]}),b.jsxs("blockquote",{className:"font-rozha text-xl sm:text-2xl text-sacred-gold leading-relaxed mb-4",children:['"काचात् मूल्यं यथा प्राप्य मणिरत्ने विलोकिते ।',b.jsx("br",{}),'तथा मां भगवन् लब्ध्वा कृतकृत्योऽस्मि सर्वथा ॥"']}),b.jsx("p",{className:"font-cormorant text-base sm:text-lg text-parchment-light italic max-w-2xl mx-auto leading-relaxed mb-4",children:'"Searching for mere broken pieces of glass, I have instead uncovered the most radiant diamond. Beholding You, O Supreme Lord, I am fully satisfied, and desire nothing more."'}),b.jsx(Ql,{variant:"simple",className:"my-4"}),b.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 text-xs text-parchment-muted",children:[b.jsx("span",{className:"font-sans font-semibold text-gold-antique",children:"Dhruva Maharaj to Lord Vishnu"}),b.jsx("span",{children:"•"}),b.jsx("span",{className:"font-mono text-[11px] text-parchment-dark",children:"Hari-bhakti-sudhodaya 7.28"})]})]})]})}),Kw=({onNavigate:s,onExploreStory:e})=>b.jsxs("div",{className:"relative",children:[b.jsx(jw,{onEnter:()=>s("katha"),onExploreStory:e}),b.jsx($w,{}),b.jsx(Yw,{onNavigate:s})]}),Ga=({title:s,devanagari:e,tagline:t,description:r,onBackToHome:o,actionButton:l})=>b.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-4 py-20 text-center",children:[b.jsxs("button",{onClick:o,className:"inline-flex items-center space-x-2 text-xs font-sans text-parchment-muted hover:text-gold-antique transition-colors mb-10",children:[b.jsx(Ew,{className:"w-4 h-4"}),b.jsx("span",{children:"Return to Pravesha (Home)"})]}),b.jsxs("div",{className:"p-8 sm:p-12 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/20 backdrop-blur-md",children:[b.jsx("span",{className:"text-xs font-sans tracking-[0.3em] uppercase text-gold-deep block mb-2",children:"Sanctuary in Development (Phase 2 Roadmap)"}),b.jsx("h1",{className:"text-3xl sm:text-4xl font-cinzel text-sacred-gold font-bold mb-2",children:s}),b.jsx("p",{className:"font-rozha text-gold-radiant text-lg mb-4",children:e}),b.jsx(Ql,{variant:"lotus"}),b.jsxs("p",{className:"text-base text-parchment-light font-cormorant italic max-w-xl mx-auto mb-4",children:['"',t,'"']}),b.jsx("p",{className:"text-xs text-parchment-muted max-w-lg mx-auto leading-relaxed mb-8",children:r}),b.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[b.jsx("button",{onClick:o,className:"px-6 py-2.5 rounded-sm border border-gold-antique/30 text-gold-light hover:border-gold-antique text-xs tracking-wider uppercase font-sans transition-all",children:"Explore Gateways"}),l&&b.jsxs("button",{onClick:l.onClick,className:"px-6 py-2.5 rounded-sm bg-gold-antique text-cosmos-void font-bold text-xs tracking-wider uppercase font-sans hover:brightness-110 transition-all flex items-center space-x-2",children:[b.jsx(Dr,{className:"w-3.5 h-3.5"}),b.jsx("span",{children:l.label})]})]})]})]}),Zw=()=>{const[s,e]=Mt.useState("cinematic-prologue"),[t,r]=Mt.useState("home"),[o,l]=Mt.useState(!1),u=p=>{r(p),e("section-view"),window.scrollTo({top:0,behavior:o?"auto":"smooth"})},f=p=>{r(p),e("section-view"),window.scrollTo({top:0,behavior:"smooth"})},h=p=>{r("katha"),e("section-view"),window.scrollTo({top:0,behavior:"smooth"})};return s==="cinematic-prologue"?b.jsx(Gw,{onEnterUniverse:()=>e("cosmic-gateway")}):s==="cosmic-gateway"?b.jsx(Vw,{onSelectGateway:f,onReturnToPrologue:()=>e("cinematic-prologue")}):b.jsxs("div",{className:`min-h-screen bg-cosmos-void text-parchment relative ${o?"motion-reduce":""}`,children:[b.jsx(Ww,{density:o?80:150,speed:o?.05:.18}),b.jsx(Xw,{activeSection:t,onNavigate:u,reducedMotion:o,onToggleReducedMotion:()=>l(!o)}),b.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-4 pt-4 flex justify-between items-center",children:[b.jsx("button",{onClick:()=>e("cosmic-gateway"),className:"text-xs font-sans px-3.5 py-1.5 rounded-sm border border-gold-antique/50 bg-cosmos-midnight/90 text-gold-radiant hover:border-gold-antique hover:shadow-gold-subtle transition-all flex items-center space-x-1.5",children:b.jsx("span",{children:"✦ Return to Cosmic Gateway"})}),b.jsx("button",{onClick:()=>e("cinematic-prologue"),className:"text-xs font-sans px-3 py-1.5 rounded-sm border border-cosmos-border bg-cosmos-abyss/80 text-parchment-muted hover:text-gold-light transition-all",children:b.jsx("span",{children:"Re-experience Prologue"})})]}),b.jsxs("main",{className:"relative z-10 min-h-[calc(100vh-160px)]",children:[t==="home"&&b.jsx(Kw,{onNavigate:u,onExploreStory:h}),t==="katha"&&b.jsx(Ga,{section:"katha",title:"Katha Library",devanagari:"कथा — The Sacred Story Sanctuary",tagline:"Puranic narratives, canonical verses, and timeless allegories.",description:"Explore sacred stories from Srimad Bhagavatam, Vishnu Purana, and Ramayana. Filter by scripture, theme, and character.",onBackToHome:()=>e("cosmic-gateway")}),t==="brahmanda"&&b.jsx(Ga,{section:"brahmanda",title:"Brahmanda",devanagari:"ब्रह्माण्ड — Cosmic Cartography",tagline:"The 14 Lokas, Mahapralaya, and the cycles of cosmic time.",description:"Interactive exploration of the upper realms (Satyaloka to Bhuvarloka) and lower realms, yuga cycles, and creation.",onBackToHome:()=>e("cosmic-gateway")}),t==="tattva"&&b.jsx(Ga,{section:"tattva",title:"Tattva",devanagari:"तत्त्व — Philosophy & Direct Truth",tagline:"Upanishadic insights on Atman, Brahman, Maya, and Karma.",description:"Foundational philosophical concepts with direct scriptural references and their manifestations in puranic stories.",onBackToHome:()=>e("cosmic-gateway")}),t==="charitra"&&b.jsx(Ga,{section:"charitra",title:"Charitra",devanagari:"चरित्र — Characters & Divine Lineages",tagline:"Genealogies of Devas, Rishis, Bhaktas, and Kings.",description:"Character dossiers and relational lineage graph cross-linked to every story.",onBackToHome:()=>e("cosmic-gateway")}),t==="granth"&&b.jsx(Ga,{section:"granth",title:"My Granth",devanagari:"मम ग्रन्थः — Personal Wisdom Archive",tagline:"Your digital notebook for scriptural study and reflections.",description:"Browser-backed personal journal, saved citations, bookmarks, and contemplation trackers.",onBackToHome:()=>e("cosmic-gateway")})]}),b.jsx(qw,{})]})};zv.createRoot(document.getElementById("root")).render(b.jsx(Dv.StrictMode,{children:b.jsx(Zw,{})}));
