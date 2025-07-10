(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function vp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var af={exports:{}},ol={},lf={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function z1(){if(wy)return Re;wy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=I&&U[I]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function N(U,Y,ge){this.props=U,this.context=Y,this.refs=M,this.updater=ge||A}N.prototype.isReactComponent={},N.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},N.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function V(){}V.prototype=N.prototype;function B(U,Y,ge){this.props=U,this.context=Y,this.refs=M,this.updater=ge||A}var q=B.prototype=new V;q.constructor=B,b(q,N.prototype),q.isPureReactComponent=!0;var K=Array.isArray,J=Object.prototype.hasOwnProperty,Q={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Y,ge){var Ie,Ce={},Pe=null,Ne=null;if(Y!=null)for(Ie in Y.ref!==void 0&&(Ne=Y.ref),Y.key!==void 0&&(Pe=""+Y.key),Y)J.call(Y,Ie)&&!E.hasOwnProperty(Ie)&&(Ce[Ie]=Y[Ie]);var be=arguments.length-2;if(be===1)Ce.children=ge;else if(1<be){for(var Ve=Array(be),at=0;at<be;at++)Ve[at]=arguments[at+2];Ce.children=Ve}if(U&&U.defaultProps)for(Ie in be=U.defaultProps,be)Ce[Ie]===void 0&&(Ce[Ie]=be[Ie]);return{$$typeof:n,type:U,key:Pe,ref:Ne,props:Ce,_owner:Q.current}}function x(U,Y){return{$$typeof:n,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function D(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ge){return Y[ge]})}var j=/\/+/g;function k(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):Y.toString(36)}function Ue(U,Y,ge,Ie,Ce){var Pe=typeof U;(Pe==="undefined"||Pe==="boolean")&&(U=null);var Ne=!1;if(U===null)Ne=!0;else switch(Pe){case"string":case"number":Ne=!0;break;case"object":switch(U.$$typeof){case n:case e:Ne=!0}}if(Ne)return Ne=U,Ce=Ce(Ne),U=Ie===""?"."+k(Ne,0):Ie,K(Ce)?(ge="",U!=null&&(ge=U.replace(j,"$&/")+"/"),Ue(Ce,Y,ge,"",function(at){return at})):Ce!=null&&(R(Ce)&&(Ce=x(Ce,ge+(!Ce.key||Ne&&Ne.key===Ce.key?"":(""+Ce.key).replace(j,"$&/")+"/")+U)),Y.push(Ce)),1;if(Ne=0,Ie=Ie===""?".":Ie+":",K(U))for(var be=0;be<U.length;be++){Pe=U[be];var Ve=Ie+k(Pe,be);Ne+=Ue(Pe,Y,ge,Ve,Ce)}else if(Ve=S(U),typeof Ve=="function")for(U=Ve.call(U),be=0;!(Pe=U.next()).done;)Pe=Pe.value,Ve=Ie+k(Pe,be++),Ne+=Ue(Pe,Y,ge,Ve,Ce);else if(Pe==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ne}function Ye(U,Y,ge){if(U==null)return U;var Ie=[],Ce=0;return Ue(U,Ie,"","",function(Pe){return Y.call(ge,Pe,Ce++)}),Ie}function We(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(ge){(U._status===0||U._status===-1)&&(U._status=1,U._result=ge)},function(ge){(U._status===0||U._status===-1)&&(U._status=2,U._result=ge)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var Oe={current:null},ie={transition:null},de={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Q};function le(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Ye,forEach:function(U,Y,ge){Ye(U,function(){Y.apply(this,arguments)},ge)},count:function(U){var Y=0;return Ye(U,function(){Y++}),Y},toArray:function(U){return Ye(U,function(Y){return Y})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Re.Component=N,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=B,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=le,Re.cloneElement=function(U,Y,ge){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ie=b({},U.props),Ce=U.key,Pe=U.ref,Ne=U._owner;if(Y!=null){if(Y.ref!==void 0&&(Pe=Y.ref,Ne=Q.current),Y.key!==void 0&&(Ce=""+Y.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(Ve in Y)J.call(Y,Ve)&&!E.hasOwnProperty(Ve)&&(Ie[Ve]=Y[Ve]===void 0&&be!==void 0?be[Ve]:Y[Ve])}var Ve=arguments.length-2;if(Ve===1)Ie.children=ge;else if(1<Ve){be=Array(Ve);for(var at=0;at<Ve;at++)be[at]=arguments[at+2];Ie.children=be}return{$$typeof:n,type:U.type,key:Ce,ref:Pe,props:Ie,_owner:Ne}},Re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Re.createElement=T,Re.createFactory=function(U){var Y=T.bind(null,U);return Y.type=U,Y},Re.createRef=function(){return{current:null}},Re.forwardRef=function(U){return{$$typeof:f,render:U}},Re.isValidElement=R,Re.lazy=function(U){return{$$typeof:w,_payload:{_status:-1,_result:U},_init:We}},Re.memo=function(U,Y){return{$$typeof:y,type:U,compare:Y===void 0?null:Y}},Re.startTransition=function(U){var Y=ie.transition;ie.transition={};try{U()}finally{ie.transition=Y}},Re.unstable_act=le,Re.useCallback=function(U,Y){return Oe.current.useCallback(U,Y)},Re.useContext=function(U){return Oe.current.useContext(U)},Re.useDebugValue=function(){},Re.useDeferredValue=function(U){return Oe.current.useDeferredValue(U)},Re.useEffect=function(U,Y){return Oe.current.useEffect(U,Y)},Re.useId=function(){return Oe.current.useId()},Re.useImperativeHandle=function(U,Y,ge){return Oe.current.useImperativeHandle(U,Y,ge)},Re.useInsertionEffect=function(U,Y){return Oe.current.useInsertionEffect(U,Y)},Re.useLayoutEffect=function(U,Y){return Oe.current.useLayoutEffect(U,Y)},Re.useMemo=function(U,Y){return Oe.current.useMemo(U,Y)},Re.useReducer=function(U,Y,ge){return Oe.current.useReducer(U,Y,ge)},Re.useRef=function(U){return Oe.current.useRef(U)},Re.useState=function(U){return Oe.current.useState(U)},Re.useSyncExternalStore=function(U,Y,ge){return Oe.current.useSyncExternalStore(U,Y,ge)},Re.useTransition=function(){return Oe.current.useTransition()},Re.version="18.3.1",Re}var Ey;function Nl(){return Ey||(Ey=1,lf.exports=z1()),lf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function $1(){if(Ty)return ol;Ty=1;var n=Nl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var w,I={},S=null,A=null;y!==void 0&&(S=""+y),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(A=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(I[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)I[w]===void 0&&(I[w]=g[w]);return{$$typeof:e,type:f,key:S,ref:A,props:I,_owner:o.current}}return ol.Fragment=t,ol.jsx=h,ol.jsxs=h,ol}var Sy;function B1(){return Sy||(Sy=1,af.exports=$1()),af.exports}var L=B1(),X=Nl();const wn=vp(X);var uc={},uf={exports:{}},ln={},cf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function H1(){return Iy||(Iy=1,function(n){function e(ie,de){var le=ie.length;ie.push(de);e:for(;0<le;){var U=le-1>>>1,Y=ie[U];if(0<o(Y,de))ie[U]=de,ie[le]=Y,le=U;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var de=ie[0],le=ie.pop();if(le!==de){ie[0]=le;e:for(var U=0,Y=ie.length,ge=Y>>>1;U<ge;){var Ie=2*(U+1)-1,Ce=ie[Ie],Pe=Ie+1,Ne=ie[Pe];if(0>o(Ce,le))Pe<Y&&0>o(Ne,Ce)?(ie[U]=Ne,ie[Pe]=le,U=Pe):(ie[U]=Ce,ie[Ie]=le,U=Ie);else if(Pe<Y&&0>o(Ne,le))ie[U]=Ne,ie[Pe]=le,U=Pe;else break e}}return de}function o(ie,de){var le=ie.sortIndex-de.sortIndex;return le!==0?le:ie.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],y=[],w=1,I=null,S=3,A=!1,b=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(ie){for(var de=t(y);de!==null;){if(de.callback===null)i(y);else if(de.startTime<=ie)i(y),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(y)}}function K(ie){if(M=!1,q(ie),!b)if(t(g)!==null)b=!0,We(J);else{var de=t(y);de!==null&&Oe(K,de.startTime-ie)}}function J(ie,de){b=!1,M&&(M=!1,V(T),T=-1),A=!0;var le=S;try{for(q(de),I=t(g);I!==null&&(!(I.expirationTime>de)||ie&&!D());){var U=I.callback;if(typeof U=="function"){I.callback=null,S=I.priorityLevel;var Y=U(I.expirationTime<=de);de=n.unstable_now(),typeof Y=="function"?I.callback=Y:I===t(g)&&i(g),q(de)}else i(g);I=t(g)}if(I!==null)var ge=!0;else{var Ie=t(y);Ie!==null&&Oe(K,Ie.startTime-de),ge=!1}return ge}finally{I=null,S=le,A=!1}}var Q=!1,E=null,T=-1,x=5,R=-1;function D(){return!(n.unstable_now()-R<x)}function j(){if(E!==null){var ie=n.unstable_now();R=ie;var de=!0;try{de=E(!0,ie)}finally{de?k():(Q=!1,E=null)}}else Q=!1}var k;if(typeof B=="function")k=function(){B(j)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Ye=Ue.port2;Ue.port1.onmessage=j,k=function(){Ye.postMessage(null)}}else k=function(){N(j,0)};function We(ie){E=ie,Q||(Q=!0,k())}function Oe(ie,de){T=N(function(){ie(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){b||A||(b=!0,We(J))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ie){switch(S){case 1:case 2:case 3:var de=3;break;default:de=S}var le=S;S=de;try{return ie()}finally{S=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,de){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var le=S;S=ie;try{return de()}finally{S=le}},n.unstable_scheduleCallback=function(ie,de,le){var U=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,ie){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=le+Y,ie={id:w++,callback:de,priorityLevel:ie,startTime:le,expirationTime:Y,sortIndex:-1},le>U?(ie.sortIndex=le,e(y,ie),t(g)===null&&ie===t(y)&&(M?(V(T),T=-1):M=!0,Oe(K,le-U))):(ie.sortIndex=Y,e(g,ie),b||A||(b=!0,We(J))),ie},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ie){var de=S;return function(){var le=S;S=de;try{return ie.apply(this,arguments)}finally{S=le}}}}(hf)),hf}var Cy;function q1(){return Cy||(Cy=1,cf.exports=H1()),cf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function W1(){if(xy)return ln;xy=1;var n=Nl(),e=q1();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function S(r){return g.call(I,r)?!0:g.call(w,r)?!1:y.test(r)?I[r]=!0:(w[r]=!0,!1)}function A(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,c){if(s===null||typeof s>"u"||A(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,a,c,d,m,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=_}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];N[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(V,B);N[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(V,B);N[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(V,B);N[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function q(r,s,a,c){var d=N.hasOwnProperty(s)?N[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var K=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),Q=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),D=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function de(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,U;function Y(r){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var ge=!1;function Ie(r,s){if(!r||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var c=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){c=W}r.call(s.prototype)}else{try{throw Error()}catch(W){c=W}r()}}catch(W){if(W&&c&&typeof W.stack=="string"){for(var d=W.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,P=m.length-1;1<=_&&0<=P&&d[_]!==m[P];)P--;for(;1<=_&&0<=P;_--,P--)if(d[_]!==m[P]){if(_!==1||P!==1)do if(_--,P--,0>P||d[_]!==m[P]){var O=`
`+d[_].replace(" at new "," at ");return r.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",r.displayName)),O}while(1<=_&&0<=P);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Y(r):""}function Ce(r){switch(r.tag){case 5:return Y(r.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case E:return"Fragment";case Q:return"Portal";case x:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case Ue:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ye:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case We:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}function Ne(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ve(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function at(r){var s=Ve(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Zt(r){r._valueTracker||(r._valueTracker=at(r))}function Gt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Ve(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Gr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function qi(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ds(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=be(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function da(r,s){s=s.checked,s!=null&&q(r,"checked",s,!1)}function fa(r,s){da(r,s);var a=be(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,a):s.hasOwnProperty("defaultValue")&&Os(r,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Kl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Os(r,s,a){(s!=="number"||Gr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var _r=Array.isArray;function wr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+be(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function pa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ls(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(_r(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:be(a)}}function Vs(r,s){var a=be(s.value),c=be(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ma(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function wt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?wt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Er,ga=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Er.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Kr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gi=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(r){Gi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Wi[s]=Wi[r]})});function ya(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Wi.hasOwnProperty(r)&&Wi[r]?(""+s).trim():s+"px"}function va(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ya(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var _a=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(r,s){if(s){if(_a[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ea(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Fs=null,En=null,Qn=null;function js(r){if(r=qa(r)){if(typeof Fs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Iu(s),Fs(r.stateNode,r.type,s))}}function Yn(r){En?Qn?Qn.push(r):Qn=[r]:En=r}function Ta(){if(En){var r=En,s=Qn;if(Qn=En=null,js(r),s)for(r=0;r<s.length;r++)js(s[r])}}function Qi(r,s){return r(s)}function Sa(){}var Tr=!1;function Ia(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return Qi(r,s,a)}finally{Tr=!1,(En!==null||Qn!==null)&&(Sa(),Ta())}}function ut(r,s){var a=r.stateNode;if(a===null)return null;var c=Iu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Us=!1;if(f)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Us=!1}function Yi(r,s,a,c,d,m,_,P,O){var W=Array.prototype.slice.call(arguments,3);try{s.apply(a,W)}catch(te){this.onError(te)}}var Xi=!1,zs=null,Dn=!1,Ca=null,Oh={onError:function(r){Xi=!0,zs=r}};function $s(r,s,a,c,d,m,_,P,O){Xi=!1,zs=null,Yi.apply(Oh,arguments)}function Ql(r,s,a,c,d,m,_,P,O){if($s.apply(this,arguments),Xi){if(Xi){var W=zs;Xi=!1,zs=null}else throw Error(t(198));Dn||(Dn=!0,Ca=W)}}function On(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ln(r){if(On(r)!==r)throw Error(t(188))}function Yl(r){var s=r.alternate;if(!s){if(s=On(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Ln(d),r;if(m===c)return Ln(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,P=d.child;P;){if(P===a){_=!0,a=d,c=m;break}if(P===c){_=!0,c=d,a=m;break}P=P.sibling}if(!_){for(P=m.child;P;){if(P===a){_=!0,a=m,c=d;break}if(P===c){_=!0,c=m,a=d;break}P=P.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function xa(r){return r=Yl(r),r!==null?Bs(r):null}function Bs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bs(r);if(s!==null)return s;r=r.sibling}return null}var Hs=e.unstable_scheduleCallback,Pa=e.unstable_cancelCallback,Xl=e.unstable_shouldYield,Lh=e.unstable_requestPaint,Ke=e.unstable_now,Jl=e.unstable_getCurrentPriorityLevel,Zi=e.unstable_ImmediatePriority,Qr=e.unstable_UserBlockingPriority,Tn=e.unstable_NormalPriority,ka=e.unstable_LowPriority,Zl=e.unstable_IdlePriority,es=null,hn=null;function eu(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(es,r,void 0,(r.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:nu,Ra=Math.log,tu=Math.LN2;function nu(r){return r>>>=0,r===0?32:31-(Ra(r)/tu|0)|0}var qs=64,Ws=4194304;function Yr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ts(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,_=a&268435455;if(_!==0){var P=_&~d;P!==0?c=Yr(P):(m&=_,m!==0&&(c=Yr(m)))}else _=a&~d,_!==0?c=Yr(_):m!==0&&(c=Yr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Kt(s),d=1<<a,c|=r[a],s&=~d;return c}function Vh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var _=31-Kt(m),P=1<<_,O=d[_];O===-1?((P&a)===0||(P&c)!==0)&&(d[_]=Vh(P,s)):O<=s&&(r.expiredLanes|=P),m&=~P}}function dn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ns(){var r=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),r}function Xr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Jr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Kt(s),r[s]=a}function Ge(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Kt(a),m=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Zr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Kt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Le=0;function ei(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ru,Gs,iu,su,ou,Aa=!1,Xn=[],Dt=null,Vn=null,Mn=null,ti=new Map,Sn=new Map,Jn=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(r,s){switch(r){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ti.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function en(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=qa(s),s!==null&&Gs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Fh(r,s,a,c,d){switch(s){case"focusin":return Dt=en(Dt,r,s,a,c,d),!0;case"dragenter":return Vn=en(Vn,r,s,a,c,d),!0;case"mouseover":return Mn=en(Mn,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return ti.set(m,en(ti.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Sn.set(m,en(Sn.get(m)||null,r,s,a,c,d)),!0}return!1}function lu(r){var s=as(r.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=Ji(a),s!==null){r.blockedOn=s,ou(r.priority,function(){iu(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ir(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ks(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Ki=c,a.target.dispatchEvent(c),Ki=null}else return s=qa(a),s!==null&&Gs(s),r.blockedOn=a,!1;s.shift()}return!0}function rs(r,s,a){Ir(r)&&a.delete(s)}function uu(){Aa=!1,Dt!==null&&Ir(Dt)&&(Dt=null),Vn!==null&&Ir(Vn)&&(Vn=null),Mn!==null&&Ir(Mn)&&(Mn=null),ti.forEach(rs),Sn.forEach(rs)}function Fn(r,s){r.blockedOn===s&&(r.blockedOn=null,Aa||(Aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uu)))}function jn(r){function s(d){return Fn(d,r)}if(0<Xn.length){Fn(Xn[0],r);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Dt!==null&&Fn(Dt,r),Vn!==null&&Fn(Vn,r),Mn!==null&&Fn(Mn,r),ti.forEach(s),Sn.forEach(s),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)lu(a),a.blockedOn===null&&Jn.shift()}var Cr=K.ReactCurrentBatchConfig,ni=!0;function et(r,s,a,c){var d=Le,m=Cr.transition;Cr.transition=null;try{Le=1,ba(r,s,a,c)}finally{Le=d,Cr.transition=m}}function jh(r,s,a,c){var d=Le,m=Cr.transition;Cr.transition=null;try{Le=4,ba(r,s,a,c)}finally{Le=d,Cr.transition=m}}function ba(r,s,a,c){if(ni){var d=Ks(r,s,a,c);if(d===null)Yh(r,s,c,is,a),au(r,c);else if(Fh(d,r,s,a,c))c.stopPropagation();else if(au(r,c),s&4&&-1<Mh.indexOf(r)){for(;d!==null;){var m=qa(d);if(m!==null&&ru(m),m=Ks(r,s,a,c),m===null&&Yh(r,s,c,is,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Yh(r,s,c,null,a)}}var is=null;function Ks(r,s,a,c){if(is=null,r=Ms(c),r=as(r),r!==null)if(s=On(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ji(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return is=r,null}function Na(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jl()){case Zi:return 1;case Qr:return 4;case Tn:case ka:return 16;case Zl:return 536870912;default:return 16}default:return 16}}var fn=null,Qs=null,tn=null;function Da(){if(tn)return tn;var r,s=Qs,a=s.length,c,d="value"in fn?fn.value:fn.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var _=a-r;for(c=1;c<=_&&s[a-c]===d[m-c];c++);return tn=d.slice(r,1<c?1-c:void 0)}function Ys(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function Oa(){return!1}function Ot(r){function s(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(a=r[P],this[P]=a?a(m):m[P]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:Oa,this.isPropagationStopped=Oa,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Ot(Un),er=le({},Un,{view:0,detail:0}),Uh=Ot(er),Js,xr,ri,ss=le({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ri&&(ri&&r.type==="mousemove"?(Js=r.screenX-ri.screenX,xr=r.screenY-ri.screenY):xr=Js=0,ri=r),Js)},movementY:function(r){return"movementY"in r?r.movementY:xr}}),Zs=Ot(ss),La=le({},ss,{dataTransfer:0}),cu=Ot(La),eo=le({},er,{relatedTarget:0}),to=Ot(eo),hu=le({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Pr=Ot(hu),du=le({},Un,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),fu=Ot(du),pu=le({},Un,{data:0}),Va=Ot(pu),no={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=mu[r])?!!s[r]:!1}function tr(){return gu}var u=le({},er,{key:function(r){if(r.key){var s=no[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ys(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(r){return r.type==="keypress"?Ys(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ys(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Ot(u),v=le({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C=Ot(v),z=le({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),G=Ot(z),se=le({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Ot(se),Tt=le({},ss,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Ot(Tt),Pt=[9,13,27,32],pt=f&&"CompositionEvent"in window,In=null;f&&"documentMode"in document&&(In=document.documentMode);var pn=f&&"TextEvent"in window&&!In,os=f&&(!pt||In&&8<In&&11>=In),ro=" ",pm=!1;function mm(r,s){switch(r){case"keyup":return Pt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function FE(r,s){switch(r){case"compositionend":return gm(s);case"keypress":return s.which!==32?null:(pm=!0,ro);case"textInput":return r=s.data,r===ro&&pm?null:r;default:return null}}function jE(r,s){if(io)return r==="compositionend"||!pt&&mm(r,s)?(r=Da(),tn=Qs=fn=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return os&&s.locale!=="ko"?null:s.data;default:return null}}var UE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!UE[r.type]:s==="textarea"}function vm(r,s,a,c){Yn(c),s=Eu(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ma=null,Fa=null;function zE(r){Vm(r,0)}function yu(r){var s=uo(r);if(Gt(s))return r}function $E(r,s){if(r==="change")return s}var _m=!1;if(f){var zh;if(f){var $h="oninput"in document;if(!$h){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),$h=typeof wm.oninput=="function"}zh=$h}else zh=!1;_m=zh&&(!document.documentMode||9<document.documentMode)}function Em(){Ma&&(Ma.detachEvent("onpropertychange",Tm),Fa=Ma=null)}function Tm(r){if(r.propertyName==="value"&&yu(Fa)){var s=[];vm(s,Fa,r,Ms(r)),Ia(zE,s)}}function BE(r,s,a){r==="focusin"?(Em(),Ma=s,Fa=a,Ma.attachEvent("onpropertychange",Tm)):r==="focusout"&&Em()}function HE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return yu(Fa)}function qE(r,s){if(r==="click")return yu(s)}function WE(r,s){if(r==="input"||r==="change")return yu(s)}function GE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var zn=typeof Object.is=="function"?Object.is:GE;function ja(r,s){if(zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!zn(r[d],s[d]))return!1}return!0}function Sm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Im(r,s){var a=Sm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sm(a)}}function Cm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Cm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function xm(){for(var r=window,s=Gr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Gr(r.document)}return s}function Bh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function KE(r){var s=xm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Cm(a.ownerDocument.documentElement,a)){if(c!==null&&Bh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=Im(a,m);var _=Im(a,c);d&&_&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(s),r.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var QE=f&&"documentMode"in document&&11>=document.documentMode,so=null,Hh=null,Ua=null,qh=!1;function Pm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qh||so==null||so!==Gr(c)||(c=so,"selectionStart"in c&&Bh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ua&&ja(Ua,c)||(Ua=c,c=Eu(Hh,"onSelect"),0<c.length&&(s=new Xs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=so)))}function vu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var oo={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},Wh={},km={};f&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function _u(r){if(Wh[r])return Wh[r];if(!oo[r])return r;var s=oo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in km)return Wh[r]=s[a];return r}var Rm=_u("animationend"),Am=_u("animationiteration"),bm=_u("animationstart"),Nm=_u("transitionend"),Dm=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(r,s){Dm.set(r,s),l(s,[r])}for(var Gh=0;Gh<Om.length;Gh++){var Kh=Om[Gh],YE=Kh.toLowerCase(),XE=Kh[0].toUpperCase()+Kh.slice(1);ii(YE,"on"+XE)}ii(Rm,"onAnimationEnd"),ii(Am,"onAnimationIteration"),ii(bm,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Nm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Lm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Ql(c,s,void 0,r),r.currentTarget=null}function Vm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var _=c.length-1;0<=_;_--){var P=c[_],O=P.instance,W=P.currentTarget;if(P=P.listener,O!==m&&d.isPropagationStopped())break e;Lm(d,P,W),m=O}else for(_=0;_<c.length;_++){if(P=c[_],O=P.instance,W=P.currentTarget,P=P.listener,O!==m&&d.isPropagationStopped())break e;Lm(d,P,W),m=O}}}if(Dn)throw r=Ca,Dn=!1,Ca=null,r}function Xe(r,s){var a=s[nd];a===void 0&&(a=s[nd]=new Set);var c=r+"__bubble";a.has(c)||(Mm(s,r,2,!1),a.add(c))}function Qh(r,s,a){var c=0;s&&(c|=4),Mm(a,r,c,s)}var wu="_reactListening"+Math.random().toString(36).slice(2);function $a(r){if(!r[wu]){r[wu]=!0,i.forEach(function(a){a!=="selectionchange"&&(JE.has(a)||Qh(a,!1,r),Qh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[wu]||(s[wu]=!0,Qh("selectionchange",!1,s))}}function Mm(r,s,a,c){switch(Na(s)){case 1:var d=et;break;case 4:d=jh;break;default:d=ba}a=d.bind(null,s,a,r),d=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Yh(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var P=c.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var O=_.tag;if((O===3||O===4)&&(O=_.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;_=_.return}for(;P!==null;){if(_=as(P),_===null)return;if(O=_.tag,O===5||O===6){c=m=_;continue e}P=P.parentNode}}c=c.return}Ia(function(){var W=m,te=Ms(a),ne=[];e:{var ee=Dm.get(r);if(ee!==void 0){var ue=Xs,fe=r;switch(r){case"keypress":if(Ys(a)===0)break e;case"keydown":case"keyup":ue=p;break;case"focusin":fe="focus",ue=to;break;case"focusout":fe="blur",ue=to;break;case"beforeblur":case"afterblur":ue=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=G;break;case Rm:case Am:case bm:ue=Pr;break;case Nm:ue=qe;break;case"scroll":ue=Uh;break;case"wheel":ue=Me;break;case"copy":case"cut":case"paste":ue=fu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=C}var pe=(s&4)!==0,ct=!pe&&r==="scroll",$=pe?ee!==null?ee+"Capture":null:ee;pe=[];for(var F=W,H;F!==null;){H=F;var re=H.stateNode;if(H.tag===5&&re!==null&&(H=re,$!==null&&(re=ut(F,$),re!=null&&pe.push(Ba(F,re,H)))),ct)break;F=F.return}0<pe.length&&(ee=new ue(ee,fe,null,a,te),ne.push({event:ee,listeners:pe}))}}if((s&7)===0){e:{if(ee=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",ee&&a!==Ki&&(fe=a.relatedTarget||a.fromElement)&&(as(fe)||fe[kr]))break e;if((ue||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,ue?(fe=a.relatedTarget||a.toElement,ue=W,fe=fe?as(fe):null,fe!==null&&(ct=On(fe),fe!==ct||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=W),ue!==fe)){if(pe=Zs,re="onMouseLeave",$="onMouseEnter",F="mouse",(r==="pointerout"||r==="pointerover")&&(pe=C,re="onPointerLeave",$="onPointerEnter",F="pointer"),ct=ue==null?ee:uo(ue),H=fe==null?ee:uo(fe),ee=new pe(re,F+"leave",ue,a,te),ee.target=ct,ee.relatedTarget=H,re=null,as(te)===W&&(pe=new pe($,F+"enter",fe,a,te),pe.target=H,pe.relatedTarget=ct,re=pe),ct=re,ue&&fe)t:{for(pe=ue,$=fe,F=0,H=pe;H;H=ao(H))F++;for(H=0,re=$;re;re=ao(re))H++;for(;0<F-H;)pe=ao(pe),F--;for(;0<H-F;)$=ao($),H--;for(;F--;){if(pe===$||$!==null&&pe===$.alternate)break t;pe=ao(pe),$=ao($)}pe=null}else pe=null;ue!==null&&Fm(ne,ee,ue,pe,!1),fe!==null&&ct!==null&&Fm(ne,ct,fe,pe,!0)}}e:{if(ee=W?uo(W):window,ue=ee.nodeName&&ee.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ee.type==="file")var me=$E;else if(ym(ee))if(_m)me=WE;else{me=HE;var ve=BE}else(ue=ee.nodeName)&&ue.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(me=qE);if(me&&(me=me(r,W))){vm(ne,me,a,te);break e}ve&&ve(r,ee,W),r==="focusout"&&(ve=ee._wrapperState)&&ve.controlled&&ee.type==="number"&&Os(ee,"number",ee.value)}switch(ve=W?uo(W):window,r){case"focusin":(ym(ve)||ve.contentEditable==="true")&&(so=ve,Hh=W,Ua=null);break;case"focusout":Ua=Hh=so=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,Pm(ne,a,te);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":Pm(ne,a,te)}var _e;if(pt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else io?mm(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(os&&a.locale!=="ko"&&(io||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&io&&(_e=Da()):(fn=te,Qs="value"in fn?fn.value:fn.textContent,io=!0)),ve=Eu(W,Ee),0<ve.length&&(Ee=new Va(Ee,r,null,a,te),ne.push({event:Ee,listeners:ve}),_e?Ee.data=_e:(_e=gm(a),_e!==null&&(Ee.data=_e)))),(_e=pn?FE(r,a):jE(r,a))&&(W=Eu(W,"onBeforeInput"),0<W.length&&(te=new Va("onBeforeInput","beforeinput",null,a,te),ne.push({event:te,listeners:W}),te.data=_e))}Vm(ne,s)})}function Ba(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Eu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ut(r,a),m!=null&&c.unshift(Ba(r,m,d)),m=ut(r,s),m!=null&&c.push(Ba(r,m,d))),r=r.return}return c}function ao(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Fm(r,s,a,c,d){for(var m=s._reactName,_=[];a!==null&&a!==c;){var P=a,O=P.alternate,W=P.stateNode;if(O!==null&&O===c)break;P.tag===5&&W!==null&&(P=W,d?(O=ut(a,m),O!=null&&_.unshift(Ba(a,O,P))):d||(O=ut(a,m),O!=null&&_.push(Ba(a,O,P)))),a=a.return}_.length!==0&&r.push({event:s,listeners:_})}var ZE=/\r\n?/g,e1=/\u0000|\uFFFD/g;function jm(r){return(typeof r=="string"?r:""+r).replace(ZE,`
`).replace(e1,"")}function Tu(r,s,a){if(s=jm(s),jm(r)!==s&&a)throw Error(t(425))}function Su(){}var Xh=null,Jh=null;function Zh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(r){return Um.resolve(null).then(r).catch(r1)}:ed;function r1(r){setTimeout(function(){throw r})}function td(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),jn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);jn(s)}function si(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function zm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var lo=Math.random().toString(36).slice(2),nr="__reactFiber$"+lo,Ha="__reactProps$"+lo,kr="__reactContainer$"+lo,nd="__reactEvents$"+lo,i1="__reactListeners$"+lo,s1="__reactHandles$"+lo;function as(r){var s=r[nr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[kr]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=zm(r);r!==null;){if(a=r[nr])return a;r=zm(r)}return s}r=a,a=r.parentNode}return null}function qa(r){return r=r[nr]||r[kr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function uo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Iu(r){return r[Ha]||null}var rd=[],co=-1;function oi(r){return{current:r}}function Je(r){0>co||(r.current=rd[co],rd[co]=null,co--)}function Qe(r,s){co++,rd[co]=r.current,r.current=s}var ai={},jt=oi(ai),nn=oi(!1),ls=ai;function ho(r,s){var a=r.type.contextTypes;if(!a)return ai;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function rn(r){return r=r.childContextTypes,r!=null}function Cu(){Je(nn),Je(jt)}function $m(r,s,a){if(jt.current!==ai)throw Error(t(168));Qe(jt,s),Qe(nn,a)}function Bm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ne(r)||"Unknown",d));return le({},a,c)}function xu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ai,ls=jt.current,Qe(jt,r),Qe(nn,nn.current),!0}function Hm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Bm(r,s,ls),c.__reactInternalMemoizedMergedChildContext=r,Je(nn),Je(jt),Qe(jt,r)):Je(nn),Qe(nn,a)}var Rr=null,Pu=!1,id=!1;function qm(r){Rr===null?Rr=[r]:Rr.push(r)}function o1(r){Pu=!0,qm(r)}function li(){if(!id&&Rr!==null){id=!0;var r=0,s=Le;try{var a=Rr;for(Le=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Rr=null,Pu=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(r+1)),Hs(Zi,li),d}finally{Le=s,id=!1}}return null}var fo=[],po=0,ku=null,Ru=0,Cn=[],xn=0,us=null,Ar=1,br="";function cs(r,s){fo[po++]=Ru,fo[po++]=ku,ku=r,Ru=s}function Wm(r,s,a){Cn[xn++]=Ar,Cn[xn++]=br,Cn[xn++]=us,us=r;var c=Ar;r=br;var d=32-Kt(c)-1;c&=~(1<<d),a+=1;var m=32-Kt(s)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ar=1<<32-Kt(s)+d|a<<d|c,br=m+r}else Ar=1<<m|a<<d|c,br=r}function sd(r){r.return!==null&&(cs(r,1),Wm(r,1,0))}function od(r){for(;r===ku;)ku=fo[--po],fo[po]=null,Ru=fo[--po],fo[po]=null;for(;r===us;)us=Cn[--xn],Cn[xn]=null,br=Cn[--xn],Cn[xn]=null,Ar=Cn[--xn],Cn[xn]=null}var mn=null,gn=null,tt=!1,$n=null;function Gm(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Km(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,mn=r,gn=si(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,mn=r,gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=us!==null?{id:Ar,overflow:br}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,mn=r,gn=null,!0):!1;default:return!1}}function ad(r){return(r.mode&1)!==0&&(r.flags&128)===0}function ld(r){if(tt){var s=gn;if(s){var a=s;if(!Km(r,s)){if(ad(r))throw Error(t(418));s=si(a.nextSibling);var c=mn;s&&Km(r,s)?Gm(c,a):(r.flags=r.flags&-4097|2,tt=!1,mn=r)}}else{if(ad(r))throw Error(t(418));r.flags=r.flags&-4097|2,tt=!1,mn=r}}}function Qm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mn=r}function Au(r){if(r!==mn)return!1;if(!tt)return Qm(r),tt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Zh(r.type,r.memoizedProps)),s&&(s=gn)){if(ad(r))throw Ym(),Error(t(418));for(;s;)Gm(r,s),s=si(s.nextSibling)}if(Qm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){gn=si(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}gn=null}}else gn=mn?si(r.stateNode.nextSibling):null;return!0}function Ym(){for(var r=gn;r;)r=si(r.nextSibling)}function mo(){gn=mn=null,tt=!1}function ud(r){$n===null?$n=[r]:$n.push(r)}var a1=K.ReactCurrentBatchConfig;function Wa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(_){var P=d.refs;_===null?delete P[m]:P[m]=_},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function bu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Xm(r){var s=r._init;return s(r._payload)}function Jm(r){function s($,F){if(r){var H=$.deletions;H===null?($.deletions=[F],$.flags|=16):H.push(F)}}function a($,F){if(!r)return null;for(;F!==null;)s($,F),F=F.sibling;return null}function c($,F){for($=new Map;F!==null;)F.key!==null?$.set(F.key,F):$.set(F.index,F),F=F.sibling;return $}function d($,F){return $=gi($,F),$.index=0,$.sibling=null,$}function m($,F,H){return $.index=H,r?(H=$.alternate,H!==null?(H=H.index,H<F?($.flags|=2,F):H):($.flags|=2,F)):($.flags|=1048576,F)}function _($){return r&&$.alternate===null&&($.flags|=2),$}function P($,F,H,re){return F===null||F.tag!==6?(F=ef(H,$.mode,re),F.return=$,F):(F=d(F,H),F.return=$,F)}function O($,F,H,re){var me=H.type;return me===E?te($,F,H.props.children,re,H.key):F!==null&&(F.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===We&&Xm(me)===F.type)?(re=d(F,H.props),re.ref=Wa($,F,H),re.return=$,re):(re=tc(H.type,H.key,H.props,null,$.mode,re),re.ref=Wa($,F,H),re.return=$,re)}function W($,F,H,re){return F===null||F.tag!==4||F.stateNode.containerInfo!==H.containerInfo||F.stateNode.implementation!==H.implementation?(F=tf(H,$.mode,re),F.return=$,F):(F=d(F,H.children||[]),F.return=$,F)}function te($,F,H,re,me){return F===null||F.tag!==7?(F=vs(H,$.mode,re,me),F.return=$,F):(F=d(F,H),F.return=$,F)}function ne($,F,H){if(typeof F=="string"&&F!==""||typeof F=="number")return F=ef(""+F,$.mode,H),F.return=$,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case J:return H=tc(F.type,F.key,F.props,null,$.mode,H),H.ref=Wa($,null,F),H.return=$,H;case Q:return F=tf(F,$.mode,H),F.return=$,F;case We:var re=F._init;return ne($,re(F._payload),H)}if(_r(F)||de(F))return F=vs(F,$.mode,H,null),F.return=$,F;bu($,F)}return null}function ee($,F,H,re){var me=F!==null?F.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return me!==null?null:P($,F,""+H,re);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case J:return H.key===me?O($,F,H,re):null;case Q:return H.key===me?W($,F,H,re):null;case We:return me=H._init,ee($,F,me(H._payload),re)}if(_r(H)||de(H))return me!==null?null:te($,F,H,re,null);bu($,H)}return null}function ue($,F,H,re,me){if(typeof re=="string"&&re!==""||typeof re=="number")return $=$.get(H)||null,P(F,$,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case J:return $=$.get(re.key===null?H:re.key)||null,O(F,$,re,me);case Q:return $=$.get(re.key===null?H:re.key)||null,W(F,$,re,me);case We:var ve=re._init;return ue($,F,H,ve(re._payload),me)}if(_r(re)||de(re))return $=$.get(H)||null,te(F,$,re,me,null);bu(F,re)}return null}function fe($,F,H,re){for(var me=null,ve=null,_e=F,Ee=F=0,At=null;_e!==null&&Ee<H.length;Ee++){_e.index>Ee?(At=_e,_e=null):At=_e.sibling;var Be=ee($,_e,H[Ee],re);if(Be===null){_e===null&&(_e=At);break}r&&_e&&Be.alternate===null&&s($,_e),F=m(Be,F,Ee),ve===null?me=Be:ve.sibling=Be,ve=Be,_e=At}if(Ee===H.length)return a($,_e),tt&&cs($,Ee),me;if(_e===null){for(;Ee<H.length;Ee++)_e=ne($,H[Ee],re),_e!==null&&(F=m(_e,F,Ee),ve===null?me=_e:ve.sibling=_e,ve=_e);return tt&&cs($,Ee),me}for(_e=c($,_e);Ee<H.length;Ee++)At=ue(_e,$,Ee,H[Ee],re),At!==null&&(r&&At.alternate!==null&&_e.delete(At.key===null?Ee:At.key),F=m(At,F,Ee),ve===null?me=At:ve.sibling=At,ve=At);return r&&_e.forEach(function(yi){return s($,yi)}),tt&&cs($,Ee),me}function pe($,F,H,re){var me=de(H);if(typeof me!="function")throw Error(t(150));if(H=me.call(H),H==null)throw Error(t(151));for(var ve=me=null,_e=F,Ee=F=0,At=null,Be=H.next();_e!==null&&!Be.done;Ee++,Be=H.next()){_e.index>Ee?(At=_e,_e=null):At=_e.sibling;var yi=ee($,_e,Be.value,re);if(yi===null){_e===null&&(_e=At);break}r&&_e&&yi.alternate===null&&s($,_e),F=m(yi,F,Ee),ve===null?me=yi:ve.sibling=yi,ve=yi,_e=At}if(Be.done)return a($,_e),tt&&cs($,Ee),me;if(_e===null){for(;!Be.done;Ee++,Be=H.next())Be=ne($,Be.value,re),Be!==null&&(F=m(Be,F,Ee),ve===null?me=Be:ve.sibling=Be,ve=Be);return tt&&cs($,Ee),me}for(_e=c($,_e);!Be.done;Ee++,Be=H.next())Be=ue(_e,$,Ee,Be.value,re),Be!==null&&(r&&Be.alternate!==null&&_e.delete(Be.key===null?Ee:Be.key),F=m(Be,F,Ee),ve===null?me=Be:ve.sibling=Be,ve=Be);return r&&_e.forEach(function(U1){return s($,U1)}),tt&&cs($,Ee),me}function ct($,F,H,re){if(typeof H=="object"&&H!==null&&H.type===E&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case J:e:{for(var me=H.key,ve=F;ve!==null;){if(ve.key===me){if(me=H.type,me===E){if(ve.tag===7){a($,ve.sibling),F=d(ve,H.props.children),F.return=$,$=F;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===We&&Xm(me)===ve.type){a($,ve.sibling),F=d(ve,H.props),F.ref=Wa($,ve,H),F.return=$,$=F;break e}a($,ve);break}else s($,ve);ve=ve.sibling}H.type===E?(F=vs(H.props.children,$.mode,re,H.key),F.return=$,$=F):(re=tc(H.type,H.key,H.props,null,$.mode,re),re.ref=Wa($,F,H),re.return=$,$=re)}return _($);case Q:e:{for(ve=H.key;F!==null;){if(F.key===ve)if(F.tag===4&&F.stateNode.containerInfo===H.containerInfo&&F.stateNode.implementation===H.implementation){a($,F.sibling),F=d(F,H.children||[]),F.return=$,$=F;break e}else{a($,F);break}else s($,F);F=F.sibling}F=tf(H,$.mode,re),F.return=$,$=F}return _($);case We:return ve=H._init,ct($,F,ve(H._payload),re)}if(_r(H))return fe($,F,H,re);if(de(H))return pe($,F,H,re);bu($,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,F!==null&&F.tag===6?(a($,F.sibling),F=d(F,H),F.return=$,$=F):(a($,F),F=ef(H,$.mode,re),F.return=$,$=F),_($)):a($,F)}return ct}var go=Jm(!0),Zm=Jm(!1),Nu=oi(null),Du=null,yo=null,cd=null;function hd(){cd=yo=Du=null}function dd(r){var s=Nu.current;Je(Nu),r._currentValue=s}function fd(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function vo(r,s){Du=r,cd=yo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(sn=!0),r.firstContext=null)}function Pn(r){var s=r._currentValue;if(cd!==r)if(r={context:r,memoizedValue:s,next:null},yo===null){if(Du===null)throw Error(t(308));yo=r,Du.dependencies={lanes:0,firstContext:r}}else yo=yo.next=r;return s}var hs=null;function pd(r){hs===null?hs=[r]:hs.push(r)}function eg(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,pd(s)):(a.next=d.next,d.next=a),s.interleaved=a,Nr(r,c)}function Nr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ui=!1;function md(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Dr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Nr(r,a)}return d=c.interleaved,d===null?(s.next=s,pd(c)):(s.next=d.next,d.next=s),c.interleaved=s,Nr(r,a)}function Ou(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}function ng(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Lu(r,s,a,c){var d=r.updateQueue;ui=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var O=P,W=O.next;O.next=null,_===null?m=W:_.next=W,_=O;var te=r.alternate;te!==null&&(te=te.updateQueue,P=te.lastBaseUpdate,P!==_&&(P===null?te.firstBaseUpdate=W:P.next=W,te.lastBaseUpdate=O))}if(m!==null){var ne=d.baseState;_=0,te=W=O=null,P=m;do{var ee=P.lane,ue=P.eventTime;if((c&ee)===ee){te!==null&&(te=te.next={eventTime:ue,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var fe=r,pe=P;switch(ee=s,ue=a,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){ne=fe.call(ue,ne,ee);break e}ne=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,ee=typeof fe=="function"?fe.call(ue,ne,ee):fe,ee==null)break e;ne=le({},ne,ee);break e;case 2:ui=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,ee=d.effects,ee===null?d.effects=[P]:ee.push(P))}else ue={eventTime:ue,lane:ee,tag:P.tag,payload:P.payload,callback:P.callback,next:null},te===null?(W=te=ue,O=ne):te=te.next=ue,_|=ee;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;ee=P,P=ee.next,ee.next=null,d.lastBaseUpdate=ee,d.shared.pending=null}}while(!0);if(te===null&&(O=ne),d.baseState=O,d.firstBaseUpdate=W,d.lastBaseUpdate=te,s=d.shared.interleaved,s!==null){d=s;do _|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ps|=_,r.lanes=_,r.memoizedState=ne}}function rg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ga={},rr=oi(Ga),Ka=oi(Ga),Qa=oi(Ga);function ds(r){if(r===Ga)throw Error(t(174));return r}function gd(r,s){switch(Qe(Qa,s),Qe(Ka,r),Qe(rr,Ga),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Et(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Et(s,r)}Je(rr),Qe(rr,s)}function _o(){Je(rr),Je(Ka),Je(Qa)}function ig(r){ds(Qa.current);var s=ds(rr.current),a=Et(s,r.type);s!==a&&(Qe(Ka,r),Qe(rr,a))}function yd(r){Ka.current===r&&(Je(rr),Je(Ka))}var nt=oi(0);function Vu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var vd=[];function _d(){for(var r=0;r<vd.length;r++)vd[r]._workInProgressVersionPrimary=null;vd.length=0}var Mu=K.ReactCurrentDispatcher,wd=K.ReactCurrentBatchConfig,fs=0,rt=null,St=null,kt=null,Fu=!1,Ya=!1,Xa=0,l1=0;function Ut(){throw Error(t(321))}function Ed(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!zn(r[a],s[a]))return!1;return!0}function Td(r,s,a,c,d,m){if(fs=m,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Mu.current=r===null||r.memoizedState===null?d1:f1,r=a(c,d),Ya){m=0;do{if(Ya=!1,Xa=0,25<=m)throw Error(t(301));m+=1,kt=St=null,s.updateQueue=null,Mu.current=p1,r=a(c,d)}while(Ya)}if(Mu.current=zu,s=St!==null&&St.next!==null,fs=0,kt=St=rt=null,Fu=!1,s)throw Error(t(300));return r}function Sd(){var r=Xa!==0;return Xa=0,r}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?rt.memoizedState=kt=r:kt=kt.next=r,kt}function kn(){if(St===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=St.next;var s=kt===null?rt.memoizedState:kt.next;if(s!==null)kt=s,St=r;else{if(r===null)throw Error(t(310));St=r,r={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},kt===null?rt.memoizedState=kt=r:kt=kt.next=r}return kt}function Ja(r,s){return typeof s=="function"?s(r):s}function Id(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=St,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var P=_=null,O=null,W=m;do{var te=W.lane;if((fs&te)===te)O!==null&&(O=O.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),c=W.hasEagerState?W.eagerState:r(c,W.action);else{var ne={lane:te,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};O===null?(P=O=ne,_=c):O=O.next=ne,rt.lanes|=te,ps|=te}W=W.next}while(W!==null&&W!==m);O===null?_=c:O.next=P,zn(c,s.memoizedState)||(sn=!0),s.memoizedState=c,s.baseState=_,s.baseQueue=O,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,rt.lanes|=m,ps|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Cd(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=r(m,_.action),_=_.next;while(_!==d);zn(m,s.memoizedState)||(sn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function sg(){}function og(r,s){var a=rt,c=kn(),d=s(),m=!zn(c.memoizedState,d);if(m&&(c.memoizedState=d,sn=!0),c=c.queue,xd(ug.bind(null,a,c,r),[r]),c.getSnapshot!==s||m||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Za(9,lg.bind(null,a,c,d,s),void 0,null),Rt===null)throw Error(t(349));(fs&30)!==0||ag(a,s,d)}return d}function ag(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function lg(r,s,a,c){s.value=a,s.getSnapshot=c,cg(s)&&hg(r)}function ug(r,s,a){return a(function(){cg(s)&&hg(r)})}function cg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!zn(r,a)}catch{return!0}}function hg(r){var s=Nr(r,1);s!==null&&Wn(s,r,1,-1)}function dg(r){var s=ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:r},s.queue=r,r=r.dispatch=h1.bind(null,rt,r),[s.memoizedState,r]}function Za(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function fg(){return kn().memoizedState}function ju(r,s,a,c){var d=ir();rt.flags|=r,d.memoizedState=Za(1|s,a,void 0,c===void 0?null:c)}function Uu(r,s,a,c){var d=kn();c=c===void 0?null:c;var m=void 0;if(St!==null){var _=St.memoizedState;if(m=_.destroy,c!==null&&Ed(c,_.deps)){d.memoizedState=Za(s,a,m,c);return}}rt.flags|=r,d.memoizedState=Za(1|s,a,m,c)}function pg(r,s){return ju(8390656,8,r,s)}function xd(r,s){return Uu(2048,8,r,s)}function mg(r,s){return Uu(4,2,r,s)}function gg(r,s){return Uu(4,4,r,s)}function yg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function vg(r,s,a){return a=a!=null?a.concat([r]):null,Uu(4,4,yg.bind(null,s,r),a)}function Pd(){}function _g(r,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Ed(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function wg(r,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Ed(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Eg(r,s,a){return(fs&21)===0?(r.baseState&&(r.baseState=!1,sn=!0),r.memoizedState=a):(zn(a,s)||(a=ns(),rt.lanes|=a,ps|=a,r.baseState=!0),s)}function u1(r,s){var a=Le;Le=a!==0&&4>a?a:4,r(!0);var c=wd.transition;wd.transition={};try{r(!1),s()}finally{Le=a,wd.transition=c}}function Tg(){return kn().memoizedState}function c1(r,s,a){var c=pi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sg(r))Ig(s,a);else if(a=eg(r,s,a,c),a!==null){var d=Xt();Wn(a,r,c,d),Cg(a,s,c)}}function h1(r,s,a){var c=pi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sg(r))Ig(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var _=s.lastRenderedState,P=m(_,a);if(d.hasEagerState=!0,d.eagerState=P,zn(P,_)){var O=s.interleaved;O===null?(d.next=d,pd(s)):(d.next=O.next,O.next=d),s.interleaved=d;return}}catch{}finally{}a=eg(r,s,d,c),a!==null&&(d=Xt(),Wn(a,r,c,d),Cg(a,s,c))}}function Sg(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function Ig(r,s){Ya=Fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Cg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}var zu={readContext:Pn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},d1={readContext:Pn,useCallback:function(r,s){return ir().memoizedState=[r,s===void 0?null:s],r},useContext:Pn,useEffect:pg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,ju(4194308,4,yg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return ju(4194308,4,r,s)},useInsertionEffect:function(r,s){return ju(4,2,r,s)},useMemo:function(r,s){var a=ir();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=ir();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=c1.bind(null,rt,r),[c.memoizedState,r]},useRef:function(r){var s=ir();return r={current:r},s.memoizedState=r},useState:dg,useDebugValue:Pd,useDeferredValue:function(r){return ir().memoizedState=r},useTransition:function(){var r=dg(!1),s=r[0];return r=u1.bind(null,r[1]),ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=rt,d=ir();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Rt===null)throw Error(t(349));(fs&30)!==0||ag(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,pg(ug.bind(null,c,m,r),[r]),c.flags|=2048,Za(9,lg.bind(null,c,m,a,s),void 0,null),a},useId:function(){var r=ir(),s=Rt.identifierPrefix;if(tt){var a=br,c=Ar;a=(c&~(1<<32-Kt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Xa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=l1++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},f1={readContext:Pn,useCallback:_g,useContext:Pn,useEffect:xd,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:wg,useReducer:Id,useRef:fg,useState:function(){return Id(Ja)},useDebugValue:Pd,useDeferredValue:function(r){var s=kn();return Eg(s,St.memoizedState,r)},useTransition:function(){var r=Id(Ja)[0],s=kn().memoizedState;return[r,s]},useMutableSource:sg,useSyncExternalStore:og,useId:Tg,unstable_isNewReconciler:!1},p1={readContext:Pn,useCallback:_g,useContext:Pn,useEffect:xd,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:wg,useReducer:Cd,useRef:fg,useState:function(){return Cd(Ja)},useDebugValue:Pd,useDeferredValue:function(r){var s=kn();return St===null?s.memoizedState=r:Eg(s,St.memoizedState,r)},useTransition:function(){var r=Cd(Ja)[0],s=kn().memoizedState;return[r,s]},useMutableSource:sg,useSyncExternalStore:og,useId:Tg,unstable_isNewReconciler:!1};function Bn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function kd(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var $u={isMounted:function(r){return(r=r._reactInternals)?On(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Xt(),d=pi(r),m=Dr(c,d);m.payload=s,a!=null&&(m.callback=a),s=ci(r,m,d),s!==null&&(Wn(s,r,d,c),Ou(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Xt(),d=pi(r),m=Dr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ci(r,m,d),s!==null&&(Wn(s,r,d,c),Ou(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Xt(),c=pi(r),d=Dr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(r,d,c),s!==null&&(Wn(s,r,c,a),Ou(s,r,c))}};function xg(r,s,a,c,d,m,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,_):s.prototype&&s.prototype.isPureReactComponent?!ja(a,c)||!ja(d,m):!0}function Pg(r,s,a){var c=!1,d=ai,m=s.contextType;return typeof m=="object"&&m!==null?m=Pn(m):(d=rn(s)?ls:jt.current,c=s.contextTypes,m=(c=c!=null)?ho(r,d):ai),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=$u,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function kg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&$u.enqueueReplaceState(s,s.state,null)}function Rd(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},md(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=Pn(m):(m=rn(s)?ls:jt.current,d.context=ho(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(kd(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&$u.enqueueReplaceState(d,d.state,null),Lu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function wo(r,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function Ad(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function bd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function Rg(r,s,a){a=Dr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Qu||(Qu=!0,Wd=c),bd(r,s)},a}function Ag(r,s,a){a=Dr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){bd(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){bd(r,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),a}function bg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new m1;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=R1.bind(null,r,s,a),s.then(r,r))}function Ng(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Dg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Dr(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var g1=K.ReactCurrentOwner,sn=!1;function Yt(r,s,a,c){s.child=r===null?Zm(s,null,a,c):go(s,r.child,a,c)}function Og(r,s,a,c,d){a=a.render;var m=s.ref;return vo(s,d),c=Td(r,s,a,c,m,d),a=Sd(),r!==null&&!sn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Or(r,s,d)):(tt&&a&&sd(s),s.flags|=1,Yt(r,s,c,d),s.child)}function Lg(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Zd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Vg(r,s,m,c,d)):(r=tc(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ja,a(_,c)&&r.ref===s.ref)return Or(r,s,d)}return s.flags|=1,r=gi(m,c),r.ref=s.ref,r.return=s,s.child=r}function Vg(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(ja(m,c)&&r.ref===s.ref)if(sn=!1,s.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(sn=!0);else return s.lanes=r.lanes,Or(r,s,d)}return Nd(r,s,a,c,d)}function Mg(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(To,yn),yn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Qe(To,yn),yn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Qe(To,yn),yn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Qe(To,yn),yn|=c;return Yt(r,s,d,a),s.child}function Fg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Nd(r,s,a,c,d){var m=rn(a)?ls:jt.current;return m=ho(s,m),vo(s,d),a=Td(r,s,a,c,m,d),c=Sd(),r!==null&&!sn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Or(r,s,d)):(tt&&c&&sd(s),s.flags|=1,Yt(r,s,a,d),s.child)}function jg(r,s,a,c,d){if(rn(a)){var m=!0;xu(s)}else m=!1;if(vo(s,d),s.stateNode===null)Hu(r,s),Pg(s,a,c),Rd(s,a,c,d),c=!0;else if(r===null){var _=s.stateNode,P=s.memoizedProps;_.props=P;var O=_.context,W=a.contextType;typeof W=="object"&&W!==null?W=Pn(W):(W=rn(a)?ls:jt.current,W=ho(s,W));var te=a.getDerivedStateFromProps,ne=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function";ne||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==c||O!==W)&&kg(s,_,c,W),ui=!1;var ee=s.memoizedState;_.state=ee,Lu(s,c,_,d),O=s.memoizedState,P!==c||ee!==O||nn.current||ui?(typeof te=="function"&&(kd(s,a,te,c),O=s.memoizedState),(P=ui||xg(s,a,P,c,ee,O,W))?(ne||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=O),_.props=c,_.state=O,_.context=W,c=P):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{_=s.stateNode,tg(r,s),P=s.memoizedProps,W=s.type===s.elementType?P:Bn(s.type,P),_.props=W,ne=s.pendingProps,ee=_.context,O=a.contextType,typeof O=="object"&&O!==null?O=Pn(O):(O=rn(a)?ls:jt.current,O=ho(s,O));var ue=a.getDerivedStateFromProps;(te=typeof ue=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==ne||ee!==O)&&kg(s,_,c,O),ui=!1,ee=s.memoizedState,_.state=ee,Lu(s,c,_,d);var fe=s.memoizedState;P!==ne||ee!==fe||nn.current||ui?(typeof ue=="function"&&(kd(s,a,ue,c),fe=s.memoizedState),(W=ui||xg(s,a,W,c,ee,fe,O)||!1)?(te||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,fe,O),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,fe,O)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||P===r.memoizedProps&&ee===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&ee===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=fe),_.props=c,_.state=fe,_.context=O,c=W):(typeof _.componentDidUpdate!="function"||P===r.memoizedProps&&ee===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&ee===r.memoizedState||(s.flags|=1024),c=!1)}return Dd(r,s,a,c,m,d)}function Dd(r,s,a,c,d,m){Fg(r,s);var _=(s.flags&128)!==0;if(!c&&!_)return d&&Hm(s,a,!1),Or(r,s,m);c=s.stateNode,g1.current=s;var P=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&_?(s.child=go(s,r.child,null,m),s.child=go(s,null,P,m)):Yt(r,s,P,m),s.memoizedState=c.state,d&&Hm(s,a,!0),s.child}function Ug(r){var s=r.stateNode;s.pendingContext?$m(r,s.pendingContext,s.pendingContext!==s.context):s.context&&$m(r,s.context,!1),gd(r,s.containerInfo)}function zg(r,s,a,c,d){return mo(),ud(d),s.flags|=256,Yt(r,s,a,c),s.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Ld(r){return{baseLanes:r,cachePool:null,transitions:null}}function $g(r,s,a){var c=s.pendingProps,d=nt.current,m=!1,_=(s.flags&128)!==0,P;if((P=_)||(P=r!==null&&r.memoizedState===null?!1:(d&2)!==0),P?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Qe(nt,d&1),r===null)return ld(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(_=c.children,r=c.fallback,m?(c=s.mode,m=s.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=nc(_,c,0,null),r=vs(r,c,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=Ld(a),s.memoizedState=Od,r):Vd(s,_));if(d=r.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return y1(r,s,_,c,P,d,a);if(m){m=c.fallback,_=s.mode,d=r.child,P=d.sibling;var O={mode:"hidden",children:c.children};return(_&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=O,s.deletions=null):(c=gi(d,O),c.subtreeFlags=d.subtreeFlags&14680064),P!==null?m=gi(P,m):(m=vs(m,_,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,_=r.child.memoizedState,_=_===null?Ld(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=r.childLanes&~a,s.memoizedState=Od,c}return m=r.child,r=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Vd(r,s){return s=nc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Bu(r,s,a,c){return c!==null&&ud(c),go(s,r.child,null,a),r=Vd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function y1(r,s,a,c,d,m,_){if(a)return s.flags&256?(s.flags&=-257,c=Ad(Error(t(422))),Bu(r,s,_,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=nc({mode:"visible",children:c.children},d,0,null),m=vs(m,d,_,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&go(s,r.child,null,_),s.child.memoizedState=Ld(_),s.memoizedState=Od,m);if((s.mode&1)===0)return Bu(r,s,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var P=c.dgst;return c=P,m=Error(t(419)),c=Ad(m,c,void 0),Bu(r,s,_,c)}if(P=(_&r.childLanes)!==0,sn||P){if(c=Rt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Nr(r,d),Wn(c,r,d,-1))}return Jd(),c=Ad(Error(t(421))),Bu(r,s,_,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=A1.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,gn=si(d.nextSibling),mn=s,tt=!0,$n=null,r!==null&&(Cn[xn++]=Ar,Cn[xn++]=br,Cn[xn++]=us,Ar=r.id,br=r.overflow,us=s),s=Vd(s,c.children),s.flags|=4096,s)}function Bg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),fd(r.return,s,a)}function Md(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Hg(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Yt(r,s,c.children,a),c=nt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Bg(r,a,s);else if(r.tag===19)Bg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Qe(nt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Vu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Md(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Vu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Md(s,!0,a,null,m);break;case"together":Md(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Or(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ps|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=gi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=gi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function v1(r,s,a){switch(s.tag){case 3:Ug(s),mo();break;case 5:ig(s);break;case 1:rn(s.type)&&xu(s);break;case 4:gd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Qe(Nu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Qe(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?$g(r,s,a):(Qe(nt,nt.current&1),r=Or(r,s,a),r!==null?r.sibling:null);Qe(nt,nt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Hg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Qe(nt,nt.current),c)break;return null;case 22:case 23:return s.lanes=0,Mg(r,s,a)}return Or(r,s,a)}var qg,Fd,Wg,Gg;qg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fd=function(){},Wg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ds(rr.current);var m=null;switch(a){case"input":d=qi(r,d),c=qi(r,c),m=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":d=pa(r,d),c=pa(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Su)}wa(a,c);var _;a=null;for(W in d)if(!c.hasOwnProperty(W)&&d.hasOwnProperty(W)&&d[W]!=null)if(W==="style"){var P=d[W];for(_ in P)P.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?m||(m=[]):(m=m||[]).push(W,null));for(W in c){var O=c[W];if(P=d?.[W],c.hasOwnProperty(W)&&O!==P&&(O!=null||P!=null))if(W==="style")if(P){for(_ in P)!P.hasOwnProperty(_)||O&&O.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in O)O.hasOwnProperty(_)&&P[_]!==O[_]&&(a||(a={}),a[_]=O[_])}else a||(m||(m=[]),m.push(W,a)),a=O;else W==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,P=P?P.__html:void 0,O!=null&&P!==O&&(m=m||[]).push(W,O)):W==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(W,""+O):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(O!=null&&W==="onScroll"&&Xe("scroll",r),m||P===O||(m=[])):(m=m||[]).push(W,O))}a&&(m=m||[]).push("style",a);var W=m;(s.updateQueue=W)&&(s.flags|=4)}},Gg=function(r,s,a,c){a!==c&&(s.flags|=4)};function el(r,s){if(!tt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function zt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function _1(r,s,a){var c=s.pendingProps;switch(od(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return rn(s.type)&&Cu(),zt(s),null;case 3:return c=s.stateNode,_o(),Je(nn),Je(jt),_d(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Au(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,$n!==null&&(Qd($n),$n=null))),Fd(r,s),zt(s),null;case 5:yd(s);var d=ds(Qa.current);if(a=s.type,r!==null&&s.stateNode!=null)Wg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(r=ds(rr.current),Au(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[nr]=s,c[Ha]=m,r=(s.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<za.length;d++)Xe(za[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":Ds(c,m),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Xe("invalid",c);break;case"textarea":Ls(c,m),Xe("invalid",c)}wa(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var P=m[_];_==="children"?typeof P=="string"?c.textContent!==P&&(m.suppressHydrationWarning!==!0&&Tu(c.textContent,P,r),d=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(m.suppressHydrationWarning!==!0&&Tu(c.textContent,P,r),d=["children",""+P]):o.hasOwnProperty(_)&&P!=null&&_==="onScroll"&&Xe("scroll",c)}switch(a){case"input":Zt(c),Kl(c,m,!0);break;case"textarea":Zt(c),ma(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Su)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=wt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[nr]=s,r[Ha]=c,qg(r,s,!1,!1),s.stateNode=r;e:{switch(_=Ea(a,c),a){case"dialog":Xe("cancel",r),Xe("close",r),d=c;break;case"iframe":case"object":case"embed":Xe("load",r),d=c;break;case"video":case"audio":for(d=0;d<za.length;d++)Xe(za[d],r);d=c;break;case"source":Xe("error",r),d=c;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),d=c;break;case"details":Xe("toggle",r),d=c;break;case"input":Ds(r,c),d=qi(r,c),Xe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),Xe("invalid",r);break;case"textarea":Ls(r,c),d=pa(r,c),Xe("invalid",r);break;default:d=c}wa(a,d),P=d;for(m in P)if(P.hasOwnProperty(m)){var O=P[m];m==="style"?va(r,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ga(r,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&Kr(r,O):typeof O=="number"&&Kr(r,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Xe("scroll",r):O!=null&&q(r,m,O,_))}switch(a){case"input":Zt(r),Kl(r,c,!1);break;case"textarea":Zt(r),ma(r);break;case"option":c.value!=null&&r.setAttribute("value",""+be(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?wr(r,!!c.multiple,m,!1):c.defaultValue!=null&&wr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Su)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(r&&s.stateNode!=null)Gg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ds(Qa.current),ds(rr.current),Au(s)){if(c=s.stateNode,a=s.memoizedProps,c[nr]=s,(m=c.nodeValue!==a)&&(r=mn,r!==null))switch(r.tag){case 3:Tu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Tu(c.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=s,s.stateNode=c}return zt(s),null;case 13:if(Je(nt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tt&&gn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ym(),mo(),s.flags|=98560,m=!1;else if(m=Au(s),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=s}else mo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zt(s),m=!1}else $n!==null&&(Qd($n),$n=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?It===0&&(It=3):Jd())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return _o(),Fd(r,s),r===null&&$a(s.stateNode.containerInfo),zt(s),null;case 10:return dd(s.type._context),zt(s),null;case 17:return rn(s.type)&&Cu(),zt(s),null;case 19:if(Je(nt),m=s.memoizedState,m===null)return zt(s),null;if(c=(s.flags&128)!==0,_=m.rendering,_===null)if(c)el(m,!1);else{if(It!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(_=Vu(r),_!==null){for(s.flags|=128,el(m,!1),c=_.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,r=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,r=_.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Qe(nt,nt.current&1|2),s.child}r=r.sibling}m.tail!==null&&Ke()>So&&(s.flags|=128,c=!0,el(m,!1),s.lanes=4194304)}else{if(!c)if(r=Vu(_),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),el(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!tt)return zt(s),null}else 2*Ke()-m.renderingStartTime>So&&a!==1073741824&&(s.flags|=128,c=!0,el(m,!1),s.lanes=4194304);m.isBackwards?(_.sibling=s.child,s.child=_):(a=m.last,a!==null?a.sibling=_:s.child=_,m.last=_)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ke(),s.sibling=null,a=nt.current,Qe(nt,c?a&1|2:a&1),s):(zt(s),null);case 22:case 23:return Xd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(yn&1073741824)!==0&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function w1(r,s){switch(od(s),s.tag){case 1:return rn(s.type)&&Cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return _o(),Je(nn),Je(jt),_d(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return yd(s),null;case 13:if(Je(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));mo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Je(nt),null;case 4:return _o(),null;case 10:return dd(s.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var qu=!1,$t=!1,E1=typeof WeakSet=="function"?WeakSet:Set,he=null;function Eo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){lt(r,s,c)}else a.current=null}function jd(r,s,a){try{a()}catch(c){lt(r,s,c)}}var Kg=!1;function T1(r,s){if(Xh=ni,r=xm(),Bh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,P=-1,O=-1,W=0,te=0,ne=r,ee=null;t:for(;;){for(var ue;ne!==a||d!==0&&ne.nodeType!==3||(P=_+d),ne!==m||c!==0&&ne.nodeType!==3||(O=_+c),ne.nodeType===3&&(_+=ne.nodeValue.length),(ue=ne.firstChild)!==null;)ee=ne,ne=ue;for(;;){if(ne===r)break t;if(ee===a&&++W===d&&(P=_),ee===m&&++te===c&&(O=_),(ue=ne.nextSibling)!==null)break;ne=ee,ee=ne.parentNode}ne=ue}a=P===-1||O===-1?null:{start:P,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jh={focusedElem:r,selectionRange:a},ni=!1,he=s;he!==null;)if(s=he,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,he=r;else for(;he!==null;){s=he;try{var fe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,ct=fe.memoizedState,$=s.stateNode,F=$.getSnapshotBeforeUpdate(s.elementType===s.type?pe:Bn(s.type,pe),ct);$.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var H=s.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){lt(s,s.return,re)}if(r=s.sibling,r!==null){r.return=s.return,he=r;break}he=s.return}return fe=Kg,Kg=!1,fe}function tl(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&jd(s,a,m)}d=d.next}while(d!==c)}}function Wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Ud(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Qg(r){var s=r.alternate;s!==null&&(r.alternate=null,Qg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[nr],delete s[Ha],delete s[nd],delete s[i1],delete s[s1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Yg(r){return r.tag===5||r.tag===3||r.tag===4}function Xg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Yg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function zd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Su));else if(c!==4&&(r=r.child,r!==null))for(zd(r,s,a),r=r.sibling;r!==null;)zd(r,s,a),r=r.sibling}function $d(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for($d(r,s,a),r=r.sibling;r!==null;)$d(r,s,a),r=r.sibling}var Lt=null,Hn=!1;function hi(r,s,a){for(a=a.child;a!==null;)Jg(r,s,a),a=a.sibling}function Jg(r,s,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(es,a)}catch{}switch(a.tag){case 5:$t||Eo(a,s);case 6:var c=Lt,d=Hn;Lt=null,hi(r,s,a),Lt=c,Hn=d,Lt!==null&&(Hn?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Hn?(r=Lt,a=a.stateNode,r.nodeType===8?td(r.parentNode,a):r.nodeType===1&&td(r,a),jn(r)):td(Lt,a.stateNode));break;case 4:c=Lt,d=Hn,Lt=a.stateNode.containerInfo,Hn=!0,hi(r,s,a),Lt=c,Hn=d;break;case 0:case 11:case 14:case 15:if(!$t&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&jd(a,s,_),d=d.next}while(d!==c)}hi(r,s,a);break;case 1:if(!$t&&(Eo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){lt(a,s,P)}hi(r,s,a);break;case 21:hi(r,s,a);break;case 22:a.mode&1?($t=(c=$t)||a.memoizedState!==null,hi(r,s,a),$t=c):hi(r,s,a);break;default:hi(r,s,a)}}function Zg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new E1),s.forEach(function(c){var d=b1.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function qn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,_=s,P=_;e:for(;P!==null;){switch(P.tag){case 5:Lt=P.stateNode,Hn=!1;break e;case 3:Lt=P.stateNode.containerInfo,Hn=!0;break e;case 4:Lt=P.stateNode.containerInfo,Hn=!0;break e}P=P.return}if(Lt===null)throw Error(t(160));Jg(m,_,d),Lt=null,Hn=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(W){lt(d,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ey(s,r),s=s.sibling}function ey(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qn(s,r),sr(r),c&4){try{tl(3,r,r.return),Wu(3,r)}catch(pe){lt(r,r.return,pe)}try{tl(5,r,r.return)}catch(pe){lt(r,r.return,pe)}}break;case 1:qn(s,r),sr(r),c&512&&a!==null&&Eo(a,a.return);break;case 5:if(qn(s,r),sr(r),c&512&&a!==null&&Eo(a,a.return),r.flags&32){var d=r.stateNode;try{Kr(d,"")}catch(pe){lt(r,r.return,pe)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,_=a!==null?a.memoizedProps:m,P=r.type,O=r.updateQueue;if(r.updateQueue=null,O!==null)try{P==="input"&&m.type==="radio"&&m.name!=null&&da(d,m),Ea(P,_);var W=Ea(P,m);for(_=0;_<O.length;_+=2){var te=O[_],ne=O[_+1];te==="style"?va(d,ne):te==="dangerouslySetInnerHTML"?ga(d,ne):te==="children"?Kr(d,ne):q(d,te,ne,W)}switch(P){case"input":fa(d,m);break;case"textarea":Vs(d,m);break;case"select":var ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ue=m.value;ue!=null?wr(d,!!m.multiple,ue,!1):ee!==!!m.multiple&&(m.defaultValue!=null?wr(d,!!m.multiple,m.defaultValue,!0):wr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ha]=m}catch(pe){lt(r,r.return,pe)}}break;case 6:if(qn(s,r),sr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(pe){lt(r,r.return,pe)}}break;case 3:if(qn(s,r),sr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(s.containerInfo)}catch(pe){lt(r,r.return,pe)}break;case 4:qn(s,r),sr(r);break;case 13:qn(s,r),sr(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(qd=Ke())),c&4&&Zg(r);break;case 22:if(te=a!==null&&a.memoizedState!==null,r.mode&1?($t=(W=$t)||te,qn(s,r),$t=W):qn(s,r),sr(r),c&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!te&&(r.mode&1)!==0)for(he=r,te=r.child;te!==null;){for(ne=he=te;he!==null;){switch(ee=he,ue=ee.child,ee.tag){case 0:case 11:case 14:case 15:tl(4,ee,ee.return);break;case 1:Eo(ee,ee.return);var fe=ee.stateNode;if(typeof fe.componentWillUnmount=="function"){c=ee,a=ee.return;try{s=c,fe.props=s.memoizedProps,fe.state=s.memoizedState,fe.componentWillUnmount()}catch(pe){lt(c,a,pe)}}break;case 5:Eo(ee,ee.return);break;case 22:if(ee.memoizedState!==null){ry(ne);continue}}ue!==null?(ue.return=ee,he=ue):ry(ne)}te=te.sibling}e:for(te=null,ne=r;;){if(ne.tag===5){if(te===null){te=ne;try{d=ne.stateNode,W?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(P=ne.stateNode,O=ne.memoizedProps.style,_=O!=null&&O.hasOwnProperty("display")?O.display:null,P.style.display=ya("display",_))}catch(pe){lt(r,r.return,pe)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=W?"":ne.memoizedProps}catch(pe){lt(r,r.return,pe)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===r)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===r)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===r)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:qn(s,r),sr(r),c&4&&Zg(r);break;case 21:break;default:qn(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Yg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Kr(d,""),c.flags&=-33);var m=Xg(r);$d(r,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,P=Xg(r);zd(r,P,_);break;default:throw Error(t(161))}}catch(O){lt(r,r.return,O)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function S1(r,s,a){he=r,ty(r)}function ty(r,s,a){for(var c=(r.mode&1)!==0;he!==null;){var d=he,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||qu;if(!_){var P=d.alternate,O=P!==null&&P.memoizedState!==null||$t;P=qu;var W=$t;if(qu=_,($t=O)&&!W)for(he=d;he!==null;)_=he,O=_.child,_.tag===22&&_.memoizedState!==null?iy(d):O!==null?(O.return=_,he=O):iy(d);for(;m!==null;)he=m,ty(m),m=m.sibling;he=d,qu=P,$t=W}ny(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,he=m):ny(r)}}function ny(r){for(;he!==null;){var s=he;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:$t||Wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!$t)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Bn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&rg(s,m,c);break;case 3:var _=s.updateQueue;if(_!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}rg(s,_,a)}break;case 5:var P=s.stateNode;if(a===null&&s.flags&4){a=P;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var te=W.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&jn(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||s.flags&512&&Ud(s)}catch(ee){lt(s,s.return,ee)}}if(s===r){he=null;break}if(a=s.sibling,a!==null){a.return=s.return,he=a;break}he=s.return}}function ry(r){for(;he!==null;){var s=he;if(s===r){he=null;break}var a=s.sibling;if(a!==null){a.return=s.return,he=a;break}he=s.return}}function iy(r){for(;he!==null;){var s=he;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Wu(4,s)}catch(O){lt(s,a,O)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(O){lt(s,d,O)}}var m=s.return;try{Ud(s)}catch(O){lt(s,m,O)}break;case 5:var _=s.return;try{Ud(s)}catch(O){lt(s,_,O)}}}catch(O){lt(s,s.return,O)}if(s===r){he=null;break}var P=s.sibling;if(P!==null){P.return=s.return,he=P;break}he=s.return}}var I1=Math.ceil,Gu=K.ReactCurrentDispatcher,Bd=K.ReactCurrentOwner,Rn=K.ReactCurrentBatchConfig,ze=0,Rt=null,mt=null,Vt=0,yn=0,To=oi(0),It=0,nl=null,ps=0,Ku=0,Hd=0,rl=null,on=null,qd=0,So=1/0,Lr=null,Qu=!1,Wd=null,di=null,Yu=!1,fi=null,Xu=0,il=0,Gd=null,Ju=-1,Zu=0;function Xt(){return(ze&6)!==0?Ke():Ju!==-1?Ju:Ju=Ke()}function pi(r){return(r.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:a1.transition!==null?(Zu===0&&(Zu=ns()),Zu):(r=Le,r!==0||(r=window.event,r=r===void 0?16:Na(r.type)),r)}function Wn(r,s,a,c){if(50<il)throw il=0,Gd=null,Error(t(185));Jr(r,a,c),((ze&2)===0||r!==Rt)&&(r===Rt&&((ze&2)===0&&(Ku|=a),It===4&&mi(r,Vt)),an(r,c),a===1&&ze===0&&(s.mode&1)===0&&(So=Ke()+500,Pu&&li()))}function an(r,s){var a=r.callbackNode;Sr(r,s);var c=ts(r,r===Rt?Vt:0);if(c===0)a!==null&&Pa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Pa(a),s===1)r.tag===0?o1(oy.bind(null,r)):qm(oy.bind(null,r)),n1(function(){(ze&6)===0&&li()}),a=null;else{switch(ei(c)){case 1:a=Zi;break;case 4:a=Qr;break;case 16:a=Tn;break;case 536870912:a=Zl;break;default:a=Tn}a=py(a,sy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function sy(r,s){if(Ju=-1,Zu=0,(ze&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Io()&&r.callbackNode!==a)return null;var c=ts(r,r===Rt?Vt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=ec(r,c);else{s=c;var d=ze;ze|=2;var m=ly();(Rt!==r||Vt!==s)&&(Lr=null,So=Ke()+500,gs(r,s));do try{P1();break}catch(P){ay(r,P)}while(!0);hd(),Gu.current=m,ze=d,mt!==null?s=0:(Rt=null,Vt=0,s=It)}if(s!==0){if(s===2&&(d=dn(r),d!==0&&(c=d,s=Kd(r,d))),s===1)throw a=nl,gs(r,0),mi(r,c),an(r,Ke()),a;if(s===6)mi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!C1(d)&&(s=ec(r,c),s===2&&(m=dn(r),m!==0&&(c=m,s=Kd(r,m))),s===1))throw a=nl,gs(r,0),mi(r,c),an(r,Ke()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ys(r,on,Lr);break;case 3:if(mi(r,c),(c&130023424)===c&&(s=qd+500-Ke(),10<s)){if(ts(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Xt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=ed(ys.bind(null,r,on,Lr),s);break}ys(r,on,Lr);break;case 4:if(mi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var _=31-Kt(c);m=1<<_,_=s[_],_>d&&(d=_),c&=~m}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*I1(c/1960))-c,10<c){r.timeoutHandle=ed(ys.bind(null,r,on,Lr),c);break}ys(r,on,Lr);break;case 5:ys(r,on,Lr);break;default:throw Error(t(329))}}}return an(r,Ke()),r.callbackNode===a?sy.bind(null,r):null}function Kd(r,s){var a=rl;return r.current.memoizedState.isDehydrated&&(gs(r,s).flags|=256),r=ec(r,s),r!==2&&(s=on,on=a,s!==null&&Qd(s)),r}function Qd(r){on===null?on=r:on.push.apply(on,r)}function C1(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!zn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(r,s){for(s&=~Hd,s&=~Ku,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Kt(s),c=1<<a;r[a]=-1,s&=~c}}function oy(r){if((ze&6)!==0)throw Error(t(327));Io();var s=ts(r,0);if((s&1)===0)return an(r,Ke()),null;var a=ec(r,s);if(r.tag!==0&&a===2){var c=dn(r);c!==0&&(s=c,a=Kd(r,c))}if(a===1)throw a=nl,gs(r,0),mi(r,s),an(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ys(r,on,Lr),an(r,Ke()),null}function Yd(r,s){var a=ze;ze|=1;try{return r(s)}finally{ze=a,ze===0&&(So=Ke()+500,Pu&&li())}}function ms(r){fi!==null&&fi.tag===0&&(ze&6)===0&&Io();var s=ze;ze|=1;var a=Rn.transition,c=Le;try{if(Rn.transition=null,Le=1,r)return r()}finally{Le=c,Rn.transition=a,ze=s,(ze&6)===0&&li()}}function Xd(){yn=To.current,Je(To)}function gs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,t1(a)),mt!==null)for(a=mt.return;a!==null;){var c=a;switch(od(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cu();break;case 3:_o(),Je(nn),Je(jt),_d();break;case 5:yd(c);break;case 4:_o();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:dd(c.type._context);break;case 22:case 23:Xd()}a=a.return}if(Rt=r,mt=r=gi(r.current,null),Vt=yn=s,It=0,nl=null,Hd=Ku=ps=0,on=rl=null,hs!==null){for(s=0;s<hs.length;s++)if(a=hs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}hs=null}return r}function ay(r,s){do{var a=mt;try{if(hd(),Mu.current=zu,Fu){for(var c=rt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Fu=!1}if(fs=0,kt=St=rt=null,Ya=!1,Xa=0,Bd.current=null,a===null||a.return===null){It=1,nl=s,mt=null;break}e:{var m=r,_=a.return,P=a,O=s;if(s=Vt,P.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=O,te=P,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var ue=Ng(_);if(ue!==null){ue.flags&=-257,Dg(ue,_,P,m,s),ue.mode&1&&bg(m,W,s),s=ue,O=W;var fe=s.updateQueue;if(fe===null){var pe=new Set;pe.add(O),s.updateQueue=pe}else fe.add(O);break e}else{if((s&1)===0){bg(m,W,s),Jd();break e}O=Error(t(426))}}else if(tt&&P.mode&1){var ct=Ng(_);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Dg(ct,_,P,m,s),ud(wo(O,P));break e}}m=O=wo(O,P),It!==4&&(It=2),rl===null?rl=[m]:rl.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var $=Rg(m,O,s);ng(m,$);break e;case 1:P=O;var F=m.type,H=m.stateNode;if((m.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(di===null||!di.has(H)))){m.flags|=65536,s&=-s,m.lanes|=s;var re=Ag(m,P,s);ng(m,re);break e}}m=m.return}while(m!==null)}cy(a)}catch(me){s=me,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function ly(){var r=Gu.current;return Gu.current=zu,r===null?zu:r}function Jd(){(It===0||It===3||It===2)&&(It=4),Rt===null||(ps&268435455)===0&&(Ku&268435455)===0||mi(Rt,Vt)}function ec(r,s){var a=ze;ze|=2;var c=ly();(Rt!==r||Vt!==s)&&(Lr=null,gs(r,s));do try{x1();break}catch(d){ay(r,d)}while(!0);if(hd(),ze=a,Gu.current=c,mt!==null)throw Error(t(261));return Rt=null,Vt=0,It}function x1(){for(;mt!==null;)uy(mt)}function P1(){for(;mt!==null&&!Xl();)uy(mt)}function uy(r){var s=fy(r.alternate,r,yn);r.memoizedProps=r.pendingProps,s===null?cy(r):mt=s,Bd.current=null}function cy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=_1(a,s,yn),a!==null){mt=a;return}}else{if(a=w1(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{It=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);It===0&&(It=5)}function ys(r,s,a){var c=Le,d=Rn.transition;try{Rn.transition=null,Le=1,k1(r,s,a,c)}finally{Rn.transition=d,Le=c}return null}function k1(r,s,a,c){do Io();while(fi!==null);if((ze&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ge(r,m),r===Rt&&(mt=Rt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Yu||(Yu=!0,py(Tn,function(){return Io(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Rn.transition,Rn.transition=null;var _=Le;Le=1;var P=ze;ze|=4,Bd.current=null,T1(r,a),ey(a,r),KE(Jh),ni=!!Xh,Jh=Xh=null,r.current=a,S1(a),Lh(),ze=P,Le=_,Rn.transition=m}else r.current=a;if(Yu&&(Yu=!1,fi=r,Xu=d),m=r.pendingLanes,m===0&&(di=null),eu(a.stateNode),an(r,Ke()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Qu)throw Qu=!1,r=Wd,Wd=null,r;return(Xu&1)!==0&&r.tag!==0&&Io(),m=r.pendingLanes,(m&1)!==0?r===Gd?il++:(il=0,Gd=r):il=0,li(),null}function Io(){if(fi!==null){var r=ei(Xu),s=Rn.transition,a=Le;try{if(Rn.transition=null,Le=16>r?16:r,fi===null)var c=!1;else{if(r=fi,fi=null,Xu=0,(ze&6)!==0)throw Error(t(331));var d=ze;for(ze|=4,he=r.current;he!==null;){var m=he,_=m.child;if((he.flags&16)!==0){var P=m.deletions;if(P!==null){for(var O=0;O<P.length;O++){var W=P[O];for(he=W;he!==null;){var te=he;switch(te.tag){case 0:case 11:case 15:tl(8,te,m)}var ne=te.child;if(ne!==null)ne.return=te,he=ne;else for(;he!==null;){te=he;var ee=te.sibling,ue=te.return;if(Qg(te),te===W){he=null;break}if(ee!==null){ee.return=ue,he=ee;break}he=ue}}}var fe=m.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var ct=pe.sibling;pe.sibling=null,pe=ct}while(pe!==null)}}he=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,he=_;else e:for(;he!==null;){if(m=he,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:tl(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,he=$;break e}he=m.return}}var F=r.current;for(he=F;he!==null;){_=he;var H=_.child;if((_.subtreeFlags&2064)!==0&&H!==null)H.return=_,he=H;else e:for(_=F;he!==null;){if(P=he,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Wu(9,P)}}catch(me){lt(P,P.return,me)}if(P===_){he=null;break e}var re=P.sibling;if(re!==null){re.return=P.return,he=re;break e}he=P.return}}if(ze=d,li(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(es,r)}catch{}c=!0}return c}finally{Le=a,Rn.transition=s}}return!1}function hy(r,s,a){s=wo(a,s),s=Rg(r,s,1),r=ci(r,s,1),s=Xt(),r!==null&&(Jr(r,1,s),an(r,s))}function lt(r,s,a){if(r.tag===3)hy(r,r,a);else for(;s!==null;){if(s.tag===3){hy(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){r=wo(a,r),r=Ag(s,r,1),s=ci(s,r,1),r=Xt(),s!==null&&(Jr(s,1,r),an(s,r));break}}s=s.return}}function R1(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Xt(),r.pingedLanes|=r.suspendedLanes&a,Rt===r&&(Vt&a)===a&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Ke()-qd?gs(r,0):Hd|=a),an(r,s)}function dy(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ws,Ws<<=1,(Ws&130023424)===0&&(Ws=4194304)));var a=Xt();r=Nr(r,s),r!==null&&(Jr(r,s,a),an(r,a))}function A1(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),dy(r,a)}function b1(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),dy(r,a)}var fy;fy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||nn.current)sn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return sn=!1,v1(r,s,a);sn=(r.flags&131072)!==0}else sn=!1,tt&&(s.flags&1048576)!==0&&Wm(s,Ru,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Hu(r,s),r=s.pendingProps;var d=ho(s,jt.current);vo(s,a),d=Td(null,s,c,r,d,a);var m=Sd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,rn(c)?(m=!0,xu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,md(s),d.updater=$u,s.stateNode=d,d._reactInternals=s,Rd(s,c,r,a),s=Dd(null,s,c,!0,m,a)):(s.tag=0,tt&&m&&sd(s),Yt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Hu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=D1(c),r=Bn(c,r),d){case 0:s=Nd(null,s,c,r,a);break e;case 1:s=jg(null,s,c,r,a);break e;case 11:s=Og(null,s,c,r,a);break e;case 14:s=Lg(null,s,c,Bn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),Nd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),jg(r,s,c,d,a);case 3:e:{if(Ug(s),r===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,tg(r,s),Lu(s,c,null,a);var _=s.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=wo(Error(t(423)),s),s=zg(r,s,c,a,d);break e}else if(c!==d){d=wo(Error(t(424)),s),s=zg(r,s,c,a,d);break e}else for(gn=si(s.stateNode.containerInfo.firstChild),mn=s,tt=!0,$n=null,a=Zm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mo(),c===d){s=Or(r,s,a);break e}Yt(r,s,c,a)}s=s.child}return s;case 5:return ig(s),r===null&&ld(s),c=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,_=d.children,Zh(c,d)?_=null:m!==null&&Zh(c,m)&&(s.flags|=32),Fg(r,s),Yt(r,s,_,a),s.child;case 6:return r===null&&ld(s),null;case 13:return $g(r,s,a);case 4:return gd(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=go(s,null,c,a):Yt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),Og(r,s,c,d,a);case 7:return Yt(r,s,s.pendingProps,a),s.child;case 8:return Yt(r,s,s.pendingProps.children,a),s.child;case 12:return Yt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,_=d.value,Qe(Nu,c._currentValue),c._currentValue=_,m!==null)if(zn(m.value,_)){if(m.children===d.children&&!nn.current){s=Or(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var P=m.dependencies;if(P!==null){_=m.child;for(var O=P.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=Dr(-1,a&-a),O.tag=2;var W=m.updateQueue;if(W!==null){W=W.shared;var te=W.pending;te===null?O.next=O:(O.next=te.next,te.next=O),W.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),fd(m.return,a,s),P.lanes|=a;break}O=O.next}}else if(m.tag===10)_=m.type===s.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,P=_.alternate,P!==null&&(P.lanes|=a),fd(_,a,s),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===s){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Yt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,vo(s,a),d=Pn(d),c=c(d),s.flags|=1,Yt(r,s,c,a),s.child;case 14:return c=s.type,d=Bn(c,s.pendingProps),d=Bn(c.type,d),Lg(r,s,c,d,a);case 15:return Vg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Bn(c,d),Hu(r,s),s.tag=1,rn(c)?(r=!0,xu(s)):r=!1,vo(s,a),Pg(s,c,d),Rd(s,c,d,a),Dd(null,s,c,!0,r,a);case 19:return Hg(r,s,a);case 22:return Mg(r,s,a)}throw Error(t(156,s.tag))};function py(r,s){return Hs(r,s)}function N1(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,c){return new N1(r,s,a,c)}function Zd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function D1(r){if(typeof r=="function")return Zd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===Ye)return 14}return 2}function gi(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function tc(r,s,a,c,d,m){var _=2;if(c=r,typeof r=="function")Zd(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case E:return vs(a.children,d,m,s);case T:_=8,d|=8;break;case x:return r=An(12,a,s,d|2),r.elementType=x,r.lanes=m,r;case k:return r=An(13,a,s,d),r.elementType=k,r.lanes=m,r;case Ue:return r=An(19,a,s,d),r.elementType=Ue,r.lanes=m,r;case Oe:return nc(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:_=10;break e;case D:_=9;break e;case j:_=11;break e;case Ye:_=14;break e;case We:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(_,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function vs(r,s,a,c){return r=An(7,r,c,s),r.lanes=a,r}function nc(r,s,a,c){return r=An(22,r,c,s),r.elementType=Oe,r.lanes=a,r.stateNode={isHidden:!1},r}function ef(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function tf(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function O1(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nf(r,s,a,c,d,m,_,P,O){return r=new O1(r,s,a,P,O),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(m),r}function L1(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function my(r){if(!r)return ai;r=r._reactInternals;e:{if(On(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(rn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(rn(a))return Bm(r,a,s)}return s}function gy(r,s,a,c,d,m,_,P,O){return r=nf(a,c,!0,r,d,m,_,P,O),r.context=my(null),a=r.current,c=Xt(),d=pi(a),m=Dr(c,d),m.callback=s??null,ci(a,m,d),r.current.lanes=d,Jr(r,d,c),an(r,c),r}function rc(r,s,a,c){var d=s.current,m=Xt(),_=pi(d);return a=my(a),s.context===null?s.context=a:s.pendingContext=a,s=Dr(m,_),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ci(d,s,_),r!==null&&(Wn(r,d,_,m),Ou(r,d,_)),_}function ic(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function yy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function rf(r,s){yy(r,s),(r=r.alternate)&&yy(r,s)}function V1(){return null}var vy=typeof reportError=="function"?reportError:function(r){console.error(r)};function sf(r){this._internalRoot=r}sc.prototype.render=sf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));rc(r,s,null,null)},sc.prototype.unmount=sf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ms(function(){rc(null,r,null,null)}),s[kr]=null}};function sc(r){this._internalRoot=r}sc.prototype.unstable_scheduleHydration=function(r){if(r){var s=su();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&lu(r)}};function of(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function _y(){}function M1(r,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var W=ic(_);m.call(W)}}var _=gy(s,c,r,0,null,!1,!1,"",_y);return r._reactRootContainer=_,r[kr]=_.current,$a(r.nodeType===8?r.parentNode:r),ms(),_}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var P=c;c=function(){var W=ic(O);P.call(W)}}var O=nf(r,0,!1,null,null,!1,!1,"",_y);return r._reactRootContainer=O,r[kr]=O.current,$a(r.nodeType===8?r.parentNode:r),ms(function(){rc(s,O,a,c)}),O}function ac(r,s,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var P=d;d=function(){var O=ic(_);P.call(O)}}rc(s,_,r,d)}else _=M1(a,s,r,d,c);return ic(_)}ru=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Yr(s.pendingLanes);a!==0&&(Zr(s,a|1),an(s,Ke()),(ze&6)===0&&(So=Ke()+500,li()))}break;case 13:ms(function(){var c=Nr(r,1);if(c!==null){var d=Xt();Wn(c,r,1,d)}}),rf(r,1)}},Gs=function(r){if(r.tag===13){var s=Nr(r,134217728);if(s!==null){var a=Xt();Wn(s,r,134217728,a)}rf(r,134217728)}},iu=function(r){if(r.tag===13){var s=pi(r),a=Nr(r,s);if(a!==null){var c=Xt();Wn(a,r,s,c)}rf(r,s)}},su=function(){return Le},ou=function(r,s){var a=Le;try{return Le=r,s()}finally{Le=a}},Fs=function(r,s,a){switch(s){case"input":if(fa(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Iu(c);if(!d)throw Error(t(90));Gt(c),fa(c,d)}}}break;case"textarea":Vs(r,a);break;case"select":s=a.value,s!=null&&wr(r,!!a.multiple,s,!1)}},Qi=Yd,Sa=ms;var F1={usingClientEntryPoint:!1,Events:[qa,uo,Iu,Yn,Ta,Yd]},sl={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j1={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=xa(r),r===null?null:r.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{es=lc.inject(j1),hn=lc}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1,ln.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(s))throw Error(t(200));return L1(r,s,null,a)},ln.createRoot=function(r,s){if(!of(r))throw Error(t(299));var a=!1,c="",d=vy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=nf(r,1,!1,null,null,a,!1,c,d),r[kr]=s.current,$a(r.nodeType===8?r.parentNode:r),new sf(s)},ln.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=xa(s),r=r===null?null:r.stateNode,r},ln.flushSync=function(r){return ms(r)},ln.hydrate=function(r,s,a){if(!oc(s))throw Error(t(200));return ac(null,r,s,!0,a)},ln.hydrateRoot=function(r,s,a){if(!of(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=vy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),s=gy(s,null,r,1,a??null,d,!1,m,_),r[kr]=s.current,$a(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new sc(s)},ln.render=function(r,s,a){if(!oc(s))throw Error(t(200));return ac(null,r,s,!1,a)},ln.unmountComponentAtNode=function(r){if(!oc(r))throw Error(t(40));return r._reactRootContainer?(ms(function(){ac(null,null,r,!1,function(){r._reactRootContainer=null,r[kr]=null})}),!0):!1},ln.unstable_batchedUpdates=Yd,ln.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!oc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ac(r,s,a,!1,c)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var Py;function _p(){if(Py)return uf.exports;Py=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),uf.exports=W1(),uf.exports}var ky;function G1(){if(ky)return uc;ky=1;var n=_p();return uc.createRoot=n.createRoot,uc.hydrateRoot=n.hydrateRoot,uc}var K1=G1();const Q1=vp(K1);var al={},Ry;function Y1(){if(Ry)return al;Ry=1,Object.defineProperty(al,"__esModule",{value:!0}),al.parse=h,al.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function h(S,A){const b=new l,M=S.length;if(M<2)return b;const N=A?.decode||w;let V=0;do{const B=S.indexOf("=",V);if(B===-1)break;const q=S.indexOf(";",V),K=q===-1?M:q;if(B>K){V=S.lastIndexOf(";",B-1)+1;continue}const J=f(S,V,B),Q=g(S,B,J),E=S.slice(J,Q);if(b[E]===void 0){let T=f(S,B+1,K),x=g(S,K,T);const R=N(S.slice(T,x));b[E]=R}V=K+1}while(V<M);return b}function f(S,A,b){do{const M=S.charCodeAt(A);if(M!==32&&M!==9)return A}while(++A<b);return b}function g(S,A,b){for(;A>b;){const M=S.charCodeAt(--A);if(M!==32&&M!==9)return A+1}return b}function y(S,A,b){const M=b?.encode||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const N=M(A);if(!e.test(N))throw new TypeError(`argument val is invalid: ${A}`);let V=S+"="+N;if(!b)return V;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);V+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);V+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);V+="; Path="+b.path}if(b.expires){if(!I(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);V+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(V+="; HttpOnly"),b.secure&&(V+="; Secure"),b.partitioned&&(V+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":V+="; Priority=Low";break;case"medium":V+="; Priority=Medium";break;case"high":V+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":V+="; SameSite=Strict";break;case"lax":V+="; SameSite=Lax";break;case"none":V+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return V}function w(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function I(S){return o.call(S)==="[object Date]"}return al}Y1();var Ay="popstate";function X1(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Vf("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Il(o)}return Z1(e,t,null,n)}function st(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function mr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function J1(){return Math.random().toString(36).substring(2,10)}function by(n,e){return{usr:n.state,key:n.key,idx:e}}function Vf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?na(e):e,state:t,key:e&&e.key||i||J1()}}function Il({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function na(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Z1(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",g=null,y=w();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function w(){return(h.state||{idx:null}).idx}function I(){f="POP";let N=w(),V=N==null?null:N-y;y=N,g&&g({action:f,location:M.location,delta:V})}function S(N,V){f="PUSH";let B=Vf(M.location,N,V);y=w()+1;let q=by(B,y),K=M.createHref(B);try{h.pushState(q,"",K)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(K)}l&&g&&g({action:f,location:M.location,delta:1})}function A(N,V){f="REPLACE";let B=Vf(M.location,N,V);y=w();let q=by(B,y),K=M.createHref(B);h.replaceState(q,"",K),l&&g&&g({action:f,location:M.location,delta:0})}function b(N){return eT(N)}let M={get action(){return f},get location(){return n(o,h)},listen(N){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Ay,I),g=N,()=>{o.removeEventListener(Ay,I),g=null}},createHref(N){return e(o,N)},createURL:b,encodeLocation(N){let V=b(N);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:S,replace:A,go(N){return h.go(N)}};return M}function eT(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),st(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Il(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function $_(n,e,t="/"){return tT(n,e,t,!1)}function tT(n,e,t,i){let o=typeof e=="string"?na(e):e,l=Ur(o.pathname||"/",t);if(l==null)return null;let h=B_(n);nT(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let y=fT(l);f=hT(h[g],y,i)}return f}function B_(n,e=[],t=[],i=""){let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(st(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length));let y=jr([i,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(st(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),B_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:uT(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{if(l.path===""||!l.path?.includes("?"))o(l,h);else for(let f of H_(l.path))o(l,h,f)}),e}function H_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=H_(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function nT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var rT=/^:[\w-]+$/,iT=3,sT=2,oT=1,aT=10,lT=-2,Ny=n=>n==="*";function uT(n,e){let t=n.split("/"),i=t.length;return t.some(Ny)&&(i+=lT),e&&(i+=sT),t.filter(o=>!Ny(o)).reduce((o,l)=>o+(rT.test(l)?iT:l===""?oT:aT),i)}function cT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function hT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let g=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",I=zc({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},w),S=g.route;if(!I&&y&&t&&!i[i.length-1].route.index&&(I=zc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},w)),!I)return null;Object.assign(o,I.params),h.push({params:o,pathname:jr([l,I.pathname]),pathnameBase:yT(jr([l,I.pathnameBase])),route:S}),I.pathnameBase!=="/"&&(l=jr([l,I.pathnameBase]))}return h}function zc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=dT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:w,isOptional:I},S)=>{if(w==="*"){let b=f[S]||"";h=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const A=f[S];return I&&!A?y[w]=void 0:y[w]=(A||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function dT(n,e=!1,t=!0){mr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function fT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ur(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function pT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?na(n):n;return{pathname:t?t.startsWith("/")?t:mT(t,e):e,search:vT(i),hash:_T(o)}}function mT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function df(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function q_(n){let e=gT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function W_(n,e,t,i=!1){let o;typeof n=="string"?o=na(n):(o={...n},st(!o.pathname||!o.pathname.includes("?"),df("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),df("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),df("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let I=e.length-1;if(!i&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),I-=1;o.pathname=S.join("/")}f=I>=0?e[I]:"/"}let g=pT(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||w)&&(g.pathname+="/"),g}var jr=n=>n.join("/").replace(/\/\/+/g,"/"),yT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),vT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,_T=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function wT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var G_=["POST","PUT","PATCH","DELETE"];new Set(G_);var ET=["GET",...G_];new Set(ET);var ra=X.createContext(null);ra.displayName="DataRouter";var uh=X.createContext(null);uh.displayName="DataRouterState";var K_=X.createContext({isTransitioning:!1});K_.displayName="ViewTransition";var TT=X.createContext(new Map);TT.displayName="Fetchers";var ST=X.createContext(null);ST.displayName="Await";var vr=X.createContext(null);vr.displayName="Navigation";var Dl=X.createContext(null);Dl.displayName="Location";var qr=X.createContext({outlet:null,matches:[],isDataRoute:!1});qr.displayName="Route";var wp=X.createContext(null);wp.displayName="RouteError";function IT(n,{relative:e}={}){st(Ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=X.useContext(vr),{hash:o,pathname:l,search:h}=Ll(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:jr([t,l])),i.createHref({pathname:f,search:h,hash:o})}function Ol(){return X.useContext(Dl)!=null}function bs(){return st(Ol(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(Dl).location}var Q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y_(n){X.useContext(vr).static||X.useLayoutEffect(n)}function CT(){let{isDataRoute:n}=X.useContext(qr);return n?FT():xT()}function xT(){st(Ol(),"useNavigate() may be used only in the context of a <Router> component.");let n=X.useContext(ra),{basename:e,navigator:t}=X.useContext(vr),{matches:i}=X.useContext(qr),{pathname:o}=bs(),l=JSON.stringify(q_(i)),h=X.useRef(!1);return Y_(()=>{h.current=!0}),X.useCallback((g,y={})=>{if(mr(h.current,Q_),!h.current)return;if(typeof g=="number"){t.go(g);return}let w=W_(g,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:jr([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}X.createContext(null);function Ll(n,{relative:e}={}){let{matches:t}=X.useContext(qr),{pathname:i}=bs(),o=JSON.stringify(q_(t));return X.useMemo(()=>W_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function PT(n,e){return X_(n,e)}function X_(n,e,t,i){st(Ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=X.useContext(vr),{matches:l}=X.useContext(qr),h=l[l.length-1],f=h?h.params:{},g=h?h.pathname:"/",y=h?h.pathnameBase:"/",w=h&&h.route;{let V=w&&w.path||"";J_(g,!w||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let I=bs(),S;if(e){let V=typeof e=="string"?na(e):e;st(y==="/"||V.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${V.pathname}" was given in the \`location\` prop.`),S=V}else S=I;let A=S.pathname||"/",b=A;if(y!=="/"){let V=y.replace(/^\//,"").split("/");b="/"+A.replace(/^\//,"").split("/").slice(V.length).join("/")}let M=$_(n,{pathname:b});mr(w||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),mr(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=NT(M&&M.map(V=>Object.assign({},V,{params:Object.assign({},f,V.params),pathname:jr([y,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?y:jr([y,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),l,t,i);return e&&N?X.createElement(Dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},N):N}function kT(){let n=MT(),e=wT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:l},"ErrorBoundary")," or"," ",X.createElement("code",{style:l},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:o},t):null,h)}var RT=X.createElement(kT,null),AT=class extends X.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?X.createElement(qr.Provider,{value:this.props.routeContext},X.createElement(wp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bT({routeContext:n,match:e,children:t}){let i=X.useContext(ra);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(qr.Provider,{value:n},t)}function NT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t?.errors;if(l!=null){let g=o.findIndex(y=>y.route.id&&l?.[y.route.id]!==void 0);st(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,f=-1;if(t)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=g),y.route.id){let{loaderData:w,errors:I}=t,S=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!I||I[y.route.id]===void 0);if(y.route.lazy||S){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((g,y,w)=>{let I,S=!1,A=null,b=null;t&&(I=l&&y.route.id?l[y.route.id]:void 0,A=y.route.errorElement||RT,h&&(f<0&&w===0?(J_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,b=null):f===w&&(S=!0,b=y.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,w+1)),N=()=>{let V;return I?V=A:S?V=b:y.route.Component?V=X.createElement(y.route.Component,null):y.route.element?V=y.route.element:V=g,X.createElement(bT,{match:y,routeContext:{outlet:g,matches:M,isDataRoute:t!=null},children:V})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?X.createElement(AT,{location:t.location,revalidation:t.revalidation,component:A,error:I,children:N(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):N()},null)}function Ep(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DT(n){let e=X.useContext(ra);return st(e,Ep(n)),e}function OT(n){let e=X.useContext(uh);return st(e,Ep(n)),e}function LT(n){let e=X.useContext(qr);return st(e,Ep(n)),e}function Tp(n){let e=LT(n),t=e.matches[e.matches.length-1];return st(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function VT(){return Tp("useRouteId")}function MT(){let n=X.useContext(wp),e=OT("useRouteError"),t=Tp("useRouteError");return n!==void 0?n:e.errors?.[t]}function FT(){let{router:n}=DT("useNavigate"),e=Tp("useNavigate"),t=X.useRef(!1);return Y_(()=>{t.current=!0}),X.useCallback(async(o,l={})=>{mr(t.current,Q_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Dy={};function J_(n,e,t){!e&&!Dy[n]&&(Dy[n]=!0,mr(!1,t))}X.memo(jT);function jT({routes:n,future:e,state:t}){return X_(n,void 0,t,e)}function Ti(n){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function UT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){st(!Ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=X.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=na(t));let{pathname:g="/",search:y="",hash:w="",state:I=null,key:S="default"}=t,A=X.useMemo(()=>{let b=Ur(g,h);return b==null?null:{location:{pathname:b,search:y,hash:w,state:I,key:S},navigationType:i}},[h,g,y,w,I,S,i]);return mr(A!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:X.createElement(vr.Provider,{value:f},X.createElement(Dl.Provider,{children:e,value:A}))}function zT({children:n,location:e}){return PT(Mf(n),e)}function Mf(n,e=[]){let t=[];return X.Children.forEach(n,(i,o)=>{if(!X.isValidElement(i))return;let l=[...e,o];if(i.type===X.Fragment){t.push.apply(t,Mf(i.props.children,l));return}st(i.type===Ti,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Mf(i.props.children,l)),t.push(h)}),t}var Sc="get",Ic="application/x-www-form-urlencoded";function ch(n){return n!=null&&typeof n.tagName=="string"}function $T(n){return ch(n)&&n.tagName.toLowerCase()==="button"}function BT(n){return ch(n)&&n.tagName.toLowerCase()==="form"}function HT(n){return ch(n)&&n.tagName.toLowerCase()==="input"}function qT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function WT(n,e){return n.button===0&&(!e||e==="_self")&&!qT(n)}var cc=null;function GT(){if(cc===null)try{new FormData(document.createElement("form"),0),cc=!1}catch{cc=!0}return cc}var KT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ff(n){return n!=null&&!KT.has(n)?(mr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ic}"`),null):n}function QT(n,e){let t,i,o,l,h;if(BT(n)){let f=n.getAttribute("action");i=f?Ur(f,e):null,t=n.getAttribute("method")||Sc,o=ff(n.getAttribute("enctype"))||Ic,l=new FormData(n)}else if($T(n)||HT(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=n.getAttribute("formaction")||f.getAttribute("action");if(i=g?Ur(g,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Sc,o=ff(n.getAttribute("formenctype"))||ff(f.getAttribute("enctype"))||Ic,l=new FormData(f,n),!GT()){let{name:y,type:w,value:I}=n;if(w==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,I)}}else{if(ch(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Sc,i=null,o=Ic,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function Sp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function YT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function JT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await YT(l,t);return h.links?h.links():[]}return[]}));return nS(i.flat(1).filter(XT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Oy(n,e,t,i,o,l){let h=(g,y)=>t[y]?g.route.id!==t[y].route.id:!0,f=(g,y)=>t[y].pathname!==g.pathname||t[y].route.path?.endsWith("*")&&t[y].params["*"]!==g.params["*"];return l==="assets"?e.filter((g,y)=>h(g,y)||f(g,y)):l==="data"?e.filter((g,y)=>{let w=i.routes[g.route.id];if(!w||!w.hasLoader)return!1;if(h(g,y)||f(g,y))return!0;if(g.route.shouldRevalidate){let I=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function ZT(n,e,{includeHydrateFallback:t}={}){return eS(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function eS(n){return[...new Set(n)]}function tS(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function nS(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(tS(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rS=new Set([100,101,204,205]);function iS(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Ur(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Z_(){let n=X.useContext(ra);return Sp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function sS(){let n=X.useContext(uh);return Sp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ip=X.createContext(void 0);Ip.displayName="FrameworkContext";function e0(){let n=X.useContext(Ip);return Sp(n,"You must render this element inside a <HydratedRouter> element"),n}function oS(n,e){let t=X.useContext(Ip),[i,o]=X.useState(!1),[l,h]=X.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:y,onMouseLeave:w,onTouchStart:I}=e,S=X.useRef(null);X.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let M=V=>{V.forEach(B=>{h(B.isIntersecting)})},N=new IntersectionObserver(M,{threshold:.5});return S.current&&N.observe(S.current),()=>{N.disconnect()}}},[n]),X.useEffect(()=>{if(i){let M=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(M)}}},[i]);let A=()=>{o(!0)},b=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:ll(f,A),onBlur:ll(g,b),onMouseEnter:ll(y,A),onMouseLeave:ll(w,b),onTouchStart:ll(I,A)}]:[!1,S,{}]}function ll(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function aS({page:n,...e}){let{router:t}=Z_(),i=X.useMemo(()=>$_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?X.createElement(uS,{page:n,matches:i,...e}):null}function lS(n){let{manifest:e,routeModules:t}=e0(),[i,o]=X.useState([]);return X.useEffect(()=>{let l=!1;return JT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function uS({page:n,matches:e,...t}){let i=bs(),{manifest:o,routeModules:l}=e0(),{basename:h}=Z_(),{loaderData:f,matches:g}=sS(),y=X.useMemo(()=>Oy(n,e,g,o,i,"data"),[n,e,g,o,i]),w=X.useMemo(()=>Oy(n,e,g,o,i,"assets"),[n,e,g,o,i]),I=X.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let b=new Set,M=!1;if(e.forEach(V=>{let B=o.routes[V.route.id];!B||!B.hasLoader||(!y.some(q=>q.route.id===V.route.id)&&V.route.id in f&&l[V.route.id]?.shouldRevalidate||B.hasClientLoader?M=!0:b.add(V.route.id))}),b.size===0)return[];let N=iS(n,h);return M&&b.size>0&&N.searchParams.set("_routes",e.filter(V=>b.has(V.route.id)).map(V=>V.route.id).join(",")),[N.pathname+N.search]},[h,f,i,o,y,e,n,l]),S=X.useMemo(()=>ZT(w,o),[w,o]),A=lS(w);return X.createElement(X.Fragment,null,I.map(b=>X.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),S.map(b=>X.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),A.map(({key:b,link:M})=>X.createElement("link",{key:b,...M})))}function cS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var t0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t0&&(window.__reactRouterVersion="7.6.3")}catch{}function hS({basename:n,children:e,window:t}){let i=X.useRef();i.current==null&&(i.current=X1({window:t,v5Compat:!0}));let o=i.current,[l,h]=X.useState({action:o.action,location:o.location}),f=X.useCallback(g=>{X.startTransition(()=>h(g))},[h]);return X.useLayoutEffect(()=>o.listen(f),[o,f]),X.createElement(UT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bi=X.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:g,to:y,preventScrollReset:w,viewTransition:I,...S},A){let{basename:b}=X.useContext(vr),M=typeof y=="string"&&n0.test(y),N,V=!1;if(typeof y=="string"&&M&&(N=y,t0))try{let x=new URL(window.location.href),R=y.startsWith("//")?new URL(x.protocol+y):new URL(y),D=Ur(R.pathname,b);R.origin===x.origin&&D!=null?y=D+R.search+R.hash:V=!0}catch{mr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=IT(y,{relative:o}),[q,K,J]=oS(i,S),Q=mS(y,{replace:h,state:f,target:g,preventScrollReset:w,relative:o,viewTransition:I});function E(x){e&&e(x),x.defaultPrevented||Q(x)}let T=X.createElement("a",{...S,...J,href:N||B,onClick:V||l?e:E,ref:cS(A,K),target:g,"data-discover":!M&&t==="render"?"true":void 0});return q&&!M?X.createElement(X.Fragment,null,T,X.createElement(aS,{page:B})):T});Bi.displayName="Link";var dS=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:g,...y},w){let I=Ll(h,{relative:y.relative}),S=bs(),A=X.useContext(uh),{navigator:b,basename:M}=X.useContext(vr),N=A!=null&&wS(I)&&f===!0,V=b.encodeLocation?b.encodeLocation(I).pathname:I.pathname,B=S.pathname,q=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(B=B.toLowerCase(),q=q?q.toLowerCase():null,V=V.toLowerCase()),q&&M&&(q=Ur(q,M)||q);const K=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let J=B===V||!o&&B.startsWith(V)&&B.charAt(K)==="/",Q=q!=null&&(q===V||!o&&q.startsWith(V)&&q.charAt(V.length)==="/"),E={isActive:J,isPending:Q,isTransitioning:N},T=J?e:void 0,x;typeof i=="function"?x=i(E):x=[i,J?"active":null,Q?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(E):l;return X.createElement(Bi,{...y,"aria-current":T,className:x,ref:w,style:R,to:h,viewTransition:f},typeof g=="function"?g(E):g)});dS.displayName="NavLink";var fS=X.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Sc,action:f,onSubmit:g,relative:y,preventScrollReset:w,viewTransition:I,...S},A)=>{let b=vS(),M=_S(f,{relative:y}),N=h.toLowerCase()==="get"?"get":"post",V=typeof f=="string"&&n0.test(f),B=q=>{if(g&&g(q),q.defaultPrevented)return;q.preventDefault();let K=q.nativeEvent.submitter,J=K?.getAttribute("formmethod")||h;b(K||q.currentTarget,{fetcherKey:e,method:J,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:I})};return X.createElement("form",{ref:A,method:N,action:M,onSubmit:i?g:B,...S,"data-discover":!V&&n==="render"?"true":void 0})});fS.displayName="Form";function pS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(n){let e=X.useContext(ra);return st(e,pS(n)),e}function mS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=CT(),g=bs(),y=Ll(n,{relative:l});return X.useCallback(w=>{if(WT(w,e)){w.preventDefault();let I=t!==void 0?t:Il(g)===Il(y);f(n,{replace:I,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[g,f,y,t,i,e,n,o,l,h])}var gS=0,yS=()=>`__${String(++gS)}__`;function vS(){let{router:n}=r0("useSubmit"),{basename:e}=X.useContext(vr),t=VT();return X.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:g,body:y}=QT(i,e);if(o.navigate===!1){let w=o.fetcherKey||yS();await n.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function _S(n,{relative:e}={}){let{basename:t}=X.useContext(vr),i=X.useContext(qr);st(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Ll(n||".",{relative:e})},h=bs();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),g=f.getAll("index");if(g.some(w=>w==="")){f.delete("index"),g.filter(I=>I).forEach(I=>f.append("index",I));let w=f.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:jr([t,l.pathname])),Il(l)}function wS(n,e={}){let t=X.useContext(K_);st(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=r0("useViewTransitionState"),o=Ll(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ur(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ur(t.nextLocation.pathname,i)||t.nextLocation.pathname;return zc(o.pathname,h)!=null||zc(o.pathname,l)!=null}[...rS];var cn=function(){return cn=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},cn.apply(this,arguments)};function Cp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function $c(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Ze="-ms-",yl="-moz-",He="-webkit-",i0="comm",hh="rule",xp="decl",ES="@import",s0="@keyframes",TS="@layer",o0=Math.abs,Pp=String.fromCharCode,Ff=Object.assign;function SS(n,e){return Nt(n,0)^45?(((e<<2^Nt(n,0))<<2^Nt(n,1))<<2^Nt(n,2))<<2^Nt(n,3):0}function a0(n){return n.trim()}function Vr(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function Cc(n,e,t){return n.indexOf(e,t)}function Nt(n,e){return n.charCodeAt(e)|0}function Bo(n,e,t){return n.slice(e,t)}function lr(n){return n.length}function l0(n){return n.length}function dl(n,e){return e.push(n),n}function IS(n,e){return n.map(e).join("")}function Ly(n,e){return n.filter(function(t){return!Vr(t,e)})}var dh=1,Ho=1,u0=0,bn=0,yt=0,ia="";function fh(n,e,t,i,o,l,h,f){return{value:n,root:e,parent:t,type:i,props:o,children:l,line:dh,column:Ho,length:h,return:"",siblings:f}}function Si(n,e){return Ff(fh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Co(n){for(;n.root;)n=Si(n.root,{children:[n]});dl(n,n.siblings)}function CS(){return yt}function xS(){return yt=bn>0?Nt(ia,--bn):0,Ho--,yt===10&&(Ho=1,dh--),yt}function Kn(){return yt=bn<u0?Nt(ia,bn++):0,Ho++,yt===10&&(Ho=1,dh++),yt}function Ts(){return Nt(ia,bn)}function xc(){return bn}function ph(n,e){return Bo(ia,n,e)}function jf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function PS(n){return dh=Ho=1,u0=lr(ia=n),bn=0,[]}function kS(n){return ia="",n}function pf(n){return a0(ph(bn-1,Uf(n===91?n+2:n===40?n+1:n)))}function RS(n){for(;(yt=Ts())&&yt<33;)Kn();return jf(n)>2||jf(yt)>3?"":" "}function AS(n,e){for(;--e&&Kn()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return ph(n,xc()+(e<6&&Ts()==32&&Kn()==32))}function Uf(n){for(;Kn();)switch(yt){case n:return bn;case 34:case 39:n!==34&&n!==39&&Uf(yt);break;case 40:n===41&&Uf(n);break;case 92:Kn();break}return bn}function bS(n,e){for(;Kn()&&n+yt!==57;)if(n+yt===84&&Ts()===47)break;return"/*"+ph(e,bn-1)+"*"+Pp(n===47?n:Kn())}function NS(n){for(;!jf(Ts());)Kn();return ph(n,bn)}function DS(n){return kS(Pc("",null,null,null,[""],n=PS(n),0,[0],n))}function Pc(n,e,t,i,o,l,h,f,g){for(var y=0,w=0,I=h,S=0,A=0,b=0,M=1,N=1,V=1,B=0,q="",K=o,J=l,Q=i,E=q;N;)switch(b=B,B=Kn()){case 40:if(b!=108&&Nt(E,I-1)==58){Cc(E+=ke(pf(B),"&","&\f"),"&\f",o0(y?f[y-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:E+=pf(B);break;case 9:case 10:case 13:case 32:E+=RS(b);break;case 92:E+=AS(xc()-1,7);continue;case 47:switch(Ts()){case 42:case 47:dl(OS(bS(Kn(),xc()),e,t,g),g);break;default:E+="/"}break;case 123*M:f[y++]=lr(E)*V;case 125*M:case 59:case 0:switch(B){case 0:case 125:N=0;case 59+w:V==-1&&(E=ke(E,/\f/g,"")),A>0&&lr(E)-I&&dl(A>32?My(E+";",i,t,I-1,g):My(ke(E," ","")+";",i,t,I-2,g),g);break;case 59:E+=";";default:if(dl(Q=Vy(E,e,t,y,w,o,f,q,K=[],J=[],I,l),l),B===123)if(w===0)Pc(E,e,Q,Q,K,l,I,f,J);else switch(S===99&&Nt(E,3)===110?100:S){case 100:case 108:case 109:case 115:Pc(n,Q,Q,i&&dl(Vy(n,Q,Q,0,0,o,f,q,o,K=[],I,J),J),o,J,I,f,i?K:J);break;default:Pc(E,Q,Q,Q,[""],J,0,f,J)}}y=w=A=0,M=V=1,q=E="",I=h;break;case 58:I=1+lr(E),A=b;default:if(M<1){if(B==123)--M;else if(B==125&&M++==0&&xS()==125)continue}switch(E+=Pp(B),B*M){case 38:V=w>0?1:(E+="\f",-1);break;case 44:f[y++]=(lr(E)-1)*V,V=1;break;case 64:Ts()===45&&(E+=pf(Kn())),S=Ts(),w=I=lr(q=E+=NS(xc())),B++;break;case 45:b===45&&lr(E)==2&&(M=0)}}return l}function Vy(n,e,t,i,o,l,h,f,g,y,w,I){for(var S=o-1,A=o===0?l:[""],b=l0(A),M=0,N=0,V=0;M<i;++M)for(var B=0,q=Bo(n,S+1,S=o0(N=h[M])),K=n;B<b;++B)(K=a0(N>0?A[B]+" "+q:ke(q,/&\f/g,A[B])))&&(g[V++]=K);return fh(n,e,t,o===0?hh:f,g,y,w,I)}function OS(n,e,t,i){return fh(n,e,t,i0,Pp(CS()),Bo(n,2,-2),0,i)}function My(n,e,t,i,o){return fh(n,e,t,xp,Bo(n,0,i),Bo(n,i+1,-1),i,o)}function c0(n,e,t){switch(SS(n,e)){case 5103:return He+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+n+n;case 4789:return yl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return He+n+yl+n+Ze+n+n;case 5936:switch(Nt(n,e+11)){case 114:return He+n+Ze+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return He+n+Ze+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return He+n+Ze+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return He+n+Ze+n+n;case 6165:return He+n+Ze+"flex-"+n+n;case 5187:return He+n+ke(n,/(\w+).+(:[^]+)/,He+"box-$1$2"+Ze+"flex-$1$2")+n;case 5443:return He+n+Ze+"flex-item-"+ke(n,/flex-|-self/g,"")+(Vr(n,/flex-|baseline/)?"":Ze+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return He+n+Ze+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return He+n+Ze+ke(n,"shrink","negative")+n;case 5292:return He+n+Ze+ke(n,"basis","preferred-size")+n;case 6060:return He+"box-"+ke(n,"-grow","")+He+n+Ze+ke(n,"grow","positive")+n;case 4554:return He+ke(n,/([^-])(transform)/g,"$1"+He+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+n+n;case 4200:if(!Vr(n,/flex-|baseline/))return Ze+"grid-column-align"+Bo(n,e)+n;break;case 2592:case 3360:return Ze+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,Vr(i.props,/grid-\w+-end/)})?~Cc(n+(t=t[e].value),"span",0)?n:Ze+ke(n,"-start","")+n+Ze+"grid-row-span:"+(~Cc(t,"span",0)?Vr(t,/\d+/):+Vr(t,/\d+/)-+Vr(n,/\d+/))+";":Ze+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Vr(i.props,/grid-\w+-start/)})?n:Ze+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,He+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lr(n)-1-e>6)switch(Nt(n,e+1)){case 109:if(Nt(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+yl+(Nt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Cc(n,"stretch",0)?c0(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,h,f,g,y){return Ze+o+":"+l+y+(h?Ze+o+"-span:"+(f?g:+g-+l)+y:"")+n});case 4949:if(Nt(n,e+6)===121)return ke(n,":",":"+He)+n;break;case 6444:switch(Nt(n,Nt(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+(Nt(n,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Ze+"$2box$3")+n;case 100:return ke(n,":",":"+Ze)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Bc(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function LS(n,e,t,i){switch(n.type){case TS:if(n.children.length)break;case ES:case xp:return n.return=n.return||n.value;case i0:return"";case s0:return n.return=n.value+"{"+Bc(n.children,i)+"}";case hh:if(!lr(n.value=n.props.join(",")))return""}return lr(t=Bc(n.children,i))?n.return=n.value+"{"+t+"}":""}function VS(n){var e=l0(n);return function(t,i,o,l){for(var h="",f=0;f<e;f++)h+=n[f](t,i,o,l)||"";return h}}function MS(n){return function(e){e.root||(e=e.return)&&n(e)}}function FS(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case xp:n.return=c0(n.value,n.length,t);return;case s0:return Bc([Si(n,{value:ke(n.value,"@","@"+He)})],i);case hh:if(n.length)return IS(t=n.props,function(o){switch(Vr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Co(Si(n,{props:[ke(o,/:(read-\w+)/,":"+yl+"$1")]})),Co(Si(n,{props:[o]})),Ff(n,{props:Ly(t,i)});break;case"::placeholder":Co(Si(n,{props:[ke(o,/:(plac\w+)/,":"+He+"input-$1")]})),Co(Si(n,{props:[ke(o,/:(plac\w+)/,":"+yl+"$1")]})),Co(Si(n,{props:[ke(o,/:(plac\w+)/,Ze+"input-$1")]})),Co(Si(n,{props:[o]})),Ff(n,{props:Ly(t,i)});break}return""})}}var jS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vn={},qo=typeof process<"u"&&vn!==void 0&&(vn.REACT_APP_SC_ATTR||vn.SC_ATTR)||"data-styled",h0="active",d0="data-styled-version",mh="6.1.19",kp=`/*!sc*/
`,Hc=typeof window<"u"&&typeof document<"u",US=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==""?vn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.SC_DISABLE_SPEEDY!==void 0&&vn.SC_DISABLE_SPEEDY!==""&&vn.SC_DISABLE_SPEEDY!=="false"&&vn.SC_DISABLE_SPEEDY),gh=Object.freeze([]),Wo=Object.freeze({});function zS(n,e,t){return t===void 0&&(t=Wo),n.theme!==t.theme&&n.theme||e||t.theme}var f0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$S=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BS=/(^-|-$)/g;function Fy(n){return n.replace($S,"-").replace(BS,"")}var HS=/(a)(d)/gi,hc=52,jy=function(n){return String.fromCharCode(n+(n>25?39:97))};function zf(n){var e,t="";for(e=Math.abs(n);e>hc;e=e/hc|0)t=jy(e%hc)+t;return(jy(e%hc)+t).replace(HS,"$1-$2")}var mf,p0=5381,Do=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},m0=function(n){return Do(p0,n)};function qS(n){return zf(m0(n)>>>0)}function WS(n){return n.displayName||n.name||"Component"}function gf(n){return typeof n=="string"&&!0}var g0=typeof Symbol=="function"&&Symbol.for,y0=g0?Symbol.for("react.memo"):60115,GS=g0?Symbol.for("react.forward_ref"):60112,KS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YS=((mf={})[GS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mf[y0]=v0,mf);function Uy(n){return("type"in(e=n)&&e.type.$$typeof)===y0?v0:"$$typeof"in n?YS[n.$$typeof]:KS;var e}var XS=Object.defineProperty,JS=Object.getOwnPropertyNames,zy=Object.getOwnPropertySymbols,ZS=Object.getOwnPropertyDescriptor,eI=Object.getPrototypeOf,$y=Object.prototype;function _0(n,e,t){if(typeof e!="string"){if($y){var i=eI(e);i&&i!==$y&&_0(n,i,t)}var o=JS(e);zy&&(o=o.concat(zy(e)));for(var l=Uy(n),h=Uy(e),f=0;f<o.length;++f){var g=o[f];if(!(g in QS||t&&t[g]||h&&g in h||l&&g in l)){var y=ZS(e,g);try{XS(n,g,y)}catch{}}}}return n}function Go(n){return typeof n=="function"}function Rp(n){return typeof n=="object"&&"styledComponentId"in n}function ws(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function By(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Cl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function $f(n,e,t){if(t===void 0&&(t=!1),!t&&!Cl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=$f(n[i],e[i]);else if(Cl(e))for(var i in e)n[i]=$f(n[i],e[i]);return n}function Ap(n,e){Object.defineProperty(n,"toString",{value:e})}function Vl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tI=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;e>=l;)if((l<<=1)<0)throw Vl(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var h=o;h<l;h++)this.groupSizes[h]=0}for(var f=this.indexOfGroup(e+1),g=(h=0,t.length);h<g;h++)this.tag.insertRule(f,t[h])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),l=o+i,h=o;h<l;h++)t+="".concat(this.tag.getRule(h)).concat(kp);return t},n}(),kc=new Map,qc=new Map,Rc=1,dc=function(n){if(kc.has(n))return kc.get(n);for(;qc.has(Rc);)Rc++;var e=Rc++;return kc.set(n,e),qc.set(e,n),e},nI=function(n,e){Rc=e+1,kc.set(n,e),qc.set(e,n)},rI="style[".concat(qo,"][").concat(d0,'="').concat(mh,'"]'),iI=new RegExp("^".concat(qo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sI=function(n,e,t){for(var i,o=t.split(","),l=0,h=o.length;l<h;l++)(i=o[l])&&n.registerName(e,i)},oI=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(kp),o=[],l=0,h=i.length;l<h;l++){var f=i[l].trim();if(f){var g=f.match(iI);if(g){var y=0|parseInt(g[1],10),w=g[2];y!==0&&(nI(w,y),sI(n,w,g[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(f)}}},Hy=function(n){for(var e=document.querySelectorAll(rI),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(qo)!==h0&&(oI(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function aI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var w0=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(f){var g=Array.from(f.querySelectorAll("style[".concat(qo,"]")));return g[g.length-1]}(t),l=o!==void 0?o.nextSibling:null;i.setAttribute(qo,h0),i.setAttribute(d0,mh);var h=aI();return h&&i.setAttribute("nonce",h),t.insertBefore(i,l),i},lI=function(){function n(e){this.element=w0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var h=i[o];if(h.ownerNode===t)return h}throw Vl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),uI=function(){function n(e){this.element=w0(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),cI=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),qy=Hc,hI={isServer:!Hc,useCSSOMInjection:!US},E0=function(){function n(e,t,i){e===void 0&&(e=Wo),t===void 0&&(t={});var o=this;this.options=cn(cn({},hI),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Hc&&qy&&(qy=!1,Hy(this)),Ap(this,function(){return function(l){for(var h=l.getTag(),f=h.length,g="",y=function(I){var S=function(V){return qc.get(V)}(I);if(S===void 0)return"continue";var A=l.names.get(S),b=h.getGroup(I);if(A===void 0||!A.size||b.length===0)return"continue";var M="".concat(qo,".g").concat(I,'[id="').concat(S,'"]'),N="";A!==void 0&&A.forEach(function(V){V.length>0&&(N+="".concat(V,","))}),g+="".concat(b).concat(M,'{content:"').concat(N,'"}').concat(kp)},w=0;w<f;w++)y(w);return g}(o)})}return n.registerId=function(e){return dc(e)},n.prototype.rehydrate=function(){!this.server&&Hc&&Hy(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(cn(cn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new cI(o):i?new lI(o):new uI(o)}(this.options),new tI(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(dc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(dc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(dc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),dI=/&/g,fI=/^\s*\/\/.*$/gm;function T0(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=T0(t.children,e)),t})}function pI(n){var e,t,i,o=Wo,l=o.options,h=l===void 0?Wo:l,f=o.plugins,g=f===void 0?gh:f,y=function(S,A,b){return b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(e):S},w=g.slice();w.push(function(S){S.type===hh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(dI,t).replace(i,y))}),h.prefix&&w.push(FS),w.push(LS);var I=function(S,A,b,M){A===void 0&&(A=""),b===void 0&&(b=""),M===void 0&&(M="&"),e=M,t=A,i=new RegExp("\\".concat(t,"\\b"),"g");var N=S.replace(fI,""),V=DS(b||A?"".concat(b," ").concat(A," { ").concat(N," }"):N);h.namespace&&(V=T0(V,h.namespace));var B=[];return Bc(V,VS(w.concat(MS(function(q){return B.push(q)})))),B};return I.hash=g.length?g.reduce(function(S,A){return A.name||Vl(15),Do(S,A.name)},p0).toString():"",I}var mI=new E0,Bf=pI(),S0=wn.createContext({shouldForwardProp:void 0,styleSheet:mI,stylis:Bf});S0.Consumer;wn.createContext(void 0);function Wy(){return X.useContext(S0)}var gI=function(){function n(e,t){var i=this;this.inject=function(o,l){l===void 0&&(l=Bf);var h=i.name+l.hash;o.hasNameForId(i.id,h)||o.insertRules(i.id,h,l(i.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ap(this,function(){throw Vl(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Bf),this.name+e.hash},n}(),yI=function(n){return n>="A"&&n<="Z"};function Gy(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;yI(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var I0=function(n){return n==null||n===!1||n===""},C0=function(n){var e,t,i=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!I0(l)&&(Array.isArray(l)&&l.isCss||Go(l)?i.push("".concat(Gy(o),":"),l,";"):Cl(l)?i.push.apply(i,$c($c(["".concat(o," {")],C0(l),!1),["}"],!1)):i.push("".concat(Gy(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in jS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Ss(n,e,t,i){if(I0(n))return[];if(Rp(n))return[".".concat(n.styledComponentId)];if(Go(n)){if(!Go(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return Ss(o,e,t,i)}var l;return n instanceof gI?t?(n.inject(t,i),[n.getName(i)]):[n]:Cl(n)?C0(n):Array.isArray(n)?Array.prototype.concat.apply(gh,n.map(function(h){return Ss(h,e,t,i)})):[n.toString()]}function vI(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Go(t)&&!Rp(t))return!1}return!0}var _I=m0(mh),wI=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&vI(e),this.componentId=t,this.baseHash=Do(_I,t),this.baseStyle=i,E0.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ws(o,this.staticRulesId);else{var l=By(Ss(this.rules,e,t,i)),h=zf(Do(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,h)){var f=i(l,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,f)}o=ws(o,h),this.staticRulesId=h}else{for(var g=Do(this.baseHash,i.hash),y="",w=0;w<this.rules.length;w++){var I=this.rules[w];if(typeof I=="string")y+=I;else if(I){var S=By(Ss(I,e,t,i));g=Do(g,S+w),y+=S}}if(y){var A=zf(g>>>0);t.hasNameForId(this.componentId,A)||t.insertRules(this.componentId,A,i(y,".".concat(A),void 0,this.componentId)),o=ws(o,A)}}return o},n}(),x0=wn.createContext(void 0);x0.Consumer;var yf={};function EI(n,e,t){var i=Rp(n),o=n,l=!gf(n),h=e.attrs,f=h===void 0?gh:h,g=e.componentId,y=g===void 0?function(K,J){var Q=typeof K!="string"?"sc":Fy(K);yf[Q]=(yf[Q]||0)+1;var E="".concat(Q,"-").concat(qS(mh+Q+yf[Q]));return J?"".concat(J,"-").concat(E):E}(e.displayName,e.parentComponentId):g,w=e.displayName,I=w===void 0?function(K){return gf(K)?"styled.".concat(K):"Styled(".concat(WS(K),")")}(n):w,S=e.displayName&&e.componentId?"".concat(Fy(e.displayName),"-").concat(e.componentId):e.componentId||y,A=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,b=e.shouldForwardProp;if(i&&o.shouldForwardProp){var M=o.shouldForwardProp;if(e.shouldForwardProp){var N=e.shouldForwardProp;b=function(K,J){return M(K,J)&&N(K,J)}}else b=M}var V=new wI(t,S,i?o.componentStyle:void 0);function B(K,J){return function(Q,E,T){var x=Q.attrs,R=Q.componentStyle,D=Q.defaultProps,j=Q.foldedComponentIds,k=Q.styledComponentId,Ue=Q.target,Ye=wn.useContext(x0),We=Wy(),Oe=Q.shouldForwardProp||We.shouldForwardProp,ie=zS(E,Ye,D)||Wo,de=function(Ce,Pe,Ne){for(var be,Ve=cn(cn({},Pe),{className:void 0,theme:Ne}),at=0;at<Ce.length;at+=1){var Zt=Go(be=Ce[at])?be(Ve):be;for(var Gt in Zt)Ve[Gt]=Gt==="className"?ws(Ve[Gt],Zt[Gt]):Gt==="style"?cn(cn({},Ve[Gt]),Zt[Gt]):Zt[Gt]}return Pe.className&&(Ve.className=ws(Ve.className,Pe.className)),Ve}(x,E,ie),le=de.as||Ue,U={};for(var Y in de)de[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&de.theme===ie||(Y==="forwardedAs"?U.as=de.forwardedAs:Oe&&!Oe(Y,le)||(U[Y]=de[Y]));var ge=function(Ce,Pe){var Ne=Wy(),be=Ce.generateAndInjectStyles(Pe,Ne.styleSheet,Ne.stylis);return be}(R,de),Ie=ws(j,k);return ge&&(Ie+=" "+ge),de.className&&(Ie+=" "+de.className),U[gf(le)&&!f0.has(le)?"class":"className"]=Ie,T&&(U.ref=T),X.createElement(le,U)}(q,K,J)}B.displayName=I;var q=wn.forwardRef(B);return q.attrs=A,q.componentStyle=V,q.displayName=I,q.shouldForwardProp=b,q.foldedComponentIds=i?ws(o.foldedComponentIds,o.styledComponentId):"",q.styledComponentId=S,q.target=i?o.target:n,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=i?function(J){for(var Q=[],E=1;E<arguments.length;E++)Q[E-1]=arguments[E];for(var T=0,x=Q;T<x.length;T++)$f(J,x[T],!0);return J}({},o.defaultProps,K):K}}),Ap(q,function(){return".".concat(q.styledComponentId)}),l&&_0(q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Ky(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var Qy=function(n){return Object.assign(n,{isCss:!0})};function TI(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Go(n)||Cl(n))return Qy(Ss(Ky(gh,$c([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Ss(i):Qy(Ss(Ky(i,e)))}function Hf(n,e,t){if(t===void 0&&(t=Wo),!e)throw Vl(1,e);var i=function(o){for(var l=[],h=1;h<arguments.length;h++)l[h-1]=arguments[h];return n(e,t,TI.apply(void 0,$c([o],l,!1)))};return i.attrs=function(o){return Hf(n,e,cn(cn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Hf(n,e,cn(cn({},t),o))},i}var P0=function(n){return Hf(EI,n)},ae=P0;f0.forEach(function(n){ae[n]=P0(n)});const bp="/pink-elephant/assets/logo-CuvG0akS.png";var k0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yy=wn.createContext&&wn.createContext(k0),SI=["attr","size","title"];function II(n,e){if(n==null)return{};var t=CI(n,e),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)i=l[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function CI(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function Wc(){return Wc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Wc.apply(this,arguments)}function Xy(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function Gc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xy(Object(t),!0).forEach(function(i){xI(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xy(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function xI(n,e,t){return e=PI(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function PI(n){var e=kI(n,"string");return typeof e=="symbol"?e:e+""}function kI(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function R0(n){return n&&n.map((e,t)=>wn.createElement(e.tag,Gc({key:t},e.attr),R0(e.child)))}function Ml(n){return e=>wn.createElement(RI,Wc({attr:Gc({},n.attr)},e),R0(n.child))}function RI(n){var e=t=>{var{attr:i,size:o,title:l}=n,h=II(n,SI),f=o||t.size||"1em",g;return t.className&&(g=t.className),n.className&&(g=(g?g+" ":"")+n.className),wn.createElement("svg",Wc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,h,{className:g,style:Gc(Gc({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&wn.createElement("title",null,l),n.children)};return Yy!==void 0?wn.createElement(Yy.Consumer,null,t=>e(t)):e(k0)}function AI(n){return Ml({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(n)}function bI(n){return Ml({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}const NI=ae.button`
  position: fixed;
  top: 16px;
  left: 16px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  z-index: 1100;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,DI=ae.div`
  position: absolute;
  top: 100px;
  left: 80px;
  background-color: transparent;
  color: white;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    padding-top: 80px;
    background: rgba(0, 0, 0, 0.8);
    transform: translateX(${n=>n.open?"0":"-100%"});
    transition: transform 0.3s ease-in-out;
    gap: 16px;
    left: 0;
    top: 0;
  }
`,xo=ae(Bi)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

  &:hover {
    color: hotpink;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 1rem;
  }
`;function sa(){const[n,e]=X.useState(!1);return L.jsxs(L.Fragment,{children:[L.jsx(NI,{onClick:()=>e(t=>!t),children:n?L.jsx(bI,{}):L.jsx(AI,{})}),L.jsxs(DI,{open:n,children:[L.jsx(xo,{to:"/pochette",onClick:()=>e(!1),children:"Pochette"}),L.jsx(xo,{to:"/photos",onClick:()=>e(!1),children:"Photos"}),L.jsx(xo,{to:"/tracklist",onClick:()=>e(!1),children:"Tracklist"}),L.jsx(xo,{to:"/blog",onClick:()=>e(!1),children:"Blog"}),L.jsx(xo,{to:"/tournee",onClick:()=>e(!1),children:"Tournée"}),L.jsx(xo,{to:"/contact",onClick:()=>e(!1),children:"Contact"})]})]})}const Np="/pink-elephant/assets/AFFICHE-wA9U34NE.png",A0="/pink-elephant/assets/fondvert-BP8Wr7cX.png",OI=ae.div`
  position: relative;
  min-height: 100vh;
  background: url(${A0}) center/cover no-repeat;
  overflow: hidden;
`,LI=ae.main`
  position: relative;
  z-index: 1;
  margin-left: 80px; /* laisse place au Sidebar */
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,VI=ae.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  justify-content: space-between;
  width: 100%;
`,MI=ae.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3rem;
  color: #fff;
  margin-right: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,FI=ae(Bi)`
  display: flex;
  align-items: center;
  margin-left: 16px;
  text-decoration: none;
`,jI=ae.img`
  width: 120px;
  height: auto;
  display: block;
`;ae.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 0.9rem;
`;const UI=ae.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  gap: 48px;
  margin-bottom: 48px;
`,zI=ae.div`
  flex-shrink: 0;
  width: 360px;
  height: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`,$I=ae.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,BI=ae.div`
  flex: 1;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,HI=ae.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
  }
`,qI=ae.button`
  align-self: flex-start;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,WI=ae.div`
  width: 100%;
  max-width: 1000px;
  color: #fff;
  font-family: monospace;
  font-size: 0.85rem;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,Jy=ae.div`
  flex: 1;
  min-width: 240px;

  h3 {
    margin-bottom: 8px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ol {
    margin: 0;
    padding-left: 1.2em;
  }

  li {
    margin-bottom: 4px;
  }
`;function GI(){return L.jsxs(OI,{children:[L.jsx(sa,{}),L.jsxs(LI,{children:[L.jsxs(VI,{children:[L.jsx(FI,{to:"/",children:L.jsx(jI,{src:bp,alt:"Logo Arcadia"})}),L.jsx(MI,{children:"Tracklist"})]}),L.jsxs(UI,{children:[L.jsx(zI,{children:L.jsx($I,{src:Np,alt:"Pink Elephant Cover"})}),L.jsxs(BI,{children:[L.jsxs(HI,{children:[L.jsx("p",{children:"De son charme punk mystique et mystérieux, l’album Pink Elephant vous offre une expérience psychédélique axée sur l’introspection et la beauté intérieure."}),L.jsx("p",{children:"L’album explore plusieurs sujets tels que la dissociation, la mélancolie ou encore la dépression avec une complexité lyrique notable."}),L.jsx("p",{children:"Une tournée musicale à ne surtout pas louper."})]}),L.jsx(qI,{children:"Ouvrir son cœur"})]})]}),L.jsxs(WI,{children:[L.jsxs(Jy,{children:[L.jsx("h3",{children:"Pink Elephant ― Tracklist"}),L.jsxs("ol",{children:[L.jsx("li",{children:"Open Your Heart or Die Trying"}),L.jsx("li",{children:"Pink Elephant"}),L.jsx("li",{children:"Year of the Snake"}),L.jsx("li",{children:"Circle of Trust"}),L.jsx("li",{children:"Alien Nation"})]})]}),L.jsxs(Jy,{children:[L.jsx("h3",{children:" "}),L.jsxs("ol",{start:6,children:[L.jsx("li",{children:"Beyond Salvation"}),L.jsx("li",{children:"Ride or Die"}),L.jsx("li",{children:"I Love Her Shadow"}),L.jsx("li",{children:"She Cries Diamond Rain"}),L.jsx("li",{children:"Stuck in My Head"})]})]})]})]})]})}const b0="/pink-elephant/assets/fondbleu-DnmsmOBS.png",N0="/pink-elephant/assets/vinyle1-BamnOcIK.png",D0="/pink-elephant/assets/vinyle2-BRZYJ9XS.png",KI="/pink-elephant/assets/vinyle3-BtNntJA8.png",QI="/pink-elephant/assets/vinyle4-Baqhg7Yw.png",YI=ae.div`
  position: relative;
  min-height: 100vh;
  background: url(${b0}) center/cover no-repeat;
`,XI=ae.main`
  position: relative;
  z-index: 1;
  margin-left: 80px;   /* décalage pour laisser la place au Sidebar */
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,JI=ae.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`,ZI=ae.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3rem;
  color: #fff;
  margin-right: 16px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`,eC=ae.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: default;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
`,tC=ae.div`
  background: #f0f0ff;
  border: 2px solid #c0c0f0;
  border-radius: 4px;
  width: 360px;
  padding: 12px;
  margin-bottom: 32px;
  position: relative;
  font-family: sans-serif;
  color: #333;

  &::before {
    content: 'Le vinyle Pink Elephant';
    position: absolute;
    top: -24px;
    left: 12px;
    background: #c0c0f0;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 0.85rem;
  }
`,nC=ae.p`
  font-size: 0.9rem;
  line-height: 1.4;
`,rC=ae.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 48px;
`,fc=ae.div`
  position: relative;
  width: 280px;
  height: 280px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`,pc=ae.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;function iC(){return L.jsxs(YI,{children:[L.jsx(sa,{}),L.jsxs(XI,{children:[L.jsxs(JI,{children:[L.jsx(ZI,{children:"Pink Elephant"}),L.jsx(eC,{children:"PO​CHETTE"})]}),L.jsx(tC,{children:L.jsx(nC,{children:"Soutenez la sortie mondiale de l’album Pink Elephant dès sa sortie en streaming. L’album est disponible en vinyle collector."})}),L.jsxs(rC,{children:[L.jsx(fc,{children:L.jsx(pc,{src:N0,alt:"Cover 1"})}),L.jsx(fc,{children:L.jsx(pc,{src:D0,alt:"Cover 2"})}),L.jsx(fc,{children:L.jsx(pc,{src:KI,alt:"Cover 3"})}),L.jsx(fc,{children:L.jsx(pc,{src:QI,alt:"Cover 4"})})]})]})]})}var ul={exports:{}},vf={},_f={exports:{}},wf,Zy;function sC(){if(Zy)return wf;Zy=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wf=n,wf}var Ef,ev;function oC(){if(ev)return Ef;ev=1;var n=sC();function e(){}function t(){}return t.resetWarningCache=e,Ef=function(){function i(h,f,g,y,w,I){if(I!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}i.isRequired=i;function o(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Ef}var tv;function O0(){return tv||(tv=1,_f.exports=oC()()),_f.exports}var mc={exports:{}},nv;function aC(){if(nv)return mc.exports;nv=1;function n(t){var i,o,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var h=t.length;for(i=0;i<h;i++)t[i]&&(o=n(t[i]))&&(l&&(l+=" "),l+=o)}else for(o in t)t[o]&&(l&&(l+=" "),l+=o);return l}function e(){for(var t,i,o=0,l="",h=arguments.length;o<h;o++)(t=arguments[o])&&(i=n(t))&&(l&&(l+=" "),l+=i);return l}return mc.exports=e,mc.exports.clsx=e,mc.exports}var ht={},vi={},rv;function yh(){if(rv)return vi;rv=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.dontSetMe=o,vi.findInArray=n,vi.int=i,vi.isFunction=e,vi.isNum=t;function n(l,h){for(let f=0,g=l.length;f<g;f++)if(h.apply(h,[l[f],f,l]))return l[f]}function e(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Function]"}function t(l){return typeof l=="number"&&!isNaN(l)}function i(l){return parseInt(l,10)}function o(l,h,f){if(l[h])return new Error(`Invalid prop ${h} passed to ${f} - do not set this, set it on the child.`)}return vi}var _i={},iv;function lC(){if(iv)return _i;iv=1,Object.defineProperty(_i,"__esModule",{value:!0}),_i.browserPrefixToKey=t,_i.browserPrefixToStyle=i,_i.default=void 0,_i.getPrefix=e;const n=["Moz","Webkit","O","ms"];function e(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const h=window.document?.documentElement?.style;if(!h||l in h)return"";for(let f=0;f<n.length;f++)if(t(l,n[f])in h)return n[f];return""}function t(l,h){return h?`${h}${o(l)}`:l}function i(l,h){return h?`-${h.toLowerCase()}-${l}`:l}function o(l){let h="",f=!0;for(let g=0;g<l.length;g++)f?(h+=l[g].toUpperCase(),f=!1):l[g]==="-"?f=!0:h+=l[g];return h}return _i.default=e(),_i}var sv;function Dp(){if(sv)return ht;sv=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.addClassName=J,ht.addEvent=h,ht.addUserSelectStyles=B,ht.createCSSTransform=A,ht.createSVGTransform=b,ht.getTouch=N,ht.getTouchIdentifier=V,ht.getTranslation=M,ht.innerHeight=w,ht.innerWidth=I,ht.matchesSelector=o,ht.matchesSelectorAndParentsTo=l,ht.offsetXYFromParent=S,ht.outerHeight=g,ht.outerWidth=y,ht.removeClassName=Q,ht.removeEvent=f,ht.scheduleRemoveUserSelectStyles=q;var n=yh(),e=t(lC());function t(E,T){if(typeof WeakMap=="function")var x=new WeakMap,R=new WeakMap;return(t=function(D,j){if(!j&&D&&D.__esModule)return D;var k,Ue,Ye={__proto__:null,default:D};if(D===null||typeof D!="object"&&typeof D!="function")return Ye;if(k=j?R:x){if(k.has(D))return k.get(D);k.set(D,Ye)}for(const We in D)We!=="default"&&{}.hasOwnProperty.call(D,We)&&((Ue=(k=Object.defineProperty)&&Object.getOwnPropertyDescriptor(D,We))&&(Ue.get||Ue.set)?k(Ye,We,Ue):Ye[We]=D[We]);return Ye})(E,T)}let i="";function o(E,T){return i||(i=(0,n.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(x){return(0,n.isFunction)(E[x])})),(0,n.isFunction)(E[i])?E[i](T):!1}function l(E,T,x){let R=E;do{if(o(R,T))return!0;if(R===x)return!1;R=R.parentNode}while(R);return!1}function h(E,T,x,R){if(!E)return;const D={capture:!0,...R};E.addEventListener?E.addEventListener(T,x,D):E.attachEvent?E.attachEvent("on"+T,x):E["on"+T]=x}function f(E,T,x,R){if(!E)return;const D={capture:!0,...R};E.removeEventListener?E.removeEventListener(T,x,D):E.detachEvent?E.detachEvent("on"+T,x):E["on"+T]=null}function g(E){let T=E.clientHeight;const x=E.ownerDocument.defaultView.getComputedStyle(E);return T+=(0,n.int)(x.borderTopWidth),T+=(0,n.int)(x.borderBottomWidth),T}function y(E){let T=E.clientWidth;const x=E.ownerDocument.defaultView.getComputedStyle(E);return T+=(0,n.int)(x.borderLeftWidth),T+=(0,n.int)(x.borderRightWidth),T}function w(E){let T=E.clientHeight;const x=E.ownerDocument.defaultView.getComputedStyle(E);return T-=(0,n.int)(x.paddingTop),T-=(0,n.int)(x.paddingBottom),T}function I(E){let T=E.clientWidth;const x=E.ownerDocument.defaultView.getComputedStyle(E);return T-=(0,n.int)(x.paddingLeft),T-=(0,n.int)(x.paddingRight),T}function S(E,T,x){const D=T===T.ownerDocument.body?{left:0,top:0}:T.getBoundingClientRect(),j=(E.clientX+T.scrollLeft-D.left)/x,k=(E.clientY+T.scrollTop-D.top)/x;return{x:j,y:k}}function A(E,T){const x=M(E,T,"px");return{[(0,e.browserPrefixToKey)("transform",e.default)]:x}}function b(E,T){return M(E,T,"")}function M(E,T,x){let{x:R,y:D}=E,j=`translate(${R}${x},${D}${x})`;if(T){const k=`${typeof T.x=="string"?T.x:T.x+x}`,Ue=`${typeof T.y=="string"?T.y:T.y+x}`;j=`translate(${k}, ${Ue})`+j}return j}function N(E,T){return E.targetTouches&&(0,n.findInArray)(E.targetTouches,x=>T===x.identifier)||E.changedTouches&&(0,n.findInArray)(E.changedTouches,x=>T===x.identifier)}function V(E){if(E.targetTouches&&E.targetTouches[0])return E.targetTouches[0].identifier;if(E.changedTouches&&E.changedTouches[0])return E.changedTouches[0].identifier}function B(E){if(!E)return;let T=E.getElementById("react-draggable-style-el");T||(T=E.createElement("style"),T.type="text/css",T.id="react-draggable-style-el",T.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,T.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,E.getElementsByTagName("head")[0].appendChild(T)),E.body&&J(E.body,"react-draggable-transparent-selection")}function q(E){window.requestAnimationFrame?window.requestAnimationFrame(()=>{K(E)}):K(E)}function K(E){if(E)try{if(E.body&&Q(E.body,"react-draggable-transparent-selection"),E.selection)E.selection.empty();else{const T=(E.defaultView||window).getSelection();T&&T.type!=="Caret"&&T.removeAllRanges()}}catch{}}function J(E,T){E.classList?E.classList.add(T):E.className.match(new RegExp(`(?:^|\\s)${T}(?!\\S)`))||(E.className+=` ${T}`)}function Q(E,T){E.classList?E.classList.remove(T):E.className=E.className.replace(new RegExp(`(?:^|\\s)${T}(?!\\S)`,"g"),"")}return ht}var or={},ov;function L0(){if(ov)return or;ov=1,Object.defineProperty(or,"__esModule",{value:!0}),or.canDragX=o,or.canDragY=l,or.createCoreData=f,or.createDraggableData=g,or.getBoundPosition=t,or.getControlPosition=h,or.snapToGrid=i;var n=yh(),e=Dp();function t(I,S,A){if(!I.props.bounds)return[S,A];let{bounds:b}=I.props;b=typeof b=="string"?b:y(b);const M=w(I);if(typeof b=="string"){const{ownerDocument:N}=M,V=N.defaultView;let B;if(b==="parent"?B=M.parentNode:B=M.getRootNode().querySelector(b),!(B instanceof V.HTMLElement))throw new Error('Bounds selector "'+b+'" could not find an element.');const q=B,K=V.getComputedStyle(M),J=V.getComputedStyle(q);b={left:-M.offsetLeft+(0,n.int)(J.paddingLeft)+(0,n.int)(K.marginLeft),top:-M.offsetTop+(0,n.int)(J.paddingTop)+(0,n.int)(K.marginTop),right:(0,e.innerWidth)(q)-(0,e.outerWidth)(M)-M.offsetLeft+(0,n.int)(J.paddingRight)-(0,n.int)(K.marginRight),bottom:(0,e.innerHeight)(q)-(0,e.outerHeight)(M)-M.offsetTop+(0,n.int)(J.paddingBottom)-(0,n.int)(K.marginBottom)}}return(0,n.isNum)(b.right)&&(S=Math.min(S,b.right)),(0,n.isNum)(b.bottom)&&(A=Math.min(A,b.bottom)),(0,n.isNum)(b.left)&&(S=Math.max(S,b.left)),(0,n.isNum)(b.top)&&(A=Math.max(A,b.top)),[S,A]}function i(I,S,A){const b=Math.round(S/I[0])*I[0],M=Math.round(A/I[1])*I[1];return[b,M]}function o(I){return I.props.axis==="both"||I.props.axis==="x"}function l(I){return I.props.axis==="both"||I.props.axis==="y"}function h(I,S,A){const b=typeof S=="number"?(0,e.getTouch)(I,S):null;if(typeof S=="number"&&!b)return null;const M=w(A),N=A.props.offsetParent||M.offsetParent||M.ownerDocument.body;return(0,e.offsetXYFromParent)(b||I,N,A.props.scale)}function f(I,S,A){const b=!(0,n.isNum)(I.lastX),M=w(I);return b?{node:M,deltaX:0,deltaY:0,lastX:S,lastY:A,x:S,y:A}:{node:M,deltaX:S-I.lastX,deltaY:A-I.lastY,lastX:I.lastX,lastY:I.lastY,x:S,y:A}}function g(I,S){const A=I.props.scale;return{node:S.node,x:I.state.x+S.deltaX/A,y:I.state.y+S.deltaY/A,deltaX:S.deltaX/A,deltaY:S.deltaY/A,lastX:I.state.x,lastY:I.state.y}}function y(I){return{left:I.left,top:I.top,right:I.right,bottom:I.bottom}}function w(I){const S=I.findDOMNode();if(!S)throw new Error("<DraggableCore>: Unmounted during event!");return S}return or}var cl={},gc={},av;function V0(){if(av)return gc;av=1,Object.defineProperty(gc,"__esModule",{value:!0}),gc.default=n;function n(){}return gc}var lv;function uC(){if(lv)return cl;lv=1,Object.defineProperty(cl,"__esModule",{value:!0}),cl.default=void 0;var n=g(Nl()),e=f(O0()),t=f(_p()),i=Dp(),o=L0(),l=yh(),h=f(V0());function f(M){return M&&M.__esModule?M:{default:M}}function g(M,N){if(typeof WeakMap=="function")var V=new WeakMap,B=new WeakMap;return(g=function(q,K){if(!K&&q&&q.__esModule)return q;var J,Q,E={__proto__:null,default:q};if(q===null||typeof q!="object"&&typeof q!="function")return E;if(J=K?B:V){if(J.has(q))return J.get(q);J.set(q,E)}for(const T in q)T!=="default"&&{}.hasOwnProperty.call(q,T)&&((Q=(J=Object.defineProperty)&&Object.getOwnPropertyDescriptor(q,T))&&(Q.get||Q.set)?J(E,T,Q):E[T]=q[T]);return E})(M,N)}function y(M,N,V){return(N=w(N))in M?Object.defineProperty(M,N,{value:V,enumerable:!0,configurable:!0,writable:!0}):M[N]=V,M}function w(M){var N=I(M,"string");return typeof N=="symbol"?N:N+""}function I(M,N){if(typeof M!="object"||!M)return M;var V=M[Symbol.toPrimitive];if(V!==void 0){var B=V.call(M,N);if(typeof B!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(N==="string"?String:Number)(M)}const S={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let A=S.mouse,b=class extends n.Component{constructor(){super(...arguments),y(this,"dragging",!1),y(this,"lastX",NaN),y(this,"lastY",NaN),y(this,"touchIdentifier",null),y(this,"mounted",!1),y(this,"handleDragStart",N=>{if(this.props.onMouseDown(N),!this.props.allowAnyClick&&typeof N.button=="number"&&N.button!==0)return!1;const V=this.findDOMNode();if(!V||!V.ownerDocument||!V.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:B}=V;if(this.props.disabled||!(N.target instanceof B.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(N.target,this.props.handle,V)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(N.target,this.props.cancel,V))return;N.type==="touchstart"&&!this.props.allowMobileScroll&&N.preventDefault();const q=(0,i.getTouchIdentifier)(N);this.touchIdentifier=q;const K=(0,o.getControlPosition)(N,q,this);if(K==null)return;const{x:J,y:Q}=K,E=(0,o.createCoreData)(this,J,Q);(0,h.default)("DraggableCore: handleDragStart: %j",E),(0,h.default)("calling",this.props.onStart),!(this.props.onStart(N,E)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(B),this.dragging=!0,this.lastX=J,this.lastY=Q,(0,i.addEvent)(B,A.move,this.handleDrag),(0,i.addEvent)(B,A.stop,this.handleDragStop))}),y(this,"handleDrag",N=>{const V=(0,o.getControlPosition)(N,this.touchIdentifier,this);if(V==null)return;let{x:B,y:q}=V;if(Array.isArray(this.props.grid)){let Q=B-this.lastX,E=q-this.lastY;if([Q,E]=(0,o.snapToGrid)(this.props.grid,Q,E),!Q&&!E)return;B=this.lastX+Q,q=this.lastY+E}const K=(0,o.createCoreData)(this,B,q);if((0,h.default)("DraggableCore: handleDrag: %j",K),this.props.onDrag(N,K)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const E=document.createEvent("MouseEvents");E.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(E)}return}this.lastX=B,this.lastY=q}),y(this,"handleDragStop",N=>{if(!this.dragging)return;const V=(0,o.getControlPosition)(N,this.touchIdentifier,this);if(V==null)return;let{x:B,y:q}=V;if(Array.isArray(this.props.grid)){let E=B-this.lastX||0,T=q-this.lastY||0;[E,T]=(0,o.snapToGrid)(this.props.grid,E,T),B=this.lastX+E,q=this.lastY+T}const K=(0,o.createCoreData)(this,B,q);if(this.props.onStop(N,K)===!1||this.mounted===!1)return!1;const Q=this.findDOMNode();Q&&this.props.enableUserSelectHack&&(0,i.scheduleRemoveUserSelectStyles)(Q.ownerDocument),(0,h.default)("DraggableCore: handleDragStop: %j",K),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,Q&&((0,h.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(Q.ownerDocument,A.move,this.handleDrag),(0,i.removeEvent)(Q.ownerDocument,A.stop,this.handleDragStop))}),y(this,"onMouseDown",N=>(A=S.mouse,this.handleDragStart(N))),y(this,"onMouseUp",N=>(A=S.mouse,this.handleDragStop(N))),y(this,"onTouchStart",N=>(A=S.touch,this.handleDragStart(N))),y(this,"onTouchEnd",N=>(A=S.touch,this.handleDragStop(N)))}componentDidMount(){this.mounted=!0;const N=this.findDOMNode();N&&(0,i.addEvent)(N,S.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const N=this.findDOMNode();if(N){const{ownerDocument:V}=N;(0,i.removeEvent)(V,S.mouse.move,this.handleDrag),(0,i.removeEvent)(V,S.touch.move,this.handleDrag),(0,i.removeEvent)(V,S.mouse.stop,this.handleDragStop),(0,i.removeEvent)(V,S.touch.stop,this.handleDragStop),(0,i.removeEvent)(N,S.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.scheduleRemoveUserSelectStyles)(V)}}findDOMNode(){return this.props?.nodeRef?this.props?.nodeRef?.current:t.default.findDOMNode(this)}render(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return cl.default=b,y(b,"displayName","DraggableCore"),y(b,"propTypes",{allowAnyClick:e.default.bool,allowMobileScroll:e.default.bool,children:e.default.node.isRequired,disabled:e.default.bool,enableUserSelectHack:e.default.bool,offsetParent:function(M,N){if(M[N]&&M[N].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:e.default.arrayOf(e.default.number),handle:e.default.string,cancel:e.default.string,nodeRef:e.default.object,onStart:e.default.func,onDrag:e.default.func,onStop:e.default.func,onMouseDown:e.default.func,scale:e.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),y(b,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),cl}var uv;function cC(){return uv||(uv=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"DraggableCore",{enumerable:!0,get:function(){return g.default}}),n.default=void 0;var e=I(Nl()),t=w(O0()),i=w(_p()),o=aC(),l=Dp(),h=L0(),f=yh(),g=w(uC()),y=w(V0());function w(V){return V&&V.__esModule?V:{default:V}}function I(V,B){if(typeof WeakMap=="function")var q=new WeakMap,K=new WeakMap;return(I=function(J,Q){if(!Q&&J&&J.__esModule)return J;var E,T,x={__proto__:null,default:J};if(J===null||typeof J!="object"&&typeof J!="function")return x;if(E=Q?K:q){if(E.has(J))return E.get(J);E.set(J,x)}for(const R in J)R!=="default"&&{}.hasOwnProperty.call(J,R)&&((T=(E=Object.defineProperty)&&Object.getOwnPropertyDescriptor(J,R))&&(T.get||T.set)?E(x,R,T):x[R]=J[R]);return x})(V,B)}function S(){return S=Object.assign?Object.assign.bind():function(V){for(var B=1;B<arguments.length;B++){var q=arguments[B];for(var K in q)({}).hasOwnProperty.call(q,K)&&(V[K]=q[K])}return V},S.apply(null,arguments)}function A(V,B,q){return(B=b(B))in V?Object.defineProperty(V,B,{value:q,enumerable:!0,configurable:!0,writable:!0}):V[B]=q,V}function b(V){var B=M(V,"string");return typeof B=="symbol"?B:B+""}function M(V,B){if(typeof V!="object"||!V)return V;var q=V[Symbol.toPrimitive];if(q!==void 0){var K=q.call(V,B);if(typeof K!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return(B==="string"?String:Number)(V)}class N extends e.Component{static getDerivedStateFromProps(B,q){let{position:K}=B,{prevPropsPosition:J}=q;return K&&(!J||K.x!==J.x||K.y!==J.y)?((0,y.default)("Draggable: getDerivedStateFromProps %j",{position:K,prevPropsPosition:J}),{x:K.x,y:K.y,prevPropsPosition:{...K}}):null}constructor(B){super(B),A(this,"onDragStart",(q,K)=>{if((0,y.default)("Draggable: onDragStart: %j",K),this.props.onStart(q,(0,h.createDraggableData)(this,K))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),A(this,"onDrag",(q,K)=>{if(!this.state.dragging)return!1;(0,y.default)("Draggable: onDrag: %j",K);const J=(0,h.createDraggableData)(this,K),Q={x:J.x,y:J.y,slackX:0,slackY:0};if(this.props.bounds){const{x:T,y:x}=Q;Q.x+=this.state.slackX,Q.y+=this.state.slackY;const[R,D]=(0,h.getBoundPosition)(this,Q.x,Q.y);Q.x=R,Q.y=D,Q.slackX=this.state.slackX+(T-Q.x),Q.slackY=this.state.slackY+(x-Q.y),J.x=Q.x,J.y=Q.y,J.deltaX=Q.x-this.state.x,J.deltaY=Q.y-this.state.y}if(this.props.onDrag(q,J)===!1)return!1;this.setState(Q)}),A(this,"onDragStop",(q,K)=>{if(!this.state.dragging||this.props.onStop(q,(0,h.createDraggableData)(this,K))===!1)return!1;(0,y.default)("Draggable: onDragStop: %j",K);const Q={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:T,y:x}=this.props.position;Q.x=T,Q.y=x}this.setState(Q)}),this.state={dragging:!1,dragged:!1,x:B.position?B.position.x:B.defaultPosition.x,y:B.position?B.position.y:B.defaultPosition.y,prevPropsPosition:{...B.position},slackX:0,slackY:0,isElementSVG:!1},B.position&&!(B.onDrag||B.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){return this.props?.nodeRef?.current??i.default.findDOMNode(this)}render(){const{axis:B,bounds:q,children:K,defaultPosition:J,defaultClassName:Q,defaultClassNameDragging:E,defaultClassNameDragged:T,position:x,positionOffset:R,scale:D,...j}=this.props;let k={},Ue=null;const We=!!!x||this.state.dragging,Oe=x||J,ie={x:(0,h.canDragX)(this)&&We?this.state.x:Oe.x,y:(0,h.canDragY)(this)&&We?this.state.y:Oe.y};this.state.isElementSVG?Ue=(0,l.createSVGTransform)(ie,R):k=(0,l.createCSSTransform)(ie,R);const de=(0,o.clsx)(K.props.className||"",Q,{[E]:this.state.dragging,[T]:this.state.dragged});return e.createElement(g.default,S({},j,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(K),{className:de,style:{...K.props.style,...k},transform:Ue}))}}n.default=N,A(N,"displayName","Draggable"),A(N,"propTypes",{...g.default.propTypes,axis:t.default.oneOf(["both","x","y","none"]),bounds:t.default.oneOfType([t.default.shape({left:t.default.number,right:t.default.number,top:t.default.number,bottom:t.default.number}),t.default.string,t.default.oneOf([!1])]),defaultClassName:t.default.string,defaultClassNameDragging:t.default.string,defaultClassNameDragged:t.default.string,defaultPosition:t.default.shape({x:t.default.number,y:t.default.number}),positionOffset:t.default.shape({x:t.default.oneOfType([t.default.number,t.default.string]),y:t.default.oneOfType([t.default.number,t.default.string])}),position:t.default.shape({x:t.default.number,y:t.default.number}),className:f.dontSetMe,style:f.dontSetMe,transform:f.dontSetMe}),A(N,"defaultProps",{...g.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(vf)),vf}var cv;function hC(){if(cv)return ul.exports;cv=1;const{default:n,DraggableCore:e}=cC();return ul.exports=n,ul.exports.default=n,ul.exports.DraggableCore=e,ul.exports}var dC=hC();const fC=vp(dC),pC=ae.div`
  background-color: #dadada;
  border: 2px solid hotpink;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.3);
  position: relative;
  z-index: 1000;
  width: fit-content;
  padding: 0;
`,mC=ae.div`
  width: 100%;
  height: 30px;
  background-color: #add8e6;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-family: 'Courier New', monospace;
  cursor: move;
  box-sizing: border-box;
  border-bottom: 2px solid white;
`,gC=ae.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`,yC=ae.div`
 padding: 0px; /* haut plus serré */
  text-align: center;
`,vC=ae.img`
  width: 80%;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 10px;
`;function Ac({children:n,onClose:e,defaultPosition:t,imageSrc:i,label:o}){return L.jsx(fC,{handle:".handle",defaultPosition:t,children:L.jsx("div",{style:{position:"absolute"},children:L.jsxs(pC,{children:[L.jsxs(mC,{className:"handle",children:[o||"Pink Elephant",L.jsx(gC,{onClick:e,children:"×"})]}),L.jsxs(yC,{children:[i&&L.jsx(vC,{src:i,alt:"Popup"}),n]})]})})})}function _C(n){return Ml({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function wC(n){return Ml({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(n)}function EC(n){return Ml({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(n)}const TC=ae.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  z-index: 999;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 6px 0;
  }
`,Tf=ae.a`
  display: flex;
  color: white;
  font-size: 26px;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: hotpink;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;function vh(){return L.jsxs(TC,{children:[L.jsx(Tf,{href:"https://instagram.com",target:"_blank","aria-label":"Instagram",children:L.jsx(_C,{})}),L.jsx(Tf,{href:"https://spotify.com",target:"_blank","aria-label":"Spotify",children:L.jsx(wC,{})}),L.jsx(Tf,{href:"https://twitter.com",target:"_blank","aria-label":"Twitter",children:L.jsx(EC,{})})]})}const SC="/pink-elephant/assets/background-photo-qWTVa85a.jpg",hv="/pink-elephant/assets/photo-C3qDg0xj.jpg",IC="/pink-elephant/assets/photos-CuiHIuCo.jpg",CC=ae.div`
  background-image: url(${SC});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`;ae.div`
  a, * {
    color: black !important;
  }
`;const xC=ae.div`
  position: absolute;
  top: 50px; /* déplacé un peu plus bas */
  right: 40px;
  background-color: rgba(0,0,0,1); /* noir opaque */
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  z-index: 10;
`,PC=ae.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px; /* décalé pour éviter le logo + bande */
  gap: 20px;
`,Sf=ae.img`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
`,kC=ae.img`
  position: absolute;
  top: 20px;
  left: 350px;
  width: 500px;
  height: auto;
  z-index: 10;
`;function RC(){return L.jsxs(CC,{children:[L.jsx(Bi,{to:"/",children:L.jsx(kC,{src:bp,alt:"Logo"})}),L.jsx(sa,{}),L.jsx(xC,{children:"PHOTOS"}),L.jsx(Ac,{onClose:()=>{},label:"CHECKPOINT",defaultPosition:{x:50,y:50},imageSrc:null,children:L.jsx("div",{style:{padding:"40px 60px",width:"90px",height:"200px",color:"black"}})}),L.jsxs(PC,{children:[L.jsx(Sf,{src:hv,alt:"Photo 1"}),L.jsx(Sf,{src:IC,alt:"Photo 2"}),L.jsx(Sf,{src:hv,alt:"Photo 3"})]}),L.jsx(vh,{})]})}const AC=ae.div`
  position: relative;
  min-height: 100vh;
  background: url(${A0}) center/cover no-repeat;
  overflow: hidden;
`,bC=ae.main`
  position: relative;
  z-index: 1;
  margin-left: 80px;         /* laisse place au Sidebar */
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,NC=ae.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`,DC=ae.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 3rem;
  color: #fff;
  margin-right: 16px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`,OC=ae.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 0.9rem;
`,LC=ae.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  gap: 48px;
  margin-bottom: 48px;
`,VC=ae.div`
  flex-shrink: 0;
  width: 360px;
  height: 360px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`,MC=ae.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,FC=ae.div`
  flex: 1;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,jC=ae.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
  }
`,UC=ae.button`
  align-self: flex-start;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: rgba(255,255,255,0.1);
  }
`,zC=ae.div`
  width: 100%;
  max-width: 1000px;
  color: #fff;
  font-family: monospace;
  font-size: 0.85rem;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,dv=ae.div`
  flex: 1;
  min-width: 240px;

  h3 {
    margin-bottom: 8px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ol {
    margin: 0;
    padding-left: 1.2em;
  }

  li {
    margin-bottom: 4px;
  }
`;function $C(){return L.jsxs(AC,{children:[L.jsx(sa,{}),L.jsxs(bC,{children:[L.jsxs(NC,{children:[L.jsx(DC,{children:"Pink Elephant"}),L.jsx(OC,{children:"TRACKLIST"})]}),L.jsxs(LC,{children:[L.jsx(VC,{children:L.jsx(MC,{src:Np,alt:"Pink Elephant Cover"})}),L.jsxs(FC,{children:[L.jsxs(jC,{children:[L.jsx("p",{children:"De son charme punk mystique et mystérieux, l’album Pink Elephant vous offre une expérience psychédél ique axée sur l’introspection et la beauté intérieure."}),L.jsx("p",{children:"L’album explore plusieurs sujets tels que la dissociation, la mélancolie ou encore la dépression avec une complexité lyrique notable."}),L.jsx("p",{children:"Une tournée musicale à ne surtout pas louper."})]}),L.jsx(UC,{children:"Ouvrir son cœur"})]})]}),L.jsxs(zC,{children:[L.jsxs(dv,{children:[L.jsx("h3",{children:"Pink Elephant ― Tracklist"}),L.jsxs("ol",{children:[L.jsx("li",{children:"Open Your Heart or Die Trying"}),L.jsx("li",{children:"Pink Elephant"}),L.jsx("li",{children:"Year of the Snake"}),L.jsx("li",{children:"Circle of Trust"}),L.jsx("li",{children:"Alien Nation"})]})]}),L.jsxs(dv,{children:[L.jsx("h3",{children:" "}),L.jsxs("ol",{start:6,children:[L.jsx("li",{children:"Beyond Salvation"}),L.jsx("li",{children:"Ride or Die"}),L.jsx("li",{children:"I Love Her Shadow"}),L.jsx("li",{children:"She Cries Diamond Rain"}),L.jsx("li",{children:"Stuck in My Head"})]})]})]})]})]})}const BC="/pink-elephant/assets/tourneee-BOTDve-9.png",HC="/pink-elephant/assets/photoblog-CY6zqrEP.png",qC="/pink-elephant/assets/photobloggg-AwH3vVuy.png",WC="/pink-elephant/assets/logonoirr-reFRGvqU.svg",GC="/pink-elephant/assets/fond-blanc-DjMrOvMj.png",Po=ae.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 300px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`,KC=ae.iframe`
  width: 100%;
  height: 170px;
  border-radius: 8px;
  border: none;
`,ko=ae.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`,QC=ae.div`
  background-image: url(${GC});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: auto;
  position: relative;
`,YC=ae.img`
  position: absolute;
  top: 20px;
  left: 350px;
  width: 500px;
  height: auto;
  z-index: 10;
`,XC=ae.div`
  position: absolute;
  top: 50px;
  right: 40px;
  background-color: rgba(0,0,0,1);
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  z-index: 10;
`,JC=ae.div`
  display: flex;
  overflow-x: auto;
  gap: 40px;
  padding: 500px 90px 100px 100PX;
  scroll-snap-type: x mandatory;
 justify-content: flex-start;
  align-items: flex-start;
`;ae(Po)`
  width: 500px;

  ${KC} {
    height: 280px;
  }

  ${ko} {
    font-size: 16px;
    font-weight: bold;
     font-family: 'Playfair Display', serif;
  }
`;const hl=ae.img`
  width: 100%;
  border-radius: 8px;
`;function ZC(){return L.jsxs(QC,{children:[L.jsx(Bi,{to:"/",children:L.jsx(YC,{src:WC,alt:"Logo"})}),L.jsx(sa,{}),L.jsx(XC,{children:"BLOG"}),L.jsx(Ac,{onClose:()=>{},label:"CHECKPOINT",defaultPosition:{x:50,y:50},imageSrc:null,children:L.jsx("div",{style:{padding:"40px 60px",width:"90px",height:"200px",color:"black"}})}),L.jsx(Ac,{onClose:()=>{},label:"💗 Pink Elephant",defaultPosition:{x:1e3,y:250},imageSrc:Np,children:L.jsx("div",{style:{width:"100px",height:"20px"}})}),L.jsx(Ac,{onClose:()=>{},label:"Prêt à mettre le feu",defaultPosition:{x:320,y:450},imageSrc:null,children:L.jsxs("div",{style:{width:"300px",padding:"20px",fontSize:"16px",color:"black"},children:["Retrouvez-nous à l’Accor Arena en tournée",L.jsx("br",{}),"pour la sortie de ",L.jsx("strong",{children:"Pink Elephant"})]})}),L.jsxs(JC,{children:[L.jsxs(Po,{children:[L.jsx(hl,{src:HC,alt:"Affiche concert"}),L.jsx(ko,{children:"Le clip vidéo qui annonce la sortie de l’album Pink elephant."})]}),L.jsxs(Po,{children:[L.jsx(hl,{src:BC,alt:"Studio"}),L.jsx(ko,{children:"Préparez-vous pour le dernière album en date du groupe Arcade Fire."})]}),L.jsxs(Po,{children:[L.jsx(hl,{src:qC,alt:"Coulisses"}),L.jsx(ko,{children:"Arcade Fire annonce une tournée octobre 2025 pour la sortie de l’album “Pink Elephant”."})]}),L.jsxs(Po,{children:[L.jsx(hl,{src:N0,alt:"Fan Art"}),L.jsx(ko,{children:"Pour la sortie mondiale de l’album “Pink Elephant” découvrez la pochette vinyle de ce dernier."})]}),L.jsxs(Po,{children:[L.jsx(hl,{src:D0,alt:"Teaser"}),L.jsx(ko,{children:"Avec la sortie internationale de l’album “Pink Elephant” sort également un T-Shirt à l’effigie du triste éléphant."})]})]}),L.jsx(vh,{})]})}const ex=()=>{};var fv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},tx=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},F0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,I=(l&3)<<4|f>>4;let S=(f&15)<<2|y>>6,A=y&63;g||(A=64,h||(S=64)),i.push(t[w],t[I],t[S],t[A])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(M0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||I==null)throw new nx;const S=l<<2|f>>4;if(i.push(S),y!==64){const A=f<<4&240|y>>2;if(i.push(A),I!==64){const b=y<<6&192|I;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rx=function(n){const e=M0(n);return F0.encodeByteArray(e,!0)},Kc=function(n){return rx(n).replace(/\./g,"")},j0=function(n){try{return F0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=()=>ix().__FIREBASE_DEFAULTS__,ox=()=>{if(typeof process>"u"||typeof fv>"u")return;const n=fv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ax=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&j0(n[1]);return e&&JSON.parse(e)},_h=()=>{try{return ex()||sx()||ox()||ax()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},U0=n=>{var e,t;return(t=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lx=n=>{const e=U0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},z0=()=>{var n;return(n=_h())===null||n===void 0?void 0:n.config},$0=n=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function B0(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kc(JSON.stringify(t)),Kc(JSON.stringify(h)),""].join(".")}const vl={};function hx(){const n={prod:[],emulator:[]};for(const e of Object.keys(vl))vl[e]?n.emulator.push(e):n.prod.push(e);return n}function dx(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let pv=!1;function H0(n,e){if(typeof window>"u"||typeof document>"u"||!oa(window.location.host)||vl[n]===e||vl[n]||pv)return;vl[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=hx().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,A){S.setAttribute("width","24"),S.setAttribute("id",A),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{pv=!0,h()},S}function w(S,A){S.setAttribute("id",A),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=dx(i),A=t("text"),b=document.getElementById(A)||document.createElement("span"),M=t("learnmore"),N=document.getElementById(M)||document.createElement("a"),V=t("preprendIcon"),B=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const q=S.element;f(q),w(N,M);const K=y();g(B,V),q.append(B,b,N,K),document.body.appendChild(q)}l?(b.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function px(){var n;const e=(n=_h())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vx(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _x(){return!px()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ex(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="FirebaseError";class Wr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Tx,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fl.prototype.create)}}class Fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Sx(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Wr(o,f,i)}}function Sx(n,e){return n.replace(Ix,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const Ix=/\{\$([^}]+)}/g;function Cx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ps(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(mv(l)&&mv(h)){if(!Ps(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function mv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function xx(n,e){const t=new Px(n,e);return t.subscribe.bind(t)}class Px{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");kx(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=If),o.error===void 0&&(o.error=If),o.complete===void 0&&(o.complete=If);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function If(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){return n&&n._delegate?n._delegate:n}class ks{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ux;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bx(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ax(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ax(n){return n===_s?void 0:n}function bx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const Dx={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Ox=De.INFO,Lx={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},Vx=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=Lx[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=Ox,this._logHandler=Vx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const Mx=(n,e)=>e.some(t=>n instanceof t);let gv,yv;function Fx(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jx(){return yv||(yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q0=new WeakMap,qf=new WeakMap,W0=new WeakMap,Cf=new WeakMap,Lp=new WeakMap;function Ux(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ai(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&q0.set(t,n)}).catch(()=>{}),Lp.set(e,n),e}function zx(n){if(qf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});qf.set(n,e)}let Wf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||W0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $x(n){Wf=n(Wf)}function Bx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xf(this),e,...t);return W0.set(i,e.sort?e.sort():[e]),Ai(i)}:jx().includes(n)?function(...e){return n.apply(xf(this),e),Ai(q0.get(this))}:function(...e){return Ai(n.apply(xf(this),e))}}function Hx(n){return typeof n=="function"?Bx(n):(n instanceof IDBTransaction&&zx(n),Mx(n,Fx())?new Proxy(n,Wf):n)}function Ai(n){if(n instanceof IDBRequest)return Ux(n);if(Cf.has(n))return Cf.get(n);const e=Hx(n);return e!==n&&(Cf.set(n,e),Lp.set(e,n)),e}const xf=n=>Lp.get(n);function qx(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ai(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Ai(h.result),g.oldVersion,g.newVersion,Ai(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const Wx=["get","getKey","getAll","getAllKeys","count"],Gx=["put","add","delete","clear"],Pf=new Map;function vv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pf.get(e))return Pf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=Gx.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Wx.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Pf.set(e,l),l}$x(n=>({...n,get:(e,t,i)=>vv(e,t)||n.get(e,t,i),has:(e,t)=>!!vv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qx(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Qx(n){const e=n.getComponent();return e?.type==="VERSION"}const Gf="@firebase/app",_v="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Op("@firebase/app"),Yx="@firebase/app-compat",Xx="@firebase/analytics-compat",Jx="@firebase/analytics",Zx="@firebase/app-check-compat",eP="@firebase/app-check",tP="@firebase/auth",nP="@firebase/auth-compat",rP="@firebase/database",iP="@firebase/data-connect",sP="@firebase/database-compat",oP="@firebase/functions",aP="@firebase/functions-compat",lP="@firebase/installations",uP="@firebase/installations-compat",cP="@firebase/messaging",hP="@firebase/messaging-compat",dP="@firebase/performance",fP="@firebase/performance-compat",pP="@firebase/remote-config",mP="@firebase/remote-config-compat",gP="@firebase/storage",yP="@firebase/storage-compat",vP="@firebase/firestore",_P="@firebase/ai",wP="@firebase/firestore-compat",EP="firebase",TP="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="[DEFAULT]",SP={[Gf]:"fire-core",[Yx]:"fire-core-compat",[Jx]:"fire-analytics",[Xx]:"fire-analytics-compat",[eP]:"fire-app-check",[Zx]:"fire-app-check-compat",[tP]:"fire-auth",[nP]:"fire-auth-compat",[rP]:"fire-rtdb",[iP]:"fire-data-connect",[sP]:"fire-rtdb-compat",[oP]:"fire-fn",[aP]:"fire-fn-compat",[lP]:"fire-iid",[uP]:"fire-iid-compat",[cP]:"fire-fcm",[hP]:"fire-fcm-compat",[dP]:"fire-perf",[fP]:"fire-perf-compat",[pP]:"fire-rc",[mP]:"fire-rc-compat",[gP]:"fire-gcs",[yP]:"fire-gcs-compat",[vP]:"fire-fst",[wP]:"fire-fst-compat",[_P]:"fire-vertex","fire-js":"fire-js",[EP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,IP=new Map,Qf=new Map;function wv(n,e){try{n.container.addComponent(e)}catch(t){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ko(n){const e=n.name;if(Qf.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,n);for(const t of Qc.values())wv(t,n);for(const t of IP.values())wv(t,n);return!0}function Vp(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ur(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new Fl("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=TP;function G0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Kf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw bi.create("bad-app-name",{appName:String(o)});if(t||(t=z0()),!t)throw bi.create("no-options");const l=Qc.get(o);if(l){if(Ps(t,l.options)&&Ps(i,l.config))return l;throw bi.create("duplicate-app",{appName:o})}const h=new Nx(o);for(const g of Qf.values())h.addComponent(g);const f=new xP(t,i,h);return Qc.set(o,f),f}function K0(n=Kf){const e=Qc.get(n);if(!e&&n===Kf&&z0())return G0();if(!e)throw bi.create("no-app",{appName:n});return e}function Ni(n,e,t){var i;let o=(i=SP[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(f.join(" "));return}Ko(new ks(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="firebase-heartbeat-database",kP=1,xl="firebase-heartbeat-store";let kf=null;function Q0(){return kf||(kf=qx(PP,kP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xl)}catch(t){console.warn(t)}}}}).catch(n=>{throw bi.create("idb-open",{originalErrorMessage:n.message})})),kf}async function RP(n){try{const t=(await Q0()).transaction(xl),i=await t.objectStore(xl).get(Y0(n));return await t.done,i}catch(e){if(e instanceof Wr)zr.warn(e.message);else{const t=bi.create("idb-get",{originalErrorMessage:e?.message});zr.warn(t.message)}}}async function Ev(n,e){try{const i=(await Q0()).transaction(xl,"readwrite");await i.objectStore(xl).put(e,Y0(n)),await i.done}catch(t){if(t instanceof Wr)zr.warn(t.message);else{const i=bi.create("idb-set",{originalErrorMessage:t?.message});zr.warn(i.message)}}}function Y0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=1024,bP=30;class NP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new OP(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Tv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>bP){const h=LP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){zr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tv(),{heartbeatsToSend:i,unsentEntries:o}=DP(this._heartbeatsCache.heartbeats),l=Kc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return zr.warn(t),""}}}function Tv(){return new Date().toISOString().substring(0,10)}function DP(n,e=AP){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Sv(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Sv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class OP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wx()?Ex().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await RP(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ev(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ev(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Sv(n){return Kc(JSON.stringify({version:2,heartbeats:n})).length}function LP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){Ko(new ks("platform-logger",e=>new Kx(e),"PRIVATE")),Ko(new ks("heartbeat",e=>new NP(e),"PRIVATE")),Ni(Gf,_v,n),Ni(Gf,_v,"esm2017"),Ni("fire-js","")}VP("");var Iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di,X0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,T){function x(){}x.prototype=T.prototype,E.D=T.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(R,D,j){for(var k=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)k[Ue-2]=arguments[Ue];return T.prototype[D].apply(R,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(E,T,x){x||(x=0);var R=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)R[D]=T.charCodeAt(x++)|T.charCodeAt(x++)<<8|T.charCodeAt(x++)<<16|T.charCodeAt(x++)<<24;else for(D=0;16>D;++D)R[D]=T[x++]|T[x++]<<8|T[x++]<<16|T[x++]<<24;T=E.g[0],x=E.g[1],D=E.g[2];var j=E.g[3],k=T+(j^x&(D^j))+R[0]+3614090360&4294967295;T=x+(k<<7&4294967295|k>>>25),k=j+(D^T&(x^D))+R[1]+3905402710&4294967295,j=T+(k<<12&4294967295|k>>>20),k=D+(x^j&(T^x))+R[2]+606105819&4294967295,D=j+(k<<17&4294967295|k>>>15),k=x+(T^D&(j^T))+R[3]+3250441966&4294967295,x=D+(k<<22&4294967295|k>>>10),k=T+(j^x&(D^j))+R[4]+4118548399&4294967295,T=x+(k<<7&4294967295|k>>>25),k=j+(D^T&(x^D))+R[5]+1200080426&4294967295,j=T+(k<<12&4294967295|k>>>20),k=D+(x^j&(T^x))+R[6]+2821735955&4294967295,D=j+(k<<17&4294967295|k>>>15),k=x+(T^D&(j^T))+R[7]+4249261313&4294967295,x=D+(k<<22&4294967295|k>>>10),k=T+(j^x&(D^j))+R[8]+1770035416&4294967295,T=x+(k<<7&4294967295|k>>>25),k=j+(D^T&(x^D))+R[9]+2336552879&4294967295,j=T+(k<<12&4294967295|k>>>20),k=D+(x^j&(T^x))+R[10]+4294925233&4294967295,D=j+(k<<17&4294967295|k>>>15),k=x+(T^D&(j^T))+R[11]+2304563134&4294967295,x=D+(k<<22&4294967295|k>>>10),k=T+(j^x&(D^j))+R[12]+1804603682&4294967295,T=x+(k<<7&4294967295|k>>>25),k=j+(D^T&(x^D))+R[13]+4254626195&4294967295,j=T+(k<<12&4294967295|k>>>20),k=D+(x^j&(T^x))+R[14]+2792965006&4294967295,D=j+(k<<17&4294967295|k>>>15),k=x+(T^D&(j^T))+R[15]+1236535329&4294967295,x=D+(k<<22&4294967295|k>>>10),k=T+(D^j&(x^D))+R[1]+4129170786&4294967295,T=x+(k<<5&4294967295|k>>>27),k=j+(x^D&(T^x))+R[6]+3225465664&4294967295,j=T+(k<<9&4294967295|k>>>23),k=D+(T^x&(j^T))+R[11]+643717713&4294967295,D=j+(k<<14&4294967295|k>>>18),k=x+(j^T&(D^j))+R[0]+3921069994&4294967295,x=D+(k<<20&4294967295|k>>>12),k=T+(D^j&(x^D))+R[5]+3593408605&4294967295,T=x+(k<<5&4294967295|k>>>27),k=j+(x^D&(T^x))+R[10]+38016083&4294967295,j=T+(k<<9&4294967295|k>>>23),k=D+(T^x&(j^T))+R[15]+3634488961&4294967295,D=j+(k<<14&4294967295|k>>>18),k=x+(j^T&(D^j))+R[4]+3889429448&4294967295,x=D+(k<<20&4294967295|k>>>12),k=T+(D^j&(x^D))+R[9]+568446438&4294967295,T=x+(k<<5&4294967295|k>>>27),k=j+(x^D&(T^x))+R[14]+3275163606&4294967295,j=T+(k<<9&4294967295|k>>>23),k=D+(T^x&(j^T))+R[3]+4107603335&4294967295,D=j+(k<<14&4294967295|k>>>18),k=x+(j^T&(D^j))+R[8]+1163531501&4294967295,x=D+(k<<20&4294967295|k>>>12),k=T+(D^j&(x^D))+R[13]+2850285829&4294967295,T=x+(k<<5&4294967295|k>>>27),k=j+(x^D&(T^x))+R[2]+4243563512&4294967295,j=T+(k<<9&4294967295|k>>>23),k=D+(T^x&(j^T))+R[7]+1735328473&4294967295,D=j+(k<<14&4294967295|k>>>18),k=x+(j^T&(D^j))+R[12]+2368359562&4294967295,x=D+(k<<20&4294967295|k>>>12),k=T+(x^D^j)+R[5]+4294588738&4294967295,T=x+(k<<4&4294967295|k>>>28),k=j+(T^x^D)+R[8]+2272392833&4294967295,j=T+(k<<11&4294967295|k>>>21),k=D+(j^T^x)+R[11]+1839030562&4294967295,D=j+(k<<16&4294967295|k>>>16),k=x+(D^j^T)+R[14]+4259657740&4294967295,x=D+(k<<23&4294967295|k>>>9),k=T+(x^D^j)+R[1]+2763975236&4294967295,T=x+(k<<4&4294967295|k>>>28),k=j+(T^x^D)+R[4]+1272893353&4294967295,j=T+(k<<11&4294967295|k>>>21),k=D+(j^T^x)+R[7]+4139469664&4294967295,D=j+(k<<16&4294967295|k>>>16),k=x+(D^j^T)+R[10]+3200236656&4294967295,x=D+(k<<23&4294967295|k>>>9),k=T+(x^D^j)+R[13]+681279174&4294967295,T=x+(k<<4&4294967295|k>>>28),k=j+(T^x^D)+R[0]+3936430074&4294967295,j=T+(k<<11&4294967295|k>>>21),k=D+(j^T^x)+R[3]+3572445317&4294967295,D=j+(k<<16&4294967295|k>>>16),k=x+(D^j^T)+R[6]+76029189&4294967295,x=D+(k<<23&4294967295|k>>>9),k=T+(x^D^j)+R[9]+3654602809&4294967295,T=x+(k<<4&4294967295|k>>>28),k=j+(T^x^D)+R[12]+3873151461&4294967295,j=T+(k<<11&4294967295|k>>>21),k=D+(j^T^x)+R[15]+530742520&4294967295,D=j+(k<<16&4294967295|k>>>16),k=x+(D^j^T)+R[2]+3299628645&4294967295,x=D+(k<<23&4294967295|k>>>9),k=T+(D^(x|~j))+R[0]+4096336452&4294967295,T=x+(k<<6&4294967295|k>>>26),k=j+(x^(T|~D))+R[7]+1126891415&4294967295,j=T+(k<<10&4294967295|k>>>22),k=D+(T^(j|~x))+R[14]+2878612391&4294967295,D=j+(k<<15&4294967295|k>>>17),k=x+(j^(D|~T))+R[5]+4237533241&4294967295,x=D+(k<<21&4294967295|k>>>11),k=T+(D^(x|~j))+R[12]+1700485571&4294967295,T=x+(k<<6&4294967295|k>>>26),k=j+(x^(T|~D))+R[3]+2399980690&4294967295,j=T+(k<<10&4294967295|k>>>22),k=D+(T^(j|~x))+R[10]+4293915773&4294967295,D=j+(k<<15&4294967295|k>>>17),k=x+(j^(D|~T))+R[1]+2240044497&4294967295,x=D+(k<<21&4294967295|k>>>11),k=T+(D^(x|~j))+R[8]+1873313359&4294967295,T=x+(k<<6&4294967295|k>>>26),k=j+(x^(T|~D))+R[15]+4264355552&4294967295,j=T+(k<<10&4294967295|k>>>22),k=D+(T^(j|~x))+R[6]+2734768916&4294967295,D=j+(k<<15&4294967295|k>>>17),k=x+(j^(D|~T))+R[13]+1309151649&4294967295,x=D+(k<<21&4294967295|k>>>11),k=T+(D^(x|~j))+R[4]+4149444226&4294967295,T=x+(k<<6&4294967295|k>>>26),k=j+(x^(T|~D))+R[11]+3174756917&4294967295,j=T+(k<<10&4294967295|k>>>22),k=D+(T^(j|~x))+R[2]+718787259&4294967295,D=j+(k<<15&4294967295|k>>>17),k=x+(j^(D|~T))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+T&4294967295,E.g[1]=E.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+D&4294967295,E.g[3]=E.g[3]+j&4294967295}i.prototype.u=function(E,T){T===void 0&&(T=E.length);for(var x=T-this.blockSize,R=this.B,D=this.h,j=0;j<T;){if(D==0)for(;j<=x;)o(this,E,j),j+=this.blockSize;if(typeof E=="string"){for(;j<T;)if(R[D++]=E.charCodeAt(j++),D==this.blockSize){o(this,R),D=0;break}}else for(;j<T;)if(R[D++]=E[j++],D==this.blockSize){o(this,R),D=0;break}}this.h=D,this.o+=T},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var T=1;T<E.length-8;++T)E[T]=0;var x=8*this.o;for(T=E.length-8;T<E.length;++T)E[T]=x&255,x/=256;for(this.u(E),E=Array(16),T=x=0;4>T;++T)for(var R=0;32>R;R+=8)E[x++]=this.g[T]>>>R&255;return E};function l(E,T){var x=f;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=T(E)}function h(E,T){this.h=T;for(var x=[],R=!0,D=E.length-1;0<=D;D--){var j=E[D]|0;R&&j==T||(x[D]=j,R=!1)}this.g=x}var f={};function g(E){return-128<=E&&128>E?l(E,function(T){return new h([T|0],0>T?-1:0)}):new h([E|0],0>E?-1:0)}function y(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return N(y(-E));for(var T=[],x=1,R=0;E>=x;R++)T[R]=E/x|0,x*=4294967296;return new h(T,0)}function w(E,T){if(E.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E.charAt(0)=="-")return N(w(E.substring(1),T));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=y(Math.pow(T,8)),R=I,D=0;D<E.length;D+=8){var j=Math.min(8,E.length-D),k=parseInt(E.substring(D,D+j),T);8>j?(j=y(Math.pow(T,j)),R=R.j(j).add(y(k))):(R=R.j(x),R=R.add(y(k)))}return R}var I=g(0),S=g(1),A=g(16777216);n=h.prototype,n.m=function(){if(M(this))return-N(this).m();for(var E=0,T=1,x=0;x<this.g.length;x++){var R=this.i(x);E+=(0<=R?R:4294967296+R)*T,T*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var T=y(Math.pow(E,6)),x=this,R="";;){var D=K(x,T).g;x=V(x,D.j(T));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=D,b(x))return j+R;for(;6>j.length;)j="0"+j;R=j+R}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(var T=0;T<E.g.length;T++)if(E.g[T]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=V(this,E),M(E)?-1:b(E)?0:1};function N(E){for(var T=E.g.length,x=[],R=0;R<T;R++)x[R]=~E.g[R];return new h(x,~E.h).add(S)}n.abs=function(){return M(this)?N(this):this},n.add=function(E){for(var T=Math.max(this.g.length,E.g.length),x=[],R=0,D=0;D<=T;D++){var j=R+(this.i(D)&65535)+(E.i(D)&65535),k=(j>>>16)+(this.i(D)>>>16)+(E.i(D)>>>16);R=k>>>16,j&=65535,k&=65535,x[D]=k<<16|j}return new h(x,x[x.length-1]&-2147483648?-1:0)};function V(E,T){return E.add(N(T))}n.j=function(E){if(b(this)||b(E))return I;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(A)&&0>E.l(A))return y(this.m()*E.m());for(var T=this.g.length+E.g.length,x=[],R=0;R<2*T;R++)x[R]=0;for(R=0;R<this.g.length;R++)for(var D=0;D<E.g.length;D++){var j=this.i(R)>>>16,k=this.i(R)&65535,Ue=E.i(D)>>>16,Ye=E.i(D)&65535;x[2*R+2*D]+=k*Ye,B(x,2*R+2*D),x[2*R+2*D+1]+=j*Ye,B(x,2*R+2*D+1),x[2*R+2*D+1]+=k*Ue,B(x,2*R+2*D+1),x[2*R+2*D+2]+=j*Ue,B(x,2*R+2*D+2)}for(R=0;R<T;R++)x[R]=x[2*R+1]<<16|x[2*R];for(R=T;R<2*T;R++)x[R]=0;return new h(x,0)};function B(E,T){for(;(E[T]&65535)!=E[T];)E[T+1]+=E[T]>>>16,E[T]&=65535,T++}function q(E,T){this.g=E,this.h=T}function K(E,T){if(b(T))throw Error("division by zero");if(b(E))return new q(I,I);if(M(E))return T=K(N(E),T),new q(N(T.g),N(T.h));if(M(T))return T=K(E,N(T)),new q(N(T.g),T.h);if(30<E.g.length){if(M(E)||M(T))throw Error("slowDivide_ only works with positive integers.");for(var x=S,R=T;0>=R.l(E);)x=J(x),R=J(R);var D=Q(x,1),j=Q(R,1);for(R=Q(R,2),x=Q(x,2);!b(R);){var k=j.add(R);0>=k.l(E)&&(D=D.add(x),j=k),R=Q(R,1),x=Q(x,1)}return T=V(E,D.j(T)),new q(D,T)}for(D=I;0<=E.l(T);){for(x=Math.max(1,Math.floor(E.m()/T.m())),R=Math.ceil(Math.log(x)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),j=y(x),k=j.j(T);M(k)||0<k.l(E);)x-=R,j=y(x),k=j.j(T);b(j)&&(j=S),D=D.add(j),E=V(E,k)}return new q(D,E)}n.A=function(E){return K(this,E).h},n.and=function(E){for(var T=Math.max(this.g.length,E.g.length),x=[],R=0;R<T;R++)x[R]=this.i(R)&E.i(R);return new h(x,this.h&E.h)},n.or=function(E){for(var T=Math.max(this.g.length,E.g.length),x=[],R=0;R<T;R++)x[R]=this.i(R)|E.i(R);return new h(x,this.h|E.h)},n.xor=function(E){for(var T=Math.max(this.g.length,E.g.length),x=[],R=0;R<T;R++)x[R]=this.i(R)^E.i(R);return new h(x,this.h^E.h)};function J(E){for(var T=E.g.length+1,x=[],R=0;R<T;R++)x[R]=E.i(R)<<1|E.i(R-1)>>>31;return new h(x,E.h)}function Q(E,T){var x=T>>5;T%=32;for(var R=E.g.length-x,D=[],j=0;j<R;j++)D[j]=0<T?E.i(j+x)>>>T|E.i(j+x+1)<<32-T:E.i(j+x);return new h(D,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,X0=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Di=h}).apply(typeof Iv<"u"?Iv:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var J0,fl,Z0,bc,Yf,ew,tw,nw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var v=i;u=u.split(".");for(var C=0;C<u.length-1;C++){var z=u[C];if(!(z in v))break e;v=v[z]}u=u[u.length-1],C=v[u],p=p(C),p!=C&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var v=0,C=!1,z={next:function(){if(!C&&v<u.length){var G=v++;return{value:p(G,u[G]),done:!1}}return C=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,v){return u.call.apply(u.bind,arguments)}function I(u,p,v){if(!u)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,C),u.apply(p,z)}}return function(){return u.apply(p,arguments)}}function S(u,p,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,S.apply(null,arguments)}function A(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),u.apply(this,C)}}function b(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(C,z,G){for(var se=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)se[qe-2]=arguments[qe];return p.prototype[z].apply(C,se)}}function M(u){const p=u.length;if(0<p){const v=Array(p);for(let C=0;C<p;C++)v[C]=u[C];return v}return[]}function N(u,p){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(g(C)){const z=u.length||0,G=C.length||0;u.length=z+G;for(let se=0;se<G;se++)u[z+se]=C[se]}else u.push(C)}}class V{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(u){return/^[\s\xa0]*$/.test(u)}function q(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function K(u){return K[" "](u),u}K[" "]=function(){};var J=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Q(u,p,v){for(const C in u)p.call(v,u[C],C,u)}function E(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function T(u){const p={};for(const v in u)p[v]=u[v];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let v,C;for(let z=1;z<arguments.length;z++){C=arguments[z];for(v in C)u[v]=C[v];for(let G=0;G<x.length;G++)v=x[G],Object.prototype.hasOwnProperty.call(C,v)&&(u[v]=C[v])}}function D(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function j(u){f.setTimeout(()=>{throw u},0)}function k(){var u=de;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ue{constructor(){this.h=this.g=null}add(p,v){const C=Ye.get();C.set(p,v),this.h?this.h.next=C:this.g=C,this.h=C}}var Ye=new V(()=>new We,u=>u.reset());class We{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,ie=!1,de=new Ue,le=()=>{const u=f.Promise.resolve(void 0);Oe=()=>{u.then(U)}};var U=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){j(v)}var p=Ye;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ie=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,p),f.removeEventListener("test",v,p)}catch{}return u}();function Ce(u,p){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,C=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(J){e:{try{K(p.nodeName);var z=!0;break e}catch{}z=!1}z||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}b(Ce,ge);var Pe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),be=0;function Ve(u,p,v,C,z){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!C,this.ha=z,this.key=++be,this.da=this.fa=!1}function at(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zt(u){this.src=u,this.g={},this.h=0}Zt.prototype.add=function(u,p,v,C,z){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var se=Gr(u,p,C,z);return-1<se?(p=u[se],v||(p.fa=!1)):(p=new Ve(p,this.src,G,!!C,z),p.fa=v,u.push(p)),p};function Gt(u,p){var v=p.type;if(v in u.g){var C=u.g[v],z=Array.prototype.indexOf.call(C,p,void 0),G;(G=0<=z)&&Array.prototype.splice.call(C,z,1),G&&(at(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Gr(u,p,v,C){for(var z=0;z<u.length;++z){var G=u[z];if(!G.da&&G.listener==p&&G.capture==!!v&&G.ha==C)return z}return-1}var qi="closure_lm_"+(1e6*Math.random()|0),Ds={};function da(u,p,v,C,z){if(Array.isArray(p)){for(var G=0;G<p.length;G++)da(u,p[G],v,C,z);return null}return v=ma(v),u&&u[Ne]?u.K(p,v,y(C)?!!C.capture:!1,z):fa(u,p,v,!1,C,z)}function fa(u,p,v,C,z,G){if(!p)throw Error("Invalid event type");var se=y(z)?!!z.capture:!!z,qe=Ls(u);if(qe||(u[qi]=qe=new Zt(u)),v=qe.add(p,v,C,se,G),v.proxy)return v;if(C=Kl(),v.proxy=C,C.src=u,C.listener=v,u.addEventListener)Ie||(z=se),z===void 0&&(z=!1),u.addEventListener(p.toString(),C,z);else if(u.attachEvent)u.attachEvent(wr(p.toString()),C);else if(u.addListener&&u.removeListener)u.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Kl(){function u(v){return p.call(u.src,u.listener,v)}const p=pa;return u}function Os(u,p,v,C,z){if(Array.isArray(p))for(var G=0;G<p.length;G++)Os(u,p[G],v,C,z);else C=y(C)?!!C.capture:!!C,v=ma(v),u&&u[Ne]?(u=u.i,p=String(p).toString(),p in u.g&&(G=u.g[p],v=Gr(G,v,C,z),-1<v&&(at(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete u.g[p],u.h--)))):u&&(u=Ls(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Gr(p,v,C,z)),(v=-1<u?p[u]:null)&&_r(v))}function _r(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ne])Gt(p.i,u);else{var v=u.type,C=u.proxy;p.removeEventListener?p.removeEventListener(v,C,u.capture):p.detachEvent?p.detachEvent(wr(v),C):p.addListener&&p.removeListener&&p.removeListener(C),(v=Ls(p))?(Gt(v,u),v.h==0&&(v.src=null,p[qi]=null)):at(u)}}}function wr(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function pa(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var v=u.listener,C=u.ha||u.src;u.fa&&_r(u),u=v.call(C,p)}return u}function Ls(u){return u=u[qi],u instanceof Zt?u:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ma(u){return typeof u=="function"?u:(u[Vs]||(u[Vs]=function(p){return u.handleEvent(p)}),u[Vs])}function wt(){Y.call(this),this.i=new Zt(this),this.M=this,this.F=null}b(wt,Y),wt.prototype[Ne]=!0,wt.prototype.removeEventListener=function(u,p,v,C){Os(this,u,p,v,C)};function Et(u,p){var v,C=u.F;if(C)for(v=[];C;C=C.F)v.push(C);if(u=u.M,C=p.type||p,typeof p=="string")p=new ge(p,u);else if(p instanceof ge)p.target=p.target||u;else{var z=p;p=new ge(C,u),R(p,z)}if(z=!0,v)for(var G=v.length-1;0<=G;G--){var se=p.g=v[G];z=Er(se,C,!0,p)&&z}if(se=p.g=u,z=Er(se,C,!0,p)&&z,z=Er(se,C,!1,p)&&z,v)for(G=0;G<v.length;G++)se=p.g=v[G],z=Er(se,C,!1,p)&&z}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],C=0;C<v.length;C++)at(v[C]);delete u.g[p],u.h--}}this.F=null},wt.prototype.K=function(u,p,v,C){return this.i.add(String(u),p,!1,v,C)},wt.prototype.L=function(u,p,v,C){return this.i.add(String(u),p,!0,v,C)};function Er(u,p,v,C){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var z=!0,G=0;G<p.length;++G){var se=p[G];if(se&&!se.da&&se.capture==v){var qe=se.listener,Tt=se.ha||se.src;se.fa&&Gt(u.i,se),z=qe.call(Tt,C)!==!1&&z}}return z&&!C.defaultPrevented}function ga(u,p,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Kr(u){u.g=ga(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Wi extends Y{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(u){Y.call(this),this.h=u,this.g={}}b(Gi,Y);var ya=[];function va(u){Q(u.g,function(p,v){this.g.hasOwnProperty(v)&&_r(p)},u),u.g={}}Gi.prototype.N=function(){Gi.aa.N.call(this),va(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _a=f.JSON.stringify,wa=f.JSON.parse,Ea=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ki(){}Ki.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function Fs(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){ge.call(this,"d")}b(Qn,ge);function js(){ge.call(this,"c")}b(js,ge);var Yn={},Ta=null;function Qi(){return Ta=Ta||new wt}Yn.La="serverreachability";function Sa(u){ge.call(this,Yn.La,u)}b(Sa,ge);function Tr(u){const p=Qi();Et(p,new Sa(p))}Yn.STAT_EVENT="statevent";function Ia(u,p){ge.call(this,Yn.STAT_EVENT,u),this.stat=p}b(Ia,ge);function ut(u){const p=Qi();Et(p,new Ia(p,u))}Yn.Ma="timingevent";function Us(u,p){ge.call(this,Yn.Ma,u),this.size=p}b(Us,ge);function Nn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Xi(u,p,v,C,z,G){u.info(function(){if(u.g)if(G)for(var se="",qe=G.split("&"),Tt=0;Tt<qe.length;Tt++){var Me=qe[Tt].split("=");if(1<Me.length){var Pt=Me[0];Me=Me[1];var pt=Pt.split("_");se=2<=pt.length&&pt[1]=="type"?se+(Pt+"="+Me+"&"):se+(Pt+"=redacted&")}}else se=null;else se=G;return"XMLHTTP REQ ("+C+") [attempt "+z+"]: "+p+`
`+v+`
`+se})}function zs(u,p,v,C,z,G,se){u.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+z+"]: "+p+`
`+v+`
`+G+" "+se})}function Dn(u,p,v,C){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Oh(u,v)+(C?" "+C:"")})}function Ca(u,p){u.info(function(){return"TIMEOUT: "+p})}Yi.prototype.info=function(){};function Oh(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var C=v[u];if(!(2>C.length)){var z=C[1];if(Array.isArray(z)&&!(1>z.length)){var G=z[0];if(G!="noop"&&G!="stop"&&G!="close")for(var se=1;se<z.length;se++)z[se]=""}}}}return _a(v)}catch{return p}}var $s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Ji(){}b(Ji,Ki),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},On=new Ji;function Ln(u,p,v,C){this.j=u,this.i=p,this.l=v,this.R=C||1,this.U=new Gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yl}function Yl(){this.i=null,this.g="",this.h=!1}var xa={},Bs={};function Hs(u,p,v){u.L=1,u.v=Zr(dn(p)),u.m=v,u.P=!0,Pa(u,null)}function Pa(u,p){u.F=Date.now(),Ke(u),u.A=dn(u.v);var v=u.A,C=u.R;Array.isArray(C)||(C=[String(C)]),ti(v.i,"t",C),u.C=0,v=u.j.J,u.h=new Yl,u.g=pu(u.j,v?p:null,!u.m),0<u.O&&(u.M=new Wi(S(u.Y,u,u.g),u.O)),p=u.U,v=u.g,C=u.ca;var z="readystatechange";Array.isArray(z)||(z&&(ya[0]=z.toString()),z=ya);for(var G=0;G<z.length;G++){var se=da(v,z[G],C||p.handleEvent,!1,p.h||p);if(!se)break;p.g[se.key]=se}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Xi(u.i,u.u,u.A,u.l,u.R,u.m)}Ln.prototype.ca=function(u){u=u.target;const p=this.M;p&&tn(u)==3?p.j():this.Y(u)},Ln.prototype.Y=function(u){try{if(u==this.g)e:{const pt=tn(this.g);var p=this.g.Ba();const In=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||pt!=4||p==7||(p==8||0>=In?Tr(3):Tr(2)),Zi(this);var v=this.g.Z();this.X=v;t:if(Xl(this)){var C=Da(this.g);u="";var z=C.length,G=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Qr(this);var se="";break t}this.h.i=new f.TextDecoder}for(p=0;p<z;p++)this.h.h=!0,u+=this.h.i.decode(C[p],{stream:!(G&&p==z-1)});C.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,zs(this.i,this.u,this.A,this.l,this.R,pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Tt=this.g;if((qe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(qe)){var Me=qe;break t}}Me=null}if(v=Me)Dn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ka(this,v);else{this.o=!1,this.s=3,ut(12),Tn(this),Qr(this);break e}}if(this.P){v=!0;let pn;for(;!this.J&&this.C<se.length;)if(pn=Lh(this,se),pn==Bs){pt==4&&(this.s=4,ut(14),v=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==xa){this.s=4,ut(15),Dn(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Dn(this.i,this.l,pn,null),ka(this,pn);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||se.length!=0||this.h.h||(this.s=1,ut(16),v=!1),this.o=this.o&&v,!v)Dn(this.i,this.l,se,"[Invalid Chunked Response]"),Tn(this),Qr(this);else if(0<se.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),La(Pt),Pt.M=!0,ut(11))}}else Dn(this.i,this.l,se,null),ka(this,se);pt==4&&Tn(this),this.o&&!this.J&&(pt==4?to(this.j,this):(this.o=!1,Ke(this)))}else Ys(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Tn(this),Qr(this)}}}catch{}finally{}};function Xl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Lh(u,p){var v=u.C,C=p.indexOf(`
`,v);return C==-1?Bs:(v=Number(p.substring(v,C)),isNaN(v)?xa:(C+=1,C+v>p.length?Bs:(p=p.slice(C,C+v),u.C=C+v,p)))}Ln.prototype.cancel=function(){this.J=!0,Tn(this)};function Ke(u){u.S=Date.now()+u.I,Jl(u,u.I)}function Jl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Nn(S(u.ba,u),p)}function Zi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Ln.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ca(this.i,this.A),this.L!=2&&(Tr(),ut(17)),Tn(this),this.s=2,Qr(this)):Jl(this,this.S-u)};function Qr(u){u.j.G==0||u.J||to(u.j,u)}function Tn(u){Zi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,va(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ka(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||Kt(v.h,u))){if(!u.K&&Kt(v.h,u)&&v.G==3){try{var C=v.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var z=C;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)eo(v),Un(v);else break e;Zs(v),ut(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Nn(S(v.Za,v),6e3));if(1>=eu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Pr(v,11)}else if((u.K||v.g==u)&&eo(v),!B(p))for(z=v.Da.g.parse(p),p=0;p<z.length;p++){let Me=z[p];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const Pt=Me[3];Pt!=null&&(v.la=Pt,v.j.info("VER="+v.la));const pt=Me[4];pt!=null&&(v.Aa=pt,v.j.info("SVER="+v.Aa));const In=Me[5];In!=null&&typeof In=="number"&&0<In&&(C=1.5*In,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const pn=u.g;if(pn){const os=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var G=C.h;G.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Ra(G,G.h),G.h=null))}if(C.D){const ro=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(C.ya=ro,Ge(C.I,C.D,ro))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var se=u;if(C.qa=fu(C,C.J?C.ia:null,C.W),se.K){tu(C.h,se);var qe=se,Tt=C.L;Tt&&(qe.I=Tt),qe.B&&(Zi(qe),Ke(qe)),C.g=se}else ss(C);0<v.i.length&&er(v)}else Me[0]!="stop"&&Me[0]!="close"||Pr(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Pr(v,7):Ot(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}Tr(4)}catch{}}var Zl=class{constructor(u,p){this.g=u,this.map=p}};function es(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function eu(u){return u.h?1:u.g?u.g.size:0}function Kt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ra(u,p){u.g?u.g.add(p):u.h=p}function tu(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}es.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return M(u.i)}function qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],v=u.length,C=0;C<v;C++)p.push(u[C]);return p}p=[],v=0;for(C in u)p[v++]=u[C];return p}function Ws(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const C in u)p[v++]=C;return p}}}function Yr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=Ws(u),C=qs(u),z=C.length,G=0;G<z;G++)p.call(void 0,C[G],v&&v[G],u)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vh(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var C=u[v].indexOf("="),z=null;if(0<=C){var G=u[v].substring(0,C);z=u[v].substring(C+1)}else G=u[v];p(G,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Sr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Sr){this.h=u.h,ns(this,u.j),this.o=u.o,this.g=u.g,Xr(this,u.s),this.l=u.l;var p=u.i,v=new Xn;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Jr(this,v),this.m=u.m}else u&&(p=String(u).match(ts))?(this.h=!1,ns(this,p[1]||"",!0),this.o=Le(p[2]||""),this.g=Le(p[3]||"",!0),Xr(this,p[4]),this.l=Le(p[5]||"",!0),Jr(this,p[6]||"",!0),this.m=Le(p[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Sr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ei(p,Gs,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ei(p,Gs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ei(v,v.charAt(0)=="/"?su:iu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ei(v,Aa)),u.join("")};function dn(u){return new Sr(u)}function ns(u,p,v){u.j=v?Le(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Xr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Jr(u,p,v){p instanceof Xn?(u.i=p,Jn(u.i,u.h)):(v||(p=ei(p,ou)),u.i=new Xn(p,u.h))}function Ge(u,p,v){u.i.set(p,v)}function Zr(u){return Ge(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Le(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,ru),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ru(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gs=/[#\/\?@]/g,iu=/[#\?:]/g,su=/[#\?]/g,ou=/[#\?@]/g,Aa=/#/g;function Xn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Dt(u){u.g||(u.g=new Map,u.h=0,u.i&&Vh(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}n=Xn.prototype,n.add=function(u,p){Dt(this),this.i=null,u=Sn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function Vn(u,p){Dt(u),p=Sn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Mn(u,p){return Dt(u),p=Sn(u,p),u.g.has(p)}n.forEach=function(u,p){Dt(this),this.g.forEach(function(v,C){v.forEach(function(z){u.call(p,z,C,this)},this)},this)},n.na=function(){Dt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let C=0;C<p.length;C++){const z=u[C];for(let G=0;G<z.length;G++)v.push(p[C])}return v},n.V=function(u){Dt(this);let p=[];if(typeof u=="string")Mn(this,u)&&(p=p.concat(this.g.get(Sn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},n.set=function(u,p){return Dt(this),this.i=null,u=Sn(this,u),Mn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ti(u,p,v){Vn(u,p),0<v.length&&(u.i=null,u.g.set(Sn(u,p),M(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var C=p[v];const G=encodeURIComponent(String(C)),se=this.V(C);for(C=0;C<se.length;C++){var z=G;se[C]!==""&&(z+="="+encodeURIComponent(String(se[C]))),u.push(z)}}return this.i=u.join("&")};function Sn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Jn(u,p){p&&!u.j&&(Dt(u),u.i=null,u.g.forEach(function(v,C){var z=C.toLowerCase();C!=z&&(Vn(this,C),ti(this,z,v))},u)),u.j=p}function Mh(u,p){const v=new Yi;if(f.Image){const C=new Image;C.onload=A(en,v,"TestLoadImage: loaded",!0,p,C),C.onerror=A(en,v,"TestLoadImage: error",!1,p,C),C.onabort=A(en,v,"TestLoadImage: abort",!1,p,C),C.ontimeout=A(en,v,"TestLoadImage: timeout",!1,p,C),f.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=u}else p(!1)}function au(u,p){const v=new Yi,C=new AbortController,z=setTimeout(()=>{C.abort(),en(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:C.signal}).then(G=>{clearTimeout(z),G.ok?en(v,"TestPingServer: ok",!0,p):en(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(z),en(v,"TestPingServer: error",!1,p)})}function en(u,p,v,C,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),C(v)}catch{}}function Fh(){this.g=new Ea}function lu(u,p,v){const C=v||"";try{Yr(u,function(z,G){let se=z;y(z)&&(se=_a(z)),p.push(C+G+"="+encodeURIComponent(se))})}catch(z){throw p.push(C+"type="+encodeURIComponent("_badmap")),z}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}b(Ir,Ki),Ir.prototype.g=function(){return new rs(this.l,this.j)},Ir.prototype.i=function(u){return function(){return u}}({});function rs(u,p){wt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(rs,wt),n=rs.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,jn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Fn(this):jn(this),this.readyState==3&&uu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Fn(this))},n.Qa=function(u){this.g&&(this.response=u,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,jn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Cr(u){let p="";return Q(u,function(v,C){p+=C,p+=":",p+=v,p+=`\r
`}),p}function ni(u,p,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Cr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Ge(u,p,v))}function et(u){wt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(et,wt);var jh=/^https?$/i,ba=["POST","PUT"];n=et.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?Ms(this.o):Ms(On),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(G){is(this,G);return}if(u=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var z in C)v.set(z,C[z]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const G of C.keys())v.set(G,C.get(G));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),z=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ba,p,void 0))||C||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,se]of v)this.g.setRequestHeader(G,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){is(this,G)}};function is(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ks(u),fn(u)}function Ks(u){u.A||(u.A=!0,Et(u,"complete"),Et(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Et(this,"complete"),Et(this,"abort"),fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},n.bb=function(){Na(this)};function Na(u){if(u.h&&typeof h<"u"&&(!u.v[1]||tn(u)!=4||u.Z()!=2)){if(u.u&&tn(u)==4)ga(u.Ea,0,u);else if(Et(u,"readystatechange"),tn(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var C;if(C=se===0){var z=String(u.D).match(ts)[1]||null;!z&&f.self&&f.self.location&&(z=f.self.location.protocol.slice(0,-1)),C=!jh.test(z?z.toLowerCase():"")}v=C}if(v)Et(u,"complete"),Et(u,"success");else{u.m=6;try{var G=2<tn(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",Ks(u)}}finally{fn(u)}}}}function fn(u,p){if(u.g){Qs(u);const v=u.g,C=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Et(u,"ready");try{v.onreadystatechange=C}catch{}}}function Qs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function tn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),wa(p)}};function Da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ys(u){const p={};u=(u.g&&2<=tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<u.length;C++){if(B(u[C]))continue;var v=D(u[C]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=p[z]||[];p[z]=G,G.push(v)}E(p,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function Oa(u){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new es(u&&u.concurrentRequestLimit),this.Da=new Fh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oa.prototype,n.la=8,n.G=1,n.connect=function(u,p,v,C){ut(0),this.W=u,this.H=p||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=fu(this,null,this.W),er(this)};function Ot(u){if(Xs(u),u.G==3){var p=u.U++,v=dn(u.I);if(Ge(v,"SID",u.K),Ge(v,"RID",p),Ge(v,"TYPE","terminate"),xr(u,v),p=new Ln(u,u.j,p),p.L=2,p.v=Zr(dn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=p.v,v=!0),v||(p.g=pu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ke(p)}du(u)}function Un(u){u.g&&(La(u),u.g.cancel(),u.g=null)}function Xs(u){Un(u),u.u&&(f.clearTimeout(u.u),u.u=null),eo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function er(u){if(!hn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Oe||le(),ie||(Oe(),ie=!0),de.add(p,u),u.B=0}}function Uh(u,p){return eu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Nn(S(u.Ga,u,p),hu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const z=new Ln(this,this.j,u);let G=this.o;if(this.S&&(G?(G=T(G),R(G,this.S)):G=this.S),this.m!==null||this.O||(z.H=G,G=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=ri(this,z,p),v=dn(this.I),Ge(v,"RID",u),Ge(v,"CVER",22),this.D&&Ge(v,"X-HTTP-Session-Id",this.D),xr(this,v),G&&(this.O?p="headers="+encodeURIComponent(String(Cr(G)))+"&"+p:this.m&&ni(v,this.m,G)),Ra(this.h,z),this.Ua&&Ge(v,"TYPE","init"),this.P?(Ge(v,"$req",p),Ge(v,"SID","null"),z.T=!0,Hs(z,v,null)):Hs(z,v,p),this.G=2}}else this.G==3&&(u?Js(this,u):this.i.length==0||hn(this.h)||Js(this))};function Js(u,p){var v;p?v=p.l:v=u.U++;const C=dn(u.I);Ge(C,"SID",u.K),Ge(C,"RID",v),Ge(C,"AID",u.T),xr(u,C),u.m&&u.o&&ni(C,u.m,u.o),v=new Ln(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ri(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ra(u.h,v),Hs(v,C,p)}function xr(u,p){u.H&&Q(u.H,function(v,C){Ge(p,C,v)}),u.l&&Yr({},function(v,C){Ge(p,C,v)})}function ri(u,p,v){v=Math.min(u.i.length,v);var C=u.l?S(u.l.Na,u.l,u):null;e:{var z=u.i;let G=-1;for(;;){const se=["count="+v];G==-1?0<v?(G=z[0].g,se.push("ofs="+G)):G=0:se.push("ofs="+G);let qe=!0;for(let Tt=0;Tt<v;Tt++){let Me=z[Tt].g;const Pt=z[Tt].map;if(Me-=G,0>Me)G=Math.max(0,z[Tt].g-100),qe=!1;else try{lu(Pt,se,"req"+Me+"_")}catch{C&&C(Pt)}}if(qe){C=se.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,C}function ss(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Oe||le(),ie||(Oe(),ie=!0),de.add(p,u),u.v=0}}function Zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Nn(S(u.Fa,u),hu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Nn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Un(this),cu(this))};function La(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function cu(u){u.g=new Ln(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=dn(u.qa);Ge(p,"RID","rpc"),Ge(p,"SID",u.K),Ge(p,"AID",u.T),Ge(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ge(p,"TO",u.ja),Ge(p,"TYPE","xmlhttp"),xr(u,p),u.m&&u.o&&ni(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Zr(dn(p)),v.m=null,v.P=!0,Pa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Un(this),Zs(this),ut(19))};function eo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function to(u,p){var v=null;if(u.g==p){eo(u),La(u),u.g=null;var C=2}else if(Kt(u.h,p))v=p.D,tu(u.h,p),C=1;else return;if(u.G!=0){if(p.o)if(C==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var z=u.B;C=Qi(),Et(C,new Us(C,v)),er(u)}else ss(u);else if(z=p.s,z==3||z==0&&0<p.X||!(C==1&&Uh(u,p)||C==2&&Zs(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),z){case 1:Pr(u,5);break;case 4:Pr(u,10);break;case 3:Pr(u,6);break;default:Pr(u,2)}}}function hu(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Pr(u,p){if(u.j.info("Error code "+p),p==2){var v=S(u.fb,u),C=u.Xa;const z=!C;C=new Sr(C||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ns(C,"https"),Zr(C),z?Mh(C.toString(),v):au(C.toString(),v)}else ut(2);u.G=0,u.l&&u.l.sa(p),du(u),Xs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function du(u){if(u.G=0,u.ka=[],u.l){const p=nu(u.h);(p.length!=0||u.i.length!=0)&&(N(u.ka,p),N(u.ka,u.i),u.h.i.length=0,M(u.i),u.i.length=0),u.l.ra()}}function fu(u,p,v){var C=v instanceof Sr?dn(v):new Sr(v);if(C.g!="")p&&(C.g=p+"."+C.g),Xr(C,C.s);else{var z=f.location;C=z.protocol,p=p?p+"."+z.hostname:z.hostname,z=+z.port;var G=new Sr(null);C&&ns(G,C),p&&(G.g=p),z&&Xr(G,z),v&&(G.l=v),C=G}return v=u.D,p=u.ya,v&&p&&Ge(C,v,p),Ge(C,"VER",u.la),xr(u,C),C}function pu(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new et(new Ir({eb:v})):new et(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Va(){}n=Va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function no(){}no.prototype.g=function(u,p){return new Qt(u,p)};function Qt(u,p){wt.call(this),this.g=new Oa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!B(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!B(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new tr(this)}b(Qt,wt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Ot(this.g)},Qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=_a(u),u=v);p.i.push(new Zl(p.Ya++,u)),p.G==3&&er(p)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Qt.aa.N.call(this)};function mu(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}b(mu,Qn);function gu(){js.call(this),this.status=1}b(gu,js);function tr(u){this.g=u}b(tr,Va),tr.prototype.ua=function(){Et(this.g,"a")},tr.prototype.ta=function(u){Et(this.g,new mu(u))},tr.prototype.sa=function(u){Et(this.g,new gu)},tr.prototype.ra=function(){Et(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,nw=function(){return new no},tw=function(){return Qi()},ew=Yn,Yf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,bc=$s,Ql.COMPLETE="complete",Z0=Ql,Fs.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",wt.prototype.listen=wt.prototype.K,fl=Fs,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,J0=et}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const Cv="@firebase/firestore",xv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Op("@firebase/firestore");function Ro(){return Rs.logLevel}function ce(n,...e){if(Rs.logLevel<=De.DEBUG){const t=e.map(Mp);Rs.debug(`Firestore (${la}): ${n}`,...t)}}function $r(n,...e){if(Rs.logLevel<=De.ERROR){const t=e.map(Mp);Rs.error(`Firestore (${la}): ${n}`,...t)}}function Vi(n,...e){if(Rs.logLevel<=De.WARN){const t=e.map(Mp);Rs.warn(`Firestore (${la}): ${n}`,...t)}}function Mp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,rw(n,i,t)}function rw(n,e,t){let i=`FIRESTORE (${la}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw $r(i),new Error(i)}function ot(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||rw(e,o,i)}function je(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Wr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ht.UNAUTHENTICATED))}shutdown(){}}class FP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jP{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ot(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Lo;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Lo,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Lo)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string",31837,{l:i}),new iw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class UP{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zP{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new UP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $P{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ur(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ot(this.o===void 0,3512);const i=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Pv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ot(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Pv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=BP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function Xf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=sw(),h=HP(l.encode(kv(n,t)),l.encode(kv(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function kv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function HP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Qo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&xe(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):Xf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Di.fromString(e.substring(4,e.length-2))}}class it extends ar{construct(e,t,i){return new it(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ye(oe.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const qP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends ar{construct(e,t,i){return new Jt(e,t,i)}static isValidIdentifier(e){return qP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rv}static keyField(){return new Jt([Rv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ye(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ye(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(t)}static emptyPath(){return new Jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(it.fromString(e))}static fromName(e){return new we(it.fromString(e).popFirst(5))}static empty(){return new we(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new it(e.slice()))}}function WP(n,e,t,i){if(e===!0&&i===!0)throw new ye(oe.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Av(n){if(we.isDocumentKey(n))throw new ye(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function GP(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function KP(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function Nc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ye(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=KP(n);throw new ye(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ul(n,e){if(!GP(n))throw new ye(oe.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ye(oe.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=-62135596800,Nv=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Nv);return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bv)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nv}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ul(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:_t("string",vt._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new vt(0,0))}static max(){return new Se(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=-1;function QP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Mi(o,we.empty(),e)}function YP(n){return new Mi(n.readTime,n.key,Pl)}class Mi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Mi(Se.min(),we.empty(),Pl)}static max(){return new Mi(Se.max(),we.empty(),Pl)}}function XP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n){if(n.code!==oe.FAILED_PRECONDITION||n.message!==JP)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,i)=>{t(e)})}static reject(e){return new Z((t,i)=>{i(e)})}static waitFor(e){return new Z((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>i(g))}),h=!0,l===o&&t()})}static or(e){let t=Z.resolve(!1);for(const i of e)t=t.next(o=>o?Z.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Z((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next(w=>{h[y]=w,++f,f===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new Z((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function ek(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ua(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Eh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=-1;function Th(n){return n==null}function Jf(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="";function nk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dv(e)),e=rk(n.get(t),e);return Dv(e)}function rk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case aw:t+="";break;default:t+=l}}return t}function Dv(n){return n+aw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zl(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ik(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}}class vc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Mt.RED,this.left=o??Mt.EMPTY,this.right=l??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Mt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lv(this.data.getIterator())}getIteratorFrom(e){return new Lv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Lv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.fields=e,e.sort(Jt.comparator)}static empty(){return new ki([])}unionWith(e){let t=new xt(Jt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ki(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new lw("Invalid base64 string: "+l):l}}(e);return new Ft(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const sk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(n){if(ot(!!n,39018),typeof n=="string"){let e=0;const t=sk.exec(n);if(ot(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ji(n){return typeof n=="string"?Ft.fromBase64String(n):Ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="server_timestamp",cw="__type__",hw="__previous_value__",dw="__local_write_time__";function Fp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[cw])===null||t===void 0?void 0:t.stringValue)===uw}function Sh(n){const e=n.mapValue.fields[hw];return Fp(e)?Sh(e):e}function kl(n){const e=Fi(n.mapValue.fields[dw].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t,i,o,l,h,f,g,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w}}const Yc="(default)";class Rl{constructor(e,t){this.projectId=e,this.database=t||Yc}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="__type__",lk="__max__",_c={mapValue:{}},uk="__vector__",Zf="value";function Ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fp(n)?4:hk(n)?9007199254740991:ck(n)?10:11:xe(28295,{value:n})}function gr(n,e){if(n===e)return!0;const t=Ui(n);if(t!==Ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Fi(o.timestampValue),f=Fi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return ji(o.bytesValue).isEqual(ji(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),f=dt(l.doubleValue);return h===f?Jf(h)===Jf(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return Qo(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ov(h)!==Ov(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!gr(h[g],f[g])))return!1;return!0}(n,e);default:return xe(52216,{left:n})}}function Al(n,e){return(n.values||[]).find(t=>gr(t,e))!==void 0}function Yo(n,e){if(n===e)return 0;const t=Ui(n),i=Ui(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(n,e);case 3:return Vv(n.timestampValue,e.timestampValue);case 4:return Vv(kl(n),kl(e));case 5:return Xf(n.stringValue,e.stringValue);case 6:return function(l,h){const f=ji(l),g=ji(h);return f.compareTo(g)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=Ae(f[y],g[y]);if(w!==0)return w}return Ae(f.length,g.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ae(dt(l.latitude),dt(h.latitude));return f!==0?f:Ae(dt(l.longitude),dt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mv(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,y,w;const I=l.fields||{},S=h.fields||{},A=(f=I[Zf])===null||f===void 0?void 0:f.arrayValue,b=(g=S[Zf])===null||g===void 0?void 0:g.arrayValue,M=Ae(((y=A?.values)===null||y===void 0?void 0:y.length)||0,((w=b?.values)===null||w===void 0?void 0:w.length)||0);return M!==0?M:Mv(A,b)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===_c.mapValue&&h===_c.mapValue)return 0;if(l===_c.mapValue)return 1;if(h===_c.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let I=0;I<g.length&&I<w.length;++I){const S=Xf(g[I],w[I]);if(S!==0)return S;const A=Yo(f[g[I]],y[w[I]]);if(A!==0)return A}return Ae(g.length,w.length)}(n.mapValue,e.mapValue);default:throw xe(23264,{le:t})}}function Vv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Fi(n),i=Fi(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function Mv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Yo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Xo(n){return ep(n)}function ep(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Fi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ji(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return we.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=ep(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${ep(t.fields[h])}`;return o+"}"}(n.mapValue):xe(61005,{value:n})}function Dc(n){switch(Ui(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sh(n);return e?16+Dc(e):16;case 5:return 2*n.stringValue.length;case 6:return ji(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Dc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return zl(i.fields,(l,h)=>{o+=l.length+Dc(h)}),o}(n.mapValue);default:throw xe(13486,{value:n})}}function tp(n){return!!n&&"integerValue"in n}function jp(n){return!!n&&"arrayValue"in n}function Fv(n){return!!n&&"nullValue"in n}function jv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rf(n){return!!n&&"mapValue"in n}function ck(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[ak])===null||t===void 0?void 0:t.stringValue)===uk}function _l(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zl(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=_l(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_l(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.value=e}static empty(){return new cr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_l(t)}setAll(e){let t=Jt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=_l(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Rf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){zl(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new cr(_l(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new qt(e,0,Se.min(),Se.min(),Se.min(),cr.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Se.min(),Se.min(),cr.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Se.min(),Se.min(),cr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.position=e,this.inclusive=t}}function Uv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=we.comparator(we.fromName(h.referenceValue),t.key):i=Yo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function zv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t="asc"){this.field=e,this.dir=t}}function dk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{}class Ct extends fw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new pk(e,t,i):t==="array-contains"?new yk(e,i):t==="in"?new vk(e,i):t==="not-in"?new _k(e,i):t==="array-contains-any"?new wk(e,i):new Ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new mk(e,i):new gk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yo(t,this.value)):t!==null&&Ui(this.value)===Ui(t)&&this.matchesComparison(Yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends fw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new yr(e,t)}matches(e){return pw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function pw(n){return n.op==="and"}function mw(n){return fk(n)&&pw(n)}function fk(n){for(const e of n.filters)if(e instanceof yr)return!1;return!0}function np(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+Xo(n.value);if(mw(n))return n.filters.map(e=>np(e)).join(",");{const e=n.filters.map(t=>np(t)).join(",");return`${n.op}(${e})`}}function gw(n,e){return n instanceof Ct?function(i,o){return o instanceof Ct&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)}(n,e):n instanceof yr?function(i,o){return o instanceof yr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&gw(h,o.filters[f]),!0):!1}(n,e):void xe(19439)}function yw(n){return n instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Xo(t.value)}`}(n):n instanceof yr?function(t){return t.op.toString()+" {"+t.getFilters().map(yw).join(" ,")+"}"}(n):"Filter"}class pk extends Ct{constructor(e,t,i){super(e,t,i),this.key=we.fromName(i.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class mk extends Ct{constructor(e,t){super(e,"in",t),this.keys=vw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gk extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=vw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>we.fromName(i.referenceValue))}class yk extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jp(t)&&Al(t.arrayValue,this.value)}}class vk extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Al(this.value.arrayValue,t)}}class _k extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Al(this.value.arrayValue,t)}}class wk extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Al(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function $v(n,e=null,t=[],i=[],o=null,l=null,h=null){return new Ek(n,e,t,i,o,l,h)}function Up(n){const e=je(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>np(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Th(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Xo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Xo(i)).join(",")),e.Pe=t}return e.Pe}function zp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!dk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zv(n.startAt,e.startAt)&&zv(n.endAt,e.endAt)}function rp(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Tk(n,e,t,i,o,l,h,f){return new Ih(n,e,t,i,o,l,h,f)}function $p(n){return new Ih(n)}function Bv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sk(n){return n.collectionGroup!==null}function wl(n){const e=je(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new xt(Jt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Jc(l,i))}),t.has(Jt.keyField().canonicalString())||e.Te.push(new Jc(Jt.keyField(),i))}return e.Te}function dr(n){const e=je(n);return e.Ie||(e.Ie=Ik(e,wl(n))),e.Ie}function Ik(n,e){if(n.limitType==="F")return $v(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Jc(o.field,l)});const t=n.endAt?new Xc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Xc(n.startAt.position,n.startAt.inclusive):null;return $v(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ip(n,e,t){return new Ih(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ch(n,e){return zp(dr(n),dr(e))&&n.limitType===e.limitType}function _w(n){return`${Up(dr(n))}|lt:${n.limitType}`}function Ao(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>yw(o)).join(", ")}]`),Th(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Xo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Xo(o)).join(",")),`Target(${i})`}(dr(n))}; limitType=${n.limitType})`}function xh(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):we.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of wl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,g){const y=Uv(h,f,g);return h.inclusive?y<=0:y<0}(i.startAt,wl(i),o)||i.endAt&&!function(h,f,g){const y=Uv(h,f,g);return h.inclusive?y>=0:y>0}(i.endAt,wl(i),o))}(n,e)}function Ck(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ww(n){return(e,t)=>{let i=!1;for(const o of wl(n)){const l=xk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function xk(n,e,t){const i=n.field.isKeyField()?we.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?Yo(g,y):xe(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return xe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){zl(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return ik(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new ft(we.comparator);function zi(){return Pk}const Ew=new ft(we.comparator);function pl(...n){let e=Ew;for(const t of n)e=e.insert(t.key,t);return e}function kk(n){let e=Ew;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return El()}function Tw(){return El()}function El(){return new Ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const Rk=new xt(we.comparator);function $e(...n){let e=Rk;for(const t of n)e=e.add(t);return e}const Ak=new xt(Ae);function bk(){return Ak}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jf(e)?"-0":e}}function Dk(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function Ok(n,e,t){return n instanceof sp?function(o,l){const h={fields:{[cw]:{stringValue:uw},[dw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Fp(l)&&(l=Sh(l)),l&&(h.fields[hw]=l),{mapValue:h}}(t,e):n instanceof Zc?Sw(n,e):n instanceof eh?Iw(n,e):function(o,l){const h=Vk(o,l),f=Hv(h)+Hv(o.Ee);return tp(h)&&tp(o.Ee)?Dk(f):Nk(o.serializer,f)}(n,e)}function Lk(n,e,t){return n instanceof Zc?Sw(n,e):n instanceof eh?Iw(n,e):t}function Vk(n,e){return n instanceof op?function(i){return tp(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class sp extends Ph{}class Zc extends Ph{constructor(e){super(),this.elements=e}}function Sw(n,e){const t=Cw(e);for(const i of n.elements)t.some(o=>gr(o,i))||t.push(i);return{arrayValue:{values:t}}}class eh extends Ph{constructor(e){super(),this.elements=e}}function Iw(n,e){let t=Cw(e);for(const i of n.elements)t=t.filter(o=>!gr(o,i));return{arrayValue:{values:t}}}class op extends Ph{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Hv(n){return dt(n.integerValue||n.doubleValue)}function Cw(n){return jp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Zc&&o instanceof Zc||i instanceof eh&&o instanceof eh?Qo(i.elements,o.elements,gr):i instanceof op&&o instanceof op?gr(i.Ee,o.Ee):i instanceof sp&&o instanceof sp}(n.transform,e.transform)}class Is{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Is}static exists(e){return new Is(void 0,e)}static updateTime(e){return new Is(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bp{}function xw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jk(n.key,Is.none()):new Hp(n.key,n.data,Is.none());{const t=n.data,i=cr.empty();let o=new xt(Jt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new kh(n.key,i,new ki(o.toArray()),Is.none())}}function Fk(n,e,t){n instanceof Hp?function(o,l,h){const f=o.value.clone(),g=Wv(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof kh?function(o,l,h){if(!Oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Wv(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Pw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Tl(n,e,t,i){return n instanceof Hp?function(l,h,f,g){if(!Oc(l.precondition,h))return f;const y=l.value.clone(),w=Gv(l.fieldTransforms,g,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof kh?function(l,h,f,g){if(!Oc(l.precondition,h))return f;const y=Gv(l.fieldTransforms,g,h),w=h.data;return w.setAll(Pw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,h,f){return Oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function qv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Qo(i,o,(l,h)=>Mk(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hp extends Bp{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class kh extends Bp{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Pw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Wv(n,e,t){const i=new Map;ot(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,Lk(h,f,t[o]))}return i}function Gv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,Ok(l,h,e))}return i}class jk extends Bp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Fk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Tw();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=xw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Se.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$e())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(t,i)=>qv(t,i))&&Qo(this.baseMutations,e.baseMutations,(t,i)=>qv(t,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Fe;function kw(n){if(n===void 0)return $r("GRPC error has no .code"),oe.UNKNOWN;switch(n){case gt.OK:return oe.OK;case gt.CANCELLED:return oe.CANCELLED;case gt.UNKNOWN:return oe.UNKNOWN;case gt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case gt.INTERNAL:return oe.INTERNAL;case gt.UNAVAILABLE:return oe.UNAVAILABLE;case gt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case gt.NOT_FOUND:return oe.NOT_FOUND;case gt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case gt.ABORTED:return oe.ABORTED;case gt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case gt.DATA_LOSS:return oe.DATA_LOSS;default:return xe(39323,{code:n})}}(Fe=gt||(gt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new Di([4294967295,4294967295],0);function Kv(n){const e=sw().encode(n),t=new X0;return t.update(e),new Uint8Array(t.digest())}function Qv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Di([t,i],0),new Di([o,l],0)]}class qp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ml(`Invalid padding: ${t}`);if(i<0)throw new ml(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ml(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ml(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Di.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Di.fromNumber(i)));return o.compare(Bk)===1&&(o=new Di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Kv(e),[i,o]=Qv(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new qp(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.fe===0)return;const t=Kv(e),[i,o]=Qv(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,$l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Rh(Se.min(),o,new ft(Ae),zi(),$e())}}class $l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new $l(i,t,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class Rw{constructor(e,t){this.targetId=e,this.De=t}}class Aw{constructor(e,t,i=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Yv{constructor(){this.ve=0,this.Ce=Xv(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=$e(),t=$e(),i=$e();return this.Ce.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:xe(38017,{changeType:l})}}),new $l(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Xv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ot(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Hk{constructor(e){this.We=e,this.Ge=new Map,this.ze=zi(),this.je=wc(),this.Je=wc(),this.He=new ft(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:xe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((i,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(rp(l))if(i===0){const h=new we(l.path);this.Xe(t,h,qt.newNoDocument(h,Se.min()))}else ot(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ji(i).toUint8Array()}catch(g){if(g instanceof lw)return Vi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new qp(h,o,l)}catch(g){return Vi(g instanceof ml?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((l,h)=>{const f=this.st(h);if(f){if(l.current&&rp(f.target)){const g=new we(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,qt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}});let i=$e();this.Je.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const y=this.st(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ze.forEach((l,h)=>h.setReadTime(e));const o=new Rh(e,t,this.He,this.ze,i);return this.ze=zi(),this.je=wc(),this.Je=wc(),this.He=new ft(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Yv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new xt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new xt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Yv),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function wc(){return new ft(we.comparator)}function Xv(){return new ft(we.comparator)}const qk={asc:"ASCENDING",desc:"DESCENDING"},Wk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gk={and:"AND",or:"OR"};class Kk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ap(n,e){return n.useProto3Json||Th(e)?e:{value:e}}function Qk(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yk(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vo(n){return ot(!!n,49232),Se.fromTimestamp(function(t){const i=Fi(t);return new vt(i.seconds,i.nanos)}(n))}function Xk(n,e){return lp(n,e).canonicalString()}function lp(n,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bw(n){const e=it.fromString(n);return ot(Vw(e),10190,{key:e.toString()}),e}function Af(n,e){const t=bw(e);if(t.get(1)!==n.databaseId.projectId)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(Dw(t))}function Nw(n,e){return Xk(n.databaseId,e)}function Jk(n){const e=bw(n);return e.length===4?it.emptyPath():Dw(e)}function Jv(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dw(n){return ot(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:xe(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(ot(w===void 0||typeof w=="string",58123),Ft.fromBase64String(w||"")):(ot(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ft.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const w=y.code===void 0?oe.UNKNOWN:kw(y.code);return new ye(w,y.message||"")}(h);t=new Aw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Af(n,i.document.name),l=Vo(i.document.updateTime),h=i.document.createTime?Vo(i.document.createTime):Se.min(),f=new cr({mapValue:{fields:i.document.fields}}),g=qt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new Lc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Af(n,i.document),l=i.readTime?Vo(i.readTime):Se.min(),h=qt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Lc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Af(n,i.document),l=i.removedTargetIds||[];t=new Lc([],l,o,null)}else{if(!("filter"in e))return xe(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new $k(o,l),f=i.targetId;t=new Rw(f,h)}}return t}function eR(n,e){return{documents:[Nw(n,e.path)]}}function tR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Nw(n,o);const l=function(y){if(y.length!==0)return Lw(yr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(S){return{field:bo(S.field),direction:iR(S.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=ap(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{Vt:t,parent:o}}function nR(n){let e=Jk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ot(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(I){const S=Ow(I);return S instanceof yr&&mw(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(I){return I.map(S=>function(b){return new Jc(No(b.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(S))}(t.orderBy));let f=null;t.limit&&(f=function(I){let S;return S=typeof I=="object"?I.value:I,Th(S)?null:S}(t.limit));let g=null;t.startAt&&(g=function(I){const S=!!I.before,A=I.values||[];return new Xc(A,S)}(t.startAt));let y=null;return t.endAt&&(y=function(I){const S=!I.before,A=I.values||[];return new Xc(A,S)}(t.endAt)),Tk(e,o,h,l,f,"F",g,y)}function rR(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ow(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return Ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return Ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return Ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ct.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return yr.create(t.compositeFilter.filters.map(i=>Ow(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe(1026)}}(t.compositeFilter.op))}(n):xe(30097,{filter:n})}function iR(n){return qk[n]}function sR(n){return Wk[n]}function oR(n){return Gk[n]}function bo(n){return{fieldPath:n.canonicalString()}}function No(n){return Jt.fromServerFormat(n.fieldPath)}function Lw(n){return n instanceof Ct?function(t){if(t.op==="=="){if(jv(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NAN"}};if(Fv(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jv(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NAN"}};if(Fv(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bo(t.field),op:sR(t.op),value:t.value}}}(n):n instanceof yr?function(t){const i=t.getFilters().map(o=>Lw(o));return i.length===1?i[0]:{compositeFilter:{op:oR(t.op),filters:i}}}(n):xe(54877,{filter:n})}function Vw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,i,o,l=Se.min(),h=Se.min(),f=Ft.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.gt=e}}function lR(n){const e=nR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ip(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.Dn=new cR}addToCollectionParentIndex(e,t){return this.Dn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Mi.min())}updateCollectionGroup(e,t,i){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class cR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new xt(it.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mw=41943040;class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(Mw,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Jo(0)}static ur(){return new Jo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="LruGarbageCollector",hR=1048576;function t_([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class dR{constructor(e){this.Tr=e,this.buffer=new xt(t_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();t_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(e_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ua(t)?ce(e_,"Ignoring IndexedDB error during garbage collection: ",t):await wh(t)}await this.Rr(3e5)})}}class pR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Eh.ue);const i=new dR(t);return this.Vr.forEachTarget(e,o=>i.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>i.Er(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(Zv)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zv):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(i=I,f=Date.now(),this.removeTargets(e,i,t))).next(I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,i))).next(I=>(y=Date.now(),Ro()<=De.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function mR(n,e){return new pR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.changes=new Ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Tl(i.mutation,o,ki.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,$e()).next(()=>i))}getLocalViewOfDocuments(e,t,i=$e()){const o=Es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=pl();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,$e()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=zi();const h=El(),f=function(){return El()}();return t.forEach((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof kh)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),Tl(w.mutation,y,w.mutation.getFieldMask(),vt.now())):h.set(y.key,ki.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var I;return f.set(y,new yR(w,(I=h.get(y))!==null&&I!==void 0?I:null))}),f))}recalculateAndSaveOverlays(e,t){const i=El();let o=new ft((h,f)=>h-f),l=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||ki.empty();w=f.applyToLocalView(y,w),i.set(g,w);const I=(o.get(f.batchId)||$e()).add(g);o=o.insert(f.batchId,I)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,I=Tw();w.forEach(S=>{if(!l.has(S)){const A=xw(t.get(S),i.get(S));A!==null&&I.set(S,A),l=l.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,I))}return Z.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return we.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sk(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Z.resolve(Es());let f=Pl,g=l;return h.next(y=>Z.forEach(y,(w,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(w)?Z.resolve():this.remoteDocumentCache.getEntry(e,w).next(S=>{g=g.insert(w,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,g,y,$e())).next(w=>({batchId:f,changes:kk(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(i=>{let o=pl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=pl();return this.indexManager.getCollectionParents(e,l).next(f=>Z.forEach(f,g=>{const y=function(I,S){return new Ih(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(w=>{w.forEach((I,S)=>{h=h.insert(I,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((g,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,qt.newInvalidDocument(w)))});let f=pl();return h.forEach((g,y)=>{const w=l.get(g);w!==void 0&&Tl(w.mutation,y,ki.empty(),vt.now()),xh(t,y)&&(f=f.insert(g,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Vo(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:lR(o.bundledQuery),readTime:Vo(o.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.overlays=new ft(we.comparator),this.kr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return Z.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.wt(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(i)),Z.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,h=new we(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ft((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=Es(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=Es(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,w)=>f.set(y,w)),!(f.size()>=o)););return Z.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new zk(t,i));let l=this.kr.get(t);l===void 0&&(l=$e(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.qr=new xt(bt.Qr),this.$r=new xt(bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new bt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Wr(new bt(e,t))}Gr(e,t){e.forEach(i=>this.removeReference(i,t))}zr(e){const t=new we(new it([])),i=new bt(t,e),o=new bt(t,e+1),l=[];return this.$r.forEachInRange([i,o],h=>{this.Wr(h),l.push(h.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new we(new it([])),i=new bt(t,e),o=new bt(t,e+1);let l=$e();return this.$r.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new bt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class bt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return we.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new xt(bt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Uk(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new bt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return Z.resolve(h)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?tk:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new bt(t,0),o=new bt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],h=>{const f=this.Zr(h.Hr);l.push(f)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new xt(Ae);return t.forEach(o=>{const l=new bt(o,0),h=new bt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],f=>{i=i.add(f.Hr)})}),Z.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;we.isDocumentKey(l)||(l=l.child(""));const h=new bt(new we(l),0);let f=new xt(Ae);return this.Yr.forEachWhile(g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Hr)),!0)},h),Z.resolve(this.ei(f))}ei(e){const t=[];return e.forEach(i=>{const o=this.Zr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){ot(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return Z.forEach(t.mutations,o=>{const l=new bt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=i})}rr(e){}containsKey(e,t){const i=new bt(t,0),o=this.Yr.firstAfterOrEqual(i);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.ni=e,this.docs=function(){return new ft(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Z.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=zi();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))}),Z.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=zi();const h=t.path,f=new we(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||XP(YP(w),i)<=0||(o.has(w.key)||xh(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,i,o){xe(9500)}ri(e,t){return Z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new IR(this)}getSize(e){return Z.resolve(this.size)}}class IR extends gR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)}),Z.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.persistence=e,this.ii=new Ns(t=>Up(t),zp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new Wp,this.targetCount=0,this._i=Jo.ar()}forEachTarget(e,t){return this.ii.forEach((i,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),Z.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.hr(t),Z.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),Z.waitFor(l).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return Z.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),Z.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return Z.resolve(i)}containsKey(e,t){return Z.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Eh(0),this.ci=!1,this.ci=!0,this.li=new ER,this.referenceDelegate=e(this),this.hi=new CR(this),this.indexManager=new uR,this.remoteDocumentCache=function(o){return new SR(o)}(i=>this.referenceDelegate.Pi(i)),this.serializer=new aR(t),this.Ti=new _R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new TR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ce("MemoryPersistence","Starting transaction:",e);const o=new xR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next(l=>this.referenceDelegate.di(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Ei(e,t){return Z.or(Object.values(this.ai).map(i=>()=>i.containsKey(e,t)))}}class xR extends ZP{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Ai=new Wp,this.Ri=null}static Vi(e){return new Gp(e)}get mi(){if(this.Ri)return this.Ri;throw xe(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),Z.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.mi.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,i=>{const o=we.fromPath(i);return this.fi(e,o).next(l=>{l||t.removeEntry(o,Se.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Z.or([()=>Z.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class th{constructor(e,t){this.persistence=e,this.gi=new Ns(i=>nk(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=mR(this,t)}static Vi(e,t){return new th(e,t)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}yr(e){let t=0;return this.gr(e,i=>{t++}).next(()=>t)}gr(e,t){return Z.forEach(this.gi,(i,o)=>this.Sr(e,i,o).next(l=>l?Z.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Se.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Dc(e.data.value)),t}Sr(e,t,i){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return Z.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=$e(),o=$e();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Kp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return _x()?8:ek(Wt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ys(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new PR;return this.ws(e,t,h).next(f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)})}).next(()=>l.result)}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Ro()<=De.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(Ro()<=De.DEBUG&&ce("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Ro()<=De.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(t))):Z.resolve())}ps(e,t){if(Bv(t))return Z.resolve(null);let i=dr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ip(t,null,"F"),i=dr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=$e(...l);return this.gs.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(g=>{const y=this.bs(t,f);return this.Ds(t,y,h,g.readTime)?this.ps(e,ip(t,null,"F")):this.vs(e,y,t,g)}))})))}ys(e,t,i,o){return Bv(t)||o.isEqual(Se.min())?Z.resolve(null):this.gs.getDocuments(e,i).next(l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?Z.resolve(null):(Ro()<=De.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,QP(o,Pl)).next(f=>f))})}bs(e,t){let i=new xt(ww(e));return t.forEach((o,l)=>{xh(e,l)&&(i=i.add(l))}),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Ro()<=De.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,Mi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="LocalStore",RR=3e8;class AR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ft(Ae),this.Ms=new Ns(l=>Up(l),zp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function bR(n,e,t,i){return new AR(n,e,t,i)}async function jw(n,e){const t=je(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let g=$e();for(const y of o){h.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next(y=>({Bs:y,removedBatchIds:h,addedBatchIds:f}))})})}function Uw(n){const e=je(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function NR(n,e){const t=je(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach((w,I)=>{const S=o.get(I);if(!S)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,I).next(()=>t.hi.addMatchingKeys(l,w.addedDocuments,I)));let A=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?A=A.withResumeToken(Ft.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):w.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(w.resumeToken,i)),o=o.insert(I,A),function(M,N,V){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=RR?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(S,A,w)&&f.push(t.hi.updateTargetData(l,A))});let g=zi(),y=$e();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(DR(l,h,e.documentUpdates).next(w=>{g=w.Ls,y=w.ks})),!i.isEqual(Se.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next(I=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(w)}return Z.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,y)).next(()=>g)}).then(l=>(t.Fs=o,l))}function DR(n,e,t){let i=$e(),o=$e();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=zi();return t.forEach((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ce(Qp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)}),{Ls:h,ks:o}})}function OR(n,e){const t=je(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.hi.getTargetData(i,e).next(l=>l?(o=l,Z.resolve(o)):t.hi.allocateTargetId(i).next(h=>(o=new Ri(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i})}async function up(n,e,t){const i=je(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!ua(h))throw h;ce(Qp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function n_(n,e,t){const i=je(n);let o=Se.min(),l=$e();return i.persistence.runTransaction("Execute query","readwrite",h=>function(g,y,w){const I=je(g),S=I.Ms.get(w);return S!==void 0?Z.resolve(I.Fs.get(S)):I.hi.getTargetData(y,w)}(i,h,dr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?l:$e())).next(f=>(LR(i,Ck(e),f),{documents:f,qs:l})))}function LR(n,e,t){let i=n.xs.get(e)||Se.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.xs.set(e,i)}class r_{constructor(){this.activeTargetIds=bk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VR{constructor(){this.Fo=new r_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new r_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="ConnectivityMonitor";class s_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(i_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(i_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=null;function cp(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="RestConnection",FR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Yc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=cp(),f=this.Go(e,t.toUriEncodedString());ce(bf,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:y}=new URL(f),w=oa(y);return this.jo(e,f,g,i,w).then(I=>(ce(bf,`Received RPC '${e}' ${h}: `,I),I),I=>{throw Vi(bf,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",i),I})}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+la}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}Go(e,t){const i=FR[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class zR extends jR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=cp();return new Promise((f,g)=>{const y=new J0;y.setWithCredentials(!0),y.listenOnce(Z0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case bc.NO_ERROR:const I=y.getResponseJson();ce(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case bc.TIMEOUT:ce(Bt,`RPC '${e}' ${h} timed out`),g(new ye(oe.DEADLINE_EXCEEDED,"Request time out"));break;case bc.HTTP_ERROR:const S=y.getStatus();if(ce(Bt,`RPC '${e}' ${h} failed with status:`,S,"response text:",y.getResponseText()),S>0){let A=y.getResponseJson();Array.isArray(A)&&(A=A[0]);const b=A?.error;if(b&&b.status&&b.message){const M=function(V){const B=V.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf(B)>=0?B:oe.UNKNOWN}(b.status);g(new ye(M,b.message))}else g(new ye(oe.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ye(oe.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ce(Bt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ce(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)})}P_(e,t,i){const o=cp(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=nw(),f=tw(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");ce(Bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const I=h.createWebChannel(w,g);this.T_(I);let S=!1,A=!1;const b=new UR({Ho:N=>{A?ce(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,N):(S||(ce(Bt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),ce(Bt,`RPC '${e}' stream ${o} sending:`,N),I.send(N))},Yo:()=>I.close()}),M=(N,V,B)=>{N.listen(V,q=>{try{B(q)}catch(K){setTimeout(()=>{throw K},0)}})};return M(I,fl.EventType.OPEN,()=>{A||(ce(Bt,`RPC '${e}' stream ${o} transport opened.`),b.s_())}),M(I,fl.EventType.CLOSE,()=>{A||(A=!0,ce(Bt,`RPC '${e}' stream ${o} transport closed`),b.__(),this.I_(I))}),M(I,fl.EventType.ERROR,N=>{A||(A=!0,Vi(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,N.name,"Message:",N.message),b.__(new ye(oe.UNAVAILABLE,"The operation could not be completed")))}),M(I,fl.EventType.MESSAGE,N=>{var V;if(!A){const B=N.data[0];ot(!!B,16349);const q=B,K=q?.error||((V=q[0])===null||V===void 0?void 0:V.error);if(K){ce(Bt,`RPC '${e}' stream ${o} received error:`,K);const J=K.status;let Q=function(x){const R=gt[x];if(R!==void 0)return kw(R)}(J),E=K.message;Q===void 0&&(Q=oe.INTERNAL,E="Unknown error status: "+J+" with message "+K.message),A=!0,b.__(new ye(Q,E)),I.close()}else ce(Bt,`RPC '${e}' stream ${o} received:`,B),b.a_(B)}}),M(f,ew.STAT_EVENT,N=>{N.stat===Yf.PROXY?ce(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):N.stat===Yf.NOPROXY&&ce(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Nf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n){return new Kk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ce("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="PersistentStream";class $R{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new $w(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===oe.RESOURCE_EXHAUSTED?($r(t.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.b_===t&&this.W_(i,o)},i=>{e(()=>{const o=new ye(oe.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)})})}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.e_(()=>{i(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{i(()=>this.G_(o))}),this.stream.onMessage(o=>{i(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ce(o_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ce(o_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BR extends $R{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Zk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Se.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?Vo(h.readTime):Se.min()}(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Jv(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=rp(g)?{documents:eR(l,g)}:{query:tR(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Yk(l,h.resumeToken);const y=ap(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Se.min())>0){f.readTime=Qk(l,h.snapshotVersion.toTimestamp());const y=ap(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=rR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Jv(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{}class qR extends HR{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Wo(e,lp(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(oe.UNKNOWN,l.toString())})}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Jo(e,lp(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(oe.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class WR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($r(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="RemoteStore";class GR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(h=>{i.enqueueAndForget(async()=>{Hl(this)&&(ce(Zo,"Restarting streams for network reachability change."),await async function(g){const y=je(g);y.Ia.add(4),await Bl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Ah(y)}(this))})}),this.Aa=new WR(i,o)}}async function Ah(n){if(Hl(n))for(const e of n.da)await e(!0)}async function Bl(n){for(const e of n.da)await e(!1)}function Bw(n,e){const t=je(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Zp(t)?Jp(t):ca(t).x_()&&Xp(t,e))}function Yp(n,e){const t=je(n),i=ca(t);t.Ta.delete(e),i.x_()&&Hw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Hl(t)&&t.Aa.set("Unknown"))}function Xp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ca(n).H_(e)}function Hw(n,e){n.Ra.$e(e),ca(n).Y_(e)}function Jp(n){n.Ra=new Hk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ca(n).start(),n.Aa.aa()}function Zp(n){return Hl(n)&&!ca(n).M_()&&n.Ta.size>0}function Hl(n){return je(n).Ia.size===0}function qw(n){n.Ra=void 0}async function KR(n){n.Aa.set("Online")}async function QR(n){n.Ta.forEach((e,t)=>{Xp(n,e)})}async function YR(n,e){qw(n),Zp(n)?(n.Aa.la(e),Jp(n)):n.Aa.set("Unknown")}async function XR(n,e,t){if(n.Aa.set("Online"),e instanceof Aw&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))}(n,e)}catch(i){ce(Zo,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await a_(n,i)}else if(e instanceof Lc?n.Ra.Ye(e):e instanceof Rw?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Se.min()))try{const i=await Uw(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(y);w&&l.Ta.set(y,w.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,y)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ft.EMPTY_BYTE_STRING,w.snapshotVersion)),Hw(l,g);const I=new Ri(w.target,g,y,w.sequenceNumber);Xp(l,I)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){ce(Zo,"Failed to raise snapshot:",i),await a_(n,i)}}async function a_(n,e,t){if(!ua(e))throw e;n.Ia.add(1),await Bl(n),n.Aa.set("Offline"),t||(t=()=>Uw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ce(Zo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ah(n)})}async function l_(n,e){const t=je(n);t.asyncQueue.verifyOperationInProgress(),ce(Zo,"RemoteStore received new credentials");const i=Hl(t);t.Ia.add(3),await Bl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ah(t)}async function JR(n,e){const t=je(n);e?(t.Ia.delete(2),await Ah(t)):e||(t.Ia.add(2),await Bl(t),t.Aa.set("Unknown"))}function ca(n){return n.Va||(n.Va=function(t,i,o){const l=je(t);return l.ia(),new BR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Zo:KR.bind(null,n),e_:QR.bind(null,n),n_:YR.bind(null,n),J_:XR.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Zp(n)?Jp(n):n.Aa.set("Unknown")):(await n.Va.stop(),qw(n))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Lo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new em(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ww(n,e){if($r("AsyncQueue",`${e}: ${n}`),ua(n))return new ye(oe.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||we.comparator(t.key,i.key):(t,i)=>we.comparator(t.key,i.key),this.keyedMap=pl(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.fa=new ft(we.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):xe(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,i)=>{e.push(i)}),e}}class ea{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new ea(e,t,Mo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class eA{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=je(t),l=o.queries;o.queries=c_(),l.forEach((h,f)=>{for(const g of f.wa)g.onError(i)})})(this,new ye(oe.ABORTED,"Firestore shutting down"))}}function c_(){return new Ns(n=>_w(n),Ch)}async function tA(n,e){const t=je(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new ZR,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Ww(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&tm(t)}async function nA(n,e){const t=je(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function rA(n,e){const t=je(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&tm(t)}function iA(n,e,t){const i=je(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function tm(n){n.Da.forEach(e=>{e.next()})}var hp,h_;(h_=hp||(hp={})).Fa="default",h_.Cache="cache";class sA{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ea(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ea.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.key=e}}class Kw{constructor(e){this.key=e}}class oA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$e(),this.mutatedKeys=$e(),this.Xa=ww(e),this.eu=new Mo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new u_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,I)=>{const S=o.get(w),A=xh(this.query,I)?I:null,b=!!S&&this.mutatedKeys.has(S.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;S&&A?S.data.isEqual(A.data)?b!==M&&(i.track({type:3,doc:A}),N=!0):this.iu(S,A)||(i.track({type:2,doc:A}),N=!0,(g&&this.Xa(A,g)>0||y&&this.Xa(A,y)<0)&&(f=!0)):!S&&A?(i.track({type:0,doc:A}),N=!0):S&&!A&&(i.track({type:1,doc:S}),N=!0,(g||y)&&(f=!0)),N&&(A?(h=h.add(A),l=M?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((w,I)=>function(A,b){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{At:N})}};return M(A)-M(b)}(w.type,I.type)||this.Xa(w.doc,I.doc)),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,y=g!==this.Ya;return this.Ya=g,h.length!==0||y?{snapshot:new ea(this.query,e.eu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new u_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=$e(),this.eu.forEach(i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))});const t=[];return e.forEach(i=>{this.Za.has(i)||t.push(new Kw(i))}),this.Za.forEach(i=>{e.has(i)||t.push(new Gw(i))}),t}uu(e){this.Ha=e.qs,this.Za=$e();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ea.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const nm="SyncEngine";class aA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class lA{constructor(e){this.key=e,this.lu=!1}}class uA{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ns(f=>_w(f),Ch),this.Tu=new Map,this.Iu=new Set,this.du=new ft(we.comparator),this.Eu=new Map,this.Au=new Wp,this.Ru={},this.Vu=new Map,this.mu=Jo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function cA(n,e,t=!0){const i=Zw(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Qw(i,e,t,!0),o}async function hA(n,e){const t=Zw(n);await Qw(t,e,!0,!1)}async function Qw(n,e,t,i){const o=await OR(n.localStore,dr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await dA(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Bw(n.remoteStore,o),f}async function dA(n,e,t,i,o){n.gu=(I,S,A)=>async function(M,N,V,B){let q=N.view.nu(V);q.Ds&&(q=await n_(M.localStore,N.query,!1).then(({documents:E})=>N.view.nu(E,q)));const K=B&&B.targetChanges.get(N.targetId),J=B&&B.targetMismatches.get(N.targetId)!=null,Q=N.view.applyChanges(q,M.isPrimaryClient,K,J);return f_(M,N.targetId,Q._u),Q.snapshot}(n,I,S,A);const l=await n_(n.localStore,e,!0),h=new oA(e,l.qs),f=h.nu(l.documents),g=$l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,g);f_(n,t,y._u);const w=new aA(e,t,h);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function fA(n,e,t){const i=je(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter(h=>!Ch(h,e))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await up(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Yp(i.remoteStore,o.targetId),dp(i,o.targetId)}).catch(wh)):(dp(i,o.targetId),await up(i.localStore,o.targetId,!0))}async function pA(n,e){const t=je(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Yp(t.remoteStore,i.targetId))}async function Yw(n,e){const t=je(n);try{const i=await NR(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Eu.get(l);h&&(ot(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?ot(h.lu,14607):o.removedDocuments.size>0&&(ot(h.lu,42227),h.lu=!1))}),await Jw(t,i,e)}catch(i){await wh(i)}}function d_(n,e,t){const i=je(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=je(h);g.onlineState=f;let y=!1;g.queries.forEach((w,I)=>{for(const S of I.wa)S.va(f)&&(y=!0)}),y&&tm(g)}(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mA(n,e,t){const i=je(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new ft(we.comparator);h=h.insert(l,qt.newNoDocument(l,Se.min()));const f=$e().add(l),g=new Rh(Se.min(),new Map,new ft(Ae),h,f);await Yw(i,g),i.du=i.du.remove(l),i.Eu.delete(e),rm(i)}else await up(i.localStore,e,!1).then(()=>dp(i,e,t)).catch(wh)}function dp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(i=>{n.Au.containsKey(i)||Xw(n,i)})}function Xw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Yp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),rm(n))}function f_(n,e,t){for(const i of t)i instanceof Gw?(n.Au.addReference(i.key,e),gA(n,i)):i instanceof Kw?(ce(nm,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||Xw(n,i.key)):xe(19791,{yu:i})}function gA(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ce(nm,"New document in limbo: "+t),n.Iu.add(i),rm(n))}function rm(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(it.fromString(e)),i=n.mu.next();n.Eu.set(i,new lA(t)),n.du=n.du.insert(t,i),Bw(n.remoteStore,new Ri(dr($p(t.path)),i,"TargetPurposeLimboResolution",Eh.ue))}}async function Jw(n,e,t){const i=je(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach((f,g)=>{h.push(i.gu(g,e,t).then(y=>{var w;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(w=t?.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(y){o.push(y);const I=Kp.Es(g.targetId,y);l.push(I)}}))}),await Promise.all(h),i.hu.J_(o),await async function(g,y){const w=je(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>Z.forEach(y,S=>Z.forEach(S.Is,A=>w.persistence.referenceDelegate.addReference(I,S.targetId,A)).next(()=>Z.forEach(S.ds,A=>w.persistence.referenceDelegate.removeReference(I,S.targetId,A)))))}catch(I){if(!ua(I))throw I;ce(Qp,"Failed to update sequence numbers: "+I)}for(const I of y){const S=I.targetId;if(!I.fromCache){const A=w.Fs.get(S),b=A.snapshotVersion,M=A.withLastLimboFreeSnapshotVersion(b);w.Fs=w.Fs.insert(S,M)}}}(i.localStore,l))}async function yA(n,e){const t=je(n);if(!t.currentUser.isEqual(e)){ce(nm,"User change. New user:",e.toKey());const i=await jw(t.localStore,e);t.currentUser=e,function(l,h){l.Vu.forEach(f=>{f.forEach(g=>{g.reject(new ye(oe.CANCELLED,h))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jw(t,i.Bs)}}function vA(n,e){const t=je(n),i=t.Eu.get(e);if(i&&i.lu)return $e().add(i.key);{let o=$e();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Zw(n){const e=je(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mA.bind(null,e),e.hu.J_=rA.bind(null,e.eventManager),e.hu.pu=iA.bind(null,e.eventManager),e}class nh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zw(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return bR(this.persistence,new kR,e.initialUser,this.serializer)}Du(e){return new Fw(Gp.Vi,this.serializer)}bu(e){return new VR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nh.provider={build:()=>new nh};class _A extends nh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ot(this.persistence.referenceDelegate instanceof th,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new fR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new Fw(i=>th.Vi(i,t),this.serializer)}}class fp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>d_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yA.bind(null,this.syncEngine),await JR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eA}()}createDatastore(e){const t=zw(e.databaseInfo.databaseId),i=function(l){return new zR(l)}(e.databaseInfo);return function(l,h,f,g){return new qR(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new GR(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>d_(this.syncEngine,t,0),function(){return s_.C()?new s_:new MR}())}createSyncEngine(e,t){return function(o,l,h,f,g,y,w){const I=new uA(o,l,h,f,g,y);return w&&(I.fu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=je(o);ce(Zo,"RemoteStore shutting down."),l.Ia.add(5),await Bl(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}fp.provider={build:()=>new fp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="FirestoreClient";class EA{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=ow.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ce($i,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ce($i,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ww(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Df(n,e){n.asyncQueue.verifyOperationInProgress(),ce($i,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await jw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>{Vi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Vi("Terminating Firestore due to IndexedDb database deletion failed",o)})}),n._offlineComponents=e}async function p_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TA(n);ce($i,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>l_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>l_(e.remoteStore,o)),n._onlineComponents=e}async function TA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce($i,"Using user provided OfflineComponentProvider");try{await Df(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===oe.FAILED_PRECONDITION||o.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Vi("Error using user provided cache. Falling back to memory cache: "+t),await Df(n,new nh)}}else ce($i,"Using default OfflineComponentProvider"),await Df(n,new _A(void 0));return n._offlineComponents}async function SA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce($i,"Using user provided OnlineComponentProvider"),await p_(n,n._uninitializedComponentsProvider._online)):(ce($i,"Using default OnlineComponentProvider"),await p_(n,new fp))),n._onlineComponents}async function m_(n){const e=await SA(n),t=e.eventManager;return t.onListen=cA.bind(null,e.syncEngine),t.onUnlisten=fA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firestore.googleapis.com",y_=!0;class v_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=y_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:y_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hR)throw new ye(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class im{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new MP;switch(i.type){case"firstParty":return new zP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=g_.get(t);i&&(ce("ComponentProvider","Removing Datastore"),g_.delete(t),i.terminate())}(this),Promise.resolve()}}function IA(n,e,t,i={}){var o;n=Nc(n,im);const l=oa(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),g=`${e}:${t}`;l&&(B0(`https://${g}`),H0("Firestore",!0)),h.host!==tE&&h.host!==g&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!Ps(y,f)&&(n._setSettings(y),i.mockUserToken)){let w,I;if(typeof i.mockUserToken=="string")w=i.mockUserToken,I=Ht.MOCK_USER;else{w=cx(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const S=i.mockUserToken.sub||i.mockUserToken.user_id;if(!S)throw new ye(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ht(S)}n._authCredentials=new FP(new iw(w,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bh(this.firestore,e,this._query)}}class _n{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}toJSON(){return{type:_n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ul(t,_n._jsonSchema))return new _n(e,i||null,new we(it.fromString(t.referencePath)))}}_n._jsonSchemaVersion="firestore/documentReference/1.0",_n._jsonSchema={type:_t("string",_n._jsonSchemaVersion),referencePath:_t("string")};class Fo extends bh{constructor(e,t,i){super(e,t,$p(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new we(e))}withConverter(e){return new Fo(this.firestore,e,this._path)}}function CA(n,e,...t){if(n=Hi(n),n instanceof im){const i=it.fromString(e,...t);return Av(i),new Fo(n,null,i)}{if(!(n instanceof _n||n instanceof Fo))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(e,...t));return Av(i),new Fo(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="AsyncQueue";class w_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new $w(this,"async_queue_retry"),this.oc=()=>{const i=Nf();i&&ce(__,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Nf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Nf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Lo;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ua(e))throw e;ce(__,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,$r("INTERNAL UNHANDLED ERROR: ",E_(i)),i}).then(i=>(this.nc=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=em.createAndSchedule(this,e,t,i,l=>this.lc(l));return this.ec.push(o),o}ac(){this.tc&&xe(47125,{hc:E_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function E_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class pp extends im{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new w_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new w_(e),this._firestoreClient=void 0,await e}}}function xA(n,e){const t=typeof n=="object"?n:K0(),i=typeof n=="string"?n:Yc,o=Vp(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=lx("firestore");l&&IA(o,...l)}return o}function PA(n){if(n._terminated)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kA(n),n._firestoreClient}function kA(n){var e,t,i;const o=n._freezeSettings(),l=function(f,g,y,w){return new ok(f,g,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,eE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new EA(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const g=f?._online.build();return{_offline:f?._offline.build(g),_online:g}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hr(Ft.fromBase64String(e))}catch(t){throw new ye(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hr(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ul(e,hr._jsonSchema))return hr.fromBase64String(e.bytes)}}hr._jsonSchemaVersion="firestore/bytes/1.0",hr._jsonSchema={type:_t("string",hr._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Oi._jsonSchemaVersion}}static fromJSON(e){if(Ul(e,Oi._jsonSchema))return new Oi(e.latitude,e.longitude)}}Oi._jsonSchemaVersion="firestore/geoPoint/1.0",Oi._jsonSchema={type:_t("string",Oi._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ul(e,Li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Li(e.vectorValues);throw new ye(oe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Li._jsonSchemaVersion="firestore/vectorValue/1.0",Li._jsonSchema={type:_t("string",Li._jsonSchemaVersion),vectorValues:_t("object")};const RA=new RegExp("[~\\*/\\[\\]]");function AA(n,e,t){if(e.search(RA)>=0)throw S_(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new nE(...e.split("."))._internalPath}catch{throw S_(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function S_(n,e,t,i,o){let l=`Function ${e}() called with invalid data`;l+=". ";let h="";return new ye(oe.INVALID_ARGUMENT,l+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(iE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bA extends rE{data(){return super.data()}}function iE(n,e){return typeof e=="string"?AA(n,e):e instanceof nE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ye(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DA{convertValue(e,t="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return zl(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Zf].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>dt(h.doubleValue));return new Li(l)}convertGeoPoint(e){return new Oi(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Sh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=Fi(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=it.fromString(e);ot(Vw(i),9688,{name:e});const o=new Rl(i.get(1),i.get(3)),l=new we(i.popFirst(5));return o.isEqual(t)||$r(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}class gl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends rE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(iE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:_t("string",Cs._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Vc extends Cs{data(e={}){return super.data(e)}}class jo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new gl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Vc(this._firestore,this._userDataWriter,i.key,i,new gl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ye(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Vc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new gl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new Vc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new gl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:OA(f.type),doc:g,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ow.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:n})}}jo._jsonSchemaVersion="firestore/querySnapshot/1.0",jo._jsonSchema={type:_t("string",jo._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class sE extends DA{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,t)}}function LA(n,...e){var t,i,o;n=Hi(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||T_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(T_(e[h])){const I=e[h];e[h]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[h+1]=(i=I.error)===null||i===void 0?void 0:i.bind(I),e[h+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let g,y,w;if(n instanceof _n)y=Nc(n.firestore,pp),w=$p(n._key.path),g={next:I=>{e[h]&&e[h](VA(y,n,I))},error:e[h+1],complete:e[h+2]};else{const I=Nc(n,bh);y=Nc(I.firestore,pp),w=I._query;const S=new sE(y);g={next:A=>{e[h]&&e[h](new jo(y,S,I,A))},error:e[h+1],complete:e[h+2]},NA(n._query)}return function(S,A,b,M){const N=new wA(M),V=new sA(A,N,b);return S.asyncQueue.enqueueAndForget(async()=>tA(await m_(S),V)),()=>{N.Ou(),S.asyncQueue.enqueueAndForget(async()=>nA(await m_(S),V))}}(PA(y),w,f,g)}function VA(n,e,t){const i=t.docs.get(e._key),o=new sE(n);return new Cs(n,o,e._key,i,new gl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){la=o})(aa),Ko(new ks("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new pp(new jP(i.getProvider("auth-internal")),new $P(h,i.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ye(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Ni(Cv,xv,e),Ni(Cv,xv,"esm2017")})();var MA="firebase",FA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni(MA,FA,"app");function oE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=oE,aE=new Fl("auth","Firebase",oE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Op("@firebase/auth");function UA(n,...e){rh.logLevel<=De.WARN&&rh.warn(`Auth (${aa}): ${n}`,...e)}function Mc(n,...e){rh.logLevel<=De.ERROR&&rh.error(`Auth (${aa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n,...e){throw sm(n,...e)}function fr(n,...e){return sm(n,...e)}function lE(n,e,t){const i=Object.assign(Object.assign({},jA()),{[e]:t});return new Fl("auth","Firebase",i).create(e,{appName:n.name})}function xs(n){return lE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aE.create(n,...e)}function Te(n,e,...t){if(!n)throw sm(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mc(e),new Error(e)}function Hr(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zA(){return I_()==="http:"||I_()==="https:"}function I_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||gx()||"connection"in navigator)?navigator.onLine:!0}function BA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=fx()||yx()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WA=new ql(3e4,6e4);function am(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ha(n,e,t,i,o={}){return cE(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=jl(Object.assign({key:n.config.apiKey},h)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:g},l);return mx()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&oa(n.emulatorConfig.host)&&(y.credentials="include"),uE.fetch()(await hE(n,n.config.apiHost,t,f),y)})}async function cE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},HA),e);try{const o=new KA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Tc(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Tc(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Tc(n,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw lE(n,w,y);Br(n,w)}}catch(o){if(o instanceof Wr)throw o;Br(n,"network-request-failed",{message:String(o)})}}async function GA(n,e,t,i,o={}){const l=await ha(n,e,t,i,o);return"mfaPendingCredential"in l&&Br(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function hE(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?om(n.config,o):`${n.config.apiScheme}://${o}`;return qA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class KA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fr(this.auth,"network-request-failed")),WA.get())})}}function Tc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=fr(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e){return ha(n,"POST","/v1/accounts:delete",e)}async function ih(n,e){return ha(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(n,e=!1){const t=Hi(n),i=await t.getIdToken(e),o=lm(i);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:Sl(Of(o.auth_time)),issuedAtTime:Sl(Of(o.iat)),expirationTime:Sl(Of(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Of(n){return Number(n)*1e3}function lm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Mc("JWT malformed, contained fewer than 3 sections"),null;try{const o=j0(t);return o?JSON.parse(o):(Mc("Failed to decode base64 JWT payload"),null)}catch(o){return Mc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function C_(n){const e=lm(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Wr&&XA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function XA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sl(this.lastLoginAt),this.creationTime=Sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(n){var e;const t=n.auth,i=await n.getIdToken(),o=await bl(n,ih(t,{idToken:i}));Te(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?dE(l.providerUserInfo):[],f=e2(n.providerData,h),g=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!f?.length,w=g?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new gp(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,I)}async function ZA(n){const e=Hi(n);await sh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e2(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function dE(n){return n.map(e=>{var{providerId:t}=e,i=Cp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(n,e){const t=await cE(n,{},async()=>{const i=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await hE(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&oa(n.emulatorConfig.host)&&(g.credentials="include"),uE.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function n2(n,e){return ha(n,"POST","/v2/accounts:revokeToken",am(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=C_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await t2(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Uo;return i&&(Te(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Te(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new gp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await bl(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return YA(this,e)}reload(){return ZA(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await sh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ur(this.auth.app))return Promise.reject(xs(this.auth));const e=await this.getIdToken();return await bl(this,QA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,y,w;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,A=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,b=(h=t.photoURL)!==null&&h!==void 0?h:void 0,M=(f=t.tenantId)!==null&&f!==void 0?f:void 0,N=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,V=(y=t.createdAt)!==null&&y!==void 0?y:void 0,B=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:q,emailVerified:K,isAnonymous:J,providerData:Q,stsTokenManager:E}=t;Te(q&&E,e,"internal-error");const T=Uo.fromJSON(this.name,E);Te(typeof q=="string",e,"internal-error"),wi(I,e.name),wi(S,e.name),Te(typeof K=="boolean",e,"internal-error"),Te(typeof J=="boolean",e,"internal-error"),wi(A,e.name),wi(b,e.name),wi(M,e.name),wi(N,e.name),wi(V,e.name),wi(B,e.name);const x=new Gn({uid:q,auth:e,email:S,emailVerified:K,displayName:I,isAnonymous:J,photoURL:b,phoneNumber:A,tenantId:M,stsTokenManager:T,createdAt:V,lastLoginAt:B});return Q&&Array.isArray(Q)&&(x.providerData=Q.map(R=>Object.assign({},R))),N&&(x._redirectEventId=N),x}static async _fromIdTokenResponse(e,t,i=!1){const o=new Uo;o.updateFromServerResponse(t);const l=new Gn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await sh(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?dE(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new Uo;f.updateFromIdToken(i);const g=new Gn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new Map;function Fr(n){Hr(n instanceof Function,"Expected a class definition");let e=x_.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,x_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fE.type="NONE";const P_=fE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e,t){return`firebase:${n}:${e}:${t}`}class zo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Fc(this.userKey,o.apiKey,l),this.fullPersistenceKey=Fc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ih(this.auth,{idToken:e}).catch(()=>{});return t?Gn._fromGetAccountInfoResponse(this.auth,t,e):null}return Gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zo(Fr(P_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Fr(P_);const h=Fc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let I;if(typeof w=="string"){const S=await ih(e,{idToken:w}).catch(()=>{});if(!S)break;I=await Gn._fromGetAccountInfoResponse(e,S,w)}else I=Gn._fromJSON(e,w);y!==l&&(f=I),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new zo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new zo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_E(e))return"Blackberry";if(wE(e))return"Webos";if(mE(e))return"Safari";if((e.includes("chrome/")||gE(e))&&!e.includes("edge/"))return"Chrome";if(vE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function pE(n=Wt()){return/firefox\//i.test(n)}function mE(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gE(n=Wt()){return/crios\//i.test(n)}function yE(n=Wt()){return/iemobile/i.test(n)}function vE(n=Wt()){return/android/i.test(n)}function _E(n=Wt()){return/blackberry/i.test(n)}function wE(n=Wt()){return/webos/i.test(n)}function um(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function r2(n=Wt()){var e;return um(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i2(){return vx()&&document.documentMode===10}function EE(n=Wt()){return um(n)||vE(n)||wE(n)||_E(n)||/windows phone/i.test(n)||yE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n,e=[]){let t;switch(n){case"Browser":t=k_(Wt());break;case"Worker":t=`${k_(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${aa}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(n,e={}){return ha(n,"GET","/v2/passwordPolicy",am(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=6;class l2{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:a2,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R_(this),this.idTokenSubscription=new R_(this),this.beforeStateQueue=new s2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ih(this,{idToken:e}),i=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ur(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ur(this.app))return Promise.reject(xs(this));const t=e?Hi(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ur(this.app)?Promise.reject(xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ur(this.app)?Promise.reject(xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o2(this),t=new l2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await n2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[Fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&UA(`Error while retrieving App Check token: ${t.error}`),t?.token}}function cm(n){return Hi(n)}class R_{constructor(e){this.auth=e,this.observer=null,this.addObserver=xx(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function c2(n){hm=n}function h2(n){return hm.loadJS(n)}function d2(){return hm.gapiScript}function f2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(n,e){const t=Vp(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ps(l,e??{}))return o;Br(o,"already-initialized")}return t.initialize({options:e})}function m2(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Fr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function g2(n,e,t){const i=cm(n);Te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=SE(e),{host:h,port:f}=y2(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Te(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Te(Ps(y,i.config.emulator)&&Ps(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,oa(h)?(B0(`${l}//${h}${g}`),H0("Auth",!0)):v2()}function SE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y2(n){const e=SE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:A_(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:A_(h)}}}function A_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function v2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n,e){return GA(n,"POST","/v1/accounts:signInWithIdp",am(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="http://localhost";class As extends IE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Cp(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new As(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return $o(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,$o(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$o(e,t)}buildRequest(){const e={requestUri:_2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends CE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Wl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ci.credential(t,i)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Wl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.GITHUB_SIGN_IN_METHOD="github.com";xi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Wl{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Gn._fromIdTokenResponse(e,i,o),h=b_(i);return new ta({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=b_(i);return new ta({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function b_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends Wr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,oh.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new oh(e,t,i,o)}}function xE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?oh._fromErrorAndOperation(n,l,e,i):l})}async function w2(n,e,t=!1){const i=await bl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ta._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(n,e,t=!1){const{auth:i}=n;if(ur(i.app))return Promise.reject(xs(i));const o="reauthenticate";try{const l=await bl(n,xE(i,o,e,n),t);Te(l.idToken,i,"internal-error");const h=lm(l.idToken);Te(h,i,"internal-error");const{sub:f}=h;return Te(n.uid===f,i,"user-mismatch"),ta._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Br(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(n,e,t=!1){if(ur(n.app))return Promise.reject(xs(n));const i="signIn",o=await xE(n,i,e),l=await ta._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function S2(n,e,t,i){return Hi(n).onIdTokenChanged(e,t,i)}function I2(n,e,t){return Hi(n).beforeAuthStateChanged(e,t)}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=1e3,x2=10;class kE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);i2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,x2):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kE.type="LOCAL";const P2=kE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}RE.type="SESSION";const AE=RE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Nh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await k2(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=dm("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function A2(n){pr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function b2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N2(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function D2(){return bE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebaseLocalStorageDb",O2=1,lh="firebaseLocalStorage",DE="fbase_key";class Gl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dh(n,e){return n.transaction([lh],e?"readwrite":"readonly").objectStore(lh)}function L2(){const n=indexedDB.deleteDatabase(NE);return new Gl(n).toPromise()}function yp(){const n=indexedDB.open(NE,O2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(lh,{keyPath:DE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(lh)?e(i):(i.close(),await L2(),e(await yp()))})})}async function N_(n,e,t){const i=Dh(n,!0).put({[DE]:e,value:t});return new Gl(i).toPromise()}async function V2(n,e){const t=Dh(n,!1).get(e),i=await new Gl(t).toPromise();return i===void 0?null:i.value}function D_(n,e){const t=Dh(n,!0).delete(e);return new Gl(t).toPromise()}const M2=800,F2=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>F2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nh._getInstance(D2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await b2(),!this.activeServiceWorker)return;this.sender=new R2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yp();return await N_(e,ah,"1"),await D_(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>N_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>V2(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>D_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Dh(o,!1).getAll();return new Gl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const j2=OE;new ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(n,e){return e?Fr(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends IE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function z2(n){return T2(n.auth,new fm(n),n.bypassAuthState)}function $2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),E2(t,new fm(n),n.bypassAuthState)}async function B2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),w2(t,new fm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return B2;case"reauthViaPopup":case"reauthViaRedirect":return $2;default:Br(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new ql(2e3,1e4);class Oo extends LE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}Oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="pendingRedirect",jc=new Map;class W2 extends LE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=jc.get(this.auth._key());if(!e){try{const i=await G2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}jc.set(this.auth._key(),e)}return this.bypassAuthState||jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G2(n,e){const t=Y2(e),i=Q2(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function K2(n,e){jc.set(n._key(),e)}function Q2(n){return Fr(n._redirectPersistence)}function Y2(n){return Fc(q2,n.config.apiKey,n.name)}async function X2(n,e,t=!1){if(ur(n.app))return Promise.reject(xs(n));const i=cm(n),o=U2(i,e),h=await new W2(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=10*60*1e3;class Z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!VE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(fr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J2&&this.cachedEventUids.clear(),this.cachedEventUids.has(O_(e))}saveEventToCache(e){this.cachedEventUids.add(O_(e)),this.lastProcessedEventTime=Date.now()}}function O_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function VE({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function eb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(n,e={}){return ha(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rb=/^https?/;async function ib(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tb(n);for(const t of e)try{if(sb(t))return}catch{}Br(n,"unauthorized-domain")}function sb(n){const e=mp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!rb.test(t))return!1;if(nb.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new ql(3e4,6e4);function L_(){const n=pr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ab(n){return new Promise((e,t)=>{var i,o,l;function h(){L_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L_(),t(fr(n,"network-request-failed"))},timeout:ob.get()})}if(!((o=(i=pr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pr().gapi)===null||l===void 0)&&l.load)h();else{const f=f2("iframefcb");return pr()[f]=()=>{gapi.load?h():t(fr(n,"network-request-failed"))},h2(`${d2()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Uc=null,e})}let Uc=null;function lb(n){return Uc=Uc||ab(n),Uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new ql(5e3,15e3),cb="__/auth/iframe",hb="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pb(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?om(e,hb):`https://${n.config.authDomain}/${cb}`,i={apiKey:e.apiKey,appName:n.name,v:aa},o=fb.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${jl(i).slice(1)}`}async function mb(n){const e=await lb(n),t=pr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:pb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=fr(n,"network-request-failed"),f=pr().setTimeout(()=>{l(h)},ub.get());function g(){pr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yb=500,vb=600,_b="_blank",wb="http://localhost";class V_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eb(n,e,t,i=yb,o=vb){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},gb),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Wt().toLowerCase();t&&(f=gE(y)?_b:t),pE(y)&&(e=e||wb,g.scrollbars="yes");const w=Object.entries(g).reduce((S,[A,b])=>`${S}${A}=${b},`,"");if(r2(y)&&f!=="_self")return Tb(e||"",f),new V_(null);const I=window.open(e||"",f,w);Te(I,n,"popup-blocked");try{I.focus()}catch{}return new V_(I)}function Tb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="__/auth/handler",Ib="emulator/auth/handler",Cb=encodeURIComponent("fac");async function M_(n,e,t,i,o,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:aa,eventId:o};if(e instanceof CE){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Cx(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof Wl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),y=g?`#${Cb}=${encodeURIComponent(g)}`:"";return`${xb(n)}?${jl(f).slice(1)}${y}`}function xb({config:n}){return n.emulator?om(n,Ib):`https://${n.authDomain}/${Sb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=X2,this._overrideRedirectResult=K2}async _openPopup(e,t,i,o){var l;Hr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await M_(e,t,i,mp(),o);return Eb(e,h,dm())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await M_(e,t,i,mp(),o);return A2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mb(e),i=new Z2(e);return t.register("authEvent",o=>(Te(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lf,{type:Lf},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Lf];h!==void 0&&t(!!h),Br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ib(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return EE()||mE()||um()}}const kb=Pb;var F_="@firebase/auth",j_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bb(n){Ko(new ks("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(n)},y=new u2(i,o,l,g);return m2(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ko(new ks("auth-internal",e=>{const t=cm(e.getProvider("auth").getImmediate());return(i=>new Rb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ni(F_,j_,Ab(n)),Ni(F_,j_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=5*60,Db=$0("authIdTokenMaxAge")||Nb;let U_=null;const Ob=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Db)return;const o=t?.token;U_!==o&&(U_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Lb(n=K0()){const e=Vp(n,"auth");if(e.isInitialized())return e.getImmediate();const t=p2(n,{popupRedirectResolver:kb,persistence:[j2,P2,AE]}),i=$0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=Ob(l.toString());I2(t,h,()=>h(t.currentUser)),S2(t,f=>h(f))}}const o=U0("auth");return o&&g2(t,`http://${o}`),t}function Vb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}c2({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=fr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Vb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bb("Browser");const Mb={apiKey:"AIzaSyD18M9v3gTGQzat_U-dvf6Rt8wfImcBv60",authDomain:"arcade-fire-69ea3.firebaseapp.com",projectId:"arcade-fire-69ea3",storageBucket:"arcade-fire-69ea3.firebasestorage.app",messagingSenderId:"390905426877",appId:"1:390905426877:web:0124d2c471f9d72798d8d4",measurementId:"G-KZ05ENDX4X"},ME=G0(Mb),Fb=xA(ME);Lb(ME);function jb(){const[n,e]=X.useState([]),[t,i]=X.useState(!0);return X.useEffect(()=>{const o=CA(Fb,"dates"),l=LA(o,h=>{e(h.docs.map(f=>({id:f.id,...f.data()}))),i(!1)});return()=>l()},[]),{dates:n,loading:t}}const Ub="/pink-elephant/assets/fondtournee-Bbd4402y.png",zb=ae.div`
  position: relative;
  min-height: 100vh;
  background: url(${Ub}) center/cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
  }
`,$b=ae.main`
  position: relative;
  z-index: 1;
  margin-left: 150px;
  padding: 100px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 80px 16px 16px;
  }
`,Bb=ae.header`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`,Hb=ae.h1`
  color: #fff;
  font-size: 2rem;
  background: #000;
  display: inline-block;
  padding: 8px 16px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 6px 12px;
  }
`,qb=ae.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 960px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Wb=ae.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 240px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 12px;
  }
`,Gb=ae.div`
  font-weight: bold;
  color: #333;
`,z_=ae.div`
  color: #555;
`,Kb=ae.span`
  align-self: flex-start;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #fff;
  background: ${({statut:n})=>n==="sold-out"?"#d32f2f":n==="annulé"?"#757575":"#388e3c"};

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 3px 6px;
  }
`;function Qb(){const{dates:n,loading:e}=jb();return L.jsxs(zb,{children:[L.jsx(sa,{}),L.jsxs($b,{children:[L.jsx(Bb,{children:L.jsx(Hb,{children:"TOURNÉE"})}),e?L.jsx("p",{style:{color:"#fff"},children:"Chargement…"}):L.jsx(qb,{children:n.map(t=>{const i=new Date(t.date.seconds*1e3),o=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),h=i.getFullYear(),f=`${o}/${l}/${h}`;return L.jsxs(Wb,{children:[L.jsx(Gb,{children:f}),L.jsxs(z_,{children:[L.jsx("strong",{children:"Lieu :"})," ",t.lieu]}),L.jsxs(z_,{children:[L.jsx("strong",{children:"Ville :"})," ",t.ville]}),L.jsx(Kb,{statut:t.statut,children:t.statut==="sold-out"?"Sold Out":t.statut==="annulé"?"Annulé":"À venir"})]},t.id)})}),L.jsx(vh,{})]})]})}const Yb=ae.div`
  background-image: url(${b0});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  padding: 40px;
  color: black;
`,Xb=ae.img`
  position: absolute;
  top: 20px;
  left: 350px;
  width: 500px;
  height: auto;
  z-index: 10;
`,Jb=ae.div`
  position: absolute;
  top: 50px;
  right: 40px;
  background-color: rgba(0,0,0,1);
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  z-index: 10;
`,Zb=ae.div`
  margin-top: 160px;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
`,eN=ae.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ei=ae.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;


  &:hover {
    text-decoration: underline;
  }
`,tN=ae(Bi)`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 6px;


  &:hover {
    background-color: hotpink;
  }
`;function nN(){return L.jsxs(Yb,{children:[L.jsx(Bi,{to:"/",children:L.jsx(Xb,{src:bp,alt:"Logo"})}),L.jsx(Jb,{children:"CONTACT"}),L.jsxs(Zb,{children:[L.jsx("p",{children:"Une erreur critique est survenue. Pour continuer, veuillez suivre les indications ci-dessous :"}),L.jsxs(eN,{children:[L.jsx("li",{children:L.jsx(Ei,{href:"#",children:"ARCADE FIRE"})}),L.jsx("li",{children:L.jsx(Ei,{href:"#",children:"PINK ELEPHANT"})}),L.jsx("li",{children:L.jsx(Ei,{href:"https://www.instagram.com/p/DItuwEKR9gM/",children:"INSTAGRAM | TWITTER | FACEBOOK"})}),L.jsx("li",{children:L.jsx(Ei,{href:"https://open.spotify.com/intl-fr/album/5qLTlCTZvN24Fm1nqd7XCV?si=qtHL-U7pSiKvnAPd5pQHWw&go=1&nd=1&dlsi=ab4dca1c7682427e",children:"SPOTIFY"})}),L.jsx("li",{children:L.jsx(Ei,{href:"https://www.deezer.com/fr/album/752544901?host=0&utm_campaign=clipboard-generic&utm_source=user_sharing&utm_content=album-752544901&deferredFl=1",children:"DEEZER"})}),L.jsx("li",{children:L.jsx(Ei,{href:"#",children:"APPLE MUSIQUE"})}),L.jsx("li",{children:L.jsx(Ei,{href:"https://music.amazon.co.uk/albums/B0F18RBPB8?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=a3685dc481f1ecf214e877472315adb3&ref=dmm_acq_soc_fr_u_lfire_lp_x_a3685dc481f1ecf214e877472315adb3&fbclid=PAQ0xDSwLcamBleHRuA2FlbQIxMQABp342FGUqiV68p6LdsMOqUYz1mFvzR4TcOafLbCuvOqZ5FSUb9Dp1Z86XizeN_aem_QN2DGjdbHeNuLamN8csAjg",children:"AMAZON MUSIQUE"})}),L.jsx("li",{children:L.jsx(Ei,{href:"https://www.youtube.com/watch?v=0LpS5l5dRJ0&list=PLV_bVczPcRZRjDritaUGODWR3cv8_CBuZ&src=Linkfire&lId=e3ab07bb-74eb-4f52-935c-ea5f573a91c1&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751&fbclid=PAQ0xDSwLcamBleHRuA2FlbQIxMQABp342FGUqiV68p6LdsMOqUYz1mFvzR4TcOafLbCuvOqZ5FSUb9Dp1Z86XizeN_aem_QN2DGjdbHeNuLamN8csAjg",children:"YOUTUBE MUSIQUE"})})]}),L.jsx(tN,{to:"/",children:"RECOMMENCER"})]}),L.jsx(vh,{})]})}function rN(){return L.jsx("div",{className:"App",children:L.jsxs(zT,{children:[L.jsx(Ti,{path:"/",element:L.jsx(GI,{})}),L.jsx(Ti,{path:"/pochette",element:L.jsx(iC,{})}),L.jsx(Ti,{path:"/photos",element:L.jsx(RC,{})}),L.jsx(Ti,{path:"/tracklist",element:L.jsx($C,{})}),L.jsx(Ti,{path:"/blog",element:L.jsx(ZC,{})}),L.jsx(Ti,{path:"/tournee",element:L.jsx(Qb,{})}),L.jsx(Ti,{path:"/contact",element:L.jsx(nN,{})})]})})}Q1.createRoot(document.getElementById("root")).render(L.jsx(wn.StrictMode,{children:L.jsx(hS,{children:L.jsx(rN,{})})}));
