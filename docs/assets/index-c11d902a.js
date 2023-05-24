(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Ln(e,n){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function pt(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],l=je(o)?vF(o):pt(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(je(e))return e;if(Re(e))return e}}const mF=/;(?![^(]*\))/g,yF=/:([^]+)/,gF=/\/\*.*?\*\//gs;function vF(e){const n={};return e.replace(gF,"").split(mF).forEach(s=>{if(s){const o=s.split(yF);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Oe(e){let n="";if(je(e))n=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=Oe(e[s]);o&&(n+=o+" ")}else if(Re(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function De(e){if(!e)return null;let{class:n,style:s}=e;return n&&!je(n)&&(e.class=Oe(n)),s&&(e.style=pt(s)),e}const _F="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",xF="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Zu=Ln(_F),bF=Ln(xF),kF="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",CF=Ln(kF);function Gu(e){return!!e||e===""}const rs=e=>je(e)?e:e==null?"":ae(e)||Re(e)&&(e.toString===np||!pe(e.toString))?JSON.stringify(e,Qu,2):String(e),Qu=(e,n)=>n&&n.__v_isRef?Qu(e,n.value):Qn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:tp(n)?{[`Set(${n.size})`]:[...n.values()]}:Re(n)&&!ae(n)&&!sp(n)?String(n):n,He=Object.freeze({}),Ss=Object.freeze([]),ht=()=>{},ep=()=>!1,wF=/^on[^a-z]/,Mo=e=>wF.test(e),_l=e=>e.startsWith("onUpdate:"),Ve=Object.assign,La=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},SF=Object.prototype.hasOwnProperty,_e=(e,n)=>SF.call(e,n),ae=Array.isArray,Qn=e=>jo(e)==="[object Map]",tp=e=>jo(e)==="[object Set]",EF=e=>jo(e)==="[object RegExp]",pe=e=>typeof e=="function",je=e=>typeof e=="string",Ma=e=>typeof e=="symbol",Re=e=>e!==null&&typeof e=="object",ja=e=>Re(e)&&pe(e.then)&&pe(e.catch),np=Object.prototype.toString,jo=e=>np.call(e),Da=e=>jo(e).slice(8,-1),sp=e=>jo(e)==="[object Object]",Na=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cl=Ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),AF=Ln("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),jl=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},$F=/-(\w)/g,Zt=jl(e=>e.replace($F,(n,s)=>s?s.toUpperCase():"")),RF=/\B([A-Z])/g,fn=jl(e=>e.replace(RF,"-$1").toLowerCase()),as=jl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Un=jl(e=>e?`on${as(e)}`:""),go=(e,n)=>!Object.is(e,n),Cn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},xl=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Mr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},TF=e=>{const n=je(e)?Number(e):NaN;return isNaN(n)?e:n};let Li;const op=()=>Li||(Li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let bt;class lp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!n&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=bt;try{return bt=this,n()}finally{bt=s}}else bl("cannot run an inactive effect scope.")}on(){bt=this}off(){bt=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function OF(e){return new lp(e)}function IF(e,n=bt){n&&n.active&&n.effects.push(e)}function Va(){return bt}function rp(e){bt?bt.cleanups.push(e):bl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ja=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ap=e=>(e.w&Pn)>0,ip=e=>(e.n&Pn)>0,PF=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Pn},HF=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];ap(l)&&!ip(l)?l.delete(e):n[s++]=l,l.w&=~Pn,l.n&=~Pn}n.length=s}},jr=new WeakMap;let Qs=0,Pn=1;const Dr=30;let ut;const es=Symbol("iterate"),Nr=Symbol("Map key iterate");class Ua{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,IF(this,o)}run(){if(!this.active)return this.fn();let n=ut,s=An;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ut,ut=this,An=!0,Pn=1<<++Qs,Qs<=Dr?PF(this):Mi(this),this.fn()}finally{Qs<=Dr&&HF(this),Pn=1<<--Qs,ut=this.parent,An=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let An=!0;const cp=[];function cs(){cp.push(An),An=!1}function us(){const e=cp.pop();An=e===void 0?!0:e}function yt(e,n,s){if(An&&ut){let o=jr.get(e);o||jr.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=Ja()),up(l,{effect:ut,target:e,type:n,key:s})}}function up(e,n){let s=!1;Qs<=Dr?ip(e)||(e.n|=Pn,s=!ap(e)):s=!e.has(ut),s&&(e.add(ut),ut.deps.push(e),ut.onTrack&&ut.onTrack(Object.assign({effect:ut},n)))}function Fn(e,n,s,o,l,r){const a=jr.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const u=Number(o);a.forEach((d,f)=>{(f==="length"||f>=u)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(e)?Na(s)&&i.push(a.get("length")):(i.push(a.get(es)),Qn(e)&&i.push(a.get(Nr)));break;case"delete":ae(e)||(i.push(a.get(es)),Qn(e)&&i.push(a.get(Nr)));break;case"set":Qn(e)&&i.push(a.get(es));break}const c={target:e,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Vr(i[0],c);else{const u=[];for(const d of i)d&&u.push(...d);Vr(Ja(u),c)}}function Vr(e,n){const s=ae(e)?e:[...e];for(const o of s)o.computed&&ji(o,n);for(const o of s)o.computed||ji(o,n)}function ji(e,n){(e!==ut||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ve({effect:e},n)),e.scheduler?e.scheduler():e.run())}const BF=Ln("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ma)),LF=Dl(),MF=Dl(!1,!0),jF=Dl(!0),DF=Dl(!0,!0),Di=NF();function NF(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=Fe(this);for(let r=0,a=this.length;r<a;r++)yt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(Fe)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){cs();const o=Fe(this)[n].apply(this,s);return us(),o}}),e}function VF(e){const n=Fe(this);return yt(n,"has",e),n.hasOwnProperty(e)}function Dl(e=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(e?n?vp:gp:n?yp:mp).get(o))return o;const a=ae(o);if(!e){if(a&&_e(Di,l))return Reflect.get(Di,l,r);if(l==="hasOwnProperty")return VF}const i=Reflect.get(o,l,r);return(Ma(l)?pp.has(l):BF(l))||(e||yt(o,"get",l),n)?i:$e(i)?a&&Na(l)?i:i.value:Re(i)?e?Kt(i):Ne(i):i}}const JF=dp(),UF=dp(!0);function dp(e=!1){return function(s,o,l,r){let a=s[o];if(Hn(a)&&$e(a)&&!$e(l))return!1;if(!e&&(!kl(l)&&!Hn(l)&&(a=Fe(a),l=Fe(l)),!ae(s)&&$e(a)&&!$e(l)))return a.value=l,!0;const i=ae(s)&&Na(o)?Number(o)<s.length:_e(s,o),c=Reflect.set(s,o,l,r);return s===Fe(r)&&(i?go(l,a)&&Fn(s,"set",o,l,a):Fn(s,"add",o,l)),c}}function qF(e,n){const s=_e(e,n),o=e[n],l=Reflect.deleteProperty(e,n);return l&&s&&Fn(e,"delete",n,void 0,o),l}function XF(e,n){const s=Reflect.has(e,n);return(!Ma(n)||!pp.has(n))&&yt(e,"has",n),s}function WF(e){return yt(e,"iterate",ae(e)?"length":es),Reflect.ownKeys(e)}const fp={get:LF,set:JF,deleteProperty:qF,has:XF,ownKeys:WF},Fp={get:jF,set(e,n){return bl(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return bl(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},zF=Ve({},fp,{get:MF,set:UF}),KF=Ve({},Fp,{get:DF}),qa=e=>e,Nl=e=>Reflect.getPrototypeOf(e);function Yo(e,n,s=!1,o=!1){e=e.__v_raw;const l=Fe(e),r=Fe(n);s||(n!==r&&yt(l,"get",n),yt(l,"get",r));const{has:a}=Nl(l),i=o?qa:s?Xa:vo;if(a.call(l,n))return i(e.get(n));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(n)}function Zo(e,n=!1){const s=this.__v_raw,o=Fe(s),l=Fe(e);return n||(e!==l&&yt(o,"has",e),yt(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function Go(e,n=!1){return e=e.__v_raw,!n&&yt(Fe(e),"iterate",es),Reflect.get(e,"size",e)}function Ni(e){e=Fe(e);const n=Fe(this);return Nl(n).has.call(n,e)||(n.add(e),Fn(n,"add",e,e)),this}function Vi(e,n){n=Fe(n);const s=Fe(this),{has:o,get:l}=Nl(s);let r=o.call(s,e);r?hp(s,o,e):(e=Fe(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,n),r?go(n,a)&&Fn(s,"set",e,n,a):Fn(s,"add",e,n),this}function Ji(e){const n=Fe(this),{has:s,get:o}=Nl(n);let l=s.call(n,e);l?hp(n,s,e):(e=Fe(e),l=s.call(n,e));const r=o?o.call(n,e):void 0,a=n.delete(e);return l&&Fn(n,"delete",e,void 0,r),a}function Ui(){const e=Fe(this),n=e.size!==0,s=Qn(e)?new Map(e):new Set(e),o=e.clear();return n&&Fn(e,"clear",void 0,void 0,s),o}function Qo(e,n){return function(o,l){const r=this,a=r.__v_raw,i=Fe(a),c=n?qa:e?Xa:vo;return!e&&yt(i,"iterate",es),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function el(e,n,s){return function(...o){const l=this.__v_raw,r=Fe(l),a=Qn(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=l[e](...o),d=s?qa:n?Xa:vo;return!n&&yt(r,"iterate",c?Nr:es),{next(){const{value:f,done:F}=u.next();return F?{value:f,done:F}:{value:i?[d(f[0]),d(f[1])]:d(f),done:F}},[Symbol.iterator](){return this}}}}function yn(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${as(e)} operation ${s}failed: target is readonly.`,Fe(this))}return e==="delete"?!1:this}}function YF(){const e={get(r){return Yo(this,r)},get size(){return Go(this)},has:Zo,add:Ni,set:Vi,delete:Ji,clear:Ui,forEach:Qo(!1,!1)},n={get(r){return Yo(this,r,!1,!0)},get size(){return Go(this)},has:Zo,add:Ni,set:Vi,delete:Ji,clear:Ui,forEach:Qo(!1,!0)},s={get(r){return Yo(this,r,!0)},get size(){return Go(this,!0)},has(r){return Zo.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Qo(!0,!1)},o={get(r){return Yo(this,r,!0,!0)},get size(){return Go(this,!0)},has(r){return Zo.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=el(r,!1,!1),s[r]=el(r,!0,!1),n[r]=el(r,!1,!0),o[r]=el(r,!0,!0)}),[e,s,n,o]}const[ZF,GF,QF,eh]=YF();function Vl(e,n){const s=n?e?eh:QF:e?GF:ZF;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(_e(s,l)&&l in o?s:o,l,r)}const th={get:Vl(!1,!1)},nh={get:Vl(!1,!0)},sh={get:Vl(!0,!1)},oh={get:Vl(!0,!0)};function hp(e,n,s){const o=Fe(s);if(o!==s&&n.call(e,o)){const l=Da(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const mp=new WeakMap,yp=new WeakMap,gp=new WeakMap,vp=new WeakMap;function lh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rh(e){return e.__v_skip||!Object.isExtensible(e)?0:lh(Da(e))}function Ne(e){return Hn(e)?e:Jl(e,!1,fp,th,mp)}function ah(e){return Jl(e,!1,zF,nh,yp)}function Kt(e){return Jl(e,!0,Fp,sh,gp)}function ks(e){return Jl(e,!0,KF,oh,vp)}function Jl(e,n,s,o,l){if(!Re(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=rh(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function ts(e){return Hn(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function Hn(e){return!!(e&&e.__v_isReadonly)}function kl(e){return!!(e&&e.__v_isShallow)}function Jr(e){return ts(e)||Hn(e)}function Fe(e){const n=e&&e.__v_raw;return n?Fe(n):e}function Ul(e){return xl(e,"__v_skip",!0),e}const vo=e=>Re(e)?Ne(e):e,Xa=e=>Re(e)?Kt(e):e;function Wa(e){An&&ut&&(e=Fe(e),up(e.dep||(e.dep=Ja()),{target:e,type:"get",key:"value"}))}function za(e,n){e=Fe(e);const s=e.dep;s&&Vr(s,{target:e,type:"set",key:"value",newValue:n})}function $e(e){return!!(e&&e.__v_isRef===!0)}function U(e){return _p(e,!1)}function Gt(e){return _p(e,!0)}function _p(e,n){return $e(e)?e:new ih(e,n)}class ih{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:Fe(n),this._value=s?n:vo(n)}get value(){return Wa(this),this._value}set value(n){const s=this.__v_isShallow||kl(n)||Hn(n);n=s?n:Fe(n),go(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:vo(n),za(this,n))}}function C(e){return $e(e)?e.value:e}const ch={get:(e,n,s)=>C(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const l=e[n];return $e(l)&&!$e(s)?(l.value=s,!0):Reflect.set(e,n,s,o)}};function xp(e){return ts(e)?e:new Proxy(e,ch)}class uh{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Wa(this),()=>za(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function ph(e){return new uh(e)}var bp;class dh{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[bp]=!1,this._dirty=!0,this.effect=new Ua(n,()=>{this._dirty||(this._dirty=!0,za(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=Fe(this);return Wa(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}bp="__v_isReadonly";function fh(e,n,s=!1){let o,l;const r=pe(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new dh(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const ns=[];function ul(e){ns.push(e)}function pl(){ns.pop()}function P(e,...n){cs();const s=ns.length?ns[ns.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=Fh();if(o)pn(o,s,11,[e+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${er(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...n];l.length&&r.push(`
`,...hh(l)),console.warn(...r)}us()}function Fh(){let e=ns[ns.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function hh(e){const n=[];return e.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...mh(s))}),n}function mh({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${er(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...yh(e.props),r]:[l+r]}function yh(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{n.push(...kp(o,e[o]))}),s.length>3&&n.push(" ..."),n}function kp(e,n,s){return je(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:$e(n)?(n=kp(e,Fe(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):pe(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=Fe(n),s?n:[`${e}=`,n])}function gh(e,n){e!==void 0&&(typeof e!="number"?P(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&P(`${n} is NaN - the duration expression might be incorrect.`))}const Ka={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function pn(e,n,s,o){let l;try{l=o?e(...o):e()}catch(r){ql(r,n,s)}return l}function It(e,n,s,o){if(pe(e)){const r=pn(e,n,s,o);return r&&ja(r)&&r.catch(a=>{ql(a,n,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(It(e[r],n,s,o));return l}function ql(e,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=Ka[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){pn(c,null,10,[e,a,i]);return}}vh(e,s,l,o)}function vh(e,n,s,o=!0){{const l=Ka[n];if(s&&ul(s),P(`Unhandled error${l?` during execution of ${l}`:""}`),s&&pl(),o)throw e;console.error(e)}}let _o=!1,Ur=!1;const ot=[];let Wt=0;const Es=[];let Xt=null,xn=0;const Cp=Promise.resolve();let Ya=null;const _h=100;function tt(e){const n=Ya||Cp;return e?n.then(this?e.bind(this):e):n}function xh(e){let n=Wt+1,s=ot.length;for(;n<s;){const o=n+s>>>1;xo(ot[o])<e?n=o+1:s=o}return n}function Xl(e){(!ot.length||!ot.includes(e,_o&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?ot.push(e):ot.splice(xh(e.id),0,e),wp())}function wp(){!_o&&!Ur&&(Ur=!0,Ya=Cp.then(Ap))}function bh(e){const n=ot.indexOf(e);n>Wt&&ot.splice(n,1)}function Sp(e){ae(e)?Es.push(...e):(!Xt||!Xt.includes(e,e.allowRecurse?xn+1:xn))&&Es.push(e),wp()}function qi(e,n=_o?Wt+1:0){for(e=e||new Map;n<ot.length;n++){const s=ot[n];if(s&&s.pre){if(Za(e,s))continue;ot.splice(n,1),n--,s()}}}function Ep(e){if(Es.length){const n=[...new Set(Es)];if(Es.length=0,Xt){Xt.push(...n);return}for(Xt=n,e=e||new Map,Xt.sort((s,o)=>xo(s)-xo(o)),xn=0;xn<Xt.length;xn++)Za(e,Xt[xn])||Xt[xn]();Xt=null,xn=0}}const xo=e=>e.id==null?1/0:e.id,kh=(e,n)=>{const s=xo(e)-xo(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function Ap(e){Ur=!1,_o=!0,e=e||new Map,ot.sort(kh);const n=s=>Za(e,s);try{for(Wt=0;Wt<ot.length;Wt++){const s=ot[Wt];if(s&&s.active!==!1){if(n(s))continue;pn(s,null,14)}}}finally{Wt=0,ot.length=0,Ep(e),_o=!1,Ya=null,(ot.length||Es.length)&&Ap(e)}}function Za(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>_h){const o=n.ownerInstance,l=o&&wo(o.type);return P(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let $n=!1;const _s=new Set;op().__VUE_HMR_RUNTIME__={createRecord:rr($p),rerender:rr(Sh),reload:rr(Eh)};const is=new Map;function Ch(e){const n=e.type.__hmrId;let s=is.get(n);s||($p(n,e.type),s=is.get(n)),s.instances.add(e)}function wh(e){is.get(e.type.__hmrId).instances.delete(e)}function $p(e,n){return is.has(e)?!1:(is.set(e,{initialDef:oo(n),instances:new Set}),!0)}function oo(e){return id(e)?e.__vccOpts:e}function Sh(e,n){const s=is.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,oo(o.type).render=n),o.renderCache=[],$n=!0,o.update(),$n=!1}))}function Eh(e,n){const s=is.get(e);if(!s)return;n=oo(n),Xi(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=oo(l.type);_s.has(r)||(r!==s.initialDef&&Xi(r,n),_s.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(_s.add(r),l.ceReload(n.styles),_s.delete(r)):l.parent?Xl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Sp(()=>{for(const l of o)_s.delete(oo(l.type))})}function Xi(e,n){Ve(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function rr(e){return(n,s)=>{try{return e(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let zt,eo=[],qr=!1;function Do(e,...n){zt?zt.emit(e,...n):qr||eo.push({event:e,args:n})}function Rp(e,n){var s,o;zt=e,zt?(zt.enabled=!0,eo.forEach(({event:l,args:r})=>zt.emit(l,...r)),eo=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Rp(r,n)}),setTimeout(()=>{zt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,qr=!0,eo=[])},3e3)):(qr=!0,eo=[])}function Ah(e,n){Do("app:init",e,n,{Fragment:Ae,Text:Uo,Comment:Qe,Static:dl})}function $h(e){Do("app:unmount",e)}const Xr=Ga("component:added"),Tp=Ga("component:updated"),Rh=Ga("component:removed"),Th=e=>{zt&&typeof zt.cleanupBuffer=="function"&&!zt.cleanupBuffer(e)&&Rh(e)};function Ga(e){return n=>{Do(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Oh=Op("perf:start"),Ih=Op("perf:end");function Op(e){return(n,s,o)=>{Do(e,n.appContext.app,n.uid,n,s,o)}}function Ph(e,n,s){Do("component:emit",e.appContext.app,e,n,s)}function Hh(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||He;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(n in d))(!f||!(Un(n)in f))&&P(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Un(n)}" prop.`);else{const F=d[n];pe(F)&&(F(...s)||P(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:F}=o[d]||He;F&&(l=s.map(h=>je(h)?h.trim():h)),f&&(l=s.map(Mr))}Ph(e,n,l);{const d=n.toLowerCase();d!==n&&o[Un(d)]&&P(`Event "${d}" is emitted in component ${er(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${fn(n)}" instead of "${n}".`)}let i,c=o[i=Un(n)]||o[i=Un(Zt(n))];!c&&r&&(c=o[i=Un(fn(n))]),c&&It(c,e,6,l);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,It(u,e,6,l)}}function Ip(e,n,s=!1){const o=n.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!pe(e)){const c=u=>{const d=Ip(u,n,!0);d&&(i=!0,Ve(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Re(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):Ve(a,r),Re(e)&&o.set(e,a),a)}function Wl(e,n){return!e||!Mo(n)?!1:(n=n.slice(2).replace(/Once$/,""),_e(e,n[0].toLowerCase()+n.slice(1))||_e(e,fn(n))||_e(e,n))}let Ze=null,zl=null;function Cl(e){const n=Ze;return Ze=e,zl=e&&e.type.__scopeId||null,n}function Bh(e){zl=e}function Lh(){zl=null}function Q(e,n=Ze,s){if(!n||e._n)return e;const o=(...l)=>{o._d&&lc(-1);const r=Cl(n);let a;try{a=e(...l)}finally{Cl(r),o._d&&lc(1)}return Tp(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let Wr=!1;function wl(){Wr=!0}function ar(e){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:f,data:F,setupState:h,ctx:m,inheritAttrs:g}=e;let v,k;const x=Cl(e);Wr=!1;try{if(s.shapeFlag&4){const T=l||o;v=jt(d.call(T,T,f,r,h,F,m)),k=c}else{const T=n;c===r&&wl(),v=jt(T.length>1?T(r,{get attrs(){return wl(),c},slots:i,emit:u}):T(r,null)),k=n.props?c:jh(c)}}catch(T){ro.length=0,ql(T,e,1),v=X(Qe)}let b=v,w;if(v.patchFlag>0&&v.patchFlag&2048&&([b,w]=Mh(v)),k&&g!==!1){const T=Object.keys(k),{shapeFlag:H}=b;if(T.length){if(H&7)a&&T.some(_l)&&(k=Dh(k,a)),b=Vt(b,k);else if(!Wr&&b.type!==Qe){const N=Object.keys(c),$=[],j=[];for(let Z=0,ie=N.length;Z<ie;Z++){const q=N[Z];Mo(q)?_l(q)||$.push(q[2].toLowerCase()+q.slice(3)):j.push(q)}j.length&&P(`Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$.length&&P(`Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(Wi(b)||P("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=Vt(b),b.dirs=b.dirs?b.dirs.concat(s.dirs):s.dirs),s.transition&&(Wi(b)||P("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=s.transition),w?w(b):v=b,Cl(x),v}const Mh=e=>{const n=e.children,s=e.dynamicChildren,o=Pp(n);if(!o)return[e,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{n[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[jt(o),a]};function Pp(e){let n;for(let s=0;s<e.length;s++){const o=e[s];if(Qt(o)){if(o.type!==Qe||o.children==="v-if"){if(n)return;n=o}}else return}return n}const jh=e=>{let n;for(const s in e)(s==="class"||s==="style"||Mo(s))&&((n||(n={}))[s]=e[s]);return n},Dh=(e,n)=>{const s={};for(const o in e)(!_l(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s},Wi=e=>e.shapeFlag&7||e.type===Qe;function Nh(e,n,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if((l||i)&&$n||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?zi(o,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const F=d[f];if(a[F]!==o[F]&&!Wl(u,F))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?zi(o,a,u):!0:!!a;return!1}function zi(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==e[r]&&!Wl(s,r))return!0}return!1}function Vh({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const Hp=e=>e.__isSuspense;function Jh(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):Sp(e)}function kt(e,n){if(!Je)P("provide() can only be used inside setup().");else{let s=Je.provides;const o=Je.parent&&Je.parent.provides;o===s&&(s=Je.provides=Object.create(o)),s[e]=n}}function K(e,n,s=!1){const o=Je||Ze;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&pe(n)?n.call(o.proxy):n;P(`injection "${String(e)}" not found.`)}else P("inject() can only be used inside setup() or functional components.")}function ps(e,n){return Qa(e,null,n)}const tl={};function me(e,n,s){return pe(n)||P("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Qa(e,n,s)}function Qa(e,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=He){n||(s!==void 0&&P('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&P('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=w=>{P("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Va()===(Je==null?void 0:Je.scope)?Je:null;let u,d=!1,f=!1;if($e(e)?(u=()=>e.value,d=kl(e)):ts(e)?(u=()=>e,o=!0):ae(e)?(f=!0,d=e.some(w=>ts(w)||kl(w)),u=()=>e.map(w=>{if($e(w))return w.value;if(ts(w))return Yn(w);if(pe(w))return pn(w,c,2);i(w)})):pe(e)?n?u=()=>pn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return F&&F(),It(e,c,3,[h])}:(u=ht,i(e)),n&&o){const w=u;u=()=>Yn(w())}let F,h=w=>{F=x.onStop=()=>{pn(w,c,4)}},m;if(Co)if(h=ht,n?s&&It(n,c,3,[u(),f?[]:void 0,h]):u(),l==="sync"){const w=Km();m=w.__watcherHandles||(w.__watcherHandles=[])}else return ht;let g=f?new Array(e.length).fill(tl):tl;const v=()=>{if(x.active)if(n){const w=x.run();(o||d||(f?w.some((T,H)=>go(T,g[H])):go(w,g)))&&(F&&F(),It(n,c,3,[w,g===tl?void 0:f&&g[0]===tl?[]:g,h]),g=w)}else x.run()};v.allowRecurse=!!n;let k;l==="sync"?k=v:l==="post"?k=()=>et(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),k=()=>Xl(v));const x=new Ua(u,k);x.onTrack=r,x.onTrigger=a,n?s?v():g=x.run():l==="post"?et(x.run.bind(x),c&&c.suspense):x.run();const b=()=>{x.stop(),c&&c.scope&&La(c.scope.effects,x)};return m&&m.push(b),b}function Uh(e,n,s){const o=this.proxy,l=je(e)?e.includes(".")?Bp(o,e):()=>o[e]:e.bind(o,o);let r;pe(n)?r=n:(r=n.handler,s=n);const a=Je;Hs(this);const i=Qa(l,r.bind(o),s);return a?Hs(a):os(),i}function Bp(e,n){const s=n.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function Yn(e,n){if(!Re(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),$e(e))Yn(e.value,n);else if(ae(e))for(let s=0;s<e.length;s++)Yn(e[s],n);else if(tp(e)||Qn(e))e.forEach(s=>{Yn(s,n)});else if(sp(e))for(const s in e)Yn(e[s],n);return e}function Lp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{e.isMounted=!0}),Vo(()=>{e.isUnmounting=!0}),e}const $t=[Function,Array],qh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(e,{slots:n}){const s=At(),o=Lp();let l;return()=>{const r=n.default&&ei(n.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let g=!1;for(const v of r)if(v.type!==Qe){if(g){P("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=v,g=!0}}const i=Fe(e),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&P(`invalid <transition> mode: ${c}`),o.isLeaving)return ir(a);const u=Ki(a);if(!u)return ir(a);const d=bo(u,i,o,s);Is(u,d);const f=s.subTree,F=f&&Ki(f);let h=!1;const{getTransitionKey:m}=u.type;if(m){const g=m();l===void 0?l=g:g!==l&&(l=g,h=!0)}if(F&&F.type!==Qe&&(!Sn(u,F)||h)){const g=bo(F,i,o,s);if(Is(F,g),c==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},ir(a);c==="in-out"&&u.type!==Qe&&(g.delayLeave=(v,k,x)=>{const b=Mp(o,F);b[String(F.key)]=F,v._leaveCb=()=>{k(),v._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=x})}return a}}},Xh=qh;function Mp(e,n){const{leavingVNodes:s}=e;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function bo(e,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:F,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:k,onAppearCancelled:x}=n,b=String(e.key),w=Mp(s,e),T=($,j)=>{$&&It($,o,9,j)},H=($,j)=>{const Z=j[1];T($,j),ae($)?$.every(ie=>ie.length<=1)&&Z():$.length<=1&&Z()},N={mode:r,persisted:a,beforeEnter($){let j=i;if(!s.isMounted)if(l)j=g||i;else return;$._leaveCb&&$._leaveCb(!0);const Z=w[b];Z&&Sn(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),T(j,[$])},enter($){let j=c,Z=u,ie=d;if(!s.isMounted)if(l)j=v||c,Z=k||u,ie=x||d;else return;let q=!1;const ce=$._enterCb=Te=>{q||(q=!0,Te?T(ie,[$]):T(Z,[$]),N.delayedLeave&&N.delayedLeave(),$._enterCb=void 0)};j?H(j,[$,ce]):ce()},leave($,j){const Z=String(e.key);if($._enterCb&&$._enterCb(!0),s.isUnmounting)return j();T(f,[$]);let ie=!1;const q=$._leaveCb=ce=>{ie||(ie=!0,j(),ce?T(m,[$]):T(h,[$]),$._leaveCb=void 0,w[Z]===e&&delete w[Z])};w[Z]=e,F?H(F,[$,q]):q()},clone($){return bo($,n,s,o)}};return N}function ir(e){if(No(e))return e=Vt(e),e.children=null,e}function Ki(e){return No(e)?e.children?e.children[0]:void 0:e}function Is(e,n){e.shapeFlag&6&&e.component?Is(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ei(e,n=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Ae?(a.patchFlag&128&&l++,o=o.concat(ei(a.children,n,i))):(n||a.type!==Qe)&&o.push(i!=null?Vt(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function we(e){return pe(e)?{setup:e,name:e.name}:e}const As=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive,Wh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=At(),o=s.ctx;if(!o.renderer)return()=>{const x=n.default&&n.default();return x&&x.length===1?x[0]:x};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,F=f("div");o.activate=(x,b,w,T,H)=>{const N=x.component;u(x,b,w,0,i),c(N.vnode,x,b,w,N,i,T,x.slotScopeIds,H),et(()=>{N.isDeactivated=!1,N.a&&Cn(N.a);const $=x.props&&x.props.onVnodeMounted;$&&Rt($,N.parent,x)},i),Xr(N)},o.deactivate=x=>{const b=x.component;u(x,F,null,1,i),et(()=>{b.da&&Cn(b.da);const w=x.props&&x.props.onVnodeUnmounted;w&&Rt(w,b.parent,x),b.isDeactivated=!0},i),Xr(b)};function h(x){cr(x),d(x,s,i,!0)}function m(x){l.forEach((b,w)=>{const T=wo(b.type);T&&(!x||!x(T))&&g(w)})}function g(x){const b=l.get(x);!a||!Sn(b,a)?h(b):a&&cr(a),l.delete(x),r.delete(x)}me(()=>[e.include,e.exclude],([x,b])=>{x&&m(w=>to(x,w)),b&&m(w=>!to(b,w))},{flush:"post",deep:!0});let v=null;const k=()=>{v!=null&&l.set(v,ur(s.subTree))};return ds(k),Yl(k),Vo(()=>{l.forEach(x=>{const{subTree:b,suspense:w}=s,T=ur(b);if(x.type===T.type&&x.key===T.key){cr(T);const H=T.component.da;H&&et(H,w);return}h(x)})}),()=>{if(v=null,!n.default)return null;const x=n.default(),b=x[0];if(x.length>1)return P("KeepAlive should contain exactly one component child."),a=null,x;if(!Qt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let w=ur(b);const T=w.type,H=wo(As(w)?w.type.__asyncResolved||{}:T),{include:N,exclude:$,max:j}=e;if(N&&(!H||!to(N,H))||$&&H&&to($,H))return a=w,b;const Z=w.key==null?T:w.key,ie=l.get(Z);return w.el&&(w=Vt(w),b.shapeFlag&128&&(b.ssContent=w)),v=Z,ie?(w.el=ie.el,w.component=ie.component,w.transition&&Is(w,w.transition),w.shapeFlag|=512,r.delete(Z),r.add(Z)):(r.add(Z),j&&r.size>parseInt(j,10)&&g(r.values().next().value)),w.shapeFlag|=256,a=w,Hp(b.type)?b:w}}},jp=Wh;function to(e,n){return ae(e)?e.some(s=>to(s,n)):je(e)?e.split(",").includes(n):EF(e)?e.test(n):!1}function Dp(e,n){Vp(e,"a",n)}function Np(e,n){Vp(e,"da",n)}function Vp(e,n,s=Je){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Kl(n,o,s),s){let l=s.parent;for(;l&&l.parent;)No(l.parent.vnode)&&zh(o,n,s,l),l=l.parent}}function zh(e,n,s,o){const l=Kl(n,e,o,!0);Zl(()=>{La(o[n],l)},s)}function cr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ur(e){return e.shapeFlag&128?e.ssContent:e}function Kl(e,n,s=Je,o=!1){if(s){const l=s[e]||(s[e]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;cs(),Hs(s);const i=It(n,s,e,a);return os(),us(),i});return o?l.unshift(r):l.push(r),r}else{const l=Un(Ka[e].replace(/ hook$/,""));P(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const hn=e=>(n,s=Je)=>(!Co||e==="sp")&&Kl(e,(...o)=>n(...o),s),Kh=hn("bm"),ds=hn("m"),Yh=hn("bu"),Yl=hn("u"),Vo=hn("bum"),Zl=hn("um"),Zh=hn("sp"),Gh=hn("rtg"),Qh=hn("rtc");function em(e,n=Je){Kl("ec",e,n)}function Jp(e){AF(e)&&P("Do not use built-in directive ids as custom directive id: "+e)}function Nt(e,n){const s=Ze;if(s===null)return P("withDirectives can only be used inside render functions."),e;const o=Ql(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=He]=n[r];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&Yn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function Mn(e,n,s,o){const l=e.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(cs(),It(c,s,8,[e.el,i,e,n]),us())}}const zr="components",tm="directives";function Ps(e,n){return Up(zr,e,!0,n)||e}const nm=Symbol();function Sl(e){return Up(tm,e)}function Up(e,n,s=!0,o=!1){const l=Ze||Je;if(l){const r=l.type;if(e===zr){const i=wo(r,!1);if(i&&(i===n||i===Zt(n)||i===as(Zt(n))))return r}const a=Yi(l[e]||r[e],n)||Yi(l.appContext[e],n);if(!a&&o)return r;if(s&&!a){const i=e===zr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";P(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return a}else P(`resolve${as(e.slice(0,-1))} can only be used in render() or setup().`)}function Yi(e,n){return e&&(e[n]||e[Zt(n)]||e[as(Zt(n))])}function Jo(e,n,s,o){let l;const r=s&&s[o];if(ae(e)||je(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=n(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||P(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(Re(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=n(e[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function gt(e,n,s={},o,l){if(Ze.isCE||Ze.parent&&As(Ze.parent)&&Ze.parent.isCE)return n!=="default"&&(s.name=n),X("slot",s,o&&o());let r=e[n];r&&r.length>1&&(P("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),E();const a=r&&qp(r(s)),i=ne(Ae,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function qp(e){return e.some(n=>Qt(n)?!(n.type===Qe||n.type===Ae&&!qp(n.children)):!0)?e:null}const Kr=e=>e?ld(e)?Ql(e)||e.proxy:Kr(e.parent):null,ss=Ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ks(e.props),$attrs:e=>ks(e.attrs),$slots:e=>ks(e.slots),$refs:e=>ks(e.refs),$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>ni(e),$forceUpdate:e=>e.f||(e.f=()=>Xl(e.update)),$nextTick:e=>e.n||(e.n=tt.bind(e.proxy)),$watch:e=>Uh.bind(e)}),ti=e=>e==="_"||e==="$",pr=(e,n)=>e!==He&&!e.__isScriptSetup&&_e(e,n),Xp={get({_:e},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(pr(o,n))return a[n]=1,o[n];if(l!==He&&_e(l,n))return a[n]=2,l[n];if((u=e.propsOptions[0])&&_e(u,n))return a[n]=3,r[n];if(s!==He&&_e(s,n))return a[n]=4,s[n];Yr&&(a[n]=0)}}const d=ss[n];let f,F;if(d)return n==="$attrs"&&(yt(e,"get",n),wl()),d(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==He&&_e(s,n))return a[n]=4,s[n];if(F=c.config.globalProperties,_e(F,n))return F[n];Ze&&(!je(n)||n.indexOf("__v")!==0)&&(l!==He&&ti(n[0])&&_e(l,n)?P(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&P(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:o,setupState:l,ctx:r}=e;return pr(l,n)?(l[n]=s,!0):l.__isScriptSetup&&_e(l,n)?(P(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==He&&_e(o,n)?(o[n]=s,!0):_e(e.props,n)?(P(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(P(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==He&&_e(e,a)||pr(n,a)||(i=r[0])&&_e(i,a)||_e(o,a)||_e(ss,a)||_e(l.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:_e(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};Xp.ownKeys=e=>(P("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function sm(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ss).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>ss[s](e),set:ht})}),n}function om(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:ht})})}function lm(e){const{ctx:n,setupState:s}=e;Object.keys(Fe(s)).forEach(o=>{if(!s.__isScriptSetup){if(ti(o[0])){P(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:ht})}})}function rm(){const e=Object.create(null);return(n,s)=>{e[s]?P(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let Yr=!0;function am(e){const n=ni(e),s=e.proxy,o=e.ctx;Yr=!1,n.beforeCreate&&Zi(n.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:f,mounted:F,beforeUpdate:h,updated:m,activated:g,deactivated:v,beforeDestroy:k,beforeUnmount:x,destroyed:b,unmounted:w,render:T,renderTracked:H,renderTriggered:N,errorCaptured:$,serverPrefetch:j,expose:Z,inheritAttrs:ie,components:q,directives:ce,filters:Te}=n,Xe=rm();{const[W]=e.propsOptions;if(W)for(const re in W)Xe("Props",re)}if(u&&im(u,o,Xe,e.appContext.config.unwrapInjectedRef),a)for(const W in a){const re=a[W];pe(re)?(Object.defineProperty(o,W,{value:re.bind(s),configurable:!0,enumerable:!0,writable:!0}),Xe("Methods",W)):P(`Method "${W}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`)}if(l){pe(l)||P("The data option must be a function. Plain object usage is no longer supported.");const W=l.call(s,s);if(ja(W)&&P("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(W))P("data() should return an object.");else{e.data=Ne(W);for(const re in W)Xe("Data",re),ti(re[0])||Object.defineProperty(o,re,{configurable:!0,enumerable:!0,get:()=>W[re],set:ht})}}if(Yr=!0,r)for(const W in r){const re=r[W],ge=pe(re)?re.bind(s,s):pe(re.get)?re.get.bind(s,s):ht;ge===ht&&P(`Computed property "${W}" has no getter.`);const Ie=!pe(re)&&pe(re.set)?re.set.bind(s):()=>{P(`Write operation failed: computed property "${W}" is readonly.`)},vt=R({get:ge,set:Ie});Object.defineProperty(o,W,{enumerable:!0,configurable:!0,get:()=>vt.value,set:st=>vt.value=st}),Xe("Computed",W)}if(i)for(const W in i)Wp(i[W],o,s,W);if(c){const W=pe(c)?c.call(s):c;Reflect.ownKeys(W).forEach(re=>{kt(re,W[re])})}d&&Zi(d,e,"c");function Be(W,re){ae(re)?re.forEach(ge=>W(ge.bind(s))):re&&W(re.bind(s))}if(Be(Kh,f),Be(ds,F),Be(Yh,h),Be(Yl,m),Be(Dp,g),Be(Np,v),Be(em,$),Be(Qh,H),Be(Gh,N),Be(Vo,x),Be(Zl,w),Be(Zh,j),ae(Z))if(Z.length){const W=e.exposed||(e.exposed={});Z.forEach(re=>{Object.defineProperty(W,re,{get:()=>s[re],set:ge=>s[re]=ge})})}else e.exposed||(e.exposed={});T&&e.render===ht&&(e.render=T),ie!=null&&(e.inheritAttrs=ie),q&&(e.components=q),ce&&(e.directives=ce)}function im(e,n,s=ht,o=!1){ae(e)&&(e=Zr(e));for(const l in e){const r=e[l];let a;Re(r)?"default"in r?a=K(r.from||l,r.default,!0):a=K(r.from||l):a=K(r),$e(a)?o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(P(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[l]=a):n[l]=a,s("Inject",l)}}function Zi(e,n,s){It(ae(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function Wp(e,n,s,o){const l=o.includes(".")?Bp(s,o):()=>s[o];if(je(e)){const r=n[e];pe(r)?me(l,r):P(`Invalid watch handler specified by key "${e}"`,r)}else if(pe(e))me(l,e.bind(s));else if(Re(e))if(ae(e))e.forEach(r=>Wp(r,n,s,o));else{const r=pe(e.handler)?e.handler.bind(s):n[e.handler];pe(r)?me(l,r,e):P(`Invalid watch handler specified by key "${e.handler}"`,r)}else P(`Invalid watch option: "${o}"`,e)}function ni(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(u=>El(c,u,a,!0)),El(c,n,a)),Re(n)&&r.set(n,c),c}function El(e,n,s,o=!1){const{mixins:l,extends:r}=n;r&&El(e,r,s,!0),l&&l.forEach(a=>El(e,a,s,!0));for(const a in n)if(o&&a==="expose")P('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=cm[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const cm={data:Gi,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:qn,directives:qn,watch:pm,provide:Gi,inject:um};function Gi(e,n){return n?e?function(){return Ve(pe(e)?e.call(this,this):e,pe(n)?n.call(this,this):n)}:n:e}function um(e,n){return qn(Zr(e),Zr(n))}function Zr(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function at(e,n){return e?[...new Set([].concat(e,n))]:n}function qn(e,n){return e?Ve(Ve(Object.create(null),e),n):n}function pm(e,n){if(!e)return n;if(!n)return e;const s=Ve(Object.create(null),e);for(const o in n)s[o]=at(e[o],n[o]);return s}function dm(e,n,s,o=!1){const l={},r={};xl(r,Gl,1),e.propsDefaults=Object.create(null),zp(e,n,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);Yp(n||{},l,e),s?e.props=o?l:ah(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function fm(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Fm(e,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=Fe(l),[c]=e.propsOptions;let u=!1;if(!fm(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let F=d[f];if(Wl(e.emitsOptions,F))continue;const h=n[F];if(c)if(_e(r,F))h!==r[F]&&(r[F]=h,u=!0);else{const m=Zt(F);l[m]=Gr(c,i,m,h,e,!1)}else h!==r[F]&&(r[F]=h,u=!0)}}}else{zp(e,n,l,r)&&(u=!0);let d;for(const f in i)(!n||!_e(n,f)&&((d=fn(f))===f||!_e(n,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=Gr(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!n||!_e(n,f))&&(delete r[f],u=!0)}u&&Fn(e,"set","$attrs"),Yp(n||{},l,e)}function zp(e,n,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(cl(c))continue;const u=n[c];let d;l&&_e(l,d=Zt(c))?!r||!r.includes(d)?s[d]=u:(i||(i={}))[d]=u:Wl(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=Fe(s),u=i||He;for(let d=0;d<r.length;d++){const f=r[d];s[f]=Gr(l,c,f,u[f],e,!_e(u,f))}}return a}function Gr(e,n,s,o,l,r){const a=e[s];if(a!=null){const i=_e(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&pe(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(Hs(l),o=u[s]=c.call(null,n),os())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===fn(s))&&(o=!0))}return o}function Kp(e,n,s=!1){const o=n.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!pe(e)){const d=f=>{c=!0;const[F,h]=Kp(f,n,!0);Ve(a,F),h&&i.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Re(e)&&o.set(e,Ss),Ss;if(ae(r))for(let d=0;d<r.length;d++){je(r[d])||P("props must be strings when using array syntax.",r[d]);const f=Zt(r[d]);Qi(f)&&(a[f]=He)}else if(r){Re(r)||P("invalid props options",r);for(const d in r){const f=Zt(d);if(Qi(f)){const F=r[d],h=a[f]=ae(F)||pe(F)?{type:F}:Object.assign({},F);if(h){const m=tc(Boolean,h.type),g=tc(String,h.type);h[0]=m>-1,h[1]=g<0||m<g,(m>-1||_e(h,"default"))&&i.push(f)}}}}const u=[a,i];return Re(e)&&o.set(e,u),u}function Qi(e){return e[0]!=="$"?!0:(P(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Qr(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function ec(e,n){return Qr(e)===Qr(n)}function tc(e,n){return ae(n)?n.findIndex(s=>ec(s,e)):pe(n)&&ec(n,e)?0:-1}function Yp(e,n,s){const o=Fe(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&hm(r,o[r],a,!_e(e,r)&&!_e(e,fn(r)))}}function hm(e,n,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){P('Missing required prop: "'+e+'"');return}if(!(n==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=ae(l)?l:[l],u=[];for(let d=0;d<c.length&&!i;d++){const{valid:f,expectedType:F}=ym(n,c[d]);u.push(F||""),i=f}if(!i){P(gm(e,n,u));return}}a&&!a(n)&&P('Invalid prop: custom validator check failed for prop "'+e+'".')}}const mm=Ln("String,Number,Boolean,Function,Symbol,BigInt");function ym(e,n){let s;const o=Qr(n);if(mm(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof n)}else o==="Object"?s=Re(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:o}}function gm(e,n,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(as).join(" | ")}`;const l=s[0],r=Da(n),a=nc(n,l),i=nc(n,r);return s.length===1&&sc(l)&&!vm(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,sc(r)&&(o+=`with value ${i}.`),o}function nc(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function sc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function vm(...e){return e.some(n=>n.toLowerCase()==="boolean")}const Zp=e=>e[0]==="_"||e==="$stable",si=e=>ae(e)?e.map(jt):[jt(e)],_m=(e,n,s)=>{if(n._n)return n;const o=Q((...l)=>(Je&&P(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),si(n(...l))),s);return o._c=!1,o},Gp=(e,n,s)=>{const o=e._ctx;for(const l in e){if(Zp(l))continue;const r=e[l];if(pe(r))n[l]=_m(l,r,o);else if(r!=null){P(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=si(r);n[l]=()=>a}}},Qp=(e,n)=>{No(e.vnode)||P("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=si(n);e.slots.default=()=>s},xm=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=Fe(n),xl(n,"_",s)):Gp(n,e.slots={})}else e.slots={},n&&Qp(e,n);xl(e.slots,Gl,1)},bm=(e,n,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=He;if(o.shapeFlag&32){const i=n._;i?$n?Ve(l,n):s&&i===1?r=!1:(Ve(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Gp(n,l)),a=n}else n&&(Qp(e,n),a={default:1});if(r)for(const i in l)!Zp(i)&&!(i in a)&&delete l[i]};function ed(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Cm(e,n){return function(o,l=null){pe(o)||(o=Object.assign({},o)),l!=null&&!Re(l)&&(P("root props passed to app.mount() must be an object."),l=null);const r=ed(),a=new Set;let i=!1;const c=r.app={_uid:km++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:$l,get config(){return r.config},set config(u){P("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?P("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...d)):pe(u)?(a.add(u),u(c,...d)):P('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?P("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return na(u,r.config),d?(r.components[u]&&P(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return Jp(u),d?(r.directives[u]&&P(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(i)P("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&P("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const F=X(o,l);return F.appContext=r,r.reload=()=>{e(Vt(F),u,f)},d&&n?n(F,u):e(F,u,f),i=!0,c._container=u,u.__vue_app__=c,c._instance=F.component,Ah(c,$l),Ql(F.component)||F.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,$h(c),delete c._container.__vue_app__):P("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&P(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c}};return c}}function ea(e,n,s,o,l=!1){if(ae(e)){e.forEach((F,h)=>ea(F,n&&(ae(n)?n[h]:n),s,o,l));return}if(As(o)&&!l)return;const r=o.shapeFlag&4?Ql(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){P("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,d=i.refs===He?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(je(u)?(d[u]=null,_e(f,u)&&(f[u]=null)):$e(u)&&(u.value=null)),pe(c))pn(c,i,12,[a,d]);else{const F=je(c),h=$e(c);if(F||h){const m=()=>{if(e.f){const g=F?_e(f,c)?f[c]:d[c]:c.value;l?ae(g)&&La(g,r):ae(g)?g.includes(r)||g.push(r):F?(d[c]=[r],_e(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else F?(d[c]=a,_e(f,c)&&(f[c]=a)):h?(c.value=a,e.k&&(d[e.k]=a)):P("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,et(m,s)):m()}else P("Invalid template ref type:",c,`(${typeof c})`)}}let Ns,wn;function on(e,n){e.appContext.config.performance&&Al()&&wn.mark(`vue-${n}-${e.uid}`),Oh(e,n,Al()?wn.now():Date.now())}function ln(e,n){if(e.appContext.config.performance&&Al()){const s=`vue-${n}-${e.uid}`,o=s+":end";wn.mark(o),wn.measure(`<${er(e,e.type)}> ${n}`,s,o),wn.clearMarks(s),wn.clearMarks(o)}Ih(e,n,Al()?wn.now():Date.now())}function Al(){return Ns!==void 0||(typeof window<"u"&&window.performance?(Ns=!0,wn=window.performance):Ns=!1),Ns}function wm(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const et=Jh;function Sm(e){return Em(e)}function Em(e,n){wm();const s=op();s.__VUE__=!0,Rp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:F,setScopeId:h=ht,insertStaticContent:m}=e,g=(y,_,S,I=null,O=null,M=null,J=!1,L=null,D=$n?!1:!!_.dynamicChildren)=>{if(y===_)return;y&&!Sn(y,_)&&(I=G(y),ft(y,O,M,!0),y=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:B,ref:te,shapeFlag:ee}=_;switch(B){case Uo:v(y,_,S,I);break;case Qe:k(y,_,S,I);break;case dl:y==null?x(_,S,I,J):b(y,_,S,J);break;case Ae:ce(y,_,S,I,O,M,J,L,D);break;default:ee&1?H(y,_,S,I,O,M,J,L,D):ee&6?Te(y,_,S,I,O,M,J,L,D):ee&64||ee&128?B.process(y,_,S,I,O,M,J,L,D,ke):P("Invalid VNode type:",B,`(${typeof B})`)}te!=null&&O&&ea(te,y&&y.ref,M,_||y,!_)},v=(y,_,S,I)=>{if(y==null)o(_.el=i(_.children),S,I);else{const O=_.el=y.el;_.children!==y.children&&u(O,_.children)}},k=(y,_,S,I)=>{y==null?o(_.el=c(_.children||""),S,I):_.el=y.el},x=(y,_,S,I)=>{[y.el,y.anchor]=m(y.children,_,S,I,y.el,y.anchor)},b=(y,_,S,I)=>{if(_.children!==y.children){const O=F(y.anchor);T(y),[_.el,_.anchor]=m(_.children,S,O,I)}else _.el=y.el,_.anchor=y.anchor},w=({el:y,anchor:_},S,I)=>{let O;for(;y&&y!==_;)O=F(y),o(y,S,I),y=O;o(_,S,I)},T=({el:y,anchor:_})=>{let S;for(;y&&y!==_;)S=F(y),l(y),y=S;l(_)},H=(y,_,S,I,O,M,J,L,D)=>{J=J||_.type==="svg",y==null?N(_,S,I,O,M,J,L,D):Z(y,_,O,M,J,L,D)},N=(y,_,S,I,O,M,J,L)=>{let D,B;const{type:te,props:ee,shapeFlag:oe,transition:fe,dirs:be}=y;if(D=y.el=a(y.type,M,ee&&ee.is,ee),oe&8?d(D,y.children):oe&16&&j(y.children,D,null,I,O,M&&te!=="foreignObject",J,L),be&&Mn(y,null,I,"created"),$(D,y,y.scopeId,J,I),ee){for(const Pe in ee)Pe!=="value"&&!cl(Pe)&&r(D,Pe,null,ee[Pe],M,y.children,I,O,V);"value"in ee&&r(D,"value",null,ee.value),(B=ee.onVnodeBeforeMount)&&Rt(B,I,y)}Object.defineProperty(D,"__vnode",{value:y,enumerable:!1}),Object.defineProperty(D,"__vueParentComponent",{value:I,enumerable:!1}),be&&Mn(y,null,I,"beforeMount");const Le=(!O||O&&!O.pendingBranch)&&fe&&!fe.persisted;Le&&fe.beforeEnter(D),o(D,_,S),((B=ee&&ee.onVnodeMounted)||Le||be)&&et(()=>{B&&Rt(B,I,y),Le&&fe.enter(D),be&&Mn(y,null,I,"mounted")},O)},$=(y,_,S,I,O)=>{if(S&&h(y,S),I)for(let M=0;M<I.length;M++)h(y,I[M]);if(O){let M=O.subTree;if(M.patchFlag>0&&M.patchFlag&2048&&(M=Pp(M.children)||M),_===M){const J=O.vnode;$(y,J,J.scopeId,J.slotScopeIds,O.parent)}}},j=(y,_,S,I,O,M,J,L,D=0)=>{for(let B=D;B<y.length;B++){const te=y[B]=L?bn(y[B]):jt(y[B]);g(null,te,_,S,I,O,M,J,L)}},Z=(y,_,S,I,O,M,J)=>{const L=_.el=y.el;let{patchFlag:D,dynamicChildren:B,dirs:te}=_;D|=y.patchFlag&16;const ee=y.props||He,oe=_.props||He;let fe;S&&jn(S,!1),(fe=oe.onVnodeBeforeUpdate)&&Rt(fe,S,_,y),te&&Mn(_,y,S,"beforeUpdate"),S&&jn(S,!0),$n&&(D=0,J=!1,B=null);const be=O&&_.type!=="foreignObject";if(B?(ie(y.dynamicChildren,B,L,S,I,be,M),S&&S.type.__hmrId&&lo(y,_)):J||ge(y,_,L,null,S,I,be,M,!1),D>0){if(D&16)q(L,_,ee,oe,S,I,O);else if(D&2&&ee.class!==oe.class&&r(L,"class",null,oe.class,O),D&4&&r(L,"style",ee.style,oe.style,O),D&8){const Le=_.dynamicProps;for(let Pe=0;Pe<Le.length;Pe++){const ze=Le[Pe],Bt=ee[ze],hs=oe[ze];(hs!==Bt||ze==="value")&&r(L,ze,Bt,hs,O,y.children,S,I,V)}}D&1&&y.children!==_.children&&d(L,_.children)}else!J&&B==null&&q(L,_,ee,oe,S,I,O);((fe=oe.onVnodeUpdated)||te)&&et(()=>{fe&&Rt(fe,S,_,y),te&&Mn(_,y,S,"updated")},I)},ie=(y,_,S,I,O,M,J)=>{for(let L=0;L<_.length;L++){const D=y[L],B=_[L],te=D.el&&(D.type===Ae||!Sn(D,B)||D.shapeFlag&70)?f(D.el):S;g(D,B,te,null,I,O,M,J,!0)}},q=(y,_,S,I,O,M,J)=>{if(S!==I){if(S!==He)for(const L in S)!cl(L)&&!(L in I)&&r(y,L,S[L],null,J,_.children,O,M,V);for(const L in I){if(cl(L))continue;const D=I[L],B=S[L];D!==B&&L!=="value"&&r(y,L,B,D,J,_.children,O,M,V)}"value"in I&&r(y,"value",S.value,I.value)}},ce=(y,_,S,I,O,M,J,L,D)=>{const B=_.el=y?y.el:i(""),te=_.anchor=y?y.anchor:i("");let{patchFlag:ee,dynamicChildren:oe,slotScopeIds:fe}=_;($n||ee&2048)&&(ee=0,D=!1,oe=null),fe&&(L=L?L.concat(fe):fe),y==null?(o(B,S,I),o(te,S,I),j(_.children,S,te,O,M,J,L,D)):ee>0&&ee&64&&oe&&y.dynamicChildren?(ie(y.dynamicChildren,oe,S,O,M,J,L),O&&O.type.__hmrId?lo(y,_):(_.key!=null||O&&_===O.subTree)&&lo(y,_,!0)):ge(y,_,S,te,O,M,J,L,D)},Te=(y,_,S,I,O,M,J,L,D)=>{_.slotScopeIds=L,y==null?_.shapeFlag&512?O.ctx.activate(_,S,I,J,D):Xe(_,S,I,O,M,J,D):Be(y,_,D)},Xe=(y,_,S,I,O,M,J)=>{const L=y.component=Mm(y,I,O);if(L.type.__hmrId&&Ch(L),ul(y),on(L,"mount"),No(y)&&(L.ctx.renderer=ke),on(L,"init"),Dm(L),ln(L,"init"),L.asyncDep){if(O&&O.registerDep(L,W),!y.el){const D=L.subTree=X(Qe);k(null,D,_,S)}return}W(L,y,_,S,O,M,J),pl(),ln(L,"mount")},Be=(y,_,S)=>{const I=_.component=y.component;if(Nh(y,_,S))if(I.asyncDep&&!I.asyncResolved){ul(_),re(I,_,S),pl();return}else I.next=_,bh(I.update),I.update();else _.el=y.el,I.vnode=_},W=(y,_,S,I,O,M,J)=>{const L=()=>{if(y.isMounted){let{next:te,bu:ee,u:oe,parent:fe,vnode:be}=y,Le=te,Pe;ul(te||y.vnode),jn(y,!1),te?(te.el=be.el,re(y,te,J)):te=be,ee&&Cn(ee),(Pe=te.props&&te.props.onVnodeBeforeUpdate)&&Rt(Pe,fe,te,be),jn(y,!0),on(y,"render");const ze=ar(y);ln(y,"render");const Bt=y.subTree;y.subTree=ze,on(y,"patch"),g(Bt,ze,f(Bt.el),G(Bt),y,O,M),ln(y,"patch"),te.el=ze.el,Le===null&&Vh(y,ze.el),oe&&et(oe,O),(Pe=te.props&&te.props.onVnodeUpdated)&&et(()=>Rt(Pe,fe,te,be),O),Tp(y),pl()}else{let te;const{el:ee,props:oe}=_,{bm:fe,m:be,parent:Le}=y,Pe=As(_);if(jn(y,!1),fe&&Cn(fe),!Pe&&(te=oe&&oe.onVnodeBeforeMount)&&Rt(te,Le,_),jn(y,!0),ee&&ue){const ze=()=>{on(y,"render"),y.subTree=ar(y),ln(y,"render"),on(y,"hydrate"),ue(ee,y.subTree,y,O,null),ln(y,"hydrate")};Pe?_.type.__asyncLoader().then(()=>!y.isUnmounted&&ze()):ze()}else{on(y,"render");const ze=y.subTree=ar(y);ln(y,"render"),on(y,"patch"),g(null,ze,S,I,y,O,M),ln(y,"patch"),_.el=ze.el}if(be&&et(be,O),!Pe&&(te=oe&&oe.onVnodeMounted)){const ze=_;et(()=>Rt(te,Le,ze),O)}(_.shapeFlag&256||Le&&As(Le.vnode)&&Le.vnode.shapeFlag&256)&&y.a&&et(y.a,O),y.isMounted=!0,Xr(y),_=S=I=null}},D=y.effect=new Ua(L,()=>Xl(B),y.scope),B=y.update=()=>D.run();B.id=y.uid,jn(y,!0),D.onTrack=y.rtc?te=>Cn(y.rtc,te):void 0,D.onTrigger=y.rtg?te=>Cn(y.rtg,te):void 0,B.ownerInstance=y,B()},re=(y,_,S)=>{_.component=y;const I=y.vnode.props;y.vnode=_,y.next=null,Fm(y,_.props,I,S),bm(y,_.children,S),cs(),qi(),us()},ge=(y,_,S,I,O,M,J,L,D=!1)=>{const B=y&&y.children,te=y?y.shapeFlag:0,ee=_.children,{patchFlag:oe,shapeFlag:fe}=_;if(oe>0){if(oe&128){vt(B,ee,S,I,O,M,J,L,D);return}else if(oe&256){Ie(B,ee,S,I,O,M,J,L,D);return}}fe&8?(te&16&&V(B,O,M),ee!==B&&d(S,ee)):te&16?fe&16?vt(B,ee,S,I,O,M,J,L,D):V(B,O,M,!0):(te&8&&d(S,""),fe&16&&j(ee,S,I,O,M,J,L,D))},Ie=(y,_,S,I,O,M,J,L,D)=>{y=y||Ss,_=_||Ss;const B=y.length,te=_.length,ee=Math.min(B,te);let oe;for(oe=0;oe<ee;oe++){const fe=_[oe]=D?bn(_[oe]):jt(_[oe]);g(y[oe],fe,S,null,O,M,J,L,D)}B>te?V(y,O,M,!0,!1,ee):j(_,S,I,O,M,J,L,D,ee)},vt=(y,_,S,I,O,M,J,L,D)=>{let B=0;const te=_.length;let ee=y.length-1,oe=te-1;for(;B<=ee&&B<=oe;){const fe=y[B],be=_[B]=D?bn(_[B]):jt(_[B]);if(Sn(fe,be))g(fe,be,S,null,O,M,J,L,D);else break;B++}for(;B<=ee&&B<=oe;){const fe=y[ee],be=_[oe]=D?bn(_[oe]):jt(_[oe]);if(Sn(fe,be))g(fe,be,S,null,O,M,J,L,D);else break;ee--,oe--}if(B>ee){if(B<=oe){const fe=oe+1,be=fe<te?_[fe].el:I;for(;B<=oe;)g(null,_[B]=D?bn(_[B]):jt(_[B]),S,be,O,M,J,L,D),B++}}else if(B>oe)for(;B<=ee;)ft(y[B],O,M,!0),B++;else{const fe=B,be=B,Le=new Map;for(B=be;B<=oe;B++){const rt=_[B]=D?bn(_[B]):jt(_[B]);rt.key!=null&&(Le.has(rt.key)&&P("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),Le.set(rt.key,B))}let Pe,ze=0;const Bt=oe-be+1;let hs=!1,Pi=0;const Ds=new Array(Bt);for(B=0;B<Bt;B++)Ds[B]=0;for(B=fe;B<=ee;B++){const rt=y[B];if(ze>=Bt){ft(rt,O,M,!0);continue}let qt;if(rt.key!=null)qt=Le.get(rt.key);else for(Pe=be;Pe<=oe;Pe++)if(Ds[Pe-be]===0&&Sn(rt,_[Pe])){qt=Pe;break}qt===void 0?ft(rt,O,M,!0):(Ds[qt-be]=B+1,qt>=Pi?Pi=qt:hs=!0,g(rt,_[qt],S,null,O,M,J,L,D),ze++)}const Hi=hs?Am(Ds):Ss;for(Pe=Hi.length-1,B=Bt-1;B>=0;B--){const rt=be+B,qt=_[rt],Bi=rt+1<te?_[rt+1].el:I;Ds[B]===0?g(null,qt,S,Bi,O,M,J,L,D):hs&&(Pe<0||B!==Hi[Pe]?st(qt,S,Bi,2):Pe--)}}},st=(y,_,S,I,O=null)=>{const{el:M,type:J,transition:L,children:D,shapeFlag:B}=y;if(B&6){st(y.component.subTree,_,S,I);return}if(B&128){y.suspense.move(_,S,I);return}if(B&64){J.move(y,_,S,ke);return}if(J===Ae){o(M,_,S);for(let ee=0;ee<D.length;ee++)st(D[ee],_,S,I);o(y.anchor,_,S);return}if(J===dl){w(y,_,S);return}if(I!==2&&B&1&&L)if(I===0)L.beforeEnter(M),o(M,_,S),et(()=>L.enter(M),O);else{const{leave:ee,delayLeave:oe,afterLeave:fe}=L,be=()=>o(M,_,S),Le=()=>{ee(M,()=>{be(),fe&&fe()})};oe?oe(M,be,Le):Le()}else o(M,_,S)},ft=(y,_,S,I=!1,O=!1)=>{const{type:M,props:J,ref:L,children:D,dynamicChildren:B,shapeFlag:te,patchFlag:ee,dirs:oe}=y;if(L!=null&&ea(L,null,S,y,!0),te&256){_.ctx.deactivate(y);return}const fe=te&1&&oe,be=!As(y);let Le;if(be&&(Le=J&&J.onVnodeBeforeUnmount)&&Rt(Le,_,y),te&6)Y(y.component,S,I);else{if(te&128){y.suspense.unmount(S,I);return}fe&&Mn(y,null,_,"beforeUnmount"),te&64?y.type.remove(y,_,S,O,ke,I):B&&(M!==Ae||ee>0&&ee&64)?V(B,_,S,!1,!0):(M===Ae&&ee&384||!O&&te&16)&&V(D,_,S),I&&mn(y)}(be&&(Le=J&&J.onVnodeUnmounted)||fe)&&et(()=>{Le&&Rt(Le,_,y),fe&&Mn(y,null,_,"unmounted")},S)},mn=y=>{const{type:_,el:S,anchor:I,transition:O}=y;if(_===Ae){y.patchFlag>0&&y.patchFlag&2048&&O&&!O.persisted?y.children.forEach(J=>{J.type===Qe?l(J.el):mn(J)}):A(S,I);return}if(_===dl){T(y);return}const M=()=>{l(S),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:L}=O,D=()=>J(S,M);L?L(y.el,M,D):D()}else M()},A=(y,_)=>{let S;for(;y!==_;)S=F(y),l(y),y=S;l(_)},Y=(y,_,S)=>{y.type.__hmrId&&wh(y);const{bum:I,scope:O,update:M,subTree:J,um:L}=y;I&&Cn(I),O.stop(),M&&(M.active=!1,ft(J,y,_,S)),L&&et(L,_),et(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Th(y)},V=(y,_,S,I=!1,O=!1,M=0)=>{for(let J=M;J<y.length;J++)ft(y[J],_,S,I,O)},G=y=>y.shapeFlag&6?G(y.component.subTree):y.shapeFlag&128?y.suspense.next():F(y.anchor||y.el),ve=(y,_,S)=>{y==null?_._vnode&&ft(_._vnode,null,null,!0):g(_._vnode||null,y,_,null,null,null,S),qi(),Ep(),_._vnode=y},ke={p:g,um:ft,m:st,r:mn,mt:Xe,mc:j,pc:ge,pbc:ie,n:G,o:e};let de,ue;return n&&([de,ue]=n(ke)),{render:ve,hydrate:de,createApp:Cm(ve,de)}}function jn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function lo(e,n,s=!1){const o=e.children,l=n.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=bn(l[r]),i.el=a.el),s||lo(a,i)),i.type===Uo&&(i.el=a.el),i.type===Qe&&!i.el&&(i.el=a.el)}}function Am(e){const n=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(l=s[s.length-1],e[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<u?r=i+1:a=i;u<e[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const $m=e=>e.__isTeleport,$s=e=>e&&(e.disabled||e.disabled===""),oc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ta=(e,n)=>{const s=e&&e.to;if(je(s))if(n){const o=n(s);return o||P(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return P("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!$s(e)&&P(`Invalid Teleport target: ${s}`),s},Rm={__isTeleport:!0,process(e,n,s,o,l,r,a,i,c,u){const{mc:d,pc:f,pbc:F,o:{insert:h,querySelector:m,createText:g,createComment:v}}=u,k=$s(n.props);let{shapeFlag:x,children:b,dynamicChildren:w}=n;if($n&&(c=!1,w=null),e==null){const T=n.el=v("teleport start"),H=n.anchor=v("teleport end");h(T,s,o),h(H,s,o);const N=n.target=ta(n.props,m),$=n.targetAnchor=g("");N?(h($,N),a=a||oc(N)):k||P("Invalid Teleport target on mount:",N,`(${typeof N})`);const j=(Z,ie)=>{x&16&&d(b,Z,ie,l,r,a,i,c)};k?j(s,H):N&&j(N,$)}else{n.el=e.el;const T=n.anchor=e.anchor,H=n.target=e.target,N=n.targetAnchor=e.targetAnchor,$=$s(e.props),j=$?s:H,Z=$?T:N;if(a=a||oc(H),w?(F(e.dynamicChildren,w,j,l,r,a,i),lo(e,n,!0)):c||f(e,n,j,Z,l,r,a,i,!1),k)$||nl(n,s,T,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ie=n.target=ta(n.props,m);ie?nl(n,ie,null,u,0):P("Invalid Teleport target on update:",H,`(${typeof H})`)}else $&&nl(n,H,N,u,1)}td(n)},remove(e,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:f,props:F}=e;if(f&&r(d),(a||!$s(F))&&(r(u),i&16))for(let h=0;h<c.length;h++){const m=c[h];l(m,n,s,!0,!!m.dynamicChildren)}},move:nl,hydrate:Tm};function nl(e,n,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=e,f=r===2;if(f&&o(a,n,s),(!f||$s(d))&&c&16)for(let F=0;F<u.length;F++)l(u[F],n,s,2);f&&o(i,n,s)}function Tm(e,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=ta(n.props,c);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if($s(n.props))n.anchor=u(a(e),n,i(e),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(e);let F=f;for(;F;)if(F=a(F),F&&F.nodeType===8&&F.data==="teleport anchor"){n.targetAnchor=F,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,o,l,r)}td(n)}return n.anchor&&a(n.anchor)}const Om=Rm;function td(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Ae=Symbol("Fragment"),Uo=Symbol("Text"),Qe=Symbol("Comment"),dl=Symbol("Static"),ro=[];let Dt=null;function E(e=!1){ro.push(Dt=e?null:[])}function Im(){ro.pop(),Dt=ro[ro.length-1]||null}let ko=1;function lc(e){ko+=e}function nd(e){return e.dynamicChildren=ko>0?Dt||Ss:null,Im(),ko>0&&Dt&&Dt.push(e),e}function z(e,n,s,o,l,r){return nd(t(e,n,s,o,l,r,!0))}function ne(e,n,s,o,l){return nd(X(e,n,s,o,l,!0))}function Qt(e){return e?e.__v_isVNode===!0:!1}function Sn(e,n){return n.shapeFlag&6&&_s.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const Pm=(...e)=>Hm(...e),Gl="__vInternal",sd=({key:e})=>e??null,fl=({ref:e,ref_key:n,ref_for:s})=>e!=null?je(e)||$e(e)||pe(e)?{i:Ze,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,o=0,l=null,r=e===Ae?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&sd(n),ref:n&&fl(n),scopeId:zl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ze};return i?(oi(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),c.key!==c.key&&P("VNode created with invalid key (NaN). VNode type:",c.type),ko>0&&!a&&Dt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Dt.push(c),c}const X=Pm;function Hm(e,n=null,s=null,o=0,l=null,r=!1){if((!e||e===nm)&&(e||P(`Invalid vnode type when creating vnode: ${e}.`),e=Qe),Qt(e)){const i=Vt(e,n,!0);return s&&oi(i,s),ko>0&&!r&&Dt&&(i.shapeFlag&6?Dt[Dt.indexOf(e)]=i:Dt.push(i)),i.patchFlag|=-2,i}if(id(e)&&(e=e.__vccOpts),n){n=Me(n);let{class:i,style:c}=n;i&&!je(i)&&(n.class=Oe(i)),Re(c)&&(Jr(c)&&!ae(c)&&(c=Ve({},c)),n.style=pt(c))}const a=je(e)?1:Hp(e)?128:$m(e)?64:Re(e)?4:pe(e)?2:0;return a&4&&Jr(e)&&(e=Fe(e),P("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,o,l,a,r,!0)}function Me(e){return e?Jr(e)||Gl in e?Ve({},e):e:null}function Vt(e,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=n?We(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&sd(i),ref:n&&n.ref?s&&l?ae(l)?l.concat(fl(n)):[l,fl(n)]:fl(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(od):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function od(e){const n=Vt(e);return ae(e.children)&&(n.children=e.children.map(od)),n}function p(e=" ",n=0){return X(Uo,null,e,n)}function ye(e="",n=!1){return n?(E(),ne(Qe,null,e)):X(Qe,null,e)}function jt(e){return e==null||typeof e=="boolean"?X(Qe):ae(e)?X(Ae,null,e.slice()):typeof e=="object"?bn(e):X(Uo,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function oi(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),oi(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(Gl in n)?n._ctx=Ze:l===3&&Ze&&(Ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else pe(n)?(n={default:n,_ctx:Ze},s=32):(n=String(n),o&64?(s=16,n=[p(n)]):s=8);e.children=n,e.shapeFlag|=s}function We(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Oe([n.class,o.class]));else if(l==="style")n.style=pt([n.style,o.style]);else if(Mo(l)){const r=n[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function Rt(e,n,s,o=null){It(e,n,7,[s,o])}const Bm=ed();let Lm=0;function Mm(e,n,s){const o=e.type,l=(n?n.appContext:e.appContext)||Bm,r={uid:Lm++,vnode:e,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kp(o,l),emitsOptions:Ip(o,l),emit:null,emitted:null,propsDefaults:He,inheritAttrs:o.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=sm(r),r.root=n?n.root:r,r.emit=Hh.bind(null,r),e.ce&&e.ce(r),r}let Je=null;const At=()=>Je||Ze,Hs=e=>{Je=e,e.scope.on()},os=()=>{Je&&Je.scope.off(),Je=null},jm=Ln("slot,component");function na(e,n){const s=n.isNativeTag||ep;(jm(e)||s(e))&&P("Do not use built-in or reserved HTML elements as component id: "+e)}function ld(e){return e.vnode.shapeFlag&4}let Co=!1;function Dm(e,n=!1){Co=n;const{props:s,children:o}=e.vnode,l=ld(e);dm(e,s,l,n),xm(e,o);const r=l?Nm(e,n):void 0;return Co=!1,r}function Nm(e,n){var s;const o=e.type;{if(o.name&&na(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)na(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Jp(r[a])}o.compilerOptions&&Vm()&&P('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ul(new Proxy(e.ctx,Xp)),om(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?ad(e):null;Hs(e),cs();const a=pn(l,e,0,[ks(e.props),r]);if(us(),os(),ja(a)){if(a.then(os,os),n)return a.then(i=>{rc(e,i,n)}).catch(i=>{ql(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";P(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else rc(e,a,n)}else rd(e,n)}function rc(e,n,s){pe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Re(n)?(Qt(n)&&P("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=xp(n),lm(e)):n!==void 0&&P(`setup() should return an object. Received: ${n===null?"null":typeof n}`),rd(e,s)}let sa;const Vm=()=>!sa;function rd(e,n,s){const o=e.type;if(!e.render){if(!n&&sa&&!o.render){const l=o.template||ni(e).template;if(l){on(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=Ve(Ve({isCustomElement:r,delimiters:i},a),c);o.render=sa(l,u),ln(e,"compile")}}e.render=o.render||ht}Hs(e),cs(),am(e),us(),os(),!o.render&&e.render===ht&&!n&&(o.template?P('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):P("Component is missing template or render function."))}function Jm(e){return new Proxy(e.attrs,{get(n,s){return wl(),yt(e,"get","$attrs"),n[s]},set(){return P("setupContext.attrs is readonly."),!1},deleteProperty(){return P("setupContext.attrs is readonly."),!1}})}function ad(e){const n=o=>{if(e.exposed&&P("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ae(o)?l="array":$e(o)&&(l="ref")),l!=="object"&&P(`expose() should be passed a plain object, received ${l}.`)}e.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Jm(e))},get slots(){return ks(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:n})}function Ql(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xp(Ul(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in ss)return ss[s](e)},has(n,s){return s in n||s in ss}}))}const Um=/(?:^|[-_])(\w)/g,qm=e=>e.replace(Um,n=>n.toUpperCase()).replace(/[-_]/g,"");function wo(e,n=!0){return pe(e)?e.displayName||e.name:e.name||n&&e.__name}function er(e,n,s=!1){let o=wo(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?qm(o):s?"App":"Anonymous"}function id(e){return pe(e)&&"__vccOpts"in e}const R=(e,n)=>fh(e,n,Co);function Xm(){return Wm().slots}function Wm(){const e=At();return e||P("useContext() called without active instance."),e.setupContext||(e.setupContext=ad(e))}function Ge(e,n,s){const o=arguments.length;return o===2?Re(n)&&!ae(n)?Qt(n)?X(e,null,[n]):X(e,n):X(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Qt(s)&&(s=[s]),X(e,n,s))}const zm=Symbol("ssrContext"),Km=()=>{{const e=K(zm);return e||P("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function dr(e){return!!(e&&e.__v_isShallow)}function Ym(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Re(f)?f.__isVue?["div",e,"VueInstance"]:$e(f)?["div",{},["span",e,d(f)],"<",i(f.value),">"]:ts(f)?["div",{},["span",e,dr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Hn(f)?" (readonly)":""}`]:Hn(f)?["div",{},["span",e,dr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const F=[];f.type.props&&f.props&&F.push(a("props",Fe(f.props))),f.setupState!==He&&F.push(a("setup",f.setupState)),f.data!==He&&F.push(a("data",Fe(f.data)));const h=c(f,"computed");h&&F.push(a("computed",h));const m=c(f,"inject");return m&&F.push(a("injected",m)),F.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),F}function a(f,F){return F=Ve({},F),Object.keys(F).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(F).map(h=>["div",{},["span",o,h+": "],i(F[h],!1)])]]:["span",{}]}function i(f,F=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Re(f)?["object",{object:F?Fe(f):f}]:["span",s,String(f)]}function c(f,F){const h=f.type;if(pe(h))return;const m={};for(const g in f.ctx)u(h,g,F)&&(m[g]=f.ctx[g]);return m}function u(f,F,h){const m=f[h];if(ae(m)&&m.includes(F)||Re(m)&&F in m||f.extends&&u(f.extends,F,h)||f.mixins&&f.mixins.some(g=>u(g,F,h)))return!0}function d(f){return dr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const $l="3.2.47",Zm="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,ac=Wn&&Wn.createElement("template"),Gm={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const l=n?Wn.createElementNS(Zm,e):Wn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Wn.createTextNode(e),createComment:e=>Wn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{ac.innerHTML=o?`<svg>${e}</svg>`:e;const i=ac.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Qm(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function ey(e,n,s){const o=e.style,l=je(s);if(s&&!l){if(n&&!je(n))for(const r in n)s[r]==null&&oa(o,r,"");for(const r in s)oa(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ty=/[^\\];\s*$/,ic=/\s*!important$/;function oa(e,n,s){if(ae(s))s.forEach(o=>oa(e,n,o));else if(s==null&&(s=""),ty.test(s)&&P(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const o=ny(e,n);ic.test(s)?e.setProperty(fn(o),s.replace(ic,""),"important"):e[o]=s}}const cc=["Webkit","Moz","ms"],fr={};function ny(e,n){const s=fr[n];if(s)return s;let o=Zt(n);if(o!=="filter"&&o in e)return fr[n]=o;o=as(o);for(let l=0;l<cc.length;l++){const r=cc[l]+o;if(r in e)return fr[n]=r}return n}const uc="http://www.w3.org/1999/xlink";function sy(e,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(uc,n.slice(6,n.length)):e.setAttributeNS(uc,n,s);else{const r=CF(n);s==null||r&&!Gu(s)?e.removeAttribute(n):e.setAttribute(n,r?"":s)}}function oy(e,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),e[n]=s??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=Gu(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch(c){i||P(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&e.removeAttribute(n)}function xs(e,n,s,o){e.addEventListener(n,s,o)}function ly(e,n,s,o){e.removeEventListener(n,s,o)}function ry(e,n,s,o,l=null){const r=e._vei||(e._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=ay(n);if(o){const u=r[n]=uy(o,l);xs(e,i,u,c)}else a&&(ly(e,i,a,c),r[n]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function ay(e){let n;if(pc.test(e)){n={};let o;for(;o=e.match(pc);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),n]}let Fr=0;const iy=Promise.resolve(),cy=()=>Fr||(iy.then(()=>Fr=0),Fr=Date.now());function uy(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;It(py(o,s.value),n,5,[o])};return s.value=e,s.attached=cy(),s}function py(e,n){if(ae(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const dc=/^on[a-z]/,dy=(e,n,s,o,l=!1,r,a,i,c)=>{n==="class"?Qm(e,o,l):n==="style"?ey(e,s,o):Mo(n)?_l(n)||ry(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):fy(e,n,o,l))?oy(e,n,o,r,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),sy(e,n,o,l))};function fy(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&dc.test(n)&&pe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||dc.test(n)&&je(s)?!1:n in e}const gn="transition",Vs="animation",cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fy=Ve({},Xh.props,cd),Dn=(e,n=[])=>{ae(e)?e.forEach(s=>s(...n)):e&&e(...n)},fc=e=>e?ae(e)?e.some(n=>n.length>1):e.length>1:!1;function hy(e){const n={};for(const q in e)q in cd||(n[q]=e[q]);if(e.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:F=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=e,m=my(l),g=m&&m[0],v=m&&m[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:b,onLeave:w,onLeaveCancelled:T,onBeforeAppear:H=k,onAppear:N=x,onAppearCancelled:$=b}=n,j=(q,ce,Te)=>{_n(q,ce?d:i),_n(q,ce?u:a),Te&&Te()},Z=(q,ce)=>{q._isLeaving=!1,_n(q,f),_n(q,h),_n(q,F),ce&&ce()},ie=q=>(ce,Te)=>{const Xe=q?N:x,Be=()=>j(ce,q,Te);Dn(Xe,[ce,Be]),Fc(()=>{_n(ce,q?c:r),rn(ce,q?d:i),fc(Xe)||hc(ce,o,g,Be)})};return Ve(n,{onBeforeEnter(q){Dn(k,[q]),rn(q,r),rn(q,a)},onBeforeAppear(q){Dn(H,[q]),rn(q,c),rn(q,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(q,ce){q._isLeaving=!0;const Te=()=>Z(q,ce);rn(q,f),pd(),rn(q,F),Fc(()=>{q._isLeaving&&(_n(q,f),rn(q,h),fc(w)||hc(q,o,v,Te))}),Dn(w,[q,Te])},onEnterCancelled(q){j(q,!1),Dn(b,[q])},onAppearCancelled(q){j(q,!0),Dn($,[q])},onLeaveCancelled(q){Z(q),Dn(T,[q])}})}function my(e){if(e==null)return null;if(Re(e))return[hr(e.enter),hr(e.leave)];{const n=hr(e);return[n,n]}}function hr(e){const n=TF(e);return gh(n,"<transition> explicit duration"),n}function rn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function _n(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function Fc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let yy=0;function hc(e,n,s,o){const l=e._endId=++yy,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=ud(e,n);if(!a)return o();const u=a+"end";let d=0;const f=()=>{e.removeEventListener(u,F),r()},F=h=>{h.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},i+1),e.addEventListener(u,F)}function ud(e,n){const s=window.getComputedStyle(e),o=m=>(s[m]||"").split(", "),l=o(`${gn}Delay`),r=o(`${gn}Duration`),a=mc(l,r),i=o(`${Vs}Delay`),c=o(`${Vs}Duration`),u=mc(i,c);let d=null,f=0,F=0;n===gn?a>0&&(d=gn,f=a,F=r.length):n===Vs?u>0&&(d=Vs,f=u,F=c.length):(f=Math.max(a,u),d=f>0?a>u?gn:Vs:null,F=d?d===gn?r.length:c.length:0);const h=d===gn&&/\b(transform|all)(,|$)/.test(o(`${gn}Property`).toString());return{type:d,timeout:f,propCount:F,hasTransform:h}}function mc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,o)=>yc(s)+yc(e[o])))}function yc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dd=new WeakMap,fd=new WeakMap,Fd={name:"TransitionGroup",props:Ve({},Fy,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=At(),o=Lp();let l,r;return Yl(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!ky(l[0].el,s.vnode.el,a))return;l.forEach(_y),l.forEach(xy);const i=l.filter(by);pd(),i.forEach(c=>{const u=c.el,d=u.style;rn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=F=>{F&&F.target!==u||(!F||/transform$/.test(F.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,_n(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=Fe(e),i=hy(a);let c=a.tag||Ae;l=r,r=n.default?ei(n.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Is(d,bo(d,i,o,s)):P("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Is(d,bo(d,i,o,s)),dd.set(d,d.el.getBoundingClientRect())}return X(c,null,r)}}},gy=e=>delete e.mode;Fd.props;const vy=Fd;function _y(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function xy(e){fd.set(e,e.el.getBoundingClientRect())}function by(e){const n=dd.get(e),s=fd.get(e),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function ky(e,n,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=ud(o);return l.removeChild(o),r}const gc=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ae(n)?s=>Cn(n,s):n};function Cy(e){e.target.composing=!0}function vc(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const wy={created(e,{modifiers:{lazy:n,trim:s,number:o}},l){e._assign=gc(l);const r=o||l.props&&l.props.type==="number";xs(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=Mr(i)),e._assign(i)}),s&&xs(e,"change",()=>{e.value=e.value.trim()}),n||(xs(e,"compositionstart",Cy),xs(e,"compositionend",vc),xs(e,"change",vc))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(e._assign=gc(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===n||(l||e.type==="number")&&Mr(e.value)===n))return;const a=n??"";e.value!==a&&(e.value=a)}},Sy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_c=(e,n)=>s=>{if(!("key"in s))return;const o=fn(s.key);if(n.some(l=>l===o||Sy[l]===o))return e(s)},So={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Js(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),Js(e,!0),o.enter(e)):o.leave(e,()=>{Js(e,!1)}):Js(e,n))},beforeUnmount(e,{value:n}){Js(e,n)}};function Js(e,n){e.style.display=n?e._vod:"none"}const Ey=Ve({patchProp:dy},Gm);let xc;function Ay(){return xc||(xc=Sm(Ey))}const $y=(...e)=>{const n=Ay().createApp(...e);Ry(n),Ty(n);const{mount:s}=n;return n.mount=o=>{const l=Oy(o);if(!l)return;const r=n._component;!pe(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function Ry(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Zu(n)||bF(n),writable:!1})}function Ty(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){P("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return P(o),s},set(){P(o)}})}}function Oy(e){if(je(e)){const n=document.querySelector(e);return n||P(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&P('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Iy(){Ym()}Iy();function la(e,n={},s){for(const o in e){const l=e[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?la(l,n,r):typeof l=="function"&&(n[r]=l)}return n}const Py={run:e=>e()},Hy=()=>Py,hd=typeof console.createTask<"u"?console.createTask:Hy;function By(e,n){const s=n.shift(),o=hd(s);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...n))),Promise.resolve())}function Ly(e,n){const s=n.shift(),o=hd(s);return Promise.all(e.map(l=>o.run(()=>l(...n))))}function mr(e,n){for(const s of[...e])s(n)}class My{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const l=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(n,l),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const l of o)this.hook(n,l)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=la(n),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(n){const s=la(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(By,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(Ly,n,...s)}callHookWith(n,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&mr(this._before,l);const r=n(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&mr(this._after,l)}):(this._after&&l&&mr(this._after,l),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function jy(){return new My}function Dy(e){return Array.isArray(e)?e:[e]}const md=["title","script","style","noscript"],Ny=["base","meta","link","style","script","noscript"],Vy=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Jy=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Uy=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function yd(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ra(e){return yd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function qy(e){let n=9;for(const s of e)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function gd(e,n){const{props:s,tag:o}=e;if(Jy.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return n&&!n(a)?!1:`${o}:${r}:${a}`}return!1}const bc=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e,sl=(e,n=!1,s)=>{const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;s&&s(e,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(e,i,()=>l.removeAttribute(r)),(n||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),md.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let Us=!1;async function vd(e,n={}){var F,h;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(Us=Us||e._hash||!1,Us)){const m=qy(l.map(g=>g.tag._h));if(Us===m)return;Us=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,v])=>{r[g]=v})});const a=(m,g,v)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=v),delete r[g]};function i(m){const g=e.headEntries().find(k=>k._i===m._e),v={renderId:!m.key&&m._d?m._d:ra(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(k,x)=>a(v,k,x)};return v}const c=[],u={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete e._elMap[m.renderId]})};for(const m of l){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){o.title=g.textContent||"",c.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],sl(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&g.key&&(m.$el=o.querySelector(`${(F=g.tagPosition)!=null&&F.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&sl(m),d(m);continue}u[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,g])=>{var k;if(!g.length)return;const v=(k=o==null?void 0:o[m])==null?void 0:k.children;if(v){for(const x of[...v].reverse()){const b=x.tagName.toLowerCase();if(!Ny.includes(b))continue;const w=x.getAttributeNames().reduce(($,j)=>({...$,[j]:x.getAttribute(j)}),{}),T={tag:b,props:w};x.innerHTML&&(T.innerHTML=x.innerHTML);const H=ra(T);let N=g.findIndex($=>($==null?void 0:$.renderId)===H);if(N===-1){const $=gd(T);N=g.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===$)}if(N!==-1){const $=g[N];$.$el=x,sl($),d($),delete g[N]}}g.forEach(x=>{const b=x.tag.tagPosition||"head";f[b]=f[b]||o.createDocumentFragment(),x.$el||(x.$el=o.createElement(x.tag.tag),sl(x,!0)),f[b].appendChild(x.$el),d(x)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let yr=null;async function _d(e,n={}){function s(){return yr=null,vd(e,n)}const o=n.delayFn||(l=>setTimeout(l,10));return yr=yr||new Promise(l=>o(()=>l(s())))}const Xy=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),_d(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}});function Wy(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const kc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Cc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in kc?kc[n]:10}const zy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ky(){return{hooks:{"tags:resolve":e=>{const n=s=>{var o;return(o=e.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of zy)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>Cc(s)-Cc(o))}}}}const Yy=()=>({hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(l=>l.tag==="titleTemplate");const o=n.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=bc(n[s].textContent,n[o].textContent);l!==null?n[o].textContent=l||n[o].textContent:delete n[o]}else if(s!==-1){const l=bc(n[s].textContent);l!==null&&(n[s].textContent=l,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}),Zy=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Gy=["link","style","script","noscript"],Qy=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(e._h=ra(e)),e.key&&Gy.includes(e.tag)&&(e._h=yd(e.key),e.props[`data-h-${e._h}`]="")}}}),wc=["script","link","bodyAttrs"],eg=()=>{const e=(n,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!wc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!wc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=e("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=l)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([l,r])=>{const a=`${n.tag._d||n.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const u=r;s.setAttribute(c,""),o.addEventListener(i,u),n.entry&&(n.entry._sde[a]=()=>{o.removeEventListener(i,u),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}},tg=["templateParams","htmlAttrs","bodyAttrs"],ng=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=e.key?`${e.tag}:${e.key}`:gd(e);n&&(e._d=n)},"tags:resolve":function(e){const n={};e.tags.forEach(o=>{const l=o._d||o._p,r=n[l];if(r){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&tg.includes(o.tag)&&(a="merge"),a==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),n[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete n[l];return}}n[l]=o});const s=[];Object.values(n).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),e.tags=s}}});function ol(e,n){function s(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,n):a=n[r],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(e=e.replaceAll(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function sg(){return{hooks:{"tags:resolve":e=>{var r;const{tags:n}=e,s=(r=n.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=n.findIndex(a=>a.tag==="templateParams"),l=o!==-1?n[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of n)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=ol(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=ol(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=ol(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?ol(c,l):c)}catch{}e.tags=n.filter(a=>a.tag!=="templateParams")}}}}const og=typeof window<"u";let xd;const lg=e=>xd=e,rg=()=>xd;async function ag(e,n){const s={tag:e,props:{}};return e==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await cg(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Uy.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||md.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=ig(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function ig(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function cg(e,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const ug=10;async function pg(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&Vy.includes(s)).forEach(([s,o])=>{const l=Dy(o);n.push(...l.map(r=>ag(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<ug)+o,s))}const dg=()=>[ng(),Ky(),sg(),Yy(),Qy(),eg(),Zy()],fg=(e={})=>[Xy({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function Fg(e={}){const n=hg({...e,plugins:[...fg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=Wy(n.resolvedOptions.document)),lg(n),n}function hg(e={}){let n=[],s={},o=0;const l=jy();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...dg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(og?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return n},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),n.push(u),r(),{dispose(){n=n.filter(d=>d._i!==u._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){n=n.map(f=>(f._i===u._i&&(u.input=f.input=d,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...n]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await pg(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function mg(e){return typeof e=="function"?e():C(e)}function Rl(e,n=""){if(e instanceof Promise)return e;const s=mg(e);return!e||!s?s:Array.isArray(s)?s.map(o=>Rl(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,C(l)]:[o,Rl(l,o)])):s}const yg=$l.startsWith("3"),gg=typeof window<"u",bd="usehead";function li(){return At()&&K(bd)||rg()}function vg(e){return{install(s){yg&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(bd,e))}}.install}function _g(e={}){const n=Fg({...e,domDelayFn:s=>setTimeout(()=>tt(()=>s()),10),plugins:[xg(),...(e==null?void 0:e.plugins)||[]]});return n.install=vg(n),n}const xg=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=Rl(n.input)}}});function bg(e,n={}){const s=li(),o=U(!1),l=U({});ps(()=>{l.value=o.value?{}:Rl(e)});const r=s.push(l.value,n);return me(l,i=>{r.patch(i)}),At()&&(Vo(()=>{r.dispose()}),Np(()=>{o.value=!0}),Dp(()=>{o.value=!1})),r}function kg(e,n={}){return li().push(e,n)}function ri(e,n={}){var o;const s=li();if(s){const l=gg||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&l||n.mode==="client"&&!l?void 0:l?bg(e,n):kg(e,n)}}const Cg=e=>ri({htmlAttrs:e});function wg(e,n){const s=_g(n||{}),o={unhead:s,install(l){$l.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=ri(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?vd(s,{document:l}):_d(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const ao=Symbol("v-click-clicks"),zn=Symbol("v-click-clicks-elements"),aa=Symbol("v-click-clicks-order-map"),io=Symbol("v-click-clicks-disabled"),kd=Symbol("slidev-slide-scale"),se=Symbol("slidev-slidev-context"),Sg=Symbol("slidev-route"),Eg=Symbol("slidev-slide-context"),Xn="slidev-vclick-target",gr="slidev-vclick-hidden",Ag="slidev-vclick-fade",vr="slidev-vclick-hidden-explicitly",qs="slidev-vclick-current",ll="slidev-vclick-prior",$g=["localhost","127.0.0.1"];let Rg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function Tg(e){return e=e??[],Array.isArray(e)?e:[e]}function ia(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Og(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Ig(e){return e!=null}function Pg(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(Ig))}const no={theme:"dracula",title:"React Shared",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},hightlighter:"shiki"},Se=no,Rn=Se.aspectRatio??16/9,Tn=Se.canvasWidth??980,ai=Math.ceil(Tn/Rn),ii=R(()=>Pg(Se.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Ht(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const fs=Ne({page:0,clicks:0});let Hg=[],Bg=[];Ht(fs,"$syncUp",!0);Ht(fs,"$syncDown",!0);Ht(fs,"$paused",!1);Ht(fs,"$onSet",e=>Hg.push(e));Ht(fs,"$onPatch",e=>Bg.push(e));Ht(fs,"$patch",async()=>!1);function Cd(e,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=Ne(n);function u(h){o.push(h)}function d(h,m){c[h]!==m&&(clearTimeout(a),l=!0,c[h]=m,a=setTimeout(()=>l=!1,0))}function f(h){l||(clearTimeout(i),r=!0,Object.entries(h).forEach(([m,g])=>{c[m]=g}),i=setTimeout(()=>r=!1,0))}function F(h){let m;s?s&&window.addEventListener("storage",v=>{v&&v.key===h&&v.newValue&&f(JSON.parse(v.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",v=>f(v.data)));function g(){!s&&m&&!r?m.postMessage(Fe(c)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),l||o.forEach(v=>v(c))}if(me(c,g,{deep:!0}),s){const v=window.localStorage.getItem(h);v&&f(JSON.parse(v))}}return{init:F,onPatch:u,patch:d,state:c}}const{init:Lg,onPatch:Mg,patch:Xs,state:_r}=Cd(fs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Fs=Ne({});let jg=[],Dg=[];Ht(Fs,"$syncUp",!0);Ht(Fs,"$syncDown",!0);Ht(Fs,"$paused",!1);Ht(Fs,"$onSet",e=>jg.push(e));Ht(Fs,"$onPatch",e=>Dg.push(e));Ht(Fs,"$patch",async()=>!1);const{init:Ng,onPatch:Vg,patch:wd,state:Tl}=Cd(Fs,{},!1),Jg="modulepreload",Ug=function(e){return"/react-shared-ppt/"+e},Sc={},Fl=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Ug(r),r in Sc)return;Sc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Jg,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Ec;const en=typeof window<"u",qg=e=>typeof e<"u",Xg=Object.prototype.toString,Eo=e=>typeof e=="function",Wg=e=>typeof e=="number",Sd=e=>typeof e=="string",ca=e=>Xg.call(e)==="[object Object]",ua=()=>+Date.now(),Rs=()=>{},zg=en&&((Ec=window==null?void 0:window.navigator)==null?void 0:Ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function tn(e){return typeof e=="function"?e():C(e)}function Kg(e,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const Ed=e=>e();function Yg(e=Ed){const n=U(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&e(...r)};return{isActive:Kt(n),pause:s,resume:o,eventFilter:l}}function Zg(e){return e}function Gg(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?e:r+l}function Qg(e,n){let s,o,l;const r=U(!0),a=()=>{r.value=!0,l()};me(e,a,{flush:"sync"});const i=Eo(n)?n:n.get,c=Eo(n)?void 0:n.set,u=ph((d,f)=>(o=d,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(F){c==null||c(F)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function nn(e){return Va()?(rp(e),!0):!1}function ev(e){if(!$e(e))return Ne(e);const n=new Proxy({},{get(s,o,l){return C(Reflect.get(e.value,o,l))},set(s,o,l){return $e(e.value[o])&&!$e(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ne(n)}function Ad(e){return typeof e=="function"?R(e):U(e)}function ci(e,n=!0){At()?ds(e):n?e():tt(e)}function tv(e){At()&&Zl(e)}function nv(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=U(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const d=tn(n);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&en&&u(),$e(n)||Eo(n)){const d=me(n,()=>{a.value&&en&&u()});nn(d)}return nn(c),{isActive:a,pause:c,resume:u}}function sv(e,n,s={}){const{immediate:o=!0}=s,l=U(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...u)},tn(n))}return o&&(l.value=!0,en&&c()),nn(i),{isPending:Kt(l),start:c,stop:i}}function $d(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=$e(e),r=U(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=tn(s);return r.value=r.value===c?tn(o):c,r.value}}return l?a:[r,a]}var Ac=Object.getOwnPropertySymbols,ov=Object.prototype.hasOwnProperty,lv=Object.prototype.propertyIsEnumerable,rv=(e,n)=>{var s={};for(var o in e)ov.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ac)for(var o of Ac(e))n.indexOf(o)<0&&lv.call(e,o)&&(s[o]=e[o]);return s};function av(e,n,s={}){const o=s,{eventFilter:l=Ed}=o,r=rv(o,["eventFilter"]);return me(e,Kg(l,n),r)}var iv=Object.defineProperty,cv=Object.defineProperties,uv=Object.getOwnPropertyDescriptors,Ol=Object.getOwnPropertySymbols,Rd=Object.prototype.hasOwnProperty,Td=Object.prototype.propertyIsEnumerable,$c=(e,n,s)=>n in e?iv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,pv=(e,n)=>{for(var s in n||(n={}))Rd.call(n,s)&&$c(e,s,n[s]);if(Ol)for(var s of Ol(n))Td.call(n,s)&&$c(e,s,n[s]);return e},dv=(e,n)=>cv(e,uv(n)),fv=(e,n)=>{var s={};for(var o in e)Rd.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ol)for(var o of Ol(e))n.indexOf(o)<0&&Td.call(e,o)&&(s[o]=e[o]);return s};function Fv(e,n,s={}){const o=s,{eventFilter:l}=o,r=fv(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Yg(l);return{stop:av(e,n,dv(pv({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function wt(e){var n;const s=tn(e);return(n=s==null?void 0:s.$el)!=null?n:s}const nt=en?window:void 0,Od=en?window.document:void 0,hv=en?window.navigator:void 0;function xe(...e){let n,s,o,l;if(Sd(e[0])||Array.isArray(e[0])?([s,o,l]=e,n=nt):[n,s,o,l]=e,!n)return Rs;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,F,h)=>(d.addEventListener(f,F,h),()=>d.removeEventListener(f,F,h)),c=me(()=>[wt(n),tn(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(F=>o.map(h=>i(d,F,h,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return nn(u),u}let Rc=!1;function mv(e,n,s={}){const{window:o=nt,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;zg&&!Rc&&(Rc=!0,Array.from(o.document.body.children).forEach(F=>F.addEventListener("click",Rs)));let i=!0;const c=F=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(m=>m===F.target||F.composedPath().includes(m));{const m=wt(h);return m&&(F.target===m||F.composedPath().includes(m))}}),d=[xe(o,"click",F=>{const h=wt(e);if(!(!h||h===F.target||F.composedPath().includes(h))){if(F.detail===0&&(i=!c(F)),!i){i=!0;return}n(F)}},{passive:!0,capture:r}),xe(o,"pointerdown",F=>{const h=wt(e);h&&(i=!F.composedPath().includes(h)&&!c(F))},{passive:!0}),a&&xe(o,"blur",F=>{var h;const m=wt(e);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(F)})].filter(Boolean);return()=>d.forEach(F=>F())}const yv=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function gv(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:l=nt,eventName:r="keydown",passive:a=!1}=o,i=yv(n);return xe(l,r,u=>{i(u)&&s(u)},a)}function vv(e={}){var n;const{window:s=nt}=e,o=(n=e.document)!=null?n:s==null?void 0:s.document,l=Qg(()=>null,()=>o==null?void 0:o.activeElement);return s&&(xe(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),xe(s,"focus",l.trigger,!0)),l}function qo(e,n=!1){const s=U(),o=()=>s.value=!!e();return o(),ci(o,n),s}function bs(e,n={}){const{window:s=nt}=n,o=qo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=U(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(Ad(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return ps(i),nn(()=>a()),r}const _v={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xv=Object.defineProperty,Tc=Object.getOwnPropertySymbols,bv=Object.prototype.hasOwnProperty,kv=Object.prototype.propertyIsEnumerable,Oc=(e,n,s)=>n in e?xv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Cv=(e,n)=>{for(var s in n||(n={}))bv.call(n,s)&&Oc(e,s,n[s]);if(Tc)for(var s of Tc(n))kv.call(n,s)&&Oc(e,s,n[s]);return e};function wv(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=Gg(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=nt}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>bs(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Cv({greater(i){return bs(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return bs(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return bs(`(max-width: ${s(i)})`,n)},between(i,c){return bs(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function Sv(e={}){const{navigator:n=hv,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=qo(()=>n&&"clipboard"in n),c=R(()=>i.value||r),u=U(""),d=U(!1),f=sv(()=>d.value=!1,l);function F(){i.value?n.clipboard.readText().then(v=>{u.value=v}):u.value=g()}if(c.value&&s)for(const v of a)xe(v,F);async function h(v=tn(o)){c.value&&v!=null&&(i.value?await n.clipboard.writeText(v):m(v),u.value=v,d.value=!0,f.start())}function m(v){const k=document.createElement("textarea");k.value=v??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function g(){var v,k,x;return(x=(k=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:k.toString())!=null?x:""}return{isSupported:c,text:u,copied:d,copy:h}}function Ev(e){return JSON.parse(JSON.stringify(e))}const pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},da="__vueuse_ssr_handlers__";pa[da]=pa[da]||{};const Av=pa[da];function $v(e,n){return Av[e]||n}function Rv(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Tv=Object.defineProperty,Ic=Object.getOwnPropertySymbols,Ov=Object.prototype.hasOwnProperty,Iv=Object.prototype.propertyIsEnumerable,Pc=(e,n,s)=>n in e?Tv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Hc=(e,n)=>{for(var s in n||(n={}))Ov.call(n,s)&&Pc(e,s,n[s]);if(Ic)for(var s of Ic(n))Iv.call(n,s)&&Pc(e,s,n[s]);return e};const Pv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Bc="vueuse-storage";function Hv(e,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=nt,eventFilter:F,onError:h=$=>{console.error($)}}=o,m=(d?Gt:U)(n);if(!s)try{s=$v("getDefaultStorage",()=>{var $;return($=nt)==null?void 0:$.localStorage})()}catch($){h($)}if(!s)return m;const g=tn(n),v=Rv(g),k=(l=o.serializer)!=null?l:Pv[v],{pause:x,resume:b}=Fv(m,()=>w(m.value),{flush:r,deep:a,eventFilter:F});return f&&i&&(xe(f,"storage",N),xe(f,Bc,H)),N(),m;function w($){try{if($==null)s.removeItem(e);else{const j=k.write($),Z=s.getItem(e);Z!==j&&(s.setItem(e,j),f&&f.dispatchEvent(new CustomEvent(Bc,{detail:{key:e,oldValue:Z,newValue:j,storageArea:s}})))}}catch(j){h(j)}}function T($){const j=$?$.newValue:s.getItem(e);if(j==null)return c&&g!==null&&s.setItem(e,k.write(g)),g;if(!$&&u){const Z=k.read(j);return Eo(u)?u(Z,g):v==="object"&&!Array.isArray(Z)?Hc(Hc({},g),Z):Z}else return typeof j!="string"?j:k.read(j)}function H($){N($.detail)}function N($){if(!($&&$.storageArea!==s)){if($&&$.key==null){m.value=g;return}if(!($&&$.key!==e)){x();try{m.value=T($)}catch(j){h(j)}finally{$?tt(b):b()}}}}}function Bv(e){return bs("(prefers-color-scheme: dark)",e)}var Lc=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,Mv=Object.prototype.propertyIsEnumerable,jv=(e,n)=>{var s={};for(var o in e)Lv.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Lc)for(var o of Lc(e))n.indexOf(o)<0&&Mv.call(e,o)&&(s[o]=e[o]);return s};function Dv(e,n,s={}){const o=s,{window:l=nt}=o,r=jv(o,["window"]);let a;const i=qo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=me(()=>wt(e),f=>{c(),i.value&&l&&f&&(a=new ResizeObserver(n),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return nn(d),{isSupported:i,stop:d}}function Nv(e,n={}){const{immediate:s=!0,window:o=nt}=n,l=U(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),nn(u),{isActive:Kt(l),pause:u,resume:c}}function Vv(e,n={width:0,height:0},s={}){const{window:o=nt,box:l="content-box"}=s,r=R(()=>{var c,u;return(u=(c=wt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=U(n.width),i=U(n.height);return Dv(e,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=wt(e);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:F})=>f+F,0),i.value=d.reduce((f,{blockSize:F})=>f+F,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),me(()=>wt(e),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}const Mc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Jv(e,n={}){const{document:s=Od,autoExit:o=!1}=n,l=e||(s==null?void 0:s.querySelector("html")),r=U(!1);let a=Mc[0];const i=qo(()=>{if(s){for(const g of Mc)if(g[1]in s)return a=g,!0}else return!1;return!1}),[c,u,d,,f]=a;async function F(){i.value&&(s!=null&&s[d]&&await s[u](),r.value=!1)}async function h(){if(!i.value)return;await F();const g=wt(l);g&&(await g[c](),r.value=!0)}async function m(){r.value?await F():await h()}return s&&xe(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),o&&nn(F),{isSupported:i,isFullscreen:r,enter:h,exit:F,toggle:m}}function Uv(e,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=nt}=s,i=qo(()=>a&&"IntersectionObserver"in a);let c=Rs;const u=i.value?me(()=>({el:wt(e),root:wt(o)}),({el:f,root:F})=>{if(c(),!f)return;const h=new IntersectionObserver(n,{root:F,rootMargin:l,threshold:r});h.observe(f),c=()=>{h.disconnect(),c=Rs}},{immediate:!0,flush:"post"}):Rs,d=()=>{c(),u()};return nn(d),{isSupported:i,stop:d}}function Jt(e,n,s={}){const{window:o=nt}=s;return Hv(e,n,o==null?void 0:o.localStorage,s)}const qv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Xv(e={}){const{reactive:n=!1,target:s=nt,aliasMap:o=qv,passive:l=!0,onEventFired:r=Rs}=e,a=Ne(new Set),i={toJSON(){return{}},current:a},c=n?Ne(i):i,u=new Set,d=new Set;function f(g,v){g in c&&(n?c[g]=v:c[g].value=v)}function F(){a.clear();for(const g of d)f(g,!1)}function h(g,v){var k,x;const b=(k=g.key)==null?void 0:k.toLowerCase(),T=[(x=g.code)==null?void 0:x.toLowerCase(),b].filter(Boolean);b&&(v?a.add(b):a.delete(b));for(const H of T)d.add(H),f(H,v);b==="meta"&&!v?(u.forEach(H=>{a.delete(H),f(H,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&v&&[...a,...T].forEach(H=>u.add(H))}xe(s,"keydown",g=>(h(g,!0),r(g)),{passive:l}),xe(s,"keyup",g=>(h(g,!1),r(g)),{passive:l}),xe("blur",F,{passive:!0}),xe("focus",F,{passive:!0});const m=new Proxy(c,{get(g,v,k){if(typeof v!="string")return Reflect.get(g,v,k);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const b=v.split(/[+_-]/g).map(w=>w.trim());c[v]=R(()=>b.every(w=>C(m[w])))}else c[v]=U(!1);const x=Reflect.get(g,v,k);return n?C(x):x}});return m}function LA(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=nt,eventFilter:a}=e,i=U(l.x),c=U(l.y),u=U(null),d=g=>{n==="page"?(i.value=g.pageX,c.value=g.pageY):n==="client"?(i.value=g.clientX,c.value=g.clientY):n==="movement"&&(i.value=g.movementX,c.value=g.movementY),u.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},F=g=>{if(g.touches.length>0){const v=g.touches[0];n==="page"?(i.value=v.pageX,c.value=v.pageY):n==="client"&&(i.value=v.clientX,c.value=v.clientY),u.value="touch"}},h=g=>a===void 0?d(g):a(()=>d(g),{}),m=g=>a===void 0?F(g):a(()=>F(g),{});return r&&(xe(r,"mousemove",h,{passive:!0}),xe(r,"dragover",h,{passive:!0}),s&&n!=="movement"&&(xe(r,"touchstart",m,{passive:!0}),xe(r,"touchmove",m,{passive:!0}),o&&xe(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var un;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(un||(un={}));function Wv(e,n={}){const s=Ad(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=Ne({x:0,y:0}),c=(H,N)=>{i.x=H,i.y=N},u=Ne({x:0,y:0}),d=(H,N)=>{u.x=H,u.y=N},f=R(()=>i.x-u.x),F=R(()=>i.y-u.y),{max:h,abs:m}=Math,g=R(()=>h(m(f.value),m(F.value))>=o),v=U(!1),k=U(!1),x=R(()=>g.value?m(f.value)>m(F.value)?f.value>0?un.LEFT:un.RIGHT:F.value>0?un.UP:un.DOWN:un.NONE),b=H=>{var N,$,j;const Z=H.buttons===0,ie=H.buttons===1;return(j=($=(N=n.pointerTypes)==null?void 0:N.includes(H.pointerType))!=null?$:Z||ie)!=null?j:!0},w=[xe(e,"pointerdown",H=>{var N,$;if(!b(H))return;k.value=!0,($=(N=s.value)==null?void 0:N.style)==null||$.setProperty("touch-action","none");const j=H.target;j==null||j.setPointerCapture(H.pointerId);const{clientX:Z,clientY:ie}=H;c(Z,ie),d(Z,ie),a==null||a(H)}),xe(e,"pointermove",H=>{if(!b(H)||!k.value)return;const{clientX:N,clientY:$}=H;d(N,$),!v.value&&g.value&&(v.value=!0),v.value&&(l==null||l(H))}),xe(e,"pointerup",H=>{var N,$;b(H)&&(v.value&&(r==null||r(H,x.value)),k.value=!1,v.value=!1,($=(N=s.value)==null?void 0:N.style)==null||$.setProperty("touch-action","initial"))})],T=()=>w.forEach(H=>H());return{isSwiping:Kt(v),direction:Kt(x),posStart:Kt(i),posEnd:Kt(u),distanceX:f,distanceY:F,stop:T}}let zv=0;function MA(e,n={}){const s=U(!1),{document:o=Od,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++zv}`}=n,i=U(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(c=me(i,F=>{f.textContent=F},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&ci(u),r||nn(d),{id:a,css:i,unload:d,load:u,isLoaded:Kt(s)}}var Kv=Object.defineProperty,jc=Object.getOwnPropertySymbols,Yv=Object.prototype.hasOwnProperty,Zv=Object.prototype.propertyIsEnumerable,Dc=(e,n,s)=>n in e?Kv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Gv=(e,n)=>{for(var s in n||(n={}))Yv.call(n,s)&&Dc(e,s,n[s]);if(jc)for(var s of jc(n))Zv.call(n,s)&&Dc(e,s,n[s]);return e};function jA(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=U(ua()+s),i=()=>a.value=ua()+s,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?Nv(c,{immediate:o}):nv(c,l,{immediate:o});return n?Gv({timestamp:a},u):a}var Qv=Object.defineProperty,Nc=Object.getOwnPropertySymbols,e8=Object.prototype.hasOwnProperty,t8=Object.prototype.propertyIsEnumerable,Vc=(e,n,s)=>n in e?Qv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,n8=(e,n)=>{for(var s in n||(n={}))e8.call(n,s)&&Vc(e,s,n[s]);if(Nc)for(var s of Nc(n))t8.call(n,s)&&Vc(e,s,n[s]);return e};const s8={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};n8({linear:Zg},s8);function Yt(e,n,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=o,F=At(),h=s||(F==null?void 0:F.emit)||((l=F==null?void 0:F.$emit)==null?void 0:l.bind(F))||((a=(r=F==null?void 0:F.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(F==null?void 0:F.proxy));let m=u;n||(n="modelValue"),m=u||m||`update:${n.toString()}`;const g=k=>i?Eo(i)?i(k):Ev(k):k,v=()=>qg(e[n])?g(e[n]):f;if(c){const k=v(),x=U(k);return me(()=>e[n],b=>x.value=g(b)),me(x,b=>{(b!==e[n]||d)&&h(m,b)},{deep:d}),x}else return R({get(){return v()},set(k){h(m,k)}})}function DA({window:e=nt}={}){if(!e)return U(!1);const n=U(e.document.hasFocus());return xe(e,"blur",()=>{n.value=!1}),xe(e,"focus",()=>{n.value=!0}),n}function o8(e={}){const{window:n=nt,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=U(s),i=U(o),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),ci(c),xe("resize",c,{passive:!0}),l&&xe("orientationchange",c,{passive:!0}),{width:a,height:i}}function l8(){return Id().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Id(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const r8=typeof Proxy=="function",a8="devtools-plugin:setup",i8="plugin:settings:set";let ms,fa;function c8(){var e;return ms!==void 0||(typeof window<"u"&&window.performance?(ms=!0,fa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ms=!0,fa=global.perf_hooks.performance):ms=!1),ms}function u8(){return c8()?fa.now():Date.now()}class p8{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return u8()}},s&&s.on(i8,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function d8(e,n){const s=e,o=Id(),l=l8(),r=r8&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(a8,e,n);else{const a=r?new p8(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function f8(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function xr(e,n){const s={};for(const o in n){const l=n[o];s[o]=Et(l)?l.map(e):e(l)}return s}const co=()=>{},Et=Array.isArray;function Ce(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const F8=/\/$/,h8=e=>e.replace(F8,"");function br(e,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),l=e(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=g8(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function m8(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Jc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Uc(e,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Bn(n.matched[o],s.matched[l])&&Pd(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function Bn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Pd(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!y8(e[s],n[s]))return!1;return!0}function y8(e,n){return Et(e)?qc(e,n):Et(n)?qc(n,e):e===n}function qc(e,n){return Et(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function g8(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),o=e.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Ao;(function(e){e.pop="pop",e.push="push"})(Ao||(Ao={}));var uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(uo||(uo={}));function v8(e){if(!e)if(an){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),h8(e)}const _8=/^[^#]+#/;function x8(e,n){return e.replace(_8,"#")+n}function b8(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function k8(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=b8(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Xc(e,n){return(history.state?history.state.position-n:-1)+e}const Fa=new Map;function C8(e,n){Fa.set(e,n)}function w8(e){const n=Fa.get(e);return Fa.delete(e),n}let S8=()=>location.protocol+"//"+location.host;function Hd(e,n){const{pathname:s,search:o,hash:l}=n,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),Jc(c,"")}return Jc(s,e)+o+l}function E8(e,n,s,o){let l=[],r=[],a=null;const i=({state:F})=>{const h=Hd(e,location),m=s.value,g=n.value;let v=0;if(F){if(s.value=h,n.value=F,a&&a===m){a=null;return}v=g?F.position-g.position:0}else o(h);l.forEach(k=>{k(s.value,m,{delta:v,type:Ao.pop,direction:v?v>0?uo.forward:uo.back:uo.unknown})})};function c(){a=s.value}function u(F){l.push(F);const h=()=>{const m=l.indexOf(F);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:F}=window;F.state&&F.replaceState(Ee({},F.state,{scroll:tr()}),"")}function f(){for(const F of r)F();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Wc(e,n,s,o=!1,l=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?tr():null}}function A8(e){const{history:n,location:s}=window,o={value:Hd(e,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=e.indexOf("#"),F=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:S8()+e+c;try{n[d?"replaceState":"pushState"](u,"",F),l.value=u}catch(h){Ce("Error with push/replace State",h),s[d?"replace":"assign"](F)}}function a(c,u){const d=Ee({},n.state,Wc(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=Ee({},l.value,n.state,{forward:c,scroll:tr()});n.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Ee({},Wc(o.value,c,null),{position:d.position+1},u);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function $8(e){e=v8(e);const n=A8(e),s=E8(e,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Ee({location:"",base:e,go:o,createHref:x8.bind(null,e)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function R8(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Ce(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),$8(e)}function T8(e){return typeof e=="string"||e&&typeof e=="object"}function Bd(e){return typeof e=="string"||typeof e=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ld=Symbol("navigation failure");var zc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(zc||(zc={}));const O8={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${P8(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Bs(e,n){return Ee(new Error(O8[e](n)),{type:e,[Ld]:!0},n)}function sn(e,n){return e instanceof Error&&Ld in e&&(n==null||!!(e.type&n))}const I8=["params","query","hash"];function P8(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of I8)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const Kc="[^/]+?",H8={sensitive:!1,strict:!1,start:!0,end:!0},B8=/[.+*?^${}()[\]/\\]/g;function L8(e,n){const s=Ee({},H8,n),o=[];let l=s.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const F=u[f];let h=40+(s.sensitive?.25:0);if(F.type===0)f||(l+="/"),l+=F.value.replace(B8,"\\$&"),h+=40;else if(F.type===1){const{value:m,repeatable:g,optional:v,regexp:k}=F;r.push({name:m,repeatable:g,optional:v});const x=k||Kc;if(x!==Kc){h+=10;try{new RegExp(`(${x})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${x}): `+w.message)}}let b=g?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(b=v&&u.length<2?`(?:/${b})`:"/"+b),v&&(b+="?"),l+=b,h+=20,v&&(h+=-8),g&&(h+=-20),x===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const d=u.match(a),f={};if(!d)return null;for(let F=1;F<d.length;F++){const h=d[F]||"",m=r[F-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function c(u){let d="",f=!1;for(const F of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of F)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:g,optional:v}=h,k=m in u?u[m]:"";if(Et(k)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const x=Et(k)?k.join("/"):k;if(!x)if(v)F.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=x}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function M8(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function j8(e,n){let s=0;const o=e.score,l=n.score;for(;s<o.length&&s<l.length;){const r=M8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Yc(o))return 1;if(Yc(l))return-1}return l.length-o.length}function Yc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const D8={type:0,value:""},N8=/[a-zA-Z0-9_]/;function V8(e){if(!e)return[[]];if(e==="/")return[[D8]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function f(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function F(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):F();break;case 4:F(),s=o;break;case 1:c==="("?s=2:N8.test(c)?F():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function J8(e,n,s){const o=L8(V8(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Ce(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Ee(o,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function U8(e,n){const s=[],o=new Map;n=Qc({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,f,F){const h=!F,m=q8(d);K8(m,f),m.aliasOf=F&&F.record;const g=Qc(n,d),v=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of b)v.push(Ee({},m,{components:F?F.record.components:m.components,path:w,aliasOf:F?F.record:m}))}let k,x;for(const b of v){const{path:w}=b;if(f&&w[0]!=="/"){const T=f.record.path,H=T[T.length-1]==="/"?"":"/";b.path=f.record.path+(w&&H+w)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=J8(b,f,g),f&&w[0]==="/"&&Y8(k,f),F?(F.alias.push(k),z8(F,k)):(x=x||k,x!==k&&x.alias.push(k),h&&d.name&&!Gc(k)&&a(d.name)),m.children){const T=m.children;for(let H=0;H<T.length;H++)r(T[H],k,F&&F.children[H])}F=F||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return x?()=>{a(x)}:co}function a(d){if(Bd(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&j8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Md(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Gc(d)&&o.set(d.record.name,d)}function u(d,f){let F,h={},m,g;if("name"in d&&d.name){if(F=o.get(d.name),!F)throw Bs(1,{location:d});{const x=Object.keys(d.params||{}).filter(b=>!F.keys.find(w=>w.name===b));x.length&&Ce(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=F.record.name,h=Ee(Zc(f.params,F.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&Zc(d.params,F.keys.map(x=>x.name))),m=F.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),F=s.find(x=>x.re.test(m)),F&&(h=F.parse(m),g=F.record.name);else{if(F=f.name?o.get(f.name):s.find(x=>x.re.test(f.path)),!F)throw Bs(1,{location:d,currentLocation:f});g=F.record.name,h=Ee({},f.params,d.params),m=F.stringify(h)}const v=[];let k=F;for(;k;)v.unshift(k.record),k=k.parent;return{name:g,path:m,params:h,matched:v,meta:W8(v)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Zc(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function q8(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:X8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function X8(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Gc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function W8(e){return e.reduce((n,s)=>Ee(n,s.meta),{})}function Qc(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function ha(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function z8(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(ha.bind(null,s)))return Ce(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(ha.bind(null,s)))return Ce(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function K8(e,n){n&&n.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Y8(e,n){for(const s of n.keys)if(!e.keys.find(ha.bind(null,s)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function Md(e,n){return n.children.some(s=>s===e||Md(e,s))}const jd=/#/g,Z8=/&/g,G8=/\//g,Q8=/=/g,e1=/\?/g,Dd=/\+/g,t1=/%5B/g,n1=/%5D/g,Nd=/%5E/g,s1=/%60/g,Vd=/%7B/g,o1=/%7C/g,Jd=/%7D/g,l1=/%20/g;function ui(e){return encodeURI(""+e).replace(o1,"|").replace(t1,"[").replace(n1,"]")}function r1(e){return ui(e).replace(Vd,"{").replace(Jd,"}").replace(Nd,"^")}function ma(e){return ui(e).replace(Dd,"%2B").replace(l1,"+").replace(jd,"%23").replace(Z8,"%26").replace(s1,"`").replace(Vd,"{").replace(Jd,"}").replace(Nd,"^")}function a1(e){return ma(e).replace(Q8,"%3D")}function i1(e){return ui(e).replace(jd,"%23").replace(e1,"%3F")}function c1(e){return e==null?"":i1(e).replace(G8,"%2F")}function $o(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function u1(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Dd," "),a=r.indexOf("="),i=$o(a<0?r:r.slice(0,a)),c=a<0?null:$o(r.slice(a+1));if(i in n){let u=n[i];Et(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function eu(e){let n="";for(let s in e){const o=e[s];if(s=a1(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Et(o)?o.map(r=>r&&ma(r)):[o&&ma(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function p1(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=Et(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const d1=Symbol("router view location matched"),tu=Symbol("router view depth"),pi=Symbol("router"),Ud=Symbol("route location"),ya=Symbol("router view location");function Ws(){let e=[];function n(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function kn(e,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Bs(4,{from:s,to:n})):f instanceof Error?i(f):T8(f)?i(Bs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=e.call(o&&o.instances[l],n,s,f1(c,n,s));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(F=>c._called?F:(Ce(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ce(f),i(new Error("Invalid navigation guard"));return}}d.catch(f=>i(f))})}function f1(e,n,s){let o=0;return function(){o++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function kr(e,n,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&Ce(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ce(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ce(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ce(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(F1(i)){const u=(i.__vccOpts||i)[n];u&&l.push(kn(u,s,o,r,a))}else{let c=i();"catch"in c||(Ce(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=f8(u)?u.default:u;r.components[a]=d;const F=(d.__vccOpts||d)[n];return F&&kn(F,s,o,r,a)()}))}}}return l}function F1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nu(e){const n=K(pi),s=K(Ud),o=R(()=>n.resolve(C(e.to))),l=R(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=s.matched;if(!d||!f.length)return-1;const F=f.findIndex(Bn.bind(null,d));if(F>-1)return F;const h=su(c[u-2]);return u>1&&su(d)===h&&f[f.length-1].path!==h?f.findIndex(Bn.bind(null,c[u-2])):F}),r=R(()=>l.value>-1&&g1(s.params,o.value.params)),a=R(()=>l.value>-1&&l.value===s.matched.length-1&&Pd(s.params,o.value.params));function i(c={}){return y1(c)?n[C(e.replace)?"replace":"push"](C(e.to)).catch(co):Promise.resolve()}if(an){const c=At();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ps(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const h1=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nu,setup(e,{slots:n}){const s=Ne(nu(e)),{options:o}=K(pi),l=R(()=>({[ou(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[ou(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return e.custom?r:Ge("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),m1=h1;function y1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function g1(e,n){for(const s in n){const o=n[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Et(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function su(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ou=(e,n,s)=>e??n??s,v1=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){x1();const o=K(ya),l=R(()=>e.route||o.value),r=K(tu,0),a=R(()=>{let u=C(r);const{matched:d}=l.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=R(()=>l.value.matched[a.value]);kt(tu,R(()=>a.value+1)),kt(d1,i),kt(ya,l);const c=U();return me(()=>[c.value,i.value,e.name],([u,d,f],[F,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===F&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Bn(d,h)||!F)&&(d.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=l.value,d=e.name,f=i.value,F=f&&f.components[d];if(!F)return lu(s.default,{Component:F,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,v=Ge(F,Ee({},m,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(an&&v.ref){const k={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Et(v.ref)?v.ref.map(b=>b.i):[v.ref.i]).forEach(b=>{b.__vrv_devtools=k})}return lu(s.default,{Component:v,route:u})||v}}});function lu(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const _1=v1;function x1(){const e=At(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function zs(e,n){const s=Ee({},e,{matched:e.matched.map(o=>R1(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function rl(e){return{_custom:{display:e}}}let b1=0;function k1(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=b1++;d8({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:zs(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const F=f.__vrv_devtools;d.tags.push({label:(F.name?`${F.name.toString()}: `:"")+F.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:qd})}Et(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(F=>{let h=zd,m="";F.isExactActive?(h=Wd,m="This is exactly active"):F.isActive&&(h=Xd,m="This link is active"),d.tags.push({label:F.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),me(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;n.beforeEach((d,f)=>{const F={guard:rl("beforeEach"),from:zs(f,"Current Location during this navigation"),to:zs(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:F,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,F)=>{const h={guard:rl("afterEach")};F?(h.failure={_custom:{type:Error,readOnly:!0,display:F?F.message:"",tooltip:"Navigation Failure",value:F}},h.status=rl("❌")):h.status=rl("✅"),h.from=zs(f,"Current Location during this navigation"),h.to=zs(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:F?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let f=s.getRoutes().filter(F=>!F.parent);f.forEach(Zd),d.filter&&(f=f.filter(F=>ga(F,d.filter.toLowerCase()))),f.forEach(F=>Yd(F,n.currentRoute.value)),d.rootNodes=f.map(Kd)}let u;l.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const F=s.getRoutes().find(h=>h.record.__vd_id===d.nodeId);F&&(d.state={options:w1(F)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function C1(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function w1(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${C1(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const qd=15485081,Xd=2450411,Wd=8702998,S1=2282478,zd=16486972,E1=6710886;function Kd(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:S1}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:zd}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:qd}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Wd}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Xd}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:E1});let o=s.__vd_id;return o==null&&(o=String(A1++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:e.children.map(Kd)}}let A1=0;const $1=/^\/(.*)\/([a-z]*)$/;function Yd(e,n){const s=n.matched.length&&Bn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(o=>Bn(o,e.record))),e.children.forEach(o=>Yd(o,n))}function Zd(e){e.__vd_match=!1,e.children.forEach(Zd)}function ga(e,n){const s=String(e.re).match($1);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(a=>ga(a,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const l=e.record.path.toLowerCase(),r=$o(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(a=>ga(a,n))}function R1(e,n){const s={};for(const o in e)n.includes(o)||(s[o]=e[o]);return s}function T1(e){const n=U8(e.routes,e),s=e.parseQuery||u1,o=e.stringifyQuery||eu,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Ws(),a=Ws(),i=Ws(),c=Gt(vn);let u=vn;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xr.bind(null,A=>""+A),f=xr.bind(null,c1),F=xr.bind(null,$o);function h(A,Y){let V,G;return Bd(A)?(V=n.getRecordMatcher(A),G=Y):G=A,n.addRoute(G,V)}function m(A){const Y=n.getRecordMatcher(A);Y?n.removeRoute(Y):Ce(`Cannot remove non-existent route "${String(A)}"`)}function g(){return n.getRoutes().map(A=>A.record)}function v(A){return!!n.getRecordMatcher(A)}function k(A,Y){if(Y=Ee({},Y||c.value),typeof A=="string"){const ue=br(s,A,Y.path),y=n.resolve({path:ue.path},Y),_=l.createHref(ue.fullPath);return _.startsWith("//")?Ce(`Location "${A}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):y.matched.length||Ce(`No match found for location with path "${A}"`),Ee(ue,y,{params:F(y.params),hash:$o(ue.hash),redirectedFrom:void 0,href:_})}let V;if("path"in A)"params"in A&&!("name"in A)&&Object.keys(A.params).length&&Ce(`Path "${A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),V=Ee({},A,{path:br(s,A.path,Y.path).path});else{const ue=Ee({},A.params);for(const y in ue)ue[y]==null&&delete ue[y];V=Ee({},A,{params:f(A.params)}),Y.params=f(Y.params)}const G=n.resolve(V,Y),ve=A.hash||"";ve&&!ve.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),G.params=d(F(G.params));const ke=m8(o,Ee({},A,{hash:r1(ve),path:G.path})),de=l.createHref(ke);return de.startsWith("//")?Ce(`Location "${A}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):G.matched.length||Ce(`No match found for location with path "${"path"in A?A.path:A}"`),Ee({fullPath:ke,hash:ve,query:o===eu?p1(A.query):A.query||{}},G,{redirectedFrom:void 0,href:de})}function x(A){return typeof A=="string"?br(s,A,c.value.path):Ee({},A)}function b(A,Y){if(u!==A)return Bs(8,{from:Y,to:A})}function w(A){return N(A)}function T(A){return w(Ee(x(A),{replace:!0}))}function H(A){const Y=A.matched[A.matched.length-1];if(Y&&Y.redirect){const{redirect:V}=Y;let G=typeof V=="function"?V(A):V;if(typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=x(G):{path:G},G.params={}),!("path"in G)&&!("name"in G))throw Ce(`Invalid redirect found:
${JSON.stringify(G,null,2)}
 when navigating to "${A.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:A.query,hash:A.hash,params:"path"in G?{}:A.params},G)}}function N(A,Y){const V=u=k(A),G=c.value,ve=A.state,ke=A.force,de=A.replace===!0,ue=H(V);if(ue)return N(Ee(x(ue),{state:typeof ue=="object"?Ee({},ve,ue.state):ve,force:ke,replace:de}),Y||V);const y=V;y.redirectedFrom=Y;let _;return!ke&&Uc(o,G,V)&&(_=Bs(16,{to:y,from:G}),Ie(G,G,!0,!1)),(_?Promise.resolve(_):j(y,G)).catch(S=>sn(S)?sn(S,2)?S:ge(S):W(S,y,G)).then(S=>{if(S){if(sn(S,2))return Uc(o,k(S.to),y)&&Y&&(Y._count=Y._count?Y._count+1:1)>10?(Ce(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${y.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(Ee({replace:de},x(S.to),{state:typeof S.to=="object"?Ee({},ve,S.to.state):ve,force:ke}),Y||y)}else S=ie(y,G,!0,de,ve);return Z(y,G,S),S})}function $(A,Y){const V=b(A,Y);return V?Promise.reject(V):Promise.resolve()}function j(A,Y){let V;const[G,ve,ke]=O1(A,Y);V=kr(G.reverse(),"beforeRouteLeave",A,Y);for(const ue of G)ue.leaveGuards.forEach(y=>{V.push(kn(y,A,Y))});const de=$.bind(null,A,Y);return V.push(de),ys(V).then(()=>{V=[];for(const ue of r.list())V.push(kn(ue,A,Y));return V.push(de),ys(V)}).then(()=>{V=kr(ve,"beforeRouteUpdate",A,Y);for(const ue of ve)ue.updateGuards.forEach(y=>{V.push(kn(y,A,Y))});return V.push(de),ys(V)}).then(()=>{V=[];for(const ue of A.matched)if(ue.beforeEnter&&!Y.matched.includes(ue))if(Et(ue.beforeEnter))for(const y of ue.beforeEnter)V.push(kn(y,A,Y));else V.push(kn(ue.beforeEnter,A,Y));return V.push(de),ys(V)}).then(()=>(A.matched.forEach(ue=>ue.enterCallbacks={}),V=kr(ke,"beforeRouteEnter",A,Y),V.push(de),ys(V))).then(()=>{V=[];for(const ue of a.list())V.push(kn(ue,A,Y));return V.push(de),ys(V)}).catch(ue=>sn(ue,8)?ue:Promise.reject(ue))}function Z(A,Y,V){for(const G of i.list())G(A,Y,V)}function ie(A,Y,V,G,ve){const ke=b(A,Y);if(ke)return ke;const de=Y===vn,ue=an?history.state:{};V&&(G||de?l.replace(A.fullPath,Ee({scroll:de&&ue&&ue.scroll},ve)):l.push(A.fullPath,ve)),c.value=A,Ie(A,Y,V,de),ge()}let q;function ce(){q||(q=l.listen((A,Y,V)=>{if(!mn.listening)return;const G=k(A),ve=H(G);if(ve){N(Ee(ve,{replace:!0}),G).catch(co);return}u=G;const ke=c.value;an&&C8(Xc(ke.fullPath,V.delta),tr()),j(G,ke).catch(de=>sn(de,12)?de:sn(de,2)?(N(de.to,G).then(ue=>{sn(ue,20)&&!V.delta&&V.type===Ao.pop&&l.go(-1,!1)}).catch(co),Promise.reject()):(V.delta&&l.go(-V.delta,!1),W(de,G,ke))).then(de=>{de=de||ie(G,ke,!1),de&&(V.delta&&!sn(de,8)?l.go(-V.delta,!1):V.type===Ao.pop&&sn(de,20)&&l.go(-1,!1)),Z(G,ke,de)}).catch(co)}))}let Te=Ws(),Xe=Ws(),Be;function W(A,Y,V){ge(A);const G=Xe.list();return G.length?G.forEach(ve=>ve(A,Y,V)):(Ce("uncaught error during route navigation:"),console.error(A)),Promise.reject(A)}function re(){return Be&&c.value!==vn?Promise.resolve():new Promise((A,Y)=>{Te.add([A,Y])})}function ge(A){return Be||(Be=!A,ce(),Te.list().forEach(([Y,V])=>A?V(A):Y()),Te.reset()),A}function Ie(A,Y,V,G){const{scrollBehavior:ve}=e;if(!an||!ve)return Promise.resolve();const ke=!V&&w8(Xc(A.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return tt().then(()=>ve(A,Y,ke)).then(de=>de&&k8(de)).catch(de=>W(de,A,Y))}const vt=A=>l.go(A);let st;const ft=new Set,mn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:v,getRoutes:g,resolve:k,options:e,push:w,replace:T,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Xe.add,isReady:re,install(A){const Y=this;A.component("RouterLink",m1),A.component("RouterView",_1),A.config.globalProperties.$router=Y,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>C(c)}),an&&!st&&c.value===vn&&(st=!0,w(l.location).catch(ve=>{Ce("Unexpected error when starting the router:",ve)}));const V={};for(const ve in vn)V[ve]=R(()=>c.value[ve]);A.provide(pi,Y),A.provide(Ud,Ne(V)),A.provide(ya,c);const G=A.unmount;ft.add(A),A.unmount=function(){ft.delete(A),ft.size<1&&(u=vn,q&&q(),q=null,c.value=vn,st=!1,Be=!1),G()},an&&k1(A,Y,n)}};return mn}function ys(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function O1(e,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(e.matched.find(u=>Bn(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>Bn(u,c))||l.push(c))}return[s,o,l]}const Cr=U(!1),po=U(!1),Cs=U(!1),I1=U(!0),va=wv({xs:460,..._v}),ls=o8(),Gd=Xv(),P1=R(()=>ls.height.value-ls.width.value/Rn>180),Qd=Jv(en?document.body:null),Ts=vv(),H1=R(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")||((n=Ts.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),B1=R(()=>{var e;return["BUTTON","A"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const hl=Jt("slidev-scale",0),it=Jt("slidev-show-overview",!1),wr=Jt("slidev-presenter-cursor",!0),ru=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",en?window.innerWidth*.4:100);const ef=$d(it);function au(e,n,s,o=l=>l){return e*o(.5-n*(.5-s))}function L1(e){return[-e[0],-e[1]]}function Mt(e,n){return[e[0]+n[0],e[1]+n[1]]}function Tt(e,n){return[e[0]-n[0],e[1]-n[1]]}function Lt(e,n){return[e[0]*n,e[1]*n]}function M1(e,n){return[e[0]/n,e[1]/n]}function Ks(e){return[e[1],-e[0]]}function iu(e,n){return e[0]*n[0]+e[1]*n[1]}function j1(e,n){return e[0]===n[0]&&e[1]===n[1]}function D1(e){return Math.hypot(e[0],e[1])}function N1(e){return e[0]*e[0]+e[1]*e[1]}function cu(e,n){return N1(Tt(e,n))}function tf(e){return M1(e,D1(e))}function V1(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Ys(e,n,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-n[0],a=e[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function _a(e,n,s){return Mt(e,Lt(Tt(n,e),s))}function uu(e,n,s){return Mt(e,Lt(n,s))}var{min:gs,PI:J1}=Math,pu=.275,Zs=J1+1e-4;function U1(e,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=W=>W,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:f=W=>W*(2-W)}=i,{cap:F=!0,easing:h=W=>--W*W*W+1}=c;if(e.length===0||s<=0)return[];let m=e[e.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,v=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,k=Math.pow(s*o,2),x=[],b=[],w=e.slice(0,10).reduce((W,re)=>{let ge=re.pressure;if(r){let Ie=gs(1,re.distance/s),vt=gs(1,1-Ie);ge=gs(1,W+(vt-W)*(Ie*pu))}return(W+ge)/2},e[0].pressure),T=au(s,l,e[e.length-1].pressure,a),H,N=e[0].vector,$=e[0].point,j=$,Z=$,ie=j,q=!1;for(let W=0;W<e.length;W++){let{pressure:re}=e[W],{point:ge,vector:Ie,distance:vt,runningLength:st}=e[W];if(W<e.length-1&&m-st<3)continue;if(l){if(r){let ke=gs(1,vt/s),de=gs(1,1-ke);re=gs(1,w+(de-w)*(ke*pu))}T=au(s,l,re,a)}else T=s/2;H===void 0&&(H=T);let ft=st<g?f(st/g):1,mn=m-st<v?h((m-st)/v):1;T=Math.max(.01,T*Math.min(ft,mn));let A=(W<e.length-1?e[W+1]:e[W]).vector,Y=W<e.length-1?iu(Ie,A):1,V=iu(Ie,N)<0&&!q,G=Y!==null&&Y<0;if(V||G){let ke=Lt(Ks(N),T);for(let de=1/13,ue=0;ue<=1;ue+=de)Z=Ys(Tt(ge,ke),ge,Zs*ue),x.push(Z),ie=Ys(Mt(ge,ke),ge,Zs*-ue),b.push(ie);$=Z,j=ie,G&&(q=!0);continue}if(q=!1,W===e.length-1){let ke=Lt(Ks(Ie),T);x.push(Tt(ge,ke)),b.push(Mt(ge,ke));continue}let ve=Lt(Ks(_a(A,Ie,Y)),T);Z=Tt(ge,ve),(W<=1||cu($,Z)>k)&&(x.push(Z),$=Z),ie=Mt(ge,ve),(W<=1||cu(j,ie)>k)&&(b.push(ie),j=ie),w=re,N=Ie}let ce=e[0].point.slice(0,2),Te=e.length>1?e[e.length-1].point.slice(0,2):Mt(e[0].point,[1,1]),Xe=[],Be=[];if(e.length===1){if(!(g||v)||u){let W=uu(ce,tf(Ks(Tt(ce,Te))),-(H||T)),re=[];for(let ge=1/13,Ie=ge;Ie<=1;Ie+=ge)re.push(Ys(W,ce,Zs*2*Ie));return re}}else{if(!(g||v&&e.length===1))if(d)for(let re=1/13,ge=re;ge<=1;ge+=re){let Ie=Ys(b[0],ce,Zs*ge);Xe.push(Ie)}else{let re=Tt(x[0],b[0]),ge=Lt(re,.5),Ie=Lt(re,.51);Xe.push(Tt(ce,ge),Tt(ce,Ie),Mt(ce,Ie),Mt(ce,ge))}let W=Ks(L1(e[e.length-1].vector));if(v||g&&e.length===1)Be.push(Te);else if(F){let re=uu(Te,W,T);for(let ge=1/29,Ie=ge;Ie<1;Ie+=ge)Be.push(Ys(re,Te,Zs*3*Ie))}else Be.push(Mt(Te,Lt(W,T)),Mt(Te,Lt(W,T*.99)),Tt(Te,Lt(W,T*.99)),Tt(Te,Lt(W,T)))}return x.concat(Be,b.reverse(),Xe)}function q1(e,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:g=.5})=>[h,m,g]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(_a(i[0],h,m/4))}i.length===1&&(i=[...i,[...Mt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],F=i.length-1;for(let h=1;h<i.length;h++){let m=r&&h===F?i[h].slice(0,2):_a(f.point,i[h],a);if(j1(f.point,m))continue;let g=V1(m,f.point);if(d+=g,h<F&&!u){if(d<l)continue;u=!0}f={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:tf(Tt(f.point,m)),distance:g,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function X1(e,n={}){return U1(q1(e,n),n)}var W1=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>n!==l)}}});function Il(e,n){return e-n}function z1(e){return e<0?-1:1}function Pl(e){return[Math.abs(e),z1(e)]}function nf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var K1=2,cn=K1,Ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(cn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Y1=class extends Ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=X1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Z1=class extends Ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Pl(e.x-this.start.x),[o,l]=Pl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Il),[i,c]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function sf(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var G1=class extends Ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=nf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(sf(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Q1=class extends Ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Pl(e.x-this.start.x),[o,l]=Pl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Il),[i,c]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function e_(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function t_(e,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function n_(e,n){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],e_(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function xa(e,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=t_(e[i],e[n],e[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&xa(e,n,a,o,l),l.push(e[a]),s-a>1&&xa(e,a,s,o,l))}function s_(e,n){const s=e.length-1,o=[e[0]];return xa(e,0,s,n,o),o.push(e[s]),o}function du(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:n_(e,o),e=s_(e,o),e}var o_=class extends Ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=nf();const n=sf(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=du(this.points,1,!0),this.count=0),this.attr("d",Fu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fu(du(this.points,1,!0))),!e.getTotalLength()))}};function l_(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function fu(e,n,s,o){const l=n||e,r=s||e,a=.2,i=l_(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function r_(e,n,s){const o=fu(s[n-1],s[n-2],e),l=fu(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(cn)},${o.y.toFixed(cn)} ${l.x.toFixed(cn)},${l.y.toFixed(cn)} ${e.x.toFixed(cn)},${e.y.toFixed(cn)}`}function Fu(e){return e.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(cn)},${s.y.toFixed(cn)}`:`${n} ${r_(s,o,l)}`,"")}var a_=class extends Ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,l=n.x1,r=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,d=(s-o)*(c-u)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),F=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),h=(m,g,v)=>m>=g&&m<=v?!0:m>=v&&m<=g;if(d===0)return!1;{const m={x:f/d,y:F/d};return h(m.x,s,o)&&h(m.y,a,i)&&h(m.x,l,r)&&h(m.y,c,u)}}};function i_(e){return{draw:new o_(e),stylus:new Y1(e),line:new G1(e),rectangle:new Q1(e),ellipse:new Z1(e),eraseLine:new a_(e)}}var c_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=W1(),this._models=i_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function u_(e){return new c_(e)}const ba=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Zn=Jt("slidev-drawing-enabled",!1);Jt("slidev-drawing-pinned",!1);const p_=U(!1),d_=U(!1),f_=U(!1),Ro=U(!1),ws=ev(Jt("slidev-drawing-brush",{color:ba[0],size:4,mode:"stylus"})),hu=U("stylus"),of=R(()=>Se.drawings.syncAll||Ct.value);let To=!1;const Gs=R({get(){return hu.value},set(e){hu.value=e,e==="arrow"?(ws.mode="line",ws.arrowEnd=!0):(ws.mode=e,ws.arrowEnd=!1)}}),F_=Ne({brush:ws,acceptsInputTypes:R(()=>Zn.value&&(!Se.drawings.presenterOnly||Ct.value)?void 0:["pen"]),coordinateTransform:!1}),dt=Ul(u_(F_));function h_(){dt.clear(),of.value&&wd(Ue.value,"")}function di(){var e;d_.value=dt.canRedo(),p_.value=dt.canUndo(),f_.value=!!((e=dt.el)!=null&&e.children.length)}function m_(e){To=!0;const n=Tl[e||Ue.value];n!=null?dt.load(n):dt.clear(),di(),To=!1}dt.on("changed",()=>{if(di(),!To){const e=dt.dump(),n=Ue.value;(Tl[n]||"")!==e&&of.value&&wd(n,dt.dump())}});Vg(e=>{To=!0,e[Ue.value]!=null&&dt.load(e[Ue.value]||""),To=!1,di()});tt(()=>{me(Ue,()=>{dt.mounted&&m_()},{immediate:!0})});dt.on("start",()=>Ro.value=!0);dt.on("end",()=>Ro.value=!1);window.addEventListener("keydown",e=>{if(!Zn.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?dt.redo():dt.undo():e.code==="Escape"?Zn.value=!1:e.code==="KeyL"&&n?Gs.value="line":e.code==="KeyA"&&n?Gs.value="arrow":e.code==="KeyS"&&n?Gs.value="stylus":e.code==="KeyR"&&n?Gs.value="rectangle":e.code==="KeyE"&&n?Gs.value="ellipse":e.code==="KeyC"&&n?h_():e.code.startsWith("Digit")&&n&&+e.code[5]<=ba.length?ws.color=ba[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return R(()=>e.every(n=>tn(n)))}function xt(e){return R(()=>!tn(e))}const mu=Bv(),Sr=Jt("slidev-color-schema","auto"),ka=R(()=>Se.colorSchema!=="auto"),fi=R({get(){return ka.value?Se.colorSchema==="dark":Sr.value==="auto"?mu.value:Sr.value==="dark"},set(e){ka.value||(Sr.value=e===mu.value?"auto":e?"dark":"light")}}),lf=$d(fi);en&&me(fi,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const ml=U(1),yl=R(()=>Ke.length-1),St=U(0),Fi=U(0);function y_(){St.value>ml.value&&(St.value-=1)}function g_(){St.value<yl.value&&(St.value+=1)}function v_(){if(St.value>ml.value){let e=St.value-Fi.value;e<ml.value&&(e=ml.value),St.value=e}}function __(){if(St.value<yl.value){let e=St.value+Fi.value;e>yl.value&&(e=yl.value),St.value=e}}function x_(){const{escape:e,space:n,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:d}=Gd;let f=[{name:"next_space",key:Ye(n,xt(s)),fn:On,autoRepeat:!0},{name:"prev_space",key:Ye(n,s),fn:In,autoRepeat:!0},{name:"next_right",key:Ye(l,xt(s),xt(it)),fn:On,autoRepeat:!0},{name:"prev_left",key:Ye(o,xt(s),xt(it)),fn:In,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:On,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:In,autoRepeat:!0},{name:"next_down",key:Ye(a,xt(it)),fn:Io,autoRepeat:!0},{name:"prev_up",key:Ye(r,xt(it)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:Ye(l,s),fn:Io,autoRepeat:!0},{name:"prev_shift",key:Ye(o,s),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,xt(Zn)),fn:lf},{name:"toggle_overview",key:Ye(d,xt(Zn)),fn:ef},{name:"hide_overview",key:Ye(e,xt(Zn)),fn:()=>it.value=!1},{name:"goto",key:Ye(u,xt(Zn)),fn:()=>Cs.value=!Cs.value},{name:"next_overview",key:Ye(l,it),fn:g_},{name:"prev_overview",key:Ye(o,it),fn:y_},{name:"up_overview",key:Ye(r,it),fn:v_},{name:"down_overview",key:Ye(a,it),fn:__},{name:"goto_from_overview",key:Ye(i,it),fn:()=>{Ls(St.value),it.value=!1}}];const F=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&F.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const rf=Ye(xt(H1),xt(B1),I1);function b_(e,n,s=!1){typeof e=="string"&&(e=Gd[e]);const o=Ye(e,rf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return me(o,a,{flush:"sync"})}function k_(e,n){return gv(e,s=>{rf.value&&(s.repeat||n())})}function C_(){const e=x_();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&b_(s.key,s.fn,s.autoRepeat)}),k_("f",()=>Qd.toggle())}const w_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S_=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),E_=[S_];function A_(e,n){return E(),z("svg",w_,E_)}const $_={name:"carbon-close",render:A_};function hi(e,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const R_=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;K(se);const s=U(),o=Vv(s),l=R(()=>n.width?n.width:o.width.value),r=R(()=>n.width?n.width/Rn:o.height.value);n.width&&ps(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=R(()=>l.value/r.value),i=R(()=>n.scale&&!dn.value?n.scale:a.value<Rn?l.value/Tn:r.value*Rn/Tn),c=R(()=>({height:`${ai}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=R(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return kt(kd,i),(d,f)=>(E(),z("div",{id:"slide-container",ref_key:"root",ref:s,class:Oe(C(u))},[t("div",{id:"slide-content",style:pt(C(c))},[gt(d.$slots,"default")],4),gt(d.$slots,"controls")],2))}});const le=(e,n)=>{const s=e.__vccOpts||e;for(const[o,l]of n)s[o]=l;return s},af=le(R_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlideContainer.vue"]]),mi=we({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Yt(e,"clicks",n),o=Yt(e,"clicksElements",n),l=Yt(e,"clicksDisabled",n),r=Yt(e,"clicksOrderMap",n);o.value.length=0,kt(Sg,e.route),kt(Eg,e.context),kt(ao,s),kt(io,l),kt(zn,o),kt(aa,r)},render(){var e,n;return this.$props.is?Ge(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),T_=["innerHTML"],O_=we({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return K(se),(n,s)=>C(Tl)[e.page]?(E(),z("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Tl)[e.page]},null,8,T_)):ye("v-if",!0)}}),I_=le(O_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),P_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},H_=["onClick"],B_=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;K(se);const o=Yt(s,"modelValue",n);function l(){o.value=!1}function r(h){Ls(h),l()}function a(h){return h===St.value}const i=va.smaller("xs"),c=va.smaller("sm"),u=4*16*2,d=2*16,f=R(()=>i.value?ls.width.value-u:c.value?(ls.width.value-u-d)/2:300),F=R(()=>Math.floor((ls.width.value-u)/(f.value+d)));return ps(()=>{St.value=Ue.value,Fi.value=F.value}),(h,m)=>{const g=$_;return E(),z(Ae,null,[Nt(t("div",P_,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:pt(`grid-template-columns: repeat(auto-fit,minmax(${C(f)}px,1fr))`)},[(E(!0),z(Ae,null,Jo(C(Ke).slice(0,-1),(v,k)=>(E(),z("div",{key:v.path,class:"relative"},[t("div",{class:Oe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(k+1),"border-gray-400":!a(k+1)}]),style:pt(C(ii)),onClick:x=>r(+v.path)},[(E(),ne(af,{key:v.path,width:C(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:Q(()=>[X(C(mi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Oe(C(hi)(v)),route:v,context:"overview"},null,8,["is","class","route"]),X(I_,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,H_),t("div",{class:"absolute top-0 opacity-50",style:pt(`left: ${C(f)+5}px`)},rs(k+1),5)]))),128))],4)],512),[[So,C(o)]]),C(o)?(E(),z("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[X(g)])):ye("v-if",!0)],64)}}});const L_=le(B_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),M_="/react-shared-ppt/assets/logo-b72bde5d.png",j_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},D_=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;K(se);const o=Yt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(E(),ne(jp,null,[C(o)?(E(),z("div",j_,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),t("div",{class:Oe(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[gt(r.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),N_=le(D_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Modal.vue"]]),V_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},J_=["innerHTML"],U_=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:M_,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),p("dev ")])])],-1),q_=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;K(se);const o=Yt(s,"modelValue",n),l=R(()=>typeof Se.info=="string");return(r,a)=>(E(),ne(N_,{modelValue:C(o),"onUpdate:modelValue":a[0]||(a[0]=i=>$e(o)?o.value=i:null),class:"px-6 py-4"},{default:Q(()=>[t("div",V_,[C(l)?(E(),z("div",{key:0,class:"mb-4",innerHTML:C(Se).info},null,8,J_)):ye("v-if",!0),U_])]),_:1},8,["modelValue"]))}});const X_=le(q_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/InfoDialog.vue"]]),W_=["disabled","onKeydown"],z_=we({__name:"Goto",setup(e){K(se);const n=U(),s=U(""),o=R(()=>{if(s.value.startsWith("/"))return!!Ke.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Cf.value}});function l(){o.value&&(s.value.startsWith("/")?Ls(s.value.substring(1)):Ls(+s.value)),r()}function r(){Cs.value=!1}return me(Cs,async a=>{var i,c;a?(await tt(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),me(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(E(),z("div",{id:"slidev-goto-dialog",class:Oe(["fixed right-5 bg-main transform transition-all",C(Cs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Nt(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!C(Cs),class:Oe(["outline-none bg-transparent",{"text-red-400":!C(o)&&s.value}]),placeholder:"Goto...",onKeydown:[_c(l,["enter"]),_c(r,["escape"])],onBlur:r},null,42,W_),[[wy,s.value]])],2))}}),K_=le(z_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Goto.vue"]]),Y_=we({__name:"Controls",setup(e){K(se);const n=Gt(),s=Gt();return(o,l)=>(E(),z(Ae,null,[X(L_,{modelValue:C(it),"onUpdate:modelValue":l[0]||(l[0]=r=>$e(it)?it.value=r:null)},null,8,["modelValue"]),X(K_),C(n)?(E(),ne(C(n),{key:0})):ye("v-if",!0),C(s)?(E(),ne(C(s),{key:1,modelValue:C(Cr),"onUpdate:modelValue":l[1]||(l[1]=r=>$e(Cr)?Cr.value=r:null)},null,8,["modelValue"])):ye("v-if",!0),C(Se).info?(E(),ne(X_,{key:2,modelValue:C(po),"onUpdate:modelValue":l[2]||(l[2]=r=>$e(po)?po.value=r:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),Z_=le(Y_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Controls.vue"]]),G_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q_=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),e0=[Q_];function t0(e,n){return E(),z("svg",G_,e0)}const n0={name:"carbon-settings-adjust",render:t0},s0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o0=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),l0=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),r0=[o0,l0];function a0(e,n){return E(),z("svg",s0,r0)}const i0={name:"carbon-information",render:a0},c0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),p0=[u0];function d0(e,n){return E(),z("svg",c0,p0)}const f0={name:"carbon-download",render:d0},F0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),m0=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),y0=[h0,m0];function g0(e,n){return E(),z("svg",F0,y0)}const v0={name:"carbon-user-speaker",render:g0},_0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x0=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),b0=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),k0=[x0,b0];function C0(e,n){return E(),z("svg",_0,k0)}const w0={name:"carbon-presentation-file",render:C0},S0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},E0=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),A0=[E0];function $0(e,n){return E(),z("svg",S0,A0)}const R0={name:"ph-cursor-duotone",render:$0},T0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},O0=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),I0=[O0];function P0(e,n){return E(),z("svg",T0,I0)}const cf={name:"ph-cursor-fill",render:P0},H0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B0=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),L0=[B0];function M0(e,n){return E(),z("svg",H0,L0)}const j0={name:"carbon-sun",render:M0},D0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N0=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),V0=[N0];function J0(e,n){return E(),z("svg",D0,V0)}const U0={name:"carbon-moon",render:J0},q0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X0=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),W0=[X0];function z0(e,n){return E(),z("svg",q0,W0)}const K0={name:"carbon-apps",render:z0},Y0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z0=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),G0=[Z0];function Q0(e,n){return E(),z("svg",Y0,G0)}const e2={name:"carbon-arrow-right",render:Q0},t2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n2=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),s2=[n2];function o2(e,n){return E(),z("svg",t2,s2)}const l2={name:"carbon-arrow-left",render:o2},r2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a2=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),i2=[a2];function c2(e,n){return E(),z("svg",r2,i2)}const u2={name:"carbon-maximize",render:c2},p2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d2=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),f2=[d2];function F2(e,n){return E(),z("svg",p2,f2)}const h2={name:"carbon-minimize",render:F2},m2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y2=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),g2=[y2];function v2(e,n){return E(),z("svg",m2,g2)}const _2={name:"carbon-checkmark",render:v2},x2={class:"select-list"},b2={class:"title"},k2={class:"items"},C2=["onClick"],w2=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;K(se);const o=Yt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=_2;return E(),z("div",x2,[t("div",b2,rs(e.title),1),t("div",k2,[(E(!0),z(Ae,null,Jo(e.items,i=>(E(),z("div",{key:i.value,class:Oe(["item",{active:C(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[X(a,{class:Oe(["text-green-500",{"opacity-0":C(o)!==i.value}])},null,8,["class"]),p(" "+rs(i.display||i.value),1)],10,C2))),128))])])}}});const S2=le(w2,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SelectList.vue"]]),E2={class:"text-sm"},A2=we({__name:"Settings",setup(e){K(se);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(E(),z("div",E2,[X(S2,{modelValue:C(hl),"onUpdate:modelValue":o[0]||(o[0]=l=>$e(hl)?hl.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),$2=le(A2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Settings.vue"]]),R2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},T2=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;K(se);const o=Yt(s,"modelValue",n,{passive:!0}),l=U();return mv(l,()=>{o.value=!1}),(r,a)=>(E(),z("div",{ref_key:"el",ref:l,class:"flex relative"},[t("button",{class:Oe({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!C(o))},[gt(r.$slots,"button",{class:Oe({disabled:e.disabled})})],2),(E(),ne(jp,null,[C(o)?(E(),z("div",R2,[gt(r.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),O2=le(T2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/MenuButton.vue"]]),I2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},P2={__name:"VerticalDivider",setup(e){return K(se),(n,s)=>(E(),z("div",I2))}},Er=le(P2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),H2={render(){return[]}},B2={class:"slidev-icon-btn"},L2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},M2={class:"my-auto"},j2={class:"opacity-50"},D2=we({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;K(se);const s=va.smaller("md"),{isFullscreen:o,toggle:l}=Qd,r=R(()=>wa.value?`?password=${wa.value}`:""),a=R(()=>`/presenter/${Ue.value}${r.value}`),i=R(()=>`/${Ue.value}${r.value}`),c=U(),u=()=>{c.value&&Ts.value&&c.value.contains(Ts.value)&&Ts.value.blur()},d=R(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Gt();return Gt(),(F,h)=>{const m=h2,g=u2,v=l2,k=e2,x=K0,b=U0,w=j0,T=cf,H=R0,N=w0,$=Ps("RouterLink"),j=v0,Z=f0,ie=i0,q=n0;return E(),z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Oe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(d)]),onMouseleave:u},[C(Nn)?ye("v-if",!0):(E(),z("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...ce)=>C(l)&&C(l)(...ce))},[C(o)?(E(),ne(m,{key:0})):(E(),ne(g,{key:1}))])),t("button",{class:Oe(["slidev-icon-btn",{disabled:!C(rS)}]),onClick:h[1]||(h[1]=(...ce)=>C(In)&&C(In)(...ce))},[X(v)],2),t("button",{class:Oe(["slidev-icon-btn",{disabled:!C(lS)}]),title:"Next",onClick:h[2]||(h[2]=(...ce)=>C(On)&&C(On)(...ce))},[X(k)],2),C(Nn)?ye("v-if",!0):(E(),z("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=ce=>C(ef)())},[X(x)])),C(ka)?ye("v-if",!0):(E(),z("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=ce=>C(lf)())},[C(fi)?(E(),ne(b,{key:0})):(E(),ne(w,{key:1}))])),X(Er),C(Nn)?ye("v-if",!0):(E(),z(Ae,{key:3},[!C(Ct)&&!C(s)&&C(f)?(E(),z(Ae,{key:0},[X(C(f)),X(Er)],64)):ye("v-if",!0),C(Ct)?(E(),z("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=ce=>wr.value=!C(wr))},[C(wr)?(E(),ne(T,{key:0})):(E(),ne(H,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),ye("v-if",!0),C(Nn)?ye("v-if",!0):(E(),z(Ae,{key:5},[C(Ct)?(E(),ne($,{key:0,to:C(i),class:"slidev-icon-btn",title:"Play Mode"},{default:Q(()=>[X(N)]),_:1},8,["to"])):ye("v-if",!0),C(tS)?(E(),ne($,{key:1,to:C(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:Q(()=>[X(j)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(E(),z(Ae,{key:6},[C(Se).download?(E(),z("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...ce)=>C(Sa)&&C(Sa)(...ce))},[X(Z)])):ye("v-if",!0)],64)),!C(Ct)&&C(Se).info&&!C(Nn)?(E(),z("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=ce=>po.value=!C(po))},[X(ie)])):ye("v-if",!0),!C(Ct)&&!C(Nn)?(E(),ne(O2,{key:8},{button:Q(()=>[t("button",B2,[X(q)])]),menu:Q(()=>[X($2)]),_:1})):ye("v-if",!0),C(Nn)?ye("v-if",!0):(E(),ne(Er,{key:9})),t("div",L2,[t("div",M2,[p(rs(C(Ue))+" ",1),t("span",j2,"/ "+rs(C(Cf)),1)])]),X(C(H2))],34)],512)}}}),N2=le(D2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NavControls.vue"]]),uf={render(){return[]}},pf={render(){return[]}},V2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},J2=we({__name:"PresenterMouse",setup(e){return K(se),(n,s)=>{const o=cf;return C(_r).cursor?(E(),z("div",V2,[X(o,{class:"absolute",style:pt({left:`${C(_r).cursor.x}%`,top:`${C(_r).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),U2=le(J2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),q2=we({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){K(se),me(ct,()=>{var s,o;(s=ct.value)!=null&&s.meta&&ct.value.meta.preload!==!1&&(ct.value.meta.__preloaded=!0),(o=Ar.value)!=null&&o.meta&&Ar.value.meta.preload!==!1&&(Ar.value.meta.__preloaded=!0)},{immediate:!0}),Gt();const n=R(()=>Ke.filter(s=>{var o;return((o=s.meta)==null?void 0:o.__preloaded)||s===ct.value}));return(s,o)=>(E(),z(Ae,null,[ye(" Global Bottom "),X(C(pf)),ye(" Slides "),X(vy,We(C(cS),{id:"slideshow",tag:"div"}),{default:Q(()=>[(E(!0),z(Ae,null,Jo(C(n),l=>{var r;return Nt((E(),ne(C(mi),{key:l.path,is:l==null?void 0:l.component,clicks:l===C(ct)?C(Ot):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Oe(C(hi)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[So,l===C(ct)]])}),128))]),_:1},16),ye(" Global Top "),X(C(uf)),ye("v-if",!0),C(Ct)?ye("v-if",!0):(E(),ne(U2,{key:1}))],64))}});const X2=le(q2,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesShow.vue"]]),W2=we({__name:"PrintStyle",setup(e){K(se);function n(s,{slots:o}){if(o.default)return Ge("style",o.default())}return(s,o)=>(E(),ne(n,null,{default:Q(()=>[p(" @page { size: "+rs(C(Tn))+"px "+rs(C(ai))+"px; margin: 0px; } ",1)]),_:1}))}}),df=le(W2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintStyle.vue"]]),z2=we({__name:"Play",setup(e){K(se),C_();const n=U();function s(r){var a;ru.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?On():In())}uS(n);const o=R(()=>P1.value||ru.value);Gt();const l=Gt();return(r,a)=>(E(),z(Ae,null,[C(dn)?(E(),ne(df,{key:0})):ye("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:pt(C(ii))},[X(af,{class:"w-full h-full",style:pt({background:"var(--slidev-slide-container-background, black)"}),width:C(dn)?C(ls).width.value:void 0,scale:C(hl),onPointerdown:s},{default:Q(()=>[X(X2,{context:"slide"})]),controls:Q(()=>[t("div",{class:Oe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(o)?"opacity-100 right-0":"opacity-0 p-2",C(Ro)?"pointer-events-none":""]])},[X(N2,{class:"m-auto",persist:C(o)},null,8,["persist"])],2),ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),X(Z_)],64))}}),K2=le(z2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ff(e){return typeof e>"u"||e===null}function Y2(e){return typeof e=="object"&&e!==null}function Z2(e){return Array.isArray(e)?e:ff(e)?[]:[e]}function G2(e,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=n[l];return e}function Q2(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function ex(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var tx=ff,nx=Y2,sx=Z2,ox=Q2,lx=ex,rx=G2,yi={isNothing:tx,isObject:nx,toArray:sx,repeat:ox,isNegativeZero:lx,extend:rx};function Ff(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Oo(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Ff(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(n){return this.name+": "+Ff(this,n)};var Kn=Oo,ax=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ix=["scalar","sequence","mapping"];function cx(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function ux(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(ax.indexOf(s)===-1)throw new Kn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=cx(n.styleAliases||null),ix.indexOf(this.kind)===-1)throw new Kn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var lt=ux;function yu(e,n){var s=[];return e[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function px(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function Ca(e){return this.extend(e)}Ca.prototype.extend=function(n){var s=[],o=[];if(n instanceof lt)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new Kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof lt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof lt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Ca.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=yu(l,"implicit"),l.compiledExplicit=yu(l,"explicit"),l.compiledTypeMap=px(l.compiledImplicit,l.compiledExplicit),l};var dx=Ca,fx=new lt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Fx=new lt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),hx=new lt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),mx=new dx({explicit:[fx,Fx,hx]});function yx(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function gx(){return null}function vx(e){return e===null}var _x=new lt("tag:yaml.org,2002:null",{kind:"scalar",resolve:yx,construct:gx,predicate:vx,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function xx(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function bx(e){return e==="true"||e==="True"||e==="TRUE"}function kx(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Cx=new lt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:xx,construct:bx,predicate:kx,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function wx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Sx(e){return 48<=e&&e<=55}function Ex(e){return 48<=e&&e<=57}function Ax(e){if(e===null)return!1;var n=e.length,s=0,o=!1,l;if(!n)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===n)return!0;if(l=e[++s],l==="b"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!wx(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!Sx(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=e[s],l!=="_"){if(!Ex(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function $x(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function Rx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!yi.isNegativeZero(e)}var Tx=new lt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ax,construct:$x,predicate:Rx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ox=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ix(e){return!(e===null||!Ox.test(e)||e[e.length-1]==="_")}function Px(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var Hx=/^[-+]?[0-9]+e/;function Bx(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(yi.isNegativeZero(e))return"-0.0";return s=e.toString(10),Hx.test(s)?s.replace("e",".e"):s}function Lx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||yi.isNegativeZero(e))}var Mx=new lt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ix,construct:Px,predicate:Lx,represent:Bx,defaultStyle:"lowercase"}),jx=mx.extend({implicit:[_x,Cx,Tx,Mx]}),Dx=jx,hf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Nx(e){return e===null?!1:hf.exec(e)!==null||mf.exec(e)!==null}function Vx(e){var n,s,o,l,r,a,i,c=0,u=null,d,f,F;if(n=hf.exec(e),n===null&&(n=mf.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),F=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&F.setTime(F.getTime()-u),F}function Jx(e){return e.toISOString()}var Ux=new lt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Nx,construct:Vx,instanceOf:Date,represent:Jx});function qx(e){return e==="<<"||e===null}var Xx=new lt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:qx}),gi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Wx(e){if(e===null)return!1;var n,s,o=0,l=e.length,r=gi;for(s=0;s<l;s++)if(n=r.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function zx(e){var n,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=gi,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function Kx(e){var n="",s=0,o,l,r=e.length,a=gi;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function Yx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Zx=new lt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Wx,construct:zx,predicate:Yx,represent:Kx}),Gx=Object.prototype.hasOwnProperty,Qx=Object.prototype.toString;function eb(e){if(e===null)return!0;var n=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,Qx.call(l)!=="[object Object]")return!1;for(r in l)if(Gx.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function tb(e){return e!==null?e:[]}var nb=new lt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:eb,construct:tb}),sb=Object.prototype.toString;function ob(e){if(e===null)return!0;var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],sb.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function lb(e){if(e===null)return[];var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var rb=new lt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ob,construct:lb}),ab=Object.prototype.hasOwnProperty;function ib(e){if(e===null)return!0;var n,s=e;for(n in s)if(ab.call(s,n)&&s[n]!==null)return!1;return!0}function cb(e){return e!==null?e:{}}var ub=new lt("tag:yaml.org,2002:set",{kind:"mapping",resolve:ib,construct:cb});Dx.extend({implicit:[Ux,Xx],explicit:[Zx,nb,rb,ub]});function gu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var pb=new Array(256),db=new Array(256);for(var vs=0;vs<256;vs++)pb[vs]=gu(vs)?1:0,db[vs]=gu(vs);function fb(e){return Array.from(new Set(e))}function vu(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function yf(e,n){if(!n||n==="all"||n==="*")return vu(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...vu(+l,r?+r+1:e+1))}return fb(s).filter(o=>o<=e).sort((o,l)=>o-l)}function gf(e){const n=R(()=>e.value.path),s=R(()=>Ke.length-1),o=R(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=R(()=>nr(o.value)),r=R(()=>Ke.find(F=>F.path===`${o.value}`)),a=R(()=>{var F,h,m;return(m=(h=(F=r.value)==null?void 0:F.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=R(()=>{var F,h;return((h=(F=r.value)==null?void 0:F.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),c=R(()=>Ke.find(F=>F.path===`${Math.min(Ke.length,o.value+1)}`)),u=R(()=>Ke.filter(F=>{var h,m;return(m=(h=F.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((F,h)=>(vi(F,h),F),[])),d=R(()=>_i(u.value,r.value)),f=R(()=>xi(d.value));return{route:e,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:Sa,next:On,nextSlide:Io,openInEditor:pS,prev:In,prevSlide:Po}}function vf(e,n,s){const o=U(0);tt(()=>{mt.afterEach(async()=>{await tt(),o.value+=1})});const l=R(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=R(()=>{var c,u;return+(((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=R(()=>s.value<Ke.length-1||e.value<r.value),i=R(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const Fb=["id"],hb=we({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=Yt(s,"clicksElements",n),l=R(()=>({height:`${ai}px`,width:`${Tn}px`}));Gt();const r=R(()=>s.clicks),a=vf(r,s.nav.currentRoute,s.nav.currentPage),i=R(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return kt(se,Ne({nav:{...s.nav,...a},configs:Se,themeConfigs:R(()=>Se.themeConfig)})),(c,u)=>{var d;return E(),z("div",{id:C(i),class:"print-slide-container",style:pt(C(l))},[X(C(pf)),X(C(mi),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":C(o),"onUpdate:clicksElements":u[0]||(u[0]=f=>$e(o)?o.value=f:null),clicks:C(r),"clicks-disabled":!1,class:Oe(C(hi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),ye("v-if",!0),X(C(uf))],12,Fb)}}}),_u=le(hb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),mb=we({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;K(se);const s=U(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=R(()=>n.route),l=gf(o);return(a,i)=>(E(),z(Ae,null,[X(_u,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:C(l),route:C(o)},null,8,["clicks-elements","nav","route"]),C(fo)?ye("v-if",!0):(E(!0),z(Ae,{key:0},Jo(s.value.length,c=>(E(),ne(_u,{key:c,clicks:c,nav:C(l),route:C(o)},null,8,["clicks","nav","route"]))),128))],64))}}),yb=le(mb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlide.vue"]]),gb={id:"print-content"},vb=we({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;K(se);const s=R(()=>n.width),o=R(()=>n.width/Rn),l=R(()=>s.value/o.value),r=R(()=>l.value<Rn?s.value/Tn:o.value*Rn/Tn);let a=Ke.slice(0,-1);Pt.value.query.range&&(a=yf(a.length,Pt.value.query.range).map(u=>a[u-1]));const i=R(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return kt(kd,r),(c,u)=>(E(),z("div",{id:"print-container",class:Oe(C(i))},[t("div",gb,[(E(!0),z(Ae,null,Jo(C(a),d=>(E(),ne(yb,{key:d.path,route:d},null,8,["route"]))),128))]),gt(c.$slots,"controls")],2))}});const _b=le(vb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintContainer.vue"]]),xb=we({__name:"Print",setup(e){return K(se),ps(()=>{dn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(E(),z(Ae,null,[C(dn)?(E(),ne(df,{key:0})):ye("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:pt(C(ii))},[X(_b,{class:"w-full h-full",style:pt({background:"var(--slidev-slide-container-background, black)"}),width:C(ls).width.value},null,8,["style","width"])],4)],64))}});const bb=le(xb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Print.vue"]]);const kb={class:"slidev-layout end"},Cb={__name:"end",setup(e){return K(se),(n,s)=>(E(),z("div",kb," END "))}},wb=le(Cb,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/end.vue"]]),Sb={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Eb=t("path",{fill:"currentColor",d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"},null,-1),Ab=[Eb];function $b(e,n){return E(),z("svg",Sb,Ab)}const Rb={name:"mdi-react",render:$b},Tb={class:"slidev-layout cover"},Ob={class:"my-auto w-full"},Ib={__name:"cover",setup(e){return K(se),(n,s)=>(E(),z("div",Tb,[t("div",Ob,[gt(n.$slots,"default")])]))}},Pb=le(Ib,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/slidev-theme-dracula/layouts/cover.vue"]]);const _f=e=>(Bh("data-v-42c5a5a3"),e=e(),Lh(),e),Hb=_f(()=>t("h1",null,[t("span",{class:"font-semibold text-[48px]"},[p("Welcome to "),t("span",{class:"font-bold text-gradient-red text-[72px]"},"React")])],-1)),Bb=_f(()=>t("p",null,[p("Shared by "),t("a",{href:"mailto:siyuan.wang@capgemini.com",target:"_blank",rel:"noopener"},"siyuan.wang")],-1)),Lb={__name:"1",setup(e){const n={css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"};return K(se),(s,o)=>{const l=Rb;return E(),ne(Pb,De(Me(n)),{default:Q(()=>[X(l,{class:"text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6"}),Hb,Bb]),_:1},16)}}},Mb=le(Lb,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),jb={class:"slidev-layout default"},Db={__name:"default",setup(e){return K(se),(n,s)=>(E(),z("div",jb,[gt(n.$slots,"default")]))}},qe=le(Db,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/default.vue"]]),Nb=t("h1",null,"Schedule",-1),Vb=t("p",null,"本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：",-1),Jb=t("div",{class:"mt-6"},null,-1),Ub=t("h4",null,[t("strong",null,"基础"),p("和"),t("strong",null,"进阶"),p("：")],-1),qb=t("ul",null,[t("li",null,"基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；"),t("li",null,"进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；")],-1),Xb=t("div",{class:"mt-5"},null,-1),Wb=t("h4",null,"“副”作用：",-1),zb=t("ul",null,[t("li",null,[p("适当普及 ES6+、Typescript 以及"),t("span",{class:"text-highlight"},"函数式编程"),p("；")]),t("li",null,"在每次课程的最后布置作业；"),t("li",null,"培训的最后，提供实战类的项目；")],-1),Kb=t("div",{class:"mt-5"},null,-1),Yb=t("h4",null,"真正的计划",-1),Zb=t("p",null,"课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；",-1),Gb={__name:"2",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./schedule.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[Nb,Vb,Jb,Ub,qb,Xb,Wb,zb,Kb,Yb,Zb]),_:1},16))}},Qb=le(Gb,[["__file","/@slidev/slides/2.md"]]),ek={class:"slidev-layout center h-full grid place-content-center"},tk={class:"my-auto"},nk={__name:"center",setup(e){return K(se),(n,s)=>(E(),z("div",ek,[t("div",tk,[gt(n.$slots,"default")])]))}},xf=le(nk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/center.vue"]]),sk=t("h1",null,[t("span",{class:"text-[60px]"},"Lesson 1")],-1),ok={__name:"3",setup(e){const n={layout:"center",srcSequence:"./pages/lesson_1/index.md"};return K(se),(s,o)=>(E(),ne(xf,De(Me(n)),{default:Q(()=>[sk]),_:1},16))}},lk=le(ok,[["__file","/@slidev/slides/3.md"]]),rk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ak=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),ik=[ak];function ck(e,n){return E(),z("svg",rk,ik)}const uk={name:"ph-clipboard",render:ck},pk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dk=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),fk=[dk];function Fk(e,n){return E(),z("svg",pk,fk)}const hk={name:"ph-check-circle",render:Fk},mk=["title"],yk=we({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;K(se);const s=K(ao),o=K(zn),l=K(io);function r(f=5){const F=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let g=0;g<f;g++)F.push(h.charAt(Math.floor(Math.random()*m)));return F.join("")}const a=U(),i=At();ds(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,F=R(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),h=R(()=>n.ranges[F.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),g=Og(n.ranges.length-1).map(v=>m+v);o!=null&&o.value&&(o.value.push(...g),Zl(()=>g.forEach(v=>ia(o.value,v)),i))}ps(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const v of g){const k=Array.from(v.querySelectorAll(".line")),x=yf(k.length,h.value);if(k.forEach((b,w)=>{const T=x.includes(w+1);b.classList.toggle(Xn,!0),b.classList.toggle("highlighted",T),b.classList.toggle("dishonored",!T)}),n.maxHeight){const b=v.querySelector(".line.highlighted");b&&b.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Sv();function d(){var F,h;const f=(h=(F=a.value)==null?void 0:F.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,F)=>{const h=hk,m=uk;return E(),z("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:pt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[gt(f.$slots,"default"),C(Se).codeCopy?(E(),z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(c)?"Copied":"Copy",onClick:F[0]||(F[0]=g=>d())},[C(c)?(E(),ne(h,{key:0,class:"p-2 w-8 h-8"})):(E(),ne(m,{key:1,class:"p-2 w-8 h-8"}))],8,mk)):ye("v-if",!0)],4)}}}),Ut=le(yk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),xu=["ul","ol"],gk=we({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=Sl("click"),n=Sl("after"),s=(u,d,f)=>Nt(u,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Tg(o);const l=(u,d=1)=>{let f=0;return[u.map(h=>{if(!Qt(h))return h;if(xu.includes(h.type)&&Array.isArray(h.children)){const[m,g]=a(h.children,d+1);return f+=g,Ge(h,{},[m])}return Ge(h)}),f]};let r=0;const a=(u,d=1)=>{let f=0;return[u.map(h=>{if(!Qt(h))return h;const m=f%this.every===0?e:n;let g,v=0;if(d<this.depth&&Array.isArray(h.children)){const[x,b]=l(h.children,d);g=Ge(h,{},[x]),v=b,f+=b+1}else g=Ge(h),f++;const k=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-v).toString();return r++,s(g,m,typeof k=="string"&&!k.startsWith("-")?`+${k}`:k)}),f]};return o.length===1&&xu.includes(o[0].type)&&Array.isArray(o[0].children)?Ge(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),vk="/react-shared-ppt/assets/nextjs-3fe22fdd.png",_k="/react-shared-ppt/assets/remix-6950a405.png",xk="/react-shared-ppt/assets/umijs-ecd129e6.png",bk={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},kk=we({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return K(se),(s,o)=>(E(),z("div",bk,[t("div",{class:Oe(["col-left",n.class])},[gt(s.$slots,"default")],2),t("div",{class:Oe(["col-right",n.class])},[gt(s.$slots,"right")],2)]))}}),Ck=le(kk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/two-cols.vue"]]),wk=t("h1",null,"What is React?",-1),Sk=t("div",{class:"flex items-center justify-center mr-4 py-4 bg-black rounded"},[t("p",null,[t("span",{class:"text-gradient-red text-[36px]"},"f(state) = UI")])],-1),Ek={class:"w-100 mt-5"},Ak=t("ul",null,[t("li",null,"React 是一个用于渲染用户界面（UI）的 JavaScript 工具库"),t("li",null,"用组件创建用户界面"),t("li",null,"用代码和标签编写组件"),t("li",null,"在任何地方添加交互"),t("li",null,"渐进式 JavaScript 框架"),t("li",null,"NextJs / Remix / UmiJs")],-1),$k=t("p",null,[p("Read more about "),t("a",{href:"https://react.dev/",target:"_blank",rel:"noopener"},"React")],-1),Rk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Video"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<{ video"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}}," }> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  video")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  const "),t("span",{style:{color:"#50FA7B"}},"onPlay"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," { console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Play video."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"); }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{onPlay}"),t("span",{style:{color:"#FF79C6"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{video} "),t("span",{style:{color:"#FF79C6"}},"/>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{video} "),t("span",{style:{color:"#FF79C6"}},"/>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Video"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<{ video"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}}," }> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  video")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  const "),t("span",{style:{color:"#50FA7B"}},"onPlay"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," { console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Play video."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"); }")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{onPlay}"),t("span",{style:{color:"#FF79C6"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{video} "),t("span",{style:{color:"#FF79C6"}},"/>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{video} "),t("span",{style:{color:"#FF79C6"}},"/>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Tk=t("img",{src:vk,class:"relative z-[2] w-full -mt-40"},null,-1),Ok=t("img",{src:_k,class:"relative w-full z-[3] -mt-16"},null,-1),Ik=t("img",{src:xk,class:"relative w-full z-[3] -mt-16"},null,-1),Pk={__name:"4",setup(e){const n={clicks:9,layout:"two-cols",transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"};return K(se),(s,o)=>{const l=gk,r=Ut,a=Sl("click");return E(),ne(Ck,De(Me(n)),{right:Q(()=>[Nt((E(),z("div",null,[X(r,We({at:2},{ranges:["10,11","3-9,12-14","6,9","all"]}),{default:Q(()=>[Rk]),_:1},16)])),[[a,2]]),X(l,{at:"6"},{default:Q(()=>[Tk,Ok,Ik]),_:1})]),default:Q(()=>[wk,Sk,t("div",Ek,[X(l,null,{default:Q(()=>[Ak]),_:1})]),$k]),_:1},16)}}},Hk=le(Pk,[["__file","/@slidev/slides/4.md"]]),Bk=t("h1",null,"What is JSX?",-1),Lk=t("p",null,"给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？",-1),Mk=t("iframe",{src:"https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),jk={__name:"5",setup(e){const n={srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[Bk,Lk,ye(" 对比：不用 JSX 怎么处理，用 JSX 怎么写 "),Mk]),_:1},16))}},Dk=le(jk,[["__file","/@slidev/slides/5.md"]]),Nk=t("h1",null,"JSX in React",-1),Vk=t("p",null,'JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。',-1),Jk=t("h3",null,"一个 🌰 (例子)",-1),Uk=t("div",{class:"h-2"},null,-1),qk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},"({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),t("span",{style:{color:"#F8F8F2"}}," }) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"btn__alert"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{{ width"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"20px"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," }} "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"alert"),t("span",{style:{color:"#F8F8F2"}},"(message)}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {children}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Toolbar"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"img"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},"({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),t("span",{style:{color:"#F8F8F2"}}," }) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"btn__alert"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{{ width"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"20px"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," }} "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"alert"),t("span",{style:{color:"#F8F8F2"}},"(message)}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {children}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Toolbar"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"img"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"div"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Xk={__name:"6",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[Nk,Vk,Jk,Uk,X(l,We({},{ranges:["all","1-7","9-18","2,6,10,17","3,5,11-12,16","13,15","4,14"]}),{default:Q(()=>[qk]),_:1},16)]),_:1},16)}}},Wk=le(Xk,[["__file","/@slidev/slides/6.md"]]),zk=t("h1",null,"React JSX vs Vue Template",-1),Kk=t("p",null,[t("span",{class:"text-gray-400"},"下表为 React JSX 和 Vue Template 的异同。")],-1),Yk=t("thead",null,[t("tr",null,[t("th",null,"对比"),t("th",null,"React"),t("th",null,"Vue")])],-1),Zk=t("tr",null,[t("td",null,"组件调用"),t("td",null,"大驼峰"),t("td",null,"大驼峰、小驼峰、短横线均可")],-1),Gk=t("tr",null,[t("td",null,"原生标签"),t("td",null,[t("strong",null,"必须"),p("闭合（包括自闭合）")]),t("td",null,"无区别")],-1),Qk=t("tr",null,[t("td",null,"作用域"),t("td",null,"全局、函数和块级作用域"),t("td",null,"绑定到 Vue 组件实例、全局 Context 和 Slot context")],-1),eC=t("tr",null,[t("td",null,"变量、表达式"),t("td",null,[p("用 "),t("code",null,"{}"),p(" 表示")]),t("td",null,[p("用 "),t("code",null,"{{}}"),p(" 表示")])],-1),tC=t("tr",null,[t("td",null,"属性"),t("td",null,[p("小驼峰，"),t("em",null,"class 改为 className")]),t("td",null,"小驼峰、短横线命名均可")],-1),nC=t("tr",null,[t("td",null,"动态属性"),t("td",null,[p("参数后加 "),t("code",null,"{}")]),t("td",null,[p("参数前加 "),t("code",null,":")])],-1),sC=t("tr",null,[t("td",null,"事件"),t("td",null,[p("事件后加 "),t("code",null,"{}"),p("，值为函数")]),t("td",null,[p("事件前加 "),t("code",null,"v-on"),p(" 或 "),t("code",null,"@")])],-1),oC=t("td",null,[t("code",null,"v-for"),p(" / "),t("code",null,"v-if"),p(" / "),t("code",null,"v-show"),p(" …")],-1),lC=we({__name:"7",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};K(se);const s=U(!1),o=()=>s.value=!s.value;return(l,r)=>{const a=Ps("uim-rocket");return E(),ne(qe,De(Me(n)),{default:Q(()=>[zk,Kk,t("table",null,[Yk,t("tbody",null,[Zk,Gk,Qk,eC,tC,nC,sC,t("tr",null,[t("td",null,[t("span",{class:Oe({"text-highlight-2 ":s.value})},"动态渲染",2)]),t("td",null,[t("span",{class:Oe({"text-highlight-2 ":s.value})},"一切皆为 JavaScript ",2)]),oC])])]),t("p",null,[t("span",{class:Oe(["absolute left-[20px] bottom-[42px]",{"text-highlight-2 ":s.value}]),onClick:o},[X(a)],2)]),ye(`
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
`)]),_:1},16)}}}),rC=le(lC,[["__file","/@slidev/slides/7.md"]]),aC=t("h1",null,"Heros with JSX",-1),iC=t("p",null,"接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。",-1),cC=t("iframe",{src:"https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),uC={__name:"8",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[aC,iC,cC]),_:1},16))}},pC=le(uC,[["__file","/@slidev/slides/8.md"]]),dC=t("h1",null,"Components",-1),fC=t("p",null,[p("和 Vue 类似，React 也是以"),t("strong",null,"组件"),p("的形式构建页面。")],-1),FC={class:"flex gap-x-4"},hC={class:"w-1/2"},mC=t("h3",null,"Class Component",-1),yC=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"class"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"extends"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  inputRef "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"createRef"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"handleClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".inputRef.current."),t("span",{style:{color:"#50FA7B"}},"focus"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"render"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        <"),t("span",{style:{color:"#FF79C6"}},"input"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{"),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{"),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"class"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"extends"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  inputRef "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"createRef"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"handleClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".inputRef.current."),t("span",{style:{color:"#50FA7B"}},"focus"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"render"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        <"),t("span",{style:{color:"#FF79C6"}},"input"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{"),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{"),t("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),t("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),gC=t("h3",null,"Function Component",-1),vC=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," inputRef "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useRef"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," handleClick "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," inputRef.current."),t("span",{style:{color:"#50FA7B"}},"focus"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"input"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"AlertButton"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," inputRef "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useRef"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," handleClick "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," inputRef.current."),t("span",{style:{color:"#50FA7B"}},"focus"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"input"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      </"),t("span",{style:{color:"#FF79C6"}},"button"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),_C={__name:"9",setup(e){const n={clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md"},s=K(se);return(o,l)=>{const r=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[dC,fC,t("div",FC,[Nt(t("div",hC,[mC,X(r,We({},{ranges:["all","10,15","all","0"]}),{default:Q(()=>[yC]),_:1},16)],512),[[So,C(s).nav.clicks!==3]]),t("div",{class:Oe({"w-full":C(s).nav.clicks===3,"w-1/2":C(s).nav.clicks!==3})},[gC,X(r,We({at:0},{ranges:["all","8,13","0","all"]}),{default:Q(()=>[vC]),_:1},16)],2)])]),_:1},16)}}},xC=le(_C,[["__file","/@slidev/slides/9.md"]]),bC=t("h1",null,"Review components",-1),kC=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Empty"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"No Heros."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Loading"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),t("span",{style:{color:"#F8F8F2"}},"."),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"renderHero"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {loading "),t("span",{style:{color:"#FF79C6"}},"?"),t("span",{style:{color:"#F8F8F2"}}," <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),t("span",{style:{color:"#F8F8F2"}}," /> "),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," heros.length "),t("span",{style:{color:"#FF79C6"}},"?"),t("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        heros."),t("span",{style:{color:"#50FA7B"}},"map"),t("span",{style:{color:"#F8F8F2"}},"(renderHero) "),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Empty"),t("span",{style:{color:"#F8F8F2"}},"()}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Empty"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"No Heros."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Loading"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),t("span",{style:{color:"#F8F8F2"}},"."),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"renderHero"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {loading "),t("span",{style:{color:"#FF79C6"}},"?"),t("span",{style:{color:"#F8F8F2"}}," <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),t("span",{style:{color:"#F8F8F2"}}," /> "),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," heros.length "),t("span",{style:{color:"#FF79C6"}},"?"),t("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        heros."),t("span",{style:{color:"#50FA7B"}},"map"),t("span",{style:{color:"#F8F8F2"}},"(renderHero) "),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Empty"),t("span",{style:{color:"#F8F8F2"}},"()}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),CC={__name:"10",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[bC,X(l,We({},{ranges:["all","3,19","4,18","9-14"]}),{default:Q(()=>[kC]),_:1},16)]),_:1},16)}}},wC=le(CC,[["__file","/@slidev/slides/10.md"]]),SC="/react-shared-ppt/assets/old-lifecycle-fb958309.webp",EC="/react-shared-ppt/assets/new-lifecycle-469c3870.webp",AC=t("h1",null,"Lifecycle",-1),$C=t("p",null,[p("React 的"),t("strong",null,"类组件"),p("有生命周期，而"),t("strong",null,"函数式组件"),p("的生命周期是 "),t("em",null,"hooks"),p("。")],-1),RC=t("p",null,[p("版本 "),t("code",null,"v16.3"),p(" 是 React 生命周期的分界线；")],-1),TC={class:"flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]"},OC={class:"w-1/2 text-center"},IC=t("h3",null,"旧生命周期",-1),PC=t("img",{src:SC,class:"mt-4"},null,-1),HC=[IC,PC],BC={class:"relative w-15 flex justify-center"},LC=t("div",{class:"absolute top-[8px]"},"v16.3",-1),MC=t("div",{class:"absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"},null,-1),jC=[LC,MC],DC={class:"w-1/2 text-center"},NC=t("h3",null,"新生命周期",-1),VC=t("img",{src:EC,class:"mt-4"},null,-1),JC=[NC,VC],UC=t("p",null,[t("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank"},[t("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank",rel:"noopener"},"https://juejin.cn/post/6914112105964634119")])],-1),qC={__name:"11",setup(e){const n={clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"};return K(se),(s,o)=>{const l=Sl("click");return E(),ne(qe,De(Me(n)),{default:Q(()=>[AC,$C,RC,t("div",TC,[Nt((E(),z("div",OC,HC)),[[l,2]]),Nt((E(),z("div",BC,jC)),[[l,1]]),Nt((E(),z("div",DC,JC)),[[l,2]])]),UC]),_:1},16)}}},XC=le(qC,[["__file","/@slidev/slides/11.md"]]),WC=["href","innerHTML"],zC=["href"],KC=we({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return K(se),(n,s)=>{const o=Ps("RouterLink");return!C(dn)&&e.title?(E(),ne(o,{key:0,to:String(e.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!C(dn)&&!e.title?(E(),ne(o,{key:1,to:String(e.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:Q(()=>[gt(n.$slots,"default")]),_:3},8,["to"])):C(dn)&&e.title?(E(),z("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,WC)):(E(),z("a",{key:3,href:`#${e.to}`},[gt(n.$slots,"default")],8,zC))}}}),YC=le(KC,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Link.vue"]]),ZC=t("h1",null,"Hooks",-1),GC=t("p",null,"也称钩子，在 React 中 Hooks 分为两类：",-1),QC=t("ul",null,[t("li",null,"内置 Built-in hooks；"),t("li",null,"自定义 Custom hooks；")],-1),ew=t("p",null,[p("React 提供了很多内置 Hooks，主要分为"),t("strong",null,"六种"),p("：")],-1),tw=t("code",null,"useState",-1),nw=t("code",null,"useReducer",-1),sw=t("code",null,"useContext",-1),ow=t("code",null,"useRef",-1),lw=t("code",null,"useImperativeHandle",-1),rw=t("code",null,"useEffect",-1),aw=t("code",null,"useLayoutEffect",-1),iw=t("code",null,"useMemo",-1),cw=t("code",null,"useCallback",-1),uw=t("code",null,"useTransition",-1),pw=t("code",null,"useDeferredValue",-1),dw=t("code",null,"useId",-1),fw=t("p",null,"自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。",-1),Fw={__name:"12",setup(e){const n={srcSequence:"./pages/lesson_1/index.md,./hooks.md"};return K(se),(s,o)=>{const l=YC;return E(),ne(qe,De(Me(n)),{default:Q(()=>[ZC,GC,QC,ew,t("ul",null,[t("li",null,[p("(2) "),X(l,{to:"17"},{default:Q(()=>[p("状态 Hooks")]),_:1}),p(" - "),tw,p(" / "),nw,p("；")]),t("li",null,[p("(1) "),X(l,{to:"18"},{default:Q(()=>[p("上下文 Hooks")]),_:1}),p(" - "),sw,p("；")]),t("li",null,[p("(2) "),X(l,{to:"19"},{default:Q(()=>[p("引用 Hooks")]),_:1}),p(" - "),ow,p(" / "),lw,p("；")]),t("li",null,[p("(2) "),X(l,{to:"20"},{default:Q(()=>[p("副作用 Hooks")]),_:1}),p(" - "),rw,p(" / "),aw,p("；")]),t("li",null,[p("(4) "),X(l,{to:"21"},{default:Q(()=>[p("性能 Hooks")]),_:1}),p(" - "),iw,p(" / "),cw,p(" / "),uw,p(" / "),pw,p("；")]),t("li",null,[p("(3) "),X(l,{to:"22"},{default:Q(()=>[p("其他 Hooks")]),_:1}),p(" - "),dw,p("；")])]),fw]),_:1},16)}}},hw=le(Fw,[["__file","/@slidev/slides/12.md"]]),mw=t("h1",null,"Ant Design",-1),yw=t("p",null,[t("a",{href:"https://ant.design/docs/spec/introduce-cn",target:"_blank",rel:"noopener"},"https://ant.design/docs/spec/introduce-cn")],-1),gw=t("div",{class:"mt-[36px]"},null,-1),vw=t("h1",null,"Material UI",-1),_w=t("p",null,[t("a",{href:"https://mui.com/material-ui/getting-started/installation/",target:"_blank",rel:"noopener"},"https://mui.com/material-ui/getting-started/installation/")],-1),xw=t("div",{class:"mt-[36px]"},null,-1),bw=t("h1",null,"Fluent UI",-1),kw=t("p",null,[t("a",{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web",target:"_blank",rel:"noopener"},"https://developer.microsoft.com/en-us/fluentui#/controls/web")],-1),Cw={__name:"13",setup(e){const n={srcSequence:"./pages/lesson_1/index.md,./ant-design.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[mw,yw,gw,vw,_w,xw,bw,kw]),_:1},16))}},ww=le(Cw,[["__file","/@slidev/slides/13.md"]]),Sw=t("h1",null,"UmiJS",-1),Ew=t("p",null,[t("a",{href:"https://umijs.org/docs/introduce/introduce",target:"_blank",rel:"noopener"},"https://umijs.org/docs/introduce/introduce")],-1),Aw=t("div",{class:"mt-[36px]"},null,-1),$w=t("h1",null,"NextJs",-1),Rw=t("p",null,[t("a",{href:"https://www.nextjs.cn/docs/getting-started",target:"_blank",rel:"noopener"},"https://www.nextjs.cn/docs/getting-started")],-1),Tw=t("div",{class:"mt-[36px]"},null,-1),Ow=t("h1",null,"Create React App",-1),Iw=t("p",null,[t("a",{href:"https://create-react-app.dev/docs/getting-started",target:"_blank",rel:"noopener"},"https://create-react-app.dev/docs/getting-started")],-1),Pw={__name:"14",setup(e){const n={srcSequence:"./pages/lesson_1/index.md,./umijs.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[Sw,Ew,Aw,$w,Rw,Tw,Ow,Iw]),_:1},16))}},Hw=le(Pw,[["__file","/@slidev/slides/14.md"]]),Bw=t("h1",null,"Thinking",-1),Lw=t("p",null,"为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？",-1),Mw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  <"),t("span",{style:{color:"#FF79C6"}},"h4"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"onClick"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),t("span",{style:{color:"#FF79C6"}},"h4"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ts"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  title"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," props "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"defineProps"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},">(["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"title"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"])")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," emits "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"defineEmits"),t("span",{style:{color:"#F8F8F2"}},"(["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"click"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"])")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"onClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"emits"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"click"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", props.title)")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}},">")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  <"),t("span",{style:{color:"#FF79C6"}},"h4"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"onClick"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),t("span",{style:{color:"#FF79C6"}},"h4"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"ts"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  title"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," props "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"defineProps"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},">(["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"title"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"])")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," emits "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"defineEmits"),t("span",{style:{color:"#F8F8F2"}},"(["),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"click"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"])")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"onClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"emits"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"click"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},", props.title)")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}},">")])])])],-1),jw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"onClick"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"onClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(title)")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}},">")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"onClick"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"template"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"onClick"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(title)")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"</"),t("span",{style:{color:"#FF79C6"}},"script"),t("span",{style:{color:"#F8F8F2"}},">")])])])],-1),Dw={__name:"15",setup(e){const n={transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./warm-up.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[Bw,Lw,X(l,We({},{ranges:["3"]}),{default:Q(()=>[Mw]),_:1},16),X(l,We({},{ranges:["2"]}),{default:Q(()=>[jw]),_:1},16)]),_:1},16)}}},Nw=le(Dw,[["__file","/@slidev/slides/15.md"]]),Vw=t("h1",null,[t("span",{class:"text-[60px]"},"Lesson 2")],-1),Jw={__name:"16",setup(e){const n={layout:"center",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"};return K(se),(s,o)=>(E(),ne(xf,De(Me(n)),{default:Q(()=>[Vw]),_:1},16))}},Uw=le(Jw,[["__file","/@slidev/slides/16.md"]]),qw=t("h1",null,"Component Definition (1/3)",-1),Xw=t("p",null,[t("span",{class:"text-gradient-red"},"第一步：定义组件并导出")],-1),Ww=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," () "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),zw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," HeroItem "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"./HeroItem"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#FF79C6"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {"),t("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),t("span",{style:{color:"#F8F8F2"}},"} <== "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),t("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),t("span",{style:{color:"#F8F8F2"}},"."),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," HeroItem "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"./HeroItem"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#50FA7B"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#FF79C6"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {"),t("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),t("span",{style:{color:"#F8F8F2"}},"} <== "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),t("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      {"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),t("span",{style:{color:"#F8F8F2"}},"."),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," <"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  );")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Kw=t("p",null,[t("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),Yw=t("p",null,[t("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),Zw={__name:"17",setup(e){const n={srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[qw,Xw,X(l,We({},{ranges:["none","3","5","all"]}),{default:Q(()=>[Ww]),_:1},16),X(l,We({at:2},{ranges:["none","7","6"]}),{default:Q(()=>[zw]),_:1},16),Kw,Yw]),_:1},16)}}},Gw=le(Zw,[["__file","/@slidev/slides/17.md"]]),Qw=t("h1",null,"Component Definition (2/3)",-1),e6=t("p",null,[t("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),t6=t("p",null,[t("span",{class:"text-gradient-red"},"第二步：声明组件接受的属性 props 以及类型")],-1),n6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  item"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    id"),t("span",{style:{color:"#FF79C6"}},"?:"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    name"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    skills"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},"[]")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  item"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    id"),t("span",{style:{color:"#FF79C6"}},"?:"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    name"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    skills"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},"[]")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),s6=t("p",null,[t("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),o6={__name:"18",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[Qw,e6,t6,X(l,We({},{ranges:["all","4-10","2,13","12"]}),{default:Q(()=>[n6]),_:1},16),s6]),_:1},16)}}},l6=le(o6,[["__file","/@slidev/slides/18.md"]]),r6=t("h1",null,"Component Definition (3/3)",-1),a6=t("p",null,[t("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),i6=t("p",null,[t("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),c6=t("p",null,[t("span",{class:"text-gradient-red"},"第三步：组件内返回 JSX")],-1),u6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),p6={__name:"19",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[r6,a6,i6,c6,X(l,We({},{ranges:["all","5-9"]}),{default:Q(()=>[u6]),_:1},16)]),_:1},16)}}},d6=le(p6,[["__file","/@slidev/slides/19.md"]]),f6=t("h1",null,[p("Review "),t("code",null,"HeroItem.tsx")],-1),F6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  item"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    id"),t("span",{style:{color:"#FF79C6"}},"?:"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    name"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    skills"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},"[]")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.id}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#BD93F9"}},"*"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," React "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"import"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," { "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"as"),t("span",{style:{color:"#F8F8F2"}}," FC } "),t("span",{style:{color:"#FF79C6"}},"from"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"react"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"type"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  item"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    id"),t("span",{style:{color:"#FF79C6"}},"?:"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    name"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    skills"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},"[]")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"HeroItem"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),t("span",{style:{color:"#F8F8F2"}},"> "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," ({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.id}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.name}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      <"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">{item.skills."),t("span",{style:{color:"#50FA7B"}},"join"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},", "),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},")}</"),t("span",{style:{color:"#FF79C6"}},"span"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    </"),t("span",{style:{color:"#FF79C6"}},"li"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),h6={__name:"20",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[f6,X(l,We({},{ranges:[""]}),{default:Q(()=>[F6]),_:1},16)]),_:1},16)}}},m6=le(h6,[["__file","/@slidev/slides/20.md"]]),y6=t("h1",null,"State Hooks",-1),g6=t("p",null,"State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：",-1),v6=t("code",null,"useState",-1),_6=t("code",null,"useReducer",-1),x6=t("br",null,null,-1),b6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),t("span",{style:{color:"#F8F8F2"}},">("),t("span",{style:{color:"#BD93F9"}},"false"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"setLoading"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"setHeros"),t("span",{style:{color:"#F8F8F2"}},"(users);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"catch"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"error"),t("span",{style:{color:"#F8F8F2"}},"(error))")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"finally"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"setLoading"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"false"),t("span",{style:{color:"#F8F8F2"}},"));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),t("span",{style:{color:"#F8F8F2"}},">("),t("span",{style:{color:"#BD93F9"}},"false"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"setLoading"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"true"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"setHeros"),t("span",{style:{color:"#F8F8F2"}},"(users);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"catch"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"error"),t("span",{style:{color:"#F8F8F2"}},"(error))")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"finally"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"setLoading"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#BD93F9"}},"false"),t("span",{style:{color:"#F8F8F2"}},"));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),k6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"reducer"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," { type"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},", payload"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[] }) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (action.type "),t("span",{style:{color:"#FF79C6"}},"==="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"setHeros"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#FF79C6"}},"..."),t("span",{style:{color:"#F8F8F2"}},"action.payload];")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"throw"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Error"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"Unknown action."),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"useReducer"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[]>(reducer, [] "),t("span",{style:{color:"#6272A4"}},"/* ,initFn */"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"dispatch"),t("span",{style:{color:"#F8F8F2"}},"({ type"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"setHeros"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", payload"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," users });")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"catch"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"error"),t("span",{style:{color:"#F8F8F2"}},"(error));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"reducer"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," { type"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),t("span",{style:{color:"#F8F8F2"}},", payload"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[] }) {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"if"),t("span",{style:{color:"#F8F8F2"}}," (action.type "),t("span",{style:{color:"#FF79C6"}},"==="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"setHeros"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," ["),t("span",{style:{color:"#FF79C6"}},"..."),t("span",{style:{color:"#F8F8F2"}},"action.payload];")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"throw"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"Error"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"Unknown action."),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"useReducer"),t("span",{style:{color:"#F8F8F2"}},"<"),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),t("span",{style:{color:"#F8F8F2"}},"[]>(reducer, [] "),t("span",{style:{color:"#6272A4"}},"/* ,initFn */"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"dispatch"),t("span",{style:{color:"#F8F8F2"}},"({ type"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"setHeros"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},", payload"),t("span",{style:{color:"#FF79C6"}},":"),t("span",{style:{color:"#F8F8F2"}}," users });")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"catch"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," console."),t("span",{style:{color:"#50FA7B"}},"error"),t("span",{style:{color:"#F8F8F2"}},"(error));")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),C6={__name:"21",setup(e){const n={clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/state.md"},s=K(se);return(o,l)=>{const r=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[y6,g6,t("ul",null,[t("li",null,[v6,p("："),t("span",{class:Oe({"text-gradient-red":C(s).nav.clicks<3&&C(s).nav.clicks>=1})},"声明可以直接更新的状态变量；",2)]),t("li",null,[_6,p("："),t("span",{class:Oe({"text-gradient-red":C(s).nav.clicks>=3})},"声明一个状态变量，参数为更新逻辑；",2)])]),x6,C(s).nav.clicks<3&&C(s).nav.clicks>=1?(E(),ne(r,We({key:0},{at:1},{ranges:["2,3","6,9,12"]}),{default:Q(()=>[b6]),_:1},16)):ye("v-if",!0),C(s).nav.clicks>=3?(E(),ne(r,We({key:1},{at:3},{ranges:["7","1-4","7","12"]}),{default:Q(()=>[k6]),_:1},16)):ye("v-if",!0)]),_:1},16)}}},w6=le(C6,[["__file","/@slidev/slides/21.md"]]),S6=t("h1",null,"Context Hooks",-1),E6=t("p",null,[p("在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 "),t("code",null,"createContext"),p(" 配合使用：")],-1),A6=t("iframe",{src:"https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx",class:"w-full h-[calc(100%-55px)]"},null,-1),$6={__name:"22",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/context.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[S6,E6,A6]),_:1},16))}},R6=le($6,[["__file","/@slidev/slides/22.md"]]),T6=t("h1",null,"Ref Hooks",-1),O6=t("p",null,"Ref hooks 允许组件保存一些不用于渲染的信息。",-1),I6=t("ul",null,[t("li",null,[t("code",null,"useRef"),p("：引用渲染不需要的值；")]),t("li",null,[t("code",null,"useImperativeHandle"),p("：自定义公开 ref 的句柄；")])],-1),P6=t("iframe",{src:"https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx",class:"w-full h-[calc(100%-135px)] mt-[16px]"},null,-1),H6={__name:"23",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/ref.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[T6,O6,I6,P6]),_:1},16))}},B6=le(H6,[["__file","/@slidev/slides/23.md"]]),L6=t("h1",null,"Effect Hooks",-1),M6=t("p",null,[p("用以处理"),t("strong",null,"副作用"),p("的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。")],-1),j6=t("ul",null,[t("li",null,[t("code",null,"useEffect"),p("：处理副作用，在 React 挂载 DOM 之前"),t("strong",null,"异步"),p("执行；")]),t("li",null,[t("code",null,"useLayoutEffect"),p("："),t("code",null,"useEffect"),p(" 的变体，在浏览器绘制 DOM 之前"),t("strong",null,"同步"),p("执行；")])],-1),D6=t("br",null,null,-1),N6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"))")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"result"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," result."),t("span",{style:{color:"#50FA7B"}},"json"),t("span",{style:{color:"#F8F8F2"}},"())")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"setHeros"),t("span",{style:{color:"#F8F8F2"}},"(users);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{"),t("span",{style:{color:"#6272A4"}},"/* ... */"),t("span",{style:{color:"#F8F8F2"}},"}</"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#50FA7B"}},"fetch"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"heros.json"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},"))")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(("),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"result"),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," result."),t("span",{style:{color:"#50FA7B"}},"json"),t("span",{style:{color:"#F8F8F2"}},"())")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      ."),t("span",{style:{color:"#50FA7B"}},"then"),t("span",{style:{color:"#F8F8F2"}},"(({ "),t("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),t("span",{style:{color:"#F8F8F2"}}," }) "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"        "),t("span",{style:{color:"#50FA7B"}},"setHeros"),t("span",{style:{color:"#F8F8F2"}},"(users);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"      })")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, []);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{"),t("span",{style:{color:"#6272A4"}},"/* ... */"),t("span",{style:{color:"#F8F8F2"}},"}</"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),V6=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useLayoutEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," $list "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," document."),t("span",{style:{color:"#50FA7B"}},"querySelector"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"#user-list"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," { width, height } "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," $list."),t("span",{style:{color:"#50FA7B"}},"getBoundingClientRect"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(width, height);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, [heros]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{"),t("span",{style:{color:"#6272A4"}},"/* ... */"),t("span",{style:{color:"#F8F8F2"}},"}</"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#FF79C6"}},"export"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"default"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#FF79C6"}},"function"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B"}},"App"),t("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," React."),t("span",{style:{color:"#50FA7B"}},"useState"),t("span",{style:{color:"#F8F8F2"}},"([]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  React."),t("span",{style:{color:"#50FA7B"}},"useLayoutEffect"),t("span",{style:{color:"#F8F8F2"}},"(() "),t("span",{style:{color:"#FF79C6"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," $list "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," document."),t("span",{style:{color:"#50FA7B"}},"querySelector"),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F1FA8C"}},"#user-list"),t("span",{style:{color:"#E9F284"}},"'"),t("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    "),t("span",{style:{color:"#FF79C6"}},"const"),t("span",{style:{color:"#F8F8F2"}}," { width, height } "),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#F8F8F2"}}," $list."),t("span",{style:{color:"#50FA7B"}},"getBoundingClientRect"),t("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    console."),t("span",{style:{color:"#50FA7B"}},"log"),t("span",{style:{color:"#F8F8F2"}},"(width, height);")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  }, [heros]);")]),p(`
`),t("span",{class:"line"}),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#FF79C6"}},"return"),t("span",{style:{color:"#F8F8F2"}}," (")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"    <"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}}," "),t("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),t("span",{style:{color:"#FF79C6"}},"="),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F1FA8C"}},"user-list"),t("span",{style:{color:"#E9F284"}},'"'),t("span",{style:{color:"#F8F8F2"}},">{"),t("span",{style:{color:"#6272A4"}},"/* ... */"),t("span",{style:{color:"#F8F8F2"}},"}</"),t("span",{style:{color:"#FF79C6"}},"ul"),t("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  )")]),p(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),J6={__name:"24",setup(e){const n={clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md"},s=K(se);return(o,l)=>{const r=Ut;return E(),ne(qe,De(Me(n)),{default:Q(()=>[L6,M6,j6,D6,Nt(t("div",null,[X(r,We({},{ranges:["4-12"]}),{default:Q(()=>[N6]),_:1},16)],512),[[So,C(s).nav.clicks===1]]),Nt(t("div",null,[X(r,We({},{ranges:["4-9"]}),{default:Q(()=>[V6]),_:1},16)],512),[[So,C(s).nav.clicks===2]])]),_:1},16)}}},U6=le(J6,[["__file","/@slidev/slides/24.md"]]),q6=t("h1",null,"Performance Hooks",-1),X6={__name:"25",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[q6]),_:1},16))}},W6=le(X6,[["__file","/@slidev/slides/25.md"]]),z6=t("h1",null,"Other Hooks",-1),K6={__name:"26",setup(e){const n={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"};return K(se),(s,o)=>(E(),ne(qe,De(Me(n)),{default:Q(()=>[z6]),_:1},16))}},Y6=le(K6,[["__file","/@slidev/slides/26.md"]]),Z6=[{path:"1",name:"page-1",component:Mb,meta:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md",slide:{raw:null,title:'<span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>',level:1,content:`<mdi-react class="text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6" />

# <span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>

Shared by [siyuan.wang](mailto:siyuan.wang@capgemini.com)

<style>
h1 {
  @apply w-auto mx-auto;
  color: transparent !important;
  background-color: #2B90B6;
  background-image: linear-gradient(90deg, #4EC5D4 40%, #146b8c 70%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"},note:`大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。

首先，先和大家介绍关于我们这次的培训的目的和计划`,index:0,start:0,end:32,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/welcome-to-react.md",raw:`---
css: unocss
class: text-center
hideInToc: true
transition: slide-left
---
<mdi-react class="text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6" />

# <span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>

Shared by [siyuan.wang](mailto:siyuan.wang@capgemini.com)

<style>
h1 {
  @apply w-auto mx-auto;
  color: transparent !important;
  background-color: #2B90B6;
  background-image: linear-gradient(90deg, #4EC5D4 40%, #146b8c 70%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。

首先，先和大家介绍关于我们这次的培训的目的和计划
-->
`,title:'<span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>',level:1,content:`<mdi-react class="text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6" />

# <span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>

Shared by [siyuan.wang](mailto:siyuan.wang@capgemini.com)

<style>
h1 {
  @apply w-auto mx-auto;
  color: transparent !important;
  background-color: #2B90B6;
  background-image: linear-gradient(90deg, #4EC5D4 40%, #146b8c 70%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:'<span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>'},note:`大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。

首先，先和大家介绍关于我们这次的培训的目的和计划`,index:0,start:0,end:32},inline:{raw:`---
src: ./pages/welcome-to-react.md
title: React Shared
theme: dracula
favicon: ./public/images/logo-react.ico
drawings:
  enabled: false
  persist: false
routerMode: 'hash'
lineNumbers: false
highlighter: shiki
---
`,title:"React Shared",level:1,content:"",frontmatter:{title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki"},index:0,start:0,end:13},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/welcome-to-react.md",noteHTML:`<p>大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。</p>
<p>首先，先和大家介绍关于我们这次的培训的目的和计划</p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Qb,meta:{title:"Schedule",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./schedule.md",slide:{raw:`---
---

# Schedule

本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：

<div class="mt-6" />

#### **基础**和**进阶**：
- 基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；
- 进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；

<div class="mt-5" />

#### “副”作用：
- 适当普及 ES6+、Typescript 以及<span class="text-highlight">函数式编程</span>；
- 在每次课程的最后布置作业；
- 培训的最后，提供实战类的项目；

<div class="mt-5" />

#### 真正的计划

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,title:"Schedule",level:1,content:`# Schedule

本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：

<div class="mt-6" />

#### **基础**和**进阶**：
- 基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；
- 进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；

<div class="mt-5" />

#### “副”作用：
- 适当普及 ES6+、Typescript 以及<span class="text-highlight">函数式编程</span>；
- 在每次课程的最后布置作业；
- 培训的最后，提供实战类的项目；

<div class="mt-5" />

#### 真正的计划

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./schedule.md"},index:1,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",raw:`---
---

# Schedule

本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：

<div class="mt-6" />

#### **基础**和**进阶**：
- 基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；
- 进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；

<div class="mt-5" />

#### “副”作用：
- 适当普及 ES6+、Typescript 以及<span class="text-highlight">函数式编程</span>；
- 在每次课程的最后布置作业；
- 培训的最后，提供实战类的项目；

<div class="mt-5" />

#### 真正的计划

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,title:"Schedule",level:1,content:`# Schedule

本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：

<div class="mt-6" />

#### **基础**和**进阶**：
- 基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；
- 进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；

<div class="mt-5" />

#### “副”作用：
- 适当普及 ES6+、Typescript 以及<span class="text-highlight">函数式编程</span>；
- 在每次课程的最后布置作业；
- 培训的最后，提供实战类的项目；

<div class="mt-5" />

#### 真正的计划

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/lesson_1/index.md
---

# Lesson One
`,title:"Lesson One",level:1,content:"# Lesson One",frontmatter:{},index:1,start:13,end:19},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:lk,meta:{layout:"center",srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
layout: 'center'
---

# <span class="text-[60px]">Lesson 1</span>
`,title:'<span class="text-[60px]">Lesson 1</span>',level:1,content:'# <span class="text-[60px]">Lesson 1</span>',frontmatter:{layout:"center",srcSequence:"./pages/lesson_1/index.md"},index:2,start:7,end:13,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
layout: 'center'
---

# <span class="text-[60px]">Lesson 1</span>
`,title:'<span class="text-[60px]">Lesson 1</span>',level:1,content:'# <span class="text-[60px]">Lesson 1</span>',frontmatter:{layout:"center"},index:1,start:7,end:13},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Hk,meta:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md",slide:{raw:`---
clicks: 9
layout: two-cols
transition: slide-up
---

# What is React?

<div class="flex items-center justify-center mr-4 py-4 bg-black rounded">

<span class="text-gradient-red text-[36px]">f(state) = UI</span>

</div>

<div class="w-100 mt-5">
<v-clicks>

- React 是一个用于渲染用户界面（UI）的 JavaScript 工具库
- 用组件创建用户界面
- 用代码和标签编写组件
- 在任何地方添加交互
- 渐进式 JavaScript 框架
- NextJs / Remix / UmiJs

</v-clicks>

</div>

Read more about [React](https://react.dev/)

<template v-slot:right>

<div v-click="2">

\`\`\`tsx {10,11|3-9,12-14|6,9|all} {at:2}
import { FunctionComponentFactory as FC } from 'react'

const Video: FC<{ video: string }> = ({
  video
}) {
  const onPlay = () => { console.log('Play video.'); }

  return (
    <div onClick={onPlay}>
      <Thumbnail video={video} />
      <LikeButton video={video} />
    </div>
  );
}
\`\`\`

</div>

<v-clicks at="6">

<img src="/public/images/nextjs.png" class="relative z-[2] w-full -mt-40">
<img src="/public/images/remix.png" class="relative w-full z-[3] -mt-16">
<img src="/public/images/umijs.png" class="relative w-full z-[3] -mt-16">

</v-clicks>

</template>

<!--
我们首先来看这个公式，大家怎么理解？一个函数 f，接受 state 参数，然后等于 UI

这是 React 的总纲，（click）也就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库。它和 Vue 不同的是，React 没有双向绑定，它只负责从状态到 UI 的渲染。

同时 React 还具有以下特点：
- （click）用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- （click）组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回类似 HTML 的代码，包括参数、方法等等和我们平时写的代码一样
- （click）允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- （click）和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看
-->
`,title:"What is React?",level:1,content:`# What is React?

<div class="flex items-center justify-center mr-4 py-4 bg-black rounded">

<span class="text-gradient-red text-[36px]">f(state) = UI</span>

</div>

<div class="w-100 mt-5">
<v-clicks>

- React 是一个用于渲染用户界面（UI）的 JavaScript 工具库
- 用组件创建用户界面
- 用代码和标签编写组件
- 在任何地方添加交互
- 渐进式 JavaScript 框架
- NextJs / Remix / UmiJs

</v-clicks>

</div>

Read more about [React](https://react.dev/)

<template v-slot:right>

<div v-click="2">

\`\`\`tsx {10,11|3-9,12-14|6,9|all} {at:2}
import { FunctionComponentFactory as FC } from 'react'

const Video: FC<{ video: string }> = ({
  video
}) {
  const onPlay = () => { console.log('Play video.'); }

  return (
    <div onClick={onPlay}>
      <Thumbnail video={video} />
      <LikeButton video={video} />
    </div>
  );
}
\`\`\`

</div>

<v-clicks at="6">

<img src="/public/images/nextjs.png" class="relative z-[2] w-full -mt-40">
<img src="/public/images/remix.png" class="relative w-full z-[3] -mt-16">
<img src="/public/images/umijs.png" class="relative w-full z-[3] -mt-16">

</v-clicks>

</template>`,frontmatter:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"},note:`我们首先来看这个公式，大家怎么理解？一个函数 f，接受 state 参数，然后等于 UI

这是 React 的总纲，（click）也就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库。它和 Vue 不同的是，React 没有双向绑定，它只负责从状态到 UI 的渲染。

同时 React 还具有以下特点：
- （click）用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- （click）组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回类似 HTML 的代码，包括参数、方法等等和我们平时写的代码一样
- （click）允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- （click）和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看`,index:3,start:0,end:79,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-react.md",raw:`---
clicks: 9
layout: two-cols
transition: slide-up
---

# What is React?

<div class="flex items-center justify-center mr-4 py-4 bg-black rounded">

<span class="text-gradient-red text-[36px]">f(state) = UI</span>

</div>

<div class="w-100 mt-5">
<v-clicks>

- React 是一个用于渲染用户界面（UI）的 JavaScript 工具库
- 用组件创建用户界面
- 用代码和标签编写组件
- 在任何地方添加交互
- 渐进式 JavaScript 框架
- NextJs / Remix / UmiJs

</v-clicks>

</div>

Read more about [React](https://react.dev/)

<template v-slot:right>

<div v-click="2">

\`\`\`tsx {10,11|3-9,12-14|6,9|all} {at:2}
import { FunctionComponentFactory as FC } from 'react'

const Video: FC<{ video: string }> = ({
  video
}) {
  const onPlay = () => { console.log('Play video.'); }

  return (
    <div onClick={onPlay}>
      <Thumbnail video={video} />
      <LikeButton video={video} />
    </div>
  );
}
\`\`\`

</div>

<v-clicks at="6">

<img src="/public/images/nextjs.png" class="relative z-[2] w-full -mt-40">
<img src="/public/images/remix.png" class="relative w-full z-[3] -mt-16">
<img src="/public/images/umijs.png" class="relative w-full z-[3] -mt-16">

</v-clicks>

</template>

<!--
我们首先来看这个公式，大家怎么理解？一个函数 f，接受 state 参数，然后等于 UI

这是 React 的总纲，（click）也就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库。它和 Vue 不同的是，React 没有双向绑定，它只负责从状态到 UI 的渲染。

同时 React 还具有以下特点：
- （click）用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- （click）组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回类似 HTML 的代码，包括参数、方法等等和我们平时写的代码一样
- （click）允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- （click）和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看
-->
`,title:"What is React?",level:1,content:`# What is React?

<div class="flex items-center justify-center mr-4 py-4 bg-black rounded">

<span class="text-gradient-red text-[36px]">f(state) = UI</span>

</div>

<div class="w-100 mt-5">
<v-clicks>

- React 是一个用于渲染用户界面（UI）的 JavaScript 工具库
- 用组件创建用户界面
- 用代码和标签编写组件
- 在任何地方添加交互
- 渐进式 JavaScript 框架
- NextJs / Remix / UmiJs

</v-clicks>

</div>

Read more about [React](https://react.dev/)

<template v-slot:right>

<div v-click="2">

\`\`\`tsx {10,11|3-9,12-14|6,9|all} {at:2}
import { FunctionComponentFactory as FC } from 'react'

const Video: FC<{ video: string }> = ({
  video
}) {
  const onPlay = () => { console.log('Play video.'); }

  return (
    <div onClick={onPlay}>
      <Thumbnail video={video} />
      <LikeButton video={video} />
    </div>
  );
}
\`\`\`

</div>

<v-clicks at="6">

<img src="/public/images/nextjs.png" class="relative z-[2] w-full -mt-40">
<img src="/public/images/remix.png" class="relative w-full z-[3] -mt-16">
<img src="/public/images/umijs.png" class="relative w-full z-[3] -mt-16">

</v-clicks>

</template>`,frontmatter:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?"},note:`我们首先来看这个公式，大家怎么理解？一个函数 f，接受 state 参数，然后等于 UI

这是 React 的总纲，（click）也就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库。它和 Vue 不同的是，React 没有双向绑定，它只负责从状态到 UI 的渲染。

同时 React 还具有以下特点：
- （click）用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- （click）组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回类似 HTML 的代码，包括参数、方法等等和我们平时写的代码一样
- （click）允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- （click）和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看`,index:0,start:0,end:79},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-react.md",noteHTML:`<p>我们首先来看这个公式，大家怎么理解？一个函数 f，接受 state 参数，然后等于 UI</p>
<p>这是 React 的总纲，（click）也就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库。它和 Vue 不同的是，React 没有双向绑定，它只负责从状态到 UI 的渲染。</p>
<p>同时 React 还具有以下特点：</p>
<ul>
<li>（click）用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件</li>
<li>（click）组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回类似 HTML 的代码，包括参数、方法等等和我们平时写的代码一样</li>
<li>（click）允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上</li>
<li>（click）和 Vue 一样，都是渐进式的 js 框架</li>
</ul>
<p>提到渐进式框架，我想问下大家，渐进式是什么意思？</p>
<p>（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看</p>
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Dk,meta:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!--
React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？

首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list

然后引用我们的脚本文件 script.js

（点击跳转到 script.js 文件，然后折叠所有函数）

先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，

首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；

fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：
- 获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；
- 我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；
- 在获取到接口数据后，我首先要清空 $container；
- 接下来就是需要将数据渲染出来，那么在这里我是这么做的：
  -  首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；
  - 然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；
  - 最后我将整个 $fragement append 到 $container 完成列表的渲染；

大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；

那如果我们用 React 实现的话，会是什么样子的呢？
-->
`,title:"What is JSX?",level:1,content:`# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？

首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list

然后引用我们的脚本文件 script.js

（点击跳转到 script.js 文件，然后折叠所有函数）

先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，

首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；

fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：
- 获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；
- 我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；
- 在获取到接口数据后，我首先要清空 $container；
- 接下来就是需要将数据渲染出来，那么在这里我是这么做的：
  -  首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；
  - 然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；
  - 最后我将整个 $fragement append 到 $container 完成列表的渲染；

大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；

那如果我们用 React 实现的话，会是什么样子的呢？`,index:4,start:0,end:44,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!--
React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？

首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list

然后引用我们的脚本文件 script.js

（点击跳转到 script.js 文件，然后折叠所有函数）

先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，

首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；

fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：
- 获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；
- 我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；
- 在获取到接口数据后，我首先要清空 $container；
- 接下来就是需要将数据渲染出来，那么在这里我是这么做的：
  -  首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；
  - 然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；
  - 最后我将整个 $fragement append 到 $container 完成列表的渲染；

大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；

那如果我们用 React 实现的话，会是什么样子的呢？
-->
`,title:"What is JSX?",level:1,content:`# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{title:"What is JSX?"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

OK，我们先来做下对比。

首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。

大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？

首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list

然后引用我们的脚本文件 script.js

（点击跳转到 script.js 文件，然后折叠所有函数）

先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，

首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；

fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：
- 获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；
- 我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；
- 在获取到接口数据后，我首先要清空 $container；
- 接下来就是需要将数据渲染出来，那么在这里我是这么做的：
  -  首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；
  - 然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；
  - 最后我将整个 $fragement append 到 $container 完成列表的渲染；

大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；

那如果我们用 React 实现的话，会是什么样子的呢？`,index:0,start:0,end:44},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？</p>
<p>OK，我们先来做下对比。</p>
<p>首先，我们给定一个场景，获取金庸小说下英雄的列表，展示名字和所学的武功，如右图所示。</p>
<p>大家可以先试着在脑海里想象一下这个场景在不用 Vue 或者 React 的情况下应该怎么实现？</p>
<p>首先需要在 index.html 中创建一个 ul，并且赋予 id 为 user-list</p>
<p>然后引用我们的脚本文件 script.js</p>
<p>（点击跳转到 script.js 文件，然后折叠所有函数）</p>
<p>先来看下整体结构，三个函数，一个函数执行，我们按照执行逻辑大致的看下，</p>
<p>首先第 44 行的 setTimeout(fetchHeros, 2000); 是整个业务逻辑的起点，在 2s 之后执行 fetchHeros 方法；</p>
<p>fetchHeros 是获取英雄列表主要函数（展开它），它主要做了这么几件事：</p>
<ul>
<li>获取在 index.html 中这个列表的父容器 $container，因为我们要在它的里面渲染列表项；</li>
<li>我通过延迟 2s 以及获取本地的 json 文件来模拟接口请求，在此之间，我通过 $container.innerHTML 设置了一个 loading 过渡；</li>
<li>在获取到接口数据后，我首先要清空 $container；</li>
<li>接下来就是需要将数据渲染出来，那么在这里我是这么做的：
<ul>
<li>首先创建一个片段 $fragment，这个 createDocumentFragment 创建的 fragment 并不真实存在，也就是说无法将它渲染到 HTML 文档流；</li>
<li>然后我遍历数据，创建列表项，并依次将列表项插入到 $fragment 内部；</li>
<li>最后我将整个 $fragement append 到 $container 完成列表的渲染；</li>
</ul>
</li>
</ul>
<p>大家可以看到，这仅仅是一个非常简单的列表请求并渲染的逻辑，用原生而且大部分是使用了 ES6 的特性写出来很繁琐，而且真正的需求或者设计也不可能会像右边这么简单；</p>
<p>那如果我们用 React 实现的话，会是什么样子的呢？</p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Wk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

<div class="h-2" />


\`\`\`tsx {all|1-7|9-18|2,6,10,17|3,5,11-12,16|13,15|4,14}
function AlertButton({ message, children }) {
  return (
    <button className="btn__alert" style={{ width: '20px' }} onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <img src="/public/images/react.png" />
      <AlertButton message="我是糖炒 🌰">
        我是糖炒 🌰
      </AlertButton>
    </div>
  );
}
\`\`\`

<!--
那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。

这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；

（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。

（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；

（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；

（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。
-->
`,title:"JSX in React",level:1,content:`# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

<div class="h-2" />


\`\`\`tsx {all|1-7|9-18|2,6,10,17|3,5,11-12,16|13,15|4,14}
function AlertButton({ message, children }) {
  return (
    <button className="btn__alert" style={{ width: '20px' }} onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <img src="/public/images/react.png" />
      <AlertButton message="我是糖炒 🌰">
        我是糖炒 🌰
      </AlertButton>
    </div>
  );
}
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。

这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；

（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。

（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；

（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；

（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。`,index:5,start:44,end:96,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

<div class="h-2" />


\`\`\`tsx {all|1-7|9-18|2,6,10,17|3,5,11-12,16|13,15|4,14}
function AlertButton({ message, children }) {
  return (
    <button className="btn__alert" style={{ width: '20px' }} onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <img src="/public/images/react.png" />
      <AlertButton message="我是糖炒 🌰">
        我是糖炒 🌰
      </AlertButton>
    </div>
  );
}
\`\`\`

<!--
那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。

这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；

（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。

（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；

（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；

（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。
-->
`,title:"JSX in React",level:1,content:`# JSX in React

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。

### 一个 🌰 (例子)

<div class="h-2" />


\`\`\`tsx {all|1-7|9-18|2,6,10,17|3,5,11-12,16|13,15|4,14}
function AlertButton({ message, children }) {
  return (
    <button className="btn__alert" style={{ width: '20px' }} onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <img src="/public/images/react.png" />
      <AlertButton message="我是糖炒 🌰">
        我是糖炒 🌰
      </AlertButton>
    </div>
  );
}
\`\`\``,frontmatter:{hideInToc:!0},note:`那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法

JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。

这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；

（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。

（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；

（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；

（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。`,index:1,start:44,end:96},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>那么我们首先来了解下什么是 JSX 和它的大致规则和使用方法</p>
<p>JSX 的全称是 &quot;Javascript and XML&quot;，它允许我们可以在 JS 中编写 XML (HTML) 标签语言，说的直白一些，JSX 就是允许我们在 JS 脚本里直接写 HTML。</p>
<p>这是一段 React 组件的代码，这里面共有两个函数，其实也可以叫它们为组件，React 的组件可以是函数；</p>
<p>（click）一个是 AlertButton，(click)另一个是 Toolbar 组件，Toolbar 是 AlertButton 组件的父组件。</p>
<p>（click) 如果一个函数想要返回多行 JSX，那么需要使用 () 将它们包裹起来，实际上这算是一种约定；</p>
<p>（click) 那么大家可以看到，button / div 和 img 是原生标签，它们都是可以直接在函数中使用并且说明结构。并且保留了大部分的原生标签的属性，提供了各种事件等等；</p>
<p>（click) AlertButton 是组件标签，和原生标签类似，而且组件用到的属性也是可以直接传递的。</p>
<p>（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。</p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:rC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比                                                             | React                                                                        | Vue                                               |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| 组件调用                                                         | 大驼峰                                                                       | 大驼峰、小驼峰、短横线均可                        |
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 无区别                                            |
| 作用域                                                           | 全局、函数和块级作用域                                                       | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 变量、表达式                                                     | 用 \`{}\` 表示                                                                 | 用 \`{{}}\` 表示                                    |
| 属性                                                             | 小驼峰，_class 改为 className_                                               | 小驼峰、短横线命名均可                            |
| 动态属性                                                         | 参数后加 \`{}\`                                                                | 参数前加 \`:\`                                      |
| 事件                                                             | 事件后加 \`{}\`，值为函数                                                      | 事件前加 \`v-on\` 或 \`@\`                            |
| <span :class="{'text-highlight-2 ': highlight }">动态渲染</span> | <span :class="{'text-highlight-2 ': highlight }">一切皆为 JavaScript </span> | \`v-for\` / \`v-if\` / \`v-show\` ...                   |

<span class="absolute left-[20px] bottom-[42px]" :class="{'text-highlight-2 ': highlight}" @click="trigger"><uim-rocket /></span> 


<!--
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  const highlight = ref(false)

  const trigger = () => (highlight.value = !highlight.value )
<\/script>

`,title:"React JSX vs Vue Template",level:1,content:`# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比                                                             | React                                                                        | Vue                                               |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| 组件调用                                                         | 大驼峰                                                                       | 大驼峰、小驼峰、短横线均可                        |
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 无区别                                            |
| 作用域                                                           | 全局、函数和块级作用域                                                       | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 变量、表达式                                                     | 用 \`{}\` 表示                                                                 | 用 \`{{}}\` 表示                                    |
| 属性                                                             | 小驼峰，_class 改为 className_                                               | 小驼峰、短横线命名均可                            |
| 动态属性                                                         | 参数后加 \`{}\`                                                                | 参数前加 \`:\`                                      |
| 事件                                                             | 事件后加 \`{}\`，值为函数                                                      | 事件前加 \`v-on\` 或 \`@\`                            |
| <span :class="{'text-highlight-2 ': highlight }">动态渲染</span> | <span :class="{'text-highlight-2 ': highlight }">一切皆为 JavaScript </span> | \`v-for\` / \`v-if\` / \`v-show\` ...                   |

<span class="absolute left-[20px] bottom-[42px]" :class="{'text-highlight-2 ': highlight}" @click="trigger"><uim-rocket /></span> 


<!--
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  const highlight = ref(false)

  const trigger = () => (highlight.value = !highlight.value )
<\/script>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},index:6,start:96,end:133,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比                                                             | React                                                                        | Vue                                               |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| 组件调用                                                         | 大驼峰                                                                       | 大驼峰、小驼峰、短横线均可                        |
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 无区别                                            |
| 作用域                                                           | 全局、函数和块级作用域                                                       | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 变量、表达式                                                     | 用 \`{}\` 表示                                                                 | 用 \`{{}}\` 表示                                    |
| 属性                                                             | 小驼峰，_class 改为 className_                                               | 小驼峰、短横线命名均可                            |
| 动态属性                                                         | 参数后加 \`{}\`                                                                | 参数前加 \`:\`                                      |
| 事件                                                             | 事件后加 \`{}\`，值为函数                                                      | 事件前加 \`v-on\` 或 \`@\`                            |
| <span :class="{'text-highlight-2 ': highlight }">动态渲染</span> | <span :class="{'text-highlight-2 ': highlight }">一切皆为 JavaScript </span> | \`v-for\` / \`v-if\` / \`v-show\` ...                   |

<span class="absolute left-[20px] bottom-[42px]" :class="{'text-highlight-2 ': highlight}" @click="trigger"><uim-rocket /></span> 


<!--
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  const highlight = ref(false)

  const trigger = () => (highlight.value = !highlight.value )
<\/script>

`,title:"React JSX vs Vue Template",level:1,content:`# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比                                                             | React                                                                        | Vue                                               |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| 组件调用                                                         | 大驼峰                                                                       | 大驼峰、小驼峰、短横线均可                        |
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 无区别                                            |
| 作用域                                                           | 全局、函数和块级作用域                                                       | 绑定到 Vue 组件实例、全局 Context 和 Slot context |
| 变量、表达式                                                     | 用 \`{}\` 表示                                                                 | 用 \`{{}}\` 表示                                    |
| 属性                                                             | 小驼峰，_class 改为 className_                                               | 小驼峰、短横线命名均可                            |
| 动态属性                                                         | 参数后加 \`{}\`                                                                | 参数前加 \`:\`                                      |
| 事件                                                             | 事件后加 \`{}\`，值为函数                                                      | 事件前加 \`v-on\` 或 \`@\`                            |
| <span :class="{'text-highlight-2 ': highlight }">动态渲染</span> | <span :class="{'text-highlight-2 ': highlight }">一切皆为 JavaScript </span> | \`v-for\` / \`v-if\` / \`v-show\` ...                   |

<span class="absolute left-[20px] bottom-[42px]" :class="{'text-highlight-2 ': highlight}" @click="trigger"><uim-rocket /></span> 


<!--
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
-->

<script lang="ts" setup>
  import { ref } from 'vue'
  const highlight = ref(false)

  const trigger = () => (highlight.value = !highlight.value )
<\/script>`,frontmatter:{hideInToc:!0},index:2,start:96,end:133},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:pC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:7,start:133,end:152,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{hideInToc:!0},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:3,start:133,end:152},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。</p>
<p>我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx =&gt; App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。</p>
<p>和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:xC,meta:{title:"Components",clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
title: Components
clicks: 3
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 3">

### Class Component

\`\`\`tsx {all|10,15|all|0}
import { Component, createRef } from "react";

export default class AlertButton extends Component {
  inputRef = createRef();

  handleClick = () => this.inputRef.current.focus();

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
\`\`\`

</div>

<div :class="{ 'w-full': $slidev.nav.clicks === 3, 'w-1/2': $slidev.nav.clicks !== 3 }">

### Function Component

\`\`\`tsx {all|8,13|0|all} {at: 0}
import * as React from "react";

export default function AlertButton() {
  const inputRef = React.useRef();
  const handleClick = inputRef.current.focus();

  return (
    <React.Fragment>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </React.Fragment>
  );
}
\`\`\`

</div>

</div>

<!-- 
和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。
 -->
`,title:"Components",level:1,content:`# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 3">

### Class Component

\`\`\`tsx {all|10,15|all|0}
import { Component, createRef } from "react";

export default class AlertButton extends Component {
  inputRef = createRef();

  handleClick = () => this.inputRef.current.focus();

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
\`\`\`

</div>

<div :class="{ 'w-full': $slidev.nav.clicks === 3, 'w-1/2': $slidev.nav.clicks !== 3 }">

### Function Component

\`\`\`tsx {all|8,13|0|all} {at: 0}
import * as React from "react";

export default function AlertButton() {
  const inputRef = React.useRef();
  const handleClick = inputRef.current.focus();

  return (
    <React.Fragment>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </React.Fragment>
  );
}
\`\`\`

</div>

</div>`,frontmatter:{title:"Components",clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。`,index:8,start:0,end:78,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
title: Components
clicks: 3
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 3">

### Class Component

\`\`\`tsx {all|10,15|all|0}
import { Component, createRef } from "react";

export default class AlertButton extends Component {
  inputRef = createRef();

  handleClick = () => this.inputRef.current.focus();

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
\`\`\`

</div>

<div :class="{ 'w-full': $slidev.nav.clicks === 3, 'w-1/2': $slidev.nav.clicks !== 3 }">

### Function Component

\`\`\`tsx {all|8,13|0|all} {at: 0}
import * as React from "react";

export default function AlertButton() {
  const inputRef = React.useRef();
  const handleClick = inputRef.current.focus();

  return (
    <React.Fragment>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </React.Fragment>
  );
}
\`\`\`

</div>

</div>

<!-- 
和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。
 -->
`,title:"Components",level:1,content:`# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 3">

### Class Component

\`\`\`tsx {all|10,15|all|0}
import { Component, createRef } from "react";

export default class AlertButton extends Component {
  inputRef = createRef();

  handleClick = () => this.inputRef.current.focus();

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
\`\`\`

</div>

<div :class="{ 'w-full': $slidev.nav.clicks === 3, 'w-1/2': $slidev.nav.clicks !== 3 }">

### Function Component

\`\`\`tsx {all|8,13|0|all} {at: 0}
import * as React from "react";

export default function AlertButton() {
  const inputRef = React.useRef();
  const handleClick = inputRef.current.focus();

  return (
    <React.Fragment>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </React.Fragment>
  );
}
\`\`\`

</div>

</div>`,frontmatter:{title:"Components",clicks:3},note:`和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。`,index:0,start:0,end:78},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。</p>
<p>声明 React 组件主要有两种方式：</p>
<ul>
<li>（click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；</li>
<li>（click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；</li>
</ul>
<p>两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；</p>
<p>实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。</p>
<p>不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:wC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
hideInToc: true
---

 # Review components

\`\`\`tsx {all|3,19|4,18|9-14}
import * as React from 'react';

const Empty = () => 'No Heros.';
const Loading = () => 'Loading, fetching heros...' as unknown as JSX.Element;

export default function App() {
  const [heros, setHeros] = React.useState([]);

  const renderHero = (item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  );

  return (
    <ul id="user-list">
      {loading ? <Loading /> : heros.length ? 
        heros.map(renderHero) : Empty()}
    </ul>
  );
}

\`\`\`

<!-- 
再次回到之前的用 React 写的“英雄列表”

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。
 -->
`,title:"Review components",level:1,content:`# Review components

\`\`\`tsx {all|3,19|4,18|9-14}
import * as React from 'react';

const Empty = () => 'No Heros.';
const Loading = () => 'Loading, fetching heros...' as unknown as JSX.Element;

export default function App() {
  const [heros, setHeros] = React.useState([]);

  const renderHero = (item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  );

  return (
    <ul id="user-list">
      {loading ? <Loading /> : heros.length ? 
        heros.map(renderHero) : Empty()}
    </ul>
  );
}

\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`再次回到之前的用 React 写的“英雄列表”

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。`,index:9,start:78,end:118,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
hideInToc: true
---

 # Review components

\`\`\`tsx {all|3,19|4,18|9-14}
import * as React from 'react';

const Empty = () => 'No Heros.';
const Loading = () => 'Loading, fetching heros...' as unknown as JSX.Element;

export default function App() {
  const [heros, setHeros] = React.useState([]);

  const renderHero = (item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  );

  return (
    <ul id="user-list">
      {loading ? <Loading /> : heros.length ? 
        heros.map(renderHero) : Empty()}
    </ul>
  );
}

\`\`\`

<!-- 
再次回到之前的用 React 写的“英雄列表”

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。
 -->
`,title:"Review components",level:1,content:`# Review components

\`\`\`tsx {all|3,19|4,18|9-14}
import * as React from 'react';

const Empty = () => 'No Heros.';
const Loading = () => 'Loading, fetching heros...' as unknown as JSX.Element;

export default function App() {
  const [heros, setHeros] = React.useState([]);

  const renderHero = (item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  );

  return (
    <ul id="user-list">
      {loading ? <Loading /> : heros.length ? 
        heros.map(renderHero) : Empty()}
    </ul>
  );
}

\`\`\``,frontmatter:{hideInToc:!0},note:`再次回到之前的用 React 写的“英雄列表”

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。`,index:1,start:78,end:118},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>再次回到之前的用 React 写的“英雄列表”</p>
<p>之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。</p>
<p>（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。</p>
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:XC,meta:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md",slide:{raw:`---
title: Lifecycle
clicks: 2
---

# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

<img src="/public/images/old-lifecycle.webp" class="mt-4"/>

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

<img src="/public/images/new-lifecycle.webp"  class="mt-4" />

</div>

</div>

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>

<!-- 
v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount

 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

<img src="/public/images/old-lifecycle.webp" class="mt-4"/>

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

<img src="/public/images/new-lifecycle.webp"  class="mt-4" />

</div>

</div>

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>`,frontmatter:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"},note:`v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount`,index:10,start:0,end:57,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",raw:`---
title: Lifecycle
clicks: 2
---

# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

<img src="/public/images/old-lifecycle.webp" class="mt-4"/>

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

<img src="/public/images/new-lifecycle.webp"  class="mt-4" />

</div>

</div>

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>

<!-- 
v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount

 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

<img src="/public/images/old-lifecycle.webp" class="mt-4"/>

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

<img src="/public/images/new-lifecycle.webp"  class="mt-4" />

</div>

</div>

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>`,frontmatter:{title:"Lifecycle",clicks:2},note:`v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -> getDerivedStateFromProps -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount`,index:0,start:0,end:57},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",noteHTML:`<p>v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；</p>
<p>这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 的生命周期和变动。</p>
<p>旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。</p>
<p>那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段</p>
<p>挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数 -&gt; getDerivedStateFromProps -&gt; render -&gt; componentDidMount</p>
<p>更新阶段首先会执行 getDerivedStateFromProps -&gt; shouldComponentUpdate -&gt; render -&gt; getSnapshotBeforeUpdate -&gt; componentDidUpdate</p>
<p>销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:hw,meta:{title:"Hooks",srcSequence:"./pages/lesson_1/index.md,./hooks.md",slide:{raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks",srcSequence:"./pages/lesson_1/index.md,./hooks.md"},note:"",index:11,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks"},note:"",index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ww,meta:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md",slide:{raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn

<div class="mt-[36px]" />

# Material UI

https://mui.com/material-ui/getting-started/installation/

<div class="mt-[36px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn

<div class="mt-[36px]" />

# Material UI

https://mui.com/material-ui/getting-started/installation/

<div class="mt-[36px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web`,frontmatter:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md"},index:12,start:0,end:21,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn

<div class="mt-[36px]" />

# Material UI

https://mui.com/material-ui/getting-started/installation/

<div class="mt-[36px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn

<div class="mt-[36px]" />

# Material UI

https://mui.com/material-ui/getting-started/installation/

<div class="mt-[36px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web`,frontmatter:{title:"Ant Design"},index:0,start:0,end:21},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Hw,meta:{title:"UmiJS",srcSequence:"./pages/lesson_1/index.md,./umijs.md",slide:{raw:`---
title: UmiJS
---

# UmiJS

https://umijs.org/docs/introduce/introduce

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/docs/getting-started

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,title:"UmiJS",level:1,content:`# UmiJS

https://umijs.org/docs/introduce/introduce

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/docs/getting-started

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,frontmatter:{title:"UmiJS",srcSequence:"./pages/lesson_1/index.md,./umijs.md"},index:13,start:0,end:19,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",raw:`---
title: UmiJS
---

# UmiJS

https://umijs.org/docs/introduce/introduce

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/docs/getting-started

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,title:"UmiJS",level:1,content:`# UmiJS

https://umijs.org/docs/introduce/introduce

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/docs/getting-started

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,frontmatter:{title:"UmiJS"},index:0,start:0,end:19},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Nw,meta:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./warm-up.md",slide:{raw:`---
transition: slide-up
---

# Thinking

为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

\`\`\`vue {3}
<!-- BlogPost.vue -->
<template>
  <h4 @click="onClick">{{ title }}</h4>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>(['title'])
const emits = defineEmits(['click'])
const onClick = () => emits('click', props.title)
<\/script>
\`\`\`

\`\`\`vue {2}
<template>
    <BlogPost title="My journey with Vue" @click="onClick" />
</template>

<script setup>
const onClick = (title: string) => console.log(title)
<\/script>
\`\`\`

<!-- 
这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说

delay 2000 （点击右上角时间重置时间）

- OK，其他人还有别的答案吗？
- OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！

接下来，我们进入这次培训的主题，React！
 -->`,title:"Thinking",level:1,content:`# Thinking

为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

\`\`\`vue {3}
<!-- BlogPost.vue -->
<template>
  <h4 @click="onClick">{{ title }}</h4>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>(['title'])
const emits = defineEmits(['click'])
const onClick = () => emits('click', props.title)
<\/script>
\`\`\`

\`\`\`vue {2}
<template>
    <BlogPost title="My journey with Vue" @click="onClick" />
</template>

<script setup>
const onClick = (title: string) => console.log(title)
<\/script>
\`\`\``,frontmatter:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./warm-up.md"},note:`这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说

delay 2000 （点击右上角时间重置时间）

- OK，其他人还有别的答案吗？
- OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！

接下来，我们进入这次培训的主题，React！`,index:14,start:0,end:45,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/warm-up.md",raw:`---
transition: slide-up
---

# Thinking

为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

\`\`\`vue {3}
<!-- BlogPost.vue -->
<template>
  <h4 @click="onClick">{{ title }}</h4>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>(['title'])
const emits = defineEmits(['click'])
const onClick = () => emits('click', props.title)
<\/script>
\`\`\`

\`\`\`vue {2}
<template>
    <BlogPost title="My journey with Vue" @click="onClick" />
</template>

<script setup>
const onClick = (title: string) => console.log(title)
<\/script>
\`\`\`

<!-- 
这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说

delay 2000 （点击右上角时间重置时间）

- OK，其他人还有别的答案吗？
- OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！

接下来，我们进入这次培训的主题，React！
 -->`,title:"Thinking",level:1,content:`# Thinking

为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

\`\`\`vue {3}
<!-- BlogPost.vue -->
<template>
  <h4 @click="onClick">{{ title }}</h4>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>(['title'])
const emits = defineEmits(['click'])
const onClick = () => emits('click', props.title)
<\/script>
\`\`\`

\`\`\`vue {2}
<template>
    <BlogPost title="My journey with Vue" @click="onClick" />
</template>

<script setup>
const onClick = (title: string) => console.log(title)
<\/script>
\`\`\``,frontmatter:{transition:"slide-up",title:"Thinking"},note:`这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说

delay 2000 （点击右上角时间重置时间）

- OK，其他人还有别的答案吗？
- OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！

接下来，我们进入这次培训的主题，React！`,index:0,start:0,end:45},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/warm-up.md",noteHTML:`<p>这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？
这里给大家两分钟时间思考一下，有想法的可以直接说</p>
<p>delay 2000 （点击右上角时间重置时间）</p>
<ul>
<li>OK，其他人还有别的答案吗？</li>
<li>OK，时间到了哈，这个问题一直保留到我们下次培训的时候揭晓！</li>
</ul>
<p>接下来，我们进入这次培训的主题，React！</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Uw,meta:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>',srcSequence:"./pages/lesson_2/index.md",slide:{raw:null,title:'<span class="text-[60px]">Lesson 2</span>',level:1,content:'# <span class="text-[60px]">Lesson 2</span>',frontmatter:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>',srcSequence:"./pages/lesson_2/index.md"},index:15,start:0,end:7,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",raw:`---
layout: 'center'
hideInToc: true
---

# <span class="text-[60px]">Lesson 2</span>
`,title:'<span class="text-[60px]">Lesson 2</span>',level:1,content:'# <span class="text-[60px]">Lesson 2</span>',frontmatter:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>'},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/lesson_2/index.md
---

# Lesson Two`,title:"Lesson Two",level:1,content:"# Lesson Two",frontmatter:{},index:2,start:19,end:24},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Gw,meta:{title:"Component Definition",srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
title: Component Definition
---

# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

\`\`\`tsx {none|3|5|all}
// HeroItem.tsx

const HeroItem = () => {}

export default HeroItem;
\`\`\`

\`\`\`tsx {none|7|6} {at:2}
import HeroItem from './HeroItem'

export default App() {
  return (
    <ul id="user-list">
      {/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */} <== 这是注释 
      {heros.map(h => <HeroItem key={h.id} />)}
    </ul>
  );
}
\`\`\`

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号
 -->
`,title:"Component Definition",level:1,content:`# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

\`\`\`tsx {none|3|5|all}
// HeroItem.tsx

const HeroItem = () => {}

export default HeroItem;
\`\`\`

\`\`\`tsx {none|7|6} {at:2}
import HeroItem from './HeroItem'

export default App() {
  return (
    <ul id="user-list">
      {/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */} <== 这是注释 
      {heros.map(h => <HeroItem key={h.id} />)}
    </ul>
  );
}
\`\`\`

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{title:"Component Definition",srcSequence:"./pages/lesson_2/index.md,./component-definition.md"},note:`第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号`,index:16,start:0,end:45,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",raw:`---
title: Component Definition
---

# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

\`\`\`tsx {none|3|5|all}
// HeroItem.tsx

const HeroItem = () => {}

export default HeroItem;
\`\`\`

\`\`\`tsx {none|7|6} {at:2}
import HeroItem from './HeroItem'

export default App() {
  return (
    <ul id="user-list">
      {/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */} <== 这是注释 
      {heros.map(h => <HeroItem key={h.id} />)}
    </ul>
  );
}
\`\`\`

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号
 -->
`,title:"Component Definition",level:1,content:`# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

\`\`\`tsx {none|3|5|all}
// HeroItem.tsx

const HeroItem = () => {}

export default HeroItem;
\`\`\`

\`\`\`tsx {none|7|6} {at:2}
import HeroItem from './HeroItem'

export default App() {
  return (
    <ul id="user-list">
      {/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */} <== 这是注释 
      {heros.map(h => <HeroItem key={h.id} />)}
    </ul>
  );
}
\`\`\`

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{title:"Component Definition"},note:`第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号`,index:0,start:0,end:45},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",noteHTML:`<p>第一步，我们需要定义组件并且将它导出给别的组件使用；</p>
<p>（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；</p>
<p>（click）然后将 HeroItem 函数默认导出</p>
<p>（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。</p>
<p>（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号</p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:l6,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
hideInToc: true
---

# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gradient-red">第二步：声明组件接受的属性 props 以及类型</span>

\`\`\`tsx {all|4-10|2,13|12}
// HeroItem.tsx
import type { FunctionComponentFactory as FC } from 'react'

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {}
const HeroItem: FC<Props> = (props) => {}

export default HeroItem;
\`\`\`

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了
 -->
`,title:"Component Definition (2/3)",level:1,content:`# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gradient-red">第二步：声明组件接受的属性 props 以及类型</span>

\`\`\`tsx {all|4-10|2,13|12}
// HeroItem.tsx
import type { FunctionComponentFactory as FC } from 'react'

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {}
const HeroItem: FC<Props> = (props) => {}

export default HeroItem;
\`\`\`

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"},note:`第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了`,index:17,start:45,end:89,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",raw:`---
hideInToc: true
---

# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gradient-red">第二步：声明组件接受的属性 props 以及类型</span>

\`\`\`tsx {all|4-10|2,13|12}
// HeroItem.tsx
import type { FunctionComponentFactory as FC } from 'react'

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {}
const HeroItem: FC<Props> = (props) => {}

export default HeroItem;
\`\`\`

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了
 -->
`,title:"Component Definition (2/3)",level:1,content:`# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gradient-red">第二步：声明组件接受的属性 props 以及类型</span>

\`\`\`tsx {all|4-10|2,13|12}
// HeroItem.tsx
import type { FunctionComponentFactory as FC } from 'react'

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {}
const HeroItem: FC<Props> = (props) => {}

export default HeroItem;
\`\`\`

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{hideInToc:!0},note:`第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了`,index:1,start:45,end:89},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",noteHTML:`<p>第二步，声明组件接受的属性 props 并且定义它的类型</p>
<p>首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性</p>
<p>（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来</p>
<p>（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型</p>
<p>（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式</p>
<p>接下来就是最后一步了</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:d6,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
hideInToc: true
---

# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gradient-red">第三步：组件内返回 JSX</span>

\`\`\`tsx {all|5-9}
// HeroItem.tsx

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}
\`\`\`

<!-- 
最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。
 -->
`,title:"Component Definition (3/3)",level:1,content:`# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gradient-red">第三步：组件内返回 JSX</span>

\`\`\`tsx {all|5-9}
// HeroItem.tsx

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"},note:`最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。`,index:18,start:89,end:122,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",raw:`---
hideInToc: true
---

# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gradient-red">第三步：组件内返回 JSX</span>

\`\`\`tsx {all|5-9}
// HeroItem.tsx

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}
\`\`\`

<!-- 
最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。
 -->
`,title:"Component Definition (3/3)",level:1,content:`# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gradient-red">第三步：组件内返回 JSX</span>

\`\`\`tsx {all|5-9}
// HeroItem.tsx

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}
\`\`\``,frontmatter:{hideInToc:!0},note:`最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。`,index:2,start:89,end:122},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",noteHTML:`<p>最后，我们需要在组件内部返回 JSX</p>
<p>我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。</p>
<p>至此，我们的组件就创建完成了。</p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:m6,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
hideInToc: true
---

# Review \`HeroItem.tsx\`

\`\`\`tsx
// HeroItem.tsx
import * as React from 'react';
import type { FunctionComponentFactory as FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}

export default HeroItem;
\`\`\`


<!-- 
OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）
 -->`,title:"Review `HeroItem.tsx`",level:1,content:`# Review \`HeroItem.tsx\`

\`\`\`tsx
// HeroItem.tsx
import * as React from 'react';
import type { FunctionComponentFactory as FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}

export default HeroItem;
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"},note:`OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）`,index:19,start:122,end:160,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",raw:`---
hideInToc: true
---

# Review \`HeroItem.tsx\`

\`\`\`tsx
// HeroItem.tsx
import * as React from 'react';
import type { FunctionComponentFactory as FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}

export default HeroItem;
\`\`\`


<!-- 
OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）
 -->`,title:"Review `HeroItem.tsx`",level:1,content:`# Review \`HeroItem.tsx\`

\`\`\`tsx
// HeroItem.tsx
import * as React from 'react';
import type { FunctionComponentFactory as FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}

export default HeroItem;
\`\`\``,frontmatter:{hideInToc:!0},note:`OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）`,index:3,start:122,end:160},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/component-definition.md",noteHTML:`<p>OK，最后这是全部 HeroItem 的代码。</p>
<p>到这块为止，大家有什么问题吗？（waiting 2min）</p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:w6,meta:{title:"State Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/state.md",slide:{raw:`---
title: State Hooks
clicks: 6
hideInToc: true
---

# State Hooks

State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：

- \`useState\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1 }" >声明可以直接更新的状态变量；</span>
- \`useReducer\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks >= 3 }" >声明一个状态变量，参数为更新逻辑；</span>

<br />

<template v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1">

\`\`\`tsx {2,3|6,9,12} {at:1}
export default function App() {
  const [heros, setHeros] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("heros.json")
      .then(({ users }) => {
        setHeros(users);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
}
\`\`\`

</template>

<template v-if="$slidev.nav.clicks >= 3">

\`\`\`tsx {7|1-4|7|12} {at:3}
function reducer(state, action: { type: string, payload: HeroItem[] }) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer<HeroItem[]>(reducer, [] /* ,initFn */);

  React.useEffect(() => {
    fetch("heros.json")
      .then(({ users }) => {
        dispatch({ type: "setHeros", payload: users });
      })
      .catch((error) => console.error(error));
  }, []);
}
\`\`\`

</template>

<!--
State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)

 -->
`,title:"State Hooks",level:1,content:`# State Hooks

State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：

- \`useState\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1 }" >声明可以直接更新的状态变量；</span>
- \`useReducer\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks >= 3 }" >声明一个状态变量，参数为更新逻辑；</span>

<br />

<template v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1">

\`\`\`tsx {2,3|6,9,12} {at:1}
export default function App() {
  const [heros, setHeros] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("heros.json")
      .then(({ users }) => {
        setHeros(users);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
}
\`\`\`

</template>

<template v-if="$slidev.nav.clicks >= 3">

\`\`\`tsx {7|1-4|7|12} {at:3}
function reducer(state, action: { type: string, payload: HeroItem[] }) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer<HeroItem[]>(reducer, [] /* ,initFn */);

  React.useEffect(() => {
    fetch("heros.json")
      .then(({ users }) => {
        dispatch({ type: "setHeros", payload: users });
      })
      .catch((error) => console.error(error));
  }, []);
}
\`\`\`

</template>`,frontmatter:{title:"State Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/state.md"},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:20,start:0,end:84,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/state.md",raw:`---
title: State Hooks
clicks: 6
hideInToc: true
---

# State Hooks

State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：

- \`useState\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1 }" >声明可以直接更新的状态变量；</span>
- \`useReducer\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks >= 3 }" >声明一个状态变量，参数为更新逻辑；</span>

<br />

<template v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1">

\`\`\`tsx {2,3|6,9,12} {at:1}
export default function App() {
  const [heros, setHeros] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("heros.json")
      .then(({ users }) => {
        setHeros(users);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
}
\`\`\`

</template>

<template v-if="$slidev.nav.clicks >= 3">

\`\`\`tsx {7|1-4|7|12} {at:3}
function reducer(state, action: { type: string, payload: HeroItem[] }) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer<HeroItem[]>(reducer, [] /* ,initFn */);

  React.useEffect(() => {
    fetch("heros.json")
      .then(({ users }) => {
        dispatch({ type: "setHeros", payload: users });
      })
      .catch((error) => console.error(error));
  }, []);
}
\`\`\`

</template>

<!--
State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)

 -->
`,title:"State Hooks",level:1,content:`# State Hooks

State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：

- \`useState\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1 }" >声明可以直接更新的状态变量；</span>
- \`useReducer\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks >= 3 }" >声明一个状态变量，参数为更新逻辑；</span>

<br />

<template v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks >= 1">

\`\`\`tsx {2,3|6,9,12} {at:1}
export default function App() {
  const [heros, setHeros] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("heros.json")
      .then(({ users }) => {
        setHeros(users);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
}
\`\`\`

</template>

<template v-if="$slidev.nav.clicks >= 3">

\`\`\`tsx {7|1-4|7|12} {at:3}
function reducer(state, action: { type: string, payload: HeroItem[] }) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer<HeroItem[]>(reducer, [] /* ,initFn */);

  React.useEffect(() => {
    fetch("heros.json")
      .then(({ users }) => {
        dispatch({ type: "setHeros", payload: users });
      })
      .catch((error) => console.error(error));
  }, []);
}
\`\`\`

</template>`,frontmatter:{title:"State Hooks",clicks:6,hideInToc:!0},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:0,start:0,end:84},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/state.md",noteHTML:`<p>State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；</p>
<p>共有两个 hooks，第一个是 useState，第二个则是 useReducer；</p>
<p>（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；</p>
<p>同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；</p>
<p>（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；</p>
<p>（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；</p>
<p>（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；</p>
<p>（click）第二个参数是初始值，这里我们同样了设置了空数组；</p>
<p>第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。</p>
<p>（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。</p>
<p>(click arrow-left to back)</p>
`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:R6,meta:{title:"Context Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/context.md",slide:{raw:`---
title: Context Hooks
hideInToc: true
---

# Context Hooks

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-55px)]" />

<!--
Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象

-->
`,title:"Context Hooks",level:1,content:`# Context Hooks

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{title:"Context Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/context.md"},note:`Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象`,index:21,start:0,end:24,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/context.md",raw:`---
title: Context Hooks
hideInToc: true
---

# Context Hooks

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-55px)]" />

<!--
Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象

-->
`,title:"Context Hooks",level:1,content:`# Context Hooks

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{title:"Context Hooks",hideInToc:!0},note:`Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象`,index:0,start:0,end:24},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/context.md",noteHTML:`<p>Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。</p>
<p>如何使用它不在本节课讲述，现在只是给大家看下大致的使用。</p>
<p>-&gt; context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。</p>
<p>-&gt; App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；</p>
<p>-&gt; Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:B6,meta:{title:"Ref Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/ref.md",slide:{raw:`---
title: Ref Hooks
hideInToc: true
---

# Ref Hooks

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：引用渲染不需要的值；
- \`useImperativeHandle\`：自定义公开 ref 的句柄；

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-135px)] mt-[16px]" />

<!--
引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。

首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；

useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。

接下来给大家演示下这两个 Hooks 的用法：

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref
 -->
`,title:"Ref Hooks",level:1,content:`# Ref Hooks

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：引用渲染不需要的值；
- \`useImperativeHandle\`：自定义公开 ref 的句柄；

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-135px)] mt-[16px]" />`,frontmatter:{title:"Ref Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/ref.md"},note:`引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。

首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；

useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。

接下来给大家演示下这两个 Hooks 的用法：

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref`,index:22,start:0,end:26,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/ref.md",raw:`---
title: Ref Hooks
hideInToc: true
---

# Ref Hooks

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：引用渲染不需要的值；
- \`useImperativeHandle\`：自定义公开 ref 的句柄；

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-135px)] mt-[16px]" />

<!--
引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。

首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；

useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。

接下来给大家演示下这两个 Hooks 的用法：

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref
 -->
`,title:"Ref Hooks",level:1,content:`# Ref Hooks

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：引用渲染不需要的值；
- \`useImperativeHandle\`：自定义公开 ref 的句柄；

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx" class="w-full h-[calc(100%-135px)] mt-[16px]" />`,frontmatter:{title:"Ref Hooks",hideInToc:!0},note:`引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。

首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；

useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。

接下来给大家演示下这两个 Hooks 的用法：

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref`,index:0,start:0,end:26},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/ref.md",noteHTML:`<p>引用 Hooks 是允许组件保存一些不用于渲染的数据。他们之前实际上是有一定关联的。</p>
<p>首先，useRef 是引用渲染不需要的数据，而且修改它的引用不会触发 React 重新渲染；</p>
<p>useImperativeHandle 等价于 Vue3 中的 defineExpose，用来声明组件实例公开的 API 和属性。</p>
<p>接下来给大家演示下这两个 Hooks 的用法：</p>
<p>先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref</p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:U6,meta:{title:"Effect Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md",slide:{raw:`---
title: Effect Hooks
clicks: 2
hideInToc: true
---

# Effect Hooks

用以处理**副作用**的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。

- \`useEffect\`：处理副作用，在 React 挂载 DOM 之前**异步**执行；
- \`useLayoutEffect\`：\`useEffect\` 的变体，在浏览器绘制 DOM 之前**同步**执行；

<br />

<div v-show="$slidev.nav.clicks === 1">

\`\`\`tsx {4-12}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    fetch('heros.json'))
      .then((result) => result.json())
      .then(({ users }) => {
        setHeros(users);
      })
  }, []);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<div v-show="$slidev.nav.clicks === 2">

\`\`\`tsx {4-9}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useLayoutEffect(() => {
    const $list = document.querySelector('#user-list');
    const { width, height } = $list.getBoundingClientRect();
    console.log(width, height);
  }, [heros]);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<!--
还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。
 -->
`,title:"Effect Hooks",level:1,content:`# Effect Hooks

用以处理**副作用**的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。

- \`useEffect\`：处理副作用，在 React 挂载 DOM 之前**异步**执行；
- \`useLayoutEffect\`：\`useEffect\` 的变体，在浏览器绘制 DOM 之前**同步**执行；

<br />

<div v-show="$slidev.nav.clicks === 1">

\`\`\`tsx {4-12}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    fetch('heros.json'))
      .then((result) => result.json())
      .then(({ users }) => {
        setHeros(users);
      })
  }, []);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<div v-show="$slidev.nav.clicks === 2">

\`\`\`tsx {4-9}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useLayoutEffect(() => {
    const $list = document.querySelector('#user-list');
    const { width, height } = $list.getBoundingClientRect();
    console.log(width, height);
  }, [heros]);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>`,frontmatter:{title:"Effect Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md"},note:`还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。`,index:23,start:0,end:71,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/effect.md",raw:`---
title: Effect Hooks
clicks: 2
hideInToc: true
---

# Effect Hooks

用以处理**副作用**的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。

- \`useEffect\`：处理副作用，在 React 挂载 DOM 之前**异步**执行；
- \`useLayoutEffect\`：\`useEffect\` 的变体，在浏览器绘制 DOM 之前**同步**执行；

<br />

<div v-show="$slidev.nav.clicks === 1">

\`\`\`tsx {4-12}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    fetch('heros.json'))
      .then((result) => result.json())
      .then(({ users }) => {
        setHeros(users);
      })
  }, []);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<div v-show="$slidev.nav.clicks === 2">

\`\`\`tsx {4-9}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useLayoutEffect(() => {
    const $list = document.querySelector('#user-list');
    const { width, height } = $list.getBoundingClientRect();
    console.log(width, height);
  }, [heros]);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<!--
还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。
 -->
`,title:"Effect Hooks",level:1,content:`# Effect Hooks

用以处理**副作用**的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。

- \`useEffect\`：处理副作用，在 React 挂载 DOM 之前**异步**执行；
- \`useLayoutEffect\`：\`useEffect\` 的变体，在浏览器绘制 DOM 之前**同步**执行；

<br />

<div v-show="$slidev.nav.clicks === 1">

\`\`\`tsx {4-12}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    fetch('heros.json'))
      .then((result) => result.json())
      .then(({ users }) => {
        setHeros(users);
      })
  }, []);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>

<div v-show="$slidev.nav.clicks === 2">

\`\`\`tsx {4-9}
export default function App() {
  const [heros, setHeros] = React.useState([]);

  React.useLayoutEffect(() => {
    const $list = document.querySelector('#user-list');
    const { width, height } = $list.getBoundingClientRect();
    console.log(width, height);
  }, [heros]);

  return (
    <ul class="user-list">{/* ... */}</ul>
  )
}
\`\`\`

</div>`,frontmatter:{title:"Effect Hooks",clicks:2,hideInToc:!0},note:`还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。`,index:0,start:0,end:71},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/effect.md",noteHTML:`<p>还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。</p>
<p>第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；</p>
<p>如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。</p>
<p>useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。</p>
<p>useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；</p>
<p>useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。</p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:W6,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md",slide:{raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"},index:24,start:37,end:43,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0},index:6,start:37,end:43},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Y6,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md",slide:{raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"},index:25,start:43,end:48,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0},index:7,start:43,end:48},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",component:wb,meta:{layout:"end"}}],Ke=Z6,so=[{name:"play",path:"/",component:K2,children:[...Ke]},{name:"print",path:"/print",component:bb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(n){if(!no.remote||no.remote===n.query.password)return!0;if(no.remote&&n.query.password===void 0){const s=prompt("Enter password");if(no.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};so.push({path:"/presenter/print",component:()=>Fl(()=>import("./PresenterPrint-bc0d431b.js"),["assets/PresenterPrint-bc0d431b.js","assets/NoteDisplay-934be9c2.js"])}),so.push({name:"notes",path:"/notes",component:()=>Fl(()=>import("./NotesView-95b93b2d.js"),["assets/NotesView-95b93b2d.js","assets/NoteDisplay-934be9c2.js"]),beforeEnter:e}),so.push({name:"presenter",path:"/presenter/:no",component:()=>Fl(()=>import("./Presenter-f27f8c4a.js"),["assets/Presenter-f27f8c4a.js","assets/NoteDisplay-934be9c2.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),so.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const mt=T1({history:R8("/react-shared-ppt/"),routes:so});function G6(e,n,{mode:s="replace"}={}){return R({get(){const o=mt.currentRoute.value.query[e];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){tt(()=>{mt[C(s)]({query:{...mt.currentRoute.value.query,[e]:o}})})}})}const bf=U(0);tt(()=>{mt.afterEach(async()=>{await tt(),bf.value+=1})});const kf=U(0),Pt=R(()=>mt.currentRoute.value),dn=R(()=>Pt.value.query.print!==void 0),Q6=R(()=>Pt.value.query.print==="clicks"),Nn=R(()=>Pt.value.query.embedded!==void 0),Ct=R(()=>Pt.value.path.startsWith("/presenter")),eS=R(()=>Pt.value.path.startsWith("/notes")),fo=R(()=>dn.value&&!Q6.value),wa=R(()=>Pt.value.query.password),tS=R(()=>!Ct.value&&(!Se.remote||wa.value===Se.remote)),bu=G6("clicks","0"),Cf=R(()=>Ke.length-1),nS=R(()=>Pt.value.path),Ue=R(()=>parseInt(nS.value.split(/\//g).slice(-1)[0])||1);R(()=>nr(Ue.value));const ct=R(()=>Ke.find(e=>e.path===`${Ue.value}`));R(()=>{var e,n,s;return(s=(n=(e=ct.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});R(()=>{var e,n;return((n=(e=ct.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ue.value===1?"cover":"default")});const Ar=R(()=>Ke.find(e=>e.path===`${Math.min(Ke.length,Ue.value+1)}`)),sS=R(()=>Ke.find(e=>e.path===`${Math.max(1,Ue.value-1)}`)),oS=R(()=>{var e,n;return bf.value,((n=(e=ct.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Ot=R({get(){if(fo.value)return 99999;let e=+(bu.value||0);return isNaN(e)&&(e=0),e},set(e){bu.value=e.toString()}}),Hl=R(()=>{var e,n;return+(((n=(e=ct.value)==null?void 0:e.meta)==null?void 0:n.clicks)??oS.value.length)}),lS=R(()=>Ue.value<Ke.length-1||Ot.value<Hl.value),rS=R(()=>Ue.value>1||Ot.value>0),aS=R(()=>Ke.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(vi(e,n),e),[])),iS=R(()=>_i(aS.value,ct.value));R(()=>xi(iS.value));const cS=R(()=>FS(kf.value,ct.value,sS.value));me(ct,(e,n)=>{kf.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function On(){Hl.value<=Ot.value?Io():Ot.value+=1}async function In(){Ot.value<=0?await Po():Ot.value-=1}function nr(e){return Ct.value?`/presenter/${e}`:`/${e}`}function Io(){const e=Math.min(Ke.length,Ue.value+1);return Ls(e)}async function Po(e=!0){const n=Math.max(1,Ue.value-1);await Ls(n),e&&Hl.value&&mt.replace({query:{...Pt.value.query,clicks:Hl.value}})}function Ls(e,n){return mt.push({path:nr(e),query:{...Pt.value.query,clicks:n}})}function uS(e){const n=U(0),{direction:s,distanceX:o,distanceY:l}=Wv(e,{onSwipeStart(r){r.pointerType==="touch"&&(Ro.value||(n.value=ua()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Ro.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===un.LEFT?On():In():(i/window.innerHeight>.4||i>200)&&(s.value===un.DOWN?Po():Io())}})}async function Sa(){const{saveAs:e}=await Fl(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(Sd(Se.download)?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/react-shared-ppt/slidev-exported.pdf",`${Se.title}.pdf`)}async function pS(e){var n,s;if(e==null){const o=(s=(n=ct.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function vi(e,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?vi(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:!!((a=n.meta)!=null&&a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function _i(e,n,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=_i(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function xi(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:xi(s.children,n+1)}))}const dS={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function fS(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:dS[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...e,name:s}}function FS(e,n,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Se.transition),fS(o,e<0)}function hS(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");ri({title:e}),Cg(Se.htmlAttrs),Lg(`${e} - shared`),Ng(`${e} - drawings`);const n=`${location.origin}_${Rg()}`;function s(){eS.value||!Ct.value&&!$g.includes(location.host.split(":")[0])||(Ct.value?(Xs("page",+Ue.value),Xs("clicks",Ot.value)):(Xs("viewerPage",+Ue.value),Xs("viewerClicks",Ot.value)),Xs("lastUpdate",{id:n,type:Ct.value?"presenter":"viewer",time:new Date().getTime()}))}mt.afterEach(s),me(Ot,s),Mg(o=>{var r;mt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ue.value||+Ot.value!=+o.clicks)&&mt.replace({path:nr(o.page),query:{...mt.currentRoute.value.query,clicks:o.clicks||0}})})}const mS=we({__name:"App",setup(e){return K(se),hS(),(n,s)=>{const o=Ps("RouterView"),l=Ps("StarportCarrier");return E(),z(Ae,null,[X(o),X(l)],64)}}}),yS=le(mS,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/App.vue"]]);function $r(e){return e!==null&&typeof e=="object"}function Ea(e,n,s=".",o){if(!$r(n))return Ea(e,{},s,o);const l=Object.assign({},n);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:$r(a)&&$r(l[r])?l[r]=Ea(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function gS(e){return(...n)=>n.reduce((s,o)=>Ea(s,o,"",e),{})}const vS=gS(),wf=1/60*1e3,_S=typeof performance<"u"?()=>performance.now():()=>Date.now(),Sf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(_S()),wf);function xS(e){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const f=d&&l,F=f?n:s;return u&&a.add(c),F.indexOf(c)===-1&&(F.push(c),f&&l&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const bS=40;let Aa=!0,Ho=!1,$a=!1;const Os={delta:0,timestamp:0},Xo=["read","update","preRender","render","postRender"],sr=Xo.reduce((e,n)=>(e[n]=xS(()=>Ho=!0),e),{}),Ra=Xo.reduce((e,n)=>{const s=sr[n];return e[n]=(o,l=!1,r=!1)=>(Ho||wS(),s.schedule(o,l,r)),e},{}),kS=Xo.reduce((e,n)=>(e[n]=sr[n].cancel,e),{});Xo.reduce((e,n)=>(e[n]=()=>sr[n].process(Os),e),{});const CS=e=>sr[e].process(Os),Ef=e=>{Ho=!1,Os.delta=Aa?wf:Math.max(Math.min(e-Os.timestamp,bS),1),Os.timestamp=e,$a=!0,Xo.forEach(CS),$a=!1,Ho&&(Aa=!1,Sf(Ef))},wS=()=>{Ho=!0,Aa=!0,$a||Sf(Ef)},Af=()=>Os;function $f(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}var bi=function(){},Bo=function(){};bi=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Bo=function(e,n){if(!e)throw new Error(n)};const Ta=(e,n,s)=>Math.min(Math.max(s,e),n),Rr=.001,SS=.01,ku=10,ES=.05,AS=1;function $S({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;bi(e<=ku*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=Ta(ES,AS,a),e=Ta(SS,ku,e/1e3),a<1?(l=u=>{const d=u*a,f=d*e,F=d-s,h=Oa(u,a),m=Math.exp(-f);return Rr-F/h*m},r=u=>{const f=u*a*e,F=f*s+s,h=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),g=Oa(Math.pow(u,2),a);return(-l(u)+Rr>0?-1:1)*((F-h)*m)/g}):(l=u=>{const d=Math.exp(-u*e),f=(u-s)*e+1;return-Rr+d*f},r=u=>{const d=Math.exp(-u*e),f=(s-u)*(e*e);return d*f});const i=5/e,c=TS(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const RS=12;function TS(e,n,s){let o=s;for(let l=1;l<RS;l++)o=o-e(o)/n(o);return o}function Oa(e,n){return e*Math.sqrt(1-n*n)}const OS=["duration","bounce"],IS=["stiffness","damping","mass"];function Cu(e,n){return n.some(s=>e[s]!==void 0)}function PS(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Cu(e,IS)&&Cu(e,OS)){const s=$S(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ki(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=e,r=$f(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:F}=PS(r),h=wu,m=wu;function g(){const v=d?-(d/1e3):0,k=s-n,x=c/(2*Math.sqrt(i*u)),b=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),x<1){const w=Oa(b,x);h=T=>{const H=Math.exp(-x*b*T);return s-H*((v+x*b*k)/w*Math.sin(w*T)+k*Math.cos(w*T))},m=T=>{const H=Math.exp(-x*b*T);return x*b*H*(Math.sin(w*T)*(v+x*b*k)/w+k*Math.cos(w*T))-H*(Math.cos(w*T)*(v+x*b*k)-w*k*Math.sin(w*T))}}else if(x===1)h=w=>s-Math.exp(-b*w)*(k+(v+b*k)*w);else{const w=b*Math.sqrt(x*x-1);h=T=>{const H=Math.exp(-x*b*T),N=Math.min(w*T,300);return s-H*((v+x*b*k)*Math.sinh(N)+w*k*Math.cosh(N))/w}}}return g(),{next:v=>{const k=h(v);if(F)a.done=v>=f;else{const x=m(v)*1e3,b=Math.abs(x)<=o,w=Math.abs(s-k)<=l;a.done=b&&w}return a.value=a.done?s:k,a},flipTarget:()=>{d=-d,[n,s]=[s,n],g()}}}ki.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const wu=e=>0,Rf=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},Ci=(e,n,s)=>-s*e+s*n+e,Tf=(e,n)=>s=>Math.max(Math.min(s,n),e),Fo=e=>e%1?Number(e.toFixed(5)):e,Lo=/(-)?([\d]*\.?[\d])+/g,Ia=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,HS=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wo(e){return typeof e=="string"}const zo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ho=Object.assign(Object.assign({},zo),{transform:Tf(0,1)}),al=Object.assign(Object.assign({},zo),{default:1}),wi=e=>({test:n=>Wo(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Vn=wi("deg"),mo=wi("%"),he=wi("px"),Su=Object.assign(Object.assign({},mo),{parse:e=>mo.parse(e)/100,transform:e=>mo.transform(e*100)}),Si=(e,n)=>s=>!!(Wo(s)&&HS.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Of=(e,n,s)=>o=>{if(!Wo(o))return o;const[l,r,a,i]=o.match(Lo);return{[e]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Gn={test:Si("hsl","hue"),parse:Of("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+mo.transform(Fo(n))+", "+mo.transform(Fo(s))+", "+Fo(ho.transform(o))+")"},BS=Tf(0,255),Tr=Object.assign(Object.assign({},zo),{transform:e=>Math.round(BS(e))}),En={test:Si("rgb","red"),parse:Of("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Tr.transform(e)+", "+Tr.transform(n)+", "+Tr.transform(s)+", "+Fo(ho.transform(o))+")"};function LS(e){let n="",s="",o="",l="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Pa={test:Si("#"),parse:LS,transform:En.transform},Ft={test:e=>En.test(e)||Pa.test(e)||Gn.test(e),parse:e=>En.test(e)?En.parse(e):Gn.test(e)?Gn.parse(e):Pa.parse(e),transform:e=>Wo(e)?e:e.hasOwnProperty("red")?En.transform(e):Gn.transform(e)},If="${c}",Pf="${n}";function MS(e){var n,s,o,l;return isNaN(e)&&Wo(e)&&((s=(n=e.match(Lo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=e.match(Ia))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Hf(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(Ia);o&&(s=o.length,e=e.replace(Ia,If),n.push(...o.map(Ft.parse)));const l=e.match(Lo);return l&&(e=e.replace(Lo,Pf),n.push(...l.map(zo.parse))),{values:n,numColors:s,tokenised:e}}function Bf(e){return Hf(e).values}function Lf(e){const{values:n,numColors:s,tokenised:o}=Hf(e),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?If:Pf,i<s?Ft.transform(r[i]):Fo(r[i]));return a}}const jS=e=>typeof e=="number"?0:e;function DS(e){const n=Bf(e);return Lf(e)(n.map(jS))}const Ko={test:MS,parse:Bf,createTransformer:Lf,getAnimatableNone:DS},NS=new Set(["brightness","contrast","saturate","opacity"]);function VS(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(Lo)||[];if(!o)return e;const l=s.replace(o,"");let r=NS.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const JS=/([a-z-]*)\(.*?\)/g,Ha=Object.assign(Object.assign({},Ko),{getAnimatableNone:e=>{const n=e.match(JS);return n?n.map(VS).join(" "):e}});function Or(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function Eu({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;l=Or(c,i,e+1/3),r=Or(c,i,e),a=Or(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const US=(e,n,s)=>{const o=e*e,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},qS=[Pa,En,Gn],Au=e=>qS.find(n=>n.test(e)),$u=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Mf=(e,n)=>{let s=Au(e),o=Au(n);Bo(!!s,$u(e)),Bo(!!o,$u(n));let l=s.parse(e),r=o.parse(n);s===Gn&&(l=Eu(l),s=En),o===Gn&&(r=Eu(r),o=En);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=US(l[c],r[c],i));return a.alpha=Ci(l.alpha,r.alpha,i),s.transform(a)}},XS=e=>typeof e=="number",WS=(e,n)=>s=>n(e(s)),jf=(...e)=>e.reduce(WS);function Df(e,n){return XS(e)?s=>Ci(e,n,s):Ft.test(e)?Mf(e,n):Vf(e,n)}const Nf=(e,n)=>{const s=[...e],o=s.length,l=e.map((r,a)=>Df(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},zS=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const l in s)e[l]!==void 0&&n[l]!==void 0&&(o[l]=Df(e[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function Ru(e){const n=Ko.parse(e),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Vf=(e,n)=>{const s=Ko.createTransformer(n),o=Ru(e),l=Ru(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?jf(Nf(o.parsed,l.parsed),s):(bi(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:e}`)},KS=(e,n)=>s=>Ci(e,n,s);function YS(e){if(typeof e=="number")return KS;if(typeof e=="string")return Ft.test(e)?Mf:Vf;if(Array.isArray(e))return Nf;if(typeof e=="object")return zS}function ZS(e,n,s){const o=[],l=s||YS(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=jf(c,i)}o.push(i)}return o}function GS([e,n],[s]){return o=>s(Rf(e,n,o))}function QS(e,n){const s=e.length,o=s-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>l||c===o);c++);r=c-1}const i=Rf(e[r],e[r+1],l);return n[r](i)}}function Jf(e,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=e.length;Bo(r===n.length,"Both input and output ranges must be the same length"),Bo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=ZS(n,o,l),i=r===2?GS(e,a):QS(e,a);return s?c=>i(Ta(e[0],e[r-1],c)):i}const or=e=>n=>1-e(1-n),Ei=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,eE=e=>n=>Math.pow(n,e),Uf=e=>n=>n*n*((e+1)*n-e),tE=e=>{const n=Uf(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},qf=1.525,nE=4/11,sE=8/11,oE=9/10,Xf=e=>e,Ai=eE(2),lE=or(Ai),Wf=Ei(Ai),zf=e=>1-Math.sin(Math.acos(e)),Kf=or(zf),rE=Ei(Kf),$i=Uf(qf),aE=or($i),iE=Ei($i),cE=tE(qf),uE=4356/361,pE=35442/1805,dE=16061/1805,Bl=e=>{if(e===1||e===0)return e;const n=e*e;return e<nE?7.5625*n:e<sE?9.075*n-9.9*e+3.4:e<oE?uE*n-pE*e+dE:10.8*e*e-20.52*e+10.72},fE=or(Bl),FE=e=>e<.5?.5*(1-Bl(1-e*2)):.5*Bl(e*2-1)+.5;function hE(e,n){return e.map(()=>n||Wf).splice(0,e.length-1)}function mE(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function yE(e,n){return e.map(s=>s*n)}function gl({from:e=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=yE(o&&o.length===a.length?o:mE(a),l);function c(){return Jf(i,a,{ease:Array.isArray(s)?s:hE(a,s)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function gE({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=r===void 0?c:r(c);return u!==c&&(i=u-n),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const Tu={keyframes:gl,spring:ki,decay:gE};function vE(e){if(Array.isArray(e.to))return gl;if(Tu[e.type])return Tu[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?gl:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ki:gl}function Yf(e,n,s=0){return e-n-s}function _E(e,n,s=0,o=!0){return o?Yf(n+-e,n,s):n-(e-n)+s}function xE(e,n,s,o){return o?e>=n+s:e<=-s}const bE=e=>{const n=({delta:s})=>e(s);return{start:()=>Ra.update(n,!0),stop:()=>kS.update(n)}};function Zf(e){var n,s,{from:o,autoplay:l=!0,driver:r=bE,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:F,onRepeat:h,onUpdate:m}=e,g=$f(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=g,k,x=0,b=g.duration,w,T=!1,H=!0,N;const $=vE(g);!((s=(n=$).needsInterpolation)===null||s===void 0)&&s.call(n,o,v)&&(N=Jf([0,100],[o,v],{clamp:!1}),o=0,v=100);const j=$(Object.assign(Object.assign({},g),{from:o,to:v}));function Z(){x++,c==="reverse"?(H=x%2===0,a=_E(a,b,u,H)):(a=Yf(a,b,u),c==="mirror"&&j.flipTarget()),T=!1,h&&h()}function ie(){k.stop(),F&&F()}function q(Te){if(H||(Te=-Te),a+=Te,!T){const Xe=j.next(Math.max(0,a));w=Xe.value,N&&(w=N(w)),T=H?Xe.done:a<=0}m==null||m(w),T&&(x===0&&(b??(b=a)),x<i?xE(a,b,u,H)&&Z():ie())}function ce(){d==null||d(),k=r(q),k.start()}return l&&ce(),{stop:()=>{f==null||f(),k.stop()}}}function Gf(e,n){return n?e*(1e3/n):0}function kE({from:e=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:F,onStop:h}){let m;function g(b){return s!==void 0&&b<s||o!==void 0&&b>o}function v(b){return s===void 0?o:o===void 0||Math.abs(s-b)<Math.abs(o-b)?s:o}function k(b){m==null||m.stop(),m=Zf(Object.assign(Object.assign({},b),{driver:d,onUpdate:w=>{var T;f==null||f(w),(T=b.onUpdate)===null||T===void 0||T.call(b,w)},onComplete:F,onStop:h}))}function x(b){k(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},b))}if(g(e))x({from:e,velocity:n,to:v(e)});else{let b=l*n+e;typeof u<"u"&&(b=u(b));const w=v(b),T=w===s?-1:1;let H,N;const $=j=>{H=N,N=j,n=Gf(j-H,Af().delta),(T===1&&j>w||T===-1&&j<w)&&x({from:j,to:w,velocity:n})};k({type:"decay",from:e,velocity:n,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:g(b)?$:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Qf=(e,n)=>1-3*n+3*e,eF=(e,n)=>3*n-6*e,tF=e=>3*e,Ll=(e,n,s)=>((Qf(n,s)*e+eF(n,s))*e+tF(n))*e,nF=(e,n,s)=>3*Qf(n,s)*e*e+2*eF(n,s)*e+tF(n),CE=1e-7,wE=10;function SE(e,n,s,o,l){let r,a,i=0;do a=n+(s-n)/2,r=Ll(a,o,l)-e,r>0?s=a:n=a;while(Math.abs(r)>CE&&++i<wE);return a}const EE=8,AE=.001;function $E(e,n,s,o){for(let l=0;l<EE;++l){const r=nF(n,s,o);if(r===0)return n;const a=Ll(n,s,o)-e;n-=a/r}return n}const vl=11,il=1/(vl-1);function RE(e,n,s,o){if(e===n&&s===o)return Xf;const l=new Float32Array(vl);for(let a=0;a<vl;++a)l[a]=Ll(a*il,e,s);function r(a){let i=0,c=1;const u=vl-1;for(;c!==u&&l[c]<=a;++c)i+=il;--c;const d=(a-l[c])/(l[c+1]-l[c]),f=i+d*il,F=nF(f,e,s);return F>=AE?$E(a,f,e,s):F===0?f:SE(a,i,i+il,e,s)}return a=>a===0||a===1?a:Ll(r(a),n,o)}const Ir={};class TE{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}const Ou=e=>!isNaN(parseFloat(e));class OE{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new TE,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=Af();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ra.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ra.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Ou(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Ou(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Gf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function IE(e){return new OE(e)}const{isArray:PE}=Array;function HE(){const e=U({}),n=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?PE(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},s=(o,l,r)=>{if(e.value[o])return e.value[o];const a=IE(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return tv(n),{motionValues:e,get:s,stop:n}}const BE=e=>Array.isArray(e),Jn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Pr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),LE=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Hr=()=>({type:"keyframes",ease:"linear",duration:300}),ME=e=>({type:"keyframes",duration:800,values:e}),Iu={default:LE,x:Jn,y:Jn,z:Jn,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scaleX:Pr,scaleY:Pr,scale:Pr,backgroundColor:Hr,color:Hr,opacity:Hr},sF=(e,n)=>{let s;return BE(n)?s=ME:s=Iu[e]||Iu.default,{to:n,...s(n)}},Pu={...zo,transform:Math.round},oF={color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,size:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:Vn,skewX:Vn,skewY:Vn,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:ho,originX:Su,originY:Su,originZ:he,zIndex:Pu,filter:Ha,WebkitFilter:Ha,fillOpacity:ho,strokeOpacity:ho,numOctaves:Pu},Ri=e=>oF[e],lF=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function jE(e,n){let s=Ri(e);return s!==Ha&&(s=Ko),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const DE={linear:Xf,easeIn:Ai,easeInOut:Wf,easeOut:lE,circIn:zf,circInOut:rE,circOut:Kf,backIn:$i,backInOut:iE,backOut:aE,anticipate:cE,bounceIn:fE,bounceInOut:FE,bounceOut:Bl},Hu=e=>{if(Array.isArray(e)){const[n,s,o,l]=e;return RE(n,s,o,l)}else if(typeof e=="string")return DE[e];return e},NE=e=>Array.isArray(e)&&typeof e[0]!="number",Bu=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Ko.test(n)&&!n.startsWith("url("));function VE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function JE({ease:e,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),e&&(l.ease=NE(e)?e.map(Hu):Hu(e)),s&&(l.elapsed=-s),l}function UE(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),VE(n),qE(e)||(e={...e,...sF(s,n.to)}),{...n,...JE(e)}}function qE({delay:e,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function XE(e,n){return e[n]||e.default||e}function WE(e,n,s,o,l){const r=XE(o,e);let a=r.from===null||r.from===void 0?n.get():r.from;const i=Bu(e,s);a==="none"&&i&&typeof s=="string"&&(a=jE(e,s));const c=Bu(e,a);function u(f){const F={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?kE({...F,...r}):Zf({...UE(r,F,e),onUpdate:h=>{F.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function zE(){const{motionValues:e,stop:n,get:s}=HE();return{motionValues:e,stop:n,push:(l,r,a,i={},c)=>{const u=a[l],d=s(l,u,a);if(i&&i.immediate){d.set(r);return}const f=WE(l,d,r,i,c);d.start(f)}}}function KE(e,n={},{motionValues:s,push:o,stop:l}=zE()){const r=C(n),a=U(!1);me(s,f=>{a.value=Object.values(f).filter(F=>F.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([F,h])=>{if(F!=="transition")return new Promise(m=>o(F,h,e,f.transition||sF(F,f[F]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const F=ca(f)?f:i(f);Object.entries(F).forEach(([h,m])=>{h!=="transition"&&o(h,m,e,{immediate:!0})})},leave:async f=>{let F;if(r&&(r.leave&&(F=r.leave),!r.leave&&r.initial&&(F=r.initial)),!F){f();return}await c(F),f()},stop:l}}const Ti=typeof window<"u",YE=()=>Ti&&window.onpointerdown===null,ZE=()=>Ti&&window.ontouchstart===null,GE=()=>Ti&&window.onmousedown===null;function QE({target:e,state:n,variants:s,apply:o}){const l=C(s),r=U(!1),a=U(!1),i=U(!1),c=R(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=R(()=>{const d={};Object.assign(d,n.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(xe(e,"mouseenter",()=>r.value=!0),xe(e,"mouseleave",()=>{r.value=!1,a.value=!1}),xe(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(GE()&&(xe(e,"mousedown",()=>a.value=!0),xe(e,"mouseup",()=>a.value=!1)),YE()&&(xe(e,"pointerdown",()=>a.value=!0),xe(e,"pointerup",()=>a.value=!1)),ZE()&&(xe(e,"touchstart",()=>a.value=!0),xe(e,"touchend",()=>a.value=!1))),l.focused&&(xe(e,"focus",()=>i.value=!0),xe(e,"blur",()=>i.value=!1)),me(u,o)}function e9({set:e,target:n,apply:s,variants:o,variant:l}){const r=C(o);me(()=>n,()=>{r&&(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function t9({state:e,apply:n}){me(e,s=>{s&&n(s)},{immediate:!0})}function n9({target:e,variants:n,variant:s}){const o=C(n);o&&(o.visible||o.visibleOnce)&&Uv(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function s9(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&e9(e),n.syncVariants&&t9(e),n.visibilityHooks&&n9(e),n.eventListeners&&QE(e)}function rF(e={}){const n=Ne({...e}),s=U({});return me(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=Ri(l),i=lF(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function Oi(e,n){me(()=>wt(e),s=>{s&&n(s)},{immediate:!0})}const o9={x:"translateX",y:"translateY",z:"translateZ"};function aF(e={},n=!0){const s=Ne({...e}),o=U("");return me(s,l=>{let r="",a=!1;if(n&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(he.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Ri(i),d=lF(c,u);r+=`${o9[i]||i}(${d}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const l9=["","X","Y","Z"],r9=["perspective","translate","scale","rotate","skew"],iF=["transformPerspective","x","y","z"];r9.forEach(e=>{l9.forEach(n=>{const s=e+n;iF.push(s)})});const a9=new Set(iF);function Ii(e){return a9.has(e)}const i9=new Set(["originX","originY","originZ"]);function cF(e){return i9.has(e)}function c9(e){const n={},s={};return Object.entries(e).forEach(([o,l])=>{Ii(o)||cF(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function uF(e){const{transform:n,style:s}=c9(e),{transform:o}=aF(n),{style:l}=rF(s);return o.value&&(l.value.transform=o.value),l.value}function u9(e,n){let s,o;const{state:l,style:r}=rF();return Oi(e,a=>{o=a;for(const i of Object.keys(oF))a.style[i]===null||a.style[i]===""||Ii(i)||cF(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(l)}),me(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function p9(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function d9(e,n){Object.entries(p9(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function f9(e,n){let s,o;const{state:l,transform:r}=aF();return Oi(e,a=>{o=a,a.style.transform&&d9(l,a.style.transform),s&&(a.style.transform=s),n&&n(l)}),me(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function F9(e,n){const s=Ne({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=u9(e,o),{transform:r}=f9(e,o);return me(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=Ii(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),Oi(e,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function h9(e={}){const n=C(e),s=U();return{state:R(()=>{if(s.value)return n[s.value]}),variant:s}}function pF(e,n={},s){const{motionProperties:o}=F9(e),{variant:l,state:r}=h9(n),a=KE(o,n),i={target:e,variant:l,variants:n,state:r,motionProperties:o,...a};return s9(i,s),i}const m9=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],y9=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&ca(s.variants)&&(n.value={...n.value,...s.variants}),m9.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Wg(s[o])){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&ca(s[o])&&(n.value[o]=s[o])}))},Br=e=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Ir[r]&&Ir[r].stop();const a=U(e||{});typeof o.value=="object"&&(a.value=o.value),y9(l,a);const i=pF(s,a);s.motionInstance=i,r&&(Ir[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=C(l);const r=vS((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:uF(r)}}}),g9={initial:{opacity:0},enter:{opacity:1}},v9={initial:{opacity:0},visible:{opacity:1}},_9={initial:{opacity:0},visibleOnce:{opacity:1}},x9={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},b9={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},k9={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},C9={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},w9={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},S9={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},E9={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},A9={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$9={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},R9={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},T9={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},O9={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},I9={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},P9={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},H9={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},B9={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},L9={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},M9={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},j9={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},D9={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},N9={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},V9={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},J9={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},U9={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},q9={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},X9={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},W9={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ba={__proto__:null,fade:g9,fadeVisible:v9,fadeVisibleOnce:_9,pop:x9,popVisible:b9,popVisibleOnce:k9,rollBottom:I9,rollLeft:C9,rollRight:E9,rollTop:R9,rollVisibleBottom:P9,rollVisibleLeft:w9,rollVisibleOnceBottom:H9,rollVisibleOnceLeft:S9,rollVisibleOnceRight:$9,rollVisibleOnceTop:O9,rollVisibleRight:A9,rollVisibleTop:T9,slideBottom:q9,slideLeft:B9,slideRight:j9,slideTop:V9,slideVisibleBottom:X9,slideVisibleLeft:L9,slideVisibleOnceBottom:W9,slideVisibleOnceLeft:M9,slideVisibleOnceRight:N9,slideVisibleOnceTop:U9,slideVisibleRight:D9,slideVisibleTop:J9},z9=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=Xm(),s=Ne({});if(!e.is&&!n.default)return()=>Ge("div",{});const o=R(()=>{let c;return e.preset&&(c=Ba[e.preset]),c}),l=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=R(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=R(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Zu(c)&&(c=Ps(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,F,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(F=u.variants)!=null&&F.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Yl(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:e,motionConfig:n,instances:s,component:o}){var i;const l=uF(n.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=pF(d,n);s[u]=f},c);if(o){const c=Ge(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>r(c,u))}});function K9(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Y9={install(e,n){if(e.directive("motion",Br()),e.component("Motion",z9),!n||n&&!n.excludePresets)for(const s in Ba){const o=Ba[s];e.directive(`motion-${K9(s)}`,Br(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Br(o))}}};var Lu;const yo=typeof window<"u",Z9=Object.prototype.toString,G9=e=>Z9.call(e)==="[object Object]";yo&&((Lu=window==null?void 0:window.navigator)!=null&&Lu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Q9(e){return Va()?(rp(e),!0):!1}function eA(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const tA=yo?window:void 0,Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ju="__vueuse_ssr_handlers__";Mu[ju]=Mu[ju]||{};function nA(e,n={}){const{immediate:s=!0,window:o=tA}=n,l=U(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),Q9(c),{isActive:l,pause:c,resume:i}}var Du;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Du||(Du={}));const lr="vue-starport-injection",dF="vue-starport-options",sA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},fF={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var oA=Object.defineProperty,Ml=Object.getOwnPropertySymbols,FF=Object.prototype.hasOwnProperty,hF=Object.prototype.propertyIsEnumerable,Nu=(e,n,s)=>n in e?oA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,lA=(e,n)=>{for(var s in n||(n={}))FF.call(n,s)&&Nu(e,s,n[s]);if(Ml)for(var s of Ml(n))hF.call(n,s)&&Nu(e,s,n[s]);return e},Vu=(e,n)=>{var s={};for(var o in e)FF.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ml)for(var o of Ml(e))n.indexOf(o)<0&&hF.call(e,o)&&(s[o]=e[o]);return s};const rA=we({name:"StarportProxy",props:lA({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},fF),setup(e,n){const s=K(lr),o=R(()=>s.getInstance(e.port,e.component)),l=U(),r=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),ds(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await tt(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Vo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await tt(),await tt(),!o.value.el&&s.dispose(o.value.port))}),me(()=>e,async()=>{o.value.props&&await tt();const i=e,{props:c}=i,u=Vu(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,d=Vu(i,["initialProps","mountedProps"]),f=We(d,(a.value?u:c)||{});return Ge("div",We(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Ge(n.slots.default):void 0)}}});var aA=Object.defineProperty,iA=Object.defineProperties,cA=Object.getOwnPropertyDescriptors,Ju=Object.getOwnPropertySymbols,uA=Object.prototype.hasOwnProperty,pA=Object.prototype.propertyIsEnumerable,Uu=(e,n,s)=>n in e?aA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,dA=(e,n)=>{for(var s in n||(n={}))uA.call(n,s)&&Uu(e,s,n[s]);if(Ju)for(var s of Ju(n))pA.call(n,s)&&Uu(e,s,n[s]);return e},fA=(e,n)=>iA(e,cA(n));const FA=we({name:"Starport",inheritAttrs:!0,props:fF,setup(e,n){const s=U(!1);return ds(()=>{if(s.value=!0,!K(lr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!G9(r)||Qt(r))&&(r={render(){return o}}),Ge(rA,fA(dA({},e),{key:e.port,component:Ul(r),props:l.props}))}}});function hA(e){const n=Ne({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=yo?document.documentElement||document.body:void 0;function o(){if(!yo)return;const i=eA(e);if(!i)return;const{height:c,width:u,left:d,top:f}=i.getBoundingClientRect(),F=window.getComputedStyle(i),h=F.margin,m=F.padding;Object.assign(n,{height:c,width:u,left:d,top:s.scrollTop+f,margin:h,padding:m})}const l=nA(o,{immediate:!1});function r(){yo&&(o(),l.resume())}function a(){l.pause()}return n}let mA=(e,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=e[Math.random()*e.length|0];return o};const qu=mA("abcdefghijklmnopqrstuvwxyz",5);function Xu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function yA(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var gA=Object.defineProperty,Wu=Object.getOwnPropertySymbols,vA=Object.prototype.hasOwnProperty,_A=Object.prototype.propertyIsEnumerable,zu=(e,n,s)=>n in e?gA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Lr=(e,n)=>{for(var s in n||(n={}))vA.call(n,s)&&zu(e,s,n[s]);if(Wu)for(var s of Wu(n))_A.call(n,s)&&zu(e,s,n[s]);return e};function xA(e,n,s={}){const o=yA(n),l=Xu(o)||qu(),r=U(),a=U(null),i=U(!1),c=U(!1),u=OF(!0),d=U({}),f=R(()=>Lr(Lr(Lr({},sA),s),d.value)),F=U(0);let h;u.run(()=>{h=hA(r),me(r,async k=>{k&&(c.value=!0),await tt(),r.value||(c.value=!1)})});const m=Xu(e);function g(){return`starport-${l}-${m}-${qu()}`}const v=g();return Ne({el:r,id:v,port:e,props:a,rect:h,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:F,component:n,componentName:o,componentId:l,generateId:g,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return r},liftOff(){i.value&&(i.value=!1,F.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function bA(e){const n=Ne(new Map);function s(l,r){let a=n.get(l);return a||(a=xA(l,r,e),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var kA=Object.defineProperty,CA=Object.defineProperties,wA=Object.getOwnPropertyDescriptors,Ku=Object.getOwnPropertySymbols,SA=Object.prototype.hasOwnProperty,EA=Object.prototype.propertyIsEnumerable,Yu=(e,n,s)=>n in e?kA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,AA=(e,n)=>{for(var s in n||(n={}))SA.call(n,s)&&Yu(e,s,n[s]);if(Ku)for(var s of Ku(n))EA.call(n,s)&&Yu(e,s,n[s]);return e},$A=(e,n)=>CA(e,wA(n));const RA=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=K(lr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=R(()=>n.getInstance(e.port,e.component)),o=R(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=R(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?$A(AA({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Ge("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Ge(Om,{to:a?`#${o.value}`:"body",disabled:!a},Ge(s.value.component,We(r,s.value.props))))}}}),TA=we({name:"StarportCarrier",setup(e,{slots:n}){const s=bA(K(dF,{}));return At().appContext.app.provide(lr,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Ge(RA,{key:r,port:r,component:a}))]}}});function OA(e={}){return{install(n){n.provide(dF,e),n.component("Starport",FA),n.component("StarportCarrier",TA)}}}function IA(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(Y9),e.app.use(OA({keepAlive:!0}))}function _t(e,n,s){var o;return((o=e.instance)==null?void 0:o.$).provides[n]??s}function PA(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,F,h,m,g;if(fo.value||(d=_t(s,io))!=null&&d.value)return;const o=_t(s,zn),l=_t(s,ao),r=_t(s,aa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?Ag:gr;if(o&&!((F=o==null?void 0:o.value)!=null&&F.includes(n))&&o.value.push(n),s.value==null&&(s.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((g=r==null?void 0:r.value.get(s.value))!=null&&g.includes(n))){const v=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(v))}n==null||n.classList.toggle(Xn,!0),l&&me(l,()=>{const v=(l==null?void 0:l.value)??0,k=s.value!=null?v>=s.value:v>c;n.classList.contains(vr)||n.classList.toggle(u,!k),a!==!1&&a!==void 0&&n.classList.toggle(u,k),n.classList.toggle(qs,!1);const x=r==null?void 0:r.value.get(v);x==null||x.forEach((b,w)=>{b.classList.toggle(ll,!1),w===x.length-1?b.classList.toggle(qs,!0):b.classList.toggle(ll,!0)}),n.classList.contains(qs)||n.classList.toggle(ll,k)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Xn,!1);const o=_t(s,zn);o!=null&&o.value&&ia(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c;if(fo.value||(i=_t(s,io))!=null&&i.value)return;const o=_t(s,zn),l=_t(s,ao),r=_t(s,aa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(Xn,!0),l&&me(l,()=>{const u=(l.value??0)>=(s.value??a??0);n.classList.contains(vr)||n.classList.toggle(gr,!u),n.classList.toggle(qs,!1),n.classList.contains(qs)||n.classList.toggle(ll,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(Xn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(fo.value||(a=_t(s,io))!=null&&a.value)return;const o=_t(s,zn),l=_t(s,ao),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(Xn,!0),l&&me(l,()=>{const u=(l==null?void 0:l.value)??0,d=s.value!=null?u>=s.value:u>r;n.classList.toggle(gr,d),n.classList.toggle(vr,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Xn,!1);const o=_t(s,zn);o!=null&&o.value&&ia(o.value,n)}})}}}function HA(e,n){const s=gf(e),o=vf(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Se,themeConfigs:R(()=>Se.themeConfig)}}function BA(){return{install(e){const n=HA(Pt,Ot);e.provide(se,Ne(n))}}}const js=$y(yS);js.use(mt);js.use(wg());js.use(PA());js.use(BA());IA({app:js,router:mt});js.mount("#app");export{X2 as $,u2 as A,U as B,jA as C,ct as D,Oe as E,Ae as F,C_ as G,uS as H,Ot as I,Hl as J,lS as K,Ar as L,ds as M,Ne as N,LA as O,DA as P,me as Q,Q as R,af as S,$e as T,it as U,L_ as V,Bh as W,Lh as X,Ro as Y,wr as Z,le as _,se as a,hi as a0,mi as a1,Ue as a2,N2 as a3,K_ as a4,ri as b,Se as c,we as d,fh as e,z as f,t as g,C as h,K as i,Ke as j,Cf as k,p as l,X as m,pt as n,E as o,ye as p,ii as q,Jo as r,Jt as s,rs as t,MA as u,R as v,_r as w,ne as x,Qd as y,h2 as z};
