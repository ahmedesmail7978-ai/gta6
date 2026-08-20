(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function ix(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var af={exports:{}},ro={},of={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function rx(){if(Tm)return mt;Tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function y(U,Z,Ie){this.props=U,this.context=Z,this.refs=C,this.updater=Ie||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(U,Z,Ie){this.props=U,this.context=Z,this.refs=C,this.updater=Ie||M}var O=D.prototype=new _;O.constructor=D,w(O,y.prototype),O.isPureReactComponent=!0;var R=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function S(U,Z,Ie){var Xe,Ve={},se=null,ve=null;if(Z!=null)for(Xe in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(se=""+Z.key),Z)N.call(Z,Xe)&&!F.hasOwnProperty(Xe)&&(Ve[Xe]=Z[Xe]);var ae=arguments.length-2;if(ae===1)Ve.children=Ie;else if(1<ae){for(var Me=Array(ae),be=0;be<ae;be++)Me[be]=arguments[be+2];Ve.children=Me}if(U&&U.defaultProps)for(Xe in ae=U.defaultProps,ae)Ve[Xe]===void 0&&(Ve[Xe]=ae[Xe]);return{$$typeof:s,type:U,key:se,ref:ve,props:Ve,_owner:P.current}}function b(U,Z){return{$$typeof:s,type:U.type,key:Z,ref:U.ref,props:U.props,_owner:U._owner}}function z(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return Z[Ie]})}var G=/\/+/g;function te(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):Z.toString(36)}function ue(U,Z,Ie,Xe,Ve){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,Ve=Ve(ve),U=Xe===""?"."+te(ve,0):Xe,R(Ve)?(Ie="",U!=null&&(Ie=U.replace(G,"$&/")+"/"),ue(Ve,Z,Ie,"",function(be){return be})):Ve!=null&&(z(Ve)&&(Ve=b(Ve,Ie+(!Ve.key||ve&&ve.key===Ve.key?"":(""+Ve.key).replace(G,"$&/")+"/")+U)),Z.push(Ve)),1;if(ve=0,Xe=Xe===""?".":Xe+":",R(U))for(var ae=0;ae<U.length;ae++){se=U[ae];var Me=Xe+te(se,ae);ve+=ue(se,Z,Ie,Me,Ve)}else if(Me=g(U),typeof Me=="function")for(U=Me.call(U),ae=0;!(se=U.next()).done;)se=se.value,Me=Xe+te(se,ae++),ve+=ue(se,Z,Ie,Me,Ve);else if(se==="object")throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function Y(U,Z,Ie){if(U==null)return U;var Xe=[],Ve=0;return ue(U,Xe,"","",function(se){return Z.call(Ie,se,Ve++)}),Xe}function de(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var j={current:null},q={transition:null},fe={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function ce(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:Y,forEach:function(U,Z,Ie){Y(U,function(){Z.apply(this,arguments)},Ie)},count:function(U){var Z=0;return Y(U,function(){Z++}),Z},toArray:function(U){return Y(U,function(Z){return Z})||[]},only:function(U){if(!z(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=y,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=D,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,mt.act=ce,mt.cloneElement=function(U,Z,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=w({},U.props),Ve=U.key,se=U.ref,ve=U._owner;if(Z!=null){if(Z.ref!==void 0&&(se=Z.ref,ve=P.current),Z.key!==void 0&&(Ve=""+Z.key),U.type&&U.type.defaultProps)var ae=U.type.defaultProps;for(Me in Z)N.call(Z,Me)&&!F.hasOwnProperty(Me)&&(Xe[Me]=Z[Me]===void 0&&ae!==void 0?ae[Me]:Z[Me])}var Me=arguments.length-2;if(Me===1)Xe.children=Ie;else if(1<Me){ae=Array(Me);for(var be=0;be<Me;be++)ae[be]=arguments[be+2];Xe.children=ae}return{$$typeof:s,type:U.type,key:Ve,ref:se,props:Xe,_owner:ve}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},mt.createElement=S,mt.createFactory=function(U){var Z=S.bind(null,U);return Z.type=U,Z},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:f,render:U}},mt.isValidElement=z,mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:de}},mt.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},mt.startTransition=function(U){var Z=q.transition;q.transition={};try{U()}finally{q.transition=Z}},mt.unstable_act=ce,mt.useCallback=function(U,Z){return j.current.useCallback(U,Z)},mt.useContext=function(U){return j.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return j.current.useDeferredValue(U)},mt.useEffect=function(U,Z){return j.current.useEffect(U,Z)},mt.useId=function(){return j.current.useId()},mt.useImperativeHandle=function(U,Z,Ie){return j.current.useImperativeHandle(U,Z,Ie)},mt.useInsertionEffect=function(U,Z){return j.current.useInsertionEffect(U,Z)},mt.useLayoutEffect=function(U,Z){return j.current.useLayoutEffect(U,Z)},mt.useMemo=function(U,Z){return j.current.useMemo(U,Z)},mt.useReducer=function(U,Z,Ie){return j.current.useReducer(U,Z,Ie)},mt.useRef=function(U){return j.current.useRef(U)},mt.useState=function(U){return j.current.useState(U)},mt.useSyncExternalStore=function(U,Z,Ie){return j.current.useSyncExternalStore(U,Z,Ie)},mt.useTransition=function(){return j.current.useTransition()},mt.version="18.3.1",mt}var Am;function zd(){return Am||(Am=1,of.exports=rx()),of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function sx(){if(Cm)return ro;Cm=1;var s=zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,x={},g=null,M=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:M,props:x,_owner:a.current}}return ro.Fragment=t,ro.jsx=u,ro.jsxs=u,ro}var Rm;function ax(){return Rm||(Rm=1,af.exports=sx()),af.exports}var ie=ax(),Pl={},lf={exports:{}},Zn={},cf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function ox(){return bm||(bm=1,(function(s){function e(q,fe){var ce=q.length;q.push(fe);e:for(;0<ce;){var U=ce-1>>>1,Z=q[U];if(0<a(Z,fe))q[U]=fe,q[ce]=Z,ce=U;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var fe=q[0],ce=q.pop();if(ce!==fe){q[0]=ce;e:for(var U=0,Z=q.length,Ie=Z>>>1;U<Ie;){var Xe=2*(U+1)-1,Ve=q[Xe],se=Xe+1,ve=q[se];if(0>a(Ve,ce))se<Z&&0>a(ve,Ve)?(q[U]=ve,q[se]=ce,U=se):(q[U]=Ve,q[Xe]=ce,U=Xe);else if(se<Z&&0>a(ve,ce))q[U]=ve,q[se]=ce,U=se;else break e}}return fe}function a(q,fe){var ce=q.sortIndex-fe.sortIndex;return ce!==0?ce:q.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,x=null,g=3,M=!1,w=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(q){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=q)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function R(q){if(C=!1,O(q),!w)if(t(h)!==null)w=!0,de(N);else{var fe=t(p);fe!==null&&j(R,fe.startTime-q)}}function N(q,fe){w=!1,C&&(C=!1,_(S),S=-1),M=!0;var ce=g;try{for(O(fe),x=t(h);x!==null&&(!(x.expirationTime>fe)||q&&!k());){var U=x.callback;if(typeof U=="function"){x.callback=null,g=x.priorityLevel;var Z=U(x.expirationTime<=fe);fe=s.unstable_now(),typeof Z=="function"?x.callback=Z:x===t(h)&&r(h),O(fe)}else r(h);x=t(h)}if(x!==null)var Ie=!0;else{var Xe=t(p);Xe!==null&&j(R,Xe.startTime-fe),Ie=!1}return Ie}finally{x=null,g=ce,M=!1}}var P=!1,F=null,S=-1,b=5,z=-1;function k(){return!(s.unstable_now()-z<b)}function G(){if(F!==null){var q=s.unstable_now();z=q;var fe=!0;try{fe=F(!0,q)}finally{fe?te():(P=!1,F=null)}}else P=!1}var te;if(typeof D=="function")te=function(){D(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Y=ue.port2;ue.port1.onmessage=G,te=function(){Y.postMessage(null)}}else te=function(){y(G,0)};function de(q){F=q,P||(P=!0,te())}function j(q,fe){S=y(function(){q(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,de(N))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(q){switch(g){case 1:case 2:case 3:var fe=3;break;default:fe=g}var ce=g;g=fe;try{return q()}finally{g=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,fe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ce=g;g=q;try{return fe()}finally{g=ce}},s.unstable_scheduleCallback=function(q,fe,ce){var U=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,q){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ce+Z,q={id:v++,callback:fe,priorityLevel:q,startTime:ce,expirationTime:Z,sortIndex:-1},ce>U?(q.sortIndex=ce,e(p,q),t(h)===null&&q===t(p)&&(C?(_(S),S=-1):C=!0,j(R,ce-U))):(q.sortIndex=Z,e(h,q),w||M||(w=!0,de(N))),q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(q){var fe=g;return function(){var ce=g;g=fe;try{return q.apply(this,arguments)}finally{g=ce}}}})(uf)),uf}var Pm;function lx(){return Pm||(Pm=1,cf.exports=ox()),cf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function cx(){if(Lm)return Zn;Lm=1;var s=zd(),e=lx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),k=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),q=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function Z(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ie=!1;function Xe(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,I=m.length-1;1<=T&&0<=I&&d[T]!==m[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==m[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==m[I]){var B=`
`+d[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function Ve(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case b:return"Profiler";case S:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(n){var i=Me(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=be(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Me(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vt(n,i){var o=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function xt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function Ot(n,i){dt(n,i);var o=ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Wt(n,i.type,ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ht(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Wt(n,i,o){(i!=="number"||it(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Kt=Array.isArray;function Pt(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Xt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Kt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ae(o)}}function yn(n,i){var o=ae(i.value),c=ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function At(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function pe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=pe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Ne=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,rt=null,V=null;function Ce(n){if(n=Ha(n)){if(typeof et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xo(i),et(n.stateNode,n.type,i))}}function me(n){rt?V?V.push(n):V=[n]:rt=n}function Le(){if(rt){var n=rt,i=V;if(V=rt=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function Ue(n,i){return n(i)}function xe(){}var qe=!1;function He(n,i,o){if(qe)return n(i,o);qe=!0;try{return Ue(n,i,o)}finally{qe=!1,(rt!==null||V!==null)&&(xe(),Le())}}function Ut(n,i){var o=n.stateNode;if(o===null)return null;var c=Xo(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Rt=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Rt=!1}function ai(n,i,o,c,d,m,T,I,B){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(ye){this.onError(ye)}}var Xr=!1,Ts=null,qr=!1,Yr=null,Rc={onError:function(n){Xr=!0,Ts=n}};function Co(n,i,o,c,d,m,T,I,B){Xr=!1,Ts=null,ai.apply(Rc,arguments)}function Ro(n,i,o,c,d,m,T,I,B){if(Co.apply(this,arguments),Xr){if(Xr){var le=Ts;Xr=!1,Ts=null}else throw Error(t(198));qr||(qr=!0,Yr=le)}}function In(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function As(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ea(n){if(In(n)!==n)throw Error(t(188))}function bo(n){var i=n.alternate;if(!i){if(i=In(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return Ea(d),n;if(m===c)return Ea(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var T=!1,I=d.child;I;){if(I===o){T=!0,o=d,c=m;break}if(I===c){T=!0,c=d,o=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===o){T=!0,o=m,c=d;break}if(I===c){T=!0,c=m,o=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function $r(n){return n=bo(n),n!==null?wa(n):null}function wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=wa(n);if(i!==null)return i;n=n.sibling}return null}var Kr=e.unstable_scheduleCallback,Ta=e.unstable_cancelCallback,Po=e.unstable_shouldYield,bc=e.unstable_requestPaint,jt=e.unstable_now,Pc=e.unstable_getCurrentPriorityLevel,Aa=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,oe=e.unstable_LowPriority,ee=e.unstable_IdlePriority,Q=null,Ae=null;function Be(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ot,Ye=Math.log,Je=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(Ye(n)/Je|0)|0}var lt=64,je=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var I=T&~d;I!==0?c=Et(I):(m&=T,m!==0&&(c=Et(m)))}else T=o&~d,T!==0?c=Et(T):m!==0&&(c=Et(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Te(i),d=1<<o,c|=n[o],i&=~d;return c}function qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Te(m),I=1<<T,B=d[T];B===-1?((I&o)===0||(I&c)!==0)&&(d[T]=qt(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oe(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function Mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ht(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Te(i),n[i]=o}function Wn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Te(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function Xn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Te(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var pt=0;function Yi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bt,Bt,vi,Nt,xi,Pi=!1,jr=[],mr=null,gr=null,vr=null,Ca=new Map,Ra=new Map,xr=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(n,i){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Ca.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(i.pointerId)}}function ba(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ha(i),i!==null&&Bt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ag(n,i,o,c,d){switch(i){case"focusin":return mr=ba(mr,n,i,o,c,d),!0;case"dragenter":return gr=ba(gr,n,i,o,c,d),!0;case"mouseover":return vr=ba(vr,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return Ca.set(m,ba(Ca.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ra.set(m,ba(Ra.get(m)||null,n,i,o,c,d)),!0}return!1}function ch(n){var i=Zr(n.target);if(i!==null){var o=In(i);if(o!==null){if(i=o.tag,i===13){if(i=As(o),i!==null){n.blockedOn=i,xi(n.priority,function(){vi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Nc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Re=c,o.target.dispatchEvent(c),Re=null}else return i=Ha(o),i!==null&&Bt(i),n.blockedOn=o,!1;i.shift()}return!0}function uh(n,i,o){Lo(n)&&o.delete(i)}function Cg(){Pi=!1,mr!==null&&Lo(mr)&&(mr=null),gr!==null&&Lo(gr)&&(gr=null),vr!==null&&Lo(vr)&&(vr=null),Ca.forEach(uh),Ra.forEach(uh)}function Pa(n,i){n.blockedOn===i&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cg)))}function La(n){function i(d){return Pa(d,n)}if(0<jr.length){Pa(jr[0],n);for(var o=1;o<jr.length;o++){var c=jr[o];c.blockedOn===n&&(c.blockedOn=null)}}for(mr!==null&&Pa(mr,n),gr!==null&&Pa(gr,n),vr!==null&&Pa(vr,n),Ca.forEach(i),Ra.forEach(i),o=0;o<xr.length;o++)c=xr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<xr.length&&(o=xr[0],o.blockedOn===null);)ch(o),o.blockedOn===null&&xr.shift()}var Cs=R.ReactCurrentBatchConfig,No=!0;function Rg(n,i,o,c){var d=pt,m=Cs.transition;Cs.transition=null;try{pt=1,Lc(n,i,o,c)}finally{pt=d,Cs.transition=m}}function bg(n,i,o,c){var d=pt,m=Cs.transition;Cs.transition=null;try{pt=4,Lc(n,i,o,c)}finally{pt=d,Cs.transition=m}}function Lc(n,i,o,c){if(No){var d=Nc(n,i,o,c);if(d===null)Kc(n,i,c,Do,o),lh(n,c);else if(Ag(d,n,i,o,c))c.stopPropagation();else if(lh(n,c),i&4&&-1<Tg.indexOf(n)){for(;d!==null;){var m=Ha(d);if(m!==null&&bt(m),m=Nc(n,i,o,c),m===null&&Kc(n,i,c,Do,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Kc(n,i,c,null,o)}}var Do=null;function Nc(n,i,o,c){if(Do=null,n=Qe(c),n=Zr(n),n!==null)if(i=In(n),i===null)n=null;else if(o=i.tag,o===13){if(n=As(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function fh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pc()){case Aa:return 1;case A:return 4;case X:case oe:return 16;case ee:return 536870912;default:return 16}default:return 16}}var _r=null,Dc=null,Io=null;function dh(){if(Io)return Io;var n,i=Dc,o=i.length,c,d="value"in _r?_r.value:_r.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===d[m-c];c++);return Io=d.slice(n,1<c?1-c:void 0)}function Uo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Fo(){return!0}function hh(){return!1}function Qn(n){function i(o,c,d,m,T){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fo:hh,this.isPropagationStopped=hh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Qn(Rs),Na=ce({},Rs,{view:0,detail:0}),Pg=Qn(Na),Uc,Fc,Da,Oo=ce({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(Uc=n.screenX-Da.screenX,Fc=n.screenY-Da.screenY):Fc=Uc=0,Da=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),ph=Qn(Oo),Lg=ce({},Oo,{dataTransfer:0}),Ng=Qn(Lg),Dg=ce({},Na,{relatedTarget:0}),Oc=Qn(Dg),Ig=ce({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Qn(Ig),Fg=ce({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Og=Qn(Fg),zg=ce({},Rs,{data:0}),mh=Qn(zg),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vg[n])?!!i[n]:!1}function zc(){return Gg}var Hg=ce({},Na,{key:function(n){if(n.key){var i=kg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Uo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Uo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=Qn(Hg),Xg=ce({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Qn(Xg),qg=ce({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),Yg=Qn(qg),$g=ce({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=Qn($g),jg=ce({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Qn(jg),Jg=[9,13,27,32],kc=f&&"CompositionEvent"in window,Ia=null;f&&"documentMode"in document&&(Ia=document.documentMode);var Qg=f&&"TextEvent"in window&&!Ia,vh=f&&(!kc||Ia&&8<Ia&&11>=Ia),xh=" ",_h=!1;function yh(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function ev(n,i){switch(n){case"compositionend":return Mh(i);case"keypress":return i.which!==32?null:(_h=!0,xh);case"textInput":return n=i.data,n===xh&&_h?null:n;default:return null}}function tv(n,i){if(bs)return n==="compositionend"||!kc&&yh(n,i)?(n=dh(),Io=Dc=_r=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vh&&i.locale!=="ko"?null:i.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!nv[n.type]:i==="textarea"}function Eh(n,i,o,c){me(c),i=Go(i,"onChange"),0<i.length&&(o=new Ic("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Ua=null,Fa=null;function iv(n){Vh(n,0)}function zo(n){var i=Is(n);if(_t(i))return n}function rv(n,i){if(n==="change")return i}var wh=!1;if(f){var Bc;if(f){var Vc="oninput"in document;if(!Vc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Vc=typeof Th.oninput=="function"}Bc=Vc}else Bc=!1;wh=Bc&&(!document.documentMode||9<document.documentMode)}function Ah(){Ua&&(Ua.detachEvent("onpropertychange",Ch),Fa=Ua=null)}function Ch(n){if(n.propertyName==="value"&&zo(Fa)){var i=[];Eh(i,Fa,n,Qe(n)),He(iv,i)}}function sv(n,i,o){n==="focusin"?(Ah(),Ua=i,Fa=o,Ua.attachEvent("onpropertychange",Ch)):n==="focusout"&&Ah()}function av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zo(Fa)}function ov(n,i){if(n==="click")return zo(i)}function lv(n,i){if(n==="input"||n==="change")return zo(i)}function cv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:cv;function Oa(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!_i(n[d],i[d]))return!1}return!0}function Rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var o=Rh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function Ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var n=window,i=it();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=it(n.document)}return i}function Gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function uv(n){var i=Lh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(c!==null&&Gc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=bh(o,m);var T=bh(o,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fv=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,Hc=null,za=null,Wc=!1;function Nh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Wc||Ps==null||Ps!==it(c)||(c=Ps,"selectionStart"in c&&Gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),za&&Oa(za,c)||(za=c,c=Go(Hc,"onSelect"),0<c.length&&(i=new Ic("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ps)))}function ko(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ls={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Xc={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Bo(n){if(Xc[n])return Xc[n];if(!Ls[n])return n;var i=Ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dh)return Xc[n]=i[o];return n}var Ih=Bo("animationend"),Uh=Bo("animationiteration"),Fh=Bo("animationstart"),Oh=Bo("transitionend"),zh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,i){zh.set(n,i),l(i,[n])}for(var qc=0;qc<kh.length;qc++){var Yc=kh[qc],dv=Yc.toLowerCase(),hv=Yc[0].toUpperCase()+Yc.slice(1);yr(dv,"on"+hv)}yr(Ih,"onAnimationEnd"),yr(Uh,"onAnimationIteration"),yr(Fh,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Oh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function Bh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ro(c,i,void 0,n),n.currentTarget=null}function Vh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var I=c[T],B=I.instance,le=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;Bh(d,I,le),m=B}else for(T=0;T<c.length;T++){if(I=c[T],B=I.instance,le=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;Bh(d,I,le),m=B}}}if(qr)throw n=Yr,qr=!1,Yr=null,n}function Vt(n,i){var o=i[tu];o===void 0&&(o=i[tu]=new Set);var c=n+"__bubble";o.has(c)||(Gh(i,n,2,!1),o.add(c))}function $c(n,i,o){var c=0;i&&(c|=4),Gh(o,n,c,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[Vo]){n[Vo]=!0,r.forEach(function(o){o!=="selectionchange"&&(pv.has(o)||$c(o,!1,n),$c(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,$c("selectionchange",!1,i))}}function Gh(n,i,o,c){switch(fh(i)){case 1:var d=Rg;break;case 4:d=bg;break;default:d=Lc}o=d.bind(null,i,o,n),d=void 0,!Rt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Kc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Zr(I),T===null)return;if(B=T.tag,B===5||B===6){c=m=T;continue e}I=I.parentNode}}c=c.return}He(function(){var le=m,ye=Qe(o),Se=[];e:{var _e=zh.get(n);if(_e!==void 0){var ze=Ic,We=n;switch(n){case"keypress":if(Uo(o)===0)break e;case"keydown":case"keyup":ze=Wg;break;case"focusin":We="focus",ze=Oc;break;case"focusout":We="blur",ze=Oc;break;case"beforeblur":case"afterblur":ze=Oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Yg;break;case Ih:case Uh:case Fh:ze=Ug;break;case Oh:ze=Kg;break;case"scroll":ze=Pg;break;case"wheel":ze=Zg;break;case"copy":case"cut":case"paste":ze=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=gh}var $e=(i&4)!==0,nn=!$e&&n==="scroll",J=$e?_e!==null?_e+"Capture":null:_e;$e=[];for(var H=le,ne;H!==null;){ne=H;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,J!==null&&(we=Ut(H,J),we!=null&&$e.push(Va(H,we,ne)))),nn)break;H=H.return}0<$e.length&&(_e=new ze(_e,We,null,o,ye),Se.push({event:_e,listeners:$e}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&o!==Re&&(We=o.relatedTarget||o.fromElement)&&(Zr(We)||We[$i]))break e;if((ze||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(We=o.relatedTarget||o.toElement,ze=le,We=We?Zr(We):null,We!==null&&(nn=In(We),We!==nn||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=le),ze!==We)){if($e=ph,we="onMouseLeave",J="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&($e=gh,we="onPointerLeave",J="onPointerEnter",H="pointer"),nn=ze==null?_e:Is(ze),ne=We==null?_e:Is(We),_e=new $e(we,H+"leave",ze,o,ye),_e.target=nn,_e.relatedTarget=ne,we=null,Zr(ye)===le&&($e=new $e(J,H+"enter",We,o,ye),$e.target=ne,$e.relatedTarget=nn,we=$e),nn=we,ze&&We)t:{for($e=ze,J=We,H=0,ne=$e;ne;ne=Ns(ne))H++;for(ne=0,we=J;we;we=Ns(we))ne++;for(;0<H-ne;)$e=Ns($e),H--;for(;0<ne-H;)J=Ns(J),ne--;for(;H--;){if($e===J||J!==null&&$e===J.alternate)break t;$e=Ns($e),J=Ns(J)}$e=null}else $e=null;ze!==null&&Hh(Se,_e,ze,$e,!1),We!==null&&nn!==null&&Hh(Se,nn,We,$e,!0)}}e:{if(_e=le?Is(le):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Ze=rv;else if(Sh(_e))if(wh)Ze=lv;else{Ze=av;var tt=sv}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=ov);if(Ze&&(Ze=Ze(n,le))){Eh(Se,Ze,o,ye);break e}tt&&tt(n,_e,le),n==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&Wt(_e,"number",_e.value)}switch(tt=le?Is(le):window,n){case"focusin":(Sh(tt)||tt.contentEditable==="true")&&(Ps=tt,Hc=le,za=null);break;case"focusout":za=Hc=Ps=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Nh(Se,o,ye);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Nh(Se,o,ye)}var nt;if(kc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else bs?yh(n,o)&&(st="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(vh&&o.locale!=="ko"&&(bs||st!=="onCompositionStart"?st==="onCompositionEnd"&&bs&&(nt=dh()):(_r=ye,Dc="value"in _r?_r.value:_r.textContent,bs=!0)),tt=Go(le,st),0<tt.length&&(st=new mh(st,n,null,o,ye),Se.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Mh(o),nt!==null&&(st.data=nt)))),(nt=Qg?ev(n,o):tv(n,o))&&(le=Go(le,"onBeforeInput"),0<le.length&&(ye=new mh("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:le}),ye.data=nt))}Vh(Se,i)})}function Va(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Go(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ut(n,o),m!=null&&c.unshift(Va(n,m,d)),m=Ut(n,i),m!=null&&c.push(Va(n,m,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hh(n,i,o,c,d){for(var m=i._reactName,T=[];o!==null&&o!==c;){var I=o,B=I.alternate,le=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&le!==null&&(I=le,d?(B=Ut(o,m),B!=null&&T.unshift(Va(o,B,I))):d||(B=Ut(o,m),B!=null&&T.push(Va(o,B,I)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var mv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Wh(n){return(typeof n=="string"?n:""+n).replace(mv,`
`).replace(gv,"")}function Ho(n,i,o){if(i=Wh(i),Wh(n)!==i&&o)throw Error(t(425))}function Wo(){}var jc=null,Zc=null;function Jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(n){return Xh.resolve(null).then(n).catch(_v)}:Qc;function _v(n){setTimeout(function(){throw n})}function eu(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),La(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);La(i)}function Mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function qh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ds,Ga="__reactProps$"+Ds,$i="__reactContainer$"+Ds,tu="__reactEvents$"+Ds,yv="__reactListeners$"+Ds,Mv="__reactHandles$"+Ds;function Zr(n){var i=n[Li];if(i)return i;for(var o=n.parentNode;o;){if(i=o[$i]||o[Li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=qh(n);n!==null;){if(o=n[Li])return o;n=qh(n)}return i}n=o,o=n.parentNode}return null}function Ha(n){return n=n[Li]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xo(n){return n[Ga]||null}var nu=[],Us=-1;function Sr(n){return{current:n}}function Gt(n){0>Us||(n.current=nu[Us],nu[Us]=null,Us--)}function kt(n,i){Us++,nu[Us]=n.current,n.current=i}var Er={},An=Sr(Er),qn=Sr(!1),Jr=Er;function Fs(n,i){var o=n.type.contextTypes;if(!o)return Er;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yn(n){return n=n.childContextTypes,n!=null}function qo(){Gt(qn),Gt(An)}function Yh(n,i,o){if(An.current!==Er)throw Error(t(168));kt(An,i),kt(qn,o)}function $h(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return ce({},o,c)}function Yo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Er,Jr=An.current,kt(An,n),kt(qn,qn.current),!0}function Kh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=$h(n,i,Jr),c.__reactInternalMemoizedMergedChildContext=n,Gt(qn),Gt(An),kt(An,n)):Gt(qn),kt(qn,o)}var Ki=null,$o=!1,iu=!1;function jh(n){Ki===null?Ki=[n]:Ki.push(n)}function Sv(n){$o=!0,jh(n)}function wr(){if(!iu&&Ki!==null){iu=!0;var n=0,i=pt;try{var o=Ki;for(pt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ki=null,$o=!1}catch(d){throw Ki!==null&&(Ki=Ki.slice(n+1)),Kr(Aa,wr),d}finally{pt=i,iu=!1}}return null}var Os=[],zs=0,Ko=null,jo=0,oi=[],li=0,Qr=null,ji=1,Zi="";function es(n,i){Os[zs++]=jo,Os[zs++]=Ko,Ko=n,jo=i}function Zh(n,i,o){oi[li++]=ji,oi[li++]=Zi,oi[li++]=Qr,Qr=n;var c=ji;n=Zi;var d=32-Te(c)-1;c&=~(1<<d),o+=1;var m=32-Te(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,ji=1<<32-Te(i)+d|o<<d|c,Zi=m+n}else ji=1<<m|o<<d|c,Zi=n}function ru(n){n.return!==null&&(es(n,1),Zh(n,1,0))}function su(n){for(;n===Ko;)Ko=Os[--zs],Os[zs]=null,jo=Os[--zs],Os[zs]=null;for(;n===Qr;)Qr=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null,ji=oi[--li],oi[li]=null}var ei=null,ti=null,Yt=!1,yi=null;function Jh(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Qh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=Mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:ji,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ou(n){if(Yt){var i=ti;if(i){var o=i;if(!Qh(n,i)){if(au(n))throw Error(t(418));i=Mr(o.nextSibling);var c=ei;i&&Qh(n,i)?Jh(c,o):(n.flags=n.flags&-4097|2,Yt=!1,ei=n)}}else{if(au(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,ei=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Zo(n){if(n!==ei)return!1;if(!Yt)return ep(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Jc(n.type,n.memoizedProps)),i&&(i=ti)){if(au(n))throw tp(),Error(t(418));for(;i;)Jh(n,i),i=Mr(i.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=Mr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?Mr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=ti;n;)n=Mr(n.nextSibling)}function ks(){ti=ei=null,Yt=!1}function lu(n){yi===null?yi=[n]:yi.push(n)}var Ev=R.ReactCurrentBatchConfig;function Wa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var I=d.refs;T===null?delete I[m]:I[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function np(n){var i=n._init;return i(n._payload)}function ip(n){function i(J,H){if(n){var ne=J.deletions;ne===null?(J.deletions=[H],J.flags|=16):ne.push(H)}}function o(J,H){if(!n)return null;for(;H!==null;)i(J,H),H=H.sibling;return null}function c(J,H){for(J=new Map;H!==null;)H.key!==null?J.set(H.key,H):J.set(H.index,H),H=H.sibling;return J}function d(J,H){return J=Nr(J,H),J.index=0,J.sibling=null,J}function m(J,H,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<H?(J.flags|=2,H):ne):(J.flags|=2,H)):(J.flags|=1048576,H)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function I(J,H,ne,we){return H===null||H.tag!==6?(H=Qu(ne,J.mode,we),H.return=J,H):(H=d(H,ne),H.return=J,H)}function B(J,H,ne,we){var Ze=ne.type;return Ze===F?ye(J,H,ne.props.children,we,ne.key):H!==null&&(H.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===de&&np(Ze)===H.type)?(we=d(H,ne.props),we.ref=Wa(J,H,ne),we.return=J,we):(we=Sl(ne.type,ne.key,ne.props,null,J.mode,we),we.ref=Wa(J,H,ne),we.return=J,we)}function le(J,H,ne,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=ef(ne,J.mode,we),H.return=J,H):(H=d(H,ne.children||[]),H.return=J,H)}function ye(J,H,ne,we,Ze){return H===null||H.tag!==7?(H=ls(ne,J.mode,we,Ze),H.return=J,H):(H=d(H,ne),H.return=J,H)}function Se(J,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Qu(""+H,J.mode,ne),H.return=J,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return ne=Sl(H.type,H.key,H.props,null,J.mode,ne),ne.ref=Wa(J,null,H),ne.return=J,ne;case P:return H=ef(H,J.mode,ne),H.return=J,H;case de:var we=H._init;return Se(J,we(H._payload),ne)}if(Kt(H)||fe(H))return H=ls(H,J.mode,ne,null),H.return=J,H;Jo(J,H)}return null}function _e(J,H,ne,we){var Ze=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ze!==null?null:I(J,H,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:return ne.key===Ze?B(J,H,ne,we):null;case P:return ne.key===Ze?le(J,H,ne,we):null;case de:return Ze=ne._init,_e(J,H,Ze(ne._payload),we)}if(Kt(ne)||fe(ne))return Ze!==null?null:ye(J,H,ne,we,null);Jo(J,ne)}return null}function ze(J,H,ne,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(ne)||null,I(H,J,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return J=J.get(we.key===null?ne:we.key)||null,B(H,J,we,Ze);case P:return J=J.get(we.key===null?ne:we.key)||null,le(H,J,we,Ze);case de:var tt=we._init;return ze(J,H,ne,tt(we._payload),Ze)}if(Kt(we)||fe(we))return J=J.get(ne)||null,ye(H,J,we,Ze,null);Jo(H,we)}return null}function We(J,H,ne,we){for(var Ze=null,tt=null,nt=H,st=H=0,gn=null;nt!==null&&st<ne.length;st++){nt.index>st?(gn=nt,nt=null):gn=nt.sibling;var Ct=_e(J,nt,ne[st],we);if(Ct===null){nt===null&&(nt=gn);break}n&&nt&&Ct.alternate===null&&i(J,nt),H=m(Ct,H,st),tt===null?Ze=Ct:tt.sibling=Ct,tt=Ct,nt=gn}if(st===ne.length)return o(J,nt),Yt&&es(J,st),Ze;if(nt===null){for(;st<ne.length;st++)nt=Se(J,ne[st],we),nt!==null&&(H=m(nt,H,st),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Yt&&es(J,st),Ze}for(nt=c(J,nt);st<ne.length;st++)gn=ze(nt,J,st,ne[st],we),gn!==null&&(n&&gn.alternate!==null&&nt.delete(gn.key===null?st:gn.key),H=m(gn,H,st),tt===null?Ze=gn:tt.sibling=gn,tt=gn);return n&&nt.forEach(function(Dr){return i(J,Dr)}),Yt&&es(J,st),Ze}function $e(J,H,ne,we){var Ze=fe(ne);if(typeof Ze!="function")throw Error(t(150));if(ne=Ze.call(ne),ne==null)throw Error(t(151));for(var tt=Ze=null,nt=H,st=H=0,gn=null,Ct=ne.next();nt!==null&&!Ct.done;st++,Ct=ne.next()){nt.index>st?(gn=nt,nt=null):gn=nt.sibling;var Dr=_e(J,nt,Ct.value,we);if(Dr===null){nt===null&&(nt=gn);break}n&&nt&&Dr.alternate===null&&i(J,nt),H=m(Dr,H,st),tt===null?Ze=Dr:tt.sibling=Dr,tt=Dr,nt=gn}if(Ct.done)return o(J,nt),Yt&&es(J,st),Ze;if(nt===null){for(;!Ct.done;st++,Ct=ne.next())Ct=Se(J,Ct.value,we),Ct!==null&&(H=m(Ct,H,st),tt===null?Ze=Ct:tt.sibling=Ct,tt=Ct);return Yt&&es(J,st),Ze}for(nt=c(J,nt);!Ct.done;st++,Ct=ne.next())Ct=ze(nt,J,st,Ct.value,we),Ct!==null&&(n&&Ct.alternate!==null&&nt.delete(Ct.key===null?st:Ct.key),H=m(Ct,H,st),tt===null?Ze=Ct:tt.sibling=Ct,tt=Ct);return n&&nt.forEach(function(nx){return i(J,nx)}),Yt&&es(J,st),Ze}function nn(J,H,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:e:{for(var Ze=ne.key,tt=H;tt!==null;){if(tt.key===Ze){if(Ze=ne.type,Ze===F){if(tt.tag===7){o(J,tt.sibling),H=d(tt,ne.props.children),H.return=J,J=H;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===de&&np(Ze)===tt.type){o(J,tt.sibling),H=d(tt,ne.props),H.ref=Wa(J,tt,ne),H.return=J,J=H;break e}o(J,tt);break}else i(J,tt);tt=tt.sibling}ne.type===F?(H=ls(ne.props.children,J.mode,we,ne.key),H.return=J,J=H):(we=Sl(ne.type,ne.key,ne.props,null,J.mode,we),we.ref=Wa(J,H,ne),we.return=J,J=we)}return T(J);case P:e:{for(tt=ne.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){o(J,H.sibling),H=d(H,ne.children||[]),H.return=J,J=H;break e}else{o(J,H);break}else i(J,H);H=H.sibling}H=ef(ne,J.mode,we),H.return=J,J=H}return T(J);case de:return tt=ne._init,nn(J,H,tt(ne._payload),we)}if(Kt(ne))return We(J,H,ne,we);if(fe(ne))return $e(J,H,ne,we);Jo(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(o(J,H.sibling),H=d(H,ne),H.return=J,J=H):(o(J,H),H=Qu(ne,J.mode,we),H.return=J,J=H),T(J)):o(J,H)}return nn}var Bs=ip(!0),rp=ip(!1),Qo=Sr(null),el=null,Vs=null,cu=null;function uu(){cu=Vs=el=null}function fu(n){var i=Qo.current;Gt(Qo),n._currentValue=i}function du(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Gs(n,i){el=n,cu=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function ci(n){var i=n._currentValue;if(cu!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(el===null)throw Error(t(308));Vs=n,el.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var ts=null;function hu(n){ts===null?ts=[n]:ts.push(n)}function sp(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,hu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ji(n,c)}function Ji(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Tr=!1;function pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ar(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ji(n,o)}return d=c.interleaved,d===null?(i.next=i,hu(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ji(n,o)}function tl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Xn(n,o)}}function op(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function nl(n,i,o,c){var d=n.updateQueue;Tr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,le=B.next;B.next=null,T===null?m=le:T.next=le,T=B;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==T&&(I===null?ye.firstBaseUpdate=le:I.next=le,ye.lastBaseUpdate=B))}if(m!==null){var Se=d.baseState;T=0,ye=le=B=null,I=m;do{var _e=I.lane,ze=I.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,$e=I;switch(_e=i,ze=o,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){Se=We.call(ze,Se,_e);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,_e=typeof We=="function"?We.call(ze,Se,_e):We,_e==null)break e;Se=ce({},Se,_e);break e;case 2:Tr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[I]:_e.push(I))}else ze={eventTime:ze,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(le=ye=ze,B=Se):ye=ye.next=ze,T|=_e;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=le,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);rs|=T,n.lanes=T,n.memoizedState=Se}}function lp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Xa={},Ni=Sr(Xa),qa=Sr(Xa),Ya=Sr(Xa);function ns(n){if(n===Xa)throw Error(t(174));return n}function mu(n,i){switch(kt(Ya,i),kt(qa,n),kt(Ni,Xa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Gt(Ni),kt(Ni,i)}function Hs(){Gt(Ni),Gt(qa),Gt(Ya)}function cp(n){ns(Ya.current);var i=ns(Ni.current),o=E(i,n.type);i!==o&&(kt(qa,n),kt(Ni,o))}function gu(n){qa.current===n&&(Gt(Ni),Gt(qa))}var Zt=Sr(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vu=[];function xu(){for(var n=0;n<vu.length;n++)vu[n]._workInProgressVersionPrimary=null;vu.length=0}var rl=R.ReactCurrentDispatcher,_u=R.ReactCurrentBatchConfig,is=0,Jt=null,un=null,pn=null,sl=!1,$a=!1,Ka=0,wv=0;function Cn(){throw Error(t(321))}function yu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!_i(n[o],i[o]))return!1;return!0}function Mu(n,i,o,c,d,m){if(is=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?Rv:bv,n=o(c,d),$a){m=0;do{if($a=!1,Ka=0,25<=m)throw Error(t(301));m+=1,pn=un=null,i.updateQueue=null,rl.current=Pv,n=o(c,d)}while($a)}if(rl.current=ll,i=un!==null&&un.next!==null,is=0,pn=un=Jt=null,sl=!1,i)throw Error(t(300));return n}function Su(){var n=Ka!==0;return Ka=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Jt.memoizedState=pn=n:pn=pn.next=n,pn}function ui(){if(un===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=pn===null?Jt.memoizedState:pn.next;if(i!==null)pn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Jt.memoizedState=pn=n:pn=pn.next=n}return pn}function ja(n,i){return typeof i=="function"?i(n):i}function Eu(n){var i=ui(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=un,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=T=null,B=null,le=m;do{var ye=le.lane;if((is&ye)===ye)B!==null&&(B=B.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};B===null?(I=B=Se,T=c):B=B.next=Se,Jt.lanes|=ye,rs|=ye}le=le.next}while(le!==null&&le!==m);B===null?T=c:B.next=I,_i(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=B,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Jt.lanes|=m,rs|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function wu(n){var i=ui(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);_i(m,i.memoizedState)||($n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function up(){}function fp(n,i){var o=Jt,c=ui(),d=i(),m=!_i(c.memoizedState,d);if(m&&(c.memoizedState=d,$n=!0),c=c.queue,Tu(pp.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Za(9,hp.bind(null,o,c,d,i),void 0,null),mn===null)throw Error(t(349));(is&30)!==0||dp(o,i,d)}return d}function dp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function hp(n,i,o,c){i.value=o,i.getSnapshot=c,mp(i)&&gp(n)}function pp(n,i,o){return o(function(){mp(i)&&gp(n)})}function mp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!_i(n,o)}catch{return!0}}function gp(n){var i=Ji(n,1);i!==null&&wi(i,n,1,-1)}function vp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Cv.bind(null,Jt,n),[i.memoizedState,n]}function Za(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function xp(){return ui().memoizedState}function al(n,i,o,c){var d=Di();Jt.flags|=n,d.memoizedState=Za(1|i,o,void 0,c===void 0?null:c)}function ol(n,i,o,c){var d=ui();c=c===void 0?null:c;var m=void 0;if(un!==null){var T=un.memoizedState;if(m=T.destroy,c!==null&&yu(c,T.deps)){d.memoizedState=Za(i,o,m,c);return}}Jt.flags|=n,d.memoizedState=Za(1|i,o,m,c)}function _p(n,i){return al(8390656,8,n,i)}function Tu(n,i){return ol(2048,8,n,i)}function yp(n,i){return ol(4,2,n,i)}function Mp(n,i){return ol(4,4,n,i)}function Sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ep(n,i,o){return o=o!=null?o.concat([n]):null,ol(4,4,Sp.bind(null,i,n),o)}function Au(){}function wp(n,i){var o=ui();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Tp(n,i){var o=ui();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Ap(n,i,o){return(is&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=o):(_i(o,i)||(o=Oe(),Jt.lanes|=o,rs|=o,n.baseState=!0),i)}function Tv(n,i){var o=pt;pt=o!==0&&4>o?o:4,n(!0);var c=_u.transition;_u.transition={};try{n(!1),i()}finally{pt=o,_u.transition=c}}function Cp(){return ui().memoizedState}function Av(n,i,o){var c=Pr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Rp(n))bp(i,o);else if(o=sp(n,i,o,c),o!==null){var d=Fn();wi(o,n,c,d),Pp(o,i,c)}}function Cv(n,i,o){var c=Pr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))bp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,I=m(T,o);if(d.hasEagerState=!0,d.eagerState=I,_i(I,T)){var B=i.interleaved;B===null?(d.next=d,hu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=sp(n,i,d,c),o!==null&&(d=Fn(),wi(o,n,c,d),Pp(o,i,c))}}function Rp(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function bp(n,i){$a=sl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Pp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Xn(n,o)}}var ll={readContext:ci,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Rv={readContext:ci,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:ci,useEffect:_p,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,al(4194308,4,Sp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var o=Di();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Di();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Av.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:Au,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=Tv.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Jt,d=Di();if(Yt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),mn===null)throw Error(t(349));(is&30)!==0||dp(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,_p(pp.bind(null,c,m,n),[n]),c.flags|=2048,Za(9,hp.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Di(),i=mn.identifierPrefix;if(Yt){var o=Zi,c=ji;o=(c&~(1<<32-Te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ka++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=wv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bv={readContext:ci,useCallback:wp,useContext:ci,useEffect:Tu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Mp,useMemo:Tp,useReducer:Eu,useRef:xp,useState:function(){return Eu(ja)},useDebugValue:Au,useDeferredValue:function(n){var i=ui();return Ap(i,un.memoizedState,n)},useTransition:function(){var n=Eu(ja)[0],i=ui().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1},Pv={readContext:ci,useCallback:wp,useContext:ci,useEffect:Tu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Mp,useMemo:Tp,useReducer:wu,useRef:xp,useState:function(){return wu(ja)},useDebugValue:Au,useDeferredValue:function(n){var i=ui();return un===null?i.memoizedState=n:Ap(i,un.memoizedState,n)},useTransition:function(){var n=wu(ja)[0],i=ui().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1};function Mi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Cu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ce({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Fn(),d=Pr(n),m=Qi(c,d);m.payload=i,o!=null&&(m.callback=o),i=Ar(n,m,d),i!==null&&(wi(i,n,d,c),tl(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Fn(),d=Pr(n),m=Qi(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Ar(n,m,d),i!==null&&(wi(i,n,d,c),tl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Fn(),c=Pr(n),d=Qi(o,c);d.tag=2,i!=null&&(d.callback=i),i=Ar(n,d,c),i!==null&&(wi(i,n,c,o),tl(i,n,c))}};function Lp(n,i,o,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Oa(o,c)||!Oa(d,m):!0}function Np(n,i,o){var c=!1,d=Er,m=i.contextType;return typeof m=="object"&&m!==null?m=ci(m):(d=Yn(i)?Jr:An.current,c=i.contextTypes,m=(c=c!=null)?Fs(n,d):Er),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Dp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function Ru(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},pu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ci(m):(m=Yn(i)?Jr:An.current,d.context=Fs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Cu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cl.enqueueReplaceState(d,d.state,null),nl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var o="",c=i;do o+=Ve(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function bu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,i,o){o=Qi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){gl||(gl=!0,Xu=c),Pu(n,i)},o}function Up(n,i,o){o=Qi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Pu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Pu(n,i),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Fp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Lv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=Xv.bind(null,n,i,o),i.then(n,n))}function Op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Qi(-1,1),i.tag=2,Ar(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Nv=R.ReactCurrentOwner,$n=!1;function Un(n,i,o,c){i.child=n===null?rp(i,null,o,c):Bs(i,n.child,o,c)}function kp(n,i,o,c,d){o=o.render;var m=i.ref;return Gs(i,d),c=Mu(n,i,o,c,m,d),o=Su(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Yt&&o&&ru(i),i.flags|=1,Un(n,i,c,d),i.child)}function Bp(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Ju(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Vp(n,i,m,c,d)):(n=Sl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:Oa,o(T,c)&&n.ref===i.ref)return er(n,i,d)}return i.flags|=1,n=Nr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Vp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(Oa(m,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,er(n,i,d)}return Lu(n,i,o,c,d)}function Gp(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(qs,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(qs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,kt(qs,ni),ni|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,kt(qs,ni),ni|=c;return Un(n,i,d,o),i.child}function Hp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lu(n,i,o,c,d){var m=Yn(o)?Jr:An.current;return m=Fs(i,m),Gs(i,d),o=Mu(n,i,o,c,m,d),c=Su(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Yt&&c&&ru(i),i.flags|=1,Un(n,i,o,d),i.child)}function Wp(n,i,o,c,d){if(Yn(o)){var m=!0;Yo(i)}else m=!1;if(Gs(i,d),i.stateNode===null)fl(n,i),Np(i,o,c),Ru(i,o,c,d),c=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var B=T.context,le=o.contextType;typeof le=="object"&&le!==null?le=ci(le):(le=Yn(o)?Jr:An.current,le=Fs(i,le));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||B!==le)&&Dp(i,T,c,le),Tr=!1;var _e=i.memoizedState;T.state=_e,nl(i,c,T,d),B=i.memoizedState,I!==c||_e!==B||qn.current||Tr?(typeof ye=="function"&&(Cu(i,o,ye,c),B=i.memoizedState),(I=Tr||Lp(i,o,I,c,_e,B,le))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),T.props=c,T.state=B,T.context=le,c=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,ap(n,i),I=i.memoizedProps,le=i.type===i.elementType?I:Mi(i.type,I),T.props=le,Se=i.pendingProps,_e=T.context,B=o.contextType,typeof B=="object"&&B!==null?B=ci(B):(B=Yn(o)?Jr:An.current,B=Fs(i,B));var ze=o.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Se||_e!==B)&&Dp(i,T,c,B),Tr=!1,_e=i.memoizedState,T.state=_e,nl(i,c,T,d);var We=i.memoizedState;I!==Se||_e!==We||qn.current||Tr?(typeof ze=="function"&&(Cu(i,o,ze,c),We=i.memoizedState),(le=Tr||Lp(i,o,le,c,_e,We,B)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,We,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,We,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),T.props=c,T.state=We,T.context=B,c=le):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Nu(n,i,o,c,m,d)}function Nu(n,i,o,c,d,m){Hp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Kh(i,o,!1),er(n,i,m);c=i.stateNode,Nv.current=i;var I=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Bs(i,n.child,null,m),i.child=Bs(i,null,I,m)):Un(n,i,I,m),i.memoizedState=c.state,d&&Kh(i,o,!0),i.child}function Xp(n){var i=n.stateNode;i.pendingContext?Yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yh(n,i.context,!1),mu(n,i.containerInfo)}function qp(n,i,o,c,d){return ks(),lu(d),i.flags|=256,Un(n,i,o,c),i.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,i,o){var c=i.pendingProps,d=Zt.current,m=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Zt,d&1),n===null)return ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=El(T,c,0,null),n=ls(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Iu(o),i.memoizedState=Du,n):Uu(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Dv(n,i,T,c,I,d,o);if(m){m=c.fallback,T=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Nr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Nr(I,m):(m=ls(m,T,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Iu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=Du,c}return m=n.child,n=m.sibling,c=Nr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Uu(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,o,c){return c!==null&&lu(c),Bs(i,n.child,null,o),n=Uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Dv(n,i,o,c,d,m,T){if(o)return i.flags&256?(i.flags&=-257,c=bu(Error(t(422))),ul(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=El({mode:"visible",children:c.children},d,0,null),m=ls(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Bs(i,n.child,null,T),i.child.memoizedState=Iu(T),i.memoizedState=Du,m);if((i.mode&1)===0)return ul(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=bu(m,c,void 0),ul(n,i,T,c)}if(I=(T&n.childLanes)!==0,$n||I){if(c=mn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ji(n,d),wi(c,n,d,-1))}return Zu(),c=bu(Error(t(421))),ul(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=qv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ti=Mr(d.nextSibling),ei=i,Yt=!0,yi=null,n!==null&&(oi[li++]=ji,oi[li++]=Zi,oi[li++]=Qr,ji=n.id,Zi=n.overflow,Qr=i),i=Uu(i,c.children),i.flags|=4096,i)}function $p(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),du(n.return,i,o)}function Fu(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function Kp(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Un(n,i,c.children,o),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,o,i);else if(n.tag===19)$p(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&il(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Fu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&il(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Fu(i,!0,o,null,m);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function er(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Nr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Nr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Iv(n,i,o){switch(i.tag){case 3:Xp(i),ks();break;case 5:cp(i);break;case 1:Yn(i.type)&&Yo(i);break;case 4:mu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Qo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Zt,Zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yp(n,i,o):(kt(Zt,Zt.current&1),n=er(n,i,o),n!==null?n.sibling:null);kt(Zt,Zt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Kp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Gp(n,i,o)}return er(n,i,o)}var jp,Ou,Zp,Jp;jp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ou=function(){},Zp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ns(Ni.current);var m=null;switch(o){case"input":d=vt(n,d),c=vt(n,c),m=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),m=[];break;case"textarea":d=Xt(n,d),c=Xt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wo)}Ke(o,c);var T;o=null;for(le in d)if(!c.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var I=d[le];for(T in I)I.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?m||(m=[]):(m=m||[]).push(le,null));for(le in c){var B=c[le];if(I=d!=null?d[le]:void 0,c.hasOwnProperty(le)&&B!==I&&(B!=null||I!=null))if(le==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(o||(o={}),o[T]=B[T])}else o||(m||(m=[]),m.push(le,o)),o=B;else le==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(le,B)):le==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(le,""+B):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(B!=null&&le==="onScroll"&&Vt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(le,B))}o&&(m=m||[]).push("style",o);var le=m;(i.updateQueue=le)&&(i.flags|=4)}},Jp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Ja(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Uv(n,i,o){var c=i.pendingProps;switch(su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return Yn(i.type)&&qo(),Rn(i),null;case 3:return c=i.stateNode,Hs(),Gt(qn),Gt(An),xu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&($u(yi),yi=null))),Ou(n,i),Rn(i),null;case 5:gu(i);var d=ns(Ya.current);if(o=i.type,n!==null&&i.stateNode!=null)Zp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=ns(Ni.current),Zo(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Li]=i,c[Ga]=m,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(d=0;d<ka.length;d++)Vt(ka[d],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":xt(c,m),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",c);break;case"textarea":W(c,m),Vt("invalid",c)}Ke(o,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var I=m[T];T==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Vt("scroll",c)}switch(o){case"input":ke(c),Ht(c,m,!0);break;case"textarea":ke(c),At(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Wo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Li]=i,n[Ga]=c,jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=De(o,c),o){case"dialog":Vt("cancel",n),Vt("close",n),d=c;break;case"iframe":case"object":case"embed":Vt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ka.length;d++)Vt(ka[d],n);d=c;break;case"source":Vt("error",n),d=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=c;break;case"details":Vt("toggle",n),d=c;break;case"input":xt(n,c),d=vt(n,c),Vt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":W(n,c),d=Xt(n,c),Vt("invalid",n);break;default:d=c}Ke(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?ge(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&re(n,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&he(n,B):typeof B=="number"&&he(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Vt("scroll",n):B!=null&&O(n,m,B,T))}switch(o){case"input":ke(n),Ht(n,c,!1);break;case"textarea":ke(n),At(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ae(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Pt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Pt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)Jp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ns(Ya.current),ns(Ni.current),Zo(i)){if(c=i.stateNode,o=i.memoizedProps,c[Li]=i,(m=c.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return Rn(i),null;case 13:if(Gt(Zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tp(),ks(),i.flags|=98560,m=!1;else if(m=Zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Li]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),m=!1}else yi!==null&&($u(yi),yi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?fn===0&&(fn=3):Zu())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return Hs(),Ou(n,i),n===null&&Ba(i.stateNode.containerInfo),Rn(i),null;case 10:return fu(i.type._context),Rn(i),null;case 17:return Yn(i.type)&&qo(),Rn(i),null;case 19:if(Gt(Zt),m=i.memoizedState,m===null)return Rn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ja(m,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=il(n),T!==null){for(i.flags|=128,Ja(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return kt(Zt,Zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&jt()>Ys&&(i.flags|=128,c=!0,Ja(m,!1),i.lanes=4194304)}else{if(!c)if(n=il(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ja(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Yt)return Rn(i),null}else 2*jt()-m.renderingStartTime>Ys&&o!==1073741824&&(i.flags|=128,c=!0,Ja(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=jt(),i.sibling=null,o=Zt.current,kt(Zt,c?o&1|2:o&1),i):(Rn(i),null);case 22:case 23:return ju(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fv(n,i){switch(su(i),i.tag){case 1:return Yn(i.type)&&qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Hs(),Gt(qn),Gt(An),xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return gu(i),null;case 13:if(Gt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Zt),null;case 4:return Hs(),null;case 10:return fu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var dl=!1,bn=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Xs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){en(n,i,c)}else o.current=null}function zu(n,i,o){try{o()}catch(c){en(n,i,c)}}var Qp=!1;function zv(n,i){if(jc=No,n=Lh(),Gc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,I=-1,B=-1,le=0,ye=0,Se=n,_e=null;t:for(;;){for(var ze;Se!==o||d!==0&&Se.nodeType!==3||(I=T+d),Se!==m||c!==0&&Se.nodeType!==3||(B=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)_e=Se,Se=ze;for(;;){if(Se===n)break t;if(_e===o&&++le===d&&(I=T),_e===m&&++ye===c&&(B=T),(ze=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ze}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zc={focusedElem:n,selectionRange:o},No=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,nn=We.memoizedState,J=i.stateNode,H=J.getSnapshotBeforeUpdate(i.elementType===i.type?$e:Mi(i.type,$e),nn);J.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){en(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return We=Qp,Qp=!1,We}function Qa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&zu(i,o,m)}d=d.next}while(d!==c)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function ku(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function em(n){var i=n.alternate;i!==null&&(n.alternate=null,em(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Ga],delete i[tu],delete i[yv],delete i[Mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Wo));else if(c!==4&&(n=n.child,n!==null))for(Bu(n,i,o),n=n.sibling;n!==null;)Bu(n,i,o),n=n.sibling}function Vu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var Sn=null,Si=!1;function Cr(n,i,o){for(o=o.child;o!==null;)im(n,i,o),o=o.sibling}function im(n,i,o){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Q,o)}catch{}switch(o.tag){case 5:bn||Xs(o,i);case 6:var c=Sn,d=Si;Sn=null,Cr(n,i,o),Sn=c,Si=d,Sn!==null&&(Si?(n=Sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Sn.removeChild(o.stateNode));break;case 18:Sn!==null&&(Si?(n=Sn,o=o.stateNode,n.nodeType===8?eu(n.parentNode,o):n.nodeType===1&&eu(n,o),La(n)):eu(Sn,o.stateNode));break;case 4:c=Sn,d=Si,Sn=o.stateNode.containerInfo,Si=!0,Cr(n,i,o),Sn=c,Si=d;break;case 0:case 11:case 14:case 15:if(!bn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&zu(o,i,T),d=d.next}while(d!==c)}Cr(n,i,o);break;case 1:if(!bn&&(Xs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){en(o,i,I)}Cr(n,i,o);break;case 21:Cr(n,i,o);break;case 22:o.mode&1?(bn=(c=bn)||o.memoizedState!==null,Cr(n,i,o),bn=c):Cr(n,i,o);break;default:Cr(n,i,o)}}function rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Ov),i.forEach(function(c){var d=Yv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Ei(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:Sn=I.stateNode,Si=!1;break e;case 3:Sn=I.stateNode.containerInfo,Si=!0;break e;case 4:Sn=I.stateNode.containerInfo,Si=!0;break e}I=I.return}if(Sn===null)throw Error(t(160));im(m,T,d),Sn=null,Si=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(le){en(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sm(i,n),i=i.sibling}function sm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(i,n),Ii(n),c&4){try{Qa(3,n,n.return),hl(3,n)}catch($e){en(n,n.return,$e)}try{Qa(5,n,n.return)}catch($e){en(n,n.return,$e)}}break;case 1:Ei(i,n),Ii(n),c&512&&o!==null&&Xs(o,o.return);break;case 5:if(Ei(i,n),Ii(n),c&512&&o!==null&&Xs(o,o.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch($e){en(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&dt(d,m),De(I,T);var le=De(I,m);for(T=0;T<B.length;T+=2){var ye=B[T],Se=B[T+1];ye==="style"?ge(d,Se):ye==="dangerouslySetInnerHTML"?re(d,Se):ye==="children"?he(d,Se):O(d,ye,Se,le)}switch(I){case"input":Ot(d,m);break;case"textarea":yn(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?Pt(d,!!m.multiple,ze,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Pt(d,!!m.multiple,m.defaultValue,!0):Pt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ga]=m}catch($e){en(n,n.return,$e)}}break;case 6:if(Ei(i,n),Ii(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){en(n,n.return,$e)}}break;case 3:if(Ei(i,n),Ii(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{La(i.containerInfo)}catch($e){en(n,n.return,$e)}break;case 4:Ei(i,n),Ii(n);break;case 13:Ei(i,n),Ii(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Wu=jt())),c&4&&rm(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(le=bn)||ye,Ei(i,n),bn=le):Ei(i,n),Ii(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(Ge=n,ye=n.child;ye!==null;){for(Se=Ge=ye;Ge!==null;){switch(_e=Ge,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:Qa(4,_e,_e.return);break;case 1:Xs(_e,_e.return);var We=_e.stateNode;if(typeof We.componentWillUnmount=="function"){c=_e,o=_e.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){en(c,o,$e)}}break;case 5:Xs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){lm(Se);continue}}ze!==null?(ze.return=_e,Ge=ze):lm(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,le?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Se.stateNode,B=Se.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=pe("display",T))}catch($e){en(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch($e){en(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(i,n),Ii(n),c&4&&rm(n);break;case 21:break;default:Ei(i,n),Ii(n)}}function Ii(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(tm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=nm(n);Vu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,I=nm(n);Bu(n,I,T);break;default:throw Error(t(161))}}catch(B){en(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kv(n,i,o){Ge=n,am(n)}function am(n,i,o){for(var c=(n.mode&1)!==0;Ge!==null;){var d=Ge,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||dl;if(!T){var I=d.alternate,B=I!==null&&I.memoizedState!==null||bn;I=dl;var le=bn;if(dl=T,(bn=B)&&!le)for(Ge=d;Ge!==null;)T=Ge,B=T.child,T.tag===22&&T.memoizedState!==null?cm(d):B!==null?(B.return=T,Ge=B):cm(d);for(;m!==null;)Ge=m,am(m),m=m.sibling;Ge=d,dl=I,bn=le}om(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ge=m):om(n)}}function om(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||hl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Mi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&lp(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}lp(i,T,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&La(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&ku(i)}catch(_e){en(i,i.return,_e)}}if(i===n){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function lm(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function cm(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{hl(4,i)}catch(B){en(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){en(i,d,B)}}var m=i.return;try{ku(i)}catch(B){en(i,m,B)}break;case 5:var T=i.return;try{ku(i)}catch(B){en(i,T,B)}}}catch(B){en(i,i.return,B)}if(i===n){Ge=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ge=I;break}Ge=i.return}}var Bv=Math.ceil,pl=R.ReactCurrentDispatcher,Gu=R.ReactCurrentOwner,fi=R.ReactCurrentBatchConfig,Tt=0,mn=null,on=null,En=0,ni=0,qs=Sr(0),fn=0,eo=null,rs=0,ml=0,Hu=0,to=null,Kn=null,Wu=0,Ys=1/0,tr=null,gl=!1,Xu=null,Rr=null,vl=!1,br=null,xl=0,no=0,qu=null,_l=-1,yl=0;function Fn(){return(Tt&6)!==0?jt():_l!==-1?_l:_l=jt()}function Pr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&En!==0?En&-En:Ev.transition!==null?(yl===0&&(yl=Oe()),yl):(n=pt,n!==0||(n=window.event,n=n===void 0?16:fh(n.type)),n)}function wi(n,i,o,c){if(50<no)throw no=0,qu=null,Error(t(185));ht(n,o,c),((Tt&2)===0||n!==mn)&&(n===mn&&((Tt&2)===0&&(ml|=o),fn===4&&Lr(n,En)),jn(n,c),o===1&&Tt===0&&(i.mode&1)===0&&(Ys=jt()+500,$o&&wr()))}function jn(n,i){var o=n.callbackNode;Lt(n,i);var c=zt(n,n===mn?En:0);if(c===0)o!==null&&Ta(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Ta(o),i===1)n.tag===0?Sv(fm.bind(null,n)):jh(fm.bind(null,n)),xv(function(){(Tt&6)===0&&wr()}),o=null;else{switch(Yi(c)){case 1:o=Aa;break;case 4:o=A;break;case 16:o=X;break;case 536870912:o=ee;break;default:o=X}o=_m(o,um.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function um(n,i){if(_l=-1,yl=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if($s()&&n.callbackNode!==o)return null;var c=zt(n,n===mn?En:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ml(n,c);else{i=c;var d=Tt;Tt|=2;var m=hm();(mn!==n||En!==i)&&(tr=null,Ys=jt()+500,as(n,i));do try{Hv();break}catch(I){dm(n,I)}while(!0);uu(),pl.current=m,Tt=d,on!==null?i=0:(mn=null,En=0,i=fn)}if(i!==0){if(i===2&&(d=an(n),d!==0&&(c=d,i=Yu(n,d))),i===1)throw o=eo,as(n,0),Lr(n,c),jn(n,jt()),o;if(i===6)Lr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Vv(d)&&(i=Ml(n,c),i===2&&(m=an(n),m!==0&&(c=m,i=Yu(n,m))),i===1))throw o=eo,as(n,0),Lr(n,c),jn(n,jt()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:os(n,Kn,tr);break;case 3:if(Lr(n,c),(c&130023424)===c&&(i=Wu+500-jt(),10<i)){if(zt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Qc(os.bind(null,n,Kn,tr),i);break}os(n,Kn,tr);break;case 4:if(Lr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Te(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Bv(c/1960))-c,10<c){n.timeoutHandle=Qc(os.bind(null,n,Kn,tr),c);break}os(n,Kn,tr);break;case 5:os(n,Kn,tr);break;default:throw Error(t(329))}}}return jn(n,jt()),n.callbackNode===o?um.bind(null,n):null}function Yu(n,i){var o=to;return n.current.memoizedState.isDehydrated&&(as(n,i).flags|=256),n=Ml(n,i),n!==2&&(i=Kn,Kn=o,i!==null&&$u(i)),n}function $u(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Vv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!_i(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(n,i){for(i&=~Hu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Te(i),c=1<<o;n[o]=-1,i&=~c}}function fm(n){if((Tt&6)!==0)throw Error(t(327));$s();var i=zt(n,0);if((i&1)===0)return jn(n,jt()),null;var o=Ml(n,i);if(n.tag!==0&&o===2){var c=an(n);c!==0&&(i=c,o=Yu(n,c))}if(o===1)throw o=eo,as(n,0),Lr(n,i),jn(n,jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,os(n,Kn,tr),jn(n,jt()),null}function Ku(n,i){var o=Tt;Tt|=1;try{return n(i)}finally{Tt=o,Tt===0&&(Ys=jt()+500,$o&&wr())}}function ss(n){br!==null&&br.tag===0&&(Tt&6)===0&&$s();var i=Tt;Tt|=1;var o=fi.transition,c=pt;try{if(fi.transition=null,pt=1,n)return n()}finally{pt=c,fi.transition=o,Tt=i,(Tt&6)===0&&wr()}}function ju(){ni=qs.current,Gt(qs)}function as(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,vv(o)),on!==null)for(o=on.return;o!==null;){var c=o;switch(su(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&qo();break;case 3:Hs(),Gt(qn),Gt(An),xu();break;case 5:gu(c);break;case 4:Hs();break;case 13:Gt(Zt);break;case 19:Gt(Zt);break;case 10:fu(c.type._context);break;case 22:case 23:ju()}o=o.return}if(mn=n,on=n=Nr(n.current,null),En=ni=i,fn=0,eo=null,Hu=ml=rs=0,Kn=to=null,ts!==null){for(i=0;i<ts.length;i++)if(o=ts[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}o.pending=c}ts=null}return n}function dm(n,i){do{var o=on;try{if(uu(),rl.current=ll,sl){for(var c=Jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}sl=!1}if(is=0,pn=un=Jt=null,$a=!1,Ka=0,Gu.current=null,o===null||o.return===null){fn=1,eo=i,on=null;break}e:{var m=n,T=o.return,I=o,B=i;if(i=En,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var le=B,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=Op(T);if(ze!==null){ze.flags&=-257,zp(ze,T,I,m,i),ze.mode&1&&Fp(m,le,i),i=ze,B=le;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(B),i.updateQueue=$e}else We.add(B);break e}else{if((i&1)===0){Fp(m,le,i),Zu();break e}B=Error(t(426))}}else if(Yt&&I.mode&1){var nn=Op(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),zp(nn,T,I,m,i),lu(Ws(B,I));break e}}m=B=Ws(B,I),fn!==4&&(fn=2),to===null?to=[m]:to.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Ip(m,B,i);op(m,J);break e;case 1:I=B;var H=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Rr===null||!Rr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=Up(m,I,i);op(m,we);break e}}m=m.return}while(m!==null)}mm(o)}catch(Ze){i=Ze,on===o&&o!==null&&(on=o=o.return);continue}break}while(!0)}function hm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function Zu(){(fn===0||fn===3||fn===2)&&(fn=4),mn===null||(rs&268435455)===0&&(ml&268435455)===0||Lr(mn,En)}function Ml(n,i){var o=Tt;Tt|=2;var c=hm();(mn!==n||En!==i)&&(tr=null,as(n,i));do try{Gv();break}catch(d){dm(n,d)}while(!0);if(uu(),Tt=o,pl.current=c,on!==null)throw Error(t(261));return mn=null,En=0,fn}function Gv(){for(;on!==null;)pm(on)}function Hv(){for(;on!==null&&!Po();)pm(on)}function pm(n){var i=xm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?mm(n):on=i,Gu.current=null}function mm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Uv(o,i,ni),o!==null){on=o;return}}else{if(o=Fv(o,i),o!==null){o.flags&=32767,on=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);fn===0&&(fn=5)}function os(n,i,o){var c=pt,d=fi.transition;try{fi.transition=null,pt=1,Wv(n,i,o,c)}finally{fi.transition=d,pt=c}return null}function Wv(n,i,o,c){do $s();while(br!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Wn(n,m),n===mn&&(on=mn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vl||(vl=!0,_m(X,function(){return $s(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=fi.transition,fi.transition=null;var T=pt;pt=1;var I=Tt;Tt|=4,Gu.current=null,zv(n,o),sm(o,n),uv(Zc),No=!!jc,Zc=jc=null,n.current=o,kv(o),bc(),Tt=I,pt=T,fi.transition=m}else n.current=o;if(vl&&(vl=!1,br=n,xl=d),m=n.pendingLanes,m===0&&(Rr=null),Be(o.stateNode),jn(n,jt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(gl)throw gl=!1,n=Xu,Xu=null,n;return(xl&1)!==0&&n.tag!==0&&$s(),m=n.pendingLanes,(m&1)!==0?n===qu?no++:(no=0,qu=n):no=0,wr(),null}function $s(){if(br!==null){var n=Yi(xl),i=fi.transition,o=pt;try{if(fi.transition=null,pt=16>n?16:n,br===null)var c=!1;else{if(n=br,br=null,xl=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var m=Ge,T=m.child;if((Ge.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var le=I[B];for(Ge=le;Ge!==null;){var ye=Ge;switch(ye.tag){case 0:case 11:case 15:Qa(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Ge=Se;else for(;Ge!==null;){ye=Ge;var _e=ye.sibling,ze=ye.return;if(em(ye),ye===le){Ge=null;break}if(_e!==null){_e.return=ze,Ge=_e;break}Ge=ze}}}var We=m.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var nn=$e.sibling;$e.sibling=null,$e=nn}while($e!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ge=T;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Qa(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,Ge=J;break e}Ge=m.return}}var H=n.current;for(Ge=H;Ge!==null;){T=Ge;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Ge=ne;else e:for(T=H;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:hl(9,I)}}catch(Ze){en(I,I.return,Ze)}if(I===T){Ge=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Ge=we;break e}Ge=I.return}}if(Tt=d,wr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Q,n)}catch{}c=!0}return c}finally{pt=o,fi.transition=i}}return!1}function gm(n,i,o){i=Ws(o,i),i=Ip(n,i,1),n=Ar(n,i,1),i=Fn(),n!==null&&(ht(n,1,i),jn(n,i))}function en(n,i,o){if(n.tag===3)gm(n,n,o);else for(;i!==null;){if(i.tag===3){gm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Rr===null||!Rr.has(c))){n=Ws(o,n),n=Up(i,n,1),i=Ar(i,n,1),n=Fn(),i!==null&&(ht(i,1,n),jn(i,n));break}}i=i.return}}function Xv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&o,mn===n&&(En&o)===o&&(fn===4||fn===3&&(En&130023424)===En&&500>jt()-Wu?as(n,0):Hu|=o),jn(n,i)}function vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var o=Fn();n=Ji(n,i),n!==null&&(ht(n,i,o),jn(n,o))}function qv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),vm(n,o)}function Yv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),vm(n,o)}var xm;xm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||qn.current)$n=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return $n=!1,Iv(n,i,o);$n=(n.flags&131072)!==0}else $n=!1,Yt&&(i.flags&1048576)!==0&&Zh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;fl(n,i),n=i.pendingProps;var d=Fs(i,An.current);Gs(i,o),d=Mu(null,i,c,n,d,o);var m=Su();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(m=!0,Yo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,pu(i),d.updater=cl,i.stateNode=d,d._reactInternals=i,Ru(i,c,n,o),i=Nu(null,i,c,!0,m,o)):(i.tag=0,Yt&&m&&ru(i),Un(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(fl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Kv(c),n=Mi(c,n),d){case 0:i=Lu(null,i,c,n,o);break e;case 1:i=Wp(null,i,c,n,o);break e;case 11:i=kp(null,i,c,n,o);break e;case 14:i=Bp(null,i,c,Mi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),Lu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),Wp(n,i,c,d,o);case 3:e:{if(Xp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,ap(n,i),nl(i,c,null,o);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ws(Error(t(423)),i),i=qp(n,i,c,o,d);break e}else if(c!==d){d=Ws(Error(t(424)),i),i=qp(n,i,c,o,d);break e}else for(ti=Mr(i.stateNode.containerInfo.firstChild),ei=i,Yt=!0,yi=null,o=rp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ks(),c===d){i=er(n,i,o);break e}Un(n,i,c,o)}i=i.child}return i;case 5:return cp(i),n===null&&ou(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Jc(c,d)?T=null:m!==null&&Jc(c,m)&&(i.flags|=32),Hp(n,i),Un(n,i,T,o),i.child;case 6:return n===null&&ou(i),null;case 13:return Yp(n,i,o);case 4:return mu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Bs(i,null,c,o):Un(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),kp(n,i,c,d,o);case 7:return Un(n,i,i.pendingProps,o),i.child;case 8:return Un(n,i,i.pendingProps.children,o),i.child;case 12:return Un(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,kt(Qo,c._currentValue),c._currentValue=T,m!==null)if(_i(m.value,T)){if(m.children===d.children&&!qn.current){i=er(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){T=m.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Qi(-1,o&-o),B.tag=2;var le=m.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?B.next=B:(B.next=ye.next,ye.next=B),le.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),du(m.return,o,i),I.lanes|=o;break}B=B.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,I=T.alternate,I!==null&&(I.lanes|=o),du(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Un(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Gs(i,o),d=ci(d),c=c(d),i.flags|=1,Un(n,i,c,o),i.child;case 14:return c=i.type,d=Mi(c,i.pendingProps),d=Mi(c.type,d),Bp(n,i,c,d,o);case 15:return Vp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),fl(n,i),i.tag=1,Yn(c)?(n=!0,Yo(i)):n=!1,Gs(i,o),Np(i,c,d),Ru(i,c,d,o),Nu(null,i,c,!0,n,o);case 19:return Kp(n,i,o);case 22:return Gp(n,i,o)}throw Error(t(156,i.tag))};function _m(n,i){return Kr(n,i)}function $v(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,c){return new $v(n,i,o,c)}function Ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kv(n){if(typeof n=="function")return Ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===Y)return 14}return 2}function Nr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Sl(n,i,o,c,d,m){var T=2;if(c=n,typeof n=="function")Ju(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return ls(o.children,d,m,i);case S:T=8,d|=8;break;case b:return n=di(12,o,i,d|2),n.elementType=b,n.lanes=m,n;case te:return n=di(13,o,i,d),n.elementType=te,n.lanes=m,n;case ue:return n=di(19,o,i,d),n.elementType=ue,n.lanes=m,n;case j:return El(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case k:T=9;break e;case G:T=11;break e;case Y:T=14;break e;case de:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(T,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ls(n,i,o,c){return n=di(7,n,c,i),n.lanes=o,n}function El(n,i,o,c){return n=di(22,n,c,i),n.elementType=j,n.lanes=o,n.stateNode={isHidden:!1},n}function Qu(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function ef(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function jv(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function tf(n,i,o,c,d,m,T,I,B){return n=new jv(n,i,o,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(m),n}function Zv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function ym(n){if(!n)return Er;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Yn(o))return $h(n,o,i)}return i}function Mm(n,i,o,c,d,m,T,I,B){return n=tf(o,c,!0,n,d,m,T,I,B),n.context=ym(null),o=n.current,c=Fn(),d=Pr(o),m=Qi(c,d),m.callback=i??null,Ar(o,m,d),n.current.lanes=d,ht(n,d,c),jn(n,c),n}function wl(n,i,o,c){var d=i.current,m=Fn(),T=Pr(d);return o=ym(o),i.context===null?i.context=o:i.pendingContext=o,i=Qi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ar(d,i,T),n!==null&&(wi(n,d,T,m),tl(n,d,T)),T}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function nf(n,i){Sm(n,i),(n=n.alternate)&&Sm(n,i)}function Jv(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function rf(n){this._internalRoot=n}Al.prototype.render=rf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},Al.prototype.unmount=rf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){wl(null,n,null,null)}),i[$i]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<xr.length&&i!==0&&i<xr[o].priority;o++);xr.splice(o,0,n),o===0&&ch(n)}};function sf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wm(){}function Qv(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var le=Tl(T);m.call(le)}}var T=Mm(i,c,n,0,null,!1,!1,"",wm);return n._reactRootContainer=T,n[$i]=T.current,Ba(n.nodeType===8?n.parentNode:n),ss(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var le=Tl(B);I.call(le)}}var B=tf(n,0,!1,null,null,!1,!1,"",wm);return n._reactRootContainer=B,n[$i]=B.current,Ba(n.nodeType===8?n.parentNode:n),ss(function(){wl(i,B,o,c)}),B}function Rl(n,i,o,c,d){var m=o._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var I=d;d=function(){var B=Tl(T);I.call(B)}}wl(i,T,n,d)}else T=Qv(o,i,n,d,c);return Tl(T)}bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Et(i.pendingLanes);o!==0&&(Xn(i,o|1),jn(i,jt()),(Tt&6)===0&&(Ys=jt()+500,wr()))}break;case 13:ss(function(){var c=Ji(n,1);if(c!==null){var d=Fn();wi(c,n,1,d)}}),nf(n,1)}},Bt=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var o=Fn();wi(i,n,134217728,o)}nf(n,134217728)}},vi=function(n){if(n.tag===13){var i=Pr(n),o=Ji(n,i);if(o!==null){var c=Fn();wi(o,n,i,c)}nf(n,i)}},Nt=function(){return pt},xi=function(n,i){var o=pt;try{return pt=n,i()}finally{pt=o}},et=function(n,i,o){switch(i){case"input":if(Ot(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Xo(c);if(!d)throw Error(t(90));_t(c),Ot(c,d)}}}break;case"textarea":yn(n,o);break;case"select":i=o.value,i!=null&&Pt(n,!!o.multiple,i,!1)}},Ue=Ku,xe=ss;var ex={usingClientEntryPoint:!1,Events:[Ha,Is,Xo,me,Le,Ku]},io={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tx={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$r(n),n===null?null:n.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Q=bl.inject(tx),Ae=bl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex,Zn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(i))throw Error(t(200));return Zv(n,i,null,o)},Zn.createRoot=function(n,i){if(!sf(n))throw Error(t(299));var o=!1,c="",d=Em;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=tf(n,1,!1,null,null,o,!1,c,d),n[$i]=i.current,Ba(n.nodeType===8?n.parentNode:n),new rf(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=$r(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ss(n)},Zn.hydrate=function(n,i,o){if(!Cl(i))throw Error(t(200));return Rl(null,n,i,!0,o)},Zn.hydrateRoot=function(n,i,o){if(!sf(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",T=Em;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Mm(i,null,n,1,o??null,d,!1,m,T),n[$i]=i.current,Ba(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Al(i)},Zn.render=function(n,i,o){if(!Cl(i))throw Error(t(200));return Rl(null,n,i,!1,o)},Zn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Zn.unstable_batchedUpdates=Ku,Zn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,i,o,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Nm;function ux(){if(Nm)return lf.exports;Nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),lf.exports=cx(),lf.exports}var Dm;function fx(){if(Dm)return Pl;Dm=1;var s=ux();return Pl.createRoot=s.createRoot,Pl.hydrateRoot=s.hydrateRoot,Pl}var dx=fx();const hx=ix(dx);var Ui=zd();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="185",px=0,Im=1,mx=2,oc=1,gx=2,_o=3,Hr=0,Hn=1,ki=2,ur=0,pa=1,Um=2,Fm=3,Om=4,vx=5,ms=100,xx=101,_x=102,yx=103,Mx=104,Sx=200,Ex=201,wx=202,Tx=203,Yf=204,$f=205,Ax=206,Cx=207,Rx=208,bx=209,Px=210,Lx=211,Nx=212,Dx=213,Ix=214,Kf=0,jf=1,Zf=2,va=3,Jf=4,Qf=5,ed=6,td=7,Bd=0,Ux=1,Fx=2,Gi=0,V0=1,G0=2,H0=3,Vd=4,W0=5,X0=6,q0=7,Y0=300,Ms=301,xa=302,ff=303,df=304,wc=306,pc=1e3,cr=1001,nd=1002,wn=1003,Ox=1004,Ll=1005,Nn=1006,hf=1007,vs=1008,si=1009,$0=1010,K0=1011,So=1012,Gd=1013,Xi=1014,Ri=1015,dr=1016,Hd=1017,Wd=1018,Eo=1020,j0=35902,Z0=35899,J0=1021,Q0=1022,bi=1023,hr=1026,xs=1027,Xd=1028,qd=1029,Ss=1030,Yd=1031,$d=1033,lc=33776,cc=33777,uc=33778,fc=33779,id=35840,rd=35841,sd=35842,ad=35843,od=36196,ld=37492,cd=37496,ud=37488,fd=37489,mc=37490,dd=37491,hd=37808,pd=37809,md=37810,gd=37811,vd=37812,xd=37813,_d=37814,yd=37815,Md=37816,Sd=37817,Ed=37818,wd=37819,Td=37820,Ad=37821,Cd=36492,Rd=36494,bd=36495,Pd=36283,Ld=36284,gc=36285,Nd=36286,zx=3200,Dd=0,kx=1,Br="",Gn="srgb",vc="srgb-linear",xc="linear",Dt="srgb",Ks=7680,zm=519,Bx=512,Vx=513,Gx=514,Kd=515,Hx=516,Wx=517,jd=518,Xx=519,Id=35044,qx=35048,km="300 es",Vi=2e3,wo=2001;function Yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _c(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $x(){const s=_c("canvas");return s.style.display="block",s}const Bm={};function yc(...s){const e="THREE."+s.shift();console.log(e,...s)}function eg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ma(...s){const e=s.join(" ");e in Bm||(Bm[e]=!0,at(...s))}function Kx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const jx={[Kf]:jf,[Zf]:ed,[Jf]:td,[va]:Qf,[jf]:Kf,[ed]:Zf,[td]:Jf,[Qf]:va};class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=Math.PI/180,Ud=180/Math.PI;function Gr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function Zx(s,e){return(s%e+e)%e}function mf(s,e,t){return(1-t)*s+t*e}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ih=class ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;let ut=ih;class Wr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let h=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3],g=l[u+0],M=l[u+1],w=l[u+2],C=l[u+3];if(x!==C||h!==g||p!==M||v!==w){let y=h*g+p*M+v*w+x*C;y<0&&(g=-g,M=-M,w=-w,C=-C,y=-y);let _=1-f;if(y<.9995){const D=Math.acos(y),O=Math.sin(D);_=Math.sin(_*D)/O,f=Math.sin(f*D)/O,h=h*_+g*f,p=p*_+M*f,v=v*_+w*f,x=x*_+C*f}else{h=h*_+g*f,p=p*_+M*f,v=v*_+w*f,x=x*_+C*f;const D=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=D,p*=D,v*=D,x*=D}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],h=r[a+1],p=r[a+2],v=r[a+3],x=l[u],g=l[u+1],M=l[u+2],w=l[u+3];return e[t]=f*w+v*x+h*M-p*g,e[t+1]=h*w+v*g+p*x-f*M,e[t+2]=p*w+v*M+f*g-h*x,e[t+3]=v*w-f*x-h*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(a/2),x=f(l/2),g=h(r/2),M=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=g*v*x+p*M*w,this._y=p*M*x-g*v*w,this._z=p*v*w+g*M*x,this._w=p*v*x-g*M*w;break;case"YXZ":this._x=g*v*x+p*M*w,this._y=p*M*x-g*v*w,this._z=p*v*w-g*M*x,this._w=p*v*x+g*M*w;break;case"ZXY":this._x=g*v*x-p*M*w,this._y=p*M*x+g*v*w,this._z=p*v*w+g*M*x,this._w=p*v*x-g*M*w;break;case"ZYX":this._x=g*v*x-p*M*w,this._y=p*M*x+g*v*w,this._z=p*v*w-g*M*x,this._w=p*v*x+g*M*w;break;case"YZX":this._x=g*v*x+p*M*w,this._y=p*M*x+g*v*w,this._z=p*v*w-g*M*x,this._w=p*v*x-g*M*w;break;case"XZY":this._x=g*v*x-p*M*w,this._y=p*M*x-g*v*w,this._z=p*v*w+g*M*x,this._w=p*v*x+g*M*w;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=r+f+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-a)*M}else if(r>f&&r>x){const M=2*Math.sqrt(1+r-f-x);this._w=(v-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+p)/M}else if(f>x){const M=2*Math.sqrt(1+f-r-x);this._w=(l-p)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+x-r-f);this._w=(u-a)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+a*p-l*h,this._y=a*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-a*f,this._w=u*v-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rh=class rh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*r),v=2*(f*t-l*a),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*v,this.y=r+h*v+f*p-l*x,this.z=a+h*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rh.prototype.isVector3=!0;let $=rh;const gf=new $,Vm=new Wr,sh=class sh{constructor(e,t,r,a,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p)}set(e,t,r,a,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],x=r[7],g=r[2],M=r[5],w=r[8],C=a[0],y=a[3],_=a[6],D=a[1],O=a[4],R=a[7],N=a[2],P=a[5],F=a[8];return l[0]=u*C+f*D+h*N,l[3]=u*y+f*O+h*P,l[6]=u*_+f*R+h*F,l[1]=p*C+v*D+x*N,l[4]=p*y+v*O+x*P,l[7]=p*_+v*R+x*F,l[2]=g*C+M*D+w*N,l[5]=g*y+M*O+w*P,l[8]=g*_+M*R+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=v*u-f*p,g=f*h-v*l,M=p*l-u*h,w=t*x+r*g+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=x*C,e[1]=(a*p-v*r)*C,e[2]=(f*r-a*u)*C,e[3]=g*C,e[4]=(v*t-a*h)*C,e[5]=(a*l-f*t)*C,e[6]=M*C,e[7]=(r*h-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vf.makeScale(e,t)),this}rotate(e){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;let ct=sh;const vf=new ct,Gm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(a.r=fr(a.r),a.g=fr(a.g),a.b=fr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(a.r=ga(a.r),a.g=ga(a.g),a.b=ga(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Br?xc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:xc,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Mt=Jx();function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class Qx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=_c("canvas")),js.width=e.width,js.height=e.height;const a=js.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=fr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(fr(t[r]/255)*255):t[r]=fr(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(xf(a[u].image)):l.push(xf(a[u]))}else l=xf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function xf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let t_=0;const _f=new $;class Dn extends Es{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=cr,a=cr,l=Nn,u=vs,f=bi,h=si,p=Dn.DEFAULT_ANISOTROPY,v=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Gr(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_f).x}get height(){return this.source.getSize(_f).y}get depth(){return this.source.getSize(_f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Y0;Dn.DEFAULT_ANISOTROPY=1;const ah=class ah{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],M=h[5],w=h[9],C=h[2],y=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,R=(M+1)/2,N=(_+1)/2,P=(v+g)/4,F=(x+C)/4,S=(w+y)/4;return O>R&&O>N?O<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(O),a=P/r,l=F/r):R>N?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=P/a,l=S/a):N<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(N),r=F/l,a=S/l),this.set(r,a,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(x-C)/D,this.z=(g-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;let Qt=ah;class n_ extends Es{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Dn(a),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Zd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends n_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class tg extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ec=class Ec{constructor(e,t,r,a,l,u,f,h,p,v,x,g,M,w,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p,v,x,g,M,w,C,y)}set(e,t,r,a,l,u,f,h,p,v,x,g,M,w,C,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=x,_[14]=g,_[3]=M,_[7]=w,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Zs.setFromMatrixColumn(e,0).length(),l=1/Zs.setFromMatrixColumn(e,1).length(),u=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*x,w=f*v,C=f*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=M+w*p,t[5]=g-C*p,t[9]=-f*h,t[2]=C-g*p,t[6]=w+M*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,M=h*x,w=p*v,C=p*x;t[0]=g+C*f,t[4]=w*f-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-f,t[2]=M*f-w,t[6]=C+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,M=h*x,w=p*v,C=p*x;t[0]=g-C*f,t[4]=-u*x,t[8]=w+M*f,t[1]=M+w*f,t[5]=u*v,t[9]=C-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,M=u*x,w=f*v,C=f*x;t[0]=h*v,t[4]=w*p-M,t[8]=g*p+C,t[1]=h*x,t[5]=C*p+g,t[9]=M*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,M=u*p,w=f*h,C=f*p;t[0]=h*v,t[4]=C-g*x,t[8]=w*x+M,t[1]=x,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*x+w,t[10]=g-C*x}else if(e.order==="XZY"){const g=u*h,M=u*p,w=f*h,C=f*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+C,t[5]=u*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=f*v,t[10]=C*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,s_)}lookAt(e,t,r){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ir.crossVectors(r,ii),Ir.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ir.crossVectors(r,ii)),Ir.normalize(),Nl.crossVectors(ii,Ir),a[0]=Ir.x,a[4]=Nl.x,a[8]=ii.x,a[1]=Ir.y,a[5]=Nl.y,a[9]=ii.y,a[2]=Ir.z,a[6]=Nl.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],x=r[5],g=r[9],M=r[13],w=r[2],C=r[6],y=r[10],_=r[14],D=r[3],O=r[7],R=r[11],N=r[15],P=a[0],F=a[4],S=a[8],b=a[12],z=a[1],k=a[5],G=a[9],te=a[13],ue=a[2],Y=a[6],de=a[10],j=a[14],q=a[3],fe=a[7],ce=a[11],U=a[15];return l[0]=u*P+f*z+h*ue+p*q,l[4]=u*F+f*k+h*Y+p*fe,l[8]=u*S+f*G+h*de+p*ce,l[12]=u*b+f*te+h*j+p*U,l[1]=v*P+x*z+g*ue+M*q,l[5]=v*F+x*k+g*Y+M*fe,l[9]=v*S+x*G+g*de+M*ce,l[13]=v*b+x*te+g*j+M*U,l[2]=w*P+C*z+y*ue+_*q,l[6]=w*F+C*k+y*Y+_*fe,l[10]=w*S+C*G+y*de+_*ce,l[14]=w*b+C*te+y*j+_*U,l[3]=D*P+O*z+R*ue+N*q,l[7]=D*F+O*k+R*Y+N*fe,l[11]=D*S+O*G+R*de+N*ce,l[15]=D*b+O*te+R*j+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],M=e[14],w=e[3],C=e[7],y=e[11],_=e[15],D=h*M-p*g,O=f*M-p*x,R=f*g-h*x,N=u*M-p*v,P=u*g-h*v,F=u*x-f*v;return t*(C*D-y*O+_*R)-r*(w*D-y*N+_*P)+a*(w*O-C*N+_*F)-l*(w*R-C*P+y*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-r*(l*v-f*h)+a*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],M=e[11],w=e[12],C=e[13],y=e[14],_=e[15],D=t*f-r*u,O=t*h-a*u,R=t*p-l*u,N=r*h-a*f,P=r*p-l*f,F=a*p-l*h,S=v*C-x*w,b=v*y-g*w,z=v*_-M*w,k=x*y-g*C,G=x*_-M*C,te=g*_-M*y,ue=D*te-O*G+R*k+N*z-P*b+F*S;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ue;return e[0]=(f*te-h*G+p*k)*Y,e[1]=(a*G-r*te-l*k)*Y,e[2]=(C*F-y*P+_*N)*Y,e[3]=(g*P-x*F-M*N)*Y,e[4]=(h*z-u*te-p*b)*Y,e[5]=(t*te-a*z+l*b)*Y,e[6]=(y*R-w*F-_*O)*Y,e[7]=(v*F-g*R+M*O)*Y,e[8]=(u*G-f*z+p*S)*Y,e[9]=(r*z-t*G-l*S)*Y,e[10]=(w*P-C*R+_*D)*Y,e[11]=(x*R-v*P-M*D)*Y,e[12]=(f*b-u*k-h*S)*Y,e[13]=(t*k-r*b+a*S)*Y,e[14]=(C*O-w*N-y*D)*Y,e[15]=(v*N-x*O+g*D)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+r,v*h-a*u,0,p*h-a*f,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,x=f+f,g=l*p,M=l*v,w=l*x,C=u*v,y=u*x,_=f*x,D=h*p,O=h*v,R=h*x,N=r.x,P=r.y,F=r.z;return a[0]=(1-(C+_))*N,a[1]=(M+R)*N,a[2]=(w-O)*N,a[3]=0,a[4]=(M-R)*P,a[5]=(1-(g+_))*P,a[6]=(y+D)*P,a[7]=0,a[8]=(w+O)*F,a[9]=(y-D)*F,a[10]=(1-(g+C))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Zs.set(a[0],a[1],a[2]).length();const f=Zs.set(a[4],a[5],a[6]).length(),h=Zs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Ti.copy(this);const p=1/u,v=1/f,x=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,t.setFromRotationMatrix(Ti),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,a,l,u,f=Vi,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(r-a),g=(t+e)/(t-e),M=(r+a)/(r-a);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(f===Vi)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===wo)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=Vi,h=!1){const p=this.elements,v=2/(t-e),x=2/(r-a),g=-(t+e)/(t-e),M=-(r+a)/(r-a);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(f===Vi)w=-2/(u-l),C=-(u+l)/(u-l);else if(f===wo)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Ec.prototype.isMatrix4=!0;let It=Ec;const Zs=new $,Ti=new It,r_=new $(0,0,0),s_=new $(1,1,1),Ir=new $,Nl=new $,ii=new $,Wm=new It,Xm=new Wr;class pr{constructor(e=0,t=0,r=0,a=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],v=a[9],x=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a_=0;const qm=new $,Js=new Wr,nr=new It,Dl=new $,so=new $,o_=new $,l_=new Wr,Ym=new $(1,0,0),$m=new $(0,1,0),Km=new $(0,0,1),jm={type:"added"},c_={type:"removed"},Qs={type:"childadded",child:null},yf={type:"childremoved",child:null};class _n extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new $,t=new pr,r=new Wr,a=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new ct}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(so,Dl,this.up):nr.lookAt(Dl,so,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),Js.setFromRotationMatrix(nr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c_),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,o_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),g=u(e.skeletons),M=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class or extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class Mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&g>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new or;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Sf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Mt.workingColorSpace){if(e=Zx(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Sf(u,l,e+1/3),this.g=Sf(u,l,e),this.b=Sf(u,l,e-1/3)}return Mt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gn){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const r=ig[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Mt.workingToColorSpace(Ln.copy(this),e),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,a=Ln.g,l=Ln.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=v<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Gn){Mt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,a=Ln.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Il);const r=mf(Ur.h,Il.h,t),a=mf(Ur.s,Il.s,t),l=mf(Ur.l,Il.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new gt;gt.NAMES=ig;class Jd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=r}clone(){return new Jd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f_ extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new $,ir=new $,Ef=new $,rr=new $,ea=new $,ta=new $,Zm=new $,wf=new $,Tf=new $,Af=new $,Cf=new Qt,Rf=new Qt,bf=new Qt;class mi{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Ai.subVectors(e,t),a.cross(Ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Ai.subVectors(a,t),ir.subVectors(r,t),Ef.subVectors(e,t);const u=Ai.dot(Ai),f=Ai.dot(ir),h=Ai.dot(Ef),p=ir.dot(ir),v=ir.dot(Ef),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,M=(p*h-f*v)*g,w=(u*v-f*h)*g;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,a,l,u,f,h){return this.getBarycoord(e,t,r,a,rr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,rr.x),h.addScaledVector(u,rr.y),h.addScaledVector(f,rr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return Cf.setScalar(0),Rf.setScalar(0),bf.setScalar(0),Cf.fromBufferAttribute(e,t),Rf.fromBufferAttribute(e,r),bf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Cf,l.x),u.addScaledVector(Rf,l.y),u.addScaledVector(bf,l.z),u}static isFrontFacing(e,t,r,a){return Ai.subVectors(r,t),ir.subVectors(e,t),Ai.cross(ir).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ai.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;ea.subVectors(a,r),ta.subVectors(l,r),wf.subVectors(e,r);const h=ea.dot(wf),p=ta.dot(wf);if(h<=0&&p<=0)return t.copy(r);Tf.subVectors(e,a);const v=ea.dot(Tf),x=ta.dot(Tf);if(v>=0&&x<=v)return t.copy(a);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ea,u);Af.subVectors(e,l);const M=ea.dot(Af),w=ta.dot(Af);if(w>=0&&M<=w)return t.copy(l);const C=M*p-h*w;if(C<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(ta,f);const y=v*w-M*x;if(y<=0&&x-v>=0&&M-w>=0)return Zm.subVectors(l,a),f=(x-v)/(x-v+(M-w)),t.copy(a).addScaledVector(Zm,f);const _=1/(y+C+g);return u=C*_,f=g*_,t.copy(r).addScaledVector(ea,u).addScaledVector(ta,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ws{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ci):Ci.fromBufferAttribute(l,u),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Fl.subVectors(this.max,ao),na.subVectors(e.a,ao),ia.subVectors(e.b,ao),ra.subVectors(e.c,ao),Fr.subVectors(ia,na),Or.subVectors(ra,ia),cs.subVectors(na,ra);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-cs.z,cs.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,cs.z,0,-cs.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-cs.y,cs.x,0];return!Pf(t,na,ia,ra,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Pf(t,na,ia,ra,Fl))?!1:(Ol.crossVectors(Fr,Or),t=[Ol.x,Ol.y,Ol.z],Pf(t,na,ia,ra,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new $,new $,new $,new $,new $,new $,new $,new $],Ci=new $,Ul=new ws,na=new $,ia=new $,ra=new $,Fr=new $,Or=new $,cs=new $,ao=new $,Fl=new $,Ol=new $,us=new $;function Pf(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){us.fromArray(s,l);const f=a.x*Math.abs(us.x)+a.y*Math.abs(us.y)+a.z*Math.abs(us.z),h=e.dot(us),p=t.dot(us),v=r.dot(us);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const ln=new $,zl=new ut;let d_=0;class gi extends Es{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Id,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Id&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rg extends gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class sg extends gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class sn extends gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const h_=new ws,oo=new $,Lf=new $;class Ao{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):h_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(oo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Lf)),this.expandByPoint(oo.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p_=0;const hi=new It,Nf=new _n,sa=new $,ri=new ws,lo=new ws,vn=new $;class Jn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?sg:rg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,r){return hi.makeTranslation(e,t,r),this.applyMatrix4(hi),this}scale(e,t,r){return hi.makeScale(e,t,r),this.applyMatrix4(hi),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new sn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];lo.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ri.min,lo.min),ri.expandByPoint(vn),vn.addVectors(ri.max,lo.max),ri.expandByPoint(vn)):(ri.expandByPoint(lo.min),ri.expandByPoint(lo.max))}ri.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)vn.fromBufferAttribute(f,p),h&&(sa.fromBufferAttribute(e,p),vn.add(sa)),a=Math.max(a,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let S=0;S<r.count;S++)f[S]=new $,h[S]=new $;const p=new $,v=new $,x=new $,g=new ut,M=new ut,w=new ut,C=new $,y=new $;function _(S,b,z){p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,b),x.fromBufferAttribute(r,z),g.fromBufferAttribute(l,S),M.fromBufferAttribute(l,b),w.fromBufferAttribute(l,z),v.sub(p),x.sub(p),M.sub(g),w.sub(g);const k=1/(M.x*w.y-w.x*M.y);isFinite(k)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(k),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(k),f[S].add(C),f[b].add(C),f[z].add(C),h[S].add(y),h[b].add(y),h[z].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let S=0,b=D.length;S<b;++S){const z=D[S],k=z.start,G=z.count;for(let te=k,ue=k+G;te<ue;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const O=new $,R=new $,N=new $,P=new $;function F(S){N.fromBufferAttribute(a,S),P.copy(N);const b=f[S];O.copy(b),O.sub(N.multiplyScalar(N.dot(b))).normalize(),R.crossVectors(P,b);const k=R.dot(h[S])<0?-1:1;u.setXYZW(S,O.x,O.y,O.z,k)}for(let S=0,b=D.length;S<b;++S){const z=D[S],k=z.start,G=z.count;for(let te=k,ue=k+G;te<ue;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const a=new $,l=new $,u=new $,f=new $,h=new $,p=new $,v=new $,x=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(a,l),v.cross(x),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),x.subVectors(a,l),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,x=f.normalized,g=new p.constructor(h.length*v);let M=0,w=0;for(let C=0,y=h.length;C<y;C++){f.isInterleavedBufferAttribute?M=h[C]*f.data.stride+f.offset:M=h[C]*v;for(let _=0;_<v;_++)g[w++]=p[M++]}return new gi(g,v,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,x=p.length;v<x;v++){const g=p[v],M=e(g,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Id,this.updateRanges=[],this.version=0,this.uuid=Gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new $;class Mc{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let g_=0;class Ma extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=pa,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=$f,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yf&&(r.blendSrc=this.blendSrc),this.blendDst!==$f&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ag extends Ma{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let aa;const co=new $,oa=new $,la=new $,ca=new ut,uo=new ut,og=new It,kl=new $,fo=new $,Bl=new $,Jm=new ut,Df=new ut,Qm=new ut;class v_ extends _n{constructor(e=new ag){if(super(),this.isSprite=!0,this.type="Sprite",aa===void 0){aa=new Jn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new m_(t,5);aa.setIndex([0,1,2,0,2,3]),aa.setAttribute("position",new Mc(r,3,0,!1)),aa.setAttribute("uv",new Mc(r,2,3,!1))}this.geometry=aa,this.material=e,this.center=new ut(.5,.5),this.count=1}raycast(e,t){e.camera===null&&wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oa.setFromMatrixScale(this.matrixWorld),og.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),la.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oa.multiplyScalar(-la.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const u=this.center;Vl(kl.set(-.5,-.5,0),la,u,oa,a,l),Vl(fo.set(.5,-.5,0),la,u,oa,a,l),Vl(Bl.set(.5,.5,0),la,u,oa,a,l),Jm.set(0,0),Df.set(1,0),Qm.set(1,1);let f=e.ray.intersectTriangle(kl,fo,Bl,!1,co);if(f===null&&(Vl(fo.set(-.5,.5,0),la,u,oa,a,l),Df.set(0,1),f=e.ray.intersectTriangle(kl,Bl,fo,!1,co),f===null))return;const h=e.ray.origin.distanceTo(co);h<e.near||h>e.far||t.push({distance:h,point:co.clone(),uv:mi.getInterpolation(co,kl,fo,Bl,Jm,Df,Qm,new ut),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vl(s,e,t,r,a,l){ca.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(uo.x=l*ca.x-a*ca.y,uo.y=a*ca.x+l*ca.y):uo.copy(ca),s.copy(e),s.x+=uo.x,s.y+=uo.y,s.applyMatrix4(og)}const ar=new $,If=new $,Gl=new $,zr=new $,Uf=new $,Hl=new $,Ff=new $;class x_{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){If.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(If);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Gl),f=zr.dot(this.direction),h=-zr.dot(Gl),p=zr.lengthSq(),v=Math.abs(1-u*u);let x,g,M,w;if(v>0)if(x=u*h-f,g=u*f-h,w=l*v,x>=0)if(g>=-w)if(g<=w){const C=1/v;x*=C,g*=C,M=x*(x+u*g+2*f)+g*(u*x+g+2*h)+p}else g=l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+p;else g<=-w?(x=Math.max(0,-(-u*l+f)),g=x>0?-l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+p):g<=w?(x=0,g=Math.min(Math.max(-l,-h),l),M=g*(g+2*h)+p):(x=Math.max(0,-(u*l+f)),g=x>0?l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+p);else g=u>0?-l:l,x=Math.max(0,-(u*g+f)),M=-x*x+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(If).addScaledVector(Gl,g),M}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),a=ar.dot(ar)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,a,l){Uf.subVectors(t,e),Hl.subVectors(r,e),Ff.crossVectors(Uf,Hl);let u=this.direction.dot(Ff),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;zr.subVectors(this.origin,e);const h=f*this.direction.dot(Hl.crossVectors(zr,Hl));if(h<0)return null;const p=f*this.direction.dot(Uf.cross(zr));if(p<0||h+p>u)return null;const v=-f*zr.dot(Ff);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e0=new It,fs=new x_,Wl=new Ao,t0=new $,Xl=new $,ql=new $,Yl=new $,Of=new $,$l=new $,n0=new $,Kl=new $;class yt extends _n{constructor(e=new Jn,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){$l.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],x=l[h];v!==0&&(Of.fromBufferAttribute(x,e),u?$l.addScaledVector(Of,v):$l.addScaledVector(Of.sub(t),v))}t.add($l)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(Wl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Wl,t0)===null||fs.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(e0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const y=g[w],_=u[y.materialIndex],D=Math.max(y.start,M.start),O=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,N=O;R<N;R+=3){const P=f.getX(R),F=f.getX(R+1),S=f.getX(R+2);a=jl(this,_,e,r,p,v,x,P,F,S),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let y=w,_=C;y<_;y+=3){const D=f.getX(y),O=f.getX(y+1),R=f.getX(y+2);a=jl(this,u,e,r,p,v,x,D,O,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const y=g[w],_=u[y.materialIndex],D=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,N=O;R<N;R+=3){const P=R,F=R+1,S=R+2;a=jl(this,_,e,r,p,v,x,P,F,S),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=w,_=C;y<_;y+=3){const D=y,O=y+1,R=y+2;a=jl(this,u,e,r,p,v,x,D,O,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function __(s,e,t,r,a,l,u,f){let h;if(e.side===Hn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===Hr,f),h===null)return null;Kl.copy(f),Kl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:s}}function jl(s,e,t,r,a,l,u,f,h,p){s.getVertexPosition(f,Xl),s.getVertexPosition(h,ql),s.getVertexPosition(p,Yl);const v=__(s,e,t,r,Xl,ql,Yl,n0);if(v){const x=new $;mi.getBarycoord(n0,Xl,ql,Yl,x),a&&(v.uv=mi.getInterpolatedAttribute(a,f,h,p,x,new ut)),l&&(v.uv1=mi.getInterpolatedAttribute(l,f,h,p,x,new ut)),u&&(v.normal=mi.getInterpolatedAttribute(u,f,h,p,x,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new $,materialIndex:0};mi.getNormal(Xl,ql,Yl,g.normal),v.face=g,v.barycoord=x}return v}class lg extends Dn{constructor(e=null,t=1,r=1,a,l,u,f,h,p=wn,v=wn,x,g){super(null,u,f,h,p,v,a,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends gi{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ua=new It,r0=new It,Zl=[],s0=new ws,y_=new It,ho=new yt,po=new Ao;class hs extends yt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new i0(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ua),s0.copy(e.boundingBox).applyMatrix4(ua),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ao),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ua),po.copy(e.boundingSphere).applyMatrix4(ua),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let f=0;f<r.length;f++)r[f]=a[u+f]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(r),e.ray.intersectsSphere(po)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ua),r0.multiplyMatrices(r,ua),ho.matrixWorld=r0,ho.raycast(e,Zl);for(let u=0,f=Zl.length;u<f;u++){const h=Zl[u];h.instanceId=l,h.object=this,t.push(h)}Zl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new i0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new lg(new Float32Array(a*this.count),a,this.count,Xd,Ri));const l=this.morphTexture.source.data.data;let u=0;for(let p=0;p<r.length;p++)u+=r[p];const f=this.geometry.morphTargetsRelative?1:1-u,h=a*e;return l[h]=f,l.set(r,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zf=new $,M_=new $,S_=new ct;class ps{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=zf.subVectors(r,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(zf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||S_.getNormalMatrix(e),a=this.coplanarPoint(zf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ao,E_=new ut(.5,.5),Jl=new $;class Qd{constructor(e=new ps,t=new ps,r=new ps,a=new ps,l=new ps,u=new ps){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],M=l[7],w=l[8],C=l[9],y=l[10],_=l[11],D=l[12],O=l[13],R=l[14],N=l[15];if(a[0].setComponents(p-u,M-v,_-w,N-D).normalize(),a[1].setComponents(p+u,M+v,_+w,N+D).normalize(),a[2].setComponents(p+f,M+x,_+C,N+O).normalize(),a[3].setComponents(p-f,M-x,_-C,N-O).normalize(),r)a[4].setComponents(h,g,y,R).normalize(),a[5].setComponents(p-h,M-g,_-y,N-R).normalize();else if(a[4].setComponents(p-h,M-g,_-y,N-R).normalize(),t===Vi)a[5].setComponents(p+h,M+g,_+y,N+R).normalize();else if(t===wo)a[5].setComponents(h,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=E_.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Jl.x=a.normal.x>0?e.max.x:e.min.x,Jl.y=a.normal.y>0?e.max.y:e.min.y,Jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cg extends Dn{constructor(e=[],t=Ms,r,a,l,u,f,h,p,v){super(e,t,r,a,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends Dn{constructor(e,t,r,a,l,u,f,h,p){super(e,t,r,a,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _a extends Dn{constructor(e,t,r=Xi,a,l,u,f=wn,h=wn,p,v=hr,x=1){if(v!==hr&&v!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class w_ extends _a{constructor(e,t=Xi,r=Ms,a,l,u=wn,f=wn,h,p=hr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,a,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ug extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cn extends Jn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],x=[];let g=0,M=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,a,u,2),w("x","z","y",1,-1,e,r,-t,a,u,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(x,2));function w(C,y,_,D,O,R,N,P,F,S,b){const z=R/F,k=N/S,G=R/2,te=N/2,ue=P/2,Y=F+1,de=S+1;let j=0,q=0;const fe=new $;for(let ce=0;ce<de;ce++){const U=ce*k-te;for(let Z=0;Z<Y;Z++){const Ie=Z*z-G;fe[C]=Ie*D,fe[y]=U*O,fe[_]=ue,p.push(fe.x,fe.y,fe.z),fe[C]=0,fe[y]=0,fe[_]=P>0?1:-1,v.push(fe.x,fe.y,fe.z),x.push(Z/F),x.push(1-ce/S),j+=1}}for(let ce=0;ce<S;ce++)for(let U=0;U<F;U++){const Z=g+U+Y*ce,Ie=g+U+Y*(ce+1),Xe=g+(U+1)+Y*(ce+1),Ve=g+(U+1)+Y*ce;h.push(Z,Ie,Ve),h.push(Ie,Xe,Ve),q+=6}f.addGroup(M,q,b),M+=q,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sc extends Jn{constructor(e=1,t=1,r=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:a,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],p=[],v=t/2,x=Math.PI/2*e,g=t,M=2*x+g,w=r*2+l,C=a+1,y=new $,_=new $;for(let D=0;D<=w;D++){let O=0,R=0,N=0,P=0;if(D<=r){const b=D/r,z=b*Math.PI/2;R=-v-e*Math.cos(z),N=e*Math.sin(z),P=-e*Math.cos(z),O=b*x}else if(D<=r+l){const b=(D-r)/l;R=-v+b*t,N=e,P=0,O=x+b*g}else{const b=(D-r-l)/r,z=b*Math.PI/2;R=v+e*Math.sin(z),N=e*Math.cos(z),P=e*Math.sin(z),O=x+g+b*x}const F=Math.max(0,Math.min(1,O/M));let S=0;D===0?S=.5/a:D===w&&(S=-.5/a);for(let b=0;b<=a;b++){const z=b/a,k=z*Math.PI*2,G=Math.sin(k),te=Math.cos(k);_.x=-N*te,_.y=R,_.z=N*G,f.push(_.x,_.y,_.z),y.set(-N*te,P,N*G),y.normalize(),h.push(y.x,y.y,y.z),p.push(z+S,F)}if(D>0){const b=(D-1)*C;for(let z=0;z<a;z++){const k=b+z,G=b+z+1,te=D*C+z,ue=D*C+z+1;u.push(k,G,te),u.push(G,ue,te)}}}this.setIndex(u),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Mo extends Jn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],f=[],h=[],p=new $,v=new ut;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let x=0,g=3;x<=t;x++,g+=3){const M=r+x/t*a;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),f.push(0,0,1),v.x=(u[g]/e+1)/2,v.y=(u[g+1]/e+1)/2,h.push(v.x,v.y)}for(let x=1;x<=t;x++)l.push(x,x+1,0);this.setIndex(l),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class To extends Jn{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],x=[],g=[],M=[];let w=0;const C=[],y=r/2;let _=0;D(),u===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(M,2));function D(){const R=new $,N=new $;let P=0;const F=(t-e)/r;for(let S=0;S<=l;S++){const b=[],z=S/l,k=z*(t-e)+e;for(let G=0;G<=a;G++){const te=G/a,ue=te*h+f,Y=Math.sin(ue),de=Math.cos(ue);N.x=k*Y,N.y=-z*r+y,N.z=k*de,x.push(N.x,N.y,N.z),R.set(Y,F,de).normalize(),g.push(R.x,R.y,R.z),M.push(te,1-z),b.push(w++)}C.push(b)}for(let S=0;S<a;S++)for(let b=0;b<l;b++){const z=C[b][S],k=C[b+1][S],G=C[b+1][S+1],te=C[b][S+1];(e>0||b!==0)&&(v.push(z,k,te),P+=3),(t>0||b!==l-1)&&(v.push(k,G,te),P+=3)}p.addGroup(_,P,0),_+=P}function O(R){const N=w,P=new ut,F=new $;let S=0;const b=R===!0?e:t,z=R===!0?1:-1;for(let G=1;G<=a;G++)x.push(0,y*z,0),g.push(0,z,0),M.push(.5,.5),w++;const k=w;for(let G=0;G<=a;G++){const ue=G/a*h+f,Y=Math.cos(ue),de=Math.sin(ue);F.x=b*de,F.y=y*z,F.z=b*Y,x.push(F.x,F.y,F.z),g.push(0,z,0),P.x=Y*.5+.5,P.y=de*.5*z+.5,M.push(P.x,P.y),w++}for(let G=0;G<a;G++){const te=N+G,ue=k+G;R===!0?v.push(ue,ue+1,te):v.push(ue+1,ue,te),S+=3}p.addGroup(_,S,R===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _s extends Jn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,v=h+1,x=e/f,g=t/h,M=[],w=[],C=[],y=[];for(let _=0;_<v;_++){const D=_*g-u;for(let O=0;O<p;O++){const R=O*x-l;w.push(R,-D,0),C.push(0,0,1),y.push(O/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const O=D+p*_,R=D+p*(_+1),N=D+1+p*(_+1),P=D+1+p*_;M.push(O,R,P),M.push(R,N,P)}this.setIndex(M),this.setAttribute("position",new sn(w,3)),this.setAttribute("normal",new sn(C,3)),this.setAttribute("uv",new sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}class ys extends Jn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],x=new $,g=new $,M=[],w=[],C=[],y=[];for(let _=0;_<=r;_++){const D=[],O=_/r,R=u+O*f,N=e*Math.cos(R),P=Math.sqrt(e*e-N*N);let F=0;_===0&&u===0?F=.5/t:_===r&&h===Math.PI&&(F=-.5/t);for(let S=0;S<=t;S++){const b=S/t,z=a+b*l;x.x=-P*Math.cos(z),x.y=N,x.z=P*Math.sin(z),w.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),y.push(b+F,1-O),D.push(p++)}v.push(D)}for(let _=0;_<r;_++)for(let D=0;D<t;D++){const O=v[_][D+1],R=v[_][D],N=v[_+1][D],P=v[_+1][D+1];(_!==0||u>0)&&M.push(O,R,P),(_!==r-1||h<Math.PI)&&M.push(R,N,P)}this.setIndex(M),this.setAttribute("position",new sn(w,3)),this.setAttribute("normal",new sn(C,3)),this.setAttribute("uv",new sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ya(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(a0(a))a.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(a0(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function zn(s){const e={};for(let t=0;t<s.length;t++){const r=ya(s[t]);for(const a in r)e[a]=r[a]}return e}function a0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function T_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const A_={clone:ya,merge:zn};var C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=T_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(a.value);break;case"v2":this.uniforms[r].value=new ut().fromArray(a.value);break;case"v3":this.uniforms[r].value=new $().fromArray(a.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(a.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(a.value);break;case"m4":this.uniforms[r].value=new It().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class b_ extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bn extends Ma{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class P_ extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L_ extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dg extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class N_ extends dg{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kf=new It,o0=new $,l0=new $;class D_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),t.position.copy(o0),l0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l0),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new $,ec=new Wr,Fi=new $;class hg extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ql,ec,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kr=new $,c0=new ut,u0=new ut;class pi extends hg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,c0,u0),t.subVectors(u0,c0)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pf*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class eh extends hg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class I_ extends D_{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U_ extends dg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new I_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fa=-90,da=1;class F_ extends _n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pi(fa,da,e,t);a.layers=this.layers,this.add(a);const l=new pi(fa,da,e,t);l.layers=this.layers,this.add(l);const u=new pi(fa,da,e,t);u.layers=this.layers,this.add(u);const f=new pi(fa,da,e,t);f.layers=this.layers,this.add(f);const h=new pi(fa,da,e,t);h.layers=this.layers,this.add(h);const p=new pi(fa,da,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===wo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class O_ extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const oh=class oh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};oh.prototype.isMatrix2=!0;let f0=oh;function d0(s,e,t,r){const a=z_(r);switch(t){case J0:return s*e;case Xd:return s*e/a.components*a.byteLength;case qd:return s*e/a.components*a.byteLength;case Ss:return s*e*2/a.components*a.byteLength;case Yd:return s*e*2/a.components*a.byteLength;case Q0:return s*e*3/a.components*a.byteLength;case bi:return s*e*4/a.components*a.byteLength;case $d:return s*e*4/a.components*a.byteLength;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:case ad:return Math.max(s,16)*Math.max(e,8)/4;case id:case sd:return Math.max(s,8)*Math.max(e,8)/2;case od:case ld:case ud:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cd:case mc:case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cd:case Rd:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pd:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*8;case gc:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z_(s){switch(s){case si:case $0:return{byteLength:1,components:1};case So:case K0:case dr:return{byteLength:2,components:1};case Hd:case Wd:return{byteLength:2,components:4};case Xi:case Gd:case Ri:return{byteLength:4,components:1};case j0:case Z0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function k_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,x=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const v=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,v);else{x.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<x.length;M++){const w=x[g],C=x[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,w=x.length;M<w;M++){const C=x[M];s.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
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
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
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
#endif`,ey=`#ifdef USE_BUMPMAP
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cy=`#define PI 3.141592653589793
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
} // validated`,uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,my=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,zy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,ky=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,By=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jy=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`#ifdef USE_MORPHTARGETS
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
#endif`,iM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cM=`#ifdef USE_NORMALMAP
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
#endif`,uM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bM=`#ifdef USE_SKINNING
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
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
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
}`,YM=`#if DEPTH_PACKING == 3200
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
}`,$M=`#define DISTANCE
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
}`,KM=`#define DISTANCE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
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
}`,QM=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,rS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,cS=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,uS=`#define STANDARD
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
}`,fS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,dS=`#define TOON
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
}`,hS=`#define TOON
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,xS=`uniform float rotation;
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
}`,_S=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:B_,alphahash_pars_fragment:V_,alphamap_fragment:G_,alphamap_pars_fragment:H_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:$_,batching_vertex:K_,begin_vertex:j_,beginnormal_vertex:Z_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:ey,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ny,clipping_planes_pars_vertex:iy,clipping_planes_vertex:ry,color_fragment:sy,color_pars_fragment:ay,color_pars_vertex:oy,color_vertex:ly,common:cy,cube_uv_reflection_fragment:uy,defaultnormal_vertex:fy,displacementmap_pars_vertex:dy,displacementmap_vertex:hy,emissivemap_fragment:py,emissivemap_pars_fragment:my,colorspace_fragment:gy,colorspace_pars_fragment:vy,envmap_fragment:xy,envmap_common_pars_fragment:_y,envmap_pars_fragment:yy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Ny,envmap_vertex:Sy,fog_vertex:Ey,fog_pars_vertex:wy,fog_fragment:Ty,fog_pars_fragment:Ay,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Ry,lights_lambert_fragment:by,lights_lambert_pars_fragment:Py,lights_pars_begin:Ly,lights_toon_fragment:Dy,lights_toon_pars_fragment:Iy,lights_phong_fragment:Uy,lights_phong_pars_fragment:Fy,lights_physical_fragment:Oy,lights_physical_pars_fragment:zy,lights_fragment_begin:ky,lights_fragment_maps:By,lights_fragment_end:Vy,lightprobes_pars_fragment:Gy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:qy,map_fragment:Yy,map_pars_fragment:$y,map_particle_fragment:Ky,map_particle_pars_fragment:jy,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:Qy,morphcolor_vertex:eM,morphnormal_vertex:tM,morphtarget_pars_vertex:nM,morphtarget_vertex:iM,normal_fragment_begin:rM,normal_fragment_maps:sM,normal_pars_fragment:aM,normal_pars_vertex:oM,normal_vertex:lM,normalmap_pars_fragment:cM,clearcoat_normal_fragment_begin:uM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:hM,opaque_fragment:pM,packing:mM,premultiplied_alpha_fragment:gM,project_vertex:vM,dithering_fragment:xM,dithering_pars_fragment:_M,roughnessmap_fragment:yM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:EM,shadowmap_vertex:wM,shadowmask_pars_fragment:TM,skinbase_vertex:AM,skinning_pars_vertex:CM,skinning_vertex:RM,skinnormal_vertex:bM,specularmap_fragment:PM,specularmap_pars_fragment:LM,tonemapping_fragment:NM,tonemapping_pars_fragment:DM,transmission_fragment:IM,transmission_pars_fragment:UM,uv_pars_fragment:FM,uv_pars_vertex:OM,uv_vertex:zM,worldpos_vertex:kM,background_vert:BM,background_frag:VM,backgroundCube_vert:GM,backgroundCube_frag:HM,cube_vert:WM,cube_frag:XM,depth_vert:qM,depth_frag:YM,distance_vert:$M,distance_frag:KM,equirect_vert:jM,equirect_frag:ZM,linedashed_vert:JM,linedashed_frag:QM,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:rS,meshmatcap_frag:sS,meshnormal_vert:aS,meshnormal_frag:oS,meshphong_vert:lS,meshphong_frag:cS,meshphysical_vert:uS,meshphysical_frag:fS,meshtoon_vert:dS,meshtoon_frag:hS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:vS,sprite_vert:xS,sprite_frag:_S},Fe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:zn([Fe.lights,Fe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const tc={r:0,b:0,g:0},yS=new It,mg=new ct;mg.set(-1,0,0,0,1,0,0,0,1);function MS(s,e,t,r,a,l){const u=new gt(0);let f=a===!0?0:1,h,p,v=null,x=0,g=null;function M(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const R=D.backgroundBlurriness>0;O=e.get(O,R)}return O}function w(D){let O=!1;const R=M(D);R===null?y(u,f):R&&R.isColor&&(y(R,1),O=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(D,O){const R=M(O);R&&(R.isCubeTexture||R.mapping===wc)?(p===void 0&&(p=new yt(new cn(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:ya(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(mg),p.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Dt,(v!==R||x!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new yt(new _s(2,2),new qi({name:"BackgroundMaterial",uniforms:ya(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,O){D.getRGB(tc,fg(s)),t.buffers.color.setClear(tc.r,tc.g,tc.b,O,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,O=1){u.set(D),f=O,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:w,addToRenderList:C,dispose:_}}function SS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function f(k,G,te,ue,Y){let de=!1;const j=x(k,ue,te,G);l!==j&&(l=j,p(l.object)),de=M(k,ue,te,Y),de&&w(k,ue,te,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(k,G,te,ue),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function x(k,G,te,ue){const Y=ue.wireframe===!0;let de=r[G.id];de===void 0&&(de={},r[G.id]=de);const j=k.isInstancedMesh===!0?k.id:0;let q=de[j];q===void 0&&(q={},de[j]=q);let fe=q[te.id];fe===void 0&&(fe={},q[te.id]=fe);let ce=fe[Y];return ce===void 0&&(ce=g(h()),fe[Y]=ce),ce}function g(k){const G=[],te=[],ue=[];for(let Y=0;Y<t;Y++)G[Y]=0,te[Y]=0,ue[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:ue,object:k,attributes:{},index:null}}function M(k,G,te,ue){const Y=l.attributes,de=G.attributes;let j=0;const q=te.getAttributes();for(const fe in q)if(q[fe].location>=0){const U=Y[fe];let Z=de[fe];if(Z===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;j++}return l.attributesNum!==j||l.index!==ue}function w(k,G,te,ue){const Y={},de=G.attributes;let j=0;const q=te.getAttributes();for(const fe in q)if(q[fe].location>=0){let U=de[fe];U===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),Y[fe]=Z,j++}l.attributes=Y,l.attributesNum=j,l.index=ue}function C(){const k=l.newAttributes;for(let G=0,te=k.length;G<te;G++)k[G]=0}function y(k){_(k,0)}function _(k,G){const te=l.newAttributes,ue=l.enabledAttributes,Y=l.attributeDivisors;te[k]=1,ue[k]===0&&(s.enableVertexAttribArray(k),ue[k]=1),Y[k]!==G&&(s.vertexAttribDivisor(k,G),Y[k]=G)}function D(){const k=l.newAttributes,G=l.enabledAttributes;for(let te=0,ue=G.length;te<ue;te++)G[te]!==k[te]&&(s.disableVertexAttribArray(te),G[te]=0)}function O(k,G,te,ue,Y,de,j){j===!0?s.vertexAttribIPointer(k,G,te,Y,de):s.vertexAttribPointer(k,G,te,ue,Y,de)}function R(k,G,te,ue){C();const Y=ue.attributes,de=te.getAttributes(),j=G.defaultAttributeValues;for(const q in de){const fe=de[q];if(fe.location>=0){let ce=Y[q];if(ce===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const U=ce.normalized,Z=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const Xe=Ie.buffer,Ve=Ie.type,se=Ie.bytesPerElement,ve=Ve===s.INT||Ve===s.UNSIGNED_INT||ce.gpuType===Gd;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Me=ae.stride,be=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<fe.locationSize;ke++)_(fe.location+ke,ae.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<fe.locationSize;ke++)y(fe.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ke=0;ke<fe.locationSize;ke++)O(fe.location+ke,Z/fe.locationSize,Ve,U,Me*se,(be+Z/fe.locationSize*ke)*se,ve)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<fe.locationSize;ae++)_(fe.location+ae,ce.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<fe.locationSize;ae++)y(fe.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ae=0;ae<fe.locationSize;ae++)O(fe.location+ae,Z/fe.locationSize,Ve,U,Z*se,Z/fe.locationSize*ae*se,ve)}}else if(j!==void 0){const U=j[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(fe.location,U);break;case 3:s.vertexAttrib3fv(fe.location,U);break;case 4:s.vertexAttrib4fv(fe.location,U);break;default:s.vertexAttrib1fv(fe.location,U)}}}}D()}function N(){b();for(const k in r){const G=r[k];for(const te in G){const ue=G[te];for(const Y in ue){const de=ue[Y];for(const j in de)v(de[j].object),delete de[j];delete ue[Y]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const G=r[k.id];for(const te in G){const ue=G[te];for(const Y in ue){const de=ue[Y];for(const j in de)v(de[j].object),delete de[j];delete ue[Y]}}delete r[k.id]}function F(k){for(const G in r){const te=r[G];for(const ue in te){const Y=te[ue];if(Y[k.id]===void 0)continue;const de=Y[k.id];for(const j in de)v(de[j].object),delete de[j];delete Y[k.id]}}}function S(k){for(const G in r){const te=r[G],ue=k.isInstancedMesh===!0?k.id:0,Y=te[ue];if(Y!==void 0){for(const de in Y){const j=Y[de];for(const q in j)v(j[q].object),delete j[q];delete Y[de]}delete te[ue],Object.keys(te).length===0&&delete r[G]}}}function b(){z(),u=!0,l!==a&&(l=a,p(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:b,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function ES(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function wS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==bi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const S=F===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ri&&!S)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(at("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:R,maxSamples:N,samples:P}}function TS(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new ps,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||a;return a=g,r=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,M){const w=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!a||w===null||w.length===0||l&&!y)l?v(null):p();else{const D=l?0:r,O=D*4;let R=_.clippingState||null;h.value=R,R=v(w,g,O,M);for(let N=0;N!==O;++N)R[N]=t[N];_.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,M,w){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=h.value,w!==!0||y===null){const _=M+C*4,D=g.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,R=M;O!==C;++O,R+=4)u.copy(x[O]).applyMatrix4(D,f),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Vr=4,h0=[.125,.215,.35,.446,.526,.582],gs=20,AS=256,mo=new eh,p0=new gt;let Bf=null,Vf=0,Gf=0,Hf=!1;const CS=new $;class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=CS}=l;Bf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,Vf,Gf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:dr,format:bi,colorSpace:vc,depthBuffer:!1},a=g0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RS(l)),this._blurMaterial=PS(l,e,t),this._ggxMaterial=bS(l,e,t)}return a}_compileMaterial(e){const t=new yt(new Jn,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,r,a,l){const h=new pi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(p0),x.toneMapping=Gi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new cn,new xn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let _=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,_=!0):(y.color.copy(p0),_=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[O],l.y,l.z)):R===1?(h.up.set(0,0,p[O]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[O],l.z)):(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[O]));const N=this._cubeSize;ha(a,R*N,O>2?N:0,N,N),x.setRenderTarget(a),_&&x.render(C,h),x.render(e,h)}x.toneMapping=M,x.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ms||e.mapping===xa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;ha(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,mo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,M=x*g,{_lodMax:w}=this,C=this._sizeLods[r],y=3*C*(r>w-Vr?r-w+Vr:0),_=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=w-t,ha(l,y,_,3*C,2*C),a.setRenderTarget(l),a.render(f,mo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,ha(e,y,_,3*C,2*C),a.setRenderTarget(e),a.render(f,mo)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[a];x.material=p;const g=p.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*gs-1),C=l/w,y=isFinite(l)?1+Math.floor(v*C):gs;y>gs&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const _=[];let D=0;for(let F=0;F<gs;++F){const S=F/C,b=Math.exp(-S*S/2);_.push(b),F===0?D+=b:F<y&&(D+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=_,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:O}=this;g.dTheta.value=w,g.mipInt.value=O-r;const R=this._sizeLods[a],N=3*R*(a>O-Vr?a-O+Vr:0),P=4*(this._cubeSize-R);ha(t,N,P,3*R,2*R),h.setRenderTarget(t),h.render(x,mo)}}function RS(s){const e=[],t=[],r=[];let a=s;const l=s-Vr+1+h0.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let h=1/f;u>s-Vr?h=h0[u-s+Vr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,w=6,C=3,y=2,_=1,D=new Float32Array(C*w*M),O=new Float32Array(y*w*M),R=new Float32Array(_*w*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,S=P>2?0:-1,b=[F,S,0,F+2/3,S,0,F+2/3,S+1,0,F,S,0,F+2/3,S+1,0,F,S+1,0];D.set(b,C*w*P),O.set(g,y*w*P);const z=[P,P,P,P,P,P];R.set(z,_*w*P)}const N=new Jn;N.setAttribute("position",new gi(D,C)),N.setAttribute("uv",new gi(O,y)),N.setAttribute("faceIndex",new gi(R,_)),r.push(new yt(N,null)),a>Vr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function g0(s,e,t){const r=new Hi(s,e,t);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ha(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function bS(s,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function PS(s,e,t){const r=new Float32Array(gs),a=new $(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function v0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function x0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gg extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new cg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new cn(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:ya(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:ur});l.uniforms.tEquirect.value=t;const u=new yt(a,l),f=t.minFilter;return t.minFilter===vs&&(t.minFilter=Nn),new F_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function LS(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===ff||M===df)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new gg(w.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,w=M===ff||M===df,C=M===Ms||M===xa;if(w||C){let y=t.get(g);const _=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new m0(s)),y=w?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return w&&D&&D.height>0||C&&D&&h(D)?(r===null&&(r=new m0(s)),y=w?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function f(g,M){return M===ff?g.mapping=Ms:M===df&&(g.mapping=xa),g}function h(g){let M=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&M++;return M===w}function p(g){const M=g.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function NS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ma("WebGLRenderer: "+r+" extension not supported."),a}}}function DS(s,e,t,r){const a={},l=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(x,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,w=x.attributes.position;let C=0;if(w===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let O=0,R=D.length;O<R;O+=3){const N=D[O+0],P=D[O+1],F=D[O+2];g.push(N,P,P,F,F,N)}}else{const D=w.array;C=w.version;for(let O=0,R=D.length/3-1;O<R;O+=3){const N=O+0,P=O+1,F=O+2;g.push(N,P,P,F,F,N)}}const y=new(w.count>=65535?sg:rg)(g,1);y.version=C;const _=l.get(x);_&&e.remove(_),l.set(x,y)}function v(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:v}}function IS(s,e,t){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,g){s.drawElements(r,g,l,x*u),t.update(g,r,1)}function p(x,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,x*u,M),t.update(g,r,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];t.update(C,r,1)}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function US(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function FS(s,e,t){const r=new WeakMap,a=new Qt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==x){let z=function(){S.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var M=z;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let R=0;w===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let N=f.attributes.position.count*R,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*P*4*x),S=new tg(F,N,P,x);S.type=Ri,S.needsUpdate=!0;const b=R*4;for(let k=0;k<x;k++){const G=_[k],te=D[k],ue=O[k],Y=N*P*4*k;for(let de=0;de<G.count;de++){const j=de*b;w===!0&&(a.fromBufferAttribute(G,de),F[Y+j+0]=a.x,F[Y+j+1]=a.y,F[Y+j+2]=a.z,F[Y+j+3]=0),C===!0&&(a.fromBufferAttribute(te,de),F[Y+j+4]=a.x,F[Y+j+5]=a.y,F[Y+j+6]=a.z,F[Y+j+7]=0),y===!0&&(a.fromBufferAttribute(ue,de),F[Y+j+8]=a.x,F[Y+j+9]=a.y,F[Y+j+10]=a.z,F[Y+j+11]=ue.itemSize===4?a.w:1)}}g={count:x,texture:S,size:new ut(N,P)},r.set(f,g),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const C=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function OS(s,e,t,r,a){let l=new WeakMap;function u(p){const v=a.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const zS={[V0]:"LINEAR_TONE_MAPPING",[G0]:"REINHARD_TONE_MAPPING",[H0]:"CINEON_TONE_MAPPING",[Vd]:"ACES_FILMIC_TONE_MAPPING",[X0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[W0]:"CUSTOM_TONE_MAPPING"};function kS(s,e,t,r,a,l){const u=new Hi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new _a(e,t):void 0}),f=new Hi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),h=new Jn;h.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new sn([0,2,0,0,2,0],2));const p=new b_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new yt(h,p),x=new eh(-1,1,1,-1,0,1);let g=null,M=null,w=!1,C,y=null,_=[],D=!1;this.setSize=function(O,R){u.setSize(O,R),f.setSize(O,R);for(let N=0;N<_.length;N++){const P=_[N];P.setSize&&P.setSize(O,R)}},this.setEffects=function(O){_=O,D=_.length>0&&_[0].isRenderPass===!0;const R=u.width,N=u.height;for(let P=0;P<_.length;P++){const F=_[P];F.setSize&&F.setSize(R,N)}},this.begin=function(O,R){if(w||O.toneMapping===Gi&&_.length===0)return!1;if(y=R,R!==null){const N=R.width,P=R.height;(u.width!==N||u.height!==P)&&this.setSize(N,P)}return D===!1&&O.setRenderTarget(u),C=O.toneMapping,O.toneMapping=Gi,!0},this.hasRenderPass=function(){return D},this.end=function(O,R){O.toneMapping=C,w=!0;let N=u,P=f;for(let F=0;F<_.length;F++){const S=_[F];if(S.enabled!==!1&&(S.render(O,P,N,R),S.needsSwap!==!1)){const b=N;N=P,P=b}}if(g!==O.outputColorSpace||M!==O.toneMapping){g=O.outputColorSpace,M=O.toneMapping,p.defines={},Mt.getTransfer(g)===Dt&&(p.defines.SRGB_TRANSFER="");const F=zS[M];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,O.setRenderTarget(y),O.render(v,x),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),h.dispose(),p.dispose()}}const vg=new Dn,Fd=new _a(1,1),xg=new tg,_g=new i_,yg=new cg,_0=[],y0=[],M0=new Float32Array(16),S0=new Float32Array(9),E0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=_0[a];if(l===void 0&&(l=new Float32Array(a),_0[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ac(s,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function BS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function WS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;E0.set(r),s.uniformMatrix2fv(this.addr,!1,E0),hn(t,r)}}function XS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;S0.set(r),s.uniformMatrix3fv(this.addr,!1,S0),hn(t,r)}}function qS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;M0.set(r),s.uniformMatrix4fv(this.addr,!1,M0),hn(t,r)}}function YS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function jS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function ZS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function tE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Fd.compareFunction=t.isReversedDepthBuffer()?jd:Kd,l=Fd):l=vg,t.setTexture2D(e||l,a)}function nE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||_g,a)}function iE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||yg,a)}function rE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||xg,a)}function sE(s){switch(s){case 5126:return BS;case 35664:return VS;case 35665:return GS;case 35666:return HS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return $S;case 35668:case 35672:return KS;case 35669:case 35673:return jS;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}function aE(s,e){s.uniform1fv(this.addr,e)}function oE(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function lE(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function cE(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function uE(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fE(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dE(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hE(s,e){s.uniform1iv(this.addr,e)}function pE(s,e){s.uniform2iv(this.addr,e)}function mE(s,e){s.uniform3iv(this.addr,e)}function gE(s,e){s.uniform4iv(this.addr,e)}function vE(s,e){s.uniform1uiv(this.addr,e)}function xE(s,e){s.uniform2uiv(this.addr,e)}function _E(s,e){s.uniform3uiv(this.addr,e)}function yE(s,e){s.uniform4uiv(this.addr,e)}function ME(s,e,t){const r=this.cache,a=e.length,l=Ac(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Fd:u=vg;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function SE(s,e,t){const r=this.cache,a=e.length,l=Ac(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||_g,l[u])}function EE(s,e,t){const r=this.cache,a=e.length,l=Ac(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||yg,l[u])}function wE(s,e,t){const r=this.cache,a=e.length,l=Ac(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||xg,l[u])}function TE(s){switch(s){case 5126:return aE;case 35664:return oE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return hE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return xE;case 36295:return _E;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return wE}}class AE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=sE(t.type)}}class CE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TE(t.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function w0(s,e){s.seq.push(e),s.map[e.id]=e}function bE(s,e,t){const r=s.name,a=r.length;for(Wf.lastIndex=0;;){const l=Wf.exec(r),u=Wf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){w0(t,p===void 0?new AE(f,s,e):new CE(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new RE(f),w0(t,x)),t=x}}}class hc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);bE(f,h,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function T0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const PE=37297;let LE=0;function NE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const A0=new ct;function DE(s){Mt._getMatrix(A0,Mt.workingColorSpace,s);const e=`mat3( ${A0.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case xc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function C0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+NE(s.getShaderSource(e),f)}else return l}function IE(s,e){const t=DE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const UE={[V0]:"Linear",[G0]:"Reinhard",[H0]:"Cineon",[Vd]:"ACESFilmic",[X0]:"AgX",[q0]:"Neutral",[W0]:"Custom"};function FE(s,e){const t=UE[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new $;function OE(){Mt.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function kE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function BE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function yo(s){return s!==""}function R0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(s){return s.replace(VE,HE)}const GE=new Map;function HE(s,e){let t=ft[e];if(t===void 0){const r=GE.get(e);if(r!==void 0)t=ft[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Od(t)}const WE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(s){return s.replace(WE,XE)}function XE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function L0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const qE={[oc]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function YE(s){return qE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $E={[Ms]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function KE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":$E[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const jE={[xa]:"ENVMAP_MODE_REFRACTION"};function ZE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JE={[Bd]:"ENVMAP_BLENDING_MULTIPLY",[Ux]:"ENVMAP_BLENDING_MIX",[Fx]:"ENVMAP_BLENDING_ADD"};function QE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":JE[s.combine]||"ENVMAP_BLENDING_NONE"}function e1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function t1(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=YE(t),p=KE(t),v=ZE(t),x=QE(t),g=e1(t),M=zE(t),w=kE(l),C=a.createProgram();let y,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(yo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(y=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Gi?FE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,IE("linearToOutputTexel",t.outputColorSpace),OE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),u=Od(u),u=R0(u,t),u=b0(u,t),f=Od(f),f=R0(f,t),f=b0(f,t),u=P0(u),f=P0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=D+y+u,R=D+_+f,N=T0(a,a.VERTEX_SHADER,O),P=T0(a,a.FRAGMENT_SHADER,R);a.attachShader(C,N),a.attachShader(C,P),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(k){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(C)||"",te=a.getShaderInfoLog(N)||"",ue=a.getShaderInfoLog(P)||"",Y=G.trim(),de=te.trim(),j=ue.trim();let q=!0,fe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,N,P);else{const ce=C0(a,N,"vertex"),U=C0(a,P,"fragment");wt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Y+`
`+ce+`
`+U)}else Y!==""?at("WebGLProgram: Program Info Log:",Y):(de===""||j==="")&&(fe=!1);fe&&(k.diagnostics={runnable:q,programLog:Y,vertexShader:{log:de,prefix:y},fragmentShader:{log:j,prefix:_}})}a.deleteShader(N),a.deleteShader(P),S=new hc(a,C),b=BE(a,C)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(C,PE)),z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=P,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new r1(e),t.set(e,r)),r}}class r1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function s1(s){return s===Ss||s===mc||s===gc}function a1(s,e,t,r,a,l){const u=new ng,f=new i1,h=new Set,p=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(S){return h.add(S),S===0?"uv":`uv${S}`}function C(S,b,z,k,G,te){const ue=k.fog,Y=G.geometry,de=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,j=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,q=e.get(S.envMap||de,j),fe=q&&q.mapping===wc?q.image.height:null,ce=M[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&at("WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const U=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Z=U!==void 0?U.length:0;let Ie=0;Y.morphAttributes.position!==void 0&&(Ie=1),Y.morphAttributes.normal!==void 0&&(Ie=2),Y.morphAttributes.color!==void 0&&(Ie=3);let Xe,Ve,se,ve;if(ce){const He=zi[ce];Xe=He.vertexShader,Ve=He.fragmentShader}else{Xe=S.vertexShader,Ve=S.fragmentShader;const He=f.getVertexShaderStage(S),Ut=f.getFragmentShaderStage(S);f.update(S,He,Ut),se=He.id,ve=Ut.id}const ae=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),be=G.isInstancedMesh===!0,ke=G.isBatchedMesh===!0,_t=!!S.map,it=!!S.matcap,vt=!!q,xt=!!S.aoMap,dt=!!S.lightMap,Ot=!!S.bumpMap&&S.wireframe===!1,Ht=!!S.normalMap,Wt=!!S.displacementMap,Kt=!!S.emissiveMap,Pt=!!S.metalnessMap,Xt=!!S.roughnessMap,W=S.anisotropy>0,yn=S.clearcoat>0,At=S.dispersion>0,L=S.iridescence>0,E=S.sheen>0,K=S.transmission>0,re=W&&!!S.anisotropyMap,he=yn&&!!S.clearcoatMap,Ee=yn&&!!S.clearcoatNormalMap,Pe=yn&&!!S.clearcoatRoughnessMap,pe=L&&!!S.iridescenceMap,ge=L&&!!S.iridescenceThicknessMap,Ne=E&&!!S.sheenColorMap,Ke=E&&!!S.sheenRoughnessMap,De=!!S.specularMap,Re=!!S.specularColorMap,Qe=!!S.specularIntensityMap,et=K&&!!S.transmissionMap,rt=K&&!!S.thicknessMap,V=!!S.gradientMap,Ce=!!S.alphaMap,me=S.alphaTest>0,Le=!!S.alphaHash,Ue=!!S.extensions;let xe=Gi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(xe=s.toneMapping);const qe={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Ve,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ke,batchingColor:ke&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:_t,matcap:it,envMap:vt,envMapMode:vt&&q.mapping,envMapCubeUVHeight:fe,aoMap:xt,lightMap:dt,bumpMap:Ot,normalMap:Ht,displacementMap:Wt,emissiveMap:Kt,normalMapObjectSpace:Ht&&S.normalMapType===kx,normalMapTangentSpace:Ht&&S.normalMapType===Dd,packedNormalMap:Ht&&S.normalMapType===Dd&&s1(S.normalMap.format),metalnessMap:Pt,roughnessMap:Xt,anisotropy:W,anisotropyMap:re,clearcoat:yn,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,dispersion:At,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:Ke,specularMap:De,specularColorMap:Re,specularIntensityMap:Qe,transmission:K,transmissionMap:et,thicknessMap:rt,gradientMap:V,opaque:S.transparent===!1&&S.blending===pa&&S.alphaToCoverage===!1,alphaMap:Ce,alphaTest:me,alphaHash:Le,combine:S.combine,mapUv:_t&&w(S.map.channel),aoMapUv:xt&&w(S.aoMap.channel),lightMapUv:dt&&w(S.lightMap.channel),bumpMapUv:Ot&&w(S.bumpMap.channel),normalMapUv:Ht&&w(S.normalMap.channel),displacementMapUv:Wt&&w(S.displacementMap.channel),emissiveMapUv:Kt&&w(S.emissiveMap.channel),metalnessMapUv:Pt&&w(S.metalnessMap.channel),roughnessMapUv:Xt&&w(S.roughnessMap.channel),anisotropyMapUv:re&&w(S.anisotropyMap.channel),clearcoatMapUv:he&&w(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&w(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&w(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(S.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&w(S.sheenRoughnessMap.channel),specularMapUv:De&&w(S.specularMap.channel),specularColorMapUv:Re&&w(S.specularColorMap.channel),specularIntensityMapUv:Qe&&w(S.specularIntensityMap.channel),transmissionMapUv:et&&w(S.transmissionMap.channel),thicknessMapUv:rt&&w(S.thicknessMap.channel),alphaMapUv:Ce&&w(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ht||W),vertexNormals:!!Y.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(_t||Ce),fog:!!ue,useFog:S.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Y.attributes.normal===void 0&&Ht===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:_t&&S.map.isVideoTexture===!0&&Mt.getTransfer(S.map.colorSpace)===Dt,decodeVideoTextureEmissive:Kt&&S.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(S.emissiveMap.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ki,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function y(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)b.push(z),b.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(_(b,S),D(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function D(S,b){u.disableAll(),b.instancing&&u.enable(0),b.instancingColor&&u.enable(1),b.instancingMorph&&u.enable(2),b.matcap&&u.enable(3),b.envMap&&u.enable(4),b.normalMapObjectSpace&&u.enable(5),b.normalMapTangentSpace&&u.enable(6),b.clearcoat&&u.enable(7),b.iridescence&&u.enable(8),b.alphaTest&&u.enable(9),b.vertexColors&&u.enable(10),b.vertexAlphas&&u.enable(11),b.vertexUv1s&&u.enable(12),b.vertexUv2s&&u.enable(13),b.vertexUv3s&&u.enable(14),b.vertexTangents&&u.enable(15),b.anisotropy&&u.enable(16),b.alphaHash&&u.enable(17),b.batching&&u.enable(18),b.dispersion&&u.enable(19),b.batchingColor&&u.enable(20),b.gradientMap&&u.enable(21),b.packedNormalMap&&u.enable(22),b.vertexNormals&&u.enable(23),S.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),b.numLightProbeGrids>0&&u.enable(22),b.hasPositionAttribute&&u.enable(23),S.push(u.mask)}function O(S){const b=M[S.type];let z;if(b){const k=zi[b];z=A_.clone(k.uniforms)}else z=S.uniforms;return z}function R(S,b){let z=v.get(b);return z!==void 0?++z.usedTimes:(z=new t1(s,b,S,a),p.push(z),v.set(b,z)),z}function N(S){if(--S.usedTimes===0){const b=p.indexOf(S);p[b]=p[p.length-1],p.pop(),v.delete(S.cacheKey),S.destroy()}}function P(S){f.remove(S)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:O,acquireProgram:R,releaseProgram:N,releaseShaderCache:P,programs:p,dispose:F}}function o1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function l1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function N0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,w,C,y,_){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:w,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:_},s[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=w,D.materialVariant=u(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=y,D.group=_),e++,D}function h(g,M,w,C,y,_){const D=f(g,M,w,C,y,_);w.transmission>0?r.push(D):w.transparent===!0?a.push(D):t.push(D)}function p(g,M,w,C,y,_){const D=f(g,M,w,C,y,_);w.transmission>0?r.unshift(D):w.transparent===!0?a.unshift(D):t.unshift(D)}function v(g,M,w){t.length>1&&t.sort(g||l1),r.length>1&&r.sort(M||N0),a.length>1&&a.sort(M||N0),w&&(t.reverse(),r.reverse(),a.reverse())}function x(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:v}}function c1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new D0,s.set(r,[u])):a>=l.length?(u=new D0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function u1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new gt};break;case"SpotLight":t={position:new $,direction:new $,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function f1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let d1=0;function h1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p1(s){const e=new u1,t=f1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const a=new $,l=new It,u=new It;function f(p){let v=0,x=0,g=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,w=0,C=0,y=0,_=0,D=0,O=0,R=0,N=0,P=0,F=0;p.sort(h1);for(let b=0,z=p.length;b<z;b++){const k=p[b],G=k.color,te=k.intensity,ue=k.distance;let Y=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ss?Y=k.shadow.map.texture:Y=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=G.r*te,x+=G.g*te,g+=G.b*te;else if(k.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(k.sh.coefficients[de],te);F++}else if(k.isDirectionalLight){const de=e.get(k);if(de.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=k.shadow.matrix,D++}r.directional[M]=de,M++}else if(k.isSpotLight){const de=e.get(k);de.position.setFromMatrixPosition(k.matrixWorld),de.color.copy(G).multiplyScalar(te),de.distance=ue,de.coneCos=Math.cos(k.angle),de.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),de.decay=k.decay,r.spot[C]=de;const j=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,j.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[C]=j.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=Y,R++}C++}else if(k.isRectAreaLight){const de=e.get(k);de.color.copy(G).multiplyScalar(te),de.halfWidth.set(k.width*.5,0,0),de.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=de,y++}else if(k.isPointLight){const de=e.get(k);if(de.color.copy(k.color).multiplyScalar(k.intensity),de.distance=k.distance,de.decay=k.decay,k.castShadow){const j=k.shadow,q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[w]=q,r.pointShadowMap[w]=Y,r.pointShadowMatrix[w]=k.shadow.matrix,O++}r.point[w]=de,w++}else if(k.isHemisphereLight){const de=e.get(k);de.skyColor.copy(k.color).multiplyScalar(te),de.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[_]=de,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const S=r.hash;(S.directionalLength!==M||S.pointLength!==w||S.spotLength!==C||S.rectAreaLength!==y||S.hemiLength!==_||S.numDirectionalShadows!==D||S.numPointShadows!==O||S.numSpotShadows!==R||S.numSpotMaps!==N||S.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=R+N-P,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,S.directionalLength=M,S.pointLength=w,S.spotLength=C,S.rectAreaLength=y,S.hemiLength=_,S.numDirectionalShadows=D,S.numPointShadows=O,S.numSpotShadows=R,S.numSpotMaps=N,S.numLightProbes=F,r.version=d1++)}function h(p,v){let x=0,g=0,M=0,w=0,C=0;const y=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const O=p[_];if(O.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(O.matrixWorld),a.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),x++}else if(O.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(O.matrixWorld),a.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(O.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(O.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:f,setupView:h,state:r}}function I0(s){const e=new p1(s),t=[],r=[],a=[];function l(g){x.camera=g,t.length=0,r.length=0,a.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){a.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function m1(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new I0(s),e.set(a,[f])):l>=u.length?(f=new I0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`,x1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],_1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],U0=new It,go=new $,Xf=new $;function y1(s,e,t){let r=new Qd;const a=new ut,l=new ut,u=new Qt,f=new P_,h=new L_,p={},v=t.maxTextureSize,x={[Hr]:Hn,[Hn]:Hr,[ki]:ki},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:g1,fragmentShader:v1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Jn;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yt(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let _=this.type;this.render=function(P,F,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===gx&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oc);const b=s.getRenderTarget(),z=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ur),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const te=_!==this.type;te&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Y=>Y.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Y=P.length;ue<Y;ue++){const de=P[ue],j=de.shadow;if(j===void 0){at("WebGLShadowMap:",de,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const q=j.getFrameExtents();a.multiply(q),l.copy(j.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/q.x),a.x=l.x*q.x,j.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/q.y),a.y=l.y*q.y,j.mapSize.y=l.y));const fe=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=fe,j.map===null||te===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===_o){if(de.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Hi(a.x,a.y,{format:Ss,type:dr,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),j.map.texture.name=de.name+".shadowMap",j.map.depthTexture=new _a(a.x,a.y,Ri),j.map.depthTexture.name=de.name+".shadowMapDepth",j.map.depthTexture.format=hr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=wn,j.map.depthTexture.magFilter=wn}else de.isPointLight?(j.map=new gg(a.x),j.map.depthTexture=new w_(a.x,Xi)):(j.map=new Hi(a.x,a.y),j.map.depthTexture=new _a(a.x,a.y,Xi)),j.map.depthTexture.name=de.name+".shadowMap",j.map.depthTexture.format=hr,this.type===oc?(j.map.depthTexture.compareFunction=fe?jd:Kd,j.map.depthTexture.minFilter=Nn,j.map.depthTexture.magFilter=Nn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=wn,j.map.depthTexture.magFilter=wn);j.camera.updateProjectionMatrix()}const ce=j.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,U),s.clear();else{U===0&&(s.setRenderTarget(j.map),s.clear());const Z=j.getViewport(U);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),G.viewport(u)}if(de.isPointLight){const Z=j.camera,Ie=j.matrix,Xe=de.distance||Z.far;Xe!==Z.far&&(Z.far=Xe,Z.updateProjectionMatrix()),go.setFromMatrixPosition(de.matrixWorld),Z.position.copy(go),Xf.copy(Z.position),Xf.add(x1[U]),Z.up.copy(_1[U]),Z.lookAt(Xf),Z.updateMatrixWorld(),Ie.makeTranslation(-go.x,-go.y,-go.z),U0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j._frustum.setFromProjectionMatrix(U0,Z.coordinateSystem,Z.reversedDepth)}else j.updateMatrices(de);r=j.getFrustum(),R(F,S,j.camera,de,this.type)}j.isPointLightShadow!==!0&&this.type===_o&&D(j,S),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,z,k)};function D(P,F){const S=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(a.x,a.y,{format:Ss,type:dr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,S,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,S,M,C,null)}function O(P,F,S,b){let z=null;const k=S.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)z=k;else if(z=S.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const G=z.uuid,te=F.uuid;let ue=p[G];ue===void 0&&(ue={},p[G]=ue);let Y=ue[te];Y===void 0&&(Y=z.clone(),ue[te]=Y,F.addEventListener("dispose",N)),z=Y}if(z.visible=F.visible,z.wireframe=F.wireframe,b===_o?z.side=F.shadowSide!==null?F.shadowSide:F.side:z.side=F.shadowSide!==null?F.shadowSide:x[F.side],z.alphaMap=F.alphaMap,z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,z.map=F.map,z.clipShadows=F.clipShadows,z.clippingPlanes=F.clippingPlanes,z.clipIntersection=F.clipIntersection,z.displacementMap=F.displacementMap,z.displacementScale=F.displacementScale,z.displacementBias=F.displacementBias,z.wireframeLinewidth=F.wireframeLinewidth,z.linewidth=F.linewidth,S.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const G=s.properties.get(z);G.light=S}return z}function R(P,F,S,b,z){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===_o)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,P.matrixWorld);const te=e.update(P),ue=P.material;if(Array.isArray(ue)){const Y=te.groups;for(let de=0,j=Y.length;de<j;de++){const q=Y[de],fe=ue[q.materialIndex];if(fe&&fe.visible){const ce=O(P,fe,b,z);P.onBeforeShadow(s,P,F,S,te,ce,q),s.renderBufferDirect(S,null,te,ce,P,q),P.onAfterShadow(s,P,F,S,te,ce,q)}}}else if(ue.visible){const Y=O(P,ue,b,z);P.onBeforeShadow(s,P,F,S,te,Y,null),s.renderBufferDirect(S,null,te,Y,P,null),P.onAfterShadow(s,P,F,S,te,Y,null)}}const G=P.children;for(let te=0,ue=G.length;te<ue;te++)R(G[te],F,S,b,z)}function N(P){P.target.removeEventListener("dispose",N);for(const S in p){const b=p[S],z=P.target.uuid;z in b&&(b[z].dispose(),delete b[z])}}}function M1(s,e){function t(){let V=!1;const Ce=new Qt;let me=null;const Le=new Qt(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!V&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,xe,qe,He,Ut){Ut===!0&&(Ue*=He,xe*=He,qe*=He),Ce.set(Ue,xe,qe,He),Le.equals(Ce)===!1&&(s.clearColor(Ue,xe,qe,He),Le.copy(Ce))},reset:function(){V=!1,me=null,Le.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,me=null,Le=null,Ue=null;return{setReversed:function(xe){if(Ce!==xe){const qe=e.get("EXT_clip_control");xe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=xe;const He=Ue;Ue=null,this.setClear(He)}},getReversed:function(){return Ce},setTest:function(xe){xe?ae(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(xe){me!==xe&&!V&&(s.depthMask(xe),me=xe)},setFunc:function(xe){if(Ce&&(xe=jx[xe]),Le!==xe){switch(xe){case Kf:s.depthFunc(s.NEVER);break;case jf:s.depthFunc(s.ALWAYS);break;case Zf:s.depthFunc(s.LESS);break;case va:s.depthFunc(s.LEQUAL);break;case Jf:s.depthFunc(s.EQUAL);break;case Qf:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,Ce&&(xe=1-xe),s.clearDepth(xe))},reset:function(){V=!1,me=null,Le=null,Ue=null,Ce=!1}}}function a(){let V=!1,Ce=null,me=null,Le=null,Ue=null,xe=null,qe=null,He=null,Ut=null;return{setTest:function(Rt){V||(Rt?ae(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Rt){Ce!==Rt&&!V&&(s.stencilMask(Rt),Ce=Rt)},setFunc:function(Rt,Tn,ai){(me!==Rt||Le!==Tn||Ue!==ai)&&(s.stencilFunc(Rt,Tn,ai),me=Rt,Le=Tn,Ue=ai)},setOp:function(Rt,Tn,ai){(xe!==Rt||qe!==Tn||He!==ai)&&(s.stencilOp(Rt,Tn,ai),xe=Rt,qe=Tn,He=ai)},setLocked:function(Rt){V=Rt},setClear:function(Rt){Ut!==Rt&&(s.clearStencil(Rt),Ut=Rt)},reset:function(){V=!1,Ce=null,me=null,Le=null,Ue=null,xe=null,qe=null,He=null,Ut=null}}}const l=new t,u=new r,f=new a,h=new WeakMap,p=new WeakMap;let v={},x={},g={},M=new WeakMap,w=[],C=null,y=!1,_=null,D=null,O=null,R=null,N=null,P=null,F=null,S=new gt(0,0,0),b=0,z=!1,k=null,G=null,te=null,ue=null,Y=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(fe)[1]),j=q>=1):fe.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),j=q>=2);let ce=null,U={};const Z=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Xe=new Qt().fromArray(Z),Ve=new Qt().fromArray(Ie);function se(V,Ce,me,Le){const Ue=new Uint8Array(4),xe=s.createTexture();s.bindTexture(V,xe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<me;qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Ce+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return xe}const ve={};ve[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ae(s.DEPTH_TEST),u.setFunc(va),Ot(!1),Ht(Im),ae(s.CULL_FACE),xt(ur);function ae(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Me(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function be(V,Ce){return g[V]!==Ce?(s.bindFramebuffer(V,Ce),g[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ke(V,Ce){let me=w,Le=!1;if(V){me=M.get(Ce),me===void 0&&(me=[],M.set(Ce,me));const Ue=V.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,qe=Ue.length;xe<qe;xe++)me[xe]=s.COLOR_ATTACHMENT0+xe;me.length=Ue.length,Le=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Le=!0);Le&&s.drawBuffers(me)}function _t(V){return C!==V?(s.useProgram(V),C=V,!0):!1}const it={[ms]:s.FUNC_ADD,[xx]:s.FUNC_SUBTRACT,[_x]:s.FUNC_REVERSE_SUBTRACT};it[yx]=s.MIN,it[Mx]=s.MAX;const vt={[Sx]:s.ZERO,[Ex]:s.ONE,[wx]:s.SRC_COLOR,[Yf]:s.SRC_ALPHA,[Px]:s.SRC_ALPHA_SATURATE,[Rx]:s.DST_COLOR,[Ax]:s.DST_ALPHA,[Tx]:s.ONE_MINUS_SRC_COLOR,[$f]:s.ONE_MINUS_SRC_ALPHA,[bx]:s.ONE_MINUS_DST_COLOR,[Cx]:s.ONE_MINUS_DST_ALPHA,[Lx]:s.CONSTANT_COLOR,[Nx]:s.ONE_MINUS_CONSTANT_COLOR,[Dx]:s.CONSTANT_ALPHA,[Ix]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,Ce,me,Le,Ue,xe,qe,He,Ut,Rt){if(V===ur){y===!0&&(Me(s.BLEND),y=!1);return}if(y===!1&&(ae(s.BLEND),y=!0),V!==vx){if(V!==_||Rt!==z){if((D!==ms||N!==ms)&&(s.blendEquation(s.FUNC_ADD),D=ms,N=ms),Rt)switch(V){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFunc(s.ONE,s.ONE);break;case Fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}O=null,R=null,P=null,F=null,S.set(0,0,0),b=0,_=V,z=Rt}return}Ue=Ue||Ce,xe=xe||me,qe=qe||Le,(Ce!==D||Ue!==N)&&(s.blendEquationSeparate(it[Ce],it[Ue]),D=Ce,N=Ue),(me!==O||Le!==R||xe!==P||qe!==F)&&(s.blendFuncSeparate(vt[me],vt[Le],vt[xe],vt[qe]),O=me,R=Le,P=xe,F=qe),(He.equals(S)===!1||Ut!==b)&&(s.blendColor(He.r,He.g,He.b,Ut),S.copy(He),b=Ut),_=V,z=!1}function dt(V,Ce){V.side===ki?Me(s.CULL_FACE):ae(s.CULL_FACE);let me=V.side===Hn;Ce&&(me=!me),Ot(me),V.blending===pa&&V.transparent===!1?xt(ur):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Le=V.stencilWrite;f.setTest(Le),Le&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){k!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),k=V)}function Ht(V){V!==px?(ae(s.CULL_FACE),V!==G&&(V===Im?s.cullFace(s.BACK):V===mx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),G=V}function Wt(V){V!==te&&(j&&s.lineWidth(V),te=V)}function Kt(V,Ce,me){V?(ae(s.POLYGON_OFFSET_FILL),(ue!==Ce||Y!==me)&&(ue=Ce,Y=me,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,me))):Me(s.POLYGON_OFFSET_FILL)}function Pt(V){V?ae(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Xt(V){V===void 0&&(V=s.TEXTURE0+de-1),ce!==V&&(s.activeTexture(V),ce=V)}function W(V,Ce,me){me===void 0&&(ce===null?me=s.TEXTURE0+de-1:me=ce);let Le=U[me];Le===void 0&&(Le={type:void 0,texture:void 0},U[me]=Le),(Le.type!==V||Le.texture!==Ce)&&(ce!==me&&(s.activeTexture(me),ce=me),s.bindTexture(V,Ce||ve[V]),Le.type=V,Le.texture=Ce)}function yn(){const V=U[ce];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function At(){try{s.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function E(){try{s.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function K(){try{s.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ee(){try{s.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Pe(){try{s.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function pe(){try{s.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ge(){try{s.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ne(V){return x[V]!==void 0?x[V]:s.getParameter(V)}function Ke(V,Ce){x[V]!==Ce&&(s.pixelStorei(V,Ce),x[V]=Ce)}function De(V){Xe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Xe.copy(V))}function Re(V){Ve.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ve.copy(V))}function Qe(V,Ce){let me=p.get(Ce);me===void 0&&(me=new WeakMap,p.set(Ce,me));let Le=me.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(Ce,V.name),me.set(V,Le))}function et(V,Ce){const Le=p.get(Ce).get(V);h.get(Ce)!==Le&&(s.uniformBlockBinding(Ce,Le,V.__bindingPointIndex),h.set(Ce,Le))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},ce=null,U={},g={},M=new WeakMap,w=[],C=null,y=!1,_=null,D=null,O=null,R=null,N=null,P=null,F=null,S=new gt(0,0,0),b=0,z=!1,k=null,G=null,te=null,ue=null,Y=null,Xe.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ae,disable:Me,bindFramebuffer:be,drawBuffers:ke,useProgram:_t,setBlending:xt,setMaterial:dt,setFlipSided:Ot,setCullFace:Ht,setLineWidth:Wt,setPolygonOffset:Kt,setScissorTest:Pt,activeTexture:Xt,bindTexture:W,unbindTexture:yn,compressedTexImage2D:At,compressedTexImage3D:L,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:Ne,updateUBOMapping:Qe,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:De,viewport:Re,reset:rt}}function S1(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,E){return w?new OffscreenCanvas(L,E):_c("canvas")}function y(L,E,K){let re=1;const he=At(L);if((he.width>K||he.height>K)&&(re=K/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(re*he.width),Pe=Math.floor(re*he.height);g===void 0&&(g=C(Ee,Pe));const pe=E?C(Ee,Pe):g;return pe.width=Ee,pe.height=Pe,pe.getContext("2d").drawImage(L,0,0,Ee,Pe),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Pe+")."),pe}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function _(L){return L.generateMipmaps}function D(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,E,K,re,he,Ee=!1){if(L!==null){if(s[L]!==void 0)return s[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;re&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===s.RED&&(K===s.FLOAT&&(pe=s.R32F),K===s.HALF_FLOAT&&(pe=s.R16F),K===s.UNSIGNED_BYTE&&(pe=s.R8),K===s.UNSIGNED_SHORT&&Pe&&(pe=Pe.R16_EXT),K===s.SHORT&&Pe&&(pe=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.R8UI),K===s.UNSIGNED_SHORT&&(pe=s.R16UI),K===s.UNSIGNED_INT&&(pe=s.R32UI),K===s.BYTE&&(pe=s.R8I),K===s.SHORT&&(pe=s.R16I),K===s.INT&&(pe=s.R32I)),E===s.RG&&(K===s.FLOAT&&(pe=s.RG32F),K===s.HALF_FLOAT&&(pe=s.RG16F),K===s.UNSIGNED_BYTE&&(pe=s.RG8),K===s.UNSIGNED_SHORT&&Pe&&(pe=Pe.RG16_EXT),K===s.SHORT&&Pe&&(pe=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RG8UI),K===s.UNSIGNED_SHORT&&(pe=s.RG16UI),K===s.UNSIGNED_INT&&(pe=s.RG32UI),K===s.BYTE&&(pe=s.RG8I),K===s.SHORT&&(pe=s.RG16I),K===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),K===s.UNSIGNED_INT&&(pe=s.RGB32UI),K===s.BYTE&&(pe=s.RGB8I),K===s.SHORT&&(pe=s.RGB16I),K===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),K===s.UNSIGNED_INT&&(pe=s.RGBA32UI),K===s.BYTE&&(pe=s.RGBA8I),K===s.SHORT&&(pe=s.RGBA16I),K===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(K===s.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGB16_EXT),K===s.SHORT&&Pe&&(pe=Pe.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){const ge=Ee?xc:Mt.getTransfer(he);K===s.FLOAT&&(pe=s.RGBA32F),K===s.HALF_FLOAT&&(pe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(pe=ge===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGBA16_EXT),K===s.SHORT&&Pe&&(pe=Pe.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(L,E){let K;return L?E===null||E===Xi||E===Eo?K=s.DEPTH24_STENCIL8:E===Ri?K=s.DEPTH32F_STENCIL8:E===So&&(K=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Eo?K=s.DEPTH_COMPONENT24:E===Ri?K=s.DEPTH_COMPONENT32F:E===So&&(K=s.DEPTH_COMPONENT16),K}function P(L,E){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),b(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function S(L){const E=L.target;E.removeEventListener("dispose",S),k(E)}function b(L){const E=r.get(L);if(E.__webglInit===void 0)return;const K=L.source,re=M.get(K);if(re){const he=re[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(L),Object.keys(re).length===0&&M.delete(K)}r.remove(L)}function z(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const K=L.source,re=M.get(K);delete re[E.__cacheKey],u.memory.textures--}function k(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let he=0;he<E.__webglFramebuffer[re].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[re][he]);else s.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)s.deleteFramebuffer(E.__webglFramebuffer[re]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=L.textures;for(let re=0,he=K.length;re<he;re++){const Ee=r.get(K[re]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(K[re])}r.remove(L)}let G=0;function te(){G=0}function ue(){return G}function Y(L){G=L}function de(){const L=G;return L>=a.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),G+=1,L}function j(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function q(L,E){const K=r.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const re=L.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,L,E);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function fe(L,E){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Me(K,L,E);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function ce(L,E){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Me(K,L,E);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function U(L,E){const K=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){be(K,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const Z={[pc]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},Ie={[wn]:s.NEAREST,[Ox]:s.NEAREST_MIPMAP_NEAREST,[Ll]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[hf]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},Xe={[Bx]:s.NEVER,[Xx]:s.ALWAYS,[Vx]:s.LESS,[Kd]:s.LEQUAL,[Gx]:s.EQUAL,[jd]:s.GEQUAL,[Hx]:s.GREATER,[Wx]:s.NOTEQUAL};function Ve(L,E){if(E.type===Ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===hf||E.magFilter===Ll||E.magFilter===vs||E.minFilter===Nn||E.minFilter===hf||E.minFilter===Ll||E.minFilter===vs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Z[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Z[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Z[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ie[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ie[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Ll&&E.minFilter!==vs||E.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function se(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const re=E.source;let he=M.get(re);he===void 0&&(he={},M.set(re,he));const Ee=j(E);if(Ee!==L.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),he[Ee].usedTimes++;const Pe=he[L.__cacheKey];Pe!==void 0&&(he[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&z(E)),L.__cacheKey=Ee,L.__webglTexture=he[Ee].texture}return K}function ve(L,E,K){return Math.floor(Math.floor(L/K)/E)}function ae(L,E,K,re){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,re,E.data);else{Ee.sort((Ke,De)=>Ke.start-De.start);let Pe=0;for(let Ke=1;Ke<Ee.length;Ke++){const De=Ee[Pe],Re=Ee[Ke],Qe=De.start+De.count,et=ve(Re.start,E.width,4),rt=ve(De.start,E.width,4);Re.start<=Qe+1&&et===rt&&ve(Re.start+Re.count-1,E.width,4)===et?De.count=Math.max(De.count,Re.start+Re.count-De.start):(++Pe,Ee[Pe]=Re)}Ee.length=Pe+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ke=0,De=Ee.length;Ke<De;Ke++){const Re=Ee[Ke],Qe=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),rt=Qe%E.width,V=Math.floor(Qe/E.width),Ce=et,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,rt,V,Ce,me,K,re,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function Me(L,E,K){let re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=s.TEXTURE_3D);const he=se(L,E),Ee=E.source;t.bindTexture(re,L.__webglTexture,s.TEXTURE0+K);const Pe=r.get(Ee);if(Ee.version!==Pe.__version||he===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Le=E.colorSpace===Br?null:Mt.getPrimaries(E.colorSpace),Ue=E.colorSpace===Br||me===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=y(E.image,!1,a.maxTextureSize);ge=yn(E,ge);const Ne=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let De=R(E.internalFormat,Ne,Ke,E.normalized,E.colorSpace,E.isVideoTexture);Ve(re,E);let Re;const Qe=E.mipmaps,et=E.isVideoTexture!==!0,rt=Pe.__version===void 0||he===!0,V=Ee.dataReady,Ce=P(E,ge);if(E.isDepthTexture)De=N(E.format===xs,E.type),rt&&(et?t.texStorage2D(s.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ne,Ke,null));else if(E.isDataTexture)if(Qe.length>0){et&&rt&&t.texStorage2D(s.TEXTURE_2D,Ce,De,Qe[0].width,Qe[0].height);for(let me=0,Le=Qe.length;me<Le;me++)Re=Qe[me],et?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Ne,Ke,Re.data):t.texImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Ne,Ke,Re.data);E.generateMipmaps=!1}else et?(rt&&t.texStorage2D(s.TEXTURE_2D,Ce,De,ge.width,ge.height),V&&ae(E,ge,Ne,Ke)):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ne,Ke,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,De,Qe[0].width,Qe[0].height,ge.depth);for(let me=0,Le=Qe.length;me<Le;me++)if(Re=Qe[me],E.format!==bi)if(Ne!==null)if(et){if(V)if(E.layerUpdates.size>0){const Ue=d0(Re.width,Re.height,E.format,E.type);for(const xe of E.layerUpdates){const qe=Re.data.subarray(xe*Ue/Re.data.BYTES_PER_ELEMENT,(xe+1)*Ue/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,xe,Re.width,Re.height,1,Ne,qe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,ge.depth,Ne,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,De,Re.width,Re.height,ge.depth,0,Re.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,ge.depth,Ne,Ke,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,De,Re.width,Re.height,ge.depth,0,Ne,Ke,Re.data)}else{et&&rt&&t.texStorage2D(s.TEXTURE_2D,Ce,De,Qe[0].width,Qe[0].height);for(let me=0,Le=Qe.length;me<Le;me++)Re=Qe[me],E.format!==bi?Ne!==null?et?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Re.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Ne,Ke,Re.data):t.texImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Ne,Ke,Re.data)}else if(E.isDataArrayTexture)if(et){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,De,ge.width,ge.height,ge.depth),V)if(E.layerUpdates.size>0){const me=d0(ge.width,ge.height,E.format,E.type);for(const Le of E.layerUpdates){const Ue=ge.data.subarray(Le*me/ge.data.BYTES_PER_ELEMENT,(Le+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,ge.width,ge.height,1,Ne,Ke,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ne,Ke,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Ne,Ke,ge.data);else if(E.isData3DTexture)et?(rt&&t.texStorage3D(s.TEXTURE_3D,Ce,De,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ne,Ke,ge.data)):t.texImage3D(s.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Ne,Ke,ge.data);else if(E.isFramebufferTexture){if(rt)if(et)t.texStorage2D(s.TEXTURE_2D,Ce,De,ge.width,ge.height);else{let me=ge.width,Le=ge.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,De,me,Le,0,Ne,Ke,null),me>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),x.add(E),me.onpaint=Le=>{const Ue=Le.changedElements;for(const xe of x)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,xe=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,xe,qe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(et&&rt){const me=At(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Ce,De,me.width,me.height)}for(let me=0,Le=Qe.length;me<Le;me++)Re=Qe[me],et?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne,Ke,Re):t.texImage2D(s.TEXTURE_2D,me,De,Ne,Ke,Re);E.generateMipmaps=!1}else if(et){if(rt){const me=At(ge);t.texStorage2D(s.TEXTURE_2D,Ce,De,me.width,me.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Ke,ge)}else t.texImage2D(s.TEXTURE_2D,0,De,Ne,Ke,ge);_(E)&&D(re),Pe.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function be(L,E,K){if(E.image.length!==6)return;const re=se(L,E),he=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const Ee=r.get(he);if(he.version!==Ee.__version||re===!0){t.activeTexture(s.TEXTURE0+K);const Pe=Mt.getPrimaries(Mt.workingColorSpace),pe=E.colorSpace===Br?null:Mt.getPrimaries(E.colorSpace),ge=E.colorSpace===Br||Pe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,De=[];for(let xe=0;xe<6;xe++)!Ne&&!Ke?De[xe]=y(E.image[xe],!0,a.maxCubemapSize):De[xe]=Ke?E.image[xe].image:E.image[xe],De[xe]=yn(E,De[xe]);const Re=De[0],Qe=l.convert(E.format,E.colorSpace),et=l.convert(E.type),rt=R(E.internalFormat,Qe,et,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Ce=Ee.__version===void 0||re===!0,me=he.dataReady;let Le=P(E,Re);Ve(s.TEXTURE_CUBE_MAP,E);let Ue;if(Ne){V&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,Re.width,Re.height);for(let xe=0;xe<6;xe++){Ue=De[xe].mipmaps;for(let qe=0;qe<Ue.length;qe++){const He=Ue[qe];E.format!==bi?Qe!==null?V?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,He.width,He.height,Qe,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,rt,He.width,He.height,0,He.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,He.width,He.height,Qe,et,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,rt,He.width,He.height,0,Qe,et,He.data)}}}else{if(Ue=E.mipmaps,V&&Ce){Ue.length>0&&Le++;const xe=At(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ke){V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,De[xe].width,De[xe].height,Qe,et,De[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,De[xe].width,De[xe].height,0,Qe,et,De[xe].data);for(let qe=0;qe<Ue.length;qe++){const Ut=Ue[qe].image[xe].image;V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,Ut.width,Ut.height,Qe,et,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,rt,Ut.width,Ut.height,0,Qe,et,Ut.data)}}else{V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Qe,et,De[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,Qe,et,De[xe]);for(let qe=0;qe<Ue.length;qe++){const He=Ue[qe];V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,Qe,et,He.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,rt,Qe,et,He.image[xe])}}}_(E)&&D(s.TEXTURE_CUBE_MAP),Ee.__version=he.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ke(L,E,K,re,he,Ee){const Pe=l.convert(K.format,K.colorSpace),pe=l.convert(K.type),ge=R(K.internalFormat,Pe,pe,K.normalized,K.colorSpace),Ne=r.get(E),Ke=r.get(K);if(Ke.__renderTarget=E,!Ne.__hasExternalTextures){const De=Math.max(1,E.width>>Ee),Re=Math.max(1,E.height>>Ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,De,Re,E.depth,0,Pe,pe,null):t.texImage2D(he,Ee,ge,De,Re,0,Pe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Xt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,he,Ke.__webglTexture,0,Pt(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,he,Ke.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(L,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const re=E.depthTexture,he=re&&re.isDepthTexture?re.type:null,Ee=N(E.stencilBuffer,he),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(E),Ee,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const re=E.textures;for(let he=0;he<re.length;he++){const Ee=re[he],Pe=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=R(Ee.internalFormat,Pe,pe,Ee.normalized,Ee.colorSpace);Xt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(E),ge,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(E),ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(L,E,K){const re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=l.convert(E.depthTexture.format),Ke=l.convert(E.depthTexture.type);let De;E.depthTexture.format===hr?De=s.DEPTH_COMPONENT24:E.depthTexture.format===xs&&(De=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,De,E.width,E.height,0,Ne,Ke,null)}}else q(E.depthTexture,0);const Ee=he.__webglTexture,Pe=Pt(E),pe=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ge=E.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===hr)Xt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else if(E.depthTexture.format===xs)Xt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(L){const E=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=re}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)it(E.__webglFramebuffer[re],L,re);else{const re=L.texture.mipmaps;re&&re.length>0?it(E.__webglFramebuffer[0],L,0):it(E.__webglFramebuffer,L,0)}else if(K){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=s.createRenderbuffer(),_t(E.__webglDepthbuffer[re],L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}else{const re=L.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),_t(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(L,E,K){const re=r.get(L);E!==void 0&&ke(re.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&vt(L)}function dt(L){const E=L.texture,K=r.get(L),re=r.get(E);L.addEventListener("dispose",S);const he=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=E.version,u.memory.textures++),Ee){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)K.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else K.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[pe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let pe=0,ge=he.length;pe<ge;pe++){const Ne=r.get(he[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Xt(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];K.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const Ne=l.convert(ge.format,ge.colorSpace),Ke=l.convert(ge.type),De=R(ge.internalFormat,Ne,Ke,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),Re=Pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,De,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ke(K.__webglFramebuffer[pe][ge],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ke(K.__webglFramebuffer[pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(E)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let pe=0,ge=he.length;pe<ge;pe++){const Ne=he[pe],Ke=r.get(Ne);let De=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Ke.__webglTexture),Ve(De,Ne),ke(K.__webglFramebuffer,L,Ne,s.COLOR_ATTACHMENT0+pe,De,0),_(Ne)&&D(De)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),Ve(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ke(K.__webglFramebuffer[ge],L,E,s.COLOR_ATTACHMENT0,pe,ge);else ke(K.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,pe,0);_(E)&&D(pe),t.unbindTexture()}L.depthBuffer&&vt(L)}function Ot(L){const E=L.textures;for(let K=0,re=E.length;K<re;K++){const he=E[K];if(_(he)){const Ee=O(L),Pe=r.get(he).__webglTexture;t.bindTexture(Ee,Pe),D(Ee),t.unbindTexture()}}}const Ht=[],Wt=[];function Kt(L){if(L.samples>0){if(Xt(L)===!1){const E=L.textures,K=L.width,re=L.height;let he=s.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),pe=E.length>1;if(pe)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const Ke=r.get(E[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,he,s.NEAREST),h===!0&&(Ht.length=0,Wt.length=0,Ht.push(s.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ht.push(Ee),Wt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const Ke=r.get(E[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Pt(L){return Math.min(a.maxSamples,L.samples)}function Xt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(L){const E=u.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function yn(L,E){const K=L.colorSpace,re=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==vc&&K!==Br&&(Mt.getTransfer(K)===Dt?(re!==bi||he!==si)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",K)),E}function At(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=de,this.resetTextureUnits=te,this.getTextureUnits=ue,this.setTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=fe,this.setTexture3D=ce,this.setTextureCube=U,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E1(s,e){function t(r,a=Br){let l;const u=Mt.getTransfer(a);if(r===si)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===j0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Z0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$0)return s.BYTE;if(r===K0)return s.SHORT;if(r===So)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Ri)return s.FLOAT;if(r===dr)return s.HALF_FLOAT;if(r===J0)return s.ALPHA;if(r===Q0)return s.RGB;if(r===bi)return s.RGBA;if(r===hr)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===Xd)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===Ss)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===$d)return s.RGBA_INTEGER;if(r===lc||r===cc||r===uc||r===fc)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===lc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===lc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===rd||r===sd||r===ad)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ld||r===cd||r===ud||r===fd||r===mc||r===dd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===od||r===ld)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===cd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ud)return l.COMPRESSED_R11_EAC;if(r===fd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===mc)return l.COMPRESSED_RG11_EAC;if(r===dd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hd||r===pd||r===md||r===gd||r===vd||r===xd||r===_d||r===yd||r===Md||r===Sd||r===Ed||r===wd||r===Td||r===Ad)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===hd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cd||r===Rd||r===bd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Cd)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pd||r===Ld||r===gc||r===Nd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Pd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Eo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
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

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ug(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qi({vertexShader:w1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new _s(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends Es{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,x=null,g=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",y=new A1,_={},D=t.getContextAttributes();let O=null,R=null;const N=[],P=[],F=new ut;let S=null;const b=new pi;b.viewport=new Qt;const z=new pi;z.viewport=new Qt;const k=[b,z],G=new O_;let te=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=N[se];return ve===void 0&&(ve=new Mf,N[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=N[se];return ve===void 0&&(ve=new Mf,N[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=N[se];return ve===void 0&&(ve=new Mf,N[se]=ve),ve.getHandSpace()};function Y(se){const ve=P.indexOf(se.inputSource);if(ve===-1)return;const ae=N[ve];ae!==void 0&&(ae.update(se.inputSource,se.frame,p||u),ae.dispatchEvent({type:se.type,data:se.inputSource}))}function de(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",j);for(let se=0;se<N.length;se++){const ve=P[se];ve!==null&&(P[se]=null,N[se].disconnect(ve))}te=null,ue=null,y.reset();for(const se in _)delete _[se];e.setRenderTarget(O),M=null,g=null,x=null,a=null,R=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(S),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(O=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",de),a.addEventListener("inputsourceschange",j),D.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Me=null,be=null;D.depth&&(be=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=D.stencil?xs:hr,Me=D.stencil?Eo:Xi);const ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(ke),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Hi(g.textureWidth,g.textureHeight,{format:bi,type:si,depthTexture:new _a(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ae={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ae),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Hi(M.framebufferWidth,M.framebufferHeight,{format:bi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),Ve.setContext(a),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(se){for(let ve=0;ve<se.removed.length;ve++){const ae=se.removed[ve],Me=P.indexOf(ae);Me>=0&&(P[Me]=null,N[Me].disconnect(ae))}for(let ve=0;ve<se.added.length;ve++){const ae=se.added[ve];let Me=P.indexOf(ae);if(Me===-1){for(let ke=0;ke<N.length;ke++)if(ke>=P.length){P.push(ae),Me=ke;break}else if(P[ke]===null){P[ke]=ae,Me=ke;break}if(Me===-1)break}const be=N[Me];be&&be.connect(ae)}}const q=new $,fe=new $;function ce(se,ve,ae){q.setFromMatrixPosition(ve.matrixWorld),fe.setFromMatrixPosition(ae.matrixWorld);const Me=q.distanceTo(fe),be=ve.projectionMatrix.elements,ke=ae.projectionMatrix.elements,_t=be[14]/(be[10]-1),it=be[14]/(be[10]+1),vt=(be[9]+1)/be[5],xt=(be[9]-1)/be[5],dt=(be[8]-1)/be[0],Ot=(ke[8]+1)/ke[0],Ht=_t*dt,Wt=_t*Ot,Kt=Me/(-dt+Ot),Pt=Kt*-dt;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Pt),se.translateZ(Kt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),be[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Xt=_t+Kt,W=it+Kt,yn=Ht-Pt,At=Wt+(Me-Pt),L=vt*it/W*Xt,E=xt*it/W*Xt;se.projectionMatrix.makePerspective(yn,At,L,E,Xt,W),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let ve=se.near,ae=se.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),G.near=z.near=b.near=ve,G.far=z.far=b.far=ae,(te!==G.near||ue!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),te=G.near,ue=G.far),G.layers.mask=se.layers.mask|6,b.layers.mask=G.layers.mask&-5,z.layers.mask=G.layers.mask&-3;const Me=se.parent,be=G.cameras;U(G,Me);for(let ke=0;ke<be.length;ke++)U(be[ke],Me);be.length===2?ce(G,b,z):G.projectionMatrix.copy(b.projectionMatrix),Z(se,G,Me)};function Z(se,ve,ae){ae===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(ae.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ud*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(se){h=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(G)},this.getCameraTexture=function(se){return _[se]};let Ie=null;function Xe(se,ve){if(v=ve.getViewerPose(p||u),w=ve,v!==null){const ae=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Me=!1;ae.length!==G.cameras.length&&(G.cameras.length=0,Me=!0);for(let it=0;it<ae.length;it++){const vt=ae[it];let xt=null;if(M!==null)xt=M.getViewport(vt);else{const Ot=x.getViewSubImage(g,vt);xt=Ot.viewport,it===0&&(e.setRenderTargetTextures(R,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(R))}let dt=k[it];dt===void 0&&(dt=new pi,dt.layers.enable(it),dt.viewport=new Qt,k[it]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),it===0&&(G.matrix.copy(dt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Me===!0&&G.cameras.push(dt)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const it=x.getDepthInformation(ae[0]);it&&it.isValid&&it.texture&&y.init(it,a.renderState)}if(be&&be.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let it=0;it<ae.length;it++){const vt=ae[it].camera;if(vt){let xt=_[vt];xt||(xt=new ug,_[vt]=xt);const dt=x.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let ae=0;ae<N.length;ae++){const Me=P[ae],be=N[ae];Me!==null&&be!==void 0&&be.update(Me,ve,p||u)}Ie&&Ie(se,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Ve=new pg;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(se){Ie=se},this.dispose=function(){}}}const R1=new It,Mg=new ct;Mg.set(-1,0,0,0,1,0,0,0,1);function b1(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,fg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,D,O,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),x(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),g(y,_),_.isMeshPhysicalMaterial&&M(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),w(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),C(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,D,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Hn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Hn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),O=D.envMap,R=D.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Mg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=O*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function P1(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,N){const P=N.program;r.uniformBlockBinding(R,P)}function p(R,N){let P=a[R.id];P===void 0&&(y(R),P=v(R),a[R.id]=P,R.addEventListener("dispose",D));const F=N.program;r.updateUBOMapping(R,F);const S=e.render.frame;l[R.id]!==S&&(g(R),l[R.id]=S)}function v(R){const N=x();R.__bindingPointIndex=N;const P=s.createBuffer(),F=R.__size,S=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function x(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=a[R.id],P=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let S=0,b=P.length;S<b;S++){const z=P[S];if(Array.isArray(z))for(let k=0,G=z.length;k<G;k++)M(z[k],S,k,F);else M(z,S,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,N,P,F){if(C(R,N,P,F)===!0){const S=R.__offset,b=R.value;if(Array.isArray(b)){let z=0;for(let k=0;k<b.length;k++){const G=b[k],te=_(G);w(G,R.__data,z),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(b,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,R.__data)}}function w(R,N,P){typeof R=="number"||typeof R=="boolean"?N[0]=R:R.isMatrix3?(N[0]=R.elements[0],N[1]=R.elements[1],N[2]=R.elements[2],N[3]=0,N[4]=R.elements[3],N[5]=R.elements[4],N[6]=R.elements[5],N[7]=0,N[8]=R.elements[6],N[9]=R.elements[7],N[10]=R.elements[8],N[11]=0):ArrayBuffer.isView(R)?N.set(new R.constructor(R.buffer,R.byteOffset,N.length)):R.toArray(N,P)}function C(R,N,P,F){const S=R.value,b=N+"_"+P;if(F[b]===void 0)return typeof S=="number"||typeof S=="boolean"?F[b]=S:ArrayBuffer.isView(S)?F[b]=S.slice():F[b]=S.clone(),!0;{const z=F[b];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return F[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(z.equals(S)===!1)return z.copy(S),!0}}return!1}function y(R){const N=R.uniforms;let P=0;const F=16;for(let b=0,z=N.length;b<z;b++){const k=Array.isArray(N[b])?N[b]:[N[b]];for(let G=0,te=k.length;G<te;G++){const ue=k[G],Y=Array.isArray(ue.value)?ue.value:[ue.value];for(let de=0,j=Y.length;de<j;de++){const q=Y[de],fe=_(q),ce=P%F,U=ce%fe.boundary,Z=ce+U;P+=U,Z!==0&&F-Z<fe.storage&&(P+=F-Z),ue.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=P,P+=fe.storage}}}const S=P%F;return S>0&&(P+=F-S),R.__size=P,R.__cache={},this}function _(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):at("WebGLRenderer: Unsupported uniform value type.",R),N}function D(R){const N=R.target;N.removeEventListener("dispose",D);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function O(){for(const R in a)s.deleteBuffer(a[R]);u=[],a={},l={}}return{bind:h,update:p,dispose:O}}const L1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function N1(){return Oi===null&&(Oi=new lg(L1,16,16,Ss,dr),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=cr,Oi.wrapT=cr,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class D1{constructor(e={}){const{canvas:t=$x(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=M,y=new Set([$d,Yd,qd]),_=new Set([si,Xi,So,Eo,Hd,Wd]),D=new Uint32Array(4),O=new Int32Array(4),R=new $;let N=null,P=null;const F=[],S=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let k=!1,G=null,te=null,ue=null,Y=null;this._outputColorSpace=Gn;let de=0,j=0,q=null,fe=-1,ce=null;const U=new Qt,Z=new Qt;let Ie=null;const Xe=new gt(0);let Ve=0,se=t.width,ve=t.height,ae=1,Me=null,be=null;const ke=new Qt(0,0,se,ve),_t=new Qt(0,0,se,ve);let it=!1;const vt=new Qd;let xt=!1,dt=!1;const Ot=new It,Ht=new $,Wt=new Qt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Xt(){return q===null?ae:1}let W=r;function yn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",Tn,!1),W===null){const X="webgl2";if(W=yn(X,A),W===null)throw yn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let At,L,E,K,re,he,Ee,Pe,pe,ge,Ne,Ke,De,Re,Qe,et,rt,V,Ce,me,Le,Ue,xe;function qe(){At=new NS(W),At.init(),Le=new E1(W,At),L=new wS(W,At,e,Le),E=new M1(W,At),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),te=W.createFramebuffer(),ue=W.createFramebuffer(),Y=W.createFramebuffer(),K=new US(W),re=new o1,he=new S1(W,At,E,re,L,Le,K),Ee=new LS(z),Pe=new k_(W),Ue=new SS(W,Pe),pe=new DS(W,Pe,K,Ue),ge=new OS(W,pe,Pe,Ue,K),V=new FS(W,L,he),Qe=new TS(re),Ne=new a1(z,Ee,At,L,Ue,Qe),Ke=new b1(z,re),De=new c1,Re=new m1(At),rt=new MS(z,Ee,E,ge,w,h),et=new y1(z,ge,L),xe=new P1(W,K,L,E),Ce=new ES(W,At,K),me=new IS(W,At,K),K.programs=Ne.programs,z.capabilities=L,z.extensions=At,z.properties=re,z.renderLists=De,z.shadowMap=et,z.state=E,z.info=K}qe(),C!==si&&(b=new kS(C,t.width,t.height,f,a,l));const He=new C1(z,W);this.xr=He,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(se,ve,!1))},this.getSize=function(A){return A.set(se,ve)},this.setSize=function(A,X,oe=!0){if(He.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ve=X,t.width=Math.floor(A*ae),t.height=Math.floor(X*ae),oe===!0&&(t.style.width=A+"px",t.style.height=X+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*ae,ve*ae).floor()},this.setDrawingBufferSize=function(A,X,oe){se=A,ve=X,ae=oe,t.width=Math.floor(A*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===si){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,X,oe,ee){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,X,oe,ee),E.viewport(U.copy(ke).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,X,oe,ee){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,X,oe,ee),E.scissor(Z.copy(_t).multiplyScalar(ae).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){E.setScissorTest(it=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,oe=!0){let ee=0;if(A){let Q=!1;if(q!==null){const Ae=q.texture.format;Q=y.has(Ae)}if(Q){const Ae=q.texture.type,Be=_.has(Ae),Te=rt.getClearColor(),Ye=rt.getClearAlpha(),Je=Te.r,ot=Te.g,lt=Te.b;Be?(D[0]=Je,D[1]=ot,D[2]=lt,D[3]=Ye,W.clearBufferuiv(W.COLOR,0,D)):(O[0]=Je,O[1]=ot,O[2]=lt,O[3]=Ye,W.clearBufferiv(W.COLOR,0,O))}else ee|=W.COLOR_BUFFER_BIT}X&&(ee|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),G=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),rt.dispose(),De.dispose(),Re.dispose(),re.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),xe.dispose(),Ne.dispose(),He.dispose(),He.removeEventListener("sessionstart",Co),He.removeEventListener("sessionend",Ro),In.stop()};function Ut(A){A.preventDefault(),yc("WebGLRenderer: Context Lost."),k=!0}function Rt(){yc("WebGLRenderer: Context Restored."),k=!1;const A=K.autoReset,X=et.enabled,oe=et.autoUpdate,ee=et.needsUpdate,Q=et.type;qe(),K.autoReset=A,et.enabled=X,et.autoUpdate=oe,et.needsUpdate=ee,et.type=Q}function Tn(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){const X=A.target;X.removeEventListener("dispose",ai),Xr(X)}function Xr(A){Ts(A),re.remove(A)}function Ts(A){const X=re.get(A).programs;X!==void 0&&(X.forEach(function(oe){Ne.releaseProgram(oe)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,oe,ee,Q,Ae){X===null&&(X=Kt);const Be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Te=jt(A,X,oe,ee,Q);E.setMaterial(ee,Be);let Ye=oe.index,Je=1;if(ee.wireframe===!0){if(Ye=pe.getWireframeAttribute(oe),Ye===void 0)return;Je=2}const ot=oe.drawRange,lt=oe.attributes.position;let je=ot.start*Je,Et=(ot.start+ot.count)*Je;Ae!==null&&(je=Math.max(je,Ae.start*Je),Et=Math.min(Et,(Ae.start+Ae.count)*Je)),Ye!==null?(je=Math.max(je,0),Et=Math.min(Et,Ye.count)):lt!=null&&(je=Math.max(je,0),Et=Math.min(Et,lt.count));const zt=Et-je;if(zt<0||zt===1/0)return;Ue.setup(Q,ee,Te,oe,Ye);let qt,Lt=Ce;if(Ye!==null&&(qt=Pe.get(Ye),Lt=me,Lt.setIndex(qt)),Q.isMesh)ee.wireframe===!0?(E.setLineWidth(ee.wireframeLinewidth*Xt()),Lt.setMode(W.LINES)):Lt.setMode(W.TRIANGLES);else if(Q.isLine){let an=ee.linewidth;an===void 0&&(an=1),E.setLineWidth(an*Xt()),Q.isLineSegments?Lt.setMode(W.LINES):Q.isLineLoop?Lt.setMode(W.LINE_LOOP):Lt.setMode(W.LINE_STRIP)}else Q.isPoints?Lt.setMode(W.POINTS):Q.isSprite&&Lt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const an=Q._multiDrawStarts,Oe=Q._multiDrawCounts,Mn=Q._multiDrawCount,ht=Ye?Pe.get(Ye).bytesPerElement:1,Wn=re.get(ee).currentProgram.getUniforms();for(let Xn=0;Xn<Mn;Xn++)Wn.setValue(W,"_gl_DrawID",Xn),Lt.render(an[Xn]/ht,Oe[Xn])}else if(Q.isInstancedMesh)Lt.renderInstances(je,zt,Q.count);else if(oe.isInstancedBufferGeometry){const an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Oe=Math.min(oe.instanceCount,an);Lt.renderInstances(je,zt,Oe)}else Lt.render(je,zt)};function qr(A,X,oe){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Kr(A,X,oe),A.side=Hr,A.needsUpdate=!0,Kr(A,X,oe),A.side=ki):Kr(A,X,oe)}this.compile=function(A,X,oe=null){oe===null&&(oe=A),P=Re.get(oe),P.init(X),S.push(P),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),A!==oe&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const ee=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){const Te=Ae[Be];qr(Te,oe,Q),ee.add(Te)}else qr(Ae,oe,Q),ee.add(Ae)}),P=S.pop(),ee},this.compileAsync=function(A,X,oe=null){const ee=this.compile(A,X,oe);return new Promise(Q=>{function Ae(){if(ee.forEach(function(Be){re.get(Be).currentProgram.isReady()&&ee.delete(Be)}),ee.size===0){Q(A);return}setTimeout(Ae,10)}At.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Yr=null;function Rc(A){Yr&&Yr(A)}function Co(){In.stop()}function Ro(){In.start()}const In=new pg;In.setAnimationLoop(Rc),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Yr=A,He.setAnimationLoop(A),A===null?In.stop():In.start()},He.addEventListener("sessionstart",Co),He.addEventListener("sessionend",Ro),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;G!==null&&G.renderStart(A,X);const oe=He.enabled===!0&&He.isPresenting===!0,ee=b!==null&&(q===null||oe)&&b.begin(z,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,X,q),P=Re.get(A,S.length),P.init(X),P.state.textureUnits=he.getTextureUnits(),S.push(P),Ot.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),vt.setFromProjectionMatrix(Ot,Vi,X.reversedDepth),dt=this.localClippingEnabled,xt=Qe.init(this.clippingPlanes,dt),N=De.get(A,F.length),N.init(),F.push(N),He.enabled===!0&&He.isPresenting===!0){const Be=z.xr.getDepthSensingMesh();Be!==null&&As(Be,X,-1/0,z.sortObjects)}As(A,X,0,z.sortObjects),N.finish(),z.sortObjects===!0&&N.sort(Me,be,X.reversedDepth),Pt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Pt&&rt.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Qe.beginShadows();const Q=P.state.shadowsArray;if(et.render(Q,A,X),xt===!0&&Qe.endShadows(),(ee&&b.hasRenderPass())===!1){const Be=N.opaque,Te=N.transmissive;if(P.setupLights(),X.isArrayCamera){const Ye=X.cameras;if(Te.length>0)for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je];bo(Be,Te,A,lt)}Pt&&rt.render(A);for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je];Ea(N,A,lt,lt.viewport)}}else Te.length>0&&bo(Be,Te,A,X),Pt&&rt.render(A),Ea(N,A,X)}q!==null&&j===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),ee&&b.end(z),A.isScene===!0&&A.onAfterRender(z,A,X),Ue.resetDefaultState(),fe=-1,ce=null,S.pop(),S.length>0?(P=S[S.length-1],he.setTextureUnits(P.state.textureUnits),xt===!0&&Qe.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,G!==null&&G.renderEnd()};function As(A,X,oe,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ee&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);const Be=ge.update(A),Te=A.material;Te.visible&&N.push(A,Be,Te,oe,Wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Be=ge.update(A),Te=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Wt.copy(Be.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(Te)){const Ye=Be.groups;for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je],je=Te[lt.materialIndex];je&&je.visible&&N.push(A,Be,je,oe,Wt.z,lt)}}else Te.visible&&N.push(A,Be,Te,oe,Wt.z,null)}}const Ae=A.children;for(let Be=0,Te=Ae.length;Be<Te;Be++)As(Ae[Be],X,oe,ee)}function Ea(A,X,oe,ee){const{opaque:Q,transmissive:Ae,transparent:Be}=A;P.setupLightsView(oe),xt===!0&&Qe.setGlobalState(z.clippingPlanes,oe),ee&&E.viewport(U.copy(ee)),Q.length>0&&$r(Q,X,oe),Ae.length>0&&$r(Ae,X,oe),Be.length>0&&$r(Be,X,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function bo(A,X,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){const je=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new Hi(1,1,{generateMipmaps:!0,type:je?dr:si,minFilter:vs,samples:Math.max(4,L.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[ee.id],Be=ee.viewport||U;Ae.setSize(Be.z*z.transmissionResolutionScale,Be.w*z.transmissionResolutionScale);const Te=z.getRenderTarget(),Ye=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(Ae),z.getClearColor(Xe),Ve=z.getClearAlpha(),Ve<1&&z.setClearColor(16777215,.5),z.clear(),Pt&&rt.render(oe);const ot=z.toneMapping;z.toneMapping=Gi;const lt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),xt===!0&&Qe.setGlobalState(z.clippingPlanes,ee),$r(A,oe,ee),he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae),At.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Et=0,zt=X.length;Et<zt;Et++){const qt=X[Et],{object:Lt,geometry:an,material:Oe,group:Mn}=qt;if(Oe.side===ki&&Lt.layers.test(ee.layers)){const ht=Oe.side;Oe.side=Hn,Oe.needsUpdate=!0,wa(Lt,oe,ee,an,Oe,Mn),Oe.side=ht,Oe.needsUpdate=!0,je=!0}}je===!0&&(he.updateMultisampleRenderTarget(Ae),he.updateRenderTargetMipmap(Ae))}z.setRenderTarget(Te,Ye,Je),z.setClearColor(Xe,Ve),lt!==void 0&&(ee.viewport=lt),z.toneMapping=ot}function $r(A,X,oe){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ae=A.length;Q<Ae;Q++){const Be=A[Q],{object:Te,geometry:Ye,group:Je}=Be;let ot=Be.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Te.layers.test(oe.layers)&&wa(Te,X,oe,Ye,ot,Je)}}function wa(A,X,oe,ee,Q,Ae){A.onBeforeRender(z,X,oe,ee,Q,Ae),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(z,X,oe,ee,A,Ae),Q.transparent===!0&&Q.side===ki&&Q.forceSinglePass===!1?(Q.side=Hn,Q.needsUpdate=!0,z.renderBufferDirect(oe,X,ee,Q,A,Ae),Q.side=Hr,Q.needsUpdate=!0,z.renderBufferDirect(oe,X,ee,Q,A,Ae),Q.side=ki):z.renderBufferDirect(oe,X,ee,Q,A,Ae),A.onAfterRender(z,X,oe,ee,Q,Ae)}function Kr(A,X,oe){X.isScene!==!0&&(X=Kt);const ee=re.get(A),Q=P.state.lights,Ae=P.state.shadowsArray,Be=Q.state.version,Te=Ne.getParameters(A,Q.state,Ae,X,oe,P.state.lightProbeGridArray),Ye=Ne.getProgramCacheKey(Te);let Je=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=Ee.get(A.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",ai),Je=new Map,ee.programs=Je);let lt=Je.get(Ye);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===Be)return Po(A,Te),lt}else Te.uniforms=Ne.getUniforms(A),G!==null&&A.isNodeMaterial&&G.build(A,oe,Te),A.onBeforeCompile(Te,z),lt=Ne.acquireProgram(Te,Ye),Je.set(Ye,lt),ee.uniforms=Te.uniforms;const je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Qe.uniform),Po(A,Te),ee.needsLights=Aa(A),ee.lightsStateVersion=Be,ee.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=lt,ee.uniformsList=null,lt}function Ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=hc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Po(A,X){const oe=re.get(A);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function bc(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let oe=0,ee=A.length;oe<ee;oe++){const Q=A[oe];if(Q.texture!==null&&Q.boundingBox.containsPoint(R))return Q}return null}function jt(A,X,oe,ee,Q){X.isScene!==!0&&(X=Kt),he.resetTextureUnits();const Ae=X.fog,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,Te=q===null?z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Mt.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Je=Ee.get(ee.envMap||Be,Ye),ot=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,zt=!!oe.morphAttributes.color;let qt=Gi;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=z.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=Lt!==void 0?Lt.length:0,Oe=re.get(ee),Mn=P.state.lights;if(xt===!0&&(dt===!0||A!==ce)){const Nt=A===ce&&ee.id===fe;Qe.setState(ee,A,Nt)}let ht=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Mn.state.version||Oe.outputColorSpace!==Te||Q.isBatchedMesh&&Oe.batching===!1||!Q.isBatchedMesh&&Oe.batching===!0||Q.isBatchedMesh&&Oe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Oe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Oe.instancing===!1||!Q.isInstancedMesh&&Oe.instancing===!0||Q.isSkinnedMesh&&Oe.skinning===!1||!Q.isSkinnedMesh&&Oe.skinning===!0||Q.isInstancedMesh&&Oe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Oe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Oe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Oe.instancingMorph===!1&&Q.morphTexture!==null||Oe.envMap!==Je||ee.fog===!0&&Oe.fog!==Ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Qe.numPlanes||Oe.numIntersection!==Qe.numIntersection)||Oe.vertexAlphas!==ot||Oe.vertexTangents!==lt||Oe.morphTargets!==je||Oe.morphNormals!==Et||Oe.morphColors!==zt||Oe.toneMapping!==qt||Oe.morphTargetsCount!==an||!!Oe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Oe.__version=ee.version);let Wn=Oe.currentProgram;ht===!0&&(Wn=Kr(ee,X,Q),G&&ee.isNodeMaterial&&G.onUpdateProgram(ee,Wn,Oe));let Xn=!1,pt=!1,Yi=!1;const bt=Wn.getUniforms(),Bt=Oe.uniforms;if(E.useProgram(Wn.program)&&(Xn=!0,pt=!0,Yi=!0),ee.id!==fe&&(fe=ee.id,pt=!0),Oe.needsLights){const Nt=bc(P.state.lightProbeGridArray,Q);Oe.lightProbeGrid!==Nt&&(Oe.lightProbeGrid=Nt,pt=!0)}if(Xn||ce!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(W,"projectionMatrix",A.projectionMatrix),bt.setValue(W,"viewMatrix",A.matrixWorldInverse);const xi=bt.map.cameraPosition;xi!==void 0&&xi.setValue(W,Ht.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&bt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,pt=!0,Yi=!0)}if(Oe.needsLights&&(Mn.state.directionalShadowMap.length>0&&bt.setValue(W,"directionalShadowMap",Mn.state.directionalShadowMap,he),Mn.state.spotShadowMap.length>0&&bt.setValue(W,"spotShadowMap",Mn.state.spotShadowMap,he),Mn.state.pointShadowMap.length>0&&bt.setValue(W,"pointShadowMap",Mn.state.pointShadowMap,he)),Q.isSkinnedMesh){bt.setOptional(W,Q,"bindMatrix"),bt.setOptional(W,Q,"bindMatrixInverse");const Nt=Q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),bt.setValue(W,"boneTexture",Nt.boneTexture,he))}Q.isBatchedMesh&&(bt.setOptional(W,Q,"batchingTexture"),bt.setValue(W,"batchingTexture",Q._matricesTexture,he),bt.setOptional(W,Q,"batchingIdTexture"),bt.setValue(W,"batchingIdTexture",Q._indirectTexture,he),bt.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&bt.setValue(W,"batchingColorTexture",Q._colorsTexture,he));const vi=oe.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&V.update(Q,oe,Wn),(pt||Oe.receiveShadow!==Q.receiveShadow)&&(Oe.receiveShadow=Q.receiveShadow,bt.setValue(W,"receiveShadow",Q.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Bt.envMapIntensity.value=X.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=N1()),pt){if(bt.setValue(W,"toneMappingExposure",z.toneMappingExposure),Oe.needsLights&&Pc(Bt,Yi),Ae&&ee.fog===!0&&Ke.refreshFogUniforms(Bt,Ae),Ke.refreshMaterialUniforms(Bt,ee,ae,ve,P.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.lightProbeGrid){const Nt=Oe.lightProbeGrid;Bt.probesSH.value=Nt.texture,Bt.probesMin.value.copy(Nt.boundingBox.min),Bt.probesMax.value.copy(Nt.boundingBox.max),Bt.probesResolution.value.copy(Nt.resolution)}hc.upload(W,Ta(Oe),Bt,he)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(hc.upload(W,Ta(Oe),Bt,he),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(W,"center",Q.center),bt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),bt.setValue(W,"normalMatrix",Q.normalMatrix),bt.setValue(W,"modelMatrix",Q.matrixWorld),ee.uniformsGroups!==void 0){const Nt=ee.uniformsGroups;for(let xi=0,Pi=Nt.length;xi<Pi;xi++){const jr=Nt[xi];xe.update(jr,Wn),xe.bind(jr,Wn)}}return Wn}function Pc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Aa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,X,oe){const ee=re.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=X,re.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const oe=re.get(A);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,oe=0){q=A,de=X,j=oe;let ee=null,Q=!1,Ae=!1;if(A){const Te=re.get(A);if(Te.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Te.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),Ie=A.scissorTest,E.viewport(U),E.scissor(Z),E.setScissorTest(Ie),fe=-1;return}else if(Te.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Te.__hasExternalTextures)he.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&re.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);const Je=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?ee=Je[X][oe]:ee=Je[X],Q=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ee=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?ee=Je[oe]:ee=Je,U.copy(A.viewport),Z.copy(A.scissor),Ie=A.scissorTest}else U.copy(ke).multiplyScalar(ae).floor(),Z.copy(_t).multiplyScalar(ae).floor(),Ie=it;if(oe!==0&&(ee=te),E.bindFramebuffer(W.FRAMEBUFFER,ee)&&E.drawBuffers(A,ee),E.viewport(U),E.scissor(Z),E.setScissorTest(Ie),Q){const Te=re.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,oe)}else if(Ae){const Te=X;for(let Ye=0;Ye<A.textures.length;Ye++){const Je=re.get(A.textures[Ye]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,oe,Te)}}else if(A!==null&&oe!==0){const Te=re.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Te.__webglTexture,oe)}fe=-1},this.readRenderTargetPixels=function(A,X,oe,ee,Q,Ae,Be,Te=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){E.bindFramebuffer(W.FRAMEBUFFER,Ye);try{const Je=A.textures[Te],ot=Je.format,lt=Je.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Te),!L.textureFormatReadable(ot)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&oe>=0&&oe<=A.height-Q&&W.readPixels(X,oe,ee,Q,Le.convert(ot),Le.convert(lt),Ae)}finally{const Je=q!==null?re.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,X,oe,ee,Q,Ae,Be,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye)if(X>=0&&X<=A.width-ee&&oe>=0&&oe<=A.height-Q){E.bindFramebuffer(W.FRAMEBUFFER,Ye);const Je=A.textures[Te],ot=Je.format,lt=Je.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Te),!L.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.bufferData(W.PIXEL_PACK_BUFFER,Ae.byteLength,W.STREAM_READ),W.readPixels(X,oe,ee,Q,Le.convert(ot),Le.convert(lt),0);const Et=q!==null?re.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Et);const zt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Kx(W,zt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ae),W.deleteBuffer(je),W.deleteSync(zt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,oe=0){const ee=Math.pow(2,-oe),Q=Math.floor(A.image.width*ee),Ae=Math.floor(A.image.height*ee),Be=X!==null?X.x:0,Te=X!==null?X.y:0;he.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Be,Te,Q,Ae),E.unbindTexture()},this.copyTextureToTexture=function(A,X,oe=null,ee=null,Q=0,Ae=0){let Be,Te,Ye,Je,ot,lt,je,Et,zt;const qt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(oe!==null)Be=oe.max.x-oe.min.x,Te=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,ot=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const Bt=Math.pow(2,-Q);Be=Math.floor(qt.width*Bt),Te=Math.floor(qt.height*Bt),A.isDataArrayTexture?Ye=qt.depth:A.isData3DTexture?Ye=Math.floor(qt.depth*Bt):Ye=1,Je=0,ot=0,lt=0}ee!==null?(je=ee.x,Et=ee.y,zt=ee.z):(je=0,Et=0,zt=0);const Lt=Le.convert(X.format),an=Le.convert(X.type);let Oe;X.isData3DTexture?(he.setTexture3D(X,0),Oe=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),Oe=W.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),Oe=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Mn=E.getParameter(W.UNPACK_ROW_LENGTH),ht=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(W.UNPACK_SKIP_PIXELS),Xn=E.getParameter(W.UNPACK_SKIP_ROWS),pt=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,qt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(W.UNPACK_SKIP_ROWS,ot),E.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const Yi=A.isDataArrayTexture||A.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Bt=re.get(A),vi=re.get(X),Nt=re.get(Bt.__renderTarget),xi=re.get(vi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Nt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<Ye;Pi++)Yi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,re.get(A).__webglTexture,Q,lt+Pi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,re.get(X).__webglTexture,Ae,zt+Pi)),W.blitFramebuffer(Je,ot,Be,Te,je,Et,Be,Te,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||re.has(A)){const Bt=re.get(A),vi=re.get(X);E.bindFramebuffer(W.READ_FRAMEBUFFER,ue),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Y);for(let Nt=0;Nt<Ye;Nt++)Yi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.__webglTexture,Q,lt+Nt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,Q),bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,vi.__webglTexture,Ae,zt+Nt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,vi.__webglTexture,Ae),Q!==0?W.blitFramebuffer(Je,ot,Be,Te,je,Et,Be,Te,W.COLOR_BUFFER_BIT,W.NEAREST):bt?W.copyTexSubImage3D(Oe,Ae,je,Et,zt+Nt,Je,ot,Be,Te):W.copyTexSubImage2D(Oe,Ae,je,Et,Je,ot,Be,Te);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Oe,Ae,je,Et,zt,Be,Te,Ye,Lt,an,qt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Oe,Ae,je,Et,zt,Be,Te,Ye,Lt,qt.data):W.texSubImage3D(Oe,Ae,je,Et,zt,Be,Te,Ye,Lt,an,qt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ae,je,Et,Be,Te,Lt,an,qt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ae,je,Et,qt.width,qt.height,Lt,qt.data):W.texSubImage2D(W.TEXTURE_2D,Ae,je,Et,Be,Te,Lt,an,qt);E.pixelStorei(W.UNPACK_ROW_LENGTH,Mn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ht),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Xn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,pt),Ae===0&&X.generateMipmaps&&W.generateMipmap(Oe),E.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){de=0,j=0,q=null,E.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const th=6,$t=16,Wi=72,Cc=th*Wi+$t,kn=Cc/2,lr=Cc+26,tn=[];for(let s=0;s<=th;s++)tn.push(-kn+$t/2+s*Wi);const Vn=[];for(let s=0;s<th;s++)Vn.push(tn[s]+$t/2+(Wi-$t)/2);function nh(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const F0=[16230596,9426640,16176264,11905248,10145952,15766398,9421800,15718848,16302552,10477752],O0=[16723320,3006972,16765503,9305943,12610559,16742973];function Sg(s,e){const t=document.createElement("canvas");t.width=t.height=s;const r=t.getContext("2d"),a=f=>(f+lr/2)/lr*s,l=f=>f/lr*s;r.fillStyle="#e2cf9e",r.fillRect(0,0,s,s);const u=nh(42);for(const f of Vn)for(const h of Vn){const p=u()<.18,v=a(f-(Wi-$t)/2),x=a(h-(Wi-$t)/2),g=l(Wi-$t);r.fillStyle=p?"#4f9e62":"#c9c0b2",r.fillRect(v,x,g,g),p?(r.fillStyle="#5fae6f",r.fillRect(v+l(3),x+l(3),g-l(6),g-l(6))):(r.fillStyle="#b3a998",r.fillRect(v+l(4),x+l(4),g-l(8),g-l(8)))}r.fillStyle="#262633";for(const f of tn)r.fillRect(a(-lr/2),a(f-$t/2),s,l($t)),r.fillRect(a(f-$t/2),a(-lr/2),l($t),s);for(const f of tn)r.strokeStyle="#d8b93f",r.lineWidth=Math.max(1,l(.5)),r.setLineDash([l(5),l(5)]),r.beginPath(),r.moveTo(0,a(f)),r.lineTo(s,a(f)),r.stroke(),r.beginPath(),r.moveTo(a(f),0),r.lineTo(a(f),s),r.stroke();if(r.setLineDash([]),e){r.fillStyle="rgba(235,235,240,0.75)";for(const f of tn)for(const h of tn)for(let p=0;p<5;p++){const v=-$t/2+1.6+p*3.2;r.fillRect(a(f+v),a(h-$t/2-3.4),l(1.6),l(3)),r.fillRect(a(f+v),a(h+$t/2+.4),l(1.6),l(3)),r.fillRect(a(f-$t/2-3.4),a(h+v),l(3),l(1.6)),r.fillRect(a(f+$t/2+.4),a(h+v),l(3),l(1.6))}}return t}function I1(s){return Sg(s,!1)}function U1(){const s=document.createElement("canvas");s.width=64,s.height=128;const e=s.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,128);const t=nh(7);for(let a=6;a<128;a+=12)for(let l=5;l<64;l+=11){const u=t();e.fillStyle=u<.3?"#2a2440":u<.72?"#4a4262":"#ffe6a8",e.fillRect(l,a,7,8)}const r=new dc(s);return r.wrapS=r.wrapT=pc,r.colorSpace=Gn,r}function F1(s){const e=[],t=nh(2026),r=document.createElement("canvas");r.width=16,r.height=256;const a=r.getContext("2d"),l=a.createLinearGradient(0,0,0,256);l.addColorStop(0,"#1b0b3f"),l.addColorStop(.42,"#5f1e78"),l.addColorStop(.68,"#d94f8a"),l.addColorStop(.86,"#ff8a5e"),l.addColorStop(1,"#ffc46b"),a.fillStyle=l,a.fillRect(0,0,16,256);const u=new dc(r);u.colorSpace=Gn;const f=new yt(new ys(900,24,16),new xn({map:u,side:Hn,fog:!1}));s.add(f);const h=document.createElement("canvas");h.width=h.height=256;const p=h.getContext("2d"),v=p.createRadialGradient(128,128,10,128,128,128);v.addColorStop(0,"rgba(255,246,214,1)"),v.addColorStop(.35,"rgba(255,196,107,0.95)"),v.addColorStop(.7,"rgba(255,120,140,0.35)"),v.addColorStop(1,"rgba(255,120,140,0)"),p.fillStyle=v,p.fillRect(0,0,256,256);const x=new dc(h),g=new v_(new ag({map:x,fog:!1,depthWrite:!1}));g.position.set(-420,95,-640),g.scale.set(340,340,1),s.add(g),s.fog=new Jd(14711135,150,620);const M=new yt(new _s(3200,3200),new Bn({color:1988505,transparent:!0,opacity:.94}));M.rotation.x=-Math.PI/2,M.position.y=-.42,s.add(M);const w=new dc(Sg(2048,!0));w.colorSpace=Gn,w.anisotropy=8;const C=new yt(new _s(lr,lr),new Bn({map:w}));C.rotation.x=-Math.PI/2,s.add(C),s.add(new N_(16763360,4860522,1));const y=new U_(16767400,1.55);y.position.set(-180,160,-220),s.add(y);const _=[];for(const ae of Vn)for(const Me of Vn){if(t()<.18)continue;const be=1+Math.floor(t()*2.4),ke=Math.hypot(ae,Me);for(let _t=0;_t<be;_t++){const it=13+t()*13,vt=13+t()*13,xt=ae+(t()-.5)*(Wi-$t-it-8),dt=Me+(t()-.5)*(Wi-$t-vt-8),Ot=Math.exp(-ke/130),Ht=9+t()*14+Ot*(12+t()*26),Wt=F0[Math.floor(t()*F0.length)];_.push({x:xt,z:dt,w:it,d:vt,h:Ht,c:Wt}),e.push({x:xt,z:dt,hw:it/2+.4,hd:vt/2+.4})}}const D=new cn(1,1,1);D.translate(0,.5,0);const O=new Bn({map:U1()}),R=new hs(D,O,_.length),N=new It,P=new gt;_.forEach((ae,Me)=>{N.makeScale(ae.w,ae.h,ae.d),N.setPosition(ae.x,0,ae.z),R.setMatrixAt(Me,N),R.setColorAt(Me,P.setHex(ae.c))}),R.instanceMatrix.needsUpdate=!0,R.instanceColor&&(R.instanceColor.needsUpdate=!0),s.add(R);const F=Math.min(40,_.length),S=new xn({toneMapped:!1}),b=new hs(new cn(1,1,1),S,F),z=new Wr,k=new pr,G=new $,te=new $;for(let ae=0;ae<F;ae++){const Me=_[Math.floor(t()*_.length)],be=Math.floor(t()*4),ke=3.5+t()*4.5,_t=1+t()*1.1,it=Math.min(Me.h-2,3+t()*Math.max(2,Me.h*.7));G.set(be%2===0?ke:.45,_t,be%2===0?.45:ke),te.set(Me.x+(be===0?0:be===1?Me.w/2+.25:be===2?0:-Me.w/2-.25),it,Me.z+(be===0?Me.d/2+.25:be===1?0:be===2?-Me.d/2-.25:0)),k.set(0,0,0),z.setFromEuler(k),N.compose(te,z,G),b.setMatrixAt(ae,N),b.setColorAt(ae,P.setHex(O0[Math.floor(t()*O0.length)]))}b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),s.add(b);const ue=[];for(const ae of Vn)for(const Me of Vn){const be=2+Math.floor(t()*3);for(let ke=0;ke<be;ke++){const _t=(Wi-$t)/2-3,it=ae+(t()-.5)*2*_t,vt=Me+(t()-.5)*2*_t;ue.push({x:it,z:vt})}}for(let ae=0;ae<26;ae++){const Me=tn[Math.floor(t()*tn.length)],be=-kn+t()*Cc;t()<.5?ue.push({x:be,z:Me+(t()<.5?1:-1)*($t/2+2.4)}):ue.push({x:Me+(t()<.5?1:-1)*($t/2+2.4),z:be})}const Y=new To(.22,.34,6.4,6);Y.translate(0,3.2,0);const de=new Bn({color:9069122}),j=new hs(Y,de,ue.length),q=new _s(4.2,1.25);q.translate(2.1,0,0);const fe=new Bn({color:3120727,side:ki}),ce=new hs(q,fe,ue.length*3);ue.forEach((ae,Me)=>{const be=.8+t()*.5,ke=(t()-.5)*.22;k.set(ke,t()*Math.PI*2,ke*.6),z.setFromEuler(k),te.set(ae.x,0,ae.z),G.set(be,be,be),N.compose(te,z,G),j.setMatrixAt(Me,N);for(let _t=0;_t<3;_t++)k.set(-.28,t()*Math.PI*2,.06),z.setFromEuler(k),te.set(ae.x,6.25*be,ae.z),N.compose(te,z,G),ce.setMatrixAt(Me*3+_t,N)}),j.instanceMatrix.needsUpdate=!0,ce.instanceMatrix.needsUpdate=!0,s.add(j,ce);const U=new To(.12,.16,7.4,6);U.translate(0,3.7,0);const Z=new Bn({color:3814736}),Ie=new hs(U,Z,tn.length*tn.length),Xe=new ys(.42,8,8),Ve=new xn({color:16769704,toneMapped:!1}),se=new hs(Xe,Ve,tn.length*tn.length);let ve=0;for(const ae of tn)for(const Me of tn){const be=ae+$t/2+1.6,ke=Me+$t/2+1.6;N.makeTranslation(be,0,ke),Ie.setMatrixAt(ve,N),N.makeTranslation(be,7.4,ke),se.setMatrixAt(ve,N),ve++}return Ie.instanceMatrix.needsUpdate=!0,se.instanceMatrix.needsUpdate=!0,s.add(Ie,se),{colliders:e,palmSpots:ue}}class O1{constructor(){this.ctx=null,this.master=null,this.engineOsc=null,this.engineSub=null,this.engineGain=null,this.engineFilter=null,this.sirenOsc=null,this.sirenLfo=null,this.sirenGain=null,this.skidSrc=null,this.skidGain=null,this.noiseBuf=null,this.musicTimer=null,this.step=0,this.nextNoteTime=0,this.muted=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let f=0;f<t;f++)r[f]=Math.random()*2-1;this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineSub=this.ctx.createOscillator(),this.engineSub.type="square",this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0;const a=this.ctx.createGain();a.gain.value=.4,this.engineOsc.connect(this.engineFilter),this.engineSub.connect(a),a.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOsc.start(),this.engineSub.start(),this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="triangle",this.sirenOsc.frequency.value=720,this.sirenLfo=this.ctx.createOscillator(),this.sirenLfo.type="square",this.sirenLfo.frequency.value=1.4;const l=this.ctx.createGain();l.gain.value=210,this.sirenLfo.connect(l),l.connect(this.sirenOsc.frequency),this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.value=0,this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.master),this.sirenOsc.start(),this.sirenLfo.start(),this.skidSrc=this.ctx.createBufferSource(),this.skidSrc.buffer=this.noiseBuf,this.skidSrc.loop=!0;const u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.skidGain=this.ctx.createGain(),this.skidGain.gain.value=0,this.skidSrc.connect(u),u.connect(this.skidGain),this.skidGain.connect(this.master),this.skidSrc.start(),this.startMusic()}toggleMute(){return this.muted=!this.muted,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.05),this.muted}setEngine(e,t){if(!this.ctx||!this.engineOsc)return;const r=this.ctx.currentTime,a=Math.max(0,Math.min(1,e));this.engineOsc.frequency.setTargetAtTime(55+a*165,r,.06),this.engineSub.frequency.setTargetAtTime(27+a*82,r,.06),this.engineFilter.frequency.setTargetAtTime(320+a*900,r,.08),this.engineGain.gain.setTargetAtTime(t?.05+a*.055:0,r,.09)}setSiren(e){!this.ctx||!this.sirenGain||this.sirenGain.gain.setTargetAtTime(Math.max(0,Math.min(1,e))*.075,this.ctx.currentTime,.15)}setSkid(e){!this.ctx||!this.skidGain||this.skidGain.gain.setTargetAtTime(e?.09:0,this.ctx.currentTime,.06)}burst(e,t,r,a="lowpass"){if(!this.ctx||!this.noiseBuf||!this.master)return;const l=this.ctx.currentTime,u=this.ctx.createBufferSource();u.buffer=this.noiseBuf;const f=this.ctx.createBiquadFilter();f.type=a,f.frequency.setValueAtTime(t,l),f.frequency.exponentialRampToValueAtTime(Math.max(60,t*.15),l+e);const h=this.ctx.createGain();h.gain.setValueAtTime(r,l),h.gain.exponentialRampToValueAtTime(1e-4,l+e),u.connect(f),f.connect(h),h.connect(this.master),u.start(l),u.stop(l+e+.02)}tone(e,t,r,a="sine",l=0,u){if(!this.ctx||!this.master)return;const f=this.ctx.currentTime+l,h=this.ctx.createOscillator();h.type=a,h.frequency.setValueAtTime(e,f),u&&h.frequency.exponentialRampToValueAtTime(u,f+t);const p=this.ctx.createGain();p.gain.setValueAtTime(r,f),p.gain.exponentialRampToValueAtTime(1e-4,f+t),h.connect(p),p.connect(this.master),h.start(f),h.stop(f+t+.02)}crash(e){const t=Math.min(1,e);this.burst(.28+t*.2,700+t*500,.25+t*.3),this.tone(70,.22,.25+t*.2,"sine",0,40)}thud(){this.burst(.14,400,.18)}cash(){this.tone(988,.09,.14,"square"),this.tone(1319,.14,.14,"square",.07),this.tone(1976,.18,.1,"square",.14)}health(){this.tone(523,.12,.12,"triangle"),this.tone(784,.2,.12,"triangle",.1)}starUp(){this.tone(420,.3,.16,"sawtooth",0,130),this.burst(.2,900,.1,"highpass")}carjack(){this.tone(196,.16,.16,"square"),this.tone(262,.22,.14,"square",.12)}horn(){this.tone(392,.4,.1,"square"),this.tone(494,.4,.1,"square")}explosion(){this.burst(.9,500,.5),this.tone(55,.8,.4,"sine",0,28)}ui(){this.tone(660,.07,.08,"square")}startMusic(){if(!this.ctx)return;this.nextNoteTime=this.ctx.currentTime+.1;const e=[55,55,0,55,65.4,0,49,55,55,55,0,55,82.4,0,73.4,65.4],t=()=>{if(this.ctx)for(;this.nextNoteTime<this.ctx.currentTime+.25;){const r=this.step%16,a=e[r];if(a>0&&(this.tone(a,.22,.055,"sawtooth",this.nextNoteTime-this.ctx.currentTime),this.tone(a/2,.24,.05,"triangle",this.nextNoteTime-this.ctx.currentTime)),r%2===0&&this.burstAt(this.nextNoteTime-this.ctx.currentTime,.03,5e3,r%8===4?.05:.022,"highpass"),r===0||r===8){const l=r===0?[220,261.6,329.6]:[196,246.9,293.7];for(const u of l)this.tone(u,1.6,.016,"sawtooth",this.nextNoteTime-this.ctx.currentTime,u*1.005)}this.nextNoteTime+=.165,this.step++}};this.musicTimer=window.setInterval(t,90)}burstAt(e,t,r,a,l){if(!this.ctx||!this.noiseBuf||!this.master)return;const u=this.ctx.currentTime+Math.max(0,e),f=this.ctx.createBufferSource();f.buffer=this.noiseBuf;const h=this.ctx.createBiquadFilter();h.type=l,h.frequency.value=r;const p=this.ctx.createGain();p.gain.setValueAtTime(a,u),p.gain.exponentialRampToValueAtTime(1e-4,u+t),f.connect(h),h.connect(p),p.connect(this.master),f.start(u),f.stop(u+t+.02)}destroy(){this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.ctx&&this.ctx.close(),this.ctx=null}}const z0=5e3,rn=(s,e,t)=>Math.max(e,Math.min(t,s)),vo=(s,e,t)=>s+(e-s)*t;function ic(s,e,t){let r=(e-s)%(Math.PI*2);return r>Math.PI&&(r-=Math.PI*2),r<-Math.PI&&(r+=Math.PI*2),s+r*rn(t,0,1)}function rc(s){let e=tn[0],t=1e9;for(const r of tn){const a=Math.abs(r-s);a<t&&(t=a,e=r)}return e}function xo(s,e){if(e>0){for(const t of tn)if(t>s+.5)return t;return null}for(let t=tn.length-1;t>=0;t--)if(tn[t]<s-.5)return tn[t];return null}const sc=(s,e)=>s==="x"?3.6*e:-3.6*e,k0=(s,e)=>s==="x"?e>0?Math.PI/2:-Math.PI/2:e>0?0:Math.PI,B0=[4171734,14042437,15262938,3622735,15905076,6983487,9329352,3065014,14252960];class z1{constructor(e,t,r){this.scene=new f_,this.colliders=[],this.raf=0,this.lastT=0,this.destroyed=!1,this.audio=new O1,this.state="menu",this.player={x:0,z:0,y:0,vy:0,h:0,vx:0,vz:0,health:100,mode:"foot"},this.playerCar=null,this.camPos=new $(0,80,160),this.camYaw=0,this.fov=62,this.shake=0,this.traffic=[],this.cops=[],this.peds=[],this.pickups=[],this.particles=[],this.PMAX=240,this.money=0,this.wanted=0,this.time=0,this.passed=!1,this.crimeCd=0,this.decayT=0,this.bustT=0,this.smokeT=0,this.copTimer=0,this.prompt="",this.lastHudJson="",this.keys=new Set,this.mmBase=null,this.container=e,this.minimap=t,this.onHud=r.onHud,this.onEvent=r.onEvent,this.renderer=new D1({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.toneMapping=Vd,this.renderer.toneMappingExposure=1.06,e.appendChild(this.renderer.domElement),this.camera=new pi(62,e.clientWidth/e.clientHeight,.1,1400),this.camera.position.copy(this.camPos);const a=F1(this.scene);this.colliders=a.colliders,this.buildPlayerMesh(),this.buildParticles();for(let u=0;u<22;u++)this.traffic.push(this.makeTrafficCar());for(let u=0;u<36;u++)this.peds.push(this.makePed());for(let u=0;u<24;u++)this.pickups.push(this.makePickup("cash"));for(let u=0;u<6;u++)this.pickups.push(this.makePickup("health"));this.onKeyDown=u=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(u.code)&&u.preventDefault(),this.keys.add(u.code),(u.code==="Escape"||u.code==="KeyP")&&(this.state==="playing"?this.setPaused(!0):this.state==="paused"&&this.setPaused(!1)),u.code==="KeyM"&&this.onEvent({type:"mute",muted:this.audio.toggleMute()}),this.state==="playing"&&(u.code==="KeyF"&&this.tryEnterExit(),u.code==="KeyH"&&this.player.mode==="car"&&this.audio.horn())},this.onKeyUp=u=>this.keys.delete(u.code),this.onResize=()=>{const u=this.container.clientWidth,f=this.container.clientHeight;this.renderer.setSize(u,f),this.camera.aspect=u/f,this.camera.updateProjectionMatrix()},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),this.lastT=performance.now();const l=u=>{if(this.destroyed)return;this.raf=requestAnimationFrame(l);const f=rn((u-this.lastT)/1e3,.001,.05);this.lastT=u,this.update(f,u/1e3),this.renderer.render(this.scene,this.camera)};this.raf=requestAnimationFrame(l)}start(){this.audio.init(),this.audio.ui(),this.resetRun(!0),this.state="playing",this.toast("СОБЕРИ $"+z0,"#2de1fc")}toggleMute(){this.onEvent({type:"mute",muted:this.audio.toggleMute()})}resume(){this.state==="paused"&&this.setPaused(!1)}setPaused(e){this.state=e?"paused":"playing",e&&(this.audio.setEngine(0,!1),this.audio.setSiren(0),this.audio.setSkid(!1)),this.onEvent({type:"pause",paused:e})}respawn(){this.audio.init(),this.resetRun(!1),this.state="playing"}continueAfterPassed(){this.state="playing"}restartFull(){this.start()}toMenu(){this.audio.setEngine(0,!1),this.audio.setSiren(0),this.audio.setSkid(!1),this.resetRun(!0),this.state="menu"}destroy(){this.destroyed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),this.audio.destroy(),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}resetRun(e){e?(this.money=0,this.time=0,this.passed=!1):this.money=Math.floor(this.money*(this.player.health<=0?.85:.9)),this.wanted=0,this.decayT=0,this.bustT=0,this.crimeCd=0,this.player.health=100,this.player.mode="foot",this.player.x=10,this.player.z=10,this.player.h=0,this.player.vx=0,this.player.vz=0,this.player.y=0,this.playerCar&&(this.returnCarToTraffic(this.playerCar),this.playerCar=null);for(const t of this.cops)this.scene.remove(t.group);this.cops=[],this.playerMesh.visible=!0,this.shake=.4}makeCarMesh(e,t,r){const a=new or,l=new Bn({color:e}),u=new yt(new cn(2.1,.85,4.4),l);u.position.y=.78;const f=new yt(new cn(1.85,.68,2.3),new Bn({color:1579048}));f.position.set(0,1.5,-.25),a.add(u,f);const h=[],p=new To(.42,.42,.34,10),v=new Bn({color:1381660});for(const[C,y]of[[-1.02,1.45],[1.02,1.45],[-1.02,-1.45],[1.02,-1.45]]){const _=new or;_.position.set(C,.42,y);const D=new yt(p,v);D.rotation.z=Math.PI/2,_.add(D),a.add(_),h.push(D)}const x=new xn({color:16774084,toneMapped:!1});for(const C of[-.65,.65]){const y=new yt(new cn(.4,.22,.12),x);y.position.set(C,.85,2.22);const _=new yt(new cn(.4,.2,.12),new xn({color:16724804,toneMapped:!1}));_.position.set(C,.85,-2.22),a.add(y,_)}let g,M;if(t&&(g=new yt(new cn(.55,.26,.5),new xn({color:16720435,toneMapped:!1})),g.position.set(-.35,2,-.25),M=new yt(new cn(.55,.26,.5),new xn({color:2254591,toneMapped:!1})),M.position.set(.35,2,-.25),a.add(g,M)),r){const C=new yt(new cn(2,.12,.5),new Bn({color:1579048}));C.position.set(0,1.35,-2.1),a.add(C)}const w=new yt(new Mo(2.7,18),new xn({color:0,transparent:!0,opacity:.32,depthWrite:!1}));return w.rotation.x=-Math.PI/2,w.position.y=.03,a.add(w),{group:a,wheels:h,barR:g,barB:M}}spawnCarAt(e,t,r,a,l){const u=l?1052696:B0[Math.floor(Math.random()*B0.length)],{group:f,wheels:h,barR:p,barB:v}=this.makeCarMesh(u,l,!1),x=sc(e,t),g=e==="x"?a:r+x,M=e==="x"?r+x:a,w=xo(e==="x"?g:M,t)??rc(a),C={group:f,wheels:h,x:g,z:M,h:k0(e,t),vx:0,vz:0,axis:e,dir:t,road:r,lane:x,nextCross:w,speed:0,baseSpeed:l?40:9+Math.random()*7,panic:0,isPlayer:!1,isCop:l,barR:p,barB:v};return f.position.set(g,0,M),f.rotation.y=C.h,this.scene.add(f),C}makeTrafficCar(){const e=Math.random()<.5?"x":"z",t=Math.random()<.5?1:-1,r=tn[Math.floor(Math.random()*tn.length)],a=-kn+20+Math.random()*(Cc-40);return this.spawnCarAt(e,t,r,a,!1)}buildPlayerMesh(){const e=new or,t=new yt(new Sc(.34,.85,4,10),new Bn({color:3006972}));t.position.y=1.05;const r=new yt(new ys(.26,12,12),new Bn({color:1578e4}));r.position.y=1.95;const a=new yt(new ys(.27,12,8,0,Math.PI*2,0,1.2),new Bn({color:2365976}));a.position.y=1.98;const l=new yt(new Mo(.7,14),new xn({color:0,transparent:!0,opacity:.32,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.02,e.add(t,r,a,l),e.position.set(this.player.x,0,this.player.z),this.scene.add(e),this.playerMesh=e}makePed(){const e=new or,t=[14042480,4171734,15905076,6983487,9329352,15262938,3065014],r=new yt(new Sc(.28,.62,4,8),new Bn({color:t[Math.floor(Math.random()*t.length)]}));r.position.y=.9;const a=new yt(new ys(.21,10,10),new Bn({color:14726284}));a.position.y=1.62;const l=new yt(new Mo(.5,12),new xn({color:0,transparent:!0,opacity:.28,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.02,e.add(r,a,l);const u={group:e,x:0,z:0,h:0,tx:0,tz:0,state:"walk",downT:0,sink:0};return this.pedWaypoint(u,!0),e.position.set(u.x,0,u.z),this.scene.add(e),u}pedWaypoint(e,t){const a=Vn[Math.floor(Math.random()*Vn.length)],l=Vn[Math.floor(Math.random()*Vn.length)],u=(Wi-$t)/2+2,f=Math.floor(Math.random()*4),h=(Math.random()*2-1)*u;f===0?(e.tx=a+h,e.tz=l-u):f===1?(e.tx=a+h,e.tz=l+u):f===2?(e.tx=a-u,e.tz=l+h):(e.tx=a+u,e.tz=l+h),t&&(e.x=e.tx,e.z=e.tz)}makePickup(e){const t=new or;if(e==="cash"){const a=new yt(new cn(.85,.55,.55),new xn({color:3530859,toneMapped:!1})),l=new yt(new cn(.87,.2,.57),new xn({color:12255184,toneMapped:!1}));t.add(a,l)}else{const a=new yt(new cn(.7,.6,.7),new xn({color:16119285,toneMapped:!1})),l=new yt(new cn(.72,.18,.2),new xn({color:16724804,toneMapped:!1})),u=new yt(new cn(.2,.18,.72),new xn({color:16724804,toneMapped:!1}));t.add(a,l,u)}const r={group:t,x:0,z:0,kind:e,value:e==="cash"?[100,150,250,500][Math.floor(Math.random()*4)]:35,phase:Math.random()*9};return this.relocatePickup(r,!0),this.scene.add(t),r}relocatePickup(e,t=!1){for(let r=0;r<20;r++){const a=Vn[Math.floor(Math.random()*Vn.length)],l=Vn[Math.floor(Math.random()*Vn.length)],u=a+(Math.random()*2-1)*24,f=l+(Math.random()*2-1)*24,h=Math.hypot(u-this.player.x,f-this.player.z);if(!(!t&&h<60)){e.x=u,e.z=f,e.group.position.set(u,1,f);return}}e.x=0,e.z=0,e.group.position.set(0,1,0)}buildParticles(){const e=new cn(.3,.3,.3),t=new xn({toneMapped:!1});this.pMesh=new hs(e,t,this.PMAX);const r=new It;r.makeScale(0,0,0);for(let a=0;a<this.PMAX;a++)this.pMesh.setMatrixAt(a,r);this.pMesh.instanceMatrix.setUsage(qx),this.pMesh.frustumCulled=!1,this.scene.add(this.pMesh);for(let a=0;a<this.PMAX;a++)this.particles.push({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,grav:0,scale:0,c:16777215})}burst(e,t,r,a,l,u,f,h,p=1){let v=0;for(const x of this.particles){if(x.life>0)continue;x.x=e,x.y=t,x.z=r;const g=Math.random()*Math.PI*2,M=(.3+Math.random()*.7)*u;if(x.vx=Math.cos(g)*M,x.vz=Math.sin(g)*M,x.vy=Math.random()*u*.7+1,x.life=x.max=f*(.6+Math.random()*.7),x.grav=h,x.scale=p*(.6+Math.random()*.8),x.c=a,++v>=l)break}}tryEnterExit(){const e=this.player;if(e.mode==="foot"){let t=null,r=5;for(const a of this.traffic){const l=Math.hypot(a.x-e.x,a.z-e.z);l<r&&(r=l,t=a)}t&&(this.traffic.splice(this.traffic.indexOf(t),1),t.isPlayer=!0,this.playerCar=t,e.mode="car",e.x=t.x,e.z=t.z,e.h=t.h,t.vx=0,t.vz=0,t.speed=0,this.playerMesh.visible=!1,this.audio.carjack(),this.toast("ТАЧКА УГНАНА","#ffb14e"),this.crime(1,4),this.shake=Math.max(this.shake,.25))}else if(this.playerCar){const t=this.playerCar,r=3.2;let a=t.x+Math.cos(t.h)*r,l=t.z-Math.sin(t.h)*r;this.hitsBuilding(a,l,.6)&&(a=t.x-Math.cos(t.h)*r,l=t.z+Math.sin(t.h)*r),this.hitsBuilding(a,l,.6)&&(a=t.x+Math.sin(t.h)*r,l=t.z+Math.cos(t.h)*r),e.x=rn(a,-kn+3,kn-3),e.z=rn(l,-kn+3,kn-3),e.h=t.h,e.vx=0,e.vz=0,e.y=0,e.mode="foot",this.playerMesh.visible=!0,this.returnCarToTraffic(t),this.playerCar=null,this.audio.ui()}}returnCarToTraffic(e){e.isPlayer=!1,e.axis=Math.abs(Math.sin(e.h))>Math.abs(Math.cos(e.h))?"x":"z",e.dir=(e.axis==="x"?Math.sin(e.h):Math.cos(e.h))>=0?1:-1,e.road=rc(e.axis==="x"?e.z:e.x),e.lane=sc(e.axis,e.dir);const t=e.axis==="x"?e.x:e.z;e.nextCross=xo(t,e.dir)??rc(t),e.baseSpeed=10,e.speed=4,e.panic=0,this.traffic.push(e)}hitsBuilding(e,t,r){for(const a of this.colliders)if(Math.abs(e-a.x)<a.hw+r&&Math.abs(t-a.z)<a.hd+r)return!0;return!1}collideCircle(e,t){let r=0;for(const a of this.colliders){const l=rn(e.x,a.x-a.hw,a.x+a.hw),u=rn(e.z,a.z-a.hd,a.z+a.hd);let f=e.x-l,h=e.z-u;const p=f*f+h*h;if(p<t*t){let v=Math.sqrt(p);v<.001&&(f=0,h=1,v=1);const x=f/v,g=h/v,M=t-v;e.x+=x*M,e.z+=g*M;const w=e.vx*x+e.vz*g;w<0&&(r=Math.max(r,-w),e.vx-=x*w*1.35,e.vz-=g*w*1.35)}}return r}crime(e,t=2.5){this.crimeCd>0||(this.crimeCd=t,this.decayT=0,this.wanted<5&&(this.wanted=Math.min(5,this.wanted+e),this.toast("РОЗЫСК +"+e+"★","#ff2d78"),this.audio.starUp()))}toast(e,t){this.onEvent({type:"toast",text:e,color:t})}stats(){return{money:this.money,time:this.time,wanted:this.wanted}}update(e,t){if(this.state==="menu"){this.updateTraffic(e),this.updatePeds(e),this.updatePickups(e,t,!1);const r=t*.07,a=new $(Math.cos(r)*170,78,Math.sin(r)*170);this.camPos.lerp(a,1-Math.exp(-1.2*e)),this.camera.position.copy(this.camPos),this.camera.lookAt(0,6,0);return}if(this.state==="over"){this.updateParticles(e);return}this.state==="playing"&&(this.time+=e,this.crimeCd=Math.max(0,this.crimeCd-e),this.player.mode==="car"&&this.playerCar?this.updateDriving(e,t):this.updateOnFoot(e),this.updateTraffic(e),this.updateCops(e),this.updatePeds(e),this.updatePickups(e,t,!0),this.updateWanted(e),this.updateParticles(e),this.updateCamera(e),this.drawMinimap(t),this.pushHud(),!this.passed&&this.money>=z0&&(this.passed=!0,this.money+=1e3,this.audio.cash(),this.burst(this.player.x,2,this.player.z,9305943,50,12,1.4,-4),this.onEvent({type:"passed",stats:this.stats()}),this.state="over"))}updateOnFoot(e){const t=this.player,r=this.keys,a=(r.has("KeyA")||r.has("ArrowLeft")?1:0)-(r.has("KeyD")||r.has("ArrowRight")?1:0),l=(r.has("KeyW")||r.has("ArrowUp")?1:0)-(r.has("KeyS")||r.has("ArrowDown")?1:0),u=r.has("ShiftLeft")||r.has("ShiftRight");t.h+=a*3*e;const f=u?9.5:5.2,h=Math.sin(t.h),p=Math.cos(t.h);t.vx=vo(t.vx,h*l*f,1-Math.exp(-14*e)),t.vz=vo(t.vz,p*l*f,1-Math.exp(-14*e)),t.x+=t.vx*e,t.z+=t.vz*e,r.has("Space")&&t.y<=0&&(t.vy=7.2),t.vy-=20*e,t.y=Math.max(0,t.y+t.vy*e),t.y===0&&(t.vy=Math.max(0,t.vy)),this.collideCircle(t,.6)>0&&this.audio.thud();const x=kn-3;t.x=rn(t.x,-x,x),t.z=rn(t.z,-x,x),this.playerMesh.position.set(t.x,t.y,t.z),this.playerMesh.rotation.y=t.h;const g=Math.hypot(t.vx,t.vz)>1;this.playerMesh.position.y=t.y+(g?Math.abs(Math.sin(this.time*(u?13:9)))*.09:0);let M=!1;for(const w of this.traffic)if(Math.hypot(w.x-t.x,w.z-t.z)<5){M=!0;break}this.prompt=M?"F — УГНАТЬ ТАЧКУ":"",this.audio.setEngine(0,!1),this.audio.setSiren(this.wanted>0?.4:0)}updateDriving(e,t){const r=this.player,a=this.playerCar,l=this.keys,u=l.has("KeyW")||l.has("ArrowUp"),f=l.has("KeyS")||l.has("ArrowDown"),h=(l.has("KeyA")||l.has("ArrowLeft")?1:0)-(l.has("KeyD")||l.has("ArrowRight")?1:0),p=l.has("Space"),v=Math.sin(a.h),x=Math.cos(a.h);let g=a.vx*v+a.vz*x;if(u){const S=30*e;a.vx+=v*S,a.vz+=x*S}f&&(g>1.5?(a.vx-=v*42*e,a.vz-=x*42*e):(a.vx-=v*14*e,a.vz-=x*14*e));const M=Math.exp(-(.55+(p?1.5:0))*e);a.vx*=M,a.vz*=M,g=a.vx*v+a.vz*x;const w=a.vx-v*g,C=a.vz-x*g,y=Math.exp(-(p?2.1:9.5)*e);a.vx=v*g+w*y,a.vz=x*g+C*y,g=a.vx*v+a.vz*x;const _=47;g>_&&(a.vx*=_/g,a.vz*=_/g,g=_),g<-13&&(a.vx*=-13/g,a.vz*=-13/g);const D=(p?3.1:2.45)*rn(Math.abs(g)/13,0,1)*(g<0?-1:1);a.h+=h*D*e,a.x+=a.vx*e,a.z+=a.vz*e,r.x=a.x,r.z=a.z,r.h=a.h;const O=this.collideCircle(a,2.5);if(O>3){const S=Math.min(34,(O-7)*1.25);O>7&&this.damagePlayer(S),this.burst(a.x+v*2,1,a.z+x*2,16761963,10+O,9,.5,14,.8),this.audio.crash(rn(O/26,.15,1)),this.shake=Math.max(this.shake,rn(O/30,.1,.8))}const R=kn-3;(Math.abs(a.x)>R||Math.abs(a.z)>R)&&(a.x=rn(a.x,-R,R),a.z=rn(a.z,-R,R),a.vx*=.6,a.vz*=.6);const N=[...this.traffic,...this.cops];for(const S of N){const b=S.x-a.x,z=S.z-a.z,k=Math.hypot(b,z);if(k<4.4&&k>.001){const G=b/k,te=z/k,ue=(4.4-k)/2;a.x-=G*ue,a.z-=te*ue,S.x+=G*ue,S.z+=te*ue;const Y=Math.abs((a.vx-(S.isCop?Math.sin(S.h)*S.speed:S.vx))*G+(a.vz-(S.isCop?Math.cos(S.h)*S.speed:S.vz))*te);S.isCop?Y>8&&this.damagePlayer((Y-7)*1.3):(S.vx=a.vx*.35,S.vz=a.vz*.35,S.panic=3,Y>13&&(this.damagePlayer((Y-12)*.8),this.crime(1,3.5))),Y>6&&(this.burst((a.x+S.x)/2,1,(a.z+S.z)/2,16769162,8,8,.45,14,.7),this.audio.crash(rn(Y/28,.12,.8)),this.shake=Math.max(this.shake,rn(Y/40,.08,.6)))}}if(Math.hypot(a.vx,a.vz)>6)for(const S of this.peds)S.state!=="down"&&Math.hypot(S.x-a.x,S.z-a.z)<2.6&&(S.state="down",S.downT=0,S.sink=0,this.crime(1,3),this.audio.thud(),this.burst(S.x,1,S.z,15262938,8,7,.5,12),this.shake=Math.max(this.shake,.3));a.group.position.set(a.x,0,a.z),a.group.rotation.y=a.h;for(const S of a.wheels)S.rotation.y+=g*e/.42;const F=Math.hypot(w,C);this.audio.setSkid(p&&Math.abs(g)>9||F>7),(p&&Math.abs(g)>9||F>7)&&this.burst(a.x-v*1.6,.25,a.z-x*1.6,10132136,2,2.5,.7,-3,.9),this.audio.setEngine(Math.abs(g)/_,!0),this.smokeT-=e,r.health<35&&this.smokeT<=0&&(this.smokeT=.12,this.burst(a.x,1.4,a.z,r.health<15?16738877:6710901,2,2,1.1,-3,1.2)),this.prompt=Math.abs(g)<4?"F — ВЫЙТИ ИЗ МАШИНЫ":""}damagePlayer(e){e<=0||(this.player.health=Math.max(0,this.player.health-e),this.player.health<=0&&(this.audio.explosion(),this.burst(this.player.x,1.5,this.player.z,16742973,60,16,1.3,10,1.4),this.burst(this.player.x,2,this.player.z,5592416,40,8,1.8,-3,1.6),this.shake=1.4,this.audio.setEngine(0,!1),this.state="over",this.onEvent({type:"wasted",stats:this.stats()})))}updateTraffic(e){const t=[...this.traffic,...this.cops];this.playerCar&&t.push(this.playerCar);for(const r of this.traffic){const a=Math.sin(r.h),l=Math.cos(r.h);let u=r.baseSpeed*(r.panic>0?1.5:1);r.panic=Math.max(0,r.panic-e);const f=r.x+a*7,h=r.z+l*7;for(const g of t)if(g!==r&&Math.hypot(g.x-f,g.z-h)<4.6){u=0;break}this.player.mode==="foot"&&Math.hypot(this.player.x-f,this.player.z-h)<4&&(u=0),r.speed+=rn(u-r.speed,-34*e,9*e),r.axis==="x"?r.x+=r.dir*r.speed*e:r.z+=r.dir*r.speed*e;const p=r.road+r.lane;r.axis==="x"?r.z=vo(r.z,p,1-Math.exp(-5*e)):r.x=vo(r.x,p,1-Math.exp(-5*e));const v=r.axis==="x"?r.x:r.z;if(r.dir>0?v>=r.nextCross:v<=r.nextCross){const g=r.nextCross,M=xo(g,r.dir)!==null,w=Math.random();if(M&&w<.45)r.nextCross=xo(g,r.dir);else{const C=Math.random()<.5?1:-1;r.axis=r.axis==="x"?"z":"x",r.dir=C,r.road=g,r.axis==="x"?(r.z=g,r.lane=sc("x",C)):(r.x=g,r.lane=sc("z",C)),r.nextCross=xo(r.axis==="x"?r.x:r.z,C)??g}}const x=k0(r.axis,r.dir);r.h=ic(r.h,x,1-Math.exp(-6*e)),r.group.position.set(r.x,0,r.z),r.group.rotation.y=r.h;for(const g of r.wheels)g.rotation.y+=r.speed*e/.42;if(this.state==="playing"&&Math.hypot(r.x-this.player.x,r.z-this.player.z)>260){this.scene.remove(r.group);const g=this.traffic.indexOf(r);g>=0&&(this.traffic[g]=this.makeTrafficCar())}}}updateCops(e){this.copTimer-=e;const t=this.wanted>0?Math.min(5,this.wanted+1):0;if(this.cops.length<t&&this.copTimer<=0){this.copTimer=1.2;const f=Math.random()<.5?"x":"z",h=rc(f==="x"?this.player.z:this.player.x),p=60+Math.random()*50,v=rn((f==="x"?this.player.x:this.player.z)+(Math.random()<.5?p:-p),-kn+14,kn-14),x=this.spawnCarAt(f,Math.random()<.5?1:-1,h,v,!0);this.cops.push(x)}if(this.cops.length>t){const f=this.cops.pop();this.scene.remove(f.group)}const r=this.player,a=r.mode==="car"&&this.playerCar?Math.hypot(this.playerCar.vx,this.playerCar.vz):Math.hypot(r.vx,r.vz);let l=0;const u=Math.floor(this.time*5)%2===0;for(const f of this.cops){f.barR&&(f.barR.visible=u),f.barB&&(f.barB.visible=!u);const h=r.x-f.x,p=r.z-f.z,v=Math.hypot(h,p),x=Math.atan2(h,p);f.h=ic(f.h,x,1-Math.exp(-3.1*e));const g=30+this.wanted*3.4,M=Math.abs(ic(f.h,x,1)-f.h),w=v>12?g:g*.85;f.speed+=rn(w*(M>1.1?.45:1)-f.speed,-30*e,16*e),f.x+=Math.sin(f.h)*f.speed*e,f.z+=Math.cos(f.h)*f.speed*e;const C={x:f.x,z:f.z,vx:Math.sin(f.h)*f.speed,vz:Math.cos(f.h)*f.speed};this.collideCircle(C,2.5),f.x=C.x,f.z=C.z,f.x=rn(f.x,-kn+3,kn-3),f.z=rn(f.z,-kn+3,kn-3);for(const y of this.cops){if(y===f)continue;const _=Math.hypot(y.x-f.x,y.z-f.z);if(_<4.4&&_>.001){const D=(4.4-_)/2;f.x-=(y.x-f.x)/_*D,f.z-=(y.z-f.z)/_*D}}f.group.position.set(f.x,0,f.z),f.group.rotation.y=f.h;for(const y of f.wheels)y.rotation.y+=f.speed*e/.42;l=Math.max(l,1-v/110),r.mode==="foot"&&v<2.7&&f.speed>5&&(this.damagePlayer(f.speed*.8),r.x+=h/(v||1)*2.2,r.z+=p/(v||1)*2.2),this.state==="playing"&&(r.mode==="car"?(v<7.5&&a<4.5?this.bustT+=e:this.bustT=Math.max(0,this.bustT-e*1.6),this.bustT>1.9&&this.bust()):v<4.2&&(this.bustT+=e*1.5,this.bustT>1.2&&this.bust()))}this.audio.setSiren(this.wanted>0?l:0),this.wanted===0&&(this.bustT=0)}bust(){this.audio.setSiren(0),this.audio.setEngine(0,!1),this.state="over",this.onEvent({type:"busted",stats:this.stats()})}updatePeds(e){const t=this.player,r=t.mode==="car"&&this.playerCar&&Math.hypot(this.playerCar.vx,this.playerCar.vz)>8;for(const a of this.peds){if(a.state==="down"){a.downT+=e,a.group.rotation.x=Math.min(Math.PI/2,a.group.rotation.x+e*7),a.downT>3.5&&(a.sink-=e*.8,a.group.position.y=a.sink,a.sink<-1.4&&(a.group.rotation.x=0,a.group.position.y=0,a.state="walk",this.pedWaypoint(a,!0),a.group.position.set(a.x,0,a.z)));continue}r&&Math.hypot(a.x-t.x,a.z-t.z)<10&&(a.state="flee",a.tx=a.x+(a.x-t.x)*2,a.tz=a.z+(a.z-t.z)*2);const l=a.tx-a.x,u=a.tz-a.z,f=Math.hypot(l,u);f<1.2&&(a.state==="flee"&&(a.state="walk"),this.pedWaypoint(a,!1));const h=a.state==="flee"?7.5:1.6;a.x+=l/(f||1)*h*e,a.z+=u/(f||1)*h*e,a.h=Math.atan2(l,u),a.group.position.set(a.x,0,a.z),a.group.rotation.y=a.h}}updatePickups(e,t,r){const a=this.player;for(const l of this.pickups){if(l.group.rotation.y+=e*2.4,l.group.position.y=1+Math.sin(t*2.6+l.phase)*.22,!r)continue;Math.hypot(l.x-a.x,l.z-a.z)<(a.mode==="car"?3.4:2)&&(l.kind==="cash"?(this.money+=l.value,this.toast("+$"+l.value,"#8dff57"),this.audio.cash(),this.burst(l.x,1.2,l.z,3530859,14,7,.8,10)):(a.health=Math.min(100,a.health+l.value),this.toast("+"+l.value+" ЗДОРОВЬЕ","#ff8a9e"),this.audio.health(),this.burst(l.x,1.2,l.z,16733542,12,6,.8,8)),this.relocatePickup(l))}}updateWanted(e){if(this.wanted===0)return;let t=1e9;for(const r of this.cops)t=Math.min(t,Math.hypot(r.x-this.player.x,r.z-this.player.z));this.crimeCd<=0&&t>75?(this.decayT+=e,this.decayT>6&&(this.decayT=0,this.wanted--,this.wanted>0?this.toast("РОЗСК СНИЖЕН: "+this.wanted+"★","#2de1fc"):this.toast("ТЫ УШЁЛ ОТ ПОГОНИ","#2de1fc"))):this.decayT=0}updateParticles(e){const t=new It,r=new Wr,a=new $,l=new $,u=new gt;for(let f=0;f<this.PMAX;f++){const h=this.particles[f];if(h.life>0){h.life-=e,h.vy-=h.grav*e*(h.grav>0?1:-.4),h.x+=h.vx*e,h.y+=h.vy*e,h.z+=h.vz*e,h.y<.1&&h.grav>0&&(h.y=.1,h.vy*=-.4,h.vx*=.7,h.vz*=.7);const p=rn(h.life/h.max,0,1)*h.scale;a.set(h.x,h.y,h.z),l.set(p,p,p),t.compose(a,r,l),this.pMesh.setMatrixAt(f,t),this.pMesh.setColorAt(f,u.setHex(h.c))}else t.makeScale(0,0,0),this.pMesh.setMatrixAt(f,t)}this.pMesh.instanceMatrix.needsUpdate=!0,this.pMesh.instanceColor&&(this.pMesh.instanceColor.needsUpdate=!0)}updateCamera(e){const t=this.player;let r,a,l=62;if(t.mode==="car"&&this.playerCar){const f=this.playerCar,h=Math.hypot(f.vx,f.vz),p=Math.sin(f.h),v=Math.cos(f.h),x=8.5+h*.055;r=new $(f.x-p*x,4.6+h*.012,f.z-v*x),a=new $(f.x+p*5,1.4,f.z+v*5),l=62+h/47*17}else{this.camYaw=ic(this.camYaw,t.h,1-Math.exp(-5*e));const f=Math.sin(this.camYaw),h=Math.cos(this.camYaw);r=new $(t.x-f*6.4,3.4+t.y*.5,t.z-h*6.4),a=new $(t.x+f*2,1.6+t.y,t.z+h*2)}const u=1-Math.exp(-5.5*e);this.camPos.lerp(r,u),this.camPos.y<1.6&&(this.camPos.y=1.6),this.camera.position.copy(this.camPos),this.shake>.002&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake*.7,this.camera.position.z+=(Math.random()-.5)*this.shake,this.shake*=Math.exp(-5.5*e)),this.camera.lookAt(a),this.fov=vo(this.fov,l,1-Math.exp(-4*e)),Math.abs(this.camera.fov-this.fov)>.05&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}drawMinimap(e){const t=this.minimap,r=t.getContext("2d");if(!r)return;const a=t.width,l=t.height;this.mmBase||(this.mmBase=I1(a)),r.clearRect(0,0,a,l),r.drawImage(this.mmBase,0,0,a,l);const u=p=>(p+lr/2)/lr*a;for(const p of this.pickups)r.fillStyle=p.kind==="cash"?"#8dff57":"#ff5566",r.beginPath(),r.arc(u(p.x),u(p.z),p.kind==="cash"?2:2.6,0,Math.PI*2),r.fill();r.fillStyle="rgba(230,230,240,0.7)";for(const p of this.traffic)r.fillRect(u(p.x)-1.5,u(p.z)-1.5,3,3);if(Math.floor(e*5)%2===0){r.fillStyle="#ff3355";for(const p of this.cops)r.beginPath(),r.arc(u(p.x),u(p.z),3.4,0,Math.PI*2),r.fill()}const f=u(this.player.x),h=u(this.player.z);r.save(),r.translate(f,h),r.rotate(Math.PI-this.player.h),r.fillStyle="#2de1fc",r.strokeStyle="#0c0720",r.lineWidth=1.4,r.beginPath(),r.moveTo(0,-6.5),r.lineTo(4.6,5.5),r.lineTo(0,2.8),r.lineTo(-4.6,5.5),r.closePath(),r.fill(),r.stroke(),r.restore()}pushHud(){const e=this.player,t=e.mode==="car"&&this.playerCar?Math.hypot(this.playerCar.vx,this.playerCar.vz):0,r={money:this.money,health:Math.ceil(e.health),wanted:this.wanted,speed:Math.round(t*3.6),mode:e.mode,time:Math.floor(this.time),prompt:this.prompt},a=JSON.stringify(r);a!==this.lastHudJson&&(this.lastHudJson=a,this.onHud(r))}}const Eg=s=>`${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`,wg=({on:s,size:e=26})=>ie.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",className:s?"star-anim":"",children:ie.jsx("path",{d:"M12 1.8l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z",fill:s?"#ff2d78":"rgba(255,255,255,0.14)",stroke:s?"#ffd0e2":"rgba(255,255,255,0.25)",strokeWidth:"1",style:s?{filter:"drop-shadow(0 0 7px rgba(255,45,120,0.95))"}:void 0})}),k1=()=>ie.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#8dff57",strokeWidth:"2.4",strokeLinecap:"round",children:ie.jsx("path",{d:"M12 2.5v19M16.5 6.5c-.8-1.6-2.5-2.3-4.5-2.3-2.5 0-4.3 1.3-4.3 3.4 0 4.7 9.4 2.4 9.4 7.3 0 2.3-2 3.6-4.9 3.6-2.3 0-4.2-.9-5-2.7"})}),B1=({muted:s})=>ie.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[ie.jsx("path",{d:"M11 5 6 9H2v6h4l5 4V5z",fill:"currentColor",stroke:"none"}),s?ie.jsx("path",{d:"M16 9l6 6M22 9l-6 6"}):ie.jsx("path",{d:"M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12"})]}),V1=()=>ie.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:ie.jsx("path",{d:"M6 3.8v16.4L20.2 12z"})}),ac=({x:s,flip:e=!1,s:t=1})=>ie.jsxs("svg",{className:"absolute bottom-0",style:{left:`${s}%`,transform:`scale(${e?-t:t}, ${t})`,transformOrigin:"bottom center"},width:"120",height:"150",viewBox:"0 0 120 150",fill:"none",children:[ie.jsx("path",{d:"M56 150c4-38-6-66 4-104",stroke:"#0c0720",strokeWidth:"9",strokeLinecap:"round"}),ie.jsxs("g",{stroke:"#0c0720",strokeWidth:"7",strokeLinecap:"round",children:[ie.jsx("path",{d:"M60 46C44 30 24 26 8 34"}),ie.jsx("path",{d:"M60 46C50 24 34 14 16 14"}),ie.jsx("path",{d:"M60 46C62 22 74 8 94 6"}),ie.jsx("path",{d:"M60 46C78 32 98 30 114 40"}),ie.jsx("path",{d:"M60 46C72 52 84 64 88 80"}),ie.jsx("path",{d:"M60 46C48 52 38 62 34 78"})]})]}),G1=[["W A S D","движение / руль"],["SHIFT","бег (пешком)"],["SPACE","прыжок / ручник"],["F","угнать тачку / выйти"],["H","сигнал (в машине)"],["ESC","пауза"],["M","звук вкл/выкл"]];function H1({keys:s,label:e}){return ie.jsxs("div",{className:"flex items-center gap-3",children:[ie.jsx("div",{className:"flex gap-1 min-w-[110px]",children:s.split(" ").map(t=>ie.jsx("span",{className:"key-cap",children:t},t))}),ie.jsx("span",{className:"text-[13px] text-white/75 italic",children:e})]})}function qf({stats:s}){return ie.jsx("div",{className:"vice-panel px-6 py-4",children:ie.jsxs("div",{className:"unskew flex items-center gap-8",children:[ie.jsxs("div",{children:[ie.jsx("div",{className:"text-[11px] tracking-[0.22em] text-white/50 font-bold",children:"НА СОБРАНИИ"}),ie.jsxs("div",{className:"font-display text-3xl text-vice-lime",children:["$",s.money]})]}),ie.jsxs("div",{children:[ie.jsx("div",{className:"text-[11px] tracking-[0.22em] text-white/50 font-bold",children:"ВРЕМЯ"}),ie.jsx("div",{className:"font-display text-3xl text-vice-cyan",children:Eg(s.time)})]}),ie.jsxs("div",{children:[ie.jsx("div",{className:"text-[11px] tracking-[0.22em] text-white/50 font-bold",children:"РОЗЫСК"}),ie.jsx("div",{className:"flex gap-0.5 mt-1",children:[0,1,2,3,4].map(e=>ie.jsx(wg,{on:e<s.wanted,size:20},e))})]})]})})}function W1({kmh:s}){const e=-115+Math.min(s,175)/175*230;return ie.jsx("div",{className:"vice-panel px-4 pt-3 pb-2",children:ie.jsxs("div",{className:"unskew flex items-end gap-3",children:[ie.jsxs("svg",{width:"104",height:"64",viewBox:"0 0 104 64",children:[ie.jsx("path",{d:"M10 58 A 44 44 0 1 1 94 58",fill:"none",stroke:"rgba(255,255,255,0.14)",strokeWidth:"7",strokeLinecap:"round"}),ie.jsx("path",{d:"M10 58 A 44 44 0 1 1 94 58",fill:"none",stroke:"#ff2d78",strokeWidth:"7",strokeLinecap:"round",strokeDasharray:`${Math.min(s,175)/175*150} 400`,style:{filter:"drop-shadow(0 0 5px rgba(255,45,120,0.8))"}}),ie.jsx("g",{transform:`rotate(${e} 52 56)`,children:ie.jsx("rect",{x:"50.6",y:"18",width:"2.8",height:"38",rx:"1.4",fill:"#2de1fc"})}),ie.jsx("circle",{cx:"52",cy:"56",r:"5",fill:"#2de1fc"})]}),ie.jsxs("div",{className:"pb-1",children:[ie.jsx("div",{className:"font-display text-3xl leading-none text-white hud-shadow tabular-nums",children:s}),ie.jsx("div",{className:"text-[10px] tracking-[0.3em] text-vice-cyan font-bold",children:"КМ/Ч"})]})]})})}function X1(){const s=Ui.useRef(null),e=Ui.useRef(null),t=Ui.useRef(null),r=Ui.useRef(0),[a,l]=Ui.useState("menu"),[u,f]=Ui.useState({money:0,health:100,wanted:0,speed:0,mode:"foot",time:0,prompt:""}),[h,p]=Ui.useState({money:0,time:0,wanted:0}),[v,x]=Ui.useState([]),[g,M]=Ui.useState(!1);Ui.useEffect(()=>{if(!s.current||!e.current)return;const C=new z1(s.current,e.current,{onHud:y=>f(y),onEvent:y=>{if(y.type==="toast"){const _=++r.current;x(D=>[...D.slice(-3),{id:_,text:y.text,color:y.color}]),window.setTimeout(()=>x(D=>D.filter(O=>O.id!==_)),1900)}else y.type==="busted"?(p(y.stats),l("busted")):y.type==="wasted"?(p(y.stats),l("wasted")):y.type==="passed"?(p(y.stats),l("passed")):y.type==="pause"?l(y.paused?"paused":"playing"):y.type==="mute"&&M(y.muted)}});return t.current=C,()=>{C.destroy(),t.current=null}},[]);const w=()=>t.current;return ie.jsxs("div",{className:"relative h-full w-full overflow-hidden select-none bg-vice-navy font-body",children:[ie.jsx("div",{ref:s,className:"absolute inset-0"}),ie.jsx("div",{className:"vignette absolute inset-0 z-10 pointer-events-none"}),ie.jsx("div",{className:"scanlines absolute inset-0 z-10 pointer-events-none opacity-[0.22]"}),ie.jsxs("div",{className:`absolute inset-0 z-20 pointer-events-none ${a==="menu"?"hidden":""}`,children:[ie.jsxs("div",{className:"absolute top-4 left-4 flex flex-col gap-2.5",children:[ie.jsx("div",{className:"vice-panel px-5 py-2.5",children:ie.jsxs("div",{className:"unskew flex items-center gap-2.5",children:[ie.jsx(k1,{}),ie.jsx("span",{className:"font-display text-[30px] leading-none text-vice-lime hud-shadow tabular-nums",children:u.money}),ie.jsx("span",{className:"text-[10px] font-bold tracking-widest text-white/40 self-end pb-0.5",children:"/ 5000"})]})}),ie.jsx("div",{className:"vice-panel px-4 py-2.5",style:{borderLeftColor:"#ff2d78"},children:ie.jsxs("div",{className:"unskew w-[190px]",children:[ie.jsxs("div",{className:"flex justify-between text-[10px] font-bold tracking-[0.25em] text-white/55 mb-1",children:[ie.jsx("span",{children:"ЗДОРОВЬЕ"}),ie.jsx("span",{className:"tabular-nums",children:u.health})]}),ie.jsx("div",{className:"h-[10px] bg-black/60 border border-white/15 overflow-hidden",children:ie.jsx("div",{className:`h-full transition-all duration-200 ${u.health<30?"pulse-warn":""}`,style:{width:`${u.health}%`,background:u.health>55?"linear-gradient(90deg,#ff2d78,#ff7aa8)":u.health>28?"linear-gradient(90deg,#ffb14e,#ffd23f)":"linear-gradient(90deg,#ff3344,#ff6a3d)",boxShadow:"0 0 12px rgba(255,45,120,0.6)"}})})]})}),ie.jsx("div",{className:"text-[11px] font-bold tracking-[0.25em] text-white/40 pl-1 tabular-nums",children:Eg(u.time)})]}),ie.jsxs("div",{className:"absolute top-4 right-4 flex items-start gap-2",children:[ie.jsx("div",{className:"vice-panel px-4 py-2.5",children:ie.jsxs("div",{className:"unskew",children:[ie.jsx("div",{className:"text-[10px] font-bold tracking-[0.25em] text-white/50 mb-1 text-right",children:"РОЗЫСК"}),ie.jsx("div",{className:"flex gap-1",children:[0,1,2,3,4].map(C=>ie.jsx(wg,{on:C<u.wanted},C))},u.wanted)]})}),ie.jsx("button",{onClick:()=>{var C;return(C=w())==null?void 0:C.toggleMute()},className:"vice-panel px-3 py-3 pointer-events-auto cursor-pointer text-white/80 hover:text-vice-cyan",style:{borderLeftColor:"#2de1fc"},title:"Звук (M)",children:ie.jsx("div",{className:"unskew",children:ie.jsx(B1,{muted:g})})})]}),ie.jsx("div",{className:"absolute bottom-4 left-4",children:ie.jsx("div",{className:"vice-panel p-2",style:{borderLeftColor:"#2de1fc"},children:ie.jsxs("div",{className:"unskew",children:[ie.jsx("canvas",{ref:e,width:176,height:176,className:"block w-[176px] h-[176px] border border-cyan-300/25"}),ie.jsx("div",{className:"mt-1 text-[9px] font-bold tracking-[0.3em] text-white/45 text-center",children:"ВИЦЕ-СИТИ"})]})})}),ie.jsx("div",{className:"absolute bottom-4 right-4 flex flex-col items-end gap-2",children:u.mode==="car"?ie.jsx(W1,{kmh:u.speed}):ie.jsx("div",{className:"vice-panel px-4 py-2",children:ie.jsx("div",{className:"unskew font-display text-sm text-vice-cyan tracking-wide",children:"ПЕШКОМ"})})}),u.prompt&&ie.jsx("div",{className:"absolute bottom-[18%] left-1/2 -translate-x-1/2",children:ie.jsx("div",{className:"vice-panel px-6 py-2.5",style:{borderLeftColor:"#8dff57"},children:ie.jsx("div",{className:"unskew font-display text-lg text-white hud-shadow whitespace-nowrap",children:u.prompt})})})]}),ie.jsx("div",{className:"absolute top-[12%] left-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none",children:v.map(C=>ie.jsx("div",{className:"toast-anim font-display text-2xl hud-shadow",style:{color:C.color},children:C.text},C.id))}),a==="menu"&&ie.jsxs("div",{className:"absolute inset-0 z-30 overflow-hidden",style:{background:"linear-gradient(180deg, rgba(22,10,48,0.55) 0%, rgba(22,10,48,0.72) 55%, rgba(12,7,32,0.94) 100%)"},children:[ie.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-[-190px] w-[460px] h-[460px] rounded-full opacity-90",style:{background:"linear-gradient(180deg,#ffe3a3 0%,#ffb14e 45%,#ff5e8a 100%)"},children:ie.jsx("div",{className:"sun-stripes absolute inset-0 rounded-full"})}),ie.jsx(ac,{x:3,s:1.15}),ie.jsx(ac,{x:12,flip:!0,s:.8}),ie.jsx(ac,{x:86,flip:!0,s:1.2}),ie.jsx(ac,{x:94,s:.75}),ie.jsxs("div",{className:"relative z-10 h-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16",children:[ie.jsxs("div",{className:"float-slow text-center lg:text-left",children:[ie.jsx("div",{className:"font-display text-[13px] tracking-[0.55em] text-vice-cyan mb-2",children:"GRAND THEFT AUTO"}),ie.jsx("h1",{className:"font-display title-vice text-white leading-[0.9] text-[88px] sm:text-[124px]",children:"GTA VI"}),ie.jsx("div",{className:"inline-block mt-3 bg-vice-cyan text-vice-navy font-display text-xl sm:text-2xl px-5 py-1.5",style:{transform:"skewX(-8deg)"},children:ie.jsx("span",{className:"inline-block",style:{transform:"skewX(8deg)"},children:"VICE ROULETTE"})}),ie.jsx("p",{className:"mt-5 max-w-md text-white/80 text-[15px] leading-relaxed italic mx-auto lg:mx-0",children:"Фанатское 3D-демо по мотивам: угоняй тачки, собирай кэш по всему острову и уходи от погони под неоном закатного Vice-города."}),ie.jsxs("div",{className:"mt-5 flex flex-wrap gap-3 justify-center lg:justify-start",children:[ie.jsx("div",{className:"bg-vice-pink text-white font-display text-sm px-4 py-2",style:{transform:"skewX(-8deg)",boxShadow:"0 5px 0 rgba(0,0,0,0.4)"},children:ie.jsx("span",{className:"inline-block",style:{transform:"skewX(8deg)"},children:"ЦЕЛЬ: СОБРАТЬ $5000"})}),ie.jsx("div",{className:"bg-white/10 border border-white/25 text-white/85 font-display text-sm px-4 py-2",style:{transform:"skewX(-8deg)"},children:ie.jsx("span",{className:"inline-block",style:{transform:"skewX(8deg)"},children:"5 ЗВЕЗД = ХАОС"})})]}),ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.start(),l("playing")},className:"btn-vice mt-8 bg-vice-pink text-white text-2xl px-12 py-4 cursor-pointer",children:ie.jsxs("span",{className:"flex items-center gap-3",children:[ie.jsx(V1,{})," НАЧАТЬ ИГРУ"]})}),ie.jsx("div",{className:"mt-3 text-[11px] text-white/45 tracking-wider",children:"звук включится после старта · M — без звука"})]}),ie.jsx("div",{className:"vice-panel px-7 py-6 w-[340px] shrink-0",children:ie.jsxs("div",{className:"unskew",children:[ie.jsx("div",{className:"font-display text-vice-cyan text-lg mb-4 tracking-wide",children:"УПРАВЛЕНИЕ"}),ie.jsx("div",{className:"flex flex-col gap-2.5",children:G1.map(([C,y])=>ie.jsx(H1,{keys:C,label:y},C))}),ie.jsxs("div",{className:"mt-5 pt-4 border-t border-white/15 text-[12px] text-white/60 italic leading-relaxed",children:["Подойди к любой тачке и жми ",ie.jsx("span",{className:"key-cap !text-[9px]",children:"F"})," — розыск растёт, копы выезжают. Задержат — потеряешь 10% кэша."]})]})})]})]}),a==="paused"&&ie.jsx("div",{className:"absolute inset-0 z-30 bg-black/65 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("div",{className:"font-display text-7xl text-white title-vice mb-8",children:"ПАУЗА"}),ie.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ie.jsx("button",{onClick:()=>{var C;return(C=w())==null?void 0:C.resume()},className:"btn-vice bg-vice-pink text-white text-xl px-10 py-3.5 cursor-pointer",children:ie.jsx("span",{children:"ПРОДОЛЖИТЬ"})}),ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.toMenu(),l("menu")},className:"btn-vice bg-vice-cyan text-vice-navy text-xl px-10 py-3.5 cursor-pointer",children:ie.jsx("span",{children:"В МЕНЮ"})})]}),ie.jsx("div",{className:"mt-8 text-[12px] text-white/50 tracking-widest",children:"ESC — ВЕРНУТЬСЯ В ИГРУ"})]})}),a==="busted"&&ie.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center",style:{background:"rgba(8,18,58,0.8)"},children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("div",{className:"stamp-anim font-display text-[84px] sm:text-[110px] leading-none text-[#9fc4ff] inline-block border-[6px] border-[#9fc4ff] px-8 py-3",style:{textShadow:"0 0 34px rgba(90,140,255,0.9)"},children:"ЗАДЕРЖАН"}),ie.jsx("div",{className:"mt-6 text-white/70 italic",children:"Копы прижали тебя к обочине. Штраф — 10% кэша."}),ie.jsx("div",{className:"mt-6 flex justify-center",children:ie.jsx(qf,{stats:h})}),ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.respawn(),l("playing")},className:"btn-vice mt-8 bg-[#4a7dff] text-white text-xl px-10 py-3.5 cursor-pointer",children:ie.jsx("span",{children:"ВЫЙТИ ИЗ УЧАСТКА"})})]})}),a==="wasted"&&ie.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center",style:{background:"rgba(48,4,12,0.82)"},children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("div",{className:"stamp-anim font-display text-[84px] sm:text-[110px] leading-none text-[#ff4455] inline-block border-[6px] border-[#ff4455] px-8 py-3",style:{textShadow:"0 0 34px rgba(255,50,70,0.9)"},children:"ПОТРАЧЕНО"}),ie.jsx("div",{className:"mt-6 text-white/70 italic",children:"Тачка разбита, ты в больнице. Лечение — 15% кэша."}),ie.jsx("div",{className:"mt-6 flex justify-center",children:ie.jsx(qf,{stats:h})}),ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.respawn(),l("playing")},className:"btn-vice mt-8 bg-vice-pink text-white text-xl px-10 py-3.5 cursor-pointer",children:ie.jsx("span",{children:"РЕСПАВН"})})]})}),a==="passed"&&ie.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center",style:{background:"rgba(6,34,18,0.82)"},children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("div",{className:"stamp-anim font-display text-[52px] sm:text-[76px] leading-none text-vice-lime inline-block border-[6px] border-vice-lime px-8 py-4",style:{textShadow:"0 0 34px rgba(141,255,87,0.9)"},children:"МИССИЯ ВЫПОЛНЕНА"}),ie.jsx("div",{className:"mt-6 text-white/75 italic",children:"$5000 в кармане, плюс бонус $1000 за стиль. Город теперь твой."}),ie.jsx("div",{className:"mt-6 flex justify-center",children:ie.jsx(qf,{stats:h})}),ie.jsxs("div",{className:"mt-8 flex gap-4 justify-center",children:[ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.continueAfterPassed(),l("playing")},className:"btn-vice bg-vice-lime text-vice-navy text-xl px-8 py-3.5 cursor-pointer",children:ie.jsx("span",{children:"ГУЛЯТЬ ДАЛЬШЕ"})}),ie.jsx("button",{onClick:()=>{var C;(C=w())==null||C.restartFull(),l("playing")},className:"btn-vice bg-white/15 text-white text-xl px-8 py-3.5 cursor-pointer",style:{borderColor:"rgba(255,255,255,0.5)"},children:ie.jsx("span",{children:"С НАЧАЛА"})})]})]})})]})}hx.createRoot(document.getElementById("root")).render(ie.jsx(X1,{}));
